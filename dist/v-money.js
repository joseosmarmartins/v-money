(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VMoney=t():e.VMoney=t()})(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){"use strict";t.__esModule=!0,t.default={prefix:"",suffix:"",thousands:",",decimal:".",precision:2,placeholder:!1}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){t&&Object.keys(t).map(function(e){c.default[e]=t[e]}),e.directive("money",i.default),e.component("money",s.default)}t.__esModule=!0,t.VERSION=t.options=t.VMoney=t.Money=void 0;var a=n(6),s=o(a),u=n(4),i=o(u),l=n(0),c=o(l);t.Money=s.default,t.VMoney=i.default,t.options=c.default,t.VERSION="0.8.3",t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t){throw new Error("Module build failed: TypeError: /home/jose/Dev/workspace/v-money/src/component.vue: path.arrowFunctionToExpression is not a function\n    at PluginPass.ArrowFunctionExpression (/home/jose/Dev/workspace/v-money/node_modules/babel-plugin-transform-es2015-arrow-functions/lib/index.js:10:14)\n    at newFn (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/visitors.js:276:21)\n    at NodePath._call (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/path/context.js:76:18)\n    at NodePath.call (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/path/context.js:48:17)\n    at NodePath.visit (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/path/context.js:105:12)\n    at TraversalContext.visitQueue (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/context.js:150:16)\n    at TraversalContext.visitSingle (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/context.js:108:19)\n    at TraversalContext.visit (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/context.js:192:19)\n    at Function.traverse.node (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/index.js:114:17)\n    at NodePath.visit (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/path/context.js:115:19)\n    at TraversalContext.visitQueue (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/context.js:150:16)\n    at TraversalContext.visitMultiple (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/context.js:103:17)\n    at TraversalContext.visit (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/context.js:190:19)\n    at Function.traverse.node (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/index.js:114:17)\n    at NodePath.visit (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/path/context.js:115:19)\n    at TraversalContext.visitQueue (/home/jose/Dev/workspace/v-money/node_modules/babel-traverse/lib/context.js:150:16)")},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,o){return n[o]=void 0===t[o]?e[o]:t[o],n},{})}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.default=function(e,t){if(t.value){var n=(0,s.default)(i.default,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var o=e.getElementsByTagName("input");1!==o.length||(e=o[0])}e.onkeydown=function(t){var o=8==t.which||46==t.which,a=e.value.length-e.selectionEnd==0;n.placeholder&&o&&a&&0===(0,r.unformat)(e.value,0)&&(e.value="",e.dispatchEvent((0,r.event)("change")))},e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=(0,r.format)(e.value,n),t=Math.max(t,n.suffix.length),t=e.value.length-t,t=Math.max(t,n.prefix.length+1),(0,r.setCursor)(e,t),e.dispatchEvent((0,r.event)("change"))},e.onfocus=function(){(0,r.setCursor)(e,e.value.length-n.suffix.length)},e.oninput(),e.dispatchEvent((0,r.event)("input"))}};var r=n(5),a=n(3),s=o(a),u=n(0),i=o(u)},function(e,t,n){"use strict";function o(e,t){if(void 0===t&&(t=m.default),t.placeholder&&""==e)return"";"number"==typeof e&&(e=e.toFixed(s(t.precision)));var n=e.indexOf("-")>=0?"-":"",o=a(e),r=i(o,t.precision),u=d(r).split("."),f=u[0],v=u[1];return f=l(f,t.thousands),t.prefix+n+c(f,v,t.decimal)+t.suffix}function r(e,t){var n=e.indexOf("-")>=0?-1:1,o=a(e),r=i(o,t);return parseFloat(r)*n}function a(e){return d(e).replace(/\D+/g,"")||"0"}function s(e){return u(0,e,20)}function u(e,t,n){return Math.max(e,Math.min(t,n))}function i(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(s(t))}function l(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function c(e,t,n){return t?e+n+t:e}function d(e){return e?e.toString():""}function f(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function v(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}t.__esModule=!0,t.event=t.setCursor=t.unformat=t.format=void 0;var p=n(0),m=function(e){return e&&e.__esModule?e:{default:e}}(p);t.format=o,t.unformat=r,t.setCursor=f,t.event=v},function(e,t,n){var o=n(7)(n(2),n(8),null,null);e.exports=o.exports},function(e,t){e.exports=function(e,t,n,o){var r,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,a=e.default);var u="function"==typeof a?a.options:a;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),o){var i=u.computed||(u.computed={});Object.keys(o).forEach(function(e){var t=o[e];i[e]=function(){return t}})}return{esModule:r,exports:a,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix,placeholder:e.placeholder},expression:"{precision, decimal, thousands, prefix, suffix, placeholder}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(1)}])});