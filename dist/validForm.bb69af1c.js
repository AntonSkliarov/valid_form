parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aMcj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={createErrorElement:function(e){var r=document.createElement("p");return r.innerHTML=e.errorText,r.setAttribute("class","error"),r}},r=e;exports.default=r;
},{}],"OigE":[function(require,module,exports) {
"use strict";var e=r(require("../helpers/_functions"));function r(e){return e&&e.__esModule?e:{default:e}}var t=function(r){var t=[],n={title:"Name",input:document.getElementById("name"),container:document.querySelector("#name-container"),errorText:null},u={title:"Surname",input:document.getElementById("surname"),container:document.querySelector("#surname-container"),errorText:null},a=function(r){var t=r,n=t.input.value.trim();if(""===n){t.errorText="Field name cannot be empty";var u=e.default.createErrorElement(t);return t.container.append(u),setTimeout(function(){u.remove()},2e3),!1}if(n.length<3){t.errorText="Name must be minimum 3 characters";var a=e.default.createErrorElement(t);return t.container.append(a),setTimeout(function(){a.remove()},2e3),!1}if(n.length>=20){t.errorText="Name must be less than 20 characters";var o=e.default.createErrorElement(t);return t.container.append(o),setTimeout(function(){o.remove()},2e3),!1}return!0};t.push(a(n)),t.push(a(u)),t.every(function(e){return!0===e})||r.preventDefault()},n=document.querySelector(".user-form");n.addEventListener("submit",t);
},{"../helpers/_functions":"aMcj"}]},{},["OigE"], null)
//# sourceMappingURL=validForm.bb69af1c.js.map