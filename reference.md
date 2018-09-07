## jquery

default post body application/x-www-form-urlencoded

auto parse response application/json

根据 dataType 处理返回结果, dataType 默认自动猜测

response: data, statusText, xhr(status)

error: xhr, errorMessage, error

post 发送 string 自动使用 application/x-www-form-urlencoded

jquery 通过 application/json 判断是否解析 json, 返回 mime = text 的话不会解析成json

dataType 只是改变 accepts

## axios

default post body application/json

auto parse response application/json, even parse text/html

根据 responseType 处理返回结果, responseType 默认 json, 还支持 text

axios 始终尝试用 JSON.parse 来解析 body, 无视 responseType

response object

  status
  headers
  data
  statusText
  config

post 发送 string 自动使用 application/x-www-form-urlencoded

## fetch

返回 response 对象

fetch 无视 response content-type

## ant-design-pro

封装了一个 `request.js`, 主要特色是默认返回 `response.json()`, 需要自己传入 formdata

## 特殊格式

- URLSearchParams
- FormData, file, blob

## 参考文档

- `$.ajax` <http://api.jquery.com/jquery.ajax/>
- `axios` <https://github.com/axios/axios>
- `request` <https://github.com/request/request>
- `github.fetch` <https://github.com/github/fetch>
- `fetch standard` <https://github.com/whatwg/fetch>
- `ant-design-pro request.js` <https://pro.ant.design/docs/server-cn>
- superagent <https://github.com/visionmedia/superagent>
- 小程序 <https://developers.weixin.qq.com/miniprogram/dev/api/network-request.html>
- 快应用 <https://doc.quickapp.cn/features/system/fetch.html>
