const express = require('express');
const router = express.Router();
const Worker = require('../models/Worker');

// Register a new worker
router.post('/register', async (req, res) => {
    const { name, email, skills, contactNumber } = req.body;

    try {
        // Create and save a new worker
        const worker = new Worker({ name, email, skills, contactNumber });
        await worker.save();

        return res.status(201).json({ message: 'Worker registered successfully', worker });
    } catch (err) {
        return res.status(500).json({ message: 'Error registering worker', error: err.message });
    }
});

module.exports = router;
