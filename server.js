const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');

//config dot env file
dotenv.config()

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome to ExpenseXp<h1>');
});

const PORT = 8080 || express.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}...`);
});