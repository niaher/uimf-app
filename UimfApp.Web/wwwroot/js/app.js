(function () {
'use strict';

/**
 * Encapsulates all information needed to render a form.
 */

/**
 * Represents a reference to a form.
 */

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

/**
 * Represents response of a form.
 */
var FormResponse = /** @class */ (function (_super) {
    __extends(FormResponse, _super);
    function FormResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormResponse;
}(Object));

/**
 * Represents metadata for a single input field. *
 */

/**
 * Represents a function.
 */
var ClientFunctionMetadata = /** @class */ (function () {
    function ClientFunctionMetadata() {
    }
    return ClientFunctionMetadata;
}());

/**
 * Represents a function which can be run at a specific time during form's lifecycle.
 */
var EventHandlerMetadata = /** @class */ (function (_super) {
    __extends(EventHandlerMetadata, _super);
    function EventHandlerMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventHandlerMetadata;
}(ClientFunctionMetadata));

/**
 * Metadata describing how to handle the response.
 */
var FormResponseMetadata = /** @class */ (function () {
    function FormResponseMetadata() {
    }
    return FormResponseMetadata;
}());

/**
 * Represents metadata for a single output field.
 */

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
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
var isBuffer_1 = function (obj) {
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
  isBuffer: isBuffer_1,
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
var axios$3 = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios$3.Axios = Axios_1;

// Factory for creating new instances
axios$3.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults_1, instanceConfig));
};

// Expose Cancel & CancelToken
axios$3.Cancel = Cancel_1;
axios$3.CancelToken = CancelToken_1;
axios$3.isCancel = isCancel;

// Expose all/spread
axios$3.all = function all(promises) {
  return Promise.all(promises);
};
axios$3.spread = spread;

var axios_1 = axios$3;

// Allow use of default import syntax in TypeScript
var default_1 = axios$3;

axios_1.default = default_1;

var axios$1 = axios_1;

var axios = axios$1;
var UmfServer = /** @class */ (function () {
    /**
     * Creates a new instance of UmfApp.
     */
    function UmfServer(getMetadataUrl, postFormUrl) {
        this.getMetadataUrl = getMetadataUrl;
        this.postFormUrl = postFormUrl;
    }
    UmfServer.prototype.getMetadata = function (formId) {
        return axios.get(this.getMetadataUrl + "/" + formId).then(function (response) {
            return response.data;
        }).catch(function (e) {
            console.warn("Did not find form \"" + formId + "\".");
            return null;
        });
    };
    UmfServer.prototype.getAllMetadata = function () {
        return axios.get(this.getMetadataUrl).then(function (response) {
            return response.data;
        });
    };
    UmfServer.prototype.postForm = function (form, data) {
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
            return invokeFormResponses[0].data;
        }).catch(function (error) {
            alert(error.response.data.error);
            return null;
        });
    };
    return UmfServer;
}());

var FormInstance = /** @class */ (function () {
    function FormInstance(metadata, controllerRegister) {
        this.outputs = [];
        this.inputs = [];
        this.formEventHandlers = [];
        this.metadata = metadata;
        this.inputs = controllerRegister.createInputControllers(this.metadata.inputFields);
    }
    FormInstance.prototype.fire = function (eventName, parameters) {
        var _this = this;
        var promises = [];
        // Run input event handlers.
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            if (input.metadata.eventHandlers != null) {
                for (var _b = 0, _c = input.metadata.eventHandlers; _b < _c.length; _b++) {
                    var eventHandlerMetadata = _c[_b];
                    if (eventHandlerMetadata.runAt === eventName) {
                        var handler = parameters.app.controlRegister.inputFieldEventHandlers[eventHandlerMetadata.id];
                        if (handler == null) {
                            throw new Error("Could not find input event handler '" + eventHandlerMetadata.id + "'.");
                        }
                        var promise = handler.run(input, eventHandlerMetadata, parameters);
                        promises.push(promise);
                    }
                }
            }
        }
        // Run output event handlers.
        for (var _d = 0, _e = this.outputs; _d < _e.length; _d++) {
            var output = _e[_d];
            if (output.metadata.eventHandlers != null) {
                for (var _f = 0, _g = output.metadata.eventHandlers; _f < _g.length; _f++) {
                    var eventHandlerMetadata = _g[_f];
                    if (eventHandlerMetadata.runAt === eventName) {
                        var handler = parameters.app.controlRegister.outputFieldEventHandlers[eventHandlerMetadata.id];
                        if (handler == null) {
                            throw new Error("Could not find output event handler '" + eventHandlerMetadata.id + "'.");
                        }
                        var promise = handler.run(output, eventHandlerMetadata, parameters);
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
        return Promise.all(promises);
    };
    FormInstance.prototype.initializeInputFields = function (data) {
        var promises = [];
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var fieldMetadata = _a[_i];
            var value = null;
            if (data != null) {
                for (var prop in data) {
                    if (data.hasOwnProperty(prop) && prop.toLowerCase() == fieldMetadata.metadata.id.toLowerCase()) {
                        value = data[prop];
                        break;
                    }
                }
            }
            promises.push(fieldMetadata.init(value));
        }
        return Promise.all(promises);
    };
    FormInstance.prototype.setInputFields = function (data) {
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var field = _a[_i];
            field.value = data[field.metadata.id];
        }
    };
    FormInstance.prototype.prepareForm = function (mustHaveAllRequiredInputs) {
        var data = {};
        var promises = [];
        var hasRequiredMissingInput = false;
        var _loop_1 = function (input) {
            promise = input.getValue().then(function (value) {
                data[input.metadata.id] = value;
                if (input.metadata.required && (value == null || (typeof (value) === "string" && value == ""))) {
                    hasRequiredMissingInput = true;
                }
            });
            promises.push(promise);
        };
        var promise;
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            _loop_1(input);
        }
        return Promise.all(promises).then(function () {
            // If not all required inputs were entered, then do not post.
            if (hasRequiredMissingInput &&
                mustHaveAllRequiredInputs) {
                return null;
            }
            return data;
        });
    };
    FormInstance.prototype.getSerializedInputValues = function () {
        var data = {};
        var promises = [];
        var _loop_2 = function (input) {
            promise = input.serialize().then(function (t) {
                // Don't include inputs without values, because we only
                // want to serialize "non-default" values.
                if (t.value != null && t.value != "") {
                    data[input.metadata.id] = t.value;
                }
            });
            promises.push(promise);
        };
        var promise;
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            _loop_2(input);
        }
        return Promise.all(promises).then(function () { return data; });
    };
    FormInstance.prototype.getSerializedInputValuesFromObject = function (value) {
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
            if (valueAsString != null && valueAsString != "") {
                data[input.metadata.id] = valueAsString;
            }
        }
        return data;
    };
    FormInstance.prototype.setOutputFieldValues = function (response) {
        if (response == null) {
            this.outputs = [];
            return;
        }
        var fields = Array();
        var normalizedResponse = this.getNormalizedObject(response);
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
    FormInstance.prototype.getNormalizedObject = function (response) {
        var normalizedResponse = {};
        for (var field in response) {
            if (response.hasOwnProperty(field) && field !== "metadata") {
                normalizedResponse[field.toLowerCase()] = response[field];
            }
        }
        return normalizedResponse;
    };
    return FormInstance;
}());

var UmfApp = /** @class */ (function () {
    function UmfApp(server, inputRegister) {
        this.formsById = {};
        this.menusByName = {};
        this.formResponseHandlers = {};
        this.server = server;
        this.controlRegister = inputRegister;
    }
    UmfApp.prototype.runEventHandler = function (handler) {
    };
    UmfApp.prototype.useRouter = function (router) {
        this.go = function (form, values) {
            return router.go(form, values);
        };
        this.makeUrl = function (form, values) {
            return router.makeUrl(form, values);
        };
    };
    UmfApp.prototype.registerResponseHandler = function (handler) {
        this.formResponseHandlers[handler.name] = handler;
    };
    UmfApp.prototype.load = function () {
        var _this = this;
        return this.server.getAllMetadata()
            .then(function (response) {
            _this.forms = response.forms;
            _this.menus = response.menus;
            _this.formsById = {};
            _this.menusByName = {};
            for (var _i = 0, _a = _this.forms; _i < _a.length; _i++) {
                var form = _a[_i];
                _this.formsById[form.id] = form;
            }
            for (var _b = 0, _c = _this.menus; _b < _c.length; _b++) {
                var menu = _c[_b];
                _this.menusByName[menu.name] = menu;
            }
        });
    };
    UmfApp.prototype.getForm = function (id) {
        return this.formsById[id];
    };
    UmfApp.prototype.getMenu = function (name) {
        return this.menusByName[name];
    };
    UmfApp.prototype.getFormInstance = function (formId, throwError) {
        if (throwError === void 0) { throwError = false; }
        var metadata = this.getForm(formId);
        if (metadata == null) {
            if (throwError) {
                var error = Error("Form " + formId + " not found.");
                console.error(error);
                throw error;
            }
            return null;
        }
        return new FormInstance(metadata, this.controlRegister);
    };
    UmfApp.prototype.handleResponse = function (response, form) {
        var responseMetadata = response.metadata || new FormResponseMetadata();
        var handler = this.formResponseHandlers[responseMetadata.handler];
        if (handler == null) {
            var error = new Error("Cannot find FormResponseHandler \"" + responseMetadata.handler + "\".");
            console.error(error);
            throw error;
        }
        return handler.handle(response, form);
    };
    UmfApp.prototype.runFunctions = function (functionMetadata) {
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
            var promise = handler.run(f);
            promises.push(promise);
        }
        return Promise.all(promises);
    };
    return UmfApp;
}());

var InputController = /** @class */ (function () {
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
var StringInputController = /** @class */ (function (_super) {
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

var ControlRegister$$1 = /** @class */ (function () {
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
            var entry = this.inputs[field.type] || {};
            var ctor = entry.controller || StringInputController;
            result.push(new ctor(field));
        }
        result.sort(function (a, b) {
            return a.metadata.orderIndex - b.metadata.orderIndex;
        });
        return result;
    };
    ControlRegister$$1.prototype.getOutput = function (field) {
        return field != null
            ? this.outputs[field.metadata.type] || this.outputs["text"]
            : this.outputs["text"];
    };
    ControlRegister$$1.prototype.getInput = function (type) {
        return type != null
            ? this.inputs[type] || this.inputs["text"]
            : this.inputs["text"];
    };
    ControlRegister$$1.prototype.registerInputFieldControl = function (name, svelteComponent, controller, constants) {
        if (constants === void 0) { constants = null; }
        this.inputs[name] = {
            controller: controller,
            component: svelteComponent,
            constants: constants
        };
    };
    ControlRegister$$1.prototype.registerOutputFieldControl = function (name, control, constants) {
        if (constants === void 0) { constants = null; }
        this.outputs[name] = {
            constructor: control,
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

var OutputFieldValue = /** @class */ (function () {
    function OutputFieldValue() {
    }
    return OutputFieldValue;
}());

var FormEventHandler = /** @class */ (function () {
    function FormEventHandler() {
    }
    return FormEventHandler;
}());

var InputFieldEventHandler = /** @class */ (function () {
    function InputFieldEventHandler() {
    }
    return InputFieldEventHandler;
}());

var OutputFieldEventHandler = /** @class */ (function () {
    function OutputFieldEventHandler() {
    }
    return OutputFieldEventHandler;
}());

var MessageResponseHandler = /** @class */ (function () {
    function MessageResponseHandler() {
        this.name = "message";
    }
    MessageResponseHandler.prototype.handle = function (response, form) {
        alert(response.message);
    };
    return MessageResponseHandler;
}());

var RedirectResponseHandler = /** @class */ (function () {
    function RedirectResponseHandler(goToForm) {
        this.name = "redirect";
        this.goToForm = goToForm;
    }
    RedirectResponseHandler.prototype.handle = function (response, form) {
        this.goToForm(response.form, response.inputFieldValues);
    };
    return RedirectResponseHandler;
}());
var RedirectResponse = /** @class */ (function (_super) {
    __extends(RedirectResponse, _super);
    function RedirectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RedirectResponse;
}(FormResponse));

var ReloadResponseHandler = /** @class */ (function () {
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
var ReloadResponse = /** @class */ (function (_super) {
    __extends(ReloadResponse, _super);
    function ReloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReloadResponse;
}(FormResponse));

var DateInputController = /** @class */ (function (_super) {
    __extends(DateInputController, _super);
    function DateInputController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.valueAsText = null;
        return _this;
    }
    DateInputController.prototype.init = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.value = _this.parseDate(value);
            _this.valueAsText = _this.serializeValue(_this.value);
            resolve(_this);
        });
    };
    DateInputController.prototype.getValue = function () {
        var date = this.parseDate(this.valueAsText);
        return Promise.resolve(date);
    };
    DateInputController.prototype.serializeValue = function (date) {
        var asDate = typeof (date) === "string"
            ? this.parseDate(date)
            : date;
        return asDate != null
            ? asDate.getFullYear() + "-" + this.format2DecimalPlaces(asDate.getMonth() + 1) + "-" + this.format2DecimalPlaces(asDate.getDate())
            : null;
    };
    DateInputController.prototype.parseDate = function (value) {
        var dateAsNumber = Date.parse(value);
        return isNaN(dateAsNumber) ? null : new Date(dateAsNumber);
    };
    DateInputController.prototype.format2DecimalPlaces = function (n) {
        return ("0" + n).slice(-2);
    };
    return DateInputController;
}(InputController));

var NumberInputController = /** @class */ (function (_super) {
    __extends(NumberInputController, _super);
    function NumberInputController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberInputController.prototype.serializeValue = function (value) {
        return value != null ? value.toString() : null;
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
    return NumberInputController;
}(InputController));

var DropdownInputController = /** @class */ (function (_super) {
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
            _this.selected = value;
            _this.value = _this.parse(value);
            resolve(_this);
        });
    };
    DropdownInputController.prototype.getValue = function () {
        return Promise.resolve(this.parse(this.selected));
    };
    DropdownInputController.prototype.parse = function (value) {
        return value == null || value == "" ? null : { value: value };
    };
    return DropdownInputController;
}(InputController));

var BooleanInputController = /** @class */ (function (_super) {
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
        return value != null
            ? value.toString() == "true"
            : this.metadata.required ? false : null;
    };
    return BooleanInputController;
}(InputController));

var PaginationParameters = /** @class */ (function () {
    function PaginationParameters(pageIndex, pageSize, orderBy, ascending) {
        this.pageIndex = PaginationParameters.asInt(pageIndex, 1);
        this.pageSize = PaginationParameters.asInt(pageSize, 10);
        this.orderBy = orderBy || null;
        this.ascending = PaginationParameters.asBool(ascending, null);
    }
    PaginationParameters.asInt = function (value, defaultValue) {
        if (typeof (value) === "string") {
            var result = parseInt(value);
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
var PaginatorInputController = /** @class */ (function (_super) {
    __extends(PaginatorInputController, _super);
    function PaginatorInputController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginatorInputController.prototype.serializeValue = function (value) {
        var p = typeof (value) === "string" || value == null
            ? this.parse(value)
            : value;
        if (p.pageIndex == 1 &&
            p.pageSize == 10 &&
            p.ascending == null &&
            p.orderBy == null) {
            return "";
        }
        var result = p.pageIndex + "-" + p.pageSize;
        if (p.orderBy != null) {
            result += "-" + p.ascending + "-" + p.orderBy + "}";
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
        // 1-10-asc-firstname
        // 1-10
        if (value == null || value.length === 0) {
            return new PaginationParameters();
        }
        var components = value.split("-");
        return new PaginationParameters(components[0], components[1], components[2], components[3]);
    };
    return PaginatorInputController;
}(InputController));

var MultiSelectInputController = /** @class */ (function (_super) {
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
        return Promise.resolve(this.value);
    };
    MultiSelectInputController.prototype.parse = function (value) {
        return value == null || value == ""
            ? new MultiSelectValue()
            : new MultiSelectValue(value.split(","));
    };
    return MultiSelectInputController;
}(InputController));
var MultiSelectValue = /** @class */ (function () {
    function MultiSelectValue(items) {
        this.items = [];
        this.items = items;
    }
    return MultiSelectValue;
}());

var TypeaheadInputController = /** @class */ (function (_super) {
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
        return Promise.resolve(this.value);
    };
    TypeaheadInputController.prototype.parse = function (value) {
        return value == null || value == ""
            ? new TypeaheadValue()
            : new TypeaheadValue(value);
    };
    return TypeaheadInputController;
}(InputController));
var TypeaheadValue = /** @class */ (function () {
    function TypeaheadValue(value) {
        this.value = value;
    }
    return TypeaheadValue;
}());

var PasswordInputController = /** @class */ (function (_super) {
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
        return value == null || value == "" ? null : { value: value };
    };
    return PasswordInputController;
}(InputController));

var TextareaInputController = /** @class */ (function (_super) {
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
        return value == null || value == "" ? null : { value: value };
    };
    return TextareaInputController;
}(InputController));

function noop$1() {}

function assign(target) {
	var k,
		source,
		i = 1,
		len = arguments.length;
	for (; i < len; i++) {
		source = arguments[i];
		for (k in source) target[k] = source[k];
	}

	return target;
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

function destroyEach(iterations) {
	for (var i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d();
	}
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

function differs(a, b) {
	return a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function dispatchObservers(component, group, changed, newState, oldState) {
	for (var key in group) {
		if (!changed[key]) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function init(component, options) {
	component.options = options;

	component._observers = { pre: blankObject(), post: blankObject() };
	component._handlers = blankObject();
	component._root = options._root || component;
	component._yield = options._yield;
	component._bind = options._bind;
}

function observe(key, callback, options) {
	var group = options && options.defer
		? this._observers.post
		: this._observers.pre;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
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
	if (this._root._lock) return;
	this._root._lock = true;
	callAll(this._root._beforecreate);
	callAll(this._root._oncreate);
	callAll(this._root._aftercreate);
	this._root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign({}, oldState, newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);
	dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
	this._fragment.p(changed, this._state);
	dispatchObservers(this, this._observers.post, changed, this._state, oldState);
}

function callAll(fns) {
	while (fns && fns.length) fns.pop()();
}

function _mount(target, anchor) {
	this._fragment.m(target, anchor);
}

function _unmount() {
	this._fragment.u();
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
	_unmount: _unmount
};

/* src\core\ui\inputs\Text.html generated by Svelte v1.40.1 */
function create_main_fragment(state, component) {
	var input, input_required_value, input_updating = false;

	function input_input_handler() {
		input_updating = true;
		var state = component.get();
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
			input.type = "text";
			input.id = state.id;
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			addListener$1(input, "input", input_input_handler);
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.value = state.field.value;
		},

		p: function update(changed, state) {
			if (changed.id) {
				input.id = state.id;
			}

			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}

			if (!input_updating) {
				input.value = state.field.value;
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

function SvelteComponent(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent.prototype, proto);

/* src\core\ui\inputs\Number.html generated by Svelte v1.40.1 */
function create_main_fragment$1(state, component) {
	var input, input_required_value, input_updating = false;

	function input_input_handler() {
		input_updating = true;
		var state = component.get();
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
			input.type = "number";
			input.id = state.id;
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			addListener$1(input, "input", input_input_handler);
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.value = state.field.value;
		},

		p: function update(changed, state) {
			if (changed.id) {
				input.id = state.id;
			}

			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}

			if (!input_updating) {
				input.value = state.field.value;
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

function SvelteComponent$1(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment$1(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$1.prototype, proto);

/* src\core\ui\inputs\Date.html generated by Svelte v1.40.1 */
function create_main_fragment$2(state, component) {
	var input, input_required_value, input_updating = false;

	function input_input_handler() {
		input_updating = true;
		var state = component.get();
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
			input.type = "datetime";
			input.id = state.id;
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			addListener$1(input, "input", input_input_handler);
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.value = state.field.valueAsText;
		},

		p: function update(changed, state) {
			if (changed.id) {
				input.id = state.id;
			}

			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}

			if (!input_updating) {
				input.value = state.field.valueAsText;
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

function SvelteComponent$2(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment$2(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$2.prototype, proto);

/* src\core\ui\inputs\Dropdown.html generated by Svelte v1.40.1 */
function create_main_fragment$3(state, component) {
	var select, option, select_required_value, select_updating = false;

	var items = state.field.metadata.customProperties.items;

	var each_blocks = [];

	for (var i = 0; i < items.length; i += 1) {
		each_blocks[i] = create_each_block(state, items, items[i], i, component);
	}

	function select_change_handler() {
		select_updating = true;
		var selectedOption = select.querySelector(':checked') || select.options[0];
		var state = component.get();
		state.field.selected = selectedOption && selectedOption.__value;
		component.set({ field: state.field });
		select_updating = false;
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
			option.__value = '';
			option.value = option.__value;
			select.id = state.id;
			select.required = select_required_value = state.field.metadata.required;
			select.tabIndex = state.tabindex;

			if (!('field' in state)) component._root._beforecreate.push(select_change_handler);

			addListener$1(select, "change", select_change_handler);
		},

		m: function mount(target, anchor) {
			insertNode(select, target, anchor);
			appendNode(option, select);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			var value = state.field.selected;
			for (var i = 0; i < select.options.length; i += 1) {
				var option_1 = select.options[i];

				if (option_1.__value === value) {
					option_1.selected = true;
					break;
				}
			}
		},

		p: function update(changed, state) {
			var items = state.field.metadata.customProperties.items;

			if (changed.field) {
				for (var i = 0; i < items.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, items, items[i], i);
					} else {
						each_blocks[i] = create_each_block(state, items, items[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = items.length;
			}

			if (changed.id) {
				select.id = state.id;
			}

			if ((changed.field) && select_required_value !== (select_required_value = state.field.metadata.required)) {
				select.required = select_required_value;
			}

			if (changed.tabindex) {
				select.tabIndex = state.tabindex;
			}

			if (!select_updating) {
				var value = state.field.selected;
				for (var i = 0; i < select.options.length; i += 1) {
					var option_1 = select.options[i];

					if (option_1.__value === value) {
						option_1.selected = true;
						break;
					}
				}
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
		}
	};
}

// (7:1) {{#each field.metadata.customProperties.items as option}}
function create_each_block(state, items, option, option_index, component) {
	var option_1, option_1_value_value, text_value = option.label, text;

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

		p: function update(changed, state, items, option, option_index) {
			if ((changed.field) && option_1_value_value !== (option_1_value_value = option.value)) {
				option_1.__value = option_1_value_value;
			}

			option_1.value = option_1.__value;
			if ((changed.field) && text_value !== (text_value = option.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(option_1);
		},

		d: noop$1
	};
}

function SvelteComponent$3(options) {
	init(this, options);
	this._state = options.data || {};

	if (!options._root) {
		this._oncreate = [];
		this._beforecreate = [];
	}

	this._fragment = create_main_fragment$3(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		callAll(this._beforecreate);
	}
}

assign(SvelteComponent$3.prototype, proto);

/* src\core\ui\inputs\Boolean.html generated by Svelte v1.40.1 */
function encapsulateStyles(node) {
	setAttribute(node, "svelte-4170451394", "");
}

function add_css() {
	var style = createElement("style");
	style.id = 'svelte-4170451394-style';
	style.textContent = "[svelte-4170451394].checkbox,[svelte-4170451394] .checkbox{height:20px;width:20px;margin:0.6rem 0.5rem 1.1rem 0.5rem;overflow:initial;position:relative;clip:initial;-webkit-clip-path:initial;clip-path:initial;top:3px}";
	appendNode(style, document.head);
}

function create_main_fragment$4(state, component) {
	var if_block_anchor;

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(state, component);

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
				if_block = current_block_type(state, component);
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
function create_if_block(state, component) {
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
			encapsulateStyles(input);
			input.type = "checkbox";
			input.id = state.id;
			input.className = "checkbox";
			input.tabIndex = state.tabindex;
			addListener$1(input, "change", input_change_handler);
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.checked = state.field.value;
		},

		p: function update(changed, state) {
			if (changed.id) {
				input.id = state.id;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}

			input.checked = state.field.value;
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
function create_if_block_1(state, component) {
	var select, option, option_1, option_1_value_value, option_2, option_2_value_value, select_updating = false;

	function select_change_handler() {
		select_updating = true;
		var selectedOption = select.querySelector(':checked') || select.options[0];
		var state = component.get();
		state.field.value = selectedOption && selectedOption.__value;
		component.set({ field: state.field });
		select_updating = false;
	}

	return {
		c: function create() {
			select = createElement("select");
			option = createElement("option");
			option_1 = createElement("option");
			option_1.textContent = "Yes";
			option_2 = createElement("option");
			option_2.textContent = "No";
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles(select);
			option_1.__value = option_1_value_value = true;
			option_1.value = option_1.__value;
			option_2.__value = option_2_value_value = false;
			option_2.value = option_2.__value;

			if (!('field' in state)) component._root._beforecreate.push(select_change_handler);

			addListener$1(select, "change", select_change_handler);
		},

		m: function mount(target, anchor) {
			insertNode(select, target, anchor);
			appendNode(option, select);

			option.__value = option.textContent;

			appendNode(option_1, select);
			appendNode(option_2, select);

			var value = state.field.value;
			for (var i = 0; i < select.options.length; i += 1) {
				var option_3 = select.options[i];

				if (option_3.__value === value) {
					option_3.selected = true;
					break;
				}
			}
		},

		p: function update(changed, state) {
			option.__value = option.textContent;
			option_1.value = option_1.__value;
			option_2.value = option_2.__value;

			if (!select_updating) {
				var value = state.field.value;
				for (var i = 0; i < select.options.length; i += 1) {
					var option_3 = select.options[i];

					if (option_3.__value === value) {
						option_3.selected = true;
						break;
					}
				}
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

function select_block_type(state) {
	if (state.field.metadata.required) return create_if_block;
	return create_if_block_1;
}

function SvelteComponent$4(options) {
	init(this, options);
	this._state = options.data || {};

	if (!document.getElementById("svelte-4170451394-style")) add_css();

	if (!options._root) {
		this._oncreate = [];
		this._beforecreate = [];
	}

	this._fragment = create_main_fragment$4(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		callAll(this._beforecreate);
	}
}

assign(SvelteComponent$4.prototype, proto);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var choices = createCommonjsModule(function (module, exports) {
/*! choices.js v2.8.12 | (c) 2017 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ 
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

	var _index3 = __webpack_require__(30);

	var _utils = __webpack_require__(31);

	__webpack_require__(32);

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
	      prependValue: null,
	      appendValue: null,
	      renderSelectedChoices: 'auto',
	      loadingText: 'Loading...',
	      noResultsText: 'No results found',
	      noChoicesText: 'No choices to choose from',
	      itemSelectText: 'Press to select',
	      addItemText: function addItemText(value) {
	        return 'Press Enter to add <b>"' + value + '"</b>';
	      },
	      maxItemText: function maxItemText(maxItemCount) {
	        return 'Only ' + maxItemCount + ' values can be added.';
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
	        loadingState: 'is-loading'
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
	    this.isTextElement = this.passedElement.type === 'text';
	    this.isSelectOneElement = this.passedElement.type === 'select-one';
	    this.isSelectMultipleElement = this.passedElement.type === 'select-multiple';
	    this.isSelectElement = this.isSelectOneElement || this.isSelectMultipleElement;
	    this.isValidElementType = this.isTextElement || this.isSelectElement;
	    this.isIe11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
	    this.isScrollingOnIe = false;

	    if (!this.passedElement) {
	      if (!this.config.silent) {
	        console.error('Passed element not found');
	      }
	      return;
	    }

	    if (this.config.shouldSortItems === true && this.isSelectOneElement) {
	      if (!this.config.silent) {
	        console.warn('shouldSortElements: Type of passed element is \'select-one\', falling back to false.');
	      }
	    }

	    this.highlightPosition = 0;
	    this.canSearch = this.config.searchEnabled;

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

	      // If sorting is enabled or the user is searching, filter choices
	      if (this.config.shouldSort || this.isSearching) {
	        rendererableChoices.sort(filter);
	      }

	      var choiceLimit = rendererableChoices.length;

	      if (this.isSearching) {
	        choiceLimit = Math.min(searchResultLimit, rendererableChoices.length - 1);
	      } else if (renderChoiceLimit > 0 && !withinGroup) {
	        choiceLimit = Math.min(renderChoiceLimit, rendererableChoices.length - 1);
	      }

	      // Add each choice to dropdown within range
	      for (var i = 0; i < choiceLimit; i++) {
	        appendChoice(rendererableChoices[i]);
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

	                dropdownItem = this._getTemplate('notice', notice);
	              } else {
	                notice = (0, _utils.isType)('Function', this.config.noChoicesText) ? this.config.noChoicesText() : this.config.noChoicesText;

	                dropdownItem = this._getTemplate('notice', notice);
	              }

	              this.choiceList.appendChild(dropdownItem);
	            }
	          }
	        }

	        // Items
	        if (this.currentState.items !== this.prevState.items) {
	          var _activeItems = this.store.getItemsFilteredByActive();
	          if (_activeItems) {
	            // Create a fragment to store our list items
	            // (so we don't have to update the DOM for each item)
	            var itemListFragment = this.renderItems(_activeItems);

	            // Clear list
	            this.itemList.innerHTML = '';

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
	              _this10._addChoice(item.value, item.label, true, false, -1, item.customProperties, null);
	            } else {
	              _this10._addItem(item.value, item.label, item.id, undefined, item.customProperties, null);
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
	            return choice.value === val;
	          });

	          if (foundChoice) {
	            if (!foundChoice.selected) {
	              _this11._addItem(foundChoice.value, foundChoice.label, foundChoice.id, foundChoice.groupId, foundChoice.customProperties, foundChoice.keyCode);
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
	          // Add choices if passed
	          if (choices && choices.length) {
	            this.containerOuter.classList.remove(this.config.classNames.loadingState);
	            choices.forEach(function (result) {
	              if (result.choices) {
	                _this12._addGroup(result, result.id || null, value, label);
	              } else {
	                _this12._addChoice(result[value], result[label], result.selected, result.disabled, undefined, result['customProperties'], null);
	              }
	            });
	          }
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
	      this.passedElement.disabled = false;
	      var isDisabled = this.containerOuter.classList.contains(this.config.classNames.disabledState);
	      if (this.initialised && isDisabled) {
	        this._addEventListeners();
	        this.passedElement.removeAttribute('disabled');
	        this.input.removeAttribute('disabled');
	        this.containerOuter.classList.remove(this.config.classNames.disabledState);
	        this.containerOuter.removeAttribute('aria-disabled');
	        if (this.isSelectOneElement) {
	          this.containerOuter.setAttribute('tabindex', '0');
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
	      this.passedElement.disabled = true;
	      var isEnabled = !this.containerOuter.classList.contains(this.config.classNames.disabledState);
	      if (this.initialised && isEnabled) {
	        this._removeEventListeners();
	        this.passedElement.setAttribute('disabled', '');
	        this.input.setAttribute('disabled', '');
	        this.containerOuter.classList.add(this.config.classNames.disabledState);
	        this.containerOuter.setAttribute('aria-disabled', 'true');
	        if (this.isSelectOneElement) {
	          this.containerOuter.setAttribute('tabindex', '-1');
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
	          var placeholder = this.config.placeholder ? this.config.placeholderValue || this.passedElement.getAttribute('placeholder') : false;
	          if (placeholder) {
	            var placeholderItem = this._getTemplate('placeholder', placeholder);
	            this.itemList.appendChild(placeholderItem);
	          }
	        }
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
	          this._addItem(choice.value, choice.label, choice.id, choice.groupId, choice.customProperties, choice.keyCode);
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
	     * @param {Boolean} isLoading default value set to 'true'.
	     * @return
	     * @private
	     */

	  }, {
	    key: '_handleLoadingState',
	    value: function _handleLoadingState() {
	      var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      var placeholderItem = this.itemList.querySelector('.' + this.config.classNames.placeholder);
	      if (isLoading) {
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
	        var placeholder = this.config.placeholder ? this.config.placeholderValue || this.passedElement.getAttribute('placeholder') : false;

	        if (this.isSelectOneElement) {
	          placeholderItem.innerHTML = placeholder || '';
	        } else {
	          this.input.placeholder = placeholder || '';
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
	          parsedResults.forEach(function (result) {
	            if (result.choices) {
	              var groupId = result.id || null;
	              _this15._addGroup(result, groupId, value, label);
	            } else {
	              _this15._addChoice(result[value], result[label], result.selected, result.disabled, undefined, result['customProperties'], null);
	            }
	          });
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
	        var haystack = this.store.getChoicesFilteredBySelectable();
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
	      if (this.config.placeholderValue || this.passedElement.getAttribute('placeholder') && this.config.placeholder) {
	        // If there is a placeholder, we only want to set the width of the input when it is a greater
	        // length than 75% of the placeholder. This stops the input jumping around.
	        var placeholder = this.config.placeholder ? this.config.placeholderValue || this.passedElement.getAttribute('placeholder') : false;
	        if (this.input.value && this.input.value.length >= placeholder.length / 1.25) {
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
	        this.input.setAttribute('aria-activedescendant', passedEl.id);
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
	      var keyCode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

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

	      this.store.dispatch((0, _index3.addItem)(passedValue, passedLabel, id, passedOptionId, groupId, customProperties, passedKeyCode));

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
	      var keyCode = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

	      if (typeof value === 'undefined' || value === null) {
	        return;
	      }

	      // Generate unique id
	      var choices = this.store.getChoices();
	      var choiceLabel = label || value;
	      var choiceId = choices ? choices.length + 1 : 1;
	      var choiceElementId = this.baseId + '-' + this.idNames.itemChoice + '-' + choiceId;

	      this.store.dispatch((0, _index3.addChoice)(value, choiceLabel, choiceId, groupId, isDisabled, choiceElementId, customProperties, keyCode));

	      if (isSelected) {
	        this._addItem(value, choiceLabel, choiceId, undefined, customProperties, keyCode);
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
	          var label = (0, _utils.isType)('Object', option) ? option[labelKey] : option.innerHTML;

	          _this21._addChoice(option[valueKey], label, option.selected, isOptDisabled, groupId, option.customProperties);
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

	          var localClasses = (0, _classnames2.default)(globalClasses.item, (_classNames2 = {}, _defineProperty(_classNames2, globalClasses.highlightedState, data.highlighted), _defineProperty(_classNames2, globalClasses.itemSelectable, !data.highlighted), _classNames2));

	          if (_this22.config.removeItemButton) {
	            var _classNames3;

	            localClasses = (0, _classnames2.default)(globalClasses.item, (_classNames3 = {}, _defineProperty(_classNames3, globalClasses.highlightedState, data.highlighted), _defineProperty(_classNames3, globalClasses.itemSelectable, !data.disabled), _classNames3));

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

	          var localClasses = (0, _classnames2.default)(globalClasses.item, globalClasses.itemChoice, (_classNames5 = {}, _defineProperty(_classNames5, globalClasses.itemDisabled, data.disabled), _defineProperty(_classNames5, globalClasses.itemSelectable, !data.disabled), _classNames5));

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
	          var localClasses = (0, _classnames2.default)(globalClasses.item, globalClasses.itemChoice);

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
	      var placeholder = this.config.placeholder ? this.config.placeholderValue || this.passedElement.getAttribute('placeholder') : false;

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

	      // If placeholder has been enabled and we have a value
	      if (placeholder) {
	        input.placeholder = placeholder;
	        if (!this.isSelectOneElement) {
	          input.style.width = (0, _utils.getWidthOfInput)(input);
	        }
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
	              disabled: o.disabled || o.parentNode.disabled
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
	              if (hasSelectedChoice || !hasSelectedChoice && index > 0) {
	                // If there is a selected choice already or the choice is not
	                // the first in the array, add each choice normally
	                _this23._addChoice(choice.value, choice.label, choice.selected, choice.disabled, undefined, choice.customProperties);
	              } else {
	                // Otherwise pre-select the first choice in the array
	                _this23._addChoice(choice.value, choice.label, true, false, undefined, choice.customProperties);
	              }
	            } else {
	              _this23._addChoice(choice.value, choice.label, choice.selected, choice.disabled, undefined, choice.customProperties);
	            }
	          });
	        }
	      } else if (this.isTextElement) {
	        // Add any preset values seperated by delimiter
	        this.presetItems.forEach(function (item) {
	          var itemType = (0, _utils.getType)(item);
	          if (itemType === 'Object') {
	            if (!item.value) {
	              return;
	            }
	            _this23._addItem(item.value, item.label, item.id, undefined, item.customProperties);
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
	      }, []);

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
	      }, []);

	      return values;
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
	};

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
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
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
	      listeners[i]();
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
	   * https://github.com/zenparsing/es-observable
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

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
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

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
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

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appReducer = (0, _redux.combineReducers)({
	  items: _items2.default,
	  groups: _groups2.default,
	  choices: _choices2.default
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
	var addItem = exports.addItem = function addItem(value, label, id, choiceId, groupId, customProperties, keyCode) {
	  return {
	    type: 'ADD_ITEM',
	    value: value,
	    label: label,
	    id: id,
	    choiceId: choiceId,
	    groupId: groupId,
	    customProperties: customProperties,
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

	var addChoice = exports.addChoice = function addChoice(value, label, id, groupId, disabled, elementId, customProperties, keyCode) {
	  return {
	    type: 'ADD_CHOICE',
	    value: value,
	    label: label,
	    id: id,
	    groupId: groupId,
	    disabled: disabled,
	    elementId: elementId,
	    customProperties: customProperties,
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

/***/ }),
/* 31 */
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
	      el = document.createElement("fakeelement");

	  var transitions = {
	    "transition": "transitionend",
	    "OTransition": "oTransitionEnd",
	    "MozTransition": "transitionend",
	    "WebkitTransition": "webkitTransitionEnd"
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
	 * Remove html tags from a string
	 * @param  {String}  Initial string/html
	 * @return {String}  Sanitised string
	 */
	var stripHTML = exports.stripHTML = function stripHTML(html) {
	  var el = document.createElement("DIV");
	  el.innerHTML = html;
	  return el.textContent || el.innerText || "";
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
	    var testEl = strToEl('<span>' + value + '</span>');
	    testEl.style.position = 'absolute';
	    testEl.style.padding = '0';
	    testEl.style.top = '-9999px';
	    testEl.style.left = '-9999px';
	    testEl.style.width = 'auto';
	    testEl.style.whiteSpace = 'pre';

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
/* 32 */
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

/* src\core\ui\inputs\MultiSelect.html generated by Svelte v1.40.1 */
function mapToTypeaheadItems(items) {
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

function oncreate() {
	var field = this.get("field");
	var source = field.metadata.customProperties.source;
	var app = this.get("app");
	var a = new Choices(this.refs.input, {
		duplicateItems: true,
		searchResultLimit: 10,
		removeItemButton: true,
		maxItemCount: field.maxItemCount
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
				a.ajax(callback => {
					return app.server.postForm(source, { query: query }).then(data => {
						var toAdd = data.items.filter(t => {
							var key = JSON.stringify(t.value);
							if (addedItems[key] == null) {
								addedItems[key] = true;

								// Add item.
								return true;
							}

							// Don't add item.
							return false;
						});

						callback(toAdd, "value", "label");
					});
				});
			}, 300);
		});

		var currentValue = field.maxItemCount == 1
			? (field.value || {}).value || ""
			: (field.value || {}).items || [];

		if (currentValue.length > 0) {
			a.ajax(callback => {
				return app.server.postForm(source, { ids: field.value }).then(data => {
					callback(mapToTypeaheadItems(data.items), "value", "label");
					setInputValue(a, field);
				});
			});
		}
	}
	else {
		a.setChoices(mapToTypeaheadItems(source), "value", "label", true);

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

function create_main_fragment$5(state, component) {
	var select, select_required_value;

	return {
		c: function create() {
			select = createElement("select");
			this.h();
		},

		h: function hydrate() {
			select.className = "multi-select";
			setAttribute(select, "type", "text");
			select.id = state.id;
			select.required = select_required_value = state.field.metadata.required;
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

			if ((changed.field) && select_required_value !== (select_required_value = state.field.metadata.required)) {
				select.required = select_required_value;
			}

			if (changed.tabindex) {
				select.tabIndex = state.tabindex;
			}
		},

		u: function unmount() {
			detachNode(select);
		},

		d: function destroy$$1() {
			if (component.refs.input === select) component.refs.input = null;
		}
	};
}

function SvelteComponent$5(options) {
	init(this, options);
	this.refs = {};
	this._state = options.data || {};

	var _oncreate = oncreate.bind(this);

	if (!options._root) {
		this._oncreate = [_oncreate];
	} else {
	 	this._root._oncreate.push(_oncreate);
	 }

	this._fragment = create_main_fragment$5(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$5.prototype, proto);

/* src\core\ui\inputs\Password.html generated by Svelte v1.40.1 */
function create_main_fragment$6(state, component) {
	var input, input_required_value, input_updating = false;

	function input_input_handler() {
		input_updating = true;
		var state = component.get();
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
			input.type = "password";
			input.id = state.id;
			input.required = input_required_value = state.field.metadata.required;
			input.tabIndex = state.tabindex;
			addListener$1(input, "input", input_input_handler);
		},

		m: function mount(target, anchor) {
			insertNode(input, target, anchor);

			input.value = state.field.selected;
		},

		p: function update(changed, state) {
			if (changed.id) {
				input.id = state.id;
			}

			if ((changed.field) && input_required_value !== (input_required_value = state.field.metadata.required)) {
				input.required = input_required_value;
			}

			if (changed.tabindex) {
				input.tabIndex = state.tabindex;
			}

			if (!input_updating) {
				input.value = state.field.selected;
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

function SvelteComponent$6(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment$6(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$6.prototype, proto);

/* src\core\ui\inputs\Textarea.html generated by Svelte v1.40.1 */
function encapsulateStyles$1(node) {
	setAttribute(node, "svelte-2941923377", "");
}

function add_css$1() {
	var style = createElement("style");
	style.id = 'svelte-2941923377-style';
	style.textContent = "textarea[svelte-2941923377],[svelte-2941923377] textarea{width:100%;height:100px}";
	appendNode(style, document.head);
}

function create_main_fragment$7(state, component) {
	var textarea, textarea_required_value, textarea_updating = false;

	function textarea_input_handler() {
		textarea_updating = true;
		var state = component.get();
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
			encapsulateStyles$1(textarea);
			textarea.id = state.id;
			textarea.required = textarea_required_value = state.field.metadata.required;
			textarea.tabIndex = state.tabindex;
			addListener$1(textarea, "input", textarea_input_handler);
		},

		m: function mount(target, anchor) {
			insertNode(textarea, target, anchor);

			textarea.value = state.field.selected;
		},

		p: function update(changed, state) {
			if (changed.id) {
				textarea.id = state.id;
			}

			if ((changed.field) && textarea_required_value !== (textarea_required_value = state.field.metadata.required)) {
				textarea.required = textarea_required_value;
			}

			if (changed.tabindex) {
				textarea.tabIndex = state.tabindex;
			}

			if (!textarea_updating) {
				textarea.value = state.field.selected;
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

function SvelteComponent$7(options) {
	init(this, options);
	this._state = options.data || {};

	if (!document.getElementById("svelte-2941923377-style")) add_css$1();

	this._fragment = create_main_fragment$7(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$7.prototype, proto);

/* src\core\ui\outputs\Text.html generated by Svelte v1.40.1 */
function create_main_fragment$8(state, component) {
	var text_value = state.field.data, text;

	return {
		c: function create() {
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(text);
		},

		d: noop$1
	};
}

function SvelteComponent$8(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment$8(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$8.prototype, proto);

/* src\core\ui\outputs\Number.html generated by Svelte v1.40.1 */
function create_main_fragment$9(state, component) {
	var text_value = state.field.data, text;

	return {
		c: function create() {
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(text);
		},

		d: noop$1
	};
}

function SvelteComponent$9(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment$9(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
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

function isArray$1(input) {
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

function extend$1(a, b) {
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
        extend$1(getParsingFlags(m), flags);
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

    return extend$1(function () {
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

function isFunction$1(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set$1 (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction$1(prop)) {
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
    var res = extend$1({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject$1(parentConfig[prop]) && isObject$1(childConfig[prop])) {
                res[prop] = {};
                extend$1(res[prop], parentConfig[prop]);
                extend$1(res[prop], childConfig[prop]);
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
            res[prop] = extend$1({}, res[prop]);
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
    return isFunction$1(output) ? output.call(mom, now) : output;
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
    return (isFunction$1(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction$1(format) ? format(output) : format.replace(/%s/i, output);
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
            return get$1(this, unit);
        }
    };
}

function get$1 (mom, unit) {
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
    if (isFunction$1(this[units])) {
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
        if (isFunction$1(this[units])) {
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
            output += isFunction$1(array[i]) ? array[i].call(mom, format) : array[i];
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
    regexes[token] = isFunction$1(regex) ? regex : function (isStrict, localeData) {
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
        return isArray$1(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray$1(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray$1(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray$1(this._monthsShort) ? this._monthsShort[m.month()] :
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
        return get$1(this, 'Month');
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
        return isArray$1(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray$1(this._weekdays) ? this._weekdays[m.day()] :
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

    if (!isArray$1(key)) {
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

    extend$1(config, bestMoment || tempConfig);
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
    } else if (isArray$1(format)) {
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
    } else if (isArray$1(input)) {
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
            (isArray$1(input) && input.length === 0)) {
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
    if (moments.length === 1 && isArray$1(moments[0])) {
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
        set$2(mom, 'Date', get$1(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get$1(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
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

    var output = formats && (isFunction$1(formats[format]) ? formats[format].call(this, now) : formats[format]);

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
    if (isFunction$1(Date.prototype.toISOString)) {
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

function format$1 (inputString) {
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

function toObject () {
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
    return extend$1({}, getParsingFlags(this));
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

proto$1.add               = add;
proto$1.calendar          = calendar$1;
proto$1.clone             = clone;
proto$1.diff              = diff;
proto$1.endOf             = endOf;
proto$1.format            = format$1;
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
proto$1.toObject          = toObject;
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

function get$2 (format, index, field, setter) {
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
        return get$2(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$2(format, i, field, 'month');
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
        return get$2(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$2(format, (i + shift) % 7, field, 'day');
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
function add$1 (input, value) {
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

function get$3 (units) {
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

function humanize (withSuffix) {
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
proto$3.add            = add$1;
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
proto$3.get            = get$3;
proto$3.milliseconds   = milliseconds;
proto$3.seconds        = seconds;
proto$3.minutes        = minutes;
proto$3.hours          = hours;
proto$3.days           = days;
proto$3.weeks          = weeks;
proto$3.months         = months;
proto$3.years          = years;
proto$3.humanize       = humanize;
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

/* src\core\ui\outputs\Datetime.html generated by Svelte v1.40.1 */
function format(datetime) {
	return datetime != null ? hooks(datetime).format("D MMM YYYY") : "";
}

function create_main_fragment$10(state, component) {
	var text_value = format(state.field.data), text;

	return {
		c: function create() {
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = format(state.field.data))) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(text);
		},

		d: noop$1
	};
}

function SvelteComponent$10(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment$10(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$10.prototype, proto);

/* src\core\ui\Output.html generated by Svelte v1.40.1 */
function data() {
    return {
        showLabel: true
    };
}

function oncreate$2() {
    var field = this.get("field");
    var app = this.get("app");
    var parent = this.get("parent");
    var form = this.get("form");
    
    var output = app.controlRegister.getOutput(field);
    
    // Never show label if `alwaysHideLabel` is set to true.
    var outputDisplayConfig = output.constants || {};
    this.set({
        alwaysHideLabel: outputDisplayConfig.alwaysHideLabel
    });
    
    new output.constructor({
        target: this.refs.container,
        data: {
            field: field,
            app: app,
            form: form,
            parent: parent
        }
    });

    // Set correct css class based on the field type.
    if (outputDisplayConfig.block) {
        this.set({ class: "block" });
    }
    else {
        this.set({ class: "inline" });
    }
}

function encapsulateStyles$3(node) {
	setAttribute(node, "svelte-1713469982", "");
}

function add_css$3() {
	var style = createElement("style");
	style.id = 'svelte-1713469982-style';
	style.textContent = "[svelte-1713469982].inline,[svelte-1713469982] .inline{display:inline-block\r\n    }";
	appendNode(style, document.head);
}

function create_main_fragment$12(state, component) {
	var if_block_anchor;

	var current_block_type = select_block_type$2(state);
	var if_block = current_block_type(state, component);

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
			if (current_block_type === (current_block_type = select_block_type$2(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(state, component);
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

// (1:0) {{#if showLabel === true && !alwaysHideLabel }}
function create_if_block$2(state, component) {
	var div, strong, text_value = state.field.metadata.label, text, text_1, text_2, div_1;

	return {
		c: function create() {
			div = createElement("div");
			strong = createElement("strong");
			text = createText(text_value);
			text_1 = createText(":");
			text_2 = createText("\r\n    ");
			div_1 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$3(div);
			div_1.className = state.class;
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(strong, div);
			appendNode(text, strong);
			appendNode(text_1, strong);
			appendNode(text_2, div);
			appendNode(div_1, div);
			component.refs.container = div_1;
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.metadata.label)) {
				text.data = text_value;
			}

			if (changed.class) {
				div_1.className = state.class;
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

// (6:0) {{else}}
function create_if_block_1$2(state, component) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$3(div);
			div.className = state.class;
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			component.refs.container = div;
		},

		p: function update(changed, state) {
			if (changed.class) {
				div.className = state.class;
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

function select_block_type$2(state) {
	if (state.showLabel === true && !state.alwaysHideLabel) return create_if_block$2;
	return create_if_block_1$2;
}

function SvelteComponent$12(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data(), options.data);

	if (!document.getElementById("svelte-1713469982-style")) add_css$3();

	var _oncreate = oncreate$2.bind(this);

	if (!options._root) {
		this._oncreate = [_oncreate];
	} else {
	 	this._root._oncreate.push(_oncreate);
	 }

	this._fragment = create_main_fragment$12(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$12.prototype, proto);

/* src\core\ui\outputs\Table.html generated by Svelte v1.40.1 */
function columnsOrdered(field) {
	return field.metadata.customProperties.columns.sort((a, b) => {
            		return a.orderIndex - b.orderIndex;
        		});
}

function oncreate$1() {
	var data = this.get("field").data;
	var app = this.get("app");

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
		map: map,
		getField: function(row, column) {
			var data = row[map[column.id.toLowerCase()]];
			
			return {
				data: data,
				metadata: column
			};
		}
	});
}

function encapsulateStyles$2(node) {
	setAttribute(node, "svelte-902727033", "");
}

function add_css$2() {
	var style = createElement("style");
	style.id = 'svelte-902727033-style';
	style.textContent = "[svelte-902727033].alert-nodata,[svelte-902727033] .alert-nodata{padding:5px 15px;font-style:italic}[svelte-902727033].table>tbody>tr>td .actionlist,[svelte-902727033] .table>tbody>tr>td .actionlist{background:none;border:none;margin:0;padding:0}";
	appendNode(style, document.head);
}

function create_main_fragment$11(state, component) {
	var if_block_anchor;

	var current_block_type = select_block_type$1(state);
	var if_block = current_block_type(state, component);

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
			if (current_block_type === (current_block_type = select_block_type$1(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(state, component);
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

// (5:3) {{#each columnsOrdered as column}}
function create_each_block$1(state, columnsOrdered_1, column, column_index, component) {
	var th, text_value = column.label, text;

	return {
		c: function create() {
			th = createElement("th");
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(th, target, anchor);
			appendNode(text, th);
		},

		p: function update(changed, state, columnsOrdered_1, column, column_index) {
			if ((changed.columnsOrdered) && text_value !== (text_value = column.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(th);
		},

		d: noop$1
	};
}

// (12:2) {{#each field.data as row}}
function create_each_block_1(state, data, row, row_index, component) {
	var tr;

	var columnsOrdered_1 = state.columnsOrdered;

	var each_blocks = [];

	for (var i = 0; i < columnsOrdered_1.length; i += 1) {
		each_blocks[i] = create_each_block_2(state, data, row, row_index, columnsOrdered_1, columnsOrdered_1[i], i, component);
	}

	return {
		c: function create() {
			tr = createElement("tr");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
		},

		m: function mount(target, anchor) {
			insertNode(tr, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}
		},

		p: function update(changed, state, data, row, row_index) {
			var columnsOrdered_1 = state.columnsOrdered;

			if (changed.getField || changed.field || changed.columnsOrdered || changed.app || changed.form || changed.parent) {
				for (var i = 0; i < columnsOrdered_1.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, data, row, row_index, columnsOrdered_1, columnsOrdered_1[i], i);
					} else {
						each_blocks[i] = create_each_block_2(state, data, row, row_index, columnsOrdered_1, columnsOrdered_1[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = columnsOrdered_1.length;
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

// (14:3) {{#each columnsOrdered as column}}
function create_each_block_2(state, data, row, row_index, columnsOrdered_1, column_1, column_index, component) {
	var td;

	var formoutput = new SvelteComponent$12({
		_root: component._root,
		data: {
			field: state.getField(row, column_1),
			app: state.app,
			form: state.form,
			parent: state.parent,
			showLabel: "false"
		}
	});

	return {
		c: function create() {
			td = createElement("td");
			formoutput._fragment.c();
		},

		m: function mount(target, anchor) {
			insertNode(td, target, anchor);
			formoutput._mount(td, null);
		},

		p: function update(changed, state, data, row, row_index, columnsOrdered_1, column_1, column_index) {
			var formoutput_changes = {};
			if (changed.getField || changed.field || changed.columnsOrdered) formoutput_changes.field = state.getField(row, column_1);
			if (changed.app) formoutput_changes.app = state.app;
			if (changed.form) formoutput_changes.form = state.form;
			if (changed.parent) formoutput_changes.parent = state.parent;
			formoutput._set( formoutput_changes );
		},

		u: function unmount() {
			detachNode(td);
		},

		d: function destroy$$1() {
			formoutput.destroy(false);
		}
	};
}

// (11:2) {{#if map != null}}
function create_if_block_1$1(state, component) {
	var each_anchor;

	var data = state.field.data;

	var each_blocks = [];

	for (var i = 0; i < data.length; i += 1) {
		each_blocks[i] = create_each_block_1(state, data, data[i], i, component);
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
			var data = state.field.data;

			if (changed.columnsOrdered || changed.getField || changed.field || changed.app || changed.form || changed.parent) {
				for (var i = 0; i < data.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, data, data[i], i);
					} else {
						each_blocks[i] = create_each_block_1(state, data, data[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = data.length;
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

// (1:0) {{#if field.data.length > 0}}
function create_if_block$1(state, component) {
	var table, thead, tr, text_2, tbody;

	var columnsOrdered_1 = state.columnsOrdered;

	var each_blocks = [];

	for (var i = 0; i < columnsOrdered_1.length; i += 1) {
		each_blocks[i] = create_each_block$1(state, columnsOrdered_1, columnsOrdered_1[i], i, component);
	}

	var if_block = (state.map != null) && create_if_block_1$1(state, component);

	return {
		c: function create() {
			table = createElement("table");
			thead = createElement("thead");
			tr = createElement("tr");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_2 = createText("\r\n\t");
			tbody = createElement("tbody");
			if (if_block) if_block.c();
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$2(table);
			table.className = "table";
		},

		m: function mount(target, anchor) {
			insertNode(table, target, anchor);
			appendNode(thead, table);
			appendNode(tr, thead);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}

			appendNode(text_2, table);
			appendNode(tbody, table);
			if (if_block) if_block.m(tbody, null);
		},

		p: function update(changed, state) {
			var columnsOrdered_1 = state.columnsOrdered;

			if (changed.columnsOrdered) {
				for (var i = 0; i < columnsOrdered_1.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, columnsOrdered_1, columnsOrdered_1[i], i);
					} else {
						each_blocks[i] = create_each_block$1(state, columnsOrdered_1, columnsOrdered_1[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = columnsOrdered_1.length;
			}

			if (state.map != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_1$1(state, component);
					if_block.c();
					if_block.m(tbody, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			detachNode(table);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			if (if_block) if_block.u();
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);

			if (if_block) if_block.d();
		}
	};
}

// (24:0) {{else}}
function create_if_block_2(state, component) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			div.textContent = "No data.";
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$2(div);
			div.className = "alert-nodata";
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

function select_block_type$1(state) {
	if (state.field.data.length > 0) return create_if_block$1;
	return create_if_block_2;
}

function SvelteComponent$11(options) {
	init(this, options);
	this._state = options.data || {};
	this._recompute({ field: 1 }, this._state);

	if (!document.getElementById("svelte-902727033-style")) add_css$2();

	var _oncreate = oncreate$1.bind(this);

	if (!options._root) {
		this._oncreate = [_oncreate];
		this._beforecreate = [];
		this._aftercreate = [];
	} else {
	 	this._root._oncreate.push(_oncreate);
	 }

	this._fragment = create_main_fragment$11(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$11.prototype, proto);

SvelteComponent$11.prototype._recompute = function _recompute(changed, state) {
	if (changed.field) {
		if (differs(state.columnsOrdered, (state.columnsOrdered = columnsOrdered(state.field)))) changed.columnsOrdered = true;
	}
};

/* src\core\ui\outputs\FormLink.html generated by Svelte v1.40.1 */
function create_main_fragment$13(state, component) {
	var a, a_href_value, text_value = state.field.data.label, text;

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
			if ((changed.app || changed.field) && a_href_value !== (a_href_value = state.app.makeUrl(state.field.data.form, state.field.data.inputFieldValues))) {
				a.href = a_href_value;
			}

			if ((changed.field) && text_value !== (text_value = state.field.data.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(a);
		},

		d: noop$1
	};
}

function SvelteComponent$13(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment$13(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$13.prototype, proto);

/* src\core\ui\outputs\Tabstrip.html generated by Svelte v1.40.1 */
function getCssClass(tab, tabstrip) {
	return tab.form == tabstrip.currentTab
		? "active"
		: "";
}

function encapsulateStyles$4(node) {
	setAttribute(node, "svelte-3113705699", "");
}

function add_css$4() {
	var style = createElement("style");
	style.id = 'svelte-3113705699-style';
	style.textContent = "[svelte-3113705699].tabstrip,[svelte-3113705699] .tabstrip{border-bottom:1px solid #ccc;margin:10px 0;padding:0 5px}[svelte-3113705699].tabstrip>div,[svelte-3113705699] .tabstrip>div{display:inline-block}[svelte-3113705699].tabstrip>div>a,[svelte-3113705699] .tabstrip>div>a{background:#e6e6e6;border-width:1px 1px 0 1px;border-style:solid;border-color:#ccc;padding:10px 15px;margin:0 5px 0 0;display:inline-block;text-decoration:none}[svelte-3113705699].tabstrip>div>a:hover,[svelte-3113705699] .tabstrip>div>a:hover{text-decoration:underline}[svelte-3113705699].tabstrip>div>a.active,[svelte-3113705699] .tabstrip>div>a.active{margin-bottom:-1px;padding-bottom:11px;background:#f8f8f8}";
	appendNode(style, document.head);
}

function create_main_fragment$14(state, component) {
	var div;

	var tabs = state.field.data.tabs;

	var each_blocks = [];

	for (var i = 0; i < tabs.length; i += 1) {
		each_blocks[i] = create_each_block$2(state, tabs, tabs[i], i, component);
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
			encapsulateStyles$4(div);
			div.className = "tabstrip";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},

		p: function update(changed, state) {
			var tabs = state.field.data.tabs;

			if (changed.app || changed.field) {
				for (var i = 0; i < tabs.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, tabs, tabs[i], i);
					} else {
						each_blocks[i] = create_each_block$2(state, tabs, tabs[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = tabs.length;
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
function create_each_block$2(state, tabs, tab, tab_index, component) {
	var div, a, a_href_value, a_class_value, text_value = tab.label, text;

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

		p: function update(changed, state, tabs, tab, tab_index) {
			if ((changed.app || changed.field) && a_href_value !== (a_href_value = state.app.makeUrl(tab.form, tab.inputFieldValues))) {
				a.href = a_href_value;
			}

			if ((changed.field) && a_class_value !== (a_class_value = getCssClass(tab, state.field.data))) {
				a.className = a_class_value;
			}

			if ((changed.field) && text_value !== (text_value = tab.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: noop$1
	};
}

function SvelteComponent$14(options) {
	init(this, options);
	this._state = options.data || {};

	if (!document.getElementById("svelte-3113705699-style")) add_css$4();

	this._fragment = create_main_fragment$14(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$14.prototype, proto);

/* src\core\ui\outputs\Table.html generated by Svelte v1.40.1 */
function columnsOrdered$1(field) {
	return field.metadata.customProperties.columns.sort((a, b) => {
            		return a.orderIndex - b.orderIndex;
        		});
}

function oncreate$4() {
	var data = this.get("field").data;
	var app = this.get("app");

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
		map: map,
		getField: function(row, column) {
			var data = row[map[column.id.toLowerCase()]];
			
			return {
				data: data,
				metadata: column
			};
		}
	});
}

function encapsulateStyles$6(node) {
	setAttribute(node, "svelte-902727033", "");
}

function add_css$6() {
	var style = createElement("style");
	style.id = 'svelte-902727033-style';
	style.textContent = "[svelte-902727033].alert-nodata,[svelte-902727033] .alert-nodata{padding:5px 15px;font-style:italic}[svelte-902727033].table>tbody>tr>td .actionlist,[svelte-902727033] .table>tbody>tr>td .actionlist{background:none;border:none;margin:0;padding:0}";
	appendNode(style, document.head);
}

function create_main_fragment$16(state, component) {
	var if_block_anchor;

	var current_block_type = select_block_type$4(state);
	var if_block = current_block_type(state, component);

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
			if (current_block_type === (current_block_type = select_block_type$4(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(state, component);
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

// (5:3) {{#each columnsOrdered as column}}
function create_each_block$4(state, columnsOrdered_1, column, column_index, component) {
	var th, text_value = column.label, text;

	return {
		c: function create() {
			th = createElement("th");
			text = createText(text_value);
		},

		m: function mount(target, anchor) {
			insertNode(th, target, anchor);
			appendNode(text, th);
		},

		p: function update(changed, state, columnsOrdered_1, column, column_index) {
			if ((changed.columnsOrdered) && text_value !== (text_value = column.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(th);
		},

		d: noop$1
	};
}

// (12:2) {{#each field.data as row}}
function create_each_block_1$1(state, data, row, row_index, component) {
	var tr;

	var columnsOrdered_1 = state.columnsOrdered;

	var each_blocks = [];

	for (var i = 0; i < columnsOrdered_1.length; i += 1) {
		each_blocks[i] = create_each_block_2$1(state, data, row, row_index, columnsOrdered_1, columnsOrdered_1[i], i, component);
	}

	return {
		c: function create() {
			tr = createElement("tr");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
		},

		m: function mount(target, anchor) {
			insertNode(tr, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}
		},

		p: function update(changed, state, data, row, row_index) {
			var columnsOrdered_1 = state.columnsOrdered;

			if (changed.getField || changed.field || changed.columnsOrdered || changed.app || changed.form || changed.parent) {
				for (var i = 0; i < columnsOrdered_1.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, data, row, row_index, columnsOrdered_1, columnsOrdered_1[i], i);
					} else {
						each_blocks[i] = create_each_block_2$1(state, data, row, row_index, columnsOrdered_1, columnsOrdered_1[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = columnsOrdered_1.length;
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

// (14:3) {{#each columnsOrdered as column}}
function create_each_block_2$1(state, data, row, row_index, columnsOrdered_1, column_1, column_index, component) {
	var td;

	var formoutput = new SvelteComponent$12({
		_root: component._root,
		data: {
			field: state.getField(row, column_1),
			app: state.app,
			form: state.form,
			parent: state.parent,
			showLabel: "false"
		}
	});

	return {
		c: function create() {
			td = createElement("td");
			formoutput._fragment.c();
		},

		m: function mount(target, anchor) {
			insertNode(td, target, anchor);
			formoutput._mount(td, null);
		},

		p: function update(changed, state, data, row, row_index, columnsOrdered_1, column_1, column_index) {
			var formoutput_changes = {};
			if (changed.getField || changed.field || changed.columnsOrdered) formoutput_changes.field = state.getField(row, column_1);
			if (changed.app) formoutput_changes.app = state.app;
			if (changed.form) formoutput_changes.form = state.form;
			if (changed.parent) formoutput_changes.parent = state.parent;
			formoutput._set( formoutput_changes );
		},

		u: function unmount() {
			detachNode(td);
		},

		d: function destroy$$1() {
			formoutput.destroy(false);
		}
	};
}

// (11:2) {{#if map != null}}
function create_if_block_1$4(state, component) {
	var each_anchor;

	var data = state.field.data;

	var each_blocks = [];

	for (var i = 0; i < data.length; i += 1) {
		each_blocks[i] = create_each_block_1$1(state, data, data[i], i, component);
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
			var data = state.field.data;

			if (changed.columnsOrdered || changed.getField || changed.field || changed.app || changed.form || changed.parent) {
				for (var i = 0; i < data.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, data, data[i], i);
					} else {
						each_blocks[i] = create_each_block_1$1(state, data, data[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = data.length;
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

// (1:0) {{#if field.data.length > 0}}
function create_if_block$4(state, component) {
	var table, thead, tr, text_2, tbody;

	var columnsOrdered_1 = state.columnsOrdered;

	var each_blocks = [];

	for (var i = 0; i < columnsOrdered_1.length; i += 1) {
		each_blocks[i] = create_each_block$4(state, columnsOrdered_1, columnsOrdered_1[i], i, component);
	}

	var if_block = (state.map != null) && create_if_block_1$4(state, component);

	return {
		c: function create() {
			table = createElement("table");
			thead = createElement("thead");
			tr = createElement("tr");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_2 = createText("\r\n\t");
			tbody = createElement("tbody");
			if (if_block) if_block.c();
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$6(table);
			table.className = "table";
		},

		m: function mount(target, anchor) {
			insertNode(table, target, anchor);
			appendNode(thead, table);
			appendNode(tr, thead);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}

			appendNode(text_2, table);
			appendNode(tbody, table);
			if (if_block) if_block.m(tbody, null);
		},

		p: function update(changed, state) {
			var columnsOrdered_1 = state.columnsOrdered;

			if (changed.columnsOrdered) {
				for (var i = 0; i < columnsOrdered_1.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, columnsOrdered_1, columnsOrdered_1[i], i);
					} else {
						each_blocks[i] = create_each_block$4(state, columnsOrdered_1, columnsOrdered_1[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = columnsOrdered_1.length;
			}

			if (state.map != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_1$4(state, component);
					if_block.c();
					if_block.m(tbody, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			detachNode(table);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			if (if_block) if_block.u();
		},

		d: function destroy$$1() {
			destroyEach(each_blocks);

			if (if_block) if_block.d();
		}
	};
}

// (24:0) {{else}}
function create_if_block_2$2(state, component) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			div.textContent = "No data.";
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$6(div);
			div.className = "alert-nodata";
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

function select_block_type$4(state) {
	if (state.field.data.length > 0) return create_if_block$4;
	return create_if_block_2$2;
}

function SvelteComponent$16(options) {
	init(this, options);
	this._state = options.data || {};
	this._recompute({ field: 1 }, this._state);

	if (!document.getElementById("svelte-902727033-style")) add_css$6();

	var _oncreate = oncreate$4.bind(this);

	if (!options._root) {
		this._oncreate = [_oncreate];
		this._beforecreate = [];
		this._aftercreate = [];
	} else {
	 	this._root._oncreate.push(_oncreate);
	 }

	this._fragment = create_main_fragment$16(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$16.prototype, proto);

SvelteComponent$16.prototype._recompute = function _recompute(changed, state) {
	if (changed.field) {
		if (differs(state.columnsOrdered, (state.columnsOrdered = columnsOrdered$1(state.field)))) changed.columnsOrdered = true;
	}
};

/* src\core\ui\outputs\Paginator.html generated by Svelte v1.40.1 */
function pages(field, form) {
	var paginatorInput = form.inputs.find(t => t.metadata.id == field.metadata.customProperties.customizations.paginator);

	var pageCount = Math.ceil(field.data.totalCount / paginatorInput.value.pageSize);

	var params = {};
	for (let i of form.inputs) {
		params[i.metadata.id] = i.value;
	}

	var pages = [];
	for (let p = 1; p <= pageCount; ++p) {
		let pageParams = Object.assign({}, params);
		pageParams[paginatorInput.metadata.id] = Object.assign({}, pageParams[paginatorInput.metadata.id]);
		pageParams[paginatorInput.metadata.id].pageIndex = p;

		pages.push({
			number: p,
			params: pageParams,
			cssClass: paginatorInput.value.pageIndex == p ? "current" : ""
		});
	}

	return pages;
}

function data$1() {
	return {
		totalCount: 0
	}
}

var methods = {
	goToPage(page) {
		var parent = this.get("parent");
		var form = parent.get("form");
		var field = this.get("field");
		var app = this.get("app");

		form.setInputFields(page.params);
		parent.submit(app, form, null, false);
	}
};

function oncreate$3() {
	var field = this.get("field");

	var tableField = new OutputFieldValue();
	tableField.data = field.data.results;
	tableField.metadata = field.metadata;

	var i = new SvelteComponent$16({
		target: this.refs.container,
		data: {
			field: tableField,
			app: this.get("app"),
			form: this.get("form"),
			parent: this.get("parent")
		}
	});
}

function encapsulateStyles$5(node) {
	setAttribute(node, "svelte-770985968", "");
}

function add_css$5() {
	var style = createElement("style");
	style.id = 'svelte-770985968-style';
	style.textContent = "[svelte-770985968].paginator,[svelte-770985968] .paginator{margin:.5rem 0;padding-left:0}[svelte-770985968].paginator>li,[svelte-770985968] .paginator>li{display:inline-block}[svelte-770985968].paginator>li>a,[svelte-770985968] .paginator>li>a,[svelte-770985968].paginator>li>button,[svelte-770985968] .paginator>li>button{padding:2px 10px;margin:1px;display:inline-block;background:#eee}[svelte-770985968].paginator>li>a.current,[svelte-770985968] .paginator>li>a.current,[svelte-770985968].paginator>li>button.current,[svelte-770985968] .paginator>li>button.current{background:#4f4f4f;color:#fff}";
	appendNode(style, document.head);
}

function create_main_fragment$15(state, component) {
	var ul, text, div;

	var if_block = (state.pages.length > 1) && create_if_block$3(state, component);

	return {
		c: function create() {
			ul = createElement("ul");
			if (if_block) if_block.c();
			text = createText("\r\n\r\n");
			div = createElement("div");
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$5(ul);
			ul.className = "paginator";
			encapsulateStyles$5(div);
		},

		m: function mount(target, anchor) {
			insertNode(ul, target, anchor);
			if (if_block) if_block.m(ul, null);
			insertNode(text, target, anchor);
			insertNode(div, target, anchor);
			component.refs.container = div;
		},

		p: function update(changed, state) {
			if (state.pages.length > 1) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$3(state, component);
					if_block.c();
					if_block.m(ul, null);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			detachNode(ul);
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

// (3:1) {{#each pages as page}}
function create_each_block$3(state, pages_1, page, page_index, component) {
	var if_block_anchor;

	var current_block_type = select_block_type$3(state, pages_1, page, page_index);
	var if_block = current_block_type(state, pages_1, page, page_index, component);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state, pages_1, page, page_index) {
			if (current_block_type === (current_block_type = select_block_type$3(state, pages_1, page, page_index)) && if_block) {
				if_block.p(changed, state, pages_1, page, page_index);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(state, pages_1, page, page_index, component);
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

// (4:2) {{#if parent.get('useUrl')}}
function create_if_block_1$3(state, pages_1, page, page_index, component) {
	var li, a, a_href_value, a_class_value, text_value = page.number, text;

	return {
		c: function create() {
			li = createElement("li");
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = state.app.makeUrl(state.form.metadata.id, page.params);
			a.className = a_class_value = page.cssClass;
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			appendNode(a, li);
			appendNode(text, a);
		},

		p: function update(changed, state, pages_1, page, page_index) {
			if ((changed.app || changed.form || changed.pages) && a_href_value !== (a_href_value = state.app.makeUrl(state.form.metadata.id, page.params))) {
				a.href = a_href_value;
			}

			if ((changed.pages) && a_class_value !== (a_class_value = page.cssClass)) {
				a.className = a_class_value;
			}

			if ((changed.pages) && text_value !== (text_value = page.number)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(li);
		},

		d: noop$1
	};
}

// (6:2) {{else}}
function create_if_block_2$1(state, pages_1, page, page_index, component) {
	var li, button, button_class_value, text_value = page.number, text;

	return {
		c: function create() {
			li = createElement("li");
			button = createElement("button");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			button.className = button_class_value = page.cssClass;
			addListener$1(button, "click", click_handler);

			button._svelte = {
				component: component,
				pages_1: pages_1,
				page_index: page_index
			};
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			appendNode(button, li);
			appendNode(text, button);
		},

		p: function update(changed, state, pages_1, page, page_index) {
			if ((changed.pages) && button_class_value !== (button_class_value = page.cssClass)) {
				button.className = button_class_value;
			}

			button._svelte.pages_1 = pages_1;
			button._svelte.page_index = page_index;

			if ((changed.pages) && text_value !== (text_value = page.number)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(li);
		},

		d: function destroy$$1() {
			removeListener$1(button, "click", click_handler);
		}
	};
}

// (2:1) {{#if pages.length > 1}}
function create_if_block$3(state, component) {
	var each_anchor;

	var pages_1 = state.pages;

	var each_blocks = [];

	for (var i = 0; i < pages_1.length; i += 1) {
		each_blocks[i] = create_each_block$3(state, pages_1, pages_1[i], i, component);
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
			var pages_1 = state.pages;

			if (changed.parent || changed.app || changed.form || changed.pages) {
				for (var i = 0; i < pages_1.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, pages_1, pages_1[i], i);
					} else {
						each_blocks[i] = create_each_block$3(state, pages_1, pages_1[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(each_anchor.parentNode, each_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = pages_1.length;
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

function click_handler(event) {
	var component = this._svelte.component;
	var pages_1 = this._svelte.pages_1, page_index = this._svelte.page_index, page = pages_1[page_index];
	component.goToPage(page);
}

function select_block_type$3(state, pages_1, page, page_index) {
	if (state.parent.get('useUrl')) return create_if_block_1$3;
	return create_if_block_2$1;
}

function SvelteComponent$15(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data$1(), options.data);
	this._recompute({ field: 1, form: 1 }, this._state);

	if (!document.getElementById("svelte-770985968-style")) add_css$5();

	var _oncreate = oncreate$3.bind(this);

	if (!options._root) {
		this._oncreate = [_oncreate];
	} else {
	 	this._root._oncreate.push(_oncreate);
	 }

	this._fragment = create_main_fragment$15(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$15.prototype, methods, proto);

SvelteComponent$15.prototype._recompute = function _recompute(changed, state) {
	if (changed.field || changed.form) {
		if (differs(state.pages, (state.pages = pages(state.field, state.form)))) changed.pages = true;
	}
};

/* src\core\ui\Input.html generated by Svelte v1.40.1 */
var inputId = 0;

function data$4() {
    inputId += 1;
    return {
        id: "i" + inputId
    }
}

function oncreate$5() {
    let field = this.get("field");
    let tabindex = this.get("tabindex");
    let app = this.get("app");

    var input = app.controlRegister.getInput(field.metadata.type);

    var i = new input.component({
        target: this.refs.container,
        data: {
            field: field,
            tabindex: tabindex,
            id: this.get("id"),
            app: app
        }
    });

    // Set correct css class based on the field type.
    var outputDisplayConfig = input.constants || {};
    if (outputDisplayConfig.block) {
        this.set({ class: "block" });
    }
    else {
        this.set({ class: "inline" });
    }
}

function encapsulateStyles$9(node) {
	setAttribute(node, "svelte-849255196", "");
}

function add_css$9() {
	var style = createElement("style");
	style.id = 'svelte-849255196-style';
	style.textContent = "[svelte-849255196].inline,[svelte-849255196] .inline{display:inline-block\r\n    }";
	appendNode(style, document.head);
}

function create_main_fragment$19(state, component) {
	var div, label, text_value = state.field.metadata.label, text, text_1, div_1;

	return {
		c: function create() {
			div = createElement("div");
			label = createElement("label");
			text = createText(text_value);
			text_1 = createText("\r\n    ");
			div_1 = createElement("div");
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$9(div);
			label.htmlFor = state.id;
			div_1.className = state.class;
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(label, div);
			appendNode(text, label);
			appendNode(text_1, div);
			appendNode(div_1, div);
			component.refs.container = div_1;
		},

		p: function update(changed, state) {
			if (changed.id) {
				label.htmlFor = state.id;
			}

			if ((changed.field) && text_value !== (text_value = state.field.metadata.label)) {
				text.data = text_value;
			}

			if (changed.class) {
				div_1.className = state.class;
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

function SvelteComponent$19(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data$4(), options.data);

	if (!document.getElementById("svelte-849255196-style")) add_css$9();

	var _oncreate = oncreate$5.bind(this);

	if (!options._root) {
		this._oncreate = [_oncreate];
	} else {
	 	this._root._oncreate.push(_oncreate);
	 }

	this._fragment = create_main_fragment$19(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$19.prototype, proto);

/* src\core\ui\Form.html generated by Svelte v1.40.1 */
let tabindex = 1;

function data$3() {
	return {
		disabled: false,
		tabindex: tabindex,
		urlData: null,
		initialized: false,
		responseMetadata: {},
		useUrl: true
	};
}

var methods$2 = {
	init: function () {
		if (!this.get("initialized")) {
			var form = this.get("form");

			this.set({
				self: this,
				initialized: true,
				visibleInputFields: form.inputs.filter(t => t.metadata.hidden == false),
				submitButtonLabel: form.metadata.customProperties != null && form.metadata.customProperties.submitButtonLabel
					? form.metadata.customProperties.submitButtonLabel
					: "Submit"
			});

			tabindex += 1;

			var app = this.get("app");

			form.fire("form:loaded", { app: app });

			// Auto-submit form if necessary.
			if (form.metadata.postOnLoad) {
				this.submit(app, form);
			}
		}
	},
	enableForm: function() {
		var formInstance = this.get("form");

		// Hide all inputs, to re-render them. This is needed due to the way that
		// Svelte *seems* to work - it doesn't re-render nested components, unless they are recreated.
		this.set({ visibleInputFields: [] });

		this.set({
			// Show inputs again.
			visibleInputFields: formInstance.inputs.filter(t => t.metadata.hidden == false),

			disabled: false
		});
	},
	renderResponse: function(response) {
		var formInstance = this.get("form");

		// Force Svelte to re-render outputs.
		this.set({
			outputFieldValues: null
		});

		this.set({
			outputFieldValues: formInstance.outputs,
			responseMetadata: response.metadata
		});
	},
	submit: async function (app, formInstance, event, redirect) {
		var self = this;
		
		if (event != null) {
			event.preventDefault();
		}
		
		var skipValidation =
			!formInstance.metadata.postOnLoadValidation &&
			formInstance.metadata.postOnLoad &&
			// if initialization of the form, i.e. - first post.
			redirect == null;

		let data = await formInstance.prepareForm(!skipValidation);
		
		// If not all required inputs are filled.
		if (data == null) {
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
			let urlParams = await formInstance.getSerializedInputValues();
			
			// Update url in the browser.
			app.go(formInstance.metadata.id, urlParams);
			
			return;
		}

		await formInstance.fire("form:posting", { response: null, app: app });
		
		try {
			let response = await app.server.postForm(formInstance.metadata.id, data);
			await formInstance.fire("form:responseReceived", { response: response, app: app });
			
			formInstance.setOutputFieldValues(response);

			// Null response is treated as a server-side error.
			if (response == null) {
				throw new Error(`Received null response.`);
			}
			
			await app.runFunctions(response.metadata.functionsToRun);
		
			if (response.metadata.handler == "" || response.metadata.handler == null) {
				self.renderResponse(response);
			}
			else {
				app.handleResponse(response, formInstance);
			}
			
			await formInstance.fire("form:responseHandled", { response: response, app: app });
		
			self.enableForm();

			// Signal event to child controls.
			self.fire("form:responseHandled", {
				form: self,
				invokedByUser: event != null
			});
		}
		catch(e) {
			self.enableForm();
		}				
	}
};

function encapsulateStyles$8(node) {
	setAttribute(node, "svelte-4177434319", "");
}

function add_css$8() {
	var style = createElement("style");
	style.id = 'svelte-4177434319-style';
	style.textContent = "[svelte-4177434319].response,[svelte-4177434319] .response{margin-top:50px}[svelte-4177434319].inline-form .response,[svelte-4177434319] .inline-form .response{margin-top:0;padding:10px 15px}[svelte-4177434319].inline-form h2,[svelte-4177434319] .inline-form h2{margin:0;background:#eee;padding:10px 15px 15px;font-size:15px}";
	appendNode(style, document.head);
}

function create_main_fragment$18(state, component) {
	var h2, text_value = state.responseMetadata.title || state.metadata.label, text, text_1, text_2, if_block_1_anchor;

	var if_block = (state.initialized && state.visibleInputFields.length > 0) && create_if_block$5(state, component);

	var if_block_1 = (state.outputFieldValues != null) && create_if_block_1$5(state, component);

	return {
		c: function create() {
			h2 = createElement("h2");
			text = createText(text_value);
			text_1 = createText("\r\n\r\n");
			if (if_block) if_block.c();
			text_2 = createText("\r\n\r\n");
			if (if_block_1) if_block_1.c();
			if_block_1_anchor = createComment();
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$8(h2);
		},

		m: function mount(target, anchor) {
			insertNode(h2, target, anchor);
			appendNode(text, h2);
			insertNode(text_1, target, anchor);
			if (if_block) if_block.m(target, anchor);
			insertNode(text_2, target, anchor);
			if (if_block_1) if_block_1.m(target, anchor);
			insertNode(if_block_1_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.responseMetadata || changed.metadata) && text_value !== (text_value = state.responseMetadata.title || state.metadata.label)) {
				text.data = text_value;
			}

			if (state.initialized && state.visibleInputFields.length > 0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$5(state, component);
					if_block.c();
					if_block.m(text_2.parentNode, text_2);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			if (state.outputFieldValues != null) {
				if (if_block_1) {
					if_block_1.p(changed, state);
				} else {
					if_block_1 = create_if_block_1$5(state, component);
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
			detachNode(h2);
			detachNode(text_1);
			if (if_block) if_block.u();
			detachNode(text_2);
			if (if_block_1) if_block_1.u();
			detachNode(if_block_1_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
			if (if_block_1) if_block_1.d();
		}
	};
}

// (5:1) {{#each visibleInputFields as inputField}}
function create_each_block$6(state, visibleInputFields, inputField, inputField_index, component) {

	var forminput = new SvelteComponent$19({
		_root: component._root,
		data: {
			field: inputField,
			app: state.app,
			tabindex: state.tabindex * 100 + inputField.metadata.orderIndex
		}
	});

	return {
		c: function create() {
			forminput._fragment.c();
		},

		m: function mount(target, anchor) {
			forminput._mount(target, anchor);
		},

		p: function update(changed, state, visibleInputFields, inputField, inputField_index) {
			var forminput_changes = {};
			if (changed.visibleInputFields) forminput_changes.field = inputField;
			if (changed.app) forminput_changes.app = state.app;
			if (changed.tabindex || changed.visibleInputFields) forminput_changes.tabindex = state.tabindex * 100 + inputField.metadata.orderIndex;
			forminput._set( forminput_changes );
		},

		u: function unmount() {
			forminput._unmount();
		},

		d: function destroy$$1() {
			forminput.destroy(false);
		}
	};
}

// (3:0) {{#if initialized && visibleInputFields.length > 0}}
function create_if_block$5(state, component) {
	var form, text, button, text_1;

	function submit_handler(event) {
		var state = component.get();
		component.submit(state.app, state.form, event, true);
	}

	var visibleInputFields = state.visibleInputFields;

	var each_blocks = [];

	for (var i = 0; i < visibleInputFields.length; i += 1) {
		each_blocks[i] = create_each_block$6(state, visibleInputFields, visibleInputFields[i], i, component);
	}

	return {
		c: function create() {
			form = createElement("form");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text = createText("\r\n\r\n\t");
			button = createElement("button");
			text_1 = createText(state.submitButtonLabel);
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$8(form);
			addListener$1(form, "submit", submit_handler);
			button.type = "submit";
			button.disabled = state.disabled;
			button.tabIndex = "-1";
		},

		m: function mount(target, anchor) {
			insertNode(form, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(form, null);
			}

			appendNode(text, form);
			appendNode(button, form);
			appendNode(text_1, button);
		},

		p: function update(changed, state) {
			var visibleInputFields = state.visibleInputFields;

			if (changed.visibleInputFields || changed.app || changed.tabindex) {
				for (var i = 0; i < visibleInputFields.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, visibleInputFields, visibleInputFields[i], i);
					} else {
						each_blocks[i] = create_each_block$6(state, visibleInputFields, visibleInputFields[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(form, text);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = visibleInputFields.length;
			}

			if (changed.disabled) {
				button.disabled = state.disabled;
			}

			if (changed.submitButtonLabel) {
				text_1.data = state.submitButtonLabel;
			}
		},

		u: function unmount() {
			detachNode(form);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}
		},

		d: function destroy$$1() {
			removeListener$1(form, "submit", submit_handler);

			destroyEach(each_blocks);
		}
	};
}

// (15:1) {{#each outputFieldValues as outputField}}
function create_each_block_1$2(state, outputFieldValues, outputField, outputField_index, component) {
	var if_block_anchor;

	var if_block = (outputField.metadata.hidden == false) && create_if_block_2$3(state, outputFieldValues, outputField, outputField_index, component);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = createComment();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state, outputFieldValues, outputField, outputField_index) {
			if (outputField.metadata.hidden == false) {
				if (if_block) {
					if_block.p(changed, state, outputFieldValues, outputField, outputField_index);
				} else {
					if_block = create_if_block_2$3(state, outputFieldValues, outputField, outputField_index, component);
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

// (16:1) {{#if outputField.metadata.hidden == false}}
function create_if_block_2$3(state, outputFieldValues, outputField, outputField_index, component) {

	var formoutput = new SvelteComponent$12({
		_root: component._root,
		data: {
			field: outputField,
			app: state.app,
			form: state.form,
			parent: state.self
		}
	});

	return {
		c: function create() {
			formoutput._fragment.c();
		},

		m: function mount(target, anchor) {
			formoutput._mount(target, anchor);
		},

		p: function update(changed, state, outputFieldValues, outputField, outputField_index) {
			var formoutput_changes = {};
			if (changed.outputFieldValues) formoutput_changes.field = outputField;
			if (changed.app) formoutput_changes.app = state.app;
			if (changed.form) formoutput_changes.form = state.form;
			if (changed.self) formoutput_changes.parent = state.self;
			formoutput._set( formoutput_changes );
		},

		u: function unmount() {
			formoutput._unmount();
		},

		d: function destroy$$1() {
			formoutput.destroy(false);
		}
	};
}

// (13:0) {{#if outputFieldValues != null}}
function create_if_block_1$5(state, component) {
	var div;

	var outputFieldValues = state.outputFieldValues;

	var each_blocks = [];

	for (var i = 0; i < outputFieldValues.length; i += 1) {
		each_blocks[i] = create_each_block_1$2(state, outputFieldValues, outputFieldValues[i], i, component);
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
			encapsulateStyles$8(div);
			div.className = "response";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},

		p: function update(changed, state) {
			var outputFieldValues = state.outputFieldValues;

			if (changed.outputFieldValues || changed.app || changed.form || changed.self) {
				for (var i = 0; i < outputFieldValues.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, outputFieldValues, outputFieldValues[i], i);
					} else {
						each_blocks[i] = create_each_block_1$2(state, outputFieldValues, outputFieldValues[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = outputFieldValues.length;
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

function SvelteComponent$18(options) {
	init(this, options);
	this._state = assign(data$3(), options.data);

	if (!document.getElementById("svelte-4177434319-style")) add_css$8();

	if (!options._root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$18(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$18.prototype, methods$2, proto);

/* src\core\ui\outputs\ActionList.html generated by Svelte v1.40.1 */
var modalId = 0;
var modals = [];

// https://stackoverflow.com/a/3369743/111438
// Close topmost modal when user presses escape key.
document.onkeydown = function(evt) {
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
			modals[modals.length - 1].close(false);
		}
	}
};

function data$2() {
	modalId += 1;
	return {
		open: false,
		current: null,
		modalId: modalId
	}
}

var methods$1 = {
	run(action, app) {
		this.set({ open: true });

		var formInstance = app.getFormInstance(action.form, true);
		
		// TODO: find a way to initialize from action.inputFieldValues directly.
		var serializedInputValues = formInstance.getSerializedInputValuesFromObject(action.inputFieldValues);
		formInstance.initializeInputFields(serializedInputValues).then(() => {
			var f = new SvelteComponent$18({
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
					self.close(true);
				}
			});

			this.set({current: f});
		});

		modals.push(this);
	},
	close(reloadParentForm) {
		// Ensure the modal div is hidden.
		this.set({ open: false });

		// Destroy underlying form instance.
		var modalForm = this.get("current");
		modalForm.destroy();

		if (reloadParentForm) {
			// Refresh parent form.
			var app = this.get("app");
			var form = this.get("form");
			this.get("parent").submit(app, form, null, true);
		}

		modals.pop(this);
	}
};

function encapsulateStyles$7(node) {
	setAttribute(node, "svelte-605003387", "");
}

function add_css$7() {
	var style = createElement("style");
	style.id = 'svelte-605003387-style';
	style.textContent = "[svelte-605003387].modal .card,[svelte-605003387] .modal .card{max-width:85%;padding:10px 15px}[svelte-605003387].hidden,[svelte-605003387] .hidden{width:0;height:0;position:absolute;left:-1000px}[svelte-605003387].actionlist,[svelte-605003387] .actionlist{margin:10px 0;padding:0 5px;background:#f5f5f5;border-width:1px 0;border-style:solid;border-color:#e8e8e8;text-align:right}[svelte-605003387].actionlist>li,[svelte-605003387] .actionlist>li{list-style-type:none;display:inline-block}";
	appendNode(style, document.head);
}

function create_main_fragment$17(state, component) {
	var ul, text, input, input_id_value, text_1, div, div_1, label, label_for_value, text_2, div_2;

	var actions = state.field.data.actions;

	var each_blocks = [];

	for (var i = 0; i < actions.length; i += 1) {
		each_blocks[i] = create_each_block$5(state, actions, actions[i], i, component);
	}

	function input_change_handler() {
		component.set({ open: input.checked });
	}

	function click_handler_1(event) {
		component.close(true);
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
			encapsulateStyles$7(ul);
			ul.className = "actionlist";
			encapsulateStyles$7(input);
			input.id = input_id_value = "modal-" + state.modalId;
			input.type = "checkbox";
			input.className = "hidden";
			addListener$1(input, "change", input_change_handler);
			encapsulateStyles$7(div);
			div.className = "modal";
			div_1.className = "card";
			label.htmlFor = label_for_value = "modal-" + state.modalId;
			label.className = "close";
			addListener$1(label, "click", click_handler_1);
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
			var actions = state.field.data.actions;

			if (changed.field || changed.app) {
				for (var i = 0; i < actions.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, actions, actions[i], i);
					} else {
						each_blocks[i] = create_each_block$5(state, actions, actions[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = actions.length;
			}

			if ((changed.modalId) && input_id_value !== (input_id_value = "modal-" + state.modalId)) {
				input.id = input_id_value;
			}

			input.checked = state.open;

			if ((changed.modalId) && label_for_value !== (label_for_value = "modal-" + state.modalId)) {
				label.htmlFor = label_for_value;
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

// (2:1) {{#each field.data.actions as action}}
function create_each_block$5(state, actions, action, action_index, component) {
	var li, button, text_value = action.label, text;

	return {
		c: function create() {
			li = createElement("li");
			button = createElement("button");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			addListener$1(button, "click", click_handler$1);

			button._svelte = {
				component: component,
				actions: actions,
				action_index: action_index
			};
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			appendNode(button, li);
			appendNode(text, button);
		},

		p: function update(changed, state, actions, action, action_index) {
			button._svelte.actions = actions;
			button._svelte.action_index = action_index;

			if ((changed.field) && text_value !== (text_value = action.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(li);
		},

		d: function destroy$$1() {
			removeListener$1(button, "click", click_handler$1);
		}
	};
}

function click_handler$1(event) {
	var component = this._svelte.component;
	var actions = this._svelte.actions, action_index = this._svelte.action_index, action = actions[action_index];
	var state = component.get();
	component.run(action, state.app);
}

function SvelteComponent$17(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data$2(), options.data);

	if (!document.getElementById("svelte-605003387-style")) add_css$7();

	this._fragment = create_main_fragment$17(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$17.prototype, methods$1, proto);

/* src\core\ui\outputs\InlineForm.html generated by Svelte v1.40.1 */
function oncreate$6() {
	var app = this.get("app");
	var field = this.get("field");

	var formInstance = app.getFormInstance(field.data.form, true);	
	
	formInstance.initializeInputFields(field.data.inputFieldValues).then(() => {
		var f = new SvelteComponent$18({
			target: this.refs.container,
			data: {
				metadata: formInstance.metadata,
				form: formInstance,
				app: app,
				useUrl: false
			}
		});

		f.init();

		this.set({current: f});
	});
}

function encapsulateStyles$10(node) {
	setAttribute(node, "svelte-508887878", "");
}

function add_css$10() {
	var style = createElement("style");
	style.id = 'svelte-508887878-style';
	style.textContent = "[svelte-508887878].inline-form,[svelte-508887878] .inline-form{border-width:1px 1px 1px;border-style:solid;border-color:#ccc;margin:30px 0;padding:1px 1px;border-radius:5px}";
	appendNode(style, document.head);
}

function create_main_fragment$20(state, component) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$10(div);
			div.className = "inline-form";
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

function SvelteComponent$20(options) {
	init(this, options);
	this.refs = {};
	this._state = options.data || {};

	if (!document.getElementById("svelte-508887878-style")) add_css$10();

	var _oncreate = oncreate$6.bind(this);

	if (!options._root) {
		this._oncreate = [_oncreate];
	} else {
	 	this._root._oncreate.push(_oncreate);
	 }

	this._fragment = create_main_fragment$20(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		callAll(this._oncreate);
	}
}

assign(SvelteComponent$20.prototype, proto);

/* src\core\ui\outputs\TextValue.html generated by Svelte v1.40.1 */
function create_main_fragment$21(state, component) {
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

function SvelteComponent$21(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment$21(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$21.prototype, proto);

/* src\core\ui\outputs\DownloadableFile.html generated by Svelte v1.40.1 */
function create_main_fragment$22(state, component) {
	var a, a_href_value, text_value = state.field.data.name, text;

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
			if ((changed.field) && a_href_value !== (a_href_value = "/file/download?id=" + state.field.data.id)) {
				a.href = a_href_value;
			}

			if ((changed.field) && text_value !== (text_value = state.field.data.name)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(a);
		},

		d: noop$1
	};
}

function SvelteComponent$22(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment$22(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$22.prototype, proto);

/* src\core\ui\outputs\Alert.html generated by Svelte v1.40.1 */
function encapsulateStyles$11(node) {
	setAttribute(node, "svelte-112451367", "");
}

function add_css$11() {
	var style = createElement("style");
	style.id = 'svelte-112451367-style';
	style.textContent = "[svelte-112451367].alert,[svelte-112451367] .alert{margin:5px 8px;padding:10px 15px;border:1px solid #bbb}[svelte-112451367].alert>.heading,[svelte-112451367] .alert>.heading{font-weight:bold;font-size:16px}[svelte-112451367].alert.success,[svelte-112451367] .alert.success{background:#EBFFF8}[svelte-112451367].alert.warning,[svelte-112451367] .alert.warning{background:#FDFFEB}[svelte-112451367].alert.danger,[svelte-112451367] .alert.danger{background:#FFEAEA}";
	appendNode(style, document.head);
}

function create_main_fragment$23(state, component) {
	var if_block_anchor;

	var if_block = (state.field.data != null) && create_if_block$6(state, component);

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
					if_block = create_if_block$6(state, component);
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
function create_if_block_1$6(state, component) {
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
function create_if_block_2$4(state, component) {
	var div, text_value = state.field.data.message, text;

	return {
		c: function create() {
			div = createElement("div");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			div.className = "body";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			appendNode(text, div);
		},

		p: function update(changed, state) {
			if ((changed.field) && text_value !== (text_value = state.field.data.message)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: noop$1
	};
}

// (1:0) {{#if field.data != null}}
function create_if_block$6(state, component) {
	var div, div_class_value, text;

	var if_block = (state.field.data.heading != null) && create_if_block_1$6(state, component);

	var if_block_1 = (state.field.data.message != null) && create_if_block_2$4(state, component);

	return {
		c: function create() {
			div = createElement("div");
			if (if_block) if_block.c();
			text = createText("\r\n\r\n\t");
			if (if_block_1) if_block_1.c();
			this.h();
		},

		h: function hydrate() {
			encapsulateStyles$11(div);
			div.className = div_class_value = "alert " + state.field.data.style;
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
			if (if_block) if_block.m(div, null);
			appendNode(text, div);
			if (if_block_1) if_block_1.m(div, null);
		},

		p: function update(changed, state) {
			if ((changed.field) && div_class_value !== (div_class_value = "alert " + state.field.data.style)) {
				div.className = div_class_value;
			}

			if (state.field.data.heading != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_1$6(state, component);
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
					if_block_1 = create_if_block_2$4(state, component);
					if_block_1.c();
					if_block_1.m(div, null);
				}
			} else if (if_block_1) {
				if_block_1.u();
				if_block_1.d();
				if_block_1 = null;
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

function SvelteComponent$23(options) {
	init(this, options);
	this._state = options.data || {};

	if (!document.getElementById("svelte-112451367-style")) add_css$11();

	this._fragment = create_main_fragment$23(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$23.prototype, proto);

var FormLogToConsole = /** @class */ (function (_super) {
    __extends(FormLogToConsole, _super);
    function FormLogToConsole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormLogToConsole.prototype.run = function (form, eventHandlerMetadata, args) {
        console.log("[" + eventHandlerMetadata.runAt + "] form event handler '" + eventHandlerMetadata.id + "' from '" + form.metadata.id + "'");
        return Promise.resolve();
    };
    return FormLogToConsole;
}(FormEventHandler));

var BindToOutput = /** @class */ (function (_super) {
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

var InputLogToConsole = /** @class */ (function (_super) {
    __extends(InputLogToConsole, _super);
    function InputLogToConsole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputLogToConsole.prototype.run = function (input, eventHandlerMetadata, args) {
        return input.serialize().then(function (t) {
            console.log("[" + eventHandlerMetadata.runAt + "] input event handler '" + eventHandlerMetadata.id + "' from '" + input.metadata.id + "'");
        });
    };
    return InputLogToConsole;
}(InputFieldEventHandler));

var OutputLogToConsole = /** @class */ (function (_super) {
    __extends(OutputLogToConsole, _super);
    function OutputLogToConsole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutputLogToConsole.prototype.run = function (output, eventHandlerMetadata, args) {
        console.log("[" + eventHandlerMetadata.runAt + "] output event handler '" + eventHandlerMetadata.id + "' from '" + output.metadata.id + "'");
        return Promise.resolve();
    };
    return OutputLogToConsole;
}(OutputFieldEventHandler));

var Growl = /** @class */ (function () {
    function Growl() {
    }
    Growl.prototype.run = function (metadata) {
        window.alert(metadata.customProperties.message);
        return Promise.resolve();
    };
    return Growl;
}());

var controlRegister = new ControlRegister$$1();
controlRegister.registerInputFieldControl("text", SvelteComponent, StringInputController);
controlRegister.registerInputFieldControl("datetime", SvelteComponent$2, DateInputController);
controlRegister.registerInputFieldControl("number", SvelteComponent$1, NumberInputController);
controlRegister.registerInputFieldControl("dropdown", SvelteComponent$3, DropdownInputController);
controlRegister.registerInputFieldControl("boolean", SvelteComponent$4, BooleanInputController);
controlRegister.registerInputFieldControl("paginator", null, PaginatorInputController);
controlRegister.registerInputFieldControl("typeahead", SvelteComponent$5, TypeaheadInputController);
controlRegister.registerInputFieldControl("multiselect", SvelteComponent$5, MultiSelectInputController);
controlRegister.registerInputFieldControl("password", SvelteComponent$6, PasswordInputController);
controlRegister.registerInputFieldControl("textarea", SvelteComponent$7, TextareaInputController, { block: true });
controlRegister.registerOutputFieldControl("text", SvelteComponent$8);
controlRegister.registerOutputFieldControl("number", SvelteComponent$9);
controlRegister.registerOutputFieldControl("datetime", SvelteComponent$10);
controlRegister.registerOutputFieldControl("table", SvelteComponent$11, { block: true });
controlRegister.registerOutputFieldControl("formlink", SvelteComponent$13);
controlRegister.registerOutputFieldControl("tabstrip", SvelteComponent$14, { alwaysHideLabel: true, block: true });
controlRegister.registerOutputFieldControl("paginated-data", SvelteComponent$15, { block: true });
controlRegister.registerOutputFieldControl("action-list", SvelteComponent$17, { alwaysHideLabel: true, block: true });
controlRegister.registerOutputFieldControl("inline-form", SvelteComponent$20, { alwaysHideLabel: true, block: true });
controlRegister.registerOutputFieldControl("text-value", SvelteComponent$21);
controlRegister.registerOutputFieldControl("downloadable-file", SvelteComponent$22);
controlRegister.registerOutputFieldControl("alert", SvelteComponent$23, { alwaysHideLabel: true, block: true });
// Form event handlers.
controlRegister.registerFormEventHandler("log-to-console", new FormLogToConsole());
// Input event handlers.
controlRegister.registerInputFieldEventHandler("bind-to-output", new BindToOutput());
controlRegister.registerInputFieldEventHandler("log-to-console", new InputLogToConsole());
// Output event handlers.
controlRegister.registerOutputFieldEventHandler("log-to-console", new OutputLogToConsole());
// Functions.
controlRegister.registerFunction("growl", new Growl());

var stateStringParser = function(stateString) {
	return stateString.split('.').reduce(function(stateNames, latestNameChunk) {
		if (stateNames.length) {
			latestNameChunk = stateNames[stateNames.length - 1] + '.' + latestNameChunk;
		}
		stateNames.push(latestNameChunk);
		return stateNames
	}, [])
};

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
		var stateNames = stateStringParser(newStateName);
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

var combineArrays = function(obj) {
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

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexpWithReversibleKeys = pathToRegexp;

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

  if (!isarray(keys)) {
    options = keys;
    keys = [];
  } else if (!options) {
    options = {};
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys, options, allTokens);
  }

  if (isarray(path)) {
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
			parameters[path] = pathToRegexpWithReversibleKeys(path).keys.map(function(key) {
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
	var states = combineArrays({
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

var thenDenodeify = function denodeify(fn) {
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

var eventemitter3 = createCommonjsModule(function (module) {
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

var immutable = extend$2;

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend$2() {
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

var strictUriEncode = function (str) {
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

function toObject$1(val) {
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

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject$1(target);
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
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
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

var parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

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

	opts = objectAssign(defaults, opts);

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

var queryString = {
	extract: extract,
	parse: parse,
	stringify: stringify
};

var hashLocation = function HashLocation(window) {
	var emitter = new eventemitter3();
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
	emitter.get = get$4.bind(null, window, needToDecode);

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

function get$4(window, needToDecode) {
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

var hashBrownRouter = function Router(opts, hashLocation$$1) {
	var emitter = new eventemitter3();
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

	emitter.add = add$2.bind(null, routes);
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
		queryString: queryString.parse(chunks.join(''))
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

function add$2(routes, routeString, routeFunction) {
	if (typeof routeFunction !== 'function') {
		throw new Error('The router add function must be passed a callback function')
	}
	var newRoute = pathToRegexpWithReversibleKeys(routeString);
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
	var parseResults = pathToRegexpWithReversibleKeys(pathString);

	// The only reason I'm returning a new object instead of the results of the pathToRegexp
	// function is so that if the official implementation ends up returning an
	// allTokens-style array via some other mechanism, I may be able to change this file
	// without having to change the rest of the module in index.js
	return {
		regex: parseResults,
		allTokens: parseResults.allTokens
	}
};

var stringifyQuerystring = queryString.stringify;

var pagePathBuilder = function(pathStr, parameters) {
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

var abstractStateRouter = function StateProvider(makeRenderer, rootElement, stateRouterOptions) {
	var prototypalStateHolder = stateState();
	var lastCompletelyLoadedState = currentState();
	var lastStateStartedActivating = currentState();
	var stateProviderEmitter = new eventemitter3();
	var compareStartAndEndStates = stateComparison_1(prototypalStateHolder);

	function stateNameToArrayofStates(stateName) {
		return stateStringParser(stateName).map(function(name) {
			return prototypalStateHolder.get(name)
		})
	}

	stateTransitionManager(stateProviderEmitter);
	stateRouterOptions = immutable({
		throwOnError: true,
		pathPrefix: '#'
	}, stateRouterOptions);

	if (!stateRouterOptions.router) {
		stateRouterOptions.router = hashBrownRouter(defaultRouterOptions);
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
			stateProviderEmitter.emit('stateChangeStart', state, parameters, stateNameToArrayofStates(state.name));
			lastStateStartedActivating.set(state.name, parameters);
		})).then(function getStateChanges() {
			var stateComparisonResults = compareStartAndEndStates(lastCompletelyLoadedState.get().name, lastCompletelyLoadedState.get().parameters, newStateName, parameters);
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
					var emitter = new eventemitter3();
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
				stateProviderEmitter.emit('stateChangeEnd', prototypalStateHolder.get(newStateName), parameters, stateNameToArrayofStates(newStateName));
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
		return pagePathBuilder(route, parameters || {})
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

	destroyDom = thenDenodeify(renderer.destroy);
	getDomChild = thenDenodeify(renderer.getChildElement);
	renderDom = thenDenodeify(renderer.render);
	resetDom = thenDenodeify(renderer.reset);

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
	var statesWithResolveFunctions = states.filter(isFunction$2('resolve'));
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
		return combineArrays({
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

function isFunction$2(property) {
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

var deepmerge = createCommonjsModule(function (module, exports) {
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

var svelteStateRenderer = function SvelteStateRendererFactory(defaultOptions = {}) {
	return function makeRenderer(stateRouter) {
		const asr = {
			makePath: stateRouter.makePath,
			stateIsActive: stateRouter.stateIsActive,
		};

		function render(context, cb) {
			const { element: target, template, content } = context;

			const rendererSuppliedOptions = deepmerge(defaultOptions, {
				target,
				data: Object.assign(content, defaultOptions.data, { asr }),
			});

			function construct(component, options) {
				return options.methods
					? instantiateWithMethods(component, options, options.methods)
					: new component(options)
			}

			let svelte;

			try {
				if (typeof template === 'function') {
					svelte = construct(template, rendererSuppliedOptions);
				} else {
					const options = deepmerge(rendererSuppliedOptions, template.options);

					svelte = construct(template.component, options);
				}
			} catch (e) {
				cb(e);
				return
			}

			function onRouteChange() {
				svelte.set({
					asr,
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
				const element = svelte.mountedToTarget;

				svelte.teardown();

				const renderContext = Object.assign({ element }, context);

				render(renderContext, cb);
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
			},
		}
	}
};

function instantiateWithMethods(Component, options, methods) {
	// const coolPrototype = Object.assign(Object.create(Component.prototype), methods)
	// return Component.call(coolPrototype, options)
	return Object.assign(new Component(options), methods)
}

/* src\components\MenuItem.html generated by Svelte v1.40.1 */
let id = 0;
function data$5() {
	return {
		id: id++
	};
}

function create_main_fragment$25(state, component) {
	var if_block_anchor;

	var current_block_type = select_block_type$5(state);
	var if_block = current_block_type(state, component);

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
			if (current_block_type === (current_block_type = select_block_type$5(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(state, component);
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

// (8:1) {{#each menu.items as submenu}}
function create_each_block$8(state, items, submenu, submenu_index, component) {
	var li;

	var sveltecomponent = new SvelteComponent$25({
		_root: component._root,
		data: { menu: submenu }
	});

	return {
		c: function create() {
			li = createElement("li");
			sveltecomponent._fragment.c();
		},

		m: function mount(target, anchor) {
			insertNode(li, target, anchor);
			sveltecomponent._mount(li, null);
		},

		p: function update(changed, state, items, submenu, submenu_index) {
			var sveltecomponent_changes = {};
			if (changed.menu) sveltecomponent_changes.menu = submenu;
			sveltecomponent._set( sveltecomponent_changes );
		},

		u: function unmount() {
			detachNode(li);
		},

		d: function destroy$$1() {
			sveltecomponent.destroy(false);
		}
	};
}

// (6:0) {{#if menu.items.length > 0}}
function create_if_block_2$5(state, component) {
	var ul;

	var items = state.menu.items;

	var each_blocks = [];

	for (var i = 0; i < items.length; i += 1) {
		each_blocks[i] = create_each_block$8(state, items, items[i], i, component);
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
			ul.className = "sub-nav";
		},

		m: function mount(target, anchor) {
			insertNode(ul, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, state) {
			var items = state.menu.items;

			if (changed.menu) {
				for (var i = 0; i < items.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, items, items[i], i);
					} else {
						each_blocks[i] = create_each_block$8(state, items, items[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = items.length;
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

// (1:0) {{#if menu.url != null}}
function create_if_block$8(state, component) {
	var a, a_href_value, text_value = state.menu.label, text;

	return {
		c: function create() {
			a = createElement("a");
			text = createText(text_value);
			this.h();
		},

		h: function hydrate() {
			a.href = a_href_value = state.menu.url;
		},

		m: function mount(target, anchor) {
			insertNode(a, target, anchor);
			appendNode(text, a);
		},

		p: function update(changed, state) {
			if ((changed.menu) && a_href_value !== (a_href_value = state.menu.url)) {
				a.href = a_href_value;
			}

			if ((changed.menu) && text_value !== (text_value = state.menu.label)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			detachNode(a);
		},

		d: noop$1
	};
}

// (3:0) {{else}}
function create_if_block_1$7(state, component) {
	var label, label_for_value, text_value = state.menu.id, text, text_1, input, input_id_value, text_2, if_block_anchor;

	var if_block = (state.menu.items.length > 0) && create_if_block_2$5(state, component);

	return {
		c: function create() {
			label = createElement("label");
			text = createText(text_value);
			text_1 = createText("\r\n");
			input = createElement("input");
			text_2 = createText("\r\n");
			if (if_block) if_block.c();
			if_block_anchor = createComment();
			this.h();
		},

		h: function hydrate() {
			label.htmlFor = label_for_value = "menu" + state.id;
			label.className = "toggle-sub";
			setAttribute(label, "onclick", '');
			input.type = "checkbox";
			input.id = input_id_value = "menu" + state.id;
			input.className = "sub-nav-check";
		},

		m: function mount(target, anchor) {
			insertNode(label, target, anchor);
			appendNode(text, label);
			insertNode(text_1, target, anchor);
			insertNode(input, target, anchor);
			insertNode(text_2, target, anchor);
			if (if_block) if_block.m(target, anchor);
			insertNode(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.id) && label_for_value !== (label_for_value = "menu" + state.id)) {
				label.htmlFor = label_for_value;
			}

			if ((changed.menu) && text_value !== (text_value = state.menu.id)) {
				text.data = text_value;
			}

			if ((changed.id) && input_id_value !== (input_id_value = "menu" + state.id)) {
				input.id = input_id_value;
			}

			if (state.menu.items.length > 0) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block_2$5(state, component);
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
			detachNode(label);
			detachNode(text_1);
			detachNode(input);
			detachNode(text_2);
			if (if_block) if_block.u();
			detachNode(if_block_anchor);
		},

		d: function destroy$$1() {
			if (if_block) if_block.d();
		}
	};
}

function select_block_type$5(state) {
	if (state.menu.url != null) return create_if_block$8;
	return create_if_block_1$7;
}

function SvelteComponent$25(options) {
	init(this, options);
	this._state = assign(data$5(), options.data);

	if (!options._root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment$25(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$25.prototype, proto);

/* src\components\Menu.html generated by Svelte v1.40.1 */
function nestedSort(array, comparison) {
	array.sort(comparison);

	for (let item of array) {
		if (item.items != null) {
			nestedSort(item.items, comparison);
		}
	}
}

function oncreate$7() {
	var forms = this.get("forms");
	var getMenu = this.get("getMenu");
	var makeUrl = this.get("makeUrl");

	var menus = [];
	var tree = [];

	for (let form of forms) {
		let formMenu = getMenu(form);
		if (formMenu != null) {
			var currentFolder = {
				items: tree
			};

			// If it's a "folder" menu.
			if (formMenu.name !== "") {
				var path = formMenu.name.split("/");

				for (let folder of path) {
					let subfolder = currentFolder.items.find(t => t.id == folder);

					if (subfolder == null) {
						subfolder = {
							id: folder,
							orderIndex: formMenu.orderIndex,
							items: []
						};

						currentFolder.items.push(subfolder);
						currentFolder = subfolder;
					}
					else {
						currentFolder = subfolder;
					}
				}
			}

			currentFolder.items.push({
				label: form.label,
				url: makeUrl(form.id),
				// Make sure we respect both parent menu sorting order and then leaf-level menu sorting order.
				orderIndex: (formMenu.orderIndex * 100000) + form.customProperties.menuOrderIndex
			});
		}
	}

	nestedSort(tree, (a, b) => {
		return a.orderIndex - b.orderIndex;
	});

	this.set({ menus: tree });
}

function create_main_fragment$24(state, component) {
	var if_block_anchor;

	var if_block = (state.menus != null) && create_if_block$7(state, component);

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
			if (state.menus != null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block$7(state, component);
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

// (3:1) {{#each menus as menu}}
function create_each_block$7(state, menus, menu, menu_index, component) {
	var li;

	var menuitem = new SvelteComponent$25({
		_root: component._root,
		data: { menu: menu }
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

		p: function update(changed, state, menus, menu, menu_index) {
			var menuitem_changes = {};
			if (changed.menus) menuitem_changes.menu = menu;
			menuitem._set( menuitem_changes );
		},

		u: function unmount() {
			detachNode(li);
		},

		d: function destroy$$1() {
			menuitem.destroy(false);
		}
	};
}

// (1:0) {{#if menus != null}}
function create_if_block$7(state, component) {
	var ul;

	var menus = state.menus;

	var each_blocks = [];

	for (var i = 0; i < menus.length; i += 1) {
		each_blocks[i] = create_each_block$7(state, menus, menus[i], i, component);
	}

	return {
		c: function create() {
			ul = createElement("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
		},

		m: function mount(target, anchor) {
			insertNode(ul, target, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, state) {
			var menus = state.menus;

			if (changed.menus) {
				for (var i = 0; i < menus.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, menus, menus[i], i);
					} else {
						each_blocks[i] = create_each_block$7(state, menus, menus[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = menus.length;
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

function SvelteComponent$24(options) {
	init(this, options);
	this._state = options.data || {};

	var _oncreate = oncreate$7.bind(this);

	if (!options._root) {
		this._oncreate = [_oncreate];
		this._beforecreate = [];
		this._aftercreate = [];
	} else {
	 	this._root._oncreate.push(_oncreate);
	 }

	this._fragment = create_main_fragment$24(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);

		this._lock = true;
		callAll(this._beforecreate);
		callAll(this._oncreate);
		callAll(this._aftercreate);
		this._lock = false;
	}
}

assign(SvelteComponent$24.prototype, proto);

/* src\components\Home.html generated by Svelte v1.40.1 */
function create_main_fragment$26(state, component) {
	var text;

	return {
		c: function create() {
			text = createText("This is home.");
		},

		m: function mount(target, anchor) {
			insertNode(text, target, anchor);
		},

		p: noop$1,

		u: function unmount() {
			detachNode(text);
		},

		d: noop$1
	};
}

function SvelteComponent$26(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment$26(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent$26.prototype, proto);

var AppRouter = /** @class */ (function () {
    function AppRouter(element, app) {
        this.element = element;
        this.stateRenderer = svelteStateRenderer({});
        this.stateRouter = abstractStateRouter(this.stateRenderer, this.element);
        var rpb = this.rpb = new RouteParameterBuilder("_", app);
        this.stateRouter.addState({
            name: "home",
            data: {},
            route: "/home",
            template: SvelteComponent$26
        });
        var self = this;
        this.stateRouter.addState({
            name: "menu",
            route: "/menu",
            template: SvelteComponent$24,
            resolve: function (data, parameters, cb) {
                cb(false, {
                    forms: app.forms,
                    getMenu: function (form) {
                        if (form.customProperties != null) {
                            return app.getMenu(form.customProperties.menu);
                        }
                        return null;
                    },
                    makeUrl: function (formId) { return self.makeUrl(formId, null); }
                });
            }
        });
        this.stateRouter.addState({
            name: "form",
            data: {},
            route: "/form/:_id",
            template: SvelteComponent$18,
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
    AppRouter.prototype.go = function (form, values) {
        this.stateRouter.go("form", this.rpb.buildFormRouteParameters(form, values));
    };
    
    AppRouter.prototype.makeUrl = function (form, values) {
        return this.stateRouter.makePath('form', this.rpb.buildFormRouteParameters(form, values));
    };
    
    return AppRouter;
}());
var RouteParameterBuilder = /** @class */ (function () {
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
        return Object.assign(base, { _id: form });
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

var server = new UmfServer("/api/form/metadata", "/api/form/run");
var app = new UmfApp(server, controlRegister);
app.load().then(function (response) {
    var router = new AppRouter(document.getElementById("main"), app);
    app.useRouter(router);
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
function buildMenu(app) {
    // Remove old menu.
    var myNode = document.getElementById("topmenu");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    new SvelteComponent$24({
        target: document.getElementById("topmenu"),
        data: {
            forms: app.forms,
            getMenu: function (form) {
                if (form.customProperties != null) {
                    return app.getMenu(form.customProperties.menu);
                }
                return null;
            },
            makeUrl: function (formId) { return app.makeUrl(formId, null); }
        }
    });
}

}());
//# sourceMappingURL=app.js.map
