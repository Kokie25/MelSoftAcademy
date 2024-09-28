const express = require('express');
const Task = require('../models/Task');
const Worker = require('../models/Worker');
const sendEmail = require('../utils/emailService');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Validation middleware for task creation
const validateTask = [
  body('taskName').notEmpty().withMessage('Task name is required'),
  body('compensation').notEmpty().withMessage('Compensation is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('userEmail').isEmail().withMessage('Valid email is required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];


// Post a new task
router.post('/tasks', async (req, res) => {
    const { taskName, compensation, description, location, userEmail } = req.body;

    try {
        // Create and save the new task
        const task = new Task({ taskName, compensation, description, location, userEmail });
        await task.save();

        // Retrieve all workers from the database
        const workers = await Worker.find();
        const workerEmails = workers.map(worker => worker.email);

        // Send an email to each worker
        const subject = `New Task Posted: ${taskName}`;
        const message = `Hello,\n\nA new task "${taskName}" has been posted.\n\nLocation: ${location}\nCompensation: $${compensation}\nDescription: ${description}\n\nIf you're interested, click the following link to accept the task:\n\n` + 
`http://placeholder/api/tasks/${task._id}/accept?workerEmail=${worker.email}`;

        await Promise.all(workerEmails.map(email => sendEmail(email, subject, message)));

        return res.status(201).json({ message: 'Task posted and workers notified', task });
    } catch (err) {
        return res.status(500).json({ message: 'Error posting task or notifying workers', error: err.message });
    }
});


// Get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
    } catch (err) {
        return res.status(500).json({ message: 'Error retrieving tasks', error: err.message });
    }
});

// Get tasks by user
router.get('/tasks/user/:userEmail', async (req, res) => {
    const { userEmail } = req.params;

    try {
        const tasks = await Task.find({ userEmail });
        return res.status(200).json(tasks);
    } catch (err) {
        return res.status(500).json({ message: 'Error retrieving tasks', error: err.message });
    }
});


// Accept a task
router.put('/tasks/:taskId/accept', async (req, res) => {
    const { taskId } = req.params;
    const { workerEmail } = req.query; // Worker who is accepting the task

    try {
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        if (task.isAccepted) {
            return res.status(400).json({ message: 'Task already accepted' });
        }

        // Check if the worker exists
        const worker = await Worker.findOne({ email: workerEmail });
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found' });
        }

        // Mark the task as accepted
        task.isAccepted = true;
        task.acceptedBy = workerEmail; // Assign worker's email to acceptedBy
        await task.save();

        // Notify the job poster that the task has been accepted
        const subject = `Your task "${task.taskName}" has been accepted`;
        const message = `Hello,\n\nYour task "${task.taskName}" has been accepted by ${workerEmail}. Please contact them for further details.`;

        await sendEmail(task.userEmail, subject, message);

        return res.status(200).json({ message: 'Task accepted successfully', task });
    } catch (err) {
        return res.status(500).json({ message: 'Error accepting task', error: err.message });
    }
});



module.exports = router;
