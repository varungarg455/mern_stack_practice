const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();

const app = express();
const PORT = 4000;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json);

//Connection to mongo db database
mongoose.connect('mongodb://admin:Inspiron1525@ds331758.mlab.com:31758/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function(){
    console.log('MongoDB database connection established successfully');
});

app.listen(PORT, function(){
    console.log(`Server is running on PORT : ${PORT}`);
});