const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    skills: [String], // Array of skills
    contactNumber: { type: String, required: true }
}, { timestamps: true });

const Worker = mongoose.model('Worker', WorkerSchema);
module.exports = Worker;
