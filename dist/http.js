/*!
 * @chunpu/http@1.2.0 by chunpu
 * 2018-10-22T07:07:55.027Z
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["http"] = factory();
	else
		root["http"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\")\n\n\n//# sourceURL=webpack://%5Bname%5D/./index.js?");

/***/ }),

/***/ "./node_modules/_cou@1.4.0@cou/index.js":
/*!**********************************************!*\
  !*** ./node_modules/_cou@1.4.0@cou/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var is = __webpack_require__(/*! min-is */ \"./node_modules/_min-is@2.2.1@min-is/index.js\")\n\nvar slice = [].slice\n\nvar _ = exports\n\n_.is = is\n\n_.extend = _.assign = extend\n\n_.each = each\n\n_.map = function(arr, fn) {\n\tvar ret = []\n\teach(arr, function(item, i, arr) {\n\t\tret[i] = fn(item, i, arr)\n\t})\n\treturn ret\n}\n\n_.filter = function(arr, fn) {\n\tvar ret = []\n\teach(arr, function(item, i, arr) {\n\t\tvar val = fn(item, i, arr)\n\t\tif (val) ret.push(item)\n\t})\n\treturn ret\n}\n\n_.some = function(arr, fn) {\n\treturn -1 != findIndex(arr, fn)\n}\n\n_.every = function(arr, fn) {\n\treturn -1 == findIndex(arr, negate(fn))\n}\n\n_.reduce = reduce\n\n_.findIndex = findIndex\n\n_.find = function(arr, fn) {\n\tvar index = _.findIndex(arr, fn)\n\tif (-1 != index) {\n\t\treturn arr[index]\n\t}\n}\n\n_.indexOf = indexOf\n\n_.includes = function(val, sub) {\n\treturn -1 != indexOf(val, sub)\n}\n\n_.toArray = toArray\n\n_.slice = function(arr, start, end) {\n\t// support array and string\n\tvar ret = [] // default return array\n\tvar len = getLength(arr)\n\tif (len >= 0) {\n\t\tstart = start || 0\n\t\tif (0 !== end) {\n\t\t\tend = end || len\n\t\t}\n\t\t// raw array and string use self slice\n\t\tif (!is.fn(arr.slice)) {\n\t\t\tarr = toArray(arr)\n\t\t}\n\t\tret = arr.slice(start, end)\n\t}\n\treturn ret\n}\n\n_.negate = negate\n\n_.forIn = forIn\n\n_.keys = keys\n\nvar rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g\n\n_.trim = function(str) {\n\tif (null == str) return ''\n\treturn ('' + str).replace(rtrim, '')\n}\n\n_.noop = function() {}\n\n_.len = getLength\n\nfunction getLength(arr) {\n\tif (null != arr) return arr.length\n}\n\nfunction each(arr, fn) {\n\tvar len = getLength(arr)\n\tif (len && is.fn(fn)) {\n\t\tfor (var i = 0; i < len; i++) {\n\t\t\tif (false === fn(arr[i], i, arr)) break\n\t\t}\n\t}\n\treturn arr\n}\n\nfunction findIndex(arr, fn) {\n\tvar ret = -1\n\teach(arr, function(item, i, arr) {\n\t\tif (fn(item, i, arr)) {\n\t\t\tret = i\n\t\t\treturn false\n\t\t}\n\t})\n\treturn ret\n}\n\nfunction toArray(arr) {\n\tvar ret = []\n\teach(arr, function(item) {\n\t\tret.push(item)\n\t})\n\treturn ret\n}\n\n\nfunction extend(target) {\n\tif (target) {\n\t\tvar sources = slice.call(arguments, 1)\n\t\teach(sources, function(src) {\n\t\t\tforIn(src, function(val, key) {\n\t\t\t\tif (!is.undef(val)) {\n\t\t\t\t\ttarget[key] = val\n\t\t\t\t}\n\t\t\t})\n\t\t})\n\t}\n\treturn target\n}\n\nfunction negate(fn) {\n\treturn function() {\n\t\treturn !fn.apply(this, arguments)\n\t}\n}\n\nfunction indexOf(val, sub) {\n\tif (is.string(val)) return val.indexOf(sub)\n\n\treturn findIndex(val, function(item) {\n\t\t// important!\n\t\treturn sub === item\n\t})\n}\n\nfunction reduce(arr, fn, prev) {\n\teach(arr, function(item, i) {\n\t\tprev = fn(prev, item, i, arr)\n\t})\n\treturn prev\n}\n\nfunction forIn(hash, fn) {\n\tif (hash) {\n\t\tfor (var key in hash) {\n\t\t\tif (is.owns(hash, key)) {\n\t\t\t\tif (false === fn(hash[key], key, hash)) break\n\t\t\t}\n\t\t}\n\t}\n\treturn hash\n}\n\nfunction keys(hash) {\n\tvar ret = []\n\tforIn(hash, function(val, key) {\n\t\tret.push(key)\n\t})\n\treturn ret\n}\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_cou@1.4.0@cou/index.js?");

/***/ }),

/***/ "./node_modules/_min-is@2.2.1@min-is/index.js":
/*!****************************************************!*\
  !*** ./node_modules/_min-is@2.2.1@min-is/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var is = exports\n\nvar obj = Object.prototype\n\nglobal = global || {}\n\nvar navigator = global.navigator\n\n// reserved words in es3: instanceof null undefined arguments boolean false true function int\n// only have is.string and is.object, not is.str and is.obj\n// instanceof null undefined arguments boolean false true function int\n\nis.browser = function() {\n\tif (!is.wechatApp()) {\n\t\tif (navigator && global.window == global) {\n\t\t\treturn true\n\t\t}\n\t}\n\treturn false\n}\n\n// simple modern browser detect\nis.h5 = function() {\n\tif (is.browser() && navigator.geolocation) {\n\t\treturn true\n\t}\n\treturn false\n}\n\nis.mobile = function() {\n\tif (is.browser() && /mobile/i.test(navigator.userAgent)) {\n\t\treturn true\n\t}\n\treturn false\n}\n\nis.wechatApp = function() {\n\tif ('object' == typeof wx) {\n\t\tif (wx && is.fn(wx.createVideoContext)) {\n\t\t\t// wechat js sdk has no createVideoContext\n\t\t\treturn true\n\t\t}\n\t}\n\treturn false\n}\n\nfunction _class(val) {\n\tvar name = obj.toString.call(val)\n\t// [object Class]\n\treturn name.substring(8, name.length - 1).toLowerCase()\n}\n\nfunction _type(val) {\n\t// undefined object boolean number string symbol function\n\treturn typeof val\n}\n\nfunction owns(owner, key) {\n\treturn obj.hasOwnProperty.call(owner, key)\n}\n\nis._class = _class\n\nis._type = _type\n\nis.owns = owns\n\n// not a number\nis.nan = function(val) {\n\treturn val !== val\n}\n\nis.bool = function(val) {\n\treturn 'boolean' == _class(val)\n}\n\nis.infinite = function(val) {\n\treturn val == Infinity || val == -Infinity\n}\n\nis.number = function(num) {\n\treturn !isNaN(num) && 'number' == _class(num)\n}\n\n// integer or decimal\nis.iod = function(val) {\n\tif (is.number(val) && !is.infinite(val)) {\n\t\treturn true\n\t}\n\treturn false\n}\n\nis.decimal = function(val) {\n\tif (is.iod(val)) {\n\t\treturn 0 != val % 1\n\t}\n\treturn false\n}\n\nis.integer = function(val) {\n\tif (is.iod(val)) {\n\t\treturn 0 == val % 1\n\t}\n\treturn false\n}\n\n// object or function\nis.oof = function(val) {\n\tif (val) {\n\t\tvar tp = _type(val)\n\t\treturn 'object' == tp || 'function' == tp\n\t}\n\treturn false\n}\n\n// regexp should return object\nis.object = function(obj) {\n\treturn is.oof(obj) && 'function' != _class(obj)\n}\n\nis.hash = is.plainObject = function(hash) {\n\tif (hash) {\n\t\tif ('object' == _class(hash)) {\n\t\t\t// old window is object\n\t\t\tif (hash.nodeType || hash.setInterval) {\n\t\t\t\treturn false\n\t\t\t}\n\t\t\treturn true\n\t\t}\n\t}\n\treturn false\n}\n\nis.undef = function(val) {\n\treturn 'undefined' == _type(val)\n}\n\n// host function should return function, e.g. alert\nis.fn = function(fn) {\n\treturn 'function' == _class(fn)\n}\n\nis.string = function(str) {\n\treturn 'string' == _class(str)\n}\n\n// number or string\nis.nos = function(val) {\n\treturn is.iod(val) || is.string(val)\n}\n\nis.array = function(arr) {\n\treturn 'array' == _class(arr)\n}\n\nis.arraylike = function(arr) {\n\t// window has length for iframe too, but it is not arraylike\n\tif (!is.window(arr) && is.object(arr)) {\n\t\tvar len = arr.length\n\t\tif (is.integer(len) && len >= 0) {\n\t\t\treturn true\n\t\t}\n\t}\n\treturn false\n}\n\nis.window = function(val) {\n\tif (val && val.window == val) {\n\t\treturn true\n\t}\n\treturn false\n}\n\nis.empty = function(val) {\n\tif (is.string(val) || is.arraylike(val)) {\n\t\treturn 0 === val.length\n\t}\n\tif (is.hash(val)) {\n\t\tfor (var key in val) {\n\t\t\tif (owns(val, key)) {\n\t\t\t\treturn false\n\t\t\t}\n\t\t}\n\t}\n\treturn true\n}\n\nis.element = function(elem) {\n\tif (elem && 1 === elem.nodeType) {\n\t\treturn true\n\t}\n\treturn false\n}\n\nis.regexp = function(val) {\n\treturn 'regexp' == _class(val)\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_webpack@4.18.0@webpack/buildin/global.js */ \"./node_modules/_webpack@4.18.0@webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-is@2.2.1@min-is/index.js?");

