!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["bullet-train"]=e():t["bullet-train"]=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){"use strict";var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var o=void 0,i=void 0,a="BULLET_TRAIN_DB",s=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.getJSON=function(t,e){var n=r.environmentID;return console.log(t,n),o(t+"?format=json",{method:e||"GET",headers:{"x-environment-key":n}}).then(function(t){return t.json()})},this.getFlags=function(){var t=r.onChange,e=r.onError,n=r.identity,o=r.api,s=r.disableCache,u=function(e){var n={};e.forEach(function(t){n[t.feature.name.toLowerCase().replace(/ /g,"_")]={enabled:t.enabled,value:t.feature_state_value}}),r.oldFlags=n,r.flags=n,s||i.setItem(a,JSON.stringify(r.flags)),t&&t(r.oldFlags,{isFromServer:!0})};return n?r.getJSON(o+"flags/"+n).then(function(t){u(t)}).catch(function(t){var r=t.message;e&&e({message:r})}):r.getJSON(o+"flags/").then(function(t){u(t)}).catch(function(t){var r=t.message;e&&e({message:r})})},this.getValue=function(t){var e=r.flags&&r.flags[t],n=null;return e&&(n=e.value),n},this.hasFeature=function(t){var e=r.flags&&r.flags[t],n=!1;return e&&e.enabled&&(n=!0),n},o=e.fetch,i=e.AsyncStorage}return n(t,[{key:"init",value:function(t){var e=this,r=t.environmentID,n=t.api,o=void 0===n?"https://api.bullet-train.io/api/v1/":n,s=t.onChange,u=t.disableCache,f=t.onError,l=t.defaultFlags;if(this.environmentID=r,this.api=o,this.interval=null,this.disableCache=u,this.onChange=s,this.onError=f,this.flags=Object.assign({},l)||{},this.initialised=!0,!r)throw"Please specify a environment id";if(!s)throw"Please specify an onChange event";u||i.getItem(a,function(t,r){e.flags=r?JSON.parse(r):l,e.flags&&s(null,{isFromServer:!1}),e.getFlags()})}},{key:"getAllFlags",value:function(){return this.flags}},{key:"identify",value:function(t){this.identity=t,this.initialised&&!this.interval&&this.getFlags()}},{key:"logout",value:function(){this.identity=null,this.initialised&&!this.interval&&this.getFlags()}},{key:"startListening",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;this.interval||(this.interval=setInterval(this.getFlags,t))}},{key:"stopListening",value:function(){clearInterval(this.interval)}}]),t}();t.exports=function(t){var e=t.fetch,r=t.AsyncStorage;return new s({fetch:e,AsyncStorage:r})}},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};l.prototype.append=function(t,e){t=s(t),e=u(e);var r=this.map[t];this.map[t]=r?r+","+e:e},l.prototype.delete=function(t){delete this.map[s(t)]},l.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},l.prototype.set=function(t,e){this.map[s(t)]=u(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),f(t)},l.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),f(t)},l.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),f(t)},e.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},y.call(b.prototype),y.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var a=[301,302,303,307,308];v.redirect=function(t,e){if(-1===a.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.Headers=l,t.Request=b,t.Response=v,t.fetch=function(t,r){return new Promise(function(n,o){var i=new b(t,r),a=new XMLHttpRequest;a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new v(o,r))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&e.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function l(t){this.map={},t instanceof l?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function c(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function d(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,r,n=c(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=h(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}function b(t,e){var r,n,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},function(t,e,r){"use strict";t.exports=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}},function(t,e,r){"use strict";var n=r(2),o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(t,e,r){var i=e[r];if(void 0!==i&&null!==i){if(o.call(t,r)&&(void 0===t[r]||null===t[r]))throw new TypeError("Cannot convert undefined or null to object ("+r+")");o.call(t,r)&&n(i)?t[r]=s(Object(t[r]),e[r]):t[r]=i}}function s(t,e){if(t===e)return t;for(var r in e=Object(e))o.call(e,r)&&a(t,e,r);if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(e),s=0;s<n.length;s++)i.call(e,n[s])&&a(t,e,n[s]);return t}t.exports=function(t){t=function(t){if(null===t||void 0===t)throw new TypeError("Sources cannot be null or undefined");return Object(t)}(t);for(var e=1;e<arguments.length;e++)s(t,arguments[e]);return t}},function(t,e,r){"use strict";var n,o;n=[r,e,r(3)],void 0===(o=function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0});var o=function(t,e){return new Promise(function(r,n){try{var o=t();e&&e(null,o),r(o)}catch(t){e&&e(t),n(t)}})},i=function(t,e,r){return Promise.all(t).then(function(t){var n=r?r(t):null;return e&&e(null,n),Promise.resolve(n)},function(t){return e&&e(t),Promise.reject(t)})},a=function(){function t(){}return t.clear=function(t){return o(function(){window.localStorage.clear()},t)},t.getAllKeys=function(t){return o(function(){for(var t=window.localStorage.length,e=[],r=0;r<t;r+=1){var n=window.localStorage.key(r);e.push(n)}return e},t)},t.getItem=function(t,e){return o(function(){return window.localStorage.getItem(t)},e)},t.multiGet=function(e,r){var n=e.map(function(e){return t.getItem(e)});return i(n,r,function(t){return t.map(function(t,r){return[e[r],t]})})},t.setItem=function(t,e,r){return o(function(){window.localStorage.setItem(t,e)},r)},t.multiSet=function(e,r){var n=e.map(function(e){return t.setItem(e[0],e[1])});return i(n,r)},t.mergeItem=function(t,e,r){return o(function(){!function(t,e){var r=window.localStorage.getItem(t),o=JSON.parse(r),i=JSON.parse(e),a=JSON.stringify(n.default({},o,i));window.localStorage.setItem(t,a)}(t,e)},r)},t.multiMerge=function(e,r){var n=e.map(function(e){return t.mergeItem(e[0],e[1])});return i(n,r)},t.removeItem=function(t,e){return o(function(){return window.localStorage.removeItem(t)},e)},t.multiRemove=function(e,r){var n=e.map(function(e){return t.removeItem(e)});return i(n,r)},t}();t.exports=a}.apply(e,n))||(t.exports=o)},function(t,e,r){"use strict";var n,o=r(4),i=(n=o)&&n.__esModule?n:{default:n};r(1);var a=r(0)({AsyncStorage:i.default,fetch:window.fetch});window.bulletTrain=a,t.exports=a}])});
//# sourceMappingURL=bullet-train.js.map