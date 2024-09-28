require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const userRoutes = require('./routes/userRoutes');
const workerRoutes = require('./routes/workerRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
const connect = () => {
    return mongoose.connect(process.env.MONGODB_URI);
};

// Use CORS middleware
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); // Enable CORS for all routes

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Listening at http://localhost:${PORT}`);
    } catch (error) {
        console.log('MongoDB connection error:', error.message);
    }
});
