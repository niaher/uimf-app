(function () {
'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};









function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
var index$2 = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
};

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: index$2,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

var global$1 = typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {};

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}
function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);

// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa$1(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

var btoa_1 = btoa$1;

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);

var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || btoa_1;

var xhr = function xhrAdapter(config$$1) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config$$1.data;
    var requestHeaders = config$$1.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config$$1.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config$$1.auth) {
      var username = config$$1.auth.username || '';
      var password = config$$1.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config$$1.method.toUpperCase(), buildURL(config$$1.url, config$$1.params, config$$1.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config$$1.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config$$1.responseType || config$$1.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config$$1,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config$$1, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config$$1.timeout + 'ms exceeded', config$$1, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies$$1 = cookies;

      // Add xsrf header
      var xsrfValue = (config$$1.withCredentials || isURLSameOrigin(config$$1.url)) && config$$1.xsrfCookieName ?
          cookies$$1.read(config$$1.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config$$1.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config$$1.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config$$1.responseType) {
      try {
        request.responseType = config$$1.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config$$1.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config$$1.onDownloadProgress === 'function') {
      request.addEventListener('progress', config$$1.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config$$1.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config$$1.onUploadProgress);
    }

    if (config$$1.cancelToken) {
      // Handle cancellation
      config$$1.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = xhr;
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults_1, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios_1;

// Factory for creating new instances
axios$1.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults_1, instanceConfig));
};

// Expose Cancel & CancelToken
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

var axios_1 = axios$1;

// Allow use of default import syntax in TypeScript
var default_1 = axios$1;

axios_1.default = default_1;

var index = axios_1;

/**
 * Represents metadata for a single input field. *
 */
var InputFieldMetadata = (function () {
    function InputFieldMetadata(metadata) {
        for (var _i = 0, _a = Object.keys(metadata); _i < _a.length; _i++) {
            var property = _a[_i];
            this[property] = metadata[property];
        }
    }
    /**
     * Gets value of a custom property.
     * @param name name of the custom property to get.
     * @returns value of the custom property or null if the property is undefined.
     */
    InputFieldMetadata.prototype.getCustomProperty = function (name) {
        if (this.customProperties != null && this.customProperties[name]) {
            return this.customProperties[name];
        }
        return null;
    };
    return InputFieldMetadata;
}());

/**
 * Represents metadata for a single output field.
 */
var OutputFieldMetadata = (function () {
    function OutputFieldMetadata(metadata) {
        for (var _i = 0, _a = Object.keys(metadata); _i < _a.length; _i++) {
            var property = _a[_i];
            this[property] = metadata[property];
        }
        // Special case for "paginated-data", to ensure that each column is also
        // an instance of OutputFieldMetadata class, instead of a plain javascript object.
        if (this.customProperties != null && this.customProperties.columns != null) {
            for (var columnPropertyName in this.customProperties.columns) {
                // Convert column to OutputFieldMetadata instance.
                var metadataAsJsonObject = this.customProperties.columns[columnPropertyName];
                this.customProperties.columns[columnPropertyName] = new OutputFieldMetadata(metadataAsJsonObject);
            }
        }
    }
    /**
     * Gets value of a custom property.
     * @param name name of the custom property to get.
     * @returns value of the custom property or null if the property is undefined.
     */
    OutputFieldMetadata.prototype.getCustomProperty = function (name) {
        if (this.customProperties != null && this.customProperties[name]) {
            return this.customProperties[name];
        }
        return null;
    };
    return OutputFieldMetadata;
}());

/**
 * Encapsulates all information needed to render a form.
 */
var FormMetadata = (function () {
    function FormMetadata(metadata) {
        for (var _i = 0, _a = Object.keys(metadata); _i < _a.length; _i++) {
            var property = _a[_i];
            this[property] = metadata[property];
        }
        this.inputFields = metadata.inputFields.map(function (t) { return new InputFieldMetadata(t); });
        this.outputFields = metadata.outputFields.map(function (t) { return new OutputFieldMetadata(t); });
    }
    /**
     * Gets value of a custom property.
     * @param name name of the custom property to get.
     * @returns value of the custom property or null if the property is undefined.
     */
    FormMetadata.prototype.getCustomProperty = function (name) {
        if (this.customProperties != null && this.customProperties[name]) {
            return this.customProperties[name];
        }
        return null;
    };
    return FormMetadata;
}());

/**
 * Represents a reference to a form.
 */

/**
 * Represents response of a form.
 */
var FormResponse = (function (_super) {
    __extends(FormResponse, _super);
    function FormResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormResponse;
}(Object));

/**
 * Represents a function.
 */
var ClientFunctionMetadata = (function () {
    function ClientFunctionMetadata(metadata) {
        for (var _i = 0, _a = Object.keys(metadata); _i < _a.length; _i++) {
            var property = _a[_i];
            this[property] = metadata[property];
        }
    }
    /**
     * Gets value of a custom property.
     * @param name name of the custom property to get.
     * @returns value of the custom property or null if the property is undefined.
     */
    ClientFunctionMetadata.prototype.getCustomProperty = function (name) {
        if (this.customProperties != null && this.customProperties[name]) {
            return this.customProperties[name];
        }
        return null;
    };
    return ClientFunctionMetadata;
}());

/**
 * Represents a function which can be run at a specific time during form's lifecycle.
 */
var EventHandlerMetadata = (function (_super) {
    __extends(EventHandlerMetadata, _super);
    function EventHandlerMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventHandlerMetadata;
}(ClientFunctionMetadata));

/**
 * Metadata describing how to handle the response.
 */
var FormResponseMetadata = (function () {
    function FormResponseMetadata() {
    }
    return FormResponseMetadata;
}());

var axios = index;
var UmfServer = (function () {
    /**
     * Creates a new instance of UmfApp.
     */
    function UmfServer(getMetadataUrl, postFormUrl) {
        this.eventHandlers = {};
        this.getMetadataUrl = getMetadataUrl;
        this.postFormUrl = postFormUrl;
    }
    UmfServer.prototype.on = function (event, handler) {
        this.eventHandlers[event] = this.eventHandlers[event] || [];
        this.eventHandlers[event].push(handler);
    };
    UmfServer.prototype.fire = function (event, params) {
        var handlersForEvent = this.eventHandlers[event];
        if (handlersForEvent != null && handlersForEvent.length > 0) {
            for (var _i = 0, handlersForEvent_1 = handlersForEvent; _i < handlersForEvent_1.length; _i++) {
                var handler = handlersForEvent_1[_i];
                handler(params);
            }
        }
    };
    UmfServer.prototype.getMetadata = function (formId) {
        var _this = this;
        this.fire("request:started");
        return axios.get(this.getMetadataUrl + "/" + formId).then(function (response) {
            _this.fire("request:completed");
            return response.data;
        }).catch(function (e) {
            // tslint:disable-next-line:no-console
            console.warn("Did not find form \"" + formId + "\".");
            _this.fire("request:completed");
            return null;
        });
    };
    UmfServer.prototype.getAllMetadata = function () {
        var _this = this;
        this.fire("request:started");
        return axios.get(this.getMetadataUrl).then(function (response) {
            _this.fire("request:completed");
            return response.data;
        });
    };
    UmfServer.prototype.postForm = function (form, data) {
        var _this = this;
        this.fire("request:started");
        return axios.post(this.postFormUrl, JSON.stringify([{
                Form: form,
                RequestId: 1,
                InputFieldValues: data
            }]), {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            var invokeFormResponses = response.data;
            // Make sure metadata is never null.
            invokeFormResponses[0].data.metadata = invokeFormResponses[0].data.metadata || new FormResponseMetadata();
            _this.fire("request:completed");
            return invokeFormResponses[0].data;
        }).catch(function (error) {
            _this.fire("request:completed", error.response.data.error);
            return null;
        });
    };
    return UmfServer;
}());

var UmfApp$$1 = (function () {
    function UmfApp$$1(server, controlRegister) {
        var _this = this;
        this.formsById = {};
        this.eventHandlers = [];
        this.formResponseHandlers = {};
        this.server = server;
        this.controlRegister = controlRegister;
        var _loop_1 = function (e) {
            this_1.server.on(e, function (params) {
                _this.fire(e, params);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = ["request:started", "request:completed"]; _i < _a.length; _i++) {
            var e = _a[_i];
            _loop_1(e);
        }
    }
    UmfApp$$1.prototype.on = function (event, handler) {
        this.eventHandlers[event] = this.eventHandlers[event] || [];
        this.eventHandlers[event].push(handler);
    };
    UmfApp$$1.prototype.fire = function (event, params) {
        var handlersForEvent = this.eventHandlers[event];
        if (handlersForEvent != null && handlersForEvent.length > 0) {
            for (var _i = 0, handlersForEvent_1 = handlersForEvent; _i < handlersForEvent_1.length; _i++) {
                var handler = handlersForEvent_1[_i];
                handler(params);
            }
        }
    };
    UmfApp$$1.prototype.useRouter = function (router) {
        this.go = function (form, values) {
            return router.go(form, values);
        };
        this.makeUrl = function (form, values) {
            return router.makeUrl(form, values);
        };
    };
    UmfApp$$1.prototype.registerResponseHandler = function (handler) {
        this.formResponseHandlers[handler.name] = handler;
    };
    UmfApp$$1.prototype.load = function () {
        var _this = this;
        return this.server.getAllMetadata()
            .then(function (response) {
            _this.forms = response.forms;
            _this.menu = response.menu;
            _this.formsById = {};
            for (var _i = 0, _a = _this.forms; _i < _a.length; _i++) {
                var form = _a[_i];
                _this.formsById[form.id] = new FormMetadata(form);
            }
        });
    };
    UmfApp$$1.prototype.getForm = function (id) {
        return this.formsById[id];
    };
    UmfApp$$1.prototype.getFormInstance = function (formId, throwError) {
        if (throwError === void 0) { throwError = false; }
        var metadata = this.getForm(formId);
        if (metadata == null) {
            if (throwError) {
                throw Error("Form " + formId + " not found.");
            }
            return null;
        }
        return new FormInstance$$1(metadata, this.controlRegister);
    };
    UmfApp$$1.prototype.handleResponse = function (response, form, args) {
        var responseMetadata = response.metadata || new FormResponseMetadata();
        var handler = this.formResponseHandlers[responseMetadata.handler || "default"];
        if (handler == null) {
            throw new Error("Cannot find FormResponseHandler \"" + responseMetadata.handler + "\".");
        }
        return handler.handle(response, form, args);
    };
    UmfApp$$1.prototype.runFunctions = function (functionMetadata, eventArgs) {
        if (functionMetadata == null) {
            return Promise.resolve();
        }
        var promises = [];
        for (var _i = 0, functionMetadata_1 = functionMetadata; _i < functionMetadata_1.length; _i++) {
            var f = functionMetadata_1[_i];
            var handler = this.controlRegister.functions[f.id];
            if (handler == null) {
                throw new Error("Could not find function '" + f.id + "'.");
            }
            var promise = handler.run(f, eventArgs);
            promises.push(promise);
        }
        return Promise.all(promises);
    };
    return UmfApp$$1;
}());

var FormInstance$$1 = (function () {
    function FormInstance$$1(metadata, controlRegister) {
        this.outputs = [];
        this.inputs = [];
        this.metadata = new FormMetadata(metadata);
        this.inputs = controlRegister.createInputControllers(this.metadata.inputFields);
    }
    FormInstance$$1.prototype.enforceCanPostOnLoad = function () {
        // If user is trying to auto-submit a form which is not enabled for `PostOnLoad`.
        if (!this.metadata.postOnLoad) {
            throw new Error("Invalid invocation of form '" + this.metadata.id + "'. Form cannot be auto-posted, because *PostOnLoad* is set to false.");
        }
    };
    FormInstance$$1.prototype.allRequiredInputsHaveData = function (asPostOnLoad) {
        return __awaiter(this, void 0, void 0, function () {
            var formData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (asPostOnLoad) {
                            this.enforceCanPostOnLoad();
                        }
                        return [4 /*yield*/, this.getFormData(asPostOnLoad)];
                    case 1:
                        formData = _a.sent();
                        return [2 /*return*/, formData != null];
                }
            });
        });
    };
    FormInstance$$1.prototype.submit = function (app, asPostOnLoad, args) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (asPostOnLoad) {
                            this.enforceCanPostOnLoad();
                        }
                        return [4 /*yield*/, this.getFormData(asPostOnLoad)];
                    case 1:
                        formData = _a.sent();
                        // If not all required inputs are filled.
                        if (formData == null) {
                            throw new Error("Form '" + this.metadata.id + "' cannot be submitted, because some required input fields do not have values.");
                        }
                        return [4 /*yield*/, this.fire("form:posting", new FormEventArguments(app))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, app.server.postForm(this.metadata.id, formData)];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, this.fire("form:responseReceived", new FormResponseEventArguments(app, response))];
                    case 4:
                        _a.sent();
                        this.setOutputFieldValues(response);
                        // Null response is treated as a server-side error.
                        if (response == null) {
                            throw new Error("Received null response.");
                        }
                        return [4 /*yield*/, app.runFunctions(response.metadata.functionsToRun)];
                    case 5:
                        _a.sent();
                        app.handleResponse(response, this, args);
                        return [4 /*yield*/, this.fire("form:responseHandled", new FormResponseEventArguments(app, response))];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    FormInstance$$1.prototype.initializeInputFields = function (data) {
        var promises = [];
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var fieldMetadata = _a[_i];
            var value = null;
            if (data != null) {
                for (var prop in data) {
                    if (data.hasOwnProperty(prop) && prop.toLowerCase() === fieldMetadata.metadata.id.toLowerCase()) {
                        value = data[prop];
                        break;
                    }
                }
            }
            promises.push(fieldMetadata.init(value));
        }
        return Promise.all(promises);
    };
    FormInstance$$1.prototype.setInputFields = function (data) {
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var field = _a[_i];
            field.value = data[field.metadata.id];
        }
    };
    FormInstance$$1.prototype.getSerializedInputValues = function () {
        var data = {};
        var promises = [];
        var _loop_1 = function (input) {
            var promise = input.serialize().then(function (t) {
                // Don't include inputs without values, because we only
                // want to serialize "non-default" values.
                if (t.value != null && t.value !== "") {
                    data[input.metadata.id] = t.value;
                }
            });
            promises.push(promise);
        };
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            _loop_1(input);
        }
        return Promise.all(promises).then(function () { return data; });
    };
    FormInstance$$1.prototype.getSerializedInputValuesFromObject = function (value) {
        var data = {};
        var normalizedObject = {};
        for (var prop in value) {
            if (value.hasOwnProperty(prop)) {
                normalizedObject[prop.toLowerCase()] = value[prop];
            }
        }
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            var valueAsString = input.serializeValue(normalizedObject[input.metadata.id.toLowerCase()]);
            // Don't include inputs without values, because we only
            // want to serialize "non-default" values.
            if (valueAsString != null && valueAsString !== "") {
                data[input.metadata.id] = valueAsString;
            }
        }
        return data;
    };
    FormInstance$$1.getOutputFieldValues = function (outputFieldsMetadata, response) {
        var fields = Array();
        var normalizedResponse = FormInstance$$1.getNormalizedObject(response);
        for (var _i = 0, outputFieldsMetadata_1 = outputFieldsMetadata; _i < outputFieldsMetadata_1.length; _i++) {
            var field = outputFieldsMetadata_1[_i];
            var normalizedId = field.id.toLowerCase();
            fields.push({
                metadata: field,
                data: normalizedResponse[normalizedId]
            });
        }
        fields.sort(function (a, b) {
            return a.metadata.orderIndex - b.metadata.orderIndex;
        });
        return fields;
    };
    FormInstance$$1.prototype.setOutputFieldValues = function (response) {
        if (response == null) {
            this.outputs = [];
            return;
        }
        var fields = Array();
        var normalizedResponse = FormInstance$$1.getNormalizedObject(response);
        for (var _i = 0, _a = this.metadata.outputFields; _i < _a.length; _i++) {
            var field = _a[_i];
            fields.push({
                metadata: field,
                data: normalizedResponse[field.id.toLowerCase()]
            });
        }
        fields.sort(function (a, b) {
            return a.metadata.orderIndex - b.metadata.orderIndex;
        });
        this.outputs = fields;
    };
    FormInstance$$1.prototype.handleEvent = function (eventName, eventMetadata, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fire(eventName, parameters)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormInstance$$1.prototype.fire = function (eventName, parameters) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promises, _i, _a, input, _b, _c, eventHandlerMetadata, handler, promise, _d, _e, output, _f, _g, eventHandlerMetadata, handler, promise;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        promises = [];
                        // Run input event handlers.
                        for (_i = 0, _a = this.inputs; _i < _a.length; _i++) {
                            input = _a[_i];
                            if (input.metadata.eventHandlers != null) {
                                for (_b = 0, _c = input.metadata.eventHandlers; _b < _c.length; _b++) {
                                    eventHandlerMetadata = _c[_b];
                                    if (eventHandlerMetadata.runAt === eventName) {
                                        handler = parameters.app.controlRegister.inputFieldEventHandlers[eventHandlerMetadata.id];
                                        if (handler == null) {
                                            throw new Error("Could not find input event handler '" + eventHandlerMetadata.id + "'.");
                                        }
                                        promise = handler.run(input, eventHandlerMetadata, parameters);
                                        promises.push(promise);
                                    }
                                }
                            }
                        }
                        // Run output event handlers.
                        for (_d = 0, _e = this.outputs; _d < _e.length; _d++) {
                            output = _e[_d];
                            if (output.metadata.eventHandlers != null) {
                                for (_f = 0, _g = output.metadata.eventHandlers; _f < _g.length; _f++) {
                                    eventHandlerMetadata = _g[_f];
                                    if (eventHandlerMetadata.runAt === eventName) {
                                        handler = parameters.app.controlRegister.outputFieldEventHandlers[eventHandlerMetadata.id];
                                        if (handler == null) {
                                            throw new Error("Could not find output event handler '" + eventHandlerMetadata.id + "'.");
                                        }
                                        promise = handler.run(output, eventHandlerMetadata, parameters);
                                        promises.push(promise);
                                    }
                                }
                            }
                        }
                        // Run form event handlers.
                        this.metadata.eventHandlers
                            .filter(function (t) { return t.runAt === eventName; })
                            .forEach(function (t) {
                            var handler = parameters.app.controlRegister.formEventHandlers[t.id];
                            if (handler == null) {
                                throw new Error("Could not find form event handler '" + t.id + "'.");
                            }
                            var promise = handler.run(_this, t, parameters);
                            promises.push(promise);
                        });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _h.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormInstance$$1.prototype.getFormData = function (asPostOnLoad) {
        return __awaiter(this, void 0, void 0, function () {
            var data, promises, hasRequiredMissingInput, _loop_2, _i, _a, input, skipValidation;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = {};
                        promises = [];
                        hasRequiredMissingInput = false;
                        _loop_2 = function (input) {
                            var promise = input.getValue().then(function (value) {
                                data[input.metadata.id] = value;
                                if (input.metadata.required && (value == null || (typeof (value) === "string" && value === ""))) {
                                    hasRequiredMissingInput = true;
                                }
                            });
                            promises.push(promise);
                        };
                        for (_i = 0, _a = this.inputs; _i < _a.length; _i++) {
                            input = _a[_i];
                            _loop_2(input);
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _b.sent();
                        skipValidation = !this.metadata.postOnLoadValidation &&
                            this.metadata.postOnLoad &&
                            // if initialization of the form, i.e. - first post.
                            asPostOnLoad;
                        // If not all required inputs were entered, then do not post.
                        if (hasRequiredMissingInput &&
                            !skipValidation) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    FormInstance$$1.getNormalizedObject = function (response) {
        var normalizedResponse = {};
        for (var field in response) {
            if (response.hasOwnProperty(field) && field !== "metadata") {
                normalizedResponse[field.toLowerCase()] = response[field];
            }
        }
        return normalizedResponse;
    };
    return FormInstance$$1;
}());

var InputController = (function () {
    function InputController(metadata) {
        this.metadata = metadata;
    }
    InputController.prototype.serialize = function () {
        var _this = this;
        return this.getValue().then(function (t) {
            var valueAsString = _this.serializeValue(t);
            return {
                value: valueAsString,
                input: _this
            };
        });
    };
    return InputController;
}());

var StringInputController = (function (_super) {
    __extends(StringInputController, _super);
    function StringInputController(metadata) {
        return _super.call(this, metadata) || this;
    }
    StringInputController.prototype.serializeValue = function (value) {
        // Ensure we don't return "undefined", but return null instead.
        return value != null ? value.toString() : null;
    };
    StringInputController.prototype.init = function (value) {
        this.value = value;
        return Promise.resolve(this);
    };
    StringInputController.prototype.getValue = function () {
        return Promise.resolve(this.value);
    };
    return StringInputController;
}(InputController));

var ControlRegister$$1 = (function () {
    function ControlRegister$$1() {
        this.inputs = {};
        this.outputs = {};
        this.inputFieldEventHandlers = {};
        this.outputFieldEventHandlers = {};
        this.formEventHandlers = {};
        this.functions = {};
    }
    ControlRegister$$1.prototype.createInputControllers = function (fields) {
        var result = [];
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            // Instantiate new input controller.
            var entry = this.inputs[field.type];
            var ctor = entry != null && entry.controller != null
                ? entry.controller
                : StringInputController;
            result.push(new ctor(field));
        }
        result.sort(function (a, b) {
            return a.metadata.orderIndex - b.metadata.orderIndex;
        });
        return result;
    };
    ControlRegister$$1.prototype.getOutput = function (field) {
        return field != null
            ? this.outputs[field.metadata.type] || this.outputs.text
            : this.outputs.text;
    };
    ControlRegister$$1.prototype.getInput = function (type) {
        return type != null
            ? this.inputs[type] || this.inputs.text
            : this.inputs.text;
    };
    ControlRegister$$1.prototype.registerInputFieldControl = function (name, svelteComponent, controller, constants) {
        if (constants === void 0) { constants = null; }
        this.inputs[name] = {
            controller: controller,
            component: svelteComponent,
            constants: constants
        };
    };
    ControlRegister$$1.prototype.registerOutputFieldControl = function (name, svelteComponent, constants) {
        if (constants === void 0) { constants = null; }
        this.outputs[name] = {
            constructor: svelteComponent,
            constants: constants
        };
    };
    ControlRegister$$1.prototype.registerFormEventHandler = function (name, handler) {
        this.formEventHandlers[name] = handler;
    };
    ControlRegister$$1.prototype.registerInputFieldEventHandler = function (name, handler) {
        this.inputFieldEventHandlers[name] = handler;
    };
    ControlRegister$$1.prototype.registerOutputFieldEventHandler = function (name, handler) {
        this.outputFieldEventHandlers[name] = handler;
    };
    ControlRegister$$1.prototype.registerFunction = function (name, fn) {
        this.functions[name] = fn;
    };
    return ControlRegister$$1;
}());

var OutputControlConfiguration = (function () {
    function OutputControlConfiguration(alwaysHideLabel, block) {
        if (alwaysHideLabel === void 0) { alwaysHideLabel = false; }
        if (block === void 0) { block = true; }
        this.alwaysHideLabel = false;
        this.block = true;
        this.alwaysHideLabel = alwaysHideLabel;
        this.block = block;
    }
    return OutputControlConfiguration;
}());

var OutputFieldValue = (function () {
    function OutputFieldValue() {
    }
    return OutputFieldValue;
}());

var FormEventHandler = (function () {
    function FormEventHandler() {
    }
    return FormEventHandler;
}());

var InputFieldEventHandler = (function () {
    function InputFieldEventHandler() {
    }
    return InputFieldEventHandler;
}());

var OutputFieldEventHandler = (function () {
    function OutputFieldEventHandler() {
    }
    return OutputFieldEventHandler;
}());

var FormEventArguments = (function () {
    function FormEventArguments(app) {
        this.app = app;
    }
    return FormEventArguments;
}());

var FormResponseEventArguments = (function (_super) {
    __extends(FormResponseEventArguments, _super);
    function FormResponseEventArguments(app, response) {
        var _this = _super.call(this, app) || this;
        _this.response = response;
        return _this;
    }
    return FormResponseEventArguments;
}(FormEventArguments));

var InputEventArguments = (function (_super) {
    __extends(InputEventArguments, _super);
    function InputEventArguments(app, input) {
        var _this = _super.call(this, app) || this;
        _this.input = input;
        return _this;
    }
    return InputEventArguments;
}(FormEventArguments));

var MessageResponseHandler = (function () {
    function MessageResponseHandler() {
        this.name = "message";
    }
    MessageResponseHandler.prototype.handle = function (response, form) {
        alert(response.message);
    };
    return MessageResponseHandler;
}());

var RedirectResponseHandler = (function () {
    function RedirectResponseHandler(goToForm) {
        this.name = "redirect";
        this.goToForm = goToForm;
    }
    RedirectResponseHandler.prototype.handle = function (response, form) {
        this.goToForm(response.form, response.inputFieldValues);
    };
    return RedirectResponseHandler;
}());

var ReloadResponseHandler = (function () {
    function ReloadResponseHandler(getFormUrl) {
        this.name = "reload";
        this.getFormUrl = getFormUrl;
    }
    ReloadResponseHandler.prototype.handle = function (response, form) {
        this.getFormUrl(response.form, response.inputFieldValues).then(function (url) {
            window.location.href = url;
        });
    };
    return ReloadResponseHandler;
}());

var FormComponentResponseHandler = (function () {
    function FormComponentResponseHandler() {
        this.name = "default";
    }
    FormComponentResponseHandler.prototype.handle = function (response, form, args) {
        if (args != null && args.formComponent != null) {
            args.formComponent.renderResponse(response);
        }
    };
    return FormComponentResponseHandler;
}());

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var alertify$1 = createCommonjsModule(function (module) {
/**
 * alertifyjs 1.11.1 http://alertifyjs.com
 * AlertifyJS is a javascript framework for developing pretty browser dialogs and notifications.
 * Copyright 2018 Mohammad Younes <Mohammad@alertifyjs.com> (http://alertifyjs.com) 
 * Licensed under GPL 3 <https://opensource.org/licenses/gpl-3.0>*/
( function ( window ) {
    'use strict';
    
    /**
     * Keys enum
     * @type {Object}
     */
    var keys = {
        ENTER: 13,
        ESC: 27,
        F1: 112,
        F12: 123,
        LEFT: 37,
        RIGHT: 39
    };
    /**
     * Default options 
     * @type {Object}
     */
    var defaults = {
        autoReset:true,
        basic:false,
        closable:true,
        closableByDimmer:true,
        frameless:false,
        maintainFocus:true, //global default not per instance, applies to all dialogs
        maximizable:true,
        modal:true,
        movable:true,
        moveBounded:false,
        overflow:true,
        padding: true,
        pinnable:true,
        pinned:true,
        preventBodyShift:false, //global default not per instance, applies to all dialogs
        resizable:true,
        startMaximized:false,
        transition:'pulse',
        notifier:{
            delay:5,
            position:'bottom-right',
            closeButton:false
        },
        glossary:{
            title:'AlertifyJS',
            ok: 'OK',
            cancel: 'Cancel',
            acccpt: 'Accept',
            deny: 'Deny',
            confirm: 'Confirm',
            decline: 'Decline',
            close: 'Close',
            maximize: 'Maximize',
            restore: 'Restore',
        },
        theme:{
            input:'ajs-input',
            ok:'ajs-ok',
            cancel:'ajs-cancel',
        }
    };
    
    //holds open dialogs instances
    var openDialogs = [];

    /**
     * [Helper]  Adds the specified class(es) to the element.
     *
     * @element {node}      The element
     * @className {string}  One or more space-separated classes to be added to the class attribute of the element.
     * 
     * @return {undefined}
     */
    function addClass(element,classNames){
        element.className += ' ' + classNames;
    }
    
    /**
     * [Helper]  Removes the specified class(es) from the element.
     *
     * @element {node}      The element
     * @className {string}  One or more space-separated classes to be removed from the class attribute of the element.
     * 
     * @return {undefined}
     */
    function removeClass(element, classNames) {
        var original = element.className.split(' ');
        var toBeRemoved = classNames.split(' ');
        for (var x = 0; x < toBeRemoved.length; x += 1) {
            var index = original.indexOf(toBeRemoved[x]);
            if (index > -1){
                original.splice(index,1);
            }
        }
        element.className = original.join(' ');
    }

    /**
     * [Helper]  Checks if the document is RTL
     *
     * @return {Boolean} True if the document is RTL, false otherwise.
     */
    function isRightToLeft(){
        return window.getComputedStyle(document.body).direction === 'rtl';
    }
    /**
     * [Helper]  Get the document current scrollTop
     *
     * @return {Number} current document scrollTop value
     */
    function getScrollTop(){
        return ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop);
    }

    /**
     * [Helper]  Get the document current scrollLeft
     *
     * @return {Number} current document scrollLeft value
     */
    function getScrollLeft(){
        return ((document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft);
    }

    /**
    * Helper: clear contents
    *
    */
    function clearContents(element){
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }
    /**
     * Extends a given prototype by merging properties from base into sub.
     *
     * @sub {Object} sub The prototype being overwritten.
     * @base {Object} base The prototype being written.
     *
     * @return {Object} The extended prototype.
     */
    function copy(src) {
        if(null === src){
            return src;
        }
        var cpy;
        if(Array.isArray(src)){
            cpy = [];
            for(var x=0;x<src.length;x+=1){
                cpy.push(copy(src[x]));
            }
            return cpy;
        }
      
        if(src instanceof Date){
            return new Date(src.getTime());
        }
      
        if(src instanceof RegExp){
            cpy = new RegExp(src.source);
            cpy.global = src.global;
            cpy.ignoreCase = src.ignoreCase;
            cpy.multiline = src.multiline;
            cpy.lastIndex = src.lastIndex;
            return cpy;
        }
        
        if(typeof src === 'object'){
            cpy = {};
            // copy dialog pototype over definition.
            for (var prop in src) {
                if (src.hasOwnProperty(prop)) {
                    cpy[prop] = copy(src[prop]);
                }
            }
            return cpy;
        }
        return src;
    }
    /**
      * Helper: destruct the dialog
      *
      */
    function destruct(instance, initialize){
        //delete the dom and it's references.
        var root = instance.elements.root;
        root.parentNode.removeChild(root);
        delete instance.elements;
        //copy back initial settings.
        instance.settings = copy(instance.__settings);
        //re-reference init function.
        instance.__init = initialize;
        //delete __internal variable to allow re-initialization.
        delete instance.__internal;
    }

    /**
     * Use a closure to return proper event listener method. Try to use
     * `addEventListener` by default but fallback to `attachEvent` for
     * unsupported browser. The closure simply ensures that the test doesn't
     * happen every time the method is called.
     *
     * @param    {Node}     el    Node element
     * @param    {String}   event Event type
     * @param    {Function} fn    Callback of event
     * @return   {Function}
     */
    var on = (function () {
        if (document.addEventListener) {
            return function (el, event, fn, useCapture) {
                el.addEventListener(event, fn, useCapture === true);
            };
        } else if (document.attachEvent) {
            return function (el, event, fn) {
                el.attachEvent('on' + event, fn);
            };
        }
    }());

    /**
     * Use a closure to return proper event listener method. Try to use
     * `removeEventListener` by default but fallback to `detachEvent` for
     * unsupported browser. The closure simply ensures that the test doesn't
     * happen every time the method is called.
     *
     * @param    {Node}     el    Node element
     * @param    {String}   event Event type
     * @param    {Function} fn    Callback of event
     * @return   {Function}
     */
    var off = (function () {
        if (document.removeEventListener) {
            return function (el, event, fn, useCapture) {
                el.removeEventListener(event, fn, useCapture === true);
            };
        } else if (document.detachEvent) {
            return function (el, event, fn) {
                el.detachEvent('on' + event, fn);
            };
        }
    }());

    /**
     * Prevent default event from firing
     *
     * @param  {Event} event Event object
     * @return {undefined}

    function prevent ( event ) {
        if ( event ) {
            if ( event.preventDefault ) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        }
    }
    */
    var transition = (function () {
        var t, type;
        var supported = false;
        var transitions = {
            'animation'        : 'animationend',
            'OAnimation'       : 'oAnimationEnd oanimationend',
            'msAnimation'      : 'MSAnimationEnd',
            'MozAnimation'     : 'animationend',
            'WebkitAnimation'  : 'webkitAnimationEnd'
        };

        for (t in transitions) {
            if (document.documentElement.style[t] !== undefined) {
                type = transitions[t];
                supported = true;
                break;
            }
        }

        return {
            type: type,
            supported: supported
        };
    }());

    /**
    * Creates event handler delegate that sends the instance as last argument.
    * 
    * @return {Function}    a function wrapper which sends the instance as last argument.
    */
    function delegate(context, method) {
        return function () {
            if (arguments.length > 0) {
                var args = [];
                for (var x = 0; x < arguments.length; x += 1) {
                    args.push(arguments[x]);
                }
                args.push(context);
                return method.apply(context, args);
            }
            return method.apply(context, [null, context]);
        };
    }
    /**
    * Helper for creating a dialog close event.
    * 
    * @return {object}
    */
    function createCloseEvent(index, button) {
        return {
            index: index,
            button: button,
            cancel: false
        };
    }
    /**
    * Helper for dispatching events.
    *
    * @param  {string} evenType The type of the event to disptach.
    * @param  {object} instance The dialog instance disptaching the event.
    *
    * @return   {any}   The result of the invoked function.
    */
    function dispatchEvent(eventType, instance) {
        if ( typeof instance.get(eventType) === 'function' ) {
            return instance.get(eventType).call(instance);
        }
    }


    /**
     * Super class for all dialogs
     *
     * @return {Object}		base dialog prototype
     */
    var dialog = (function () {
        var //holds the list of used keys.
            usedKeys = [],
            //dummy variable, used to trigger dom reflow.
            reflow = null,
            //holds body tab index in case it has any.
            tabindex = false,
            //condition for detecting safari
            isSafari = window.navigator.userAgent.indexOf('Safari') > -1 && window.navigator.userAgent.indexOf('Chrome') < 0,
            //dialog building blocks
            templates = {
                dimmer:'<div class="ajs-dimmer"></div>',
                /*tab index required to fire click event before body focus*/
                modal: '<div class="ajs-modal" tabindex="0"></div>',
                dialog: '<div class="ajs-dialog" tabindex="0"></div>',
                reset: '<button class="ajs-reset"></button>',
                commands: '<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',
                header: '<div class="ajs-header"></div>',
                body: '<div class="ajs-body"></div>',
                content: '<div class="ajs-content"></div>',
                footer: '<div class="ajs-footer"></div>',
                buttons: { primary: '<div class="ajs-primary ajs-buttons"></div>', auxiliary: '<div class="ajs-auxiliary ajs-buttons"></div>' },
                button: '<button class="ajs-button"></button>',
                resizeHandle: '<div class="ajs-handle"></div>',
            },
            //common class names
            classes = {
                animationIn: 'ajs-in',
                animationOut: 'ajs-out',
                base: 'alertify',
                basic:'ajs-basic',
                capture: 'ajs-capture',
                closable:'ajs-closable',
                fixed: 'ajs-fixed',
                frameless:'ajs-frameless',
                hidden: 'ajs-hidden',
                maximize: 'ajs-maximize',
                maximized: 'ajs-maximized',
                maximizable:'ajs-maximizable',
                modeless: 'ajs-modeless',
                movable: 'ajs-movable',
                noSelection: 'ajs-no-selection',
                noOverflow: 'ajs-no-overflow',
                noPadding:'ajs-no-padding',
                pin:'ajs-pin',
                pinnable:'ajs-pinnable',
                prefix: 'ajs-',
                resizable: 'ajs-resizable',
                restore: 'ajs-restore',
                shake:'ajs-shake',
                unpinned:'ajs-unpinned',
            };

        /**
         * Helper: initializes the dialog instance
         * 
         * @return	{Number}	The total count of currently open modals.
         */
        function initialize(instance){
            
            if(!instance.__internal){

                //no need to expose init after this.
                delete instance.__init;
              
                //keep a copy of initial dialog settings
                if(!instance.__settings){
                    instance.__settings = copy(instance.settings);
                }
                
                //get dialog buttons/focus setup
                var setup;
                if(typeof instance.setup === 'function'){
                    setup = instance.setup();
                    setup.options = setup.options  || {};
                    setup.focus = setup.focus  || {};
                }else{
                    setup = {
                        buttons:[],
                        focus:{
                            element:null,
                            select:false
                        },
                        options:{
                        }
                    };
                }
                
                //initialize hooks object.
                if(typeof instance.hooks !== 'object'){
                    instance.hooks = {};
                }

                //copy buttons defintion
                var buttonsDefinition = [];
                if(Array.isArray(setup.buttons)){
                    for(var b=0;b<setup.buttons.length;b+=1){
                        var ref  = setup.buttons[b],
                            cpy = {};
                        for (var i in ref) {
                            if (ref.hasOwnProperty(i)) {
                                cpy[i] = ref[i];
                            }
                        }
                        buttonsDefinition.push(cpy);
                    }
                }

                var internal = instance.__internal = {
                    /**
                     * Flag holding the open state of the dialog
                     * 
                     * @type {Boolean}
                     */
                    isOpen:false,
                    /**
                     * Active element is the element that will receive focus after
                     * closing the dialog. It defaults as the body tag, but gets updated
                     * to the last focused element before the dialog was opened.
                     *
                     * @type {Node}
                     */
                    activeElement:document.body,
                    timerIn:undefined,
                    timerOut:undefined,
                    buttons: buttonsDefinition,
                    focus: setup.focus,
                    options: {
                        title: undefined,
                        modal: undefined,
                        basic:undefined,
                        frameless:undefined,
                        pinned: undefined,
                        movable: undefined,
                        moveBounded:undefined,
                        resizable: undefined,
                        autoReset: undefined,
                        closable: undefined,
                        closableByDimmer: undefined,
                        maximizable: undefined,
                        startMaximized: undefined,
                        pinnable: undefined,
                        transition: undefined,
                        padding:undefined,
                        overflow:undefined,
                        onshow:undefined,
                        onclosing:undefined,
                        onclose:undefined,
                        onfocus:undefined,
                        onmove:undefined,
                        onmoved:undefined,
                        onresize:undefined,
                        onresized:undefined,
                        onmaximize:undefined,
                        onmaximized:undefined,
                        onrestore:undefined,
                        onrestored:undefined
                    },
                    resetHandler:undefined,
                    beginMoveHandler:undefined,
                    beginResizeHandler:undefined,
                    bringToFrontHandler:undefined,
                    modalClickHandler:undefined,
                    buttonsClickHandler:undefined,
                    commandsClickHandler:undefined,
                    transitionInHandler:undefined,
                    transitionOutHandler:undefined,
                    destroy:undefined
                };

                var elements = {};
                //root node
                elements.root = document.createElement('div');
                
                elements.root.className = classes.base + ' ' + classes.hidden + ' ';

                elements.root.innerHTML = templates.dimmer + templates.modal;
                
                //dimmer
                elements.dimmer = elements.root.firstChild;

                //dialog
                elements.modal = elements.root.lastChild;
                elements.modal.innerHTML = templates.dialog;
                elements.dialog = elements.modal.firstChild;
                elements.dialog.innerHTML = templates.reset + templates.commands + templates.header + templates.body + templates.footer + templates.resizeHandle + templates.reset;

                //reset links
                elements.reset = [];
                elements.reset.push(elements.dialog.firstChild);
                elements.reset.push(elements.dialog.lastChild);
                
                //commands
                elements.commands = {};
                elements.commands.container = elements.reset[0].nextSibling;
                elements.commands.pin = elements.commands.container.firstChild;
                elements.commands.maximize = elements.commands.pin.nextSibling;
                elements.commands.close = elements.commands.maximize.nextSibling;
                
                //header
                elements.header = elements.commands.container.nextSibling;

                //body
                elements.body = elements.header.nextSibling;
                elements.body.innerHTML = templates.content;
                elements.content = elements.body.firstChild;

                //footer
                elements.footer = elements.body.nextSibling;
                elements.footer.innerHTML = templates.buttons.auxiliary + templates.buttons.primary;
                
                //resize handle
                elements.resizeHandle = elements.footer.nextSibling;

                //buttons
                elements.buttons = {};
                elements.buttons.auxiliary = elements.footer.firstChild;
                elements.buttons.primary = elements.buttons.auxiliary.nextSibling;
                elements.buttons.primary.innerHTML = templates.button;
                elements.buttonTemplate = elements.buttons.primary.firstChild;
                //remove button template
                elements.buttons.primary.removeChild(elements.buttonTemplate);
                               
                for(var x=0; x < instance.__internal.buttons.length; x+=1) {
                    var button = instance.__internal.buttons[x];
                    
                    // add to the list of used keys.
                    if(usedKeys.indexOf(button.key) < 0){
                        usedKeys.push(button.key);
                    }

                    button.element = elements.buttonTemplate.cloneNode();
                    button.element.innerHTML = button.text;
                    if(typeof button.className === 'string' &&  button.className !== ''){
                        addClass(button.element, button.className);
                    }
                    for(var key in button.attrs){
                        if(key !== 'className' && button.attrs.hasOwnProperty(key)){
                            button.element.setAttribute(key, button.attrs[key]);
                        }
                    }
                    if(button.scope === 'auxiliary'){
                        elements.buttons.auxiliary.appendChild(button.element);
                    }else{
                        elements.buttons.primary.appendChild(button.element);
                    }
                }
                //make elements pubic
                instance.elements = elements;
                
                //save event handlers delegates
                internal.resetHandler = delegate(instance, onReset);
                internal.beginMoveHandler = delegate(instance, beginMove);
                internal.beginResizeHandler = delegate(instance, beginResize);
                internal.bringToFrontHandler = delegate(instance, bringToFront);
                internal.modalClickHandler = delegate(instance, modalClickHandler);
                internal.buttonsClickHandler = delegate(instance, buttonsClickHandler);
                internal.commandsClickHandler = delegate(instance, commandsClickHandler);
                internal.transitionInHandler = delegate(instance, handleTransitionInEvent);
                internal.transitionOutHandler = delegate(instance, handleTransitionOutEvent);

                //settings
                for(var opKey in internal.options){
                    if(setup.options[opKey] !== undefined){
                        // if found in user options
                        instance.set(opKey, setup.options[opKey]);
                    }else if(alertify.defaults.hasOwnProperty(opKey)) {
                        // else if found in defaults options
                        instance.set(opKey, alertify.defaults[opKey]);
                    }else if(opKey === 'title' ) {
                        // else if title key, use alertify.defaults.glossary
                        instance.set(opKey, alertify.defaults.glossary[opKey]);
                    }
                }

                // allow dom customization
                if(typeof instance.build === 'function'){
                    instance.build();
                }
            }
            
            //add to the end of the DOM tree.
            document.body.appendChild(instance.elements.root);
        }

        /**
         * Helper: maintains scroll position
         *
         */
        var scrollX, scrollY;
        function saveScrollPosition(){
            scrollX = getScrollLeft();
            scrollY = getScrollTop();
        }
        function restoreScrollPosition(){
            window.scrollTo(scrollX, scrollY);
        }

        /**
         * Helper: adds/removes no-overflow class from body
         *
         */
        function ensureNoOverflow(){
            var requiresNoOverflow = 0;
            for(var x=0;x<openDialogs.length;x+=1){
                var instance = openDialogs[x];
                if(instance.isModal() || instance.isMaximized()){
                    requiresNoOverflow+=1;
                }
            }
            if(requiresNoOverflow === 0 && document.body.className.indexOf(classes.noOverflow) >= 0){
                //last open modal or last maximized one
                removeClass(document.body, classes.noOverflow);
                preventBodyShift(false);
            }else if(requiresNoOverflow > 0 && document.body.className.indexOf(classes.noOverflow) < 0){
                //first open modal or first maximized one
                preventBodyShift(true);
                addClass(document.body, classes.noOverflow);
            }
        }
        var top = '', topScroll = 0;
        /**
         * Helper: prevents body shift.
         *
         */
        function preventBodyShift(add){
            if(alertify.defaults.preventBodyShift && document.documentElement.scrollHeight > document.documentElement.clientHeight){
                if(add ){//&& openDialogs[openDialogs.length-1].elements.dialog.clientHeight <= document.documentElement.clientHeight){
                    topScroll = scrollY;
                    top = window.getComputedStyle(document.body).top;
                    addClass(document.body, classes.fixed);
                    document.body.style.top = -scrollY + 'px';
                } else {
                    scrollY = topScroll;
                    document.body.style.top = top;
                    removeClass(document.body, classes.fixed);
                    restoreScrollPosition();
                }
            }
        }
		
        /**
         * Sets the name of the transition used to show/hide the dialog
         * 
         * @param {Object} instance The dilog instance.
         *
         */
        function updateTransition(instance, value, oldValue){
            if(typeof oldValue === 'string'){
                removeClass(instance.elements.root,classes.prefix +  oldValue);
            }
            addClass(instance.elements.root, classes.prefix + value);
            reflow = instance.elements.root.offsetWidth;
        }
		
        /**
         * Toggles the dialog display mode
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function updateDisplayMode(instance){
            if(instance.get('modal')){

                //make modal
                removeClass(instance.elements.root, classes.modeless);

                //only if open
                if(instance.isOpen()){
                    unbindModelessEvents(instance);

                    //in case a pinned modless dialog was made modal while open.
                    updateAbsPositionFix(instance);

                    ensureNoOverflow();
                }
            }else{
                //make modelss
                addClass(instance.elements.root, classes.modeless);

                //only if open
                if(instance.isOpen()){
                    bindModelessEvents(instance);

                    //in case pin/unpin was called while a modal is open
                    updateAbsPositionFix(instance);

                    ensureNoOverflow();
                }
            }
        }

        /**
         * Toggles the dialog basic view mode 
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function updateBasicMode(instance){
            if (instance.get('basic')) {
                // add class
                addClass(instance.elements.root, classes.basic);
            } else {
                // remove class
                removeClass(instance.elements.root, classes.basic);
            }
        }

        /**
         * Toggles the dialog frameless view mode 
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function updateFramelessMode(instance){
            if (instance.get('frameless')) {
                // add class
                addClass(instance.elements.root, classes.frameless);
            } else {
                // remove class
                removeClass(instance.elements.root, classes.frameless);
            }
        }
		
        /**
         * Helper: Brings the modeless dialog to front, attached to modeless dialogs.
         *
         * @param {Event} event Focus event
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function bringToFront(event, instance){
            
            // Do not bring to front if preceeded by an open modal
            var index = openDialogs.indexOf(instance);
            for(var x=index+1;x<openDialogs.length;x+=1){
                if(openDialogs[x].isModal()){
                    return;
                }
            }
			
            // Bring to front by making it the last child.
            if(document.body.lastChild !== instance.elements.root){
                document.body.appendChild(instance.elements.root);
                //also make sure its at the end of the list
                openDialogs.splice(openDialogs.indexOf(instance),1);
                openDialogs.push(instance);
                setFocus(instance);
            }
			
            return false;
        }
		
        /**
         * Helper: reflects dialogs options updates
         *
         * @param {Object} instance The dilog instance.
         * @param {String} option The updated option name.
         *
         * @return	{undefined}	
         */
        function optionUpdated(instance, option, oldValue, newValue){
            switch(option){
            case 'title':
                instance.setHeader(newValue);
                break;
            case 'modal':
                updateDisplayMode(instance);
                break;
            case 'basic':
                updateBasicMode(instance);
                break;
            case 'frameless':
                updateFramelessMode(instance);
                break;
            case 'pinned':
                updatePinned(instance);
                break;
            case 'closable':
                updateClosable(instance);
                break;
            case 'maximizable':
                updateMaximizable(instance);
                break;
            case 'pinnable':
                updatePinnable(instance);
                break;
            case 'movable':
                updateMovable(instance);
                break;
            case 'resizable':
                updateResizable(instance);
                break;
            case 'padding':
                if(newValue){
                    removeClass(instance.elements.root, classes.noPadding);
                }else if(instance.elements.root.className.indexOf(classes.noPadding) < 0){
                    addClass(instance.elements.root, classes.noPadding);
                }
                break;
            case 'overflow':
                if(newValue){
                    removeClass(instance.elements.root, classes.noOverflow);
                }else if(instance.elements.root.className.indexOf(classes.noOverflow) < 0){
                    addClass(instance.elements.root, classes.noOverflow);
                }
                break;
            case 'transition':
                updateTransition(instance,newValue, oldValue);
                break;
            }

            // internal on option updated event
            if(typeof instance.hooks.onupdate === 'function'){
                instance.hooks.onupdate.call(instance, option, oldValue, newValue);
            }
        }
		
        /**
         * Helper: reflects dialogs options updates
         *
         * @param {Object} instance The dilog instance.
         * @param {Object} obj The object to set/get a value on/from.
         * @param {Function} callback The callback function to call if the key was found.
         * @param {String|Object} key A string specifying a propery name or a collection of key value pairs.
         * @param {Object} value Optional, the value associated with the key (in case it was a string).
         * @param {String} option The updated option name.
         *
         * @return	{Object} result object 
         *	The result objects has an 'op' property, indicating of this is a SET or GET operation.
         *		GET: 
         *		- found: a flag indicating if the key was found or not.
         *		- value: the property value.
         *		SET:
         *		- items: a list of key value pairs of the properties being set.
         *				each contains:
         *					- found: a flag indicating if the key was found or not.
         *					- key: the property key.
         *					- value: the property value.
         */
        function update(instance, obj, callback, key, value){
            var result = {op:undefined, items: [] };
            if(typeof value === 'undefined' && typeof key === 'string') {
                //get
                result.op = 'get';
                if(obj.hasOwnProperty(key)){
                    result.found = true;
                    result.value = obj[key];
                }else{
                    result.found = false;
                    result.value = undefined;
                }
            }
            else
            {
                var old;
                //set
                result.op = 'set';
                if(typeof key === 'object'){
                    //set multiple
                    var args = key;
                    for (var prop in args) {
                        if (obj.hasOwnProperty(prop)) {
                            if(obj[prop] !== args[prop]){
                                old = obj[prop];
                                obj[prop] = args[prop];
                                callback.call(instance,prop, old, args[prop]);
                            }
                            result.items.push({ 'key': prop, 'value': args[prop], 'found':true});
                        }else{
                            result.items.push({ 'key': prop, 'value': args[prop], 'found':false});
                        }
                    }
                } else if (typeof key === 'string'){
                    //set single
                    if (obj.hasOwnProperty(key)) {
                        if(obj[key] !== value){
                            old  = obj[key];
                            obj[key] = value;
                            callback.call(instance,key, old, value);
                        }
                        result.items.push({'key': key, 'value': value , 'found':true});

                    }else{
                        result.items.push({'key': key, 'value': value , 'found':false});
                    }
                } else {
                    //invalid params
                    throw new Error('args must be a string or object');
                }
            }
            return result;
        }


        /**
         * Triggers a close event.
         *
         * @param {Object} instance	The dilog instance.
         * 
         * @return {undefined}
         */
        function triggerClose(instance) {
            var found;
            triggerCallback(instance, function (button) {
                return found = (button.invokeOnClose === true);
            });
            //none of the buttons registered as onclose callback
            //close the dialog
            if (!found && instance.isOpen()) {
                instance.close();
            }
        }

        /**
         * Dialogs commands event handler, attached to the dialog commands element.
         *
         * @param {Event} event	DOM event object.
         * @param {Object} instance	The dilog instance.
         * 
         * @return {undefined}
         */
        function commandsClickHandler(event, instance) {
            var target = event.srcElement || event.target;
            switch (target) {
            case instance.elements.commands.pin:
                if (!instance.isPinned()) {
                    pin(instance);
                } else {
                    unpin(instance);
                }
                break;
            case instance.elements.commands.maximize:
                if (!instance.isMaximized()) {
                    maximize(instance);
                } else {
                    restore(instance);
                }
                break;
            case instance.elements.commands.close:
                triggerClose(instance);
                break;
            }
            return false;
        }

        /**
         * Helper: pins the modeless dialog.
         *
         * @param {Object} instance	The dialog instance.
         * 
         * @return {undefined}
         */
        function pin(instance) {
            //pin the dialog
            instance.set('pinned', true);
        }

        /**
         * Helper: unpins the modeless dialog.
         *
         * @param {Object} instance	The dilog instance.
         * 
         * @return {undefined}
         */
        function unpin(instance) {
            //unpin the dialog 
            instance.set('pinned', false);
        }


        /**
         * Helper: enlarges the dialog to fill the entire screen.
         *
         * @param {Object} instance	The dilog instance.
         * 
         * @return {undefined}
         */
        function maximize(instance) {
            // allow custom `onmaximize` method
            dispatchEvent('onmaximize', instance);
            //maximize the dialog 
            addClass(instance.elements.root, classes.maximized);
            if (instance.isOpen()) {
                ensureNoOverflow();
            }
            // allow custom `onmaximized` method
            dispatchEvent('onmaximized', instance);
        }

        /**
         * Helper: returns the dialog to its former size.
         *
         * @param {Object} instance	The dilog instance.
         * 
         * @return {undefined}
         */
        function restore(instance) {
            // allow custom `onrestore` method
            dispatchEvent('onrestore', instance);
            //maximize the dialog 
            removeClass(instance.elements.root, classes.maximized);
            if (instance.isOpen()) {
                ensureNoOverflow();
            }
            // allow custom `onrestored` method
            dispatchEvent('onrestored', instance);
        }

        /**
         * Show or hide the maximize box.
         *
         * @param {Object} instance The dilog instance.
         * @param {Boolean} on True to add the behavior, removes it otherwise.
         *
         * @return {undefined}
         */
        function updatePinnable(instance) {
            if (instance.get('pinnable')) {
                // add class
                addClass(instance.elements.root, classes.pinnable);
            } else {
                // remove class
                removeClass(instance.elements.root, classes.pinnable);
            }
        }

        /**
         * Helper: Fixes the absolutly positioned modal div position.
         *
         * @param {Object} instance The dialog instance.
         *
         * @return {undefined}
         */
        function addAbsPositionFix(instance) {
            var scrollLeft = getScrollLeft();
            instance.elements.modal.style.marginTop = getScrollTop() + 'px';
            instance.elements.modal.style.marginLeft = scrollLeft + 'px';
            instance.elements.modal.style.marginRight = (-scrollLeft) + 'px';
        }

        /**
         * Helper: Removes the absolutly positioned modal div position fix.
         *
         * @param {Object} instance The dialog instance.
         *
         * @return {undefined}
         */
        function removeAbsPositionFix(instance) {
            var marginTop = parseInt(instance.elements.modal.style.marginTop, 10);
            var marginLeft = parseInt(instance.elements.modal.style.marginLeft, 10);
            instance.elements.modal.style.marginTop = '';
            instance.elements.modal.style.marginLeft = '';
            instance.elements.modal.style.marginRight = '';

            if (instance.isOpen()) {
                var top = 0,
                    left = 0;
                if (instance.elements.dialog.style.top !== '') {
                    top = parseInt(instance.elements.dialog.style.top, 10);
                }
                instance.elements.dialog.style.top = (top + (marginTop - getScrollTop())) + 'px';

                if (instance.elements.dialog.style.left !== '') {
                    left = parseInt(instance.elements.dialog.style.left, 10);
                }
                instance.elements.dialog.style.left = (left + (marginLeft - getScrollLeft())) + 'px';
            }
        }
        /**
         * Helper: Adds/Removes the absolutly positioned modal div position fix based on its pinned setting.
         *
         * @param {Object} instance The dialog instance.
         *
         * @return {undefined}
         */
        function updateAbsPositionFix(instance) {
            // if modeless and unpinned add fix
            if (!instance.get('modal') && !instance.get('pinned')) {
                addAbsPositionFix(instance);
            } else {
                removeAbsPositionFix(instance);
            }
        }
        /**
         * Toggles the dialog position lock | modeless only.
         *
         * @param {Object} instance The dilog instance.
         * @param {Boolean} on True to make it modal, false otherwise.
         *
         * @return {undefined}
         */
        function updatePinned(instance) {
            if (instance.get('pinned')) {
                removeClass(instance.elements.root, classes.unpinned);
                if (instance.isOpen()) {
                    removeAbsPositionFix(instance);
                }
            } else {
                addClass(instance.elements.root, classes.unpinned);
                if (instance.isOpen() && !instance.isModal()) {
                    addAbsPositionFix(instance);
                }
            }
        }

        /**
         * Show or hide the maximize box.
         *
         * @param {Object} instance The dilog instance.
         * @param {Boolean} on True to add the behavior, removes it otherwise.
         *
         * @return {undefined}
         */
        function updateMaximizable(instance) {
            if (instance.get('maximizable')) {
                // add class
                addClass(instance.elements.root, classes.maximizable);
            } else {
                // remove class
                removeClass(instance.elements.root, classes.maximizable);
            }
        }

        /**
         * Show or hide the close box.
         *
         * @param {Object} instance The dilog instance.
         * @param {Boolean} on True to add the behavior, removes it otherwise.
         *
         * @return {undefined}
         */
        function updateClosable(instance) {
            if (instance.get('closable')) {
                // add class
                addClass(instance.elements.root, classes.closable);
                bindClosableEvents(instance);
            } else {
                // remove class
                removeClass(instance.elements.root, classes.closable);
                unbindClosableEvents(instance);
            }
        }

        // flag to cancel click event if already handled by end resize event (the mousedown, mousemove, mouseup sequence fires a click event.).
        var cancelClick = false;

        /**
         * Helper: closes the modal dialog when clicking the modal
         *
         * @param {Event} event	DOM event object.
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function modalClickHandler(event, instance) {
            var target = event.srcElement || event.target;
            if (!cancelClick && target === instance.elements.modal && instance.get('closableByDimmer') === true) {
                triggerClose(instance);
            }
            cancelClick = false;
            return false;
        }

        // flag to cancel keyup event if already handled by click event (pressing Enter on a focusted button).
        var cancelKeyup = false;
        /** 
         * Helper: triggers a button callback
         *
         * @param {Object}		The dilog instance.
         * @param {Function}	Callback to check which button triggered the event.
         *
         * @return {undefined}
         */
        function triggerCallback(instance, check) {
            for (var idx = 0; idx < instance.__internal.buttons.length; idx += 1) {
                var button = instance.__internal.buttons[idx];
                if (!button.element.disabled && check(button)) {
                    var closeEvent = createCloseEvent(idx, button);
                    if (typeof instance.callback === 'function') {
                        instance.callback.apply(instance, [closeEvent]);
                    }
                    //close the dialog only if not canceled.
                    if (closeEvent.cancel === false) {
                        instance.close();
                    }
                    break;
                }
            }
        }

        /**
         * Clicks event handler, attached to the dialog footer.
         *
         * @param {Event}		DOM event object.
         * @param {Object}		The dilog instance.
         * 
         * @return {undefined}
         */
        function buttonsClickHandler(event, instance) {
            var target = event.srcElement || event.target;
            triggerCallback(instance, function (button) {
                // if this button caused the click, cancel keyup event
                return button.element === target && (cancelKeyup = true);
            });
        }

        /**
         * Keyup event handler, attached to the document.body
         *
         * @param {Event}		DOM event object.
         * @param {Object}		The dilog instance.
         * 
         * @return {undefined}
         */
        function keyupHandler(event) {
            //hitting enter while button has focus will trigger keyup too.
            //ignore if handled by clickHandler
            if (cancelKeyup) {
                cancelKeyup = false;
                return;
            }
            var instance = openDialogs[openDialogs.length - 1];
            var keyCode = event.keyCode;
            if (instance.__internal.buttons.length === 0 && keyCode === keys.ESC && instance.get('closable') === true) {
                triggerClose(instance);
                return false;
            }else if (usedKeys.indexOf(keyCode) > -1) {
                triggerCallback(instance, function (button) {
                    return button.key === keyCode;
                });
                return false;
            }
        }
        /**
        * Keydown event handler, attached to the document.body
        *
        * @param {Event}		DOM event object.
        * @param {Object}		The dilog instance.
        * 
        * @return {undefined}
        */
        function keydownHandler(event) {
            var instance = openDialogs[openDialogs.length - 1];
            var keyCode = event.keyCode;
            if (keyCode === keys.LEFT || keyCode === keys.RIGHT) {
                var buttons = instance.__internal.buttons;
                for (var x = 0; x < buttons.length; x += 1) {
                    if (document.activeElement === buttons[x].element) {
                        switch (keyCode) {
                        case keys.LEFT:
                            buttons[(x || buttons.length) - 1].element.focus();
                            return;
                        case keys.RIGHT:
                            buttons[(x + 1) % buttons.length].element.focus();
                            return;
                        }
                    }
                }
            }else if (keyCode < keys.F12 + 1 && keyCode > keys.F1 - 1 && usedKeys.indexOf(keyCode) > -1) {
                event.preventDefault();
                event.stopPropagation();
                triggerCallback(instance, function (button) {
                    return button.key === keyCode;
                });
                return false;
            }
        }


        /**
         * Sets focus to proper dialog element
         *
         * @param {Object} instance The dilog instance.
         * @param {Node} [resetTarget=undefined] DOM element to reset focus to.
         *
         * @return {undefined}
         */
        function setFocus(instance, resetTarget) {
            // reset target has already been determined.
            if (resetTarget) {
                resetTarget.focus();
            } else {
                // current instance focus settings
                var focus = instance.__internal.focus;
                // the focus element.
                var element = focus.element;

                switch (typeof focus.element) {
                // a number means a button index
                case 'number':
                    if (instance.__internal.buttons.length > focus.element) {
                        //in basic view, skip focusing the buttons.
                        if (instance.get('basic') === true) {
                            element = instance.elements.reset[0];
                        } else {
                            element = instance.__internal.buttons[focus.element].element;
                        }
                    }
                    break;
                // a string means querySelector to select from dialog body contents.
                case 'string':
                    element = instance.elements.body.querySelector(focus.element);
                    break;
                // a function should return the focus element.
                case 'function':
                    element = focus.element.call(instance);
                    break;
                }
                
                // if no focus element, default to first reset element.
                if ((typeof element === 'undefined' || element === null) && instance.__internal.buttons.length === 0) {
                    element = instance.elements.reset[0];
                }
                // focus
                if (element && element.focus) {
                    element.focus();
                    // if selectable
                    if (focus.select && element.select) {
                        element.select();
                    }
                }
            }
        }

        /**
         * Focus event handler, attached to document.body and dialogs own reset links.
         * handles the focus for modal dialogs only.
         *
         * @param {Event} event DOM focus event object.
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function onReset(event, instance) {

            // should work on last modal if triggered from document.body 
            if (!instance) {
                for (var x = openDialogs.length - 1; x > -1; x -= 1) {
                    if (openDialogs[x].isModal()) {
                        instance = openDialogs[x];
                        break;
                    }
                }
            }
            // if modal
            if (instance && instance.isModal()) {
                // determine reset target to enable forward/backward tab cycle.
                var resetTarget, target = event.srcElement || event.target;
                var lastResetElement = target === instance.elements.reset[1] || (instance.__internal.buttons.length === 0 && target === document.body);

                // if last reset link, then go to maximize or close
                if (lastResetElement) {
                    if (instance.get('maximizable')) {
                        resetTarget = instance.elements.commands.maximize;
                    } else if (instance.get('closable')) {
                        resetTarget = instance.elements.commands.close;
                    }
                }
                // if no reset target found, try finding the best button
                if (resetTarget === undefined) {
                    if (typeof instance.__internal.focus.element === 'number') {
                        // button focus element, go to first available button
                        if (target === instance.elements.reset[0]) {
                            resetTarget = instance.elements.buttons.auxiliary.firstChild || instance.elements.buttons.primary.firstChild;
                        } else if (lastResetElement) {
                            //restart the cycle by going to first reset link
                            resetTarget = instance.elements.reset[0];
                        }
                    } else {
                        // will reach here when tapping backwards, so go to last child
                        // The focus element SHOULD NOT be a button (logically!).
                        if (target === instance.elements.reset[0]) {
                            resetTarget = instance.elements.buttons.primary.lastChild || instance.elements.buttons.auxiliary.lastChild;
                        }
                    }
                }
                // focus
                setFocus(instance, resetTarget);
            }
        }
        /**
         * Transition in transitionend event handler. 
         *
         * @param {Event}		TransitionEnd event object.
         * @param {Object}		The dilog instance.
         *
         * @return {undefined}
         */
        function handleTransitionInEvent(event, instance) {
            // clear the timer
            clearTimeout(instance.__internal.timerIn);

            // once transition is complete, set focus
            setFocus(instance);

            //restore scroll to prevent document jump
            restoreScrollPosition();

            // allow handling key up after transition ended.
            cancelKeyup = false;

            // allow custom `onfocus` method
            dispatchEvent('onfocus', instance);

            // unbind the event
            off(instance.elements.dialog, transition.type, instance.__internal.transitionInHandler);

            removeClass(instance.elements.root, classes.animationIn);
        }

        /**
         * Transition out transitionend event handler. 
         *
         * @param {Event}		TransitionEnd event object.
         * @param {Object}		The dilog instance.
         *
         * @return {undefined}
         */
        function handleTransitionOutEvent(event, instance) {
            // clear the timer
            clearTimeout(instance.__internal.timerOut);
            // unbind the event
            off(instance.elements.dialog, transition.type, instance.__internal.transitionOutHandler);

            // reset move updates
            resetMove(instance);
            // reset resize updates
            resetResize(instance);

            // restore if maximized
            if (instance.isMaximized() && !instance.get('startMaximized')) {
                restore(instance);
            }

            // return focus to the last active element
            if (alertify.defaults.maintainFocus && instance.__internal.activeElement) {
                instance.__internal.activeElement.focus();
                instance.__internal.activeElement = null;
            }
            
            //destory the instance
            if (typeof instance.__internal.destroy === 'function') {
                instance.__internal.destroy.apply(instance);
            }
        }
        /* Controls moving a dialog around */
        //holde the current moving instance
        var movable = null,
            //holds the current X offset when move starts
            offsetX = 0,
            //holds the current Y offset when move starts
            offsetY = 0,
            xProp = 'pageX',
            yProp = 'pageY',
            bounds = null,
            refreshTop = false,
            moveDelegate = null;

        /**
         * Helper: sets the element top/left coordinates
         *
         * @param {Event} event	DOM event object.
         * @param {Node} element The element being moved.
         * 
         * @return {undefined}
         */
        function moveElement(event, element) {
            var left = (event[xProp] - offsetX),
                top  = (event[yProp] - offsetY);

            if(refreshTop){
                top -= document.body.scrollTop;
            }
           
            element.style.left = left + 'px';
            element.style.top = top + 'px';
           
        }
        /**
         * Helper: sets the element top/left coordinates within screen bounds
         *
         * @param {Event} event	DOM event object.
         * @param {Node} element The element being moved.
         * 
         * @return {undefined}
         */
        function moveElementBounded(event, element) {
            var left = (event[xProp] - offsetX),
                top  = (event[yProp] - offsetY);

            if(refreshTop){
                top -= document.body.scrollTop;
            }
            
            element.style.left = Math.min(bounds.maxLeft, Math.max(bounds.minLeft, left)) + 'px';
            if(refreshTop){
                element.style.top = Math.min(bounds.maxTop, Math.max(bounds.minTop, top)) + 'px';
            }else{
                element.style.top = Math.max(bounds.minTop, top) + 'px';
            }
        }
            

        /**
         * Triggers the start of a move event, attached to the header element mouse down event.
         * Adds no-selection class to the body, disabling selection while moving.
         *
         * @param {Event} event	DOM event object.
         * @param {Object} instance The dilog instance.
         * 
         * @return {Boolean} false
         */
        function beginMove(event, instance) {
            if (resizable === null && !instance.isMaximized() && instance.get('movable')) {
                var eventSrc, left=0, top=0;
                if (event.type === 'touchstart') {
                    event.preventDefault();
                    eventSrc = event.targetTouches[0];
                    xProp = 'clientX';
                    yProp = 'clientY';
                } else if (event.button === 0) {
                    eventSrc = event;
                }

                if (eventSrc) {

                    var element = instance.elements.dialog;
                    addClass(element, classes.capture);

                    if (element.style.left) {
                        left = parseInt(element.style.left, 10);
                    }

                    if (element.style.top) {
                        top = parseInt(element.style.top, 10);
                    }
                    
                    offsetX = eventSrc[xProp] - left;
                    offsetY = eventSrc[yProp] - top;

                    if(instance.isModal()){
                        offsetY += instance.elements.modal.scrollTop;
                    }else if(instance.isPinned()){
                        offsetY -= document.body.scrollTop;
                    }
                    
                    if(instance.get('moveBounded')){
                        var current = element,
                            offsetLeft = -left,
                            offsetTop = -top;
                        
                        //calc offset
                        do {
                            offsetLeft += current.offsetLeft;
                            offsetTop += current.offsetTop;
                        } while (current = current.offsetParent);
                        
                        bounds = {
                            maxLeft : offsetLeft,
                            minLeft : -offsetLeft,
                            maxTop  : document.documentElement.clientHeight - element.clientHeight - offsetTop,
                            minTop  : -offsetTop
                        };
                        moveDelegate = moveElementBounded;
                    }else{
                        bounds = null;
                        moveDelegate = moveElement;
                    }
                    
                    // allow custom `onmove` method
                    dispatchEvent('onmove', instance);

                    refreshTop = !instance.isModal() && instance.isPinned();
                    movable = instance;
                    moveDelegate(eventSrc, element);
                    addClass(document.body, classes.noSelection);
                    return false;
                }
            }
        }

        /**
         * The actual move handler,  attached to document.body mousemove event.
         *
         * @param {Event} event	DOM event object.
         * 
         * @return {undefined}
         */
        function move(event) {
            if (movable) {
                var eventSrc;
                if (event.type === 'touchmove') {
                    event.preventDefault();
                    eventSrc = event.targetTouches[0];
                } else if (event.button === 0) {
                    eventSrc = event;
                }
                if (eventSrc) {
                    moveDelegate(eventSrc, movable.elements.dialog);
                }
            }
        }

        /**
         * Triggers the end of a move event,  attached to document.body mouseup event.
         * Removes no-selection class from document.body, allowing selection.
         *
         * @return {undefined}
         */
        function endMove() {
            if (movable) {
                var instance = movable;
                movable = bounds = null;
                removeClass(document.body, classes.noSelection);
                removeClass(instance.elements.dialog, classes.capture);
                // allow custom `onmoved` method
                dispatchEvent('onmoved', instance);
            }
        }

        /**
         * Resets any changes made by moving the element to its original state,
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function resetMove(instance) {
            movable = null;
            var element = instance.elements.dialog;
            element.style.left = element.style.top = '';
        }

        /**
         * Updates the dialog move behavior.
         *
         * @param {Object} instance The dilog instance.
         * @param {Boolean} on True to add the behavior, removes it otherwise.
         *
         * @return {undefined}
         */
        function updateMovable(instance) {
            if (instance.get('movable')) {
                // add class
                addClass(instance.elements.root, classes.movable);
                if (instance.isOpen()) {
                    bindMovableEvents(instance);
                }
            } else {

                //reset
                resetMove(instance);
                // remove class
                removeClass(instance.elements.root, classes.movable);
                if (instance.isOpen()) {
                    unbindMovableEvents(instance);
                }
            }
        }

        /* Controls moving a dialog around */
        //holde the current instance being resized		
        var resizable = null,
            //holds the staring left offset when resize starts.
            startingLeft = Number.Nan,
            //holds the staring width when resize starts.
            startingWidth = 0,
            //holds the initial width when resized for the first time.
            minWidth = 0,
            //holds the offset of the resize handle.
            handleOffset = 0;

        /**
         * Helper: sets the element width/height and updates left coordinate if neccessary.
         *
         * @param {Event} event	DOM mousemove event object.
         * @param {Node} element The element being moved.
         * @param {Boolean} pinned A flag indicating if the element being resized is pinned to the screen.
         * 
         * @return {undefined}
         */
        function resizeElement(event, element, pageRelative) {

            //calculate offsets from 0,0
            var current = element;
            var offsetLeft = 0;
            var offsetTop = 0;
            do {
                offsetLeft += current.offsetLeft;
                offsetTop += current.offsetTop;
            } while (current = current.offsetParent);

            // determine X,Y coordinates.
            var X, Y;
            if (pageRelative === true) {
                X = event.pageX;
                Y = event.pageY;
            } else {
                X = event.clientX;
                Y = event.clientY;
            }
            // rtl handling
            var isRTL = isRightToLeft();
            if (isRTL) {
                // reverse X 
                X = document.body.offsetWidth - X;
                // if has a starting left, calculate offsetRight
                if (!isNaN(startingLeft)) {
                    offsetLeft = document.body.offsetWidth - offsetLeft - element.offsetWidth;
                }
            }

            // set width/height
            element.style.height = (Y - offsetTop + handleOffset) + 'px';
            element.style.width = (X - offsetLeft + handleOffset) + 'px';

            // if the element being resized has a starting left, maintain it.
            // the dialog is centered, divide by half the offset to maintain the margins.
            if (!isNaN(startingLeft)) {
                var diff = Math.abs(element.offsetWidth - startingWidth) * 0.5;
                if (isRTL) {
                    //negate the diff, why?
                    //when growing it should decrease left
                    //when shrinking it should increase left
                    diff *= -1;
                }
                if (element.offsetWidth > startingWidth) {
                    //growing
                    element.style.left = (startingLeft + diff) + 'px';
                } else if (element.offsetWidth >= minWidth) {
                    //shrinking
                    element.style.left = (startingLeft - diff) + 'px';
                }
            }
        }

        /**
         * Triggers the start of a resize event, attached to the resize handle element mouse down event.
         * Adds no-selection class to the body, disabling selection while moving.
         *
         * @param {Event} event	DOM event object.
         * @param {Object} instance The dilog instance.
         * 
         * @return {Boolean} false
         */
        function beginResize(event, instance) {
            if (!instance.isMaximized()) {
                var eventSrc;
                if (event.type === 'touchstart') {
                    event.preventDefault();
                    eventSrc = event.targetTouches[0];
                } else if (event.button === 0) {
                    eventSrc = event;
                }
                if (eventSrc) {
                    // allow custom `onresize` method
                    dispatchEvent('onresize', instance);
                    
                    resizable = instance;
                    handleOffset = instance.elements.resizeHandle.offsetHeight / 2;
                    var element = instance.elements.dialog;
                    addClass(element, classes.capture);
                    startingLeft = parseInt(element.style.left, 10);
                    element.style.height = element.offsetHeight + 'px';
                    element.style.minHeight = instance.elements.header.offsetHeight + instance.elements.footer.offsetHeight + 'px';
                    element.style.width = (startingWidth = element.offsetWidth) + 'px';

                    if (element.style.maxWidth !== 'none') {
                        element.style.minWidth = (minWidth = element.offsetWidth) + 'px';
                    }
                    element.style.maxWidth = 'none';
                    addClass(document.body, classes.noSelection);
                    return false;
                }
            }
        }

        /**
         * The actual resize handler,  attached to document.body mousemove event.
         *
         * @param {Event} event	DOM event object.
         * 
         * @return {undefined}
         */
        function resize(event) {
            if (resizable) {
                var eventSrc;
                if (event.type === 'touchmove') {
                    event.preventDefault();
                    eventSrc = event.targetTouches[0];
                } else if (event.button === 0) {
                    eventSrc = event;
                }
                if (eventSrc) {
                    resizeElement(eventSrc, resizable.elements.dialog, !resizable.get('modal') && !resizable.get('pinned'));
                }
            }
        }

        /**
         * Triggers the end of a resize event,  attached to document.body mouseup event.
         * Removes no-selection class from document.body, allowing selection.
         *
         * @return {undefined}
         */
        function endResize() {
            if (resizable) {
                var instance = resizable;
                resizable = null;
                removeClass(document.body, classes.noSelection);
                removeClass(instance.elements.dialog, classes.capture);
                cancelClick = true;
                // allow custom `onresized` method
                dispatchEvent('onresized', instance);
            }
        }

        /**
         * Resets any changes made by resizing the element to its original state.
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function resetResize(instance) {
            resizable = null;
            var element = instance.elements.dialog;
            if (element.style.maxWidth === 'none') {
                //clear inline styles.
                element.style.maxWidth = element.style.minWidth = element.style.width = element.style.height = element.style.minHeight = element.style.left = '';
                //reset variables.
                startingLeft = Number.Nan;
                startingWidth = minWidth = handleOffset = 0;
            }
        }


        /**
         * Updates the dialog move behavior.
         *
         * @param {Object} instance The dilog instance.
         * @param {Boolean} on True to add the behavior, removes it otherwise.
         *
         * @return {undefined}
         */
        function updateResizable(instance) {
            if (instance.get('resizable')) {
                // add class
                addClass(instance.elements.root, classes.resizable);
                if (instance.isOpen()) {
                    bindResizableEvents(instance);
                }
            } else {
                //reset
                resetResize(instance);
                // remove class
                removeClass(instance.elements.root, classes.resizable);
                if (instance.isOpen()) {
                    unbindResizableEvents(instance);
                }
            }
        }

        /**
         * Reset move/resize on window resize.
         *
         * @param {Event} event	window resize event object.
         *
         * @return {undefined}
         */
        function windowResize(/*event*/) {
            for (var x = 0; x < openDialogs.length; x += 1) {
                var instance = openDialogs[x];
                if (instance.get('autoReset')) {
                    resetMove(instance);
                    resetResize(instance);
                }
            }
        }
        /**
         * Bind dialogs events
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function bindEvents(instance) {
            // if first dialog, hook global handlers
            if (openDialogs.length === 1) {
                //global
                on(window, 'resize', windowResize);
                on(document.body, 'keyup', keyupHandler);
                on(document.body, 'keydown', keydownHandler);
                on(document.body, 'focus', onReset);

                //move
                on(document.documentElement, 'mousemove', move);
                on(document.documentElement, 'touchmove', move);
                on(document.documentElement, 'mouseup', endMove);
                on(document.documentElement, 'touchend', endMove);
                //resize
                on(document.documentElement, 'mousemove', resize);
                on(document.documentElement, 'touchmove', resize);
                on(document.documentElement, 'mouseup', endResize);
                on(document.documentElement, 'touchend', endResize);
            }

            // common events
            on(instance.elements.commands.container, 'click', instance.__internal.commandsClickHandler);
            on(instance.elements.footer, 'click', instance.__internal.buttonsClickHandler);
            on(instance.elements.reset[0], 'focus', instance.__internal.resetHandler);
            on(instance.elements.reset[1], 'focus', instance.__internal.resetHandler);

            //prevent handling key up when dialog is being opened by a key stroke.
            cancelKeyup = true;
            // hook in transition handler
            on(instance.elements.dialog, transition.type, instance.__internal.transitionInHandler);

            // modelss only events
            if (!instance.get('modal')) {
                bindModelessEvents(instance);
            }

            // resizable
            if (instance.get('resizable')) {
                bindResizableEvents(instance);
            }

            // movable
            if (instance.get('movable')) {
                bindMovableEvents(instance);
            }
        }

        /**
         * Unbind dialogs events
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function unbindEvents(instance) {
            // if last dialog, remove global handlers
            if (openDialogs.length === 1) {
                //global
                off(window, 'resize', windowResize);
                off(document.body, 'keyup', keyupHandler);
                off(document.body, 'keydown', keydownHandler);
                off(document.body, 'focus', onReset);
                //move
                off(document.documentElement, 'mousemove', move);
                off(document.documentElement, 'mouseup', endMove);
                //resize
                off(document.documentElement, 'mousemove', resize);
                off(document.documentElement, 'mouseup', endResize);
            }

            // common events
            off(instance.elements.commands.container, 'click', instance.__internal.commandsClickHandler);
            off(instance.elements.footer, 'click', instance.__internal.buttonsClickHandler);
            off(instance.elements.reset[0], 'focus', instance.__internal.resetHandler);
            off(instance.elements.reset[1], 'focus', instance.__internal.resetHandler);

            // hook out transition handler
            on(instance.elements.dialog, transition.type, instance.__internal.transitionOutHandler);

            // modelss only events
            if (!instance.get('modal')) {
                unbindModelessEvents(instance);
            }

            // movable
            if (instance.get('movable')) {
                unbindMovableEvents(instance);
            }

            // resizable
            if (instance.get('resizable')) {
                unbindResizableEvents(instance);
            }

        }

        /**
         * Bind modeless specific events
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function bindModelessEvents(instance) {
            on(instance.elements.dialog, 'focus', instance.__internal.bringToFrontHandler, true);
        }

        /**
         * Unbind modeless specific events
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function unbindModelessEvents(instance) {
            off(instance.elements.dialog, 'focus', instance.__internal.bringToFrontHandler, true);
        }



        /**
         * Bind movable specific events
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function bindMovableEvents(instance) {
            on(instance.elements.header, 'mousedown', instance.__internal.beginMoveHandler);
            on(instance.elements.header, 'touchstart', instance.__internal.beginMoveHandler);
        }

        /**
         * Unbind movable specific events
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function unbindMovableEvents(instance) {
            off(instance.elements.header, 'mousedown', instance.__internal.beginMoveHandler);
            off(instance.elements.header, 'touchstart', instance.__internal.beginMoveHandler);
        }



        /**
         * Bind resizable specific events
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function bindResizableEvents(instance) {
            on(instance.elements.resizeHandle, 'mousedown', instance.__internal.beginResizeHandler);
            on(instance.elements.resizeHandle, 'touchstart', instance.__internal.beginResizeHandler);
        }

        /**
         * Unbind resizable specific events
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function unbindResizableEvents(instance) {
            off(instance.elements.resizeHandle, 'mousedown', instance.__internal.beginResizeHandler);
            off(instance.elements.resizeHandle, 'touchstart', instance.__internal.beginResizeHandler);
        }

        /**
         * Bind closable events
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function bindClosableEvents(instance) {
            on(instance.elements.modal, 'click', instance.__internal.modalClickHandler);
        }

        /**
         * Unbind closable specific events
         *
         * @param {Object} instance The dilog instance.
         *
         * @return {undefined}
         */
        function unbindClosableEvents(instance) {
            off(instance.elements.modal, 'click', instance.__internal.modalClickHandler);
        }
        // dialog API
        return {
            __init:initialize,
            /**
             * Check if dialog is currently open
             *
             * @return {Boolean}
             */
            isOpen: function () {
                return this.__internal.isOpen;
            },
            isModal: function (){
                return this.elements.root.className.indexOf(classes.modeless) < 0;
            },
            isMaximized:function(){
                return this.elements.root.className.indexOf(classes.maximized) > -1;
            },
            isPinned:function(){
                return this.elements.root.className.indexOf(classes.unpinned) < 0;
            },
            maximize:function(){
                if(!this.isMaximized()){
                    maximize(this);
                }
                return this;
            },
            restore:function(){
                if(this.isMaximized()){
                    restore(this);
                }
                return this;
            },
            pin:function(){
                if(!this.isPinned()){
                    pin(this);
                }
                return this;
            },
            unpin:function(){
                if(this.isPinned()){
                    unpin(this);
                }
                return this;
            },
            bringToFront:function(){
                bringToFront(null, this);
                return this;
            },
            /**
             * Move the dialog to a specific x/y coordinates
             *
             * @param {Number} x    The new dialog x coordinate in pixels.
             * @param {Number} y    The new dialog y coordinate in pixels.
             *
             * @return {Object} The dialog instance.
             */
            moveTo:function(x,y){
                if(!isNaN(x) && !isNaN(y)){
                    // allow custom `onmove` method
                    dispatchEvent('onmove', this);
                    
                    var element = this.elements.dialog,
                        current = element,
                        offsetLeft = 0,
                        offsetTop = 0;
                    
                    //subtract existing left,top
                    if (element.style.left) {
                        offsetLeft -= parseInt(element.style.left, 10);
                    }
                    if (element.style.top) {
                        offsetTop -= parseInt(element.style.top, 10);
                    }
                    //calc offset
                    do {
                        offsetLeft += current.offsetLeft;
                        offsetTop += current.offsetTop;
                    } while (current = current.offsetParent);

                    //calc left, top
                    var left = (x - offsetLeft);
                    var top  = (y - offsetTop);

                    //// rtl handling
                    if (isRightToLeft()) {
                        left *= -1;
                    }

                    element.style.left = left + 'px';
                    element.style.top = top + 'px';
                    
                    // allow custom `onmoved` method
                    dispatchEvent('onmoved', this);
                }
                return this;
            },
            /**
             * Resize the dialog to a specific width/height (the dialog must be 'resizable').
             * The dialog can be resized to:
             *  A minimum width equal to the initial display width
             *  A minimum height equal to the sum of header/footer heights.
             *
             *
             * @param {Number or String} width    The new dialog width in pixels or in percent.
             * @param {Number or String} height   The new dialog height in pixels or in percent.
             *
             * @return {Object} The dialog instance.
             */
            resizeTo:function(width,height){
                var w = parseFloat(width),
                    h = parseFloat(height),
                    regex = /(\d*\.\d+|\d+)%/;

                if(!isNaN(w) && !isNaN(h) && this.get('resizable') === true){
                    
                    // allow custom `onresize` method
                    dispatchEvent('onresize', this);
                    
                    if(('' + width).match(regex)){
                        w = w / 100 * document.documentElement.clientWidth ;
                    }

                    if(('' + height).match(regex)){
                        h = h / 100 * document.documentElement.clientHeight;
                    }

                    var element = this.elements.dialog;
                    if (element.style.maxWidth !== 'none') {
                        element.style.minWidth = (minWidth = element.offsetWidth) + 'px';
                    }
                    element.style.maxWidth = 'none';
                    element.style.minHeight = this.elements.header.offsetHeight + this.elements.footer.offsetHeight + 'px';
                    element.style.width = w + 'px';
                    element.style.height = h + 'px';
                    
                    // allow custom `onresized` method
                    dispatchEvent('onresized', this);
                }
                return this;
            },
            /**
             * Gets or Sets dialog settings/options 
             *
             * @param {String|Object} key A string specifying a propery name or a collection of key/value pairs.
             * @param {Object} value Optional, the value associated with the key (in case it was a string).
             *
             * @return {undefined}
             */
            setting : function (key, value) {
                var self = this;
                var result = update(this, this.__internal.options, function(k,o,n){ optionUpdated(self,k,o,n); }, key, value);
                if(result.op === 'get'){
                    if(result.found){
                        return result.value;
                    }else if(typeof this.settings !== 'undefined'){
                        return update(this, this.settings, this.settingUpdated || function(){}, key, value).value;
                    }else{
                        return undefined;
                    }
                }else if(result.op === 'set'){
                    if(result.items.length > 0){
                        var callback = this.settingUpdated || function(){};
                        for(var x=0;x<result.items.length;x+=1){
                            var item = result.items[x];
                            if(!item.found && typeof this.settings !== 'undefined'){
                                update(this, this.settings, callback, item.key, item.value);
                            }
                        }
                    }
                    return this;
                }
            },
            /**
             * [Alias] Sets dialog settings/options 
             */
            set:function(key, value){
                this.setting(key,value);
                return this;
            },
            /**
             * [Alias] Gets dialog settings/options 
             */
            get:function(key){
                return this.setting(key);
            },
            /**
            * Sets dialog header
            * @content {string or element}
            *
            * @return {undefined}
            */
            setHeader:function(content){
                if(typeof content === 'string'){
                    clearContents(this.elements.header);
                    this.elements.header.innerHTML = content;
                }else if (content instanceof window.HTMLElement && this.elements.header.firstChild !== content){
                    clearContents(this.elements.header);
                    this.elements.header.appendChild(content);
                }
                return this;
            },
            /**
            * Sets dialog contents
            * @content {string or element}
            *
            * @return {undefined}
            */
            setContent:function(content){
                if(typeof content === 'string'){
                    clearContents(this.elements.content);
                    this.elements.content.innerHTML = content;
                }else if (content instanceof window.HTMLElement && this.elements.content.firstChild !== content){
                    clearContents(this.elements.content);
                    this.elements.content.appendChild(content);
                }
                return this;
            },
            /**
             * Show the dialog as modal
             *
             * @return {Object} the dialog instance.
             */
            showModal: function(className){
                return this.show(true, className);
            },
            /**
             * Show the dialog
             *
             * @return {Object} the dialog instance.
             */
            show: function (modal, className) {
                
                // ensure initialization
                initialize(this);

                if ( !this.__internal.isOpen ) {

                    // add to open dialogs
                    this.__internal.isOpen = true;
                    openDialogs.push(this);

                    // save last focused element
                    if(alertify.defaults.maintainFocus){
                        this.__internal.activeElement = document.activeElement;
                    }

                    // set tabindex attribute on body element this allows script to give it focusable
                    if(!document.body.hasAttribute('tabindex')) {
                        document.body.setAttribute( 'tabindex', tabindex = '0');
                    }

                    //allow custom dom manipulation updates before showing the dialog.
                    if(typeof this.prepare === 'function'){
                        this.prepare();
                    }

                    bindEvents(this);

                    if(modal !== undefined){
                        this.set('modal', modal);
                    }

                    //save scroll to prevent document jump
                    saveScrollPosition();

                    ensureNoOverflow();

                    // allow custom dialog class on show
                    if(typeof className === 'string' && className !== ''){
                        this.__internal.className = className;
                        addClass(this.elements.root, className);
                    }

                    // maximize if start maximized
                    if ( this.get('startMaximized')) {
                        this.maximize();
                    }else if(this.isMaximized()){
                        restore(this);
                    }

                    updateAbsPositionFix(this);

                    removeClass(this.elements.root, classes.animationOut);
                    addClass(this.elements.root, classes.animationIn);

                    // set 1s fallback in case transition event doesn't fire
                    clearTimeout( this.__internal.timerIn);
                    this.__internal.timerIn = setTimeout( this.__internal.transitionInHandler, transition.supported ? 1000 : 100 );

                    if(isSafari){
                        // force desktop safari reflow
                        var root = this.elements.root;
                        root.style.display  = 'none';
                        setTimeout(function(){root.style.display  = 'block';}, 0);
                    }

                    //reflow
                    reflow = this.elements.root.offsetWidth;
                  
                    // show dialog
                    removeClass(this.elements.root, classes.hidden);

                    // internal on show event
                    if(typeof this.hooks.onshow === 'function'){
                        this.hooks.onshow.call(this);
                    }

                    // allow custom `onshow` method
                    dispatchEvent('onshow', this);

                }else{
                    // reset move updates
                    resetMove(this);
                    // reset resize updates
                    resetResize(this);
                    // shake the dialog to indicate its already open
                    addClass(this.elements.dialog, classes.shake);
                    var self = this;
                    setTimeout(function(){
                        removeClass(self.elements.dialog, classes.shake);
                    },200);
                }
                return this;
            },
            /**
             * Close the dialog
             *
             * @return {Object} The dialog instance
             */
            close: function () {
                if (this.__internal.isOpen ) {
                    // custom `onclosing` event
                    if(dispatchEvent('onclosing', this) !== false){

                        unbindEvents(this);

                        removeClass(this.elements.root, classes.animationIn);
                        addClass(this.elements.root, classes.animationOut);

                        // set 1s fallback in case transition event doesn't fire
                        clearTimeout( this.__internal.timerOut );
                        this.__internal.timerOut = setTimeout( this.__internal.transitionOutHandler, transition.supported ? 1000 : 100 );
                        // hide dialog
                        addClass(this.elements.root, classes.hidden);
                        //reflow
                        reflow = this.elements.modal.offsetWidth;

                        // remove custom dialog class on hide
                        if (typeof this.__internal.className !== 'undefined' && this.__internal.className !== '') {
                            removeClass(this.elements.root, this.__internal.className);
                        }

                        // internal on close event
                        if(typeof this.hooks.onclose === 'function'){
                            this.hooks.onclose.call(this);
                        }

                        // allow custom `onclose` method
                        dispatchEvent('onclose', this);

                        //remove from open dialogs
                        openDialogs.splice(openDialogs.indexOf(this),1);
                        this.__internal.isOpen = false;

                        ensureNoOverflow();
                    }

                }
                // last dialog and tab index was set by us, remove it.
                if(!openDialogs.length && tabindex === '0'){
                    document.body.removeAttribute('tabindex');
                }
                return this;
            },
            /**
             * Close all open dialogs except this.
             *
             * @return {undefined}
             */
            closeOthers:function(){
                alertify.closeAll(this);
                return this;
            },
            /**
             * Destroys this dialog instance
             *
             * @return {undefined}
             */
            destroy:function(){
                if (this.__internal.isOpen ) {
                    //mark dialog for destruction, this will be called on tranistionOut event.
                    this.__internal.destroy = function(){
                        destruct(this, initialize);
                    };
                    //close the dialog to unbind all events.
                    this.close();
                }else{
                    destruct(this, initialize);
                }
                return this;
            },
        };
	} () );
    var notifier = (function () {
        var reflow,
            element,
            openInstances = [],
            classes = {
                base: 'alertify-notifier',
                message: 'ajs-message',
                top: 'ajs-top',
                right: 'ajs-right',
                bottom: 'ajs-bottom',
                left: 'ajs-left',
                center: 'ajs-center',
                visible: 'ajs-visible',
                hidden: 'ajs-hidden',
                close: 'ajs-close'
            };
        /**
         * Helper: initializes the notifier instance
         *
         */
        function initialize(instance) {

            if (!instance.__internal) {
                instance.__internal = {
                    position: alertify.defaults.notifier.position,
                    delay: alertify.defaults.notifier.delay,
                };

                element = document.createElement('DIV');

                updatePosition(instance);
            }

            //add to DOM tree.
            if (element.parentNode !== document.body) {
                document.body.appendChild(element);
            }
        }

        function pushInstance(instance) {
            instance.__internal.pushed = true;
            openInstances.push(instance);
        }
        function popInstance(instance) {
            openInstances.splice(openInstances.indexOf(instance), 1);
            instance.__internal.pushed = false;
        }
        /**
         * Helper: update the notifier instance position
         *
         */
        function updatePosition(instance) {
            element.className = classes.base;
            switch (instance.__internal.position) {
            case 'top-right':
                addClass(element, classes.top + ' ' + classes.right);
                break;
            case 'top-left':
                addClass(element, classes.top + ' ' + classes.left);
                break;
            case 'top-center':
                addClass(element, classes.top + ' ' + classes.center);
                break;
            case 'bottom-left':
                addClass(element, classes.bottom + ' ' + classes.left);
                break;
            case 'bottom-center':
                addClass(element, classes.bottom + ' ' + classes.center);
                break;

            default:
            case 'bottom-right':
                addClass(element, classes.bottom + ' ' + classes.right);
                break;
            }
        }

        /**
        * creates a new notification message
        *
        * @param  {DOMElement} message	The notifier message element
        * @param  {Number} wait   Time (in ms) to wait before the message is dismissed, a value of 0 means keep open till clicked.
        * @param  {Function} callback A callback function to be invoked when the message is dismissed.
        *
        * @return {undefined}
        */
        function create(div, callback) {

            function clickDelegate(event, instance) {
                if(!instance.__internal.closeButton || event.target.getAttribute('data-close') === 'true'){
                    instance.dismiss(true);
                }
            }

            function transitionDone(event, instance) {
                // unbind event
                off(instance.element, transition.type, transitionDone);
                // remove the message
                element.removeChild(instance.element);
            }

            function initialize(instance) {
                if (!instance.__internal) {
                    instance.__internal = {
                        pushed: false,
                        delay : undefined,
                        timer: undefined,
                        clickHandler: undefined,
                        transitionEndHandler: undefined,
                        transitionTimeout: undefined
                    };
                    instance.__internal.clickHandler = delegate(instance, clickDelegate);
                    instance.__internal.transitionEndHandler = delegate(instance, transitionDone);
                }
                return instance;
            }
            function clearTimers(instance) {
                clearTimeout(instance.__internal.timer);
                clearTimeout(instance.__internal.transitionTimeout);
            }
            return initialize({
                /* notification DOM element*/
                element: div,
                /*
                 * Pushes a notification message
                 * @param {string or DOMElement} content The notification message content
                 * @param {Number} wait The time (in seconds) to wait before the message is dismissed, a value of 0 means keep open till clicked.
                 *
                 */
                push: function (_content, _wait) {
                    if (!this.__internal.pushed) {

                        pushInstance(this);
                        clearTimers(this);

                        var content, wait;
                        switch (arguments.length) {
                        case 0:
                            wait = this.__internal.delay;
                            break;
                        case 1:
                            if (typeof (_content) === 'number') {
                                wait = _content;
                            } else {
                                content = _content;
                                wait = this.__internal.delay;
                            }
                            break;
                        case 2:
                            content = _content;
                            wait = _wait;
                            break;
                        }
                        this.__internal.closeButton = alertify.defaults.notifier.closeButton;
                        // set contents
                        if (typeof content !== 'undefined') {
                            this.setContent(content);
                        }
                        // append or insert
                        if (notifier.__internal.position.indexOf('top') < 0) {
                            element.appendChild(this.element);
                        } else {
                            element.insertBefore(this.element, element.firstChild);
                        }
                        reflow = this.element.offsetWidth;
                        addClass(this.element, classes.visible);
                        // attach click event
                        on(this.element, 'click', this.__internal.clickHandler);
                        return this.delay(wait);
                    }
                    return this;
                },
                /*
                 * {Function} callback function to be invoked before dismissing the notification message.
                 * Remarks: A return value === 'false' will cancel the dismissal
                 *
                 */
                ondismiss: function () { },
                /*
                 * {Function} callback function to be invoked when the message is dismissed.
                 *
                 */
                callback: callback,
                /*
                 * Dismisses the notification message
                 * @param {Boolean} clicked A flag indicating if the dismissal was caused by a click.
                 *
                 */
                dismiss: function (clicked) {
                    if (this.__internal.pushed) {
                        clearTimers(this);
                        if (!(typeof this.ondismiss === 'function' && this.ondismiss.call(this) === false)) {
                            //detach click event
                            off(this.element, 'click', this.__internal.clickHandler);
                            // ensure element exists
                            if (typeof this.element !== 'undefined' && this.element.parentNode === element) {
                                //transition end or fallback
                                this.__internal.transitionTimeout = setTimeout(this.__internal.transitionEndHandler, transition.supported ? 1000 : 100);
                                removeClass(this.element, classes.visible);

                                // custom callback on dismiss
                                if (typeof this.callback === 'function') {
                                    this.callback.call(this, clicked);
                                }
                            }
                            popInstance(this);
                        }
                    }
                    return this;
                },
                /*
                 * Delays the notification message dismissal
                 * @param {Number} wait The time (in seconds) to wait before the message is dismissed, a value of 0 means keep open till clicked.
                 *
                 */
                delay: function (wait) {
                    clearTimers(this);
                    this.__internal.delay = typeof wait !== 'undefined' && !isNaN(+wait) ? +wait : notifier.__internal.delay;
                    if (this.__internal.delay > 0) {
                        var  self = this;
                        this.__internal.timer = setTimeout(function () { self.dismiss(); }, this.__internal.delay * 1000);
                    }
                    return this;
                },
                /*
                 * Sets the notification message contents
                 * @param {string or DOMElement} content The notification message content
                 *
                 */
                setContent: function (content) {
                    if (typeof content === 'string') {
                        clearContents(this.element);
                        this.element.innerHTML = content;
                    } else if (content instanceof window.HTMLElement && this.element.firstChild !== content) {
                        clearContents(this.element);
                        this.element.appendChild(content);
                    }
                    if(this.__internal.closeButton){
                        var close = document.createElement('span');
                        addClass(close, classes.close);
                        close.setAttribute('data-close', true);
                        this.element.appendChild(close);
                    }
                    return this;
                },
                /*
                 * Dismisses all open notifications except this.
                 *
                 */
                dismissOthers: function () {
                    notifier.dismissAll(this);
                    return this;
                }
            });
        }

        //notifier api
        return {
            /**
             * Gets or Sets notifier settings.
             *
             * @param {string} key The setting name
             * @param {Variant} value The setting value.
             *
             * @return {Object}	if the called as a setter, return the notifier instance.
             */
            setting: function (key, value) {
                //ensure init
                initialize(this);

                if (typeof value === 'undefined') {
                    //get
                    return this.__internal[key];
                } else {
                    //set
                    switch (key) {
                    case 'position':
                        this.__internal.position = value;
                        updatePosition(this);
                        break;
                    case 'delay':
                        this.__internal.delay = value;
                        break;
                    }
                }
                return this;
            },
            /**
             * [Alias] Sets dialog settings/options
             */
            set:function(key,value){
                this.setting(key,value);
                return this;
            },
            /**
             * [Alias] Gets dialog settings/options
             */
            get:function(key){
                return this.setting(key);
            },
            /**
             * Creates a new notification message
             *
             * @param {string} type The type of notification message (simply a CSS class name 'ajs-{type}' to be added).
             * @param {Function} callback  A callback function to be invoked when the message is dismissed.
             *
             * @return {undefined}
             */
            create: function (type, callback) {
                //ensure notifier init
                initialize(this);
                //create new notification message
                var div = document.createElement('div');
                div.className = classes.message + ((typeof type === 'string' && type !== '') ? ' ajs-' + type : '');
                return create(div, callback);
            },
            /**
             * Dismisses all open notifications.
             *
             * @param {Object} excpet [optional] The notification object to exclude from dismissal.
             *
             */
            dismissAll: function (except) {
                var clone = openInstances.slice(0);
                for (var x = 0; x < clone.length; x += 1) {
                    var  instance = clone[x];
                    if (except === undefined || except !== instance) {
                        instance.dismiss();
                    }
                }
            }
        };
    })();

    /**
     * Alertify public API
     * This contains everything that is exposed through the alertify object.
     *
     * @return {Object}
     */
    function Alertify() {

        // holds a references of created dialogs
        var dialogs = {};

        /**
         * Extends a given prototype by merging properties from base into sub.
         *
         * @sub {Object} sub The prototype being overwritten.
         * @base {Object} base The prototype being written.
         *
         * @return {Object} The extended prototype.
         */
        function extend(sub, base) {
            // copy dialog pototype over definition.
            for (var prop in base) {
                if (base.hasOwnProperty(prop)) {
                    sub[prop] = base[prop];
                }
            }
            return sub;
        }


        /**
        * Helper: returns a dialog instance from saved dialogs.
        * and initializes the dialog if its not already initialized.
        *
        * @name {String} name The dialog name.
        *
        * @return {Object} The dialog instance.
        */
        function get_dialog(name) {
            var dialog = dialogs[name].dialog;
            //initialize the dialog if its not already initialized.
            if (dialog && typeof dialog.__init === 'function') {
                dialog.__init(dialog);
            }
            return dialog;
        }

        /**
         * Helper:  registers a new dialog definition.
         *
         * @name {String} name The dialog name.
         * @Factory {Function} Factory a function resposible for creating dialog prototype.
         * @transient {Boolean} transient True to create a new dialog instance each time the dialog is invoked, false otherwise.
         * @base {String} base the name of another dialog to inherit from.
         *
         * @return {Object} The dialog definition.
         */
        function register(name, Factory, transient, base) {
            var definition = {
                dialog: null,
                factory: Factory
            };

            //if this is based on an existing dialog, create a new definition
            //by applying the new protoype over the existing one.
            if (base !== undefined) {
                definition.factory = function () {
                    return extend(new dialogs[base].factory(), new Factory());
                };
            }

            if (!transient) {
                //create a new definition based on dialog
                definition.dialog = extend(new definition.factory(), dialog);
            }
            return dialogs[name] = definition;
        }

        return {
            /**
             * Alertify defaults
             * 
             * @type {Object}
             */
            defaults: defaults,
            /**
             * Dialogs factory 
             *
             * @param {string}      Dialog name.
             * @param {Function}    A Dialog factory function.
             * @param {Boolean}     Indicates whether to create a singleton or transient dialog.
             * @param {String}      The name of the base type to inherit from.
             */
            dialog: function (name, Factory, transient, base) {

                // get request, create a new instance and return it.
                if (typeof Factory !== 'function') {
                    return get_dialog(name);
                }

                if (this.hasOwnProperty(name)) {
                    throw new Error('alertify.dialog: name already exists');
                }

                // register the dialog
                var definition = register(name, Factory, transient, base);

                if (transient) {

                    // make it public
                    this[name] = function () {
                        //if passed with no params, consider it a get request
                        if (arguments.length === 0) {
                            return definition.dialog;
                        } else {
                            var instance = extend(new definition.factory(), dialog);
                            //ensure init
                            if (instance && typeof instance.__init === 'function') {
                                instance.__init(instance);
                            }
                            instance['main'].apply(instance, arguments);
                            return instance['show'].apply(instance);
                        }
                    };
                } else {
                    // make it public
                    this[name] = function () {
                        //ensure init
                        if (definition.dialog && typeof definition.dialog.__init === 'function') {
                            definition.dialog.__init(definition.dialog);
                        }
                        //if passed with no params, consider it a get request
                        if (arguments.length === 0) {
                            return definition.dialog;
                        } else {
                            var dialog = definition.dialog;
                            dialog['main'].apply(definition.dialog, arguments);
                            return dialog['show'].apply(definition.dialog);
                        }
                    };
                }
            },
            /**
             * Close all open dialogs.
             *
             * @param {Object} excpet [optional] The dialog object to exclude from closing.
             *
             * @return {undefined}
             */
            closeAll: function (except) {
                var clone = openDialogs.slice(0);
                for (var x = 0; x < clone.length; x += 1) {
                    var instance = clone[x];
                    if (except === undefined || except !== instance) {
                        instance.close();
                    }
                }
            },
            /**
             * Gets or Sets dialog settings/options. if the dialog is transient, this call does nothing.
             *
             * @param {string} name The dialog name.
             * @param {String|Object} key A string specifying a propery name or a collection of key/value pairs.
             * @param {Variant} value Optional, the value associated with the key (in case it was a string).
             *
             * @return {undefined}
             */
            setting: function (name, key, value) {

                if (name === 'notifier') {
                    return notifier.setting(key, value);
                }

                var dialog = get_dialog(name);
                if (dialog) {
                    return dialog.setting(key, value);
                }
            },
            /**
             * [Alias] Sets dialog settings/options 
             */
            set: function(name,key,value){
                return this.setting(name, key,value);
            },
            /**
             * [Alias] Gets dialog settings/options 
             */
            get: function(name, key){
                return this.setting(name, key);
            },
            /**
             * Creates a new notification message.
             * If a type is passed, a class name "ajs-{type}" will be added.
             * This allows for custom look and feel for various types of notifications.
             *
             * @param  {String | DOMElement}    [message=undefined]		Message text
             * @param  {String}                 [type='']				Type of log message
             * @param  {String}                 [wait='']				Time (in seconds) to wait before auto-close
             * @param  {Function}               [callback=undefined]	A callback function to be invoked when the log is closed.
             *
             * @return {Object} Notification object.
             */
            notify: function (message, type, wait, callback) {
                return notifier.create(type, callback).push(message, wait);
            },
            /**
             * Creates a new notification message.
             *
             * @param  {String}		[message=undefined]		Message text
             * @param  {String}     [wait='']				Time (in seconds) to wait before auto-close
             * @param  {Function}	[callback=undefined]	A callback function to be invoked when the log is closed.
             *
             * @return {Object} Notification object.
             */
            message: function (message, wait, callback) {
                return notifier.create(null, callback).push(message, wait);
            },
            /**
             * Creates a new notification message of type 'success'.
             *
             * @param  {String}		[message=undefined]		Message text
             * @param  {String}     [wait='']				Time (in seconds) to wait before auto-close
             * @param  {Function}	[callback=undefined]	A callback function to be invoked when the log is closed.
             *
             * @return {Object} Notification object.
             */
            success: function (message, wait, callback) {
                return notifier.create('success', callback).push(message, wait);
            },
            /**
             * Creates a new notification message of type 'error'.
             *
             * @param  {String}		[message=undefined]		Message text
             * @param  {String}     [wait='']				Time (in seconds) to wait before auto-close
             * @param  {Function}	[callback=undefined]	A callback function to be invoked when the log is closed.
             *
             * @return {Object} Notification object.
             */
            error: function (message, wait, callback) {
                return notifier.create('error', callback).push(message, wait);
            },
            /**
             * Creates a new notification message of type 'warning'.
             *
             * @param  {String}		[message=undefined]		Message text
             * @param  {String}     [wait='']				Time (in seconds) to wait before auto-close
             * @param  {Function}	[callback=undefined]	A callback function to be invoked when the log is closed.
             *
             * @return {Object} Notification object.
             */
            warning: function (message, wait, callback) {
                return notifier.create('warning', callback).push(message, wait);
            },
            /**
             * Dismisses all open notifications
             *
             * @return {undefined}
             */
            dismissAll: function () {
                notifier.dismissAll();
            }
        };
    }
    var alertify = new Alertify();

    /**
    * Alert dialog definition
    *
    * invoked by:
    *	alertify.alert(message);
    *	alertify.alert(title, message);
    *	alertify.alert(message, onok);
    *	alertify.alert(title, message, onok);
     */
    alertify.dialog('alert', function () {
        return {
            main: function (_title, _message, _onok) {
                var title, message, onok;
                switch (arguments.length) {
                case 1:
                    message = _title;
                    break;
                case 2:
                    if (typeof _message === 'function') {
                        message = _title;
                        onok = _message;
                    } else {
                        title = _title;
                        message = _message;
                    }
                    break;
                case 3:
                    title = _title;
                    message = _message;
                    onok = _onok;
                    break;
                }
                this.set('title', title);
                this.set('message', message);
                this.set('onok', onok);
                return this;
            },
            setup: function () {
                return {
                    buttons: [
                        {
                            text: alertify.defaults.glossary.ok,
                            key: keys.ESC,
                            invokeOnClose: true,
                            className: alertify.defaults.theme.ok,
                        }
                    ],
                    focus: {
                        element: 0,
                        select: false
                    },
                    options: {
                        maximizable: false,
                        resizable: false
                    }
                };
            },
            build: function () {
                // nothing
            },
            prepare: function () {
                //nothing
            },
            setMessage: function (message) {
                this.setContent(message);
            },
            settings: {
                message: undefined,
                onok: undefined,
                label: undefined,
            },
            settingUpdated: function (key, oldValue, newValue) {
                switch (key) {
                case 'message':
                    this.setMessage(newValue);
                    break;
                case 'label':
                    if (this.__internal.buttons[0].element) {
                        this.__internal.buttons[0].element.innerHTML = newValue;
                    }
                    break;
                }
            },
            callback: function (closeEvent) {
                if (typeof this.get('onok') === 'function') {
                    var returnValue = this.get('onok').call(this, closeEvent);
                    if (typeof returnValue !== 'undefined') {
                        closeEvent.cancel = !returnValue;
                    }
                }
            }
        };
    });
    /**
     * Confirm dialog object
     *
     *	alertify.confirm(message);
     *	alertify.confirm(message, onok);
     *	alertify.confirm(message, onok, oncancel);
     *	alertify.confirm(title, message, onok, oncancel);
     */
    alertify.dialog('confirm', function () {

        var autoConfirm = {
            timer: null,
            index: null,
            text: null,
            duration: null,
            task: function (event, self) {
                if (self.isOpen()) {
                    self.__internal.buttons[autoConfirm.index].element.innerHTML = autoConfirm.text + ' (&#8207;' + autoConfirm.duration + '&#8207;) ';
                    autoConfirm.duration -= 1;
                    if (autoConfirm.duration === -1) {
                        clearAutoConfirm(self);
                        var button = self.__internal.buttons[autoConfirm.index];
                        var closeEvent = createCloseEvent(autoConfirm.index, button);

                        if (typeof self.callback === 'function') {
                            self.callback.apply(self, [closeEvent]);
                        }
                        //close the dialog.
                        if (closeEvent.close !== false) {
                            self.close();
                        }
                    }
                } else {
                    clearAutoConfirm(self);
                }
            }
        };

        function clearAutoConfirm(self) {
            if (autoConfirm.timer !== null) {
                clearInterval(autoConfirm.timer);
                autoConfirm.timer = null;
                self.__internal.buttons[autoConfirm.index].element.innerHTML = autoConfirm.text;
            }
        }

        function startAutoConfirm(self, index, duration) {
            clearAutoConfirm(self);
            autoConfirm.duration = duration;
            autoConfirm.index = index;
            autoConfirm.text = self.__internal.buttons[index].element.innerHTML;
            autoConfirm.timer = setInterval(delegate(self, autoConfirm.task), 1000);
            autoConfirm.task(null, self);
        }


        return {
            main: function (_title, _message, _onok, _oncancel) {
                var title, message, onok, oncancel;
                switch (arguments.length) {
                case 1:
                    message = _title;
                    break;
                case 2:
                    message = _title;
                    onok = _message;
                    break;
                case 3:
                    message = _title;
                    onok = _message;
                    oncancel = _onok;
                    break;
                case 4:
                    title = _title;
                    message = _message;
                    onok = _onok;
                    oncancel = _oncancel;
                    break;
                }
                this.set('title', title);
                this.set('message', message);
                this.set('onok', onok);
                this.set('oncancel', oncancel);
                return this;
            },
            setup: function () {
                return {
                    buttons: [
                        {
                            text: alertify.defaults.glossary.ok,
                            key: keys.ENTER,
                            className: alertify.defaults.theme.ok,
                        },
                        {
                            text: alertify.defaults.glossary.cancel,
                            key: keys.ESC,
                            invokeOnClose: true,
                            className: alertify.defaults.theme.cancel,
                        }
                    ],
                    focus: {
                        element: 0,
                        select: false
                    },
                    options: {
                        maximizable: false,
                        resizable: false
                    }
                };
            },
            build: function () {
                //nothing
            },
            prepare: function () {
                //nothing
            },
            setMessage: function (message) {
                this.setContent(message);
            },
            settings: {
                message: null,
                labels: null,
                onok: null,
                oncancel: null,
                defaultFocus: null,
                reverseButtons: null,
            },
            settingUpdated: function (key, oldValue, newValue) {
                switch (key) {
                case 'message':
                    this.setMessage(newValue);
                    break;
                case 'labels':
                    if ('ok' in newValue && this.__internal.buttons[0].element) {
                        this.__internal.buttons[0].text = newValue.ok;
                        this.__internal.buttons[0].element.innerHTML = newValue.ok;
                    }
                    if ('cancel' in newValue && this.__internal.buttons[1].element) {
                        this.__internal.buttons[1].text = newValue.cancel;
                        this.__internal.buttons[1].element.innerHTML = newValue.cancel;
                    }
                    break;
                case 'reverseButtons':
                    if (newValue === true) {
                        this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element);
                    } else {
                        this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);
                    }
                    break;
                case 'defaultFocus':
                    this.__internal.focus.element = newValue === 'ok' ? 0 : 1;
                    break;
                }
            },
            callback: function (closeEvent) {
                clearAutoConfirm(this);
                var returnValue;
                switch (closeEvent.index) {
                case 0:
                    if (typeof this.get('onok') === 'function') {
                        returnValue = this.get('onok').call(this, closeEvent);
                        if (typeof returnValue !== 'undefined') {
                            closeEvent.cancel = !returnValue;
                        }
                    }
                    break;
                case 1:
                    if (typeof this.get('oncancel') === 'function') {
                        returnValue = this.get('oncancel').call(this, closeEvent);
                        if (typeof returnValue !== 'undefined') {
                            closeEvent.cancel = !returnValue;
                        }
                    }
                    break;
                }
            },
            autoOk: function (duration) {
                startAutoConfirm(this, 0, duration);
                return this;
            },
            autoCancel: function (duration) {
                startAutoConfirm(this, 1, duration);
                return this;
            }
        };
    });
    /**
     * Prompt dialog object
     *
     * invoked by:
     *	alertify.prompt(message);
     *	alertify.prompt(message, value);
     *	alertify.prompt(message, value, onok);
     *	alertify.prompt(message, value, onok, oncancel);
     *	alertify.prompt(title, message, value, onok, oncancel);
     */
    alertify.dialog('prompt', function () {
        var input = document.createElement('INPUT');
        var p = document.createElement('P');
        return {
            main: function (_title, _message, _value, _onok, _oncancel) {
                var title, message, value, onok, oncancel;
                switch (arguments.length) {
                case 1:
                    message = _title;
                    break;
                case 2:
                    message = _title;
                    value = _message;
                    break;
                case 3:
                    message = _title;
                    value = _message;
                    onok = _value;
                    break;
                case 4:
                    message = _title;
                    value = _message;
                    onok = _value;
                    oncancel = _onok;
                    break;
                case 5:
                    title = _title;
                    message = _message;
                    value = _value;
                    onok = _onok;
                    oncancel = _oncancel;
                    break;
                }
                this.set('title', title);
                this.set('message', message);
                this.set('value', value);
                this.set('onok', onok);
                this.set('oncancel', oncancel);
                return this;
            },
            setup: function () {
                return {
                    buttons: [
                        {
                            text: alertify.defaults.glossary.ok,
                            key: keys.ENTER,
                            className: alertify.defaults.theme.ok,
                        },
                        {
                            text: alertify.defaults.glossary.cancel,
                            key: keys.ESC,
                            invokeOnClose: true,
                            className: alertify.defaults.theme.cancel,
                        }
                    ],
                    focus: {
                        element: input,
                        select: true
                    },
                    options: {
                        maximizable: false,
                        resizable: false
                    }
                };
            },
            build: function () {
                input.className = alertify.defaults.theme.input;
                input.setAttribute('type', 'text');
                input.value = this.get('value');
                this.elements.content.appendChild(p);
                this.elements.content.appendChild(input);
            },
            prepare: function () {
                //nothing
            },
            setMessage: function (message) {
                if (typeof message === 'string') {
                    clearContents(p);
                    p.innerHTML = message;
                } else if (message instanceof window.HTMLElement && p.firstChild !== message) {
                    clearContents(p);
                    p.appendChild(message);
                }
            },
            settings: {
                message: undefined,
                labels: undefined,
                onok: undefined,
                oncancel: undefined,
                value: '',
                type:'text',
                reverseButtons: undefined,
            },
            settingUpdated: function (key, oldValue, newValue) {
                switch (key) {
                case 'message':
                    this.setMessage(newValue);
                    break;
                case 'value':
                    input.value = newValue;
                    break;
                case 'type':
                    switch (newValue) {
                    case 'text':
                    case 'color':
                    case 'date':
                    case 'datetime-local':
                    case 'email':
                    case 'month':
                    case 'number':
                    case 'password':
                    case 'search':
                    case 'tel':
                    case 'time':
                    case 'week':
                        input.type = newValue;
                        break;
                    default:
                        input.type = 'text';
                        break;
                    }
                    break;
                case 'labels':
                    if (newValue.ok && this.__internal.buttons[0].element) {
                        this.__internal.buttons[0].element.innerHTML = newValue.ok;
                    }
                    if (newValue.cancel && this.__internal.buttons[1].element) {
                        this.__internal.buttons[1].element.innerHTML = newValue.cancel;
                    }
                    break;
                case 'reverseButtons':
                    if (newValue === true) {
                        this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element);
                    } else {
                        this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);
                    }
                    break;
                }
            },
            callback: function (closeEvent) {
                var returnValue;
                switch (closeEvent.index) {
                case 0:
                    this.settings.value = input.value;
                    if (typeof this.get('onok') === 'function') {
                        returnValue = this.get('onok').call(this, closeEvent, this.settings.value);
                        if (typeof returnValue !== 'undefined') {
                            closeEvent.cancel = !returnValue;
                        }
                    }
                    break;
                case 1:
                    if (typeof this.get('oncancel') === 'function') {
                        returnValue = this.get('oncancel').call(this, closeEvent);
                        if (typeof returnValue !== 'undefined') {
                            closeEvent.cancel = !returnValue;
                        }
                    }
                    if(!closeEvent.cancel){
                        input.value = this.settings.value;
                    }
                    break;
                }
            }
        };
    });

    // CommonJS
    {
        module.exports = alertify;
    // AMD
    }

} ( typeof window !== 'undefined' ? window : commonjsGlobal ) );
});

function noop$1() {}

function assign(tar, src) {
	for (var k in src) tar[k] = src[k];
	return tar;
}

function appendNode(node, target) {
	target.appendChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function detachBetween(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function detachBefore(after) {
	while (after.previousSibling) {
		after.parentNode.removeChild(after.previousSibling);
	}
}

function destroyEach(iterations) {
	for (var i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d();
	}
}

function createFragment() {
	return document.createDocumentFragment();
}

function createElement(name) {
	return document.createElement(name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function addListener$1(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeListener$1(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function toNumber(value) {
	return value === '' ? undefined : +value;
}

function setStyle(node, key, value) {
	node.style.setProperty(key, value);
}

function selectOption(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];

		if (option.__value === value) {
			option.selected = true;
			return;
		}
	}
}

function selectValue(select) {
	var selectedOption = select.querySelector(':checked') || select.options[0];
	return selectedOption && selectedOption.__value;
}

function destroyBlock(block, lookup) {
	block.u();
	block.d();
	lookup[block.key] = null;
}

function outroAndDestroyBlock(block, lookup) {
	block.o(function() {
		destroyBlock(block, lookup);
	});
}

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop$1;
	this.fire('destroy');
	this.set = this.get = noop$1;

	if (detach !== false) this._fragment.u();
	this._fragment.d();
	this._fragment = this._state = null;
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		var handler = handlers[i];

		if (!handler.__calling) {
			handler.__calling = true;
			handler.call(this, data);
			handler.__calling = false;
		}
	}
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function init(component, options) {
	component._handlers = blankObject();
	component._bind = options._bind;

	component.options = options;
	component.root = options.root || component;
	component.store = component.root.store || options.store;
}

function observe(key, callback, options) {
	var fn = callback.bind(this);

	if (!options || options.init !== false) {
		fn(this.get()[key], undefined);
	}

	return this.on(options && options.defer ? 'update' : 'state', function(event) {
		if (event.changed[key]) fn(event.current[key], event.previous && event.previous[key]);
	});
}

function on$1(eventName, handler) {
	if (eventName === 'teardown') return this.on('destroy', handler);

	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function set(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	this.root._lock = true;
	callAll(this.root._beforecreate);
	callAll(this.root._oncreate);
	callAll(this.root._aftercreate);
	this.root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign(assign({}, oldState), newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		this.fire("state", { changed: changed, current: this._state, previous: oldState });
		this._fragment.p(changed, this._state);
		this.fire("update", { changed: changed, current: this._state, previous: oldState });
	}
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

function _unmount() {
	if (this._fragment) this._fragment.u();
}

var proto = {
	destroy: destroy,
	get: get,
	fire: fire,
	observe: observe,
	on: on$1,
	set: set,
	teardown: destroy,
	_recompute: noop$1,
	_set: _set,
	_mount: _mount,
	_unmount: _unmount,
	_differs: _differs
};

/* src\core\ui\outputs\MyFormLink.html generated by Svelte v1.64.1 */
function create_main_fragment$2(component, state) {
	var if_block_anchor;

	var if_block = (state.field.data != null) && create_if_block$2(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.field.data != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$2(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (2:1) {{#if field.data.form != null}}
function create_if_block_1(component, state) {
	var a, text_value = state.field.data.label, text, a_href_value;

	return {
		c: function create() {
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = state.app.makeUrl(state.field.data.form, state.field.data.inputFieldValues);
		},

		m: function mount(target, anchor) {
			insertNode(a, target, anchor);
			appendNode(text, a);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data.label)) {
				text.data = text_value;
			}

			if ((changed.app || changed.field) && a_href_value !== (a_href_value = state.app.makeUrl(state.field.data.form, state.field.data.inputFieldValues))) {
				a.href = a_href_value;
			}
		},

		u: function unmount() {
			detachNode(a);
		},

		d: noop$1
	};
}

// (4:1) {{else}}
function create_if_block_2(component, state) {
	var span, text_value = state.field.data.label, text;

	return {
		c: function create() {
			span = createElement("span");
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(span, target, anchor);
			appendNode(text, span);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(span);
		},

		d: noop$1
	};
}

// (1:0) {{#if field.data != null}}
function create_if_block$2(component, state) {
	var if_block_anchor;

	function select_block_type(state) {
		if (state.field.data.form != null) return create_if_block_1;
		return create_if_block_2;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

function SvelteComponent$2(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$2(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$2.prototype, proto);

/* src\components\MenuItem.html generated by Svelte v1.64.1 */
let id = 0;
function data() {
	id += 1;
	return {
		id
	};
}

function oncreate$1() {
	this.set({ });
	console.log(this.get());
}

function create_main_fragment$1(component, state) {
	var if_block_anchor;

	var if_block = (state.item.children.length === 0) && create_if_block$1(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.item.children.length === 0) {
				if (!if_block) {
					if_block = create_if_block$1(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if item.children.length === 0}}
function create_if_block$1(component, state) {

	var myformlink_initial_data = { field: "{field: { data: item }}" };
	var myformlink = new SvelteComponent$2({
		root: component.root,
		data: myformlink_initial_data
	});

	return {
		c: function create() {
			myformlink._fragment.c();
		},

		m: function mount(target, anchor) {
			myformlink._mount(target, anchor);
		},

		u: function unmount() {
			myformlink._unmount();
		},

		d: function destroy$$1() {
			myformlink.destroy(false);
		}
	};
}

function SvelteComponent$1(options) {
	init(this, options);
	this._state = assign(data(), options.data);

	var self = this;
	var _oncreate = function() {
		var changed = { item: 1 };
		oncreate$1.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$1(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$1.prototype, proto);

/* src\components\Menu.html generated by Svelte v1.64.1 */
// function nestedSort(array, comparison) {
// 	array.sort(comparison);

// 	for (const item of array) {
// 		if (item.items != null) {
// 			nestedSort(item.items, comparison);
// 		}
// 	}
// }

function oncreate() {
	console.log(this.get().menu);
	this.set({ self: this });
	// const getMenuGroup = this.get("getMenuGroup");
	// const makeUrl = this.get("makeUrl");

	// Make sure we respect both parent menu sorting order and then leaf-level menu sorting order.
	// orderIndex: (group.orderIndex * 100000) + formLink.orderIndex
	// nestedSort(tree, (a, b) => a.orderIndex - b.orderIndex);
}

function create_main_fragment(component, state) {
	var if_block_anchor;

	var if_block = (state.menu != null) && create_if_block(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.menu != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (3:1) {{#each menu.children as item}}
function create_each_block(component, state) {
	var item = state.item, each_value = state.each_value, item_index = state.item_index;
	var li;

	var menuitem_initial_data = { item: item, menu: state.self };
	var menuitem = new SvelteComponent$1({
		root: component.root,
		slots: { default: createFragment() },
		data: menuitem_initial_data
	});

	return {
		c: function create() {
			li = createElement("li");
			menuitem._fragment.c();
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			menuitem._mount(li, null);
		},

		p: function update(changed, state) {
			item = state.item;
			each_value = state.each_value;
			item_index = state.item_index;
			var menuitem_changes = {};
			if (changed.menu) menuitem_changes.item = item;
			if (changed.self) menuitem_changes.menu = state.self;
			menuitem._set(menuitem_changes);
		},

		u: function unmount() {
			detachNode(li);
		},

		d: function destroy$$1() {
			menuitem.destroy(false);
		}
	};
}

// (1:0) {{#if menu != null}}
function create_if_block(component, state) {
	var ul;

	var each_value = state.menu.children;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, assign(assign({}, state), {
			each_value: each_value,
			item: each_value[i],
			item_index: i
		}));
	}

	return {
		c: function create() {
			ul = createElement("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			ul.className = "menu";
		},

		m: function mount(target, anchor) {
			insertNode(ul, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, state) {
			var each_value = state.menu.children;

			if (changed.menu || changed.self) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						item: each_value[i],
						item_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}
		},

		u: function unmount() {
			detachNode(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);

	var self = this;
	var _oncreate = function() {
		var changed = { menu: 1, self: 1 };
		oncreate.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent.prototype, proto);

var RouteParameterBuilder = (function () {
    function RouteParameterBuilder(parameterName, app) {
        this.defaultParameters = {};
        this.getFormInstance = function (formId, throwError) { return app.getFormInstance(formId, null); };
        this.parameterName = parameterName;
        this.defaultParameters[parameterName] = "";
    }
    RouteParameterBuilder.prototype.buildFormRouteParameters = function (form, values) {
        var formInstance = this.getFormInstance(form, true);
        var base = formInstance.getSerializedInputValuesFromObject(values);
        if (form === this.currentForm) {
            var d = RouteParameterBuilder.parseQueryStringParameters(location.hash)[this.parameterName] || 0;
            var dAsNumber = parseInt(d, 10);
            base[this.parameterName] = isNaN(dAsNumber) ? 0 : dAsNumber + 1;
        }
        return __assign({}, base, { _id: form });
    };
    RouteParameterBuilder.parseQueryStringParameters = function (url) {
        var queryStartsAt = url.indexOf("?");
        var result = {};
        // If there is a query string.
        if (queryStartsAt !== -1 && url.length > queryStartsAt) {
            url.substr(queryStartsAt + 1).split("&").filter(function (t) {
                var value = t.split("=");
                result[value[0]] = value[1];
            });
        }
        return result;
    };
    return RouteParameterBuilder;
}());

var stateStringParser = function(stateString) {
	return stateString.split('.').reduce(function(stateNames, latestNameChunk) {
		if (stateNames.length) {
			latestNameChunk = stateNames[stateNames.length - 1] + '.' + latestNameChunk;
		}
		stateNames.push(latestNameChunk);
		return stateNames
	}, [])
};

var parse = stateStringParser;

var stateState = function StateState() {
	var states = {};

	function getHierarchy(name) {
		var names = stateStringParser(name);

		return names.map(function(name) {
			if (!states[name]) {
				throw new Error('State ' + name + ' not found')
			}
			return states[name]
		})
	}

	function getParent(name) {
		var parentName = getParentName(name);

		return parentName && states[parentName]
	}

	function getParentName(name) {
		var names = stateStringParser(name);

		if (names.length > 1) {
			var secondToLast = names.length - 2;

			return names[secondToLast]
		} else {
			return null
		}
	}

	function guaranteeAllStatesExist(newStateName) {
		var stateNames = parse(newStateName);
		var statesThatDontExist = stateNames.filter(function(name) {
			return !states[name]
		});

		if (statesThatDontExist.length > 0) {
			throw new Error('State ' + statesThatDontExist[statesThatDontExist.length - 1] + ' does not exist')
		}
	}

	function buildFullStateRoute(stateName) {
		return getHierarchy(stateName).map(function(state) {
			return '/' + (state.route || '')
		}).join('').replace(/\/{2,}/g, '/')
	}

	function applyDefaultChildStates(stateName) {
		var state = states[stateName];

		function getDefaultChildStateName() {
			return state && (typeof state.defaultChild === 'function'
				? state.defaultChild()
				: state.defaultChild)
		}

		var defaultChildStateName = getDefaultChildStateName();

		if (!defaultChildStateName) {
			return stateName
		}

		var fullStateName = stateName + '.' + defaultChildStateName;

		return applyDefaultChildStates(fullStateName)
	}


	return {
		add: function(name, state) {
			states[name] = state;
		},
		get: function(name) {
			return name && states[name]
		},
		getHierarchy: getHierarchy,
		getParent: getParent,
		getParentName: getParentName,
		guaranteeAllStatesExist: guaranteeAllStatesExist,
		buildFullStateRoute: buildFullStateRoute,
		applyDefaultChildStates: applyDefaultChildStates
	}
};

var index$6 = function(obj) {
	var keys = Object.keys(obj);

	keys.forEach(function(key) {
		if (!Array.isArray(obj[key])) {
			throw new Error(key + ' is not an array')
		}
	});

	var maxIndex = keys.reduce(function(maxSoFar, key) {
		var len = obj[key].length;
		return maxSoFar > len ? maxSoFar : len
	}, 0);

	var output = [];

	function getObject(index) {
		var o = {};
		keys.forEach(function(key) {
			o[key] = obj[key][index];
		});
		return o
	}

	for (var i = 0; i < maxIndex; ++i) {
		output.push(getObject(i));
	}

	return output
};

var index$10 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index$8 = pathToRegexp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
  // "/route(\\d+)" => [undefined, undefined, undefined, "\d+", undefined]
  '([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?',
  // Match regexp special characters that are always escaped.
  '([.+*?=^!:${}()[\\]|\\/])'
].join('|'), 'g');

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {String} group
 * @return {String}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {RegExp} re
 * @param  {Array}  keys
 * @return {RegExp}
 */
function attachKeys (re, keys, allTokens) {
  re.keys = keys;
  re.allTokens = allTokens;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {String}
 */
function flags (options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {RegExp} path
 * @param  {Array}  keys
 * @return {RegExp}
 */
function regexpToRegexp (path, keys, allTokens) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name:      i,
        delimiter: null,
        optional:  false,
        repeat:    false
      });
    }
  }

  return attachKeys(path, keys, allTokens);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {Array}  path
 * @param  {Array}  keys
 * @param  {Object} options
 * @return {RegExp}
 */
function arrayToRegexp (path, keys, options, allTokens) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options, allTokens).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
  return attachKeys(regexp, keys, allTokens);
}

/**
 * Replace the specific tags with regexp strings.
 *
 * @param  {String} path
 * @param  {Array}  keys
 * @return {String}
 */
function replacePath (path, keys, allTokens) {
  var index = 0;
  var lastEndIndex = 0;

  function addLastToken(lastToken) {
    if (lastEndIndex === 0 && lastToken[0] !== '/') {
      lastToken = '/' + lastToken;
    }
    allTokens.push({
      string: lastToken
    });
  }


  function replace (match, escaped, prefix, key, capture, group, suffix, escape, offset) {
    if (escaped) {
      return escaped;
    }

    if (escape) {
      return '\\' + escape;
    }

    var repeat   = suffix === '+' || suffix === '*';
    var optional = suffix === '?' || suffix === '*';

    if (offset > lastEndIndex) {
      addLastToken(path.substring(lastEndIndex, offset));
    }

    lastEndIndex = offset + match.length;

    var newKey = {
      name:      key || index++,
      delimiter: prefix || '/',
      optional:  optional,
      repeat:    repeat
    };

    keys.push(newKey);
    allTokens.push(newKey);

    prefix = prefix ? ('\\' + prefix) : '';
    capture = escapeGroup(capture || group || '[^' + (prefix || '\\/') + ']+?');

    if (repeat) {
      capture = capture + '(?:' + prefix + capture + ')*';
    }

    if (optional) {
      return '(?:' + prefix + '(' + capture + '))?';
    }

    // Basic parameter support.
    return prefix + '(' + capture + ')';
  }

  var newPath = path.replace(PATH_REGEXP, replace);

  if (lastEndIndex < path.length) {
    addLastToken(path.substring(lastEndIndex));
  }

  return newPath;
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(String|RegExp|Array)} path
 * @param  {Array}                 [keys]
 * @param  {Object}                [options]
 * @return {RegExp}
 */
function pathToRegexp (path, keys, options, allTokens) {
  keys = keys || [];
  allTokens = allTokens || [];

  if (!index$10(keys)) {
    options = keys;
    keys = [];
  } else if (!options) {
    options = {};
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys, options, allTokens);
  }

  if (index$10(path)) {
    return arrayToRegexp(path, keys, options, allTokens);
  }

  var strict = options.strict;
  var end = options.end !== false;
  var route = replacePath(path, keys, allTokens);
  var endsWithSlash = path.charAt(path.length - 1) === '/';

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys, allTokens);
}

var stateComparison_1 = function StateComparison(stateState) {
	var getPathParameters = pathParameters();

	var parametersChanged = parametersThatMatterWereChanged.bind(null, stateState, getPathParameters);

	return stateComparison.bind(null, parametersChanged)
};

function pathParameters() {
	var parameters = {};

	return function getPathParameters(path) {
		if (!path) {
			return []
		}

		if (!parameters[path]) {
			parameters[path] = index$8(path).keys.map(function(key) {
				return key.name
			});
		}

		return parameters[path]
	}
}

function parametersThatMatterWereChanged(stateState, getPathParameters, stateName, fromParameters, toParameters) {
	var state = stateState.get(stateName);
	var querystringParameters = state.querystringParameters || [];
	var parameters = getPathParameters(state.route).concat(querystringParameters);

	return Array.isArray(parameters) && parameters.some(function(key) {
		return fromParameters[key] !== toParameters[key]
	})
}

function stateComparison(parametersChanged, originalState, originalParameters, newState, newParameters) {
	var states = index$6({
		start: stateStringParser(originalState),
		end: stateStringParser(newState)
	});

	return states.map(function(states) {
		return {
			nameBefore: states.start,
			nameAfter: states.end,
			stateNameChanged: states.start !== states.end,
			stateParametersChanged: states.start === states.end && parametersChanged(states.start, originalParameters, newParameters)
		}
	})
}

var currentState = function CurrentState() {
	var current = {
		name: '',
		parameters: {}
	};

	return {
		get: function() {
			return current
		},
		set: function(name, parameters) {
			current = {
				name: name,
				parameters: parameters
			};
		}
	}
};

var stateChangeLogic = function stateChangeLogic(stateComparisonResults) {
	var hitChangingState = false;
	var hitDestroyedState = false;

	var output = {
		destroy: [],
		change: [],
		create: []
	};

	stateComparisonResults.forEach(function(state) {
		hitChangingState = hitChangingState || state.stateParametersChanged;
		hitDestroyedState = hitDestroyedState || state.stateNameChanged;

		if (state.nameBefore) {
			if (hitDestroyedState) {
				output.destroy.push(state.nameBefore);
			} else if (hitChangingState) {
				output.change.push(state.nameBefore);
			}
		}

		if (state.nameAfter && hitDestroyedState) {
			output.create.push(state.nameAfter);
		}
	});

	return output
};

var stateTransitionManager = function (emitter) {
	var currentTransitionAttempt = null;
	var nextTransition = null;

	function doneTransitioning() {
		currentTransitionAttempt = null;
		if (nextTransition) {
			beginNextTransitionAttempt();
		}
	}

	function isTransitioning() {
		return !!currentTransitionAttempt
	}

	function beginNextTransitionAttempt() {
		currentTransitionAttempt = nextTransition;
		nextTransition = null;
		currentTransitionAttempt.beginStateChange();
	}

	function cancelCurrentTransition() {
		currentTransitionAttempt.transition.cancelled = true;
		var err = new Error('State transition cancelled by the state transition manager');
		err.wasCancelledBySomeoneElse = true;
		emitter.emit('stateChangeCancelled', err);
	}

	emitter.on('stateChangeAttempt', function(beginStateChange) {
		nextTransition = createStateTransitionAttempt(beginStateChange);

		if (isTransitioning() && currentTransitionAttempt.transition.cancellable) {
			cancelCurrentTransition();
		} else if (!isTransitioning()) {
			beginNextTransitionAttempt();
		}
	});

	emitter.on('stateChangeError', doneTransitioning);
	emitter.on('stateChangeCancelled', doneTransitioning);
	emitter.on('stateChangeEnd', doneTransitioning);

	function createStateTransitionAttempt(beginStateChange) {
		var transition = {
			cancelled: false,
			cancellable: true
		};
		return {
			transition: transition,
			beginStateChange: beginStateChange.bind(null, transition)
		}
	}
};

var defaultRouterOptions = { reverse: false };

var npo = createCommonjsModule(function (module) {
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
!function(t,n,e){n[t]=n[t]||e(),"undefined"!='object'&&module.exports?module.exports=n[t]:"function"==typeof undefined&&undefined.amd&&undefined(function(){return n[t]});}("Promise","undefined"!=typeof commonjsGlobal?commonjsGlobal:commonjsGlobal,function(){"use strict";function t(t,n){l.add(t,n),h||(h=y(l.drain));}function n(t){var n,e=typeof t;return null==t||"object"!=e&&"function"!=e||(n=t.then),"function"==typeof n?n:!1}function e(){for(var t=0;t<this.chain.length;t++)o(this,1===this.state?this.chain[t].success:this.chain[t].failure,this.chain[t]);this.chain.length=0;}function o(t,e,o){var r,i;try{e===!1?o.reject(t.msg):(r=e===!0?t.msg:e.call(void 0,t.msg),r===o.promise?o.reject(TypeError("Promise-chain cycle")):(i=n(r))?i.call(r,o.resolve,o.reject):o.resolve(r));}catch(c){o.reject(c);}}function r(o){var c,u=this;if(!u.triggered){u.triggered=!0,u.def&&(u=u.def);try{(c=n(o))?t(function(){var t=new f(u);try{c.call(o,function(){r.apply(t,arguments);},function(){i.apply(t,arguments);});}catch(n){i.call(t,n);}}):(u.msg=o,u.state=1,u.chain.length>0&&t(e,u));}catch(a){i.call(new f(u),a);}}}function i(n){var o=this;o.triggered||(o.triggered=!0,o.def&&(o=o.def),o.msg=n,o.state=2,o.chain.length>0&&t(e,o));}function c(t,n,e,o){for(var r=0;r<n.length;r++)!function(r){t.resolve(n[r]).then(function(t){e(r,t);},o);}(r);}function f(t){this.def=t,this.triggered=!1;}function u(t){this.promise=t,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0;}function a(n){if("function"!=typeof n)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new u(this);this.then=function(n,r){var i={success:"function"==typeof n?n:!0,failure:"function"==typeof r?r:!1};return i.promise=new this.constructor(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");i.resolve=t,i.reject=n;}),o.chain.push(i),0!==o.state&&t(e,o),i.promise},this["catch"]=function(t){return this.then(void 0,t)};try{n.call(void 0,function(t){r.call(o,t);},function(t){i.call(o,t);});}catch(c){i.call(o,c);}}var s,h,l,p=Object.prototype.toString,y="undefined"!=typeof setImmediate?function(t){return setImmediate(t)}:setTimeout;try{Object.defineProperty({},"x",{}),s=function(t,n,e,o){return Object.defineProperty(t,n,{value:e,writable:!0,configurable:o!==!1})};}catch(d){s=function(t,n,e){return t[n]=e,t};}l=function(){function t(t,n){this.fn=t,this.self=n,this.next=void 0;}var n,e,o;return{add:function(r,i){o=new t(r,i),e?e.next=o:n=o,e=o,o=void 0;},drain:function(){var t=n;for(n=e=h=void 0;t;)t.fn.call(t.self),t=t.next;}}}();var g=s({},"constructor",a,!1);return a.prototype=g,s(g,"__NPO__",0,!1),s(a,"resolve",function(t){var n=this;return t&&"object"==typeof t&&1===t.__NPO__?t:new n(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");n(t);})}),s(a,"reject",function(t){return new this(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");e(t);})}),s(a,"all",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):0===t.length?n.resolve([]):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");var r=t.length,i=Array(r),f=0;c(n,t,function(t,n){i[t]=n,++f===r&&e(i);},o);})}),s(a,"race",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");c(n,t,function(t,n){e(n);},o);})}),a});
});

// Pulled from https://github.com/joliss/promise-map-series and prettied up a bit



var promiseMapSeries = function sequence(array, iterator, thisArg) {
	var current = npo.resolve();
	var cb = arguments.length > 2 ? iterator.bind(thisArg) : iterator;

	var results = array.map(function(value, i) {
		return current = current.then(function(j) {
			return cb(value, j, array)
		}.bind(null, i))
	});

	return npo.all(results)
};

var index$12 = function denodeify(fn) {
	return function() {
		var self = this;
		var args = Array.prototype.slice.call(arguments);
		return new Promise(function(resolve, reject) {
			args.push(function(err, res) {
				if (err) {
					reject(err);
				} else {
					resolve(res);
				}
			});

			var res = fn.apply(self, args);

			var isPromise = res
				&& (typeof res === 'object' || typeof res === 'function')
				&& typeof res.then === 'function';

			if (isPromise) {
				resolve(res);
			}
		})
	}
};

var index$14 = createCommonjsModule(function (module) {
'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
{
  module.exports = EventEmitter;
}
});

var immutable = extend$1;

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend$1() {
    var target = {};

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target
}

var index$20 = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$22 = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode$1(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode$1(key, opts),
					'[',
					encode$1(index, opts),
					']=',
					encode$1(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode$1(key, opts) : [
					encode$1(key, opts),
					'[]=',
					encode$1(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode$1(key, opts) : [
					encode$1(key, opts),
					'=',
					encode$1(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode$1(value, opts) {
	if (opts.encode) {
		return opts.strict ? index$20(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

var extract = function (str) {
	return str.split('?')[1] || '';
};

var parse$1 = function (str, opts) {
	opts = index$22({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

var stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = index$22(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode$1(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode$1(key, opts) + '=' + encode$1(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var index$18 = {
	extract: extract,
	parse: parse$1,
	stringify: stringify
};

var hashLocation = function HashLocation(window) {
	var emitter = new index$14();
	var last = '';
	var needToDecode = getNeedToDecode();

	window.addEventListener('hashchange', function() {
		if (last !== emitter.get()) {
			last = emitter.get();
			emitter.emit('hashchange');
		}
	});

	emitter.go = go.bind(null, window);
	emitter.replace = replace.bind(null, window);
	emitter.get = get$1.bind(null, window, needToDecode);

	return emitter
};

function replace(window, newPath) {
	window.location.replace(everythingBeforeTheSlash(window.location.href) + '#' + newPath);
}

function everythingBeforeTheSlash(url) {
	var hashIndex = url.indexOf('#');
	return hashIndex === -1 ? url : url.substring(0, hashIndex)
}

function go(window, newPath) {
	window.location.hash = newPath;
}

function get$1(window, needToDecode) {
	var hash = removeHashFromPath(window.location.hash);
	return needToDecode ? decodeURI(hash) : hash
}

function removeHashFromPath(path) {
	return (path && path[0] === '#') ? path.substr(1) : path
}

function getNeedToDecode() {
	var a = document.createElement('a');
	a.href = '#x x';
	return !/x x/.test(a.hash)
}

var index$16 = function Router(opts, hashLocation$$1) {
	var emitter = new index$14();
	if (isHashLocation(opts)) {
		hashLocation$$1 = opts;
		opts = null;
	}

	opts = opts || {};

	if (!hashLocation$$1) {
		hashLocation$$1 = hashLocation(window);
	}

	function onNotFound(path, queryStringParameters) {
		emitter.emit('not found', path, queryStringParameters);
	}

	var routes = [];

	var onHashChange = evaluateCurrentPath.bind(null, routes, hashLocation$$1, !!opts.reverse, onNotFound);

	hashLocation$$1.on('hashchange', onHashChange);

	function stop() {
		hashLocation$$1.removeListener('hashchange', onHashChange);
	}

	emitter.add = add.bind(null, routes);
	emitter.stop = stop;
	emitter.evaluateCurrent = evaluateCurrentPathOrGoToDefault.bind(null, routes, hashLocation$$1, !!opts.reverse, onNotFound);
	emitter.replace = hashLocation$$1.replace;
	emitter.go = hashLocation$$1.go;
	emitter.location = hashLocation$$1;

	return emitter
};

function evaluateCurrentPath(routes, hashLocation$$1, reverse, onNotFound) {
	evaluatePath(routes, hashLocation$$1.get(), reverse, onNotFound);
}

function getPathParts(path) {
	var chunks = path.split('?');
	return {
		path: chunks.shift(),
		queryString: index$18.parse(chunks.join(''))
	}
}

function evaluatePath(routes, path, reverse, onNotFound) {
	var pathParts = getPathParts(path);
	path = pathParts.path;
	var queryStringParameters = pathParts.queryString;

	var matchingRoute = find((reverse ? reverseArray(routes) : routes), path);

	if (matchingRoute) {
		var regexResult = matchingRoute.exec(path);
		var routeParameters = makeParametersObjectFromRegexResult(matchingRoute.keys, regexResult);
		var params = immutable(queryStringParameters, routeParameters);
		matchingRoute.fn(params);
	} else {
		onNotFound(path, queryStringParameters);
	}
}

function reverseArray(ary) {
	return ary.slice().reverse()
}

function makeParametersObjectFromRegexResult(keys, regexResult) {
	return keys.reduce(function(memo, urlKey, index) {
		memo[urlKey.name] = regexResult[index + 1];
		return memo
	}, {})
}

function add(routes, routeString, routeFunction) {
	if (typeof routeFunction !== 'function') {
		throw new Error('The router add function must be passed a callback function')
	}
	var newRoute = index$8(routeString);
	newRoute.fn = routeFunction;
	routes.push(newRoute);
}

function evaluateCurrentPathOrGoToDefault(routes, hashLocation$$1, reverse, onNotFound, defaultPath) {
	const currentLocation = hashLocation$$1.get();
	if (currentLocation && currentLocation !== '/') {
		var routesCopy = routes.slice();

		evaluateCurrentPath(routesCopy, hashLocation$$1, reverse, onNotFound);
	} else {
		hashLocation$$1.go(defaultPath);
	}
}

function isHashLocation(hashLocation$$1) {
	return hashLocation$$1 && hashLocation$$1.go && hashLocation$$1.replace && hashLocation$$1.on
}

function find(aryOfRegexes, str) {
	for (var i = 0; i < aryOfRegexes.length; ++i) {
		if (str.match(aryOfRegexes[i])) {
			return aryOfRegexes[i]
		}
	}
}

// This file to be replaced with an official implementation maintained by
// the page.js crew if and when that becomes an option



var pathParser = function(pathString) {
	var parseResults = index$8(pathString);

	// The only reason I'm returning a new object instead of the results of the pathToRegexp
	// function is so that if the official implementation ends up returning an
	// allTokens-style array via some other mechanism, I may be able to change this file
	// without having to change the rest of the module in index.js
	return {
		regex: parseResults,
		allTokens: parseResults.allTokens
	}
};

var stringifyQuerystring = index$18.stringify;

var index$24 = function(pathStr, parameters) {
	var parsed = typeof pathStr === 'string' ? pathParser(pathStr) : pathStr;
	var allTokens = parsed.allTokens;
	var regex = parsed.regex;

	if (parameters) {
		var path = allTokens.map(function(bit) {
			if (bit.string) {
				return bit.string
			}

			var defined = typeof parameters[bit.name] !== 'undefined';
			if (!bit.optional && !defined) {
				throw new Error('Must supply argument ' + bit.name + ' for path ' + pathStr)
			}

			return defined ? (bit.delimiter + encodeURIComponent(parameters[bit.name])) : ''
		}).join('');

		if (!regex.test(path)) {
			throw new Error('Provided arguments do not match the original arguments')
		}

		return buildPathWithQuerystring(path, parameters, allTokens)
	} else {
		return parsed
	}
};

function buildPathWithQuerystring(path, parameters, tokenArray) {
	var parametersInQuerystring = getParametersWithoutMatchingToken(parameters, tokenArray);

	if (Object.keys(parametersInQuerystring).length === 0) {
		return path
	}

	return path + '?' + stringifyQuerystring(parametersInQuerystring)
}

function getParametersWithoutMatchingToken(parameters, tokenArray) {
	var tokenHash = tokenArray.reduce(function(memo, bit) {
		if (!bit.string) {
			memo[bit.name] = bit;
		}
		return memo
	}, {});

	return Object.keys(parameters).filter(function(param) {
		return !tokenHash[param]
	}).reduce(function(newParameters, param) {
		newParameters[param] = parameters[param];
		return newParameters
	}, {})
}

var browser$1 = function (fn) {
  typeof setImmediate === 'function' ?
    setImmediate(fn) :
    setTimeout(fn, 0);
};

var expectedPropertiesOfAddState = [ 'name', 'route', 'defaultChild', 'data', 'template', 'resolve', 'activate', 'querystringParameters', 'defaultQuerystringParameters', 'defaultParameters' ];

var index$4 = function StateProvider(makeRenderer, rootElement, stateRouterOptions) {
	var prototypalStateHolder = stateState();
	var lastCompletelyLoadedState = currentState();
	var lastStateStartedActivating = currentState();
	var stateProviderEmitter = new index$14();
	stateTransitionManager(stateProviderEmitter);
	stateRouterOptions = immutable({
		throwOnError: true,
		pathPrefix: '#'
	}, stateRouterOptions);

	if (!stateRouterOptions.router) {
		stateRouterOptions.router = index$16(defaultRouterOptions);
	}

	stateRouterOptions.router.on('not found', function(route, parameters) {
		stateProviderEmitter.emit('routeNotFound', route, parameters);
	});

	var destroyDom = null;
	var getDomChild = null;
	var renderDom = null;
	var resetDom = null;

	var activeDomApis = {};
	var activeStateResolveContent = {};
	var activeEmitters = {};

	function handleError(event, err) {
		browser$1(function() {
			stateProviderEmitter.emit(event, err);
			console.error(event + ' - ' + err.message);
			if (stateRouterOptions.throwOnError) {
				throw err
			}
		});
	}

	function destroyStateName(stateName) {
		var state = prototypalStateHolder.get(stateName);
		stateProviderEmitter.emit('beforeDestroyState', {
			state: state,
			domApi: activeDomApis[stateName]
		});

		activeEmitters[stateName].emit('destroy');
		activeEmitters[stateName].removeAllListeners();
		delete activeEmitters[stateName];
		delete activeStateResolveContent[stateName];

		return destroyDom(activeDomApis[stateName]).then(function() {
			delete activeDomApis[stateName];
			stateProviderEmitter.emit('afterDestroyState', {
				state: state
			});
		})
	}

	function resetStateName(parameters, stateName) {
		var domApi = activeDomApis[stateName];
		var content = getContentObject(activeStateResolveContent, stateName);
		var state = prototypalStateHolder.get(stateName);

		stateProviderEmitter.emit('beforeResetState', {
			domApi: domApi,
			content: content,
			state: state,
			parameters: parameters
		});

		activeEmitters[stateName].emit('destroy');
		delete activeEmitters[stateName];

		return resetDom({
			domApi: domApi,
			content: content,
			template: state.template,
			parameters: parameters
		}).then(function(newDomApi) {
			if (newDomApi) {
				activeDomApis[stateName] = newDomApi;
			}

			stateProviderEmitter.emit('afterResetState', {
				domApi: activeDomApis[stateName],
				content: content,
				state: state,
				parameters: parameters
			});
		})
	}

	function getChildElementForStateName(stateName) {
		return new Promise(function(resolve) {
			var parent = prototypalStateHolder.getParent(stateName);
			if (parent) {
				var parentDomApi = activeDomApis[parent.name];
				resolve(getDomChild(parentDomApi));
			} else {
				resolve(rootElement);
			}
		})
	}

	function renderStateName(parameters, stateName) {
		return getChildElementForStateName(stateName).then(function(childElement) {
			var state = prototypalStateHolder.get(stateName);
			var content = getContentObject(activeStateResolveContent, stateName);

			stateProviderEmitter.emit('beforeCreateState', {
				state: state,
				content: content,
				parameters: parameters
			});

			return renderDom({
				element: childElement,
				template: state.template,
				content: content,
				parameters: parameters
			}).then(function(domApi) {
				activeDomApis[stateName] = domApi;
				stateProviderEmitter.emit('afterCreateState', {
					state: state,
					domApi: domApi,
					content: content,
					parameters: parameters
				});
				return domApi
			})
		})
	}

	function renderAll(stateNames, parameters) {
		return promiseMapSeries(stateNames, renderStateName.bind(null, parameters))
	}

	function onRouteChange(state, parameters) {
		try {
			var finalDestinationStateName = prototypalStateHolder.applyDefaultChildStates(state.name);

			if (finalDestinationStateName === state.name) {
				emitEventAndAttemptStateChange(finalDestinationStateName, parameters);
			} else {
				// There are default child states that need to be applied

				var theRouteWeNeedToEndUpAt = makePath(finalDestinationStateName, parameters);
				var currentRoute = stateRouterOptions.router.location.get();

				if (theRouteWeNeedToEndUpAt === currentRoute) {
					// the child state has the same route as the current one, just start navigating there
					emitEventAndAttemptStateChange(finalDestinationStateName, parameters);
				} else {
					// change the url to match the full default child state route
					stateProviderEmitter.go(finalDestinationStateName, parameters, { replace: true });
				}
			}
		} catch (err) {
			handleError('stateError', err);
		}
	}

	function addState(state) {
		if (typeof state === 'undefined') {
			throw new Error('Expected \'state\' to be passed in.')
		} else if (typeof state.name === 'undefined') {
			throw new Error('Expected the \'name\' option to be passed in.')
		} else if (typeof state.template === 'undefined') {
			throw new Error('Expected the \'template\' option to be passed in.')
		}
		Object.keys(state).filter(function(key) {
			return expectedPropertiesOfAddState.indexOf(key) === -1
		}).forEach(function(key) {
			console.warn('Unexpected property passed to addState:', key);
		});

		prototypalStateHolder.add(state.name, state);

		var route = prototypalStateHolder.buildFullStateRoute(state.name);

		stateRouterOptions.router.add(route, onRouteChange.bind(null, state));
	}

	function getStatesToResolve(stateChanges) {
		return stateChanges.change.concat(stateChanges.create).map(prototypalStateHolder.get)
	}

	function emitEventAndAttemptStateChange(newStateName, parameters) {
		stateProviderEmitter.emit('stateChangeAttempt', function stateGo(transition) {
			attemptStateChange(newStateName, parameters, transition);
		});
	}

	function attemptStateChange(newStateName, parameters, transition) {
		function ifNotCancelled(fn) {
			return function() {
				if (transition.cancelled) {
					var err = new Error('The transition to ' + newStateName + 'was cancelled');
					err.wasCancelledBySomeoneElse = true;
					throw err
				} else {
					return fn.apply(null, arguments)
				}
			}
		}

		return promiseMe(prototypalStateHolder.guaranteeAllStatesExist, newStateName)
		.then(function applyDefaultParameters() {
			var state = prototypalStateHolder.get(newStateName);
			var defaultParams = state.defaultParameters || state.defaultQuerystringParameters || {};
			var needToApplyDefaults = Object.keys(defaultParams).some(function missingParameterValue(param) {
				return typeof parameters[param] === 'undefined'
			});

			if (needToApplyDefaults) {
				throw redirector(newStateName, immutable(defaultParams, parameters))
			}
			return state
		}).then(ifNotCancelled(function(state) {
			stateProviderEmitter.emit('stateChangeStart', state, parameters);
			lastStateStartedActivating.set(state.name, parameters);
		})).then(function getStateChanges() {
			var stateComparisonResults = stateComparison_1(prototypalStateHolder)(lastCompletelyLoadedState.get().name, lastCompletelyLoadedState.get().parameters, newStateName, parameters);
			return stateChangeLogic(stateComparisonResults) // { destroy, change, create }
		}).then(ifNotCancelled(function resolveDestroyAndActivateStates(stateChanges) {
			return resolveStates(getStatesToResolve(stateChanges), immutable(parameters)).catch(function onResolveError(e) {
				e.stateChangeError = true;
				throw e
			}).then(ifNotCancelled(function destroyAndActivate(stateResolveResultsObject) {
				transition.cancellable = false;

				function activateAll() {
					var statesToActivate = stateChanges.change.concat(stateChanges.create);

					return activateStates(statesToActivate)
				}

				activeStateResolveContent = immutable(activeStateResolveContent, stateResolveResultsObject);

				return promiseMapSeries(reverse(stateChanges.destroy), destroyStateName).then(function() {
					return promiseMapSeries(reverse(stateChanges.change), resetStateName.bind(null, immutable(parameters)))
				}).then(function() {
					return renderAll(stateChanges.create, immutable(parameters)).then(activateAll)
				})
			}))

			function activateStates(stateNames) {
				return stateNames.map(prototypalStateHolder.get).forEach(function(state) {
					var emitter = new index$14();
					var context = Object.create(emitter);
					context.domApi = activeDomApis[state.name];
					context.data = state.data;
					context.parameters = parameters;
					context.content = getContentObject(activeStateResolveContent, state.name);
					activeEmitters[state.name] = emitter;

					try {
						state.activate && state.activate(context);
					} catch (e) {
						browser$1(function() {
							throw e
						});
					}
				})
			}
		})).then(function stateChangeComplete() {
			lastCompletelyLoadedState.set(newStateName, parameters);
			try {
				stateProviderEmitter.emit('stateChangeEnd', prototypalStateHolder.get(newStateName), parameters);
			} catch (e) {
				handleError('stateError', e);
			}
		}).catch(ifNotCancelled(function handleStateChangeError(err) {
			if (err && err.redirectTo) {
				stateProviderEmitter.emit('stateChangeCancelled', err);
				return stateProviderEmitter.go(err.redirectTo.name, err.redirectTo.params, { replace: true })
			} else if (err) {
				handleError('stateChangeError', err);
			}
		})).catch(function handleCancellation(err) {
			if (err && err.wasCancelledBySomeoneElse) {
				// we don't care, the state transition manager has already emitted the stateChangeCancelled for us
			} else {
				throw new Error("This probably shouldn't happen, maybe file an issue or something " + err)
			}
		})
	}

	function makePath(stateName, parameters, options) {
		function getGuaranteedPreviousState() {
			if (!lastStateStartedActivating.get().name) {
				throw new Error('makePath required a previous state to exist, and none was found')
			}
			return lastStateStartedActivating.get()
		}
		if (options && options.inherit) {
			parameters = immutable(getGuaranteedPreviousState().parameters, parameters);
		}

		var destinationStateName = stateName === null ? getGuaranteedPreviousState().name : stateName;

		var destinationState = prototypalStateHolder.get(destinationStateName) || {};
		var defaultParams = destinationState.defaultParameters || destinationState.defaultQuerystringParameters;

		parameters = immutable(defaultParams, parameters);

		prototypalStateHolder.guaranteeAllStatesExist(destinationStateName);
		var route = prototypalStateHolder.buildFullStateRoute(destinationStateName);
		return index$24(route, parameters || {})
	}

	var defaultOptions = {
		replace: false
	};

	stateProviderEmitter.addState = addState;
	stateProviderEmitter.go = function go(newStateName, parameters, options) {
		options = immutable(defaultOptions, options);
		var goFunction = options.replace ? stateRouterOptions.router.replace : stateRouterOptions.router.go;

		return promiseMe(makePath, newStateName, parameters, options).then(goFunction, handleError.bind(null, 'stateChangeError'))
	};
	stateProviderEmitter.evaluateCurrentRoute = function evaluateCurrentRoute(defaultState, defaultParams) {
		return promiseMe(makePath, defaultState, defaultParams).then(function(defaultPath) {
			stateRouterOptions.router.evaluateCurrent(defaultPath);
		}).catch(function(err) {
			handleError('stateError', err);
		})
	};
	stateProviderEmitter.makePath = function makePathAndPrependHash(stateName, parameters, options) {
		return stateRouterOptions.pathPrefix + makePath(stateName, parameters, options)
	};
	stateProviderEmitter.stateIsActive = function stateIsActive(stateName, opts) {
		var currentState$$1 = lastCompletelyLoadedState.get();
		return (currentState$$1.name === stateName || currentState$$1.name.indexOf(stateName + '.') === 0) && (typeof opts === 'undefined' || Object.keys(opts).every(function matches(key) {
			return opts[key] === currentState$$1.parameters[key]
		}))
	};

	var renderer = makeRenderer(stateProviderEmitter);

	destroyDom = index$12(renderer.destroy);
	getDomChild = index$12(renderer.getChildElement);
	renderDom = index$12(renderer.render);
	resetDom = index$12(renderer.reset);

	return stateProviderEmitter
};

function getContentObject(stateResolveResultsObject, stateName) {
	var allPossibleResolvedStateNames = stateStringParser(stateName);

	return allPossibleResolvedStateNames.filter(function(stateName) {
		return stateResolveResultsObject[stateName]
	}).reduce(function(obj, stateName) {
		return immutable(obj, stateResolveResultsObject[stateName])
	}, {})
}

function redirector(newStateName, parameters) {
	return {
		redirectTo: {
			name: newStateName,
			params: parameters
		}
	}
}

// { [stateName]: resolveResult }
function resolveStates(states, parameters) {
	var statesWithResolveFunctions = states.filter(isFunction$1('resolve'));
	var stateNamesWithResolveFunctions = statesWithResolveFunctions.map(property('name'));
	var resolves = Promise.all(statesWithResolveFunctions.map(function(state) {
		return new Promise(function(resolve, reject) {
			function resolveCb(err, content) {
				err ? reject(err) : resolve(content);
			}

			resolveCb.redirect = function redirect(newStateName, parameters) {
				reject(redirector(newStateName, parameters));
			};

			var res = state.resolve(state.data, parameters, resolveCb);
			if (res && (typeof res === 'object' || typeof res === 'function') && typeof res.then === 'function') {
				resolve(res);
			}
		})
	}));

	return resolves.then(function(resolveResults) {
		return index$6({
			stateName: stateNamesWithResolveFunctions,
			resolveResult: resolveResults
		}).reduce(function(obj, result) {
			obj[result.stateName] = result.resolveResult;
			return obj
		}, {})
	})
}

function property(name) {
	return function(obj) {
		return obj[name]
	}
}

function reverse(ary) {
	return ary.slice().reverse()
}

function isFunction$1(property) {
	return function(obj) {
		return typeof obj[property] === 'function'
	}
}

function promiseMe() {
	var fn = Array.prototype.shift.apply(arguments);
	var args = arguments;
	return new Promise(function(resolve) {
		resolve(fn.apply(null, args));
	})
}

var index$28 = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (typeof undefined === 'function' && undefined.amd) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

const copy = object => index$28({}, object, { clone: true });

var index$26 = function SvelteStateRendererFactory(defaultOptions = {}) {
	return function makeRenderer(stateRouter) {
		const asr = {
			makePath: stateRouter.makePath,
			stateIsActive: stateRouter.stateIsActive
		};

		function render(context, cb) {
			const { element: target, template, content } = context;

			const rendererSuppliedOptions = index$28(defaultOptions, {
				target,
				data: Object.assign(content, defaultOptions.data, { asr })
			});

			let svelte;

			try {
				if (typeof template === 'function') {
					svelte = new template(rendererSuppliedOptions);
				} else {
					const options = index$28(rendererSuppliedOptions, template.options);

					svelte = options.methods
						? instantiateWithMethods(template.component, options, options.methods)
						: new template.component(options);
				}
				svelte.asrReset = createComponentResetter(svelte);
			} catch (e) {
				cb(e);
				return
			}

			function onRouteChange() {
				svelte.set({
					asr
				});
			}

			stateRouter.on('stateChangeEnd', onRouteChange);

			svelte.on('destroy', () => {
				stateRouter.removeListener('stateChangeEnd', onRouteChange);
			});

			svelte.mountedToTarget = target;
			cb(null, svelte);
		}

		return {
			render,
			reset: function reset(context, cb) {
				const svelte = context.domApi;

				svelte.asrReset(context.content);

				cb();
			},
			destroy: function destroy(svelte, cb) {
				svelte.teardown();
				cb();
			},
			getChildElement: function getChildElement(svelte, cb) {
				try {
					const element = svelte.mountedToTarget;
					const child = element.querySelector('uiView');
					cb(null, child);
				} catch (e) {
					cb(e);
				}
			}
		}
	}
};

function createComponentResetter(component) {
	const originalData = copy(component.get());

	return function reset(newData) {
		const resetObject = Object.create(null);
		Object.keys(component.get()).forEach(key => {
			resetObject[key] = undefined;
		});
		Object.assign(resetObject, copy(originalData), newData);
		component.set(resetObject);
	}
}

function instantiateWithMethods(Component, options, methods) {
	// const coolPrototype = Object.assign(Object.create(Component.prototype), methods)
	// return Component.call(coolPrototype, options)
	return Object.assign(new Component(options), methods)
}

/* src\components\Home.html generated by Svelte v1.64.1 */
function oncreate$2() {
	this.set({
		canViewHelpFiles: window.app.getForm("help") != null
	});
}

function create_main_fragment$3(component, state) {
	var if_block_anchor;

	function select_block_type(state) {
		if (state.canViewHelpFiles === true) return create_if_block$3;
		return create_if_block_1$1;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type !== (current_block_type = select_block_type(state))) {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (1:0) {{#if canViewHelpFiles === true}}
function create_if_block$3(component, state) {
	var p;

	return {
		c: function create() {
			p = createElement("p");
			p.innerHTML = "Welcome to the UimfApp. To help you get started, please <a href=\"/#/form/help?FileId=intro.md\">read the documentation</a>.";
			this.h();
		},

		h: function hydrate() {
			setStyle(p, "margin-top", "20px");
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
		},

		u: function unmount() {
			detachNode(p);
		},

		d: noop$1
	};
}

// (5:0) {{else}}
function create_if_block_1$1(component, state) {
	var p;

	return {
		c: function create() {
			p = createElement("p");
			p.textContent = "Welcome to UimfApp.";
			this.h();
		},

		h: function hydrate() {
			setStyle(p, "margin-top", "20px");
		},

		m: function mount(target, anchor) {
			insertNode(p, target, anchor);
		},

		u: function unmount() {
			detachNode(p);
		},

		d: noop$1
	};
}

function SvelteComponent$3(options) {
	init(this, options);
	this._state = assign({}, options.data);

	var self = this;
	var _oncreate = function() {
		var changed = { canViewHelpFiles: 1 };
		oncreate$2.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$3(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$3.prototype, proto);

/* src\core\ui\help\Tooltip.html generated by Svelte v1.64.1 */
function create_main_fragment$6(component, state) {
	var if_block_anchor;

	var if_block = (state.data) && create_if_block$6(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.data) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$6(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if data }}
function create_if_block$6(component, state) {
	var span, raw_value = state.data.content;

	return {
		c: function create() {
			span = createElement("span");
			this.h();
		},

		h: function hydrate() {
			span.className = "tooltiptext";
		},

		m: function mount(target, anchor) {
			insertNode(span, target, anchor);
			span.innerHTML = raw_value;
		},

		p: function update(changed, state) {
			if ((changed.data) && raw_value !== (raw_value = state.data.content)) {
				span.innerHTML = raw_value;
			}
		},

		u: function unmount() {
			span.innerHTML = '';

			detachNode(span);
		},

		d: noop$1
	};
}

function SvelteComponent$6(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$6(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$6.prototype, proto);

/* src\core\ui\Input.html generated by Svelte v1.64.1 */
let inputId = 0;

function data$2() {
	inputId += 1;
	return {
		id: `i${inputId}`,
		visible: false
	};
}

var methods$1 = {
	show(visible) {
		const field = this.get("field");
		const currentlyVisible = !!this.get("visible");

		this.set({ visible: !!visible });

		if (currentlyVisible === false && visible === true) {
			const app = this.get("app");
			const input = app.controlRegister.getInput(field.metadata.type);

			// eslint-disable-next-line
			new input.component({
				target: this.refs.container,
				data: {
					field,
					tabindex: this.get("tabindex"),
					id: this.get("id"),
					app,
					form: this.get("form"),
					wrapper: this
				}
			});
		}

		if (!visible) {
			field.value = null;
		}
	}
};

function oncreate$3() {
	const field = this.get("field");
	const app = this.get("app");

	const input = app.controlRegister.getInput(field.metadata.type);

	// Set correct css class based on the field type.
	const inputDisplayConfig = field.constants || input.constants || {};

	const cssClass = field.metadata.customProperties != null ? field.metadata.customProperties.cssClass : null;

	// Set correct css class based on the field type.
	if (inputDisplayConfig.block) {
		this.set({ class: `block ${cssClass}` });
	}
	else {
		this.set({ class: `inline ${cssClass}` });
	}

	this.set({
		class: cssClass,
		alwaysHideLabel: inputDisplayConfig.alwaysHideLabel
	});

	const inputs = this.get("form").get("inputs");
	// If `inputs` is null, then it means our parent form has been closed
	// and "destroyed". In such cases we should just return.
	// TODO: find a better way to implement "parent form null check".
	if (inputs != null) {
		// Register input in the parent form.
		inputs.push(this);
	}

	const isVisible = !field.metadata.eventHandlers.length ||
		field.metadata.eventHandlers.find(t => t.id === "depend-on") == null;

	this.show(isVisible);
}

function add_css$1() {
	var style = createElement("style");
	style.id = 'svelte-1xxlf66-style';
	style.textContent = ".svelte-1xxlf66.inline,.svelte-1xxlf66 .inline{display:inline-block}.svelte-1xxlf66.col-form-label,.svelte-1xxlf66 .col-form-label{padding-left:0}";
	appendNode(style, document.head);
}

function create_main_fragment$5(component, state) {
	var if_block_anchor;

	var if_block = (state.visible) && create_if_block$5(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.visible) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$5(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (5:12) {{#if field.metadata.customProperties != null && field.metadata.customProperties["documentation"] != null}}
function create_if_block_2$2(component, state) {
	var div, text_value = state.field.metadata.label, text, text_1;

	var tooltip_initial_data = { data: state.field.metadata.customProperties.documentation[0] };
	var tooltip = new SvelteComponent$6({
		root: component.root,
		data: tooltip_initial_data
	});

	return {
		c: function create() {
			div = createElement("div");
			text = createText(text_value);
			text_1 = createText(":\r\n                ");
			tooltip._fragment.c();
			this.h();
		},

		h: function hydrate() {
			div.className = "help-tooltip";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(text, div);
			appendNode(text_1, div);
			tooltip._mount(div, null);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.metadata.label)) {
				text.data = text_value;
			}

			var tooltip_changes = {};
			if (changed.field) tooltip_changes.data = state.field.metadata.customProperties.documentation[0];
			tooltip._set(tooltip_changes);
		},

		u: function unmount() {
			detachNode(div);
		},

		d: function destroy$$1() {
			tooltip.destroy(false);
		}
	};
}

// (9:12) {{else}}
function create_if_block_3$1(component, state) {
	var text_value = state.field.metadata.label, text, text_1;

	return {
		c: function create() {
			text = createText(text_value);
			text_1 = createText(":");
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(text_1, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.metadata.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(text);
			detachNode(text_1);
		},

		d: noop$1
	};
}

// (2:4) {{#if !alwaysHideLabel && field.metadata.label !== "" }}
function create_if_block_1$3(component, state) {
	var div, label, text_1, div_1, div_class_value;

	function select_block_type(state) {
		if (state.field.metadata.customProperties != null && state.field.metadata.customProperties["documentation"] != null) return create_if_block_2$2;
		return create_if_block_3$1;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			div = createElement("div");
			label = createElement("label");
			if_block.c();
			text_1 = createText("\r\n        ");
			div_1 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			label.htmlFor = state.id;
			label.className = "col-form-label";
			div_1.className = "input-container";
			div.className = div_class_value = "form-group " + state.class + " svelte-1xxlf66";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(label, div);
			if_block.m(label, null);
			appendNode(text_1, div);
			appendNode(div_1, div);
			component.refs.container = div_1;
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(label, null);
			}

			if (changed.id) {
				label.htmlFor = state.id;
			}

			if ((changed.class) && div_class_value !== (div_class_value = "form-group " + state.class + " svelte-1xxlf66")) {
				div.className = div_class_value;
			}
		},

		u: function unmount() {
			detachNode(div);
			if_block.u();
		},

		d: function destroy$$1() {
			if_block.d();
			if (component.refs.container === div_1) component.refs.container = null;
		}
	};
}

// (15:4) {{else}}
function create_if_block_4$1(component, state) {
	var div, div_1, div_class_value;

	return {
		c: function create() {
			div = createElement("div");
			div_1 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			div_1.className = "input-container";
			div.className = div_class_value = "form-group " + state.class + " svelte-1xxlf66";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(div_1, div);
			component.refs.container = div_1;
		},

		p: function update(changed, state) {
			if ((changed.class) && div_class_value !== (div_class_value = "form-group " + state.class + " svelte-1xxlf66")) {
				div.className = div_class_value;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: function destroy$$1() {
			if (component.refs.container === div_1) component.refs.container = null;
		}
	};
}

// (1:0) {{#if visible}}
function create_if_block$5(component, state) {
	var if_block_anchor;

	function select_block_type_1(state) {
		if (!state.alwaysHideLabel && state.field.metadata.label !== "") return create_if_block_1$3;
		return create_if_block_4$1;
	}

	var current_block_type = select_block_type_1(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type_1(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

function SvelteComponent$5(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data$2(), options.data);

	if (!document.getElementById("svelte-1xxlf66-style")) add_css$1();

	var self = this;
	var _oncreate = function() {
		var changed = { visible: 1, alwaysHideLabel: 1, field: 1, class: 1, id: 1 };
		oncreate$3.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$5(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$5.prototype, proto);
assign(SvelteComponent$5.prototype, methods$1);

/* src\core\ui\Output.html generated by Svelte v1.64.1 */
function data$3() {
	return {
		showLabel: true
	};
}

function oncreate$4() {
	const field = this.get("field");
	const app = this.get("app");
	const parent = this.get("parent");
	const form = this.get("form");

	const output = app.controlRegister.getOutput(field);

	// Never show label if `alwaysHideLabel` is set to true.
	const outputDisplayConfig = output.constants || {};
	this.set({
		alwaysHideLabel: outputDisplayConfig.alwaysHideLabel
	});

	// eslint-disable-next-line
	new output.constructor({
		target: this.refs.container,
		data: {
			field,
			app,
			form,
			parent
		}
	});

	const cssClass = field.metadata.customProperties != null ? field.metadata.customProperties.cssClass : null;

	// Set correct css class based on the field type.
	if (outputDisplayConfig.block) {
		this.set({ class: `block ${cssClass}` });
	}
	else {
		this.set({ class: `inline ${cssClass}` });
	}
}

function add_css$2() {
	var style = createElement("style");
	style.id = 'svelte-122hjti-style';
	style.textContent = ".svelte-122hjti.inline,.svelte-122hjti .inline{display:inline-block}";
	appendNode(style, document.head);
}

function create_main_fragment$7(component, state) {
	var if_block_anchor;

	function select_block_type_1(state) {
		if (state.showLabel === true && !state.alwaysHideLabel && state.field.metadata.label !== "") return create_if_block$7;
		return create_if_block_3$2;
	}

	var current_block_type = select_block_type_1(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type_1(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (3:8) {{#if field.metadata.customProperties != null && field.metadata.customProperties["documentation"] != null}}
function create_if_block_1$4(component, state) {
	var label, text_value = state.field.metadata.label, text, text_1;

	var tooltip_initial_data = { data: state.field.metadata.customProperties.documentation[0] };
	var tooltip = new SvelteComponent$6({
		root: component.root,
		data: tooltip_initial_data
	});

	return {
		c: function create() {
			label = createElement("label");
			text = createText(text_value);
			text_1 = createText(":\r\n            ");
			tooltip._fragment.c();
			this.h();
		},

		h: function hydrate() {
			label.className = "help-tooltip output-label";
		},

		m: function mount(target, anchor) {
			insertNode(label, target, anchor);
			appendNode(text, label);
			appendNode(text_1, label);
			tooltip._mount(label, null);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.metadata.label)) {
				text.data = text_value;
			}

			var tooltip_changes = {};
			if (changed.field) tooltip_changes.data = state.field.metadata.customProperties.documentation[0];
			tooltip._set(tooltip_changes);
		},

		u: function unmount() {
			detachNode(label);
		},

		d: function destroy$$1() {
			tooltip.destroy(false);
		}
	};
}

// (7:8) {{else}}
function create_if_block_2$3(component, state) {
	var label, text_value = state.field.metadata.label, text, text_1;

	return {
		c: function create() {
			label = createElement("label");
			text = createText(text_value);
			text_1 = createText(":");
			this.h();
		},

		h: function hydrate() {
			label.className = "output-label";
		},

		m: function mount(target, anchor) {
			insertNode(label, target, anchor);
			appendNode(text, label);
			appendNode(text_1, label);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.metadata.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(label);
		},

		d: noop$1
	};
}

// (1:0) {{#if showLabel === true && !alwaysHideLabel && field.metadata.label !== ""}}
function create_if_block$7(component, state) {
	var div, text, div_1, div_1_class_value;

	function select_block_type(state) {
		if (state.field.metadata.customProperties != null && state.field.metadata.customProperties["documentation"] != null) return create_if_block_1$4;
		return create_if_block_2$3;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			div = createElement("div");
			if_block.c();
			text = createText("\r\n    ");
			div_1 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			div_1.className = div_1_class_value = "output-container " + state.class;
			div.className = "svelte-122hjti";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			if_block.m(div, null);
			appendNode(text, div);
			appendNode(div_1, div);
			component.refs.container = div_1;
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(div, text);
			}

			if ((changed.class) && div_1_class_value !== (div_1_class_value = "output-container " + state.class)) {
				div_1.className = div_1_class_value;
			}
		},

		u: function unmount() {
			detachNode(div);
			if_block.u();
		},

		d: function destroy$$1() {
			if_block.d();
			if (component.refs.container === div_1) component.refs.container = null;
		}
	};
}

// (14:0) {{else}}
function create_if_block_3$2(component, state) {
	var div, div_class_value;

	return {
		c: function create() {
			div = createElement("div");
			this.h();
		},

		h: function hydrate() {
			div.className = div_class_value = "output-container " + state.class + " svelte-122hjti";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			component.refs.container = div;
		},

		p: function update(changed, state) {
			if ((changed.class) && div_class_value !== (div_class_value = "output-container " + state.class + " svelte-122hjti")) {
				div.className = div_class_value;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: function destroy$$1() {
			if (component.refs.container === div) component.refs.container = null;
		}
	};
}

function SvelteComponent$7(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data$3(), options.data);

	if (!document.getElementById("svelte-122hjti-style")) add_css$2();

	var self = this;
	var _oncreate = function() {
		var changed = { showLabel: 1, alwaysHideLabel: 1, field: 1, class: 1 };
		oncreate$4.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$7(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$7.prototype, proto);

/* src\core\ui\help\Help.html generated by Svelte v1.64.1 */
function humanize(e) {
	return e.replace(/\.[^/.]+$/, "")
		.split(/(?=[A-Z])/)
		.join(" ");
}

// https://stackoverflow.com/a/3369743/111438
// Close topmost modal when user presses escape key.
let currentlyOpenHelpModal = null;
document.addEventListener("keydown", evt => {
	const theEvent = evt || window.event;
	let isEscape = false;
	if ("key" in theEvent) {
		isEscape = (theEvent.key === "Escape" || theEvent.key === "Esc");
	}
	else {
		isEscape = (theEvent.keyCode === 27);
	}
	if (isEscape && currentlyOpenHelpModal != null) {
		currentlyOpenHelpModal.close();
	}
});

function data$4() {
	return {
		files: [],
		open: false,
		modalId: ""
	};
}

var methods$2 = {
	open() {
		this.set({ open: true });
		currentlyOpenHelpModal = this;
	},
	close() {
		this.set({ open: false });
		currentlyOpenHelpModal = null;
	}
};

function oncreate$5() {
	const files = this.get("data").files.map(i => ({ file: i, name: humanize(i) }));

	this.set({
		files,
		modalId: this.constructor.name
	});
}

function add_css$3() {
	var style = createElement("style");
	style.id = 'svelte-1xt0qjq-style';
	style.textContent = "ul.svelte-1xt0qjq.help-files,.svelte-1xt0qjq ul.help-files{list-style:none}.svelte-1xt0qjq.inline-help,.svelte-1xt0qjq .inline-help{background:#ecf8fb;padding:10px}.svelte-1xt0qjq.modal-help > i,.svelte-1xt0qjq .modal-help > i{font-size:15pt;color:#5b7b9b}.svelte-1xt0qjq.modal-help,.svelte-1xt0qjq .modal-help{display:block;margin-left:-10px;position:absolute;right:10px;top:30px}.svelte-1xt0qjq.help-files,.svelte-1xt0qjq .help-files{border-top:1px solid #d8d8d8;padding:10px;margin:10px;background:#ecf8fb}.svelte-1xt0qjq.help-files ul,.svelte-1xt0qjq .help-files ul{list-style:circle}";
	appendNode(style, document.head);
}

function create_main_fragment$8(component, state) {
	var if_block_anchor;

	var if_block = (state.data) && create_if_block$8(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.data) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$8(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (16:8) {{#each files as file}}
function create_each_block$2(component, state) {
	var file = state.file, each_value = state.each_value, file_index = state.file_index;
	var li, a, text_value = file.name, text, a_href_value;

	return {
		c: function create() {
			li = createElement("li");
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = "/#/form/help?FileId=" + file.file;
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			appendNode(a, li);
			appendNode(text, a);
		},

		p: function update(changed, state) {
			file = state.file;
			each_value = state.each_value;
			file_index = state.file_index;
			if ((changed.files) && text_value !== (text_value = file.name)) {
				text.data = text_value;
			}

			if ((changed.files) && a_href_value !== (a_href_value = "/#/form/help?FileId=" + file.file)) {
				a.href = a_href_value;
			}
		},

		u: function unmount() {
			detachNode(li);
		},

		d: noop$1
	};
}

// (12:5) {{ #if files && files.length >0 }}
function create_if_block_2$4(component, state) {
	var div, span, text_1, ul;

	var each_value = state.files;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$2(component, assign(assign({}, state), {
			each_value: each_value,
			file: each_value[i],
			file_index: i
		}));
	}

	return {
		c: function create() {
			div = createElement("div");
			span = createElement("span");
			span.textContent = "For more information:";
			text_1 = createText("\r\n\t\t\t\t\t\t\t");
			ul = createElement("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			div.className = "help-files";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(span, div);
			appendNode(text_1, div);
			appendNode(ul, div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, state) {
			var each_value = state.files;

			if (changed.files) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						file: each_value[i],
						file_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block$2(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}
		},

		u: function unmount() {
			detachNode(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (36:4) {{#each files as file}}
function create_each_block_1$1(component, state) {
	var file = state.file, each_value_1 = state.each_value_1, file_index_1 = state.file_index_1;
	var li, a, text_value = file.name, text, a_href_value;

	return {
		c: function create() {
			li = createElement("li");
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = "/#/form/help?FileId=" + file.file;
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			appendNode(a, li);
			appendNode(text, a);
		},

		p: function update(changed, state) {
			file = state.file;
			each_value_1 = state.each_value_1;
			file_index_1 = state.file_index_1;
			if ((changed.files) && text_value !== (text_value = file.name)) {
				text.data = text_value;
			}

			if ((changed.files) && a_href_value !== (a_href_value = "/#/form/help?FileId=" + file.file)) {
				a.href = a_href_value;
			}
		},

		u: function unmount() {
			detachNode(li);
		},

		d: noop$1
	};
}

// (32:2) {{#if files && files.length >0 }}
function create_if_block_4$2(component, state) {
	var div, span, text_1, ul;

	var each_value_1 = state.files;

	var each_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$1(component, assign(assign({}, state), {
			each_value_1: each_value_1,
			file: each_value_1[i],
			file_index_1: i
		}));
	}

	return {
		c: function create() {
			div = createElement("div");
			span = createElement("span");
			span.textContent = "For more information";
			text_1 = createText("\r\n\t\t\t");
			ul = createElement("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			div.className = "help-files";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(span, div);
			appendNode(text_1, div);
			appendNode(ul, div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, state) {
			var each_value_1 = state.files;

			if (changed.files) {
				for (var i = 0; i < each_value_1.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value_1: each_value_1,
						file: each_value_1[i],
						file_index_1: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_1$1(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_1.length;
			}
		},

		u: function unmount() {
			detachNode(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (2:1) {{#if data.placement == 'Hint' }}
function create_if_block_1$5(component, state) {
	var div, i, text, input, input_id_value, text_1, div_1, div_2, label, text_2, div_3, raw_value = state.data.content, raw_after, text_3;

	function click_handler(event) {
		component.open();
	}

	function input_change_handler() {
		component.set({ open: input.checked });
	}

	function click_handler_1(event) {
		component.close();
	}

	var if_block = (state.files && state.files.length >0) && create_if_block_2$4(component, state);

	return {
		c: function create() {
			div = createElement("div");
			i = createElement("i");
			text = createText("\r\n\t\t");
			input = createElement("input");
			text_1 = createText("\r\n\t\t");
			div_1 = createElement("div");
			div_2 = createElement("div");
			label = createElement("label");
			text_2 = createText("\r\n\t\t\t\t");
			div_3 = createElement("div");
			raw_after = createElement('noscript');
			text_3 = createText("\r\n\r\n\t\t\t\t\t");
			if (if_block) if_block.c();
			this.h();
		},

		h: function hydrate() {
			addListener$1(i, "click", click_handler);
			i.className = "far fa-question-circle";
			i.title = "Click to open help for this form";
			addListener$1(input, "change", input_change_handler);
			input.id = input_id_value = "modal-" + state.modalId;
			setAttribute(input, "type", "checkbox");
			input.className = "hidden";
			addListener$1(label, "click", click_handler_1);
			label.className = "close";
			div_2.className = "card";
			div_1.className = "modal";
			div.className = "help-content modal-help svelte-1xt0qjq";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(i, div);
			appendNode(text, div);
			appendNode(input, div);

			input.checked = state.open;

			appendNode(text_1, div);
			appendNode(div_1, div);
			appendNode(div_2, div_1);
			appendNode(label, div_2);
			appendNode(text_2, div_2);
			appendNode(div_3, div_2);
			appendNode(raw_after, div_3);
			raw_after.insertAdjacentHTML("beforebegin", raw_value);
			appendNode(text_3, div_3);
			if (if_block) if_block.m(div_3, null);
			component.refs.container = div_3;
		},

		p: function update(changed, state) {
			input.checked = state.open;
			if ((changed.modalId) && input_id_value !== (input_id_value = "modal-" + state.modalId)) {
				input.id = input_id_value;
			}

			if ((changed.data) && raw_value !== (raw_value = state.data.content)) {
				detachBefore(raw_after);
				raw_after.insertAdjacentHTML("beforebegin", raw_value);
			}

			if (state.files && state.files.length >0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_2$4(component, state);
					if_block.c();
					if_block.m(div_3, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			detachBefore(raw_after);

			detachNode(div);
			if (if_block) if_block.u();
		},

		d: function destroy$$1() {
			removeListener$1(i, "click", click_handler);
			removeListener$1(input, "change", input_change_handler);
			removeListener$1(label, "click", click_handler_1);
			if (if_block) if_block.d();
			if (component.refs.container === div_3) component.refs.container = null;
		}
	};
}

// (29:39) 
function create_if_block_3$3(component, state) {
	var div, raw_value = state.data.content, raw_after, text;

	var if_block = (state.files && state.files.length >0) && create_if_block_4$2(component, state);

	return {
		c: function create() {
			div = createElement("div");
			raw_after = createElement('noscript');
			text = createText("\r\n\t\t");
			if (if_block) if_block.c();
			this.h();
		},

		h: function hydrate() {
			div.className = "help-content inline-help svelte-1xt0qjq";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(raw_after, div);
			raw_after.insertAdjacentHTML("beforebegin", raw_value);
			appendNode(text, div);
			if (if_block) if_block.m(div, null);
		},

		p: function update(changed, state) {
			if ((changed.data) && raw_value !== (raw_value = state.data.content)) {
				detachBefore(raw_after);
				raw_after.insertAdjacentHTML("beforebegin", raw_value);
			}

			if (state.files && state.files.length >0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_4$2(component, state);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			detachBefore(raw_after);

			detachNode(div);
			if (if_block) if_block.u();
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if data }}
function create_if_block$8(component, state) {
	var if_block_anchor;

	function select_block_type(state) {
		if (state.data.placement == 'Hint') return create_if_block_1$5;
		if (state.data.placement == 'Inline') return create_if_block_3$3;
		return null;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type && current_block_type(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if (if_block) {
					if_block.u();
					if_block.d();
				}
				if_block = current_block_type && current_block_type(component, state);
				if (if_block) if_block.c();
				if (if_block) if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

function SvelteComponent$8(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data$4(), options.data);

	if (!document.getElementById("svelte-1xt0qjq-style")) add_css$3();

	var self = this;
	var _oncreate = function() {
		var changed = { data: 1, modalId: 1, open: 1, files: 1 };
		oncreate$5.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$8(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$8.prototype, proto);
assign(SvelteComponent$8.prototype, methods$2);

/* src\core\ui\Form.html generated by Svelte v1.64.1 */
let tabindex = 1;
let openForms = [];

function bindEventHandlersToCustomEvents(formComponent, eventHandlers) {
	const formInstance = formComponent.get("form");

	for (const eventHandler of eventHandlers) {
		// Don't bind default event handlers, because they are already auto-bound inside FormInstance.
		if (eventHandler.runAt.indexOf("form:") === 0) {
			continue;
		}

		formComponent.on(eventHandler.runAt, e => {
			// Augment event args with form which is firing the event. This is needed,
			// so that event handler can know from which particular form this event is coming.
			e.form = formComponent;

			formInstance.handleEvent(eventHandler.runAt, eventHandler, e);
		});
	}
}

function data$1() {
	return {
		disabled: false,
		tabindex,
		urlData: null,
		initialized: false,
		responseMetadata: {},
		useUrl: true,
		parent: null, // Can be set if this is a nested form within another form (i.e. - InlineForm.html)
		inputs: []
	};
}

var methods = {
	async init() {
		if (!this.get("initialized")) {
			const form = this.get("form");

			this.set({
				self: this,
				initialized: true,
				visibleInputFields: form.inputs.filter(t => t.metadata.hidden === false),
				submitButtonLabel: form.metadata.getCustomProperty("submitButtonLabel") || "Submit",
				cssClass: form.metadata.getCustomProperty("cssClass") || "",
				documentation: form.metadata.getCustomProperty("documentation")
			});

			tabindex += 1;

			const app = this.get("app");

			// Subscribe all event handlers (form, inputs, outputs).
			const formMetadata = form.metadata;
			const handlers = [];
			formMetadata.inputFields.forEach(t => t.eventHandlers.forEach(h => handlers.push(h)));
			formMetadata.outputFields.forEach(t => t.eventHandlers.forEach(h => handlers.push(h)));
			formMetadata.eventHandlers.forEach(h => handlers.push(h));
			bindEventHandlersToCustomEvents(this, handlers);

			form.fire("form:loaded", { app });

			// Auto-submit form if necessary.
			if (form.metadata.postOnLoad) {
				await this.submit();
			}

			openForms.push(this);

			if (this.get("parent") == null) {
				if (this.get("responseMetadata").title == null) {
					document.title = form.metadata.label;
				}
			}
		}
	},
	fireAndBubbleUp(eventName, eventArgs) {
		this.fire(eventName, eventArgs);
		const parentFormComponent = this.get("parent");

		if (parentFormComponent != null) {
			parentFormComponent.fireAndBubbleUp(eventName, eventArgs);
		}
	},
	enableForm() {
		const formInstance = this.get("form");

		// Hide all inputs, to re-render them. This is needed due to the way that
		// Svelte *seems* to work - it doesn't re-render nested components, unless they are recreated.
		this.set({ visibleInputFields: [] });

		this.set({
		// Show inputs again.
			visibleInputFields: formInstance.inputs.filter(t => t.metadata.hidden === false),

			disabled: false
		});
	},
	renderResponse(response) {
		const formInstance = this.get("form");

		// Force Svelte to re-render outputs.
		this.set({
			outputFieldValues: null
		});

		this.set({
			outputFieldValues: formInstance.outputs,
			responseMetadata: response.metadata
		});

		if (this.get("parent") == null) {
			document.title = response.metadata.title;
		}
	},
	async submit(event, redirect) {
		const self = this;
		const formInstance = this.get("form");
		const app = this.get("app");

		if (event != null) {
			event.preventDefault();
		}

		// If not all required inputs are filled.
		const allRequiredInputsHaveValues = await formInstance.allRequiredInputsHaveData(redirect == null);
		if (!allRequiredInputsHaveValues) {
			return;
		}

		// Disable double-posts.
		self.set({ disabled: true });

		// If postOnLoad == true, then the input field values should appear in the url.
		// Reason is that postOnLoad == true is used by "report" pages, which need
		// their filters to be saved in the url. This does not apply to forms
		// with postOnLoad == false, because those forms are usually for creating new data
		// and hence should not be tracked in browser's history based on parameters.
		if (formInstance.metadata.postOnLoad && redirect && this.get("useUrl")) {
			const urlParams = await formInstance.getSerializedInputValues();

			// Update url in the browser.
			app.go(formInstance.metadata.id, urlParams);

			return;
		}

		try {
			const response = await formInstance.submit(app, redirect == null, { formComponent: self });

			self.enableForm();

			// Signal event to child controls.
			self.fire("form:responseHandled", {
				form: self,
				invokedByUser: event != null,
				response
			});
		}
		catch (e) {
			self.enableForm();
		}
	},
	reloadTopForm() {
		const parentFormComponent = this.get("parent");

		if (parentFormComponent != null) {
			parentFormComponent.reloadTopForm();
		}
		else {
			this.submit(null, true);
		}
	},
	reloadAllForms() {
		for (const f of openForms) {
			f.reloadTopForm();
		}
	},
	getInputComponent(inputId) {
		return this.get("inputs").find(t => t.get("field").metadata.id === inputId);
	}
};

function ondestroy() {
	openForms = openForms.filter(f => f !== this);
}

function add_css() {
	var style = createElement("style");
	style.id = 'svelte-j3p5ab-style';
	style.textContent = ".svelte-j3p5ab.response,.svelte-j3p5ab .response{margin-top:15px;padding-left:10px;padding-right:10px}.svelte-j3p5ab.form-header,.svelte-j3p5ab .form-header{text-align:center;padding-top:20px;border-bottom:1px solid #bbd2d6;background-color:#fff;position:relative}.svelte-j3p5ab.form-header h2,.svelte-j3p5ab .form-header h2{display:inline-block}.svelte-j3p5ab.help-content,.svelte-j3p5ab .help-content{text-align:left}";
	appendNode(style, document.head);
}

function create_main_fragment$4(component, state) {
	var if_block_anchor;

	var if_block = (state.initialized) && create_if_block$4(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.initialized) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$4(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (8:3) {{#each documentation as document }}
function create_each_block$1(component, state) {
	var document_1 = state.document, each_value = state.each_value, document_index = state.document_index;

	var help_initial_data = { data: document_1 };
	var help = new SvelteComponent$8({
		root: component.root,
		data: help_initial_data
	});

	return {
		c: function create() {
			help._fragment.c();
		},

		m: function mount(target, anchor) {
			help._mount(target, anchor);
		},

		p: function update(changed, state) {
			document_1 = state.document;
			each_value = state.each_value;
			document_index = state.document_index;
			var help_changes = {};
			if (changed.documentation) help_changes.data = document_1;
			help._set(help_changes);
		},

		u: function unmount() {
			help._unmount();
		},

		d: function destroy$$1() {
			help.destroy(false);
		}
	};
}

// (7:2) {{#if documentation }}
function create_if_block_2$1(component, state) {
	var each_anchor;

	var each_value = state.documentation;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(component, assign(assign({}, state), {
			each_value: each_value,
			document: each_value[i],
			document_index: i
		}));
	}

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_anchor = createComment();
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insertNode(each_anchor, target, anchor);
		},

		p: function update(changed, state) {
			var each_value = state.documentation;

			if (changed.documentation) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						document: each_value[i],
						document_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block$1(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}
		},

		u: function unmount() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			detachNode(each_anchor);
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (3:2) {{#if (responseMetadata.title != null && responseMetadata.title != "") || (metadata.label != null && metadata.label != "")}}
function create_if_block_1$2(component, state) {
	var div, h2, text_value = state.responseMetadata.title || state.metadata.label, text, text_1;

	var if_block = (state.documentation) && create_if_block_2$1(component, state);

	return {
		c: function create() {
			div = createElement("div");
			h2 = createElement("h2");
			text = createText(text_value);
			text_1 = createText("\r\n\r\n\t\t");
			if (if_block) if_block.c();
			this.h();
		},

		h: function hydrate() {
			div.className = "form-header";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(h2, div);
			appendNode(text, h2);
			appendNode(text_1, div);
			if (if_block) if_block.m(div, null);
		},

		p: function update(changed, state) {
			if ((changed.responseMetadata || changed.metadata) && text_value !== (text_value = state.responseMetadata.title || state.metadata.label)) {
				text.data = text_value;
			}

			if (state.documentation) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_2$1(component, state);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			detachNode(div);
			if (if_block) if_block.u();
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (18:2) {{#each visibleInputFields as inputField}}
function create_each_block_1(component, state) {
	var inputField = state.inputField, each_value_1 = state.each_value_1, inputField_index = state.inputField_index;

	var forminput_initial_data = {
	 	field: inputField,
	 	app: state.app,
	 	tabindex: state.tabindex * 100 + inputField.metadata.orderIndex,
	 	form: state.self
	 };
	var forminput = new SvelteComponent$5({
		root: component.root,
		data: forminput_initial_data
	});

	return {
		c: function create() {
			forminput._fragment.c();
		},

		m: function mount(target, anchor) {
			forminput._mount(target, anchor);
		},

		p: function update(changed, state) {
			inputField = state.inputField;
			each_value_1 = state.each_value_1;
			inputField_index = state.inputField_index;
			var forminput_changes = {};
			if (changed.visibleInputFields) forminput_changes.field = inputField;
			if (changed.app) forminput_changes.app = state.app;
			if (changed.tabindex || changed.visibleInputFields) forminput_changes.tabindex = state.tabindex * 100 + inputField.metadata.orderIndex;
			if (changed.self) forminput_changes.form = state.self;
			forminput._set(forminput_changes);
		},

		u: function unmount() {
			forminput._unmount();
		},

		d: function destroy$$1() {
			forminput.destroy(false);
		}
	};
}

// (15:1) {{#if initialized && visibleInputFields.length > 0}}
function create_if_block_3(component, state) {
	var div, form, text, div_1, button;

	var each_value_1 = state.visibleInputFields;

	var each_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(component, assign(assign({}, state), {
			each_value_1: each_value_1,
			inputField: each_value_1[i],
			inputField_index: i
		}));
	}

	function submit_handler(event) {
		component.submit(event, true);
	}

	return {
		c: function create() {
			div = createElement("div");
			form = createElement("form");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text = createText("\r\n\t\t");
			div_1 = createElement("div");
			button = createElement("button");
			this.h();
		},

		h: function hydrate() {
			button.type = "submit";
			button.disabled = state.disabled;
			button.tabIndex = "-1";
			button.className = "btn btn-info";
			div_1.className = "full-width";
			addListener$1(form, "submit", submit_handler);
			div.className = "form-body";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(form, div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(form, null);
			}

			appendNode(text, form);
			appendNode(div_1, form);
			appendNode(button, div_1);
			button.innerHTML = state.submitButtonLabel;
		},

		p: function update(changed, state) {
			var each_value_1 = state.visibleInputFields;

			if (changed.visibleInputFields || changed.app || changed.tabindex || changed.self) {
				for (var i = 0; i < each_value_1.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value_1: each_value_1,
						inputField: each_value_1[i],
						inputField_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_1(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(form, text);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_1.length;
			}

			if (changed.submitButtonLabel) {
				button.innerHTML = state.submitButtonLabel;
			}

			if (changed.disabled) {
				button.disabled = state.disabled;
			}
		},

		u: function unmount() {
			button.innerHTML = '';

			detachNode(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);

			removeListener$1(form, "submit", submit_handler);
		}
	};
}

// (30:2) {{#each outputFieldValues as outputField }}
function create_each_block_2(component, state) {
	var outputField = state.outputField, each_value_2 = state.each_value_2, outputField_index = state.outputField_index;
	var if_block_anchor;

	var if_block = (outputField.metadata.hidden == false && !(outputField.metadata.getCustomProperty("hideIfNull") === true && outputField.data === null)) && create_if_block_5(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			outputField = state.outputField;
			each_value_2 = state.each_value_2;
			outputField_index = state.outputField_index;
			if (outputField.metadata.hidden == false && !(outputField.metadata.getCustomProperty("hideIfNull") === true && outputField.data === null)) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_5(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (31:2) {{#if outputField.metadata.hidden == false && !(outputField.metadata.getCustomProperty("hideIfNull") === true && outputField.data === null)}}
function create_if_block_5(component, state) {
	var outputField = state.outputField, each_value_2 = state.each_value_2, outputField_index = state.outputField_index;

	var formoutput_initial_data = {
	 	field: outputField,
	 	app: state.app,
	 	form: state.form,
	 	parent: state.self
	 };
	var formoutput = new SvelteComponent$7({
		root: component.root,
		data: formoutput_initial_data
	});

	return {
		c: function create() {
			formoutput._fragment.c();
		},

		m: function mount(target, anchor) {
			formoutput._mount(target, anchor);
		},

		p: function update(changed, state) {
			outputField = state.outputField;
			each_value_2 = state.each_value_2;
			outputField_index = state.outputField_index;
			var formoutput_changes = {};
			if (changed.outputFieldValues) formoutput_changes.field = outputField;
			if (changed.app) formoutput_changes.app = state.app;
			if (changed.form) formoutput_changes.form = state.form;
			if (changed.self) formoutput_changes.parent = state.self;
			formoutput._set(formoutput_changes);
		},

		u: function unmount() {
			formoutput._unmount();
		},

		d: function destroy$$1() {
			formoutput.destroy(false);
		}
	};
}

// (28:1) {{#if outputFieldValues != null}}
function create_if_block_4(component, state) {
	var div;

	var each_value_2 = state.outputFieldValues;

	var each_blocks = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(component, assign(assign({}, state), {
			each_value_2: each_value_2,
			outputField: each_value_2[i],
			outputField_index: i
		}));
	}

	return {
		c: function create() {
			div = createElement("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			div.className = "response";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},

		p: function update(changed, state) {
			var each_value_2 = state.outputFieldValues;

			if (changed.outputFieldValues || changed.app || changed.form || changed.self) {
				for (var i = 0; i < each_value_2.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value_2: each_value_2,
						outputField: each_value_2[i],
						outputField_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_2(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_2.length;
			}
		},

		u: function unmount() {
			detachNode(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (1:0) {{#if initialized}}
function create_if_block$4(component, state) {
	var div, text, text_1, div_class_value;

	var if_block = ((state.responseMetadata.title != null && state.responseMetadata.title != "") || (state.metadata.label != null && state.metadata.label != "")) && create_if_block_1$2(component, state);

	var if_block_1 = (state.initialized && state.visibleInputFields.length > 0) && create_if_block_3(component, state);

	var if_block_2 = (state.outputFieldValues != null) && create_if_block_4(component, state);

	return {
		c: function create() {
			div = createElement("div");
			if (if_block) if_block.c();
			text = createText("\r\n\r\n\t");
			if (if_block_1) if_block_1.c();
			text_1 = createText("\r\n\r\n\t");
			if (if_block_2) if_block_2.c();
			this.h();
		},

		h: function hydrate() {
			div.className = div_class_value = "inputs-horizontal-one-column " + state.cssClass + " svelte-j3p5ab";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			if (if_block) if_block.m(div, null);
			appendNode(text, div);
			if (if_block_1) if_block_1.m(div, null);
			appendNode(text_1, div);
			if (if_block_2) if_block_2.m(div, null);
		},

		p: function update(changed, state) {
			if ((state.responseMetadata.title != null && state.responseMetadata.title != "") || (state.metadata.label != null && state.metadata.label != "")) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_1$2(component, state);
					if_block.c();
					if_block.m(div, text);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			if (state.initialized && state.visibleInputFields.length > 0) {
				if (if_block_1) {
					if_block_1.p(changed, state);
				} else {
					if_block_1 = create_if_block_3(component, state);
					if_block_1.c();
					if_block_1.m(div, text_1);
				}
			} else if (if_block_1) {
				if_block_1.u();
				if_block_1.d();
				if_block_1 = null;
			}

			if (state.outputFieldValues != null) {
				if (if_block_2) {
					if_block_2.p(changed, state);
				} else {
					if_block_2 = create_if_block_4(component, state);
					if_block_2.c();
					if_block_2.m(div, null);
				}
			} else if (if_block_2) {
				if_block_2.u();
				if_block_2.d();
				if_block_2 = null;
			}

			if ((changed.cssClass) && div_class_value !== (div_class_value = "inputs-horizontal-one-column " + state.cssClass + " svelte-j3p5ab")) {
				div.className = div_class_value;
			}
		},

		u: function unmount() {
			detachNode(div);
			if (if_block) if_block.u();
			if (if_block_1) if_block_1.u();
			if (if_block_2) if_block_2.u();
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
			if (if_block_1) if_block_1.d();
			if (if_block_2) if_block_2.d();
		}
	};
}

function SvelteComponent$4(options) {
	init(this, options);
	this._state = assign(data$1(), options.data);

	this._handlers.destroy = [ondestroy];

	if (!document.getElementById("svelte-j3p5ab-style")) add_css();

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$4(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$4.prototype, proto);
assign(SvelteComponent$4.prototype, methods);

var AppRouter = (function () {
    function AppRouter(element, app) {
        this.element = element;
        this.stateRenderer = index$26({});
        this.stateRouter = index$4(this.stateRenderer, this.element);
        var rpb = this.rpb = new RouteParameterBuilder("_", app);
        this.stateRouter.addState({
            name: "home",
            route: "/home",
            template: SvelteComponent$3,
            resolve: function (data, parameters, cb) {
                cb(false, {
                    app: app,
                    parent: SvelteComponent$4
                });
            }
        });
        var self = this;
        this.stateRouter.addState({
            name: "menu",
            route: "/menu",
            template: SvelteComponent,
            resolve: function (data, parameters, cb) {
                cb(false, {
                    forms: app.forms,
                    makeUrl: function (formId) { return self.makeUrl(formId, null); }
                });
            }
        });
        this.stateRouter.addState({
            name: "form",
            data: {},
            route: "/form/:_id",
            template: SvelteComponent$4,
            // Force route reload when value of _d parameter changes. This is
            // needed because by default the router will not reload route even if
            // any of the parameters change, unless they are specified in "querystringParameters".
            // This means that if we are trying to reload same form, but with different parameters,
            // nothing will happen, unless _d changes too.
            querystringParameters: [rpb.parameterName],
            defaultParameters: rpb.defaultParameters,
            activate: function (context) {
                context.domApi.init();
                rpb.currentForm = context.parameters._id;
                context.on("destroy", function () { return rpb.currentForm = null; });
                self.fire("router:activated", null);
            },
            resolve: function (data, parameters, cb) {
                var formInstance = app.getFormInstance(parameters._id, true);
                formInstance.initializeInputFields(parameters).then(function () {
                    cb(false, {
                        metadata: formInstance.metadata,
                        form: formInstance,
                        app: app
                    });
                });
            }
        });
        this.stateRouter.evaluateCurrentRoute("home");
    }
    AppRouter.prototype.fire = function (eventName, params) {
        var event = new Event(eventName, params);
        this.element.dispatchEvent(event);
    };
    AppRouter.prototype.on = function (eventName, fn) {
        this.element.addEventListener(eventName, function () {
            fn();
        });
    };
    AppRouter.prototype.go = function (form, values) {
        this.stateRouter.go("form", this.rpb.buildFormRouteParameters(form, values));
    };
    AppRouter.prototype.makeUrl = function (form, values) {
        return this.stateRouter.makePath("form", this.rpb.buildFormRouteParameters(form, values));
    };
    return AppRouter;
}());

var BooleanInputController = (function (_super) {
    __extends(BooleanInputController, _super);
    function BooleanInputController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanInputController.prototype.serializeValue = function (value) {
        var parsed = this.parse(value);
        return parsed != null ? parsed.toString() : null;
    };
    BooleanInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.value = _this.parse(value);
            resolve(_this);
        });
    };
    BooleanInputController.prototype.getValue = function () {
        return Promise.resolve(this.parse(this.value));
    };
    BooleanInputController.prototype.parse = function (value) {
        return value != null && value.toString() !== ""
            ? value.toString() === "true"
            : this.metadata.required ? false : null;
    };
    return BooleanInputController;
}(InputController));

var DateInputController = (function (_super) {
    __extends(DateInputController, _super);
    function DateInputController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueAsText = null;
        return _this;
    }
    DateInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.value = DateInputController.parseDate(value);
            _this.valueAsText = _this.serializeValue(_this.value);
            resolve(_this);
        });
    };
    DateInputController.prototype.getValue = function () {
        return Promise.resolve(this.value);
    };
    DateInputController.prototype.serializeValue = function (date) {
        return DateInputController.serialize(date);
    };
    DateInputController.serialize = function (date) {
        var asDate = typeof (date) === "string"
            ? DateInputController.parseDate(date)
            : date;
        return asDate != null
            ? asDate.getFullYear() + "-" + DateInputController.format2DecimalPlaces(asDate.getMonth() + 1) + "-" + DateInputController.format2DecimalPlaces(asDate.getDate())
            : null;
    };
    DateInputController.parseDate = function (value) {
        var selectedDate = this.asUtcTime(value, 7, 0, 0);
        if (selectedDate) {
            var dateAsNumber = Date.parse(selectedDate.toString());
            return isNaN(dateAsNumber) ? null : new Date(dateAsNumber);
        }
    };
    DateInputController.asUtcTime = function (date, hour, min, second) {
        /// <summary>Returns provided date as if it was UTC date.</summary>
        /// <param name="date">Local date/time.</param>
        /// <returns type="Date">Date object.</returns>
        if (date == null) {
            return null;
        }
        // If string but not UTC.
        if (typeof (date) === "string" && date[date.length - 1] !== "Z") {
            var year = parseInt(date.substr(0, 4), 10);
            var month = parseInt(date.substr(5, 2), 10);
            var day = parseInt(date.substr(8, 2), 10);
            // Assume UTC.
            return this.getIsoDate(year, month, day, hour, min, second);
        }
        var datepart = new Date(new Date(date).toISOString());
        return this.getIsoDate(datepart.getFullYear(), datepart.getMonth() + 1, datepart.getDate(), hour, min, second);
    };
    DateInputController.getIsoDate = function (year, month, day, hour, min, second) {
        var iso = year +
            "-" +
            this.format2DecimalPlaces(month) +
            "-" +
            this.format2DecimalPlaces(day) +
            "T" +
            this.format2DecimalPlaces(hour) +
            ":" +
            this.format2DecimalPlaces(min) +
            ":" +
            this.format2DecimalPlaces(second) +
            ".000Z";
        return new Date(iso);
    };
    DateInputController.format2DecimalPlaces = function (n) {
        return ("0" + n).slice(-2);
    };
    return DateInputController;
}(InputController));

var DateRangeInputController = (function (_super) {
    __extends(DateRangeInputController, _super);
    function DateRangeInputController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minValueAsText = null;
        _this.maxValueAsText = null;
        return _this;
    }
    DateRangeInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.value = _this.parse(value);
            if (_this.value != null && _this.value.min != null) {
                _this.minValueAsText = DateInputController.serialize(_this.value.min);
            }
            if (_this.value != null && _this.value.max != null) {
                _this.maxValueAsText = DateInputController.serialize(_this.value.max);
            }
            resolve(_this);
        });
    };
    DateRangeInputController.prototype.getValue = function () {
        return Promise.resolve(this.value);
    };
    DateRangeInputController.prototype.serializeValue = function (date) {
        var parsed = this.parse(date);
        return parsed != null ? parsed.serialize() : "";
    };
    DateRangeInputController.prototype.parse = function (value) {
        if (value == null) {
            return new DateRange();
        }
        return typeof (value) === "string"
            ? DateRange.parse(value)
            : value;
    };
    return DateRangeInputController;
}(InputController));
var DateRange = (function () {
    function DateRange(min, max) {
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        this.min = min;
        this.max = max;
    }
    DateRange.parse = function (date) {
        var split = date.split("|");
        var minPart = DateInputController.parseDate(split[0]), maxPart = DateInputController.parseDate(split[1]);
        return new DateRange(minPart, maxPart);
    };
    DateRange.prototype.serialize = function () {
        return DateInputController.serialize(this.min) + "|" + DateInputController.serialize(this.max);
    };
    return DateRange;
}());

var DropdownInputController = (function (_super) {
    __extends(DropdownInputController, _super);
    function DropdownInputController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownInputController.prototype.serializeValue = function (value) {
        if (typeof (value) === "string") {
            return value;
        }
        return value != null ? value.value : null;
    };
    DropdownInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.selected = value != null ? value.toString() : null;
            _this.value = _this.parse(value);
            resolve(_this);
        });
    };
    DropdownInputController.prototype.getValue = function () {
        return Promise.resolve(this.parse(this.selected));
    };
    DropdownInputController.prototype.initFromSelected = function () {
        this.value = this.parse(this.selected);
    };
    DropdownInputController.prototype.parse = function (value) {
        return value == null || value == "" ? null : { value: value };
    };
    return DropdownInputController;
}(InputController));

var EmailInputController = (function (_super) {
    __extends(EmailInputController, _super);
    function EmailInputController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailInputController.prototype.serializeValue = function (value) {
        if (typeof (value) === "string") {
            return value;
        }
        return value != null ? value.value : null;
    };
    EmailInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.selected = value;
            _this.value = _this.parse(value);
            resolve(_this);
        });
    };
    EmailInputController.prototype.getValue = function () {
        return Promise.resolve(this.parse(this.selected));
    };
    EmailInputController.prototype.parse = function (value) {
        return value == null || value == "" ? null : Email.parse(value);
    };
    return EmailInputController;
}(InputController));
var Email = (function () {
    function Email(value) {
        if (value === void 0) { value = null; }
        this.value = value;
    }
    Email.parse = function (value) {
        return new Email(value);
    };
    return Email;
}());

var axios$2 = index;
var FileUploaderController = (function (_super) {
    __extends(FileUploaderController, _super);
    function FileUploaderController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filesIds = [];
        return _this;
    }
    FileUploaderController.prototype.serializeValue = function (value) {
        return value != null ? JSON.stringify(value) : null;
    };
    FileUploaderController.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Don't do anything. File uploader doesn't allow initialization
            // from pre-existing value.
            resolve(_this);
        });
    };
    FileUploaderController.prototype.getValue = function () {
        var self = this;
        if (self.selected == null ||
            self.selected.length === 0) {
            return Promise.resolve(new FileUploaderValue());
        }
        var promises = [];
        var result = new FileUploaderValue();
        var files = self.selected;
        if (self.filesIds.length > 0) {
            for (var _i = 0, _a = self.filesIds; _i < _a.length; _i++) {
                var fileId = _a[_i];
                result.files.push(fileId);
            }
            self.filesIds = [];
            self.selected = null;
        }
        else {
            var p = new Promise(function (resolve, reject) {
                var formData = new FormData();
                for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                    var f = files_1[_i];
                    formData.append("file", f);
                }
                // Make http request to upload the files.
                axios$2.post("/file/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(function (response) {
                    if (response.data.fileIds != null && response.data.fileIds.length > 0) {
                        for (var _i = 0, _a = response.data.fileIds; _i < _a.length; _i++) {
                            var fileId = _a[_i];
                            result.files.push(fileId);
                            self.filesIds.push(fileId);
                        }
                    }
                    resolve();
                }).catch(function (error) {
                    alert(error.response.data.error);
                    reject(error);
                });
            });
            promises.push(p);
        }
        return Promise.all(promises).then(function (t) {
            return result;
        });
    };
    return FileUploaderController;
}(InputController));
var FileUploaderValue = (function () {
    function FileUploaderValue() {
        this.files = [];
    }
    return FileUploaderValue;
}());

var MultiSelectInputController = (function (_super) {
    __extends(MultiSelectInputController, _super);
    function MultiSelectInputController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxItemCount = -1;
        return _this;
    }
    MultiSelectInputController.prototype.serializeValue = function (value) {
        if (typeof (value) === "string") {
            return value;
        }
        return value != null ? (value.items || []).join(",") : null;
    };
    MultiSelectInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.value = _this.parse(value);
            resolve(_this);
        });
    };
    MultiSelectInputController.prototype.getValue = function () {
        var valueToSubmit = this.value == null || this.value.items == null || this.value.items.length === 0
            ? null
            : this.value;
        return Promise.resolve(valueToSubmit);
    };
    MultiSelectInputController.prototype.parse = function (value) {
        return value == null || value === ""
            ? new MultiSelectValue()
            : new MultiSelectValue(value.split(","));
    };
    return MultiSelectInputController;
}(InputController));
// tslint:disable-next-line:max-classes-per-file
var MultiSelectValue = (function () {
    function MultiSelectValue(items) {
        this.items = [];
        this.items = items;
    }
    return MultiSelectValue;
}());

var NumberInputController = (function (_super) {
    __extends(NumberInputController, _super);
    function NumberInputController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberInputController.prototype.serializeValue = function (value) {
        return NumberInputController.serialize(value);
    };
    NumberInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var v = parseFloat(value);
            _this.value = isNaN(v) ? null : v;
            resolve(_this);
        });
    };
    NumberInputController.prototype.getValue = function () {
        return Promise.resolve(this.value);
    };
    NumberInputController.serialize = function (value) {
        return value != null ? value.toString() : null;
    };
    return NumberInputController;
}(InputController));

var NumberRangeInputController = (function (_super) {
    __extends(NumberRangeInputController, _super);
    function NumberRangeInputController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.min = null;
        _this.max = null;
        return _this;
    }
    NumberRangeInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.value = _this.parse(value);
            resolve(_this);
        });
    };
    NumberRangeInputController.prototype.getValue = function () {
        return Promise.resolve(this.value);
    };
    NumberRangeInputController.prototype.serializeValue = function (num) {
        var parsed = this.parse(num);
        return parsed != null ? parsed.serialize() : "";
    };
    NumberRangeInputController.prototype.parse = function (value) {
        if (value == null) {
            return new NumberRange();
        }
        return typeof (value) === "string"
            ? NumberRange.parse(value)
            : value;
    };
    return NumberRangeInputController;
}(InputController));
// tslint:disable-next-line:max-classes-per-file
var NumberRange = (function () {
    function NumberRange(min, max) {
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        this.min = min;
        this.max = max;
    }
    NumberRange.parse = function (range) {
        var split = range.split("|");
        var minValue = parseFloat(split[0]);
        var maxValue = parseFloat(split[1]);
        return new NumberRange(minValue, maxValue);
    };
    NumberRange.prototype.serialize = function () {
        return NumberInputController.serialize(this.min) + "|" + NumberInputController.serialize(this.max);
    };
    return NumberRange;
}());

var PaginationParameters = (function () {
    function PaginationParameters(pageIndex, pageSize, orderBy, ascending) {
        this.pageIndex = PaginationParameters.asInt(pageIndex, 1);
        this.pageSize = PaginationParameters.asInt(pageSize, 10);
        this.orderBy = orderBy || null;
        this.ascending = PaginationParameters.asBool(ascending, null);
    }
    PaginationParameters.asInt = function (value, defaultValue) {
        if (typeof (value) === "string") {
            var result = parseInt(value, 10);
            return isNaN(result) ? defaultValue : result;
        }
        if (value == null) {
            return defaultValue;
        }
        return value;
    };
    PaginationParameters.asBool = function (value, defaultValue) {
        if (typeof (value) === "string" || value == null) {
            return value != null
                ? value.toString() === "true"
                : defaultValue;
        }
        return value;
    };
    return PaginationParameters;
}());
// tslint:disable-next-line:max-classes-per-file
var PaginatorInputController = (function (_super) {
    __extends(PaginatorInputController, _super);
    function PaginatorInputController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginatorInputController.prototype.serializeValue = function (value) {
        var p = typeof (value) === "string" || value == null
            ? this.parse(value)
            : value;
        if (p.pageIndex === 1 &&
            p.pageSize === 10 &&
            p.ascending == null &&
            p.orderBy == null) {
            return "";
        }
        var result = p.pageIndex + "-" + p.pageSize;
        if (p.orderBy != null) {
            result += "-" + p.orderBy + "-" + p.ascending + "}";
        }
        return result;
    };
    PaginatorInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.value = _this.parse(value);
            resolve(_this);
        });
    };
    PaginatorInputController.prototype.getValue = function () {
        return Promise.resolve(this.value);
    };
    PaginatorInputController.prototype.parse = function (value) {
        // 1-10-firstname-asc
        // 1-10
        if (value == null || value.length === 0) {
            return new PaginationParameters();
        }
        var components = value.split("-");
        return new PaginationParameters(components[0], components[1], components[2], components[3]);
    };
    return PaginatorInputController;
}(InputController));

var PasswordInputController = (function (_super) {
    __extends(PasswordInputController, _super);
    function PasswordInputController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PasswordInputController.prototype.serializeValue = function (value) {
        if (typeof (value) === "string") {
            return value;
        }
        return value != null ? value.value : null;
    };
    PasswordInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.selected = value;
            _this.value = _this.parse(value);
            resolve(_this);
        });
    };
    PasswordInputController.prototype.getValue = function () {
        return Promise.resolve(this.parse(this.selected));
    };
    PasswordInputController.prototype.parse = function (value) {
        return value == null || value === "" ? null : { value: value };
    };
    return PasswordInputController;
}(InputController));

var TextareaInputController = (function (_super) {
    __extends(TextareaInputController, _super);
    function TextareaInputController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaInputController.prototype.serializeValue = function (value) {
        if (typeof (value) === "string") {
            return value;
        }
        return value != null ? value.value : null;
    };
    TextareaInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.selected = value;
            _this.value = _this.parse(value);
            resolve(_this);
        });
    };
    TextareaInputController.prototype.getValue = function () {
        return Promise.resolve(this.parse(this.selected));
    };
    TextareaInputController.prototype.parse = function (value) {
        return value == null || value === "" ? null : { value: value };
    };
    return TextareaInputController;
}(InputController));

var TypeaheadInputController = (function (_super) {
    __extends(TypeaheadInputController, _super);
    function TypeaheadInputController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxItemCount = 1;
        return _this;
    }
    TypeaheadInputController.prototype.serializeValue = function (value) {
        if (typeof (value) === "string") {
            return value;
        }
        return value != null ? value.value : null;
    };
    TypeaheadInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.value = _this.parse(value);
            resolve(_this);
        });
    };
    TypeaheadInputController.prototype.getValue = function () {
        var valueToSubmit = this.value == null || this.value.value == null
            ? null
            : this.value;
        return Promise.resolve(valueToSubmit);
    };
    TypeaheadInputController.prototype.parse = function (value) {
        return value == null || value === ""
            ? new TypeaheadValue()
            : new TypeaheadValue(value);
    };
    return TypeaheadInputController;
}(InputController));
// tslint:disable-next-line:max-classes-per-file
var TypeaheadValue = (function () {
    function TypeaheadValue(value) {
        this.value = value;
    }
    return TypeaheadValue;
}());

/* src\core\ui\inputs\Boolean.html generated by Svelte v1.64.1 */
function add_css$4() {
	var style = createElement("style");
	style.id = 'svelte-1jn1pid-style';
	style.textContent = ".svelte-1jn1pid.checkbox,.svelte-1jn1pid .checkbox{height:20px;width:20px;margin:0.6rem 0.5rem 1.1rem 0.5rem;overflow:initial;position:relative;clip:initial;-webkit-clip-path:initial;clip-path:initial;top:3px}";
	appendNode(style, document.head);
}

function create_main_fragment$9(component, state) {
	var if_block_anchor;

	function select_block_type(state) {
		if (state.field.metadata.required) return create_if_block$9;
		return create_if_block_1$6;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (1:0) {{#if field.metadata.required}}
function create_if_block$9(component, state) {
	var input;

	function input_change_handler() {
		var state = component.get();
		state.field.value = input.checked;
		component.set({ field: state.field });
	}

	return {
		c: function create() {
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "change", input_change_handler);
			setAttribute(input, "type", "checkbox");
			input.id = state.id;
			input.className = "checkbox form-control svelte-1jn1pid";
			input.tabIndex = state.tabindex;
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.checked = state.field.value;
		},

		p: function update(changed, state) {
			input.checked = state.field.value;
			if (changed.id) {
				input.id = state.id;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(input);
		},

		d: function destroy$$1() {
			removeListener$1(input, "change", input_change_handler);
		}
	};
}

// (7:0) {{else}}
function create_if_block_1$6(component, state) {
	var select, option, option_1, text, option_1_value_value, option_2, text_1, option_2_value_value, select_updating = false;

	function select_change_handler() {
		var state = component.get();
		select_updating = true;
		state.field.value = selectValue(select);
		component.set({ field: state.field });
		select_updating = false;
	}

	return {
		c: function create() {
			select = createElement("select");
			option = createElement("option");
			option_1 = createElement("option");
			text = createText("Yes");
			option_2 = createElement("option");
			text_1 = createText("No");
			this.h();
		},

		h: function hydrate() {
			option.__value = "";
			option.value = option.__value;
			option_1.__value = option_1_value_value = true;
			option_1.value = option_1.__value;
			option_2.__value = option_2_value_value = false;
			option_2.value = option_2.__value;
			addListener$1(select, "change", select_change_handler);
			if (!('field' in state)) component.root._beforecreate.push(select_change_handler);
			select.id = state.id;
			select.className = "form-control svelte-1jn1pid";
		},

		m: function mount(target, anchor) {
			insertNode(select, target, anchor);
			appendNode(option, select);
			appendNode(option_1, select);
			appendNode(text, option_1);
			appendNode(option_2, select);
			appendNode(text_1, option_2);

			selectOption(select, state.field.value);
		},

		p: function update(changed, state) {
			option_1.value = option_1.__value;
			option_2.value = option_2.__value;
			if (!select_updating) selectOption(select, state.field.value);
			if (changed.id) {
				select.id = state.id;
			}
		},

		u: function unmount() {
			detachNode(select);
		},

		d: function destroy$$1() {
			removeListener$1(select, "change", select_change_handler);
		}
	};
}

function SvelteComponent$9(options) {
	init(this, options);
	this._state = assign({}, options.data);

	if (!document.getElementById("svelte-1jn1pid-style")) add_css$4();

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
	}

	this._fragment = create_main_fragment$9(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._beforecreate);
	}
}

assign(SvelteComponent$9.prototype, proto);

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray$2(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject$1(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isUndefined$1(input) {
    return input === void 0;
}

function isNumber$1(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate$1(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend$2(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend$2(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined$1(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined$1(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined$1(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined$1(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined$1(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined$1(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined$1(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined$1(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined$1(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined$1(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined$1(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend$2(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction$2(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set$1 (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction$2(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend$2({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject$1(parentConfig[prop]) && isObject$1(childConfig[prop])) {
                res[prop] = {};
                extend$2(res[prop], parentConfig[prop]);
                extend$2(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject$1(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend$2({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction$2(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction$2(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction$2(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$2(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get$2(this, unit);
        }
    };
}

function get$2 (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$2 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction$2(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction$2(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction$2(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction$2(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber$1(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray$2(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray$2(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray$2(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray$2(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber$1(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get$2(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray$2(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray$2(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined$1(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray$2(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var string, match, dayFormat,
        dateFormat, timeFormat, tzFormat;
    var timezones = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800'
    };
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
    var timezone, timezoneIndex;

    string = config._i
        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
    match = basicRfcRegex.exec(string);

    if (match) {
        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        if (match[1]) { // day of week given
            var momentDate = new Date(match[2]);
            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

            if (match[1].substr(0,3) !== momentDay) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return;
            }
        }

        switch (match[5].length) {
            case 2: // military
                if (timezoneIndex === 0) {
                    timezone = ' +0000';
                } else {
                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
                }
                break;
            case 4: // Zone
                timezone = timezones[match[5]];
                break;
            default: // UT or +/-9999
                timezone = timezones[' GMT'];
        }
        match[5] = timezone;
        config._i = match.splice(1).join('');
        tzFormat = ' ZZ';
        config._f = dayFormat + dateFormat + timeFormat + tzFormat;
        configFromStringAndFormat(config);
        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults$2(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults$2(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults$2(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults$2(w.W, 1);
        weekday = defaults$2(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults$2(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults$2(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend$2(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate$1(input)) {
        config._d = input;
    } else if (isArray$2(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined$1(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate$1(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray$2(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject$1(input)) {
        configFromObject(config);
    } else if (isNumber$1(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject$1(input) && isObjectEmpty(input)) ||
            (isArray$2(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray$2(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate$1(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined$1(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber$1(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$2(mom, 'Date', get$2(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get$2(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add$1      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction$2(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined$1(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined$1(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString$1 () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction$2(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject$1 () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend$2({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto$1 = Moment.prototype;

proto$1.add               = add$1;
proto$1.calendar          = calendar$1;
proto$1.clone             = clone;
proto$1.diff              = diff;
proto$1.endOf             = endOf;
proto$1.format            = format;
proto$1.from              = from;
proto$1.fromNow           = fromNow;
proto$1.to                = to;
proto$1.toNow             = toNow;
proto$1.get               = stringGet;
proto$1.invalidAt         = invalidAt;
proto$1.isAfter           = isAfter;
proto$1.isBefore          = isBefore;
proto$1.isBetween         = isBetween;
proto$1.isSame            = isSame;
proto$1.isSameOrAfter     = isSameOrAfter;
proto$1.isSameOrBefore    = isSameOrBefore;
proto$1.isValid           = isValid$2;
proto$1.lang              = lang;
proto$1.locale            = locale;
proto$1.localeData        = localeData;
proto$1.max               = prototypeMax;
proto$1.min               = prototypeMin;
proto$1.parsingFlags      = parsingFlags;
proto$1.set               = stringSet;
proto$1.startOf           = startOf;
proto$1.subtract          = subtract;
proto$1.toArray           = toArray;
proto$1.toObject          = toObject$1;
proto$1.toDate            = toDate;
proto$1.toISOString       = toISOString;
proto$1.inspect           = inspect;
proto$1.toJSON            = toJSON;
proto$1.toString          = toString$1;
proto$1.unix              = unix;
proto$1.valueOf           = valueOf;
proto$1.creationData      = creationData;

// Year
proto$1.year       = getSetYear;
proto$1.isLeapYear = getIsLeapYear;

// Week Year
proto$1.weekYear    = getSetWeekYear;
proto$1.isoWeekYear = getSetISOWeekYear;

// Quarter
proto$1.quarter = proto$1.quarters = getSetQuarter;

// Month
proto$1.month       = getSetMonth;
proto$1.daysInMonth = getDaysInMonth;

// Week
proto$1.week           = proto$1.weeks        = getSetWeek;
proto$1.isoWeek        = proto$1.isoWeeks     = getSetISOWeek;
proto$1.weeksInYear    = getWeeksInYear;
proto$1.isoWeeksInYear = getISOWeeksInYear;

// Day
proto$1.date       = getSetDayOfMonth;
proto$1.day        = proto$1.days             = getSetDayOfWeek;
proto$1.weekday    = getSetLocaleDayOfWeek;
proto$1.isoWeekday = getSetISODayOfWeek;
proto$1.dayOfYear  = getSetDayOfYear;

// Hour
proto$1.hour = proto$1.hours = getSetHour;

// Minute
proto$1.minute = proto$1.minutes = getSetMinute;

// Second
proto$1.second = proto$1.seconds = getSetSecond;

// Millisecond
proto$1.millisecond = proto$1.milliseconds = getSetMillisecond;

// Offset
proto$1.utcOffset            = getSetOffset;
proto$1.utc                  = setOffsetToUTC;
proto$1.local                = setOffsetToLocal;
proto$1.parseZone            = setOffsetToParsedOffset;
proto$1.hasAlignedHourOffset = hasAlignedHourOffset;
proto$1.isDST                = isDaylightSavingTime;
proto$1.isLocal              = isLocal;
proto$1.isUtcOffset          = isUtcOffset;
proto$1.isUtc                = isUtc;
proto$1.isUTC                = isUtc;

// Timezone
proto$1.zoneAbbr = getZoneAbbr;
proto$1.zoneName = getZoneName;

// Deprecations
proto$1.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto$1.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto$1.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto$1.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto$1.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$2 = Locale.prototype;

proto$2.calendar        = calendar;
proto$2.longDateFormat  = longDateFormat;
proto$2.invalidDate     = invalidDate;
proto$2.ordinal         = ordinal;
proto$2.preparse        = preParsePostFormat;
proto$2.postformat      = preParsePostFormat;
proto$2.relativeTime    = relativeTime;
proto$2.pastFuture      = pastFuture;
proto$2.set             = set$1;

// Month
proto$2.months            =        localeMonths;
proto$2.monthsShort       =        localeMonthsShort;
proto$2.monthsParse       =        localeMonthsParse;
proto$2.monthsRegex       = monthsRegex;
proto$2.monthsShortRegex  = monthsShortRegex;

// Week
proto$2.week = localeWeek;
proto$2.firstDayOfYear = localeFirstDayOfYear;
proto$2.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$2.weekdays       =        localeWeekdays;
proto$2.weekdaysMin    =        localeWeekdaysMin;
proto$2.weekdaysShort  =        localeWeekdaysShort;
proto$2.weekdaysParse  =        localeWeekdaysParse;

proto$2.weekdaysRegex       =        weekdaysRegex;
proto$2.weekdaysShortRegex  =        weekdaysShortRegex;
proto$2.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$2.isPM = localeIsPM;
proto$2.meridiem = localeMeridiem;

function get$3 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber$1(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$3(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$3(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber$1(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber$1(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$3(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$3(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$2 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$4 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize$1 (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$3 = Duration.prototype;

proto$3.isValid        = isValid$1;
proto$3.abs            = abs;
proto$3.add            = add$2;
proto$3.subtract       = subtract$1;
proto$3.as             = as;
proto$3.asMilliseconds = asMilliseconds;
proto$3.asSeconds      = asSeconds;
proto$3.asMinutes      = asMinutes;
proto$3.asHours        = asHours;
proto$3.asDays         = asDays;
proto$3.asWeeks        = asWeeks;
proto$3.asMonths       = asMonths;
proto$3.asYears        = asYears;
proto$3.valueOf        = valueOf$1;
proto$3._bubble        = bubble;
proto$3.get            = get$4;
proto$3.milliseconds   = milliseconds;
proto$3.seconds        = seconds;
proto$3.minutes        = minutes;
proto$3.hours          = hours;
proto$3.days           = days;
proto$3.weeks          = weeks;
proto$3.months         = months;
proto$3.years          = years;
proto$3.humanize       = humanize$1;
proto$3.toISOString    = toISOString$1;
proto$3.toString       = toISOString$1;
proto$3.toJSON         = toISOString$1;
proto$3.locale         = locale;
proto$3.localeData     = localeData;

// Deprecations
proto$3.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$3.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports

//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

hooks.version = '2.18.1';

setHookCallback(createLocal);

hooks.fn                    = proto$1;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate$1;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto$1;




var moment$1 = Object.freeze({
	default: hooks
});

var require$$0$3 = ( moment$1 && hooks ) || moment$1;

var pikaday = createCommonjsModule(function (module, exports) {
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory)
{
    'use strict';

    var moment;
    {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = require$$0$3; } catch (e) {}
        module.exports = factory(moment);
    }
}(commonjsGlobal, function (moment)
{
    'use strict';

    /**
     * feature detection and helper functions
     */
    var hasMoment = typeof moment === 'function',

    hasEventListeners = !!window.addEventListener,

    document = window.document,

    sto = window.setTimeout,

    addEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },

    removeEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },

    trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    },

    hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },

    addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    },

    removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },

    isArray = function(obj)
    {
        return (/Array/).test(Object.prototype.toString.call(obj));
    },

    isDate = function(obj)
    {
        return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    },

    isWeekend = function(date)
    {
        var day = date.getDay();
        return day === 0 || day === 6;
    },

    isLeapYear = function(year)
    {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    getDaysInMonth = function(year, month)
    {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },

    setToStartOfDay = function(date)
    {
        if (isDate(date)) date.setHours(0,0,0,0);
    },

    compareDates = function(a,b)
    {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
    },

    extend = function(to, from, overwrite)
    {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                }
                else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },

    fireEvent = function(el, eventName, data)
    {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },

    adjustCalendar = function(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month)/12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month)/12);
            calendar.month -= 12;
        }
        return calendar;
    },

    /**
     * defaults and localisation
     */
    defaults = {

        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        format: 'YYYY-MM-DD',

        // the toString function which gets passed a current date object and format
        // and returns a string
        toString: null,

        // used to create date object from current input string
        parse: null,

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // the default flag for moment's strict date parsing
        formatStrict: false,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // Week picker mode
        pickWholeWeek: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        startRange: null,
        endRange: null,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // Render days of the calendar grid that fall in the next or previous month
        showDaysInNextAndPreviousMonths: false,

        // Allows user to select days that fall in the next or previous month
        enableSelectionDaysInNextAndPreviousMonths: false,

        // how many months are visible
        numberOfMonths: 1,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // Blur field when date is selected
        blurFieldOnSelect : true,

        // internationalization
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        },

        // Theme Classname
        theme: null,

        // events array
        events: [],

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null,

        // Enable keyboard input
        keyboardInput: true
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function(opts, day, abbr)
    {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },

    renderDay = function(opts)
    {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
            if (opts.showDaysInNextAndPreviousMonths) {
                arr.push('is-outside-current-month');

                if(!opts.enableSelectionDaysInNextAndPreviousMonths) {
                    arr.push('is-selection-disabled');
                }

            } else {
                return '<td class="is-empty"></td>';
            }
        }
        if (opts.isDisabled) {
            arr.push('is-disabled');
        }
        if (opts.isToday) {
            arr.push('is-today');
        }
        if (opts.isSelected) {
            arr.push('is-selected');
            ariaSelected = 'true';
        }
        if (opts.hasEvent) {
            arr.push('has-event');
        }
        if (opts.isInRange) {
            arr.push('is-inrange');
        }
        if (opts.isStartRange) {
            arr.push('is-startrange');
        }
        if (opts.isEndRange) {
            arr.push('is-endrange');
        }
        return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '" aria-selected="' + ariaSelected + '">' +
                 '<button class="pika-button pika-day" type="button" ' +
                    'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' +
                        opts.day +
                 '</button>' +
               '</td>';
    },

    renderWeek = function (d, m, y) {
        // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
        var onejan = new Date(y, 0, 1),
            weekNum = Math.ceil((((new Date(y, m, d) - onejan) / 86400000) + onejan.getDay()+1)/7);
        return '<td class="pika-week">' + weekNum + '</td>';
    },

    renderRow = function(days, isRTL, pickWholeWeek, isRowSelected)
    {
        return '<tr class="pika-row' + (pickWholeWeek ? ' pick-whole-week' : '') + (isRowSelected ? ' is-selected' : '') + '">' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },

    renderBody = function(rows)
    {
        return '<tbody>' + rows.join('') + '</tbody>';
    },

    renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
    },

    renderTitle = function(instance, c, year, month, refYear, randId)
    {
        var i, j, arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="pika-title" role="heading" aria-live="assertive">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                (i === month ? ' selected="selected"': '') +
                ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? 'disabled="disabled"' : '') + '>' +
                opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected="selected"': '') + '>' + (i) + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === (instance._o.numberOfMonths - 1) ) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },

    renderTable = function(opts, data, randId)
    {
        return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + randId + '">' + renderHead(opts) + renderBody(data) + '</table>';
    },


    /**
     * Pikaday constructor
     */
    Pikaday = function(options)
    {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function(e)
        {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty') && !hasClass(target.parentNode, 'is-disabled')) {
                    self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                    if (opts.bound) {
                        sto(function() {
                            self.hide();
                            if (opts.blurFieldOnSelect && opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                // if this is touch event prevent mouse events emulation
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onKeyChange = function(e)
        {
            e = e || window.event;

            if (self.isVisible()) {

                switch(e.keyCode){
                    case 13:
                    case 27:
                        if (opts.field) {
                            opts.field.blur();
                        }
                        break;
                    case 37:
                        e.preventDefault();
                        self.adjustDate('subtract', 1);
                        break;
                    case 38:
                        self.adjustDate('subtract', 7);
                        break;
                    case 39:
                        self.adjustDate('add', 1);
                        break;
                    case 40:
                        self.adjustDate('add', 7);
                        break;
                }
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (opts.parse) {
                date = opts.parse(opts.field.value, opts.format);
            } else if (hasMoment) {
                date = moment(opts.field.value, opts.format, opts.formatStrict);
                date = (date && date.isValid()) ? date.toDate() : null;
            }
            else {
                date = new Date(Date.parse(opts.field.value));
            }
            if (isDate(date)) {
              self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));

            if (!self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'touchend', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);

        if (opts.keyboardInput) {
            addEvent(document, 'keydown', self._onKeyChange);
        }

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            format = format || this._o.format;
            if (!isDate(this._d)) {
                return '';
            }
            if (this._o.toString) {
              return this._o.toString(this._d, format);
            }
            if (hasMoment) {
              return moment(this._d).format(format);
            }
            return this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : null;
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustDate: function(sign, days) {

            var day = this.getDate() || new Date();
            var difference = parseInt(days)*24*60*60*1000;

            var newDay;

            if (sign === 'add') {
                newDay = new Date(day.valueOf() + difference);
            } else if (sign === 'subtract') {
                newDay = new Date(day.valueOf() - difference);
            }

            this.setDate(newDay);
        },

        adjustCalendars: function() {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.minDate = value;
                this._o.minYear  = value.getFullYear();
                this._o.minMonth = value.getMonth();
            } else {
                this._o.minDate = defaults.minDate;
                this._o.minYear  = defaults.minYear;
                this._o.minMonth = defaults.minMonth;
                this._o.startRange = defaults.startRange;
            }

            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            if(value instanceof Date) {
                setToStartOfDay(value);
                this._o.maxDate = value;
                this._o.maxYear = value.getFullYear();
                this._o.maxMonth = value.getMonth();
            } else {
                this._o.maxDate = defaults.maxDate;
                this._o.maxYear = defaults.maxYear;
                this._o.maxMonth = defaults.maxMonth;
                this._o.endRange = defaults.endRange;
            }

            this.draw();
        },

        setStartRange: function(value)
        {
            this._o.startRange = value;
        },

        setEndRange: function(value)
        {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '',
                randId;

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            randId = 'pika-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                this._o.onDraw(this);
            }

            if (opts.bound) {
                // let the screen reader user know to use arrow keys
                opts.field.setAttribute('aria-label', 'Use the arrow keys to pick a date');
            }
        },

        adjustPosition: function()
        {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) return;

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month, randId)
        {
            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var previousMonth = month === 0 ? 11 : month - 1,
                nextMonth = month === 11 ? 0 : month + 1,
                yearOfPreviousMonth = month === 0 ? year - 1 : year,
                yearOfNextMonth = month === 11 ? year + 1 : year,
                daysInPreviousMonth = getDaysInMonth(yearOfPreviousMonth, previousMonth);
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            var isWeekSelected = false;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
                    isEmpty = i < before || i >= (days + before),
                    dayNumber = 1 + (i - before),
                    monthNumber = month,
                    yearNumber = year,
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (opts.minDate && day < opts.minDate) ||
                                 (opts.maxDate && day > opts.maxDate) ||
                                 (opts.disableWeekends && isWeekend(day)) ||
                                 (opts.disableDayFn && opts.disableDayFn(day));

                if (isEmpty) {
                    if (i < before) {
                        dayNumber = daysInPreviousMonth + dayNumber;
                        monthNumber = previousMonth;
                        yearNumber = yearOfPreviousMonth;
                    } else {
                        dayNumber = dayNumber - days;
                        monthNumber = nextMonth;
                        yearNumber = yearOfNextMonth;
                    }
                }

                var dayConfig = {
                        day: dayNumber,
                        month: monthNumber,
                        year: yearNumber,
                        hasEvent: hasEvent,
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isStartRange: isStartRange,
                        isEndRange: isEndRange,
                        isInRange: isInRange,
                        showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths,
                        enableSelectionDaysInNextAndPreviousMonths: opts.enableSelectionDaysInNextAndPreviousMonths
                    };

                if (opts.pickWholeWeek && isSelected) {
                    isWeekSelected = true;
                }

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL, opts.pickWholeWeek, isWeekSelected));
                    row = [];
                    r = 0;
                    isWeekSelected = false;
                }
            }
            return renderTable(opts, data, randId);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this.isVisible()) {
                this._v = true;
                this.draw();
                removeClass(this.el, 'is-hidden');
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            var opts = this._o;

            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (opts.keyboardInput) {
                removeEvent(document, 'keydown', this._onKeyChange);
            }
            if (opts.field) {
                removeEvent(opts.field, 'change', this._onInputChange);
                if (opts.bound) {
                    removeEvent(opts.trigger, 'click', this._onInputClick);
                    removeEvent(opts.trigger, 'focus', this._onInputFocus);
                    removeEvent(opts.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;
}));
});

/* src\core\ui\inputs\Date.html generated by Svelte v1.64.1 */
function oncreate$6() {
    var field = this.get("field");
    new pikaday({
        field: this.refs.container,
        format: 'YYYY-MM-DD',
        onSelect: async function (date) {
            await field.init(date.toISOString());
        }
    });

    var formElement =  this.refs.container;
        var self = this;
        formElement.addEventListener("change", function (e) {
             if (formElement.value == "") {
                field.init(null);
             }
        });
}

function create_main_fragment$10(component, state) {
	var input, input_updating = false, input_required_value;

	function input_input_handler() {
		var state = component.get();
		input_updating = true;
		state.field.valueAsText = input.value;
		component.set({ field: state.field });
		input_updating = false;
	}

	return {
		c: function create() {
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "input", input_input_handler);
			setAttribute(input, "type", "text");
			input.id = state.id;
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			input.autocomplete = "off";
			input.className = "form-control";
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);
			component.refs.container = input;

			input.value = state.field.valueAsText;
		},

		p: function update(changed, state) {
			if (!input_updating) input.value = state.field.valueAsText;
			if (changed.id) {
				input.id = state.id;
			}

			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(input);
		},

		d: function destroy$$1() {
			removeListener$1(input, "input", input_input_handler);
			if (component.refs.container === input) component.refs.container = null;
		}
	};
}

function SvelteComponent$10(options) {
	init(this, options);
	this.refs = {};
	this._state = assign({}, options.data);

	var self = this;
	var _oncreate = function() {
		var changed = { id: 1, field: 1, tabindex: 1 };
		oncreate$6.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$10(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$10.prototype, proto);

/* src\core\ui\inputs\DateRange.html generated by Svelte v1.64.1 */
function oncreate$7() {
    var field = this.get("field");

    new pikaday({
        field: this.refs.minContainer,
        format: 'YYYY-MM-DD',
        onSelect: function (date) {
            field.value.min = date;
        }
    });

    new pikaday({
        field: this.refs.maxContainer,
        format: 'YYYY-MM-DD',
        onSelect: function (date) {
            field.value.max = date;
        }
    });
    var minElement = this.refs.minContainer;
    var self = this;
    minElement.addEventListener("change", function (e) {
        if (minElement.value == "") {
             field.value.min = null;
        }
    });
    var maxElement = this.refs.maxContainer;
    var self = this;
    maxElement.addEventListener("change", function (e) {
        if (maxElement.value == "") {
            field.value.max = null;
        }
    });
}

function add_css$5() {
	var style = createElement("style");
	style.id = 'svelte-14oq3r5-style';
	style.textContent = ".svelte-14oq3r5.input-group-addon,.svelte-14oq3r5 .input-group-addon{font-size:0.8rem !important}";
	appendNode(style, document.head);
}

function create_main_fragment$11(component, state) {
	var div, span, text_1, input, input_updating = false, input_required_value, text_2, span_1, text_4, input_1, input_1_updating = false, input_1_required_value;

	function input_input_handler() {
		var state = component.get();
		input_updating = true;
		state.field.minValueAsText = input.value;
		component.set({ field: state.field });
		input_updating = false;
	}

	function input_1_input_handler() {
		var state = component.get();
		input_1_updating = true;
		state.field.maxValueAsText = input_1.value;
		component.set({ field: state.field });
		input_1_updating = false;
	}

	return {
		c: function create() {
			div = createElement("div");
			span = createElement("span");
			span.textContent = "Min";
			text_1 = createText("\r\n    ");
			input = createElement("input");
			text_2 = createText("\r\n\r\n    ");
			span_1 = createElement("span");
			span_1.textContent = "Max";
			text_4 = createText("\r\n    ");
			input_1 = createElement("input");
			this.h();
		},

		h: function hydrate() {
			span.className = "input-group-addon";
			addListener$1(input, "input", input_input_handler);
			setAttribute(input, "type", "text");
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			input.autocomplete = "off";
			input.className = "form-control";
			span_1.className = "input-group-addon";
			addListener$1(input_1, "input", input_1_input_handler);
			setAttribute(input_1, "type", "text");
			input_1.required = input_1_required_value = state.field.metadata.required;
			input_1.tabIndex = state.tabindex;
			input_1.autocomplete = "off";
			input_1.className = "form-control";
			div.className = "input-group svelte-14oq3r5";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(span, div);
			appendNode(text_1, div);
			appendNode(input, div);
			component.refs.minContainer = input;

			input.value = state.field.minValueAsText;

			appendNode(text_2, div);
			appendNode(span_1, div);
			appendNode(text_4, div);
			appendNode(input_1, div);
			component.refs.maxContainer = input_1;

			input_1.value = state.field.maxValueAsText;
		},

		p: function update(changed, state) {
			if (!input_updating) input.value = state.field.minValueAsText;
			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}

			if (!input_1_updating) input_1.value = state.field.maxValueAsText;
			if ((changed.field) && input_1_required_value !== (input_1_required_value = state.field.metadata.required)) {
				input_1.required = input_1_required_value;
			}

			if (changed.tabindex) {
				input_1.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: function destroy$$1() {
			removeListener$1(input, "input", input_input_handler);
			if (component.refs.minContainer === input) component.refs.minContainer = null;
			removeListener$1(input_1, "input", input_1_input_handler);
			if (component.refs.maxContainer === input_1) component.refs.maxContainer = null;
		}
	};
}

function SvelteComponent$11(options) {
	init(this, options);
	this.refs = {};
	this._state = assign({}, options.data);

	if (!document.getElementById("svelte-14oq3r5-style")) add_css$5();

	var self = this;
	var _oncreate = function() {
		var changed = { field: 1, tabindex: 1 };
		oncreate$7.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$11(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$11.prototype, proto);

/* src\core\ui\inputs\Dropdown.html generated by Svelte v1.64.1 */
function mapToTypeaheadItems(items) {
	return items.map(t => ({
		label: t.label,
		value: t.value.toString()
	}));
}

function buildFilter(parentForm, parameters) {
	let promise;

	const filter = {};
	if (parameters != null && parameters.length > 0) {
		promise = parentForm.get("form").getSerializedInputValues().then(data => {
			for (const p of parameters) {
				filter[p] = data[p];
			}

			return filter;
		});
	}
	else {
		promise = Promise.resolve(filter);
	}

	return promise;
}

var methods$3 = {
	onChange() {
		this.get("field").initFromSelected();
		this.get("form").fireAndBubbleUp("input:changed", {
			app: this.get("app"),
			form: this.get("form"),
			input: this
		});
	}
};

function oncreate$8() {
	const field = this.get("field");
	const { source, items } = field.metadata.customProperties;

	if (items != null) {
		this.set({ options: items });
	}
	else if (typeof (source) === "string") {
		const { parameters } = field.metadata.customProperties;
		const app = this.get("app");
		const parentForm = this.get("form");

		buildFilter(parentForm, parameters).then(filter => {
			app.server.postForm(source, filter).then(data => {
				this.set({ options: mapToTypeaheadItems(data.items) });
			});
		});
	}
}

function create_main_fragment$12(component, state) {
	var if_block_anchor;

	var if_block = (state.options != null) && create_if_block$10(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.options != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$10(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (10:1) {{#each options as option}}
function create_each_block$3(component, state) {
	var option = state.option, each_value = state.each_value, option_index = state.option_index;
	var option_1, text_value = option.label, text, option_1_value_value;

	return {
		c: function create() {
			option_1 = createElement("option");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			option_1.__value = option_1_value_value = option.value;
			option_1.value = option_1.__value;
		},

		m: function mount(target, anchor) {
			insertNode(option_1, target, anchor);
			appendNode(text, option_1);
		},

		p: function update(changed, state) {
			option = state.option;
			each_value = state.each_value;
			option_index = state.option_index;
			if ((changed.options) && text_value !== (text_value = option.label)) {
				text.data = text_value;
			}

			if ((changed.options) && option_1_value_value !== (option_1_value_value = option.value)) {
				option_1.__value = option_1_value_value;
			}

			option_1.value = option_1.__value;
		},

		u: function unmount() {
			detachNode(option_1);
		},

		d: noop$1
	};
}

// (1:0) {{#if options != null }}
function create_if_block$10(component, state) {
	var select, option, select_updating = false, select_required_value;

	var each_value = state.options;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$3(component, assign(assign({}, state), {
			each_value: each_value,
			option: each_value[i],
			option_index: i
		}));
	}

	function select_change_handler() {
		var state = component.get();
		select_updating = true;
		state.field.selected = selectValue(select);
		component.set({ field: state.field, options: state.options });
		select_updating = false;
	}

	function change_handler(event) {
		component.onChange();
	}

	return {
		c: function create() {
			select = createElement("select");
			option = createElement("option");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			option.__value = "";
			option.value = option.__value;
			addListener$1(select, "change", select_change_handler);
			if (!('field' in state)) component.root._beforecreate.push(select_change_handler);
			addListener$1(select, "change", change_handler);
			select.id = state.id;
			select.required = select_required_value = state.field.metadata.required;
			select.tabIndex = state.tabindex;
			select.className = "form-control";
		},

		m: function mount(target, anchor) {
			insertNode(select, target, anchor);
			appendNode(option, select);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			selectOption(select, state.field.selected);
		},

		p: function update(changed, state) {
			var each_value = state.options;

			if (changed.options) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						option: each_value[i],
						option_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block$3(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}

			if (!select_updating) selectOption(select, state.field.selected);
			if (changed.id) {
				select.id = state.id;
			}

			if ((changed.field) && select_required_value !== (select_required_value = state.field.metadata.required)) {
				select.required = select_required_value;
			}

			if (changed.tabindex) {
				select.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(select);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);

			removeListener$1(select, "change", select_change_handler);
			removeListener$1(select, "change", change_handler);
		}
	};
}

function SvelteComponent$12(options) {
	init(this, options);
	this._state = assign({}, options.data);

	var self = this;
	var _oncreate = function() {
		var changed = { options: 1, id: 1, field: 1, tabindex: 1 };
		oncreate$8.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
	}

	this._fragment = create_main_fragment$12(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._beforecreate);
		callAll(this._oncreate);
	}
}

assign(SvelteComponent$12.prototype, proto);
assign(SvelteComponent$12.prototype, methods$3);

/* src\core\ui\inputs\Email.html generated by Svelte v1.64.1 */
function oncreate$9() {
    var field = this.get("field");
    var formElement = this.refs.container;
    formElement.addEventListener("change", function (e) {
            field.init(field.selected);
    });
}

function create_main_fragment$13(component, state) {
	var input, input_updating = false, input_required_value;

	function input_input_handler() {
		var state = component.get();
		input_updating = true;
		state.field.selected = input.value;
		component.set({ field: state.field });
		input_updating = false;
	}

	return {
		c: function create() {
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "input", input_input_handler);
			setAttribute(input, "type", "Email");
			input.id = state.id;
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			input.className = "form-control";
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);
			component.refs.container = input;

			input.value = state.field.selected;
		},

		p: function update(changed, state) {
			if (!input_updating) input.value = state.field.selected;
			if (changed.id) {
				input.id = state.id;
			}

			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(input);
		},

		d: function destroy$$1() {
			removeListener$1(input, "input", input_input_handler);
			if (component.refs.container === input) component.refs.container = null;
		}
	};
}

function SvelteComponent$13(options) {
	init(this, options);
	this.refs = {};
	this._state = assign({}, options.data);

	var self = this;
	var _oncreate = function() {
		var changed = { id: 1, field: 1, tabindex: 1 };
		oncreate$9.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$13(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$13.prototype, proto);

/* src\core\ui\inputs\FileUploader.html generated by Svelte v1.64.1 */
function objectToArray(obj) {
	if (obj) {
		return Array.from(Object.keys(obj), k => obj[k]);
	}

	return [];
}

function getExtension(filename) {
	return `.${filename.split(".").pop()}`;
}

function canFileBeAdded(filelist, file, allowedFileExtensions, app) {
	const isFileExtensionAllowed =
		allowedFileExtensions.indexOf("*") > -1 ||
		allowedFileExtensions.indexOf(getExtension(file.name)) > -1;

	const fileWasAlreadyAdded = filelist.find(f => f.name === file.name);

	if (isFileExtensionAllowed && !fileWasAlreadyAdded) {
		return true;
	}

	if (!isFileExtensionAllowed) {
		app.showError(`File ${file.name} extension not allowed. Only ` +
			`these file extensions are allowed: ${allowedFileExtensions}.`);
	}

	return false;
}

function getAllowedFileExtensions(component) {
	let	allowedExtension = "*";
	if (component.get("uploaderConfig") && component.get("uploaderConfig").allowedFileExtensions) {
		allowedExtension = component.get("uploaderConfig").allowedFileExtensions.split(",").map(item => item.trim());
	}

	return allowedExtension;
}

function addFiles(component, files) {
	const app = component.get("app");
	const filesToAdd = objectToArray(files);
	let listedFiles = [];

	if (component.get("selectedFiles")) {
		listedFiles = component.get("selectedFiles");
	}

	const allowedFileExtensions = getAllowedFileExtensions(component);
	const filesThatCanBeAdded = filesToAdd
		.filter(file => canFileBeAdded(listedFiles, file, allowedFileExtensions, app));

	if (filesThatCanBeAdded.length > 0) {
		if (!component.get("uploaderConfig").allowMultipleFiles) {
			component.set({ selectedFiles: filesThatCanBeAdded.slice(0, 1) });
		}
		else {
			component.set({ selectedFiles: filesThatCanBeAdded.concat(listedFiles) });
		}
	}
}

var methods$4 = {
	addFiles(files) {
		addFiles(this, files);
		this.get("field").selected = this.get("selectedFiles");
	},
	removeFile(index) {
		this.get("selectedFiles").splice(index, 1).splice(index, 1);
		this.set({
			selectedFiles: this.get("selectedFiles")
		});

		this.get("field").selected = this.get("selectedFiles");
	}
};

function oncreate$10() {
	const field = this.get("field");

	const uploaderConfig =
		field.metadata.getCustomProperty("fileUploaderConfig") ||
		{
			allowMultipleFiles: true,
			allowedFileExtensions: "*"
		};

	this.set({ uploaderConfig });

	this.refs.dropzone.addEventListener("dragenter", () => {
		this.refs.dropzone.classList.add("hover");
	});

	const self = this;
	["dragleave", "drop"].forEach(t => {
		self.refs.dropzone.addEventListener(t, () => {
			self.refs.dropzone.classList.remove("hover");
		});
	});

	this.refs.dropzone.ondragover = e => {
		e.preventDefault();
	};

	this.refs.dropzone.ondrop = e => {
		e.preventDefault();
		self.addFiles(e.dataTransfer.files);
		return false;
	};
}

function add_css$6() {
	var style = createElement("style");
	style.id = 'svelte-1mp0joh-style';
	style.textContent = ".svelte-1mp0joh.file-drop-area,.svelte-1mp0joh .file-drop-area{text-align:center;border:dashed 2px #9c9c9c;min-height:60px;z-index:99999}.svelte-1mp0joh.file-drop-area.hover,.svelte-1mp0joh .file-drop-area.hover{background:#fffde6}.svelte-1mp0joh.file-drop-area label,.svelte-1mp0joh .file-drop-area label{margin:auto;line-height:60px;display:block}.svelte-1mp0joh.files-list i,.svelte-1mp0joh .files-list i{margin-left:10px}.svelte-1mp0joh.second-color,.svelte-1mp0joh .second-color{color:#f3818c}";
	appendNode(style, document.head);
}

function create_main_fragment$14(component_1, state) {
	var text, div, text_1, label;

	var if_block = (state.selectedFiles != null && state.selectedFiles.length > 0) && create_if_block$11(component_1, state);

	function select_block_type(state) {
		if (state.uploaderConfig != null && state.uploaderConfig.allowMultipleFiles) return create_if_block_1$7;
		return create_if_block_2$5;
	}

	var current_block_type = select_block_type(state);
	var if_block_1 = current_block_type(component_1, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			text = createText("\r\n\r\n");
			div = createElement("div");
			if_block_1.c();
			text_1 = createText("\r\n\t");
			label = createElement("label");
			label.innerHTML = "drag or <strong class=\"second-color\">upload</strong> files";
			this.h();
		},

		h: function hydrate() {
			label.htmlFor = state.id;
			div.className = "file-drop-area svelte-1mp0joh";
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(text, target, anchor);
			insertNode(div, target, anchor);
			if_block_1.m(div, null);
			appendNode(text_1, div);
			appendNode(label, div);
			component_1.refs.dropzone = div;
		},

		p: function update(changed, state) {
			if (state.selectedFiles != null && state.selectedFiles.length > 0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$11(component_1, state);
					if_block.c();
					if_block.m(text.parentNode, text);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			if (current_block_type === (current_block_type = select_block_type(state)) && if_block_1) {
				if_block_1.p(changed, state);
			} else {
				if_block_1.u();
				if_block_1.d();
				if_block_1 = current_block_type(component_1, state);
				if_block_1.c();
				if_block_1.m(div, text_1);
			}

			if (changed.id) {
				label.htmlFor = state.id;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(text);
			detachNode(div);
			if_block_1.u();
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
			if_block_1.d();
			if (component_1.refs.dropzone === div) component_1.refs.dropzone = null;
		}
	};
}

// (3:1) {{#each selectedFiles as file, index}}
function create_each_block$4(component_1, state) {
	var file_1 = state.file, each_value = state.each_value, index = state.index;
	var li, text_value = file_1.name, text, text_1, i;

	return {
		c: function create() {
			li = createElement("li");
			text = createText(text_value);
			text_1 = createText("\r\n\t\t");
			i = createElement("i");
			this.h();
		},

		h: function hydrate() {
			addListener$1(i, "click", click_handler);
			i.className = "fa fa-times second-color";

			i._svelte = {
				component: component_1,
				each_value: state.each_value,
				index: state.index
			};
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			appendNode(text, li);
			appendNode(text_1, li);
			appendNode(i, li);
		},

		p: function update(changed, state) {
			file_1 = state.file;
			each_value = state.each_value;
			index = state.index;
			if ((changed.selectedFiles) && text_value !== (text_value = file_1.name)) {
				text.data = text_value;
			}

			i._svelte.each_value = state.each_value;
			i._svelte.index = state.index;
		},

		u: function unmount() {
			detachNode(li);
		},

		d: function destroy$$1() {
			removeListener$1(i, "click", click_handler);
		}
	};
}

// (1:0) {{#if selectedFiles != null && selectedFiles.length > 0}}
function create_if_block$11(component_1, state) {
	var ul;

	var each_value = state.selectedFiles;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$4(component_1, assign(assign({}, state), {
			each_value: each_value,
			file: each_value[i],
			index: i
		}));
	}

	return {
		c: function create() {
			ul = createElement("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			ul.className = "files-list svelte-1mp0joh";
		},

		m: function mount(target, anchor) {
			insertNode(ul, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, state) {
			var each_value = state.selectedFiles;

			if (changed.selectedFiles) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						file: each_value[i],
						index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block$4(component_1, each_context);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}
		},

		u: function unmount() {
			detachNode(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (12:1) {{#if uploaderConfig != null && uploaderConfig.allowMultipleFiles}}
function create_if_block_1$7(component_1, state) {
	var input, input_accept_value;

	function change_handler(event) {
		component_1.addFiles(input.files);
	}

	return {
		c: function create() {
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "change", change_handler);
			setAttribute(input, "type", "file");
			input.id = state.id;
			input.tabIndex = state.tabindex;
			input.multiple = "multiple";
			input.accept = input_accept_value = state.uploaderConfig ? state.uploaderConfig.allowedFileExtensions : '*';
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);
		},

		p: function update(changed, state) {
			if (changed.id) {
				input.id = state.id;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}

			if ((changed.uploaderConfig) && input_accept_value !== (input_accept_value = state.uploaderConfig ? state.uploaderConfig.allowedFileExtensions : '*')) {
				input.accept = input_accept_value;
			}
		},

		u: function unmount() {
			detachNode(input);
		},

		d: function destroy$$1() {
			removeListener$1(input, "change", change_handler);
		}
	};
}

// (19:1) {{else}}
function create_if_block_2$5(component_1, state) {
	var input, input_accept_value;

	function change_handler(event) {
		component_1.addFiles(input.files);
	}

	return {
		c: function create() {
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "change", change_handler);
			setAttribute(input, "type", "file");
			input.id = state.id;
			input.tabIndex = state.tabindex;
			input.accept = input_accept_value = state.uploaderConfig ? state.uploaderConfig.allowedFileExtensions : '*';
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);
		},

		p: function update(changed, state) {
			if (changed.id) {
				input.id = state.id;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}

			if ((changed.uploaderConfig) && input_accept_value !== (input_accept_value = state.uploaderConfig ? state.uploaderConfig.allowedFileExtensions : '*')) {
				input.accept = input_accept_value;
			}
		},

		u: function unmount() {
			detachNode(input);
		},

		d: function destroy$$1() {
			removeListener$1(input, "change", change_handler);
		}
	};
}

function click_handler(event) {
	var component_1 = this._svelte.component;
	var each_value = this._svelte.each_value, index = this._svelte.index, file_1 = each_value[index];
	component_1.removeFile(index);
}

function SvelteComponent$14(options) {
	init(this, options);
	this.refs = {};
	this._state = assign({}, options.data);

	if (!document.getElementById("svelte-1mp0joh-style")) add_css$6();

	var self = this;
	var _oncreate = function() {
		var changed = { selectedFiles: 1, uploaderConfig: 1, id: 1, tabindex: 1 };
		oncreate$10.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$14(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$14.prototype, proto);
assign(SvelteComponent$14.prototype, methods$4);

var choices = createCommonjsModule(function (module, exports) {
/*! choices.js v3.0.4 | (c) 2018 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ 
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(commonjsGlobal, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/scripts/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _fuse = __webpack_require__(2);

	var _fuse2 = _interopRequireDefault(_fuse);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(31);

	var _utils = __webpack_require__(32);

	__webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Choices
	 */
	var Choices = function () {
	  function Choices() {
	    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-choice]';
	    var userConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Choices);

	    // If there are multiple elements, create a new instance
	    // for each element besides the first one (as that already has an instance)
	    if ((0, _utils.isType)('String', element)) {
	      var elements = document.querySelectorAll(element);
	      if (elements.length > 1) {
	        for (var i = 1; i < elements.length; i++) {
	          var el = elements[i];
	          new Choices(el, userConfig);
	        }
	      }
	    }

	    var defaultConfig = {
	      silent: false,
	      items: [],
	      choices: [],
	      renderChoiceLimit: -1,
	      maxItemCount: -1,
	      addItems: true,
	      removeItems: true,
	      removeItemButton: false,
	      editItems: false,
	      duplicateItems: true,
	      delimiter: ',',
	      paste: true,
	      searchEnabled: true,
	      searchChoices: true,
	      searchFloor: 1,
	      searchResultLimit: 4,
	      searchFields: ['label', 'value'],
	      position: 'auto',
	      resetScrollPosition: true,
	      regexFilter: null,
	      shouldSort: true,
	      shouldSortItems: false,
	      sortFilter: _utils.sortByAlpha,
	      placeholder: true,
	      placeholderValue: null,
	      searchPlaceholderValue: null,
	      prependValue: null,
	      appendValue: null,
	      renderSelectedChoices: 'auto',
	      loadingText: 'Loading...',
	      noResultsText: 'No results found',
	      noChoicesText: 'No choices to choose from',
	      itemSelectText: 'Press to select',
	      addItemText: function addItemText(value) {
	        return 'Press Enter to add <b>"' + (0, _utils.stripHTML)(value) + '"</b>';
	      },
	      maxItemText: function maxItemText(maxItemCount) {
	        return 'Only ' + maxItemCount + ' values can be added.';
	      },
	      itemComparer: function itemComparer(choice, item) {
	        return choice === item;
	      },
	      uniqueItemText: 'Only unique values can be added.',
	      classNames: {
	        containerOuter: 'choices',
	        containerInner: 'choices__inner',
	        input: 'choices__input',
	        inputCloned: 'choices__input--cloned',
	        list: 'choices__list',
	        listItems: 'choices__list--multiple',
	        listSingle: 'choices__list--single',
	        listDropdown: 'choices__list--dropdown',
	        item: 'choices__item',
	        itemSelectable: 'choices__item--selectable',
	        itemDisabled: 'choices__item--disabled',
	        itemChoice: 'choices__item--choice',
	        placeholder: 'choices__placeholder',
	        group: 'choices__group',
	        groupHeading: 'choices__heading',
	        button: 'choices__button',
	        activeState: 'is-active',
	        focusState: 'is-focused',
	        openState: 'is-open',
	        disabledState: 'is-disabled',
	        highlightedState: 'is-highlighted',
	        hiddenState: 'is-hidden',
	        flippedState: 'is-flipped',
	        loadingState: 'is-loading',
	        noResults: 'has-no-results',
	        noChoices: 'has-no-choices'
	      },
	      fuseOptions: {
	        include: 'score'
	      },
	      callbackOnInit: null,
	      callbackOnCreateTemplates: null
	    };

	    this.idNames = {
	      itemChoice: 'item-choice'
	    };

	    // Merge options with user options
	    this.config = (0, _utils.extend)(defaultConfig, userConfig);

	    if (this.config.renderSelectedChoices !== 'auto' && this.config.renderSelectedChoices !== 'always') {
	      if (!this.config.silent) {
	        console.warn('renderSelectedChoices: Possible values are \'auto\' and \'always\'. Falling back to \'auto\'.');
	      }
	      this.config.renderSelectedChoices = 'auto';
	    }

	    // Create data store
	    this.store = new _index2.default(this.render);

	    // State tracking
	    this.initialised = false;
	    this.currentState = {};
	    this.prevState = {};
	    this.currentValue = '';

	    // Retrieve triggering element (i.e. element with 'data-choice' trigger)
	    this.element = element;
	    this.passedElement = (0, _utils.isType)('String', element) ? document.querySelector(element) : element;

	    if (!this.passedElement) {
	      if (!this.config.silent) {
	        console.error('Passed element not found');
	      }
	      return;
	    }

	    this.isTextElement = this.passedElement.type === 'text';
	    this.isSelectOneElement = this.passedElement.type === 'select-one';
	    this.isSelectMultipleElement = this.passedElement.type === 'select-multiple';
	    this.isSelectElement = this.isSelectOneElement || this.isSelectMultipleElement;
	    this.isValidElementType = this.isTextElement || this.isSelectElement;
	    this.isIe11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
	    this.isScrollingOnIe = false;

	    if (this.config.shouldSortItems === true && this.isSelectOneElement) {
	      if (!this.config.silent) {
	        console.warn('shouldSortElements: Type of passed element is \'select-one\', falling back to false.');
	      }
	    }

	    this.highlightPosition = 0;
	    this.canSearch = this.config.searchEnabled;

	    this.placeholder = false;
	    if (!this.isSelectOneElement) {
	      this.placeholder = this.config.placeholder ? this.config.placeholderValue || this.passedElement.getAttribute('placeholder') : false;
	    }

	    // Assign preset choices from passed object
	    this.presetChoices = this.config.choices;

	    // Assign preset items from passed object first
	    this.presetItems = this.config.items;

	    // Then add any values passed from attribute
	    if (this.passedElement.value) {
	      this.presetItems = this.presetItems.concat(this.passedElement.value.split(this.config.delimiter));
	    }

	    // Set unique base Id
	    this.baseId = (0, _utils.generateId)(this.passedElement, 'choices-');

	    // Bind methods
	    this.render = this.render.bind(this);

	    // Bind event handlers
	    this._onFocus = this._onFocus.bind(this);
	    this._onBlur = this._onBlur.bind(this);
	    this._onKeyUp = this._onKeyUp.bind(this);
	    this._onKeyDown = this._onKeyDown.bind(this);
	    this._onClick = this._onClick.bind(this);
	    this._onTouchMove = this._onTouchMove.bind(this);
	    this._onTouchEnd = this._onTouchEnd.bind(this);
	    this._onMouseDown = this._onMouseDown.bind(this);
	    this._onMouseOver = this._onMouseOver.bind(this);
	    this._onPaste = this._onPaste.bind(this);
	    this._onInput = this._onInput.bind(this);

	    // Monitor touch taps/scrolls
	    this.wasTap = true;

	    // Cutting the mustard
	    var cuttingTheMustard = 'classList' in document.documentElement;
	    if (!cuttingTheMustard && !this.config.silent) {
	      console.error('Choices: Your browser doesn\'t support Choices');
	    }

	    var canInit = (0, _utils.isElement)(this.passedElement) && this.isValidElementType;

	    if (canInit) {
	      // If element has already been initialised with Choices
	      if (this.passedElement.getAttribute('data-choice') === 'active') {
	        return;
	      }

	      // Let's go
	      this.init();
	    } else if (!this.config.silent) {
	      console.error('Incompatible input passed');
	    }
	  }

	  /*========================================
	  =            Public functions            =
	  ========================================*/

	  /**
	   * Initialise Choices
	   * @return
	   * @public
	   */


	  _createClass(Choices, [{
	    key: 'init',
	    value: function init() {
	      if (this.initialised === true) {
	        return;
	      }

	      var callback = this.config.callbackOnInit;

	      // Set initialise flag
	      this.initialised = true;
	      // Create required elements
	      this._createTemplates();
	      // Generate input markup
	      this._createInput();
	      // Subscribe store to render method
	      this.store.subscribe(this.render);
	      // Render any items
	      this.render();
	      // Trigger event listeners
	      this._addEventListeners();

	      // Run callback if it is a function
	      if (callback) {
	        if ((0, _utils.isType)('Function', callback)) {
	          callback.call(this);
	        }
	      }
	    }

	    /**
	     * Destroy Choices and nullify values
	     * @return
	     * @public
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this.initialised === false) {
	        return;
	      }

	      // Remove all event listeners
	      this._removeEventListeners();

	      // Reinstate passed element
	      this.passedElement.classList.remove(this.config.classNames.input, this.config.classNames.hiddenState);
	      this.passedElement.removeAttribute('tabindex');
	      // Recover original styles if any
	      var origStyle = this.passedElement.getAttribute('data-choice-orig-style');
	      if (Boolean(origStyle)) {
	        this.passedElement.removeAttribute('data-choice-orig-style');
	        this.passedElement.setAttribute('style', origStyle);
	      } else {
	        this.passedElement.removeAttribute('style');
	      }
	      this.passedElement.removeAttribute('aria-hidden');
	      this.passedElement.removeAttribute('data-choice');

	      // Re-assign values - this is weird, I know
	      this.passedElement.value = this.passedElement.value;

	      // Move passed element back to original position
	      this.containerOuter.parentNode.insertBefore(this.passedElement, this.containerOuter);
	      // Remove added elements
	      this.containerOuter.parentNode.removeChild(this.containerOuter);

	      // Clear data store
	      this.clearStore();

	      // Nullify instance-specific data
	      this.config.templates = null;

	      // Uninitialise
	      this.initialised = false;
	    }

	    /**
	     * Render group choices into a DOM fragment and append to choice list
	     * @param  {Array} groups    Groups to add to list
	     * @param  {Array} choices   Choices to add to groups
	     * @param  {DocumentFragment} fragment Fragment to add groups and options to (optional)
	     * @return {DocumentFragment} Populated options fragment
	     * @private
	     */

	  }, {
	    key: 'renderGroups',
	    value: function renderGroups(groups, choices, fragment) {
	      var _this = this;

	      var groupFragment = fragment || document.createDocumentFragment();
	      var filter = this.config.sortFilter;

	      // If sorting is enabled, filter groups
	      if (this.config.shouldSort) {
	        groups.sort(filter);
	      }

	      groups.forEach(function (group) {
	        // Grab options that are children of this group
	        var groupChoices = choices.filter(function (choice) {
	          if (_this.isSelectOneElement) {
	            return choice.groupId === group.id;
	          }
	          return choice.groupId === group.id && !choice.selected;
	        });

	        if (groupChoices.length >= 1) {
	          var dropdownGroup = _this._getTemplate('choiceGroup', group);
	          groupFragment.appendChild(dropdownGroup);
	          _this.renderChoices(groupChoices, groupFragment, true);
	        }
	      });

	      return groupFragment;
	    }

	    /**
	     * Render choices into a DOM fragment and append to choice list
	     * @param  {Array} choices    Choices to add to list
	     * @param  {DocumentFragment} fragment Fragment to add choices to (optional)
	     * @return {DocumentFragment} Populated choices fragment
	     * @private
	     */

	  }, {
	    key: 'renderChoices',
	    value: function renderChoices(choices, fragment) {
	      var _this2 = this;

	      var withinGroup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	      // Create a fragment to store our list items (so we don't have to update the DOM for each item)
	      var choicesFragment = fragment || document.createDocumentFragment();
	      var _config = this.config,
	          renderSelectedChoices = _config.renderSelectedChoices,
	          searchResultLimit = _config.searchResultLimit,
	          renderChoiceLimit = _config.renderChoiceLimit;

	      var filter = this.isSearching ? _utils.sortByScore : this.config.sortFilter;
	      var appendChoice = function appendChoice(choice) {
	        var shouldRender = renderSelectedChoices === 'auto' ? _this2.isSelectOneElement || !choice.selected : true;
	        if (shouldRender) {
	          var dropdownItem = _this2._getTemplate('choice', choice);
	          choicesFragment.appendChild(dropdownItem);
	        }
	      };

	      var rendererableChoices = choices;

	      if (renderSelectedChoices === 'auto' && !this.isSelectOneElement) {
	        rendererableChoices = choices.filter(function (choice) {
	          return !choice.selected;
	        });
	      }

	      // Split array into placeholders and "normal" choices

	      var _rendererableChoices$ = rendererableChoices.reduce(function (acc, choice) {
	        if (choice.placeholder) {
	          acc.placeholderChoices.push(choice);
	        } else {
	          acc.normalChoices.push(choice);
	        }
	        return acc;
	      }, { placeholderChoices: [], normalChoices: [] }),
	          placeholderChoices = _rendererableChoices$.placeholderChoices,
	          normalChoices = _rendererableChoices$.normalChoices;

	      // If sorting is enabled or the user is searching, filter choices


	      if (this.config.shouldSort || this.isSearching) {
	        normalChoices.sort(filter);
	      }

	      var choiceLimit = rendererableChoices.length;

	      // Prepend placeholeder
	      var sortedChoices = [].concat(_toConsumableArray(placeholderChoices), _toConsumableArray(normalChoices));

	      if (this.isSearching) {
	        choiceLimit = searchResultLimit;
	      } else if (renderChoiceLimit > 0 && !withinGroup) {
	        choiceLimit = renderChoiceLimit;
	      }

	      // Add each choice to dropdown within range
	      for (var i = 0; i < choiceLimit; i++) {
	        if (sortedChoices[i]) {
	          appendChoice(sortedChoices[i]);
	        }
	      }

	      return choicesFragment;
	    }

	    /**
	     * Render items into a DOM fragment and append to items list
	     * @param  {Array} items    Items to add to list
	     * @param  {DocumentFragment} [fragment] Fragment to add items to (optional)
	     * @return
	     * @private
	     */

	  }, {
	    key: 'renderItems',
	    value: function renderItems(items) {
	      var _this3 = this;

	      var fragment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      // Create fragment to add elements to
	      var itemListFragment = fragment || document.createDocumentFragment();

	      // If sorting is enabled, filter items
	      if (this.config.shouldSortItems && !this.isSelectOneElement) {
	        items.sort(this.config.sortFilter);
	      }

	      if (this.isTextElement) {
	        // Simplify store data to just values
	        var itemsFiltered = this.store.getItemsReducedToValues(items);
	        var itemsFilteredString = itemsFiltered.join(this.config.delimiter);
	        // Update the value of the hidden input
	        this.passedElement.setAttribute('value', itemsFilteredString);
	        this.passedElement.value = itemsFilteredString;
	      } else {
	        var selectedOptionsFragment = document.createDocumentFragment();

	        // Add each list item to list
	        items.forEach(function (item) {
	          // Create a standard select option
	          var option = _this3._getTemplate('option', item);
	          // Append it to fragment
	          selectedOptionsFragment.appendChild(option);
	        });

	        // Update selected choices
	        this.passedElement.innerHTML = '';
	        this.passedElement.appendChild(selectedOptionsFragment);
	      }

	      // Add each list item to list
	      items.forEach(function (item) {
	        // Create new list element
	        var listItem = _this3._getTemplate('item', item);
	        // Append it to list
	        itemListFragment.appendChild(listItem);
	      });

	      return itemListFragment;
	    }

	    /**
	     * Render DOM with values
	     * @return
	     * @private
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.store.isLoading()) {
	        return;
	      }

	      this.currentState = this.store.getState();

	      // Only render if our state has actually changed
	      if (this.currentState !== this.prevState) {
	        // Choices
	        if (this.currentState.choices !== this.prevState.choices || this.currentState.groups !== this.prevState.groups || this.currentState.items !== this.prevState.items) {
	          if (this.isSelectElement) {
	            // Get active groups/choices
	            var activeGroups = this.store.getGroupsFilteredByActive();
	            var activeChoices = this.store.getChoicesFilteredByActive();

	            var choiceListFragment = document.createDocumentFragment();

	            // Clear choices
	            this.choiceList.innerHTML = '';

	            // Scroll back to top of choices list
	            if (this.config.resetScrollPosition) {
	              this.choiceList.scrollTop = 0;
	            }

	            // If we have grouped options
	            if (activeGroups.length >= 1 && this.isSearching !== true) {
	              choiceListFragment = this.renderGroups(activeGroups, activeChoices, choiceListFragment);
	            } else if (activeChoices.length >= 1) {
	              choiceListFragment = this.renderChoices(activeChoices, choiceListFragment);
	            }

	            var activeItems = this.store.getItemsFilteredByActive();
	            var canAddItem = this._canAddItem(activeItems, this.input.value);

	            // If we have choices to show
	            if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
	              // ...and we can select them
	              if (canAddItem.response) {
	                // ...append them and highlight the first choice
	                this.choiceList.appendChild(choiceListFragment);
	                this._highlightChoice();
	              } else {
	                // ...otherwise show a notice
	                this.choiceList.appendChild(this._getTemplate('notice', canAddItem.notice));
	              }
	            } else {
	              // Otherwise show a notice
	              var dropdownItem = void 0;
	              var notice = void 0;

	              if (this.isSearching) {
	                notice = (0, _utils.isType)('Function', this.config.noResultsText) ? this.config.noResultsText() : this.config.noResultsText;

	                dropdownItem = this._getTemplate('notice', notice, 'no-results');
	              } else {
	                notice = (0, _utils.isType)('Function', this.config.noChoicesText) ? this.config.noChoicesText() : this.config.noChoicesText;

	                dropdownItem = this._getTemplate('notice', notice, 'no-choices');
	              }

	              this.choiceList.appendChild(dropdownItem);
	            }
	          }
	        }

	        // Items
	        if (this.currentState.items !== this.prevState.items) {
	          // Get active items (items that can be selected)
	          var _activeItems = this.store.getItemsFilteredByActive();

	          // Clear list
	          this.itemList.innerHTML = '';

	          if (_activeItems && _activeItems) {
	            // Create a fragment to store our list items
	            // (so we don't have to update the DOM for each item)
	            var itemListFragment = this.renderItems(_activeItems);

	            // If we have items to add
	            if (itemListFragment.childNodes) {
	              // Update list
	              this.itemList.appendChild(itemListFragment);
	            }
	          }
	        }

	        this.prevState = this.currentState;
	      }
	    }

	    /**
	     * Select item (a selected item can be deleted)
	     * @param  {Element} item Element to select
	     * @param  {Boolean} [runEvent=true] Whether to trigger 'highlightItem' event
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'highlightItem',
	    value: function highlightItem(item) {
	      var runEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	      if (!item) {
	        return this;
	      }

	      var id = item.id;
	      var groupId = item.groupId;
	      var group = groupId >= 0 ? this.store.getGroupById(groupId) : null;

	      this.store.dispatch((0, _index3.highlightItem)(id, true));

	      if (runEvent) {
	        if (group && group.value) {
	          (0, _utils.triggerEvent)(this.passedElement, 'highlightItem', {
	            id: id,
	            value: item.value,
	            label: item.label,
	            groupValue: group.value
	          });
	        } else {
	          (0, _utils.triggerEvent)(this.passedElement, 'highlightItem', {
	            id: id,
	            value: item.value,
	            label: item.label
	          });
	        }
	      }

	      return this;
	    }

	    /**
	     * Deselect item
	     * @param  {Element} item Element to de-select
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'unhighlightItem',
	    value: function unhighlightItem(item) {
	      if (!item) {
	        return this;
	      }

	      var id = item.id;
	      var groupId = item.groupId;
	      var group = groupId >= 0 ? this.store.getGroupById(groupId) : null;

	      this.store.dispatch((0, _index3.highlightItem)(id, false));

	      if (group && group.value) {
	        (0, _utils.triggerEvent)(this.passedElement, 'unhighlightItem', {
	          id: id,
	          value: item.value,
	          label: item.label,
	          groupValue: group.value
	        });
	      } else {
	        (0, _utils.triggerEvent)(this.passedElement, 'unhighlightItem', {
	          id: id,
	          value: item.value,
	          label: item.label
	        });
	      }

	      return this;
	    }

	    /**
	     * Highlight items within store
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'highlightAll',
	    value: function highlightAll() {
	      var _this4 = this;

	      var items = this.store.getItems();
	      items.forEach(function (item) {
	        _this4.highlightItem(item);
	      });

	      return this;
	    }

	    /**
	     * Deselect items within store
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'unhighlightAll',
	    value: function unhighlightAll() {
	      var _this5 = this;

	      var items = this.store.getItems();
	      items.forEach(function (item) {
	        _this5.unhighlightItem(item);
	      });

	      return this;
	    }

	    /**
	     * Remove an item from the store by its value
	     * @param  {String} value Value to search for
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'removeItemsByValue',
	    value: function removeItemsByValue(value) {
	      var _this6 = this;

	      if (!value || !(0, _utils.isType)('String', value)) {
	        return this;
	      }

	      var items = this.store.getItemsFilteredByActive();

	      items.forEach(function (item) {
	        if (item.value === value) {
	          _this6._removeItem(item);
	        }
	      });

	      return this;
	    }

	    /**
	     * Remove all items from store array
	     * @note Removed items are soft deleted
	     * @param  {Number} excludedId Optionally exclude item by ID
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'removeActiveItems',
	    value: function removeActiveItems(excludedId) {
	      var _this7 = this;

	      var items = this.store.getItemsFilteredByActive();

	      items.forEach(function (item) {
	        if (item.active && excludedId !== item.id) {
	          _this7._removeItem(item);
	        }
	      });

	      return this;
	    }

	    /**
	     * Remove all selected items from store
	     * @note Removed items are soft deleted
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'removeHighlightedItems',
	    value: function removeHighlightedItems() {
	      var _this8 = this;

	      var runEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      var items = this.store.getItemsFilteredByActive();

	      items.forEach(function (item) {
	        if (item.highlighted && item.active) {
	          _this8._removeItem(item);
	          // If this action was performed by the user
	          // trigger the event
	          if (runEvent) {
	            _this8._triggerChange(item.value);
	          }
	        }
	      });

	      return this;
	    }

	    /**
	     * Show dropdown to user by adding active state class
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'showDropdown',
	    value: function showDropdown() {
	      var focusInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      var body = document.body;
	      var html = document.documentElement;
	      var winHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

	      this.containerOuter.classList.add(this.config.classNames.openState);
	      this.containerOuter.setAttribute('aria-expanded', 'true');
	      this.dropdown.classList.add(this.config.classNames.activeState);
	      this.dropdown.setAttribute('aria-expanded', 'true');

	      var dimensions = this.dropdown.getBoundingClientRect();
	      var dropdownPos = Math.ceil(dimensions.top + window.scrollY + this.dropdown.offsetHeight);

	      // If flip is enabled and the dropdown bottom position is greater than the window height flip the dropdown.
	      var shouldFlip = false;
	      if (this.config.position === 'auto') {
	        shouldFlip = dropdownPos >= winHeight;
	      } else if (this.config.position === 'top') {
	        shouldFlip = true;
	      }

	      if (shouldFlip) {
	        this.containerOuter.classList.add(this.config.classNames.flippedState);
	      }

	      // Optionally focus the input if we have a search input
	      if (focusInput && this.canSearch && document.activeElement !== this.input) {
	        this.input.focus();
	      }

	      (0, _utils.triggerEvent)(this.passedElement, 'showDropdown', {});

	      return this;
	    }

	    /**
	     * Hide dropdown from user
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'hideDropdown',
	    value: function hideDropdown() {
	      var blurInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      // A dropdown flips if it does not have space within the page
	      var isFlipped = this.containerOuter.classList.contains(this.config.classNames.flippedState);

	      this.containerOuter.classList.remove(this.config.classNames.openState);
	      this.containerOuter.setAttribute('aria-expanded', 'false');
	      this.dropdown.classList.remove(this.config.classNames.activeState);
	      this.dropdown.setAttribute('aria-expanded', 'false');

	      if (isFlipped) {
	        this.containerOuter.classList.remove(this.config.classNames.flippedState);
	      }

	      // Optionally blur the input if we have a search input
	      if (blurInput && this.canSearch && document.activeElement === this.input) {
	        this.input.blur();
	      }

	      (0, _utils.triggerEvent)(this.passedElement, 'hideDropdown', {});

	      return this;
	    }

	    /**
	     * Determine whether to hide or show dropdown based on its current state
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'toggleDropdown',
	    value: function toggleDropdown() {
	      var hasActiveDropdown = this.dropdown.classList.contains(this.config.classNames.activeState);
	      if (hasActiveDropdown) {
	        this.hideDropdown();
	      } else {
	        this.showDropdown(true);
	      }

	      return this;
	    }

	    /**
	     * Get value(s) of input (i.e. inputted items (text) or selected choices (select))
	     * @param {Boolean} valueOnly Get only values of selected items, otherwise return selected items
	     * @return {Array/String} selected value (select-one) or array of selected items (inputs & select-multiple)
	     * @public
	     */

	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      var _this9 = this;

	      var valueOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      var items = this.store.getItemsFilteredByActive();
	      var selectedItems = [];

	      items.forEach(function (item) {
	        if (_this9.isTextElement) {
	          selectedItems.push(valueOnly ? item.value : item);
	        } else if (item.active) {
	          selectedItems.push(valueOnly ? item.value : item);
	        }
	      });

	      if (this.isSelectOneElement) {
	        return selectedItems[0];
	      }

	      return selectedItems;
	    }

	    /**
	     * Set value of input. If the input is a select box, a choice will be created and selected otherwise
	     * an item will created directly.
	     * @param  {Array}   args  Array of value objects or value strings
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'setValue',
	    value: function setValue(args) {
	      var _this10 = this;

	      if (this.initialised === true) {
	        // Convert args to an iterable array
	        var values = [].concat(_toConsumableArray(args)),
	            handleValue = function handleValue(item) {
	          var itemType = (0, _utils.getType)(item);
	          if (itemType === 'Object') {
	            if (!item.value) {
	              return;
	            }

	            // If we are dealing with a select input, we need to create an option first
	            // that is then selected. For text inputs we can just add items normally.
	            if (!_this10.isTextElement) {
	              _this10._addChoice(item.value, item.label, true, false, -1, item.customProperties, item.placeholder);
	            } else {
	              _this10._addItem(item.value, item.label, item.id, undefined, item.customProperties, item.placeholder);
	            }
	          } else if (itemType === 'String') {
	            if (!_this10.isTextElement) {
	              _this10._addChoice(item, item, true, false, -1, null);
	            } else {
	              _this10._addItem(item);
	            }
	          }
	        };

	        if (values.length > 1) {
	          values.forEach(function (value) {
	            handleValue(value);
	          });
	        } else {
	          handleValue(values[0]);
	        }
	      }
	      return this;
	    }

	    /**
	     * Select value of select box via the value of an existing choice
	     * @param {Array/String} value An array of strings of a single string
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'setValueByChoice',
	    value: function setValueByChoice(value) {
	      var _this11 = this;

	      if (!this.isTextElement) {
	        var choices = this.store.getChoices();
	        // If only one value has been passed, convert to array
	        var choiceValue = (0, _utils.isType)('Array', value) ? value : [value];

	        // Loop through each value and
	        choiceValue.forEach(function (val) {
	          var foundChoice = choices.find(function (choice) {
	            // Check 'value' property exists and the choice isn't already selected
	            return _this11.config.itemComparer(choice.value, val);
	          });

	          if (foundChoice) {
	            if (!foundChoice.selected) {
	              _this11._addItem(foundChoice.value, foundChoice.label, foundChoice.id, foundChoice.groupId, foundChoice.customProperties, foundChoice.placeholder, foundChoice.keyCode);
	            } else if (!_this11.config.silent) {
	              console.warn('Attempting to select choice already selected');
	            }
	          } else if (!_this11.config.silent) {
	            console.warn('Attempting to select choice that does not exist');
	          }
	        });
	      }
	      return this;
	    }

	    /**
	     * Direct populate choices
	     * @param  {Array} choices - Choices to insert
	     * @param  {String} value - Name of 'value' property
	     * @param  {String} label - Name of 'label' property
	     * @param  {Boolean} replaceChoices Whether existing choices should be removed
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'setChoices',
	    value: function setChoices(choices, value, label) {
	      var _this12 = this;

	      var replaceChoices = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	      if (this.initialised === true) {
	        if (this.isSelectElement) {
	          if (!(0, _utils.isType)('Array', choices) || !value) {
	            return this;
	          }

	          // Clear choices if needed
	          if (replaceChoices) {
	            this._clearChoices();
	          }

	          this._setLoading(true);

	          // Add choices if passed
	          if (choices && choices.length) {
	            this.containerOuter.classList.remove(this.config.classNames.loadingState);
	            choices.forEach(function (result) {
	              if (result.choices) {
	                _this12._addGroup(result, result.id || null, value, label);
	              } else {
	                _this12._addChoice(result[value], result[label], result.selected, result.disabled, undefined, result.customProperties, result.placeholder);
	              }
	            });
	          }

	          this._setLoading(false);
	        }
	      }
	      return this;
	    }

	    /**
	     * Clear items,choices and groups
	     * @note Hard delete
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'clearStore',
	    value: function clearStore() {
	      this.store.dispatch((0, _index3.clearAll)());
	      return this;
	    }

	    /**
	     * Set value of input to blank
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'clearInput',
	    value: function clearInput() {
	      if (this.input.value) {
	        this.input.value = '';
	      }
	      if (!this.isSelectOneElement) {
	        this._setInputWidth();
	      }
	      if (!this.isTextElement && this.config.searchEnabled) {
	        this.isSearching = false;
	        this.store.dispatch((0, _index3.activateChoices)(true));
	      }
	      return this;
	    }

	    /**
	     * Enable interaction with Choices
	     * @return {Object} Class instance
	     */

	  }, {
	    key: 'enable',
	    value: function enable() {
	      if (this.initialised) {
	        this.passedElement.disabled = false;
	        var isDisabled = this.containerOuter.classList.contains(this.config.classNames.disabledState);
	        if (isDisabled) {
	          this._addEventListeners();
	          this.passedElement.removeAttribute('disabled');
	          this.input.removeAttribute('disabled');
	          this.containerOuter.classList.remove(this.config.classNames.disabledState);
	          this.containerOuter.removeAttribute('aria-disabled');
	          if (this.isSelectOneElement) {
	            this.containerOuter.setAttribute('tabindex', '0');
	          }
	        }
	      }
	      return this;
	    }

	    /**
	     * Disable interaction with Choices
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'disable',
	    value: function disable() {
	      if (this.initialised) {
	        this.passedElement.disabled = true;
	        var isEnabled = !this.containerOuter.classList.contains(this.config.classNames.disabledState);
	        if (isEnabled) {
	          this._removeEventListeners();
	          this.passedElement.setAttribute('disabled', '');
	          this.input.setAttribute('disabled', '');
	          this.containerOuter.classList.add(this.config.classNames.disabledState);
	          this.containerOuter.setAttribute('aria-disabled', 'true');
	          if (this.isSelectOneElement) {
	            this.containerOuter.setAttribute('tabindex', '-1');
	          }
	        }
	      }
	      return this;
	    }

	    /**
	     * Populate options via ajax callback
	     * @param  {Function} fn Function that actually makes an AJAX request
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: 'ajax',
	    value: function ajax(fn) {
	      var _this13 = this;

	      if (this.initialised === true) {
	        if (this.isSelectElement) {
	          // Show loading text
	          requestAnimationFrame(function () {
	            _this13._handleLoadingState(true);
	          });
	          // Run callback
	          fn(this._ajaxCallback());
	        }
	      }
	      return this;
	    }

	    /*=====  End of Public functions  ======*/

	    /*=============================================
	    =                Private functions            =
	    =============================================*/

	    /**
	     * Call change callback
	     * @param  {String} value - last added/deleted/selected value
	     * @return
	     * @private
	     */

	  }, {
	    key: '_triggerChange',
	    value: function _triggerChange(value) {
	      if (!value) {
	        return;
	      }

	      (0, _utils.triggerEvent)(this.passedElement, 'change', {
	        value: value
	      });
	    }

	    /**
	     * Process enter/click of an item button
	     * @param {Array} activeItems The currently active items
	     * @param  {Element} element Button being interacted with
	     * @return
	     * @private
	     */

	  }, {
	    key: '_handleButtonAction',
	    value: function _handleButtonAction(activeItems, element) {
	      if (!activeItems || !element) {
	        return;
	      }

	      // If we are clicking on a button
	      if (this.config.removeItems && this.config.removeItemButton) {
	        var itemId = element.parentNode.getAttribute('data-id');
	        var itemToRemove = activeItems.find(function (item) {
	          return item.id === parseInt(itemId, 10);
	        });

	        // Remove item associated with button
	        this._removeItem(itemToRemove);
	        this._triggerChange(itemToRemove.value);

	        if (this.isSelectOneElement) {
	          this._selectPlaceholderChoice();
	        }
	      }
	    }

	    /**
	     * Select placeholder choice
	     */

	  }, {
	    key: '_selectPlaceholderChoice',
	    value: function _selectPlaceholderChoice() {
	      var placeholderChoice = this.store.getPlaceholderChoice();

	      if (placeholderChoice) {
	        this._addItem(placeholderChoice.value, placeholderChoice.label, placeholderChoice.id, placeholderChoice.groupId, null, placeholderChoice.placeholder);
	        this._triggerChange(placeholderChoice.value);
	      }
	    }

	    /**
	     * Process click of an item
	     * @param {Array} activeItems The currently active items
	     * @param  {Element} element Item being interacted with
	     * @param  {Boolean} hasShiftKey Whether the user has the shift key active
	     * @return
	     * @private
	     */

	  }, {
	    key: '_handleItemAction',
	    value: function _handleItemAction(activeItems, element) {
	      var _this14 = this;

	      var hasShiftKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	      if (!activeItems || !element) {
	        return;
	      }

	      // If we are clicking on an item
	      if (this.config.removeItems && !this.isSelectOneElement) {
	        var passedId = element.getAttribute('data-id');

	        // We only want to select one item with a click
	        // so we deselect any items that aren't the target
	        // unless shift is being pressed
	        activeItems.forEach(function (item) {
	          if (item.id === parseInt(passedId, 10) && !item.highlighted) {
	            _this14.highlightItem(item);
	          } else if (!hasShiftKey) {
	            if (item.highlighted) {
	              _this14.unhighlightItem(item);
	            }
	          }
	        });

	        // Focus input as without focus, a user cannot do anything with a
	        // highlighted item
	        if (document.activeElement !== this.input) {
	          this.input.focus();
	        }
	      }
	    }

	    /**
	     * Process click of a choice
	     * @param {Array} activeItems The currently active items
	     * @param  {Element} element Choice being interacted with
	     * @return
	     */

	  }, {
	    key: '_handleChoiceAction',
	    value: function _handleChoiceAction(activeItems, element) {
	      if (!activeItems || !element) {
	        return;
	      }

	      // If we are clicking on an option
	      var id = element.getAttribute('data-id');
	      var choice = this.store.getChoiceById(id);
	      var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : null;
	      var hasActiveDropdown = this.dropdown.classList.contains(this.config.classNames.activeState);

	      // Update choice keyCode
	      choice.keyCode = passedKeyCode;

	      (0, _utils.triggerEvent)(this.passedElement, 'choice', {
	        choice: choice
	      });

	      if (choice && !choice.selected && !choice.disabled) {
	        var canAddItem = this._canAddItem(activeItems, choice.value);

	        if (canAddItem.response) {
	          this._addItem(choice.value, choice.label, choice.id, choice.groupId, choice.customProperties, choice.placeholder, choice.keyCode);
	          this._triggerChange(choice.value);
	        }
	      }

	      this.clearInput();

	      // We wont to close the dropdown if we are dealing with a single select box
	      if (hasActiveDropdown && this.isSelectOneElement) {
	        this.hideDropdown();
	        this.containerOuter.focus();
	      }
	    }

	    /**
	     * Process back space event
	     * @param  {Array} activeItems items
	     * @return
	     * @private
	     */

	  }, {
	    key: '_handleBackspace',
	    value: function _handleBackspace(activeItems) {
	      if (this.config.removeItems && activeItems) {
	        var lastItem = activeItems[activeItems.length - 1];
	        var hasHighlightedItems = activeItems.some(function (item) {
	          return item.highlighted;
	        });

	        // If editing the last item is allowed and there are not other selected items,
	        // we can edit the item value. Otherwise if we can remove items, remove all selected items
	        if (this.config.editItems && !hasHighlightedItems && lastItem) {
	          this.input.value = lastItem.value;
	          this._setInputWidth();
	          this._removeItem(lastItem);
	          this._triggerChange(lastItem.value);
	        } else {
	          if (!hasHighlightedItems) {
	            this.highlightItem(lastItem, false);
	          }
	          this.removeHighlightedItems(true);
	        }
	      }
	    }

	    /**
	     * Validates whether an item can be added by a user
	     * @param {Array} activeItems The currently active items
	     * @param  {String} value     Value of item to add
	     * @return {Object}           Response: Whether user can add item
	     *                            Notice: Notice show in dropdown
	     */

	  }, {
	    key: '_canAddItem',
	    value: function _canAddItem(activeItems, value) {
	      var canAddItem = true;
	      var notice = (0, _utils.isType)('Function', this.config.addItemText) ? this.config.addItemText(value) : this.config.addItemText;

	      if (this.isSelectMultipleElement || this.isTextElement) {
	        if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
	          // If there is a max entry limit and we have reached that limit
	          // don't update
	          canAddItem = false;
	          notice = (0, _utils.isType)('Function', this.config.maxItemText) ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
	        }
	      }

	      if (this.isTextElement && this.config.addItems && canAddItem) {
	        // If a user has supplied a regular expression filter
	        if (this.config.regexFilter) {
	          // Determine whether we can update based on whether
	          // our regular expression passes
	          canAddItem = this._regexFilter(value);
	        }
	      }

	      // If no duplicates are allowed, and the value already exists
	      // in the array
	      var isUnique = !activeItems.some(function (item) {
	        if ((0, _utils.isType)('String', value)) {
	          return item.value === value.trim();
	        }

	        return item.value === value;
	      });

	      if (!isUnique && !this.config.duplicateItems && !this.isSelectOneElement && canAddItem) {
	        canAddItem = false;
	        notice = (0, _utils.isType)('Function', this.config.uniqueItemText) ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
	      }

	      return {
	        response: canAddItem,
	        notice: notice
	      };
	    }

	    /**
	     * Apply or remove a loading state to the component.
	     * @param {Boolean} setLoading default value set to 'true'.
	     * @return
	     * @private
	     */

	  }, {
	    key: '_handleLoadingState',
	    value: function _handleLoadingState() {
	      var setLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      var placeholderItem = this.itemList.querySelector('.' + this.config.classNames.placeholder);
	      if (setLoading) {
	        this.containerOuter.classList.add(this.config.classNames.loadingState);
	        this.containerOuter.setAttribute('aria-busy', 'true');
	        if (this.isSelectOneElement) {
	          if (!placeholderItem) {
	            placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
	            this.itemList.appendChild(placeholderItem);
	          } else {
	            placeholderItem.innerHTML = this.config.loadingText;
	          }
	        } else {
	          this.input.placeholder = this.config.loadingText;
	        }
	      } else {
	        // Remove loading states/text
	        this.containerOuter.classList.remove(this.config.classNames.loadingState);

	        if (this.isSelectOneElement) {
	          placeholderItem.innerHTML = this.placeholder || '';
	        } else {
	          this.input.placeholder = this.placeholder || '';
	        }
	      }
	    }

	    /**
	     * Retrieve the callback used to populate component's choices in an async way.
	     * @returns {Function} The callback as a function.
	     * @private
	     */

	  }, {
	    key: '_ajaxCallback',
	    value: function _ajaxCallback() {
	      var _this15 = this;

	      return function (results, value, label) {
	        if (!results || !value) {
	          return;
	        }

	        var parsedResults = (0, _utils.isType)('Object', results) ? [results] : results;

	        if (parsedResults && (0, _utils.isType)('Array', parsedResults) && parsedResults.length) {
	          // Remove loading states/text
	          _this15._handleLoadingState(false);
	          // Add each result as a choice

	          _this15._setLoading(true);

	          parsedResults.forEach(function (result) {
	            if (result.choices) {
	              var groupId = result.id || null;
	              _this15._addGroup(result, groupId, value, label);
	            } else {
	              _this15._addChoice(result[value], result[label], result.selected, result.disabled, undefined, result.customProperties, result.placeholder);
	            }
	          });

	          _this15._setLoading(false);

	          if (_this15.isSelectOneElement) {
	            _this15._selectPlaceholderChoice();
	          }
	        } else {
	          // No results, remove loading state
	          _this15._handleLoadingState(false);
	        }

	        _this15.containerOuter.removeAttribute('aria-busy');
	      };
	    }

	    /**
	     * Filter choices based on search value
	     * @param  {String} value Value to filter by
	     * @return
	     * @private
	     */

	  }, {
	    key: '_searchChoices',
	    value: function _searchChoices(value) {
	      var newValue = (0, _utils.isType)('String', value) ? value.trim() : value;
	      var currentValue = (0, _utils.isType)('String', this.currentValue) ? this.currentValue.trim() : this.currentValue;

	      // If new value matches the desired length and is not the same as the current value with a space
	      if (newValue.length >= 1 && newValue !== currentValue + ' ') {
	        var haystack = this.store.getSearchableChoices();
	        var needle = newValue;
	        var keys = (0, _utils.isType)('Array', this.config.searchFields) ? this.config.searchFields : [this.config.searchFields];
	        var options = Object.assign(this.config.fuseOptions, { keys: keys });
	        var fuse = new _fuse2.default(haystack, options);
	        var results = fuse.search(needle);

	        this.currentValue = newValue;
	        this.highlightPosition = 0;
	        this.isSearching = true;
	        this.store.dispatch((0, _index3.filterChoices)(results));

	        return results.length;
	      }

	      return 0;
	    }

	    /**
	     * Determine the action when a user is searching
	     * @param  {String} value Value entered by user
	     * @return
	     * @private
	     */

	  }, {
	    key: '_handleSearch',
	    value: function _handleSearch(value) {
	      if (!value) {
	        return;
	      }

	      var choices = this.store.getChoices();
	      var hasUnactiveChoices = choices.some(function (option) {
	        return !option.active;
	      });

	      // Run callback if it is a function
	      if (this.input === document.activeElement) {
	        // Check that we have a value to search and the input was an alphanumeric character
	        if (value && value.length >= this.config.searchFloor) {
	          var resultCount = 0;
	          // Check flag to filter search input
	          if (this.config.searchChoices) {
	            // Filter available choices
	            resultCount = this._searchChoices(value);
	          }
	          // Trigger search event
	          (0, _utils.triggerEvent)(this.passedElement, 'search', {
	            value: value,
	            resultCount: resultCount
	          });
	        } else if (hasUnactiveChoices) {
	          // Otherwise reset choices to active
	          this.isSearching = false;
	          this.store.dispatch((0, _index3.activateChoices)(true));
	        }
	      }
	    }

	    /**
	     * Trigger event listeners
	     * @return
	     * @private
	     */

	  }, {
	    key: '_addEventListeners',
	    value: function _addEventListeners() {
	      document.addEventListener('keyup', this._onKeyUp);
	      document.addEventListener('keydown', this._onKeyDown);
	      document.addEventListener('click', this._onClick);
	      document.addEventListener('touchmove', this._onTouchMove);
	      document.addEventListener('touchend', this._onTouchEnd);
	      document.addEventListener('mousedown', this._onMouseDown);
	      document.addEventListener('mouseover', this._onMouseOver);

	      if (this.isSelectOneElement) {
	        this.containerOuter.addEventListener('focus', this._onFocus);
	        this.containerOuter.addEventListener('blur', this._onBlur);
	      }

	      this.input.addEventListener('input', this._onInput);
	      this.input.addEventListener('paste', this._onPaste);
	      this.input.addEventListener('focus', this._onFocus);
	      this.input.addEventListener('blur', this._onBlur);
	    }

	    /**
	     * Remove event listeners
	     * @return
	     * @private
	     */

	  }, {
	    key: '_removeEventListeners',
	    value: function _removeEventListeners() {
	      document.removeEventListener('keyup', this._onKeyUp);
	      document.removeEventListener('keydown', this._onKeyDown);
	      document.removeEventListener('click', this._onClick);
	      document.removeEventListener('touchmove', this._onTouchMove);
	      document.removeEventListener('touchend', this._onTouchEnd);
	      document.removeEventListener('mousedown', this._onMouseDown);
	      document.removeEventListener('mouseover', this._onMouseOver);

	      if (this.isSelectOneElement) {
	        this.containerOuter.removeEventListener('focus', this._onFocus);
	        this.containerOuter.removeEventListener('blur', this._onBlur);
	      }

	      this.input.removeEventListener('input', this._onInput);
	      this.input.removeEventListener('paste', this._onPaste);
	      this.input.removeEventListener('focus', this._onFocus);
	      this.input.removeEventListener('blur', this._onBlur);
	    }

	    /**
	     * Set the correct input width based on placeholder
	     * value or input value
	     * @return
	     */

	  }, {
	    key: '_setInputWidth',
	    value: function _setInputWidth() {
	      if (this.placeholder) {
	        // If there is a placeholder, we only want to set the width of the input when it is a greater
	        // length than 75% of the placeholder. This stops the input jumping around.
	        if (this.input.value && this.input.value.length >= this.placeholder.length / 1.25) {
	          this.input.style.width = (0, _utils.getWidthOfInput)(this.input);
	        }
	      } else {
	        // If there is no placeholder, resize input to contents
	        this.input.style.width = (0, _utils.getWidthOfInput)(this.input);
	      }
	    }

	    /**
	     * Key down event
	     * @param  {Object} e Event
	     * @return
	     */

	  }, {
	    key: '_onKeyDown',
	    value: function _onKeyDown(e) {
	      var _this16 = this,
	          _keyDownActions;

	      if (e.target !== this.input && !this.containerOuter.contains(e.target)) {
	        return;
	      }

	      var target = e.target;
	      var activeItems = this.store.getItemsFilteredByActive();
	      var hasFocusedInput = this.input === document.activeElement;
	      var hasActiveDropdown = this.dropdown.classList.contains(this.config.classNames.activeState);
	      var hasItems = this.itemList && this.itemList.children;
	      var keyString = String.fromCharCode(e.keyCode);

	      var backKey = 46;
	      var deleteKey = 8;
	      var enterKey = 13;
	      var aKey = 65;
	      var escapeKey = 27;
	      var upKey = 38;
	      var downKey = 40;
	      var pageUpKey = 33;
	      var pageDownKey = 34;
	      var ctrlDownKey = e.ctrlKey || e.metaKey;

	      // If a user is typing and the dropdown is not active
	      if (!this.isTextElement && /[a-zA-Z0-9-_ ]/.test(keyString) && !hasActiveDropdown) {
	        this.showDropdown(true);
	      }

	      this.canSearch = this.config.searchEnabled;

	      var onAKey = function onAKey() {
	        // If CTRL + A or CMD + A have been pressed and there are items to select
	        if (ctrlDownKey && hasItems) {
	          _this16.canSearch = false;
	          if (_this16.config.removeItems && !_this16.input.value && _this16.input === document.activeElement) {
	            // Highlight items
	            _this16.highlightAll();
	          }
	        }
	      };

	      var onEnterKey = function onEnterKey() {
	        // If enter key is pressed and the input has a value
	        if (_this16.isTextElement && target.value) {
	          var value = _this16.input.value;
	          var canAddItem = _this16._canAddItem(activeItems, value);

	          // All is good, add
	          if (canAddItem.response) {
	            if (hasActiveDropdown) {
	              _this16.hideDropdown();
	            }
	            _this16._addItem(value);
	            _this16._triggerChange(value);
	            _this16.clearInput();
	          }
	        }

	        if (target.hasAttribute('data-button')) {
	          _this16._handleButtonAction(activeItems, target);
	          e.preventDefault();
	        }

	        if (hasActiveDropdown) {
	          e.preventDefault();
	          var highlighted = _this16.dropdown.querySelector('.' + _this16.config.classNames.highlightedState);

	          // If we have a highlighted choice
	          if (highlighted) {
	            // add enter keyCode value
	            if (activeItems[0]) {
	              activeItems[0].keyCode = enterKey;
	            }
	            _this16._handleChoiceAction(activeItems, highlighted);
	          }
	        } else if (_this16.isSelectOneElement) {
	          // Open single select dropdown if it's not active
	          if (!hasActiveDropdown) {
	            _this16.showDropdown(true);
	            e.preventDefault();
	          }
	        }
	      };

	      var onEscapeKey = function onEscapeKey() {
	        if (hasActiveDropdown) {
	          _this16.toggleDropdown();
	          _this16.containerOuter.focus();
	        }
	      };

	      var onDirectionKey = function onDirectionKey() {
	        // If up or down key is pressed, traverse through options
	        if (hasActiveDropdown || _this16.isSelectOneElement) {
	          // Show dropdown if focus
	          if (!hasActiveDropdown) {
	            _this16.showDropdown(true);
	          }

	          _this16.canSearch = false;

	          var directionInt = e.keyCode === downKey || e.keyCode === pageDownKey ? 1 : -1;
	          var skipKey = e.metaKey || e.keyCode === pageDownKey || e.keyCode === pageUpKey;

	          var nextEl = void 0;
	          if (skipKey) {
	            if (directionInt > 0) {
	              nextEl = Array.from(_this16.dropdown.querySelectorAll('[data-choice-selectable]')).pop();
	            } else {
	              nextEl = _this16.dropdown.querySelector('[data-choice-selectable]');
	            }
	          } else {
	            var currentEl = _this16.dropdown.querySelector('.' + _this16.config.classNames.highlightedState);
	            if (currentEl) {
	              nextEl = (0, _utils.getAdjacentEl)(currentEl, '[data-choice-selectable]', directionInt);
	            } else {
	              nextEl = _this16.dropdown.querySelector('[data-choice-selectable]');
	            }
	          }

	          if (nextEl) {
	            // We prevent default to stop the cursor moving
	            // when pressing the arrow
	            if (!(0, _utils.isScrolledIntoView)(nextEl, _this16.choiceList, directionInt)) {
	              _this16._scrollToChoice(nextEl, directionInt);
	            }
	            _this16._highlightChoice(nextEl);
	          }

	          // Prevent default to maintain cursor position whilst
	          // traversing dropdown options
	          e.preventDefault();
	        }
	      };

	      var onDeleteKey = function onDeleteKey() {
	        // If backspace or delete key is pressed and the input has no value
	        if (hasFocusedInput && !e.target.value && !_this16.isSelectOneElement) {
	          _this16._handleBackspace(activeItems);
	          e.preventDefault();
	        }
	      };

	      // Map keys to key actions
	      var keyDownActions = (_keyDownActions = {}, _defineProperty(_keyDownActions, aKey, onAKey), _defineProperty(_keyDownActions, enterKey, onEnterKey), _defineProperty(_keyDownActions, escapeKey, onEscapeKey), _defineProperty(_keyDownActions, upKey, onDirectionKey), _defineProperty(_keyDownActions, pageUpKey, onDirectionKey), _defineProperty(_keyDownActions, downKey, onDirectionKey), _defineProperty(_keyDownActions, pageDownKey, onDirectionKey), _defineProperty(_keyDownActions, deleteKey, onDeleteKey), _defineProperty(_keyDownActions, backKey, onDeleteKey), _keyDownActions);

	      // If keycode has a function, run it
	      if (keyDownActions[e.keyCode]) {
	        keyDownActions[e.keyCode]();
	      }
	    }

	    /**
	     * Key up event
	     * @param  {Object} e Event
	     * @return
	     * @private
	     */

	  }, {
	    key: '_onKeyUp',
	    value: function _onKeyUp(e) {
	      if (e.target !== this.input) {
	        return;
	      }

	      var value = this.input.value;
	      var activeItems = this.store.getItemsFilteredByActive();
	      var canAddItem = this._canAddItem(activeItems, value);

	      // We are typing into a text input and have a value, we want to show a dropdown
	      // notice. Otherwise hide the dropdown
	      if (this.isTextElement) {
	        var hasActiveDropdown = this.dropdown.classList.contains(this.config.classNames.activeState);
	        if (value) {

	          if (canAddItem.notice) {
	            var dropdownItem = this._getTemplate('notice', canAddItem.notice);
	            this.dropdown.innerHTML = dropdownItem.outerHTML;
	          }

	          if (canAddItem.response === true) {
	            if (!hasActiveDropdown) {
	              this.showDropdown();
	            }
	          } else if (!canAddItem.notice && hasActiveDropdown) {
	            this.hideDropdown();
	          }
	        } else if (hasActiveDropdown) {
	          this.hideDropdown();
	        }
	      } else {
	        var backKey = 46;
	        var deleteKey = 8;

	        // If user has removed value...
	        if ((e.keyCode === backKey || e.keyCode === deleteKey) && !e.target.value) {
	          // ...and it is a multiple select input, activate choices (if searching)
	          if (!this.isTextElement && this.isSearching) {
	            this.isSearching = false;
	            this.store.dispatch((0, _index3.activateChoices)(true));
	          }
	        } else if (this.canSearch && canAddItem.response) {
	          this._handleSearch(this.input.value);
	        }
	      }
	      // Re-establish canSearch value from changes in _onKeyDown
	      this.canSearch = this.config.searchEnabled;
	    }

	    /**
	     * Input event
	     * @return
	     * @private
	     */

	  }, {
	    key: '_onInput',
	    value: function _onInput() {
	      if (!this.isSelectOneElement) {
	        this._setInputWidth();
	      }
	    }

	    /**
	     * Touch move event
	     * @return
	     * @private
	     */

	  }, {
	    key: '_onTouchMove',
	    value: function _onTouchMove() {
	      if (this.wasTap === true) {
	        this.wasTap = false;
	      }
	    }

	    /**
	     * Touch end event
	     * @param  {Object} e Event
	     * @return
	     * @private
	     */

	  }, {
	    key: '_onTouchEnd',
	    value: function _onTouchEnd(e) {
	      var target = e.target || e.touches[0].target;
	      var hasActiveDropdown = this.dropdown.classList.contains(this.config.classNames.activeState);

	      // If a user tapped within our container...
	      if (this.wasTap === true && this.containerOuter.contains(target)) {
	        // ...and we aren't dealing with a single select box, show dropdown/focus input
	        if ((target === this.containerOuter || target === this.containerInner) && !this.isSelectOneElement) {
	          if (this.isTextElement) {
	            // If text element, we only want to focus the input (if it isn't already)
	            if (document.activeElement !== this.input) {
	              this.input.focus();
	            }
	          } else {
	            if (!hasActiveDropdown) {
	              // If a select box, we want to show the dropdown
	              this.showDropdown(true);
	            }
	          }
	        }
	        // Prevents focus event firing
	        e.stopPropagation();
	      }

	      this.wasTap = true;
	    }

	    /**
	     * Mouse down event
	     * @param  {Object} e Event
	     * @return
	     * @private
	     */

	  }, {
	    key: '_onMouseDown',
	    value: function _onMouseDown(e) {
	      var target = e.target;

	      // If we have our mouse down on the scrollbar and are on IE11...
	      if (target === this.choiceList && this.isIe11) {
	        this.isScrollingOnIe = true;
	      }

	      if (this.containerOuter.contains(target) && target !== this.input) {
	        var foundTarget = void 0;
	        var activeItems = this.store.getItemsFilteredByActive();
	        var hasShiftKey = e.shiftKey;

	        if (foundTarget = (0, _utils.findAncestorByAttrName)(target, 'data-button')) {
	          this._handleButtonAction(activeItems, foundTarget);
	        } else if (foundTarget = (0, _utils.findAncestorByAttrName)(target, 'data-item')) {
	          this._handleItemAction(activeItems, foundTarget, hasShiftKey);
	        } else if (foundTarget = (0, _utils.findAncestorByAttrName)(target, 'data-choice')) {
	          this._handleChoiceAction(activeItems, foundTarget);
	        }

	        e.preventDefault();
	      }
	    }

	    /**
	     * Click event
	     * @param  {Object} e Event
	     * @return
	     * @private
	     */

	  }, {
	    key: '_onClick',
	    value: function _onClick(e) {
	      var target = e.target;
	      var hasActiveDropdown = this.dropdown.classList.contains(this.config.classNames.activeState);
	      var activeItems = this.store.getItemsFilteredByActive();

	      // If target is something that concerns us
	      if (this.containerOuter.contains(target)) {
	        // Handle button delete
	        if (target.hasAttribute('data-button')) {
	          this._handleButtonAction(activeItems, target);
	        }

	        if (!hasActiveDropdown) {
	          if (this.isTextElement) {
	            if (document.activeElement !== this.input) {
	              this.input.focus();
	            }
	          } else {
	            if (this.canSearch) {
	              this.showDropdown(true);
	            } else {
	              this.showDropdown();
	              this.containerOuter.focus();
	            }
	          }
	        } else if (this.isSelectOneElement && target !== this.input && !this.dropdown.contains(target)) {
	          this.hideDropdown(true);
	        }
	      } else {
	        var hasHighlightedItems = activeItems.some(function (item) {
	          return item.highlighted;
	        });

	        // De-select any highlighted items
	        if (hasHighlightedItems) {
	          this.unhighlightAll();
	        }

	        // Remove focus state
	        this.containerOuter.classList.remove(this.config.classNames.focusState);

	        // Close all other dropdowns
	        if (hasActiveDropdown) {
	          this.hideDropdown();
	        }
	      }
	    }

	    /**
	     * Mouse over (hover) event
	     * @param  {Object} e Event
	     * @return
	     * @private
	     */

	  }, {
	    key: '_onMouseOver',
	    value: function _onMouseOver(e) {
	      // If the dropdown is either the target or one of its children is the target
	      if (e.target === this.dropdown || this.dropdown.contains(e.target)) {
	        if (e.target.hasAttribute('data-choice')) this._highlightChoice(e.target);
	      }
	    }

	    /**
	     * Paste event
	     * @param  {Object} e Event
	     * @return
	     * @private
	     */

	  }, {
	    key: '_onPaste',
	    value: function _onPaste(e) {
	      // Disable pasting into the input if option has been set
	      if (e.target === this.input && !this.config.paste) {
	        e.preventDefault();
	      }
	    }

	    /**
	     * Focus event
	     * @param  {Object} e Event
	     * @return
	     * @private
	     */

	  }, {
	    key: '_onFocus',
	    value: function _onFocus(e) {
	      var _this17 = this;

	      var target = e.target;
	      // If target is something that concerns us
	      if (this.containerOuter.contains(target)) {
	        var hasActiveDropdown = this.dropdown.classList.contains(this.config.classNames.activeState);
	        var focusActions = {
	          text: function text() {
	            if (target === _this17.input) {
	              _this17.containerOuter.classList.add(_this17.config.classNames.focusState);
	            }
	          },
	          'select-one': function selectOne() {
	            _this17.containerOuter.classList.add(_this17.config.classNames.focusState);
	            if (target === _this17.input) {
	              // Show dropdown if it isn't already showing
	              if (!hasActiveDropdown) {
	                _this17.showDropdown();
	              }
	            }
	          },
	          'select-multiple': function selectMultiple() {
	            if (target === _this17.input) {
	              // If element is a select box, the focused element is the container and the dropdown
	              // isn't already open, focus and show dropdown
	              _this17.containerOuter.classList.add(_this17.config.classNames.focusState);

	              if (!hasActiveDropdown) {
	                _this17.showDropdown(true);
	              }
	            }
	          }
	        };

	        focusActions[this.passedElement.type]();
	      }
	    }

	    /**
	     * Blur event
	     * @param  {Object} e Event
	     * @return
	     * @private
	     */

	  }, {
	    key: '_onBlur',
	    value: function _onBlur(e) {
	      var _this18 = this;

	      var target = e.target;
	      // If target is something that concerns us
	      if (this.containerOuter.contains(target) && !this.isScrollingOnIe) {
	        var activeItems = this.store.getItemsFilteredByActive();
	        var hasActiveDropdown = this.dropdown.classList.contains(this.config.classNames.activeState);
	        var hasHighlightedItems = activeItems.some(function (item) {
	          return item.highlighted;
	        });
	        var blurActions = {
	          text: function text() {
	            if (target === _this18.input) {
	              // Remove the focus state
	              _this18.containerOuter.classList.remove(_this18.config.classNames.focusState);
	              // De-select any highlighted items
	              if (hasHighlightedItems) {
	                _this18.unhighlightAll();
	              }
	              // Hide dropdown if it is showing
	              if (hasActiveDropdown) {
	                _this18.hideDropdown();
	              }
	            }
	          },
	          'select-one': function selectOne() {
	            _this18.containerOuter.classList.remove(_this18.config.classNames.focusState);
	            if (target === _this18.containerOuter) {
	              // Hide dropdown if it is showing
	              if (hasActiveDropdown && !_this18.canSearch) {
	                _this18.hideDropdown();
	              }
	            }
	            if (target === _this18.input && hasActiveDropdown) {
	              // Hide dropdown if it is showing
	              _this18.hideDropdown();
	            }
	          },
	          'select-multiple': function selectMultiple() {
	            if (target === _this18.input) {
	              // Remove the focus state
	              _this18.containerOuter.classList.remove(_this18.config.classNames.focusState);
	              // Hide dropdown if it is showing
	              if (hasActiveDropdown) {
	                _this18.hideDropdown();
	              }
	              // De-select any highlighted items
	              if (hasHighlightedItems) {
	                _this18.unhighlightAll();
	              }
	            }
	          }
	        };

	        blurActions[this.passedElement.type]();
	      } else {
	        // On IE11, clicking the scollbar blurs our input and thus
	        // closes the dropdown. To stop this, we refocus our input
	        // if we know we are on IE *and* are scrolling.
	        this.isScrollingOnIe = false;
	        this.input.focus();
	      }
	    }

	    /**
	     * Tests value against a regular expression
	     * @param  {string} value   Value to test
	     * @return {Boolean}        Whether test passed/failed
	     * @private
	     */

	  }, {
	    key: '_regexFilter',
	    value: function _regexFilter(value) {
	      if (!value) {
	        return false;
	      }

	      var regex = this.config.regexFilter;
	      var expression = new RegExp(regex.source, 'i');
	      return expression.test(value);
	    }

	    /**
	     * Scroll to an option element
	     * @param  {HTMLElement} choice  Option to scroll to
	     * @param  {Number} direction  Whether option is above or below
	     * @return
	     * @private
	     */

	  }, {
	    key: '_scrollToChoice',
	    value: function _scrollToChoice(choice, direction) {
	      var _this19 = this;

	      if (!choice) {
	        return;
	      }

	      var dropdownHeight = this.choiceList.offsetHeight;
	      var choiceHeight = choice.offsetHeight;
	      // Distance from bottom of element to top of parent
	      var choicePos = choice.offsetTop + choiceHeight;
	      // Scroll position of dropdown
	      var containerScrollPos = this.choiceList.scrollTop + dropdownHeight;
	      // Difference between the choice and scroll position
	      var endPoint = direction > 0 ? this.choiceList.scrollTop + choicePos - containerScrollPos : choice.offsetTop;

	      var animateScroll = function animateScroll() {
	        var strength = 4;
	        var choiceListScrollTop = _this19.choiceList.scrollTop;
	        var continueAnimation = false;
	        var easing = void 0;
	        var distance = void 0;

	        if (direction > 0) {
	          easing = (endPoint - choiceListScrollTop) / strength;
	          distance = easing > 1 ? easing : 1;

	          _this19.choiceList.scrollTop = choiceListScrollTop + distance;
	          if (choiceListScrollTop < endPoint) {
	            continueAnimation = true;
	          }
	        } else {
	          easing = (choiceListScrollTop - endPoint) / strength;
	          distance = easing > 1 ? easing : 1;

	          _this19.choiceList.scrollTop = choiceListScrollTop - distance;
	          if (choiceListScrollTop > endPoint) {
	            continueAnimation = true;
	          }
	        }

	        if (continueAnimation) {
	          requestAnimationFrame(function (time) {
	            animateScroll(time, endPoint, direction);
	          });
	        }
	      };

	      requestAnimationFrame(function (time) {
	        animateScroll(time, endPoint, direction);
	      });
	    }

	    /**
	     * Highlight choice
	     * @param  {HTMLElement} [el] Element to highlight
	     * @return
	     * @private
	     */

	  }, {
	    key: '_highlightChoice',
	    value: function _highlightChoice() {
	      var _this20 = this;

	      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	      // Highlight first element in dropdown
	      var choices = Array.from(this.dropdown.querySelectorAll('[data-choice-selectable]'));
	      var passedEl = el;

	      if (choices && choices.length) {
	        var highlightedChoices = Array.from(this.dropdown.querySelectorAll('.' + this.config.classNames.highlightedState));

	        // Remove any highlighted choices
	        highlightedChoices.forEach(function (choice) {
	          choice.classList.remove(_this20.config.classNames.highlightedState);
	          choice.setAttribute('aria-selected', 'false');
	        });

	        if (passedEl) {
	          this.highlightPosition = choices.indexOf(passedEl);
	        } else {
	          // Highlight choice based on last known highlight location
	          if (choices.length > this.highlightPosition) {
	            // If we have an option to highlight
	            passedEl = choices[this.highlightPosition];
	          } else {
	            // Otherwise highlight the option before
	            passedEl = choices[choices.length - 1];
	          }

	          if (!passedEl) {
	            passedEl = choices[0];
	          }
	        }

	        // Highlight given option, and set accessiblity attributes
	        passedEl.classList.add(this.config.classNames.highlightedState);
	        passedEl.setAttribute('aria-selected', 'true');
	        this.containerOuter.setAttribute('aria-activedescendant', passedEl.id);
	      }
	    }

	    /**
	     * Add item to store with correct value
	     * @param {String} value Value to add to store
	     * @param {String} [label] Label to add to store
	     * @param {Number} [choiceId=-1] ID of the associated choice that was selected
	     * @param {Number} [groupId=-1] ID of group choice is within. Negative number indicates no group
	     * @param {Object} [customProperties] Object containing user defined properties
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: '_addItem',
	    value: function _addItem(value) {
	      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var choiceId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
	      var groupId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
	      var customProperties = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	      var placeholder = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
	      var keyCode = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

	      var passedValue = (0, _utils.isType)('String', value) ? value.trim() : value;
	      var passedKeyCode = keyCode;
	      var items = this.store.getItems();
	      var passedLabel = label || passedValue;
	      var passedOptionId = parseInt(choiceId, 10) || -1;

	      // Get group if group ID passed
	      var group = groupId >= 0 ? this.store.getGroupById(groupId) : null;

	      // Generate unique id
	      var id = items ? items.length + 1 : 1;

	      // If a prepended value has been passed, prepend it
	      if (this.config.prependValue) {
	        passedValue = this.config.prependValue + passedValue.toString();
	      }

	      // If an appended value has been passed, append it
	      if (this.config.appendValue) {
	        passedValue += this.config.appendValue.toString();
	      }

	      this.store.dispatch((0, _index3.addItem)(passedValue, passedLabel, id, passedOptionId, groupId, customProperties, placeholder, passedKeyCode));

	      if (this.isSelectOneElement) {
	        this.removeActiveItems(id);
	      }

	      // Trigger change event
	      if (group && group.value) {
	        (0, _utils.triggerEvent)(this.passedElement, 'addItem', {
	          id: id,
	          value: passedValue,
	          label: passedLabel,
	          groupValue: group.value,
	          keyCode: passedKeyCode
	        });
	      } else {
	        (0, _utils.triggerEvent)(this.passedElement, 'addItem', {
	          id: id,
	          value: passedValue,
	          label: passedLabel,
	          keyCode: passedKeyCode
	        });
	      }

	      return this;
	    }

	    /**
	     * Remove item from store
	     * @param {Object} item Item to remove
	     * @return {Object} Class instance
	     * @public
	     */

	  }, {
	    key: '_removeItem',
	    value: function _removeItem(item) {
	      if (!item || !(0, _utils.isType)('Object', item)) {
	        return this;
	      }

	      var id = item.id;
	      var value = item.value;
	      var label = item.label;
	      var choiceId = item.choiceId;
	      var groupId = item.groupId;
	      var group = groupId >= 0 ? this.store.getGroupById(groupId) : null;

	      this.store.dispatch((0, _index3.removeItem)(id, choiceId));

	      if (group && group.value) {
	        (0, _utils.triggerEvent)(this.passedElement, 'removeItem', {
	          id: id,
	          value: value,
	          label: label,
	          groupValue: group.value
	        });
	      } else {
	        (0, _utils.triggerEvent)(this.passedElement, 'removeItem', {
	          id: id,
	          value: value,
	          label: label
	        });
	      }

	      return this;
	    }

	    /**
	     * Add choice to dropdown
	     * @param {String} value Value of choice
	     * @param {String} [label] Label of choice
	     * @param {Boolean} [isSelected=false] Whether choice is selected
	     * @param {Boolean} [isDisabled=false] Whether choice is disabled
	     * @param {Number} [groupId=-1] ID of group choice is within. Negative number indicates no group
	     * @param {Object} [customProperties] Object containing user defined properties
	     * @return
	     * @private
	     */

	  }, {
	    key: '_addChoice',
	    value: function _addChoice(value) {
	      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var isSelected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      var isDisabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	      var groupId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
	      var customProperties = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
	      var placeholder = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
	      var keyCode = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;

	      if (typeof value === 'undefined' || value === null) {
	        return;
	      }

	      // Generate unique id
	      var choices = this.store.getChoices();
	      var choiceLabel = label || value;
	      var choiceId = choices ? choices.length + 1 : 1;
	      var choiceElementId = this.baseId + '-' + this.idNames.itemChoice + '-' + choiceId;

	      this.store.dispatch((0, _index3.addChoice)(value, choiceLabel, choiceId, groupId, isDisabled, choiceElementId, customProperties, placeholder, keyCode));

	      if (isSelected) {
	        this._addItem(value, choiceLabel, choiceId, undefined, customProperties, placeholder, keyCode);
	      }
	    }

	    /**
	     * Clear all choices added to the store.
	     * @return
	     * @private
	     */

	  }, {
	    key: '_clearChoices',
	    value: function _clearChoices() {
	      this.store.dispatch((0, _index3.clearChoices)());
	    }

	    /**
	     * Add group to dropdown
	     * @param {Object} group Group to add
	     * @param {Number} id Group ID
	     * @param {String} [valueKey] name of the value property on the object
	     * @param {String} [labelKey] name of the label property on the object
	     * @return
	     * @private
	     */

	  }, {
	    key: '_addGroup',
	    value: function _addGroup(group, id) {
	      var _this21 = this;

	      var valueKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
	      var labelKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'label';

	      var groupChoices = (0, _utils.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
	      var groupId = id ? id : Math.floor(new Date().valueOf() * Math.random());
	      var isDisabled = group.disabled ? group.disabled : false;

	      if (groupChoices) {
	        this.store.dispatch((0, _index3.addGroup)(group.label, groupId, true, isDisabled));

	        groupChoices.forEach(function (option) {
	          var isOptDisabled = option.disabled || option.parentNode && option.parentNode.disabled;
	          _this21._addChoice(option[valueKey], (0, _utils.isType)('Object', option) ? option[labelKey] : option.innerHTML, option.selected, isOptDisabled, groupId, option.customProperties, option.placeholder);
	        });
	      } else {
	        this.store.dispatch((0, _index3.addGroup)(group.label, group.id, false, group.disabled));
	      }
	    }

	    /**
	     * Get template from name
	     * @param  {String}    template Name of template to get
	     * @param  {...}       args     Data to pass to template
	     * @return {HTMLElement}        Template
	     * @private
	     */

	  }, {
	    key: '_getTemplate',
	    value: function _getTemplate(template) {
	      if (!template) {
	        return null;
	      }
	      var templates = this.config.templates;

	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return templates[template].apply(templates, args);
	    }

	    /**
	     * Create HTML element based on type and arguments
	     * @return
	     * @private
	     */

	  }, {
	    key: '_createTemplates',
	    value: function _createTemplates() {
	      var _this22 = this;

	      var globalClasses = this.config.classNames;
	      var templates = {
	        containerOuter: function containerOuter(direction) {
	          return (0, _utils.strToEl)('\n          <div\n            class="' + globalClasses.containerOuter + '"\n            ' + (_this22.isSelectElement ? _this22.config.searchEnabled ? 'role="combobox" aria-autocomplete="list"' : 'role="listbox"' : '') + '\n            data-type="' + _this22.passedElement.type + '"\n            ' + (_this22.isSelectOneElement ? 'tabindex="0"' : '') + '\n            aria-haspopup="true"\n            aria-expanded="false"\n            dir="' + direction + '"\n            >\n          </div>\n        ');
	        },
	        containerInner: function containerInner() {
	          return (0, _utils.strToEl)('\n          <div class="' + globalClasses.containerInner + '"></div>\n        ');
	        },
	        itemList: function itemList() {
	          var _classNames;

	          var localClasses = (0, _classnames2.default)(globalClasses.list, (_classNames = {}, _defineProperty(_classNames, globalClasses.listSingle, _this22.isSelectOneElement), _defineProperty(_classNames, globalClasses.listItems, !_this22.isSelectOneElement), _classNames));

	          return (0, _utils.strToEl)('\n          <div class="' + localClasses + '"></div>\n        ');
	        },
	        placeholder: function placeholder(value) {
	          return (0, _utils.strToEl)('\n          <div class="' + globalClasses.placeholder + '">\n            ' + value + '\n          </div>\n        ');
	        },
	        item: function item(data) {
	          var _classNames2;

	          var localClasses = (0, _classnames2.default)(globalClasses.item, (_classNames2 = {}, _defineProperty(_classNames2, globalClasses.highlightedState, data.highlighted), _defineProperty(_classNames2, globalClasses.itemSelectable, !data.highlighted), _defineProperty(_classNames2, globalClasses.placeholder, data.placeholder), _classNames2));

	          if (_this22.config.removeItemButton) {
	            var _classNames3;

	            localClasses = (0, _classnames2.default)(globalClasses.item, (_classNames3 = {}, _defineProperty(_classNames3, globalClasses.highlightedState, data.highlighted), _defineProperty(_classNames3, globalClasses.itemSelectable, !data.disabled), _defineProperty(_classNames3, globalClasses.placeholder, data.placeholder), _classNames3));

	            return (0, _utils.strToEl)('\n            <div\n              class="' + localClasses + '"\n              data-item\n              data-id="' + data.id + '"\n              data-value="' + data.value + '"\n              data-deletable\n              ' + (data.active ? 'aria-selected="true"' : '') + '\n              ' + (data.disabled ? 'aria-disabled="true"' : '') + '\n              >\n              ' + data.label + '<!--\n           --><button\n                type="button"\n                class="' + globalClasses.button + '"\n                data-button\n                aria-label="Remove item: \'' + data.value + '\'"\n                >\n                Remove item\n              </button>\n            </div>\n          ');
	          }

	          return (0, _utils.strToEl)('\n          <div\n            class="' + localClasses + '"\n            data-item\n            data-id="' + data.id + '"\n            data-value="' + data.value + '"\n            ' + (data.active ? 'aria-selected="true"' : '') + '\n            ' + (data.disabled ? 'aria-disabled="true"' : '') + '\n            >\n            ' + data.label + '\n          </div>\n        ');
	        },
	        choiceList: function choiceList() {
	          return (0, _utils.strToEl)('\n          <div\n            class="' + globalClasses.list + '"\n            dir="ltr"\n            role="listbox"\n            ' + (!_this22.isSelectOneElement ? 'aria-multiselectable="true"' : '') + '\n            >\n          </div>\n        ');
	        },
	        choiceGroup: function choiceGroup(data) {
	          var localClasses = (0, _classnames2.default)(globalClasses.group, _defineProperty({}, globalClasses.itemDisabled, data.disabled));

	          return (0, _utils.strToEl)('\n          <div\n            class="' + localClasses + '"\n            data-group\n            data-id="' + data.id + '"\n            data-value="' + data.value + '"\n            role="group"\n            ' + (data.disabled ? 'aria-disabled="true"' : '') + '\n            >\n            <div class="' + globalClasses.groupHeading + '">' + data.value + '</div>\n          </div>\n        ');
	        },
	        choice: function choice(data) {
	          var _classNames5;

	          var localClasses = (0, _classnames2.default)(globalClasses.item, globalClasses.itemChoice, (_classNames5 = {}, _defineProperty(_classNames5, globalClasses.itemDisabled, data.disabled), _defineProperty(_classNames5, globalClasses.itemSelectable, !data.disabled), _defineProperty(_classNames5, globalClasses.placeholder, data.placeholder), _classNames5));

	          return (0, _utils.strToEl)('\n          <div\n            class="' + localClasses + '"\n            data-select-text="' + _this22.config.itemSelectText + '"\n            data-choice\n            data-id="' + data.id + '"\n            data-value="' + data.value + '"\n            ' + (data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + '\n            id="' + data.elementId + '"\n            ' + (data.groupId > 0 ? 'role="treeitem"' : 'role="option"') + '\n            >\n            ' + data.label + '\n          </div>\n        ');
	        },
	        input: function input() {
	          var localClasses = (0, _classnames2.default)(globalClasses.input, globalClasses.inputCloned);

	          return (0, _utils.strToEl)('\n          <input\n            type="text"\n            class="' + localClasses + '"\n            autocomplete="off"\n            autocapitalize="off"\n            spellcheck="false"\n            role="textbox"\n            aria-autocomplete="list"\n            >\n        ');
	        },
	        dropdown: function dropdown() {
	          var localClasses = (0, _classnames2.default)(globalClasses.list, globalClasses.listDropdown);

	          return (0, _utils.strToEl)('\n          <div\n            class="' + localClasses + '"\n            aria-expanded="false"\n            >\n          </div>\n        ');
	        },
	        notice: function notice(label) {
	          var _classNames6;

	          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	          var localClasses = (0, _classnames2.default)(globalClasses.item, globalClasses.itemChoice, (_classNames6 = {}, _defineProperty(_classNames6, globalClasses.noResults, type === 'no-results'), _defineProperty(_classNames6, globalClasses.noChoices, type === 'no-choices'), _classNames6));

	          return (0, _utils.strToEl)('\n          <div class="' + localClasses + '">\n            ' + label + '\n          </div>\n        ');
	        },
	        option: function option(data) {
	          return (0, _utils.strToEl)('\n          <option value="' + data.value + '" selected>' + data.label + '</option>\n        ');
	        }
	      };

	      // User's custom templates
	      var callbackTemplate = this.config.callbackOnCreateTemplates;
	      var userTemplates = {};
	      if (callbackTemplate && (0, _utils.isType)('Function', callbackTemplate)) {
	        userTemplates = callbackTemplate.call(this, _utils.strToEl);
	      }

	      this.config.templates = (0, _utils.extend)(templates, userTemplates);
	    }
	  }, {
	    key: '_setLoading',
	    value: function _setLoading(isLoading) {
	      this.store.dispatch((0, _index3.setIsLoading)(isLoading));
	    }

	    /**
	     * Create DOM structure around passed select element
	     * @return
	     * @private
	     */

	  }, {
	    key: '_createInput',
	    value: function _createInput() {
	      var _this23 = this;

	      var direction = this.passedElement.getAttribute('dir') || 'ltr';
	      var containerOuter = this._getTemplate('containerOuter', direction);
	      var containerInner = this._getTemplate('containerInner');
	      var itemList = this._getTemplate('itemList');
	      var choiceList = this._getTemplate('choiceList');
	      var input = this._getTemplate('input');
	      var dropdown = this._getTemplate('dropdown');

	      this.containerOuter = containerOuter;
	      this.containerInner = containerInner;
	      this.input = input;
	      this.choiceList = choiceList;
	      this.itemList = itemList;
	      this.dropdown = dropdown;

	      // Hide passed input
	      this.passedElement.classList.add(this.config.classNames.input, this.config.classNames.hiddenState);

	      // Remove element from tab index
	      this.passedElement.tabIndex = '-1';

	      // Backup original styles if any
	      var origStyle = this.passedElement.getAttribute('style');

	      if (Boolean(origStyle)) {
	        this.passedElement.setAttribute('data-choice-orig-style', origStyle);
	      }

	      this.passedElement.setAttribute('style', 'display:none;');
	      this.passedElement.setAttribute('aria-hidden', 'true');
	      this.passedElement.setAttribute('data-choice', 'active');

	      // Wrap input in container preserving DOM ordering
	      (0, _utils.wrap)(this.passedElement, containerInner);

	      // Wrapper inner container with outer container
	      (0, _utils.wrap)(containerInner, containerOuter);

	      if (this.isSelectOneElement) {
	        input.placeholder = this.config.searchPlaceholderValue || '';
	      } else if (this.placeholder) {
	        input.placeholder = this.placeholder;
	        input.style.width = (0, _utils.getWidthOfInput)(input);
	      }

	      if (!this.config.addItems) {
	        this.disable();
	      }

	      containerOuter.appendChild(containerInner);
	      containerOuter.appendChild(dropdown);
	      containerInner.appendChild(itemList);

	      if (!this.isTextElement) {
	        dropdown.appendChild(choiceList);
	      }

	      if (this.isSelectMultipleElement || this.isTextElement) {
	        containerInner.appendChild(input);
	      } else if (this.canSearch) {
	        dropdown.insertBefore(input, dropdown.firstChild);
	      }

	      if (this.isSelectElement) {
	        var passedGroups = Array.from(this.passedElement.getElementsByTagName('OPTGROUP'));

	        this.highlightPosition = 0;
	        this.isSearching = false;

	        this._setLoading(true);

	        if (passedGroups && passedGroups.length) {
	          passedGroups.forEach(function (group) {
	            _this23._addGroup(group, group.id || null);
	          });
	        } else {
	          var passedOptions = Array.from(this.passedElement.options);
	          var filter = this.config.sortFilter;
	          var allChoices = this.presetChoices;

	          // Create array of options from option elements
	          passedOptions.forEach(function (o) {
	            allChoices.push({
	              value: o.value,
	              label: o.innerHTML,
	              selected: o.selected,
	              disabled: o.disabled || o.parentNode.disabled,
	              placeholder: o.hasAttribute('placeholder')
	            });
	          });

	          // If sorting is enabled or the user is searching, filter choices
	          if (this.config.shouldSort) {
	            allChoices.sort(filter);
	          }

	          // Determine whether there is a selected choice
	          var hasSelectedChoice = allChoices.some(function (choice) {
	            return choice.selected;
	          });

	          // Add each choice
	          allChoices.forEach(function (choice, index) {
	            // Pre-select first choice if it's a single select
	            if (_this23.isSelectOneElement) {
	              // If there is a selected choice already or the choice is not
	              // the first in the array, add each choice normally
	              // Otherwise pre-select the first choice in the array
	              var shouldPreselect = hasSelectedChoice || !hasSelectedChoice && index > 0;
	              _this23._addChoice(choice.value, choice.label, shouldPreselect ? choice.selected : true, shouldPreselect ? choice.disabled : false, undefined, choice.customProperties, choice.placeholder);
	            } else {
	              _this23._addChoice(choice.value, choice.label, choice.selected, choice.disabled, undefined, choice.customProperties, choice.placeholder);
	            }
	          });
	        }

	        this._setLoading(false);
	      } else if (this.isTextElement) {
	        // Add any preset values seperated by delimiter
	        this.presetItems.forEach(function (item) {
	          var itemType = (0, _utils.getType)(item);
	          if (itemType === 'Object') {
	            if (!item.value) {
	              return;
	            }
	            _this23._addItem(item.value, item.label, item.id, undefined, item.customProperties, item.placeholder);
	          } else if (itemType === 'String') {
	            _this23._addItem(item);
	          }
	        });
	      }
	    }

	    /*=====  End of Private functions  ======*/

	  }]);

	  return Choices;
	}();

		module.exports = Choices;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Fuse - Lightweight fuzzy-search
	 *
	 * Copyright (c) 2012-2016 Kirollos Risk <kirollos@gmail.com>.
	 * All Rights Reserved. Apache Software License 2.0
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License")
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	(function (global) {
	  'use strict';

	  /** @type {function(...*)} */
	  function log () {
	    console.log.apply(console, arguments);
	  }

	  var defaultOptions = {
	    // The name of the identifier property. If specified, the returned result will be a list
	    // of the items' dentifiers, otherwise it will be a list of the items.
	    id: null,

	    // Indicates whether comparisons should be case sensitive.

	    caseSensitive: false,

	    // An array of values that should be included from the searcher's output. When this array
	    // contains elements, each result in the list will be of the form `{ item: ..., include1: ..., include2: ... }`.
	    // Values you can include are `score`, `matchedLocations`
	    include: [],

	    // Whether to sort the result list, by score
	    shouldSort: true,

	    // The search function to use
	    // Note that the default search function ([[Function]]) must conform to the following API:
	    //
	    //  @param pattern The pattern string to search
	    //  @param options The search option
	    //  [[Function]].constructor = function(pattern, options)
	    //
	    //  @param text: the string to search in for the pattern
	    //  @return Object in the form of:
	    //    - isMatch: boolean
	    //    - score: Int
	    //  [[Function]].prototype.search = function(text)
	    searchFn: BitapSearcher,

	    // Default sort function
	    sortFn: function (a, b) {
	      return a.score - b.score
	    },

	    // The get function to use when fetching an object's properties.
	    // The default will search nested paths *ie foo.bar.baz*
	    getFn: deepValue,

	    // List of properties that will be searched. This also supports nested properties.
	    keys: [],

	    // Will print to the console. Useful for debugging.
	    verbose: false,

	    // When true, the search algorithm will search individual words **and** the full string,
	    // computing the final score as a function of both. Note that when `tokenize` is `true`,
	    // the `threshold`, `distance`, and `location` are inconsequential for individual tokens.
	    tokenize: false,

	    // When true, the result set will only include records that match all tokens. Will only work
	    // if `tokenize` is also true.
	    matchAllTokens: false,

	    // Regex used to separate words when searching. Only applicable when `tokenize` is `true`.
	    tokenSeparator: / +/g,

	    // Minimum number of characters that must be matched before a result is considered a match
	    minMatchCharLength: 1,

	    // When true, the algorithm continues searching to the end of the input even if a perfect
	    // match is found before the end of the same input.
	    findAllMatches: false
	  };

	  /**
	   * @constructor
	   * @param {!Array} list
	   * @param {!Object<string, *>} options
	   */
	  function Fuse (list, options) {
	    var key;

	    this.list = list;
	    this.options = options = options || {};

	    for (key in defaultOptions) {
	      if (!defaultOptions.hasOwnProperty(key)) {
	        continue;
	      }
	      // Add boolean type options
	      if (typeof defaultOptions[key] === 'boolean') {
	        this.options[key] = key in options ? options[key] : defaultOptions[key];
	      // Add all other options
	      } else {
	        this.options[key] = options[key] || defaultOptions[key];
	      }
	    }
	  }

	  Fuse.VERSION = '2.7.3';

	  /**
	   * Sets a new list for Fuse to match against.
	   * @param {!Array} list
	   * @return {!Array} The newly set list
	   * @public
	   */
	  Fuse.prototype.set = function (list) {
	    this.list = list;
	    return list
	  };

	  Fuse.prototype.search = function (pattern) {
	    if (this.options.verbose) log('\nSearch term:', pattern, '\n');

	    this.pattern = pattern;
	    this.results = [];
	    this.resultMap = {};
	    this._keyMap = null;

	    this._prepareSearchers();
	    this._startSearch();
	    this._computeScore();
	    this._sort();

	    var output = this._format();
	    return output
	  };

	  Fuse.prototype._prepareSearchers = function () {
	    var options = this.options;
	    var pattern = this.pattern;
	    var searchFn = options.searchFn;
	    var tokens = pattern.split(options.tokenSeparator);
	    var i = 0;
	    var len = tokens.length;

	    if (this.options.tokenize) {
	      this.tokenSearchers = [];
	      for (; i < len; i++) {
	        this.tokenSearchers.push(new searchFn(tokens[i], options));
	      }
	    }
	    this.fullSeacher = new searchFn(pattern, options);
	  };

	  Fuse.prototype._startSearch = function () {
	    var options = this.options;
	    var getFn = options.getFn;
	    var list = this.list;
	    var listLen = list.length;
	    var keys = this.options.keys;
	    var keysLen = keys.length;
	    var key;
	    var weight;
	    var item = null;
	    var i;
	    var j;

	    // Check the first item in the list, if it's a string, then we assume
	    // that every item in the list is also a string, and thus it's a flattened array.
	    if (typeof list[0] === 'string') {
	      // Iterate over every item
	      for (i = 0; i < listLen; i++) {
	        this._analyze('', list[i], i, i);
	      }
	    } else {
	      this._keyMap = {};
	      // Otherwise, the first item is an Object (hopefully), and thus the searching
	      // is done on the values of the keys of each item.
	      // Iterate over every item
	      for (i = 0; i < listLen; i++) {
	        item = list[i];
	        // Iterate over every key
	        for (j = 0; j < keysLen; j++) {
	          key = keys[j];
	          if (typeof key !== 'string') {
	            weight = (1 - key.weight) || 1;
	            this._keyMap[key.name] = {
	              weight: weight
	            };
	            if (key.weight <= 0 || key.weight > 1) {
	              throw new Error('Key weight has to be > 0 and <= 1')
	            }
	            key = key.name;
	          } else {
	            this._keyMap[key] = {
	              weight: 1
	            };
	          }
	          this._analyze(key, getFn(item, key, []), item, i);
	        }
	      }
	    }
	  };

	  Fuse.prototype._analyze = function (key, text, entity, index) {
	    var options = this.options;
	    var words;
	    var scores;
	    var exists = false;
	    var existingResult;
	    var averageScore;
	    var finalScore;
	    var scoresLen;
	    var mainSearchResult;
	    var tokenSearcher;
	    var termScores;
	    var word;
	    var tokenSearchResult;
	    var hasMatchInText;
	    var checkTextMatches;
	    var i;
	    var j;

	    // Check if the text can be searched
	    if (text === undefined || text === null) {
	      return
	    }

	    scores = [];

	    var numTextMatches = 0;

	    if (typeof text === 'string') {
	      words = text.split(options.tokenSeparator);

	      if (options.verbose) log('---------\nKey:', key);

	      if (this.options.tokenize) {
	        for (i = 0; i < this.tokenSearchers.length; i++) {
	          tokenSearcher = this.tokenSearchers[i];

	          if (options.verbose) log('Pattern:', tokenSearcher.pattern);

	          termScores = [];
	          hasMatchInText = false;

	          for (j = 0; j < words.length; j++) {
	            word = words[j];
	            tokenSearchResult = tokenSearcher.search(word);
	            var obj = {};
	            if (tokenSearchResult.isMatch) {
	              obj[word] = tokenSearchResult.score;
	              exists = true;
	              hasMatchInText = true;
	              scores.push(tokenSearchResult.score);
	            } else {
	              obj[word] = 1;
	              if (!this.options.matchAllTokens) {
	                scores.push(1);
	              }
	            }
	            termScores.push(obj);
	          }

	          if (hasMatchInText) {
	            numTextMatches++;
	          }

	          if (options.verbose) log('Token scores:', termScores);
	        }

	        averageScore = scores[0];
	        scoresLen = scores.length;
	        for (i = 1; i < scoresLen; i++) {
	          averageScore += scores[i];
	        }
	        averageScore = averageScore / scoresLen;

	        if (options.verbose) log('Token score average:', averageScore);
	      }

	      mainSearchResult = this.fullSeacher.search(text);
	      if (options.verbose) log('Full text score:', mainSearchResult.score);

	      finalScore = mainSearchResult.score;
	      if (averageScore !== undefined) {
	        finalScore = (finalScore + averageScore) / 2;
	      }

	      if (options.verbose) log('Score average:', finalScore);

	      checkTextMatches = (this.options.tokenize && this.options.matchAllTokens) ? numTextMatches >= this.tokenSearchers.length : true;

	      if (options.verbose) log('Check Matches', checkTextMatches);

	      // If a match is found, add the item to <rawResults>, including its score
	      if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
	        // Check if the item already exists in our results
	        existingResult = this.resultMap[index];

	        if (existingResult) {
	          // Use the lowest score
	          // existingResult.score, bitapResult.score
	          existingResult.output.push({
	            key: key,
	            score: finalScore,
	            matchedIndices: mainSearchResult.matchedIndices
	          });
	        } else {
	          // Add it to the raw result list
	          this.resultMap[index] = {
	            item: entity,
	            output: [{
	              key: key,
	              score: finalScore,
	              matchedIndices: mainSearchResult.matchedIndices
	            }]
	          };

	          this.results.push(this.resultMap[index]);
	        }
	      }
	    } else if (isArray(text)) {
	      for (i = 0; i < text.length; i++) {
	        this._analyze(key, text[i], entity, index);
	      }
	    }
	  };

	  Fuse.prototype._computeScore = function () {
	    var i;
	    var j;
	    var keyMap = this._keyMap;
	    var totalScore;
	    var output;
	    var scoreLen;
	    var score;
	    var weight;
	    var results = this.results;
	    var bestScore;
	    var nScore;

	    if (this.options.verbose) log('\n\nComputing score:\n');

	    for (i = 0; i < results.length; i++) {
	      totalScore = 0;
	      output = results[i].output;
	      scoreLen = output.length;

	      bestScore = 1;

	      for (j = 0; j < scoreLen; j++) {
	        score = output[j].score;
	        weight = keyMap ? keyMap[output[j].key].weight : 1;

	        nScore = score * weight;

	        if (weight !== 1) {
	          bestScore = Math.min(bestScore, nScore);
	        } else {
	          totalScore += nScore;
	          output[j].nScore = nScore;
	        }
	      }

	      if (bestScore === 1) {
	        results[i].score = totalScore / scoreLen;
	      } else {
	        results[i].score = bestScore;
	      }

	      if (this.options.verbose) log(results[i]);
	    }
	  };

	  Fuse.prototype._sort = function () {
	    var options = this.options;
	    if (options.shouldSort) {
	      if (options.verbose) log('\n\nSorting....');
	      this.results.sort(options.sortFn);
	    }
	  };

	  Fuse.prototype._format = function () {
	    var options = this.options;
	    var getFn = options.getFn;
	    var finalOutput = [];
	    var i;
	    var len;
	    var results = this.results;
	    var replaceValue;
	    var getItemAtIndex;
	    var include = options.include;

	    if (options.verbose) log('\n\nOutput:\n\n', results);

	    // Helper function, here for speed-up, which replaces the item with its value,
	    // if the options specifies it,
	    replaceValue = options.id ? function (index) {
	      results[index].item = getFn(results[index].item, options.id, [])[0];
	    } : function () {};

	    getItemAtIndex = function (index) {
	      var record = results[index];
	      var data;
	      var j;
	      var output;
	      var _item;
	      var _result;

	      // If `include` has values, put the item in the result
	      if (include.length > 0) {
	        data = {
	          item: record.item
	        };
	        if (include.indexOf('matches') !== -1) {
	          output = record.output;
	          data.matches = [];
	          for (j = 0; j < output.length; j++) {
	            _item = output[j];
	            _result = {
	              indices: _item.matchedIndices
	            };
	            if (_item.key) {
	              _result.key = _item.key;
	            }
	            data.matches.push(_result);
	          }
	        }

	        if (include.indexOf('score') !== -1) {
	          data.score = results[index].score;
	        }

	      } else {
	        data = record.item;
	      }

	      return data
	    };

	    // From the results, push into a new array only the item identifier (if specified)
	    // of the entire item.  This is because we don't want to return the <results>,
	    // since it contains other metadata
	    for (i = 0, len = results.length; i < len; i++) {
	      replaceValue(i);
	      finalOutput.push(getItemAtIndex(i));
	    }

	    return finalOutput
	  };

	  // Helpers

	  function deepValue (obj, path, list) {
	    var firstSegment;
	    var remaining;
	    var dotIndex;
	    var value;
	    var i;
	    var len;

	    if (!path) {
	      // If there's no path left, we've gotten to the object we care about.
	      list.push(obj);
	    } else {
	      dotIndex = path.indexOf('.');

	      if (dotIndex !== -1) {
	        firstSegment = path.slice(0, dotIndex);
	        remaining = path.slice(dotIndex + 1);
	      } else {
	        firstSegment = path;
	      }

	      value = obj[firstSegment];
	      if (value !== null && value !== undefined) {
	        if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
	          list.push(value);
	        } else if (isArray(value)) {
	          // Search each item in the array.
	          for (i = 0, len = value.length; i < len; i++) {
	            deepValue(value[i], remaining, list);
	          }
	        } else if (remaining) {
	          // An object. Recurse further.
	          deepValue(value, remaining, list);
	        }
	      }
	    }

	    return list
	  }

	  function isArray (obj) {
	    return Object.prototype.toString.call(obj) === '[object Array]'
	  }

	  /**
	   * Adapted from "Diff, Match and Patch", by Google
	   *
	   *   http://code.google.com/p/google-diff-match-patch/
	   *
	   * Modified by: Kirollos Risk <kirollos@gmail.com>
	   * -----------------------------------------------
	   * Details: the algorithm and structure was modified to allow the creation of
	   * <Searcher> instances with a <search> method which does the actual
	   * bitap search. The <pattern> (the string that is searched for) is only defined
	   * once per instance and thus it eliminates redundant re-creation when searching
	   * over a list of strings.
	   *
	   * Licensed under the Apache License, Version 2.0 (the "License")
	   * you may not use this file except in compliance with the License.
	   *
	   * @constructor
	   */
	  function BitapSearcher (pattern, options) {
	    options = options || {};
	    this.options = options;
	    this.options.location = options.location || BitapSearcher.defaultOptions.location;
	    this.options.distance = 'distance' in options ? options.distance : BitapSearcher.defaultOptions.distance;
	    this.options.threshold = 'threshold' in options ? options.threshold : BitapSearcher.defaultOptions.threshold;
	    this.options.maxPatternLength = options.maxPatternLength || BitapSearcher.defaultOptions.maxPatternLength;

	    this.pattern = options.caseSensitive ? pattern : pattern.toLowerCase();
	    this.patternLen = pattern.length;

	    if (this.patternLen <= this.options.maxPatternLength) {
	      this.matchmask = 1 << (this.patternLen - 1);
	      this.patternAlphabet = this._calculatePatternAlphabet();
	    }
	  }

	  BitapSearcher.defaultOptions = {
	    // Approximately where in the text is the pattern expected to be found?
	    location: 0,

	    // Determines how close the match must be to the fuzzy location (specified above).
	    // An exact letter match which is 'distance' characters away from the fuzzy location
	    // would score as a complete mismatch. A distance of '0' requires the match be at
	    // the exact location specified, a threshold of '1000' would require a perfect match
	    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
	    distance: 100,

	    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
	    // (of both letters and location), a threshold of '1.0' would match anything.
	    threshold: 0.6,

	    // Machine word size
	    maxPatternLength: 32
	  };

	  /**
	   * Initialize the alphabet for the Bitap algorithm.
	   * @return {Object} Hash of character locations.
	   * @private
	   */
	  BitapSearcher.prototype._calculatePatternAlphabet = function () {
	    var mask = {},
	      i = 0;

	    for (i = 0; i < this.patternLen; i++) {
	      mask[this.pattern.charAt(i)] = 0;
	    }

	    for (i = 0; i < this.patternLen; i++) {
	      mask[this.pattern.charAt(i)] |= 1 << (this.pattern.length - i - 1);
	    }

	    return mask
	  };

	  /**
	   * Compute and return the score for a match with `e` errors and `x` location.
	   * @param {number} errors Number of errors in match.
	   * @param {number} location Location of match.
	   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
	   * @private
	   */
	  BitapSearcher.prototype._bitapScore = function (errors, location) {
	    var accuracy = errors / this.patternLen,
	      proximity = Math.abs(this.options.location - location);

	    if (!this.options.distance) {
	      // Dodge divide by zero error.
	      return proximity ? 1.0 : accuracy
	    }
	    return accuracy + (proximity / this.options.distance)
	  };

	  /**
	   * Compute and return the result of the search
	   * @param {string} text The text to search in
	   * @return {{isMatch: boolean, score: number}} Literal containing:
	   *                          isMatch - Whether the text is a match or not
	   *                          score - Overall score for the match
	   * @public
	   */
	  BitapSearcher.prototype.search = function (text) {
	    var options = this.options;
	    var i;
	    var j;
	    var textLen;
	    var findAllMatches;
	    var location;
	    var threshold;
	    var bestLoc;
	    var binMin;
	    var binMid;
	    var binMax;
	    var start, finish;
	    var bitArr;
	    var lastBitArr;
	    var charMatch;
	    var score;
	    var locations;
	    var matches;
	    var isMatched;
	    var matchMask;
	    var matchedIndices;
	    var matchesLen;
	    var match;

	    text = options.caseSensitive ? text : text.toLowerCase();

	    if (this.pattern === text) {
	      // Exact match
	      return {
	        isMatch: true,
	        score: 0,
	        matchedIndices: [[0, text.length - 1]]
	      }
	    }

	    // When pattern length is greater than the machine word length, just do a a regex comparison
	    if (this.patternLen > options.maxPatternLength) {
	      matches = text.match(new RegExp(this.pattern.replace(options.tokenSeparator, '|')));
	      isMatched = !!matches;

	      if (isMatched) {
	        matchedIndices = [];
	        for (i = 0, matchesLen = matches.length; i < matchesLen; i++) {
	          match = matches[i];
	          matchedIndices.push([text.indexOf(match), match.length - 1]);
	        }
	      }

	      return {
	        isMatch: isMatched,
	        // TODO: revisit this score
	        score: isMatched ? 0.5 : 1,
	        matchedIndices: matchedIndices
	      }
	    }

	    findAllMatches = options.findAllMatches;

	    location = options.location;
	    // Set starting location at beginning text and initialize the alphabet.
	    textLen = text.length;
	    // Highest score beyond which we give up.
	    threshold = options.threshold;
	    // Is there a nearby exact match? (speedup)
	    bestLoc = text.indexOf(this.pattern, location);

	    // a mask of the matches
	    matchMask = [];
	    for (i = 0; i < textLen; i++) {
	      matchMask[i] = 0;
	    }

	    if (bestLoc != -1) {
	      threshold = Math.min(this._bitapScore(0, bestLoc), threshold);
	      // What about in the other direction? (speed up)
	      bestLoc = text.lastIndexOf(this.pattern, location + this.patternLen);

	      if (bestLoc != -1) {
	        threshold = Math.min(this._bitapScore(0, bestLoc), threshold);
	      }
	    }

	    bestLoc = -1;
	    score = 1;
	    locations = [];
	    binMax = this.patternLen + textLen;

	    for (i = 0; i < this.patternLen; i++) {
	      // Scan for the best match; each iteration allows for one more error.
	      // Run a binary search to determine how far from the match location we can stray
	      // at this error level.
	      binMin = 0;
	      binMid = binMax;
	      while (binMin < binMid) {
	        if (this._bitapScore(i, location + binMid) <= threshold) {
	          binMin = binMid;
	        } else {
	          binMax = binMid;
	        }
	        binMid = Math.floor((binMax - binMin) / 2 + binMin);
	      }

	      // Use the result from this iteration as the maximum for the next.
	      binMax = binMid;
	      start = Math.max(1, location - binMid + 1);
	      if (findAllMatches) {
	        finish = textLen;
	      } else {
	        finish = Math.min(location + binMid, textLen) + this.patternLen;
	      }

	      // Initialize the bit array
	      bitArr = Array(finish + 2);

	      bitArr[finish + 1] = (1 << i) - 1;

	      for (j = finish; j >= start; j--) {
	        charMatch = this.patternAlphabet[text.charAt(j - 1)];

	        if (charMatch) {
	          matchMask[j - 1] = 1;
	        }

	        bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

	        if (i !== 0) {
	          // Subsequent passes: fuzzy match.
	          bitArr[j] |= (((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1) | lastBitArr[j + 1];
	        }
	        if (bitArr[j] & this.matchmask) {
	          score = this._bitapScore(i, j - 1);

	          // This match will almost certainly be better than any existing match.
	          // But check anyway.
	          if (score <= threshold) {
	            // Indeed it is
	            threshold = score;
	            bestLoc = j - 1;
	            locations.push(bestLoc);

	            // Already passed loc, downhill from here on in.
	            if (bestLoc <= location) {
	              break
	            }

	            // When passing loc, don't exceed our current distance from loc.
	            start = Math.max(1, 2 * location - bestLoc);
	          }
	        }
	      }

	      // No hope for a (better) match at greater error levels.
	      if (this._bitapScore(i + 1, location) > threshold) {
	        break
	      }
	      lastBitArr = bitArr;
	    }

	    matchedIndices = this._getMatchedIndices(matchMask);

	    // Count exact matches (those with a score of 0) to be "almost" exact
	    return {
	      isMatch: bestLoc >= 0,
	      score: score === 0 ? 0.001 : score,
	      matchedIndices: matchedIndices
	    }
	  };

	  BitapSearcher.prototype._getMatchedIndices = function (matchMask) {
	    var matchedIndices = [];
	    var start = -1;
	    var end = -1;
	    var i = 0;
	    var match;
	    var len = matchMask.length;
	    for (; i < len; i++) {
	      match = matchMask[i];
	      if (match && start === -1) {
	        start = i;
	      } else if (!match && start !== -1) {
	        end = i - 1;
	        if ((end - start) + 1 >= this.options.minMatchCharLength) {
	            matchedIndices.push([start, end]);
	        }
	        start = -1;
	      }
	    }
	    if (matchMask[i - 1]) {
	      if ((i-1 - start) + 1 >= this.options.minMatchCharLength) {
	        matchedIndices.push([start, i - 1]);
	      }
	    }
	    return matchedIndices
	  };

	  // Export to Common JS Loader
	  {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = Fuse;
	  }

	})(this);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _redux = __webpack_require__(5);

	var _index = __webpack_require__(26);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Store = function () {
	  function Store() {
	    _classCallCheck(this, Store);

	    this.store = (0, _redux.createStore)(_index2.default, window.devToolsExtension ? window.devToolsExtension() : undefined);
	  }

	  /**
	   * Get store object (wrapping Redux method)
	   * @return {Object} State
	   */


	  _createClass(Store, [{
	    key: 'getState',
	    value: function getState() {
	      return this.store.getState();
	    }

	    /**
	     * Dispatch event to store (wrapped Redux method)
	     * @param  {Function} action Action function to trigger
	     * @return
	     */

	  }, {
	    key: 'dispatch',
	    value: function dispatch(action) {
	      this.store.dispatch(action);
	    }

	    /**
	     * Subscribe store to function call (wrapped Redux method)
	     * @param  {Function} onChange Function to trigger when state changes
	     * @return
	     */

	  }, {
	    key: 'subscribe',
	    value: function subscribe(onChange) {
	      this.store.subscribe(onChange);
	    }

	    /**
	     * Get loading state from store
	     * @return {Boolean} Loading State
	     */

	  }, {
	    key: 'isLoading',
	    value: function isLoading() {
	      var state = this.store.getState();
	      return state.general.loading;
	    }

	    /**
	     * Get items from store
	     * @return {Array} Item objects
	     */

	  }, {
	    key: 'getItems',
	    value: function getItems() {
	      var state = this.store.getState();
	      return state.items;
	    }

	    /**
	     * Get active items from store
	     * @return {Array} Item objects
	     */

	  }, {
	    key: 'getItemsFilteredByActive',
	    value: function getItemsFilteredByActive() {
	      var items = this.getItems();
	      var values = items.filter(function (item) {
	        return item.active === true;
	      }, []);

	      return values;
	    }

	    /**
	     * Get items from store reduced to just their values
	     * @return {Array} Item objects
	     */

	  }, {
	    key: 'getItemsReducedToValues',
	    value: function getItemsReducedToValues() {
	      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getItems();

	      var values = items.reduce(function (prev, current) {
	        prev.push(current.value);
	        return prev;
	      }, []);

	      return values;
	    }

	    /**
	     * Get choices from store
	     * @return {Array} Option objects
	     */

	  }, {
	    key: 'getChoices',
	    value: function getChoices() {
	      var state = this.store.getState();
	      return state.choices;
	    }

	    /**
	     * Get active choices from store
	     * @return {Array} Option objects
	     */

	  }, {
	    key: 'getChoicesFilteredByActive',
	    value: function getChoicesFilteredByActive() {
	      var choices = this.getChoices();
	      var values = choices.filter(function (choice) {
	        return choice.active === true;
	      });

	      return values;
	    }

	    /**
	     * Get selectable choices from store
	     * @return {Array} Option objects
	     */

	  }, {
	    key: 'getChoicesFilteredBySelectable',
	    value: function getChoicesFilteredBySelectable() {
	      var choices = this.getChoices();
	      var values = choices.filter(function (choice) {
	        return choice.disabled !== true;
	      });

	      return values;
	    }

	    /**
	     * Get choices that can be searched (excluding placeholders)
	     * @return {Array} Option objects
	     */

	  }, {
	    key: 'getSearchableChoices',
	    value: function getSearchableChoices() {
	      var filtered = this.getChoicesFilteredBySelectable();
	      return filtered.filter(function (choice) {
	        return choice.placeholder !== true;
	      });
	    }

	    /**
	     * Get single choice by it's ID
	     * @return {Object} Found choice
	     */

	  }, {
	    key: 'getChoiceById',
	    value: function getChoiceById(id) {
	      if (id) {
	        var choices = this.getChoicesFilteredByActive();
	        var foundChoice = choices.find(function (choice) {
	          return choice.id === parseInt(id, 10);
	        });
	        return foundChoice;
	      }
	      return false;
	    }

	    /**
	     * Get groups from store
	     * @return {Array} Group objects
	     */

	  }, {
	    key: 'getGroups',
	    value: function getGroups() {
	      var state = this.store.getState();
	      return state.groups;
	    }

	    /**
	     * Get active groups from store
	     * @return {Array} Group objects
	     */

	  }, {
	    key: 'getGroupsFilteredByActive',
	    value: function getGroupsFilteredByActive() {
	      var groups = this.getGroups();
	      var choices = this.getChoices();

	      var values = groups.filter(function (group) {
	        var isActive = group.active === true && group.disabled === false;
	        var hasActiveOptions = choices.some(function (choice) {
	          return choice.active === true && choice.disabled === false;
	        });
	        return isActive && hasActiveOptions;
	      }, []);

	      return values;
	    }

	    /**
	     * Get group by group id
	     * @param  {Number} id Group ID
	     * @return {Object}    Group data
	     */

	  }, {
	    key: 'getGroupById',
	    value: function getGroupById(id) {
	      var groups = this.getGroups();
	      var foundGroup = groups.find(function (group) {
	        return group.id === id;
	      });

	      return foundGroup;
	    }

	    /**
	     * Get placeholder choice from store
	     * @return {Object} Found placeholder
	     */

	  }, {
	    key: 'getPlaceholderChoice',
	    value: function getPlaceholderChoice() {
	      var choices = this.getChoices();
	      var placeholderChoice = [].concat(_toConsumableArray(choices)).reverse().find(function (choice) {
	        return choice.placeholder === true;
	      });

	      return placeholderChoice;
	    }
	  }]);

	  return Store;
	}();

	exports.default = Store;


		module.exports = Store;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(6);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(21);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(23);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(24);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(25);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(7);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(17);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'

	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(8),
	    getPrototype = __webpack_require__(14),
	    isObjectLike = __webpack_require__(16);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(9),
	    getRawTag = __webpack_require__(12),
	    objectToString = __webpack_require__(13);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(10);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(11);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(9);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(15);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(20);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else {
	  root = module;
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(19)(module)));

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(6);

	var _isPlainObject = __webpack_require__(7);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}

	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var unexpectedKeyCache = void 0;
	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }

	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(25);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(5);

	var _items = __webpack_require__(27);

	var _items2 = _interopRequireDefault(_items);

	var _groups = __webpack_require__(28);

	var _groups2 = _interopRequireDefault(_groups);

	var _choices = __webpack_require__(29);

	var _choices2 = _interopRequireDefault(_choices);

	var _general = __webpack_require__(30);

	var _general2 = _interopRequireDefault(_general);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appReducer = (0, _redux.combineReducers)({
	  items: _items2.default,
	  groups: _groups2.default,
	  choices: _choices2.default,
	  general: _general2.default
	});

	var rootReducer = function rootReducer(passedState, action) {
	  var state = passedState;
	  // If we are clearing all items, groups and options we reassign
	  // state and then pass that state to our proper reducer. This isn't
	  // mutating our actual state
	  // See: http://stackoverflow.com/a/35641992
	  if (action.type === 'CLEAR_ALL') {
	    state = undefined;
	  }

	  return appReducer(state, action);
	};

	exports.default = rootReducer;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var items = function items() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'ADD_ITEM':
	      {
	        // Add object to items array
	        var newState = [].concat(_toConsumableArray(state), [{
	          id: action.id,
	          choiceId: action.choiceId,
	          groupId: action.groupId,
	          value: action.value,
	          label: action.label,
	          active: true,
	          highlighted: false,
	          customProperties: action.customProperties,
	          placeholder: action.placeholder || false,
	          keyCode: null
	        }]);

	        return newState.map(function (item) {
	          if (item.highlighted) {
	            item.highlighted = false;
	          }
	          return item;
	        });
	      }

	    case 'REMOVE_ITEM':
	      {
	        // Set item to inactive
	        return state.map(function (item) {
	          if (item.id === action.id) {
	            item.active = false;
	          }
	          return item;
	        });
	      }

	    case 'HIGHLIGHT_ITEM':
	      {
	        return state.map(function (item) {
	          if (item.id === action.id) {
	            item.highlighted = action.highlighted;
	          }
	          return item;
	        });
	      }

	    default:
	      {
	        return state;
	      }
	  }
	};

	exports.default = items;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var groups = function groups() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'ADD_GROUP':
	      {
	        return [].concat(_toConsumableArray(state), [{
	          id: action.id,
	          value: action.value,
	          active: action.active,
	          disabled: action.disabled
	        }]);
	      }

	    case 'CLEAR_CHOICES':
	      {
	        return state.groups = [];
	      }

	    default:
	      {
	        return state;
	      }
	  }
	};

	exports.default = groups;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var choices = function choices() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'ADD_CHOICE':
	      {
	        /*
	            A disabled choice appears in the choice dropdown but cannot be selected
	            A selected choice has been added to the passed input's value (added as an item)
	            An active choice appears within the choice dropdown
	         */
	        return [].concat(_toConsumableArray(state), [{
	          id: action.id,
	          elementId: action.elementId,
	          groupId: action.groupId,
	          value: action.value,
	          label: action.label || action.value,
	          disabled: action.disabled || false,
	          selected: false,
	          active: true,
	          score: 9999,
	          customProperties: action.customProperties,
	          placeholder: action.placeholder || false,
	          keyCode: null
	        }]);
	      }

	    case 'ADD_ITEM':
	      {
	        var newState = state;

	        // If all choices need to be activated
	        if (action.activateOptions) {
	          newState = state.map(function (choice) {
	            choice.active = action.active;
	            return choice;
	          });
	        }
	        // When an item is added and it has an associated choice,
	        // we want to disable it so it can't be chosen again
	        if (action.choiceId > -1) {
	          newState = state.map(function (choice) {
	            if (choice.id === parseInt(action.choiceId, 10)) {
	              choice.selected = true;
	            }
	            return choice;
	          });
	        }

	        return newState;
	      }

	    case 'REMOVE_ITEM':
	      {
	        // When an item is removed and it has an associated choice,
	        // we want to re-enable it so it can be chosen again
	        if (action.choiceId > -1) {
	          return state.map(function (choice) {
	            if (choice.id === parseInt(action.choiceId, 10)) {
	              choice.selected = false;
	            }
	            return choice;
	          });
	        }

	        return state;
	      }

	    case 'FILTER_CHOICES':
	      {
	        var filteredResults = action.results;
	        var filteredState = state.map(function (choice) {
	          // Set active state based on whether choice is
	          // within filtered results

	          choice.active = filteredResults.some(function (result) {
	            if (result.item.id === choice.id) {
	              choice.score = result.score;
	              return true;
	            }
	            return false;
	          });

	          return choice;
	        });

	        return filteredState;
	      }

	    case 'ACTIVATE_CHOICES':
	      {
	        return state.map(function (choice) {
	          choice.active = action.active;
	          return choice;
	        });
	      }

	    case 'CLEAR_CHOICES':
	      {
	        return state.choices = [];
	      }

	    default:
	      {
	        return state;
	      }
	  }
	};

	exports.default = choices;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var general = function general() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { loading: false };
	  var action = arguments[1];

	  switch (action.type) {
	    case 'LOADING':
	      {
	        return {
	          loading: action.isLoading
	        };
	      }

	    default:
	      {
	        return state;
	      }
	  }
	};

	exports.default = general;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var addItem = exports.addItem = function addItem(value, label, id, choiceId, groupId, customProperties, placeholder, keyCode) {
	  return {
	    type: 'ADD_ITEM',
	    value: value,
	    label: label,
	    id: id,
	    choiceId: choiceId,
	    groupId: groupId,
	    customProperties: customProperties,
	    placeholder: placeholder,
	    keyCode: keyCode
	  };
	};

	var removeItem = exports.removeItem = function removeItem(id, choiceId) {
	  return {
	    type: 'REMOVE_ITEM',
	    id: id,
	    choiceId: choiceId
	  };
	};

	var highlightItem = exports.highlightItem = function highlightItem(id, highlighted) {
	  return {
	    type: 'HIGHLIGHT_ITEM',
	    id: id,
	    highlighted: highlighted
	  };
	};

	var addChoice = exports.addChoice = function addChoice(value, label, id, groupId, disabled, elementId, customProperties, placeholder, keyCode) {
	  return {
	    type: 'ADD_CHOICE',
	    value: value,
	    label: label,
	    id: id,
	    groupId: groupId,
	    disabled: disabled,
	    elementId: elementId,
	    customProperties: customProperties,
	    placeholder: placeholder,
	    keyCode: keyCode
	  };
	};

	var filterChoices = exports.filterChoices = function filterChoices(results) {
	  return {
	    type: 'FILTER_CHOICES',
	    results: results
	  };
	};

	var activateChoices = exports.activateChoices = function activateChoices() {
	  var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	  return {
	    type: 'ACTIVATE_CHOICES',
	    active: active
	  };
	};

	var clearChoices = exports.clearChoices = function clearChoices() {
	  return {
	    type: 'CLEAR_CHOICES'
	  };
	};

	var addGroup = exports.addGroup = function addGroup(value, id, active, disabled) {
	  return {
	    type: 'ADD_GROUP',
	    value: value,
	    id: id,
	    active: active,
	    disabled: disabled
	  };
	};

	var clearAll = exports.clearAll = function clearAll() {
	  return {
	    type: 'CLEAR_ALL'
	  };
	};

	var setIsLoading = exports.setIsLoading = function setIsLoading(isLoading) {
	  return {
	    type: 'LOADING',
	    isLoading: isLoading
	  };
		};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/* eslint-disable */
	/**
	 * Capitalises the first letter of each word in a string
	 * @param  {String} str String to capitalise
	 * @return {String}     Capitalised string
	 */
	var capitalise = exports.capitalise = function capitalise(str) {
	  return str.replace(/\w\S*/g, function (txt) {
	    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	  });
	};

	/**
	 * Generates a string of random chars
	 * @param  {Number} length Length of the string to generate
	 * @return {String} String of random chars
	 */
	var generateChars = exports.generateChars = function generateChars(length) {
	  var chars = '';

	  for (var i = 0; i < length; i++) {
	    var randomChar = getRandomNumber(0, 36);
	    chars += randomChar.toString(36);
	  }

	  return chars;
	};

	/**
	 * Generates a unique id based on an element
	 * @param  {HTMLElement} element Element to generate the id from
	 * @param  {String} Prefix for the Id
	 * @return {String} Unique Id
	 */
	var generateId = exports.generateId = function generateId(element, prefix) {
	  var id = element.id || element.name && element.name + '-' + generateChars(2) || generateChars(4);
	  id = id.replace(/(:|\.|\[|\]|,)/g, '');
	  id = prefix + id;

	  return id;
	};

	/**
	 * Tests the type of an object
	 * @param  {String}  type Type to test object against
	 * @param  {Object}  obj  Object to be tested
	 * @return {Boolean}
	 */
	var getType = exports.getType = function getType(obj) {
	  return Object.prototype.toString.call(obj).slice(8, -1);
	};

	/**
	 * Tests the type of an object
	 * @param  {String}  type Type to test object against
	 * @param  {Object}  obj  Object to be tested
	 * @return {Boolean}
	 */
	var isType = exports.isType = function isType(type, obj) {
	  var clas = getType(obj);
	  return obj !== undefined && obj !== null && clas === type;
	};

	/**
	 * Tests to see if a passed object is a node
	 * @param  {Object}  obj  Object to be tested
	 * @return {Boolean}
	 */
	var isNode = exports.isNode = function isNode(o) {
	  return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === "object" ? o instanceof Node : o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string";
	};

	/**
	 * Tests to see if a passed object is an element
	 * @param  {Object}  obj  Object to be tested
	 * @return {Boolean}
	 */
	var isElement = exports.isElement = function isElement(o) {
	  return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === "object" ? o instanceof HTMLElement : //DOM2
	  o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
	};

	/**
	 * Merges unspecified amount of objects into new object
	 * @private
	 * @return {Object} Merged object of arguments
	 */
	var extend = exports.extend = function extend() {
	  var extended = {};
	  var length = arguments.length;

	  /**
	   * Merge one object into another
	   * @param  {Object} obj  Object to merge into extended object
	   */
	  var merge = function merge(obj) {
	    for (var prop in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
	        // If deep merge and property is an object, merge properties
	        if (isType('Object', obj[prop])) {
	          extended[prop] = extend(true, extended[prop], obj[prop]);
	        } else {
	          extended[prop] = obj[prop];
	        }
	      }
	    }
	  };

	  // Loop through each passed argument
	  for (var i = 0; i < length; i++) {
	    // store argument at position i
	    var obj = arguments[i];

	    // If we are in fact dealing with an object, merge it.
	    if (isType('Object', obj)) {
	      merge(obj);
	    }
	  }

	  return extended;
	};

	/**
	 * CSS transition end event listener
	 * @return
	 */
	var whichTransitionEvent = exports.whichTransitionEvent = function whichTransitionEvent() {
	  var t,
	      el = document.createElement('fakeelement');

	  var transitions = {
	    'transition': 'transitionend',
	    'OTransition': 'oTransitionEnd',
	    'MozTransition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd'
	  };

	  for (t in transitions) {
	    if (el.style[t] !== undefined) {
	      return transitions[t];
	    }
	  }
	};

	/**
	 * CSS animation end event listener
	 * @return
	 */
	var whichAnimationEvent = exports.whichAnimationEvent = function whichAnimationEvent() {
	  var t,
	      el = document.createElement('fakeelement');

	  var animations = {
	    'animation': 'animationend',
	    'OAnimation': 'oAnimationEnd',
	    'MozAnimation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd'
	  };

	  for (t in animations) {
	    if (el.style[t] !== undefined) {
	      return animations[t];
	    }
	  }
	};

	/**
	 *  Get the ancestors of each element in the current set of matched elements,
	 *  up to but not including the element matched by the selector
	 * @param  {NodeElement} elem     Element to begin search from
	 * @param  {NodeElement} parent   Parent to find
	 * @param  {String} selector Class to find
	 * @return {Array}          Array of parent elements
	 */
	var getParentsUntil = exports.getParentsUntil = function getParentsUntil(elem, parent, selector) {
	  var parents = [];
	  // Get matches
	  for (; elem && elem !== document; elem = elem.parentNode) {

	    // Check if parent has been reached
	    if (parent) {

	      var parentType = parent.charAt(0);

	      // If parent is a class
	      if (parentType === '.') {
	        if (elem.classList.contains(parent.substr(1))) {
	          break;
	        }
	      }

	      // If parent is an ID
	      if (parentType === '#') {
	        if (elem.id === parent.substr(1)) {
	          break;
	        }
	      }

	      // If parent is a data attribute
	      if (parentType === '[') {
	        if (elem.hasAttribute(parent.substr(1, parent.length - 1))) {
	          break;
	        }
	      }

	      // If parent is a tag
	      if (elem.tagName.toLowerCase() === parent) {
	        break;
	      }
	    }
	    if (selector) {
	      var selectorType = selector.charAt(0);

	      // If selector is a class
	      if (selectorType === '.') {
	        if (elem.classList.contains(selector.substr(1))) {
	          parents.push(elem);
	        }
	      }

	      // If selector is an ID
	      if (selectorType === '#') {
	        if (elem.id === selector.substr(1)) {
	          parents.push(elem);
	        }
	      }

	      // If selector is a data attribute
	      if (selectorType === '[') {
	        if (elem.hasAttribute(selector.substr(1, selector.length - 1))) {
	          parents.push(elem);
	        }
	      }

	      // If selector is a tag
	      if (elem.tagName.toLowerCase() === selector) {
	        parents.push(elem);
	      }
	    } else {
	      parents.push(elem);
	    }
	  }

	  // Return parents if any exist
	  if (parents.length === 0) {
	    return null;
	  } else {
	    return parents;
	  }
	};

	var wrap = exports.wrap = function wrap(element, wrapper) {
	  wrapper = wrapper || document.createElement('div');
	  if (element.nextSibling) {
	    element.parentNode.insertBefore(wrapper, element.nextSibling);
	  } else {
	    element.parentNode.appendChild(wrapper);
	  }
	  return wrapper.appendChild(element);
	};

	var getSiblings = exports.getSiblings = function getSiblings(elem) {
	  var siblings = [];
	  var sibling = elem.parentNode.firstChild;
	  for (; sibling; sibling = sibling.nextSibling) {
	    if (sibling.nodeType === 1 && sibling !== elem) {
	      siblings.push(sibling);
	    }
	  }
	  return siblings;
	};

	/**
	 * Find ancestor in DOM tree
	 * @param  {NodeElement} el  Element to start search from
	 * @param  {[type]} cls Class of parent
	 * @return {NodeElement}     Found parent element
	 */
	var findAncestor = exports.findAncestor = function findAncestor(el, cls) {
	  while ((el = el.parentElement) && !el.classList.contains(cls)) {}
	  return el;
	};

	/**
	 * Find ancestor in DOM tree by attribute name
	 * @param  {NodeElement} el  Element to start search from
	 * @param  {string} attr Attribute name of parent
	 * @return {?NodeElement}     Found parent element or null
	 */
	var findAncestorByAttrName = exports.findAncestorByAttrName = function findAncestorByAttrName(el, attr) {
	  var target = el;

	  while (target) {
	    if (target.hasAttribute(attr)) {
	      return target;
	    }

	    target = target.parentElement;
	  }

	  return null;
	};

	/**
	 * Debounce an event handler.
	 * @param  {Function} func      Function to run after wait
	 * @param  {Number} wait      The delay before the function is executed
	 * @param  {Boolean} immediate  If  passed, trigger the function on the leading edge, instead of the trailing.
	 * @return {Function}           A function will be called after it stops being called for a given delay
	 */
	var debounce = exports.debounce = function debounce(func, wait, immediate) {
	  var timeout;
	  return function () {
	    var context = this,
	        args = arguments;
	    var later = function later() {
	      timeout = null;
	      if (!immediate) func.apply(context, args);
	    };
	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) func.apply(context, args);
	  };
	};

	/**
	 * Get an element's distance from the top of the page
	 * @private
	 * @param  {NodeElement} el Element to test for
	 * @return {Number} Elements Distance from top of page
	 */
	var getElemDistance = exports.getElemDistance = function getElemDistance(el) {
	  var location = 0;
	  if (el.offsetParent) {
	    do {
	      location += el.offsetTop;
	      el = el.offsetParent;
	    } while (el);
	  }
	  return location >= 0 ? location : 0;
	};

	/**
	 * Determine element height multiplied by any offsets
	 * @private
	 * @param  {HTMLElement} el Element to test for
	 * @return {Number}    Height of element
	 */
	var getElementOffset = exports.getElementOffset = function getElementOffset(el, offset) {
	  var elOffset = offset;
	  if (elOffset > 1) elOffset = 1;
	  if (elOffset > 0) elOffset = 0;

	  return Math.max(el.offsetHeight * elOffset);
	};

	/**
	 * Get the next or previous element from a given start point
	 * @param  {HTMLElement} startEl    Element to start position from
	 * @param  {String}      className  The class we will look through
	 * @param  {Number}      direction  Positive next element, negative previous element
	 * @return {[HTMLElement}           Found element
	 */
	var getAdjacentEl = exports.getAdjacentEl = function getAdjacentEl(startEl, className) {
	  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	  if (!startEl || !className) return;

	  var parent = startEl.parentNode.parentNode;
	  var children = Array.from(parent.querySelectorAll(className));

	  var startPos = children.indexOf(startEl);
	  var operatorDirection = direction > 0 ? 1 : -1;

	  return children[startPos + operatorDirection];
	};

	/**
	 * Get scroll position based on top/bottom position
	 * @private
	 * @return {String} Position of scroll
	 */
	var getScrollPosition = exports.getScrollPosition = function getScrollPosition(position) {
	  if (position === 'bottom') {
	    // Scroll position from the bottom of the viewport
	    return Math.max((window.scrollY || window.pageYOffset) + (window.innerHeight || document.documentElement.clientHeight));
	  } else {
	    // Scroll position from the top of the viewport
	    return window.scrollY || window.pageYOffset;
	  }
	};

	/**
	 * Determine whether an element is within the viewport
	 * @param  {HTMLElement}  el Element to test
	 * @return {String} Position of scroll
	 * @return {Boolean}
	 */
	var isInView = exports.isInView = function isInView(el, position, offset) {
	  // If the user has scrolled further than the distance from the element to the top of its parent
	  return this.getScrollPosition(position) > this.getElemDistance(el) + this.getElementOffset(el, offset) ? true : false;
	};

	/**
	 * Determine whether an element is within
	 * @param  {HTMLElement} el        Element to test
	 * @param  {HTMLElement} parent    Scrolling parent
	 * @param  {Number} direction      Whether element is visible from above or below
	 * @return {Boolean}
	 */
	var isScrolledIntoView = exports.isScrolledIntoView = function isScrolledIntoView(el, parent) {
	  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	  if (!el) return;

	  var isVisible = void 0;

	  if (direction > 0) {
	    // In view from bottom
	    isVisible = parent.scrollTop + parent.offsetHeight >= el.offsetTop + el.offsetHeight;
	  } else {
	    // In view from top
	    isVisible = el.offsetTop >= parent.scrollTop;
	  }

	  return isVisible;
	};

	/**
	 * Escape html in a string
	 * @param  {String} html  Initial string/html
	 * @return {String}  Sanitised string
	 */
	var stripHTML = exports.stripHTML = function stripHTML(html) {
	  return html.replace(/&/g, '&amp;').replace(/>/g, '&rt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
	};

	/**
	 * Adds animation to an element and removes it upon animation completion
	 * @param  {Element} el        Element to add animation to
	 * @param  {String} animation Animation class to add to element
	 * @return
	 */
	var addAnimation = exports.addAnimation = function addAnimation(el, animation) {
	  var animationEvent = whichAnimationEvent();

	  var removeAnimation = function removeAnimation() {
	    el.classList.remove(animation);
	    el.removeEventListener(animationEvent, removeAnimation, false);
	  };

	  el.classList.add(animation);
	  el.addEventListener(animationEvent, removeAnimation, false);
	};

	/**
	 * Get a random number between a range
	 * @param  {Number} min Minimum range
	 * @param  {Number} max Maximum range
	 * @return {Number}     Random number
	 */
	var getRandomNumber = exports.getRandomNumber = function getRandomNumber(min, max) {
	  return Math.floor(Math.random() * (max - min) + min);
	};

	/**
	 * Turn a string into a node
	 * @param  {String} String to convert
	 * @return {HTMLElement}   Converted node element
	 */
	var strToEl = exports.strToEl = function () {
	  var tmpEl = document.createElement('div');
	  return function (str) {
	    var cleanedInput = str.trim();
	    var r = void 0;
	    tmpEl.innerHTML = cleanedInput;
	    r = tmpEl.children[0];

	    while (tmpEl.firstChild) {
	      tmpEl.removeChild(tmpEl.firstChild);
	    }

	    return r;
	  };
	}();

	/**
	 * Sets the width of a passed input based on its value
	 * @return {Number} Width of input
	 */
	var getWidthOfInput = exports.getWidthOfInput = function getWidthOfInput(input) {
	  var value = input.value || input.placeholder;
	  var width = input.offsetWidth;

	  if (value) {
	    var testEl = strToEl('<span>' + stripHTML(value) + '</span>');
	    testEl.style.position = 'absolute';
	    testEl.style.padding = '0';
	    testEl.style.top = '-9999px';
	    testEl.style.left = '-9999px';
	    testEl.style.width = 'auto';
	    testEl.style.whiteSpace = 'pre';

	    if (document.body.contains(input) && window.getComputedStyle) {
	      var inputStyle = window.getComputedStyle(input);

	      if (inputStyle) {
	        testEl.style.fontSize = inputStyle.fontSize;
	        testEl.style.fontFamily = inputStyle.fontFamily;
	        testEl.style.fontWeight = inputStyle.fontWeight;
	        testEl.style.fontStyle = inputStyle.fontStyle;
	        testEl.style.letterSpacing = inputStyle.letterSpacing;
	        testEl.style.textTransform = inputStyle.textTransform;
	        testEl.style.padding = inputStyle.padding;
	      }
	    }

	    document.body.appendChild(testEl);

	    if (value && testEl.offsetWidth !== input.offsetWidth) {
	      width = testEl.offsetWidth + 4;
	    }

	    document.body.removeChild(testEl);
	  }

	  return width + 'px';
	};

	/**
	 * Sorting function for current and previous string
	 * @param  {String} a Current value
	 * @param  {String} b Next value
	 * @return {Number}   -1 for after previous,
	 *                    1 for before,
	 *                    0 for same location
	 */
	var sortByAlpha = exports.sortByAlpha = function sortByAlpha(a, b) {
	  var labelA = (a.label || a.value).toLowerCase();
	  var labelB = (b.label || b.value).toLowerCase();

	  if (labelA < labelB) return -1;
	  if (labelA > labelB) return 1;
	  return 0;
	};

	/**
	 * Sort by numeric score
	 * @param  {Object} a Current value
	 * @param  {Object} b Next value
	 * @return {Number}   -1 for after previous,
	 *                    1 for before,
	 *                    0 for same location
	 */
	var sortByScore = exports.sortByScore = function sortByScore(a, b) {
	  return a.score - b.score;
	};

	/**
	 * Trigger native event
	 * @param  {NodeElement} element Element to trigger event on
	 * @param  {String} type         Type of event to trigger
	 * @param  {Object} customArgs   Data to pass with event
	 * @return {Object}              Triggered event
	 */
	var triggerEvent = exports.triggerEvent = function triggerEvent(element, type) {
	  var customArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  var event = new CustomEvent(type, {
	    detail: customArgs,
	    bubbles: true,
	    cancelable: true
	  });

	  return element.dispatchEvent(event);
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';

	/* eslint-disable */
	(function () {
	  // Production steps of ECMA-262, Edition 6, 22.1.2.1
	  // Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
	  if (!Array.from) {
	    Array.from = function () {
	      var toStr = Object.prototype.toString;

	      var isCallable = function isCallable(fn) {
	        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
	      };

	      var toInteger = function toInteger(value) {
	        var number = Number(value);
	        if (isNaN(number)) {
	          return 0;
	        }
	        if (number === 0 || !isFinite(number)) {
	          return number;
	        }
	        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
	      };

	      var maxSafeInteger = Math.pow(2, 53) - 1;

	      var toLength = function toLength(value) {
	        var len = toInteger(value);
	        return Math.min(Math.max(len, 0), maxSafeInteger);
	      };

	      // The length property of the from method is 1.
	      return function from(arrayLike /*, mapFn, thisArg */) {
	        // 1. Let C be the this value.
	        var C = this;

	        // 2. Let items be ToObject(arrayLike).
	        var items = Object(arrayLike);

	        // 3. ReturnIfAbrupt(items).
	        if (arrayLike == null) {
	          throw new TypeError("Array.from requires an array-like object - not null or undefined");
	        }

	        // 4. If mapfn is undefined, then let mapping be false.
	        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
	        var T;
	        if (typeof mapFn !== 'undefined') {
	          // 5. else
	          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
	          if (!isCallable(mapFn)) {
	            throw new TypeError('Array.from: when provided, the second argument must be a function');
	          }

	          // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
	          if (arguments.length > 2) {
	            T = arguments[2];
	          }
	        }

	        // 10. Let lenValue be Get(items, "length").
	        // 11. Let len be ToLength(lenValue).
	        var len = toLength(items.length);

	        // 13. If IsConstructor(C) is true, then
	        // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
	        // 14. a. Else, Let A be ArrayCreate(len).
	        var A = isCallable(C) ? Object(new C(len)) : new Array(len);

	        // 16. Let k be 0.
	        var k = 0;
	        // 17. Repeat, while k < len… (also steps a - h)
	        var kValue;
	        while (k < len) {
	          kValue = items[k];
	          if (mapFn) {
	            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
	          } else {
	            A[k] = kValue;
	          }
	          k += 1;
	        }
	        // 18. Let putStatus be Put(A, "length", len, true).
	        A.length = len;
	        // 20. Return A.
	        return A;
	      };
	    }();
	  }

	  // Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	  if (!Array.prototype.find) {
	    Array.prototype.find = function (predicate) {
	      'use strict';

	      if (this == null) {
	        throw new TypeError('Array.prototype.find called on null or undefined');
	      }
	      if (typeof predicate !== 'function') {
	        throw new TypeError('predicate must be a function');
	      }
	      var list = Object(this);
	      var length = list.length >>> 0;
	      var thisArg = arguments[1];
	      var value;

	      for (var i = 0; i < length; i++) {
	        value = list[i];
	        if (predicate.call(thisArg, value, i, list)) {
	          return value;
	        }
	      }
	      return undefined;
	    };
	  }

	  function CustomEvent(event, params) {
	    params = params || {
	      bubbles: false,
	      cancelable: false,
	      detail: undefined
	    };
	    var evt = document.createEvent('CustomEvent');
	    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	    return evt;
	  }

	  CustomEvent.prototype = window.Event.prototype;

	  window.CustomEvent = CustomEvent;
	})();

/***/ })
/******/ ])
});


});

var Choices = unwrapExports(choices);

/* src\core\ui\inputs\MultiSelect.html generated by Svelte v1.64.1 */
function mapToTypeaheadItems$1(items) {
	return items.map(t => {
		return {
			label: t.label,
			value: t.value.toString()
		};
	});
}

function setFieldValue(field, value) {
	if (field.maxItemCount == 1) {
		field.value = {
			value: value[0] != null ? value[0].value : null
		};

		// We need to convert the value to string, otherwise it doesn't work.
		// This is due to the way UmfApp deals with url parameters (or something
		// along those lines).
		if (field.value.value != null) {
			field.value.value = field.value.value.toString();
		}
	}
	else {
		field.value = {
			items: value.map(t => t.value)
		};
	}
}

function setInputValue(a, field) {
	if (field.maxItemCount == 1) {
		let v = (field.value || {}).value || null;
		if (v != null) {
			a.setValueByChoice(v.toString());
		}
	}
	else {
		let v = ((field.value || {}).items || []).map(t => t.toString());
		a.setValueByChoice(v);
	}
}

function getIdsQuery(field) {
	var currentValue = field.maxItemCount == 1
		? [(field.value || {}).value || ""]
		: (field.value || {}).items || [];

	// Put values into an array.
	if (currentValue[0] === "") {
		currentValue = [];
	}

	return currentValue;
}

function buildFilter$1(parentForm, parameters, query) {
	var promise;

	var filter = { query: query };
	if (parameters != null && parameters.length > 0) {
		promise = parentForm.get("form").getSerializedInputValues().then(data => {
			for (let p of parameters) {
				filter[p] = data[p];
			}

			return filter;
		});
	}
	else {
		promise = Promise.resolve(filter);
	}

	return promise;
}

function populateChoicesWithAjax(choicesComponent, multiSelectComponent, existingChoices, query, selectedItemIds) {
	var componentData = multiSelectComponent.get();
	var parameters = componentData.field.metadata.customProperties.parameters;
	var source = componentData.field.metadata.customProperties.source;
	var parentForm = componentData.form;
	var app = componentData.app;

	return new Promise((resolve, reject) => {
		choicesComponent.ajax(callback => {
			return buildFilter$1(parentForm, parameters, query).then(filter => {
				if (selectedItemIds != null) {
					filter.ids = { items: selectedItemIds };
				}

				return app.server.postForm(source, filter).then(data => {
					// Mark items as added as "choices".
					var toAdd = data.items.filter(t => {
						var key = JSON.stringify(t.value);
						if (existingChoices[key] == null) {
							existingChoices[key] = true;

							// Add item.
							return true;
						}

						// Don't add item.
						return false;
					});

					callback(mapToTypeaheadItems$1(toAdd), "value", "label");

					resolve();
				});
			});
		});
	});
}

var methods$5 = {
	onChange() {
		this.get("form").fireAndBubbleUp('input:changed', {
			app: this.get('app'),
			form: this.get('form'),
			input: this
		});
	}
};

function oncreate$11() {
	var field = this.get("field");
	var source = field.metadata.customProperties.source;
	var parameters = field.metadata.customProperties.parameters;
	var app = this.get("app");
	var parentForm = this.get("form");
	var a = new Choices(this.refs.input, {
		duplicateItems: true,
		searchResultLimit: 10,
		removeItemButton: true,
		maxItemCount: field.maxItemCount,
		noChoicesText: "Please start typing to search..."
	});

	var formElement = this.refs.input.closest("form");
	var self = this;
	formElement.addEventListener("submit", function (e) {
		if (typeof field.value.value == 'undefined' && field.metadata.required) {
			self.refs.input.parentElement.classList.add("divError");
		}
	});

	if (typeof (source) === "string") {
		var addedItems = {};
		var query = "";
		var timer = null;

		a.passedElement.addEventListener("search", function (value) {
			query = value.detail.value;

			if (timer != null) {
				// Cancel previous timer, thus extending the delay until user has stopped typing.
				clearTimeout(timer);
			}

			// Search when user types something, but introduce a short delay
			// to avoid excessive http requests.
			timer = setTimeout(function () {
				populateChoicesWithAjax(a, self, addedItems, query);
			}, 300);
		});

		var currentValue = getIdsQuery(field);
		populateChoicesWithAjax(a, self, addedItems, "");

		// If the field has a value, we need to load it.
		if (currentValue.length > 0) {
			populateChoicesWithAjax(a, self, addedItems, query, currentValue)
				.then(() => setInputValue(a, field));
		}
	}
	else {
		a.setChoices(mapToTypeaheadItems$1(source), "value", "label", true);

		var initialized = false;
		this.observe("field", (newValue, oldValue) => {
			if (!initialized) {
				initialized = true;
				setInputValue(a, field);
			}
		});
	}

	a.passedElement.addEventListener("change", function (e) {
		setFieldValue(field, a.getValue());
	});
}

function create_main_fragment$15(component, state) {
	var select;

	function change_handler(event) {
		component.onChange();
	}

	return {
		c: function create() {
			select = createElement("select");
			this.h();
		},

		h: function hydrate() {
			addListener$1(select, "change", change_handler);
			select.className = "multi-select form-control";
			select.id = state.id;
			select.tabIndex = state.tabindex;
			select.multiple = true;
		},

		m: function mount(target, anchor) {
			insertNode(select, target, anchor);
			component.refs.input = select;
		},

		p: function update(changed, state) {
			if (changed.id) {
				select.id = state.id;
			}

			if (changed.tabindex) {
				select.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(select);
		},

		d: function destroy$$1() {
			removeListener$1(select, "change", change_handler);
			if (component.refs.input === select) component.refs.input = null;
		}
	};
}

function SvelteComponent$15(options) {
	init(this, options);
	this.refs = {};
	this._state = assign({}, options.data);

	var self = this;
	var _oncreate = function() {
		var changed = { id: 1, tabindex: 1 };
		oncreate$11.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$15(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$15.prototype, proto);
assign(SvelteComponent$15.prototype, methods$5);

/* src\core\ui\inputs\Number.html generated by Svelte v1.64.1 */
function oncreate$12() {
	var field = this.get("field");
	var numberConfig = field.metadata.customProperties != null &&
		field.metadata.customProperties["numberConfig"] != null
		? field.metadata.customProperties["numberConfig"]
		: {
			minValue: null,
			maxValue: null,
			step: 1
		};
	this.set({
		numberConfig: numberConfig
	});
}

function create_main_fragment$16(component, state) {
	var if_block_anchor;

	var if_block = (state.numberConfig != null) && create_if_block$12(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.numberConfig != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$12(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if numberConfig != null}}
function create_if_block$12(component, state) {
	var input, input_updating = false, input_required_value, input_step_value, input_min_value, input_max_value;

	function input_input_handler() {
		var state = component.get();
		input_updating = true;
		state.field.value = toNumber(input.value);
		component.set({ field: state.field });
		input_updating = false;
	}

	return {
		c: function create() {
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "input", input_input_handler);
			setAttribute(input, "type", "number");
			input.id = state.id;
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			input.className = "form-control";
			input.step = input_step_value = state.numberConfig.step;
			input.min = input_min_value = state.numberConfig.minValue;
			input.max = input_max_value = state.numberConfig.maxValue;
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.value = state.field.value;
		},

		p: function update(changed, state) {
			if (!input_updating) input.value = state.field.value;
			if (changed.id) {
				input.id = state.id;
			}

			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}

			if ((changed.numberConfig) && input_step_value !== (input_step_value = state.numberConfig.step)) {
				input.step = input_step_value;
			}

			if ((changed.numberConfig) && input_min_value !== (input_min_value = state.numberConfig.minValue)) {
				input.min = input_min_value;
			}

			if ((changed.numberConfig) && input_max_value !== (input_max_value = state.numberConfig.maxValue)) {
				input.max = input_max_value;
			}
		},

		u: function unmount() {
			detachNode(input);
		},

		d: function destroy$$1() {
			removeListener$1(input, "input", input_input_handler);
		}
	};
}

function SvelteComponent$16(options) {
	init(this, options);
	this._state = assign({}, options.data);

	var self = this;
	var _oncreate = function() {
		var changed = { numberConfig: 1, id: 1, field: 1, tabindex: 1 };
		oncreate$12.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$16(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$16.prototype, proto);

/* src\core\ui\inputs\NumberRange.html generated by Svelte v1.64.1 */
function oncreate$13() {
	const field = this.get("field");

	if (field == null) {
		return;
	}

	const numberConfig = (field.metadata.customProperties || {}).numberConfig || {
		minValue: null,
		maxValue: null,
		step: 1
	};

	this.set({
		numberConfig
	});
}

function add_css$7() {
	var style = createElement("style");
	style.id = 'svelte-14oq3r5-style';
	style.textContent = ".svelte-14oq3r5.input-group-addon,.svelte-14oq3r5 .input-group-addon{font-size:0.8rem !important}";
	appendNode(style, document.head);
}

function create_main_fragment$17(component, state) {
	var if_block_anchor;

	var if_block = (state.numberConfig != null) && create_if_block$13(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.numberConfig != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$13(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if numberConfig != null}}
function create_if_block$13(component, state) {
	var div, span, text_1, input, input_updating = false, input_required_value, input_step_value, input_min_value, input_max_value, text_2, span_1, text_4, input_1, input_1_updating = false, input_1_required_value, input_1_step_value, input_1_min_value, input_1_max_value;

	function input_input_handler() {
		var state = component.get();
		input_updating = true;
		state.field.value.min = toNumber(input.value);
		component.set({ field: state.field });
		input_updating = false;
	}

	function input_1_input_handler() {
		var state = component.get();
		input_1_updating = true;
		state.field.value.max = toNumber(input_1.value);
		component.set({ field: state.field });
		input_1_updating = false;
	}

	return {
		c: function create() {
			div = createElement("div");
			span = createElement("span");
			span.textContent = "Min";
			text_1 = createText("\r\n\t");
			input = createElement("input");
			text_2 = createText("\r\n\r\n    ");
			span_1 = createElement("span");
			span_1.textContent = "Max";
			text_4 = createText("\r\n\t");
			input_1 = createElement("input");
			this.h();
		},

		h: function hydrate() {
			span.className = "input-group-addon";
			addListener$1(input, "input", input_input_handler);
			setAttribute(input, "type", "number");
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			input.autocomplete = "off";
			input.className = "form-control";
			input.step = input_step_value = state.numberConfig.step;
			input.min = input_min_value = state.numberConfig.minValue;
			input.max = input_max_value = state.numberConfig.maxValue;
			span_1.className = "input-group-addon";
			addListener$1(input_1, "input", input_1_input_handler);
			setAttribute(input_1, "type", "number");
			input_1.required = input_1_required_value = state.field.metadata.required;
			input_1.tabIndex = state.tabindex;
			input_1.autocomplete = "off";
			input_1.className = "form-control";
			input_1.step = input_1_step_value = state.numberConfig.step;
			input_1.min = input_1_min_value = state.numberConfig.minValue;
			input_1.max = input_1_max_value = state.numberConfig.maxValue;
			div.className = "input-group svelte-14oq3r5";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(span, div);
			appendNode(text_1, div);
			appendNode(input, div);

			input.value = state.field.value.min;

			appendNode(text_2, div);
			appendNode(span_1, div);
			appendNode(text_4, div);
			appendNode(input_1, div);

			input_1.value = state.field.value.max;
		},

		p: function update(changed, state) {
			if (!input_updating) input.value = state.field.value.min;
			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}

			if ((changed.numberConfig) && input_step_value !== (input_step_value = state.numberConfig.step)) {
				input.step = input_step_value;
			}

			if ((changed.numberConfig) && input_min_value !== (input_min_value = state.numberConfig.minValue)) {
				input.min = input_min_value;
			}

			if ((changed.numberConfig) && input_max_value !== (input_max_value = state.numberConfig.maxValue)) {
				input.max = input_max_value;
			}

			if (!input_1_updating) input_1.value = state.field.value.max;
			if ((changed.field) && input_1_required_value !== (input_1_required_value = state.field.metadata.required)) {
				input_1.required = input_1_required_value;
			}

			if (changed.tabindex) {
				input_1.tabIndex = state.tabindex;
			}

			if ((changed.numberConfig) && input_1_step_value !== (input_1_step_value = state.numberConfig.step)) {
				input_1.step = input_1_step_value;
			}

			if ((changed.numberConfig) && input_1_min_value !== (input_1_min_value = state.numberConfig.minValue)) {
				input_1.min = input_1_min_value;
			}

			if ((changed.numberConfig) && input_1_max_value !== (input_1_max_value = state.numberConfig.maxValue)) {
				input_1.max = input_1_max_value;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: function destroy$$1() {
			removeListener$1(input, "input", input_input_handler);
			removeListener$1(input_1, "input", input_1_input_handler);
		}
	};
}

function SvelteComponent$17(options) {
	init(this, options);
	this._state = assign({}, options.data);

	if (!document.getElementById("svelte-14oq3r5-style")) add_css$7();

	var self = this;
	var _oncreate = function() {
		var changed = { numberConfig: 1, field: 1, tabindex: 1 };
		oncreate$13.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$17(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$17.prototype, proto);

/* src\core\ui\inputs\Password.html generated by Svelte v1.64.1 */
var methods$6 = {
	onChange(confirmPassword) {
		if (this.get("field").selected !== confirmPassword.value) {
			confirmPassword
				.setCustomValidity("Passwords do not match. Please make sure they are exactly the same.");
		} else {
			confirmPassword.setCustomValidity("");
		}
	}
};

function oncreate$14() {
	const field = this.get("field");
	const config = (field.metadata.customProperties || {}).passwordInputConfig;

	this.set({
		passwordConfig: config || {
			regex: null,
			requireConfirmation: null
		}
	});
}

function add_css$8() {
	var style = createElement("style");
	style.id = 'svelte-1w6jzex-style';
	style.textContent = "span.svelte-1w6jzex,.svelte-1w6jzex span{color:#9a9a9a;font-size:13px;margin-bottom:5px;display:block}.svelte-1w6jzex.confirmation-password,.svelte-1w6jzex .confirmation-password{padding-top:10px}";
	appendNode(style, document.head);
}

function create_main_fragment$18(component, state) {
	var if_block_anchor;

	var if_block = (state.passwordConfig != null) && create_if_block$14(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.passwordConfig != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$14(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (2:4) {{#if passwordConfig.regex}}
function create_if_block_1$8(component, state) {
	var span, text_value = state.passwordConfig.regexDescription, text, text_1, input, input_updating = false, input_pattern_value, input_required_value;

	function input_input_handler() {
		var state = component.get();
		input_updating = true;
		state.field.selected = input.value;
		component.set({ field: state.field });
		input_updating = false;
	}

	return {
		c: function create() {
			span = createElement("span");
			text = createText(text_value);
			text_1 = createText("\r\n\t\t");
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			span.className = "svelte-1w6jzex";
			addListener$1(input, "input", input_input_handler);
			setAttribute(input, "type", "password");
			input.id = state.id;
			input.pattern = input_pattern_value = state.passwordConfig.regex;
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			input.className = "form-control svelte-1w6jzex";
		},

		m: function mount(target, anchor) {
			insertNode(span, target, anchor);
			appendNode(text, span);
			insertNode(text_1, target, anchor);
			insertNode(input, target, anchor);

			input.value = state.field.selected;
		},

		p: function update(changed, state) {
			if ((changed.passwordConfig) && text_value !== (text_value = state.passwordConfig.regexDescription)) {
				text.data = text_value;
			}

			if (!input_updating) input.value = state.field.selected;
			if (changed.id) {
				input.id = state.id;
			}

			if ((changed.passwordConfig) && input_pattern_value !== (input_pattern_value = state.passwordConfig.regex)) {
				input.pattern = input_pattern_value;
			}

			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(span);
			detachNode(text_1);
			detachNode(input);
		},

		d: function destroy$$1() {
			removeListener$1(input, "input", input_input_handler);
		}
	};
}

// (11:4) {{else}}
function create_if_block_2$6(component, state) {
	var input, input_updating = false, input_required_value;

	function input_input_handler() {
		var state = component.get();
		input_updating = true;
		state.field.selected = input.value;
		component.set({ field: state.field });
		input_updating = false;
	}

	return {
		c: function create() {
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "input", input_input_handler);
			setAttribute(input, "type", "password");
			input.id = state.id;
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			input.className = "form-control svelte-1w6jzex";
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.value = state.field.selected;
		},

		p: function update(changed, state) {
			if (!input_updating) input.value = state.field.selected;
			if (changed.id) {
				input.id = state.id;
			}

			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(input);
		},

		d: function destroy$$1() {
			removeListener$1(input, "input", input_input_handler);
		}
	};
}

// (19:4) {{#if passwordConfig.requireConfirmation}}
function create_if_block_3$4(component, state) {
	var div, input, input_required_value, input_tabindex_value;

	function change_handler(event) {
		component.onChange(input);
	}

	return {
		c: function create() {
			div = createElement("div");
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "change", change_handler);
			input.placeholder = "Please confirm the password by entering it one more time.";
			setAttribute(input, "type", "password");
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = input_tabindex_value = state.tabindex + 1;
			input.className = "form-control";
			div.className = "confirmation-password svelte-1w6jzex";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(input, div);
		},

		p: function update(changed, state) {
			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if ((changed.tabindex) && input_tabindex_value !== (input_tabindex_value = state.tabindex + 1)) {
				input.tabIndex = input_tabindex_value;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: function destroy$$1() {
			removeListener$1(input, "change", change_handler);
		}
	};
}

// (1:0) {{#if passwordConfig != null}}
function create_if_block$14(component, state) {
	var text, if_block_1_anchor;

	function select_block_type(state) {
		if (state.passwordConfig.regex) return create_if_block_1$8;
		return create_if_block_2$6;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	var if_block_1 = (state.passwordConfig.requireConfirmation) && create_if_block_3$4(component, state);

	return {
		c: function create() {
			if_block.c();
			text = createText("\r\n    ");
			if (if_block_1) if_block_1.c();
			if_block_1_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(text, target, anchor);
			if (if_block_1) if_block_1.m(target, anchor);
			insertNode(if_block_1_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(text.parentNode, text);
			}

			if (state.passwordConfig.requireConfirmation) {
				if (if_block_1) {
					if_block_1.p(changed, state);
				} else {
					if_block_1 = create_if_block_3$4(component, state);
					if_block_1.c();
					if_block_1.m(if_block_1_anchor.parentNode, if_block_1_anchor);
				}
			} else if (if_block_1) {
				if_block_1.u();
				if_block_1.d();
				if_block_1 = null;
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(text);
			if (if_block_1) if_block_1.u();
			detachNode(if_block_1_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
			if (if_block_1) if_block_1.d();
		}
	};
}

function SvelteComponent$18(options) {
	init(this, options);
	this._state = assign({}, options.data);

	if (!document.getElementById("svelte-1w6jzex-style")) add_css$8();

	var self = this;
	var _oncreate = function() {
		var changed = { passwordConfig: 1, id: 1, field: 1, tabindex: 1 };
		oncreate$14.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$18(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$18.prototype, proto);
assign(SvelteComponent$18.prototype, methods$6);

/* src\core\ui\inputs\Text.html generated by Svelte v1.64.1 */
function create_main_fragment$19(component, state) {
	var input, input_updating = false, input_required_value;

	function input_input_handler() {
		var state = component.get();
		input_updating = true;
		state.field.value = input.value;
		component.set({ field: state.field });
		input_updating = false;
	}

	return {
		c: function create() {
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "input", input_input_handler);
			setAttribute(input, "type", "text");
			input.id = state.id;
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			input.className = "form-control";
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.value = state.field.value;
		},

		p: function update(changed, state) {
			if (!input_updating) input.value = state.field.value;
			if (changed.id) {
				input.id = state.id;
			}

			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(input);
		},

		d: function destroy$$1() {
			removeListener$1(input, "input", input_input_handler);
		}
	};
}

function SvelteComponent$19(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$19(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$19.prototype, proto);

/* src\core\ui\inputs\Textarea.html generated by Svelte v1.64.1 */
function add_css$9() {
	var style = createElement("style");
	style.id = 'svelte-1aezpf0-style';
	style.textContent = "textarea.svelte-1aezpf0,.svelte-1aezpf0 textarea{width:100%;height:100px}";
	appendNode(style, document.head);
}

function create_main_fragment$20(component, state) {
	var textarea, textarea_updating = false, textarea_required_value;

	function textarea_input_handler() {
		var state = component.get();
		textarea_updating = true;
		state.field.selected = textarea.value;
		component.set({ field: state.field });
		textarea_updating = false;
	}

	return {
		c: function create() {
			textarea = createElement("textarea");
			this.h();
		},

		h: function hydrate() {
			addListener$1(textarea, "input", textarea_input_handler);
			textarea.id = state.id;
			textarea.required = textarea_required_value = state.field.metadata.required;
			textarea.tabIndex = state.tabindex;
			textarea.className = "form-control svelte-1aezpf0";
			textarea.value = "\r\n";
		},

		m: function mount(target, anchor) {
			insertNode(textarea, target, anchor);

			textarea.value = state.field.selected;
		},

		p: function update(changed, state) {
			if (!textarea_updating) textarea.value = state.field.selected;
			if (changed.id) {
				textarea.id = state.id;
			}

			if ((changed.field) && textarea_required_value !== (textarea_required_value = state.field.metadata.required)) {
				textarea.required = textarea_required_value;
			}

			if (changed.tabindex) {
				textarea.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(textarea);
		},

		d: function destroy$$1() {
			removeListener$1(textarea, "input", textarea_input_handler);
		}
	};
}

function SvelteComponent$20(options) {
	init(this, options);
	this._state = assign({}, options.data);

	if (!document.getElementById("svelte-1aezpf0-style")) add_css$9();

	this._fragment = create_main_fragment$20(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$20.prototype, proto);

/**
 * Represents an event triggered by an action-list.
 */
var ActionListEventArguments = (function (_super) {
    __extends(ActionListEventArguments, _super);
    function ActionListEventArguments(app, actionFormId) {
        var _this = _super.call(this, app) || this;
        _this.actionFormId = actionFormId;
        return _this;
    }
    return ActionListEventArguments;
}(FormEventArguments));

/* src\core\ui\outputs\ActionList.html generated by Svelte v1.64.1 */
var alertify$3 = alertify$1;

var modalId = 0;
var modals = [];

// https://stackoverflow.com/a/3369743/111438
// Close topmost modal when user presses escape key.
document.addEventListener("keydown", function (evt) {
	evt = evt || window.event;
	var isEscape = false;
	if ("key" in evt) {
		isEscape = (evt.key == "Escape" || evt.key == "Esc");
	} else {
		isEscape = (evt.keyCode == 27);
	}
	if (isEscape) {
		if (modals.length > 0) {
			// Close topmost modal.
			modals[modals.length - 1].close();
		}
	}
});

function data$5() {
	modalId += 1;
	return {
		open: false,
		current: null,
		modalId: modalId
	}
}

var methods$7 = {
	async run(action, app) {
		var self = this;
		var formInstance = app.getFormInstance(action.form, true);

		// TODO: find a way to initialize from action.inputFieldValues directly.
		var serializedInputValues = formInstance.getSerializedInputValuesFromObject(action.inputFieldValues);
		await formInstance.initializeInputFields(serializedInputValues);

		var allRequiredInputsHaveData = await formInstance.allRequiredInputsHaveData(false);
		if (action.action === "run" && allRequiredInputsHaveData) {
			if (action.confirmationMessage) {
				alertify$3.confirm("Warning",
				action.confirmationMessage,
				async function(){
					var response = await formInstance.submit(self.get("app"), false);
					self.onActionRun(formInstance.metadata.id, response, action);
				   }, 
				  function(){ return;});

			} else {
				var response = await formInstance.submit(this.get("app"), false);
				this.onActionRun(formInstance.metadata.id, response, action);
			}
		}
		else {
			this.set({ open: true });

			var f = new SvelteComponent$4({
				target: this.refs.container,
				data: {
					metadata: formInstance.metadata,
					form: formInstance,
					app: app,
					useUrl: false
				}
			});

			f.init();

			var self = this;
			f.on("form:responseHandled", e => {
				if (e.invokedByUser && formInstance.metadata.closeOnPostIfModal) {
					self.close(e.response);
				}
			});

			this.set({ current: f });

			modals.push(self);
		}
	},
	close(response) {
		this.set({ open: false });

		// Destroy underlying form instance.
		var modalForm = this.get("current");

		if (response != null) {
			let formId = modalForm.get("metadata").id;
			this.onActionRun(formId, response);
		}

		modalForm.destroy();
		modals.pop();
	},
	async onActionRun(formId, response, action) {
		let parentForm = this.get("parent");
		let app = parentForm.get("app");
		let formInstance = parentForm.get("form");

		if (response.metadata.handler !== "redirect" &&
			response.metadata.handler !== "reload") {
			// If asked to redirect to another form, then we redirect
			// and do not reload parent form, as that would be a wasted effort.
			await parentForm.submit(null, true);
		}

		var eventArgs = new ActionListEventArguments(app, formId);
		parentForm.fireAndBubbleUp(`action-list:run`, eventArgs);
	}
};

function add_css$10() {
	var style = createElement("style");
	style.id = 'svelte-1kdm3za-style';
	style.textContent = ".svelte-1kdm3za.hidden,.svelte-1kdm3za .hidden{width:0;height:0;position:absolute;left:-1000px}.svelte-1kdm3za.actionlist,.svelte-1kdm3za .actionlist{margin:0 0;padding:0 5px;text-align:right;margin-bottom:15px}.svelte-1kdm3za.actionlist > li,.svelte-1kdm3za .actionlist > li{list-style-type:none;display:inline-block}";
	appendNode(style, document.head);
}

function create_main_fragment$21(component, state) {
	var if_block_anchor;

	var if_block = (state.field.data != null && state.field.data.actions != null && state.field.data.actions.length > 0) && create_if_block$15(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.field.data != null && state.field.data.actions != null && state.field.data.actions.length > 0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$15(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (3:1) {{#each field.data.actions as action}}
function create_each_block$5(component, state) {
	var action = state.action, each_value = state.each_value, action_index = state.action_index;
	var li;

	function select_block_type(state) {
		if (action.action !== "redirect") return create_if_block_1$9;
		return create_if_block_2$7;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			li = createElement("li");
			if_block.c();
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			if_block.m(li, null);
		},

		p: function update(changed, state) {
			action = state.action;
			each_value = state.each_value;
			action_index = state.action_index;
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(li, null);
			}
		},

		u: function unmount() {
			detachNode(li);
			if_block.u();
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (5:2) {{#if action.action !== "redirect"}}
function create_if_block_1$9(component, state) {
	var action = state.action, each_value = state.each_value, action_index = state.action_index;
	var button, raw_value = action.label, button_class_value;

	return {
		c: function create() {
			button = createElement("button");
			this.h();
		},

		h: function hydrate() {
			addListener$1(button, "click", click_handler$1);
			button.className = button_class_value = "btn btn-default " + action.cssClass;

			button._svelte = {
				component: component,
				each_value: state.each_value,
				action_index: state.action_index
			};
		},

		m: function mount(target, anchor) {
			insertNode(button, target, anchor);
			button.innerHTML = raw_value;
		},

		p: function update(changed, state) {
			action = state.action;
			each_value = state.each_value;
			action_index = state.action_index;
			if ((changed.field) && raw_value !== (raw_value = action.label)) {
				button.innerHTML = raw_value;
			}

			if ((changed.field) && button_class_value !== (button_class_value = "btn btn-default " + action.cssClass)) {
				button.className = button_class_value;
			}

			button._svelte.each_value = state.each_value;
			button._svelte.action_index = state.action_index;
		},

		u: function unmount() {
			button.innerHTML = '';

			detachNode(button);
		},

		d: function destroy$$1() {
			removeListener$1(button, "click", click_handler$1);
		}
	};
}

// (7:2) {{else }}
function create_if_block_2$7(component, state) {
	var action = state.action, each_value = state.each_value, action_index = state.action_index;
	var a, text_value = action.label, text, a_href_value, a_class_value;

	return {
		c: function create() {
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = state.app.makeUrl(action.form, action.inputFieldValues);
			a.className = a_class_value = "btn btn-default " + action.cssClass;
		},

		m: function mount(target, anchor) {
			insertNode(a, target, anchor);
			appendNode(text, a);
		},

		p: function update(changed, state) {
			action = state.action;
			each_value = state.each_value;
			action_index = state.action_index;
			if ((changed.field) && text_value !== (text_value = action.label)) {
				text.data = text_value;
			}

			if ((changed.app || changed.field) && a_href_value !== (a_href_value = state.app.makeUrl(action.form, action.inputFieldValues))) {
				a.href = a_href_value;
			}

			if ((changed.field) && a_class_value !== (a_class_value = "btn btn-default " + action.cssClass)) {
				a.className = a_class_value;
			}
		},

		u: function unmount() {
			detachNode(a);
		},

		d: noop$1
	};
}

// (1:0) {{#if field.data != null && field.data.actions != null && field.data.actions.length > 0}}
function create_if_block$15(component, state) {
	var ul, text, input, input_id_value, text_1, div, div_1, label, text_2, div_2;

	var each_value = state.field.data.actions;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$5(component, assign(assign({}, state), {
			each_value: each_value,
			action: each_value[i],
			action_index: i
		}));
	}

	function input_change_handler() {
		component.set({ open: input.checked });
	}

	function click_handler_1(event) {
		component.close();
	}

	return {
		c: function create() {
			ul = createElement("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text = createText("\r\n\r\n");
			input = createElement("input");
			text_1 = createText("\r\n");
			div = createElement("div");
			div_1 = createElement("div");
			label = createElement("label");
			text_2 = createText("\r\n\t\t");
			div_2 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			ul.className = "actionlist svelte-1kdm3za";
			addListener$1(input, "change", input_change_handler);
			input.id = input_id_value = "modal-" + state.modalId;
			setAttribute(input, "type", "checkbox");
			input.className = "hidden svelte-1kdm3za";
			addListener$1(label, "click", click_handler_1);
			label.className = "close";
			div_1.className = "card";
			div.className = "modal svelte-1kdm3za";
		},

		m: function mount(target, anchor) {
			insertNode(ul, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			insertNode(text, target, anchor);
			insertNode(input, target, anchor);

			input.checked = state.open;

			insertNode(text_1, target, anchor);
			insertNode(div, target, anchor);
			appendNode(div_1, div);
			appendNode(label, div_1);
			appendNode(text_2, div_1);
			appendNode(div_2, div_1);
			component.refs.container = div_2;
		},

		p: function update(changed, state) {
			var each_value = state.field.data.actions;

			if (changed.field || changed.app) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						action: each_value[i],
						action_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block$5(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}

			input.checked = state.open;
			if ((changed.modalId) && input_id_value !== (input_id_value = "modal-" + state.modalId)) {
				input.id = input_id_value;
			}
		},

		u: function unmount() {
			detachNode(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			detachNode(text);
			detachNode(input);
			detachNode(text_1);
			detachNode(div);
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);

			removeListener$1(input, "change", input_change_handler);
			removeListener$1(label, "click", click_handler_1);
			if (component.refs.container === div_2) component.refs.container = null;
		}
	};
}

function click_handler$1(event) {
	var component = this._svelte.component;
	var each_value = this._svelte.each_value, action_index = this._svelte.action_index, action = each_value[action_index];
	var state = component.get();
	component.run(action, state.app);
}

function SvelteComponent$21(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data$5(), options.data);

	if (!document.getElementById("svelte-1kdm3za-style")) add_css$10();

	this._fragment = create_main_fragment$21(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$21.prototype, proto);
assign(SvelteComponent$21.prototype, methods$7);

/* src\core\ui\outputs\Alert.html generated by Svelte v1.64.1 */
function add_css$11() {
	var style = createElement("style");
	style.id = 'svelte-16fvliq-style';
	style.textContent = ".svelte-16fvliq.alert,.svelte-16fvliq .alert{margin:5px 8px;padding:10px 15px;border:1px solid #bbb}.svelte-16fvliq.alert > .heading,.svelte-16fvliq .alert > .heading{font-weight:bold;font-size:16px}.svelte-16fvliq.alert.success,.svelte-16fvliq .alert.success{background:#ebfff8}.svelte-16fvliq.alert.warning,.svelte-16fvliq .alert.warning{background:#fdffeb}.svelte-16fvliq.alert.danger,.svelte-16fvliq .alert.danger{background:#ffeaea}";
	appendNode(style, document.head);
}

function create_main_fragment$22(component, state) {
	var if_block_anchor;

	var if_block = (state.field.data != null) && create_if_block$16(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.field.data != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$16(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (3:1) {{#if field.data.heading != null}}
function create_if_block_1$10(component, state) {
	var div, text_value = state.field.data.heading, text;

	return {
		c: function create() {
			div = createElement("div");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			div.className = "heading";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(text, div);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data.heading)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: noop$1
	};
}

// (7:1) {{#if field.data.message != null}}
function create_if_block_2$8(component, state) {
	var div, raw_value = state.field.data.message;

	return {
		c: function create() {
			div = createElement("div");
			this.h();
		},

		h: function hydrate() {
			div.className = "body";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			div.innerHTML = raw_value;
		},

		p: function update(changed, state) {
			if ((changed.field) && raw_value !== (raw_value = state.field.data.message)) {
				div.innerHTML = raw_value;
			}
		},

		u: function unmount() {
			div.innerHTML = '';

			detachNode(div);
		},

		d: noop$1
	};
}

// (1:0) {{#if field.data != null}}
function create_if_block$16(component, state) {
	var div, text, div_class_value;

	var if_block = (state.field.data.heading != null) && create_if_block_1$10(component, state);

	var if_block_1 = (state.field.data.message != null) && create_if_block_2$8(component, state);

	return {
		c: function create() {
			div = createElement("div");
			if (if_block) if_block.c();
			text = createText("\r\n\r\n\t");
			if (if_block_1) if_block_1.c();
			this.h();
		},

		h: function hydrate() {
			div.className = div_class_value = "alert " + state.field.data.style + " svelte-16fvliq";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			if (if_block) if_block.m(div, null);
			appendNode(text, div);
			if (if_block_1) if_block_1.m(div, null);
		},

		p: function update(changed, state) {
			if (state.field.data.heading != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_1$10(component, state);
					if_block.c();
					if_block.m(div, text);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			if (state.field.data.message != null) {
				if (if_block_1) {
					if_block_1.p(changed, state);
				} else {
					if_block_1 = create_if_block_2$8(component, state);
					if_block_1.c();
					if_block_1.m(div, null);
				}
			} else if (if_block_1) {
				if_block_1.u();
				if_block_1.d();
				if_block_1 = null;
			}

			if ((changed.field) && div_class_value !== (div_class_value = "alert " + state.field.data.style + " svelte-16fvliq")) {
				div.className = div_class_value;
			}
		},

		u: function unmount() {
			detachNode(div);
			if (if_block) if_block.u();
			if (if_block_1) if_block_1.u();
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
			if (if_block_1) if_block_1.d();
		}
	};
}

function SvelteComponent$22(options) {
	init(this, options);
	this._state = assign({}, options.data);

	if (!document.getElementById("svelte-16fvliq-style")) add_css$11();

	this._fragment = create_main_fragment$22(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$22.prototype, proto);

/* src\core\ui\outputs\Datetime.html generated by Svelte v1.64.1 */
function format$1(field) {
	 if(field.data != null){
		 var dateTimeStyle = field.metadata.getCustomProperty("dateTimeStyle");
		 var format ="D MMM YYYY";
		 if(dateTimeStyle == "dateTime"){
			format = "D MMM YYYY HH:mm A";
		 }else if(dateTimeStyle == "time"){
			 format = "HH:mm";
		 }
		 return hooks(field.data).format(format);
	 }
	return "";

}

function create_main_fragment$23(component, state) {
	var text_value = format$1(state.field), text;

	return {
		c: function create() {
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = format$1(state.field))) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(text);
		},

		d: noop$1
	};
}

function SvelteComponent$23(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$23(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$23.prototype, proto);

/* src\core\ui\outputs\Documentation.html generated by Svelte v1.64.1 */
function oncreate$15() {
	const content = this.refs.container;
	const output = this.refs.toc;

	let closeLevel = 1;
	let result = "<ul>";
	let counter = 0;

	content.querySelectorAll("h1, h2, h3").forEach(e => {
		e.setAttribute("id", counter);
		const openLevel = e.tagName.match(/\d/g)[0];
		if (openLevel > closeLevel) {
			result += `${"<ul><li><a data-target='"}${counter}'>${e.innerText}</a>`;
		}

		else if (openLevel < closeLevel) {
			const closingTags = Array(closeLevel - openLevel)
				.fill()
				.map(() => "</li></ul>")
				.join("");

			result += `${closingTags}</li><li><a data-target='${counter}'>${e.innerText}</a>`;
		}
		else {
			if (closeLevel !== 1) {
				result += "</li>";
			}
			result += `<li><a data-target='${counter}'>${e.innerText}</a>`;
		}
		closeLevel = openLevel;
		counter += 1;
	});

	result += Array(closeLevel).fill().map(() => "</li></ul>").join("");

	output.innerHTML = result;

	document.querySelectorAll(".table-of-contents a").forEach(a => {
		a.addEventListener("click", event => {
			const target = event.currentTarget.getAttribute("data-target");
			document.getElementById(target).scrollIntoView({ behavior: "smooth" });

			// clear active
			document.querySelectorAll(".table-of-contents li.active").forEach(li => {
				li.classList.remove("active");
			});

			// set active
			let parent = a.parentElement;
			while (parent) {
				if (parent.tagName === "LI") {
					parent.classList.add("active");
				}
				parent = parent.parentElement;
			}

			event.stopPropagation();
		});
	});
}

function add_css$12() {
	var style = createElement("style");
	style.id = 'svelte-1igfy36-style';
	style.textContent = ".svelte-1igfy36.wrapper,.svelte-1igfy36 .wrapper{max-width:1224px;margin:0 auto;display:grid;grid-gap:20px;grid-template-areas:\"content\" \"nav\"}.svelte-1igfy36.table-of-contents,.svelte-1igfy36 .table-of-contents{background:white;grid-area:nav;margin-top:35px}.svelte-1igfy36.content,.svelte-1igfy36 .content{grid-area:content;margin-bottom:100px}@media(min-width: 700px){.svelte-1igfy36.wrapper,.svelte-1igfy36 .wrapper{grid-template-columns:75% auto;grid-template-areas:\"content nav\"}.svelte-1igfy36.table-of-contents > ul,.svelte-1igfy36 .table-of-contents > ul{position:fixed}}@media(max-width: 699px){.svelte-1igfy36.wrapper,.svelte-1igfy36 .wrapper{grid-template-areas:\"nav\"}.svelte-1igfy36.content,.svelte-1igfy36 .content{grid-area:unset}.svelte-1igfy36.content img,.svelte-1igfy36 .content img{width:100%}}.svelte-1igfy36.content h1 em,.svelte-1igfy36 .content h1 em{font-size:unset}.svelte-1igfy36.content h1,.svelte-1igfy36 .content h1{border-bottom:3px solid #ececec;margin:30px 0 20px;text-align:center;padding:0 0 5px 0}.svelte-1igfy36.content h2,.svelte-1igfy36 .content h2{margin-top:25px;padding:10px 0;border-bottom:1px solid #b4b4b4;margin-bottom:25px;font-weight:bold}.svelte-1igfy36.content h3,.svelte-1igfy36 .content h3{margin-top:25px}.svelte-1igfy36.content h4,.svelte-1igfy36 .content h4{font-size:1.5rem;opacity:0.8}.svelte-1igfy36.content > ul,.svelte-1igfy36 .content > ul{margin-left:25px}.svelte-1igfy36.content img,.svelte-1igfy36 .content img{margin-bottom:35px;border:1px solid #ececec;background-color:white;box-shadow:5px 5px 10px #aaa;max-width:100%}.svelte-1igfy36.table-of-contents ul,.svelte-1igfy36 .table-of-contents ul{list-style:none}li.svelte-1igfy36.active > a,.svelte-1igfy36 li.active > a{font-weight:500}.svelte-1igfy36.table-of-contents a:hover,.svelte-1igfy36 .table-of-contents a:hover{font-weight:600}.svelte-1igfy36.table-of-contents li,.svelte-1igfy36 .table-of-contents li{cursor:pointer}.svelte-1igfy36.table-of-contents ul li,.svelte-1igfy36 .table-of-contents ul li{display:none}.svelte-1igfy36.table-of-contents > ul > li,.svelte-1igfy36 .table-of-contents > ul > li,.svelte-1igfy36.table-of-contents > ul > li > ul > li,.svelte-1igfy36 .table-of-contents > ul > li > ul > li{display:block}.svelte-1igfy36.table-of-contents li.active > ul > li,.svelte-1igfy36 .table-of-contents li.active > ul > li{display:block}";
	appendNode(style, document.head);
}

function create_main_fragment$24(component, state) {
	var div, div_1, text_1, div_2;

	var if_block = (state.field.data != null && state.field.data.value != null) && create_if_block$17(component, state);

	return {
		c: function create() {
			div = createElement("div");
			div_1 = createElement("div");
			if (if_block) if_block.c();
			text_1 = createText("\r\n\r\n\t");
			div_2 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			div_1.className = "content";
			div_2.className = "table-of-contents";
			div.className = "wrapper svelte-1igfy36";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(div_1, div);
			if (if_block) if_block.m(div_1, null);
			component.refs.container = div_1;
			appendNode(text_1, div);
			appendNode(div_2, div);
			component.refs.toc = div_2;
		},

		p: function update(changed, state) {
			if (state.field.data != null && state.field.data.value != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$17(component, state);
					if_block.c();
					if_block.m(div_1, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			detachNode(div);
			if (if_block) if_block.u();
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
			if (component.refs.container === div_1) component.refs.container = null;
			if (component.refs.toc === div_2) component.refs.toc = null;
		}
	};
}

// (3:2) {{#if field.data != null && field.data.value != null}}
function create_if_block$17(component, state) {
	var raw_value = state.field.data.value, raw_before, raw_after;

	return {
		c: function create() {
			raw_before = createElement('noscript');
			raw_after = createElement('noscript');
		},

		m: function mount(target, anchor) {
			insertNode(raw_before, target, anchor);
			raw_before.insertAdjacentHTML("afterend", raw_value);
			insertNode(raw_after, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.field) && raw_value !== (raw_value = state.field.data.value)) {
				detachBetween(raw_before, raw_after);
				raw_before.insertAdjacentHTML("afterend", raw_value);
			}
		},

		u: function unmount() {
			detachBetween(raw_before, raw_after);

			detachNode(raw_before);
			detachNode(raw_after);
		},

		d: noop$1
	};
}

function SvelteComponent$24(options) {
	init(this, options);
	this.refs = {};
	this._state = assign({}, options.data);

	if (!document.getElementById("svelte-1igfy36-style")) add_css$12();

	var self = this;
	var _oncreate = function() {
		var changed = { field: 1 };
		oncreate$15.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$24(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$24.prototype, proto);

/* src\core\ui\outputs\DownloadableFile.html generated by Svelte v1.64.1 */
function create_main_fragment$25(component, state) {
	var a, text_value = state.field.data.name, text, a_href_value;

	return {
		c: function create() {
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = "/file/download?id=" + state.field.data.id;
		},

		m: function mount(target, anchor) {
			insertNode(a, target, anchor);
			appendNode(text, a);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data.name)) {
				text.data = text_value;
			}

			if ((changed.field) && a_href_value !== (a_href_value = "/file/download?id=" + state.field.data.id)) {
				a.href = a_href_value;
			}
		},

		u: function unmount() {
			detachNode(a);
		},

		d: noop$1
	};
}

function SvelteComponent$25(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$25(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$25.prototype, proto);

/* src\core\ui\outputs\FileSize.html generated by Svelte v1.64.1 */
function filesize(bytes) {
	var si = true;
	var thresh = si ? 1000 : 1024;
	if (Math.abs(bytes) < thresh) {
		return bytes + ' B';
	}

	var units = si
		? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		: ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

	var u = -1;

	do {
		bytes /= thresh;
		++u;
	} while (Math.abs(bytes) >= thresh && u < units.length - 1);

	return bytes.toFixed(1) + ' ' + units[u];
}

function create_main_fragment$26(component, state) {
	var text_value = filesize(state.field.data.bytes), text;

	return {
		c: function create() {
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = filesize(state.field.data.bytes))) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(text);
		},

		d: noop$1
	};
}

function SvelteComponent$26(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$26(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$26.prototype, proto);

/* src\core\ui\outputs\FormLink.html generated by Svelte v1.64.1 */
function create_main_fragment$27(component, state) {
	var if_block_anchor;

	var if_block = (state.field.data != null) && create_if_block$18(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.field.data != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$18(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (2:1) {{#if field.data.form != null}}
function create_if_block_1$11(component, state) {
	var a, text_value = state.field.data.label, text, a_href_value;

	return {
		c: function create() {
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = state.app.makeUrl(state.field.data.form, state.field.data.inputFieldValues);
		},

		m: function mount(target, anchor) {
			insertNode(a, target, anchor);
			appendNode(text, a);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data.label)) {
				text.data = text_value;
			}

			if ((changed.app || changed.field) && a_href_value !== (a_href_value = state.app.makeUrl(state.field.data.form, state.field.data.inputFieldValues))) {
				a.href = a_href_value;
			}
		},

		u: function unmount() {
			detachNode(a);
		},

		d: noop$1
	};
}

// (4:1) {{else}}
function create_if_block_2$9(component, state) {
	var span, text_value = state.field.data.label, text;

	return {
		c: function create() {
			span = createElement("span");
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(span, target, anchor);
			appendNode(text, span);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(span);
		},

		d: noop$1
	};
}

// (1:0) {{#if field.data != null}}
function create_if_block$18(component, state) {
	var if_block_anchor;

	function select_block_type(state) {
		if (state.field.data.form != null) return create_if_block_1$11;
		return create_if_block_2$9;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

function SvelteComponent$27(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$27(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$27.prototype, proto);

/* src\core\ui\outputs\HtmlString.html generated by Svelte v1.64.1 */
function create_main_fragment$28(component, state) {
	var if_block_anchor;

	var if_block = (state.field.data != null && state.field.data.value != null) && create_if_block$19(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.field.data != null && state.field.data.value != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$19(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if field.data != null && field.data.value != null}}
function create_if_block$19(component, state) {
	var raw_value = state.field.data.value, raw_before, raw_after;

	return {
		c: function create() {
			raw_before = createElement('noscript');
			raw_after = createElement('noscript');
		},

		m: function mount(target, anchor) {
			insertNode(raw_before, target, anchor);
			raw_before.insertAdjacentHTML("afterend", raw_value);
			insertNode(raw_after, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.field) && raw_value !== (raw_value = state.field.data.value)) {
				detachBetween(raw_before, raw_after);
				raw_before.insertAdjacentHTML("afterend", raw_value);
			}
		},

		u: function unmount() {
			detachBetween(raw_before, raw_after);

			detachNode(raw_before);
			detachNode(raw_after);
		},

		d: noop$1
	};
}

function SvelteComponent$28(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$28(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$28.prototype, proto);

/* src\core\ui\outputs\Image.html generated by Svelte v1.64.1 */
function create_main_fragment$29(component, state) {
	var if_block_anchor;

	var if_block = (state.field.data != null) && create_if_block$20(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.field.data != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$20(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if field.data != null}}
function create_if_block$20(component, state) {
	var img, img_src_value;

	return {
		c: function create() {
			img = createElement("img");
			this.h();
		},

		h: function hydrate() {
			img.src = img_src_value = state.field.data.url;
			img.alt = "";
		},

		m: function mount(target, anchor) {
			insertNode(img, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.field) && img_src_value !== (img_src_value = state.field.data.url)) {
				img.src = img_src_value;
			}
		},

		u: function unmount() {
			detachNode(img);
		},

		d: noop$1
	};
}

function SvelteComponent$29(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$29(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$29.prototype, proto);

/* src\core\ui\outputs\InlineForm.html generated by Svelte v1.64.1 */
function oncreate$16() {
	const app = this.get("app");
	const field = this.get("field");
	const parentFormComponent = this.get("parent");

	const formInstance = app.getFormInstance(field.data.form, true);

	formInstance.initializeInputFields(field.data.inputFieldValues).then(() => {
		const f = new SvelteComponent$4({
			target: this.refs.container,
			data: {
				metadata: formInstance.metadata,
				form: formInstance,
				app,
				useUrl: false,
				parent: parentFormComponent
			}
		});

		f.init();

		this.set({ current: f });
	});

	this.get("parent").on("destroy", () => this.destroy());
}

function ondestroy$1() {
	const form = this.get("current");

	if (form != null) {
		form.destroy();
	}
}

function add_css$13() {
	var style = createElement("style");
	style.id = 'svelte-rap1ht-style';
	style.textContent = ".svelte-rap1ht.inline-form,.svelte-rap1ht .inline-form{border-width:1px 1px 1px;border-style:solid;border-color:#bbd2d6;margin:30px 0;border-radius:5px}.svelte-rap1ht.inline-form .form-header,.svelte-rap1ht .inline-form .form-header{border-bottom:none;padding-top:0;padding-bottom:0;background:#eee}.svelte-rap1ht.inline-form .response,.svelte-rap1ht .inline-form .response{margin-top:0;padding:10px 15px}.svelte-rap1ht.inline-form h2,.svelte-rap1ht .inline-form h2{margin:0;font-size:15px;padding:10px 15px 15px}.svelte-rap1ht.inline-form .response .form-header,.svelte-rap1ht .inline-form .response .form-header{padding-top:10px;border-bottom:1px solid #bbd2d6;background-color:#fff}.svelte-rap1ht.inline-form .response h2,.svelte-rap1ht .inline-form .response h2{font-size:2rem}";
	appendNode(style, document.head);
}

function create_main_fragment$30(component, state) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			this.h();
		},

		h: function hydrate() {
			div.className = "inline-form svelte-rap1ht";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			component.refs.container = div;
		},

		p: noop$1,

		u: function unmount() {
			detachNode(div);
		},

		d: function destroy$$1() {
			if (component.refs.container === div) component.refs.container = null;
		}
	};
}

function SvelteComponent$30(options) {
	init(this, options);
	this.refs = {};
	this._state = assign({}, options.data);

	this._handlers.destroy = [ondestroy$1];

	if (!document.getElementById("svelte-rap1ht-style")) add_css$13();

	var self = this;
	var _oncreate = function() {
		var changed = {  };
		oncreate$16.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment$30(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$30.prototype, proto);

/* src\core\ui\outputs\Link.html generated by Svelte v1.64.1 */
function create_main_fragment$31(component, state) {
	var if_block_anchor;

	var if_block = (state.field.data != null) && create_if_block$21(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.field.data != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$21(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if field.data != null}}
function create_if_block$21(component, state) {
	var a, text_value = state.field.data.anchor, text, a_href_value, a_class_value;

	return {
		c: function create() {
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = state.field.data.url;
			a.className = a_class_value = state.field.data.cssClass;
		},

		m: function mount(target, anchor) {
			insertNode(a, target, anchor);
			appendNode(text, a);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data.anchor)) {
				text.data = text_value;
			}

			if ((changed.field) && a_href_value !== (a_href_value = state.field.data.url)) {
				a.href = a_href_value;
			}

			if ((changed.field) && a_class_value !== (a_class_value = state.field.data.cssClass)) {
				a.className = a_class_value;
			}
		},

		u: function unmount() {
			detachNode(a);
		},

		d: noop$1
	};
}

function SvelteComponent$31(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$31(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$31.prototype, proto);

/* src\core\ui\outputs\Number.html generated by Svelte v1.64.1 */
function formatted(field) {
	if (field.data == null) {
		return "";
	}

	var x = field.data;
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
	return parts.join(".");
}

function create_main_fragment$32(component, state) {
	var if_block_anchor;

	var if_block = (state.field.data != null) && create_if_block$22(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.field.data != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$22(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if field.data != null}}
function create_if_block$22(component, state) {
	var text;

	return {
		c: function create() {
			text = createText(state.formatted);
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
		},

		p: function update(changed, state) {
			if (changed.formatted) {
				text.data = state.formatted;
			}
		},

		u: function unmount() {
			detachNode(text);
		},

		d: noop$1
	};
}

function SvelteComponent$32(options) {
	init(this, options);
	this._state = assign({}, options.data);
	this._recompute({ field: 1 }, this._state);

	this._fragment = create_main_fragment$32(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$32.prototype, proto);

SvelteComponent$32.prototype._recompute = function _recompute(changed, state) {
	if (changed.field) {
		if (this._differs(state.formatted, (state.formatted = formatted(state.field)))) changed.formatted = true;
	}
};

/* src\core\ui\outputs\ObjectList.html generated by Svelte v1.64.1 */
function oncreate$17() {
	var field = this.get("field");
	if (field.data == null || field.data.metadata == null) {
		return;
	}

	var columns = field.data.metadata;
	delete columns.customProperties;

	var formMetadata = new FormMetadata({
		customProperties: field.data.metadata.customProperties,
		outputFields: columns
	});

	var items = [];
	for (let item of field.data.items) {
		items.push(FormInstance$$1.getOutputFieldValues(formMetadata.outputFields, item));
	}

	this.set({
		items: items,
		cssClass: formMetadata.getCustomProperty("cssClass") || ""
	});
}

function add_css$14() {
	var style = createElement("style");
	style.id = 'svelte-1p3azkn-style';
	style.textContent = ".svelte-1p3azkn.object-list-item,.svelte-1p3azkn .object-list-item{margin:10px 0;border-bottom:1px solid #eee;padding:10px 0}";
	appendNode(style, document.head);
}

function create_main_fragment$33(component, state) {
	var if_block_anchor;

	var if_block = (state.field.data != null && state.items != null) && create_if_block$23(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.field.data != null && state.items != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$23(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (2:0) {{#each items as itemFields}}
function create_each_block$6(component, state) {
	var itemFields = state.itemFields, each_value = state.each_value, itemFields_index = state.itemFields_index;
	var div, div_class_value;

	var each_value_1 = itemFields;

	var each_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$2(component, assign(assign({}, state), {
			each_value_1: each_value_1,
			itemField: each_value_1[i],
			itemField_index: i
		}));
	}

	return {
		c: function create() {
			div = createElement("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			div.className = div_class_value = "object-list-item " + state.cssClass + " svelte-1p3azkn";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},

		p: function update(changed, state) {
			itemFields = state.itemFields;
			each_value = state.each_value;
			itemFields_index = state.itemFields_index;
			var each_value_1 = itemFields;

			if (changed.items || changed.app || changed.form || changed.parent) {
				for (var i = 0; i < each_value_1.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value_1: each_value_1,
						itemField: each_value_1[i],
						itemField_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_1$2(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_1.length;
			}

			if ((changed.cssClass) && div_class_value !== (div_class_value = "object-list-item " + state.cssClass + " svelte-1p3azkn")) {
				div.className = div_class_value;
			}
		},

		u: function unmount() {
			detachNode(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (4:2) {{#each itemFields as itemField}}
function create_each_block_1$2(component, state) {
	var itemFields = state.itemFields, each_value = state.each_value, itemFields_index = state.itemFields_index, itemField = state.itemField, each_value_1 = state.each_value_1, itemField_index = state.itemField_index;
	var if_block_anchor;

	var if_block = (itemField.metadata.hidden == false && !(itemField.metadata.getCustomProperty("hideIfNull") === true && itemField.data === null)) && create_if_block_1$12(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			itemFields = state.itemFields;
			each_value = state.each_value;
			itemFields_index = state.itemFields_index;
			itemField = state.itemField;
			each_value_1 = state.each_value_1;
			itemField_index = state.itemField_index;
			if (itemField.metadata.hidden == false && !(itemField.metadata.getCustomProperty("hideIfNull") === true && itemField.data === null)) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_1$12(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (5:2) {{#if itemField.metadata.hidden == false && !(itemField.metadata.getCustomProperty("hideIfNull") === true && itemField.data === null)}}
function create_if_block_1$12(component, state) {
	var itemFields = state.itemFields, each_value = state.each_value, itemFields_index = state.itemFields_index, itemField = state.itemField, each_value_1 = state.each_value_1, itemField_index = state.itemField_index;

	var formoutput_initial_data = {
	 	field: itemField,
	 	app: state.app,
	 	form: state.form,
	 	parent: state.parent
	 };
	var formoutput = new SvelteComponent$7({
		root: component.root,
		data: formoutput_initial_data
	});

	return {
		c: function create() {
			formoutput._fragment.c();
		},

		m: function mount(target, anchor) {
			formoutput._mount(target, anchor);
		},

		p: function update(changed, state) {
			itemFields = state.itemFields;
			each_value = state.each_value;
			itemFields_index = state.itemFields_index;
			itemField = state.itemField;
			each_value_1 = state.each_value_1;
			itemField_index = state.itemField_index;
			var formoutput_changes = {};
			if (changed.items) formoutput_changes.field = itemField;
			if (changed.app) formoutput_changes.app = state.app;
			if (changed.form) formoutput_changes.form = state.form;
			if (changed.parent) formoutput_changes.parent = state.parent;
			formoutput._set(formoutput_changes);
		},

		u: function unmount() {
			formoutput._unmount();
		},

		d: function destroy$$1() {
			formoutput.destroy(false);
		}
	};
}

// (1:0) {{#if field.data != null && items != null}}
function create_if_block$23(component, state) {
	var each_anchor;

	var each_value = state.items;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$6(component, assign(assign({}, state), {
			each_value: each_value,
			itemFields: each_value[i],
			itemFields_index: i
		}));
	}

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_anchor = createComment();
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insertNode(each_anchor, target, anchor);
		},

		p: function update(changed, state) {
			var each_value = state.items;

			if (changed.cssClass || changed.items || changed.app || changed.form || changed.parent) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						itemFields: each_value[i],
						itemFields_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block$6(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}
		},

		u: function unmount() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			detachNode(each_anchor);
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

function SvelteComponent$33(options) {
	init(this, options);
	this._state = assign({}, options.data);

	if (!document.getElementById("svelte-1p3azkn-style")) add_css$14();

	var self = this;
	var _oncreate = function() {
		var changed = { field: 1, items: 1, cssClass: 1, app: 1, form: 1, parent: 1 };
		oncreate$17.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$33(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$33.prototype, proto);

/* src\core\ui\outputs\Table.html generated by Svelte v1.64.1 */
function buildFilter$2(currentFormInstance, parameters) {
	var promise;

	var filter = {};
	if (parameters != null && parameters.length > 0) {
		promise = currentFormInstance.getSerializedInputValues().then(data => {
			for (let p of parameters) {
				filter[p] = data[p];
			}

			return filter;
		});
	}
	else {
		promise = Promise.resolve(filter);
	}

	return promise;
}

var modals$1 = [];

// https://stackoverflow.com/a/3369743/111438
// Close topmost modal when user presses escape key.
document.addEventListener("keydown", function(evt) {
	evt = evt || window.event;
	var isEscape = false;
	if ("key" in evt) {
		isEscape = (evt.key == "Escape" || evt.key == "Esc");
	} else {
		isEscape = (evt.keyCode == 27);
	}
	if (isEscape) {
		if (modals$1.length > 0) {
			// Close topmost modal.
			modals$1[modals$1.length - 1].closeBulkActionModal();
		}
	}
});

function columnsOrdered(field) {
	return field.metadata.customProperties.columns.filter(b => !b.hidden).sort((a, b) => {
            		return a.orderIndex - b.orderIndex;
        		});
}

var methods$9 = {
	async runBulkAction(action) {
		var selectedItems = this.get("field").data.filter(t => t.__selected === true);
		var map = this.get("map");
		var selectedItemIds = selectedItems.map(t => t[map[action.itemIdentifierField.toLowerCase()]]);

		this.set({
			isBulkActionModalOpen: true
		});

		var app = this.get("app");
		var formInstance = app.getFormInstance(action.formId, true);

		var inputFieldValues = {
			Items: {
				items: selectedItemIds
			}
		};

		var filter = await buildFilter$2(this.get("form"), action.parameters);
		filter.Items = { items: selectedItemIds };
		formInstance.setInputFields(filter);

		var f = new SvelteComponent$4({
			target: this.refs.bulkActionContainer,
			data: {
				metadata: formInstance.metadata,
				form: formInstance,
				app: app,
				useUrl: false
			}
		});

		f.init();

		var self = this;
		f.on("form:responseHandled", e => {
			self.closeBulkActionModal(e.response);
		});

		this.set({
			currentBulkActionForm: f
		});

		modals$1.push(this);
	},
	async closeBulkActionModal(response) {
		var currentBulkActionForm = this.get("currentBulkActionForm");

		this.set({
			isBulkActionModalOpen: false,
			currentBulkActionForm: null
		});

		currentBulkActionForm.destroy();

		var parentFormComponent = this.get("parent");

		if (response != null &&
			response.metadata.handler !== "redirect" &&
			response.metadata.handler !== "reload") {
			// If asked to redirect to another form, then we redirect
			// and do not reload parent form, as that would be a wasted effort.
			await parentFormComponent.submit(null, true);
		}

		modals$1.pop();
	},
	selectItem(checkboxElement, row) {
		row.__selected = checkboxElement.checked;
		
		var selectedItems = this.get("field").data.filter(t => t.__selected === true);
		this.set({"selectedItemsCount":selectedItems.length});
	},
	selectAllItems(checkboxElement) {
		for (var row of this.get("field").data) {
			row.__selected = checkboxElement.checked;
		}

		var checkboxes = this.refs.table.querySelectorAll(`tbody>tr>td .checkbox`);

		for (var checkbox of checkboxes) {
			checkbox.checked = checkboxElement.checked;
		}

		var selectedItems = this.get("field").data.filter(t => t.__selected === true);
		this.set({"selectedItemsCount":selectedItems.length});
	},
	sortData(column, columns) {
			var parent = this.get("parent");
			var form = parent.get("form");
			var field = this.get("field");
			var paginatorInput = form.inputs.find(t => t.metadata.id == field.metadata.customProperties.customizations.paginator);
			if(paginatorInput != null){
				paginatorInput.value.orderBy = column.customProperties["sortableBy"];
				for (let i of columns) {
					i.ascending = false;
				}
				column.ascending = paginatorInput.value.ascending = !paginatorInput.value.ascending;
				
				var params = {};
				for (let i of form.inputs) {
					params[i.metadata.id] = i.value;
				}
				form.setInputFields(params);
				parent.submit(null, false);
			}
		},
};

function oncreate$19() {
	var data = this.get("field").data;

	if (data == null) {
		return;
	}

	var app = this.get("app");
	var metadata = this.get("field").metadata;
	var rowCssClass = (metadata.customProperties || {}).rowCssClass;

	// Create map, with key being the lowercase version of the property name
	// and value being the actual property name.
	var map = {};
	if (data.length > 0) {
		let firstRow = data[0];

		for (let property in firstRow) {
			if (firstRow.hasOwnProperty(property)) {
				map[property.toLowerCase()] = property;
			}
		}
	}

	this.set({
		// Show table only after the `oncreate` method has run.
		visible: true,
		bulkActions: (metadata.customProperties || {}).bulkAction || [],
		map: map,
		getField: function(row, column) {
			var data = row[map[column.id.toLowerCase()]];

			return {
				data: data,
				metadata: column
			};
		},
		getRowCssClass: function (row) {
			var cssClass = "";

			if (rowCssClass != null)
			{
				cssClass = rowCssClass.cssClass || "";

				if (rowCssClass.suffix != null) {
					cssClass += row[map[rowCssClass.suffix.toLowerCase()]];
				}
			}

			return cssClass;
		},
		selectedItemsCount:0
	});
}

function add_css$15() {
	var style = createElement("style");
	style.id = 'svelte-1ng9avc-style';
	style.textContent = ".svelte-1ng9avc.btn-row,.svelte-1ng9avc .btn-row{text-align:right}.svelte-1ng9avc.checkbox,.svelte-1ng9avc .checkbox{clip:unset;clip-path:unset;position:unset;width:15px;height:15px}.svelte-1ng9avc.sortable-column,.svelte-1ng9avc .sortable-column{cursor:pointer}";
	appendNode(style, document.head);
}

function create_main_fragment$35(component, state) {
	var if_block_anchor;

	function select_block_type_4(state) {
		if (state.visible && state.field.data != null && state.field.data.length > 0) return create_if_block$25;
		return create_if_block_15;
	}

	var current_block_type = select_block_type_4(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type_4(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (7:5) {{#each bulkActions as action}}
function create_each_block$8(component, state) {
	var action = state.action, each_value = state.each_value, action_index = state.action_index;
	var if_block_anchor;

	function select_block_type(state) {
		if (state.selectedItemsCount > 0) return create_if_block_2$11;
		return create_if_block_3$5;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			action = state.action;
			each_value = state.each_value;
			action_index = state.action_index;
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (8:6) {{#if selectedItemsCount > 0 }}
function create_if_block_2$11(component, state) {
	var action = state.action, each_value = state.each_value, action_index = state.action_index;
	var button, text_value = action.label, text, text_1, small, text_2, text_3, text_4;

	return {
		c: function create() {
			button = createElement("button");
			text = createText(text_value);
			text_1 = createText(" ");
			small = createElement("small");
			text_2 = createText("(");
			text_3 = createText(state.selectedItemsCount);
			text_4 = createText(")");
			this.h();
		},

		h: function hydrate() {
			addListener$1(button, "click", click_handler$3);
			button.className = "btn btn-default";

			button._svelte = {
				component: component,
				each_value: state.each_value,
				action_index: state.action_index
			};
		},

		m: function mount(target, anchor) {
			insertNode(button, target, anchor);
			appendNode(text, button);
			appendNode(text_1, button);
			appendNode(small, button);
			appendNode(text_2, small);
			appendNode(text_3, small);
			appendNode(text_4, small);
		},

		p: function update(changed, state) {
			action = state.action;
			each_value = state.each_value;
			action_index = state.action_index;
			if ((changed.bulkActions) && text_value !== (text_value = action.label)) {
				text.data = text_value;
			}

			if (changed.selectedItemsCount) {
				text_3.data = state.selectedItemsCount;
			}

			button._svelte.each_value = state.each_value;
			button._svelte.action_index = state.action_index;
		},

		u: function unmount() {
			detachNode(button);
		},

		d: function destroy$$1() {
			removeListener$1(button, "click", click_handler$3);
		}
	};
}

// (10:6) {{else}}
function create_if_block_3$5(component, state) {
	var action = state.action, each_value = state.each_value, action_index = state.action_index;
	var button, text_value = action.label, text;

	return {
		c: function create() {
			button = createElement("button");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			button.className = "btn btn-default";
			button.disabled = true;
		},

		m: function mount(target, anchor) {
			insertNode(button, target, anchor);
			appendNode(text, button);
		},

		p: function update(changed, state) {
			action = state.action;
			each_value = state.each_value;
			action_index = state.action_index;
			if ((changed.bulkActions) && text_value !== (text_value = action.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(button);
		},

		d: noop$1
	};
}

// (4:3) {{#if bulkActions.length > 0 }}
function create_if_block_1$14(component, state) {
	var tr, td, td_colspan_value;

	var each_value = state.bulkActions;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$8(component, assign(assign({}, state), {
			each_value: each_value,
			action: each_value[i],
			action_index: i
		}));
	}

	return {
		c: function create() {
			tr = createElement("tr");
			td = createElement("td");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			td.colSpan = td_colspan_value = state.columnsOrdered.length + 1;
			td.className = "btn-row";
		},

		m: function mount(target, anchor) {
			insertNode(tr, target, anchor);
			appendNode(td, tr);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(td, null);
			}
		},

		p: function update(changed, state) {
			var each_value = state.bulkActions;

			if (changed.selectedItemsCount || changed.bulkActions) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						action: each_value[i],
						action_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block$8(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(td, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}

			if ((changed.columnsOrdered) && td_colspan_value !== (td_colspan_value = state.columnsOrdered.length + 1)) {
				td.colSpan = td_colspan_value;
			}
		},

		u: function unmount() {
			detachNode(tr);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (18:4) {{#if bulkActions.length > 0}}
function create_if_block_4$3(component, state) {
	var th, input;

	function change_handler(event) {
		component.selectAllItems(input);
	}

	return {
		c: function create() {
			th = createElement("th");
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "change", change_handler);
			setAttribute(input, "type", "checkbox");
			input.className = "checkbox";
		},

		m: function mount(target, anchor) {
			insertNode(th, target, anchor);
			appendNode(input, th);
		},

		u: function unmount() {
			detachNode(th);
		},

		d: function destroy$$1() {
			removeListener$1(input, "change", change_handler);
		}
	};
}

// (24:4) {{#each columnsOrdered as column}}
function create_each_block_1$3(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var if_block_anchor;

	function select_block_type_3(state) {
		if (column.customProperties != null && column.customProperties["sortableBy"] != null) return create_if_block_5$1;
		return create_if_block_8;
	}

	var current_block_type = select_block_type_3(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if (current_block_type === (current_block_type = select_block_type_3(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (26:5) {{#if column.ascending}}
function create_if_block_6(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var th, text_value = column.label, text, text_1, i;

	return {
		c: function create() {
			th = createElement("th");
			text = createText(text_value);
			text_1 = createText(" ");
			i = createElement("i");
			this.h();
		},

		h: function hydrate() {
			i.className = "fa fa-sort-down";
			addListener$1(th, "click", click_handler_1);
			th.className = "sortable-column";

			th._svelte = {
				component: component,
				each_value_1: state.each_value_1,
				column_index: state.column_index
			};
		},

		m: function mount(target, anchor) {
			insertNode(th, target, anchor);
			appendNode(text, th);
			appendNode(text_1, th);
			appendNode(i, th);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if ((changed.columnsOrdered) && text_value !== (text_value = column.label)) {
				text.data = text_value;
			}

			th._svelte.each_value_1 = state.each_value_1;
			th._svelte.column_index = state.column_index;
		},

		u: function unmount() {
			detachNode(th);
		},

		d: function destroy$$1() {
			removeListener$1(th, "click", click_handler_1);
		}
	};
}

// (28:5) {{else}}
function create_if_block_7(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var th, text_value = column.label, text, text_1, i;

	return {
		c: function create() {
			th = createElement("th");
			text = createText(text_value);
			text_1 = createText(" ");
			i = createElement("i");
			this.h();
		},

		h: function hydrate() {
			i.className = "fa fa-sort-up";
			addListener$1(th, "click", click_handler_2);
			th.className = "sortable-column";

			th._svelte = {
				component: component,
				each_value_1: state.each_value_1,
				column_index: state.column_index
			};
		},

		m: function mount(target, anchor) {
			insertNode(th, target, anchor);
			appendNode(text, th);
			appendNode(text_1, th);
			appendNode(i, th);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if ((changed.columnsOrdered) && text_value !== (text_value = column.label)) {
				text.data = text_value;
			}

			th._svelte.each_value_1 = state.each_value_1;
			th._svelte.column_index = state.column_index;
		},

		u: function unmount() {
			detachNode(th);
		},

		d: function destroy$$1() {
			removeListener$1(th, "click", click_handler_2);
		}
	};
}

// (33:5) {{#if column.customProperties != null && column.customProperties["documentation"] != null}}
function create_if_block_9(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var div, text_value = column.label, text, text_1;

	var tooltip_initial_data = { data: column.customProperties.documentation[0] };
	var tooltip = new SvelteComponent$6({
		root: component.root,
		data: tooltip_initial_data
	});

	return {
		c: function create() {
			div = createElement("div");
			text = createText(text_value);
			text_1 = createText("\r\n\t\t\t\t\t\t");
			tooltip._fragment.c();
			this.h();
		},

		h: function hydrate() {
			div.className = "help-tooltip";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(text, div);
			appendNode(text_1, div);
			tooltip._mount(div, null);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if ((changed.columnsOrdered) && text_value !== (text_value = column.label)) {
				text.data = text_value;
			}

			var tooltip_changes = {};
			if (changed.columnsOrdered) tooltip_changes.data = column.customProperties.documentation[0];
			tooltip._set(tooltip_changes);
		},

		u: function unmount() {
			detachNode(div);
		},

		d: function destroy$$1() {
			tooltip.destroy(false);
		}
	};
}

// (37:5) {{else}}
function create_if_block_10(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var text_value = column.label, text;

	return {
		c: function create() {
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if ((changed.columnsOrdered) && text_value !== (text_value = column.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(text);
		},

		d: noop$1
	};
}

// (25:4) {{#if column.customProperties != null && column.customProperties["sortableBy"] != null}}
function create_if_block_5$1(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var if_block_anchor;

	function select_block_type_1(state) {
		if (column.ascending) return create_if_block_6;
		return create_if_block_7;
	}

	var current_block_type = select_block_type_1(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if (current_block_type === (current_block_type = select_block_type_1(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (31:4) {{else}}
function create_if_block_8(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var th;

	function select_block_type_2(state) {
		if (column.customProperties != null && column.customProperties["documentation"] != null) return create_if_block_9;
		return create_if_block_10;
	}

	var current_block_type = select_block_type_2(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			th = createElement("th");
			if_block.c();
		},

		m: function mount(target, anchor) {
			insertNode(th, target, anchor);
			if_block.m(th, null);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if (current_block_type === (current_block_type = select_block_type_2(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(th, null);
			}
		},

		u: function unmount() {
			detachNode(th);
			if_block.u();
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (47:3) {{#each field.data as row}}
function create_each_block_2$1(component, state) {
	var row = state.row, each_value_2 = state.each_value_2, row_index = state.row_index;
	var tr, text, tr_class_value;

	var if_block = (state.bulkActions.length > 0) && create_if_block_12(component, state);

	var each_value_3 = state.columnsOrdered;

	var each_blocks = [];

	for (var i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(component, assign(assign({}, state), {
			each_value_3: each_value_3,
			column: each_value_3[i],
			column_index_1: i
		}));
	}

	return {
		c: function create() {
			tr = createElement("tr");
			if (if_block) if_block.c();
			text = createText("\r\n\r\n\t\t\t\t");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			tr.className = tr_class_value = state.getRowCssClass(row);
		},

		m: function mount(target, anchor) {
			insertNode(tr, target, anchor);
			if (if_block) if_block.m(tr, null);
			appendNode(text, tr);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}
		},

		p: function update(changed, state) {
			row = state.row;
			each_value_2 = state.each_value_2;
			row_index = state.row_index;
			if (state.bulkActions.length > 0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_12(component, state);
					if_block.c();
					if_block.m(tr, text);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			var each_value_3 = state.columnsOrdered;

			if (changed.getField || changed.field || changed.columnsOrdered || changed.app || changed.form || changed.parent) {
				for (var i = 0; i < each_value_3.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value_3: each_value_3,
						column: each_value_3[i],
						column_index_1: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_3(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_3.length;
			}

			if ((changed.getRowCssClass || changed.field) && tr_class_value !== (tr_class_value = state.getRowCssClass(row))) {
				tr.className = tr_class_value;
			}
		},

		u: function unmount() {
			detachNode(tr);
			if (if_block) if_block.u();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();

			destroyEach(each_blocks);
		}
	};
}

// (49:4) {{#if bulkActions.length > 0}}
function create_if_block_12(component, state) {
	var row = state.row, each_value_2 = state.each_value_2, row_index = state.row_index;
	var td, div, input;

	return {
		c: function create() {
			td = createElement("td");
			div = createElement("div");
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "change", change_handler);
			setAttribute(input, "type", "checkbox");
			input.className = "checkbox";

			input._svelte = {
				component: component,
				each_value_2: state.each_value_2,
				row_index: state.row_index
			};

			div.className = "form-group form-check";
		},

		m: function mount(target, anchor) {
			insertNode(td, target, anchor);
			appendNode(div, td);
			appendNode(input, div);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value_2 = state.each_value_2;
			row_index = state.row_index;
			input._svelte.each_value_2 = state.each_value_2;
			input._svelte.row_index = state.row_index;
		},

		u: function unmount() {
			detachNode(td);
		},

		d: function destroy$$1() {
			removeListener$1(input, "change", change_handler);
		}
	};
}

// (57:4) {{#each columnsOrdered as column}}
function create_each_block_3(component, state) {
	var row = state.row, each_value_2 = state.each_value_2, row_index = state.row_index, column = state.column, each_value_3 = state.each_value_3, column_index_1 = state.column_index_1;
	var td;

	var if_block = (!(state.getField(row, column).metadata.getCustomProperty("hideIfNull") === true && state.getField(row, column).data === null)) && create_if_block_13(component, state);

	return {
		c: function create() {
			td = createElement("td");
			if (if_block) if_block.c();
		},

		m: function mount(target, anchor) {
			insertNode(td, target, anchor);
			if (if_block) if_block.m(td, null);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value_2 = state.each_value_2;
			row_index = state.row_index;
			column = state.column;
			each_value_3 = state.each_value_3;
			column_index_1 = state.column_index_1;
			if (!(state.getField(row, column).metadata.getCustomProperty("hideIfNull") === true && state.getField(row, column).data === null)) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_13(component, state);
					if_block.c();
					if_block.m(td, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			detachNode(td);
			if (if_block) if_block.u();
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (59:5) {{#if !(getField(row, column).metadata.getCustomProperty("hideIfNull") === true && getField(row, column).data === null)}}
function create_if_block_13(component, state) {
	var row = state.row, each_value_2 = state.each_value_2, row_index = state.row_index, column = state.column, each_value_3 = state.each_value_3, column_index_1 = state.column_index_1;

	var formoutput_initial_data = {
	 	field: state.getField(row, column),
	 	app: state.app,
	 	form: state.form,
	 	parent: state.parent,
	 	showLabel: "false"
	 };
	var formoutput = new SvelteComponent$7({
		root: component.root,
		data: formoutput_initial_data
	});

	return {
		c: function create() {
			formoutput._fragment.c();
		},

		m: function mount(target, anchor) {
			formoutput._mount(target, anchor);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value_2 = state.each_value_2;
			row_index = state.row_index;
			column = state.column;
			each_value_3 = state.each_value_3;
			column_index_1 = state.column_index_1;
			var formoutput_changes = {};
			if (changed.getField || changed.field || changed.columnsOrdered) formoutput_changes.field = state.getField(row, column);
			if (changed.app) formoutput_changes.app = state.app;
			if (changed.form) formoutput_changes.form = state.form;
			if (changed.parent) formoutput_changes.parent = state.parent;
			formoutput._set(formoutput_changes);
		},

		u: function unmount() {
			formoutput._unmount();
		},

		d: function destroy$$1() {
			formoutput.destroy(false);
		}
	};
}

// (46:3) {{#if map != null}}
function create_if_block_11(component, state) {
	var each_anchor;

	var each_value_2 = state.field.data;

	var each_blocks = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2$1(component, assign(assign({}, state), {
			each_value_2: each_value_2,
			row: each_value_2[i],
			row_index: i
		}));
	}

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_anchor = createComment();
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insertNode(each_anchor, target, anchor);
		},

		p: function update(changed, state) {
			var each_value_2 = state.field.data;

			if (changed.getRowCssClass || changed.field || changed.bulkActions || changed.columnsOrdered || changed.getField || changed.app || changed.form || changed.parent) {
				for (var i = 0; i < each_value_2.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value_2: each_value_2,
						row: each_value_2[i],
						row_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_2$1(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_2.length;
			}
		},

		u: function unmount() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			detachNode(each_anchor);
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (70:1) {{#if bulkActions.length > 0}}
function create_if_block_14(component, state) {
	var input, text, div, div_1, label, text_1, div_2;

	function input_change_handler() {
		component.set({ isBulkActionModalOpen: input.checked });
	}

	function click_handler_3(event) {
		component.closeBulkActionModal(null);
	}

	return {
		c: function create() {
			input = createElement("input");
			text = createText("\r\n\t\t");
			div = createElement("div");
			div_1 = createElement("div");
			label = createElement("label");
			text_1 = createText("\r\n\t\t\t\t");
			div_2 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "change", input_change_handler);
			setAttribute(input, "type", "checkbox");
			input.className = "hidden svelte-1ng9avc";
			addListener$1(label, "click", click_handler_3);
			label.className = "close";
			div_1.className = "card";
			div.className = "modal svelte-1ng9avc";
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.checked = state.isBulkActionModalOpen;

			insertNode(text, target, anchor);
			insertNode(div, target, anchor);
			appendNode(div_1, div);
			appendNode(label, div_1);
			appendNode(text_1, div_1);
			appendNode(div_2, div_1);
			component.refs.bulkActionContainer = div_2;
		},

		p: function update(changed, state) {
			input.checked = state.isBulkActionModalOpen;
		},

		u: function unmount() {
			detachNode(input);
			detachNode(text);
			detachNode(div);
		},

		d: function destroy$$1() {
			removeListener$1(input, "change", input_change_handler);
			removeListener$1(label, "click", click_handler_3);
			if (component.refs.bulkActionContainer === div_2) component.refs.bulkActionContainer = null;
		}
	};
}

// (1:0) {{#if visible && field.data != null && field.data.length > 0}}
function create_if_block$25(component, state) {
	var table, thead, text, tr, text_1, text_4, tbody, text_7, if_block_3_anchor;

	var if_block = (state.bulkActions.length > 0) && create_if_block_1$14(component, state);

	var if_block_1 = (state.bulkActions.length > 0) && create_if_block_4$3(component, state);

	var each_value_1 = state.columnsOrdered;

	var each_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$3(component, assign(assign({}, state), {
			each_value_1: each_value_1,
			column: each_value_1[i],
			column_index: i
		}));
	}

	var if_block_2 = (state.map != null) && create_if_block_11(component, state);

	var if_block_3 = (state.bulkActions.length > 0) && create_if_block_14(component, state);

	return {
		c: function create() {
			table = createElement("table");
			thead = createElement("thead");
			if (if_block) if_block.c();
			text = createText("\r\n\t\t\t");
			tr = createElement("tr");
			if (if_block_1) if_block_1.c();
			text_1 = createText("\r\n\r\n\t\t\t\t");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_4 = createText("\r\n\t\t");
			tbody = createElement("tbody");
			if (if_block_2) if_block_2.c();
			text_7 = createText("\r\n\r\n\t");
			if (if_block_3) if_block_3.c();
			if_block_3_anchor = createComment();
			this.h();
		},

		h: function hydrate() {
			table.className = "table svelte-1ng9avc";
		},

		m: function mount(target, anchor) {
			insertNode(table, target, anchor);
			appendNode(thead, table);
			if (if_block) if_block.m(thead, null);
			appendNode(text, thead);
			appendNode(tr, thead);
			if (if_block_1) if_block_1.m(tr, null);
			appendNode(text_1, tr);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}

			appendNode(text_4, table);
			appendNode(tbody, table);
			if (if_block_2) if_block_2.m(tbody, null);
			component.refs.table = table;
			insertNode(text_7, target, anchor);
			if (if_block_3) if_block_3.m(target, anchor);
			insertNode(if_block_3_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.bulkActions.length > 0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_1$14(component, state);
					if_block.c();
					if_block.m(thead, text);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			if (state.bulkActions.length > 0) {
				if (!if_block_1) {
					if_block_1 = create_if_block_4$3(component, state);
					if_block_1.c();
					if_block_1.m(tr, text_1);
				}
			} else if (if_block_1) {
				if_block_1.u();
				if_block_1.d();
				if_block_1 = null;
			}

			var each_value_1 = state.columnsOrdered;

			if (changed.columnsOrdered) {
				for (var i = 0; i < each_value_1.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value_1: each_value_1,
						column: each_value_1[i],
						column_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_1$3(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_1.length;
			}

			if (state.map != null) {
				if (if_block_2) {
					if_block_2.p(changed, state);
				} else {
					if_block_2 = create_if_block_11(component, state);
					if_block_2.c();
					if_block_2.m(tbody, null);
				}
			} else if (if_block_2) {
				if_block_2.u();
				if_block_2.d();
				if_block_2 = null;
			}

			if (state.bulkActions.length > 0) {
				if (if_block_3) {
					if_block_3.p(changed, state);
				} else {
					if_block_3 = create_if_block_14(component, state);
					if_block_3.c();
					if_block_3.m(if_block_3_anchor.parentNode, if_block_3_anchor);
				}
			} else if (if_block_3) {
				if_block_3.u();
				if_block_3.d();
				if_block_3 = null;
			}
		},

		u: function unmount() {
			detachNode(table);
			if (if_block) if_block.u();
			if (if_block_1) if_block_1.u();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			if (if_block_2) if_block_2.u();
			detachNode(text_7);
			if (if_block_3) if_block_3.u();
			detachNode(if_block_3_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
			if (if_block_1) if_block_1.d();

			destroyEach(each_blocks);

			if (if_block_2) if_block_2.d();
			if (component.refs.table === table) component.refs.table = null;
			if (if_block_3) if_block_3.d();
		}
	};
}

// (79:0) {{else}}
function create_if_block_15(component, state) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			div.textContent = "No data.";
			this.h();
		},

		h: function hydrate() {
			div.className = "alert-nodata svelte-1ng9avc";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		p: noop$1,

		u: function unmount() {
			detachNode(div);
		},

		d: noop$1
	};
}

function click_handler$3(event) {
	var component = this._svelte.component;
	var each_value = this._svelte.each_value, action_index = this._svelte.action_index, action = each_value[action_index];
	component.runBulkAction(action);
}

function click_handler_1(event) {
	var component = this._svelte.component;
	var each_value_1 = this._svelte.each_value_1, column_index = this._svelte.column_index, column = each_value_1[column_index];
	var state = component.get();
	component.sortData(column,state.columnsOrdered);
}

function click_handler_2(event) {
	var component = this._svelte.component;
	var each_value_1 = this._svelte.each_value_1, column_index = this._svelte.column_index, column = each_value_1[column_index];
	var state = component.get();
	component.sortData(column,state.columnsOrdered);
}

function change_handler(event) {
	var component = this._svelte.component;
	var each_value_2 = this._svelte.each_value_2, row_index = this._svelte.row_index, row = each_value_2[row_index];
	component.selectItem(this, row);
}

function SvelteComponent$35(options) {
	init(this, options);
	this.refs = {};
	this._state = assign({}, options.data);
	this._recompute({ field: 1 }, this._state);

	if (!document.getElementById("svelte-1ng9avc-style")) add_css$15();

	var self = this;
	var _oncreate = function() {
		var changed = { field: 1, visible: 1, bulkActions: 1, columnsOrdered: 1, selectedItemsCount: 1, map: 1, getRowCssClass: 1, getField: 1, app: 1, form: 1, parent: 1, isBulkActionModalOpen: 1 };
		oncreate$19.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$35(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$35.prototype, proto);
assign(SvelteComponent$35.prototype, methods$9);

SvelteComponent$35.prototype._recompute = function _recompute(changed, state) {
	if (changed.field) {
		if (this._differs(state.columnsOrdered, (state.columnsOrdered = columnsOrdered(state.field)))) changed.columnsOrdered = true;
	}
};

/* src\core\ui\outputs\Paginator.html generated by Svelte v1.64.1 */
function pages(field, form, parent) {
	const paginatorInput = form.inputs.find(t => t.metadata.id === field.metadata.customProperties.customizations.paginator);

	const pageCount = Math.ceil(field.data.totalCount / paginatorInput.value.pageSize);

	const params = {};
	for (const i of form.inputs) {
		params[i.metadata.id] = i.value;
	}

	if (pageCount > 0) {
		if (pageCount < paginatorInput.value.pageIndex) {
			paginatorInput.value.pageIndex = 1;
			form.setInputFields(params);
			parent.submit(null, false);
		}
		const pages = [];

		for (let p = 1; p <= pageCount; ++p) {
			const pageParams = Object.assign({}, params);
			pageParams[paginatorInput.metadata.id] = Object.assign({}, pageParams[paginatorInput.metadata.id]);
			pageParams[paginatorInput.metadata.id].pageIndex = p;

			pages.push({
				text: p,
				params: pageParams,
				cssClass: paginatorInput.value.pageIndex === p ? "current" : ""
			});
		}

		const firstParams = Object.assign({}, params);
		firstParams[paginatorInput.metadata.id] = Object.assign({}, firstParams[paginatorInput.metadata.id]);
		firstParams[paginatorInput.metadata.id].pageIndex = 1;

		const first = {
			text: "First",
			params: firstParams,
			cssClass: paginatorInput.value.pageIndex === 1 ? "btn disabled" : ""
		};
		const prevParams = Object.assign({}, params);
		prevParams[paginatorInput.metadata.id] = Object.assign({}, prevParams[paginatorInput.metadata.id]);
		prevParams[paginatorInput.metadata.id].pageIndex = paginatorInput.value.pageIndex - 1;

		const previous = {
			text: "Previous",
			params: prevParams,
			cssClass: paginatorInput.value.pageIndex === 1 ? "btn disabled" : ""
		};

		const nextParams = Object.assign({}, params);
		nextParams[paginatorInput.metadata.id] = Object.assign({}, nextParams[paginatorInput.metadata.id]);
		nextParams[paginatorInput.metadata.id].pageIndex = paginatorInput.value.pageIndex + 1;

		const next = {
			text: "Next",
			params: nextParams,
			cssClass: paginatorInput.value.pageIndex === pageCount ? "btn disabled" : ""
		};

		const lastParams = Object.assign({}, params);
		lastParams[paginatorInput.metadata.id] = Object.assign({}, lastParams[paginatorInput.metadata.id]);
		lastParams[paginatorInput.metadata.id].pageIndex = pageCount;

		const last = {
			text: "Last",
			params: lastParams,
			cssClass: paginatorInput.value.pageIndex === pageCount ? "btn disabled" : ""
		};

		let from = paginatorInput.value.pageIndex;
		let to = paginatorInput.value.pageIndex;

		if (from < 5) {
			from = 0; to = 10;
		}
		else if (from > pageCount - 5 && pageCount > 10) {
			to = pageCount; from = pageCount - 10;
		}
		else {
			from -= 5;
			to += 5;
		}

		const innerPages = pages.slice(from, to);
		innerPages.unshift(previous);
		innerPages.unshift(first);
		innerPages.push(next);
		innerPages.push(last);
		return innerPages;
	}

	return [];
}

function data$6() {
	return {
		totalCount: 0
	};
}

var methods$8 = {
	goToPage(page) {
		const parent = this.get("parent");
		const form = parent.get("form");

		form.setInputFields(page.params);
		parent.submit(null, false);
	},
	changePageSize() {
		const parent = this.get("parent");
		const form = parent.get("form");
		const field = this.get("field");

		const paginatorInput = form.inputs.find(t => t.metadata.id === field.metadata.customProperties.customizations.paginator);
		paginatorInput.value.pageSize = field.pageSize;
		paginatorInput.value.pageIndex = 1;
		const params = {};
		for (const i of form.inputs) {
			params[i.metadata.id] = i.value;
		}
		form.setInputFields(params);
		parent.submit(null, false);
	}
};

function oncreate$18() {
	const field = this.get("field");
	const form = this.get("form");

	if (field.data == null) {
		return;
	}

	const paginatorInput = form.inputs
		.find(t => t.metadata.id === field.metadata.customProperties.customizations.paginator);

	field.pageSize = paginatorInput.value.pageSize;
	this.set({
		pageSize: field.pageSize
	});
	const tableField = new OutputFieldValue();
	tableField.data = field.data.results;
	tableField.metadata = field.metadata;

	// eslint-disable-next-line no-new
	new SvelteComponent$35({
		target: this.refs.container,
		data: {
			field: tableField,
			app: this.get("app"),
			form,
			parent: this.get("parent")
		}
	});
}

function create_main_fragment$34(component, state) {
	var text, div;

	var if_block = (state.field.data != null && state.pages.length > 0) && create_if_block$24(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			text = createText("\r\n\r\n");
			div = createElement("div");
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(text, target, anchor);
			insertNode(div, target, anchor);
			component.refs.container = div;
		},

		p: function update(changed, state) {
			if (state.field.data != null && state.pages.length > 0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$24(component, state);
					if_block.c();
					if_block.m(text.parentNode, text);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(text);
			detachNode(div);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
			if (component.refs.container === div) component.refs.container = null;
		}
	};
}

// (11:2) {{#each pages as page}}
function create_each_block$7(component, state) {
	var page = state.page, each_value = state.each_value, page_index = state.page_index;
	var if_block_anchor;

	function select_block_type(state) {
		if (state.parent.get('useUrl')) return create_if_block_1$13;
		return create_if_block_2$10;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			page = state.page;
			each_value = state.each_value;
			page_index = state.page_index;
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (12:3) {{#if parent.get('useUrl')}}
function create_if_block_1$13(component, state) {
	var page = state.page, each_value = state.each_value, page_index = state.page_index;
	var li, a, text_value = page.text, text, a_href_value, a_class_value;

	return {
		c: function create() {
			li = createElement("li");
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = state.app.makeUrl(state.form.metadata.id, page.params);
			a.className = a_class_value = "" + page.cssClass + " page-link";
			li.className = "page-item";
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			appendNode(a, li);
			appendNode(text, a);
		},

		p: function update(changed, state) {
			page = state.page;
			each_value = state.each_value;
			page_index = state.page_index;
			if ((changed.pages) && text_value !== (text_value = page.text)) {
				text.data = text_value;
			}

			if ((changed.app || changed.form || changed.pages) && a_href_value !== (a_href_value = state.app.makeUrl(state.form.metadata.id, page.params))) {
				a.href = a_href_value;
			}

			if ((changed.pages) && a_class_value !== (a_class_value = "" + page.cssClass + " page-link")) {
				a.className = a_class_value;
			}
		},

		u: function unmount() {
			detachNode(li);
		},

		d: noop$1
	};
}

// (14:3) {{else}}
function create_if_block_2$10(component, state) {
	var page = state.page, each_value = state.each_value, page_index = state.page_index;
	var li, button, text_value = page.text, text, button_class_value;

	return {
		c: function create() {
			li = createElement("li");
			button = createElement("button");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			addListener$1(button, "click", click_handler$2);
			button.className = button_class_value = "" + page.cssClass + " page-link";

			button._svelte = {
				component: component,
				each_value: state.each_value,
				page_index: state.page_index
			};

			li.className = "page-item";
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			appendNode(button, li);
			appendNode(text, button);
		},

		p: function update(changed, state) {
			page = state.page;
			each_value = state.each_value;
			page_index = state.page_index;
			if ((changed.pages) && text_value !== (text_value = page.text)) {
				text.data = text_value;
			}

			if ((changed.pages) && button_class_value !== (button_class_value = "" + page.cssClass + " page-link")) {
				button.className = button_class_value;
			}

			button._svelte.each_value = state.each_value;
			button._svelte.page_index = state.page_index;
		},

		u: function unmount() {
			detachNode(li);
		},

		d: function destroy$$1() {
			removeListener$1(button, "click", click_handler$2);
		}
	};
}

// (1:0) {{#if field.data != null && pages.length > 0}}
function create_if_block$24(component, state) {
	var div, select, option, text, option_1, text_1, option_2, text_2, option_3, text_3, select_updating = false, text_4, ul, text_6, div_1, text_7, text_8_value = state.field.data.results.length, text_8, text_9, text_10_value = state.field.data.totalCount, text_10, text_11;

	function select_change_handler() {
		var state = component.get();
		select_updating = true;
		state.field.pageSize = selectValue(select);
		component.set({ field: state.field });
		select_updating = false;
	}

	function change_handler(event) {
		component.changePageSize();
	}

	var each_value = state.pages;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$7(component, assign(assign({}, state), {
			each_value: each_value,
			page: each_value[i],
			page_index: i
		}));
	}

	return {
		c: function create() {
			div = createElement("div");
			select = createElement("select");
			option = createElement("option");
			text = createText("10");
			option_1 = createElement("option");
			text_1 = createText("20");
			option_2 = createElement("option");
			text_2 = createText("50");
			option_3 = createElement("option");
			text_3 = createText("100");
			text_4 = createText("\r\n\r\n\t");
			ul = createElement("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_6 = createText("\r\n");
			div_1 = createElement("div");
			text_7 = createText("showing ");
			text_8 = createText(text_8_value);
			text_9 = createText(" out of ");
			text_10 = createText(text_10_value);
			text_11 = createText(" items");
			this.h();
		},

		h: function hydrate() {
			option.__value = "10";
			option.value = option.__value;
			option_1.__value = "20";
			option_1.value = option_1.__value;
			option_2.__value = "50";
			option_2.value = option_2.__value;
			option_3.__value = "100";
			option_3.value = option_3.__value;
			addListener$1(select, "change", select_change_handler);
			if (!('field' in state)) component.root._beforecreate.push(select_change_handler);
			addListener$1(select, "change", change_handler);
			select.className = "pagination-size input-sm";
			ul.className = "pagination pagination-sm";
			div_1.className = "paginator-summary";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(select, div);
			appendNode(option, select);
			appendNode(text, option);
			appendNode(option_1, select);
			appendNode(text_1, option_1);
			appendNode(option_2, select);
			appendNode(text_2, option_2);
			appendNode(option_3, select);
			appendNode(text_3, option_3);

			selectOption(select, state.field.pageSize);

			appendNode(text_4, div);
			appendNode(ul, div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			insertNode(text_6, target, anchor);
			insertNode(div_1, target, anchor);
			appendNode(text_7, div_1);
			appendNode(text_8, div_1);
			appendNode(text_9, div_1);
			appendNode(text_10, div_1);
			appendNode(text_11, div_1);
		},

		p: function update(changed, state) {
			if (!select_updating) selectOption(select, state.field.pageSize);

			var each_value = state.pages;

			if (changed.parent || changed.app || changed.form || changed.pages) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						page: each_value[i],
						page_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block$7(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}

			if ((changed.field) && text_8_value !== (text_8_value = state.field.data.results.length)) {
				text_8.data = text_8_value;
			}

			if ((changed.field) && text_10_value !== (text_10_value = state.field.data.totalCount)) {
				text_10.data = text_10_value;
			}
		},

		u: function unmount() {
			detachNode(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			detachNode(text_6);
			detachNode(div_1);
		},

		d: function destroy$$1() {
			removeListener$1(select, "change", select_change_handler);
			removeListener$1(select, "change", change_handler);

			destroyEach(each_blocks);
		}
	};
}

function click_handler$2(event) {
	var component = this._svelte.component;
	var each_value = this._svelte.each_value, page_index = this._svelte.page_index, page = each_value[page_index];
	component.goToPage(page);
}

function SvelteComponent$34(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data$6(), options.data);
	this._recompute({ field: 1, form: 1, parent: 1 }, this._state);

	var self = this;
	var _oncreate = function() {
		var changed = { field: 1, form: 1, parent: 1, pages: 1, app: 1 };
		oncreate$18.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
	}

	this._fragment = create_main_fragment$34(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._beforecreate);
		callAll(this._oncreate);
	}
}

assign(SvelteComponent$34.prototype, proto);
assign(SvelteComponent$34.prototype, methods$8);

SvelteComponent$34.prototype._recompute = function _recompute(changed, state) {
	if (changed.field || changed.form || changed.parent) {
		if (this._differs(state.pages, (state.pages = pages(state.field, state.form, state.parent)))) changed.pages = true;
	}
};

/* src\core\ui\outputs\Table.html generated by Svelte v1.64.1 */
function buildFilter$3(currentFormInstance, parameters) {
	var promise;

	var filter = {};
	if (parameters != null && parameters.length > 0) {
		promise = currentFormInstance.getSerializedInputValues().then(data => {
			for (let p of parameters) {
				filter[p] = data[p];
			}

			return filter;
		});
	}
	else {
		promise = Promise.resolve(filter);
	}

	return promise;
}

var modals$2 = [];

// https://stackoverflow.com/a/3369743/111438
// Close topmost modal when user presses escape key.
document.addEventListener("keydown", function(evt) {
	evt = evt || window.event;
	var isEscape = false;
	if ("key" in evt) {
		isEscape = (evt.key == "Escape" || evt.key == "Esc");
	} else {
		isEscape = (evt.keyCode == 27);
	}
	if (isEscape) {
		if (modals$2.length > 0) {
			// Close topmost modal.
			modals$2[modals$2.length - 1].closeBulkActionModal();
		}
	}
});

function columnsOrdered$1(field) {
	return field.metadata.customProperties.columns.filter(b => !b.hidden).sort((a, b) => {
            		return a.orderIndex - b.orderIndex;
        		});
}

var methods$10 = {
	async runBulkAction(action) {
		var selectedItems = this.get("field").data.filter(t => t.__selected === true);
		var map = this.get("map");
		var selectedItemIds = selectedItems.map(t => t[map[action.itemIdentifierField.toLowerCase()]]);

		this.set({
			isBulkActionModalOpen: true
		});

		var app = this.get("app");
		var formInstance = app.getFormInstance(action.formId, true);

		var inputFieldValues = {
			Items: {
				items: selectedItemIds
			}
		};

		var filter = await buildFilter$3(this.get("form"), action.parameters);
		filter.Items = { items: selectedItemIds };
		formInstance.setInputFields(filter);

		var f = new SvelteComponent$4({
			target: this.refs.bulkActionContainer,
			data: {
				metadata: formInstance.metadata,
				form: formInstance,
				app: app,
				useUrl: false
			}
		});

		f.init();

		var self = this;
		f.on("form:responseHandled", e => {
			self.closeBulkActionModal(e.response);
		});

		this.set({
			currentBulkActionForm: f
		});

		modals$2.push(this);
	},
	async closeBulkActionModal(response) {
		var currentBulkActionForm = this.get("currentBulkActionForm");

		this.set({
			isBulkActionModalOpen: false,
			currentBulkActionForm: null
		});

		currentBulkActionForm.destroy();

		var parentFormComponent = this.get("parent");

		if (response != null &&
			response.metadata.handler !== "redirect" &&
			response.metadata.handler !== "reload") {
			// If asked to redirect to another form, then we redirect
			// and do not reload parent form, as that would be a wasted effort.
			await parentFormComponent.submit(null, true);
		}

		modals$2.pop();
	},
	selectItem(checkboxElement, row) {
		row.__selected = checkboxElement.checked;
		
		var selectedItems = this.get("field").data.filter(t => t.__selected === true);
		this.set({"selectedItemsCount":selectedItems.length});
	},
	selectAllItems(checkboxElement) {
		for (var row of this.get("field").data) {
			row.__selected = checkboxElement.checked;
		}

		var checkboxes = this.refs.table.querySelectorAll(`tbody>tr>td .checkbox`);

		for (var checkbox of checkboxes) {
			checkbox.checked = checkboxElement.checked;
		}

		var selectedItems = this.get("field").data.filter(t => t.__selected === true);
		this.set({"selectedItemsCount":selectedItems.length});
	},
	sortData(column, columns) {
			var parent = this.get("parent");
			var form = parent.get("form");
			var field = this.get("field");
			var paginatorInput = form.inputs.find(t => t.metadata.id == field.metadata.customProperties.customizations.paginator);
			if(paginatorInput != null){
				paginatorInput.value.orderBy = column.customProperties["sortableBy"];
				for (let i of columns) {
					i.ascending = false;
				}
				column.ascending = paginatorInput.value.ascending = !paginatorInput.value.ascending;
				
				var params = {};
				for (let i of form.inputs) {
					params[i.metadata.id] = i.value;
				}
				form.setInputFields(params);
				parent.submit(null, false);
			}
		},
};

function oncreate$20() {
	var data = this.get("field").data;

	if (data == null) {
		return;
	}

	var app = this.get("app");
	var metadata = this.get("field").metadata;
	var rowCssClass = (metadata.customProperties || {}).rowCssClass;

	// Create map, with key being the lowercase version of the property name
	// and value being the actual property name.
	var map = {};
	if (data.length > 0) {
		let firstRow = data[0];

		for (let property in firstRow) {
			if (firstRow.hasOwnProperty(property)) {
				map[property.toLowerCase()] = property;
			}
		}
	}

	this.set({
		// Show table only after the `oncreate` method has run.
		visible: true,
		bulkActions: (metadata.customProperties || {}).bulkAction || [],
		map: map,
		getField: function(row, column) {
			var data = row[map[column.id.toLowerCase()]];

			return {
				data: data,
				metadata: column
			};
		},
		getRowCssClass: function (row) {
			var cssClass = "";

			if (rowCssClass != null)
			{
				cssClass = rowCssClass.cssClass || "";

				if (rowCssClass.suffix != null) {
					cssClass += row[map[rowCssClass.suffix.toLowerCase()]];
				}
			}

			return cssClass;
		},
		selectedItemsCount:0
	});
}

function add_css$16() {
	var style = createElement("style");
	style.id = 'svelte-1ng9avc-style';
	style.textContent = ".svelte-1ng9avc.btn-row,.svelte-1ng9avc .btn-row{text-align:right}.svelte-1ng9avc.checkbox,.svelte-1ng9avc .checkbox{clip:unset;clip-path:unset;position:unset;width:15px;height:15px}.svelte-1ng9avc.sortable-column,.svelte-1ng9avc .sortable-column{cursor:pointer}";
	appendNode(style, document.head);
}

function create_main_fragment$36(component, state) {
	var if_block_anchor;

	function select_block_type_4(state) {
		if (state.visible && state.field.data != null && state.field.data.length > 0) return create_if_block$26;
		return create_if_block_15$1;
	}

	var current_block_type = select_block_type_4(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type_4(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (7:5) {{#each bulkActions as action}}
function create_each_block$9(component, state) {
	var action = state.action, each_value = state.each_value, action_index = state.action_index;
	var if_block_anchor;

	function select_block_type(state) {
		if (state.selectedItemsCount > 0) return create_if_block_2$12;
		return create_if_block_3$6;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			action = state.action;
			each_value = state.each_value;
			action_index = state.action_index;
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (8:6) {{#if selectedItemsCount > 0 }}
function create_if_block_2$12(component, state) {
	var action = state.action, each_value = state.each_value, action_index = state.action_index;
	var button, text_value = action.label, text, text_1, small, text_2, text_3, text_4;

	return {
		c: function create() {
			button = createElement("button");
			text = createText(text_value);
			text_1 = createText(" ");
			small = createElement("small");
			text_2 = createText("(");
			text_3 = createText(state.selectedItemsCount);
			text_4 = createText(")");
			this.h();
		},

		h: function hydrate() {
			addListener$1(button, "click", click_handler$4);
			button.className = "btn btn-default";

			button._svelte = {
				component: component,
				each_value: state.each_value,
				action_index: state.action_index
			};
		},

		m: function mount(target, anchor) {
			insertNode(button, target, anchor);
			appendNode(text, button);
			appendNode(text_1, button);
			appendNode(small, button);
			appendNode(text_2, small);
			appendNode(text_3, small);
			appendNode(text_4, small);
		},

		p: function update(changed, state) {
			action = state.action;
			each_value = state.each_value;
			action_index = state.action_index;
			if ((changed.bulkActions) && text_value !== (text_value = action.label)) {
				text.data = text_value;
			}

			if (changed.selectedItemsCount) {
				text_3.data = state.selectedItemsCount;
			}

			button._svelte.each_value = state.each_value;
			button._svelte.action_index = state.action_index;
		},

		u: function unmount() {
			detachNode(button);
		},

		d: function destroy$$1() {
			removeListener$1(button, "click", click_handler$4);
		}
	};
}

// (10:6) {{else}}
function create_if_block_3$6(component, state) {
	var action = state.action, each_value = state.each_value, action_index = state.action_index;
	var button, text_value = action.label, text;

	return {
		c: function create() {
			button = createElement("button");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			button.className = "btn btn-default";
			button.disabled = true;
		},

		m: function mount(target, anchor) {
			insertNode(button, target, anchor);
			appendNode(text, button);
		},

		p: function update(changed, state) {
			action = state.action;
			each_value = state.each_value;
			action_index = state.action_index;
			if ((changed.bulkActions) && text_value !== (text_value = action.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(button);
		},

		d: noop$1
	};
}

// (4:3) {{#if bulkActions.length > 0 }}
function create_if_block_1$15(component, state) {
	var tr, td, td_colspan_value;

	var each_value = state.bulkActions;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$9(component, assign(assign({}, state), {
			each_value: each_value,
			action: each_value[i],
			action_index: i
		}));
	}

	return {
		c: function create() {
			tr = createElement("tr");
			td = createElement("td");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			td.colSpan = td_colspan_value = state.columnsOrdered.length + 1;
			td.className = "btn-row";
		},

		m: function mount(target, anchor) {
			insertNode(tr, target, anchor);
			appendNode(td, tr);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(td, null);
			}
		},

		p: function update(changed, state) {
			var each_value = state.bulkActions;

			if (changed.selectedItemsCount || changed.bulkActions) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						action: each_value[i],
						action_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block$9(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(td, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}

			if ((changed.columnsOrdered) && td_colspan_value !== (td_colspan_value = state.columnsOrdered.length + 1)) {
				td.colSpan = td_colspan_value;
			}
		},

		u: function unmount() {
			detachNode(tr);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (18:4) {{#if bulkActions.length > 0}}
function create_if_block_4$4(component, state) {
	var th, input;

	function change_handler(event) {
		component.selectAllItems(input);
	}

	return {
		c: function create() {
			th = createElement("th");
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "change", change_handler);
			setAttribute(input, "type", "checkbox");
			input.className = "checkbox";
		},

		m: function mount(target, anchor) {
			insertNode(th, target, anchor);
			appendNode(input, th);
		},

		u: function unmount() {
			detachNode(th);
		},

		d: function destroy$$1() {
			removeListener$1(input, "change", change_handler);
		}
	};
}

// (24:4) {{#each columnsOrdered as column}}
function create_each_block_1$4(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var if_block_anchor;

	function select_block_type_3(state) {
		if (column.customProperties != null && column.customProperties["sortableBy"] != null) return create_if_block_5$2;
		return create_if_block_8$1;
	}

	var current_block_type = select_block_type_3(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if (current_block_type === (current_block_type = select_block_type_3(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (26:5) {{#if column.ascending}}
function create_if_block_6$1(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var th, text_value = column.label, text, text_1, i;

	return {
		c: function create() {
			th = createElement("th");
			text = createText(text_value);
			text_1 = createText(" ");
			i = createElement("i");
			this.h();
		},

		h: function hydrate() {
			i.className = "fa fa-sort-down";
			addListener$1(th, "click", click_handler_1$1);
			th.className = "sortable-column";

			th._svelte = {
				component: component,
				each_value_1: state.each_value_1,
				column_index: state.column_index
			};
		},

		m: function mount(target, anchor) {
			insertNode(th, target, anchor);
			appendNode(text, th);
			appendNode(text_1, th);
			appendNode(i, th);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if ((changed.columnsOrdered) && text_value !== (text_value = column.label)) {
				text.data = text_value;
			}

			th._svelte.each_value_1 = state.each_value_1;
			th._svelte.column_index = state.column_index;
		},

		u: function unmount() {
			detachNode(th);
		},

		d: function destroy$$1() {
			removeListener$1(th, "click", click_handler_1$1);
		}
	};
}

// (28:5) {{else}}
function create_if_block_7$1(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var th, text_value = column.label, text, text_1, i;

	return {
		c: function create() {
			th = createElement("th");
			text = createText(text_value);
			text_1 = createText(" ");
			i = createElement("i");
			this.h();
		},

		h: function hydrate() {
			i.className = "fa fa-sort-up";
			addListener$1(th, "click", click_handler_2$1);
			th.className = "sortable-column";

			th._svelte = {
				component: component,
				each_value_1: state.each_value_1,
				column_index: state.column_index
			};
		},

		m: function mount(target, anchor) {
			insertNode(th, target, anchor);
			appendNode(text, th);
			appendNode(text_1, th);
			appendNode(i, th);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if ((changed.columnsOrdered) && text_value !== (text_value = column.label)) {
				text.data = text_value;
			}

			th._svelte.each_value_1 = state.each_value_1;
			th._svelte.column_index = state.column_index;
		},

		u: function unmount() {
			detachNode(th);
		},

		d: function destroy$$1() {
			removeListener$1(th, "click", click_handler_2$1);
		}
	};
}

// (33:5) {{#if column.customProperties != null && column.customProperties["documentation"] != null}}
function create_if_block_9$1(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var div, text_value = column.label, text, text_1;

	var tooltip_initial_data = { data: column.customProperties.documentation[0] };
	var tooltip = new SvelteComponent$6({
		root: component.root,
		data: tooltip_initial_data
	});

	return {
		c: function create() {
			div = createElement("div");
			text = createText(text_value);
			text_1 = createText("\r\n\t\t\t\t\t\t");
			tooltip._fragment.c();
			this.h();
		},

		h: function hydrate() {
			div.className = "help-tooltip";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(text, div);
			appendNode(text_1, div);
			tooltip._mount(div, null);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if ((changed.columnsOrdered) && text_value !== (text_value = column.label)) {
				text.data = text_value;
			}

			var tooltip_changes = {};
			if (changed.columnsOrdered) tooltip_changes.data = column.customProperties.documentation[0];
			tooltip._set(tooltip_changes);
		},

		u: function unmount() {
			detachNode(div);
		},

		d: function destroy$$1() {
			tooltip.destroy(false);
		}
	};
}

// (37:5) {{else}}
function create_if_block_10$1(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var text_value = column.label, text;

	return {
		c: function create() {
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if ((changed.columnsOrdered) && text_value !== (text_value = column.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(text);
		},

		d: noop$1
	};
}

// (25:4) {{#if column.customProperties != null && column.customProperties["sortableBy"] != null}}
function create_if_block_5$2(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var if_block_anchor;

	function select_block_type_1(state) {
		if (column.ascending) return create_if_block_6$1;
		return create_if_block_7$1;
	}

	var current_block_type = select_block_type_1(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if (current_block_type === (current_block_type = select_block_type_1(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (31:4) {{else}}
function create_if_block_8$1(component, state) {
	var column = state.column, each_value_1 = state.each_value_1, column_index = state.column_index;
	var th;

	function select_block_type_2(state) {
		if (column.customProperties != null && column.customProperties["documentation"] != null) return create_if_block_9$1;
		return create_if_block_10$1;
	}

	var current_block_type = select_block_type_2(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			th = createElement("th");
			if_block.c();
		},

		m: function mount(target, anchor) {
			insertNode(th, target, anchor);
			if_block.m(th, null);
		},

		p: function update(changed, state) {
			column = state.column;
			each_value_1 = state.each_value_1;
			column_index = state.column_index;
			if (current_block_type === (current_block_type = select_block_type_2(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(th, null);
			}
		},

		u: function unmount() {
			detachNode(th);
			if_block.u();
		},

		d: function destroy$$1() {
			if_block.d();
		}
	};
}

// (47:3) {{#each field.data as row}}
function create_each_block_2$2(component, state) {
	var row = state.row, each_value_2 = state.each_value_2, row_index = state.row_index;
	var tr, text, tr_class_value;

	var if_block = (state.bulkActions.length > 0) && create_if_block_12$1(component, state);

	var each_value_3 = state.columnsOrdered;

	var each_blocks = [];

	for (var i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3$1(component, assign(assign({}, state), {
			each_value_3: each_value_3,
			column: each_value_3[i],
			column_index_1: i
		}));
	}

	return {
		c: function create() {
			tr = createElement("tr");
			if (if_block) if_block.c();
			text = createText("\r\n\r\n\t\t\t\t");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			tr.className = tr_class_value = state.getRowCssClass(row);
		},

		m: function mount(target, anchor) {
			insertNode(tr, target, anchor);
			if (if_block) if_block.m(tr, null);
			appendNode(text, tr);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}
		},

		p: function update(changed, state) {
			row = state.row;
			each_value_2 = state.each_value_2;
			row_index = state.row_index;
			if (state.bulkActions.length > 0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_12$1(component, state);
					if_block.c();
					if_block.m(tr, text);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			var each_value_3 = state.columnsOrdered;

			if (changed.getField || changed.field || changed.columnsOrdered || changed.app || changed.form || changed.parent) {
				for (var i = 0; i < each_value_3.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value_3: each_value_3,
						column: each_value_3[i],
						column_index_1: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_3$1(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_3.length;
			}

			if ((changed.getRowCssClass || changed.field) && tr_class_value !== (tr_class_value = state.getRowCssClass(row))) {
				tr.className = tr_class_value;
			}
		},

		u: function unmount() {
			detachNode(tr);
			if (if_block) if_block.u();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();

			destroyEach(each_blocks);
		}
	};
}

// (49:4) {{#if bulkActions.length > 0}}
function create_if_block_12$1(component, state) {
	var row = state.row, each_value_2 = state.each_value_2, row_index = state.row_index;
	var td, div, input;

	return {
		c: function create() {
			td = createElement("td");
			div = createElement("div");
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "change", change_handler$1);
			setAttribute(input, "type", "checkbox");
			input.className = "checkbox";

			input._svelte = {
				component: component,
				each_value_2: state.each_value_2,
				row_index: state.row_index
			};

			div.className = "form-group form-check";
		},

		m: function mount(target, anchor) {
			insertNode(td, target, anchor);
			appendNode(div, td);
			appendNode(input, div);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value_2 = state.each_value_2;
			row_index = state.row_index;
			input._svelte.each_value_2 = state.each_value_2;
			input._svelte.row_index = state.row_index;
		},

		u: function unmount() {
			detachNode(td);
		},

		d: function destroy$$1() {
			removeListener$1(input, "change", change_handler$1);
		}
	};
}

// (57:4) {{#each columnsOrdered as column}}
function create_each_block_3$1(component, state) {
	var row = state.row, each_value_2 = state.each_value_2, row_index = state.row_index, column = state.column, each_value_3 = state.each_value_3, column_index_1 = state.column_index_1;
	var td;

	var if_block = (!(state.getField(row, column).metadata.getCustomProperty("hideIfNull") === true && state.getField(row, column).data === null)) && create_if_block_13$1(component, state);

	return {
		c: function create() {
			td = createElement("td");
			if (if_block) if_block.c();
		},

		m: function mount(target, anchor) {
			insertNode(td, target, anchor);
			if (if_block) if_block.m(td, null);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value_2 = state.each_value_2;
			row_index = state.row_index;
			column = state.column;
			each_value_3 = state.each_value_3;
			column_index_1 = state.column_index_1;
			if (!(state.getField(row, column).metadata.getCustomProperty("hideIfNull") === true && state.getField(row, column).data === null)) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_13$1(component, state);
					if_block.c();
					if_block.m(td, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			detachNode(td);
			if (if_block) if_block.u();
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (59:5) {{#if !(getField(row, column).metadata.getCustomProperty("hideIfNull") === true && getField(row, column).data === null)}}
function create_if_block_13$1(component, state) {
	var row = state.row, each_value_2 = state.each_value_2, row_index = state.row_index, column = state.column, each_value_3 = state.each_value_3, column_index_1 = state.column_index_1;

	var formoutput_initial_data = {
	 	field: state.getField(row, column),
	 	app: state.app,
	 	form: state.form,
	 	parent: state.parent,
	 	showLabel: "false"
	 };
	var formoutput = new SvelteComponent$7({
		root: component.root,
		data: formoutput_initial_data
	});

	return {
		c: function create() {
			formoutput._fragment.c();
		},

		m: function mount(target, anchor) {
			formoutput._mount(target, anchor);
		},

		p: function update(changed, state) {
			row = state.row;
			each_value_2 = state.each_value_2;
			row_index = state.row_index;
			column = state.column;
			each_value_3 = state.each_value_3;
			column_index_1 = state.column_index_1;
			var formoutput_changes = {};
			if (changed.getField || changed.field || changed.columnsOrdered) formoutput_changes.field = state.getField(row, column);
			if (changed.app) formoutput_changes.app = state.app;
			if (changed.form) formoutput_changes.form = state.form;
			if (changed.parent) formoutput_changes.parent = state.parent;
			formoutput._set(formoutput_changes);
		},

		u: function unmount() {
			formoutput._unmount();
		},

		d: function destroy$$1() {
			formoutput.destroy(false);
		}
	};
}

// (46:3) {{#if map != null}}
function create_if_block_11$1(component, state) {
	var each_anchor;

	var each_value_2 = state.field.data;

	var each_blocks = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2$2(component, assign(assign({}, state), {
			each_value_2: each_value_2,
			row: each_value_2[i],
			row_index: i
		}));
	}

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_anchor = createComment();
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insertNode(each_anchor, target, anchor);
		},

		p: function update(changed, state) {
			var each_value_2 = state.field.data;

			if (changed.getRowCssClass || changed.field || changed.bulkActions || changed.columnsOrdered || changed.getField || changed.app || changed.form || changed.parent) {
				for (var i = 0; i < each_value_2.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value_2: each_value_2,
						row: each_value_2[i],
						row_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_2$2(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_2.length;
			}
		},

		u: function unmount() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			detachNode(each_anchor);
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (70:1) {{#if bulkActions.length > 0}}
function create_if_block_14$1(component, state) {
	var input, text, div, div_1, label, text_1, div_2;

	function input_change_handler() {
		component.set({ isBulkActionModalOpen: input.checked });
	}

	function click_handler_3(event) {
		component.closeBulkActionModal(null);
	}

	return {
		c: function create() {
			input = createElement("input");
			text = createText("\r\n\t\t");
			div = createElement("div");
			div_1 = createElement("div");
			label = createElement("label");
			text_1 = createText("\r\n\t\t\t\t");
			div_2 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			addListener$1(input, "change", input_change_handler);
			setAttribute(input, "type", "checkbox");
			input.className = "hidden svelte-1ng9avc";
			addListener$1(label, "click", click_handler_3);
			label.className = "close";
			div_1.className = "card";
			div.className = "modal svelte-1ng9avc";
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.checked = state.isBulkActionModalOpen;

			insertNode(text, target, anchor);
			insertNode(div, target, anchor);
			appendNode(div_1, div);
			appendNode(label, div_1);
			appendNode(text_1, div_1);
			appendNode(div_2, div_1);
			component.refs.bulkActionContainer = div_2;
		},

		p: function update(changed, state) {
			input.checked = state.isBulkActionModalOpen;
		},

		u: function unmount() {
			detachNode(input);
			detachNode(text);
			detachNode(div);
		},

		d: function destroy$$1() {
			removeListener$1(input, "change", input_change_handler);
			removeListener$1(label, "click", click_handler_3);
			if (component.refs.bulkActionContainer === div_2) component.refs.bulkActionContainer = null;
		}
	};
}

// (1:0) {{#if visible && field.data != null && field.data.length > 0}}
function create_if_block$26(component, state) {
	var table, thead, text, tr, text_1, text_4, tbody, text_7, if_block_3_anchor;

	var if_block = (state.bulkActions.length > 0) && create_if_block_1$15(component, state);

	var if_block_1 = (state.bulkActions.length > 0) && create_if_block_4$4(component, state);

	var each_value_1 = state.columnsOrdered;

	var each_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$4(component, assign(assign({}, state), {
			each_value_1: each_value_1,
			column: each_value_1[i],
			column_index: i
		}));
	}

	var if_block_2 = (state.map != null) && create_if_block_11$1(component, state);

	var if_block_3 = (state.bulkActions.length > 0) && create_if_block_14$1(component, state);

	return {
		c: function create() {
			table = createElement("table");
			thead = createElement("thead");
			if (if_block) if_block.c();
			text = createText("\r\n\t\t\t");
			tr = createElement("tr");
			if (if_block_1) if_block_1.c();
			text_1 = createText("\r\n\r\n\t\t\t\t");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_4 = createText("\r\n\t\t");
			tbody = createElement("tbody");
			if (if_block_2) if_block_2.c();
			text_7 = createText("\r\n\r\n\t");
			if (if_block_3) if_block_3.c();
			if_block_3_anchor = createComment();
			this.h();
		},

		h: function hydrate() {
			table.className = "table svelte-1ng9avc";
		},

		m: function mount(target, anchor) {
			insertNode(table, target, anchor);
			appendNode(thead, table);
			if (if_block) if_block.m(thead, null);
			appendNode(text, thead);
			appendNode(tr, thead);
			if (if_block_1) if_block_1.m(tr, null);
			appendNode(text_1, tr);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}

			appendNode(text_4, table);
			appendNode(tbody, table);
			if (if_block_2) if_block_2.m(tbody, null);
			component.refs.table = table;
			insertNode(text_7, target, anchor);
			if (if_block_3) if_block_3.m(target, anchor);
			insertNode(if_block_3_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.bulkActions.length > 0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_1$15(component, state);
					if_block.c();
					if_block.m(thead, text);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			if (state.bulkActions.length > 0) {
				if (!if_block_1) {
					if_block_1 = create_if_block_4$4(component, state);
					if_block_1.c();
					if_block_1.m(tr, text_1);
				}
			} else if (if_block_1) {
				if_block_1.u();
				if_block_1.d();
				if_block_1 = null;
			}

			var each_value_1 = state.columnsOrdered;

			if (changed.columnsOrdered) {
				for (var i = 0; i < each_value_1.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value_1: each_value_1,
						column: each_value_1[i],
						column_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block_1$4(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value_1.length;
			}

			if (state.map != null) {
				if (if_block_2) {
					if_block_2.p(changed, state);
				} else {
					if_block_2 = create_if_block_11$1(component, state);
					if_block_2.c();
					if_block_2.m(tbody, null);
				}
			} else if (if_block_2) {
				if_block_2.u();
				if_block_2.d();
				if_block_2 = null;
			}

			if (state.bulkActions.length > 0) {
				if (if_block_3) {
					if_block_3.p(changed, state);
				} else {
					if_block_3 = create_if_block_14$1(component, state);
					if_block_3.c();
					if_block_3.m(if_block_3_anchor.parentNode, if_block_3_anchor);
				}
			} else if (if_block_3) {
				if_block_3.u();
				if_block_3.d();
				if_block_3 = null;
			}
		},

		u: function unmount() {
			detachNode(table);
			if (if_block) if_block.u();
			if (if_block_1) if_block_1.u();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			if (if_block_2) if_block_2.u();
			detachNode(text_7);
			if (if_block_3) if_block_3.u();
			detachNode(if_block_3_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
			if (if_block_1) if_block_1.d();

			destroyEach(each_blocks);

			if (if_block_2) if_block_2.d();
			if (component.refs.table === table) component.refs.table = null;
			if (if_block_3) if_block_3.d();
		}
	};
}

// (79:0) {{else}}
function create_if_block_15$1(component, state) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			div.textContent = "No data.";
			this.h();
		},

		h: function hydrate() {
			div.className = "alert-nodata svelte-1ng9avc";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		p: noop$1,

		u: function unmount() {
			detachNode(div);
		},

		d: noop$1
	};
}

function click_handler$4(event) {
	var component = this._svelte.component;
	var each_value = this._svelte.each_value, action_index = this._svelte.action_index, action = each_value[action_index];
	component.runBulkAction(action);
}

function click_handler_1$1(event) {
	var component = this._svelte.component;
	var each_value_1 = this._svelte.each_value_1, column_index = this._svelte.column_index, column = each_value_1[column_index];
	var state = component.get();
	component.sortData(column,state.columnsOrdered);
}

function click_handler_2$1(event) {
	var component = this._svelte.component;
	var each_value_1 = this._svelte.each_value_1, column_index = this._svelte.column_index, column = each_value_1[column_index];
	var state = component.get();
	component.sortData(column,state.columnsOrdered);
}

function change_handler$1(event) {
	var component = this._svelte.component;
	var each_value_2 = this._svelte.each_value_2, row_index = this._svelte.row_index, row = each_value_2[row_index];
	component.selectItem(this, row);
}

function SvelteComponent$36(options) {
	init(this, options);
	this.refs = {};
	this._state = assign({}, options.data);
	this._recompute({ field: 1 }, this._state);

	if (!document.getElementById("svelte-1ng9avc-style")) add_css$16();

	var self = this;
	var _oncreate = function() {
		var changed = { field: 1, visible: 1, bulkActions: 1, columnsOrdered: 1, selectedItemsCount: 1, map: 1, getRowCssClass: 1, getField: 1, app: 1, form: 1, parent: 1, isBulkActionModalOpen: 1 };
		oncreate$20.call(self);
		self.fire("update", { changed: changed, current: self._state });
	};

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$36(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$36.prototype, proto);
assign(SvelteComponent$36.prototype, methods$10);

SvelteComponent$36.prototype._recompute = function _recompute(changed, state) {
	if (changed.field) {
		if (this._differs(state.columnsOrdered, (state.columnsOrdered = columnsOrdered$1(state.field)))) changed.columnsOrdered = true;
	}
};

/* src\core\ui\outputs\Tabstrip.html generated by Svelte v1.64.1 */
function getCssClass(tab, tabstrip) {
	return tab.form == tabstrip.currentTab
		? "active"
		: "";
}

function create_main_fragment$37(component, state) {
	var div;

	var each_value = state.field.data.tabs;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$10(component, assign(assign({}, state), {
			each_value: each_value,
			tab: each_value[i],
			tab_index: i
		}));
	}

	return {
		c: function create() {
			div = createElement("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		h: function hydrate() {
			div.className = "tabstrip";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},

		p: function update(changed, state) {
			var each_value = state.field.data.tabs;

			if (changed.app || changed.field) {
				for (var i = 0; i < each_value.length; i += 1) {
					var each_context = assign(assign({}, state), {
						each_value: each_value,
						tab: each_value[i],
						tab_index: i
					});

					if (each_blocks[i]) {
						each_blocks[i].p(changed, each_context);
					} else {
						each_blocks[i] = create_each_block$10(component, each_context);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = each_value.length;
			}
		},

		u: function unmount() {
			detachNode(div);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);
		}
	};
}

// (2:1) {{#each field.data.tabs as tab}}
function create_each_block$10(component, state) {
	var tab = state.tab, each_value = state.each_value, tab_index = state.tab_index;
	var div, a, text_value = tab.label, text, a_href_value, a_class_value;

	return {
		c: function create() {
			div = createElement("div");
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = state.app.makeUrl(tab.form, tab.inputFieldValues);
			a.className = a_class_value = getCssClass(tab, state.field.data);
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(a, div);
			appendNode(text, a);
		},

		p: function update(changed, state) {
			tab = state.tab;
			each_value = state.each_value;
			tab_index = state.tab_index;
			if ((changed.field) && text_value !== (text_value = tab.label)) {
				text.data = text_value;
			}

			if ((changed.app || changed.field) && a_href_value !== (a_href_value = state.app.makeUrl(tab.form, tab.inputFieldValues))) {
				a.href = a_href_value;
			}

			if ((changed.field) && a_class_value !== (a_class_value = getCssClass(tab, state.field.data))) {
				a.className = a_class_value;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: noop$1
	};
}

function SvelteComponent$37(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$37(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$37.prototype, proto);

/* src\core\ui\outputs\Text.html generated by Svelte v1.64.1 */
function cssClass(field, form) {
	let cssClass = "";
	const dynamicCssClass = field.metadata.getCustomProperty("dynamicCssClass");
	if (dynamicCssClass != null) {
		cssClass = dynamicCssClass.cssClassPrefix;
		if (dynamicCssClass.outputFieldAsSuffix != null) {
			const suffixOutputField = form.outputs
				.find(t => t.metadata.id === dynamicCssClass.outputFieldAsSuffix);

			cssClass += suffixOutputField.data;
		}
	}
	return cssClass;
}

function BooleanChecker(field) {
	if (typeof (field.data) === "boolean") {
		return field.data ? "Yes" : "No";
	}

	return field.data;
}

function create_main_fragment$38(component, state) {
	var if_block_anchor;

	var if_block = (state.field.data != null) && create_if_block$27(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.field.data != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$27(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if field.data != null }}
function create_if_block$27(component, state) {
	var span, text;

	return {
		c: function create() {
			span = createElement("span");
			text = createText(state.BooleanChecker);
			this.h();
		},

		h: function hydrate() {
			span.className = state.cssClass;
		},

		m: function mount(target, anchor) {
			insertNode(span, target, anchor);
			appendNode(text, span);
		},

		p: function update(changed, state) {
			if (changed.BooleanChecker) {
				text.data = state.BooleanChecker;
			}

			if (changed.cssClass) {
				span.className = state.cssClass;
			}
		},

		u: function unmount() {
			detachNode(span);
		},

		d: noop$1
	};
}

function SvelteComponent$38(options) {
	init(this, options);
	this._state = assign({}, options.data);
	this._recompute({ field: 1, form: 1 }, this._state);

	this._fragment = create_main_fragment$38(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$38.prototype, proto);

SvelteComponent$38.prototype._recompute = function _recompute(changed, state) {
	if (changed.field || changed.form) {
		if (this._differs(state.cssClass, (state.cssClass = cssClass(state.field, state.form)))) changed.cssClass = true;
	}

	if (changed.field) {
		if (this._differs(state.BooleanChecker, (state.BooleanChecker = BooleanChecker(state.field)))) changed.BooleanChecker = true;
	}
};

/* src\core\ui\outputs\TextValue.html generated by Svelte v1.64.1 */
function create_main_fragment$39(component, state) {
	var text_value = state.field.data.value, text;

	return {
		c: function create() {
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data.value)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(text);
		},

		d: noop$1
	};
}

function SvelteComponent$39(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment$39(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$39.prototype, proto);

/* src\core\ui\outputs\TextValueMultiline.html generated by Svelte v1.64.1 */
function add_css$17() {
	var style = createElement("style");
	style.id = 'svelte-3khl0f-style';
	style.textContent = "div.svelte-3khl0f,.svelte-3khl0f div{white-space:pre;margin:0 0 5px 0;padding:5px 15px}";
	appendNode(style, document.head);
}

function create_main_fragment$40(component, state) {
	var if_block_anchor;

	var if_block = ((state.field.data || {}).value != null) && create_if_block$28(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if ((state.field.data || {}).value != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$28(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

// (1:0) {{#if (field.data || {}).value != null}}
function create_if_block$28(component, state) {
	var div, text_value = state.field.data.value, text;

	return {
		c: function create() {
			div = createElement("div");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			div.className = "svelte-3khl0f";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(text, div);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data.value)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: noop$1
	};
}

function SvelteComponent$40(options) {
	init(this, options);
	this._state = assign({}, options.data);

	if (!document.getElementById("svelte-3khl0f-style")) add_css$17();

	this._fragment = create_main_fragment$40(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent$40.prototype, proto);

var FormLogToConsole = (function (_super) {
    __extends(FormLogToConsole, _super);
    function FormLogToConsole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormLogToConsole.prototype.run = function (form, eventHandlerMetadata, args) {
        // tslint:disable-next-line:no-console
        console.log("[" + eventHandlerMetadata.runAt + "] form event handler '" + eventHandlerMetadata.id + "' from '" + form.metadata.id + "'");
        return Promise.resolve();
    };
    return FormLogToConsole;
}(FormEventHandler));

/**
 * Reloads form after an action.
 */
var ReloadFormAfterAction = (function (_super) {
    __extends(ReloadFormAfterAction, _super);
    function ReloadFormAfterAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReloadFormAfterAction.prototype.run = function (form, eventHandlerMetadata, args) {
        var isTopLevelForm = args.form.get("parent") == null;
        if (isTopLevelForm && eventHandlerMetadata.customProperties.formId === args.actionFormId) {
            args.form.submit(args.app, form, null, false);
        }
        return Promise.resolve();
    };
    return ReloadFormAfterAction;
}(FormEventHandler));

var BindToOutput = (function (_super) {
    __extends(BindToOutput, _super);
    function BindToOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BindToOutput.prototype.run = function (input, eventHandler, args) {
        var promises = [];
        var lowercaseInputId = eventHandler.customProperties.outputFieldId.toLowerCase();
        for (var prop in args.response) {
            if (args.response.hasOwnProperty(prop) && prop.toLowerCase() === lowercaseInputId) {
                var serializedValue = input.serializeValue(args.response[prop]);
                var promise = input.init(serializedValue);
                promises.push(promise);
                break;
            }
        }
        return Promise.all(promises);
    };
    return BindToOutput;
}(InputFieldEventHandler));

var InputLogToConsole = (function (_super) {
    __extends(InputLogToConsole, _super);
    function InputLogToConsole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputLogToConsole.prototype.run = function (input, eventHandlerMetadata, args) {
        return input.serialize().then(function (t) {
            // tslint:disable-next-line:no-console
            console.log("[" + eventHandlerMetadata.runAt + "] input event handler '" + eventHandlerMetadata.id + "' from '" + input.metadata.id + "'");
        });
    };
    return InputLogToConsole;
}(InputFieldEventHandler));

var DependOn = (function (_super) {
    __extends(DependOn, _super);
    function DependOn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DependOn.prototype.run = function (input, eventHandlerMetadata, args) {
        var subscribedToField = eventHandlerMetadata.customProperties.field;
        var fieldChanged = args.input.get("field").metadata.id;
        if (subscribedToField === fieldChanged) {
            return input.serialize().then(function (t) {
                var parentInputController = args.input.get("field");
                var childWrapper = args.form.getInputComponent(input.metadata.id);
                var childShouldBeVisible = ["typeahead", "dropdown"].indexOf(parentInputController.metadata.type) !== -1
                    ? parentInputController.value != null && parentInputController.value.value != null
                    : parentInputController.value != null;
                childWrapper.show(childShouldBeVisible);
            });
        }
        return Promise.resolve();
    };
    return DependOn;
}(InputFieldEventHandler));

var OutputLogToConsole = (function (_super) {
    __extends(OutputLogToConsole, _super);
    function OutputLogToConsole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutputLogToConsole.prototype.run = function (output, eventHandlerMetadata, args) {
        // tslint:disable-next-line:no-console
        console.log("[" + eventHandlerMetadata.runAt + "] output event handler '" + eventHandlerMetadata.id + "' from '" + output.metadata.id + "'");
        return Promise.resolve();
    };
    return OutputLogToConsole;
}(OutputFieldEventHandler));

var alertify$4 = alertify$1;
var Growl = (function () {
    function Growl() {
    }
    Growl.prototype.run = function (metadata) {
        alertify$4.notify(metadata.customProperties.message, metadata.customProperties.style, 5);
        return Promise.resolve();
    };
    return Growl;
}());

var controlRegister = new ControlRegister$$1();
controlRegister.registerInputFieldControl("text", SvelteComponent$19, StringInputController);
controlRegister.registerInputFieldControl("email", SvelteComponent$13, EmailInputController);
controlRegister.registerInputFieldControl("datetime", SvelteComponent$10, DateInputController);
controlRegister.registerInputFieldControl("date-range", SvelteComponent$11, DateRangeInputController);
controlRegister.registerInputFieldControl("number", SvelteComponent$16, NumberInputController);
controlRegister.registerInputFieldControl("dropdown", SvelteComponent$12, DropdownInputController);
controlRegister.registerInputFieldControl("boolean", SvelteComponent$9, BooleanInputController);
controlRegister.registerInputFieldControl("paginator", null, PaginatorInputController);
controlRegister.registerInputFieldControl("typeahead", SvelteComponent$15, TypeaheadInputController);
controlRegister.registerInputFieldControl("my-typeahead", SvelteComponent$15, TypeaheadInputController);
controlRegister.registerInputFieldControl("multiselect", SvelteComponent$15, MultiSelectInputController);
controlRegister.registerInputFieldControl("password", SvelteComponent$18, PasswordInputController);
controlRegister.registerInputFieldControl("textarea", SvelteComponent$20, TextareaInputController, new OutputControlConfiguration(false, true));
controlRegister.registerInputFieldControl("file-uploader", SvelteComponent$14, FileUploaderController, new OutputControlConfiguration(true, true));
controlRegister.registerInputFieldControl("number-range", SvelteComponent$17, NumberRangeInputController);
controlRegister.registerOutputFieldControl("text", SvelteComponent$38);
controlRegister.registerOutputFieldControl("number", SvelteComponent$32);
controlRegister.registerOutputFieldControl("datetime", SvelteComponent$23);
controlRegister.registerOutputFieldControl("table", SvelteComponent$36, new OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("formlink", SvelteComponent$27);
controlRegister.registerOutputFieldControl("tabstrip", SvelteComponent$37, new OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("paginated-data", SvelteComponent$34, new OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("action-list", SvelteComponent$21, new OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("inline-form", SvelteComponent$30, new OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("text-value", SvelteComponent$39);
controlRegister.registerOutputFieldControl("text-value-multiline", SvelteComponent$40, new OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("downloadable-file", SvelteComponent$25);
controlRegister.registerOutputFieldControl("alert", SvelteComponent$22, new OutputControlConfiguration(true, true));
controlRegister.registerOutputFieldControl("file-size", SvelteComponent$26);
controlRegister.registerOutputFieldControl("image", SvelteComponent$29, new OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("link", SvelteComponent$31);
controlRegister.registerOutputFieldControl("object-list", SvelteComponent$33, new OutputControlConfiguration(false, true));
controlRegister.registerOutputFieldControl("html-string", SvelteComponent$28);
controlRegister.registerOutputFieldControl("documentation", SvelteComponent$24, new OutputControlConfiguration(true, true));
// Form event handlers.
controlRegister.registerFormEventHandler("log-to-console", new FormLogToConsole());
controlRegister.registerFormEventHandler("reload-form-after-action", new ReloadFormAfterAction());
// Input event handlers.
controlRegister.registerInputFieldEventHandler("bind-to-output", new BindToOutput());
controlRegister.registerInputFieldEventHandler("log-to-console", new InputLogToConsole());
controlRegister.registerInputFieldEventHandler("depend-on", new DependOn());
// Output event handlers.
controlRegister.registerOutputFieldEventHandler("log-to-console", new OutputLogToConsole());
// Functions.
controlRegister.registerFunction("growl", new Growl());

var alertify = alertify$1;
alertify.defaults = {
    closable: false,
    notifier: {
        delay: 0,
        position: "bottom-right",
        closeButton: true
    },
    glossary: {
        title: "AlertifyJS",
        ok: "Yes",
        cancel: "No"
    },
    // theme settings
    theme: {
        // class name attached to prompt dialog input textbox.
        input: "ajs-input",
        // class name attached to ok button
        ok: "ajs-ok",
        // class name attached to cancel button
        cancel: "ajs-cancel"
    }
};
var alertifyErrorMsg = [];
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp(theServer) {
        return _super.call(this, theServer, controlRegister) || this;
    }
    MyApp.prototype.showError = function (message) {
        var msg = alertify.error(message);
        alertifyErrorMsg.push(msg);
    };
    return MyApp;
}(UmfApp$$1));
var server = new UmfServer("/api/form/metadata", "/api/form/run");
var app = new MyApp(server);
// Create a global variable, which can be accessed from any component.
window.app = app;
app.on("request:started", function (request) {
    showLoader();
});
app.on("request:completed", function (error) {
    if (error != null) {
        app.showError(error);
    }
    hideLoader();
});
app.load().then(function (response) {
    var router = new AppRouter(document.getElementById("main"), app);
    app.useRouter(router);
    router.on("router:activated", function () {
        for (var _i = 0, alertifyErrorMsg_1 = alertifyErrorMsg; _i < alertifyErrorMsg_1.length; _i++) {
            var msg = alertifyErrorMsg_1[_i];
            msg.dismiss();
        }
    });
    app.registerResponseHandler(new FormComponentResponseHandler());
    app.registerResponseHandler(new MessageResponseHandler());
    app.registerResponseHandler(new ReloadResponseHandler(function (form, inputFieldValues) {
        return app.load().then(function (t) {
            buildMenu(app);
            return app.makeUrl(form, inputFieldValues);
        });
    }));
    app.registerResponseHandler(new RedirectResponseHandler(function (form, inputFieldValues) {
        app.go(form, inputFieldValues);
    }));
    buildMenu(app);
});
function buildMenu(theApp) {
    // Remove old menu.
    var myNode = document.getElementById("topmenu");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    // tslint:disable-next-line:no-unused-expression
    new SvelteComponent({
        target: document.getElementById("topmenu"),
        data: {
            forms: theApp.forms,
            menu: theApp.menu,
            theApp: theApp,
            makeUrl: function (formId, inputFieldValues) { return theApp.makeUrl(formId, inputFieldValues); }
        }
    });
}
function showLoader() {
    var progress = document.getElementById("progress");
    progress.setAttribute("style", "width:50%");
    var loader = document.getElementById("loader");
    loader.setAttribute("class", "");
}
function hideLoader() {
    var loader = document.getElementById("loader");
    var progress = document.getElementById("progress");
    progress.setAttribute("style", "width:100%");
    setTimeout(function () {
        loader.setAttribute("class", "d-none");
    }, 500);
}

}());
//# sourceMappingURL=app.js.map