/***/ }),

/***/ "./node_modules/_min-qs@1.4.0@min-qs/index.js":
/*!****************************************************!*\
  !*** ./node_modules/_min-qs@1.4.0@min-qs/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _ = __webpack_require__(/*! min-util */ \"./node_modules/_min-util@3.3.1@min-util/index.js\")\nvar is = _.is\n\nvar defaultOption = {\n\tsep: '&',\n\teq: '=',\n\tencode: encodeURIComponent,\n\tdecode: decodeURIComponent,\n\tkeepRaw: false,\n\tsort: null,\n\tignoreValues: [undefined]\n}\n\nexports.parse = function(qs, sep, eq, opt) {\n\tqs += ''\n\topt = getOpt(sep, eq, opt)\n\tvar decode = opt.decode\n\t// var ret = {}\n\tqs = qs.split(opt.sep)\n\n\treturn _.reduce(qs, function(ret, arr) {\n\t\tarr = arr.split(opt.eq)\n\t\tif (2 == arr.length) {\n\t\t\tvar k = arr[0]\n\t\t\tvar v = arr[1]\n\t\t\tif (!opt.keepRaw) {\n\t\t\t\ttry {\n\t\t\t\t\tk = decode(k)\n\t\t\t\t\tv = decode(v)\n\t\t\t\t} catch (ignore) {}\n\t\t\t}\n\t\t\tret[k] = v\n\t\t}\n\t\treturn ret\n\t}, {})\n}\n\nexports.stringify = function(obj, sep, eq, opt) {\n\topt = getOpt(sep, eq, opt)\n\n\tvar keys = _.keys(obj)\n\n\tvar sort = opt.sort\n\tif (sort) {\n\t\tif (is.fn(sort)) {\n\t\t\tkeys.sort(sort)\n\t\t} else {\n\t\t\tkeys.sort()\n\t\t}\n\t}\n\n\tvar encode = opt.encode\n\n\tvar arr = []\n\t_.each(keys, function(key) {\n\t\tvar val = obj[key]\n\t\tif (!_.includes(opt.ignoreValues, val)) {\n\t\t\tif (is.nan(val) || null == val) {\n\t\t\t\tval = ''\n\t\t\t}\n\t\t\tif (!opt.keepRaw) {\n\t\t\t\tkey = encode(key)\n\t\t\t\tval = encode(val)\n\t\t\t}\n\t\t\tarr.push(key + opt.eq + val)\n\t\t}\n\t})\n\treturn arr.join(opt.sep)\n}\n\nfunction getOpt(sep, eq, opt) {\n\t// can be\n\t// _\n\t// opt\n\t// sep, opt\n\t// sep, eq, opt\n\topt = _.find(arguments, function(val) {\n\t\treturn is.object(val)\n\t})\n\tsep = is.nos(sep) ? sep : undefined\n\teq = is.nos(eq) ? eq : undefined\n\topt = _.extend({}, defaultOption, opt, {sep: sep, eq: eq})\n\treturn opt\n}\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-qs@1.4.0@min-qs/index.js?");

/***/ }),

/***/ "./node_modules/_min-url@1.5.0@min-url/index.js":
/*!******************************************************!*\
  !*** ./node_modules/_min-url@1.5.0@min-url/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// wiki: http://en.wikipedia.org/wiki/URI_scheme\n// spec: https://url.spec.whatwg.org/\n// e.g. http://user:pass@host.com:8080/p/a/t/h?query=string#hash\n\nvar qs = __webpack_require__(/*! min-qs */ \"./node_modules/_min-qs@1.4.0@min-qs/index.js\")\nvar _ = __webpack_require__(/*! min-util */ \"./node_modules/_min-util@3.3.1@min-util/index.js\")\n\nexports.parse = function(url, parseQuery) {\n  if ('string' != typeof url) {\n    return url\n  }\n\n  var ret = {}, arr, rest\n\n  ret.href = url\n\n  // hash\n  arr = split(url, '#')\n  rest = arr[0]\n  if (arr[1]) {\n    ret.hash = '#' + arr[1]\n  }\n\n  // get scheme\n  arr = splicePattern(rest, /^[a-zA-Z][a-zA-Z0-9+-.]*:/)\n  rest = arr[1]\n  ret.protocol = arr[0].toLowerCase()\n\n  // query\n  arr = split(rest, '?')\n  rest = arr[0]\n  var query = arr[1]\n  if (parseQuery) {\n    query = qs.parse(query)\n  }\n  ret.query = query\n\n  // rest: `//user:pass@host.com:8080/p/a/t/h`\n\n  // not normal like http url\n  if ('/' != rest.charAt(0)) {\n    if (ret.schema) {\n      // rootless paths per RFC 3986 as opaque\n      // like mailto:xxx.com/path\n      ret.opaque = rest\n      return ret\n    }\n  }\n\n  // normal\n  if (_.startsWith(rest, '//')) {\n    rest = rest.slice(2)\n    arr = split(rest, '/')\n\n    ret.pathname = '/' + unescape(arr[1] || '')\n\n    arr = parseAuthority(arr[0])\n    ret.auth = arr[0]\n\n    // hostname, port\n    var host = arr[1]\n    arr = split(host, ':')\n    ret.hostname = arr[0]\n    ret.port = ~~arr[1]\n  }\n\n  return ret\n}\n\nvar slashProtocols = 'http https ftp gopher file'.split(' ')\n\nexports.format = function(obj) {\n  if (!obj || 'object' != typeof obj) return obj\n  var protocol = obj.protocol\n  var arr = [protocol]\n\n  if (!protocol || _.includes(slashProtocols, protocol.slice(0, protocol.length - 1))) {\n    arr.push('//')\n  }\n\n  if (obj.auth) {\n    arr.push(obj.auth, '@')\n  }\n\n  arr.push(obj.hostname)\n\n  if (obj.port) {\n    arr.push(':', obj.port)\n  }\n\n  arr.push(obj.pathname)\n\n  var query = obj.query\n  if (query) {\n    if ('string' != typeof query) {\n      query = qs.stringify(query)\n    }\n    if (query) {\n      arr.push('?', query)\n    }\n  }\n\n  arr.push(obj.hash)\n\n  var ret = []\n  for (var i = 0; i < arr.length; i++) {\n    if (arr[i]) ret.push(arr[i])\n  }\n\n  return ret.join('')\n}\n\nexports.appendQuery = function(url, query) {\n    var arr = split(url, '#')\n    url = arr[0]\n    var fragment = arr[1]\n\n    if (_.isObject(query)) {\n      query = qs.stringify(query)\n    }\n\n    if (_.includes(url, '?')) {\n      // has query\n      if (!_.endsWith(url, '&') && !_.endsWith(url, '?')) {\n        if (query) {\n          query = '&' + query\n        }\n      }\n\n    } else {\n      // no query\n      if (query) {\n        query = '?' + query\n      }\n    }\n\n    if (query) {\n      url += query\n    }\n\n    if (fragment) {\n      url += '#' + fragment\n    }\n\n    return url\n}\n\nfunction splicePattern(str, reg) {\n  var ret = ''\n  str = str.replace(reg, function(matched) {\n    ret = matched\n    return ''\n  })\n  return [ret, str]\n}\n\nfunction split(str, sep) {\n  var arr = []\n  var index = _.indexOf(str, sep)\n  if (-1 == index) {\n    arr[0] = str\n  } else {\n    arr[0] = str.slice(0, index)\n    arr[1] = str.slice(index + sep.length)\n  }\n  return arr\n}\n\nfunction parseAuthority(authAndHost) {\n  var arr = split(authAndHost, '@')\n  var auth = arr[0]\n  var host = arr[1]\n  if (!host) {\n    host = arr[0]\n    auth = null\n  }\n  return [auth, host]\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-url@1.5.0@min-url/index.js?");

