const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    projectTitle: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imgpath: {
        type: String,
        required: true,
        default: "./noImage.png"
    },
    description: {
        type: String,
        required: true
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
