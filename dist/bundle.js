var app = (() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    observation: () => observation_exports,
    popupImage: () => popupImage,
    storage: () => storage_exports,
    theme: () => theme_exports
  });

  // src/app/observation.ts
  var observation_exports = {};
  __export(observation_exports, {
    observe: () => observe
  });
  function observe(element, callback) {
    const observer = new IntersectionObserver(callback);
    observer.observe(element);
    return observer;
  }

  // src/app/storage.ts
  var storage_exports = {};
  __export(storage_exports, {
    ensure: () => ensure,
    get: () => get,
    getStore: () => getStore,
    set: () => set,
    setStore: () => setStore
  });
  function getStore() {
    const raw = localStorage.getItem("storage");
    return JSON.parse(raw != null ? raw : "{}");
  }
  function setStore(store) {
    const raw = JSON.stringify(store);
    localStorage.setItem("storage", raw);
  }
  function set(name, value) {
    const store = getStore();
    store[name] = value;
    setStore(store);
  }
  function get(name) {
    const store = getStore();
    return store[name];
  }
  function ensure(name, defaultValue) {
    let value = get(name);
    if (value)
      return value;
    set(name, defaultValue);
    return defaultValue;
  }

  // src/app/theme.ts
  var theme_exports = {};
  __export(theme_exports, {
    switchIt: () => switchIt
  });
  if (get("dark"))
    switchIt();
  function switchIt() {
    const activated = document.body.classList.toggle("dark");
    set("dark", activated);
    console.log(activated);
  }

  // src/app/functions.ts
  function popupImage(url) {
    const popup = document.getElementById("popupImage");
    const img = popup.querySelector("img");
    img.src = url;
    popup.style.display = popup.style.display === "none" ? "block" : "none";
  }

  // src/app/utils.ts
  function createElementFromHTML(html2) {
    const div = document.createElement("div");
    div.innerHTML = html2.trim();
    return div.firstChild;
  }

  // src/app/data.ts
  var projects = [
    {
      name: "Gario",
      technologies: ["TypeScript", "p5.js", "ESBuild", "Gulp"],
      image: "assets/images/projects/gario.png",
      description: "Petit test de platformer 2D avec moteur physique simple et syst\xE8me de checkpoint.",
      url: "https://github.com/CamilleAbella/Gario"
    },
    {
      name: "Just a Forum",
      technologies: ["TypeScript", "Express", "Sass", "PostgresSQL", "Gulp"],
      image: "assets/images/projects/jf.png",
      description: "D\xE9but de r\xE9seau social/forum \xE0 post r\xE9cursif orient\xE9 d\xE9veloppement (markdown interpr\xE9t\xE9 et syntaxe des blocs de code color\xE9e).",
      url: "https://github.com/CamilleAbella/just-a-forum"
    },
    {
      name: "Bot.ts",
      technologies: ["TypeScript", "ESBuild", "Gulp", "discord.js"],
      image: "assets/images/projects/bts.png",
      description: "Framework pour bots Discord incluant un command handler avanc\xE9, un cli pour g\xE9n\xE9rer des fichiers, une structure de fichier super pratique, un syst\xE8me d'arguments bas\xE9 sur Yargs pour les commandes, quelques commandes et events int\xE9gr\xE9s, un base de donn\xE9es d\xE9j\xE0 setup et quelques outils...",
      url: "https://ghom.gitbook.io/bot-ts/"
    },
    {
      name: "xPad",
      technologies: ["JavaScript"],
      image: "assets/images/projects/xpad.png",
      description: "Mapper de manette xBox pour les applications WEB.",
      url: "https://github.com/CamilleAbella/xPad"
    }
  ];

  // node_modules/ssr-window/ssr-window.esm.js
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach(function(key) {
      if (typeof target[key] === "undefined")
        target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener: function() {
    },
    removeEventListener: function() {
    },
    activeElement: {
      blur: function() {
      },
      nodeName: ""
    },
    querySelector: function() {
      return null;
    },
    querySelectorAll: function() {
      return [];
    },
    getElementById: function() {
      return null;
    },
    createEvent: function() {
      return {
        initEvent: function() {
        }
      };
    },
    createElement: function() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function() {
        },
        getElementsByTagName: function() {
          return [];
        }
      };
    },
    createElementNS: function() {
      return {};
    },
    importNode: function() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    var doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function() {
      },
      pushState: function() {
      },
      go: function() {
      },
      back: function() {
      }
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function() {
    },
    removeEventListener: function() {
    },
    getComputedStyle: function() {
      return {
        getPropertyValue: function() {
          return "";
        }
      };
    },
    Image: function() {
    },
    Date: function() {
    },
    screen: {},
    setTimeout: function() {
    },
    clearTimeout: function() {
    },
    matchMedia: function() {
      return {};
    },
    requestAnimationFrame: function(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    var win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/dom7/dom7.esm.js
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function makeReactive(obj) {
    var proto = obj.__proto__;
    Object.defineProperty(obj, "__proto__", {
      get: function get2() {
        return proto;
      },
      set: function set2(value) {
        proto.__proto__ = value;
      }
    });
  }
  var Dom7 = /* @__PURE__ */ function(_Array) {
    _inheritsLoose(Dom72, _Array);
    function Dom72(items) {
      var _this;
      _this = _Array.call.apply(_Array, [this].concat(items)) || this;
      makeReactive(_assertThisInitialized(_this));
      return _this;
    }
    return Dom72;
  }(/* @__PURE__ */ _wrapNativeSuper(Array));
  function arrayFlat(arr) {
    if (arr === void 0) {
      arr = [];
    }
    var res = [];
    arr.forEach(function(el) {
      if (Array.isArray(el)) {
        res.push.apply(res, arrayFlat(el));
      } else {
        res.push(el);
      }
    });
    return res;
  }
  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }
  function arrayUnique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1)
        uniqueArray.push(arr[i]);
    }
    return uniqueArray;
  }
  function qsa(selector, context) {
    if (typeof selector !== "string") {
      return [selector];
    }
    var a = [];
    var res = context.querySelectorAll(selector);
    for (var i = 0; i < res.length; i += 1) {
      a.push(res[i]);
    }
    return a;
  }
  function $(selector, context) {
    var window2 = getWindow();
    var document2 = getDocument();
    var arr = [];
    if (!context && selector instanceof Dom7) {
      return selector;
    }
    if (!selector) {
      return new Dom7(arr);
    }
    if (typeof selector === "string") {
      var html2 = selector.trim();
      if (html2.indexOf("<") >= 0 && html2.indexOf(">") >= 0) {
        var toCreate = "div";
        if (html2.indexOf("<li") === 0)
          toCreate = "ul";
        if (html2.indexOf("<tr") === 0)
          toCreate = "tbody";
        if (html2.indexOf("<td") === 0 || html2.indexOf("<th") === 0)
          toCreate = "tr";
        if (html2.indexOf("<tbody") === 0)
          toCreate = "table";
        if (html2.indexOf("<option") === 0)
          toCreate = "select";
        var tempParent = document2.createElement(toCreate);
        tempParent.innerHTML = html2;
        for (var i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        arr = qsa(selector.trim(), context || document2);
      }
    } else if (selector.nodeType || selector === window2 || selector === document2) {
      arr.push(selector);
    } else if (Array.isArray(selector)) {
      if (selector instanceof Dom7)
        return selector;
      arr = selector;
    }
    return new Dom7(arrayUnique(arr));
  }
  $.fn = Dom7.prototype;
  function addClass() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }
    var classNames = arrayFlat(classes.map(function(c) {
      return c.split(" ");
    }));
    this.forEach(function(el) {
      var _el$classList;
      (_el$classList = el.classList).add.apply(_el$classList, classNames);
    });
    return this;
  }
  function removeClass() {
    for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classes[_key2] = arguments[_key2];
    }
    var classNames = arrayFlat(classes.map(function(c) {
      return c.split(" ");
    }));
    this.forEach(function(el) {
      var _el$classList2;
      (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
    });
    return this;
  }
  function toggleClass() {
    for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      classes[_key3] = arguments[_key3];
    }
    var classNames = arrayFlat(classes.map(function(c) {
      return c.split(" ");
    }));
    this.forEach(function(el) {
      classNames.forEach(function(className) {
        el.classList.toggle(className);
      });
    });
  }
  function hasClass() {
    for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      classes[_key4] = arguments[_key4];
    }
    var classNames = arrayFlat(classes.map(function(c) {
      return c.split(" ");
    }));
    return arrayFilter(this, function(el) {
      return classNames.filter(function(className) {
        return el.classList.contains(className);
      }).length > 0;
    }).length > 0;
  }
  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === "string") {
      if (this[0])
        return this[0].getAttribute(attrs);
      return void 0;
    }
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        this[i].setAttribute(attrs, value);
      } else {
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  function removeAttr(attr2) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr2);
    }
    return this;
  }
  function transform(transform2) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transform = transform2;
    }
    return this;
  }
  function transition(duration) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transitionDuration = typeof duration !== "string" ? duration + "ms" : duration;
    }
    return this;
  }
  function on() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
    if (typeof args[1] === "function") {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = void 0;
    }
    if (!capture)
      capture = false;
    function handleLiveEvent(e) {
      var target = e.target;
      if (!target)
        return;
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector))
        listener.apply(target, eventData);
      else {
        var _parents = $(target).parents();
        for (var k = 0; k < _parents.length; k += 1) {
          if ($(_parents[k]).is(targetSelector))
            listener.apply(_parents[k], eventData);
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(" ");
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners)
            el.dom7Listeners = {};
          if (!el.dom7Listeners[event])
            el.dom7Listeners[event] = [];
          el.dom7Listeners[event].push({
            listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        for (j = 0; j < events.length; j += 1) {
          var _event = events[j];
          if (!el.dom7LiveListeners)
            el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[_event])
            el.dom7LiveListeners[_event] = [];
          el.dom7LiveListeners[_event].push({
            listener,
            proxyListener: handleLiveEvent
          });
          el.addEventListener(_event, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
    if (typeof args[1] === "function") {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = void 0;
    }
    if (!capture)
      capture = false;
    var events = eventType.split(" ");
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var window2 = getWindow();
    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }
    var events = args[0].split(" ");
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        if (window2.CustomEvent) {
          var evt = new window2.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
          el.dom7EventData = args.filter(function(data2, dataIndex) {
            return dataIndex > 0;
          });
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var dom = this;
    function fireCallBack(e) {
      if (e.target !== this)
        return;
      callback.call(this, e);
      dom.off("transitionend", fireCallBack);
    }
    if (callback) {
      dom.on("transitionend", fireCallBack);
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles = this.styles();
        return this[0].offsetWidth + parseFloat(_styles.getPropertyValue("margin-right")) + parseFloat(_styles.getPropertyValue("margin-left"));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles2 = this.styles();
        return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue("margin-top")) + parseFloat(_styles2.getPropertyValue("margin-bottom"));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var window2 = getWindow();
      var document2 = getDocument();
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = document2.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
      var scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }
    return null;
  }
  function styles() {
    var window2 = getWindow();
    if (this[0])
      return window2.getComputedStyle(this[0], null);
    return {};
  }
  function css(props, value) {
    var window2 = getWindow();
    var i;
    if (arguments.length === 1) {
      if (typeof props === "string") {
        if (this[0])
          return window2.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        for (i = 0; i < this.length; i += 1) {
          for (var _prop in props) {
            this[i].style[_prop] = props[_prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === "string") {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  function each(callback) {
    if (!callback)
      return this;
    this.forEach(function(el, index2) {
      callback.apply(el, [el, index2]);
    });
    return this;
  }
  function filter(callback) {
    var result = arrayFilter(this, callback);
    return $(result);
  }
  function html(html2) {
    if (typeof html2 === "undefined") {
      return this[0] ? this[0].innerHTML : null;
    }
    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html2;
    }
    return this;
  }
  function text(text2) {
    if (typeof text2 === "undefined") {
      return this[0] ? this[0].textContent.trim() : null;
    }
    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text2;
    }
    return this;
  }
  function is(selector) {
    var window2 = getWindow();
    var document2 = getDocument();
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === "undefined")
      return false;
    if (typeof selector === "string") {
      if (el.matches)
        return el.matches(selector);
      if (el.webkitMatchesSelector)
        return el.webkitMatchesSelector(selector);
      if (el.msMatchesSelector)
        return el.msMatchesSelector(selector);
      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el)
          return true;
      }
      return false;
    }
    if (selector === document2) {
      return el === document2;
    }
    if (selector === window2) {
      return el === window2;
    }
    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el)
          return true;
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1)
          i += 1;
      }
      return i;
    }
    return void 0;
  }
  function eq(index2) {
    if (typeof index2 === "undefined")
      return this;
    var length = this.length;
    if (index2 > length - 1) {
      return $([]);
    }
    if (index2 < 0) {
      var returnIndex = length + index2;
      if (returnIndex < 0)
        return $([]);
      return $([this[returnIndex]]);
    }
    return $([this[index2]]);
  }
  function append() {
    var newChild;
    var document2 = getDocument();
    for (var k = 0; k < arguments.length; k += 1) {
      newChild = k < 0 || arguments.length <= k ? void 0 : arguments[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === "string") {
          var tempDiv = document2.createElement("div");
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }
    return this;
  }
  function prepend(newChild) {
    var document2 = getDocument();
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        var tempDiv = document2.createElement("div");
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return $([this[0].nextElementSibling]);
        }
        return $([]);
      }
      if (this[0].nextElementSibling)
        return $([this[0].nextElementSibling]);
      return $([]);
    }
    return $([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el)
      return $([]);
    while (el.nextElementSibling) {
      var _next = el.nextElementSibling;
      if (selector) {
        if ($(_next).is(selector))
          nextEls.push(_next);
      } else
        nextEls.push(_next);
      el = _next;
    }
    return $(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return $([el.previousElementSibling]);
        }
        return $([]);
      }
      if (el.previousElementSibling)
        return $([el.previousElementSibling]);
      return $([]);
    }
    return $([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el)
      return $([]);
    while (el.previousElementSibling) {
      var _prev = el.previousElementSibling;
      if (selector) {
        if ($(_prev).is(selector))
          prevEls.push(_prev);
      } else
        prevEls.push(_prev);
      el = _prev;
    }
    return $(prevEls);
  }
  function parent(selector) {
    var parents2 = [];
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector))
            parents2.push(this[i].parentNode);
        } else {
          parents2.push(this[i].parentNode);
        }
      }
    }
    return $(parents2);
  }
  function parents(selector) {
    var parents2 = [];
    for (var i = 0; i < this.length; i += 1) {
      var _parent = this[i].parentNode;
      while (_parent) {
        if (selector) {
          if ($(_parent).is(selector))
            parents2.push(_parent);
        } else {
          parents2.push(_parent);
        }
        _parent = _parent.parentNode;
      }
    }
    return $(parents2);
  }
  function closest(selector) {
    var closest2 = this;
    if (typeof selector === "undefined") {
      return $([]);
    }
    if (!closest2.is(selector)) {
      closest2 = closest2.parents(selector).eq(0);
    }
    return closest2;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return $(foundElements);
  }
  function children(selector) {
    var children2 = [];
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].children;
      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector || $(childNodes[j]).is(selector)) {
          children2.push(childNodes[j]);
        }
      }
    }
    return $(children2);
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode)
        this[i].parentNode.removeChild(this[i]);
    }
    return this;
  }
  var noTrigger = "resize scroll".split(" ");
  function shortcut(name) {
    function eventHandler() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (typeof args[0] === "undefined") {
        for (var i = 0; i < this.length; i += 1) {
          if (noTrigger.indexOf(name) < 0) {
            if (name in this[i])
              this[i][name]();
            else {
              $(this[i]).trigger(name);
            }
          }
        }
        return this;
      }
      return this.on.apply(this, [name].concat(args));
    }
    return eventHandler;
  }
  var click = shortcut("click");
  var blur = shortcut("blur");
  var focus = shortcut("focus");
  var focusin = shortcut("focusin");
  var focusout = shortcut("focusout");
  var keyup = shortcut("keyup");
  var keydown = shortcut("keydown");
  var keypress = shortcut("keypress");
  var submit = shortcut("submit");
  var change = shortcut("change");
  var mousedown = shortcut("mousedown");
  var mousemove = shortcut("mousemove");
  var mouseup = shortcut("mouseup");
  var mouseenter = shortcut("mouseenter");
  var mouseleave = shortcut("mouseleave");
  var mouseout = shortcut("mouseout");
  var mouseover = shortcut("mouseover");
  var touchstart = shortcut("touchstart");
  var touchend = shortcut("touchend");
  var touchmove = shortcut("touchmove");
  var resize = shortcut("resize");
  var scroll = shortcut("scroll");

  // node_modules/swiper/esm/utils/dom.js
  var Methods = {
    addClass,
    removeClass,
    hasClass,
    toggleClass,
    attr,
    removeAttr,
    transform,
    transition,
    on,
    off,
    trigger,
    transitionEnd,
    outerWidth,
    outerHeight,
    styles,
    offset,
    css,
    each,
    html,
    text,
    is,
    index,
    eq,
    append,
    prepend,
    next,
    nextAll,
    prev,
    prevAll,
    parent,
    parents,
    closest,
    find,
    children,
    filter,
    remove
  };
  Object.keys(Methods).forEach(function(methodName) {
    $.fn[methodName] = Methods[methodName];
  });
  var dom_default = $;

  // node_modules/swiper/esm/utils/utils.js
  function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function(key) {
      try {
        object[key] = null;
      } catch (e) {
      }
      try {
        delete object[key];
      } catch (e) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    var window2 = getWindow();
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = window2.getComputedStyle(el, null);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map(function(a) {
          return a.replace(",", ".");
        }).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m41;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[12]);
      else
        curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m42;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[13]);
      else
        curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o) {
    return typeof o === "object" && o !== null && o.constructor && o.constructor === Object;
  }
  function extend2() {
    var to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (nextSource !== void 0 && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              extend2(to[nextKey], nextSource[nextKey]);
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              extend2(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function bindModuleMethods(instance, obj) {
    Object.keys(obj).forEach(function(key) {
      if (isObject2(obj[key])) {
        Object.keys(obj[key]).forEach(function(subKey) {
          if (typeof obj[key][subKey] === "function") {
            obj[key][subKey] = obj[key][subKey].bind(instance);
          }
        });
      }
      instance[key] = obj[key];
    });
  }

  // node_modules/swiper/esm/utils/get-support.js
  var support;
  function calcSupport() {
    var window2 = getWindow();
    var document2 = getDocument();
    return {
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch),
      pointerEvents: !!window2.PointerEvent && "maxTouchPoints" in window2.navigator && window2.navigator.maxTouchPoints >= 0,
      observer: function checkObserver() {
        return "MutationObserver" in window2 || "WebkitMutationObserver" in window2;
      }(),
      passiveListener: function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, "passive", {
            get: function get2() {
              supportsPassive = true;
            }
          });
          window2.addEventListener("testPassiveListener", null, opts);
        } catch (e) {
        }
        return supportsPassive;
      }(),
      gestures: function checkGestures() {
        return "ongesturestart" in window2;
      }()
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }

  // node_modules/swiper/esm/utils/get-device.js
  var device;
  function calcDevice(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, userAgent = _ref.userAgent;
    var support2 = getSupport();
    var window2 = getWindow();
    var platform = window2.navigator.platform;
    var ua = userAgent || window2.navigator.userAgent;
    var device2 = {
      ios: false,
      android: false
    };
    var screenWidth = window2.screen.width;
    var screenHeight = window2.screen.height;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var windows = platform === "Win32";
    var macos = platform === "MacIntel";
    var iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad)
        ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device2.os = "android";
      device2.android = true;
    }
    if (ipad || iphone || ipod) {
      device2.os = "ios";
      device2.ios = true;
    }
    return device2;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!device) {
      device = calcDevice(overrides);
    }
    return device;
  }

  // node_modules/swiper/esm/utils/get-browser.js
  var browser;
  function calcBrowser() {
    var window2 = getWindow();
    function isSafari() {
      var ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    return {
      isEdge: !!window2.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }

  // node_modules/swiper/esm/modules/resize/resize.js
  var supportsResizeObserver = function supportsResizeObserver2() {
    var window2 = getWindow();
    return typeof window2.ResizeObserver !== "undefined";
  };
  var resize_default = {
    name: "resize",
    create: function create() {
      var swiper = this;
      extend2(swiper, {
        resize: {
          observer: null,
          createObserver: function createObserver() {
            if (!swiper || swiper.destroyed || !swiper.initialized)
              return;
            swiper.resize.observer = new ResizeObserver(function(entries) {
              var width = swiper.width, height = swiper.height;
              var newWidth = width;
              var newHeight = height;
              entries.forEach(function(_ref) {
                var contentBoxSize = _ref.contentBoxSize, contentRect = _ref.contentRect, target = _ref.target;
                if (target && target !== swiper.el)
                  return;
                newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
              });
              if (newWidth !== width || newHeight !== height) {
                swiper.resize.resizeHandler();
              }
            });
            swiper.resize.observer.observe(swiper.el);
          },
          removeObserver: function removeObserver() {
            if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
              swiper.resize.observer.unobserve(swiper.el);
              swiper.resize.observer = null;
            }
          },
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized)
              return;
            swiper.emit("beforeResize");
            swiper.emit("resize");
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized)
              return;
            swiper.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init(swiper) {
        var window2 = getWindow();
        if (swiper.params.resizeObserver && supportsResizeObserver()) {
          swiper.resize.createObserver();
          return;
        }
        window2.addEventListener("resize", swiper.resize.resizeHandler);
        window2.addEventListener("orientationchange", swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy(swiper) {
        var window2 = getWindow();
        swiper.resize.removeObserver();
        window2.removeEventListener("resize", swiper.resize.resizeHandler);
        window2.removeEventListener("orientationchange", swiper.resize.orientationChangeHandler);
      }
    }
  };

  // node_modules/swiper/esm/modules/observer/observer.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var Observer = {
    attach: function attach(target, options) {
      if (options === void 0) {
        options = {};
      }
      var window2 = getWindow();
      var swiper = this;
      var ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      var observer = new ObserverFunc(function(mutations) {
        if (mutations.length === 1) {
          swiper.emit("observerUpdate", mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate2() {
          swiper.emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: typeof options.childList === "undefined" ? true : options.childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      swiper.observer.observers.push(observer);
    },
    init: function init2() {
      var swiper = this;
      if (!swiper.support.observer || !swiper.params.observer)
        return;
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      swiper.observer.attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren
      });
      swiper.observer.attach(swiper.$wrapperEl[0], {
        attributes: false
      });
    },
    destroy: function destroy2() {
      var swiper = this;
      swiper.observer.observers.forEach(function(observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    }
  };
  var observer_default = {
    name: "observer",
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    },
    create: function create2() {
      var swiper = this;
      bindModuleMethods(swiper, {
        observer: _extends({}, Observer, {
          observers: []
        })
      });
    },
    on: {
      init: function init3(swiper) {
        swiper.observer.init();
      },
      destroy: function destroy3(swiper) {
        swiper.observer.destroy();
      }
    }
  };

  // node_modules/swiper/esm/components/core/modular.js
  var modular_default = {
    useParams: function useParams(instanceParams) {
      var instance = this;
      if (!instance.modules)
        return;
      Object.keys(instance.modules).forEach(function(moduleName) {
        var module = instance.modules[moduleName];
        if (module.params) {
          extend2(instanceParams, module.params);
        }
      });
    },
    useModules: function useModules(modulesParams) {
      if (modulesParams === void 0) {
        modulesParams = {};
      }
      var instance = this;
      if (!instance.modules)
        return;
      Object.keys(instance.modules).forEach(function(moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {};
        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function(moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        }
        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    }
  };

  // node_modules/swiper/esm/components/core/events-emitter.js
  var events_emitter_default = {
    on: function on2(events, handler, priority) {
      var self = this;
      if (typeof handler !== "function")
        return self;
      var method = priority ? "unshift" : "push";
      events.split(" ").forEach(function(event) {
        if (!self.eventsListeners[event])
          self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once: function once(events, handler, priority) {
      var self = this;
      if (typeof handler !== "function")
        return self;
      function onceHandler() {
        self.off(events, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny: function onAny(handler, priority) {
      var self = this;
      if (typeof handler !== "function")
        return self;
      var method = priority ? "unshift" : "push";
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny: function offAny(handler) {
      var self = this;
      if (!self.eventsAnyListeners)
        return self;
      var index2 = self.eventsAnyListeners.indexOf(handler);
      if (index2 >= 0) {
        self.eventsAnyListeners.splice(index2, 1);
      }
      return self;
    },
    off: function off2(events, handler) {
      var self = this;
      if (!self.eventsListeners)
        return self;
      events.split(" ").forEach(function(event) {
        if (typeof handler === "undefined") {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function(eventHandler, index2) {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event].splice(index2, 1);
            }
          });
        }
      });
      return self;
    },
    emit: function emit() {
      var self = this;
      if (!self.eventsListeners)
        return self;
      var events;
      var data2;
      var context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events = args[0];
        data2 = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data2 = args[0].data;
        context = args[0].context || self;
      }
      data2.unshift(context);
      var eventsArray = Array.isArray(events) ? events : events.split(" ");
      eventsArray.forEach(function(event) {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach(function(eventHandler) {
            eventHandler.apply(context, [event].concat(data2));
          });
        }
        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function(eventHandler) {
            eventHandler.apply(context, data2);
          });
        }
      });
      return self;
    }
  };

  // node_modules/swiper/esm/components/core/update/updateSize.js
  function updateSize() {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
    height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
    if (Number.isNaN(width))
      width = 0;
    if (Number.isNaN(height))
      height = 0;
    extend2(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }

  // node_modules/swiper/esm/components/core/update/updateSlides.js
  function updateSlides() {
    var swiper = this;
    var getDirectionLabel = function getDirectionLabel2(property) {
      if (swiper.isHorizontal()) {
        return property;
      }
      return {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom"
      }[property];
    };
    var getDirectionPropertyValue = function getDirectionPropertyValue2(node, label) {
      return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    };
    var window2 = getWindow();
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl, swiperSize = swiper.size, rtl = swiper.rtlTranslate, wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children("." + swiper.params.slideClass);
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];
    function slidesForMargin(slideEl, slideIndex) {
      if (!params.cssMode)
        return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }
    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.slidesGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index2 = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    }
    swiper.virtualSize = -spaceBetween;
    if (rtl)
      slides.css({
        marginLeft: "",
        marginTop: ""
      });
    else
      slides.css({
        marginRight: "",
        marginBottom: ""
      });
    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== "auto" && params.slidesPerColumnFill === "row") {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        var newSlideOrderIndex = void 0;
        var column = void 0;
        var row = void 0;
        if (params.slidesPerColumnFill === "row" && params.slidesPerGroup > 1) {
          var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
          var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
          var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
          newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
          slide.css({
            "-webkit-box-ordinal-group": newSlideOrderIndex,
            "-moz-box-ordinal-group": newSlideOrderIndex,
            "-ms-flex-order": newSlideOrderIndex,
            "-webkit-order": newSlideOrderIndex,
            order: newSlideOrderIndex
          });
        } else if (params.slidesPerColumnFill === "column") {
          column = Math.floor(i / slidesPerColumn);
          row = i - column * slidesPerColumn;
          if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }
        slide.css(getDirectionLabel("margin-top"), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
      }
      if (slide.css("display") === "none")
        continue;
      if (params.slidesPerView === "auto") {
        var slideStyles = window2.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
        } else {
          var width = getDirectionPropertyValue(slideStyles, "width");
          var paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          var paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          var marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          var marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          var boxSizing = slideStyles.getPropertyValue(slideStyles, "box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            var _slide$ = slide[0], clientWidth = _slide$.clientWidth, offsetWidth = _slide$.offsetWidth;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[getDirectionLabel("width")] = slideSize + "px";
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3)
          slidePosition = 0;
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if (index2 % params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if ((index2 - Math.min(swiper.params.slidesPerGroupSkip, index2)) % swiper.params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index2 += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      $wrapperEl.css({
        width: swiper.virtualSize + params.spaceBetween + "px"
      });
    }
    if (params.setWrapperSize) {
      var _$wrapperEl$css;
      $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel("width")] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
    }
    if (params.slidesPerColumn > 1) {
      var _$wrapperEl$css2;
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel("width")] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var _i = 0; _i < snapGrid.length; _i += 1) {
          var slidesGridItem = snapGrid[_i];
          if (params.roundLengths)
            slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[_i] < swiper.virtualSize + snapGrid[0])
            newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
      }
    }
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
        var _slidesGridItem = snapGrid[_i2];
        if (params.roundLengths)
          _slidesGridItem = Math.floor(_slidesGridItem);
        if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(_slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0)
      snapGrid = [0];
    if (params.spaceBetween !== 0) {
      var _slides$filter$css;
      var key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
      slides.filter(slidesForMargin).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function(slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      var maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(function(snap) {
        if (snap < 0)
          return -offsetBefore;
        if (snap > maxSnap)
          return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      var _allSlidesSize = 0;
      slidesSizesGrid.forEach(function(slideSizeValue) {
        _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      _allSlidesSize -= params.spaceBetween;
      if (_allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
        snapGrid.forEach(function(snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function(snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    extend2(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow)
        swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  // node_modules/swiper/esm/components/core/update/updateAutoHeight.js
  function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        swiper.visibleSlides.each(function(slide) {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          var index2 = swiper.activeIndex + i;
          if (index2 > swiper.slides.length)
            break;
          activeSlides.push(swiper.slides.eq(index2)[0]);
        }
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight)
      swiper.$wrapperEl.css("height", newHeight + "px");
  }

  // node_modules/swiper/esm/components/core/update/updateSlidesOffset.js
  function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  // node_modules/swiper/esm/components/core/update/updateSlidesProgress.js
  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = this && this.translate || 0;
    }
    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides, rtl = swiper.rtlTranslate;
    if (slides.length === 0)
      return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    var offsetCenter = -translate;
    if (rtl)
      offsetCenter = translate;
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = dom_default(swiper.visibleSlides);
  }

  // node_modules/swiper/esm/components/core/update/updateProgress.js
  function updateProgress(translate) {
    var swiper = this;
    if (typeof translate === "undefined") {
      var multiplier = swiper.rtlTranslate ? -1 : 1;
      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress, isBeginning = swiper.isBeginning, isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    extend2(swiper, {
      progress,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight)
      swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }

  // node_modules/swiper/esm/components/core/update/updateSlidesClasses.js
  function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides, params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex, realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find("." + params.slideClass + '[data-swiper-slide-index="' + activeIndex + '"]');
    } else {
      activeSlide = slides.eq(activeIndex);
    }
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);
      }
    }
    var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicatePrevClass);
      }
    }
    swiper.emitSlidesClasses();
  }

  // node_modules/swiper/esm/components/core/update/updateActiveIndex.js
  function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, params = swiper.params, previousIndex = swiper.activeIndex, previousRealIndex = swiper.realIndex, previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === "undefined") {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined")
          activeIndex = 0;
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
    extend2(swiper, {
      snapIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit("slideChange");
    }
  }

  // node_modules/swiper/esm/components/core/update/updateClickedSlide.js
  function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = dom_default(e.target).closest("." + params.slideClass)[0];
    var slideFound = false;
    var slideIndex;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(dom_default(slide).attr("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  // node_modules/swiper/esm/components/core/update/index.js
  var update_default = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };

  // node_modules/swiper/esm/components/core/translate/getTranslate.js
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    var swiper = this;
    var params = swiper.params, rtl = swiper.rtlTranslate, translate = swiper.translate, $wrapperEl = swiper.$wrapperEl;
    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }
    if (params.cssMode) {
      return translate;
    }
    var currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl)
      currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }

  // node_modules/swiper/esm/components/core/translate/setTranslate.js
  function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate, params = swiper.params, $wrapperEl = swiper.$wrapperEl, wrapperEl = swiper.wrapperEl, progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }

  // node_modules/swiper/esm/components/core/translate/minTranslate.js
  function minTranslate() {
    return -this.snapGrid[0];
  }

  // node_modules/swiper/esm/components/core/translate/maxTranslate.js
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  // node_modules/swiper/esm/components/core/translate/translateTo.js
  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) {
      translate = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    var swiper = this;
    var params = swiper.params, wrapperEl = swiper.wrapperEl;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    var minTranslate2 = swiper.minTranslate();
    var maxTranslate2 = swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate < maxTranslate2)
      newTranslate = maxTranslate2;
    else
      newTranslate = translate;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (wrapperEl.scrollTo) {
          var _wrapperEl$scrollTo;
          wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? "left" : "top"] = -newTranslate, _wrapperEl$scrollTo.behavior = "smooth", _wrapperEl$scrollTo));
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        }
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd3(e) {
            if (!swiper || swiper.destroyed)
              return;
            if (e.target !== this)
              return;
            swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }

  // node_modules/swiper/esm/components/core/translate/index.js
  var translate_default = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };

  // node_modules/swiper/esm/components/core/transition/setTransition.js
  function setTransition(duration, byController) {
    var swiper = this;
    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }
    swiper.emit("setTransition", duration, byController);
  }

  // node_modules/swiper/esm/components/core/transition/transitionStart.js
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var activeIndex = swiper.activeIndex, params = swiper.params, previousIndex = swiper.previousIndex;
    if (params.cssMode)
      return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit("transitionStart");
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransitionStart");
        return;
      }
      swiper.emit("slideChangeTransitionStart");
      if (dir === "next") {
        swiper.emit("slideNextTransitionStart");
      } else {
        swiper.emit("slidePrevTransitionStart");
      }
    }
  }

  // node_modules/swiper/esm/components/core/transition/transitionEnd.js
  function transitionEnd2(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var activeIndex = swiper.activeIndex, previousIndex = swiper.previousIndex, params = swiper.params;
    swiper.animating = false;
    if (params.cssMode)
      return;
    swiper.setTransition(0);
    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit("transitionEnd");
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransitionEnd");
        return;
      }
      swiper.emit("slideChangeTransitionEnd");
      if (dir === "next") {
        swiper.emit("slideNextTransitionEnd");
      } else {
        swiper.emit("slidePrevTransitionEnd");
      }
    }
  }

  // node_modules/swiper/esm/components/core/transition/index.js
  var transition_default = {
    setTransition,
    transitionStart,
    transitionEnd: transitionEnd2
  };

  // node_modules/swiper/esm/components/core/slide/slideTo.js
  function slideTo(index2, speed, runCallbacks, internal) {
    if (index2 === void 0) {
      index2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index2 !== "number" && typeof index2 !== "string") {
      throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index2 + "] given.");
    }
    if (typeof index2 === "string") {
      var indexAsNumber = parseInt(index2, 10);
      var isValidNumber = isFinite(indexAsNumber);
      if (!isValidNumber) {
        throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index2 + "] given.");
      }
      index2 = indexAsNumber;
    }
    var swiper = this;
    var slideIndex = index2;
    if (slideIndex < 0)
      slideIndex = 0;
    var params = swiper.params, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, previousIndex = swiper.previousIndex, activeIndex = swiper.activeIndex, rtl = swiper.rtlTranslate, wrapperEl = swiper.wrapperEl;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    var translate = -snapGrid[snapIndex];
    swiper.updateProgress(translate);
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        var normalizedTranslate = -Math.floor(translate * 100);
        var normalizedGird = Math.floor(slidesGrid[i] * 100);
        var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGird) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex)
          return false;
      }
    }
    var direction;
    if (slideIndex > activeIndex)
      direction = "next";
    else if (slideIndex < activeIndex)
      direction = "prev";
    else
      direction = "reset";
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      var t = -translate;
      if (rtl) {
        t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
      }
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      } else {
        if (wrapperEl.scrollTo) {
          var _wrapperEl$scrollTo;
          wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? "left" : "top"] = t, _wrapperEl$scrollTo.behavior = "smooth", _wrapperEl$scrollTo));
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd3(e) {
            if (!swiper || swiper.destroyed)
              return;
            if (e.target !== this)
              return;
            swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
      }
    }
    return true;
  }

  // node_modules/swiper/esm/components/core/slide/slideToLoop.js
  function slideToLoop(index2, speed, runCallbacks, internal) {
    if (index2 === void 0) {
      index2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var newIndex = index2;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/esm/components/core/slide/slideNext.js
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var params = swiper.params, animating = swiper.animating;
    var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
    if (params.loop) {
      if (animating && params.loopPreventsSlide)
        return false;
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }

  // node_modules/swiper/esm/components/core/slide/slidePrev.js
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    var params = swiper.params, animating = swiper.animating, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, rtlTranslate = swiper.rtlTranslate;
    if (params.loop) {
      if (animating && params.loopPreventsSlide)
        return false;
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0)
        return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function(val) {
      return normalize(val);
    });
    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      snapGrid.forEach(function(snap) {
        if (!prevSnap && normalizedTranslate >= snap)
          prevSnap = snap;
      });
    }
    var prevIndex;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0)
        prevIndex = swiper.activeIndex - 1;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/esm/components/core/slide/slideReset.js
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  // node_modules/swiper/esm/components/core/slide/slideToClosest.js
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    var swiper = this;
    var index2 = swiper.activeIndex;
    var skip = Math.min(swiper.params.slidesPerGroupSkip, index2);
    var snapIndex = skip + Math.floor((index2 - skip) / swiper.params.slidesPerGroup);
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index2 += swiper.params.slidesPerGroup;
      }
    } else {
      var prevSnap = swiper.snapGrid[snapIndex - 1];
      var _currentSnap = swiper.snapGrid[snapIndex];
      if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
        index2 -= swiper.params.slidesPerGroup;
      }
    }
    index2 = Math.max(index2, 0);
    index2 = Math.min(index2, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index2, speed, runCallbacks, internal);
  }

  // node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js
  function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
    var slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating)
        return;
      realIndex = parseInt(dom_default(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children("." + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ")").eq(0).index();
          nextTick(function() {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ")").eq(0).index();
        nextTick(function() {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  // node_modules/swiper/esm/components/core/slide/index.js
  var slide_default = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };

  // node_modules/swiper/esm/components/core/loop/loopCreate.js
  function loopCreate() {
    var swiper = this;
    var document2 = getDocument();
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
    var slides = $wrapperEl.children("." + params.slideClass);
    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = dom_default(document2.createElement("div")).addClass(params.slideClass + " " + params.slideBlankClass);
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children("." + params.slideClass);
      }
    }
    if (params.slidesPerView === "auto" && !params.loopedSlides)
      params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }
    var prependSlides = [];
    var appendSlides = [];
    slides.each(function(el, index2) {
      var slide = dom_default(el);
      if (index2 < swiper.loopedSlides) {
        appendSlides.push(el);
      }
      if (index2 < slides.length && index2 >= slides.length - swiper.loopedSlides) {
        prependSlides.push(el);
      }
      slide.attr("data-swiper-slide-index", index2);
    });
    for (var _i = 0; _i < appendSlides.length; _i += 1) {
      $wrapperEl.append(dom_default(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
      $wrapperEl.prepend(dom_default(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  // node_modules/swiper/esm/components/core/loop/loopFix.js
  function loopFix() {
    var swiper = this;
    swiper.emit("beforeLoopFix");
    var activeIndex = swiper.activeIndex, slides = swiper.slides, loopedSlides = swiper.loopedSlides, allowSlidePrev = swiper.allowSlidePrev, allowSlideNext = swiper.allowSlideNext, snapGrid = swiper.snapGrid, rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();
    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var _slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (_slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
  }

  // node_modules/swiper/esm/components/core/loop/loopDestroy.js
  function loopDestroy() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params, slides = swiper.slides;
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
    slides.removeAttr("data-swiper-slide-index");
  }

  // node_modules/swiper/esm/components/core/loop/index.js
  var loop_default = {
    loopCreate,
    loopFix,
    loopDestroy
  };

  // node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js
  function setGrabCursor(moving) {
    var swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
      return;
    var el = swiper.el;
    el.style.cursor = "move";
    el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
    el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
    el.style.cursor = moving ? "grabbing" : "grab";
  }

  // node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js
  function unsetGrabCursor() {
    var swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    swiper.el.style.cursor = "";
  }

  // node_modules/swiper/esm/components/core/grab-cursor/index.js
  var grab_cursor_default = {
    setGrabCursor,
    unsetGrabCursor
  };

  // node_modules/swiper/esm/components/core/manipulation/appendSlide.js
  function appendSlide(slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === "object" && "length" in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i])
          $wrapperEl.append(slides[i]);
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }
  }

  // node_modules/swiper/esm/components/core/manipulation/prependSlide.js
  function prependSlide(slides) {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === "object" && "length" in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i])
          $wrapperEl.prepend(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  // node_modules/swiper/esm/components/core/manipulation/addSlide.js
  function addSlide(index2, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params, activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var baseLength = swiper.slides.length;
    if (index2 <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index2 >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index2 ? activeIndexBuffer + 1 : activeIndexBuffer;
    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index2; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
      for (var _i = 0; _i < slides.length; _i += 1) {
        if (slides[_i])
          $wrapperEl.append(slides[_i]);
      }
      newActiveIndex = activeIndexBuffer > index2 ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }
    for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
      $wrapperEl.append(slidesBuffer[_i2]);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  // node_modules/swiper/esm/components/core/manipulation/removeSlide.js
  function removeSlide(slidesIndexes) {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove])
          swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex)
          newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove])
        swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex)
        newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  // node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js
  function removeAllSlides() {
    var swiper = this;
    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  // node_modules/swiper/esm/components/core/manipulation/index.js
  var manipulation_default = {
    appendSlide,
    prependSlide,
    addSlide,
    removeSlide,
    removeAllSlides
  };

  // node_modules/swiper/esm/components/core/events/onTouchStart.js
  function onTouchStart(event) {
    var swiper = this;
    var document2 = getDocument();
    var window2 = getWindow();
    var data2 = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent)
      e = e.originalEvent;
    var $targetEl = dom_default(e.target);
    if (params.touchEventsTarget === "wrapper") {
      if (!$targetEl.closest(swiper.wrapperEl).length)
        return;
    }
    data2.isTouchEvent = e.type === "touchstart";
    if (!data2.isTouchEvent && "which" in e && e.which === 3)
      return;
    if (!data2.isTouchEvent && "button" in e && e.button > 0)
      return;
    if (data2.isTouched && data2.isMoved)
      return;
    var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
      $targetEl = dom_default(event.path[0]);
    }
    if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0])
        return;
    }
    touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;
    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event.preventDefault();
      } else {
        return;
      }
    }
    extend2(data2, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data2.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0)
      data2.allowThresholdMove = false;
    if (e.type !== "touchstart") {
      var preventDefault = true;
      if ($targetEl.is(data2.formElements))
        preventDefault = false;
      if (document2.activeElement && dom_default(document2.activeElement).is(data2.formElements) && document2.activeElement !== $targetEl[0]) {
        document2.activeElement.blur();
      }
      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
        e.preventDefault();
      }
    }
    swiper.emit("touchStart", e);
  }

  // node_modules/swiper/esm/components/core/events/onTouchMove.js
  function onTouchMove(event) {
    var document2 = getDocument();
    var swiper = this;
    var data2 = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent)
      e = e.originalEvent;
    if (!data2.isTouched) {
      if (data2.startMoving && data2.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    if (data2.isTouchEvent && e.type !== "touchmove")
      return;
    var targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    var pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
    var pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      swiper.allowClick = false;
      if (data2.isTouched) {
        extend2(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data2.touchStartTime = now();
      }
      return;
    }
    if (data2.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data2.isTouched = false;
          data2.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (data2.isTouchEvent && document2.activeElement) {
      if (e.target === document2.activeElement && dom_default(e.target).is(data2.formElements)) {
        data2.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data2.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    if (e.targetTouches && e.targetTouches.length > 1)
      return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold)
      return;
    if (typeof data2.isScrolling === "undefined") {
      var touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data2.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data2.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data2.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data2.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data2.startMoving = true;
      }
    }
    if (data2.isScrolling) {
      data2.isTouched = false;
      return;
    }
    if (!data2.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    if (!data2.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data2.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
      }
      data2.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    swiper.emit("sliderMove", e);
    data2.isMoved = true;
    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl)
      diff = -diff;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    data2.currentTranslate = diff + data2.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0 && data2.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data2.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data2.startTranslate + diff, resistanceRatio);
    } else if (diff < 0 && data2.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data2.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data2.startTranslate - diff, resistanceRatio);
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data2.currentTranslate < data2.startTranslate) {
      data2.currentTranslate = data2.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data2.currentTranslate > data2.startTranslate) {
      data2.currentTranslate = data2.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data2.currentTranslate = data2.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data2.allowThresholdMove) {
        if (!data2.allowThresholdMove) {
          data2.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data2.currentTranslate = data2.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data2.currentTranslate = data2.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode)
      return;
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      if (data2.velocities.length === 0) {
        data2.velocities.push({
          position: touches[swiper.isHorizontal() ? "startX" : "startY"],
          time: data2.touchStartTime
        });
      }
      data2.velocities.push({
        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
        time: now()
      });
    }
    swiper.updateProgress(data2.currentTranslate);
    swiper.setTranslate(data2.currentTranslate);
  }

  // node_modules/swiper/esm/components/core/events/onTouchEnd.js
  function onTouchEnd(event) {
    var swiper = this;
    var data2 = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, $wrapperEl = swiper.$wrapperEl, slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent)
      e = e.originalEvent;
    if (data2.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data2.allowTouchCallbacks = false;
    if (!data2.isTouched) {
      if (data2.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data2.isMoved = false;
      data2.startMoving = false;
      return;
    }
    if (params.grabCursor && data2.isMoved && data2.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    var touchEndTime = now();
    var timeDiff = touchEndTime - data2.touchStartTime;
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data2.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data2.lastClickTime = now();
    nextTick(function() {
      if (!swiper.destroyed)
        swiper.allowClick = true;
    });
    if (!data2.isTouched || !data2.isMoved || !swiper.swipeDirection || touches.diff === 0 || data2.currentTranslate === data2.startTranslate) {
      data2.isTouched = false;
      data2.isMoved = false;
      data2.startMoving = false;
      return;
    }
    data2.isTouched = false;
    data2.isMoved = false;
    data2.startMoving = false;
    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data2.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeModeMomentum) {
        if (data2.velocities.length > 1) {
          var lastMoveEvent = data2.velocities.pop();
          var velocityEvent = data2.velocities.pop();
          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;
        data2.velocities.length = 0;
        var momentumDuration = 1e3 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;
        var newPosition = swiper.translate + momentumDistance;
        if (rtl)
          newPosition = -newPosition;
        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data2.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides)
            needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data2.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides)
            needsLoopFix = true;
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once("transitionEnd", function() {
            swiper.loopFix();
          });
        }
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeModeSticky) {
            var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function() {
            if (!swiper || swiper.destroyed || !data2.allowMomentumBounce)
              return;
            swiper.emit("momentumBounce");
            swiper.setTransition(params.speed);
            setTimeout(function() {
              swiper.setTranslate(afterBouncePosition);
              $wrapperEl.transitionEnd(function() {
                if (!swiper || swiper.destroyed)
                  return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function() {
              if (!swiper || swiper.destroyed)
                return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.emit("_freeModeNoMomentumRelease");
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        swiper.emit("_freeModeNoMomentumRelease");
      }
      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + _increment] !== "undefined") {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
          stopIndex = i;
          groupSize = slidesGrid[i + _increment] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio)
          swiper.slideTo(stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  // node_modules/swiper/esm/components/core/events/onResize.js
  function onResize() {
    var swiper = this;
    var params = swiper.params, el = swiper.el;
    if (el && el.offsetWidth === 0)
      return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    var allowSlideNext = swiper.allowSlideNext, allowSlidePrev = swiper.allowSlidePrev, snapGrid = swiper.snapGrid;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  // node_modules/swiper/esm/components/core/events/onClick.js
  function onClick(e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks)
        e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  // node_modules/swiper/esm/components/core/events/onScroll.js
  function onScroll() {
    var swiper = this;
    var wrapperEl = swiper.wrapperEl, rtlTranslate = swiper.rtlTranslate;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      if (rtlTranslate) {
        swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
      } else {
        swiper.translate = -wrapperEl.scrollLeft;
      }
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === -0)
      swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }

  // node_modules/swiper/esm/components/core/events/index.js
  var dummyEventAttached = false;
  function dummyEventListener() {
  }
  function attachEvents() {
    var swiper = this;
    var document2 = getDocument();
    var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device2 = swiper.device, support2 = swiper.support;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    var capture = !!params.nested;
    if (!support2.touch && support2.pointerEvents) {
      el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      document2.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      document2.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (support2.touch) {
        var passiveListener = touchEvents.start === "touchstart" && support2.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.addEventListener(touchEvents.move, swiper.onTouchMove, support2.passiveListener ? {
          passive: false,
          capture
        } : capture);
        el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
        if (!dummyEventAttached) {
          document2.addEventListener("touchstart", dummyEventListener);
          dummyEventAttached = true;
        }
      }
      if (params.simulateTouch && !device2.ios && !device2.android || params.simulateTouch && !support2.touch && device2.ios) {
        el.addEventListener("mousedown", swiper.onTouchStart, false);
        document2.addEventListener("mousemove", swiper.onTouchMove, capture);
        document2.addEventListener("mouseup", swiper.onTouchEnd, false);
      }
    }
    if (params.preventClicks || params.preventClicksPropagation) {
      el.addEventListener("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl.addEventListener("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper.on(device2.ios || device2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper.on("observerUpdate", onResize, true);
    }
  }
  function detachEvents() {
    var swiper = this;
    var document2 = getDocument();
    var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device2 = swiper.device, support2 = swiper.support;
    var capture = !!params.nested;
    if (!support2.touch && support2.pointerEvents) {
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      document2.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      document2.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (support2.touch) {
        var passiveListener = touchEvents.start === "onTouchStart" && support2.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) {
          el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
      }
      if (params.simulateTouch && !device2.ios && !device2.android || params.simulateTouch && !support2.touch && device2.ios) {
        el.removeEventListener("mousedown", swiper.onTouchStart, false);
        document2.removeEventListener("mousemove", swiper.onTouchMove, capture);
        document2.removeEventListener("mouseup", swiper.onTouchEnd, false);
      }
    }
    if (params.preventClicks || params.preventClicksPropagation) {
      el.removeEventListener("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl.removeEventListener("scroll", swiper.onScroll);
    }
    swiper.off(device2.ios || device2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize);
  }
  var events_default = {
    attachEvents,
    detachEvents
  };

  // node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js
  function setBreakpoint() {
    var swiper = this;
    var activeIndex = swiper.activeIndex, initialized = swiper.initialized, _swiper$loopedSlides = swiper.loopedSlides, loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides, params = swiper.params, $el = swiper.$el;
    var breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0)
      return;
    var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
      if (breakpointOnlyParams) {
        ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === "undefined")
            return;
          if (param === "slidesPerView" && (paramValue === "AUTO" || paramValue === "auto")) {
            breakpointOnlyParams[param] = "auto";
          } else if (param === "slidesPerView") {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }
      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var wasMultiRow = params.slidesPerColumn > 1;
      var isMultiRow = breakpointParams.slidesPerColumn > 1;
      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(params.containerModifierClass + "multirow");
        if (breakpointParams.slidesPerColumnFill === "column") {
          $el.addClass(params.containerModifierClass + "multirow-column");
        }
        swiper.emitContainerClasses();
      }
      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
      if (directionChanged && initialized) {
        swiper.changeDirection();
      }
      extend2(swiper.params, breakpointParams);
      extend2(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
      });
      swiper.currentBreakpoint = breakpoint;
      swiper.emit("_beforeBreakpoint", breakpointParams);
      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
      }
      swiper.emit("breakpoint", breakpointParams);
    }
  }

  // node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js
  function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints || base === "container" && !containerEl)
      return void 0;
    var breakpoint = false;
    var window2 = getWindow();
    var currentWidth = base === "window" ? window2.innerWidth : containerEl.clientWidth;
    var currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    var points = Object.keys(breakpoints).map(function(point2) {
      if (typeof point2 === "string" && point2.indexOf("@") === 0) {
        var minRatio = parseFloat(point2.substr(1));
        var value2 = currentHeight * minRatio;
        return {
          value: value2,
          point: point2
        };
      }
      return {
        value: point2,
        point: point2
      };
    });
    points.sort(function(a, b) {
      return parseInt(a.value, 10) - parseInt(b.value, 10);
    });
    for (var i = 0; i < points.length; i += 1) {
      var _points$i = points[i], point = _points$i.point, value = _points$i.value;
      if (value <= currentWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }

  // node_modules/swiper/esm/components/core/breakpoints/index.js
  var breakpoints_default = {
    setBreakpoint,
    getBreakpoint
  };

  // node_modules/swiper/esm/components/core/classes/addClasses.js
  function prepareClasses(entries, prefix) {
    var resultClasses = [];
    entries.forEach(function(item) {
      if (typeof item === "object") {
        Object.entries(item).forEach(function(_ref) {
          var classNames = _ref[0], condition = _ref[1];
          if (condition) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    var swiper = this;
    var classNames = swiper.classNames, params = swiper.params, rtl = swiper.rtl, $el = swiper.$el, device2 = swiper.device, support2 = swiper.support;
    var suffixes = prepareClasses(["initialized", params.direction, {
      "pointer-events": support2.pointerEvents && !support2.touch
    }, {
      "free-mode": params.freeMode
    }, {
      autoheight: params.autoHeight
    }, {
      rtl
    }, {
      multirow: params.slidesPerColumn > 1
    }, {
      "multirow-column": params.slidesPerColumn > 1 && params.slidesPerColumnFill === "column"
    }, {
      android: device2.android
    }, {
      ios: device2.ios
    }, {
      "css-mode": params.cssMode
    }], params.containerModifierClass);
    classNames.push.apply(classNames, suffixes);
    $el.addClass([].concat(classNames).join(" "));
    swiper.emitContainerClasses();
  }

  // node_modules/swiper/esm/components/core/classes/removeClasses.js
  function removeClasses() {
    var swiper = this;
    var $el = swiper.$el, classNames = swiper.classNames;
    $el.removeClass(classNames.join(" "));
    swiper.emitContainerClasses();
  }

  // node_modules/swiper/esm/components/core/classes/index.js
  var classes_default = {
    addClasses,
    removeClasses
  };

  // node_modules/swiper/esm/components/core/images/loadImage.js
  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var window2 = getWindow();
    var image;
    function onReady() {
      if (callback)
        callback();
    }
    var isPicture = dom_default(imageEl).parent("picture")[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new window2.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      onReady();
    }
  }

  // node_modules/swiper/esm/components/core/images/preloadImages.js
  function preloadImages() {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find("img");
    function onReady() {
      if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed)
        return;
      if (swiper.imagesLoaded !== void 0)
        swiper.imagesLoaded += 1;
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady)
          swiper.update();
        swiper.emit("imagesReady");
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
    }
  }

  // node_modules/swiper/esm/components/core/images/index.js
  var images_default = {
    loadImage,
    preloadImages
  };

  // node_modules/swiper/esm/components/core/check-overflow/index.js
  function checkOverflow() {
    var swiper = this;
    var params = swiper.params;
    var wasLocked = swiper.isLocked;
    var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;
    if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
      swiper.isLocked = lastSlidePosition <= swiper.size;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked !== swiper.isLocked)
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      if (swiper.navigation)
        swiper.navigation.update();
    }
  }
  var check_overflow_default = {
    checkOverflow
  };

  // node_modules/swiper/esm/components/core/defaults.js
  var defaults_default = {
    init: true,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: false,
    nested: false,
    width: null,
    height: null,
    preventInteractionOnTransition: false,
    userAgent: null,
    url: null,
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    autoHeight: false,
    setWrapperSize: false,
    virtualTranslate: false,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    watchOverflow: false,
    roundLengths: false,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    uniqueNavElements: true,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    grabCursor: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    preloadImages: true,
    updateOnImagesReady: true,
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: true,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: true,
    _emitClasses: false
  };

  // node_modules/swiper/esm/components/core/core-class.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var prototypes = {
    modular: modular_default,
    eventsEmitter: events_emitter_default,
    update: update_default,
    translate: translate_default,
    transition: transition_default,
    slide: slide_default,
    loop: loop_default,
    grabCursor: grab_cursor_default,
    manipulation: manipulation_default,
    events: events_default,
    breakpoints: breakpoints_default,
    checkOverflow: check_overflow_default,
    classes: classes_default,
    images: images_default
  };
  var extendedDefaults = {};
  var Swiper = /* @__PURE__ */ function() {
    function Swiper2() {
      var el;
      var params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        el = args[0];
        params = args[1];
      }
      if (!params)
        params = {};
      params = extend2({}, params);
      if (el && !params.el)
        params.el = el;
      if (params.el && dom_default(params.el).length > 1) {
        var swipers = [];
        dom_default(params.el).each(function(containerEl) {
          var newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper2(newParams));
        });
        return swipers;
      }
      var swiper = this;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      if (typeof swiper.modules === "undefined") {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function(moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== "object" || moduleParams === null)
            return;
          if (!(moduleParamName in params && "enabled" in moduleParams))
            return;
          if (params[moduleParamName] === true) {
            params[moduleParamName] = {
              enabled: true
            };
          }
          if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName])
            params[moduleParamName] = {
              enabled: false
            };
        }
      });
      var swiperParams = extend2({}, defaults_default);
      swiper.useParams(swiperParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach(function(eventName) {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      swiper.$ = dom_default;
      extend2(swiper, {
        el,
        classNames: [],
        slides: dom_default(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical: function isVertical() {
          return swiper.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: true,
        isEnd: false,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        touchEvents: function touchEvents() {
          var touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
          var desktop = ["mousedown", "mousemove", "mouseup"];
          if (swiper.support.pointerEvents) {
            desktop = ["pointerdown", "pointermove", "pointerup"];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3]
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2]
          };
          return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          formElements: "input, select, option, textarea, button, video, label",
          lastClickTime: now(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: true,
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.useModules();
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    var _proto = Swiper2.prototype;
    _proto.emitContainerClasses = function emitContainerClasses() {
      var swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      var classes = swiper.el.className.split(" ").filter(function(className) {
        return className.indexOf("swiper-container") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", classes.join(" "));
    };
    _proto.getSlideClasses = function getSlideClasses(slideEl) {
      var swiper = this;
      return slideEl.className.split(" ").filter(function(className) {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    };
    _proto.emitSlidesClasses = function emitSlidesClasses() {
      var swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      var updates = [];
      swiper.slides.each(function(slideEl) {
        var classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    };
    _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params, slides = swiper.slides, slidesGrid = swiper.slidesGrid, swiperSize = swiper.size, activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
        for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
          if (slides[_i] && !breakLoop) {
            slideSize += slides[_i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
      } else {
        for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
          if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };
    _proto.update = function update() {
      var swiper = this;
      if (!swiper || swiper.destroyed)
        return;
      var snapGrid = swiper.snapGrid, params = swiper.params;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate2();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    };
    _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.each(function(slideEl) {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate)
        swiper.update();
      return swiper;
    };
    _proto.mount = function mount(el) {
      var swiper = this;
      if (swiper.mounted)
        return true;
      var $el = dom_default(el || swiper.params.el);
      el = $el[0];
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      var $wrapperEl;
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        $wrapperEl = dom_default(el.shadowRoot.querySelector("." + swiper.params.wrapperClass));
        $wrapperEl.children = function(options) {
          return $el.children(options);
        };
      } else {
        $wrapperEl = $el.children("." + swiper.params.wrapperClass);
      }
      extend2(swiper, {
        $el,
        el,
        $wrapperEl,
        wrapperEl: $wrapperEl[0],
        mounted: true,
        rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
        wrongRTL: $wrapperEl.css("display") === "-webkit-box"
      });
      return true;
    };
    _proto.init = function init4(el) {
      var swiper = this;
      if (swiper.initialized)
        return swiper;
      var mounted = swiper.mount(el);
      if (mounted === false)
        return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }
      swiper.attachEvents();
      swiper.initialized = true;
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    };
    _proto.destroy = function destroy4(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      var swiper = this;
      var params = swiper.params, $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr("style");
        $wrapperEl.removeAttr("style");
        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach(function(eventName) {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    };
    Swiper2.extendDefaults = function extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    };
    Swiper2.installModule = function installModule(module) {
      if (!Swiper2.prototype.modules)
        Swiper2.prototype.modules = {};
      var name = module.name || Object.keys(Swiper2.prototype.modules).length + "_" + now();
      Swiper2.prototype.modules[name] = module;
    };
    Swiper2.use = function use(module) {
      if (Array.isArray(module)) {
        module.forEach(function(m) {
          return Swiper2.installModule(m);
        });
        return Swiper2;
      }
      Swiper2.installModule(module);
      return Swiper2;
    };
    _createClass(Swiper2, null, [{
      key: "extendedDefaults",
      get: function get2() {
        return extendedDefaults;
      }
    }, {
      key: "defaults",
      get: function get2() {
        return defaults_default;
      }
    }]);
    return Swiper2;
  }();
  Object.keys(prototypes).forEach(function(prototypeGroup) {
    Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod) {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([resize_default, observer_default]);
  var core_class_default = Swiper;

  // src/index.ts
  var $wrapper = document.querySelector(".swiper-wrapper");
  projects.forEach((project) => {
    $wrapper.appendChild(createElementFromHTML(`
      <div class="swiper-slide flex">
        <div class="swiper-image-container">
          <img src="${project.image}" alt="${project.name} logo" onclick="app.popupImage('${project.image}')">
        </div>
        <div class="swiper-description-container">
          <div class="swiper-header">
            <h2>${project.name}</h2>
            <a href="${project.url}" target="_blank" class="button">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
          <p>${project.description}</p>
          <ul>
            ${project.technologies.map((techno) => `<li>${techno}</li>`).join("")}
          </ul>
        </div>
      </div>
    `));
  });
  new core_class_default(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    allowSlideNext: true,
    allowSlidePrev: true
  });
  return src_exports;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2luZGV4LnRzIiwgInNyYy9hcHAvb2JzZXJ2YXRpb24udHMiLCAic3JjL2FwcC9zdG9yYWdlLnRzIiwgInNyYy9hcHAvdGhlbWUudHMiLCAic3JjL2FwcC9mdW5jdGlvbnMudHMiLCAic3JjL2FwcC91dGlscy50cyIsICJzcmMvYXBwL2RhdGEudHMiLCAibm9kZV9tb2R1bGVzL3Nzci13aW5kb3cvc3NyLXdpbmRvdy5lc20uanMiLCAibm9kZV9tb2R1bGVzL2RvbTcvZG9tNy5lc20uanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vdXRpbHMvZG9tLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL3V0aWxzL3V0aWxzLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL3V0aWxzL2dldC1zdXBwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL3V0aWxzL2dldC1kZXZpY2UuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vdXRpbHMvZ2V0LWJyb3dzZXIuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vbW9kdWxlcy9yZXNpemUvcmVzaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL21vZHVsZXMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL21vZHVsYXIuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy1lbWl0dGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2l6ZS5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZUF1dG9IZWlnaHQuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXNPZmZzZXQuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXNQcm9ncmVzcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVByb2dyZXNzLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzQ2xhc3Nlcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZUFjdGl2ZUluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlQ2xpY2tlZFNsaWRlLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9nZXRUcmFuc2xhdGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9zZXRUcmFuc2xhdGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9taW5UcmFuc2xhdGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9tYXhUcmFuc2xhdGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS90cmFuc2xhdGVUby5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdHJhbnNsYXRlL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uL3NldFRyYW5zaXRpb24uanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvblN0YXJ0LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uL3RyYW5zaXRpb25FbmQuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG8uanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG9Mb29wLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZU5leHQuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlUHJldi5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVSZXNldC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVUb0Nsb3Nlc3QuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG9DbGlja2VkU2xpZGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9sb29wL2xvb3BDcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2xvb3AvbG9vcEZpeC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbG9vcC9sb29wRGVzdHJveS5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbG9vcC9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3Ivc2V0R3JhYkN1cnNvci5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3IvdW5zZXRHcmFiQ3Vyc29yLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ncmFiLWN1cnNvci9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL2FwcGVuZFNsaWRlLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vcHJlcGVuZFNsaWRlLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vYWRkU2xpZGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9yZW1vdmVTbGlkZS5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL3JlbW92ZUFsbFNsaWRlcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25Ub3VjaFN0YXJ0LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25Ub3VjaE1vdmUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblRvdWNoRW5kLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25SZXNpemUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vbkNsaWNrLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25TY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvYnJlYWtwb2ludHMvc2V0QnJlYWtwb2ludC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvYnJlYWtwb2ludHMvZ2V0QnJlYWtwb2ludC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvYnJlYWtwb2ludHMvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2NsYXNzZXMvYWRkQ2xhc3Nlcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9yZW1vdmVDbGFzc2VzLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9jbGFzc2VzL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9pbWFnZXMvbG9hZEltYWdlLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9pbWFnZXMvcHJlbG9hZEltYWdlcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvaW1hZ2VzL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9jaGVjay1vdmVyZmxvdy9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZGVmYXVsdHMuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2NvcmUtY2xhc3MuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGFzIG9ic2VydmF0aW9uIGZyb20gXCIuL2FwcC9vYnNlcnZhdGlvblwiXG5leHBvcnQgKiBhcyBzdG9yYWdlIGZyb20gXCIuL2FwcC9zdG9yYWdlXCJcbmV4cG9ydCAqIGFzIHRoZW1lIGZyb20gXCIuL2FwcC90aGVtZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9hcHAvZnVuY3Rpb25zXCJcblxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4vYXBwL3V0aWxzXCJcbmltcG9ydCAqIGFzIGRhdGEgZnJvbSBcIi4vYXBwL2RhdGFcIlxuXG5pbXBvcnQgU3dpcGVyIGZyb20gXCJzd2lwZXJcIlxuaW1wb3J0IFwic3dpcGVyL3N3aXBlci1idW5kbGUuY3NzXCJcblxuY29uc3QgJHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN3aXBlci13cmFwcGVyXCIpXG5cbmRhdGEucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAkd3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICB1dGlscy5jcmVhdGVFbGVtZW50RnJvbUhUTUwoYFxuICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZSBmbGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke3Byb2plY3QuaW1hZ2V9XCIgYWx0PVwiJHtwcm9qZWN0Lm5hbWV9IGxvZ29cIiBvbmNsaWNrPVwiYXBwLnBvcHVwSW1hZ2UoJyR7cHJvamVjdC5pbWFnZX0nKVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci1kZXNjcmlwdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgyPiR7cHJvamVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHtwcm9qZWN0LnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leHRlcm5hbC1saW5rLWFsdFwiPjwvaT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICR7cHJvamVjdC50ZWNobm9sb2dpZXNcbiAgICAgICAgICAgICAgLm1hcCgodGVjaG5vKSA9PiBgPGxpPiR7dGVjaG5vfTwvbGk+YClcbiAgICAgICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgKVxuICApXG59KVxuXG5uZXcgU3dpcGVyKFwiLnN3aXBlci1jb250YWluZXJcIiwge1xuICBsb29wOiB0cnVlLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgdHlwZTogXCJwcm9ncmVzc2JhclwiLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBhbGxvd1NsaWRlTmV4dDogdHJ1ZSxcbiAgYWxsb3dTbGlkZVByZXY6IHRydWUsXG59KVxuIiwgImV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgY2FsbGJhY2s6IEludGVyc2VjdGlvbk9ic2VydmVyQ2FsbGJhY2tcbik6IEludGVyc2VjdGlvbk9ic2VydmVyIHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIG9ic2VydmVyXG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlIHtcbiAgZGFyazogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmUoKTogUGFydGlhbDxTdG9yYWdlPiB7XG4gIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmFnZVwiKVxuICByZXR1cm4gSlNPTi5wYXJzZShyYXcgPz8gXCJ7fVwiKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RvcmUoc3RvcmU6IFBhcnRpYWw8U3RvcmFnZT4pIHtcbiAgY29uc3QgcmF3ID0gSlNPTi5zdHJpbmdpZnkoc3RvcmUpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmFnZVwiLCByYXcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8U3RvcmFnZUtleSBleHRlbmRzIGtleW9mIFN0b3JhZ2U+KFxuICBuYW1lOiBTdG9yYWdlS2V5LFxuICB2YWx1ZTogU3RvcmFnZVtTdG9yYWdlS2V5XVxuKSB7XG4gIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKVxuICBzdG9yZVtuYW1lXSA9IHZhbHVlXG4gIHNldFN0b3JlKHN0b3JlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFN0b3JhZ2VLZXkgZXh0ZW5kcyBrZXlvZiBTdG9yYWdlPihcbiAgbmFtZTogU3RvcmFnZUtleVxuKTogU3RvcmFnZVtTdG9yYWdlS2V5XSB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKVxuICByZXR1cm4gc3RvcmVbbmFtZV1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZTxTdG9yYWdlS2V5IGV4dGVuZHMga2V5b2YgU3RvcmFnZT4oXG4gIG5hbWU6IFN0b3JhZ2VLZXksXG4gIGRlZmF1bHRWYWx1ZTogU3RvcmFnZVtTdG9yYWdlS2V5XVxuKTogU3RvcmFnZVtTdG9yYWdlS2V5XSB7XG4gIGxldCB2YWx1ZSA9IGdldChuYW1lKVxuICBpZiAodmFsdWUpIHJldHVybiB2YWx1ZVxuICBzZXQobmFtZSwgZGVmYXVsdFZhbHVlKVxuICByZXR1cm4gZGVmYXVsdFZhbHVlXG59XG4iLCAiaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCJcblxuaWYgKHN0b3JhZ2UuZ2V0KFwiZGFya1wiKSkgc3dpdGNoSXQoKVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoSXQoKSB7XG4gIGNvbnN0IGFjdGl2YXRlZCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgc3RvcmFnZS5zZXQoXCJkYXJrXCIsIGFjdGl2YXRlZClcbiAgY29uc29sZS5sb2coYWN0aXZhdGVkKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBwb3B1cEltYWdlKHVybDogc3RyaW5nKSB7XHJcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwSW1hZ2VcIilcclxuICBjb25zdCBpbWcgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnRcclxuICBpbWcuc3JjID0gdXJsXHJcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IHBvcHVwLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiID8gXCJibG9ja1wiIDogXCJub25lXCJcclxufSIsICJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudEZyb21IVE1MPFxuICBFbGVtZW50IGV4dGVuZHMgQ2hpbGROb2RlID0gSFRNTERpdkVsZW1lbnRcbj4oaHRtbDogc3RyaW5nKTogRWxlbWVudCB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgZGl2LmlubmVySFRNTCA9IGh0bWwudHJpbSgpXG4gIHJldHVybiBkaXYuZmlyc3RDaGlsZCBhcyBFbGVtZW50XG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0IHtcbiAgbmFtZTogc3RyaW5nXG4gIHRlY2hub2xvZ2llczogc3RyaW5nW11cbiAgaW1hZ2U6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIHVybDogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gW1xuICB7XG4gICAgbmFtZTogXCJHYXJpb1wiLFxuICAgIHRlY2hub2xvZ2llczogW1wiVHlwZVNjcmlwdFwiLCBcInA1LmpzXCIsIFwiRVNCdWlsZFwiLCBcIkd1bHBcIl0sXG4gICAgaW1hZ2U6IFwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9nYXJpby5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGV0aXQgdGVzdCBkZSBwbGF0Zm9ybWVyIDJEIGF2ZWMgbW90ZXVyIHBoeXNpcXVlIHNpbXBsZSBldCBzeXN0XHUwMEU4bWUgZGUgY2hlY2twb2ludC5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0NhbWlsbGVBYmVsbGEvR2FyaW9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSnVzdCBhIEZvcnVtXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbXCJUeXBlU2NyaXB0XCIsIFwiRXhwcmVzc1wiLCBcIlNhc3NcIiwgXCJQb3N0Z3Jlc1NRTFwiLCBcIkd1bHBcIl0sXG4gICAgaW1hZ2U6IFwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9qZi5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRFx1MDBFOWJ1dCBkZSByXHUwMEU5c2VhdSBzb2NpYWwvZm9ydW0gXHUwMEUwIHBvc3Qgclx1MDBFOWN1cnNpZiBvcmllbnRcdTAwRTkgZFx1MDBFOXZlbG9wcGVtZW50IChtYXJrZG93biBpbnRlcnByXHUwMEU5dFx1MDBFOSBldCBzeW50YXhlIGRlcyBibG9jcyBkZSBjb2RlIGNvbG9yXHUwMEU5ZSkuXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9DYW1pbGxlQWJlbGxhL2p1c3QtYS1mb3J1bVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCb3QudHNcIixcbiAgICB0ZWNobm9sb2dpZXM6IFtcIlR5cGVTY3JpcHRcIiwgXCJFU0J1aWxkXCIsIFwiR3VscFwiLCBcImRpc2NvcmQuanNcIl0sXG4gICAgaW1hZ2U6IFwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9idHMucG5nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRnJhbWV3b3JrIHBvdXIgYm90cyBEaXNjb3JkIGluY2x1YW50IHVuIGNvbW1hbmQgaGFuZGxlciBhdmFuY1x1MDBFOSwgdW4gY2xpIHBvdXIgZ1x1MDBFOW5cdTAwRTlyZXIgZGVzIGZpY2hpZXJzLCB1bmUgc3RydWN0dXJlIGRlIGZpY2hpZXIgc3VwZXIgcHJhdGlxdWUsIHVuIHN5c3RcdTAwRThtZSBkJ2FyZ3VtZW50cyBiYXNcdTAwRTkgc3VyIFlhcmdzIHBvdXIgbGVzIGNvbW1hbmRlcywgcXVlbHF1ZXMgY29tbWFuZGVzIGV0IGV2ZW50cyBpbnRcdTAwRTlnclx1MDBFOXMsIHVuIGJhc2UgZGUgZG9ublx1MDBFOWVzIGRcdTAwRTlqXHUwMEUwIHNldHVwIGV0IHF1ZWxxdWVzIG91dGlscy4uLlwiLFxuICAgIHVybDogXCJodHRwczovL2dob20uZ2l0Ym9vay5pby9ib3QtdHMvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInhQYWRcIixcbiAgICB0ZWNobm9sb2dpZXM6IFtcIkphdmFTY3JpcHRcIl0sXG4gICAgaW1hZ2U6IFwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy94cGFkLnBuZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hcHBlciBkZSBtYW5ldHRlIHhCb3ggcG91ciBsZXMgYXBwbGljYXRpb25zIFdFQi5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0NhbWlsbGVBYmVsbGEveFBhZFwiXG4gIH1cbl1cbiIsICIvKipcbiAqIFNTUiBXaW5kb3cgMy4wLjBcbiAqIEJldHRlciBoYW5kbGluZyBmb3Igd2luZG93IG9iamVjdCBpbiBTU1IgZW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xpbWl0czR3ZWIvc3NyLXdpbmRvd1xuICpcbiAqIENvcHlyaWdodCAyMDIwLCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBOb3ZlbWJlciA5LCAyMDIwXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gKG9iaiAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAnY29uc3RydWN0b3InIGluIG9iaiAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdCk7XG59XG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzcmMpIHtcbiAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsgdGFyZ2V0ID0ge307IH1cbiAgICBpZiAoc3JjID09PSB2b2lkIDApIHsgc3JjID0ge307IH1cbiAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHNyY1trZXldKSAmJlxuICAgICAgICAgICAgaXNPYmplY3QodGFyZ2V0W2tleV0pICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcmNba2V5XSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzcmNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxudmFyIHNzckRvY3VtZW50ID0ge1xuICAgIGJvZHk6IHt9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgYWN0aXZlRWxlbWVudDoge1xuICAgICAgICBibHVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIG5vZGVOYW1lOiAnJyxcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIGdldEVsZW1lbnRCeUlkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgY3JlYXRlRXZlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluaXRFdmVudDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNyZWF0ZUVsZW1lbnROUzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBpbXBvcnROb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgICAgaGFzaDogJycsXG4gICAgICAgIGhvc3Q6ICcnLFxuICAgICAgICBob3N0bmFtZTogJycsXG4gICAgICAgIGhyZWY6ICcnLFxuICAgICAgICBvcmlnaW46ICcnLFxuICAgICAgICBwYXRobmFtZTogJycsXG4gICAgICAgIHByb3RvY29sOiAnJyxcbiAgICAgICAgc2VhcmNoOiAnJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGdldERvY3VtZW50KCkge1xuICAgIHZhciBkb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB7fTtcbiAgICBleHRlbmQoZG9jLCBzc3JEb2N1bWVudCk7XG4gICAgcmV0dXJuIGRvYztcbn1cblxudmFyIHNzcldpbmRvdyA9IHtcbiAgICBkb2N1bWVudDogc3NyRG9jdW1lbnQsXG4gICAgbmF2aWdhdG9yOiB7XG4gICAgICAgIHVzZXJBZ2VudDogJycsXG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgICBoYXNoOiAnJyxcbiAgICAgICAgaG9zdDogJycsXG4gICAgICAgIGhvc3RuYW1lOiAnJyxcbiAgICAgICAgaHJlZjogJycsXG4gICAgICAgIG9yaWdpbjogJycsXG4gICAgICAgIHBhdGhuYW1lOiAnJyxcbiAgICAgICAgcHJvdG9jb2w6ICcnLFxuICAgICAgICBzZWFyY2g6ICcnLFxuICAgIH0sXG4gICAgaGlzdG9yeToge1xuICAgICAgICByZXBsYWNlU3RhdGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgcHVzaFN0YXRlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIGdvOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIGJhY2s6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICB9LFxuICAgIEN1c3RvbUV2ZW50OiBmdW5jdGlvbiBDdXN0b21FdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkgeyB9LFxuICAgIGdldENvbXB1dGVkU3R5bGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgSW1hZ2U6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBEYXRlOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgc2NyZWVuOiB7fSxcbiAgICBzZXRUaW1lb3V0OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgY2xlYXJUaW1lb3V0OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgbWF0Y2hNZWRpYTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgIH0sXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgICB2YXIgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbiAgICBleHRlbmQod2luLCBzc3JXaW5kb3cpO1xuICAgIHJldHVybiB3aW47XG59XG5cbmV4cG9ydCB7IGV4dGVuZCwgZ2V0RG9jdW1lbnQsIGdldFdpbmRvdywgc3NyRG9jdW1lbnQsIHNzcldpbmRvdyB9O1xuIiwgIi8qKlxuICogRG9tNyAzLjAuMFxuICogTWluaW1hbGlzdGljIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgRE9NIG1hbmlwdWxhdGlvbiwgd2l0aCBhIGpRdWVyeS1jb21wYXRpYmxlIEFQSVxuICogaHR0cHM6Ly9mcmFtZXdvcms3LmlvL2RvY3MvZG9tNy5odG1sXG4gKlxuICogQ29weXJpZ2h0IDIwMjAsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IE5vdmVtYmVyIDksIDIwMjBcbiAqL1xuaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5mdW5jdGlvbiBtYWtlUmVhY3RpdmUob2JqKSB7XG4gIHZhciBwcm90byA9IG9iai5fX3Byb3RvX187XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdfX3Byb3RvX18nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gcHJvdG87XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgcHJvdG8uX19wcm90b19fID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIERvbTcgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BcnJheSkge1xuICBfaW5oZXJpdHNMb29zZShEb203LCBfQXJyYXkpO1xuXG4gIGZ1bmN0aW9uIERvbTcoaXRlbXMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9BcnJheS5jYWxsLmFwcGx5KF9BcnJheSwgW3RoaXNdLmNvbmNhdChpdGVtcykpIHx8IHRoaXM7XG4gICAgbWFrZVJlYWN0aXZlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gRG9tNztcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEFycmF5KSk7XG5cbmZ1bmN0aW9uIGFycmF5RmxhdChhcnIpIHtcbiAgaWYgKGFyciA9PT0gdm9pZCAwKSB7XG4gICAgYXJyID0gW107XG4gIH1cblxuICB2YXIgcmVzID0gW107XG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xuICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBhcnJheUZsYXQoZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnB1c2goZWwpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnIsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoYXJyLCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBhcnJheVVuaXF1ZShhcnIpIHtcbiAgdmFyIHVuaXF1ZUFycmF5ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodW5pcXVlQXJyYXkuaW5kZXhPZihhcnJbaV0pID09PSAtMSkgdW5pcXVlQXJyYXkucHVzaChhcnJbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHVuaXF1ZUFycmF5O1xufVxuZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKC4pL2csIGZ1bmN0aW9uIChtYXRjaCwgZ3JvdXApIHtcbiAgICByZXR1cm4gZ3JvdXAudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHFzYShzZWxlY3RvciwgY29udGV4dCkge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICB9XG5cbiAgdmFyIGEgPSBbXTtcbiAgdmFyIHJlcyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhLnB1c2gocmVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIGFyciA9IFtdO1xuXG4gIGlmICghY29udGV4dCAmJiBzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBEb203KGFycik7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgIHZhciBodG1sID0gc2VsZWN0b3IudHJpbSgpO1xuXG4gICAgaWYgKGh0bWwuaW5kZXhPZignPCcpID49IDAgJiYgaHRtbC5pbmRleE9mKCc+JykgPj0gMCkge1xuICAgICAgdmFyIHRvQ3JlYXRlID0gJ2Rpdic7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8bGknKSA9PT0gMCkgdG9DcmVhdGUgPSAndWwnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRyJykgPT09IDApIHRvQ3JlYXRlID0gJ3Rib2R5JztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0ZCcpID09PSAwIHx8IGh0bWwuaW5kZXhPZignPHRoJykgPT09IDApIHRvQ3JlYXRlID0gJ3RyJztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0Ym9keScpID09PSAwKSB0b0NyZWF0ZSA9ICd0YWJsZSc7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8b3B0aW9uJykgPT09IDApIHRvQ3JlYXRlID0gJ3NlbGVjdCc7XG4gICAgICB2YXIgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9DcmVhdGUpO1xuICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnIucHVzaCh0ZW1wUGFyZW50LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhcnIgPSBxc2Eoc2VsZWN0b3IudHJpbSgpLCBjb250ZXh0IHx8IGRvY3VtZW50KTtcbiAgICB9IC8vIGFyciA9IHFzYShzZWxlY3RvciwgZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgPT09IHdpbmRvdyB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHtcbiAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSByZXR1cm4gc2VsZWN0b3I7XG4gICAgYXJyID0gc2VsZWN0b3I7XG4gIH1cblxuICByZXR1cm4gbmV3IERvbTcoYXJyYXlVbmlxdWUoYXJyKSk7XG59XG5cbiQuZm4gPSBEb203LnByb3RvdHlwZTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIHZhciBfZWwkY2xhc3NMaXN0O1xuXG4gICAgKF9lbCRjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3QpLmFkZC5hcHBseShfZWwkY2xhc3NMaXN0LCBjbGFzc05hbWVzKTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcygpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgY2xhc3Nlc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5zcGxpdCgnICcpO1xuICB9KSk7XG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICB2YXIgX2VsJGNsYXNzTGlzdDI7XG5cbiAgICAoX2VsJGNsYXNzTGlzdDIgPSBlbC5jbGFzc0xpc3QpLnJlbW92ZS5hcHBseShfZWwkY2xhc3NMaXN0MiwgY2xhc3NOYW1lcyk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGNsYXNzZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHZhciBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMuc3BsaXQoJyAnKTtcbiAgfSkpO1xuICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKCkge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzZXMgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBjbGFzc2VzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKHRoaXMsIGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBjbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfSkubGVuZ3RoID4gMDtcbiAgfSkubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gYXR0cihhdHRycywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGF0dHJzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBhdHRyXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdLmdldEF0dHJpYnV0ZShhdHRycyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSAvLyBTZXQgYXR0cnNcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAvLyBTdHJpbmdcbiAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJzLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9iamVjdFxuICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cnMpIHtcbiAgICAgICAgdGhpc1tpXVthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV07XG4gICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyKGF0dHIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJvcChwcm9wcywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBwcm9wXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdW3Byb3BzXTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTZXQgcHJvcHNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFN0cmluZ1xuICAgICAgICB0aGlzW2ldW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXVtwcm9wTmFtZV0gPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcbiAgdmFyIGVsO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7IC8vIEdldCB2YWx1ZVxuXG4gICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYga2V5IGluIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIHtcbiAgICAgIHJldHVybiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgfVxuXG4gICAgdmFyIGRhdGFLZXkgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsga2V5KTtcblxuICAgIGlmIChkYXRhS2V5KSB7XG4gICAgICByZXR1cm4gZGF0YUtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IC8vIFNldCB2YWx1ZVxuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZWwgPSB0aGlzW2ldO1xuICAgIGlmICghZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSA9IHt9O1xuICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURhdGEoa2V5KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0pIHtcbiAgICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IG51bGw7XG4gICAgICBkZWxldGUgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0KCkge1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgZGF0YXNldCA9IHt9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKGVsLmRhdGFzZXQpIHtcbiAgICBmb3IgKHZhciBkYXRhS2V5IGluIGVsLmRhdGFzZXQpIHtcbiAgICAgIGRhdGFzZXRbZGF0YUtleV0gPSBlbC5kYXRhc2V0W2RhdGFLZXldO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBfYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG5cbiAgICAgIGlmIChfYXR0ci5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPj0gMCkge1xuICAgICAgICBkYXRhc2V0W3RvQ2FtZWxDYXNlKF9hdHRyLm5hbWUuc3BsaXQoJ2RhdGEtJylbMV0pXSA9IF9hdHRyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBkYXRhc2V0KSB7XG4gICAgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ2ZhbHNlJykgZGF0YXNldFtrZXldID0gZmFsc2U7ZWxzZSBpZiAoZGF0YXNldFtrZXldID09PSAndHJ1ZScpIGRhdGFzZXRba2V5XSA9IHRydWU7ZWxzZSBpZiAocGFyc2VGbG9hdChkYXRhc2V0W2tleV0pID09PSBkYXRhc2V0W2tleV0gKiAxKSBkYXRhc2V0W2tleV0gKj0gMTtcbiAgfVxuXG4gIHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiB2YWwodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBnZXQgdmFsdWVcbiAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZWwubXVsdGlwbGUgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZWwuc2VsZWN0ZWRPcHRpb25zW2ldLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZWwudmFsdWU7XG4gIH0gLy8gc2V0IHZhbHVlXG5cblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICB2YXIgX2VsID0gdGhpc1tfaV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgX2VsLm11bHRpcGxlICYmIF9lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZWwub3B0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBfZWwub3B0aW9uc1tqXS5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2YoX2VsLm9wdGlvbnNbal0udmFsdWUpID49IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF9lbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy52YWwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnID8gZHVyYXRpb24gKyBcIm1zXCIgOiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvbigpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgdmFyIGV2ZW50VHlwZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFR5cGUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICghY2FwdHVyZSkgY2FwdHVyZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpdmVFdmVudChlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgdmFyIGV2ZW50RGF0YSA9IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW107XG5cbiAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICBldmVudERhdGEudW5zaGlmdChlKTtcbiAgICB9XG5cbiAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBldmVudERhdGEpO2Vsc2Uge1xuICAgICAgdmFyIF9wYXJlbnRzID0gJCh0YXJnZXQpLnBhcmVudHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgX3BhcmVudHMubGVuZ3RoOyBrICs9IDEpIHtcbiAgICAgICAgaWYgKCQoX3BhcmVudHNba10pLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkoX3BhcmVudHNba10sIGV2ZW50RGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgIHZhciBldmVudERhdGEgPSBlICYmIGUudGFyZ2V0ID8gZS50YXJnZXQuZG9tN0V2ZW50RGF0YSB8fCBbXSA6IFtdO1xuXG4gICAgaWYgKGV2ZW50RGF0YS5pbmRleE9mKGUpIDwgMCkge1xuICAgICAgZXZlbnREYXRhLnVuc2hpZnQoZSk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXIuYXBwbHkodGhpcywgZXZlbnREYXRhKTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcbiAgdmFyIGo7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXN0ZW5lcnMpIGVsLmRvbTdMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgaWYgKCFlbC5kb203TGlzdGVuZXJzW2V2ZW50XSkgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpdmUgZXZlbnRzXG4gICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHZhciBfZXZlbnQgPSBldmVudHNbal07XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnMpIGVsLmRvbTdMaXZlTGlzdGVuZXJzID0ge307XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XSkgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XSA9IFtdO1xuXG4gICAgICAgIGVsLmRvbTdMaXZlTGlzdGVuZXJzW19ldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUxpdmVFdmVudFxuICAgICAgICB9KTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKF9ldmVudCwgaGFuZGxlTGl2ZUV2ZW50LCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb2ZmKCkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gIH1cblxuICB2YXIgZXZlbnRUeXBlID0gYXJnc1swXSxcbiAgICAgIHRhcmdldFNlbGVjdG9yID0gYXJnc1sxXSxcbiAgICAgIGxpc3RlbmVyID0gYXJnc1syXSxcbiAgICAgIGNhcHR1cmUgPSBhcmdzWzNdO1xuXG4gIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VHlwZSA9IGFyZ3NbMF07XG4gICAgbGlzdGVuZXIgPSBhcmdzWzFdO1xuICAgIGNhcHR1cmUgPSBhcmdzWzJdO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFjYXB0dXJlKSBjYXB0dXJlID0gZmFsc2U7XG4gIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgdmFyIGVsID0gdGhpc1tqXTtcbiAgICAgIHZhciBoYW5kbGVycyA9IHZvaWQgMDtcblxuICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBrID49IDA7IGsgLT0gMSkge1xuICAgICAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNba107XG5cbiAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb25jZSgpIHtcbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICB9XG5cbiAgdmFyIGV2ZW50TmFtZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudE5hbWUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkge1xuICAgIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgZXZlbnRBcmdzID0gbmV3IEFycmF5KF9sZW44KSwgX2tleTggPSAwOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgICBldmVudEFyZ3NbX2tleThdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudEFyZ3MpO1xuICAgIGRvbS5vZmYoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3Rvciwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xuXG4gICAgaWYgKG9uY2VIYW5kbGVyLmRvbTdwcm94eSkge1xuICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLmRvbTdwcm94eTtcbiAgICB9XG4gIH1cblxuICBvbmNlSGFuZGxlci5kb203cHJveHkgPSBsaXN0ZW5lcjtcbiAgcmV0dXJuIGRvbS5vbihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBvbmNlSGFuZGxlciwgY2FwdHVyZSk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXIoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjkpLCBfa2V5OSA9IDA7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICBhcmdzW19rZXk5XSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gIH1cblxuICB2YXIgZXZlbnRzID0gYXJnc1swXS5zcGxpdCgnICcpO1xuICB2YXIgZXZlbnREYXRhID0gYXJnc1sxXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgdmFyIGVsID0gdGhpc1tqXTtcblxuICAgICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICB2YXIgZXZ0ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgIGRldGFpbDogZXZlbnREYXRhLFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IGFyZ3MuZmlsdGVyKGZ1bmN0aW9uIChkYXRhLCBkYXRhSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YUluZGV4ID4gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IFtdO1xuICAgICAgICBkZWxldGUgZWwuZG9tN0V2ZW50RGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChjYWxsYmFjaykge1xuICB2YXIgZG9tID0gdGhpcztcblxuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgZG9tLm9mZigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBkb20ub24oJ3RyYW5zaXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGlvbkVuZChjYWxsYmFjaykge1xuICB2YXIgZG9tID0gdGhpcztcblxuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgZG9tLm9mZignYW5pbWF0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGRvbS5vbignYW5pbWF0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB3aWR0aCgpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ3dpZHRoJykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbnMpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgdmFyIF9zdHlsZXMgPSB0aGlzLnN0eWxlcygpO1xuXG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQoX3N0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KF9zdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0KCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ2hlaWdodCcpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRlckhlaWdodChpbmNsdWRlTWFyZ2lucykge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICB2YXIgX3N0eWxlczIgPSB0aGlzLnN0eWxlcygpO1xuXG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KF9zdHlsZXMyLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KF9zdHlsZXMyLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgdmFyIGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgdmFyIGNsaWVudExlZnQgPSBlbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICAgIHZhciBzY3JvbGxUb3AgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBoaWRlKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2hvdygpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgLy8gU3RpbGwgbm90IHZpc2libGVcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzdHlsZXMoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKTtcbiAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiBjc3MocHJvcHMsIHZhbHVlKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gLmNzcygnd2lkdGgnKVxuICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLmNzcyh7IHdpZHRoOiAnMTAwcHgnIH0pXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciBfcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgIHRoaXNbaV0uc3R5bGVbX3Byb3BdID0gcHJvcHNbX3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAuY3NzKCd3aWR0aCcsICcxMDBweCcpXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcHNdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gdGhpcztcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICBjYWxsYmFjay5hcHBseShlbCwgW2VsLCBpbmRleF0pO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gYXJyYXlGaWx0ZXIodGhpcywgY2FsbGJhY2spO1xuICByZXR1cm4gJChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBodG1sKGh0bWwpIHtcbiAgaWYgKHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5pbm5lckhUTUwgPSBodG1sO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRleHQodGV4dCkge1xuICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGw7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIHZhciBjb21wYXJlV2l0aDtcbiAgdmFyIGk7XG4gIGlmICghZWwgfHwgdHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVsLm1hdGNoZXMpIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29tcGFyZVdpdGggPSAkKHNlbGVjdG9yKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSBlbCkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yID09PSBkb2N1bWVudCkge1xuICAgIHJldHVybiBlbCA9PT0gZG9jdW1lbnQ7XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IHdpbmRvdykge1xuICAgIHJldHVybiBlbCA9PT0gd2luZG93O1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgIGNvbXBhcmVXaXRoID0gc2VsZWN0b3Iubm9kZVR5cGUgPyBbc2VsZWN0b3JdIDogc2VsZWN0b3I7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHZhciBjaGlsZCA9IHRoaXNbMF07XG4gIHZhciBpO1xuXG4gIGlmIChjaGlsZCkge1xuICAgIGkgPSAwOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGVxKGluZGV4KSB7XG4gIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcztcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA+IGxlbmd0aCAtIDEpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgdmFyIHJldHVybkluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgaWYgKHJldHVybkluZGV4IDwgMCkgcmV0dXJuICQoW10pO1xuICAgIHJldHVybiAkKFt0aGlzW3JldHVybkluZGV4XV0pO1xuICB9XG5cbiAgcmV0dXJuICQoW3RoaXNbaW5kZXhdXSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgdmFyIG5ld0NoaWxkO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgYXJndW1lbnRzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgbmV3Q2hpbGQgPSBrIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGsgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNba107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG5cbiAgICAgICAgd2hpbGUgKHRlbXBEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQodGVtcERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGRbal0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG8ocGFyZW50KSB7XG4gICQocGFyZW50KS5hcHBlbmQodGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kKG5ld0NoaWxkKSB7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBpO1xuICB2YXIgajtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcblxuICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKHRlbXBEaXYuY2hpbGROb2Rlc1tqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZCwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvKHBhcmVudCkge1xuICAkKHBhcmVudCkucHJlcGVuZCh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydEJlZm9yZShzZWxlY3Rvcikge1xuICB2YXIgYmVmb3JlID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGJlZm9yZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJlZm9yZVswXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLCBiZWZvcmVbMF0pO1xuICAgIH0gZWxzZSBpZiAoYmVmb3JlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmVmb3JlLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGJlZm9yZVtqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYmVmb3JlW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIoc2VsZWN0b3IpIHtcbiAgdmFyIGFmdGVyID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFmdGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYWZ0ZXJbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYWZ0ZXJbMF0ubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSBpZiAoYWZ0ZXIubGVuZ3RoID4gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhZnRlci5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBhZnRlcltqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYWZ0ZXJbal0ubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZyAmJiAkKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuICQoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkKFtdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIHJldHVybiAkKFtdKTtcbn1cblxuZnVuY3Rpb24gbmV4dEFsbChzZWxlY3Rvcikge1xuICB2YXIgbmV4dEVscyA9IFtdO1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gJChbXSk7XG5cbiAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgIHZhciBfbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChfbmV4dCkuaXMoc2VsZWN0b3IpKSBuZXh0RWxzLnB1c2goX25leHQpO1xuICAgIH0gZWxzZSBuZXh0RWxzLnB1c2goX25leHQpO1xuXG4gICAgZWwgPSBfbmV4dDtcbiAgfVxuXG4gIHJldHVybiAkKG5leHRFbHMpO1xufVxuXG5mdW5jdGlvbiBwcmV2KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgZWwgPSB0aGlzWzBdO1xuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoZWwucHJldmlvdXNFbGVtZW50U2libGluZyAmJiAkKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gJChbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJChbXSk7XG4gICAgfVxuXG4gICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgcmV0dXJuICQoW10pO1xufVxuXG5mdW5jdGlvbiBwcmV2QWxsKHNlbGVjdG9yKSB7XG4gIHZhciBwcmV2RWxzID0gW107XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiAkKFtdKTtcblxuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIHZhciBfcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCQoX3ByZXYpLmlzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKF9wcmV2KTtcbiAgICB9IGVsc2UgcHJldkVscy5wdXNoKF9wcmV2KTtcblxuICAgIGVsID0gX3ByZXY7XG4gIH1cblxuICByZXR1cm4gJChwcmV2RWxzKTtcbn1cblxuZnVuY3Rpb24gc2libGluZ3Moc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHRoaXMubmV4dEFsbChzZWxlY3RvcikuYWRkKHRoaXMucHJldkFsbChzZWxlY3RvcikpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgdmFyIHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJCh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChwYXJlbnRzKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50cyhzZWxlY3Rvcikge1xuICB2YXIgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIF9wYXJlbnQgPSB0aGlzW2ldLnBhcmVudE5vZGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHdoaWxlIChfcGFyZW50KSB7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQoX3BhcmVudCkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2goX3BhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2goX3BhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQocGFyZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgdmFyIGNsb3Nlc3QgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoIWNsb3Nlc3QuaXMoc2VsZWN0b3IpKSB7XG4gICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gIH1cblxuICByZXR1cm4gY2xvc2VzdDtcbn1cblxuZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICB2YXIgZm91bmRFbGVtZW50cyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBmb3VuZCA9IHRoaXNbaV0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvdW5kLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBmb3VuZEVsZW1lbnRzLnB1c2goZm91bmRbal0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGZvdW5kRWxlbWVudHMpO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbihzZWxlY3Rvcikge1xuICB2YXIgY2hpbGRyZW4gPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gdGhpc1tpXS5jaGlsZHJlbjtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgaWYgKCFzZWxlY3RvciB8fCAkKGNoaWxkTm9kZXNbal0pLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlKSB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGV0YWNoKCkge1xuICByZXR1cm4gdGhpcy5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gYWRkKCkge1xuICB2YXIgZG9tID0gdGhpcztcbiAgdmFyIGk7XG4gIHZhciBqO1xuXG4gIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGVscyA9IG5ldyBBcnJheShfbGVuMTApLCBfa2V5MTAgPSAwOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgZWxzW19rZXkxMF0gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgdG9BZGQgPSAkKGVsc1tpXSk7XG5cbiAgICBmb3IgKGogPSAwOyBqIDwgdG9BZGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGRvbS5wdXNoKHRvQWRkW2pdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9tO1xufVxuXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwuY2hpbGROb2Rlc1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWwudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGxlZnQgPSBhcmdzWzBdLFxuICAgICAgdG9wID0gYXJnc1sxXSxcbiAgICAgIGR1cmF0aW9uID0gYXJnc1syXSxcbiAgICAgIGVhc2luZyA9IGFyZ3NbM10sXG4gICAgICBjYWxsYmFjayA9IGFyZ3NbNF07XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSA0ICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGVhc2luZztcbiAgICBsZWZ0ID0gYXJnc1swXTtcbiAgICB0b3AgPSBhcmdzWzFdO1xuICAgIGR1cmF0aW9uID0gYXJnc1syXTtcbiAgICBjYWxsYmFjayA9IGFyZ3NbM107XG4gICAgZWFzaW5nID0gYXJnc1s0XTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWFzaW5nID09PSAndW5kZWZpbmVkJykgZWFzaW5nID0gJ3N3aW5nJztcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnRUb3A7XG4gICAgdmFyIGN1cnJlbnRMZWZ0O1xuICAgIHZhciBtYXhUb3A7XG4gICAgdmFyIG1heExlZnQ7XG4gICAgdmFyIG5ld1RvcDtcbiAgICB2YXIgbmV3TGVmdDtcbiAgICB2YXIgc2Nyb2xsVG9wOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICB2YXIgc2Nyb2xsTGVmdDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgdmFyIGFuaW1hdGVUb3AgPSB0b3AgPiAwIHx8IHRvcCA9PT0gMDtcbiAgICB2YXIgYW5pbWF0ZUxlZnQgPSBsZWZ0ID4gMCB8fCBsZWZ0ID09PSAwO1xuXG4gICAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlYXNpbmcgPSAnc3dpbmcnO1xuICAgIH1cblxuICAgIGlmIChhbmltYXRlVG9wKSB7XG4gICAgICBjdXJyZW50VG9wID0gZWwuc2Nyb2xsVG9wO1xuXG4gICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZUxlZnQpIHtcbiAgICAgIGN1cnJlbnRMZWZ0ID0gZWwuc2Nyb2xsTGVmdDtcblxuICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWR1cmF0aW9uKSByZXR1cm47XG5cbiAgICBpZiAoYW5pbWF0ZVRvcCkge1xuICAgICAgbWF4VG9wID0gZWwuc2Nyb2xsSGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3VG9wID0gTWF0aC5tYXgoTWF0aC5taW4odG9wLCBtYXhUb3ApLCAwKTtcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZUxlZnQpIHtcbiAgICAgIG1heExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLm9mZnNldFdpZHRoO1xuICAgICAgbmV3TGVmdCA9IE1hdGgubWF4KE1hdGgubWluKGxlZnQsIG1heExlZnQpLCAwKTtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPT09IGN1cnJlbnRUb3ApIGFuaW1hdGVUb3AgPSBmYWxzZTtcbiAgICBpZiAoYW5pbWF0ZUxlZnQgJiYgbmV3TGVmdCA9PT0gY3VycmVudExlZnQpIGFuaW1hdGVMZWZ0ID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIodGltZSkge1xuICAgICAgaWYgKHRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24sIDEpLCAwKTtcbiAgICAgIHZhciBlYXNlUHJvZ3Jlc3MgPSBlYXNpbmcgPT09ICdsaW5lYXInID8gcHJvZ3Jlc3MgOiAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICAgIHZhciBkb25lO1xuICAgICAgaWYgKGFuaW1hdGVUb3ApIHNjcm9sbFRvcCA9IGN1cnJlbnRUb3AgKyBlYXNlUHJvZ3Jlc3MgKiAobmV3VG9wIC0gY3VycmVudFRvcCk7XG4gICAgICBpZiAoYW5pbWF0ZUxlZnQpIHNjcm9sbExlZnQgPSBjdXJyZW50TGVmdCArIGVhc2VQcm9ncmVzcyAqIChuZXdMZWZ0IC0gY3VycmVudExlZnQpO1xuXG4gICAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPiBjdXJyZW50VG9wICYmIHNjcm9sbFRvcCA+PSBuZXdUb3ApIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gbmV3VG9wO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wIDwgY3VycmVudFRvcCAmJiBzY3JvbGxUb3AgPD0gbmV3VG9wKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IG5ld1RvcDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID4gY3VycmVudExlZnQgJiYgc2Nyb2xsTGVmdCA+PSBuZXdMZWZ0KSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBuZXdMZWZ0O1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPCBjdXJyZW50TGVmdCAmJiBzY3JvbGxMZWZ0IDw9IG5ld0xlZnQpIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3ApIGVsLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgIGlmIChhbmltYXRlTGVmdCkgZWwuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9KTtcbn0gLy8gc2Nyb2xsVG9wKHRvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spIHtcblxuXG5mdW5jdGlvbiBzY3JvbGxUb3AoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciB0b3AgPSBhcmdzWzBdLFxuICAgICAgZHVyYXRpb24gPSBhcmdzWzFdLFxuICAgICAgZWFzaW5nID0gYXJnc1syXSxcbiAgICAgIGNhbGxiYWNrID0gYXJnc1szXTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRvcCA9IGFyZ3NbMF07XG4gICAgZHVyYXRpb24gPSBhcmdzWzFdO1xuICAgIGNhbGxiYWNrID0gYXJnc1syXTtcbiAgICBlYXNpbmcgPSBhcmdzWzNdO1xuICB9XG5cbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGRvbS5sZW5ndGggPiAwKSByZXR1cm4gZG9tWzBdLnNjcm9sbFRvcDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkb20uc2Nyb2xsVG8odW5kZWZpbmVkLCB0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsTGVmdCgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgdmFyIGxlZnQgPSBhcmdzWzBdLFxuICAgICAgZHVyYXRpb24gPSBhcmdzWzFdLFxuICAgICAgZWFzaW5nID0gYXJnc1syXSxcbiAgICAgIGNhbGxiYWNrID0gYXJnc1szXTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxlZnQgPSBhcmdzWzBdO1xuICAgIGR1cmF0aW9uID0gYXJnc1sxXTtcbiAgICBjYWxsYmFjayA9IGFyZ3NbMl07XG4gICAgZWFzaW5nID0gYXJnc1szXTtcbiAgfVxuXG4gIHZhciBkb20gPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA+IDApIHJldHVybiBkb21bMF0uc2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkb20uc2Nyb2xsVG8obGVmdCwgdW5kZWZpbmVkLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoaW5pdGlhbFByb3BzLCBpbml0aWFsUGFyYW1zKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGVscyA9IHRoaXM7XG4gIHZhciBhID0ge1xuICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsUHJvcHMpLFxuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnc3dpbmcnIC8vIG9yICdsaW5lYXInXG5cbiAgICAgIC8qIENhbGxiYWNrc1xuICAgICAgYmVnaW4oZWxlbWVudHMpXG4gICAgICBjb21wbGV0ZShlbGVtZW50cylcbiAgICAgIHByb2dyZXNzKGVsZW1lbnRzLCBjb21wbGV0ZSwgcmVtYWluaW5nLCBzdGFydCwgdHdlZW5WYWx1ZSlcbiAgICAgICovXG5cbiAgICB9LCBpbml0aWFsUGFyYW1zKSxcbiAgICBlbGVtZW50czogZWxzLFxuICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgcXVlOiBbXSxcbiAgICBlYXNpbmdQcm9ncmVzczogZnVuY3Rpb24gZWFzaW5nUHJvZ3Jlc3MoZWFzaW5nLCBwcm9ncmVzcykge1xuICAgICAgaWYgKGVhc2luZyA9PT0gJ3N3aW5nJykge1xuICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBlYXNpbmcocHJvZ3Jlc3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgaWYgKGEuZnJhbWVJZCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYS5mcmFtZUlkKTtcbiAgICAgIH1cblxuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgYS5xdWUgPSBbXTtcbiAgICB9LFxuICAgIGRvbmU6IGZ1bmN0aW9uIGRvbmUoY29tcGxldGUpIHtcbiAgICAgIGEuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICBhLmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZWw7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50LmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgICB9KTtcbiAgICAgIGlmIChjb21wbGV0ZSkgY29tcGxldGUoZWxzKTtcblxuICAgICAgaWYgKGEucXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHF1ZSA9IGEucXVlLnNoaWZ0KCk7XG4gICAgICAgIGEuYW5pbWF0ZShxdWVbMF0sIHF1ZVsxXSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhbmltYXRlOiBmdW5jdGlvbiBhbmltYXRlKHByb3BzLCBwYXJhbXMpIHtcbiAgICAgIGlmIChhLmFuaW1hdGluZykge1xuICAgICAgICBhLnF1ZS5wdXNoKFtwcm9wcywgcGFyYW1zXSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudHMgPSBbXTsgLy8gRGVmaW5lICYgQ2FjaGUgSW5pdGlhbHMgJiBVbml0c1xuXG4gICAgICBhLmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICB2YXIgaW5pdGlhbEZ1bGxWYWx1ZTtcbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZTtcbiAgICAgICAgdmFyIHVuaXQ7XG4gICAgICAgIHZhciBmaW5hbFZhbHVlO1xuICAgICAgICB2YXIgZmluYWxGdWxsVmFsdWU7XG4gICAgICAgIGlmICghZWwuZG9tN0FuaW1hdGVJbnN0YW5jZSkgYS5lbGVtZW50c1tpbmRleF0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gICAgICAgIGVsZW1lbnRzW2luZGV4XSA9IHtcbiAgICAgICAgICBjb250YWluZXI6IGVsXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IHBhcnNlRmxvYXQoaW5pdGlhbEZ1bGxWYWx1ZSk7XG4gICAgICAgICAgdW5pdCA9IGluaXRpYWxGdWxsVmFsdWUucmVwbGFjZShpbml0aWFsVmFsdWUsICcnKTtcbiAgICAgICAgICBmaW5hbFZhbHVlID0gcGFyc2VGbG9hdChwcm9wc1twcm9wXSk7XG4gICAgICAgICAgZmluYWxGdWxsVmFsdWUgPSBwcm9wc1twcm9wXSArIHVuaXQ7XG4gICAgICAgICAgZWxlbWVudHNbaW5kZXhdW3Byb3BdID0ge1xuICAgICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZTogaW5pdGlhbEZ1bGxWYWx1ZSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgdW5pdDogdW5pdCxcbiAgICAgICAgICAgIGZpbmFsVmFsdWU6IGZpbmFsVmFsdWUsXG4gICAgICAgICAgICBmaW5hbEZ1bGxWYWx1ZTogZmluYWxGdWxsVmFsdWUsXG4gICAgICAgICAgICBjdXJyZW50VmFsdWU6IGluaXRpYWxWYWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgIHZhciB0aW1lO1xuICAgICAgdmFyIGVsZW1lbnRzRG9uZSA9IDA7XG4gICAgICB2YXIgcHJvcHNEb25lID0gMDtcbiAgICAgIHZhciBkb25lO1xuICAgICAgdmFyIGJlZ2FuID0gZmFsc2U7XG4gICAgICBhLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgcHJvZ3Jlc3M7XG4gICAgICAgIHZhciBlYXNlUHJvZ3Jlc3M7IC8vIGxldCBlbDtcblxuICAgICAgICBpZiAoIWJlZ2FuKSB7XG4gICAgICAgICAgYmVnYW4gPSB0cnVlO1xuICAgICAgICAgIGlmIChwYXJhbXMuYmVnaW4pIHBhcmFtcy5iZWdpbihlbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnByb2dyZXNzKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgcGFyYW1zLnByb2dyZXNzKGVscywgTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCksIHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUgPCAwID8gMCA6IHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUsIHN0YXJ0VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICAgICAgICBpZiAoZG9uZSB8fCBlbC5kb25lKSByZXR1cm47XG4gICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIGlmIChkb25lIHx8IGVsLmRvbmUpIHJldHVybjtcbiAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCk7XG4gICAgICAgICAgICBlYXNlUHJvZ3Jlc3MgPSBhLmVhc2luZ1Byb2dyZXNzKHBhcmFtcy5lYXNpbmcsIHByb2dyZXNzKTtcbiAgICAgICAgICAgIHZhciBfZWwkcHJvcCA9IGVsW3Byb3BdLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IF9lbCRwcm9wLmluaXRpYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gX2VsJHByb3AuZmluYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICB1bml0ID0gX2VsJHByb3AudW5pdDtcbiAgICAgICAgICAgIGVsW3Byb3BdLmN1cnJlbnRWYWx1ZSA9IGluaXRpYWxWYWx1ZSArIGVhc2VQcm9ncmVzcyAqIChmaW5hbFZhbHVlIC0gaW5pdGlhbFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBlbFtwcm9wXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChmaW5hbFZhbHVlID4gaW5pdGlhbFZhbHVlICYmIGN1cnJlbnRWYWx1ZSA+PSBmaW5hbFZhbHVlIHx8IGZpbmFsVmFsdWUgPCBpbml0aWFsVmFsdWUgJiYgY3VycmVudFZhbHVlIDw9IGZpbmFsVmFsdWUpIHtcbiAgICAgICAgICAgICAgZWwuY29udGFpbmVyLnN0eWxlW3Byb3BdID0gZmluYWxWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgICAgIHByb3BzRG9uZSArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wc0RvbmUgPT09IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlbC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50c0RvbmUgKz0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChlbGVtZW50c0RvbmUgPT09IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgIGEuZG9uZShwYXJhbXMuY29tcGxldGUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLmNvbnRhaW5lci5zdHlsZVtwcm9wXSA9IGN1cnJlbnRWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuOyAvLyBUaGVuIGNhbGxcblxuICAgICAgICBhLmZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICB9XG5cbiAgICAgIGEuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfTtcblxuICBpZiAoYS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZWxzO1xuICB9XG5cbiAgdmFyIGFuaW1hdGVJbnN0YW5jZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEuZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBhbmltYXRlSW5zdGFuY2UgPSBhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgfSBlbHNlIGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoIWFuaW1hdGVJbnN0YW5jZSkge1xuICAgIGFuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoaW5pdGlhbFByb3BzID09PSAnc3RvcCcpIHtcbiAgICBhbmltYXRlSW5zdGFuY2Uuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGFuaW1hdGVJbnN0YW5jZS5hbmltYXRlKGEucHJvcHMsIGEucGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBlbHM7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIHZhciBlbHMgPSB0aGlzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGVsc1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBlbHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZS5zdG9wKCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBub1RyaWdnZXIgPSAncmVzaXplIHNjcm9sbCcuc3BsaXQoJyAnKTtcblxuZnVuY3Rpb24gc2hvcnRjdXQobmFtZSkge1xuICBmdW5jdGlvbiBldmVudEhhbmRsZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAobm9UcmlnZ2VyLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgICAgaWYgKG5hbWUgaW4gdGhpc1tpXSkgdGhpc1tpXVtuYW1lXSgpO2Vsc2Uge1xuICAgICAgICAgICAgJCh0aGlzW2ldKS50cmlnZ2VyKG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vbi5hcHBseSh0aGlzLCBbbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuXG4gIHJldHVybiBldmVudEhhbmRsZXI7XG59XG5cbnZhciBjbGljayA9IHNob3J0Y3V0KCdjbGljaycpO1xudmFyIGJsdXIgPSBzaG9ydGN1dCgnYmx1cicpO1xudmFyIGZvY3VzID0gc2hvcnRjdXQoJ2ZvY3VzJyk7XG52YXIgZm9jdXNpbiA9IHNob3J0Y3V0KCdmb2N1c2luJyk7XG52YXIgZm9jdXNvdXQgPSBzaG9ydGN1dCgnZm9jdXNvdXQnKTtcbnZhciBrZXl1cCA9IHNob3J0Y3V0KCdrZXl1cCcpO1xudmFyIGtleWRvd24gPSBzaG9ydGN1dCgna2V5ZG93bicpO1xudmFyIGtleXByZXNzID0gc2hvcnRjdXQoJ2tleXByZXNzJyk7XG52YXIgc3VibWl0ID0gc2hvcnRjdXQoJ3N1Ym1pdCcpO1xudmFyIGNoYW5nZSA9IHNob3J0Y3V0KCdjaGFuZ2UnKTtcbnZhciBtb3VzZWRvd24gPSBzaG9ydGN1dCgnbW91c2Vkb3duJyk7XG52YXIgbW91c2Vtb3ZlID0gc2hvcnRjdXQoJ21vdXNlbW92ZScpO1xudmFyIG1vdXNldXAgPSBzaG9ydGN1dCgnbW91c2V1cCcpO1xudmFyIG1vdXNlZW50ZXIgPSBzaG9ydGN1dCgnbW91c2VlbnRlcicpO1xudmFyIG1vdXNlbGVhdmUgPSBzaG9ydGN1dCgnbW91c2VsZWF2ZScpO1xudmFyIG1vdXNlb3V0ID0gc2hvcnRjdXQoJ21vdXNlb3V0Jyk7XG52YXIgbW91c2VvdmVyID0gc2hvcnRjdXQoJ21vdXNlb3ZlcicpO1xudmFyIHRvdWNoc3RhcnQgPSBzaG9ydGN1dCgndG91Y2hzdGFydCcpO1xudmFyIHRvdWNoZW5kID0gc2hvcnRjdXQoJ3RvdWNoZW5kJyk7XG52YXIgdG91Y2htb3ZlID0gc2hvcnRjdXQoJ3RvdWNobW92ZScpO1xudmFyIHJlc2l6ZSA9IHNob3J0Y3V0KCdyZXNpemUnKTtcbnZhciBzY3JvbGwgPSBzaG9ydGN1dCgnc2Nyb2xsJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICQ7XG5leHBvcnQgeyAkLCBhZGQsIGFkZENsYXNzLCBhbmltYXRlLCBhbmltYXRpb25FbmQsIGFwcGVuZCwgYXBwZW5kVG8sIGF0dHIsIGJsdXIsIGNoYW5nZSwgY2hpbGRyZW4sIGNsaWNrLCBjbG9zZXN0LCBjc3MsIGRhdGEsIGRhdGFzZXQsIGRldGFjaCwgZWFjaCwgZW1wdHksIGVxLCBmaWx0ZXIsIGZpbmQsIGZvY3VzLCBmb2N1c2luLCBmb2N1c291dCwgaGFzQ2xhc3MsIGhlaWdodCwgaGlkZSwgaHRtbCwgaW5kZXgsIGluc2VydEFmdGVyLCBpbnNlcnRCZWZvcmUsIGlzLCBrZXlkb3duLCBrZXlwcmVzcywga2V5dXAsIG1vdXNlZG93biwgbW91c2VlbnRlciwgbW91c2VsZWF2ZSwgbW91c2Vtb3ZlLCBtb3VzZW91dCwgbW91c2VvdmVyLCBtb3VzZXVwLCBuZXh0LCBuZXh0QWxsLCBvZmYsIG9mZnNldCwgb24sIG9uY2UsIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoLCBwYXJlbnQsIHBhcmVudHMsIHByZXBlbmQsIHByZXBlbmRUbywgcHJldiwgcHJldkFsbCwgcHJvcCwgcmVtb3ZlLCByZW1vdmVBdHRyLCByZW1vdmVDbGFzcywgcmVtb3ZlRGF0YSwgcmVzaXplLCBzY3JvbGwsIHNjcm9sbExlZnQsIHNjcm9sbFRvLCBzY3JvbGxUb3AsIHNob3csIHNpYmxpbmdzLCBzdG9wLCBzdHlsZXMsIHN1Ym1pdCwgdGV4dCwgdG9nZ2xlQ2xhc3MsIHRvdWNoZW5kLCB0b3VjaG1vdmUsIHRvdWNoc3RhcnQsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZCwgdHJpZ2dlciwgdmFsLCB2YWx1ZSwgd2lkdGggfTtcbiIsICJpbXBvcnQgeyAkLCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIGhhc0NsYXNzLCB0b2dnbGVDbGFzcywgYXR0ciwgcmVtb3ZlQXR0ciwgdHJhbnNmb3JtLCB0cmFuc2l0aW9uLCBvbiwgb2ZmLCB0cmlnZ2VyLCB0cmFuc2l0aW9uRW5kLCBvdXRlcldpZHRoLCBvdXRlckhlaWdodCwgc3R5bGVzLCBvZmZzZXQsIGNzcywgZWFjaCwgaHRtbCwgdGV4dCwgaXMsIGluZGV4LCBlcSwgYXBwZW5kLCBwcmVwZW5kLCBuZXh0LCBuZXh0QWxsLCBwcmV2LCBwcmV2QWxsLCBwYXJlbnQsIHBhcmVudHMsIGNsb3Nlc3QsIGZpbmQsIGNoaWxkcmVuLCBmaWx0ZXIsIHJlbW92ZSB9IGZyb20gJ2RvbTcnO1xudmFyIE1ldGhvZHMgPSB7XG4gIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICBoYXNDbGFzczogaGFzQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcbiAgYXR0cjogYXR0cixcbiAgcmVtb3ZlQXR0cjogcmVtb3ZlQXR0cixcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb24sXG4gIG9uOiBvbixcbiAgb2ZmOiBvZmYsXG4gIHRyaWdnZXI6IHRyaWdnZXIsXG4gIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQsXG4gIG91dGVyV2lkdGg6IG91dGVyV2lkdGgsXG4gIG91dGVySGVpZ2h0OiBvdXRlckhlaWdodCxcbiAgc3R5bGVzOiBzdHlsZXMsXG4gIG9mZnNldDogb2Zmc2V0LFxuICBjc3M6IGNzcyxcbiAgZWFjaDogZWFjaCxcbiAgaHRtbDogaHRtbCxcbiAgdGV4dDogdGV4dCxcbiAgaXM6IGlzLFxuICBpbmRleDogaW5kZXgsXG4gIGVxOiBlcSxcbiAgYXBwZW5kOiBhcHBlbmQsXG4gIHByZXBlbmQ6IHByZXBlbmQsXG4gIG5leHQ6IG5leHQsXG4gIG5leHRBbGw6IG5leHRBbGwsXG4gIHByZXY6IHByZXYsXG4gIHByZXZBbGw6IHByZXZBbGwsXG4gIHBhcmVudDogcGFyZW50LFxuICBwYXJlbnRzOiBwYXJlbnRzLFxuICBjbG9zZXN0OiBjbG9zZXN0LFxuICBmaW5kOiBmaW5kLFxuICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gIGZpbHRlcjogZmlsdGVyLFxuICByZW1vdmU6IHJlbW92ZVxufTtcbk9iamVjdC5rZXlzKE1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgJC5mblttZXRob2ROYW1lXSA9IE1ldGhvZHNbbWV0aG9kTmFtZV07XG59KTtcbmV4cG9ydCBkZWZhdWx0ICQ7IiwgImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9wcyhvYmopIHtcbiAgdmFyIG9iamVjdCA9IG9iajtcbiAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0cnkge1xuICAgICAgb2JqZWN0W2tleV0gPSBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHsvLyBubyBnZXR0ZXIgZm9yIG9iamVjdFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgfSBjYXRjaCAoZSkgey8vIHNvbWV0aGluZyBnb3Qgd3JvbmdcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjaywgZGVsYXkpIHtcbiAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICBkZWxheSA9IDA7XG4gIH1cblxuICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgZGVsYXkpO1xufVxuXG5mdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBEYXRlLm5vdygpO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwsIGF4aXMpIHtcbiAgaWYgKGF4aXMgPT09IHZvaWQgMCkge1xuICAgIGF4aXMgPSAneCc7XG4gIH1cblxuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBtYXRyaXg7XG4gIHZhciBjdXJUcmFuc2Zvcm07XG4gIHZhciB0cmFuc2Zvcm1NYXRyaXg7XG4gIHZhciBjdXJTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcblxuICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkge1xuICAgIGN1clRyYW5zZm9ybSA9IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS53ZWJraXRUcmFuc2Zvcm07XG5cbiAgICBpZiAoY3VyVHJhbnNmb3JtLnNwbGl0KCcsJykubGVuZ3RoID4gNikge1xuICAgICAgY3VyVHJhbnNmb3JtID0gY3VyVHJhbnNmb3JtLnNwbGl0KCcsICcpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gYS5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgIH0pLmpvaW4oJywgJyk7XG4gICAgfSAvLyBTb21lIG9sZCB2ZXJzaW9ucyBvZiBXZWJraXQgY2hva2Ugd2hlbiAnbm9uZScgaXMgcGFzc2VkOyBwYXNzXG4gICAgLy8gZW1wdHkgc3RyaW5nIGluc3RlYWQgaW4gdGhpcyBjYXNlXG5cblxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IG5ldyB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KGN1clRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBjdXJUcmFuc2Zvcm0pO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zZm9ybU1hdHJpeCA9IGN1clN0eWxlLk1velRyYW5zZm9ybSB8fCBjdXJTdHlsZS5PVHJhbnNmb3JtIHx8IGN1clN0eWxlLk1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLm1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKCd0cmFuc2xhdGUoJywgJ21hdHJpeCgxLCAwLCAwLCAxLCcpO1xuICAgIG1hdHJpeCA9IHRyYW5zZm9ybU1hdHJpeC50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gIH1cblxuICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MTsgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNikgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTJdKTsgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgICBlbHNlIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzRdKTtcbiAgfVxuXG4gIGlmIChheGlzID09PSAneScpIHtcbiAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQyOyAvLyBDcmF6eSBJRTEwIE1hdHJpeFxuICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxM10pOyAvLyBOb3JtYWwgQnJvd3NlcnNcbiAgICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNV0pO1xuICB9XG5cbiAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLmNvbnN0cnVjdG9yICYmIG8uY29uc3RydWN0b3IgPT09IE9iamVjdDtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICB2YXIgdG8gPSBPYmplY3QoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdKTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBuZXh0U291cmNlID0gaSA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2ldO1xuXG4gICAgaWYgKG5leHRTb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBuZXh0U291cmNlICE9PSBudWxsKSB7XG4gICAgICB2YXIga2V5c0FycmF5ID0gT2JqZWN0LmtleXMoT2JqZWN0KG5leHRTb3VyY2UpKTtcblxuICAgICAgZm9yICh2YXIgbmV4dEluZGV4ID0gMCwgbGVuID0ga2V5c0FycmF5Lmxlbmd0aDsgbmV4dEluZGV4IDwgbGVuOyBuZXh0SW5kZXggKz0gMSkge1xuICAgICAgICB2YXIgbmV4dEtleSA9IGtleXNBcnJheVtuZXh0SW5kZXhdO1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG5cbiAgICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICBpZiAoaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICBleHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSB7fTtcbiAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbmZ1bmN0aW9uIGJpbmRNb2R1bGVNZXRob2RzKGluc3RhbmNlLCBvYmopIHtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoaXNPYmplY3Qob2JqW2tleV0pKSB7XG4gICAgICBPYmplY3Qua2V5cyhvYmpba2V5XSkuZm9yRWFjaChmdW5jdGlvbiAoc3ViS2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV1bc3ViS2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9ialtrZXldW3N1YktleV0gPSBvYmpba2V5XVtzdWJLZXldLmJpbmQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtrZXldID0gb2JqW2tleV07XG4gIH0pO1xufVxuXG5leHBvcnQgeyBkZWxldGVQcm9wcywgbmV4dFRpY2ssIG5vdywgZ2V0VHJhbnNsYXRlLCBpc09iamVjdCwgZXh0ZW5kLCBiaW5kTW9kdWxlTWV0aG9kcyB9OyIsICJpbXBvcnQgeyBnZXRXaW5kb3csIGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG52YXIgc3VwcG9ydDtcblxuZnVuY3Rpb24gY2FsY1N1cHBvcnQoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgcmV0dXJuIHtcbiAgICB0b3VjaDogISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpLFxuICAgIHBvaW50ZXJFdmVudHM6ICEhd2luZG93LlBvaW50ZXJFdmVudCAmJiAnbWF4VG91Y2hQb2ludHMnIGluIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+PSAwLFxuICAgIG9ic2VydmVyOiBmdW5jdGlvbiBjaGVja09ic2VydmVyKCkge1xuICAgICAgcmV0dXJuICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgfHwgJ1dlYmtpdE11dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdztcbiAgICB9KCksXG4gICAgcGFzc2l2ZUxpc3RlbmVyOiBmdW5jdGlvbiBjaGVja1Bhc3NpdmVMaXN0ZW5lcigpIHtcbiAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVMaXN0ZW5lcicsIG51bGwsIG9wdHMpO1xuICAgICAgfSBjYXRjaCAoZSkgey8vIE5vIHN1cHBvcnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgICB9KCksXG4gICAgZ2VzdHVyZXM6IGZ1bmN0aW9uIGNoZWNrR2VzdHVyZXMoKSB7XG4gICAgICByZXR1cm4gJ29uZ2VzdHVyZXN0YXJ0JyBpbiB3aW5kb3c7XG4gICAgfSgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gIGlmICghc3VwcG9ydCkge1xuICAgIHN1cHBvcnQgPSBjYWxjU3VwcG9ydCgpO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnQ7XG59XG5cbmV4cG9ydCB7IGdldFN1cHBvcnQgfTsiLCAiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgeyBnZXRTdXBwb3J0IH0gZnJvbSAnLi9nZXQtc3VwcG9ydCc7XG52YXIgZGV2aWNlO1xuXG5mdW5jdGlvbiBjYWxjRGV2aWNlKF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICB1c2VyQWdlbnQgPSBfcmVmLnVzZXJBZ2VudDtcblxuICB2YXIgc3VwcG9ydCA9IGdldFN1cHBvcnQoKTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtO1xuICB2YXIgdWEgPSB1c2VyQWdlbnQgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHZhciBkZXZpY2UgPSB7XG4gICAgaW9zOiBmYWxzZSxcbiAgICBhbmRyb2lkOiBmYWxzZVxuICB9O1xuICB2YXIgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICB2YXIgc2NyZWVuSGVpZ2h0ID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gIHZhciBhbmRyb2lkID0gdWEubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgdmFyIGlwYWQgPSB1YS5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pO1xuICB2YXIgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/Lyk7XG4gIHZhciBpcGhvbmUgPSAhaXBhZCAmJiB1YS5tYXRjaCgvKGlQaG9uZVxcc09TfGlPUylcXHMoW1xcZF9dKykvKTtcbiAgdmFyIHdpbmRvd3MgPSBwbGF0Zm9ybSA9PT0gJ1dpbjMyJztcbiAgdmFyIG1hY29zID0gcGxhdGZvcm0gPT09ICdNYWNJbnRlbCc7IC8vIGlQYWRPcyAxMyBmaXhcblxuICB2YXIgaVBhZFNjcmVlbnMgPSBbJzEwMjR4MTM2NicsICcxMzY2eDEwMjQnLCAnODM0eDExOTQnLCAnMTE5NHg4MzQnLCAnODM0eDExMTInLCAnMTExMng4MzQnLCAnNzY4eDEwMjQnLCAnMTAyNHg3NjgnLCAnODIweDExODAnLCAnMTE4MHg4MjAnLCAnODEweDEwODAnLCAnMTA4MHg4MTAnXTtcblxuICBpZiAoIWlwYWQgJiYgbWFjb3MgJiYgc3VwcG9ydC50b3VjaCAmJiBpUGFkU2NyZWVucy5pbmRleE9mKHNjcmVlbldpZHRoICsgXCJ4XCIgKyBzY3JlZW5IZWlnaHQpID49IDApIHtcbiAgICBpcGFkID0gdWEubWF0Y2goLyhWZXJzaW9uKVxcLyhbXFxkLl0rKS8pO1xuICAgIGlmICghaXBhZCkgaXBhZCA9IFswLCAxLCAnMTNfMF8wJ107XG4gICAgbWFjb3MgPSBmYWxzZTtcbiAgfSAvLyBBbmRyb2lkXG5cblxuICBpZiAoYW5kcm9pZCAmJiAhd2luZG93cykge1xuICAgIGRldmljZS5vcyA9ICdhbmRyb2lkJztcbiAgICBkZXZpY2UuYW5kcm9pZCA9IHRydWU7XG4gIH1cblxuICBpZiAoaXBhZCB8fCBpcGhvbmUgfHwgaXBvZCkge1xuICAgIGRldmljZS5vcyA9ICdpb3MnO1xuICAgIGRldmljZS5pb3MgPSB0cnVlO1xuICB9IC8vIEV4cG9ydCBvYmplY3RcblxuXG4gIHJldHVybiBkZXZpY2U7XG59XG5cbmZ1bmN0aW9uIGdldERldmljZShvdmVycmlkZXMpIHtcbiAgaWYgKG92ZXJyaWRlcyA9PT0gdm9pZCAwKSB7XG4gICAgb3ZlcnJpZGVzID0ge307XG4gIH1cblxuICBpZiAoIWRldmljZSkge1xuICAgIGRldmljZSA9IGNhbGNEZXZpY2Uob3ZlcnJpZGVzKTtcbiAgfVxuXG4gIHJldHVybiBkZXZpY2U7XG59XG5cbmV4cG9ydCB7IGdldERldmljZSB9OyIsICJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbnZhciBicm93c2VyO1xuXG5mdW5jdGlvbiBjYWxjQnJvd3NlcigpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ3NhZmFyaScpID49IDAgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPCAwICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA8IDA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzRWRnZTogISF3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS9nKSxcbiAgICBpc1NhZmFyaTogaXNTYWZhcmkoKSxcbiAgICBpc1dlYlZpZXc6IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QnJvd3NlcigpIHtcbiAgaWYgKCFicm93c2VyKSB7XG4gICAgYnJvd3NlciA9IGNhbGNCcm93c2VyKCk7XG4gIH1cblxuICByZXR1cm4gYnJvd3Nlcjtcbn1cblxuZXhwb3J0IHsgZ2V0QnJvd3NlciB9OyIsICJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxudmFyIHN1cHBvcnRzUmVzaXplT2JzZXJ2ZXIgPSBmdW5jdGlvbiBzdXBwb3J0c1Jlc2l6ZU9ic2VydmVyKCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93LlJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3Jlc2l6ZScsXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGV4dGVuZChzd2lwZXIsIHtcbiAgICAgIHJlc2l6ZToge1xuICAgICAgICBvYnNlcnZlcjogbnVsbCxcbiAgICAgICAgY3JlYXRlT2JzZXJ2ZXI6IGZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHN3aXBlci53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBzd2lwZXIuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIG5ld1dpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICAgIHZhciBjb250ZW50Qm94U2l6ZSA9IF9yZWYuY29udGVudEJveFNpemUsXG4gICAgICAgICAgICAgICAgICBjb250ZW50UmVjdCA9IF9yZWYuY29udGVudFJlY3QsXG4gICAgICAgICAgICAgICAgICB0YXJnZXQgPSBfcmVmLnRhcmdldDtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IHN3aXBlci5lbCkgcmV0dXJuO1xuICAgICAgICAgICAgICBuZXdXaWR0aCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3Qud2lkdGggOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmlubGluZVNpemU7XG4gICAgICAgICAgICAgIG5ld0hlaWdodCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3QuaGVpZ2h0IDogKGNvbnRlbnRCb3hTaXplWzBdIHx8IGNvbnRlbnRCb3hTaXplKS5ibG9ja1NpemU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG5ld1dpZHRoICE9PSB3aWR0aCB8fCBuZXdIZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgICBzd2lwZXIucmVzaXplLnJlc2l6ZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzd2lwZXIucmVzaXplLm9ic2VydmVyLm9ic2VydmUoc3dpcGVyLmVsKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlT2JzZXJ2ZXI6IGZ1bmN0aW9uIHJlbW92ZU9ic2VydmVyKCkge1xuICAgICAgICAgIGlmIChzd2lwZXIucmVzaXplLm9ic2VydmVyICYmIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIudW5vYnNlcnZlICYmIHN3aXBlci5lbCkge1xuICAgICAgICAgICAgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlci51bm9ic2VydmUoc3dpcGVyLmVsKTtcbiAgICAgICAgICAgIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVzaXplSGFuZGxlcjogZnVuY3Rpb24gcmVzaXplSGFuZGxlcigpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlUmVzaXplJyk7XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ3Jlc2l6ZScpO1xuICAgICAgICB9LFxuICAgICAgICBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcigpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnb3JpZW50YXRpb25jaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnJlc2l6ZU9ic2VydmVyICYmIHN1cHBvcnRzUmVzaXplT2JzZXJ2ZXIoKSkge1xuICAgICAgICBzd2lwZXIucmVzaXplLmNyZWF0ZU9ic2VydmVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gRW1pdCByZXNpemVcblxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKTsgLy8gRW1pdCBvcmllbnRhdGlvbmNoYW5nZVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBzd2lwZXIucmVzaXplLm9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICAgICAgc3dpcGVyLnJlc2l6ZS5yZW1vdmVPYnNlcnZlcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN3aXBlci5yZXNpemUucmVzaXplSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBzd2lwZXIucmVzaXplLm9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG59OyIsICJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCB7IGJpbmRNb2R1bGVNZXRob2RzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xudmFyIE9ic2VydmVyID0ge1xuICBhdHRhY2g6IGZ1bmN0aW9uIGF0dGFjaCh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBPYnNlcnZlckZ1bmMgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2Via2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJGdW5jKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgIC8vIFRoZSBvYnNlcnZlclVwZGF0ZSBldmVudCBzaG91bGQgb25seSBiZSB0cmlnZ2VyZWRcbiAgICAgIC8vIG9uY2UgZGVzcGl0ZSB0aGUgbnVtYmVyIG9mIG11dGF0aW9ucy4gIEFkZGl0aW9uYWxcbiAgICAgIC8vIHRyaWdnZXJzIGFyZSByZWR1bmRhbnQgYW5kIGFyZSB2ZXJ5IGNvc3RseVxuICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ29ic2VydmVyVXBkYXRlJywgbXV0YXRpb25zWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2JzZXJ2ZXJVcGRhdGUgPSBmdW5jdGlvbiBvYnNlcnZlclVwZGF0ZSgpIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ29ic2VydmVyVXBkYXRlJywgbXV0YXRpb25zWzBdKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUob2JzZXJ2ZXJVcGRhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQob2JzZXJ2ZXJVcGRhdGUsIDApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmF0dHJpYnV0ZXMsXG4gICAgICBjaGlsZExpc3Q6IHR5cGVvZiBvcHRpb25zLmNoaWxkTGlzdCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGlsZExpc3QsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0eXBlb2Ygb3B0aW9ucy5jaGFyYWN0ZXJEYXRhID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoYXJhY3RlckRhdGFcbiAgICB9KTtcbiAgICBzd2lwZXIub2JzZXJ2ZXIub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICB9LFxuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIgfHwgIXN3aXBlci5wYXJhbXMub2JzZXJ2ZXIpIHJldHVybjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLm9ic2VydmVQYXJlbnRzKSB7XG4gICAgICB2YXIgY29udGFpbmVyUGFyZW50cyA9IHN3aXBlci4kZWwucGFyZW50cygpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRhaW5lclBhcmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChjb250YWluZXJQYXJlbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9IC8vIE9ic2VydmUgY29udGFpbmVyXG5cblxuICAgIHN3aXBlci5vYnNlcnZlci5hdHRhY2goc3dpcGVyLiRlbFswXSwge1xuICAgICAgY2hpbGRMaXN0OiBzd2lwZXIucGFyYW1zLm9ic2VydmVTbGlkZUNoaWxkcmVuXG4gICAgfSk7IC8vIE9ic2VydmUgd3JhcHBlclxuXG4gICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChzd2lwZXIuJHdyYXBwZXJFbFswXSwge1xuICAgICAgYXR0cmlidXRlczogZmFsc2VcbiAgICB9KTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIub2JzZXJ2ZXIub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfSk7XG4gICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycyA9IFtdO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2JzZXJ2ZXInLFxuICBwYXJhbXM6IHtcbiAgICBvYnNlcnZlcjogZmFsc2UsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IGZhbHNlLFxuICAgIG9ic2VydmVTbGlkZUNoaWxkcmVuOiBmYWxzZVxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBiaW5kTW9kdWxlTWV0aG9kcyhzd2lwZXIsIHtcbiAgICAgIG9ic2VydmVyOiBfZXh0ZW5kcyh7fSwgT2JzZXJ2ZXIsIHtcbiAgICAgICAgb2JzZXJ2ZXJzOiBbXVxuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgc3dpcGVyLm9ic2VydmVyLmluaXQoKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBzd2lwZXIub2JzZXJ2ZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufTsiLCAiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICB1c2VQYXJhbXM6IGZ1bmN0aW9uIHVzZVBhcmFtcyhpbnN0YW5jZVBhcmFtcykge1xuICAgIHZhciBpbnN0YW5jZSA9IHRoaXM7XG4gICAgaWYgKCFpbnN0YW5jZS5tb2R1bGVzKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoaW5zdGFuY2UubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGluc3RhbmNlLm1vZHVsZXNbbW9kdWxlTmFtZV07IC8vIEV4dGVuZCBwYXJhbXNcblxuICAgICAgaWYgKG1vZHVsZS5wYXJhbXMpIHtcbiAgICAgICAgZXh0ZW5kKGluc3RhbmNlUGFyYW1zLCBtb2R1bGUucGFyYW1zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdXNlTW9kdWxlczogZnVuY3Rpb24gdXNlTW9kdWxlcyhtb2R1bGVzUGFyYW1zKSB7XG4gICAgaWYgKG1vZHVsZXNQYXJhbXMgPT09IHZvaWQgMCkge1xuICAgICAgbW9kdWxlc1BhcmFtcyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBpbnN0YW5jZSA9IHRoaXM7XG4gICAgaWYgKCFpbnN0YW5jZS5tb2R1bGVzKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoaW5zdGFuY2UubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGluc3RhbmNlLm1vZHVsZXNbbW9kdWxlTmFtZV07XG4gICAgICB2YXIgbW9kdWxlUGFyYW1zID0gbW9kdWxlc1BhcmFtc1ttb2R1bGVOYW1lXSB8fCB7fTsgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgICBpZiAobW9kdWxlLm9uICYmIGluc3RhbmNlLm9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZS5vbikuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlRXZlbnROYW1lKSB7XG4gICAgICAgICAgaW5zdGFuY2Uub24obW9kdWxlRXZlbnROYW1lLCBtb2R1bGUub25bbW9kdWxlRXZlbnROYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBNb2R1bGUgY3JlYXRlIGNhbGxiYWNrXG5cblxuICAgICAgaWYgKG1vZHVsZS5jcmVhdGUpIHtcbiAgICAgICAgbW9kdWxlLmNyZWF0ZS5iaW5kKGluc3RhbmNlKShtb2R1bGVQYXJhbXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59OyIsICIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBvbjogZnVuY3Rpb24gb24oZXZlbnRzLCBoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIHZhciBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdW21ldGhvZF0oaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9uY2U6IGZ1bmN0aW9uIG9uY2UoZXZlbnRzLCBoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuXG4gICAgZnVuY3Rpb24gb25jZUhhbmRsZXIoKSB7XG4gICAgICBzZWxmLm9mZihldmVudHMsIG9uY2VIYW5kbGVyKTtcblxuICAgICAgaWYgKG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5KSB7XG4gICAgICAgIGRlbGV0ZSBvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZXIuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfVxuXG4gICAgb25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHkgPSBoYW5kbGVyO1xuICAgIHJldHVybiBzZWxmLm9uKGV2ZW50cywgb25jZUhhbmRsZXIsIHByaW9yaXR5KTtcbiAgfSxcbiAgb25Bbnk6IGZ1bmN0aW9uIG9uQW55KGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgdmFyIG1ldGhvZCA9IHByaW9yaXR5ID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuXG4gICAgaWYgKHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmluZGV4T2YoaGFuZGxlcikgPCAwKSB7XG4gICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVyc1ttZXRob2RdKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvZmZBbnk6IGZ1bmN0aW9uIG9mZkFueShoYW5kbGVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIHZhciBpbmRleCA9IHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiBvZmYoZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SGFuZGxlciwgaW5kZXgpIHtcbiAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyID09PSBoYW5kbGVyIHx8IGV2ZW50SGFuZGxlci5fX2VtaXR0ZXJQcm94eSAmJiBldmVudEhhbmRsZXIuX19lbWl0dGVyUHJveHkgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIGVtaXQ6IGZ1bmN0aW9uIGVtaXQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIHZhciBldmVudHM7XG4gICAgdmFyIGRhdGE7XG4gICAgdmFyIGNvbnRleHQ7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF07XG4gICAgICBkYXRhID0gYXJncy5zbGljZSgxLCBhcmdzLmxlbmd0aCk7XG4gICAgICBjb250ZXh0ID0gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRzID0gYXJnc1swXS5ldmVudHM7XG4gICAgICBkYXRhID0gYXJnc1swXS5kYXRhO1xuICAgICAgY29udGV4dCA9IGFyZ3NbMF0uY29udGV4dCB8fCBzZWxmO1xuICAgIH1cblxuICAgIGRhdGEudW5zaGlmdChjb250ZXh0KTtcbiAgICB2YXIgZXZlbnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiBldmVudHMuc3BsaXQoJyAnKTtcbiAgICBldmVudHNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgW2V2ZW50XS5jb25jYXQoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxufTsiLCAiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciB3aWR0aDtcbiAgdmFyIGhlaWdodDtcbiAgdmFyICRlbCA9IHN3aXBlci4kZWw7XG5cbiAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zLndpZHRoICE9PSAndW5kZWZpbmVkJyAmJiBzd2lwZXIucGFyYW1zLndpZHRoICE9PSBudWxsKSB7XG4gICAgd2lkdGggPSBzd2lwZXIucGFyYW1zLndpZHRoO1xuICB9IGVsc2Uge1xuICAgIHdpZHRoID0gJGVsWzBdLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dpcGVyLnBhcmFtcy5oZWlnaHQgIT09IG51bGwpIHtcbiAgICBoZWlnaHQgPSBzd2lwZXIucGFyYW1zLmhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBoZWlnaHQgPSAkZWxbMF0uY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgaWYgKHdpZHRoID09PSAwICYmIHN3aXBlci5pc0hvcml6b250YWwoKSB8fCBoZWlnaHQgPT09IDAgJiYgc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBTdWJ0cmFjdCBwYWRkaW5nc1xuXG5cbiAgd2lkdGggPSB3aWR0aCAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctbGVmdCcpIHx8IDAsIDEwKSAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLCAxMCk7XG4gIGhlaWdodCA9IGhlaWdodCAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctdG9wJykgfHwgMCwgMTApIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1ib3R0b20nKSB8fCAwLCAxMCk7XG4gIGlmIChOdW1iZXIuaXNOYU4od2lkdGgpKSB3aWR0aCA9IDA7XG4gIGlmIChOdW1iZXIuaXNOYU4oaGVpZ2h0KSkgaGVpZ2h0ID0gMDtcbiAgZXh0ZW5kKHN3aXBlciwge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBzaXplOiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB3aWR0aCA6IGhlaWdodFxuICB9KTtcbn0iLCAiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTbGlkZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gIHZhciBnZXREaXJlY3Rpb25MYWJlbCA9IGZ1bmN0aW9uIGdldERpcmVjdGlvbkxhYmVsKHByb3BlcnR5KSB7XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0gLy8gcHJldHRpZXItaWdub3JlXG5cblxuICAgIHJldHVybiB7XG4gICAgICAnd2lkdGgnOiAnaGVpZ2h0JyxcbiAgICAgICdtYXJnaW4tdG9wJzogJ21hcmdpbi1sZWZ0JyxcbiAgICAgICdtYXJnaW4tYm90dG9tICc6ICdtYXJnaW4tcmlnaHQnLFxuICAgICAgJ21hcmdpbi1sZWZ0JzogJ21hcmdpbi10b3AnLFxuICAgICAgJ21hcmdpbi1yaWdodCc6ICdtYXJnaW4tYm90dG9tJyxcbiAgICAgICdwYWRkaW5nLWxlZnQnOiAncGFkZGluZy10b3AnLFxuICAgICAgJ3BhZGRpbmctcmlnaHQnOiAncGFkZGluZy1ib3R0b20nLFxuICAgICAgJ21hcmdpblJpZ2h0JzogJ21hcmdpbkJvdHRvbSdcbiAgICB9W3Byb3BlcnR5XTtcbiAgfTtcblxuICB2YXIgZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uIGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUobm9kZSwgbGFiZWwpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChub2RlLmdldFByb3BlcnR5VmFsdWUoZ2V0RGlyZWN0aW9uTGFiZWwobGFiZWwpKSB8fCAwKTtcbiAgfTtcblxuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgc3dpcGVyU2l6ZSA9IHN3aXBlci5zaXplLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIHdyb25nUlRMID0gc3dpcGVyLndyb25nUlRMO1xuICB2YXIgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgdmFyIHByZXZpb3VzU2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICB2YXIgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcyk7XG4gIHZhciBzbGlkZXNMZW5ndGggPSBpc1ZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc2xpZGVzLmxlbmd0aDtcbiAgdmFyIHNuYXBHcmlkID0gW107XG4gIHZhciBzbGlkZXNHcmlkID0gW107XG4gIHZhciBzbGlkZXNTaXplc0dyaWQgPSBbXTtcblxuICBmdW5jdGlvbiBzbGlkZXNGb3JNYXJnaW4oc2xpZGVFbCwgc2xpZGVJbmRleCkge1xuICAgIGlmICghcGFyYW1zLmNzc01vZGUpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHNsaWRlSW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZTtcblxuICBpZiAodHlwZW9mIG9mZnNldEJlZm9yZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUuY2FsbChzd2lwZXIpO1xuICB9XG5cbiAgdmFyIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyO1xuXG4gIGlmICh0eXBlb2Ygb2Zmc2V0QWZ0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvZmZzZXRBZnRlciA9IHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlci5jYWxsKHN3aXBlcik7XG4gIH1cblxuICB2YXIgcHJldmlvdXNTbmFwR3JpZExlbmd0aCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gIHZhciBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGggPSBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGg7XG4gIHZhciBzcGFjZUJldHdlZW4gPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICB2YXIgc2xpZGVQb3NpdGlvbiA9IC1vZmZzZXRCZWZvcmU7XG4gIHZhciBwcmV2U2xpZGVTaXplID0gMDtcbiAgdmFyIGluZGV4ID0gMDtcblxuICBpZiAodHlwZW9mIHN3aXBlclNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwICogc3dpcGVyU2l6ZTtcbiAgfVxuXG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IC1zcGFjZUJldHdlZW47IC8vIHJlc2V0IG1hcmdpbnNcblxuICBpZiAocnRsKSBzbGlkZXMuY3NzKHtcbiAgICBtYXJnaW5MZWZ0OiAnJyxcbiAgICBtYXJnaW5Ub3A6ICcnXG4gIH0pO2Vsc2Ugc2xpZGVzLmNzcyh7XG4gICAgbWFyZ2luUmlnaHQ6ICcnLFxuICAgIG1hcmdpbkJvdHRvbTogJydcbiAgfSk7XG4gIHZhciBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgIGlmIChNYXRoLmZsb29yKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pID09PSBzbGlkZXNMZW5ndGggLyBzd2lwZXIucGFyYW1zLnNsaWRlc1BlckNvbHVtbikge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IHNsaWRlc0xlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGguY2VpbChzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgcGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdyb3cnKSB7XG4gICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5tYXgoc2xpZGVzTnVtYmVyRXZlblRvUm93cywgcGFyYW1zLnNsaWRlc1BlclZpZXcgKiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcbiAgICB9XG4gIH0gLy8gQ2FsYyBzbGlkZXNcblxuXG4gIHZhciBzbGlkZVNpemU7XG4gIHZhciBzbGlkZXNQZXJDb2x1bW4gPSBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uO1xuICB2YXIgc2xpZGVzUGVyUm93ID0gc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcbiAgdmFyIG51bUZ1bGxDb2x1bW5zID0gTWF0aC5mbG9vcihzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVTaXplID0gMDtcbiAgICB2YXIgc2xpZGUgPSBzbGlkZXMuZXEoaSk7XG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgIC8vIFNldCBzbGlkZXMgb3JkZXJcbiAgICAgIHZhciBuZXdTbGlkZU9yZGVySW5kZXggPSB2b2lkIDA7XG4gICAgICB2YXIgY29sdW1uID0gdm9pZCAwO1xuICAgICAgdmFyIHJvdyA9IHZvaWQgMDtcblxuICAgICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93JyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxKSB7XG4gICAgICAgIHZhciBncm91cEluZGV4ID0gTWF0aC5mbG9vcihpIC8gKHBhcmFtcy5zbGlkZXNQZXJHcm91cCAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pKTtcbiAgICAgICAgdmFyIHNsaWRlSW5kZXhJbkdyb3VwID0gaSAtIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gKiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgKiBncm91cEluZGV4O1xuICAgICAgICB2YXIgY29sdW1uc0luR3JvdXAgPSBncm91cEluZGV4ID09PSAwID8gcGFyYW1zLnNsaWRlc1Blckdyb3VwIDogTWF0aC5taW4oTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSBncm91cEluZGV4ICogc2xpZGVzUGVyQ29sdW1uICogcGFyYW1zLnNsaWRlc1Blckdyb3VwKSAvIHNsaWRlc1BlckNvbHVtbiksIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3Ioc2xpZGVJbmRleEluR3JvdXAgLyBjb2x1bW5zSW5Hcm91cCk7XG4gICAgICAgIGNvbHVtbiA9IHNsaWRlSW5kZXhJbkdyb3VwIC0gcm93ICogY29sdW1uc0luR3JvdXAgKyBncm91cEluZGV4ICogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgICAgICBuZXdTbGlkZU9yZGVySW5kZXggPSBjb2x1bW4gKyByb3cgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gc2xpZGVzUGVyQ29sdW1uO1xuICAgICAgICBzbGlkZS5jc3Moe1xuICAgICAgICAgICctd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICctbW96LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICctbXMtZmxleC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAnLXdlYmtpdC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICBvcmRlcjogbmV3U2xpZGVPcmRlckluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihpIC8gc2xpZGVzUGVyQ29sdW1uKTtcbiAgICAgICAgcm93ID0gaSAtIGNvbHVtbiAqIHNsaWRlc1BlckNvbHVtbjtcblxuICAgICAgICBpZiAoY29sdW1uID4gbnVtRnVsbENvbHVtbnMgfHwgY29sdW1uID09PSBudW1GdWxsQ29sdW1ucyAmJiByb3cgPT09IHNsaWRlc1BlckNvbHVtbiAtIDEpIHtcbiAgICAgICAgICByb3cgKz0gMTtcblxuICAgICAgICAgIGlmIChyb3cgPj0gc2xpZGVzUGVyQ29sdW1uKSB7XG4gICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgY29sdW1uICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3cgPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJSb3cpO1xuICAgICAgICBjb2x1bW4gPSBpIC0gcm93ICogc2xpZGVzUGVyUm93O1xuICAgICAgfVxuXG4gICAgICBzbGlkZS5jc3MoZ2V0RGlyZWN0aW9uTGFiZWwoJ21hcmdpbi10b3AnKSwgcm93ICE9PSAwICYmIHBhcmFtcy5zcGFjZUJldHdlZW4gJiYgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIik7XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgdmFyIHNsaWRlU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2xpZGVbMF0sIG51bGwpO1xuICAgICAgdmFyIGN1cnJlbnRUcmFuc2Zvcm0gPSBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICB2YXIgY3VycmVudFdlYktpdFRyYW5zZm9ybSA9IHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcblxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICAgIHNsaWRlU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlLm91dGVyV2lkdGgodHJ1ZSkgOiBzbGlkZS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB2YXIgd2lkdGggPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnd2lkdGgnKTtcbiAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnbWFyZ2luLWxlZnQnKTtcbiAgICAgICAgdmFyIG1hcmdpblJpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1yaWdodCcpO1xuICAgICAgICB2YXIgYm94U2l6aW5nID0gc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ2JveC1zaXppbmcnKTtcblxuICAgICAgICBpZiAoYm94U2l6aW5nICYmIGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF9zbGlkZSQgPSBzbGlkZVswXSxcbiAgICAgICAgICAgICAgY2xpZW50V2lkdGggPSBfc2xpZGUkLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICBvZmZzZXRXaWR0aCA9IF9zbGlkZSQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodCArIChvZmZzZXRXaWR0aCAtIGNsaWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50VHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBjdXJyZW50V2ViS2l0VHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZVNpemUgPSAoc3dpcGVyU2l6ZSAtIChwYXJhbXMuc2xpZGVzUGVyVmlldyAtIDEpICogc3BhY2VCZXR3ZWVuKSAvIHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcblxuICAgICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGVbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gc2xpZGVTaXplICsgXCJweFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzbGlkZXNbaV0pIHtcbiAgICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgfVxuXG4gICAgc2xpZGVzU2l6ZXNHcmlkLnB1c2goc2xpZGVTaXplKTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplIC8gMiArIHByZXZTbGlkZVNpemUgLyAyICsgc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKHByZXZTbGlkZVNpemUgPT09IDAgJiYgaSAhPT0gMCkgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gLSBzd2lwZXJTaXplIC8gMiAtIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChpID09PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKE1hdGguYWJzKHNsaWRlUG9zaXRpb24pIDwgMSAvIDEwMDApIHNsaWRlUG9zaXRpb24gPSAwO1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlUG9zaXRpb24gPSBNYXRoLmZsb29yKHNsaWRlUG9zaXRpb24pO1xuICAgICAgaWYgKGluZGV4ICUgcGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAwKSBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoKGluZGV4IC0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGluZGV4KSkgJSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAwKSBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgfVxuXG4gICAgc3dpcGVyLnZpcnR1YWxTaXplICs9IHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICBwcmV2U2xpZGVTaXplID0gc2xpZGVTaXplO1xuICAgIGluZGV4ICs9IDE7XG4gIH1cblxuICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLm1heChzd2lwZXIudmlydHVhbFNpemUsIHN3aXBlclNpemUpICsgb2Zmc2V0QWZ0ZXI7XG4gIHZhciBuZXdTbGlkZXNHcmlkO1xuXG4gIGlmIChydGwgJiYgd3JvbmdSVEwgJiYgKHBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcGFyYW1zLmVmZmVjdCA9PT0gJ2NvdmVyZmxvdycpKSB7XG4gICAgJHdyYXBwZXJFbC5jc3Moe1xuICAgICAgd2lkdGg6IHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKyBcInB4XCJcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2V0V3JhcHBlclNpemUpIHtcbiAgICB2YXIgXyR3cmFwcGVyRWwkY3NzO1xuXG4gICAgJHdyYXBwZXJFbC5jc3MoKF8kd3JhcHBlckVsJGNzcyA9IHt9LCBfJHdyYXBwZXJFbCRjc3NbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIiwgXyR3cmFwcGVyRWwkY3NzKSk7XG4gIH1cblxuICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICB2YXIgXyR3cmFwcGVyRWwkY3NzMjtcblxuICAgIHN3aXBlci52aXJ0dWFsU2l6ZSA9IChzbGlkZVNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuKSAqIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3M7XG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5jZWlsKHN3aXBlci52aXJ0dWFsU2l6ZSAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pIC0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgICAkd3JhcHBlckVsLmNzcygoXyR3cmFwcGVyRWwkY3NzMiA9IHt9LCBfJHdyYXBwZXJFbCRjc3MyW2dldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXSA9IHN3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKyBcInB4XCIsIF8kd3JhcHBlckVsJGNzczIpKTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIG5ld1NsaWRlc0dyaWQgPSBbXTtcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHNuYXBHcmlkLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgICAgICB2YXIgc2xpZGVzR3JpZEl0ZW0gPSBzbmFwR3JpZFtfaV07XG4gICAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgICBpZiAoc25hcEdyaWRbX2ldIDwgc3dpcGVyLnZpcnR1YWxTaXplICsgc25hcEdyaWRbMF0pIG5ld1NsaWRlc0dyaWQucHVzaChzbGlkZXNHcmlkSXRlbSk7XG4gICAgICB9XG5cbiAgICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICB9XG4gIH0gLy8gUmVtb3ZlIGxhc3QgZ3JpZCBlbGVtZW50cyBkZXBlbmRpbmcgb24gd2lkdGhcblxuXG4gIGlmICghcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgc25hcEdyaWQubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICAgdmFyIF9zbGlkZXNHcmlkSXRlbSA9IHNuYXBHcmlkW19pMl07XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3RocykgX3NsaWRlc0dyaWRJdGVtID0gTWF0aC5mbG9vcihfc2xpZGVzR3JpZEl0ZW0pO1xuXG4gICAgICBpZiAoc25hcEdyaWRbX2kyXSA8PSBzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSB7XG4gICAgICAgIG5ld1NsaWRlc0dyaWQucHVzaChfc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcblxuICAgIGlmIChNYXRoLmZsb29yKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIC0gTWF0aC5mbG9vcihzbmFwR3JpZFtzbmFwR3JpZC5sZW5ndGggLSAxXSkgPiAxKSB7XG4gICAgICBzbmFwR3JpZC5wdXNoKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzbmFwR3JpZC5sZW5ndGggPT09IDApIHNuYXBHcmlkID0gWzBdO1xuXG4gIGlmIChwYXJhbXMuc3BhY2VCZXR3ZWVuICE9PSAwKSB7XG4gICAgdmFyIF9zbGlkZXMkZmlsdGVyJGNzcztcblxuICAgIHZhciBrZXkgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgcnRsID8gJ21hcmdpbkxlZnQnIDogZ2V0RGlyZWN0aW9uTGFiZWwoJ21hcmdpblJpZ2h0Jyk7XG4gICAgc2xpZGVzLmZpbHRlcihzbGlkZXNGb3JNYXJnaW4pLmNzcygoX3NsaWRlcyRmaWx0ZXIkY3NzID0ge30sIF9zbGlkZXMkZmlsdGVyJGNzc1trZXldID0gc3BhY2VCZXR3ZWVuICsgXCJweFwiLCBfc2xpZGVzJGZpbHRlciRjc3MpKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzQm91bmRzKSB7XG4gICAgdmFyIGFsbFNsaWRlc1NpemUgPSAwO1xuICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZVNpemVWYWx1ZSkge1xuICAgICAgYWxsU2xpZGVzU2l6ZSArPSBzbGlkZVNpemVWYWx1ZSArIChwYXJhbXMuc3BhY2VCZXR3ZWVuID8gcGFyYW1zLnNwYWNlQmV0d2VlbiA6IDApO1xuICAgIH0pO1xuICAgIGFsbFNsaWRlc1NpemUgLT0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgICB2YXIgbWF4U25hcCA9IGFsbFNsaWRlc1NpemUgLSBzd2lwZXJTaXplO1xuICAgIHNuYXBHcmlkID0gc25hcEdyaWQubWFwKGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICBpZiAoc25hcCA8IDApIHJldHVybiAtb2Zmc2V0QmVmb3JlO1xuICAgICAgaWYgKHNuYXAgPiBtYXhTbmFwKSByZXR1cm4gbWF4U25hcCArIG9mZnNldEFmdGVyO1xuICAgICAgcmV0dXJuIHNuYXA7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNlbnRlckluc3VmZmljaWVudFNsaWRlcykge1xuICAgIHZhciBfYWxsU2xpZGVzU2l6ZSA9IDA7XG4gICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlU2l6ZVZhbHVlKSB7XG4gICAgICBfYWxsU2xpZGVzU2l6ZSArPSBzbGlkZVNpemVWYWx1ZSArIChwYXJhbXMuc3BhY2VCZXR3ZWVuID8gcGFyYW1zLnNwYWNlQmV0d2VlbiA6IDApO1xuICAgIH0pO1xuICAgIF9hbGxTbGlkZXNTaXplIC09IHBhcmFtcy5zcGFjZUJldHdlZW47XG5cbiAgICBpZiAoX2FsbFNsaWRlc1NpemUgPCBzd2lwZXJTaXplKSB7XG4gICAgICB2YXIgYWxsU2xpZGVzT2Zmc2V0ID0gKHN3aXBlclNpemUgLSBfYWxsU2xpZGVzU2l6ZSkgLyAyO1xuICAgICAgc25hcEdyaWQuZm9yRWFjaChmdW5jdGlvbiAoc25hcCwgc25hcEluZGV4KSB7XG4gICAgICAgIHNuYXBHcmlkW3NuYXBJbmRleF0gPSBzbmFwIC0gYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgICBzbGlkZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNuYXAsIHNuYXBJbmRleCkge1xuICAgICAgICBzbGlkZXNHcmlkW3NuYXBJbmRleF0gPSBzbmFwICsgYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZXh0ZW5kKHN3aXBlciwge1xuICAgIHNsaWRlczogc2xpZGVzLFxuICAgIHNuYXBHcmlkOiBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkOiBzbGlkZXNHcmlkLFxuICAgIHNsaWRlc1NpemVzR3JpZDogc2xpZGVzU2l6ZXNHcmlkXG4gIH0pO1xuXG4gIGlmIChzbGlkZXNMZW5ndGggIT09IHByZXZpb3VzU2xpZGVzTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0xlbmd0aENoYW5nZScpO1xuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbmFwR3JpZExlbmd0aCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgc3dpcGVyLmVtaXQoJ3NuYXBHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc2xpZGVzR3JpZC5sZW5ndGggIT09IHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgfVxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVBdXRvSGVpZ2h0KHNwZWVkKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgYWN0aXZlU2xpZGVzID0gW107XG4gIHZhciBuZXdIZWlnaHQgPSAwO1xuICB2YXIgaTtcblxuICBpZiAodHlwZW9mIHNwZWVkID09PSAnbnVtYmVyJykge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgfSBlbHNlIGlmIChzcGVlZCA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpO1xuICB9IC8vIEZpbmQgc2xpZGVzIGN1cnJlbnRseSBpbiB2aWV3XG5cblxuICBpZiAoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzd2lwZXIudmlzaWJsZVNsaWRlcy5lYWNoKGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IE1hdGguY2VpbChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcpOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4ICsgaTtcbiAgICAgICAgaWYgKGluZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzd2lwZXIuc2xpZGVzLmVxKGluZGV4KVswXSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KVswXSk7XG4gIH0gLy8gRmluZCBuZXcgaGVpZ2h0IGZyb20gaGlnaGVzdCBzbGlkZSBpbiB2aWV3XG5cblxuICBmb3IgKGkgPSAwOyBpIDwgYWN0aXZlU2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBhY3RpdmVTbGlkZXNbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gYWN0aXZlU2xpZGVzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld0hlaWdodCA9IGhlaWdodCA+IG5ld0hlaWdodCA/IGhlaWdodCA6IG5ld0hlaWdodDtcbiAgICB9XG4gIH0gLy8gVXBkYXRlIEhlaWdodFxuXG5cbiAgaWYgKG5ld0hlaWdodCkgc3dpcGVyLiR3cmFwcGVyRWwuY3NzKCdoZWlnaHQnLCBuZXdIZWlnaHQgKyBcInB4XCIpO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTbGlkZXNPZmZzZXQoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZU9mZnNldCA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlc1tpXS5vZmZzZXRMZWZ0IDogc2xpZGVzW2ldLm9mZnNldFRvcDtcbiAgfVxufSIsICJpbXBvcnQgJCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKSB7XG4gIGlmICh0cmFuc2xhdGUgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZSA9IHRoaXMgJiYgdGhpcy50cmFuc2xhdGUgfHwgMDtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICBpZiAoc2xpZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgdmFyIG9mZnNldENlbnRlciA9IC10cmFuc2xhdGU7XG4gIGlmIChydGwpIG9mZnNldENlbnRlciA9IHRyYW5zbGF0ZTsgLy8gVmlzaWJsZSBTbGlkZXNcblxuICBzbGlkZXMucmVtb3ZlQ2xhc3MocGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzID0gW107XG4gIHN3aXBlci52aXNpYmxlU2xpZGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgc2xpZGUgPSBzbGlkZXNbaV07XG4gICAgdmFyIHNsaWRlUHJvZ3Jlc3MgPSAob2Zmc2V0Q2VudGVyICsgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IDApIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQpIC8gKHNsaWRlLnN3aXBlclNsaWRlU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pO1xuXG4gICAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkgfHwgcGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICB2YXIgc2xpZGVCZWZvcmUgPSAtKG9mZnNldENlbnRlciAtIHNsaWRlLnN3aXBlclNsaWRlT2Zmc2V0KTtcbiAgICAgIHZhciBzbGlkZUFmdGVyID0gc2xpZGVCZWZvcmUgKyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgICAgdmFyIGlzVmlzaWJsZSA9IHNsaWRlQmVmb3JlID49IDAgJiYgc2xpZGVCZWZvcmUgPCBzd2lwZXIuc2l6ZSAtIDEgfHwgc2xpZGVBZnRlciA+IDEgJiYgc2xpZGVBZnRlciA8PSBzd2lwZXIuc2l6ZSB8fCBzbGlkZUJlZm9yZSA8PSAwICYmIHNsaWRlQWZ0ZXIgPj0gc3dpcGVyLnNpemU7XG5cbiAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICBzbGlkZXMuZXEoaSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzbGlkZS5wcm9ncmVzcyA9IHJ0bCA/IC1zbGlkZVByb2dyZXNzIDogc2xpZGVQcm9ncmVzcztcbiAgfVxuXG4gIHN3aXBlci52aXNpYmxlU2xpZGVzID0gJChzd2lwZXIudmlzaWJsZVNsaWRlcyk7XG59IiwgImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICBpZiAodHlwZW9mIHRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbXVsdGlwbGllciA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyAtMSA6IDE7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgdHJhbnNsYXRlID0gc3dpcGVyICYmIHN3aXBlci50cmFuc2xhdGUgJiYgc3dpcGVyLnRyYW5zbGF0ZSAqIG11bHRpcGxpZXIgfHwgMDtcbiAgfVxuXG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIHZhciBwcm9ncmVzcyA9IHN3aXBlci5wcm9ncmVzcyxcbiAgICAgIGlzQmVnaW5uaW5nID0gc3dpcGVyLmlzQmVnaW5uaW5nLFxuICAgICAgaXNFbmQgPSBzd2lwZXIuaXNFbmQ7XG4gIHZhciB3YXNCZWdpbm5pbmcgPSBpc0JlZ2lubmluZztcbiAgdmFyIHdhc0VuZCA9IGlzRW5kO1xuXG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIHByb2dyZXNzID0gMDtcbiAgICBpc0JlZ2lubmluZyA9IHRydWU7XG4gICAgaXNFbmQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgICBpc0JlZ2lubmluZyA9IHByb2dyZXNzIDw9IDA7XG4gICAgaXNFbmQgPSBwcm9ncmVzcyA+PSAxO1xuICB9XG5cbiAgZXh0ZW5kKHN3aXBlciwge1xuICAgIHByb2dyZXNzOiBwcm9ncmVzcyxcbiAgICBpc0JlZ2lubmluZzogaXNCZWdpbm5pbmcsXG4gICAgaXNFbmQ6IGlzRW5kXG4gIH0pO1xuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSB8fCBwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmF1dG9IZWlnaHQpIHN3aXBlci51cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpO1xuXG4gIGlmIChpc0JlZ2lubmluZyAmJiAhd2FzQmVnaW5uaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWNoQmVnaW5uaW5nIHRvRWRnZScpO1xuICB9XG5cbiAgaWYgKGlzRW5kICYmICF3YXNFbmQpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hFbmQgdG9FZGdlJyk7XG4gIH1cblxuICBpZiAod2FzQmVnaW5uaW5nICYmICFpc0JlZ2lubmluZyB8fCB3YXNFbmQgJiYgIWlzRW5kKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2Zyb21FZGdlJyk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgncHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc0NsYXNzZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHJlYWxJbmRleCA9IHN3aXBlci5yZWFsSW5kZXg7XG4gIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBzbGlkZXMucmVtb3ZlQ2xhc3MocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZU5leHRDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlUHJldkNsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICB2YXIgYWN0aXZlU2xpZGU7XG5cbiAgaWYgKGlzVmlydHVhbCkge1xuICAgIGFjdGl2ZVNsaWRlID0gc3dpcGVyLiR3cmFwcGVyRWwuZmluZChcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgYWN0aXZlSW5kZXggKyBcIlxcXCJdXCIpO1xuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlID0gc2xpZGVzLmVxKGFjdGl2ZUluZGV4KTtcbiAgfSAvLyBBY3RpdmUgY2xhc3Nlc1xuXG5cbiAgYWN0aXZlU2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xuICAgIGlmIChhY3RpdmVTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyByZWFsSW5kZXggKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgIH1cbiAgfSAvLyBOZXh0IFNsaWRlXG5cblxuICB2YXIgbmV4dFNsaWRlID0gYWN0aXZlU2xpZGUubmV4dEFsbChcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKS5lcSgwKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuXG4gIGlmIChwYXJhbXMubG9vcCAmJiBuZXh0U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgbmV4dFNsaWRlID0gc2xpZGVzLmVxKDApO1xuICAgIG5leHRTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICB9IC8vIFByZXYgU2xpZGVcblxuXG4gIHZhciBwcmV2U2xpZGUgPSBhY3RpdmVTbGlkZS5wcmV2QWxsKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wICYmIHByZXZTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBwcmV2U2xpZGUgPSBzbGlkZXMuZXEoLTEpO1xuICAgIHByZXZTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgLy8gRHVwbGljYXRlIHRvIGFsbCBsb29wZWQgc2xpZGVzXG4gICAgaWYgKG5leHRTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBuZXh0U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIG5leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgIH1cblxuICAgIGlmIChwcmV2U2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIjpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcHJldlNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuZW1pdFNsaWRlc0NsYXNzZXMoKTtcbn0iLCAiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQWN0aXZlSW5kZXgobmV3QWN0aXZlSW5kZXgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICB2YXIgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHByZXZpb3VzUmVhbEluZGV4ID0gc3dpcGVyLnJlYWxJbmRleCxcbiAgICAgIHByZXZpb3VzU25hcEluZGV4ID0gc3dpcGVyLnNuYXBJbmRleDtcbiAgdmFyIGFjdGl2ZUluZGV4ID0gbmV3QWN0aXZlSW5kZXg7XG4gIHZhciBzbmFwSW5kZXg7XG5cbiAgaWYgKHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzbGlkZXNHcmlkW2kgKyAxXSAtIChzbGlkZXNHcmlkW2kgKyAxXSAtIHNsaWRlc0dyaWRbaV0pIC8gMikge1xuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzbGlkZXNHcmlkW2kgKyAxXSkge1xuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0pIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgfVxuICAgIH0gLy8gTm9ybWFsaXplIHNsaWRlSW5kZXhcblxuXG4gICAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgICBpZiAoYWN0aXZlSW5kZXggPCAwIHx8IHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIGFjdGl2ZUluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBpZiAoc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpID49IDApIHtcbiAgICBzbmFwSW5kZXggPSBzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNraXAgPSBNYXRoLm1pbihwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBhY3RpdmVJbmRleCk7XG4gICAgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKGFjdGl2ZUluZGV4IC0gc2tpcCkgLyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICB9XG5cbiAgaWYgKHNuYXBJbmRleCA+PSBzbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHNuYXBHcmlkLmxlbmd0aCAtIDE7XG5cbiAgaWYgKGFjdGl2ZUluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgaWYgKHNuYXBJbmRleCAhPT0gcHJldmlvdXNTbmFwSW5kZXgpIHtcbiAgICAgIHN3aXBlci5zbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9IC8vIEdldCByZWFsIGluZGV4XG5cblxuICB2YXIgcmVhbEluZGV4ID0gcGFyc2VJbnQoc3dpcGVyLnNsaWRlcy5lcShhY3RpdmVJbmRleCkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSB8fCBhY3RpdmVJbmRleCwgMTApO1xuICBleHRlbmQoc3dpcGVyLCB7XG4gICAgc25hcEluZGV4OiBzbmFwSW5kZXgsXG4gICAgcmVhbEluZGV4OiByZWFsSW5kZXgsXG4gICAgcHJldmlvdXNJbmRleDogcHJldmlvdXNJbmRleCxcbiAgICBhY3RpdmVJbmRleDogYWN0aXZlSW5kZXhcbiAgfSk7XG4gIHN3aXBlci5lbWl0KCdhY3RpdmVJbmRleENoYW5nZScpO1xuICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG5cbiAgaWYgKHByZXZpb3VzUmVhbEluZGV4ICE9PSByZWFsSW5kZXgpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhbEluZGV4Q2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc3dpcGVyLmluaXRpYWxpemVkIHx8IHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlJyk7XG4gIH1cbn0iLCAiaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNsaWNrZWRTbGlkZShlKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyIHNsaWRlID0gJChlLnRhcmdldCkuY2xvc2VzdChcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKVswXTtcbiAgdmFyIHNsaWRlRm91bmQgPSBmYWxzZTtcbiAgdmFyIHNsaWRlSW5kZXg7XG5cbiAgaWYgKHNsaWRlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHtcbiAgICAgICAgc2xpZGVGb3VuZCA9IHRydWU7XG4gICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2xpZGUgJiYgc2xpZGVGb3VuZCkge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSBzbGlkZTtcblxuICAgIGlmIChzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHBhcnNlSW50KCQoc2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLnNsaWRlVG9DbGlja2VkU2xpZGUgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHN3aXBlci5hY3RpdmVJbmRleCkge1xuICAgIHN3aXBlci5zbGlkZVRvQ2xpY2tlZFNsaWRlKCk7XG4gIH1cbn0iLCAiaW1wb3J0IHVwZGF0ZVNpemUgZnJvbSAnLi91cGRhdGVTaXplJztcbmltcG9ydCB1cGRhdGVTbGlkZXMgZnJvbSAnLi91cGRhdGVTbGlkZXMnO1xuaW1wb3J0IHVwZGF0ZUF1dG9IZWlnaHQgZnJvbSAnLi91cGRhdGVBdXRvSGVpZ2h0JztcbmltcG9ydCB1cGRhdGVTbGlkZXNPZmZzZXQgZnJvbSAnLi91cGRhdGVTbGlkZXNPZmZzZXQnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc1Byb2dyZXNzIGZyb20gJy4vdXBkYXRlU2xpZGVzUHJvZ3Jlc3MnO1xuaW1wb3J0IHVwZGF0ZVByb2dyZXNzIGZyb20gJy4vdXBkYXRlUHJvZ3Jlc3MnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc0NsYXNzZXMgZnJvbSAnLi91cGRhdGVTbGlkZXNDbGFzc2VzJztcbmltcG9ydCB1cGRhdGVBY3RpdmVJbmRleCBmcm9tICcuL3VwZGF0ZUFjdGl2ZUluZGV4JztcbmltcG9ydCB1cGRhdGVDbGlja2VkU2xpZGUgZnJvbSAnLi91cGRhdGVDbGlja2VkU2xpZGUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICB1cGRhdGVTaXplOiB1cGRhdGVTaXplLFxuICB1cGRhdGVTbGlkZXM6IHVwZGF0ZVNsaWRlcyxcbiAgdXBkYXRlQXV0b0hlaWdodDogdXBkYXRlQXV0b0hlaWdodCxcbiAgdXBkYXRlU2xpZGVzT2Zmc2V0OiB1cGRhdGVTbGlkZXNPZmZzZXQsXG4gIHVwZGF0ZVNsaWRlc1Byb2dyZXNzOiB1cGRhdGVTbGlkZXNQcm9ncmVzcyxcbiAgdXBkYXRlUHJvZ3Jlc3M6IHVwZGF0ZVByb2dyZXNzLFxuICB1cGRhdGVTbGlkZXNDbGFzc2VzOiB1cGRhdGVTbGlkZXNDbGFzc2VzLFxuICB1cGRhdGVBY3RpdmVJbmRleDogdXBkYXRlQWN0aXZlSW5kZXgsXG4gIHVwZGF0ZUNsaWNrZWRTbGlkZTogdXBkYXRlQ2xpY2tlZFNsaWRlXG59OyIsICJpbXBvcnQgeyBnZXRUcmFuc2xhdGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTd2lwZXJUcmFuc2xhdGUoYXhpcykge1xuICBpZiAoYXhpcyA9PT0gdm9pZCAwKSB7XG4gICAgYXhpcyA9IHRoaXMuaXNIb3Jpem9udGFsKCkgPyAneCcgOiAneSc7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgdHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZSxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcblxuICBpZiAocGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICByZXR1cm4gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybiB0cmFuc2xhdGU7XG4gIH1cblxuICB2YXIgY3VycmVudFRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZSgkd3JhcHBlckVsWzBdLCBheGlzKTtcbiAgaWYgKHJ0bCkgY3VycmVudFRyYW5zbGF0ZSA9IC1jdXJyZW50VHJhbnNsYXRlO1xuICByZXR1cm4gY3VycmVudFRyYW5zbGF0ZSB8fCAwO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRUcmFuc2xhdGUodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBwcm9ncmVzcyA9IHN3aXBlci5wcm9ncmVzcztcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7XG4gIHZhciB6ID0gMDtcblxuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgeCA9IHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgeSA9IHRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB3cmFwcGVyRWxbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXggOiAteTtcbiAgfSBlbHNlIGlmICghcGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICAkd3JhcHBlckVsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIFwiICsgeiArIFwicHgpXCIpO1xuICB9XG5cbiAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgc3dpcGVyLnRyYW5zbGF0ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHggOiB5OyAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIHVwZGF0ZSBwcm9ncmVzc1xuXG4gIHZhciBuZXdQcm9ncmVzcztcbiAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuXG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cblxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHByb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWluVHJhbnNsYXRlKCkge1xuICByZXR1cm4gLXRoaXMuc25hcEdyaWRbMF07XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1heFRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkW3RoaXMuc25hcEdyaWQubGVuZ3RoIC0gMV07XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zbGF0ZVRvKHRyYW5zbGF0ZSwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgdHJhbnNsYXRlQm91bmRzLCBpbnRlcm5hbCkge1xuICBpZiAodHJhbnNsYXRlID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGUgPSAwO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0cmFuc2xhdGVCb3VuZHMgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZUJvdW5kcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbWluVHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICB2YXIgbWF4VHJhbnNsYXRlID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICB2YXIgbmV3VHJhbnNsYXRlO1xuICBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA+IG1pblRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWluVHJhbnNsYXRlO2Vsc2UgaWYgKHRyYW5zbGF0ZUJvdW5kcyAmJiB0cmFuc2xhdGUgPCBtYXhUcmFuc2xhdGUpIG5ld1RyYW5zbGF0ZSA9IG1heFRyYW5zbGF0ZTtlbHNlIG5ld1RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTsgLy8gVXBkYXRlIHByb2dyZXNzXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1RyYW5zbGF0ZSk7XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgdmFyIGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IC1uZXdUcmFuc2xhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKHdyYXBwZXJFbC5zY3JvbGxUbykge1xuICAgICAgICB2YXIgX3dyYXBwZXJFbCRzY3JvbGxUbztcblxuICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oKF93cmFwcGVyRWwkc2Nyb2xsVG8gPSB7fSwgX3dyYXBwZXJFbCRzY3JvbGxUb1tpc0ggPyAnbGVmdCcgOiAndG9wJ10gPSAtbmV3VHJhbnNsYXRlLCBfd3JhcHBlckVsJHNjcm9sbFRvLmJlaGF2aW9yID0gJ3Ntb290aCcsIF93cmFwcGVyRWwkc2Nyb2xsVG8pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKCFzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGUpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgICBkZWxldGUgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcblxuICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwgImltcG9ydCBnZXRUcmFuc2xhdGUgZnJvbSAnLi9nZXRUcmFuc2xhdGUnO1xuaW1wb3J0IHNldFRyYW5zbGF0ZSBmcm9tICcuL3NldFRyYW5zbGF0ZSc7XG5pbXBvcnQgbWluVHJhbnNsYXRlIGZyb20gJy4vbWluVHJhbnNsYXRlJztcbmltcG9ydCBtYXhUcmFuc2xhdGUgZnJvbSAnLi9tYXhUcmFuc2xhdGUnO1xuaW1wb3J0IHRyYW5zbGF0ZVRvIGZyb20gJy4vdHJhbnNsYXRlVG8nO1xuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRUcmFuc2xhdGU6IGdldFRyYW5zbGF0ZSxcbiAgc2V0VHJhbnNsYXRlOiBzZXRUcmFuc2xhdGUsXG4gIG1pblRyYW5zbGF0ZTogbWluVHJhbnNsYXRlLFxuICBtYXhUcmFuc2xhdGU6IG1heFRyYW5zbGF0ZSxcbiAgdHJhbnNsYXRlVG86IHRyYW5zbGF0ZVRvXG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKCFzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2l0aW9uJywgZHVyYXRpb24sIGJ5Q29udHJvbGxlcik7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXg7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuXG4gIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gIH1cblxuICB2YXIgZGlyID0gZGlyZWN0aW9uO1xuXG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO2Vsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO2Vsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnKTtcblxuICBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgaWYgKGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnKTtcblxuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfVxuICB9XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXgsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgdmFyIGRpciA9IGRpcmVjdGlvbjtcblxuICBpZiAoIWRpcikge1xuICAgIGlmIChhY3RpdmVJbmRleCA+IHByZXZpb3VzSW5kZXgpIGRpciA9ICduZXh0JztlbHNlIGlmIChhY3RpdmVJbmRleCA8IHByZXZpb3VzSW5kZXgpIGRpciA9ICdwcmV2JztlbHNlIGRpciA9ICdyZXNldCc7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuXG4gIGlmIChydW5DYWxsYmFja3MgJiYgYWN0aXZlSW5kZXggIT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoZGlyID09PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVSZXNldFRyYW5zaXRpb25FbmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJyk7XG5cbiAgICBpZiAoZGlyID09PSAnbmV4dCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZU5leHRUcmFuc2l0aW9uRW5kJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVByZXZUcmFuc2l0aW9uRW5kJyk7XG4gICAgfVxuICB9XG59IiwgImltcG9ydCBzZXRUcmFuc2l0aW9uIGZyb20gJy4vc2V0VHJhbnNpdGlvbic7XG5pbXBvcnQgdHJhbnNpdGlvblN0YXJ0IGZyb20gJy4vdHJhbnNpdGlvblN0YXJ0JztcbmltcG9ydCB0cmFuc2l0aW9uRW5kIGZyb20gJy4vdHJhbnNpdGlvbkVuZCc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldFRyYW5zaXRpb246IHNldFRyYW5zaXRpb24sXG4gIHRyYW5zaXRpb25TdGFydDogdHJhbnNpdGlvblN0YXJ0LFxuICB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kXG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgIGluZGV4ID0gMDtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgaW5kZXggIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlICdpbmRleCcgYXJndW1lbnQgY2Fubm90IGhhdmUgdHlwZSBvdGhlciB0aGFuICdudW1iZXInIG9yICdzdHJpbmcnLiBbXCIgKyB0eXBlb2YgaW5kZXggKyBcIl0gZ2l2ZW4uXCIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3N0cmluZycpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYGluZGV4YCBhcmd1bWVudCBjb252ZXJ0ZWQgZnJvbSBgc3RyaW5nYCB0byBgbnVtYmVyYC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHZhciBpbmRleEFzTnVtYmVyID0gcGFyc2VJbnQoaW5kZXgsIDEwKTtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGBpbmRleGAgYXJndW1lbnQgaXMgYSB2YWxpZCBgbnVtYmVyYFxuICAgICAqIGFmdGVyIGJlaW5nIGNvbnZlcnRlZCBmcm9tIHRoZSBgc3RyaW5nYCB0eXBlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuXG4gICAgdmFyIGlzVmFsaWROdW1iZXIgPSBpc0Zpbml0ZShpbmRleEFzTnVtYmVyKTtcblxuICAgIGlmICghaXNWYWxpZE51bWJlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHBhc3NlZC1pbiAnaW5kZXgnIChzdHJpbmcpIGNvdWxkbid0IGJlIGNvbnZlcnRlZCB0byAnbnVtYmVyJy4gW1wiICsgaW5kZXggKyBcIl0gZ2l2ZW4uXCIpO1xuICAgIH0gLy8gS25vd2luZyB0aGF0IHRoZSBjb252ZXJ0ZWQgYGluZGV4YCBpcyBhIHZhbGlkIG51bWJlcixcbiAgICAvLyB3ZSBjYW4gdXBkYXRlIHRoZSBvcmlnaW5hbCBhcmd1bWVudCdzIHZhbHVlLlxuXG5cbiAgICBpbmRleCA9IGluZGV4QXNOdW1iZXI7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHNsaWRlSW5kZXggPSBpbmRleDtcbiAgaWYgKHNsaWRlSW5kZXggPCAwKSBzbGlkZUluZGV4ID0gMDtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIucHJldmlvdXNJbmRleCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWw7XG5cbiAgaWYgKHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBza2lwID0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIHNsaWRlSW5kZXgpO1xuICB2YXIgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKHNsaWRlSW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcblxuICBpZiAoKGFjdGl2ZUluZGV4IHx8IHBhcmFtcy5pbml0aWFsU2xpZGUgfHwgMCkgPT09IChwcmV2aW91c0luZGV4IHx8IDApICYmIHJ1bkNhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVTbGlkZUNoYW5nZVN0YXJ0Jyk7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRlID0gLXNuYXBHcmlkW3NuYXBJbmRleF07IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpOyAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuXG4gIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSAtTWF0aC5mbG9vcih0cmFuc2xhdGUgKiAxMDApO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRHaXJkID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkW2ldICogMTAwKTtcbiAgICAgIHZhciBub3JtYWxpemVkR3JpZE5leHQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaSArIDFdICogMTAwKTtcblxuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdpcmQgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA8IG5vcm1hbGl6ZWRHcmlkTmV4dCAtIChub3JtYWxpemVkR3JpZE5leHQgLSBub3JtYWxpemVkR2lyZCkgLyAyKSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0KSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdpcmQpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIERpcmVjdGlvbnMgbG9ja3NcblxuXG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgJiYgc2xpZGVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiB0cmFuc2xhdGUgPCBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA8IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHRyYW5zbGF0ZSA+IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlID4gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBpZiAoKGFjdGl2ZUluZGV4IHx8IDApICE9PSBzbGlkZUluZGV4KSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIGRpcmVjdGlvbjtcbiAgaWYgKHNsaWRlSW5kZXggPiBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ25leHQnO2Vsc2UgaWYgKHNsaWRlSW5kZXggPCBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ3ByZXYnO2Vsc2UgZGlyZWN0aW9uID0gJ3Jlc2V0JzsgLy8gVXBkYXRlIEluZGV4XG5cbiAgaWYgKHJ0bCAmJiAtdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlIHx8ICFydGwgJiYgdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlKSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpOyAvLyBVcGRhdGUgSGVpZ2h0XG5cbiAgICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgIGlmIChwYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgdmFyIGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICB2YXIgdCA9IC10cmFuc2xhdGU7XG5cbiAgICBpZiAocnRsKSB7XG4gICAgICB0ID0gd3JhcHBlckVsLnNjcm9sbFdpZHRoIC0gd3JhcHBlckVsLm9mZnNldFdpZHRoIC0gdDtcbiAgICB9XG5cbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSB0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmICh3cmFwcGVyRWwuc2Nyb2xsVG8pIHtcbiAgICAgICAgdmFyIF93cmFwcGVyRWwkc2Nyb2xsVG87XG5cbiAgICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKChfd3JhcHBlckVsJHNjcm9sbFRvID0ge30sIF93cmFwcGVyRWwkc2Nyb2xsVG9baXNIID8gJ2xlZnQnIDogJ3RvcCddID0gdCwgX3dyYXBwZXJFbCRzY3JvbGxUby5iZWhhdmlvciA9ICdzbW9vdGgnLCBfd3JhcHBlckVsJHNjcm9sbFRvKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcblxuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGlmICghc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG4gICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvTG9vcChpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICBpbmRleCA9IDA7XG4gIH1cblxuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBuZXdJbmRleCA9IGluZGV4O1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICBuZXdJbmRleCArPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICB9XG5cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwgIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVOZXh0KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBhbmltYXRpbmcgPSBzd2lwZXIuYW5pbWF0aW5nO1xuICB2YXIgaW5jcmVtZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKGFuaW1hdGluZyAmJiBwYXJhbXMubG9vcFByZXZlbnRzU2xpZGUpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIubG9vcEZpeCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gIH1cblxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4ICsgaW5jcmVtZW50LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwgIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVQcmV2KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBhbmltYXRpbmcgPSBzd2lwZXIuYW5pbWF0aW5nLFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsXG4gICAgICBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICBydGxUcmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChhbmltYXRpbmcgJiYgcGFyYW1zLmxvb3BQcmV2ZW50c1NsaWRlKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmxvb3BGaXgoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICB9XG5cbiAgdmFyIHRyYW5zbGF0ZSA9IHJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBmdW5jdGlvbiBub3JtYWxpemUodmFsKSB7XG4gICAgaWYgKHZhbCA8IDApIHJldHVybiAtTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwpO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSBub3JtYWxpemUodHJhbnNsYXRlKTtcbiAgdmFyIG5vcm1hbGl6ZWRTbmFwR3JpZCA9IHNuYXBHcmlkLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZSh2YWwpO1xuICB9KTtcbiAgdmFyIGN1cnJlbnRTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSldO1xuICB2YXIgcHJldlNuYXAgPSBzbmFwR3JpZFtub3JtYWxpemVkU25hcEdyaWQuaW5kZXhPZihub3JtYWxpemVkVHJhbnNsYXRlKSAtIDFdO1xuXG4gIGlmICh0eXBlb2YgcHJldlNuYXAgPT09ICd1bmRlZmluZWQnICYmIHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc25hcEdyaWQuZm9yRWFjaChmdW5jdGlvbiAoc25hcCkge1xuICAgICAgaWYgKCFwcmV2U25hcCAmJiBub3JtYWxpemVkVHJhbnNsYXRlID49IHNuYXApIHByZXZTbmFwID0gc25hcDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwcmV2SW5kZXg7XG5cbiAgaWYgKHR5cGVvZiBwcmV2U25hcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmV2SW5kZXggPSBzbGlkZXNHcmlkLmluZGV4T2YocHJldlNuYXApO1xuICAgIGlmIChwcmV2SW5kZXggPCAwKSBwcmV2SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggLSAxO1xuICB9XG5cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHByZXZJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsICIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlUmVzZXQoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwgIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUb0Nsb3Nlc3Qoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwsIHRocmVzaG9sZCkge1xuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRocmVzaG9sZCA9PT0gdm9pZCAwKSB7XG4gICAgdGhyZXNob2xkID0gMC41O1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBpbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgdmFyIHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpO1xuICB2YXIgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKGluZGV4IC0gc2tpcCkgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgdmFyIHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG5cbiAgaWYgKHRyYW5zbGF0ZSA+PSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XSkge1xuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZSBpcyBvbiBvciBhZnRlciB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBhZnRlciBpdC5cbiAgICB2YXIgY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICB2YXIgbmV4dFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4ICsgMV07XG5cbiAgICBpZiAodHJhbnNsYXRlIC0gY3VycmVudFNuYXAgPiAobmV4dFNuYXAgLSBjdXJyZW50U25hcCkgKiB0aHJlc2hvbGQpIHtcbiAgICAgIGluZGV4ICs9IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZSBpcyBiZWZvcmUgdGhlIGN1cnJlbnQgc25hcCBpbmRleCwgc28gdGhlIGNob2ljZVxuICAgIC8vIGlzIGJldHdlZW4gdGhlIGN1cnJlbnQgaW5kZXggYW5kIHRoZSBvbmUgYmVmb3JlIGl0LlxuICAgIHZhciBwcmV2U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggLSAxXTtcbiAgICB2YXIgX2N1cnJlbnRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF07XG5cbiAgICBpZiAodHJhbnNsYXRlIC0gcHJldlNuYXAgPD0gKF9jdXJyZW50U25hcCAtIHByZXZTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggLT0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH1cblxuICBpbmRleCA9IE1hdGgubWF4KGluZGV4LCAwKTtcbiAgaW5kZXggPSBNYXRoLm1pbihpbmRleCwgc3dpcGVyLnNsaWRlc0dyaWQubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsICJpbXBvcnQgJCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20nO1xuaW1wb3J0IHsgbmV4dFRpY2sgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvQ2xpY2tlZFNsaWRlKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gIHZhciBzbGlkZXNQZXJWaWV3ID0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gIHZhciBzbGlkZVRvSW5kZXggPSBzd2lwZXIuY2xpY2tlZEluZGV4O1xuICB2YXIgcmVhbEluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgcmVhbEluZGV4ID0gcGFyc2VJbnQoJChzd2lwZXIuY2xpY2tlZFNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG5cbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBpZiAoc2xpZGVUb0luZGV4IDwgc3dpcGVyLmxvb3BlZFNsaWRlcyAtIHNsaWRlc1BlclZpZXcgLyAyIHx8IHNsaWRlVG9JbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcyArIHNsaWRlc1BlclZpZXcgLyAyKSB7XG4gICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgIHNsaWRlVG9JbmRleCA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl06bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpXCIpLmVxKDApLmluZGV4KCk7XG4gICAgICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzbGlkZVRvSW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHNsaWRlc1BlclZpZXcpIHtcbiAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICBzbGlkZVRvSW5kZXggPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyByZWFsSW5kZXggKyBcIlxcXCJdOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVwiKS5lcSgwKS5pbmRleCgpO1xuICAgICAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gIH1cbn0iLCAiaW1wb3J0IHNsaWRlVG8gZnJvbSAnLi9zbGlkZVRvJztcbmltcG9ydCBzbGlkZVRvTG9vcCBmcm9tICcuL3NsaWRlVG9Mb29wJztcbmltcG9ydCBzbGlkZU5leHQgZnJvbSAnLi9zbGlkZU5leHQnO1xuaW1wb3J0IHNsaWRlUHJldiBmcm9tICcuL3NsaWRlUHJldic7XG5pbXBvcnQgc2xpZGVSZXNldCBmcm9tICcuL3NsaWRlUmVzZXQnO1xuaW1wb3J0IHNsaWRlVG9DbG9zZXN0IGZyb20gJy4vc2xpZGVUb0Nsb3Nlc3QnO1xuaW1wb3J0IHNsaWRlVG9DbGlja2VkU2xpZGUgZnJvbSAnLi9zbGlkZVRvQ2xpY2tlZFNsaWRlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2xpZGVUbzogc2xpZGVUbyxcbiAgc2xpZGVUb0xvb3A6IHNsaWRlVG9Mb29wLFxuICBzbGlkZU5leHQ6IHNsaWRlTmV4dCxcbiAgc2xpZGVQcmV2OiBzbGlkZVByZXYsXG4gIHNsaWRlUmVzZXQ6IHNsaWRlUmVzZXQsXG4gIHNsaWRlVG9DbG9zZXN0OiBzbGlkZVRvQ2xvc2VzdCxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogc2xpZGVUb0NsaWNrZWRTbGlkZVxufTsiLCAiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wQ3JlYXRlKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7IC8vIFJlbW92ZSBkdXBsaWNhdGVkIHNsaWRlc1xuXG4gICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpLnJlbW92ZSgpO1xuICB2YXIgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3BGaWxsR3JvdXBXaXRoQmxhbmspIHtcbiAgICB2YXIgYmxhbmtTbGlkZXNOdW0gPSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgLSBzbGlkZXMubGVuZ3RoICUgcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gICAgaWYgKGJsYW5rU2xpZGVzTnVtICE9PSBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxhbmtTbGlkZXNOdW07IGkgKz0gMSkge1xuICAgICAgICB2YXIgYmxhbmtOb2RlID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlQ2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUJsYW5rQ2xhc3MpO1xuICAgICAgICAkd3JhcHBlckVsLmFwcGVuZChibGFua05vZGUpO1xuICAgICAgfVxuXG4gICAgICBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmICFwYXJhbXMubG9vcGVkU2xpZGVzKSBwYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHBhcmFtcy5sb29wZWRTbGlkZXMgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSk7XG4gIHN3aXBlci5sb29wZWRTbGlkZXMgKz0gcGFyYW1zLmxvb3BBZGRpdGlvbmFsU2xpZGVzO1xuXG4gIGlmIChzd2lwZXIubG9vcGVkU2xpZGVzID4gc2xpZGVzLmxlbmd0aCkge1xuICAgIHN3aXBlci5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICB9XG5cbiAgdmFyIHByZXBlbmRTbGlkZXMgPSBbXTtcbiAgdmFyIGFwcGVuZFNsaWRlcyA9IFtdO1xuICBzbGlkZXMuZWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgdmFyIHNsaWRlID0gJChlbCk7XG5cbiAgICBpZiAoaW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzKSB7XG4gICAgICBhcHBlbmRTbGlkZXMucHVzaChlbCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgc2xpZGVzLmxlbmd0aCAmJiBpbmRleCA+PSBzbGlkZXMubGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcykge1xuICAgICAgcHJlcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICB9XG5cbiAgICBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgfSk7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZCgkKGFwcGVuZFNsaWRlc1tfaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG5cbiAgZm9yICh2YXIgX2kyID0gcHJlcGVuZFNsaWRlcy5sZW5ndGggLSAxOyBfaTIgPj0gMDsgX2kyIC09IDEpIHtcbiAgICAkd3JhcHBlckVsLnByZXBlbmQoJChwcmVwZW5kU2xpZGVzW19pMl0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3BGaXgoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICBzd2lwZXIuZW1pdCgnYmVmb3JlTG9vcEZpeCcpO1xuICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgbG9vcGVkU2xpZGVzID0gc3dpcGVyLmxvb3BlZFNsaWRlcyxcbiAgICAgIGFsbG93U2xpZGVQcmV2ID0gc3dpcGVyLmFsbG93U2xpZGVQcmV2LFxuICAgICAgYWxsb3dTbGlkZU5leHQgPSBzd2lwZXIuYWxsb3dTbGlkZU5leHQsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gIHZhciBuZXdJbmRleDtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgdmFyIHNuYXBUcmFuc2xhdGUgPSAtc25hcEdyaWRbYWN0aXZlSW5kZXhdO1xuICB2YXIgZGlmZiA9IHNuYXBUcmFuc2xhdGUgLSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7IC8vIEZpeCBGb3IgTmVnYXRpdmUgT3ZlcnNsaWRpbmdcblxuICBpZiAoYWN0aXZlSW5kZXggPCBsb29wZWRTbGlkZXMpIHtcbiAgICBuZXdJbmRleCA9IHNsaWRlcy5sZW5ndGggLSBsb29wZWRTbGlkZXMgKiAzICsgYWN0aXZlSW5kZXg7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgIHZhciBzbGlkZUNoYW5nZWQgPSBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuXG4gICAgaWYgKHNsaWRlQ2hhbmdlZCAmJiBkaWZmICE9PSAwKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKChydGwgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpIC0gZGlmZik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFjdGl2ZUluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBsb29wZWRTbGlkZXMpIHtcbiAgICAvLyBGaXggRm9yIFBvc2l0aXZlIE92ZXJzbGlkaW5nXG4gICAgbmV3SW5kZXggPSAtc2xpZGVzLmxlbmd0aCArIGFjdGl2ZUluZGV4ICsgbG9vcGVkU2xpZGVzO1xuICAgIG5ld0luZGV4ICs9IGxvb3BlZFNsaWRlcztcblxuICAgIHZhciBfc2xpZGVDaGFuZ2VkID0gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcblxuICAgIGlmIChfc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gIHN3aXBlci5lbWl0KCdsb29wRml4Jyk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3BEZXN0cm95KCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIsLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUJsYW5rQ2xhc3MpLnJlbW92ZSgpO1xuICBzbGlkZXMucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbn0iLCAiaW1wb3J0IGxvb3BDcmVhdGUgZnJvbSAnLi9sb29wQ3JlYXRlJztcbmltcG9ydCBsb29wRml4IGZyb20gJy4vbG9vcEZpeCc7XG5pbXBvcnQgbG9vcERlc3Ryb3kgZnJvbSAnLi9sb29wRGVzdHJveSc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvb3BDcmVhdGU6IGxvb3BDcmVhdGUsXG4gIGxvb3BGaXg6IGxvb3BGaXgsXG4gIGxvb3BEZXN0cm95OiBsb29wRGVzdHJveVxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0R3JhYkN1cnNvcihtb3ZpbmcpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoIHx8IHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIHZhciBlbCA9IHN3aXBlci5lbDtcbiAgZWwuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLXdlYmtpdC1ncmFiYmluZycgOiAnLXdlYmtpdC1ncmFiJztcbiAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJy1tb3otZ3JhYmJpbicgOiAnLW1vei1ncmFiJztcbiAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJ2dyYWJiaW5nJyA6ICdncmFiJztcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5zZXRHcmFiQ3Vyc29yKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICBpZiAoc3dpcGVyLnN1cHBvcnQudG91Y2ggfHwgc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzd2lwZXIuZWwuc3R5bGUuY3Vyc29yID0gJyc7XG59IiwgImltcG9ydCBzZXRHcmFiQ3Vyc29yIGZyb20gJy4vc2V0R3JhYkN1cnNvcic7XG5pbXBvcnQgdW5zZXRHcmFiQ3Vyc29yIGZyb20gJy4vdW5zZXRHcmFiQ3Vyc29yJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0R3JhYkN1cnNvcjogc2V0R3JhYkN1cnNvcixcbiAgdW5zZXRHcmFiQ3Vyc29yOiB1bnNldEdyYWJDdXJzb3Jcbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFNsaWRlKHNsaWRlcykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gIH1cblxuICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzbGlkZXNbaV0pICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIHN3aXBlci5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwZW5kU2xpZGUoc2xpZGVzKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICB9XG5cbiAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyAxO1xuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tpXSkgJHdyYXBwZXJFbC5wcmVwZW5kKHNsaWRlc1tpXSk7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIHNsaWRlcy5sZW5ndGg7XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5wcmVwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIHN3aXBlci5zdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuXG4gIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFNsaWRlKGluZGV4LCBzbGlkZXMpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIHZhciBhY3RpdmVJbmRleEJ1ZmZlciA9IGFjdGl2ZUluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGFjdGl2ZUluZGV4QnVmZmVyIC09IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgc3dpcGVyLnNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyk7XG4gIH1cblxuICB2YXIgYmFzZUxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA8PSAwKSB7XG4gICAgc3dpcGVyLnByZXBlbmRTbGlkZShzbGlkZXMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmRleCA+PSBiYXNlTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmFwcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXIgPiBpbmRleCA/IGFjdGl2ZUluZGV4QnVmZmVyICsgMSA6IGFjdGl2ZUluZGV4QnVmZmVyO1xuICB2YXIgc2xpZGVzQnVmZmVyID0gW107XG5cbiAgZm9yICh2YXIgaSA9IGJhc2VMZW5ndGggLSAxOyBpID49IGluZGV4OyBpIC09IDEpIHtcbiAgICB2YXIgY3VycmVudFNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICBjdXJyZW50U2xpZGUucmVtb3ZlKCk7XG4gICAgc2xpZGVzQnVmZmVyLnVuc2hpZnQoY3VycmVudFNsaWRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgc2xpZGVzLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tfaV0pICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tfaV0pO1xuICAgIH1cblxuICAgIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXIgPiBpbmRleCA/IGFjdGl2ZUluZGV4QnVmZmVyICsgc2xpZGVzLmxlbmd0aCA6IGFjdGl2ZUluZGV4QnVmZmVyO1xuICB9IGVsc2Uge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBzbGlkZXNCdWZmZXIubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc0J1ZmZlcltfaTJdKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgfVxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICB2YXIgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBhY3RpdmVJbmRleEJ1ZmZlciAtPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIHN3aXBlci5zbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuICB9XG5cbiAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXI7XG4gIHZhciBpbmRleFRvUmVtb3ZlO1xuXG4gIGlmICh0eXBlb2Ygc2xpZGVzSW5kZXhlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzSW5kZXhlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzSW5kZXhlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXNbaV07XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgc3dpcGVyLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTtcbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gIH0gZWxzZSB7XG4gICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXM7XG4gICAgaWYgKHN3aXBlci5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHN3aXBlci5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgaWYgKGluZGV4VG9SZW1vdmUgPCBuZXdBY3RpdmVJbmRleCkgbmV3QWN0aXZlSW5kZXggLT0gMTtcbiAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgfVxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVBbGxTbGlkZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVzSW5kZXhlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgfVxuXG4gIHN3aXBlci5yZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKTtcbn0iLCAiaW1wb3J0IGFwcGVuZFNsaWRlIGZyb20gJy4vYXBwZW5kU2xpZGUnO1xuaW1wb3J0IHByZXBlbmRTbGlkZSBmcm9tICcuL3ByZXBlbmRTbGlkZSc7XG5pbXBvcnQgYWRkU2xpZGUgZnJvbSAnLi9hZGRTbGlkZSc7XG5pbXBvcnQgcmVtb3ZlU2xpZGUgZnJvbSAnLi9yZW1vdmVTbGlkZSc7XG5pbXBvcnQgcmVtb3ZlQWxsU2xpZGVzIGZyb20gJy4vcmVtb3ZlQWxsU2xpZGVzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXBwZW5kU2xpZGU6IGFwcGVuZFNsaWRlLFxuICBwcmVwZW5kU2xpZGU6IHByZXBlbmRTbGlkZSxcbiAgYWRkU2xpZGU6IGFkZFNsaWRlLFxuICByZW1vdmVTbGlkZTogcmVtb3ZlU2xpZGUsXG4gIHJlbW92ZUFsbFNsaWRlczogcmVtb3ZlQWxsU2xpZGVzXG59OyIsICJpbXBvcnQgeyBnZXRXaW5kb3csIGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20nO1xuaW1wb3J0IHsgZXh0ZW5kLCBub3cgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcztcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgdmFyICR0YXJnZXRFbCA9ICQoZS50YXJnZXQpO1xuXG4gIGlmIChwYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICd3cmFwcGVyJykge1xuICAgIGlmICghJHRhcmdldEVsLmNsb3Nlc3Qoc3dpcGVyLndyYXBwZXJFbCkubGVuZ3RoKSByZXR1cm47XG4gIH1cblxuICBkYXRhLmlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnO1xuICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKSByZXR1cm47XG4gIGlmICghZGF0YS5pc1RvdWNoRXZlbnQgJiYgJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiA+IDApIHJldHVybjtcbiAgaWYgKGRhdGEuaXNUb3VjaGVkICYmIGRhdGEuaXNNb3ZlZCkgcmV0dXJuOyAvLyBjaGFuZ2UgdGFyZ2V0IGVsIGZvciBzaGFkb3cgcm9vdCBjb21wb25lbmV0XG5cbiAgdmFyIHN3aXBpbmdDbGFzc0hhc1ZhbHVlID0gISFwYXJhbXMubm9Td2lwaW5nQ2xhc3MgJiYgcGFyYW1zLm5vU3dpcGluZ0NsYXNzICE9PSAnJztcblxuICBpZiAoc3dpcGluZ0NsYXNzSGFzVmFsdWUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQuc2hhZG93Um9vdCAmJiBldmVudC5wYXRoICYmIGV2ZW50LnBhdGhbMF0pIHtcbiAgICAkdGFyZ2V0RWwgPSAkKGV2ZW50LnBhdGhbMF0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5ub1N3aXBpbmcgJiYgJHRhcmdldEVsLmNsb3Nlc3QocGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yID8gcGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yIDogXCIuXCIgKyBwYXJhbXMubm9Td2lwaW5nQ2xhc3MpWzBdKSB7XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc3dpcGVIYW5kbGVyKSB7XG4gICAgaWYgKCEkdGFyZ2V0RWwuY2xvc2VzdChwYXJhbXMuc3dpcGVIYW5kbGVyKVswXSkgcmV0dXJuO1xuICB9XG5cbiAgdG91Y2hlcy5jdXJyZW50WCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgdmFyIHN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gIHZhciBzdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZOyAvLyBEbyBOT1Qgc3RhcnQgaWYgaU9TIGVkZ2Ugc3dpcGUgaXMgZGV0ZWN0ZWQuIE90aGVyd2lzZSBpT1MgYXBwIGNhbm5vdCBzd2lwZS10by1nby1iYWNrIGFueW1vcmVcblxuICB2YXIgZWRnZVN3aXBlRGV0ZWN0aW9uID0gcGFyYW1zLmVkZ2VTd2lwZURldGVjdGlvbiB8fCBwYXJhbXMuaU9TRWRnZVN3aXBlRGV0ZWN0aW9uO1xuICB2YXIgZWRnZVN3aXBlVGhyZXNob2xkID0gcGFyYW1zLmVkZ2VTd2lwZVRocmVzaG9sZCB8fCBwYXJhbXMuaU9TRWRnZVN3aXBlVGhyZXNob2xkO1xuXG4gIGlmIChlZGdlU3dpcGVEZXRlY3Rpb24gJiYgKHN0YXJ0WCA8PSBlZGdlU3dpcGVUaHJlc2hvbGQgfHwgc3RhcnRYID49IHdpbmRvdy5pbm5lcldpZHRoIC0gZWRnZVN3aXBlVGhyZXNob2xkKSkge1xuICAgIGlmIChlZGdlU3dpcGVEZXRlY3Rpb24gPT09ICdwcmV2ZW50Jykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGV4dGVuZChkYXRhLCB7XG4gICAgaXNUb3VjaGVkOiB0cnVlLFxuICAgIGlzTW92ZWQ6IGZhbHNlLFxuICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHRydWUsXG4gICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkXG4gIH0pO1xuICB0b3VjaGVzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgdG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XG4gIGRhdGEudG91Y2hTdGFydFRpbWUgPSBub3coKTtcbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSBmYWxzZTtcblxuICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcpIHtcbiAgICB2YXIgcHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgIGlmICgkdGFyZ2V0RWwuaXMoZGF0YS5mb3JtRWxlbWVudHMpKSBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5pcyhkYXRhLmZvcm1FbGVtZW50cykgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gJHRhcmdldEVsWzBdKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG5cbiAgICB2YXIgc2hvdWxkUHJldmVudERlZmF1bHQgPSBwcmV2ZW50RGVmYXVsdCAmJiBzd2lwZXIuYWxsb3dUb3VjaE1vdmUgJiYgcGFyYW1zLnRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDtcblxuICAgIGlmICgocGFyYW1zLnRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0IHx8IHNob3VsZFByZXZlbnREZWZhdWx0KSAmJiAhJHRhcmdldEVsWzBdLmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3RvdWNoU3RhcnQnLCBlKTtcbn0iLCAiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBleHRlbmQsIG5vdyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgdmFyIGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcblxuICBpZiAoIWRhdGEuaXNUb3VjaGVkKSB7XG4gICAgaWYgKGRhdGEuc3RhcnRNb3ZpbmcgJiYgZGF0YS5pc1Njcm9sbGluZykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRhdGEuaXNUb3VjaEV2ZW50ICYmIGUudHlwZSAhPT0gJ3RvdWNobW92ZScpIHJldHVybjtcbiAgdmFyIHRhcmdldFRvdWNoID0gZS50eXBlID09PSAndG91Y2htb3ZlJyAmJiBlLnRhcmdldFRvdWNoZXMgJiYgKGUudGFyZ2V0VG91Y2hlc1swXSB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdKTtcbiAgdmFyIHBhZ2VYID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IHRhcmdldFRvdWNoLnBhZ2VYIDogZS5wYWdlWDtcbiAgdmFyIHBhZ2VZID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IHRhcmdldFRvdWNoLnBhZ2VZIDogZS5wYWdlWTtcblxuICBpZiAoZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlcikge1xuICAgIHRvdWNoZXMuc3RhcnRYID0gcGFnZVg7XG4gICAgdG91Y2hlcy5zdGFydFkgPSBwYWdlWTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbGxvd1RvdWNoTW92ZSkge1xuICAgIC8vIGlzTW92ZWQgPSB0cnVlO1xuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG5cbiAgICBpZiAoZGF0YS5pc1RvdWNoZWQpIHtcbiAgICAgIGV4dGVuZCh0b3VjaGVzLCB7XG4gICAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICAgIHN0YXJ0WTogcGFnZVksXG4gICAgICAgIGN1cnJlbnRYOiBwYWdlWCxcbiAgICAgICAgY3VycmVudFk6IHBhZ2VZXG4gICAgICB9KTtcbiAgICAgIGRhdGEudG91Y2hTdGFydFRpbWUgPSBub3coKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgcGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMgJiYgIXBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci5pc1ZlcnRpY2FsKCkpIHtcbiAgICAgIC8vIFZlcnRpY2FsXG4gICAgICBpZiAocGFnZVkgPCB0b3VjaGVzLnN0YXJ0WSAmJiBzd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSB8fCBwYWdlWSA+IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYWdlWCA8IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VYID4gdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAkKGUudGFyZ2V0KS5pcyhkYXRhLmZvcm1FbGVtZW50cykpIHtcbiAgICAgIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlJywgZSk7XG4gIH1cblxuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm47XG4gIHRvdWNoZXMuY3VycmVudFggPSBwYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IHBhZ2VZO1xuICB2YXIgZGlmZlggPSB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFg7XG4gIHZhciBkaWZmWSA9IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgaWYgKHN3aXBlci5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydChNYXRoLnBvdyhkaWZmWCwgMikgKyBNYXRoLnBvdyhkaWZmWSwgMikpIDwgc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQpIHJldHVybjtcblxuICBpZiAodHlwZW9mIGRhdGEuaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIHRvdWNoQW5nbGU7XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIHRvdWNoZXMuY3VycmVudFkgPT09IHRvdWNoZXMuc3RhcnRZIHx8IHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgdG91Y2hlcy5jdXJyZW50WCA9PT0gdG91Y2hlcy5zdGFydFgpIHtcbiAgICAgIGRhdGEuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkgPj0gMjUpIHtcbiAgICAgICAgdG91Y2hBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5hYnMoZGlmZlkpLCBNYXRoLmFicyhkaWZmWCkpICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZSA6IDkwIC0gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEuc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHRvdWNoZXMuY3VycmVudFggIT09IHRvdWNoZXMuc3RhcnRYIHx8IHRvdWNoZXMuY3VycmVudFkgIT09IHRvdWNoZXMuc3RhcnRZKSB7XG4gICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFkYXRhLnN0YXJ0TW92aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcblxuICBpZiAoIXBhcmFtcy5jc3NNb2RlICYmIGUuY2FuY2VsYWJsZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMudG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uICYmICFwYXJhbXMubmVzdGVkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGlmICghZGF0YS5pc01vdmVkKSB7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgIH1cblxuICAgIGRhdGEuc3RhcnRUcmFuc2xhdGUgPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG5cbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwudHJpZ2dlcignd2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJyk7XG4gICAgfVxuXG4gICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gZmFsc2U7IC8vIEdyYWIgQ3Vyc29yXG5cbiAgICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcih0cnVlKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVyRmlyc3RNb3ZlJywgZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2xpZGVyTW92ZScsIGUpO1xuICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICB2YXIgZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGRpZmZYIDogZGlmZlk7XG4gIHRvdWNoZXMuZGlmZiA9IGRpZmY7XG4gIGRpZmYgKj0gcGFyYW1zLnRvdWNoUmF0aW87XG4gIGlmIChydGwpIGRpZmYgPSAtZGlmZjtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gZGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB2YXIgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gIHZhciByZXNpc3RhbmNlUmF0aW8gPSBwYXJhbXMucmVzaXN0YW5jZVJhdGlvO1xuXG4gIGlmIChwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcykge1xuICAgIHJlc2lzdGFuY2VSYXRpbyA9IDA7XG4gIH1cblxuICBpZiAoZGlmZiA+IDAgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIC0gMSArIE1hdGgucG93KC1zd2lwZXIubWluVHJhbnNsYXRlKCkgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlICsgZGlmZiwgcmVzaXN0YW5jZVJhdGlvKTtcbiAgfSBlbHNlIGlmIChkaWZmIDwgMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgKyAxIC0gTWF0aC5wb3coc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gZGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmYsIHJlc2lzdGFuY2VSYXRpbyk7XG4gIH1cblxuICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlcikge1xuICAgIGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIgPSB0cnVlO1xuICB9IC8vIERpcmVjdGlvbnMgbG9ja3NcblxuXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiAhc3dpcGVyLmFsbG93U2xpZGVOZXh0KSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfSAvLyBUaHJlc2hvbGRcblxuXG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkge1xuICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IHBhcmFtcy50aHJlc2hvbGQgfHwgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgIGlmICghZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSB0cnVlO1xuICAgICAgICB0b3VjaGVzLnN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgdG91Y2hlcy5kaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYIDogdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMuc3RhcnRZO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFwYXJhbXMuZm9sbG93RmluZ2VyIHx8IHBhcmFtcy5jc3NNb2RlKSByZXR1cm47IC8vIFVwZGF0ZSBhY3RpdmUgaW5kZXggaW4gZnJlZSBtb2RlXG5cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSB8fCBwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAvLyBWZWxvY2l0eVxuICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzdGFydFgnIDogJ3N0YXJ0WSddLFxuICAgICAgICB0aW1lOiBkYXRhLnRvdWNoU3RhcnRUaW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICBwb3NpdGlvbjogdG91Y2hlc1tzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnY3VycmVudFgnIDogJ2N1cnJlbnRZJ10sXG4gICAgICB0aW1lOiBub3coKVxuICAgIH0pO1xuICB9IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7IC8vIFVwZGF0ZSB0cmFuc2xhdGVcblxuICBzd2lwZXIuc2V0VHJhbnNsYXRlKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG59IiwgImltcG9ydCB7IG5vdywgbmV4dFRpY2sgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblRvdWNoRW5kKGV2ZW50KSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkO1xuICB2YXIgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuXG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hFbmQnLCBlKTtcbiAgfVxuXG4gIGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcyA9IGZhbHNlO1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5pc01vdmVkICYmIHBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gICAgfVxuXG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfSAvLyBSZXR1cm4gR3JhYiBDdXJzb3JcblxuXG4gIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiBkYXRhLmlzTW92ZWQgJiYgZGF0YS5pc1RvdWNoZWQgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoZmFsc2UpO1xuICB9IC8vIFRpbWUgZGlmZlxuXG5cbiAgdmFyIHRvdWNoRW5kVGltZSA9IG5vdygpO1xuICB2YXIgdGltZURpZmYgPSB0b3VjaEVuZFRpbWUgLSBkYXRhLnRvdWNoU3RhcnRUaW1lOyAvLyBUYXAsIGRvdWJsZVRhcCwgQ2xpY2tcblxuICBpZiAoc3dpcGVyLmFsbG93Q2xpY2spIHtcbiAgICBzd2lwZXIudXBkYXRlQ2xpY2tlZFNsaWRlKGUpO1xuICAgIHN3aXBlci5lbWl0KCd0YXAgY2xpY2snLCBlKTtcblxuICAgIGlmICh0aW1lRGlmZiA8IDMwMCAmJiB0b3VjaEVuZFRpbWUgLSBkYXRhLmxhc3RDbGlja1RpbWUgPCAzMDApIHtcbiAgICAgIHN3aXBlci5lbWl0KCdkb3VibGVUYXAgZG91YmxlQ2xpY2snLCBlKTtcbiAgICB9XG4gIH1cblxuICBkYXRhLmxhc3RDbGlja1RpbWUgPSBub3coKTtcbiAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3dpcGVyLmRlc3Ryb3llZCkgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICB9KTtcblxuICBpZiAoIWRhdGEuaXNUb3VjaGVkIHx8ICFkYXRhLmlzTW92ZWQgfHwgIXN3aXBlci5zd2lwZURpcmVjdGlvbiB8fCB0b3VjaGVzLmRpZmYgPT09IDAgfHwgZGF0YS5jdXJyZW50VHJhbnNsYXRlID09PSBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgdmFyIGN1cnJlbnRQb3M7XG5cbiAgaWYgKHBhcmFtcy5mb2xsb3dGaW5nZXIpIHtcbiAgICBjdXJyZW50UG9zID0gcnRsID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRQb3MgPSAtZGF0YS5jdXJyZW50VHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgIGlmIChjdXJyZW50UG9zIDwgLXN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFBvcyA+IC1zd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzLmxlbmd0aCA8IHNuYXBHcmlkLmxlbmd0aCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbmFwR3JpZC5sZW5ndGggLSAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW0pIHtcbiAgICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgbGFzdE1vdmVFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgdmFyIHZlbG9jaXR5RXZlbnQgPSBkYXRhLnZlbG9jaXRpZXMucG9wKCk7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGxhc3RNb3ZlRXZlbnQucG9zaXRpb24gLSB2ZWxvY2l0eUV2ZW50LnBvc2l0aW9uO1xuICAgICAgICB2YXIgdGltZSA9IGxhc3RNb3ZlRXZlbnQudGltZSAtIHZlbG9jaXR5RXZlbnQudGltZTtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gZGlzdGFuY2UgLyB0aW1lO1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgLz0gMjtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoc3dpcGVyLnZlbG9jaXR5KSA8IHBhcmFtcy5mcmVlTW9kZU1pbmltdW1WZWxvY2l0eSkge1xuICAgICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IDA7XG4gICAgICAgIH0gLy8gdGhpcyBpbXBsaWVzIHRoYXQgdGhlIHVzZXIgc3RvcHBlZCBtb3ZpbmcgYSBmaW5nZXIgdGhlbiByZWxlYXNlZC5cbiAgICAgICAgLy8gVGhlcmUgd291bGQgYmUgbm8gZXZlbnRzIHdpdGggZGlzdGFuY2UgemVybywgc28gdGhlIGxhc3QgZXZlbnQgaXMgc3RhbGUuXG5cblxuICAgICAgICBpZiAodGltZSA+IDE1MCB8fCBub3coKSAtIGxhc3RNb3ZlRXZlbnQudGltZSA+IDMwMCkge1xuICAgICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci52ZWxvY2l0eSAqPSBwYXJhbXMuZnJlZU1vZGVNb21lbnR1bVZlbG9jaXR5UmF0aW87XG4gICAgICBkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID0gMDtcbiAgICAgIHZhciBtb21lbnR1bUR1cmF0aW9uID0gMTAwMCAqIHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtUmF0aW87XG4gICAgICB2YXIgbW9tZW50dW1EaXN0YW5jZSA9IHN3aXBlci52ZWxvY2l0eSAqIG1vbWVudHVtRHVyYXRpb247XG4gICAgICB2YXIgbmV3UG9zaXRpb24gPSBzd2lwZXIudHJhbnNsYXRlICsgbW9tZW50dW1EaXN0YW5jZTtcbiAgICAgIGlmIChydGwpIG5ld1Bvc2l0aW9uID0gLW5ld1Bvc2l0aW9uO1xuICAgICAgdmFyIGRvQm91bmNlID0gZmFsc2U7XG4gICAgICB2YXIgYWZ0ZXJCb3VuY2VQb3NpdGlvbjtcbiAgICAgIHZhciBib3VuY2VBbW91bnQgPSBNYXRoLmFicyhzd2lwZXIudmVsb2NpdHkpICogMjAgKiBwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvO1xuICAgICAgdmFyIG5lZWRzTG9vcEZpeDtcblxuICAgICAgaWYgKG5ld1Bvc2l0aW9uIDwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiArIHN3aXBlci5tYXhUcmFuc2xhdGUoKSA8IC1ib3VuY2VBbW91bnQpIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gYm91bmNlQW1vdW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmxvb3AgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSBuZWVkc0xvb3BGaXggPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbiA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICBpZiAobmV3UG9zaXRpb24gLSBzd2lwZXIubWluVHJhbnNsYXRlKCkgPiBib3VuY2VBbW91bnQpIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgYm91bmNlQW1vdW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmxvb3AgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSBuZWVkc0xvb3BGaXggPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgdmFyIG5leHRTbGlkZTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNuYXBHcmlkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHNuYXBHcmlkW2pdID4gLW5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXh0U2xpZGUgPSBqO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNuYXBHcmlkW25leHRTbGlkZV0gLSBuZXdQb3NpdGlvbikgPCBNYXRoLmFicyhzbmFwR3JpZFtuZXh0U2xpZGUgLSAxXSAtIG5ld1Bvc2l0aW9uKSB8fCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHNuYXBHcmlkW25leHRTbGlkZSAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkc0xvb3BGaXgpIHtcbiAgICAgICAgc3dpcGVyLm9uY2UoJ3RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIEZpeCBkdXJhdGlvblxuXG5cbiAgICAgIGlmIChzd2lwZXIudmVsb2NpdHkgIT09IDApIHtcbiAgICAgICAgaWYgKHJ0bCkge1xuICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLmFicygoLW5ld1Bvc2l0aW9uIC0gc3dpcGVyLnRyYW5zbGF0ZSkgLyBzd2lwZXIudmVsb2NpdHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBNYXRoLmFicygobmV3UG9zaXRpb24gLSBzd2lwZXIudHJhbnNsYXRlKSAvIHN3aXBlci52ZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgICAgLy8gSWYgZnJlZU1vZGVTdGlja3kgaXMgYWN0aXZlIGFuZCB0aGUgdXNlciBlbmRzIGEgc3dpcGUgd2l0aCBhIHNsb3ctdmVsb2NpdHlcbiAgICAgICAgICAvLyBldmVudCwgdGhlbiBkdXJhdGlvbnMgY2FuIGJlIDIwKyBzZWNvbmRzIHRvIHNsaWRlIG9uZSAob3IgemVybyEpIHNsaWRlcy5cbiAgICAgICAgICAvLyBJdCdzIGVhc3kgdG8gc2VlIHRoaXMgd2hlbiBzaW11bGF0aW5nIHRvdWNoIHdpdGggbW91c2UgZXZlbnRzLiBUbyBmaXggdGhpcyxcbiAgICAgICAgICAvLyBsaW1pdCBzaW5nbGUtc2xpZGUgc3dpcGVzIHRvIHRoZSBkZWZhdWx0IHNsaWRlIGR1cmF0aW9uLiBUaGlzIGFsc28gaGFzIHRoZVxuICAgICAgICAgIC8vIG5pY2Ugc2lkZSBlZmZlY3Qgb2YgbWF0Y2hpbmcgc2xpZGUgc3BlZWQgaWYgdGhlIHVzZXIgc3RvcHBlZCBtb3ZpbmcgYmVmb3JlXG4gICAgICAgICAgLy8gbGlmdGluZyBmaW5nZXIgb3IgbW91c2UgdnMuIG1vdmluZyBzbG93bHkgYmVmb3JlIGxpZnRpbmcgdGhlIGZpbmdlci9tb3VzZS5cbiAgICAgICAgICAvLyBGb3IgZmFzdGVyIHN3aXBlcywgYWxzbyBhcHBseSBsaW1pdHMgKGFsYmVpdCBoaWdoZXIgb25lcykuXG4gICAgICAgICAgdmFyIG1vdmVEaXN0YW5jZSA9IE1hdGguYWJzKChydGwgPyAtbmV3UG9zaXRpb24gOiBuZXdQb3NpdGlvbikgLSBzd2lwZXIudHJhbnNsYXRlKTtcbiAgICAgICAgICB2YXIgY3VycmVudFNsaWRlU2l6ZSA9IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbc3dpcGVyLmFjdGl2ZUluZGV4XTtcblxuICAgICAgICAgIGlmIChtb3ZlRGlzdGFuY2UgPCBjdXJyZW50U2xpZGVTaXplKSB7XG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gcGFyYW1zLnNwZWVkO1xuICAgICAgICAgIH0gZWxzZSBpZiAobW92ZURpc3RhbmNlIDwgMiAqIGN1cnJlbnRTbGlkZVNpemUpIHtcbiAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQgKiAxLjU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQgKiAyLjU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UgJiYgZG9Cb3VuY2UpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGFmdGVyQm91bmNlUG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQodHJ1ZSwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uKTtcbiAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhZGF0YS5hbGxvd01vbWVudHVtQm91bmNlKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ21vbWVudHVtQm91bmNlJyk7XG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24ocGFyYW1zLnNwZWVkKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHN3aXBlci52ZWxvY2l0eSkge1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MobmV3UG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQodHJ1ZSwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uKTtcblxuICAgICAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmVtaXQoJ19mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJyk7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdfZnJlZU1vZGVOb01vbWVudHVtUmVsZWFzZScpO1xuICAgIH1cblxuICAgIGlmICghcGFyYW1zLmZyZWVNb2RlTW9tZW50dW0gfHwgdGltZURpZmYgPj0gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9IC8vIEZpbmQgY3VycmVudCBzbGlkZVxuXG5cbiAgdmFyIHN0b3BJbmRleCA9IDA7XG4gIHZhciBncm91cFNpemUgPSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gaSA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgdmFyIF9pbmNyZW1lbnQgPSBpIDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyBfaW5jcmVtZW50XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0gJiYgY3VycmVudFBvcyA8IHNsaWRlc0dyaWRbaSArIF9pbmNyZW1lbnRdKSB7XG4gICAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICAgIGdyb3VwU2l6ZSA9IHNsaWRlc0dyaWRbaSArIF9pbmNyZW1lbnRdIC0gc2xpZGVzR3JpZFtpXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgIGdyb3VwU2l6ZSA9IHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAxXSAtIHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAyXTtcbiAgICB9XG4gIH0gLy8gRmluZCBjdXJyZW50IHNsaWRlIHNpemVcblxuXG4gIHZhciByYXRpbyA9IChjdXJyZW50UG9zIC0gc2xpZGVzR3JpZFtzdG9wSW5kZXhdKSAvIGdyb3VwU2l6ZTtcbiAgdmFyIGluY3JlbWVudCA9IHN0b3BJbmRleCA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgLSAxID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICBpZiAodGltZURpZmYgPiBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgLy8gTG9uZyB0b3VjaGVzXG4gICAgaWYgKCFwYXJhbXMubG9uZ1N3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgIGlmIChyYXRpbyA+PSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO2Vsc2Ugc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgIGlmIChyYXRpbyA+IDEgLSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO2Vsc2Ugc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvcnQgc3dpcGVzXG4gICAgaWYgKCFwYXJhbXMuc2hvcnRTd2lwZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzTmF2QnV0dG9uVGFyZ2V0ID0gc3dpcGVyLm5hdmlnYXRpb24gJiYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwgfHwgZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCk7XG5cbiAgICBpZiAoIWlzTmF2QnV0dG9uVGFyZ2V0KSB7XG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfVxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgZWwgPSBzd2lwZXIuZWw7XG4gIGlmIChlbCAmJiBlbC5vZmZzZXRXaWR0aCA9PT0gMCkgcmV0dXJuOyAvLyBCcmVha3BvaW50c1xuXG4gIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICB9IC8vIFNhdmUgbG9ja3NcblxuXG4gIHZhciBhbGxvd1NsaWRlTmV4dCA9IHN3aXBlci5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIGFsbG93U2xpZGVQcmV2ID0gc3dpcGVyLmFsbG93U2xpZGVQcmV2LFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7IC8vIERpc2FibGUgbG9ja3Mgb24gcmVzaXplXG5cbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gIGlmICgocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBpZiAoc3dpcGVyLmF1dG9wbGF5ICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gIH0gLy8gUmV0dXJuIGxvY2tzIGFmdGVyIHJlc2l6ZVxuXG5cbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gIH1cbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gIGlmICghc3dpcGVyLmFsbG93Q2xpY2spIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmV2ZW50Q2xpY2tzKSBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24gJiYgc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBydGxUcmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuXG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICBpZiAocnRsVHJhbnNsYXRlKSB7XG4gICAgICBzd2lwZXIudHJhbnNsYXRlID0gd3JhcHBlckVsLnNjcm9sbFdpZHRoIC0gd3JhcHBlckVsLm9mZnNldFdpZHRoIC0gd3JhcHBlckVsLnNjcm9sbExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci50cmFuc2xhdGUgPSAtd3JhcHBlckVsLnNjcm9sbExlZnQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci50cmFuc2xhdGUgPSAtd3JhcHBlckVsLnNjcm9sbFRvcDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gIGlmIChzd2lwZXIudHJhbnNsYXRlID09PSAtMCkgc3dpcGVyLnRyYW5zbGF0ZSA9IDA7XG4gIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB2YXIgbmV3UHJvZ3Jlc3M7XG4gIHZhciB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcblxuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBuZXdQcm9ncmVzcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAoc3dpcGVyLnRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgfVxuXG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gc3dpcGVyLnByb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHJ0bFRyYW5zbGF0ZSA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgZmFsc2UpO1xufSIsICJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IG9uVG91Y2hTdGFydCBmcm9tICcuL29uVG91Y2hTdGFydCc7XG5pbXBvcnQgb25Ub3VjaE1vdmUgZnJvbSAnLi9vblRvdWNoTW92ZSc7XG5pbXBvcnQgb25Ub3VjaEVuZCBmcm9tICcuL29uVG91Y2hFbmQnO1xuaW1wb3J0IG9uUmVzaXplIGZyb20gJy4vb25SZXNpemUnO1xuaW1wb3J0IG9uQ2xpY2sgZnJvbSAnLi9vbkNsaWNrJztcbmltcG9ydCBvblNjcm9sbCBmcm9tICcuL29uU2Nyb2xsJztcbnZhciBkdW1teUV2ZW50QXR0YWNoZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHVtbXlFdmVudExpc3RlbmVyKCkge31cblxuZnVuY3Rpb24gYXR0YWNoRXZlbnRzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB0b3VjaEV2ZW50cyA9IHN3aXBlci50b3VjaEV2ZW50cyxcbiAgICAgIGVsID0gc3dpcGVyLmVsLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbCxcbiAgICAgIGRldmljZSA9IHN3aXBlci5kZXZpY2UsXG4gICAgICBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gIHN3aXBlci5vblRvdWNoU3RhcnQgPSBvblRvdWNoU3RhcnQuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Ub3VjaE1vdmUgPSBvblRvdWNoTW92ZS5iaW5kKHN3aXBlcik7XG4gIHN3aXBlci5vblRvdWNoRW5kID0gb25Ub3VjaEVuZC5iaW5kKHN3aXBlcik7XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc3dpcGVyLm9uU2Nyb2xsID0gb25TY3JvbGwuYmluZChzd2lwZXIpO1xuICB9XG5cbiAgc3dpcGVyLm9uQ2xpY2sgPSBvbkNsaWNrLmJpbmQoc3dpcGVyKTtcbiAgdmFyIGNhcHR1cmUgPSAhIXBhcmFtcy5uZXN0ZWQ7IC8vIFRvdWNoIEV2ZW50c1xuXG4gIGlmICghc3VwcG9ydC50b3VjaCAmJiBzdXBwb3J0LnBvaW50ZXJFdmVudHMpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzdXBwb3J0LnRvdWNoKSB7XG4gICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gdG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICAgIH0gOiBmYWxzZTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgPyB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICBjYXB0dXJlOiBjYXB0dXJlXG4gICAgICB9IDogY2FwdHVyZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG5cbiAgICAgIGlmICh0b3VjaEV2ZW50cy5jYW5jZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5jYW5jZWwsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWR1bW15RXZlbnRBdHRhY2hlZCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZHVtbXlFdmVudExpc3RlbmVyKTtcbiAgICAgICAgZHVtbXlFdmVudEF0dGFjaGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIWRldmljZS5pb3MgJiYgIWRldmljZS5hbmRyb2lkIHx8IHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFzdXBwb3J0LnRvdWNoICYmIGRldmljZS5pb3MpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICB9XG4gIH0gLy8gUHJldmVudCBMaW5rcyBDbGlja3NcblxuXG4gIGlmIChwYXJhbXMucHJldmVudENsaWNrcyB8fCBwYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2lwZXIub25DbGljaywgdHJ1ZSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB3cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3dpcGVyLm9uU2Nyb2xsKTtcbiAgfSAvLyBSZXNpemUgaGFuZGxlclxuXG5cbiAgaWYgKHBhcmFtcy51cGRhdGVPbldpbmRvd1Jlc2l6ZSkge1xuICAgIHN3aXBlci5vbihkZXZpY2UuaW9zIHx8IGRldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJywgb25SZXNpemUsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5vbignb2JzZXJ2ZXJVcGRhdGUnLCBvblJlc2l6ZSwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoRXZlbnRzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB0b3VjaEV2ZW50cyA9IHN3aXBlci50b3VjaEV2ZW50cyxcbiAgICAgIGVsID0gc3dpcGVyLmVsLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbCxcbiAgICAgIGRldmljZSA9IHN3aXBlci5kZXZpY2UsXG4gICAgICBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gIHZhciBjYXB0dXJlID0gISFwYXJhbXMubmVzdGVkOyAvLyBUb3VjaCBFdmVudHNcblxuICBpZiAoIXN1cHBvcnQudG91Y2ggJiYgc3VwcG9ydC5wb2ludGVyRXZlbnRzKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc3VwcG9ydC50b3VjaCkge1xuICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHRvdWNoRXZlbnRzLnN0YXJ0ID09PSAnb25Ub3VjaFN0YXJ0JyAmJiBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICAgIH0gOiBmYWxzZTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG5cbiAgICAgIGlmICh0b3VjaEV2ZW50cy5jYW5jZWwpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5jYW5jZWwsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhZGV2aWNlLmlvcyAmJiAhZGV2aWNlLmFuZHJvaWQgfHwgcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIXN1cHBvcnQudG91Y2ggJiYgZGV2aWNlLmlvcykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIH1cbiAgfSAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuXG5cbiAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzd2lwZXIub25TY3JvbGwpO1xuICB9IC8vIFJlc2l6ZSBoYW5kbGVyXG5cblxuICBzd2lwZXIub2ZmKGRldmljZS5pb3MgfHwgZGV2aWNlLmFuZHJvaWQgPyAncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIG9ic2VydmVyVXBkYXRlJyA6ICdyZXNpemUgb2JzZXJ2ZXJVcGRhdGUnLCBvblJlc2l6ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXR0YWNoRXZlbnRzOiBhdHRhY2hFdmVudHMsXG4gIGRldGFjaEV2ZW50czogZGV0YWNoRXZlbnRzXG59OyIsICJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRCcmVha3BvaW50KCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgaW5pdGlhbGl6ZWQgPSBzd2lwZXIuaW5pdGlhbGl6ZWQsXG4gICAgICBfc3dpcGVyJGxvb3BlZFNsaWRlcyA9IHN3aXBlci5sb29wZWRTbGlkZXMsXG4gICAgICBsb29wZWRTbGlkZXMgPSBfc3dpcGVyJGxvb3BlZFNsaWRlcyA9PT0gdm9pZCAwID8gMCA6IF9zd2lwZXIkbG9vcGVkU2xpZGVzLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICRlbCA9IHN3aXBlci4kZWw7XG4gIHZhciBicmVha3BvaW50cyA9IHBhcmFtcy5icmVha3BvaW50cztcbiAgaWYgKCFicmVha3BvaW50cyB8fCBicmVha3BvaW50cyAmJiBPYmplY3Qua2V5cyhicmVha3BvaW50cykubGVuZ3RoID09PSAwKSByZXR1cm47IC8vIEdldCBicmVha3BvaW50IGZvciB3aW5kb3cgd2lkdGggYW5kIHVwZGF0ZSBwYXJhbWV0ZXJzXG5cbiAgdmFyIGJyZWFrcG9pbnQgPSBzd2lwZXIuZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgc3dpcGVyLnBhcmFtcy5icmVha3BvaW50c0Jhc2UsIHN3aXBlci5lbCk7XG5cbiAgaWYgKGJyZWFrcG9pbnQgJiYgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ICE9PSBicmVha3BvaW50KSB7XG4gICAgdmFyIGJyZWFrcG9pbnRPbmx5UGFyYW1zID0gYnJlYWtwb2ludCBpbiBicmVha3BvaW50cyA/IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGJyZWFrcG9pbnRPbmx5UGFyYW1zKSB7XG4gICAgICBbJ3NsaWRlc1BlclZpZXcnLCAnc3BhY2VCZXR3ZWVuJywgJ3NsaWRlc1Blckdyb3VwJywgJ3NsaWRlc1Blckdyb3VwU2tpcCcsICdzbGlkZXNQZXJDb2x1bW4nXS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICB2YXIgcGFyYW1WYWx1ZSA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXTtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbVZhbHVlID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgICAgIGlmIChwYXJhbSA9PT0gJ3NsaWRlc1BlclZpZXcnICYmIChwYXJhbVZhbHVlID09PSAnQVVUTycgfHwgcGFyYW1WYWx1ZSA9PT0gJ2F1dG8nKSkge1xuICAgICAgICAgIGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXSA9ICdhdXRvJztcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbSA9PT0gJ3NsaWRlc1BlclZpZXcnKSB7XG4gICAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dID0gcGFyc2VGbG9hdChwYXJhbVZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSBwYXJzZUludChwYXJhbVZhbHVlLCAxMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBicmVha3BvaW50UGFyYW1zID0gYnJlYWtwb2ludE9ubHlQYXJhbXMgfHwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zO1xuICAgIHZhciB3YXNNdWx0aVJvdyA9IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxO1xuICAgIHZhciBpc011bHRpUm93ID0gYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxO1xuXG4gICAgaWYgKHdhc011bHRpUm93ICYmICFpc011bHRpUm93KSB7XG4gICAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93IFwiICsgcGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93LWNvbHVtblwiKTtcbiAgICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICAgIH0gZWxzZSBpZiAoIXdhc011bHRpUm93ICYmIGlzTXVsdGlSb3cpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3dcIik7XG5cbiAgICAgIGlmIChicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3ctY29sdW1uXCIpO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgICB9XG5cbiAgICB2YXIgZGlyZWN0aW9uQ2hhbmdlZCA9IGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICYmIGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICE9PSBwYXJhbXMuZGlyZWN0aW9uO1xuICAgIHZhciBuZWVkc1JlTG9vcCA9IHBhcmFtcy5sb29wICYmIChicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlclZpZXcgIT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3IHx8IGRpcmVjdGlvbkNoYW5nZWQpO1xuXG4gICAgaWYgKGRpcmVjdGlvbkNoYW5nZWQgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHN3aXBlci5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBleHRlbmQoc3dpcGVyLnBhcmFtcywgYnJlYWtwb2ludFBhcmFtcyk7XG4gICAgZXh0ZW5kKHN3aXBlciwge1xuICAgICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG4gICAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2XG4gICAgfSk7XG4gICAgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcbiAgICBzd2lwZXIuZW1pdCgnX2JlZm9yZUJyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcblxuICAgIGlmIChuZWVkc1JlTG9vcCAmJiBpbml0aWFsaXplZCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgICAgc3dpcGVyLnNsaWRlVG8oYWN0aXZlSW5kZXggLSBsb29wZWRTbGlkZXMgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2JyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcbiAgfVxufSIsICJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIGJhc2UsIGNvbnRhaW5lckVsKSB7XG4gIGlmIChiYXNlID09PSB2b2lkIDApIHtcbiAgICBiYXNlID0gJ3dpbmRvdyc7XG4gIH1cblxuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJhc2UgPT09ICdjb250YWluZXInICYmICFjb250YWluZXJFbCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIGJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgY3VycmVudFdpZHRoID0gYmFzZSA9PT0gJ3dpbmRvdycgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IGNvbnRhaW5lckVsLmNsaWVudFdpZHRoO1xuICB2YXIgY3VycmVudEhlaWdodCA9IGJhc2UgPT09ICd3aW5kb3cnID8gd2luZG93LmlubmVySGVpZ2h0IDogY29udGFpbmVyRWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgcG9pbnRzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICBpZiAodHlwZW9mIHBvaW50ID09PSAnc3RyaW5nJyAmJiBwb2ludC5pbmRleE9mKCdAJykgPT09IDApIHtcbiAgICAgIHZhciBtaW5SYXRpbyA9IHBhcnNlRmxvYXQocG9pbnQuc3Vic3RyKDEpKTtcbiAgICAgIHZhciB2YWx1ZSA9IGN1cnJlbnRIZWlnaHQgKiBtaW5SYXRpbztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgcG9pbnQ6IHBvaW50XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcG9pbnQsXG4gICAgICBwb2ludDogcG9pbnRcbiAgICB9O1xuICB9KTtcbiAgcG9pbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYS52YWx1ZSwgMTApIC0gcGFyc2VJbnQoYi52YWx1ZSwgMTApO1xuICB9KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBfcG9pbnRzJGkgPSBwb2ludHNbaV0sXG4gICAgICAgIHBvaW50ID0gX3BvaW50cyRpLnBvaW50LFxuICAgICAgICB2YWx1ZSA9IF9wb2ludHMkaS52YWx1ZTtcblxuICAgIGlmICh2YWx1ZSA8PSBjdXJyZW50V2lkdGgpIHtcbiAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnJlYWtwb2ludCB8fCAnbWF4Jztcbn0iLCAiaW1wb3J0IHNldEJyZWFrcG9pbnQgZnJvbSAnLi9zZXRCcmVha3BvaW50JztcbmltcG9ydCBnZXRCcmVha3BvaW50IGZyb20gJy4vZ2V0QnJlYWtwb2ludCc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldEJyZWFrcG9pbnQ6IHNldEJyZWFrcG9pbnQsXG4gIGdldEJyZWFrcG9pbnQ6IGdldEJyZWFrcG9pbnRcbn07IiwgImZ1bmN0aW9uIHByZXBhcmVDbGFzc2VzKGVudHJpZXMsIHByZWZpeCkge1xuICB2YXIgcmVzdWx0Q2xhc3NlcyA9IFtdO1xuICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhpdGVtKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWVzID0gX3JlZlswXSxcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IF9yZWZbMV07XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBjbGFzc05hbWVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0Q2xhc3Nlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3NlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBjbGFzc05hbWVzID0gc3dpcGVyLmNsYXNzTmFtZXMsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bCxcbiAgICAgICRlbCA9IHN3aXBlci4kZWwsXG4gICAgICBkZXZpY2UgPSBzd2lwZXIuZGV2aWNlLFxuICAgICAgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0OyAvLyBwcmV0dGllci1pZ25vcmVcblxuICB2YXIgc3VmZml4ZXMgPSBwcmVwYXJlQ2xhc3NlcyhbJ2luaXRpYWxpemVkJywgcGFyYW1zLmRpcmVjdGlvbiwge1xuICAgICdwb2ludGVyLWV2ZW50cyc6IHN1cHBvcnQucG9pbnRlckV2ZW50cyAmJiAhc3VwcG9ydC50b3VjaFxuICB9LCB7XG4gICAgJ2ZyZWUtbW9kZSc6IHBhcmFtcy5mcmVlTW9kZVxuICB9LCB7XG4gICAgJ2F1dG9oZWlnaHQnOiBwYXJhbXMuYXV0b0hlaWdodFxuICB9LCB7XG4gICAgJ3J0bCc6IHJ0bFxuICB9LCB7XG4gICAgJ211bHRpcm93JzogcGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDFcbiAgfSwge1xuICAgICdtdWx0aXJvdy1jb2x1bW4nOiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSAmJiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbidcbiAgfSwge1xuICAgICdhbmRyb2lkJzogZGV2aWNlLmFuZHJvaWRcbiAgfSwge1xuICAgICdpb3MnOiBkZXZpY2UuaW9zXG4gIH0sIHtcbiAgICAnY3NzLW1vZGUnOiBwYXJhbXMuY3NzTW9kZVxuICB9XSwgcGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpO1xuICBjbGFzc05hbWVzLnB1c2guYXBwbHkoY2xhc3NOYW1lcywgc3VmZml4ZXMpO1xuICAkZWwuYWRkQ2xhc3MoW10uY29uY2F0KGNsYXNzTmFtZXMpLmpvaW4oJyAnKSk7XG4gIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyICRlbCA9IHN3aXBlci4kZWwsXG4gICAgICBjbGFzc05hbWVzID0gc3dpcGVyLmNsYXNzTmFtZXM7XG4gICRlbC5yZW1vdmVDbGFzcyhjbGFzc05hbWVzLmpvaW4oJyAnKSk7XG4gIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xufSIsICJpbXBvcnQgYWRkQ2xhc3NlcyBmcm9tICcuL2FkZENsYXNzZXMnO1xuaW1wb3J0IHJlbW92ZUNsYXNzZXMgZnJvbSAnLi9yZW1vdmVDbGFzc2VzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkQ2xhc3NlczogYWRkQ2xhc3NlcyxcbiAgcmVtb3ZlQ2xhc3NlczogcmVtb3ZlQ2xhc3Nlc1xufTsiLCAiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEltYWdlKGltYWdlRWwsIHNyYywgc3Jjc2V0LCBzaXplcywgY2hlY2tGb3JDb21wbGV0ZSwgY2FsbGJhY2spIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgaW1hZ2U7XG5cbiAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gIH1cblxuICB2YXIgaXNQaWN0dXJlID0gJChpbWFnZUVsKS5wYXJlbnQoJ3BpY3R1cmUnKVswXTtcblxuICBpZiAoIWlzUGljdHVyZSAmJiAoIWltYWdlRWwuY29tcGxldGUgfHwgIWNoZWNrRm9yQ29tcGxldGUpKSB7XG4gICAgaWYgKHNyYykge1xuICAgICAgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xuICAgICAgaW1hZ2Uub25lcnJvciA9IG9uUmVhZHk7XG5cbiAgICAgIGlmIChzaXplcykge1xuICAgICAgICBpbWFnZS5zaXplcyA9IHNpemVzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNyYykge1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUmVhZHkoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICBvblJlYWR5KCk7XG4gIH1cbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHN3aXBlci5pbWFnZXNUb0xvYWQgPSBzd2lwZXIuJGVsLmZpbmQoJ2ltZycpO1xuXG4gIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlciA9PT0gbnVsbCB8fCAhc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLmltYWdlc0xvYWRlZCAhPT0gdW5kZWZpbmVkKSBzd2lwZXIuaW1hZ2VzTG9hZGVkICs9IDE7XG5cbiAgICBpZiAoc3dpcGVyLmltYWdlc0xvYWRlZCA9PT0gc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGgpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnVwZGF0ZU9uSW1hZ2VzUmVhZHkpIHN3aXBlci51cGRhdGUoKTtcbiAgICAgIHN3aXBlci5lbWl0KCdpbWFnZXNSZWFkeScpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBpbWFnZUVsID0gc3dpcGVyLmltYWdlc1RvTG9hZFtpXTtcbiAgICBzd2lwZXIubG9hZEltYWdlKGltYWdlRWwsIGltYWdlRWwuY3VycmVudFNyYyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc3JjJyksIGltYWdlRWwuc3Jjc2V0IHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmNzZXQnKSwgaW1hZ2VFbC5zaXplcyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc2l6ZXMnKSwgdHJ1ZSwgb25SZWFkeSk7XG4gIH1cbn0iLCAiaW1wb3J0IGxvYWRJbWFnZSBmcm9tICcuL2xvYWRJbWFnZSc7XG5pbXBvcnQgcHJlbG9hZEltYWdlcyBmcm9tICcuL3ByZWxvYWRJbWFnZXMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBsb2FkSW1hZ2U6IGxvYWRJbWFnZSxcbiAgcHJlbG9hZEltYWdlczogcHJlbG9hZEltYWdlc1xufTsiLCAiZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgd2FzTG9ja2VkID0gc3dpcGVyLmlzTG9ja2VkO1xuICB2YXIgbGFzdFNsaWRlUG9zaXRpb24gPSBzd2lwZXIuc2xpZGVzLmxlbmd0aCA+IDAgJiYgcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxKSArIHN3aXBlci5zbGlkZXNbMF0ub2Zmc2V0V2lkdGggKiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcblxuICBpZiAocGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSAmJiBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIgJiYgbGFzdFNsaWRlUG9zaXRpb24pIHtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBsYXN0U2xpZGVQb3NpdGlvbiA8PSBzd2lwZXIuc2l6ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gIXN3aXBlci5pc0xvY2tlZDtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIXN3aXBlci5pc0xvY2tlZDsgLy8gZXZlbnRzXG5cbiAgaWYgKHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSBzd2lwZXIuZW1pdChzd2lwZXIuaXNMb2NrZWQgPyAnbG9jaycgOiAndW5sb2NrJyk7XG5cbiAgaWYgKHdhc0xvY2tlZCAmJiB3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkge1xuICAgIHN3aXBlci5pc0VuZCA9IGZhbHNlO1xuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbikgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja092ZXJmbG93OiBjaGVja092ZXJmbG93XG59OyIsICJleHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IHRydWUsXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICB0b3VjaEV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gIGluaXRpYWxTbGlkZTogMCxcbiAgc3BlZWQ6IDMwMCxcbiAgY3NzTW9kZTogZmFsc2UsXG4gIHVwZGF0ZU9uV2luZG93UmVzaXplOiB0cnVlLFxuICByZXNpemVPYnNlcnZlcjogZmFsc2UsXG4gIG5lc3RlZDogZmFsc2UsXG4gIC8vIE92ZXJyaWRlc1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxuICAvL1xuICBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IGZhbHNlLFxuICAvLyBzc3JcbiAgdXNlckFnZW50OiBudWxsLFxuICB1cmw6IG51bGwsXG4gIC8vIFRvIHN1cHBvcnQgaU9TJ3Mgc3dpcGUtdG8tZ28tYmFjayBnZXN0dXJlICh3aGVuIGJlaW5nIHVzZWQgaW4tYXBwKS5cbiAgZWRnZVN3aXBlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgZWRnZVN3aXBlVGhyZXNob2xkOiAyMCxcbiAgLy8gRnJlZSBtb2RlXG4gIGZyZWVNb2RlOiBmYWxzZSxcbiAgZnJlZU1vZGVNb21lbnR1bTogdHJ1ZSxcbiAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiAxLFxuICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiB0cnVlLFxuICBmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW86IDEsXG4gIGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvOiAxLFxuICBmcmVlTW9kZVN0aWNreTogZmFsc2UsXG4gIGZyZWVNb2RlTWluaW11bVZlbG9jaXR5OiAwLjAyLFxuICAvLyBBdXRvaGVpZ2h0XG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAvLyBTZXQgd3JhcHBlciB3aWR0aFxuICBzZXRXcmFwcGVyU2l6ZTogZmFsc2UsXG4gIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gIHZpcnR1YWxUcmFuc2xhdGU6IGZhbHNlLFxuICAvLyBFZmZlY3RzXG4gIGVmZmVjdDogJ3NsaWRlJyxcbiAgLy8gJ3NsaWRlJyBvciAnZmFkZScgb3IgJ2N1YmUnIG9yICdjb3ZlcmZsb3cnIG9yICdmbGlwJ1xuICAvLyBCcmVha3BvaW50c1xuICBicmVha3BvaW50czogdW5kZWZpbmVkLFxuICBicmVha3BvaW50c0Jhc2U6ICd3aW5kb3cnLFxuICAvLyBTbGlkZXMgZ3JpZFxuICBzcGFjZUJldHdlZW46IDAsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgc2xpZGVzUGVyQ29sdW1uRmlsbDogJ2NvbHVtbicsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzbGlkZXNQZXJHcm91cFNraXA6IDAsXG4gIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IGZhbHNlLFxuICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXG4gIC8vIGluIHB4XG4gIHNsaWRlc09mZnNldEFmdGVyOiAwLFxuICAvLyBpbiBweFxuICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IGZhbHNlLFxuICAvLyBEaXNhYmxlIHN3aXBlciBhbmQgaGlkZSBuYXZpZ2F0aW9uIHdoZW4gY29udGFpbmVyIG5vdCBvdmVyZmxvd1xuICB3YXRjaE92ZXJmbG93OiBmYWxzZSxcbiAgLy8gUm91bmQgbGVuZ3RoXG4gIHJvdW5kTGVuZ3RoczogZmFsc2UsXG4gIC8vIFRvdWNoZXNcbiAgdG91Y2hSYXRpbzogMSxcbiAgdG91Y2hBbmdsZTogNDUsXG4gIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gIHNob3J0U3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgbG9uZ1N3aXBlc01zOiAzMDAsXG4gIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcbiAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gIHRocmVzaG9sZDogMCxcbiAgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiB0cnVlLFxuICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAvLyBVbmlxdWUgTmF2aWdhdGlvbiBFbGVtZW50c1xuICB1bmlxdWVOYXZFbGVtZW50czogdHJ1ZSxcbiAgLy8gUmVzaXN0YW5jZVxuICByZXNpc3RhbmNlOiB0cnVlLFxuICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG4gIC8vIFByb2dyZXNzXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IGZhbHNlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IGZhbHNlLFxuICAvLyBDdXJzb3JcbiAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gIC8vIENsaWNrc1xuICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IHRydWUsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAvLyBJbWFnZXNcbiAgcHJlbG9hZEltYWdlczogdHJ1ZSxcbiAgdXBkYXRlT25JbWFnZXNSZWFkeTogdHJ1ZSxcbiAgLy8gbG9vcFxuICBsb29wOiBmYWxzZSxcbiAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gIGxvb3BlZFNsaWRlczogbnVsbCxcbiAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogZmFsc2UsXG4gIGxvb3BQcmV2ZW50c1NsaWRlOiB0cnVlLFxuICAvLyBTd2lwaW5nL25vIHN3aXBpbmdcbiAgYWxsb3dTbGlkZVByZXY6IHRydWUsXG4gIGFsbG93U2xpZGVOZXh0OiB0cnVlLFxuICBzd2lwZUhhbmRsZXI6IG51bGwsXG4gIC8vICcuc3dpcGUtaGFuZGxlcicsXG4gIG5vU3dpcGluZzogdHJ1ZSxcbiAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gIG5vU3dpcGluZ1NlbGVjdG9yOiBudWxsLFxuICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICBwYXNzaXZlTGlzdGVuZXJzOiB0cnVlLFxuICAvLyBOU1xuICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLWNvbnRhaW5lci0nLFxuICAvLyBORVdcbiAgc2xpZGVDbGFzczogJ3N3aXBlci1zbGlkZScsXG4gIHNsaWRlQmxhbmtDbGFzczogJ3N3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsnLFxuICBzbGlkZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWFjdGl2ZScsXG4gIHNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLWFjdGl2ZScsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICBzbGlkZUR1cGxpY2F0ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZScsXG4gIHNsaWRlTmV4dENsYXNzOiAnc3dpcGVyLXNsaWRlLW5leHQnLFxuICBzbGlkZUR1cGxpY2F0ZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtbmV4dCcsXG4gIHNsaWRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLXByZXYnLFxuICBzbGlkZUR1cGxpY2F0ZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtcHJldicsXG4gIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcbiAgLy8gQ2FsbGJhY2tzXG4gIHJ1bkNhbGxiYWNrc09uSW5pdDogdHJ1ZSxcbiAgLy8gSW50ZXJuYWxzXG4gIF9lbWl0Q2xhc3NlczogZmFsc2Vcbn07IiwgImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiBcIm9mZlwiICovXG5pbXBvcnQgJCBmcm9tICcuLi8uLi91dGlscy9kb20nO1xuaW1wb3J0IHsgZXh0ZW5kLCBub3csIGRlbGV0ZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgZ2V0U3VwcG9ydCB9IGZyb20gJy4uLy4uL3V0aWxzL2dldC1zdXBwb3J0JztcbmltcG9ydCB7IGdldERldmljZSB9IGZyb20gJy4uLy4uL3V0aWxzL2dldC1kZXZpY2UnO1xuaW1wb3J0IHsgZ2V0QnJvd3NlciB9IGZyb20gJy4uLy4uL3V0aWxzL2dldC1icm93c2VyJztcbmltcG9ydCBSZXNpemUgZnJvbSAnLi4vLi4vbW9kdWxlcy9yZXNpemUvcmVzaXplJztcbmltcG9ydCBPYnNlcnZlciBmcm9tICcuLi8uLi9tb2R1bGVzL29ic2VydmVyL29ic2VydmVyJztcbmltcG9ydCBtb2R1bGFyIGZyb20gJy4vbW9kdWxhcic7XG5pbXBvcnQgZXZlbnRzRW1pdHRlciBmcm9tICcuL2V2ZW50cy1lbWl0dGVyJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi91cGRhdGUvaW5kZXgnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuL3RyYW5zbGF0ZS9pbmRleCc7XG5pbXBvcnQgdHJhbnNpdGlvbiBmcm9tICcuL3RyYW5zaXRpb24vaW5kZXgnO1xuaW1wb3J0IHNsaWRlIGZyb20gJy4vc2xpZGUvaW5kZXgnO1xuaW1wb3J0IGxvb3AgZnJvbSAnLi9sb29wL2luZGV4JztcbmltcG9ydCBncmFiQ3Vyc29yIGZyb20gJy4vZ3JhYi1jdXJzb3IvaW5kZXgnO1xuaW1wb3J0IG1hbmlwdWxhdGlvbiBmcm9tICcuL21hbmlwdWxhdGlvbi9pbmRleCc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzL2luZGV4JztcbmltcG9ydCBicmVha3BvaW50cyBmcm9tICcuL2JyZWFrcG9pbnRzL2luZGV4JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY2xhc3Nlcy9pbmRleCc7XG5pbXBvcnQgaW1hZ2VzIGZyb20gJy4vaW1hZ2VzL2luZGV4JztcbmltcG9ydCBjaGVja092ZXJmbG93IGZyb20gJy4vY2hlY2stb3ZlcmZsb3cvaW5kZXgnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vZGVmYXVsdHMnO1xudmFyIHByb3RvdHlwZXMgPSB7XG4gIG1vZHVsYXI6IG1vZHVsYXIsXG4gIGV2ZW50c0VtaXR0ZXI6IGV2ZW50c0VtaXR0ZXIsXG4gIHVwZGF0ZTogdXBkYXRlLFxuICB0cmFuc2xhdGU6IHRyYW5zbGF0ZSxcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbixcbiAgc2xpZGU6IHNsaWRlLFxuICBsb29wOiBsb29wLFxuICBncmFiQ3Vyc29yOiBncmFiQ3Vyc29yLFxuICBtYW5pcHVsYXRpb246IG1hbmlwdWxhdGlvbixcbiAgZXZlbnRzOiBldmVudHMsXG4gIGJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcbiAgY2hlY2tPdmVyZmxvdzogY2hlY2tPdmVyZmxvdyxcbiAgY2xhc3NlczogY2xhc3NlcyxcbiAgaW1hZ2VzOiBpbWFnZXNcbn07XG52YXIgZXh0ZW5kZWREZWZhdWx0cyA9IHt9O1xuXG52YXIgU3dpcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3dpcGVyKCkge1xuICAgIHZhciBlbDtcbiAgICB2YXIgcGFyYW1zO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBhcmdzWzBdLmNvbnN0cnVjdG9yICYmIGFyZ3NbMF0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwgPSBhcmdzWzBdO1xuICAgICAgcGFyYW1zID0gYXJnc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcykgcGFyYW1zID0ge307XG4gICAgcGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpO1xuICAgIGlmIChlbCAmJiAhcGFyYW1zLmVsKSBwYXJhbXMuZWwgPSBlbDtcblxuICAgIGlmIChwYXJhbXMuZWwgJiYgJChwYXJhbXMuZWwpLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBzd2lwZXJzID0gW107XG4gICAgICAkKHBhcmFtcy5lbCkuZWFjaChmdW5jdGlvbiAoY29udGFpbmVyRWwpIHtcbiAgICAgICAgdmFyIG5ld1BhcmFtcyA9IGV4dGVuZCh7fSwgcGFyYW1zLCB7XG4gICAgICAgICAgZWw6IGNvbnRhaW5lckVsXG4gICAgICAgIH0pO1xuICAgICAgICBzd2lwZXJzLnB1c2gobmV3IFN3aXBlcihuZXdQYXJhbXMpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN3aXBlcnM7XG4gICAgfSAvLyBTd2lwZXIgSW5zdGFuY2VcblxuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLnN1cHBvcnQgPSBnZXRTdXBwb3J0KCk7XG4gICAgc3dpcGVyLmRldmljZSA9IGdldERldmljZSh7XG4gICAgICB1c2VyQWdlbnQ6IHBhcmFtcy51c2VyQWdlbnRcbiAgICB9KTtcbiAgICBzd2lwZXIuYnJvd3NlciA9IGdldEJyb3dzZXIoKTtcbiAgICBzd2lwZXIuZXZlbnRzTGlzdGVuZXJzID0ge307XG4gICAgc3dpcGVyLmV2ZW50c0FueUxpc3RlbmVycyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBzd2lwZXIubW9kdWxlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHN3aXBlci5tb2R1bGVzID0ge307XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc3dpcGVyLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBzd2lwZXIubW9kdWxlc1ttb2R1bGVOYW1lXTtcblxuICAgICAgaWYgKG1vZHVsZS5wYXJhbXMpIHtcbiAgICAgICAgdmFyIG1vZHVsZVBhcmFtTmFtZSA9IE9iamVjdC5rZXlzKG1vZHVsZS5wYXJhbXMpWzBdO1xuICAgICAgICB2YXIgbW9kdWxlUGFyYW1zID0gbW9kdWxlLnBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIG1vZHVsZVBhcmFtcyAhPT0gJ29iamVjdCcgfHwgbW9kdWxlUGFyYW1zID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmICghKG1vZHVsZVBhcmFtTmFtZSBpbiBwYXJhbXMgJiYgJ2VuYWJsZWQnIGluIG1vZHVsZVBhcmFtcykpIHJldHVybjtcblxuICAgICAgICBpZiAocGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09IHRydWUpIHtcbiAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gJ29iamVjdCcgJiYgISgnZW5hYmxlZCcgaW4gcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pKSB7XG4gICAgICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKSBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pOyAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBtb2R1bGVzIHBhcmFtc1xuXG4gICAgdmFyIHN3aXBlclBhcmFtcyA9IGV4dGVuZCh7fSwgZGVmYXVsdHMpO1xuICAgIHN3aXBlci51c2VQYXJhbXMoc3dpcGVyUGFyYW1zKTsgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggcGFzc2VkIHBhcmFtc1xuXG4gICAgc3dpcGVyLnBhcmFtcyA9IGV4dGVuZCh7fSwgc3dpcGVyUGFyYW1zLCBleHRlbmRlZERlZmF1bHRzLCBwYXJhbXMpO1xuICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcyA9IGV4dGVuZCh7fSwgc3dpcGVyLnBhcmFtcyk7XG4gICAgc3dpcGVyLnBhc3NlZFBhcmFtcyA9IGV4dGVuZCh7fSwgcGFyYW1zKTsgLy8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMgJiYgc3dpcGVyLnBhcmFtcy5vbikge1xuICAgICAgT2JqZWN0LmtleXMoc3dpcGVyLnBhcmFtcy5vbikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIHN3aXBlci5vbihldmVudE5hbWUsIHN3aXBlci5wYXJhbXMub25bZXZlbnROYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uQW55KSB7XG4gICAgICBzd2lwZXIub25Bbnkoc3dpcGVyLnBhcmFtcy5vbkFueSk7XG4gICAgfSAvLyBTYXZlIERvbSBsaWJcblxuXG4gICAgc3dpcGVyLiQgPSAkOyAvLyBFeHRlbmQgU3dpcGVyXG5cbiAgICBleHRlbmQoc3dpcGVyLCB7XG4gICAgICBlbDogZWwsXG4gICAgICAvLyBDbGFzc2VzXG4gICAgICBjbGFzc05hbWVzOiBbXSxcbiAgICAgIC8vIFNsaWRlc1xuICAgICAgc2xpZGVzOiAkKCksXG4gICAgICBzbGlkZXNHcmlkOiBbXSxcbiAgICAgIHNuYXBHcmlkOiBbXSxcbiAgICAgIHNsaWRlc1NpemVzR3JpZDogW10sXG4gICAgICAvLyBpc0RpcmVjdGlvblxuICAgICAgaXNIb3Jpem9udGFsOiBmdW5jdGlvbiBpc0hvcml6b250YWwoKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgfSxcbiAgICAgIGlzVmVydGljYWw6IGZ1bmN0aW9uIGlzVmVydGljYWwoKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIH0sXG4gICAgICAvLyBJbmRleGVzXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHJlYWxJbmRleDogMCxcbiAgICAgIC8vXG4gICAgICBpc0JlZ2lubmluZzogdHJ1ZSxcbiAgICAgIGlzRW5kOiBmYWxzZSxcbiAgICAgIC8vIFByb3BzXG4gICAgICB0cmFuc2xhdGU6IDAsXG4gICAgICBwcmV2aW91c1RyYW5zbGF0ZTogMCxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgLy8gTG9ja3NcbiAgICAgIGFsbG93U2xpZGVOZXh0OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXYsXG4gICAgICAvLyBUb3VjaCBFdmVudHNcbiAgICAgIHRvdWNoRXZlbnRzOiBmdW5jdGlvbiB0b3VjaEV2ZW50cygpIHtcbiAgICAgICAgdmFyIHRvdWNoID0gWyd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCddO1xuICAgICAgICB2YXIgZGVza3RvcCA9IFsnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJ107XG5cbiAgICAgICAgaWYgKHN3aXBlci5zdXBwb3J0LnBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICBkZXNrdG9wID0gWydwb2ludGVyZG93bicsICdwb2ludGVybW92ZScsICdwb2ludGVydXAnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlci50b3VjaEV2ZW50c1RvdWNoID0ge1xuICAgICAgICAgIHN0YXJ0OiB0b3VjaFswXSxcbiAgICAgICAgICBtb3ZlOiB0b3VjaFsxXSxcbiAgICAgICAgICBlbmQ6IHRvdWNoWzJdLFxuICAgICAgICAgIGNhbmNlbDogdG91Y2hbM11cbiAgICAgICAgfTtcbiAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcCA9IHtcbiAgICAgICAgICBzdGFydDogZGVza3RvcFswXSxcbiAgICAgICAgICBtb3ZlOiBkZXNrdG9wWzFdLFxuICAgICAgICAgIGVuZDogZGVza3RvcFsyXVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc3dpcGVyLnN1cHBvcnQudG91Y2ggfHwgIXN3aXBlci5wYXJhbXMuc2ltdWxhdGVUb3VjaCA/IHN3aXBlci50b3VjaEV2ZW50c1RvdWNoIDogc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcDtcbiAgICAgIH0oKSxcbiAgICAgIHRvdWNoRXZlbnRzRGF0YToge1xuICAgICAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNNb3ZlZDogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB1bmRlZmluZWQsXG4gICAgICAgIHRvdWNoU3RhcnRUaW1lOiB1bmRlZmluZWQsXG4gICAgICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgICAgIGN1cnJlbnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dUaHJlc2hvbGRNb3ZlOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEZvcm0gZWxlbWVudHMgdG8gbWF0Y2hcbiAgICAgICAgZm9ybUVsZW1lbnRzOiAnaW5wdXQsIHNlbGVjdCwgb3B0aW9uLCB0ZXh0YXJlYSwgYnV0dG9uLCB2aWRlbywgbGFiZWwnLFxuICAgICAgICAvLyBMYXN0IGNsaWNrIHRpbWVcbiAgICAgICAgbGFzdENsaWNrVGltZTogbm93KCksXG4gICAgICAgIGNsaWNrVGltZW91dDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBWZWxvY2l0aWVzXG4gICAgICAgIHZlbG9jaXRpZXM6IFtdLFxuICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlOiB1bmRlZmluZWQsXG4gICAgICAgIGlzVG91Y2hFdmVudDogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgLy8gQ2xpY2tzXG4gICAgICBhbGxvd0NsaWNrOiB0cnVlLFxuICAgICAgLy8gVG91Y2hlc1xuICAgICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG4gICAgICB0b3VjaGVzOiB7XG4gICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICBjdXJyZW50WDogMCxcbiAgICAgICAgY3VycmVudFk6IDAsXG4gICAgICAgIGRpZmY6IDBcbiAgICAgIH0sXG4gICAgICAvLyBJbWFnZXNcbiAgICAgIGltYWdlc1RvTG9hZDogW10sXG4gICAgICBpbWFnZXNMb2FkZWQ6IDBcbiAgICB9KTsgLy8gSW5zdGFsbCBNb2R1bGVzXG5cbiAgICBzd2lwZXIudXNlTW9kdWxlcygpO1xuICAgIHN3aXBlci5lbWl0KCdfc3dpcGVyJyk7IC8vIEluaXRcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmluaXQpIHtcbiAgICAgIHN3aXBlci5pbml0KCk7XG4gICAgfSAvLyBSZXR1cm4gYXBwIGluc3RhbmNlXG5cblxuICAgIHJldHVybiBzd2lwZXI7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3dpcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZW1pdENvbnRhaW5lckNsYXNzZXMgPSBmdW5jdGlvbiBlbWl0Q29udGFpbmVyQ2xhc3NlcygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICB2YXIgY2xhc3NlcyA9IHN3aXBlci5lbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZS5pbmRleE9mKCdzd2lwZXItY29udGFpbmVyJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSA9PT0gMDtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX2NvbnRhaW5lckNsYXNzZXMnLCBjbGFzc2VzLmpvaW4oJyAnKSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uIGdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgcmV0dXJuIHNsaWRlRWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyLXNsaWRlJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSA9PT0gMDtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH07XG5cbiAgX3Byb3RvLmVtaXRTbGlkZXNDbGFzc2VzID0gZnVuY3Rpb24gZW1pdFNsaWRlc0NsYXNzZXMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLl9lbWl0Q2xhc3NlcyB8fCAhc3dpcGVyLmVsKSByZXR1cm47XG4gICAgdmFyIHVwZGF0ZXMgPSBbXTtcbiAgICBzd2lwZXIuc2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlRWwpIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gc3dpcGVyLmdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKTtcbiAgICAgIHVwZGF0ZXMucHVzaCh7XG4gICAgICAgIHNsaWRlRWw6IHNsaWRlRWwsXG4gICAgICAgIGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLmVtaXQoJ19zbGlkZUNsYXNzJywgc2xpZGVFbCwgY2xhc3NOYW1lcyk7XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19zbGlkZUNsYXNzZXMnLCB1cGRhdGVzKTtcbiAgfTtcblxuICBfcHJvdG8uc2xpZGVzUGVyVmlld0R5bmFtaWMgPSBmdW5jdGlvbiBzbGlkZXNQZXJWaWV3RHluYW1pYygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgICBzd2lwZXJTaXplID0gc3dpcGVyLnNpemUsXG4gICAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBzcHYgPSAxO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgdmFyIHNsaWRlU2l6ZSA9IHNsaWRlc1thY3RpdmVJbmRleF0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgdmFyIGJyZWFrTG9vcDtcblxuICAgICAgZm9yICh2YXIgaSA9IGFjdGl2ZUluZGV4ICsgMTsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldICYmICFicmVha0xvb3ApIHtcbiAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaSA9IGFjdGl2ZUluZGV4IC0gMTsgX2kgPj0gMDsgX2kgLT0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW19pXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tfaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pMiA9IGFjdGl2ZUluZGV4ICsgMTsgX2kyIDwgc2xpZGVzLmxlbmd0aDsgX2kyICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc0dyaWRbX2kyXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwdjtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICB2YXIgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsXG4gICAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7IC8vIEJyZWFrcG9pbnRzXG5cbiAgICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH1cblxuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgICBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICB2YXIgdHJhbnNsYXRlVmFsdWUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSAqIC0xIDogc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIHZhciBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heCh0cmFuc2xhdGVWYWx1ZSwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNsYXRlZDtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICBzZXRUcmFuc2xhdGUoKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJhbnNsYXRlZCkge1xuICAgICAgICBzZXRUcmFuc2xhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgndXBkYXRlJyk7XG4gIH07XG5cbiAgX3Byb3RvLmNoYW5nZURpcmVjdGlvbiA9IGZ1bmN0aW9uIGNoYW5nZURpcmVjdGlvbihuZXdEaXJlY3Rpb24sIG5lZWRVcGRhdGUpIHtcbiAgICBpZiAobmVlZFVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBuZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgY3VycmVudERpcmVjdGlvbiA9IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uO1xuXG4gICAgaWYgKCFuZXdEaXJlY3Rpb24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG5cbiAgICBpZiAobmV3RGlyZWN0aW9uID09PSBjdXJyZW50RGlyZWN0aW9uIHx8IG5ld0RpcmVjdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG5ld0RpcmVjdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuIHN3aXBlcjtcbiAgICB9XG5cbiAgICBzd2lwZXIuJGVsLnJlbW92ZUNsYXNzKFwiXCIgKyBzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBjdXJyZW50RGlyZWN0aW9uKS5hZGRDbGFzcyhcIlwiICsgc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgbmV3RGlyZWN0aW9uKTtcbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgICBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcbiAgICBzd2lwZXIuc2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlRWwpIHtcbiAgICAgIGlmIChuZXdEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnY2hhbmdlRGlyZWN0aW9uJyk7XG4gICAgaWYgKG5lZWRVcGRhdGUpIHN3aXBlci51cGRhdGUoKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9O1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KGVsKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5tb3VudGVkKSByZXR1cm4gdHJ1ZTsgLy8gRmluZCBlbFxuXG4gICAgdmFyICRlbCA9ICQoZWwgfHwgc3dpcGVyLnBhcmFtcy5lbCk7XG4gICAgZWwgPSAkZWxbMF07XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZWwuc3dpcGVyID0gc3dpcGVyOyAvLyBGaW5kIFdyYXBwZXJcblxuICAgIHZhciAkd3JhcHBlckVsO1xuXG4gICAgaWYgKGVsICYmIGVsLnNoYWRvd1Jvb3QgJiYgZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAkd3JhcHBlckVsID0gJChlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcykpOyAvLyBDaGlsZHJlbiBuZWVkcyB0byByZXR1cm4gc2xvdCBpdGVtc1xuXG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuICRlbC5jaGlsZHJlbihvcHRpb25zKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwgPSAkZWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgZXh0ZW5kKHN3aXBlciwge1xuICAgICAgJGVsOiAkZWwsXG4gICAgICBlbDogZWwsXG4gICAgICAkd3JhcHBlckVsOiAkd3JhcHBlckVsLFxuICAgICAgd3JhcHBlckVsOiAkd3JhcHBlckVsWzBdLFxuICAgICAgbW91bnRlZDogdHJ1ZSxcbiAgICAgIC8vIFJUTFxuICAgICAgcnRsOiBlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgJGVsLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgcnRsVHJhbnNsYXRlOiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIChlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgJGVsLmNzcygnZGlyZWN0aW9uJykgPT09ICdydGwnKSxcbiAgICAgIHdyb25nUlRMOiAkd3JhcHBlckVsLmNzcygnZGlzcGxheScpID09PSAnLXdlYmtpdC1ib3gnXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KGVsKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuIHN3aXBlcjtcbiAgICB2YXIgbW91bnRlZCA9IHN3aXBlci5tb3VudChlbCk7XG4gICAgaWYgKG1vdW50ZWQgPT09IGZhbHNlKSByZXR1cm4gc3dpcGVyO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVJbml0Jyk7IC8vIFNldCBicmVha3BvaW50XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9IC8vIEFkZCBDbGFzc2VzXG5cblxuICAgIHN3aXBlci5hZGRDbGFzc2VzKCk7IC8vIENyZWF0ZSBsb29wXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIH0gLy8gVXBkYXRlIHNpemVcblxuXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTsgLy8gVXBkYXRlIHNsaWRlc1xuXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9IC8vIFNldCBHcmFiIEN1cnNvclxuXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZWxvYWRJbWFnZXMpIHtcbiAgICAgIHN3aXBlci5wcmVsb2FkSW1hZ2VzKCk7XG4gICAgfSAvLyBTbGlkZSBUbyBJbml0aWFsIFNsaWRlXG5cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgIH0gLy8gQXR0YWNoIGV2ZW50c1xuXG5cbiAgICBzd2lwZXIuYXR0YWNoRXZlbnRzKCk7IC8vIEluaXQgRmxhZ1xuXG4gICAgc3dpcGVyLmluaXRpYWxpemVkID0gdHJ1ZTsgLy8gRW1pdFxuXG4gICAgc3dpcGVyLmVtaXQoJ2luaXQnKTtcbiAgICBzd2lwZXIuZW1pdCgnYWZ0ZXJJbml0Jyk7XG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koZGVsZXRlSW5zdGFuY2UsIGNsZWFuU3R5bGVzKSB7XG4gICAgaWYgKGRlbGV0ZUluc3RhbmNlID09PSB2b2lkIDApIHtcbiAgICAgIGRlbGV0ZUluc3RhbmNlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2xlYW5TdHlsZXMgPT09IHZvaWQgMCkge1xuICAgICAgY2xlYW5TdHlsZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgICAkZWwgPSBzd2lwZXIuJGVsLFxuICAgICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG5cbiAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlci5kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVEZXN0cm95Jyk7IC8vIEluaXQgRmxhZ1xuXG4gICAgc3dpcGVyLmluaXRpYWxpemVkID0gZmFsc2U7IC8vIERldGFjaCBldmVudHNcblxuICAgIHN3aXBlci5kZXRhY2hFdmVudHMoKTsgLy8gRGVzdHJveSBsb29wXG5cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIH0gLy8gQ2xlYW51cCBzdHlsZXNcblxuXG4gICAgaWYgKGNsZWFuU3R5bGVzKSB7XG4gICAgICBzd2lwZXIucmVtb3ZlQ2xhc3NlcygpO1xuICAgICAgJGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAkd3JhcHBlckVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgIGlmIChzbGlkZXMgJiYgc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICBzbGlkZXMucmVtb3ZlQ2xhc3MoW3BhcmFtcy5zbGlkZVZpc2libGVDbGFzcywgcGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MsIHBhcmFtcy5zbGlkZU5leHRDbGFzcywgcGFyYW1zLnNsaWRlUHJldkNsYXNzXS5qb2luKCcgJykpLnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnZGVzdHJveScpOyAvLyBEZXRhY2ggZW1pdHRlciBldmVudHNcblxuICAgIE9iamVjdC5rZXlzKHN3aXBlci5ldmVudHNMaXN0ZW5lcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgc3dpcGVyLm9mZihldmVudE5hbWUpO1xuICAgIH0pO1xuXG4gICAgaWYgKGRlbGV0ZUluc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgc3dpcGVyLiRlbFswXS5zd2lwZXIgPSBudWxsO1xuICAgICAgZGVsZXRlUHJvcHMoc3dpcGVyKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBTd2lwZXIuZXh0ZW5kRGVmYXVsdHMgPSBmdW5jdGlvbiBleHRlbmREZWZhdWx0cyhuZXdEZWZhdWx0cykge1xuICAgIGV4dGVuZChleHRlbmRlZERlZmF1bHRzLCBuZXdEZWZhdWx0cyk7XG4gIH07XG5cbiAgU3dpcGVyLmluc3RhbGxNb2R1bGUgPSBmdW5jdGlvbiBpbnN0YWxsTW9kdWxlKG1vZHVsZSkge1xuICAgIGlmICghU3dpcGVyLnByb3RvdHlwZS5tb2R1bGVzKSBTd2lwZXIucHJvdG90eXBlLm1vZHVsZXMgPSB7fTtcbiAgICB2YXIgbmFtZSA9IG1vZHVsZS5uYW1lIHx8IE9iamVjdC5rZXlzKFN3aXBlci5wcm90b3R5cGUubW9kdWxlcykubGVuZ3RoICsgXCJfXCIgKyBub3coKTtcbiAgICBTd2lwZXIucHJvdG90eXBlLm1vZHVsZXNbbmFtZV0gPSBtb2R1bGU7XG4gIH07XG5cbiAgU3dpcGVyLnVzZSA9IGZ1bmN0aW9uIHVzZShtb2R1bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtb2R1bGUpKSB7XG4gICAgICBtb2R1bGUuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gU3dpcGVyLmluc3RhbGxNb2R1bGUobSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBTd2lwZXI7XG4gICAgfVxuXG4gICAgU3dpcGVyLmluc3RhbGxNb2R1bGUobW9kdWxlKTtcbiAgICByZXR1cm4gU3dpcGVyO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTd2lwZXIsIG51bGwsIFt7XG4gICAga2V5OiBcImV4dGVuZGVkRGVmYXVsdHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBleHRlbmRlZERlZmF1bHRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTd2lwZXI7XG59KCk7XG5cbk9iamVjdC5rZXlzKHByb3RvdHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3RvdHlwZUdyb3VwKSB7XG4gIE9iamVjdC5rZXlzKHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm90b01ldGhvZCkge1xuICAgIFN3aXBlci5wcm90b3R5cGVbcHJvdG9NZXRob2RdID0gcHJvdG90eXBlc1twcm90b3R5cGVHcm91cF1bcHJvdG9NZXRob2RdO1xuICB9KTtcbn0pO1xuU3dpcGVyLnVzZShbUmVzaXplLCBPYnNlcnZlcl0pO1xuZXhwb3J0IGRlZmF1bHQgU3dpcGVyOyJdLAogICJtYXBwaW5ncyI6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
