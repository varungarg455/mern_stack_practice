const express = require('express');
const path = require('path');
var logger = require('./middleware/logger');

//initialize express server
const app = express();

//Init middleware
app.use(logger);

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API routes
app.use('/api/members', require('./routes/api/members'));

// app.get('/', (req, res) => {
//     res.send("Hello");
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 5000;

//starting server on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));