var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var port = 9999

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

  .use('/json', (req, res) => {
    res.send(req.body)
  })

  .use('/text', (req, res) => {
    res.send('xxxxx')
  })

  .use('/badjson', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.send('xxxxxx')
  })

  .use('/jsontext', (req, res) => {
    res.send(JSON.stringify(req.body))
  })

  .use('/', express.static(__dirname))

  .listen(port, err => {
    console.log(`listen on http://localhost:${port}`)
  })
