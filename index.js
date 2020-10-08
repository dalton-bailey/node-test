var express = require("express");
var app = express();

const port = process.env.PORT || 3000

app.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Hello World!")
}).listen(port)

// app.set('view engine', 'pug')

// app.get('views', function (req, res) {
//     res.render('index', { title: 'Hey', message: 'Hello there!' })
//   })