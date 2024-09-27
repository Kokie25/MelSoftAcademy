const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;

// Middleware to log requests
app.use((req, res, next) => {
    const log = `${Date.now()} : ${req.method} ${req.url} Received\n`;
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error('Error writing to log file');
        }
    });
    next();
});

// Middleware to parse JSON and form data
app.use(express.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// GET route for home page
app.get('/', (req, res) => {
    res.json({ "greeting": "from home page" });
});

// POST route for registration
app.post('/register', (req, res) => {
    const userData = req.body; // assuming the data is sent in the body of the request

    // You can log or handle the posted data
    console.log('User Data:', userData);

    // Send a response
    res.json({ "status": "User registered successfully", "data": userData });
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ "error": "Page not found" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
