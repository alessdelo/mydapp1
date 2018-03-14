var express = require('express');
var app = express();
var path = require('path');

const PORT = process.env.PORT || 5000


app.get('/', function(req, res) {
    // res.sendFile(path.join(__dirname + '/index1.html'));
    res.sendFile(path.join('index.html'));
});

app.listen(PORT);
