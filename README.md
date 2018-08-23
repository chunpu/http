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


request / fetch / http For Real Project For Real Project

Installation
---

```sh
npm i min-fetch
```

Inspired by [axios](https://github.com/axios/axios)

Get axios request experience in `微信小程序`, `快应用`, `jQuery`

Usage
---

```js
const http = require('min-fetch')

http.init({
  baseUrl: 'https://my.domain'
})

let {data} = await http.get('/data')
```


Config Params
---

- `params` query object
- `data` data for request body
- `method` request http method
- `headers` request headers
- `timeout` request timeout

data will be stringify by the value of `headers['content-type']`

- `application/json` will `JSON.stringify` the data object
- `application/x-www-form-urlencoded` will `qs.stringify` the data object


Api
---

### Basic Request

- `.request(config)`
- `.request(url, config)`

### Simple Request

- `.get(url, config)`
- `.delete(url, config)`
- `.head(url, config)`
- `.options(url, config)`

### Request with Data

- `.post(url, data, config)`
- `.put(url, data, config)`
- `.patch(url, data, config)`

Interceptors / hook
---

```js
const http = require('min-fetch')

http.init({
  baseUrl: 'https://my.domain'
})

http.interceptors.request.use(config => {
  return config
})

http.interceptors.response.use(response => {
  Object.assign(response, response.data) // e.g.
  return response
})
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-fetch.svg?style=flat-square
[license-url]: #
