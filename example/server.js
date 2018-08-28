var express = require('express')
var app = express()

app.use(express.bodyParser())
app.use('/static', express.static(__dirname))
app.get('/body', (req, res) => {
  res.send(req.body)
})
