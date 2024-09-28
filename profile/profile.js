const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jobportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Schema for job poster profile
const jobPosterSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  bio: String,
  company: String,
  jobPosition: String,
});

const JobPoster = mongoose.model('JobPoster', jobPosterSchema);

// POST route to save profile
app.post('/api/profiles', async (req, res) => {
  try {
    const newProfile = new JobPoster(req.body);
    await newProfile.save();
    res.status(201).json({ message: 'Profile created', profile: newProfile });
  } catch (error) {
    res.status(500).json({ message: 'Error saving profile', error });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});


/*https://chatgpt.com/c/66f7ccf8-065c-8009-ba64-404992f82dfa*/