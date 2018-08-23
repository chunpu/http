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

Usage
---

```js
const fetch = require('min-fetch')

fetch.init({
  baseUrl: 'https://my.domain'
})

await {data} = fetch.get('/data')
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-fetch.svg?style=flat-square
[license-url]: #
