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
          status: 200,
          getAllResponseHeaders () {
            return `
date: Fri, 07 Sep 2018 09:25:39 GMT
etag: W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"
connection: keep-alive
x-powered-by: Express
content-length: 2
content-type: application/json; charset=utf-8
            `
          }
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
  var timeout = 1000 * 20
  var http = httpClient.create(_.extend({
    baseURL: 'http://my.domain',
    timeout
  }, opt))

  assert.deepEqual(http.qs.stringify({query: 'string'}), 'query=string')
  // var http = httpClient
  // http.defaults.timeout = timeout
  // http.defaults.baseURL = 'http://my.domain'
  // _.extend(http.defaults, opt)

  http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  http.interceptors.request.use(config => {
    // console.log(type, 'config', config)
    assert.deepEqual(config.url, 'http://my.domain/success?query=string')
    assert.deepEqual(config.timeout, timeout)
    assert.deepEqual(config.method, 'POST')
    var contentType = config.headers['Content-Type']
    if (contentType === 'application/x-www-form-urlencoded') {
      assert.deepEqual(config.data, 'key=value')
    } else {
      assert.deepEqual(config.data, '{"key":"value"}')
    }
    return config
  })

  http.interceptors.response.use(response => {
    // console.log(type, 'response', response)
    assert.deepEqual(response.status, 200)
    assert.deepEqual(response.data, {
      code: 0,
      message: 'ok',
      data: {}
    })
    assert(_.isObject(response.headers))
    assert(_.isObject(response.config))
    return response
  })

  // 字符串也支持
  http.post('/success', {
    key: 'value'
  }, {
    params: {
      query: 'string'
    }
  }).then(response => {
    assert.deepEqual(response.status, 200)
    assert.deepEqual(response.data, {
      code: 0,
      message: 'ok',
      data: {}
    })
    assert(_.isObject(response.headers))
    assert(_.isObject(response.config))
  }).catch(err => {
    console.log('error', err)
    assert(false, 'has error!')
  })

  http.post('/success', 'key=value', {
    params: 'query=string'
  }).then(response => {
    assert.deepEqual(response.status, 200)
    assert.deepEqual(response.data, {
      code: 0,
      message: 'ok',
      data: {}
    })
    assert(_.isObject(response.headers))
    assert(_.isObject(response.config))
  }).catch(err => {
    console.log('error', err)
    assert(false, 'has error!')
  })
}

test({jQuery})
test({wx})
test({quickapp})
test({axios})
