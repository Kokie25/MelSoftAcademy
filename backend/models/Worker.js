const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    skills: { type: [String], required: true },
    contactNumber: { type: String, required: true }
});

module.exports = mongoose.model('Worker', workerSchema);
