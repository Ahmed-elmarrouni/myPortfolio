const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import models
const Project = require('./models/projects');
const Skill = require('./models/skills');
const Tool = require('./models/tools');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors()); 

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portfolioDB')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

// ****************************** Routes for projects ************************************************************
app.get('/getProjects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).send(err);
    }
});

// ****************************** Routes for skills ************************************************************
app.get('/getSkills', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).send(err);
    }
});

// ****************************** Routes for tools ************************************************************
app.get('/getTools', async (req, res) => {
    try {
        const tools = await Tool.find();
        res.json(tools);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

