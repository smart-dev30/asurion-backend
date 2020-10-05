var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
    res.send("Asurion Test Backend")
});

app.get('/config', function (req, res) {
    fs.readFile('/data/config.json', (err, data) => {
        res.send(data)
    });
});

app.get('/pets', function (req, res) {
    fs.readFile('/data/pets.json', (err, data) => {
        res.send(data)
    });
});

var server = app.listen(process.env.PORT ||3000, function () { });