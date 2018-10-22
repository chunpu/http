const _ = require('min-util')
const httpClient = require('../')
const assert = require('assert')
const axios = require('axios')

function testNormal() {
  const http = httpClient.create({
    axios: axios
  })

  http.get('https://so.com', {}).then(({data}) => {
    assert.deepEqual(/<html>/i.test(data), true)
  }).catch(err => {
    assert(false)
  })
}

function testCancel() {
  const http = httpClient.create({
    axios: axios
  })

  var source = http.CancelToken.source()
  http.get('https://so.com', {
    params: {
      should: 'cancen'
    },
    cancelToken: source.token
  }).then(({data}) => {
    assert(false)
  }).catch(err => {
    assert.deepEqual(err.message, 'source cancel')
  })
  setTimeout(() => {
    source.cancel('source cancel')
  }, 10)
}

function testTimeout() {
  const http = httpClient.create({
    axios: axios,
    timeout: 10
  })
  http.get('https://so.com', {
    params: {
      should: 'timeout'
    }
  }).then(({data}) => {
    assert(false)
  }).catch(err => {
    assert.deepEqual(/timeout/.test(err.message), true)
  })
}

testNormal()
testCancel()
testTimeout()
