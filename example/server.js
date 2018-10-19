var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

var port = 9999

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.cookie('a', 'b')
    res.cookie('c', 'd')
    next()
  })

  .use('/json', (req, res) => {
    setTimeout(() => {
      res.send(req.body)
    }, 200)
  })

  .use('/timeout', (req, res) => {
    setTimeout(() => {
      res.send(req.body)
    }, 2000)
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

  .use('/', express.static(path.resolve(__dirname, '..')))

  .listen(port, err => {
    console.log(`listen on http://localhost:${port}/example`)
  })
