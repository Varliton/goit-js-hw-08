function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function b(t,e,n){var i,o,r,f,a,u,c=0,l=!1,s=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=i,r=o;return i=o=void 0,c=e,f=t.apply(r,n)}function j(t){return c=t,a=setTimeout(O,e),l?y(t):f}function h(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=r}function O(){var t=p();if(h(t))return w(t);a=setTimeout(O,function(t){var n=e-(t-u);return s?v(n,r-(t-c)):n}(t))}function w(t){return a=void 0,b&&i?y(t):(i=o=void 0,f)}function T(){var t=p(),n=h(t);if(i=arguments,o=this,u=t,n){if(void 0===a)return j(u);if(s)return a=setTimeout(O,e),y(u)}return void 0===a&&(a=setTimeout(O,e)),f}return e=m(e)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(m(n.maxWait)||0,e):r,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=u=o=a=void 0},T.flush=function(){return void 0===a?f:w(p())},T}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(t,e,{leading:i,maxWait:e,trailing:o})};const y=document.querySelector(".feedback-form");y.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(t){t.preventDefault(),t.target.reset(),localStorage.removeItem("feedback-form-state")}));const j={};!function(){const t=localStorage.getItem("feedback-form-state");t&&(j=JSON.parse(t),Object.keys(j).forEach((t=>y[t].value=j[t])))}();
//# sourceMappingURL=03-feedback.c74dfea9.js.map