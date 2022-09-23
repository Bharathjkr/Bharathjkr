var express = require('express');
var router = require('./route');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

var app = express();

mongoose.connect('mongodb://localhost:27017/schooldb', (err) => {
    if (err) console.log(err)
    else console.log("Database connected")
});

app.use(bodyParser.json())


app.use("/home", require('./route'));

app.listen(3000, (err) => { 
    if (err) console.log('err',err)
    else console.log('server started')

});