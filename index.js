var express = require("express");
const path = require('path')
var app = express();

const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })



app.listen(port, () => {
 console.log("Server running on port 3000");
});

