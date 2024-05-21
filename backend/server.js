const express = require('express');
const mongoose = require('mongoose');

// Import models
const Project = require('./models/projects');
const Skill = require('./models/skills');
const Tool = require('./models/tools');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portfolioDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Routes for projects
app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/projects', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).send(err);
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
