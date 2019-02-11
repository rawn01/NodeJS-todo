var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Set up template engine
app.set('view engine', 'ejs');

//Used for static files
app.use(express.static('./public'));

//Start the controller - Real coding goes here
todoController(app);

app.listen(3333);
console.log('Port: 3333 ; localhost:3333/todo');
