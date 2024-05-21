const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    toolName: {
        type: String,
        required: true
    },
    toolSvg: {
        type: String,
        required: true
    }
});

const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;
