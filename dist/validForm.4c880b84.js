// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"helpers/_functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var FUNC = {
  createErrorElement: function createErrorElement(elementName) {
    var errorElement = document.createElement('p');
    errorElement.innerHTML = elementName.errorText;
    errorElement.setAttribute('class', 'error');
    return errorElement;
  }
};
var _default = FUNC;
exports.default = _default;
},{}],"scripts/validForm.js":[function(require,module,exports) {
"use strict";

var _functions = _interopRequireDefault(require("../helpers/_functions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateForm = function validateForm(event) {
  var isFieldsValid = [];
  var name = {
    title: 'Name',
    input: document.getElementById('name'),
    container: document.querySelector('#name-container'),
    errorText: null
  };
  var surname = {
    title: 'Surname',
    input: document.getElementById('surname'),
    container: document.querySelector('#surname-container'),
    errorText: null
  };
  var phone = {
    title: 'Phone',
    input: document.getElementById('phone'),
    container: document.querySelector('#phone-container'),
    errorText: null
  };
  var email = {
    title: 'Email',
    input: document.getElementById('email'),
    container: document.querySelector('#email-container'),
    errorText: null
  }; // text type validation start

  var validateTextTypeInput = function validateTextTypeInput(el) {
    var textTypeElement = el;
    var elementValue = textTypeElement.input.value.trim();

    if (elementValue === '') {
      textTypeElement.errorText = "Field ".concat(textTypeElement.title.toLowerCase(), " cannot be empty");

      var errorElement = _functions.default.createErrorElement(textTypeElement);

      textTypeElement.container.append(errorElement);
      setTimeout(function () {
        errorElement.remove();
      }, 2000);
      return false;
    }

    if (elementValue.length < 3) {
      textTypeElement.errorText = "".concat(textTypeElement.title, " must be minimum 3 characters");

      var _errorElement = _functions.default.createErrorElement(textTypeElement);

      textTypeElement.container.append(_errorElement);
      setTimeout(function () {
        _errorElement.remove();
      }, 2000);
      return false;
    }

    if (elementValue.length >= 20) {
      textTypeElement.errorText = "".concat(textTypeElement.title, " must be less than 20 characters");

      var _errorElement2 = _functions.default.createErrorElement(textTypeElement);

      textTypeElement.container.append(_errorElement2);
      setTimeout(function () {
        _errorElement2.remove();
      }, 2000);
      return false;
    }

    return true;
  };

  isFieldsValid.push(validateTextTypeInput(name));
  isFieldsValid.push(validateTextTypeInput(surname)); // text type validation end
  // phone validation start

  var validateTelTypeInput = function validateTelTypeInput() {
    var phoneValue = phone.input.value.trim();

    if (phoneValue === '') {
      phone.errorText = "Field ".concat(phone.title.toLowerCase(), " cannot be empty");

      var errorElement = _functions.default.createErrorElement(phone);

      phone.container.append(errorElement);
      setTimeout(function () {
        errorElement.remove();
      }, 2000);
      return false;
    }

    var regex = /^\+38\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/;

    if (!regex.test(phoneValue)) {
      phone.errorText = "".concat(phone.title, " format does not match");

      var _errorElement3 = _functions.default.createErrorElement(phone);

      phone.container.append(_errorElement3);
      setTimeout(function () {
        _errorElement3.remove();
      }, 2000);
      return false;
    }

    return true;
  };

  isFieldsValid.push(validateTelTypeInput()); // phone validation end
  // email validation start

  var validateEmailTypeInput = function validateEmailTypeInput() {
    var emailValue = email.input.value.trim();

    if (emailValue === '') {
      email.errorText = "Field ".concat(email.title.toLowerCase(), " cannot be empty");

      var errorElement = _functions.default.createErrorElement(email);

      email.container.append(errorElement);
      setTimeout(function () {
        errorElement.remove();
      }, 2000);
      return false;
    }

    var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!regex.test(emailValue)) {
      email.errorText = "".concat(email.title, " format does not match");

      var _errorElement4 = _functions.default.createErrorElement(email);

      email.container.append(_errorElement4);
      setTimeout(function () {
        _errorElement4.remove();
      }, 2000);
      return false;
    }

    return true;
  };

  isFieldsValid.push(validateEmailTypeInput()); // email validation start

  var isAllFieldsValid = isFieldsValid.every(function (fieldValid) {
    return fieldValid === true;
  });

  if (!isAllFieldsValid) {
    event.preventDefault();
  }
};

var form = document.querySelector('.user-form');
form.addEventListener('submit', validateForm);
},{"../helpers/_functions":"helpers/_functions.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52863" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/validForm.js"], null)
//# sourceMappingURL=/validForm.4c880b84.js.map