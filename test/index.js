const _ = require('min-util')
const httpClient = require('..')
const assert = require('assert')

var wx = {
  request (opt) {
    var url = opt.url
    setTimeout(() => {
      if (_.includes(url, 'success')) {
        opt.success({
          data: {
            code: 0,
            message: 'ok',
            data: {

            }
          },
          statusCode: 200,
          header: {
            'Content-Type': 'application/json'
          }
        })
      } else {
        opt.fail()
      }
    })
  }
}

var quickapp = {
  fetch (opt) {
    var url = opt.url
    setTimeout(() => {
      if (_.includes(url, 'success')) {
        opt.success({
          data: {
            code: 0,
            message: 'ok',
            data: {
            }
          },
          code: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        })
      } else {
        opt.fail({}, 503)
      }
    })
  }
}

var jQuery = {
  ajax (opt) {
    var url = opt.url
    setTimeout(() => {
      if (_.includes(url, 'success')) {
        opt.success({
          code: 0,
          message: 'ok',
          data: {

          }
        }, 'success', {
          status: 200
        })
      } else {
        opt.error({}, 503)
      }
    })
  }
}

var axios = {
  request (opt) {
    return new Promise((resolve, reject) => {
      var url = opt.url
      if (_.includes(url, 'success')) {
        var response = {
          data: {
            code: 0,
            message: 'ok',
            data: {
            }
          },
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
        resolve(response)
      } else {
        reject({})
      }
    })
  }
}

function test(opt) {
  var type = _.keys(opt)[0]
  var http = httpClient.create(_.extend({
    baseURL: 'http://my.domain'
  }, opt))

  http.interceptors.request.use(config => {
    console.log(type, 'config', config)
    assert.deepEqual(config.url, 'http://my.domain/success?query=string')
    assert.deepEqual(config.data, '{"key":"value"}')
    return config
  })

  http.interceptors.response.use(response => {
    console.log(type, 'response', response)
    assert.deepEqual(response.status, 200)
    assert.deepEqual(response.data, {
      code: 0,
      message: 'ok',
      data: {}
    })
    assert(_.isObject(response.headers))
    return response
  })

  http.post('/success', {
    key: 'value'
  }, {
    params: {
      query: 'string'
    }
  }).then(response => {

  }).catch(err => {
    console.log('error', err)
  })
}

test({jQuery})
test({wx})
test({quickapp})
test({axios})
