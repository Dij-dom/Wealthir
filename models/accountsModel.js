const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    }
});

const accountModel = mongoose.model('Accounts', accountSchema);

module.exports = {accountModel, accountSchema};