/***/ }),

/***/ "./node_modules/_min-util@3.3.1@min-util/index.js":
/*!********************************************************!*\
  !*** ./node_modules/_min-util@3.3.1@min-util/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src */ \"./node_modules/_min-util@3.3.1@min-util/src/index.js\")\n\n/* webpack only\nif (DEBUG && global.console) {\n\tconsole.debug('debug mode')\n}\n*/\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-util@3.3.1@min-util/index.js?");

/***/ }),

/***/ "./node_modules/_min-util@3.3.1@min-util/src/array.js":
/*!************************************************************!*\
  !*** ./node_modules/_min-util@3.3.1@min-util/src/array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(_) {\n\nvar each = _.forEach = _.each\nvar includes = _.includes\nvar is = _.is\nvar proto = Array.prototype\n\n_.reject = function(arr, fn) {\n\treturn _.filter(arr, function(val, i, arr) {\n\t\treturn !fn(val, i, arr)\n\t})\n}\n\n_.without = function(arr) {\n\tvar other = _.slice(arguments, 1)\n\treturn _.difference(arr, other)\n}\n\n_.difference = function(arr, other) {\n\tvar ret = []\n\t_.each(arr, function(val) {\n\t\tif (!includes(other, val)) {\n\t\t\tret.push(val)\n\t\t}\n\t})\n\treturn ret\n}\n\n_.pluck = function(arr, key) {\n\treturn _.map(arr, function(item) {\n\t\tif (item) return item[key]\n\t})\n}\n\n_.nth = function(arr, n) {\n\tn = getRealIndex(n, arr)\n\tn = n || 0\n\tvar ret\n\tif (_.isString(arr)) {\n\t\tret = arr.charAt(n)\n\t} else {\n\t\tret = arr[n]\n\t}\n\treturn ret\n}\n\n_.first = function(arr) {\n\tif (arr) return _.nth(arr, 0)\n}\n\n_.last = function(arr) {\n\tvar len = _.len(arr)\n\tif (len) {\n\t\treturn _.nth(arr, len - 1)\n\t}\n}\n\n_.asyncMap = function(arr, fn, cb) {\n\t// desperate\n\tvar ret = []\n\tvar count = 0\n\tvar hasDone, hasStart\n\n\teach(arr, function(arg, i) {\n\t\thasStart = true\n\t\tfn(arg, function(err, val) {\n\t\t\tif (hasDone) return\n\t\t\tcount++\n\t\t\tif (err) {\n\t\t\t\thasDone = true\n\t\t\t\treturn cb(err)\n\t\t\t}\n\t\t\tret[i] = val\n\t\t\tif (count == arr.length) {\n\t\t\t\thasDone = true\n\t\t\t\tcb(null, ret)\n\t\t\t}\n\t\t})\n\t})\n\n\tif (!hasStart) cb(null) // empty\n}\n\n_.uniq = function(arr) {\n\treturn _.uniqBy(arr)\n}\n\n_.uniqBy = function(arr, fn) {\n\tvar ret = []\n\tvar pool = []\n\tif (!is.fn(fn)) {\n\t\tfn = null\n\t}\n\teach(arr, function(item) {\n\t\tvar val = item\n\t\tif (fn) {\n\t\t\tval = fn(item)\n\t\t}\n\t\tif (!includes(pool, val)) {\n\t\t\tpool.push(val)\n\t\t\tret.push(item)\n\t\t}\n\t})\n\treturn ret\n}\n\n_.flatten = function(arrs) {\n\tvar ret = []\n\teach(arrs, function(arr) {\n\t\tif (is.arraylike(arr)) {\n\t\t\teach(arr, function(item) {\n\t\t\t\tret.push(item)\n\t\t\t})\n\t\t} else ret.push(arr)\n\t})\n\treturn ret\n}\n\n_.union = function() {\n\treturn _.uniq(_.flatten(arguments))\n}\n\n_.sample = function(arr, n) {\n\tvar ret = _.toArray(arr)\n\tvar len = ret.length\n\tvar need = Math.min(n || 1, len)\n\tfor (var i = 0; i < len; i++) {\n\t\tvar rand = _.random(i, len - 1)\n\t\tvar tmp = ret[rand]\n\t\tret[rand] = ret[i]\n\t\tret[i] = tmp\n\t}\n\tret.length = need\n\tif (null == n) {\n\t\treturn ret[0]\n\t}\n\treturn ret\n}\n\n_.shuffle = function(arr) {\n\treturn _.sample(arr, Infinity)\n}\n\n_.compact = function(arr) {\n\treturn _.filter(arr, _.identity)\n}\n\n_.rest = function(arr) {\n\treturn _.slice(arr, 1)\n}\n\n_.invoke = function() {\n\tvar args = arguments\n\tvar arr = args[0]\n\tvar fn = args[1]\n\tvar isFunc = is.fn(fn)\n\targs = _.slice(args, 2)\n\n\treturn _.map(arr, function(item) {\n\t\tif (isFunc) {\n\t\t\treturn fn.apply(item, args)\n\t\t}\n\t\tif (null != item) {\n\t\t\tvar method = item[fn]\n\t\t\tif (is.fn(method)) {\n\t\t\t\treturn method.apply(item, args)\n\t\t\t}\n\t\t}\n\t})\n}\n\n_.partition = function(arr, fn) {\n\tvar hash = _.groupBy(arr, function(val, i, arr) {\n\t\tvar ret = fn(val, i, arr)\n\t\tif (ret) return 1\n\t\treturn 2\n\t})\n\treturn [hash[1] || [], hash[2] || []]\n}\n\n_.groupBy = function(arr, fn) {\n\tvar hash = {}\n\t_.each(arr, function(val, i, arr) {\n\t\tvar ret = fn(val, i, arr)\n\t\thash[ret] = hash[ret] || []\n\t\thash[ret].push(val)\n\t})\n\treturn hash\n}\n\n_.range = function() {\n\tvar args = arguments\n\tif (args.length < 2) {\n\t\treturn _.range(args[1], args[0])\n\t}\n\tvar start = args[0] || 0\n\tvar last = args[1] || 0\n\tvar step = args[2]\n\tif (!is.number(step)) {\n\t\tstep = 1\n\t}\n\tvar count = last - start\n\tif (0 != step) {\n\t\tcount = count / step\n\t}\n\tvar ret = []\n\tvar val = start\n\tfor (var i = 0; i < count; i++) {\n\t\tret.push(val)\n\t\tval += step\n\t}\n\treturn ret\n}\n\n_.pullAt = function(arr) {\n\t// `_.at` but mutate\n\tvar indexes = _.slice(arguments, 1)\n\treturn mutateDifference(arr, indexes)\n}\n\n_.remove = function(arr, fn) {\n\t// `_.filter` but mutate\n\tvar len = _.len(arr) || 0\n\tvar indexes = []\n\twhile (len--) {\n\t\tif (fn(arr[len], len, arr)) {\n\t\t\tindexes.push(len)\n\t\t}\n\t}\n\treturn mutateDifference(arr, indexes)\n}\n\n_.fill = function(arr, val, start, end) {\n\tvar size = _.size(arr)\n\tstart = getRealIndex(start, arr) || 0\n\tend = getRealIndex(end, arr) || size\n\tfor (var i = start; i < end; i++) {\n\t\tarr[i] = val\n\t}\n\treturn arr\n}\n\n_.size = function(val) {\n\t// size is safe length\n\tvar size = 0\n\tif (val) {\n\t\tvar len = val.length\n\t\tif (_.isInteger(len) && len >= 0) {\n\t\t\tsize = len\n\t\t} else if (_.isObject(val)) {\n\t\t\tsize = _.keys(val).length\n\t\t}\n\t}\n\treturn size\n}\n\n// support negative\nfunction getRealIndex(index, arr) {\n\tvar size = _.size(arr)\n\tif (index < 0) {\n\t\tindex += size\n\t}\n\tif (index < 0) {\n\t\tindex = 0 // smallest is zero\n\t}\n\tif (index > size) {\n\t\tindex = size // biggest is size, because [start, end)\n\t}\n\treturn index || 0 // default zero\n}\n\nfunction mutateDifference(arr, indexes) {\n\tvar ret = []\n\tvar len = _.len(indexes)\n\tif (len) {\n\t\tindexes = indexes.sort(function(a, b) {\n\t\t\treturn a - b\n\t\t})\n\t\twhile (len--) {\n\t\t\tvar index = indexes[len]\n\t\t\tret.push(proto.splice.call(arr, index, 1)[0])\n\t\t}\n\t}\n\tret.reverse()\n\treturn ret\n}\n\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-util@3.3.1@min-util/src/array.js?");

/***/ }),

