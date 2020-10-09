var express = require("express");
var app = express();
var path = require('path')

const port = process.env.PORT || 3000

app.set('views', './views')
app.set('view engine', 'pug')

app.use("/public", express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'It is working' })
  })



app.listen(port, () => {
 console.log("Server running on port 3000");
});

