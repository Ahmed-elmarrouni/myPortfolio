const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const ProjectModel = require("./models/projects");
const e = require("express");
const { error } = require("console");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017")

app.get("/getProjects", (req, res)=>{
    ProjectModel.find()
    .then(projects => res.json(projects))
    .catch(err => res.json(err));
})

app.listen(3001, () => {
    console.log("Server is runing")
})