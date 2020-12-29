parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aMcj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={createErrorElement:function(e){var r=document.createElement("p");return r.innerHTML=e.errorText,r.setAttribute("class","error"),r}},r=e;exports.default=r;
},{}],"JSft":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[{title:"Name",type:"text",input:document.getElementById("name"),container:document.querySelector("#name-container"),errorText:null,errorElement:null,isValid:!1},{title:"Surname",type:"text",input:document.getElementById("surname"),container:document.querySelector("#surname-container"),errorText:null,errorElement:null,isValid:!1},{title:"Phone",type:"tel",input:document.getElementById("phone"),container:document.querySelector("#phone-container"),errorText:null,errorElement:null,isValid:!1},{title:"Email",type:"email",input:document.getElementById("email"),container:document.querySelector("#email-container"),errorText:null,errorElement:null,isValid:!1},{title:"Password",type:"password",input:document.getElementById("pass"),container:document.querySelector("#pass-container"),errorText:null,errorElement:null,isValid:!1}],t=e;exports.default=t;
},{}],"bTvA":[function(require,module,exports) {
"use strict";var e=t(require("../helpers/_functions")),r=t(require("../helpers/_constants"));function t(e){return e&&e.__esModule?e:{default:e}}var n=!1,a=function(t){var a=t;a.input.onfocus=function(){a.errorElement&&(a.errorElement.remove(),a.isValid=!1,n=r.default.every(function(e){return!0===e.isValid}))},a.input.onblur=function(){var t=a.input.value.trim();if(""===t)return a.errorText="Field ".concat(a.title.toLowerCase()," cannot be empty"),a.errorElement=e.default.createErrorElement(a),a.container.append(a.errorElement),a.isValid=!1,void(n=r.default.every(function(e){return!0===e.isValid}));if("text"===a.type){if(t.length<3)return a.errorText="".concat(a.title," must be minimum 3 characters"),a.errorElement=e.default.createErrorElement(a),a.container.append(a.errorElement),a.isValid=!1,void(n=r.default.every(function(e){return!0===e.isValid}));if(t.length>=20)return a.errorText="".concat(a.title," must be less than 20 characters"),a.errorElement=e.default.createErrorElement(a),a.container.append(a.errorElement),a.isValid=!1,void(n=r.default.every(function(e){return!0===e.isValid}))}if("email"===a.type){if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(t))return a.errorText="".concat(a.title," format does not match"),a.errorElement=e.default.createErrorElement(a),a.container.append(a.errorElement),a.isValid=!1,void(n=r.default.every(function(e){return!0===e.isValid}))}if("tel"===a.type){if(!/^\+38\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/.test(t))return a.errorText="".concat(a.title," format does not match"),a.errorElement=e.default.createErrorElement(a),a.container.append(a.errorElement),a.isValid=!1,void(n=r.default.every(function(e){return!0===e.isValid}))}if("password"===a.type){if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(t))return a.errorText="".concat(a.title," format does not match"),a.errorElement=e.default.createErrorElement(a),a.container.append(a.errorElement),a.isValid=!1,void(n=r.default.every(function(e){return!0===e.isValid}))}a.isValid=!0,n=r.default.every(function(e){return!0===e.isValid})}},i=function(){r.default.map(function(e){return a(e)})};i();var o=document.querySelector(".user-form");o.addEventListener("submit",function(e){n||e.preventDefault()});
},{"../helpers/_functions":"aMcj","../helpers/_constants":"JSft"}]},{},["bTvA"], null)
//# sourceMappingURL=formValidation.0859555a.js.map