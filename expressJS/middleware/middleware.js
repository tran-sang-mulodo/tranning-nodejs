var express = require('express');
var app = express();

// Middleware function to log request protocol
app.use('/things',function (req, res, next) {
    console.log("A new request received at " + Date.now());
    next();
});

// Route handler that sends the response
app.get('/things', function (req, res) {
    res.send('Things');
});

app.listen(3000);