/***/ "./node_modules/_min-util@3.3.1@min-util/src/cache.js":
/*!************************************************************!*\
  !*** ./node_modules/_min-util@3.3.1@min-util/src/cache.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cou = __webpack_require__(/*! cou */ \"./node_modules/_cou@1.4.0@cou/index.js\")\nvar is = cou.is\n\nmodule.exports = Cache\n\nfunction Cache() {\n\tthis.data = {}\n}\n\nvar proto = Cache.prototype\n\nproto.has = function(key) {\n\treturn is.owns(this.data, key)\n}\n\nproto.get = function(key) {\n\treturn this.data[key]\n}\n\nproto.set = function(key, val) {\n\tthis.data[key] = val\n}\n\nproto['delete'] = function(key) {\n\tdelete this.data[key]\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-util@3.3.1@min-util/src/cache.js?");

/***/ }),

/***/ "./node_modules/_min-util@3.3.1@min-util/src/function.js":
/*!***************************************************************!*\
  !*** ./node_modules/_min-util@3.3.1@min-util/src/function.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function(_) {\n\nvar is = _.is\nvar slice = _.slice\n\n_.bind = function(fn, ctx) {\n\tif (is.string(ctx)) {\n\t\tvar obj = fn\n\t\tfn = obj[ctx]\n\t\tctx = obj\n\t}\n\tif (!is.fn(fn)) return fn\n\tvar args = slice(arguments, 2)\n\tctx = ctx || this\n\treturn function() {\n\t\treturn fn.apply(ctx, _.flatten([args, arguments]))\n\t}\n}\n\n// from lang.js `Function.prototype.inherits`\n// so belong to function\n_.inherits = function(ctor, superCtor) {\n\tctor.super_ = superCtor\n\tctor.prototype = _.create(superCtor.prototype, {\n\t\tconstructor: ctor\n\t})\n}\n\n_.delay = function(fn, wait) {\n\tvar args = _.slice(arguments, 2)\n\treturn setTimeout(function() {\n\t\tfn.apply(this, args)\n\t}, wait)\n}\n\n_.before = function(n, fn) {\n\treturn function() {\n\t\tif (n > 1) {\n\t\t\tn--\n\t\t\treturn fn.apply(this, arguments)\n\t\t}\n\t}\n}\n\n_.once = function(fn) {\n\treturn _.before(2, fn)\n}\n\n_.after = function(n, fn) {\n\treturn function() {\n\t\tif (n > 1) {\n\t\t\tn--\n\t\t} else {\n\t\t\treturn fn.apply(this, arguments)\n\t\t}\n\t}\n}\n\n_.throttle = function(fn, wait, opt) {\n\twait = wait || 0\n\topt = _.extend({\n\t\tleading: true,\n\t\ttrailing: true,\n\t\tmaxWait: wait\n\t}, opt)\n\treturn _.debounce(fn, wait, opt)\n}\n\n_.debounce = function(fn, wait, opt) {\n\twait = wait || 0\n\topt = _.extend({\n\t\tleading: false,\n\t\ttrailing: true\n\t}, opt)\n\tvar maxWait = opt.maxWait\n\tvar lastExec = 0 // wait\n\tvar lastCall = 0 // just for maxWait\n\tvar now = _.now()\n\tvar timer\n\n\tif (!opt.leading) {\n\t\tlastExec = now\n\t}\n\n\tfunction ifIsCD() {\n\t\tif (now - lastExec > wait) return false\n\t\tif (maxWait && now - lastCall > maxWait) return false\n\t\treturn true\n\t}\n\n\tfunction exec(fn, ctx, args) {\n\t\tlastExec = _.now() // update last exec\n\t\treturn fn.apply(ctx, args)\n\t}\n\n\tfunction cancel() {\n\t\tif (timer) {\n\t\t\tclearTimeout(timer)\n\t\t\ttimer = null\n\t\t}\n\t}\n\n\tfunction debounced() {\n\t\tnow = _.now() // update now\n\t\tvar isCD = ifIsCD()\n\t\tlastCall = now // update last call\n\t\tvar me = this\n\t\tvar args = arguments\n\n\t\tcancel()\n\n\t\tif (!isCD) {\n\t\t\texec(fn, me, args)\n\t\t} else {\n\t\t\tif (opt.trailing) {\n\t\t\t\ttimer = _.delay(function() {\n\t\t\t\t\texec(fn, me, args)\n\t\t\t\t}, wait)\n\t\t\t}\n\t\t}\n\t}\n\n\tdebounced.cancel = cancel\n\n\treturn debounced\n}\n\nfunction memoize(fn) {\n\tvar cache = new memoize.Cache\n\tfunction memoized() {\n\t\tvar args = arguments\n\t\tvar key = args[0]\n\t\tif (!cache.has(key)) {\n\t\t\tvar ret = fn.apply(this, args)\n\t\t\tcache.set(key, ret)\n\t\t}\n\t\treturn cache.get(key)\n\t}\n\tmemoized.cache = cache\n\treturn memoized\n}\n\nmemoize.Cache = __webpack_require__(/*! ./cache */ \"./node_modules/_min-util@3.3.1@min-util/src/cache.js\")\n\n_.memoize = memoize\n\n_.wrap = function(val, fn) {\n\treturn function() {\n\t\tvar args = [val]\n\t\targs.push.apply(args, arguments)\n\t\treturn fn.apply(this, args)\n\t}\n}\n\n_.curry = function(fn) {\n\tvar len = fn.length\n\treturn setter([])\n\n\tfunction setter(args) {\n\t\treturn function() {\n\t\t\tvar arr = args.concat(_.slice(arguments))\n\t\t\tif (arr.length >= len) {\n\t\t\t\tarr.length = len\n\t\t\t\treturn fn.apply(this, arr)\n\t\t\t}\n\t\t\treturn setter(arr)\n\t\t}\n\t}\n}\n\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-util@3.3.1@min-util/src/function.js?");

