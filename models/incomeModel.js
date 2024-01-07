const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // Add other properties as needed
});

const incomeModel = mongoose.model('Income', incomeSchema);

module.exports = incomeModel;
