const express = require('express');
const {
    getTransaction,
    getTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction
} = require('../controllers/transactionController');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

// Middleware
router.use(requireAuth);

// Get all expenses
router.get('/', getTransactions);

// Get a single expense
router.get('/:id', getTransaction);

// Create an expense
router.post('/', createTransaction);

// Update an expense
router.patch('/:id', updateTransaction);

// Delete an expense
router.delete('/:id',deleteTransaction);


module.exports = router;