parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aMcj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={createErrorElement:function(e){var r=document.createElement("p");return r.innerHTML=e.errorText,r.setAttribute("class","error"),r}},r=e;exports.default=r;
},{}],"OigE":[function(require,module,exports) {
"use strict";var e=t(require("../helpers/_functions"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(t){var r=[],n={title:"Name",input:document.getElementById("name"),container:document.querySelector("#name-container"),errorText:null},o={title:"Surname",input:document.getElementById("surname"),container:document.querySelector("#surname-container"),errorText:null},u={title:"Phone",input:document.getElementById("phone"),container:document.querySelector("#phone-container"),errorText:null},a=(document.getElementById("email"),document.querySelector("#email-container"),function(t){var r=t,n=r.input.value.trim();if(""===n){r.errorText="Field ".concat(r.title.toLowerCase()," cannot be empty");var o=e.default.createErrorElement(r);return r.container.append(o),setTimeout(function(){o.remove()},2e3),!1}if(n.length<3){r.errorText="".concat(r.title," must be minimum 3 characters");var u=e.default.createErrorElement(r);return r.container.append(u),setTimeout(function(){u.remove()},2e3),!1}if(n.length>=20){r.errorText="".concat(r.title," must be less than 20 characters");var a=e.default.createErrorElement(r);return r.container.append(a),setTimeout(function(){a.remove()},2e3),!1}return!0});r.push(a(n)),r.push(a(o));r.push(function(){var t=u.input.value.trim();if(""===t){u.errorText="Field ".concat(u.title.toLowerCase()," cannot be empty");var r=e.default.createErrorElement(u);return u.container.append(r),setTimeout(function(){r.remove()},2e3),!1}if(!/^\+38\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/.test(t)){u.errorText="Phone format does not match";var n=e.default.createErrorElement(u);return u.container.append(n),setTimeout(function(){n.remove()},4e3),!1}return!0}()),r.every(function(e){return!0===e})||t.preventDefault()},n=document.querySelector(".user-form");n.addEventListener("submit",r);
},{"../helpers/_functions":"aMcj"}]},{},["OigE"], null)
//# sourceMappingURL=validForm.5a0695aa.js.map