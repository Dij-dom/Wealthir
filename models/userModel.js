const mongoose = require('mongoose');
const { accountSchema } = require('./accountsModel');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    accounts: [accountSchema],
    categories: [{
        name: String,
    }],
    lastLogin: {
        type: Date,
        default: Date.now,
    },
    loginCount: {
        type: Number,
        default: 0,
    },
    health: {
        type: Number,
        default: 100,
    },
    experience: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 1,
    },
}, {timestamps: true});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
