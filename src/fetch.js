var _ = require('min-util')
var Url = require('min-url')
var qs = require('min-qs')

const JSON_TYPE = 'application/json'
const URL_TYPE = 'application/x-www-form-urlencoded'

function HttpClient () {
  this.baseUrl = ''
  this.timeout = null // default no timeout, TODO
  this.interceptors = {
    request: new Queue(),
    response: new Queue()
  }
}

HttpClient.qs = qs

var proto = HttpClient.prototype

proto.init = function (opt) {
  _.extend(this, opt)
}

proto.request = function (arg1, arg2) {
  if (_.isString(arg1)) {
    return this.request(_.extend({url: arg1}, arg2))
  }
  var config = arg1 || {}
  var url = config.url
  if (this.baseUrl) {
    url = this.baseUrl + url
  }
  url = Url.appendQuery(url, config.params)
  var method = _.toUpper(config.method) || 'GET'
  var headers = config.headers || config.header || {}
  headers = _.extend({}, headers)
  var contentType = getContentType(headers)
  var guessRequestType = contentType

  var timeout = config.timeout
  if (timeout == null) {
    timeout = this.timeout
  }

  // 序列化 data
  var data = config.data
  if (data) {
    if (contentType === URL_TYPE) {
      data = qs.stringify(data)
    } else if (contentType === JSON_TYPE) {
      data = JSON.stringify(data)
    }
    if (!guessRequestType) {
      if (_.isString(data)) {
        guessRequestType = URL_TYPE
      }
    }
    if (!_.isString(data)) {
      data = JSON.stringify(data) // 默认用 json
      guessRequestType = guessRequestType || JSON_TYPE
    }
    if (!contentType && guessRequestType) {
      headers['content-type'] = guessRequestType
    }
  }

  // TODO withCredentials auth...
  config = {
    url,
    data,
    headers,
    method
  }

  if (timeout != null) {
    config.timeout = timeout
  }

  return Promise.resolve(config)
    .then(config => this.interceptors.request.exec(config)) // after get config
    .then(config => this.innerFetch(config))
    .then(response => {
      // 尝试解析 response.data, 总是尝试解析成 json(就像 axios 一样), 因为后端通常写不对 mime
      if (_.isString(response.data)) {
        if (!this.axios) {
          var rawResponse = response.data
          try {
            response.data = JSON.parse(response.data)
          } catch (err) {
            response.data = rawResponse
          }
        }
      }
      return response
    })
    .then(response => this.interceptors.response.exec(response)) // after parse data
}

proto.innerFetch = function (config) {
  if (this.wx) {
    // https://developers.weixin.qq.com/miniprogram/dev/api/network-request.html#wxrequestobject
    return new Promise((resolve, reject) => {
      this.wx.request({
        url: config.url,
        data: config.data,
        header: config.headers,
        method: config.method,
        timeout: config.timeout,
        success (response) {
          var {data, statusCode, header} = response
          resolve({
            data,
            status: statusCode,
            headers: header
          })
        },
        fail (err) {
          reject(err)
        }
      })
    })
  } else if (this.axios) {
    return this.axios.request(config).then(response => {
      return _.extend(response, {config})
    })
  } else if (this.jQuery) {
    // TODO 优化 jquery 结果
    return this.jQuery.ajax(config).then((data, textStatus, jqXHR) => {
      return {
        data,
        textStatus,
        jqXHR
      }
    }, (jqXHR, textStatus, errorThrown) => {
      return {
        errorThrown,
        textStatus,
        jqXHR
      }
    })
  } else if (this.quickapp) {
    // https://doc.quickapp.cn/features/system/fetch.html
    return new Promise((resolve, reject) => {
      this.quickapp.fetch({
        url: config.url,
        data: config.data,
        header: config.headers,
        method: config.method,
        timeout: config.timeout,
        success (response) {
          // {data, code, headers}
          var {data, code, headers} = response
          resolve({
            data,
            status: code,
            headers
          })
        },
        fail (data, code) {
          reject({data, code})
        }
      })
    })
  } else if (typeof XMLHttpRequest === 'function') {
    // TODO timeout, reject
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve({
            status: xhr.status,
            data: xhr.responseText,
            headers: xhr.headers
          })
        }
      }
      xhr.open(config.method, config.url, true)
      xhr.send(config.data)
    })
  }
}

_.each('get head delete options'.split(' '), method => {
  proto[method] = function (url, config) {
    return this.request(_.extend({
      method,
      url
    }, config))
  }
})

_.each('post put patch'.split(' '), method => {
  proto[method] = function (url, data, config) {
    return this.request(_.extend({
      url,
      method,
      data
    }, config))
  }
})

function getContentType(headers) {
  var headerKeys = _.keys(headers)
  var typeKey = _.find(headerKeys, key => {
    return /content-type/i.test(key)
  })
  return headers[typeKey]
}

export default new HttpClient()

// Queue ---------------------

function Queue () {
  this.queue = []
}

_.extend(Queue.prototype, {
  use (middleware) {
    this.queue.push(middleware)
    return this
  },
  exec (value) {
    return _.reduce(this.queue, (prev, middleware) => {
      return prev.then(middleware)
    }, Promise.resolve(value))
  }
})
