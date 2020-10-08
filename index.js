var app = require('app')

app.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Hello World!")
}).listen(process.env.PORT)

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })