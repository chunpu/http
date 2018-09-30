# 对比其他网络库

如果你看到这一篇, 说明你可能在选择请求库上有一定疑惑, 这么多网络请求的方式, 应该选哪个好?

本文尽可能的对比作者所使用过的请求库, 并作出对比, 希望可以给做出选择提供帮助

当然作为作者, 我们更偏爱 @chunpu/http, 它和实际项目更为贴合, 使用起来更加顺手

## axios

axios 是 @chunpu/http 借鉴的库, 他们都有

- 拦截器
- 提供了新建实例的方法
- 默认自动序列化请求数据
- 支持 adapter
- 默认发送 `application/json` 的 mime 数据格式
- 支持设置 baseURL
- 总是用 `JSON.parse` 解析返回数据

axios 是非常棒的一个库, 在设计 @chunpu/http 之时, 我们直接使用了类似 axios 这样的 api

axios 对于处理 `application/x-www-form-urlencoded` 这样的请求很不方便

axios 的建议是在浏览器使用 URLSearchParams, 但显然我们希望我们在各平台享受完全一致的开发体验, @chunpu/http 完全不建议使用 URLSearchParams, 而是选择默认使用 `qs.stringify` 来序列化对象数据, 但局限是内置的 qs stringify 只支持扁平数据, 不过这已经可以满足绝大部分的需求了

### 接口设计

我们先看看 http 本身传输的数据长什么样

发送请求

```
  GET / HTTP/1.1
  Host: baidu.com
  User-Agent: curl/7.54.0
  Accept: */*
```

返回请求

```
  HTTP/1.1 200 OK
  Date: Sun, 30 Sep 2018 09:36:26 GMT
  Server: Apache
  Last-Modified: Tue, 12 Jan 2010 13:48:00 GMT
  ETag: "51-47cf7e6ee8400"
  Accept-Ranges: bytes
  Content-Length: 81
  Cache-Control: max-age=86400
  Expires: Mon, 01 Oct 2018 09:36:26 GMT
  Connection: Keep-Alive
  Content-Type: text/html
```

在发请求中, 我们最关心的是 method, url (http 第一行), 以及请求数据

因此我们把发送请求设计为

```js
http.get('/path')
http.post('/path', data)
http.put('/path', data)
```

在 http 返回中, 我们最关心的是 status (http 第一行), 以及返回的数据

因此我们设计一个通用的 response 对象, 结构是

```js
{
  status: 200,
  headers: {},
  data: {}
}
```

## jQuery

jQuery 的 ajax 在之前的时代非常好用, jQuery 也提供了直接通过方法发送请求的接口

```js
$.get('/path')
$.post('/path')
```

但 jQuery 并不支持 `$.put`, `$.delete` 等, $ 本身作为一个操作 dom 的库, 直接使用 `.delete` 有语义上的歧义, 事实上 `$.get` 也有一定的歧义, 初学者可能无法一下子看出这个 get 是 get/set 的 get, 还是 http method 的 get

jQuery 混淆了 url query params 和 request body 的概念

jQuery 并不是真正的 promise, then 中会返回三个参数, 对于封装 promise 会有很多困惑

## fetch

fetch 最大的特色是默认提供 promise 的使用方法, 但这并不是说 fetch 就是一个完善的数据请求方法

fetch 并不支持 timeout

fetch 始终需要自己的 `response.json()`, 而且这依然是一个 promise

事实上, 几乎所有的 http api 接口都是按照 json 的格式来提供数据的, 我们就应该默认解析 json

## 小程序和快应用

小程序和快应用同样提供了自己的 http 请求方式, 但他们都没有提供 promise 的请求方式, 仍然需要封装
