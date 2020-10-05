var express = require('express');
var app = express();

const configJson = require('./data/config.json')
const petsJson = require('./data/pets.json')

app.get('/', function (req, res) {
    res.send("Asurion Test Backend")
});

app.get('/config', function (req, res) {
    res.send(configJson)
});

app.get('/pets', function (req, res) {
    res.send(petsJson)
});

var server = app.listen(process.env.PORT ||3000, function () { });