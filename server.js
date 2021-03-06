
var express = require('express');
var path = require('path');
var app = module.exports = express();

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.static(path.join(__dirname, 'public')));
});

var port = process.env.PORT || 4000;
app.listen(port);
