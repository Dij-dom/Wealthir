const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type :{
        type: String,
        enum: ['Income', 'Expense'],
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: String,
        required: true
    }, 
    user_id:{
        type: String,
        required: true
    }
}, {timestamps: true});



module.exports = mongoose.model('Transaction', transactionSchema);