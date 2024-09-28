const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const Worker = require('../models/Worker');
const { sendEmail } = require('../utils/emailService');
const { getEnhancedDescription } = require('../utils/aiService');

router.post('/', async (req, res) => {
    const { taskName, compensation, description, location, userEmail } = req.body;

    try {
        const improvedDescription = await getEnhancedDescription(description);
        const task = new Task({ taskName, compensation, description: improvedDescription, location, userEmail });
        await task.save();

        // Notify all workers about the new job
        const workers = await Worker.find({});
        for (const worker of workers) {
            // Check if the worker's skills match the job posting (assuming skills are stored in an array)
            if (worker.skills.some(skill => description.includes(skill))) {
                const subject = 'New Job Recommendation';
                const message = `A new task "${taskName}" has been posted that matches your skills! Click to accept: http://your-frontend-url.com/api/tasks/${task._id}/accept?workerEmail=${worker.email}`;
                await sendEmail(worker.email, subject, message);
            }
        }

        return res.status(201).json({ message: 'Task posted successfully', task });
    } catch (err) {
        return res.status(500).json({ message: 'Error posting task', error: err.message });
    }
});

router.put('/:taskId/accept', async (req, res) => {
    const { taskId } = req.params;
    const { workerEmail } = req.query;

    try {
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        if (task.isAccepted) {
            return res.status(400).json({ message: 'Task already accepted' });
        }

        const worker = await Worker.findOne({ email: workerEmail });
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found' });
        }

        task.isAccepted = true;
        task.acceptedBy = workerEmail;
        await task.save();

        // Notify the poster
        const subject = `Your task "${task.taskName}" has been accepted`;
        const message = `Your task "${task.taskName}" has been accepted by ${workerEmail}.`;
        await sendEmail(task.userEmail, subject, message);

        return res.status(200).json({ message: 'Task accepted successfully', task });
    } catch (err) {
        return res.status(500).json({ message: 'Error accepting task', error: err.message });
    }
});

module.exports = router;
