const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    skillName: {
        type: String,
        required: true
    },
    skillSvg: {
        type: String,
        required: true
    }
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
