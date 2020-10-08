var express = require("express");
var app = express();

const port = process.env.PORT || 3000

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

app.listen(port, () => {
 console.log("Server running on port 3000");
});

