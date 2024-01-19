const Transaction = require('../models/transactionModel');
const mongoose = require('mongoose');

// Get all transactions
const getTransactions = async(req, res) =>{
    const user_id = req.user._id
    const transactions = await Transaction.find({user_id}).sort({createdAt: -1});
    res.status(200).json(transactions);
}


// Get a single transaction
const getTransaction = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "No such transaction"});
    }

    const transaction = await Transaction.findById(id);
    
    if (!transaction){
        return res.status(404).json({error: "No such transaction"});
    };

    res.status(200).json(transaction);
}


// Create a transaction
const createTransaction = async (req, res) =>{
    const {title, amount, type, description, date} = req.body;

    try {
        const user_id = req.user._id
        const transaction = await Transaction.create({title, amount, type, description, date, user_id});
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Update a transaction
const updateTransaction = async(req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "No such transaction"});
    }

    const transaction = await Transaction.findByIdAndUpdate({_id: id}, {
        ...req.body
    });

    if(!transaction){
        return res.status(404).json("No such transaction")
    }

    res.status(200).json(transaction)
}

// Delete a transaction
const deleteTransaction = async(req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "No such transaction"});
    };

    const transaction = await Transaction.findOneAndDelete({_id: id});

    if(!transaction){
        return res.status(404).json({message: "No such transaction"});
    }

    res.status(200).json(transaction);
}

module.exports = {
    getTransaction,
    getTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction
}