/***/ }),

/***/ "./node_modules/_min-util@3.3.1@min-util/src/index.js":
/*!************************************************************!*\
  !*** ./node_modules/_min-util@3.3.1@min-util/src/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cou = __webpack_require__(/*! cou */ \"./node_modules/_cou@1.4.0@cou/index.js\")\n\nmodule.exports = cou.extend(_, cou)\n\n__webpack_require__(/*! ./lang */ \"./node_modules/_min-util@3.3.1@min-util/src/lang.js\")(_)\n__webpack_require__(/*! ./util */ \"./node_modules/_min-util@3.3.1@min-util/src/util.js\")(_)\n__webpack_require__(/*! ./array */ \"./node_modules/_min-util@3.3.1@min-util/src/array.js\")(_)\n__webpack_require__(/*! ./object */ \"./node_modules/_min-util@3.3.1@min-util/src/object.js\")(_)\n__webpack_require__(/*! ./function */ \"./node_modules/_min-util@3.3.1@min-util/src/function.js\")(_)\n__webpack_require__(/*! ./string */ \"./node_modules/_min-util@3.3.1@min-util/src/string.js\")(_)\n__webpack_require__(/*! ./math */ \"./node_modules/_min-util@3.3.1@min-util/src/math.js\")(_)\n\n_.mixin(_, _)\n\nfunction _(val) {\n\tif (!(this instanceof _)) return new _(val)\n\tthis.__value = val\n\tthis.__chain = false\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-util@3.3.1@min-util/src/index.js?");

/***/ }),

/***/ "./node_modules/_min-util@3.3.1@min-util/src/lang.js":
/*!***********************************************************!*\
  !*** ./node_modules/_min-util@3.3.1@min-util/src/lang.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(_) {\n\nvar is = _.is\n\n_.isString = is.string\n\n_.isArray = is.array\n\n_.isArrayLike = is.arraylike\n\n_.isBoolean = is.bool\n\n_.isElement = is.element\n\n_.isEmpty = is.empty\n\n_.isFunction = is.fn\n\n_.isInteger = is.integer\n\n_.isNaN = is.nan\n\n_.isNumber = is.number\n\n_.isObject = is.object\n\n_.isPlainObject = is.plainObject\n\n_.isRegExp = is.regexp\n\n_.isString = is.string\n\n_.isUndefined = is.undef\n\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-util@3.3.1@min-util/src/lang.js?");

/***/ }),

/***/ "./node_modules/_min-util@3.3.1@min-util/src/math.js":
/*!***********************************************************!*\
  !*** ./node_modules/_min-util@3.3.1@min-util/src/math.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(_) {\n\n_.sum = function(arr) {\n\treturn _.reduce(arr, function(sum, val) {\n\t\treturn sum + val\n\t}, 0)\n}\n\n_.max = function(arr, fn) {\n\tvar index = -1\n\tvar data = -Infinity\n\tfn = fn || _.identity\n\t_.each(arr, function(val, i) {\n\t\tval = fn(val)\n\t\tif (val > data) {\n\t\t\tdata = val\n\t\t\tindex = i\n\t\t}\n\t})\n\tif (index > -1) {\n\t\treturn arr[index]\n\t}\n\treturn data\n}\n\n_.min = function(arr, fn) {\n\tvar index = -1\n\tvar data = Infinity\n\tfn = fn || _.identity\n\t_.each(arr, function(val, i) {\n\t\tval = fn(val)\n\t\tif (val < data) {\n\t\t\tdata = val\n\t\t\tindex = i\n\t\t}\n\t})\n\tif (index > -1) {\n\t\treturn arr[index]\n\t}\n\treturn data\n}\n\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-util@3.3.1@min-util/src/math.js?");

/***/ }),

/***/ "./node_modules/_min-util@3.3.1@min-util/src/object.js":
/*!*************************************************************!*\
  !*** ./node_modules/_min-util@3.3.1@min-util/src/object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(_) {\n\nvar is = _.is\nvar each = _.each\nvar forIn = _.forIn\n\n_.only = function(obj, keys) {\n\tobj = obj || {}\n\tif (is.string(keys)) keys = keys.split(/ +/)\n\treturn _.reduce(keys, function(ret, key) {\n\t\tif (null != obj[key]) ret[key] = obj[key]\n\t\treturn ret\n\t}, {})\n}\n\n_.values = function(obj) {\n\treturn _.map(_.keys(obj), function(key) {\n\t\treturn obj[key]\n\t})\n}\n\n_.pick = function(obj, fn) {\n\tif (!is.fn(fn)) {\n\t\treturn _.pick(obj, function(val, key) {\n\t\t\treturn key == fn\n\t\t})\n\t}\n\tvar ret = {}\n\tforIn(obj, function(val, key, obj) {\n\t\tif (fn(val, key, obj)) {\n\t\t\tret[key] = val\n\t\t}\n\t})\n\treturn ret\n}\n\n_.functions = function(obj) {\n\treturn _.keys(_.pick(obj, function(val) {\n\t\treturn is.fn(val)\n\t}))\n}\n\n_.mapKeys = function(obj, fn) {\n\tvar ret = {}\n\tforIn(obj, function(val, key, obj) {\n\t\tvar newKey = fn(val, key, obj)\n\t\tret[newKey] = val\n\t})\n\treturn ret\n}\n\n_.mapObject = _.mapValues = function(obj, fn) {\n\tvar ret = {}\n\tforIn(obj, function(val, key, obj) {\n\t\tret[key] = fn(val, key, obj)\n\t})\n\treturn ret\n}\n\n// return value when walk through path, otherwise return empty\n_.get = function(obj, path) {\n\tpath = toPath(path)\n\tif (path.length) {\n\t\tvar flag = _.every(path, function(key) {\n\t\t\tif (null != obj) { // obj can be indexed\n\t\t\t\tobj = obj[key]\n\t\t\t\treturn true\n\t\t\t}\n\t\t})\n\t\tif (flag) return obj\n\t}\n}\n\n_.has = function(obj, path) {\n\tpath = toPath(path)\n\tif (path.length) {\n\t\tvar flag = _.every(path, function(key) {\n\t\t\tif (null != obj && is.owns(obj, key)) {\n\t\t\t\tobj = obj[key]\n\t\t\t\treturn true\n\t\t\t}\n\t\t})\n\t\tif (flag) return true\n\t}\n\treturn false\n}\n\n_.set = function(obj, path, val) {\n\tpath = toPath(path)\n\tvar cur = obj\n\t_.every(path, function(key, i) {\n\t\tif (is.oof(cur)) {\n\t\t\tif (i + 1 == path.length) {\n\t\t\t\tcur[key] = val\n\t\t\t} else {\n\t\t\t\tvar item = cur[key]\n\t\t\t\tif (null == item) {\n\t\t\t\t\t// fill value with {} or []\n\t\t\t\t\tvar item = {}\n\t\t\t\t\tif (~~key == key) {\n\t\t\t\t\t\titem = []\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tcur = cur[key] = item\n\t\t\t\treturn true\n\t\t\t}\n\t\t}\n\t})\n\treturn obj\n}\n\n_.create = (function() {\n\tfunction Object() {} // so it seems like Object.create\n\treturn function(proto, property) {\n\t\t// not same as Object.create, Object.create(proto, propertyDescription)\n\t\tif ('object' != typeof proto) {\n\t\t\t// null is ok\n\t\t\tproto = null\n\t\t}\n\t\tObject.prototype = proto\n\t\treturn _.extend(new Object, property)\n\t}\n})()\n\n_.defaults = function() {\n\tvar args = arguments\n\tvar target = args[0]\n\tvar sources = _.slice(args, 1)\n\tif (target) {\n\t\t_.each(sources, function(src) {\n\t\t\t_.mapObject(src, function(val, key) {\n\t\t\t\tif (is.undef(target[key])) {\n\t\t\t\t\ttarget[key] = val\n\t\t\t\t}\n\t\t\t})\n\t\t})\n\t}\n\treturn target\n}\n\n_.isMatch = function(obj, src) {\n\tvar ret = true\n\tobj = obj || {}\n\tforIn(src, function(val, key) {\n\t\tif (val !== obj[key]) {\n\t\t\tret = false\n\t\t\treturn false\n\t\t}\n\t})\n\treturn ret\n}\n\n_.toPlainObject = function(val) {\n\tvar ret = {}\n\tforIn(val, function(val, key) {\n\t\tret[key] = val\n\t})\n\treturn ret\n}\n\n_.invert = function(obj) {\n\tvar ret = {}\n\tforIn(obj, function(val, key) {\n\t\tret[val] = key\n\t})\n\treturn ret\n}\n\n// topath, copy from lodash\n\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\n\\\\]|\\\\.)*?)\\2)\\]/g\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\nfunction toPath(val) {\n\tif (is.array(val)) return val\n\tvar ret = []\n\t_.toString(val).replace(rePropName, function(match, number, quote, string) {\n\t\tvar item = number || match\n\t\tif (quote) {\n\t\t\titem = string.replace(reEscapeChar, '$1')\n\t\t}\n\t\tret.push(item)\n\t})\n\treturn ret\n}\n\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-util@3.3.1@min-util/src/object.js?");

/***/ }),

/***/ "./node_modules/_min-util@3.3.1@min-util/src/string.js":
/*!*************************************************************!*\
  !*** ./node_modules/_min-util@3.3.1@min-util/src/string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(_) {\n\n_.tostr = _.toString = tostr // lodash toString\n\nvar indexOf = _.indexOf\n\n_.split = function(str, separator, limit) {\n\tstr = tostr(str)\n\treturn str.split(separator, limit)\n}\n\n_.capitalize = function(str) {\n\tstr = tostr(str)\n\treturn str.charAt(0).toUpperCase() + str.substr(1)\n}\n\n_.decapitalize = function(str) {\n\tstr = tostr(str)\n\treturn str.charAt(0).toLowerCase() + str.substr(1)\n}\n\n_.camelCase = function(str) {\n\tstr = tostr(str)\n\tvar arr = str.split(/[^\\w]|_+/)\n\tarr = _.map(arr, function(val) {\n\t\treturn _.capitalize(val)\n\t})\n\treturn _.decapitalize(arr.join(''))\n}\n\n_.startsWith = function(str, val) {\n\treturn 0 == indexOf(str, val)\n}\n\n_.endsWith = function(str, val) {\n\tval += '' // null => 'null'\n\treturn val == _.slice(str, _.len(str) - _.len(val))\n}\n\n_.toLower = _.lower = function(str) {\n\t// lodash toLower\n\treturn tostr(str).toLowerCase()\n}\n\n_.toUpper = _.upper = function(str) {\n\t// lodash toUpper\n\treturn tostr(str).toUpperCase()\n}\n\n_.repeat = function(str, count) {\n\treturn _.map(_.range(count), function() {\n\t\treturn str\n\t}).join('')\n}\n\n_.padStart = function(str, len, chars) {\n\tstr = tostr(str)\n\tlen = len || 0\n\tvar delta = len - str.length\n\treturn getPadStr(chars, delta) + str\n}\n\n_.padEnd = function(str, len, chars) {\n\tstr = tostr(str)\n\tlen = len || 0\n\tvar delta = len - str.length\n\treturn str + getPadStr(chars, delta)\n}\n\n\nvar htmlEscapes = {\n  '&': '&amp',\n  '<': '&lt',\n  '>': '&gt',\n  '\"': '&quot',\n  \"'\": '&#39'\n}\n\n_.escape = function(str) {\n    return tostr(str).replace(/[&<>\"']/g, function(item) {\n        return htmlEscapes[item] || item\n    })\n}\n\n// 不支持定制 templateSettings\n_.template = function(str) {\n\tvar arr = ['with(data) {var ret = \"\"']\n\t_.each(_.split(str, '<%'), function(x, i) {\n\t\tvar two = x.split('%>')\n\t\tif (two[1]) {\n\t\t\tgenJS(_.trim(two[0]))\n\t\t\treturn filter(two[1])\n\t\t}\n\t\tfilter(two[0])\n\t})\n\n\tarr.push('return ret}')\n\tvar func = new Function('data', arr.join('\\n'))\n\tvar internalData = {\n\t\t_: _\n\t}\n\tvar ret = function(data) {\n\t\treturn func(_.extend({}, internalData, data))\n\t}\n\treturn ret\n\n\tfunction genJS(jsstr) {\n\t\tvar first = _.first(jsstr)\n\t\tif (first === '=' || first === '-') {\n\t\t\tvar text = _.slice(jsstr, 1)\n\t\t\tif (first === '-') {\n\t\t\t\ttext = '_.escape(' + text + ')'\n\t\t\t}\n\t\t\tarr.push('ret += ' + text) // 插入文本\n\t\t} else {\n\t\t\tarr.push(jsstr)\n\t\t}\n\t}\n\n\tfunction filter(html) {\n\t\tarr.push('ret += \"' + html.replace(/('|\"|\\\\)/g, '\\\\$1').replace(/\\r/g, '\\\\r').replace(/\\n/g, '\\\\n') + '\"')\n\t}\n}\n\nfunction getPadStr(chars, len) {\n\tchars = tostr(chars) || ' ' // '' will never end\n\tvar count = Math.floor(len / chars.length) + 1\n\treturn _.repeat(chars, count).slice(0, len)\n}\n\nfunction tostr(str) {\n\tif (str || 0 == str) return str + ''\n\treturn ''\n}\n\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-util@3.3.1@min-util/src/string.js?");

/***/ }),

/***/ "./node_modules/_min-util@3.3.1@min-util/src/util.js":
/*!***********************************************************!*\
  !*** ./node_modules/_min-util@3.3.1@min-util/src/util.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(_) {\n\nvar is = _.is\n\n_.now = function() {\n\treturn +new Date\n}\n\n_.constant = function(val) {\n\treturn function() {\n\t\treturn val\n\t}\n}\n\n_.identity = function(val) {\n\treturn val\n}\n\n_.random = function(min, max) {\n\treturn min + Math.floor(Math.random() * (max - min + 1))\n}\n\n_.mixin = function(dst, src, opt) {\n\tvar keys = _.functions(src)\n\tif (dst) {\n\t\tif (is.fn(dst)) {\n\t\t\topt = opt || {}\n\t\t\tvar isChain = !!opt.chain\n\t\t\t// add to prototype\n\t\t\tvar proto = dst.prototype\n\t\t\t_.each(keys, function(key) {\n\t\t\t\tvar fn = src[key]\n\t\t\t\tproto[key] = function() {\n\t\t\t\t\tvar me = this\n\t\t\t\t\tvar args = [me.__value]\n\t\t\t\t\targs.push.apply(args, arguments)\n\t\t\t\t\tvar ret = fn.apply(me, args)\n\t\t\t\t\tif (me.__chain) {\n\t\t\t\t\t\tme.__value = ret\n\t\t\t\t\t\treturn me\n\t\t\t\t\t}\n\t\t\t\t\treturn ret\n\t\t\t\t}\n\t\t\t})\n\t\t} else {\n\t\t\t_.each(keys, function(key) {\n\t\t\t\tdst[key] = src[key]\n\t\t\t})\n\t\t}\n\t}\n\treturn dst\n}\n\n_.chain = function(val) {\n\tvar ret = _(val)\n\tret.__chain = true\n\treturn ret\n}\n\n_.value = function() {\n\tthis.__chain = false\n\treturn this.__value\n}\n\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/_min-util@3.3.1@min-util/src/util.js?");

/***/ }),

/***/ "./node_modules/_webpack@4.18.0@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://%5Bname%5D/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/adapters/axios.js":
/*!*******************************!*\
  !*** ./src/adapters/axios.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(config) {\n  var defaults = this.defaults\n  if (defaults && defaults.axios) {\n    // https://github.com/axios/axios\n    return defaults.axios.request(config).then(response => {\n      return response\n    })\n  }\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/adapters/axios.js?");

/***/ }),

/***/ "./src/adapters/index.js":
/*!*******************************!*\
  !*** ./src/adapters/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const wx = __webpack_require__(/*! ./wx */ \"./src/adapters/wx.js\")\nconst quickapp = __webpack_require__(/*! ./quickapp */ \"./src/adapters/quickapp.js\")\nconst axios = __webpack_require__(/*! ./axios */ \"./src/adapters/axios.js\")\nconst jquery = __webpack_require__(/*! ./jquery */ \"./src/adapters/jquery.js\")\nconst xhr = __webpack_require__(/*! ./xhr */ \"./src/adapters/xhr.js\")\n\nexports.wx = wx\nexports.quickapp = quickapp\nexports.axios = axios\nexports.jquery = jquery\nexports.xhr = xhr\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/adapters/index.js?");

/***/ }),

/***/ "./src/adapters/jquery.js":
/*!********************************!*\
  !*** ./src/adapters/jquery.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\")\n\nmodule.exports = function(config) {\n  var defaults = this.defaults\n  if (defaults && defaults.jQuery) {\n    // http://api.jquery.com/jquery.ajax/\n    return new Promise((resolve, reject) => {\n      defaults.jQuery.ajax({\n        url: config.url,\n        data: config.data,\n        headers: config.headers,\n        method: config.method,\n        timeout: config.timeout,\n        withCredentials: config.withCredentials,\n        success (data, textStatus, jqXHR) {\n          resolve({\n            data,\n            status: 200,\n            headers: utils.parseHeadersFromXhr(jqXHR)\n          })\n        },\n        error (jqXHR, textStatus, errorThrown) {\n          reject(utils.createError(errorThrown, {\n            response: jqXHR,\n            textStatus: textStatus\n          }))\n        }\n      })\n    })\n  }\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/adapters/jquery.js?");

/***/ }),

/***/ "./src/adapters/quickapp.js":
/*!**********************************!*\
  !*** ./src/adapters/quickapp.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\")\n\nmodule.exports = function(config) {\n  var defaults = this.defaults\n  if (defaults && defaults.quickapp) {\n    // https://doc.quickapp.cn/features/system/fetch.html\n    return new Promise((resolve, reject) => {\n      defaults.quickapp.fetch({\n        url: config.url,\n        data: config.data,\n        header: config.headers,\n        method: config.method,\n        success (response) {\n          utils.clearTimer(timer)\n          var {data, code, headers} = response\n          resolve({\n            data,\n            status: code,\n            headers\n          })\n        },\n        fail (data, code) {\n          utils.clearTimer(timer)\n          reject({data, code})\n        }\n      })\n\n      if (config.timeout) {\n        timer = setTimeout(() => {\n          reject(utils.createError('timeout'))\n        }, config.timeout)\n      }\n    })\n  }\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/adapters/quickapp.js?");

/***/ }),

/***/ "./src/adapters/wx.js":
/*!****************************!*\
  !*** ./src/adapters/wx.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\")\n\nmodule.exports = function(config) {\n  var defaults = this.defaults\n  if (defaults && defaults.wx) {\n    // https://developers.weixin.qq.com/miniprogram/dev/api/network-request.html#wxrequestobject\n    var timer\n    return new Promise((resolve, reject) => {\n      var task = defaults.wx.request({\n        url: config.url,\n        data: config.data,\n        header: config.headers,\n        method: config.method,\n        success (response) {\n          utils.clearTimer(timer)\n          var {data, statusCode, header} = response\n          resolve({\n            data,\n            status: statusCode,\n            headers: header\n          })\n        },\n        fail (err) {\n          utils.clearTimer(timer)\n          reject(err)\n        }\n      })\n\n      if (config.timeout) {\n        timer = setTimeout(() => {\n          if (task && task.abort) {\n            task.abort\n          }\n          reject(utils.createError('timeout'))\n        }, config.timeout)\n      }\n    })\n  }\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/adapters/wx.js?");

/***/ }),

/***/ "./src/adapters/xhr.js":
/*!*****************************!*\
  !*** ./src/adapters/xhr.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ../utils */ \"./src/utils.js\")\nconst _ = __webpack_require__(/*! min-util */ \"./node_modules/_min-util@3.3.1@min-util/index.js\")\n\nmodule.exports = function(config) {\n  // default use XMLHttpRequest\n  return new Promise((resolve, reject) => {\n    var xhr = new XMLHttpRequest()\n    xhr.onload = ev => {\n      resolve({\n        status: xhr.status,\n        data: xhr.responseText,\n        headers: utils.parseHeadersFromXhr(xhr)\n      })\n    }\n    xhr.ontimeout = ev => {\n      reject(utils.createError('timeout'))\n    }\n    xhr.onerror = ev => {\n      reject(utils.createError('error'))\n    }\n    xhr.open(config.method, config.url, true)\n    if (config.timeout) {\n      xhr.timeout = config.timeout\n    }\n    if (config.withCredentials) {\n      xhr.withCredentials = config.withCredentials\n    }\n    _.forIn(config.headers, (value, key) => {\n      xhr.setRequestHeader(key, value)\n    })\n\n    if (config.cancelToken) {\n      config.cancelToken.promise.then(function onCancel(reason) {\n        if (xhr) {\n          xhr.abort()\n          reject(reason)\n          xhr = null\n        }\n      })\n    }\n\n    xhr.send(config.data)\n  })\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/adapters/xhr.js?");

/***/ }),

/***/ "./src/canceltoken.js":
/*!****************************!*\
  !*** ./src/canceltoken.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Deferred\n\nfunction Deferred() {\n  this.promise = new Promise((resolve, reject) => {\n    this.resolve = resolve\n    this.reject = reject\n  })\n}\n\nDeferred.prototype.throwIfRequested = function() {\n  // 兼容 axios\n}\n\nDeferred.source = () => {\n  var deferred = new Deferred()\n  return {\n    token: deferred,\n    cancel (reason) {\n      deferred.resolve(reason)\n    }\n  }\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/canceltoken.js?");

/***/ }),

/***/ "./src/http.js":
/*!*********************!*\
  !*** ./src/http.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const _ = __webpack_require__(/*! min-util */ \"./node_modules/_min-util@3.3.1@min-util/index.js\")\nconst Url = __webpack_require__(/*! min-url */ \"./node_modules/_min-url@1.5.0@min-url/index.js\")\nconst qs = __webpack_require__(/*! min-qs */ \"./node_modules/_min-qs@1.4.0@min-qs/index.js\")\nconst Queue = __webpack_require__(/*! ./queue */ \"./src/queue.js\")\nconst utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\nconst adapters = __webpack_require__(/*! ./adapters */ \"./src/adapters/index.js\")\nconst CancelToken = __webpack_require__(/*! ./canceltoken */ \"./src/canceltoken.js\")\n\nconst JSON_TYPE = 'application/json'\nconst URL_TYPE = 'application/x-www-form-urlencoded'\nconst CONTENT_TYPE_KEY = utils.CONTENT_TYPE_KEY\nconst simpleMethods = ['get', 'head', 'delete', 'options']\nconst dataMethods = ['post', 'put', 'patch']\nconst httpMethods = [...simpleMethods, ...dataMethods]\n\nfunction HttpClient (opt) {\n  this.defaults = {\n    baseURL: '',\n    timeout: 0,\n    headers: {\n      common: {}\n    },\n    withCredentials: false\n  }\n  _.each(httpMethods, method => {\n    var header = this.defaults.headers[method] = {}\n    if (_.includes(dataMethods, 'method')) {\n      header[method] = JSON_TYPE\n    }\n  })\n\n  this.interceptors = {\n    request: new Queue(),\n    response: new Queue()\n  }\n\n  this.qs = qs\n  this.CancelToken = CancelToken\n  this.init(opt)\n}\n\nHttpClient.qs = qs\n\nvar proto = HttpClient.prototype\n\nproto.init = function (opt) {\n  // not exist in axios\n  opt = _.extend({}, opt)\n  this.defaults.headers.common = opt.headers || {}\n  delete opt.headers\n  _.extend(this.defaults, opt)\n}\n\nproto.create = function (opt) {\n  return new HttpClient(opt)\n}\n\nproto.request = function (arg1, arg2) {\n  if (_.isString(arg1)) {\n    return this.request(_.extend({url: arg1}, arg2))\n  }\n  var config = arg1 || {}\n  config.headers = config.headers || {} // 必须有值\n  config = _.extend({}, this.defaults, config)\n\n  var url = config.baseURL + config.url\n  url = Url.appendQuery(url, config.params)\n\n  var method = _.toLower(config.method) || 'get'\n  var defaultHeaders = this.defaults.headers\n  var headers = _.extend({}, defaultHeaders.common, defaultHeaders[method], config.headers)\n  var contentType = utils.getContentType(headers)\n  var guessRequestType = contentType\n\n  // 序列化 request data\n  var data = config.data\n  if (_.isPlainObject(data)) {\n    // 只序列化 plain object, 其他直接发送, 比如字符串, FormData, Blob 之类的\n    if (contentType === URL_TYPE) {\n      data = qs.stringify(data)\n    } else if (contentType === JSON_TYPE) {\n      data = JSON.stringify(data)\n    }\n    if (!guessRequestType) {\n      if (_.isString(data)) {\n        guessRequestType = URL_TYPE\n      }\n    }\n    if (!_.isString(data)) {\n      data = JSON.stringify(data) // 默认用 json\n      guessRequestType = guessRequestType || JSON_TYPE\n    }\n    if (!contentType && guessRequestType) {\n      headers[CONTENT_TYPE_KEY] = guessRequestType\n    }\n  } else {\n    if (utils.isFormData(data)) {\n      // Let the browser set it\n      delete headers[CONTENT_TYPE_KEY]\n    }\n  }\n\n  var timeout = config.timeout\n\n  // TODO auth...\n  config = {\n    url,\n    data,\n    headers,\n    method: _.toUpper(method),\n    cancelToken: config.cancelToken,\n    withCredentials: config.withCredentials\n  }\n\n  if (timeout) {\n    config.timeout = timeout\n  }\n\n  var ret = Promise.resolve(config)\n  ret = this.interceptors.request.intercept(ret) // after get config\n    .then(config => this.adapter.call(this, config))\n    .then(response => {\n      // 尝试解析 response.data, 总是尝试解析成 json(就像 axios 一样), 因为后端通常写不对 mime\n      if (_.isString(response.data)) {\n        if (!this.axios) {\n          var rawResponse = response.data\n          try {\n            response.data = JSON.parse(response.data)\n          } catch (err) {\n            response.data = rawResponse\n          }\n        }\n      }\n      response.config = config\n      response.headers = _.mapKeys(response.headers, (value, key) => {\n        return _.toLower(key) // All header names are lower cased\n      })\n      return response\n    })\n  ret = this.interceptors.response.intercept(ret) // after parse data\n  return ret\n}\n\n// axios adapter\nproto.adapter = function (config) {\n  var defaults = this.defaults\n  if (defaults.wx) {\n    return adapters.wx.call(this, config)\n  } else if (defaults.axios) {\n    return adapters.axios.call(this, config)\n  } else if (defaults.jQuery) {\n    return adapters.jquery.call(this, config)\n  } else if (defaults.quickapp) {\n    return adapters.quickapp.call(this, config)\n  } else if (typeof XMLHttpRequest === 'function') {\n    return adapters.xhr.call(this, config)\n  }\n}\n\n// TODO http.all http.spread like axios\n\n_.each(simpleMethods, method => {\n  proto[method] = function (url, config) {\n    return this.request(_.extend({\n      method,\n      url\n    }, config))\n  }\n})\n\n_.each(dataMethods, method => {\n  proto[method] = function (url, data, config) {\n    return this.request(_.extend({\n      url,\n      method,\n      data\n    }, config))\n  }\n})\n\nmodule.exports = exports = HttpClient\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/http.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const _ = __webpack_require__(/*! min-util */ \"./node_modules/_min-util@3.3.1@min-util/index.js\")\nconst HttpClient = __webpack_require__(/*! ./http */ \"./src/http.js\")\n\nconst instance = new HttpClient()\n\nmodule.exports = instance\n\n// module.exports = exports = http // always export a function\n\n// function http(...args) {\n//   return instance.request(...args)\n// }\n\n// for (var key in instance) {\n//   var val = instance[key]\n//   if (_.isFunction(val)) {\n//     val = _.bind(val, instance)\n//   }\n//   http[key] = val\n// }\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/index.js?");

/***/ }),

/***/ "./src/queue.js":
/*!**********************!*\
  !*** ./src/queue.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const _ = __webpack_require__(/*! min-util */ \"./node_modules/_min-util@3.3.1@min-util/index.js\")\n\nmodule.exports = Queue\n\nfunction Queue() {\n  this.queue = []\n}\n\n_.extend(Queue.prototype, {\n  use (...middleware) {\n    this.queue.push(middleware)\n    return this\n  },\n  intercept (promise) {\n    return _.reduce(this.queue, (prev, middleware) => {\n      return prev.then(...middleware)\n    }, promise)\n  }\n})\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/queue.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const _ = __webpack_require__(/*! min-util */ \"./node_modules/_min-util@3.3.1@min-util/index.js\")\n\nconst CONTENT_TYPE_KEY = 'Content-Type'\nconst reContentType = new RegExp(CONTENT_TYPE_KEY, 'i')\n\nfunction getContentType(headers) {\n  var headerKeys = _.keys(headers)\n  var typeKey = _.find(headerKeys, key => {\n    return reContentType.test(key)\n  })\n  return headers[typeKey]\n}\n\nfunction parseHeadersFromXhr(xhr) {\n  return _.chain(xhr.getAllResponseHeaders())\n    .trim()\n    .split('\\n')\n    .reduce((ret, header) => {\n      var i = _.indexOf(header, ':')\n      var key = _.toLower(_.trim(_.slice(header, 0, i)))\n      var value = _.trim(_.slice(header, i + 1))\n      if (ret[key]) {\n        ret[key] = ',' + value // 多个 cookie 用 `,` 分隔, 无空格\n      } else {\n        ret[key] = value\n      }\n      return ret\n    }, {})\n    .value()\n}\n\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData)\n}\n\nfunction timeout(time) {\n  return new Promise((resolve, reject) => {\n    if (timeout) {\n      setTimeout(() => {\n        reject(new Error('timeout'))\n      }, time)\n    }\n  })\n}\n\nfunction clearTimer(timer) {\n  if (timer) {\n    clearTimeout(timer)\n  }\n}\n\nfunction createError(message, obj) {\n  var err = new Error(message)\n  _.extend(err, obj)\n  return err\n}\n\nexports.CONTENT_TYPE_KEY = CONTENT_TYPE_KEY\nexports.getContentType = getContentType\nexports.parseHeadersFromXhr = parseHeadersFromXhr\nexports.isFormData = isFormData\nexports.timeout = timeout\nexports.clearTimer = clearTimer\nexports.createError = createError\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/utils.js?");

/***/ })

/******/ });
});