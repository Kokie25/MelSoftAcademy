const express = require('express');
const Task = require('../models/Task');
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

// Endpoint to create a new task
router.post('/tasks', validateTask, async (req, res) => {
  try {
    const { taskName, compensation, description, location, userEmail } = req.body;
    const newTask = new Task({ taskName, compensation, description, location, userEmail });
    await newTask.save();
    res.status(201).json({ message: 'Task posted successfully!', task: newTask });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to get all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to get all tasks for a specific user
router.get('/tasks/user/:userEmail', async (req, res) => {
  try {
    const tasks = await Task.find({ userEmail: req.params.userEmail });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
