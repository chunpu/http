min-fetch
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/min-fetch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-fetch
[downloads-image]: http://img.shields.io/npm/dm/min-fetch.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-fetch
[david-image]: http://img.shields.io/david/chunpu/min-fetch.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-fetch


request / fetch / http For Real Project, Support multiple platforms

Installation
---

```sh
npm i min-fetch
```

Inspired by [axios](https://github.com/axios/axios)

Send Http Request just like axios in `微信小程序`, `快应用`, `jQuery`, or `XMLHttpRequest` by default

Let's have the Same Experience with Request Data😜

Usage
---

```js
import http from 'min-fetch'

http.init({
  baseURL: 'https://my.domain'
})

http.get('/data').then(({data}) => {
  console.log(data)
})
```

### Create Custom Http Instance

```js
const anotherHttp = http.create({
  baseURL: 'https://my.domain'
})
```

Api
---

### Simple Request

- `.get(url, config)`
- `.delete(url, config)`
- `.head(url, config)`
- `.options(url, config)`

> Careful! There is no such api like `.get(url, params)`

### Request with Data

- `.post(url, data, config)`
- `.put(url, data, config)`
- `.patch(url, data, config)`

### Basic Request

- `.request(config)`
- `.request(url, config)`

All config is not required


Platform Support
---

### 微信小程序

```js
import http from 'min-fetch'

http.init({
  baseURL: 'https://my.domain',
  wx: wx
})

http.get('/data').then(({data}) => {
  console.log(data)
})
```

> 请通过 npm 安装, 参见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

### 快应用

```js
import http from 'min-fetch'
import fetch from '@system.fetch'

http.init({
  baseURL: 'https://my.domain',
  quickapp: fetch
})
```

记得在 `manifest.json` 文件中加入权限

```json
"features": [
  { "name": "system.network" },
  { "name": "system.fetch" }
]
```

### axios

```js
const axios = require('axios')
import http from 'min-fetch'

http.init({
  baseURL: 'https://my.domain',
  axios: axios
})
```

### jQuery / Zepto

```js
import http from 'min-fetch'

http.init({
  baseURL: 'https://my.domain',
  jQuery: $
})
```

Request Object (Config)
---

- `data` data for request body, will auto handle `Plain Object`, also support FormData, Blob, String
- `headers` request headers
- `method` request http method, default `GET`
- `params` the url querystring object
- `timeout` request timeout
- `withCredentials` whether use cors, default `false`

data will be stringify by the value of `headers['content-type']`

- `application/json` will `JSON.stringify` the data object
- `application/x-www-form-urlencoded` will `qs.stringify` the data object


Response Object
---

- `data` response data, will always try to `JSON.parse`, because most server not respect the response mime
- `headers` `name: value` headers, all header names are lower cased
- `status` status code, number
- `config` the request object

Config Defaults / Init
---

```js
// support axios style
http.defaults.baseURL = 'https://my.domain'
http.defaults.timeout = 1000 * 20

// can also use http.init
http.init({
  baseURL: 'https://my.domain',
  timeout: 1000 * 20
})
```

> Config default Post request `Content-Type`

default is `JSON`

Always stringify Data to `JSON`

```js
http.defaults.headers.post['Content-Type'] = 'application/json'
```

Always stringify Data to `querystring`, which can really work not like axios...

```js
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
```

Interceptors / Hook
---

```js
import http from 'min-fetch'

http.init({
  baseURL: 'https://my.domain'
})

http.interceptors.request.use(config => {
  // Do something before request is sent
  return config
})

http.interceptors.response.use(response => {
  // Do something with response
  return response
})
```


Usage With Real Project
---

Assume the `my.domain` service always return data like this

```js
{
  code: 0,
  message: 'ok',
  data: {
    key: 'value'
  }
}
```

```js
import http from 'min-fetch'

http.init({
  baseURL: 'https://my.domain'
})

http.interceptors.response.use(response => {
  if (typeof response.data === 'object') {
    // always spread the response data for directly usage
    Object.assign(response, response.data)
  }
  return response
})

http.post('/user/1024', {
  name: 'Tony'
}).then(({data, code, message}) => {
  if (code === 0) {
    return data
  } else {
    console.error('error', message)
  }
})
```

### Usage with Vue.js

```js
import http from 'min-fetch'

Vue.prototype.$http = http

// in vue component file
submit () {
  this.$http.post('/user/1024', {name: 'Tony'}).then(({data}) => {
    this.user = data
  })
}
```

### Other Api

You can stringify query string by

```js
import http from 'min-fetch'

http.qs.stringify({
  query: 'string'
})
// => 'query=string'
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-fetch.svg?style=flat-square
[license-url]: #
