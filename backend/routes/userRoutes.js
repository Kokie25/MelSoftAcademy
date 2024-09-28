const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Validation middleware
const validateUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('skills').isArray().withMessage('Skills must be an array'),
  body('contactNumber').notEmpty().withMessage('Contact number is required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Registration endpoint
router.post('/register', validateUser, async (req, res) => {
  try {
    const { name, email, location, skills, contactNumber } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, location, skills, contactNumber });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Profile endpoint
router.get('/profile/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update profile endpoint
router.put('/profile/:email', validateUser, async (req, res) => {
  try {
    const { email } = req.params;
    const { name, location, skills, contactNumber } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { name, location, skills, contactNumber },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully!', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
