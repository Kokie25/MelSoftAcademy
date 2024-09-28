const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  compensation: {
    type: String, // Assuming compensation is a numeric value
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  isAccepted: { type: Boolean, default: false },
  acceptedBy: { type: String, default: null }
}, { timestamps: true }); // Adding timestamps to track creation and update times

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
