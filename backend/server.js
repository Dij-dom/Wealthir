require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const transactionRoutes = require('./routes/transactions');
const userRoutes = require('./routes/user');


// Initialise express app
const app  = express();

//middlewares
app.use(express.json());
app.use(cors());


// routes
app.use('/api/transactions',transactionRoutes);
app.use('/api/users', userRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() =>{
    app.listen(process.env.PORT, () =>{
        console.log('Connected to db and listening on port 4000!');
    });
  })
  .catch((error) => {
        console.log(error);
    });

