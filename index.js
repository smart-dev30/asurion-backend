var express = require('express');
var app = express();
var fs = require('fs');

app.get('/config', function (req, res) {
    fs.readFile('data/config.json', (err, data) => {
        res.send(JSON.parse(data))
    });
});

app.get('/pets', function (req, res) {
    fs.readFile('data/pets.json', (err, data) => {
        res.send(JSON.parse(data))
    });
});

var server = app.listen(3000, function () { });