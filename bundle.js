!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var r="abcdefghijklmnopqrstuvwxyz",o="{}()[]#:;^,.?!'|&_`~@$%/+-*",i="",a=[r];lowercaseBox.addEventListener("click",(function(){var e=a.indexOf(r);return-1==e?a.push(r):a.splice(e,1)})),uppercaseBox.addEventListener("click",(function(){var e=a.indexOf("ABCDEFGHIJKLMNOPQRSTUVWXYZ");return-1==e?a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ"):a.splice(e,1)})),numbersBox.addEventListener("click",(function(){var e=a.indexOf("0123456789");return-1==e?a.push("0123456789"):a.splice(e,1)})),symbolsBox.addEventListener("click",(function(){var e=a.indexOf(o);return-1==e?a.push(o):a.splice(e,1)})),range.addEventListener("input",(function(){charInfo.innerHTML=range.value+" characters"}));var p=document.querySelectorAll("input[type=checkbox]"),c=Array.from(p),s=document.querySelectorAll(".checkbox_indicator");function d(){appAlert.classList.remove("app_alert--red"),s.forEach((function(e){return e.style.border="1px solid lightgrey"}))}function l(){appAlert.classList.remove("app_alert--green"),password.classList.remove("app_password--animate")}function u(){"string"!=typeof a[0]?(l(),appAlert.classList.add("app_alert--red"),s.forEach((function(e){return e.style.border="1px solid #ec4949"}))):d()}generateBtn.addEventListener("click",(function(e){e.preventDefault(),u(),i="",function(e){e=range.value;for(var t=a.join(""),n=0;n<e;n++)i+=t.charAt(Math.floor(Math.random()*t.length))}(),password.value=i})),resetBtn.addEventListener("click",(function(){d(),password.value="",range.value=10,charInfo.innerHTML=range.value+" characters",c.forEach((function(e){return e.checked=!1})),c[0].checked=!0,a=[r]})),copyBtn.addEventListener("click",(function(){l(),0!=appAlert.classList.contains("app_alert--red")?l():setTimeout((function(){appAlert.classList.add("app_alert--green"),password.classList.add("app_password--animate")}),1),password.select(),password.setSelectionRange(0,32),document.execCommand("copy"),password.blur()}))},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function p(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],s=n[c]||0,d="".concat(c," ").concat(s);n[c]=s+1;var l=p(d),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(u)):a.push({identifier:d,updater:g(u,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function x(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,f=0;function g(e,t){var n,r,o;if(t.singleton){var i=f++;n=h||(h=s(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=s(t),r=x.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=p(n[r]);a[o].references--}for(var i=c(e,t),s=0;s<n.length;s++){var d=p(n[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(e,t,n){var r=n(4),o=n(5),i=n(6),a=n(7);(t=r(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Comfortaa&display=swap);"]);var p=o(i),c=o(a);t.push([e.i,'.app_password:hover,input:hover[type=range]::-webkit-slider-runnable-track,.checkbox_item:hover input ~ .checkbox_indicator:hover,.checkbox_item:hover .checkbox_item input:active ~ .checkbox_indicator:hover,.controls_btn:hover{background:#5e6574;transition:background ease-out .1s}.app_password:focus,.controls_btn:focus{outline:0}@keyframes bgFadeout{0%{background:#686767}100%{background:auto}}.app_password{color:#daaa1a;font-size:25px;font-weight:bold;font-family:"Comfortaa",cursive;text-align:center;background:#3f4759;box-sizing:border-box;width:100%;max-width:100%;max-height:41px;min-height:41px;border:0;border-bottom:3px solid lightgrey;margin-bottom:20px;padding:5px}.app_password--animate{animation:bgFadeout 1s}.range_label{display:block;width:100%;text-align:center;margin:5px 0}.range_input{margin:15px 0;width:100%}input[type=range]{-webkit-appearance:none;width:100%;margin:20px 0}input[type=range]:focus{outline:none}input[type=range]::-webkit-slider-runnable-track{width:100%;height:5.9px;cursor:pointer;box-shadow:1px 1px 1px #000000, 0px 0px 1px #0d0d0d;background:#3f4759;border-radius:1.3px;border:0.2px solid #010101}input[type=range]::-webkit-slider-thumb{box-shadow:1px 1px 1px #000000, 0px 0px 1px #0d0d0d;border:1px solid #000000;height:24px;width:11px;border-radius:3px;background:#daaa1a;cursor:pointer;-webkit-appearance:none;margin-top:-9.25px}input[type=range]::-moz-range-track{width:100%;height:5.9px;cursor:pointer;box-shadow:1px 1px 1px #000000, 0px 0px 1px #0d0d0d;background:#3f4759;border-radius:1.3px;border:0.2px solid #010101}input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000000, 0px 0px 1px #0d0d0d;border:1px solid #000000;height:24px;width:11px;border-radius:3px;background:#daaa1a;cursor:pointer}input[type=range]::-ms-track{width:100%;height:5.9px;cursor:pointer;background:transparent;border-color:transparent;color:transparent}input[type=range]::-ms-fill-lower{background:#000000;border:0.2px solid #010101;border-radius:2.6px;box-shadow:1px 1px 1px #000000, 0px 0px 1px #0d0d0d}input[type=range]::-ms-fill-upper{background:#3f4759;border:0.2px solid #010101;border-radius:2.6px;box-shadow:1px 1px 1px #000000, 0px 0px 1px #0d0d0d}input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000000, 0px 0px 1px #0d0d0d;border:1px solid #000000;height:24px;width:11px;border-radius:3px;background:#daaa1a;cursor:pointer;height:5.9px}input[type=range]:focus::-ms-fill-lower{background:#3f4759}input[type=range]:focus::-ms-fill-upper{background:#b1b8c8}.checkbox_item{display:block;position:relative;width:140px;padding-left:65px;margin-bottom:7px;padding-top:3px;cursor:pointer;font-size:20px}.checkbox_item input{position:absolute;z-index:-1;opacity:0}.checkbox_indicator{position:absolute;top:2px;right:-40px;height:15px;width:15px;background:#3f4759;border:1px solid lightgrey;border-radius:0px}.checkbox_item:hover input:not([disabled]):checked ~ .checkbox_indicator,.checkbox_item:hover .checkbox_item input:checked:focus ~ .checkbox_indicator{background:#3f4759}.checkbox_indicator:after{box-sizing:unset;content:\'\';position:absolute;display:none}.checkbox_item input:checked ~ .checkbox_indicator:after{display:block}.checkbox_indicator:after{left:5px;top:2px;width:5px;height:8px;border:solid #daaa1a;border-width:0 2px 2px 0;transform:rotate(45deg)}.controls_btn{color:#daaa1a;font-family:"Comfortaa",cursive;font-size:20px;background:#3f4759;border:0;border:1.5px solid lightgrey;border-radius:8px;padding:7px;width:175px;height:48px;cursor:pointer;text-decoration:none}.controls_btn--red{color:#ec4949}.controls_btn:nth-of-type(even){margin:24px 1px 24px 1px}.controls_btn:nth-of-type(even):active{margin:25px 0px 23px 2px}.controls_btn:nth-of-type(odd){margin:1px 1px 1px 1px}.controls_btn:nth-of-type(odd):active{margin:2px 0px 0px 2px}html,body{position:relative;background:#1c1d25;width:100%;height:100%;font-family:"Comfortaa",cursive;margin:0;padding:0}.wrapper{background:#21242B;color:#daaa1a;margin-right:auto;margin-left:auto;max-width:1200px;height:100%;min-height:910px;padding:0 10px;box-shadow:0px 0px 130px 160px #21242b;display:flex;justify-content:center;align-items:center}.header{position:absolute;align-self:flex-start;width:445px;margin-top:20px}.header .header_logo{display:inline-block;background:url('+p+") center no-repeat;background-size:cover;width:115px;height:115px;margin:0}.header .header_inscription,.header .header_version{position:absolute;font-weight:bold}.header .header_inscription{font-size:38px;top:59px;left:61px}.header .header_version{top:100px;right:0px;letter-spacing:2px}.header .header_text{margin-top:35px;text-align:center;font-size:17px}.app{margin:90px auto 0;width:630px;height:310px;padding:40px 45px;background:#2A2C38;border:4px solid darkgrey;border-radius:10px}.app .app_alert{height:23px;margin:0;margin-left:0;text-align:center;font-weight:bold;letter-spacing:2px;font-size:24px}.app .app_alert--green,.app .app_alert--red{margin-left:10px;letter-spacing:0px}.app .app_alert--green{opacity:0;color:#198f19;transition:opacity 4s .2s, margin-left .5s 0s, letter-spacing .5s 0s}.app .app_alert--green:after{content:'Copied to clipboard !'}.app .app_alert--red{color:#ec4949;transition:margin-left .5s 0s, letter-spacing .5s 0s}.app .app_alert--red:after{content:'Please check any option'}.config{display:flex;justify-content:center;align-items:center;flex-wrap:wrap-reverse;margin:20px 0}.config .options{width:302px;font-size:20px}.config .controls{width:302px;display:flex;align-items:center;justify-content:center;height:210px}.config .controls .controls_row{width:170px}.socials{position:absolute;align-self:flex-end;padding:15px 0}.socials p{text-align:center}.socials .socials_anchor{text-decoration:none;color:inherit;font-weight:bold}.socials .socials_logo{background:url("+c+") center no-repeat;background-size:cover;width:60px;height:60px}.socials *{margin:13px auto}@media (min-width: 481px) and (max-width: 768px){.app{padding:40px 30px;height:336px}.app_password{max-height:69px;min-height:69px}.config{justify-content:space-around}.config .options,.config .controls{width:185px}.config .options .checkbox_item{padding-left:15px}.config .options .checkbox_item .checkbox_indicator{right:-15px}}@media (max-width: 480px){.wrapper{min-height:810px;padding:0}.header{width:310px;margin-top:5px}.header .header_logo{width:70px;height:70px}.header .header_inscription{font-size:27px;top:33px;left:38px}.header .header_version{top:60px;font-size:12px}.header .header_text{margin-top:8px;text-align:center;font-size:12px}.app{height:465px;width:100%;margin-top:6px;padding:25px 10px;border:none;border-top:2px solid darkgrey;border-bottom:2px solid darkgrey;border-radius:0}.app .app_alert{position:relative;top:7px;font-size:18px}.app_password{margin:0;max-height:69px;min-height:69px}.config{margin:5px 0}.config .options{margin-top:15px}.config .controls{display:block;height:auto;margin-top:10px}.config .controls .controls_row{width:100%}.config .controls .controls_row .controls_btn{width:100%;height:38px}.config .controls .controls_row .controls_btn:nth-of-type(even){margin:14px 1px 14px 1px}.config .controls .controls_row .controls_btn:nth-of-type(even):active{margin:15px 0px 13px 2px}.socials{padding:5px 0}.socials *{margin:8px auto}}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,p=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,p,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var p=0;p<e.length;p++){var c=[].concat(e[p]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"c7061f9ee3a53d604fbf20ff579a2ebb.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"e9afdb629b25d3ff70ac88deea8561b7.png"}]);