!function(){"use strict";var t={500:function(t,e,n){var r=n(890).qC;e.Uo="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__},890:function(t,e,n){n.d(e,{UY:function(){return s},qC:function(){return l},MT:function(){return c}});var r=n(121),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function c(t,e,n){var o;if("function"==typeof e&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(c)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var u=t,s=e,l=[],f=l,h=!1;function d(){f===l&&(f=l.slice())}function p(){if(h)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function m(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(h)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return d(),f.push(t),function(){if(e){if(h)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,d();var n=f.indexOf(t);f.splice(n,1),l=null}}}function v(t){if(!a(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(h)throw new Error("Reducers may not dispatch actions.");try{h=!0,s=u(s,t)}finally{h=!1}for(var e=l=f,n=0;n<e.length;n++)(0,e[n])();return t}function y(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");u=t,v({type:i.REPLACE})}function b(){var t,e=m;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(p())}return n(),{unsubscribe:e(n)}}})[r.Z]=function(){return this},t}return v({type:i.INIT}),(o={dispatch:v,subscribe:m,getState:p,replaceReducer:y})[r.Z]=b,o}function u(t,e){var n=e&&e.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var o=e[r];"function"==typeof t[o]&&(n[o]=t[o])}var a,c=Object.keys(n);try{!function(t){Object.keys(t).forEach((function(e){var n=t[e];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(t){a=t}return function(t,e){if(void 0===t&&(t={}),a)throw a;for(var r=!1,o={},i=0;i<c.length;i++){var s=c[i],l=n[s],f=t[s],h=l(f,e);if(void 0===h){var d=u(s,e);throw new Error(d)}o[s]=h,r=r||h!==f}return(r=r||c.length!==Object.keys(t).length)?o:t}}function l(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}},121:function(t,e,n){n.d(e,{Z:function(){return a}}),t=n.hmd(t);var r,o,i,a=(r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:t,"function"==typeof(i=r.Symbol)?i.observable?o=i.observable:(o=i("observable"),i.observable=o):o="@@observable",o)}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={id:r,loaded:!1,exports:{}};return t[r](o,o.exports,n),o.loaded=!0,o.exports}n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.hmd=function(t){return(t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),function(){var t=n(890),e=n(500);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function c(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function u(t,e,n){return Object.keys(t).reduce((function(e,r){var o=""+r;return e.has(o)?e.set(o,n(e.get(o),t[o])):e}),e)}var s=function(){function t(t,e,n){if(void 0===e&&(e={}),void 0===n&&(n={}),!t||"string"!=typeof t)throw new Error("Expected a string key for Entity, but found "+t+".");var r=n,o=r.idAttribute,a=void 0===o?"id":o,u=r.mergeStrategy,s=void 0===u?function(t,e){return i({},t,e)}:u,l=r.processStrategy,f=void 0===l?function(t){return i({},t)}:l,h=r.fallbackStrategy,d=void 0===h?function(t,e){}:h;this._key=t,this._getId="function"==typeof a?a:function(t){return function(e){return c(e)?e.get(t):e[t]}}(a),this._idAttribute=a,this._mergeStrategy=s,this._processStrategy=f,this._fallbackStrategy=d,this.define(e)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce((function(e,n){var r,o=t[n];return i({},e,((r={})[n]=o,r))}),this.schema||{})},e.getId=function(t,e,n){return this._getId(t,e,n)},e.merge=function(t,e){return this._mergeStrategy(t,e)},e.fallback=function(t,e){return this._fallbackStrategy(t,e)},e.normalize=function(t,e,n,r,o,i){var a=this,c=this.getId(t,e,n),u=this.key;if(u in i||(i[u]={}),c in i[u]||(i[u][c]=[]),i[u][c].some((function(e){return e===t})))return c;i[u][c].push(t);var s=this._processStrategy(t,e,n);return Object.keys(this.schema).forEach((function(e){if(s.hasOwnProperty(e)&&"object"==typeof s[e]){var n=a.schema[e],c="function"==typeof n?n(t):n;s[e]=r(s[e],s,e,c,o,i)}})),o(this,s,t,e,n),c},e.denormalize=function(t,e){var n=this;return c(t)?u(this.schema,t,e):(Object.keys(this.schema).forEach((function(r){if(t.hasOwnProperty(r)){var o=n.schema[r];t[r]=e(t[r],o)}})),t)},o(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),l=function(){function t(t,e){e&&(this._schemaAttribute="string"==typeof e?function(t){return t[e]}:e),this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=t},e.getSchemaAttribute=function(t,e,n){return!this.isSingleSchema&&this._schemaAttribute(t,e,n)},e.inferSchema=function(t,e,n){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(t,e,n);return this.schema[r]},e.normalizeValue=function(t,e,n,r,o,i){var a=this.inferSchema(t,e,n);if(!a)return t;var c=r(t,e,n,a,o,i);return this.isSingleSchema||null==c?c:{id:c,schema:this.getSchemaAttribute(t,e,n)}},e.denormalizeValue=function(t,e){var n=c(t)?t.get("schema"):t.schema;return this.isSingleSchema||n?e((this.isSingleSchema?void 0:c(t)?t.get("id"):t.id)||t,this.isSingleSchema?this.schema:this.schema[n]):t},o(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),f=function(t){function e(e,n){if(!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return t.call(this,e,n)||this}a(e,t);var n=e.prototype;return n.normalize=function(t,e,n,r,o,i){return this.normalizeValue(t,e,n,r,o,i)},n.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(l),h=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.normalize=function(t,e,n,r,o,a){var c=this;return Object.keys(t).reduce((function(e,n,u){var s,l=t[n];return null!=l?i({},e,((s={})[n]=c.normalizeValue(l,t,n,r,o,a),s)):e}),{})},n.denormalize=function(t,e){var n=this;return Object.keys(t).reduce((function(r,o){var a,c=t[o];return i({},r,((a={})[o]=n.denormalizeValue(c,e),a))}),{})},e}(l),d=function(t){return Array.isArray(t)?t:Object.keys(t).map((function(e){return t[e]}))},p=function(t,e,n,r,o,i,a){return t=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]}(t),d(e).map((function(e,c){return o(e,n,r,t,i,a)}))},m=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.normalize=function(t,e,n,r,o,i){var a=this;return d(t).map((function(t,c){return a.normalizeValue(t,e,n,r,o,i)})).filter((function(t){return null!=t}))},n.denormalize=function(t,e){var n=this;return t&&t.map?t.map((function(t){return n.denormalizeValue(t,e)})):t},e}(l),v=function(t,e,n,r,o,a,c){var u=i({},e);return Object.keys(t).forEach((function(n){var r=t[n],i="function"==typeof r?r(e):r,s=o(e[n],e,n,i,a,c);null==s?delete u[n]:u[n]=s})),u},y=function(t,e,n){if(c(e))return u(t,e,n);var r=i({},e);return Object.keys(t).forEach((function(e){null!=r[e]&&(r[e]=n(r[e],t[e]))})),r},b=function t(e,n,r,o,i,a){return"object"==typeof e&&e?"object"!=typeof o||o.normalize&&"function"==typeof o.normalize?o.normalize(e,n,r,t,i,a):(Array.isArray(o)?p:v)(o,e,n,r,t,i,a):e},g={Array:m,Entity:s,Object:function(){function t(t){this.define(t)}var e=t.prototype;return e.define=function(t){this.schema=Object.keys(t).reduce((function(e,n){var r,o=t[n];return i({},e,((r={})[n]=o,r))}),this.schema||{})},e.normalize=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return v.apply(void 0,[this.schema].concat(e))},e.denormalize=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return y.apply(void 0,[this.schema].concat(e))},t}(),Union:f,Values:h},w=(n.p,n.p,n.p,n.p,n.p,n.p,function(t,e){if(!t||"object"!=typeof t)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(null===t?"null":typeof t)+'".');var n={},r=function(t){return function(e,n,r,o,i){var a=e.key,c=e.getId(r,o,i);a in t||(t[a]={});var u=t[a][c];t[a][c]=u?e.merge(u,n):n}}(n);return{entities:n,result:b(t,t,null,e,r,{})}}({projects:{react:[{id:4,name:"ts-react-redux-movie-app",link:"http://ts-react-redux-movie-app.zloid.ru/actions",thumbnail:"assets/movie-app.jpg",description:"TypeScript + React + Redux-Toolkit SPA: movie App"}],htmlCssJs:[{id:0,name:"fast-search-template",link:"https://zloid.github.io/Fast-Search/",thumbnail:"assets/fast-search-min.jpg",description:"RWD: PSD template -> HTML, SCSS, Bootstrap"},{id:1,name:"deals-fest-template",link:"https://zloid.github.io/deals-site/",thumbnail:"assets/deals-fest-site-4.jpg",description:"PSD template -> HTML, SCSS, JS"},{id:2,name:"twoje-finanse-template",link:"https://zloid.github.io/scss-starter/",thumbnail:"assets/twoje-finanse-3.jpg",description:"RWD: adobe.xd template -> HTML, SCSS, JS"}],wordpress:[{id:0,name:"stroika-wordpress-site",link:"http://stroika-1.ru/oremonte/vetryak-dlya-chastnogo-doma.html",thumbnail:"assets/stroika-1-ru-3.jpg",description:"wp installed on server, configured plugins and ads, posted articles. Traffic: 250 per day"}],openCart:[{id:0,name:"mirpodvoha-opencart-store",link:"https://mirpodvoha.by/",thumbnail:"assets/mirpodvoha-2.jpg",description:"OpenCart E-commerce"}]}},{projects:{vanillaJS:[new g.Entity("vanillaJS")],react:[new g.Entity("react")],htmlCssJs:[new g.Entity("htmlCssJs")],wordpress:[new g.Entity("wordpress")],openCart:[new g.Entity("openCart")]}}));function O(t,e){return t.isNavbarItemActive.map((function(t){return t.id===e?t.isActive=!0:t.isActive=!1,t}))}function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C="portfolioApp/navbarSlice/SWITCH_NAVBAR_ITEM",A="portfolioApp/navbarSlice/SWITCH_NAVBAR_CURRENT_FOCUS",_={isNavbarItemActive:[{id:"navbarItemAll",isActive:!0,value:"ALL"},{id:"navbarItemReact",isActive:!1,value:"TypeScript, React, Redux"},{id:"navbarItemHtmlCssJs",isActive:!1,value:"HTML, CSS, JS"},{id:"navbarItemWordpress",isActive:!1,value:"Wordpress"},{id:"navbarItemOpenCart",isActive:!1,value:"OpenCart"}],currentNavItemFocus:"navbarItemAll"},x=(0,t.UY)({navbarReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C:return E(E({},t),{},{isNavbarItemActive:O(t,e.payload)});case A:return E(E({},t),{},{currentNavItemFocus:e.payload});default:return t}},projectsReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return t}}),T=(0,t.MT)(x,(0,e.Uo)()),I=new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.navbar={switchNavbarItem:function(t){T.dispatch(function(t){return{type:C,payload:t}}(t)),T.dispatch(function(t){return{type:A,payload:t}}(t))}}};Object.freeze(I);var k=I,N=!1,P=function(){if(!window.DOMParser)return!1;var t=new DOMParser;try{t.parseFromString("x","text/html")}catch(t){return!1}return!0}(),R=function(t){return Array.prototype.slice.call(t)},z=function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},L=function(t){if(N)throw new Error(t)},M=function(t,e){var n=z(t);if("object"===n){var r={};for(var o in t)t.hasOwnProperty(o)&&(r[o]=M(t[o],e));return r}return"array"===n?t.map((function(t){return M(t,e)})):"string"!==n||e?t:t.replace(/[^\w-_. ]/gi,(function(t){return"&#"+t.charCodeAt(0)+";"})).replace(/javascript:/gi,"")},D=function(t){t.debounce&&window.cancelAnimationFrame(t.debounce),t.debounce=window.requestAnimationFrame((function(){t.render()}))},H=function(t){return{get:function(e,n){return["object","array"].indexOf(z(e[n]))>-1?new Proxy(e[n],H(t)):e[n]},set:function(e,n,r){return e[n]===r||(e[n]=r,D(t)),!0}}},U=function(t,e){var n=t.filter(e);return n.length<1?null:n[0]},V=["checked","selected","value"],F=function(t,e){e.forEach((function(e){t.style[e]=""}))},J=function(t,e){e.forEach((function(e){if("class"===e.att)t.className=e.value;else if("style"===e.att)!function(t,e){var n=function(t){return t.split(";").reduce((function(t,e){var n=e.indexOf(":");return n&&t.push({name:e.slice(0,n).trim(),value:e.slice(n+1).trim()}),t}),[])}(e),r=Array.prototype.filter.call(t.style,(function(e){return null===U(n,(function(n){return n.name===e&&n.value===t.style[e]}))}));F(t,r),function(t,e){e.forEach((function(e){t.style[e.name]=e.value}))}(t,n)}(t,e.value);else{if(e.att in t)try{t[e.att]=e.value,t[e.att]||0===t[e.att]||(t[e.att]="value"!==e.att||e.value)}catch(t){}try{t.setAttribute(e.att,e.value)}catch(t){}}}))},W=function(t,e){e.forEach((function(e){if("class"===e.att)t.className="";else if("style"===e.att)F(t,R(t.style));else{if(e.att in t)try{t[e.att]=""}catch(t){}try{t.removeAttribute(e.att)}catch(t){}}}))},B=function(t,e){return{att:t,value:e}},X=function(t,e){if(1!==t.nodeType)return[];var n=function(t,e){return Array.prototype.reduce.call(t.attributes,(function(t,n){return!(V.indexOf(n.name)<0||e&&"selected"===n.name)||n.name.length>7&&"default"===n.name.slice(0,7)||t.push(B(n.name,n.value)),t}),[])}(t,e);return function(t,e,n){V.forEach((function(n){e.push(B(n,t.getAttribute(n)))}))}(t,n),n},Y=function(t){return 3===t.nodeType?"text":8===t.nodeType?"comment":t.tagName.toLowerCase()},G=function(t){return t.childNodes&&t.childNodes.length>0?null:t.textContent},Z=function(t){1===t.nodeType&&(Array.prototype.forEach.call(t.attributes,(function(e){e.name.length<8||"default"!==e.name.slice(0,7)||(J(t,[B(e.name.slice(7).toLowerCase(),e.value)]),W(t,[B(e.name,e.value)]))})),t.childNodes&&Array.prototype.forEach.call(t.childNodes,(function(t){Z(t)})))},q=function(t,e,n){var r=R(e.childNodes),o=R(t.childNodes),i=r.length-o.length;if(i>0)for(;i>0;i--)r[r.length-i].parentNode.removeChild(r[r.length-i]);o.forEach((function(t,o){if(!r[o])return Z(t),void e.appendChild(t.cloneNode(!0));if(Y(t)===Y(r[o])){if(function(t,e){var n=X(t,!0),r=X(e),o=r.filter((function(t){return null===U(n,(function(e){return t.att===e.att}))})),i=n.filter((function(t){var e=U(r,(function(e){return t.att===e.att}));return null===e||e.value!==t.value}));J(e,i),W(e,o)}(t,r[o]),!(n.filter((function(e){return 3!==t.nodeType&&function(t,e){return Element.prototype.matches&&t.matches(e)||Element.prototype.msMatchesSelector&&t.msMatchesSelector(e)||Element.prototype.webkitMatchesSelector&&t.webkitMatchesSelector(e)}(t,e)})).length>0)){var i=G(t);if(i&&i!==G(r[o])&&(r[o].textContent=i),r[o].childNodes.length>0&&t.childNodes.length<1)r[o].innerHTML="";else{if(r[o].childNodes.length<1&&t.childNodes.length>0){var a=document.createDocumentFragment();return q(t,a,n),void r[o].appendChild(a)}t.childNodes.length>0&&q(t,r[o],n)}}}else r[o].parentNode.replaceChild(t.cloneNode(!0),r[o])}))},K=function(t,e){t&&t.forEach((function(t){if(t.attached.indexOf(e)>-1)return L(e.elem+" has attached nodes that it is also attached to, creating an infinite loop.");"render"in t&&t.render()}))},$=function(t,e){if(!(t||e&&e.lagoon))return L("You did not provide an element to make into a component.");if(!e||!e.template&&!e.lagoon)return L("You did not provide a template for this component.");var n=this,r=function(t,e){return t.setters?t.store?null:t.data:t.data&&!t.store?new Proxy(t.data,H(e)):null}(e,n),o=e.store,i=e.router,a=e.setters,c=e.getters;n.debounce=null,Object.defineProperties(n,{elem:{value:t},template:{value:e.template},allowHTML:{value:e.allowHTML},lagoon:{value:e.lagoon},store:{value:o},attached:{value:[]},router:{value:i}}),Object.defineProperty(n,"data",{get:function(){return a?M(r,!0):r},set:function(t){return o||a||(r=new Proxy(t,H(n)),D(n)),!0}}),a&&!o&&Object.defineProperty(n,"do",{value:function(t){if(!a[t])return L("There is no setter with this name.");var e=R(arguments);e[0]=r,a[t].apply(n,e),D(n)}}),c&&!o&&Object.defineProperty(n,"get",{value:function(t){return c[t]?c[t](r):L("There is no getter with this name.")}}),i&&"addComponent"in i&&i.addComponent(n),o&&"attach"in o&&o.attach(n),e.attachTo&&("array"===z(e.attachTo)?e.attachTo:[e.attachTo]).forEach((function(t){"attach"in t&&t.attach(n)}))};$.Store=function(t){return t.lagoon=!0,new $(null,t)},$.emit=function(t,e,n){var r;if(!t||!e)return L("You did not provide an element or event name.");r=new CustomEvent(e,{bubbles:!0,detail:n}),t.dispatchEvent(r)},$.prototype.render=function(){if(this.lagoon)K(this.attached,this);else{if(!this.template)return L("No template was provided.");var t="string"===z(this.elem)?document.querySelector(this.elem):this.elem;if(!t)return L("The DOM element to render your template into was not found.");var e=M((this.store?this.store.data:this.data)||{},this.allowHTML),n="function"===z(this.template)?this.template(e,this.router?this.router.current:t,t):this.template;if(!(["string","number"].indexOf(z(n))<0)){var r=this.attached.map((function(t){return t.elem}));return q(function(t){if(P){var e=(new DOMParser).parseFromString(t,"text/html");return e.head&&e.head.childNodes&&e.head.childNodes.length>0&&R(e.head.childNodes).reverse().forEach((function(t){e.body.insertBefore(t,e.body.firstChild)})),e.body||document.createElement("body")}var n=document.createElement("div");return n.innerHTML=t,n}(n),t,r),$.emit(t,"render",e),K(this.attached,this),t}}},$.prototype.attach=function(t){"array"===z(t)?this.attached.push.apply(this.attached,t):this.attached.push(t)},$.prototype.detach=function(t){var e="array"===z(t)?t:[t],n=this;e.forEach((function(t){var e=n.attached.indexOf(t);e<0||n.attached.splice(e,1)}))},$.debug=function(t){N=!!t},$.clone=M,$._={trueTypeOf:z,err:L};var Q=$,tt=function(t,e){return t.projectsReducer.result.projects[e].map((function(n){return t.projectsReducer.entities[e][n]}))},et=(n.p,function(){var t=function(t){return t.navbarReducer.isNavbarItemActive}(T.getState()).map((function(t){return'<button \n           class="'.concat(!0===t.isActive?"active":"disabled",'"\n\n           role=').concat(t.id,"\n           \n           onclick=\"globalThis.mapAllDispatch.navbar.switchNavbarItem(this.getAttribute('role'))\"           \n       >\n           ").concat(t.value,'\n           \n           <span class="itemsCount">').concat(function(t){var e=tt(T.getState(),"react").length,n=tt(T.getState(),"htmlCssJs").length,r=tt(T.getState(),"wordpress").length,o=tt(T.getState(),"openCart").length,i=e+n+r+o;switch(!0){case"navbarItemAll"===t:return i;case"navbarItemReact"===t:return e;case"navbarItemHtmlCssJs"===t:return n;case"navbarItemWordpress"===t:return r;case"navbarItemOpenCart"===t:return o;case"navbarItemGitHubLink"===t:return}}(t.id),"</span>\n\n      </button>")})).join("");return'<nav id="filter" role="navbarPortfolio">\n        '.concat(t,' \n        <a role="navbarItemGitHubLink" style="color: #fff; font-size: 16px" href="https://github.com/zloid">\n            <u>GitHub <img src="assets/beard-avatar.jpg" id="avatarFromGitHubField"></u>\n        </a>\n        </nav>')}),nt=function(){var t=tt(T.getState(),"react"),e=tt(T.getState(),"htmlCssJs"),n=tt(T.getState(),"wordpress"),r=tt(T.getState(),"openCart"),o=function(t){return t.map((function(t){return'\n            <div class="post col-sm-3 p-0">\n                <a target="_blank" href='.concat(t.link,">\n                    <p>").concat(t.description,'</p>\n                    <img class="img-fluid" src=').concat(t.thumbnail,' alt="image" />                           \n                </a> \n            </div>        \n                ')})).join("")};switch(T.getState().navbarReducer.currentNavItemFocus){case"navbarItemAll":return"".concat(o(n)," ").concat(o(t)," ").concat(o(r)," ").concat(o(e));case"navbarItemReact":return"".concat(o(t));case"navbarItemHtmlCssJs":return"".concat(o(e));case"navbarItemWordpress":return"".concat(o(n));case"navbarItemOpenCart":return"".concat(o(r))}},rt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://github.com/zloid/modern-vanilla-js-starter-kit";return'<div>    \n        \x3c!-- github-corner svg logo-link --\x3e        \n        <a\n            role="githubCorner"\n            href='.concat(t,'\n            target="_blank"\n            class="github-corner"\n            aria-label="View source on GitHub"\n            ><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>\n</div>')},ot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#root";return new Q(t,{template:function(){return"<div>   \n\n        ".concat('<header role="mainHeader">\n    <h1 align="center" role="h1Link">Sergey Voytehovich\'s portfolio</h1>\n</header>',"      \n\n        ").concat(et(),'    \n\n        <div class="container">\n            <div id="posts">\n                ').concat(nt(),"    \n            </div>\n        </div>\n\n        ").concat(rt("https://github.com/zloid/modern-js-portfolio"),"\n\n    </div>")}})};!globalThis.mapAllDispatch&&(globalThis.mapAllDispatch=k),ot("#root").render(),T.subscribe((function(){return ot("#root").render()}))}()}();