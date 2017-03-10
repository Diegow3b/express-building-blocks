var express = require('express');
var app = express();
var port = 3000;
var logger = require('./logger');

app.use(logger);
app.use(express.static('public'));

var blocks = require('./routes/blocks');
app.use('/blocks', blocks)

app.listen(port, function(){
    console.log('Listening at port %d', port)
});