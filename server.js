const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get('/', (req, res) =>{
    res.send(`<h1>Hello World</h1>`);
})

//port
const PORT = 8080 || process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Server listening on ${PORT} port`);
});