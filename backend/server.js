const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const connect = require('./config/db');
require('dotenv').config(); // To load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api', taskRoutes); // Use task routes under /api

// MongoDB connection
connect()
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
// app.listen(PORT, async () => {
//     try {
//         await connect();
//         console.log(`Listening at http://localhost:${PORT}`);
//     }
//     catch ({ message }) {
//         console.log(message);
//     }
// })