!function e(t,s,o){function r(i,a){if(!s[i]){if(!t[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(n)return n(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=s[i]={exports:{}};t[i][0].call(l.exports,function(e){var s=t[i][1][e];return r(s?s:e)},l,l.exports,e,t,s,o)}return s[i].exports}for(var n="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(e,t,s){e("./common/notifier"),e("./common/validator"),e("./forms/signup"),e("./common/menu")},{"./common/menu":3,"./common/notifier":4,"./common/validator":5,"./forms/signup":6}],2:[function(e,t,s){"use strict";function o(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function r(e,t){if("[object NodeList]"===Object.prototype.toString.call(e))for(var s=0;s<e.length;s++)o(e[s],t);else o(e,t)}function n(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function i(e,t){if("[object NodeList]"===Object.prototype.toString.call(e))for(var s=0;s<e.length;s++)n(e[s],t);else n(e,t)}function a(e,t){if(e.classList)e.classList.toggle(t);else{for(var s=e.className.split(" "),o=-1,r=s.length;r--;)s[r]===t&&(o=r);o>=0?s.splice(o,1):s.push(t),e.className=s.join(" ")}}function c(e,t){e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}t.exports={addClass:r,removeClass:i,toggleClass:a,hasClass:c}},{}],3:[function(e,t,s){"use strict";var o=e("./dom"),r=document.querySelector(".js-nav-toggle"),n=document.querySelector(".js-nav-menu"),i=!1;r.addEventListener("click",function(e){e.preventDefault(),i?window.setTimeout(function(){o.removeClass(r,"is-closing"),i=!1},110):window.setTimeout(function(){o.addClass(r,"is-closing"),i=!0},110),o.toggleClass(n,"is-active"),o.toggleClass(r,"is-active")})},{"./dom":2}],4:[function(e,t,s){"use strict";function o(e){n.addClass(i,"is-active"),i.innerHTML=e,window.setTimeout(r,1e3)}function r(){n.addClass(i,"is-closing"),window.setTimeout(function(){window.setTimeout(function(){n.removeClass(i,"is-closing")},250),n.removeClass(i,"is-active")},500)}var n=e("./dom"),i=document.querySelector(".js-notifier");t.exports={error:o}},{"./dom":2}],5:[function(e,t,s){"use strict";function o(e){return void 0!==e&&null!==e}function r(e){return!o(e)||0===e.length}function n(e,t){return o(e)&&e.length>=t}function i(e){var t=/[A-Z]/;return o(e)&&t.test(e)}function a(e){var t=/[^a-zA-Z0-9]/;return o(e)&&t.test(e)}t.exports={isEmpty:r,exists:o,atLeast:n,hasUppercase:i,hasSpecial:a}},{}],6:[function(e,t,s){"use strict";function o(){var e=u.value;return i.isEmpty(e)?"Please enter a username.":void 0}function r(){var e=l.value;return i.isEmpty(e)?"Please enter a password":i.atLeast(e,6)?i.hasUppercase(e)?i.hasSpecial(e)?void 0:"Your password needs at least one special character.":"Your password needs at least one uppercase letter.":"Your password needs at least 6 characters"}var n=e("../common/dom"),i=e("../common/validator"),a=e("../common/notifier"),c=document.querySelector(".js-form-submit"),u=document.querySelector(".js-form-username"),l=document.querySelector(".js-form-password");c.addEventListener("click",function(e){e.preventDefault();var t=o(),s=r(),c=!1;i.isEmpty(t)?n.removeClass(u,"is-error"):(a.error(t),c=!0,n.addClass(u,"is-error")),i.isEmpty(s)?n.removeClass(l,"is-error"):(c||a.error(s),n.addClass(l,"is-error"))});var m=document.querySelector(".js-form-reveal");m.addEventListener("click",function(e){var t="password"===l.getAttribute("type")?"text":"password";l.setAttribute("type",t)})},{"../common/dom":2,"../common/notifier":4,"../common/validator":5}]},{},[1]);