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
      technologies: ["TypeScript", "p5.js"],
      image: "assets/images/projects/gario.png",
      description: "Petit test de platformer 2D avec moteur physique simple et syst\xE8me de checkpoint.",
      url: "https://github.com/CamilleAbella/Gario"
    },
    {
      name: "Just a Forum",
      technologies: ["TypeScript", "Express", "Sass", "PostgresSQL"],
      image: "assets/images/projects/jf.png",
      description: "D\xE9but de r\xE9seau social/forum \xE0 post r\xE9cursif orient\xE9 d\xE9veloppement (markdown interpr\xE9t\xE9 et syntaxe des blocs de code color\xE9e).",
      url: "https://github.com/CamilleAbella/just-a-forum"
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
          <img src="${project.image}" alt="${project.name} logo">
        </div>
        <div class="swiper-description-container">
          <h2>
            <a href="${project.url}" target="_blank" class="button">
              <i class="fas fa-external-link-alt"></i>
            </a>
            ${project.name}
          </h2>
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2luZGV4LnRzIiwgInNyYy9hcHAvb2JzZXJ2YXRpb24udHMiLCAic3JjL2FwcC9zdG9yYWdlLnRzIiwgInNyYy9hcHAvdGhlbWUudHMiLCAic3JjL2FwcC91dGlscy50cyIsICJzcmMvYXBwL2RhdGEudHMiLCAibm9kZV9tb2R1bGVzL3Nzci13aW5kb3cvc3NyLXdpbmRvdy5lc20uanMiLCAibm9kZV9tb2R1bGVzL2RvbTcvZG9tNy5lc20uanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vdXRpbHMvZG9tLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL3V0aWxzL3V0aWxzLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL3V0aWxzL2dldC1zdXBwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL3V0aWxzL2dldC1kZXZpY2UuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vdXRpbHMvZ2V0LWJyb3dzZXIuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vbW9kdWxlcy9yZXNpemUvcmVzaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL21vZHVsZXMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL21vZHVsYXIuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy1lbWl0dGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2l6ZS5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZUF1dG9IZWlnaHQuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXNPZmZzZXQuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXNQcm9ncmVzcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVByb2dyZXNzLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzQ2xhc3Nlcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZUFjdGl2ZUluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlQ2xpY2tlZFNsaWRlLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9nZXRUcmFuc2xhdGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9zZXRUcmFuc2xhdGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9taW5UcmFuc2xhdGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9tYXhUcmFuc2xhdGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS90cmFuc2xhdGVUby5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdHJhbnNsYXRlL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uL3NldFRyYW5zaXRpb24uanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvblN0YXJ0LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uL3RyYW5zaXRpb25FbmQuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG8uanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG9Mb29wLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZU5leHQuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlUHJldi5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVSZXNldC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVUb0Nsb3Nlc3QuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG9DbGlja2VkU2xpZGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9sb29wL2xvb3BDcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2xvb3AvbG9vcEZpeC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbG9vcC9sb29wRGVzdHJveS5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbG9vcC9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3Ivc2V0R3JhYkN1cnNvci5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3IvdW5zZXRHcmFiQ3Vyc29yLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ncmFiLWN1cnNvci9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL2FwcGVuZFNsaWRlLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vcHJlcGVuZFNsaWRlLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vYWRkU2xpZGUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9yZW1vdmVTbGlkZS5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL3JlbW92ZUFsbFNsaWRlcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25Ub3VjaFN0YXJ0LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25Ub3VjaE1vdmUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblRvdWNoRW5kLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25SZXNpemUuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vbkNsaWNrLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25TY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvYnJlYWtwb2ludHMvc2V0QnJlYWtwb2ludC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvYnJlYWtwb2ludHMvZ2V0QnJlYWtwb2ludC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvYnJlYWtwb2ludHMvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2NsYXNzZXMvYWRkQ2xhc3Nlcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9yZW1vdmVDbGFzc2VzLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9jbGFzc2VzL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9pbWFnZXMvbG9hZEltYWdlLmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9pbWFnZXMvcHJlbG9hZEltYWdlcy5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvaW1hZ2VzL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9jaGVjay1vdmVyZmxvdy9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZGVmYXVsdHMuanMiLCAibm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2NvcmUtY2xhc3MuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCAqIGFzIG9ic2VydmF0aW9uIGZyb20gXCIuL2FwcC9vYnNlcnZhdGlvblwiXG5leHBvcnQgKiBhcyBzdG9yYWdlIGZyb20gXCIuL2FwcC9zdG9yYWdlXCJcbmV4cG9ydCAqIGFzIHRoZW1lIGZyb20gXCIuL2FwcC90aGVtZVwiXG5cbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL2FwcC91dGlsc1wiXG5pbXBvcnQgKiBhcyBkYXRhIGZyb20gXCIuL2FwcC9kYXRhXCJcblxuaW1wb3J0IFN3aXBlciBmcm9tIFwic3dpcGVyXCJcbmltcG9ydCBcInN3aXBlci9zd2lwZXItYnVuZGxlLmNzc1wiXG5cbmNvbnN0ICR3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2lwZXItd3JhcHBlclwiKVxuXG5kYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgJHdyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgdXRpbHMuY3JlYXRlRWxlbWVudEZyb21IVE1MKGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUgZmxleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtwcm9qZWN0LmltYWdlfVwiIGFsdD1cIiR7cHJvamVjdC5uYW1lfSBsb2dvXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIke3Byb2plY3QudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV4dGVybmFsLWxpbmstYWx0XCI+PC9pPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgJHtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICR7cHJvamVjdC50ZWNobm9sb2dpZXNcbiAgICAgICAgICAgICAgLm1hcCgodGVjaG5vKSA9PiBgPGxpPiR7dGVjaG5vfTwvbGk+YClcbiAgICAgICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgKVxuICApXG59KVxuXG5uZXcgU3dpcGVyKFwiLnN3aXBlci1jb250YWluZXJcIiwge1xuICBsb29wOiB0cnVlLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgdHlwZTogXCJwcm9ncmVzc2JhclwiLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBhbGxvd1NsaWRlTmV4dDogdHJ1ZSxcbiAgYWxsb3dTbGlkZVByZXY6IHRydWUsXG59KVxuIiwgImV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgY2FsbGJhY2s6IEludGVyc2VjdGlvbk9ic2VydmVyQ2FsbGJhY2tcbik6IEludGVyc2VjdGlvbk9ic2VydmVyIHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIG9ic2VydmVyXG59XG4iLCAiZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlIHtcbiAgZGFyazogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmUoKTogUGFydGlhbDxTdG9yYWdlPiB7XG4gIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmFnZVwiKVxuICByZXR1cm4gSlNPTi5wYXJzZShyYXcgPz8gXCJ7fVwiKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RvcmUoc3RvcmU6IFBhcnRpYWw8U3RvcmFnZT4pIHtcbiAgY29uc3QgcmF3ID0gSlNPTi5zdHJpbmdpZnkoc3RvcmUpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmFnZVwiLCByYXcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8U3RvcmFnZUtleSBleHRlbmRzIGtleW9mIFN0b3JhZ2U+KFxuICBuYW1lOiBTdG9yYWdlS2V5LFxuICB2YWx1ZTogU3RvcmFnZVtTdG9yYWdlS2V5XVxuKSB7XG4gIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKVxuICBzdG9yZVtuYW1lXSA9IHZhbHVlXG4gIHNldFN0b3JlKHN0b3JlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFN0b3JhZ2VLZXkgZXh0ZW5kcyBrZXlvZiBTdG9yYWdlPihcbiAgbmFtZTogU3RvcmFnZUtleVxuKTogU3RvcmFnZVtTdG9yYWdlS2V5XSB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKVxuICByZXR1cm4gc3RvcmVbbmFtZV1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZTxTdG9yYWdlS2V5IGV4dGVuZHMga2V5b2YgU3RvcmFnZT4oXG4gIG5hbWU6IFN0b3JhZ2VLZXksXG4gIGRlZmF1bHRWYWx1ZTogU3RvcmFnZVtTdG9yYWdlS2V5XVxuKTogU3RvcmFnZVtTdG9yYWdlS2V5XSB7XG4gIGxldCB2YWx1ZSA9IGdldChuYW1lKVxuICBpZiAodmFsdWUpIHJldHVybiB2YWx1ZVxuICBzZXQobmFtZSwgZGVmYXVsdFZhbHVlKVxuICByZXR1cm4gZGVmYXVsdFZhbHVlXG59XG4iLCAiaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCJcblxuaWYgKHN0b3JhZ2UuZ2V0KFwiZGFya1wiKSkgc3dpdGNoSXQoKVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoSXQoKSB7XG4gIGNvbnN0IGFjdGl2YXRlZCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIilcbiAgc3RvcmFnZS5zZXQoXCJkYXJrXCIsIGFjdGl2YXRlZClcbiAgY29uc29sZS5sb2coYWN0aXZhdGVkKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50RnJvbUhUTUw8XG4gIEVsZW1lbnQgZXh0ZW5kcyBDaGlsZE5vZGUgPSBIVE1MRGl2RWxlbWVudFxuPihodG1sOiBzdHJpbmcpOiBFbGVtZW50IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBkaXYuaW5uZXJIVE1MID0gaHRtbC50cmltKClcbiAgcmV0dXJuIGRpdi5maXJzdENoaWxkIGFzIEVsZW1lbnRcbn1cbiIsICJleHBvcnQgaW50ZXJmYWNlIFByb2plY3Qge1xuICBuYW1lOiBzdHJpbmdcbiAgdGVjaG5vbG9naWVzOiBzdHJpbmdbXVxuICBpbWFnZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RzOiBQcm9qZWN0W10gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkdhcmlvXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbXCJUeXBlU2NyaXB0XCIsIFwicDUuanNcIl0sXG4gICAgaW1hZ2U6IFwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9nYXJpby5wbmdcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiUGV0aXQgdGVzdCBkZSBwbGF0Zm9ybWVyIDJEIGF2ZWMgbW90ZXVyIHBoeXNpcXVlIHNpbXBsZSBldCBzeXN0XHUwMEU4bWUgZGUgY2hlY2twb2ludC5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0NhbWlsbGVBYmVsbGEvR2FyaW9cIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJKdXN0IGEgRm9ydW1cIixcbiAgICB0ZWNobm9sb2dpZXM6IFtcIlR5cGVTY3JpcHRcIiwgXCJFeHByZXNzXCIsIFwiU2Fzc1wiLCBcIlBvc3RncmVzU1FMXCJdLFxuICAgIGltYWdlOiBcImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvamYucG5nXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkRcdTAwRTlidXQgZGUgclx1MDBFOXNlYXUgc29jaWFsL2ZvcnVtIFx1MDBFMCBwb3N0IHJcdTAwRTljdXJzaWYgb3JpZW50XHUwMEU5IGRcdTAwRTl2ZWxvcHBlbWVudCAobWFya2Rvd24gaW50ZXJwclx1MDBFOXRcdTAwRTkgZXQgc3ludGF4ZSBkZXMgYmxvY3MgZGUgY29kZSBjb2xvclx1MDBFOWUpLlwiLFxuICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vQ2FtaWxsZUFiZWxsYS9qdXN0LWEtZm9ydW1cIlxuICB9LFxuXVxuIiwgIi8qKlxuICogU1NSIFdpbmRvdyAzLjAuMFxuICogQmV0dGVyIGhhbmRsaW5nIGZvciB3aW5kb3cgb2JqZWN0IGluIFNTUiBlbnZpcm9ubWVudFxuICogaHR0cHM6Ly9naXRodWIuY29tL25vbGltaXRzNHdlYi9zc3Itd2luZG93XG4gKlxuICogQ29weXJpZ2h0IDIwMjAsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IE5vdmVtYmVyIDksIDIwMjBcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiAob2JqICE9PSBudWxsICYmXG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgICAgICdjb25zdHJ1Y3RvcicgaW4gb2JqICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KTtcbn1cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNyYykge1xuICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB7fTsgfVxuICAgIGlmIChzcmMgPT09IHZvaWQgMCkgeyBzcmMgPSB7fTsgfVxuICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qoc3JjW2tleV0pICYmXG4gICAgICAgICAgICBpc09iamVjdCh0YXJnZXRba2V5XSkgJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNyY1trZXldKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBleHRlbmQodGFyZ2V0W2tleV0sIHNyY1trZXldKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG52YXIgc3NyRG9jdW1lbnQgPSB7XG4gICAgYm9keToge30sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkgeyB9LFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBhY3RpdmVFbGVtZW50OiB7XG4gICAgICAgIGJsdXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgbm9kZU5hbWU6ICcnLFxuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgZ2V0RWxlbWVudEJ5SWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBjcmVhdGVFdmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdEV2ZW50OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudE5TOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIGltcG9ydE5vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgICBoYXNoOiAnJyxcbiAgICAgICAgaG9zdDogJycsXG4gICAgICAgIGhvc3RuYW1lOiAnJyxcbiAgICAgICAgaHJlZjogJycsXG4gICAgICAgIG9yaWdpbjogJycsXG4gICAgICAgIHBhdGhuYW1lOiAnJyxcbiAgICAgICAgcHJvdG9jb2w6ICcnLFxuICAgICAgICBzZWFyY2g6ICcnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKSB7XG4gICAgdmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuICAgIGV4dGVuZChkb2MsIHNzckRvY3VtZW50KTtcbiAgICByZXR1cm4gZG9jO1xufVxuXG52YXIgc3NyV2luZG93ID0ge1xuICAgIGRvY3VtZW50OiBzc3JEb2N1bWVudCxcbiAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgdXNlckFnZW50OiAnJyxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGhhc2g6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgfSxcbiAgICBoaXN0b3J5OiB7XG4gICAgICAgIHJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgZ286IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgYmFjazogZnVuY3Rpb24gKCkgeyB9LFxuICAgIH0sXG4gICAgQ3VzdG9tRXZlbnQ6IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBJbWFnZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgIERhdGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBzY3JlZW46IHt9LFxuICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBtYXRjaE1lZGlhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gICAgfSxcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH0sXG59O1xuZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICAgIHZhciB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuICAgIGV4dGVuZCh3aW4sIHNzcldpbmRvdyk7XG4gICAgcmV0dXJuIHdpbjtcbn1cblxuZXhwb3J0IHsgZXh0ZW5kLCBnZXREb2N1bWVudCwgZ2V0V2luZG93LCBzc3JEb2N1bWVudCwgc3NyV2luZG93IH07XG4iLCAiLyoqXG4gKiBEb203IDMuMC4wXG4gKiBNaW5pbWFsaXN0aWMgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBET00gbWFuaXB1bGF0aW9uLCB3aXRoIGEgalF1ZXJ5LWNvbXBhdGlibGUgQVBJXG4gKiBodHRwczovL2ZyYW1ld29yazcuaW8vZG9jcy9kb203Lmh0bWxcbiAqXG4gKiBDb3B5cmlnaHQgMjAyMCwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqXG4gKiBSZWxlYXNlZCBvbjogTm92ZW1iZXIgOSwgMjAyMFxuICovXG5pbXBvcnQgeyBnZXRXaW5kb3csIGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhX2lzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICB9O1xuXG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbmZ1bmN0aW9uIG1ha2VSZWFjdGl2ZShvYmopIHtcbiAgdmFyIHByb3RvID0gb2JqLl9fcHJvdG9fXztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ19fcHJvdG9fXycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBwcm90bztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBwcm90by5fX3Byb3RvX18gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgRG9tNyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0FycmF5KSB7XG4gIF9pbmhlcml0c0xvb3NlKERvbTcsIF9BcnJheSk7XG5cbiAgZnVuY3Rpb24gRG9tNyhpdGVtcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0FycmF5LmNhbGwuYXBwbHkoX0FycmF5LCBbdGhpc10uY29uY2F0KGl0ZW1zKSkgfHwgdGhpcztcbiAgICBtYWtlUmVhY3RpdmUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBEb203O1xufSggLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoQXJyYXkpKTtcblxuZnVuY3Rpb24gYXJyYXlGbGF0KGFycikge1xuICBpZiAoYXJyID09PSB2b2lkIDApIHtcbiAgICBhcnIgPSBbXTtcbiAgfVxuXG4gIHZhciByZXMgPSBbXTtcbiAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XG4gICAgICByZXMucHVzaC5hcHBseShyZXMsIGFycmF5RmxhdChlbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMucHVzaChlbCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFyciwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChhcnIsIGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGFycmF5VW5pcXVlKGFycikge1xuICB2YXIgdW5pcXVlQXJyYXkgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh1bmlxdWVBcnJheS5pbmRleE9mKGFycltpXSkgPT09IC0xKSB1bmlxdWVBcnJheS5wdXNoKGFycltpXSk7XG4gIH1cblxuICByZXR1cm4gdW5pcXVlQXJyYXk7XG59XG5mdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oLikvZywgZnVuY3Rpb24gKG1hdGNoLCBncm91cCkge1xuICAgIHJldHVybiBncm91cC50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcXNhKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIFtzZWxlY3Rvcl07XG4gIH1cblxuICB2YXIgYSA9IFtdO1xuICB2YXIgcmVzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGEucHVzaChyZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICB2YXIgYXJyID0gW107XG5cbiAgaWYgKCFjb250ZXh0ICYmIHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IERvbTcoYXJyKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGh0bWwgPSBzZWxlY3Rvci50cmltKCk7XG5cbiAgICBpZiAoaHRtbC5pbmRleE9mKCc8JykgPj0gMCAmJiBodG1sLmluZGV4T2YoJz4nKSA+PSAwKSB7XG4gICAgICB2YXIgdG9DcmVhdGUgPSAnZGl2JztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzxsaScpID09PSAwKSB0b0NyZWF0ZSA9ICd1bCc7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dHInKSA9PT0gMCkgdG9DcmVhdGUgPSAndGJvZHknO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRkJykgPT09IDAgfHwgaHRtbC5pbmRleE9mKCc8dGgnKSA9PT0gMCkgdG9DcmVhdGUgPSAndHInO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRib2R5JykgPT09IDApIHRvQ3JlYXRlID0gJ3RhYmxlJztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzxvcHRpb24nKSA9PT0gMCkgdG9DcmVhdGUgPSAnc2VsZWN0JztcbiAgICAgIHZhciB0ZW1wUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0b0NyZWF0ZSk7XG4gICAgICB0ZW1wUGFyZW50LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcFBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyci5wdXNoKHRlbXBQYXJlbnQuY2hpbGROb2Rlc1tpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyciA9IHFzYShzZWxlY3Rvci50cmltKCksIGNvbnRleHQgfHwgZG9jdW1lbnQpO1xuICAgIH0gLy8gYXJyID0gcXNhKHNlbGVjdG9yLCBkb2N1bWVudCk7XG5cbiAgfSBlbHNlIGlmIChzZWxlY3Rvci5ub2RlVHlwZSB8fCBzZWxlY3RvciA9PT0gd2luZG93IHx8IHNlbGVjdG9yID09PSBkb2N1bWVudCkge1xuICAgIGFyci5wdXNoKHNlbGVjdG9yKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHJldHVybiBzZWxlY3RvcjtcbiAgICBhcnIgPSBzZWxlY3RvcjtcbiAgfVxuXG4gIHJldHVybiBuZXcgRG9tNyhhcnJheVVuaXF1ZShhcnIpKTtcbn1cblxuJC5mbiA9IERvbTcucHJvdG90eXBlO1xuXG5mdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgY2xhc3Nlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMuc3BsaXQoJyAnKTtcbiAgfSkpO1xuICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgdmFyIF9lbCRjbGFzc0xpc3Q7XG5cbiAgICAoX2VsJGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdCkuYWRkLmFwcGx5KF9lbCRjbGFzc0xpc3QsIGNsYXNzTmFtZXMpO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzZXMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBjbGFzc2VzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIHZhciBfZWwkY2xhc3NMaXN0MjtcblxuICAgIChfZWwkY2xhc3NMaXN0MiA9IGVsLmNsYXNzTGlzdCkucmVtb3ZlLmFwcGx5KF9lbCRjbGFzc0xpc3QyLCBjbGFzc05hbWVzKTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcygpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgY2xhc3Nlc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgdmFyIGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5zcGxpdCgnICcpO1xuICB9KSk7XG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBjbGFzc05hbWVzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NlcyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGNsYXNzZXNbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIHZhciBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMuc3BsaXQoJyAnKTtcbiAgfSkpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIodGhpcywgZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuZmlsdGVyKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9KS5sZW5ndGggPiAwO1xuICB9KS5sZW5ndGggPiAwO1xufVxuXG5mdW5jdGlvbiBhdHRyKGF0dHJzLCB2YWx1ZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXR0cnMgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gR2V0IGF0dHJcbiAgICBpZiAodGhpc1swXSkgcmV0dXJuIHRoaXNbMF0uZ2V0QXR0cmlidXRlKGF0dHJzKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IC8vIFNldCBhdHRyc1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIC8vIFN0cmluZ1xuICAgICAgdGhpc1tpXS5zZXRBdHRyaWJ1dGUoYXR0cnMsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT2JqZWN0XG4gICAgICBmb3IgKHZhciBhdHRyTmFtZSBpbiBhdHRycykge1xuICAgICAgICB0aGlzW2ldW2F0dHJOYW1lXSA9IGF0dHJzW2F0dHJOYW1lXTtcbiAgICAgICAgdGhpc1tpXS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJzW2F0dHJOYW1lXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHIoYXR0cikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBwcm9wKHByb3BzLCB2YWx1ZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gR2V0IHByb3BcbiAgICBpZiAodGhpc1swXSkgcmV0dXJuIHRoaXNbMF1bcHJvcHNdO1xuICB9IGVsc2Uge1xuICAgIC8vIFNldCBwcm9wc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gU3RyaW5nXG4gICAgICAgIHRoaXNbaV1bcHJvcHNdID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPYmplY3RcbiAgICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgICB0aGlzW2ldW3Byb3BOYW1lXSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGRhdGEoa2V5LCB2YWx1ZSkge1xuICB2YXIgZWw7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbCA9IHRoaXNbMF07XG4gICAgaWYgKCFlbCkgcmV0dXJuIHVuZGVmaW5lZDsgLy8gR2V0IHZhbHVlXG5cbiAgICBpZiAoZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiBrZXkgaW4gZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkge1xuICAgICAgcmV0dXJuIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YUtleSA9IGVsLmdldEF0dHJpYnV0ZShcImRhdGEtXCIgKyBrZXkpO1xuXG4gICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgIHJldHVybiBkYXRhS2V5O1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gLy8gU2V0IHZhbHVlXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBlbCA9IHRoaXNbaV07XG4gICAgaWYgKCFlbC5kb203RWxlbWVudERhdGFTdG9yYWdlKSBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlID0ge307XG4gICAgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGF0YShrZXkpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChlbC5kb203RWxlbWVudERhdGFTdG9yYWdlICYmIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSkge1xuICAgICAgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldID0gbnVsbDtcbiAgICAgIGRlbGV0ZSBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXQoKSB7XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciBkYXRhc2V0ID0ge307IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBpZiAoZWwuZGF0YXNldCkge1xuICAgIGZvciAodmFyIGRhdGFLZXkgaW4gZWwuZGF0YXNldCkge1xuICAgICAgZGF0YXNldFtkYXRhS2V5XSA9IGVsLmRhdGFzZXRbZGF0YUtleV07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdmFyIF9hdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcblxuICAgICAgaWYgKF9hdHRyLm5hbWUuaW5kZXhPZignZGF0YS0nKSA+PSAwKSB7XG4gICAgICAgIGRhdGFzZXRbdG9DYW1lbENhc2UoX2F0dHIubmFtZS5zcGxpdCgnZGF0YS0nKVsxXSldID0gX2F0dHIudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGRhdGFzZXQpIHtcbiAgICBpZiAoZGF0YXNldFtrZXldID09PSAnZmFsc2UnKSBkYXRhc2V0W2tleV0gPSBmYWxzZTtlbHNlIGlmIChkYXRhc2V0W2tleV0gPT09ICd0cnVlJykgZGF0YXNldFtrZXldID0gdHJ1ZTtlbHNlIGlmIChwYXJzZUZsb2F0KGRhdGFzZXRba2V5XSkgPT09IGRhdGFzZXRba2V5XSAqIDEpIGRhdGFzZXRba2V5XSAqPSAxO1xuICB9XG5cbiAgcmV0dXJuIGRhdGFzZXQ7XG59XG5cbmZ1bmN0aW9uIHZhbCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGdldCB2YWx1ZVxuICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgaWYgKCFlbCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGlmIChlbC5tdWx0aXBsZSAmJiBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YWx1ZXMucHVzaChlbC5zZWxlY3RlZE9wdGlvbnNbaV0udmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHJldHVybiBlbC52YWx1ZTtcbiAgfSAvLyBzZXQgdmFsdWVcblxuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgIHZhciBfZWwgPSB0aGlzW19pXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBfZWwubXVsdGlwbGUgJiYgX2VsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9lbC5vcHRpb25zLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIF9lbC5vcHRpb25zW2pdLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihfZWwub3B0aW9uc1tqXS52YWx1ZSkgPj0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgX2VsLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLnZhbCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbihkdXJhdGlvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHR5cGVvZiBkdXJhdGlvbiAhPT0gJ3N0cmluZycgPyBkdXJhdGlvbiArIFwibXNcIiA6IGR1cmF0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIG9uKCkge1xuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBhcmdzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICB2YXIgZXZlbnRUeXBlID0gYXJnc1swXSxcbiAgICAgIHRhcmdldFNlbGVjdG9yID0gYXJnc1sxXSxcbiAgICAgIGxpc3RlbmVyID0gYXJnc1syXSxcbiAgICAgIGNhcHR1cmUgPSBhcmdzWzNdO1xuXG4gIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VHlwZSA9IGFyZ3NbMF07XG4gICAgbGlzdGVuZXIgPSBhcmdzWzFdO1xuICAgIGNhcHR1cmUgPSBhcmdzWzJdO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFjYXB0dXJlKSBjYXB0dXJlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGl2ZUV2ZW50KGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICB2YXIgZXZlbnREYXRhID0gZS50YXJnZXQuZG9tN0V2ZW50RGF0YSB8fCBbXTtcblxuICAgIGlmIChldmVudERhdGEuaW5kZXhPZihlKSA8IDApIHtcbiAgICAgIGV2ZW50RGF0YS51bnNoaWZ0KGUpO1xuICAgIH1cblxuICAgIGlmICgkKHRhcmdldCkuaXModGFyZ2V0U2VsZWN0b3IpKSBsaXN0ZW5lci5hcHBseSh0YXJnZXQsIGV2ZW50RGF0YSk7ZWxzZSB7XG4gICAgICB2YXIgX3BhcmVudHMgPSAkKHRhcmdldCkucGFyZW50cygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBfcGFyZW50cy5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICBpZiAoJChfcGFyZW50c1trXSkuaXModGFyZ2V0U2VsZWN0b3IpKSBsaXN0ZW5lci5hcHBseShfcGFyZW50c1trXSwgZXZlbnREYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFdmVudChlKSB7XG4gICAgdmFyIGV2ZW50RGF0YSA9IGUgJiYgZS50YXJnZXQgPyBlLnRhcmdldC5kb203RXZlbnREYXRhIHx8IFtdIDogW107XG5cbiAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICBldmVudERhdGEudW5zaGlmdChlKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudERhdGEpO1xuICB9XG5cbiAgdmFyIGV2ZW50cyA9IGV2ZW50VHlwZS5zcGxpdCgnICcpO1xuICB2YXIgajtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKCF0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBldmVudHNbal07XG4gICAgICAgIGlmICghZWwuZG9tN0xpc3RlbmVycykgZWwuZG9tN0xpc3RlbmVycyA9IHt9O1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdKSBlbC5kb203TGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICBlbC5kb203TGlzdGVuZXJzW2V2ZW50XS5wdXNoKHtcbiAgICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG4gICAgICAgICAgcHJveHlMaXN0ZW5lcjogaGFuZGxlRXZlbnRcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZUV2ZW50LCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGl2ZSBldmVudHNcbiAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdmFyIF9ldmVudCA9IGV2ZW50c1tqXTtcbiAgICAgICAgaWYgKCFlbC5kb203TGl2ZUxpc3RlbmVycykgZWwuZG9tN0xpdmVMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgaWYgKCFlbC5kb203TGl2ZUxpc3RlbmVyc1tfZXZlbnRdKSBlbC5kb203TGl2ZUxpc3RlbmVyc1tfZXZlbnRdID0gW107XG5cbiAgICAgICAgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XS5wdXNoKHtcbiAgICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG4gICAgICAgICAgcHJveHlMaXN0ZW5lcjogaGFuZGxlTGl2ZUV2ZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoX2V2ZW50LCBoYW5kbGVMaXZlRXZlbnQsIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvZmYoKSB7XG4gIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgIGFyZ3NbX2tleTZdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgfVxuXG4gIHZhciBldmVudFR5cGUgPSBhcmdzWzBdLFxuICAgICAgdGFyZ2V0U2VsZWN0b3IgPSBhcmdzWzFdLFxuICAgICAgbGlzdGVuZXIgPSBhcmdzWzJdLFxuICAgICAgY2FwdHVyZSA9IGFyZ3NbM107XG5cbiAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUeXBlID0gYXJnc1swXTtcbiAgICBsaXN0ZW5lciA9IGFyZ3NbMV07XG4gICAgY2FwdHVyZSA9IGFyZ3NbMl07XG4gICAgdGFyZ2V0U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoIWNhcHR1cmUpIGNhcHR1cmUgPSBmYWxzZTtcbiAgdmFyIGV2ZW50cyA9IGV2ZW50VHlwZS5zcGxpdCgnICcpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGV2ZW50ID0gZXZlbnRzW2ldO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzW2pdO1xuICAgICAgdmFyIGhhbmRsZXJzID0gdm9pZCAwO1xuXG4gICAgICBpZiAoIXRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXN0ZW5lcnMpIHtcbiAgICAgICAgaGFuZGxlcnMgPSBlbC5kb203TGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2VsZWN0b3IgJiYgZWwuZG9tN0xpdmVMaXN0ZW5lcnMpIHtcbiAgICAgICAgaGFuZGxlcnMgPSBlbC5kb203TGl2ZUxpc3RlbmVyc1tldmVudF07XG4gICAgICB9XG5cbiAgICAgIGlmIChoYW5kbGVycyAmJiBoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgayA9IGhhbmRsZXJzLmxlbmd0aCAtIDE7IGsgPj0gMDsgayAtPSAxKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBoYW5kbGVyc1trXTtcblxuICAgICAgICAgIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lci5kb203cHJveHkgJiYgaGFuZGxlci5saXN0ZW5lci5kb203cHJveHkgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvbmNlKCkge1xuICB2YXIgZG9tID0gdGhpcztcblxuICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjcpLCBfa2V5NyA9IDA7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIHtcbiAgICBhcmdzW19rZXk3XSA9IGFyZ3VtZW50c1tfa2V5N107XG4gIH1cblxuICB2YXIgZXZlbnROYW1lID0gYXJnc1swXSxcbiAgICAgIHRhcmdldFNlbGVjdG9yID0gYXJnc1sxXSxcbiAgICAgIGxpc3RlbmVyID0gYXJnc1syXSxcbiAgICAgIGNhcHR1cmUgPSBhcmdzWzNdO1xuXG4gIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50TmFtZSA9IGFyZ3NbMF07XG4gICAgbGlzdGVuZXIgPSBhcmdzWzFdO1xuICAgIGNhcHR1cmUgPSBhcmdzWzJdO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gb25jZUhhbmRsZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbjggPSBhcmd1bWVudHMubGVuZ3RoLCBldmVudEFyZ3MgPSBuZXcgQXJyYXkoX2xlbjgpLCBfa2V5OCA9IDA7IF9rZXk4IDwgX2xlbjg7IF9rZXk4KyspIHtcbiAgICAgIGV2ZW50QXJnc1tfa2V5OF0gPSBhcmd1bWVudHNbX2tleThdO1xuICAgIH1cblxuICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGV2ZW50QXJncyk7XG4gICAgZG9tLm9mZihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBvbmNlSGFuZGxlciwgY2FwdHVyZSk7XG5cbiAgICBpZiAob25jZUhhbmRsZXIuZG9tN3Byb3h5KSB7XG4gICAgICBkZWxldGUgb25jZUhhbmRsZXIuZG9tN3Byb3h5O1xuICAgIH1cbiAgfVxuXG4gIG9uY2VIYW5kbGVyLmRvbTdwcm94eSA9IGxpc3RlbmVyO1xuICByZXR1cm4gZG9tLm9uKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIG9uY2VIYW5kbGVyLCBjYXB0dXJlKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlcigpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGZvciAodmFyIF9sZW45ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuOSksIF9rZXk5ID0gMDsgX2tleTkgPCBfbGVuOTsgX2tleTkrKykge1xuICAgIGFyZ3NbX2tleTldID0gYXJndW1lbnRzW19rZXk5XTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSBhcmdzWzBdLnNwbGl0KCcgJyk7XG4gIHZhciBldmVudERhdGEgPSBhcmdzWzFdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGV2ZW50ID0gZXZlbnRzW2ldO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzW2pdO1xuXG4gICAgICBpZiAod2luZG93LkN1c3RvbUV2ZW50KSB7XG4gICAgICAgIHZhciBldnQgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgZGV0YWlsOiBldmVudERhdGEsXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5kb203RXZlbnREYXRhID0gYXJncy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEsIGRhdGFJbmRleCkge1xuICAgICAgICAgIHJldHVybiBkYXRhSW5kZXggPiAwO1xuICAgICAgICB9KTtcbiAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgICBlbC5kb203RXZlbnREYXRhID0gW107XG4gICAgICAgIGRlbGV0ZSBlbC5kb203RXZlbnREYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGNhbGxiYWNrKSB7XG4gIHZhciBkb20gPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICBkb20ub2ZmKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGRvbS5vbigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYW5pbWF0aW9uRW5kKGNhbGxiYWNrKSB7XG4gIHZhciBkb20gPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICBkb20ub2ZmKCdhbmltYXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgZG9tLm9uKCdhbmltYXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHdpZHRoKCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNzcygnd2lkdGgnKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gb3V0ZXJXaWR0aChpbmNsdWRlTWFyZ2lucykge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICB2YXIgX3N0eWxlcyA9IHRoaXMuc3R5bGVzKCk7XG5cbiAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoICsgcGFyc2VGbG9hdChfc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1yaWdodCcpKSArIHBhcnNlRmxvYXQoX3N0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tbGVmdCcpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBoZWlnaHQoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBpZiAodGhpc1swXSA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNzcygnaGVpZ2h0JykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dGVySGVpZ2h0KGluY2x1ZGVNYXJnaW5zKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgIHZhciBfc3R5bGVzMiA9IHRoaXMuc3R5bGVzKCk7XG5cbiAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodCArIHBhcnNlRmxvYXQoX3N0eWxlczIuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpKSArIHBhcnNlRmxvYXQoX3N0eWxlczIuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KCkge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICAgIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICB2YXIgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciBjbGllbnRUb3AgPSBlbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgICB2YXIgY2xpZW50TGVmdCA9IGVsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gICAgdmFyIHNjcm9sbFRvcCA9IGVsID09PSB3aW5kb3cgPyB3aW5kb3cuc2Nyb2xsWSA6IGVsLnNjcm9sbFRvcDtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsID09PSB3aW5kb3cgPyB3aW5kb3cuc2Nyb2xsWCA6IGVsLnNjcm9sbExlZnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYm94LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGhpZGUoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzaG93KCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAvLyBTdGlsbCBub3QgdmlzaWJsZVxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHN0eWxlcygpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpO1xuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIGNzcyhwcm9wcywgdmFsdWUpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgaTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyAuY3NzKCd3aWR0aCcpXG4gICAgICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAuY3NzKHsgd2lkdGg6ICcxMDBweCcgfSlcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGZvciAodmFyIF9wcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXS5zdHlsZVtfcHJvcF0gPSBwcm9wc1tfcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIC8vIC5jc3MoJ3dpZHRoJywgJzEwMHB4JylcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpc1tpXS5zdHlsZVtwcm9wc10gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBlYWNoKGNhbGxiYWNrKSB7XG4gIGlmICghY2FsbGJhY2spIHJldHVybiB0aGlzO1xuICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgIGNhbGxiYWNrLmFwcGx5KGVsLCBbZWwsIGluZGV4XSk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBhcnJheUZpbHRlcih0aGlzLCBjYWxsYmFjayk7XG4gIHJldHVybiAkKHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIGh0bWwoaHRtbCkge1xuICBpZiAodHlwZW9mIGh0bWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLmlubmVySFRNTCA6IG51bGw7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdGV4dCh0ZXh0KSB7XG4gIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdGhpc1swXSA/IHRoaXNbMF0udGV4dENvbnRlbnQudHJpbSgpIDogbnVsbDtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGlzKHNlbGVjdG9yKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIGVsID0gdGhpc1swXTtcbiAgdmFyIGNvbXBhcmVXaXRoO1xuICB2YXIgaTtcbiAgaWYgKCFlbCB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZWwubWF0Y2hlcykgcmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbC5tc01hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb21wYXJlV2l0aCA9ICQoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbXBhcmVXaXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IGVsKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIGVsID09PSBkb2N1bWVudDtcbiAgfVxuXG4gIGlmIChzZWxlY3RvciA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIGVsID09PSB3aW5kb3c7XG4gIH1cblxuICBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgY29tcGFyZVdpdGggPSBzZWxlY3Rvci5ub2RlVHlwZSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSBlbCkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgdmFyIGNoaWxkID0gdGhpc1swXTtcbiAgdmFyIGk7XG5cbiAgaWYgKGNoaWxkKSB7XG4gICAgaSA9IDA7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgd2hpbGUgKChjaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZykgIT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkgaSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBpO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXEoaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzO1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID4gbGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICB2YXIgcmV0dXJuSW5kZXggPSBsZW5ndGggKyBpbmRleDtcbiAgICBpZiAocmV0dXJuSW5kZXggPCAwKSByZXR1cm4gJChbXSk7XG4gICAgcmV0dXJuICQoW3RoaXNbcmV0dXJuSW5kZXhdXSk7XG4gIH1cblxuICByZXR1cm4gJChbdGhpc1tpbmRleF1dKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKCkge1xuICB2YXIgbmV3Q2hpbGQ7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBhcmd1bWVudHMubGVuZ3RoOyBrICs9IDEpIHtcbiAgICBuZXdDaGlsZCA9IGsgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gayA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1trXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcblxuICAgICAgICB3aGlsZSAodGVtcERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZCh0ZW1wRGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZFtqXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgJChwYXJlbnQpLmFwcGVuZCh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHByZXBlbmQobmV3Q2hpbGQpIHtcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIGk7XG4gIHZhciBqO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuXG4gICAgICBmb3IgKGogPSB0ZW1wRGl2LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqIC09IDEpIHtcbiAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUodGVtcERpdi5jaGlsZE5vZGVzW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGRbal0sIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kVG8ocGFyZW50KSB7XG4gICQocGFyZW50KS5wcmVwZW5kKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHNlbGVjdG9yKSB7XG4gIHZhciBiZWZvcmUgPSAkKHNlbGVjdG9yKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYmVmb3JlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmVmb3JlWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sIGJlZm9yZVswXSk7XG4gICAgfSBlbHNlIGlmIChiZWZvcmUubGVuZ3RoID4gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBiZWZvcmUubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgYmVmb3JlW2pdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0uY2xvbmVOb2RlKHRydWUpLCBiZWZvcmVbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRBZnRlcihzZWxlY3Rvcikge1xuICB2YXIgYWZ0ZXIgPSAkKHNlbGVjdG9yKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYWZ0ZXIubGVuZ3RoID09PSAxKSB7XG4gICAgICBhZnRlclswXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLCBhZnRlclswXS5uZXh0U2libGluZyk7XG4gICAgfSBlbHNlIGlmIChhZnRlci5sZW5ndGggPiAxKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFmdGVyLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGFmdGVyW2pdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0uY2xvbmVOb2RlKHRydWUpLCBhZnRlcltqXS5uZXh0U2libGluZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG5leHQoc2VsZWN0b3IpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nICYmICQodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gJChbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICQoW10pO1xuICAgIH1cblxuICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZykgcmV0dXJuICQoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgcmV0dXJuICQoW10pO1xufVxuXG5mdW5jdGlvbiBuZXh0QWxsKHNlbGVjdG9yKSB7XG4gIHZhciBuZXh0RWxzID0gW107XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiAkKFtdKTtcblxuICB3aGlsZSAoZWwubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgdmFyIF9uZXh0ID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICgkKF9uZXh0KS5pcyhzZWxlY3RvcikpIG5leHRFbHMucHVzaChfbmV4dCk7XG4gICAgfSBlbHNlIG5leHRFbHMucHVzaChfbmV4dCk7XG5cbiAgICBlbCA9IF9uZXh0O1xuICB9XG5cbiAgcmV0dXJuICQobmV4dEVscyk7XG59XG5cbmZ1bmN0aW9uIHByZXYoc2VsZWN0b3IpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHZhciBlbCA9IHRoaXNbMF07XG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmICQoZWwucHJldmlvdXNFbGVtZW50U2libGluZykuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiAkKFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkKFtdKTtcbiAgICB9XG5cbiAgICBpZiAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykgcmV0dXJuICQoW2VsLnByZXZpb3VzRWxlbWVudFNpYmxpbmddKTtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICByZXR1cm4gJChbXSk7XG59XG5cbmZ1bmN0aW9uIHByZXZBbGwoc2VsZWN0b3IpIHtcbiAgdmFyIHByZXZFbHMgPSBbXTtcbiAgdmFyIGVsID0gdGhpc1swXTtcbiAgaWYgKCFlbCkgcmV0dXJuICQoW10pO1xuXG4gIHdoaWxlIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgdmFyIF9wcmV2ID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChfcHJldikuaXMoc2VsZWN0b3IpKSBwcmV2RWxzLnB1c2goX3ByZXYpO1xuICAgIH0gZWxzZSBwcmV2RWxzLnB1c2goX3ByZXYpO1xuXG4gICAgZWwgPSBfcHJldjtcbiAgfVxuXG4gIHJldHVybiAkKHByZXZFbHMpO1xufVxuXG5mdW5jdGlvbiBzaWJsaW5ncyhzZWxlY3Rvcikge1xuICByZXR1cm4gdGhpcy5uZXh0QWxsKHNlbGVjdG9yKS5hZGQodGhpcy5wcmV2QWxsKHNlbGVjdG9yKSk7XG59XG5cbmZ1bmN0aW9uIHBhcmVudChzZWxlY3Rvcikge1xuICB2YXIgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRoaXNbaV0ucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIGlmICgkKHRoaXNbaV0ucGFyZW50Tm9kZSkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKHBhcmVudHMpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnRzKHNlbGVjdG9yKSB7XG4gIHZhciBwYXJlbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgX3BhcmVudCA9IHRoaXNbaV0ucGFyZW50Tm9kZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgd2hpbGUgKF9wYXJlbnQpIHtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJChfcGFyZW50KS5pcyhzZWxlY3RvcikpIHBhcmVudHMucHVzaChfcGFyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudHMucHVzaChfcGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgX3BhcmVudCA9IF9wYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChwYXJlbnRzKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICB2YXIgY2xvc2VzdCA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIGlmICghY2xvc2VzdC5pcyhzZWxlY3RvcikpIHtcbiAgICBjbG9zZXN0ID0gY2xvc2VzdC5wYXJlbnRzKHNlbGVjdG9yKS5lcSgwKTtcbiAgfVxuXG4gIHJldHVybiBjbG9zZXN0O1xufVxuXG5mdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gIHZhciBmb3VuZEVsZW1lbnRzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGZvdW5kID0gdGhpc1tpXS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgZm91bmQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGZvdW5kRWxlbWVudHMucHVzaChmb3VuZFtqXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQoZm91bmRFbGVtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuKHNlbGVjdG9yKSB7XG4gIHZhciBjaGlsZHJlbiA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSB0aGlzW2ldLmNoaWxkcmVuO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBjaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yIHx8ICQoY2hpbGROb2Rlc1tqXSkuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGROb2Rlc1tqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQoY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUpIHRoaXNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkZXRhY2goKSB7XG4gIHJldHVybiB0aGlzLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBhZGQoKSB7XG4gIHZhciBkb20gPSB0aGlzO1xuICB2YXIgaTtcbiAgdmFyIGo7XG5cbiAgZm9yICh2YXIgX2xlbjEwID0gYXJndW1lbnRzLmxlbmd0aCwgZWxzID0gbmV3IEFycmF5KF9sZW4xMCksIF9rZXkxMCA9IDA7IF9rZXkxMCA8IF9sZW4xMDsgX2tleTEwKyspIHtcbiAgICBlbHNbX2tleTEwXSA9IGFyZ3VtZW50c1tfa2V5MTBdO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciB0b0FkZCA9ICQoZWxzW2ldKTtcblxuICAgIGZvciAoaiA9IDA7IGogPCB0b0FkZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgZG9tLnB1c2godG9BZGRbal0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb207XG59XG5cbmZ1bmN0aW9uIGVtcHR5KCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKGVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGVsLmNoaWxkTm9kZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGVsLmNoaWxkTm9kZXNbal0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGVsLmNoaWxkTm9kZXNbal0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbC5jaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUbygpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbGVmdCA9IGFyZ3NbMF0sXG4gICAgICB0b3AgPSBhcmdzWzFdLFxuICAgICAgZHVyYXRpb24gPSBhcmdzWzJdLFxuICAgICAgZWFzaW5nID0gYXJnc1szXSxcbiAgICAgIGNhbGxiYWNrID0gYXJnc1s0XTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDQgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gZWFzaW5nO1xuICAgIGxlZnQgPSBhcmdzWzBdO1xuICAgIHRvcCA9IGFyZ3NbMV07XG4gICAgZHVyYXRpb24gPSBhcmdzWzJdO1xuICAgIGNhbGxiYWNrID0gYXJnc1szXTtcbiAgICBlYXNpbmcgPSBhcmdzWzRdO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICd1bmRlZmluZWQnKSBlYXNpbmcgPSAnc3dpbmcnO1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB2YXIgY3VycmVudFRvcDtcbiAgICB2YXIgY3VycmVudExlZnQ7XG4gICAgdmFyIG1heFRvcDtcbiAgICB2YXIgbWF4TGVmdDtcbiAgICB2YXIgbmV3VG9wO1xuICAgIHZhciBuZXdMZWZ0O1xuICAgIHZhciBzY3JvbGxUb3A7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHZhciBzY3JvbGxMZWZ0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICB2YXIgYW5pbWF0ZVRvcCA9IHRvcCA+IDAgfHwgdG9wID09PSAwO1xuICAgIHZhciBhbmltYXRlTGVmdCA9IGxlZnQgPiAwIHx8IGxlZnQgPT09IDA7XG5cbiAgICBpZiAodHlwZW9mIGVhc2luZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVhc2luZyA9ICdzd2luZyc7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGVUb3ApIHtcbiAgICAgIGN1cnJlbnRUb3AgPSBlbC5zY3JvbGxUb3A7XG5cbiAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbmltYXRlTGVmdCkge1xuICAgICAgY3VycmVudExlZnQgPSBlbC5zY3JvbGxMZWZ0O1xuXG4gICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZHVyYXRpb24pIHJldHVybjtcblxuICAgIGlmIChhbmltYXRlVG9wKSB7XG4gICAgICBtYXhUb3AgPSBlbC5zY3JvbGxIZWlnaHQgLSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICBuZXdUb3AgPSBNYXRoLm1heChNYXRoLm1pbih0b3AsIG1heFRvcCksIDApO1xuICAgIH1cblxuICAgIGlmIChhbmltYXRlTGVmdCkge1xuICAgICAgbWF4TGVmdCA9IGVsLnNjcm9sbFdpZHRoIC0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICBuZXdMZWZ0ID0gTWF0aC5tYXgoTWF0aC5taW4obGVmdCwgbWF4TGVmdCksIDApO1xuICAgIH1cblxuICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA9PT0gY3VycmVudFRvcCkgYW5pbWF0ZVRvcCA9IGZhbHNlO1xuICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID09PSBjdXJyZW50TGVmdCkgYW5pbWF0ZUxlZnQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcih0aW1lKSB7XG4gICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICBzdGFydFRpbWUgPSB0aW1lO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigodGltZSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbiwgMSksIDApO1xuICAgICAgdmFyIGVhc2VQcm9ncmVzcyA9IGVhc2luZyA9PT0gJ2xpbmVhcicgPyBwcm9ncmVzcyA6IDAuNSAtIE1hdGguY29zKHByb2dyZXNzICogTWF0aC5QSSkgLyAyO1xuICAgICAgdmFyIGRvbmU7XG4gICAgICBpZiAoYW5pbWF0ZVRvcCkgc2Nyb2xsVG9wID0gY3VycmVudFRvcCArIGVhc2VQcm9ncmVzcyAqIChuZXdUb3AgLSBjdXJyZW50VG9wKTtcbiAgICAgIGlmIChhbmltYXRlTGVmdCkgc2Nyb2xsTGVmdCA9IGN1cnJlbnRMZWZ0ICsgZWFzZVByb2dyZXNzICogKG5ld0xlZnQgLSBjdXJyZW50TGVmdCk7XG5cbiAgICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA+IGN1cnJlbnRUb3AgJiYgc2Nyb2xsVG9wID49IG5ld1RvcCkge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSBuZXdUb3A7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPCBjdXJyZW50VG9wICYmIHNjcm9sbFRvcCA8PSBuZXdUb3ApIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gbmV3VG9wO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPiBjdXJyZW50TGVmdCAmJiBzY3JvbGxMZWZ0ID49IG5ld0xlZnQpIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYW5pbWF0ZUxlZnQgJiYgbmV3TGVmdCA8IGN1cnJlbnRMZWZ0ICYmIHNjcm9sbExlZnQgPD0gbmV3TGVmdCkge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gbmV3TGVmdDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYW5pbWF0ZVRvcCkgZWwuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgaWYgKGFuaW1hdGVMZWZ0KSBlbC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIH0pO1xufSAvLyBzY3JvbGxUb3AodG9wLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjaykge1xuXG5cbmZ1bmN0aW9uIHNjcm9sbFRvcCgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIHRvcCA9IGFyZ3NbMF0sXG4gICAgICBkdXJhdGlvbiA9IGFyZ3NbMV0sXG4gICAgICBlYXNpbmcgPSBhcmdzWzJdLFxuICAgICAgY2FsbGJhY2sgPSBhcmdzWzNdO1xuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdG9wID0gYXJnc1swXTtcbiAgICBkdXJhdGlvbiA9IGFyZ3NbMV07XG4gICAgY2FsbGJhY2sgPSBhcmdzWzJdO1xuICAgIGVhc2luZyA9IGFyZ3NbM107XG4gIH1cblxuICB2YXIgZG9tID0gdGhpcztcblxuICBpZiAodHlwZW9mIHRvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA+IDApIHJldHVybiBkb21bMF0uc2Nyb2xsVG9wO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRvbS5zY3JvbGxUbyh1bmRlZmluZWQsIHRvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxMZWZ0KCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICB2YXIgbGVmdCA9IGFyZ3NbMF0sXG4gICAgICBkdXJhdGlvbiA9IGFyZ3NbMV0sXG4gICAgICBlYXNpbmcgPSBhcmdzWzJdLFxuICAgICAgY2FsbGJhY2sgPSBhcmdzWzNdO1xuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGVmdCA9IGFyZ3NbMF07XG4gICAgZHVyYXRpb24gPSBhcmdzWzFdO1xuICAgIGNhbGxiYWNrID0gYXJnc1syXTtcbiAgICBlYXNpbmcgPSBhcmdzWzNdO1xuICB9XG5cbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBsZWZ0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChkb20ubGVuZ3RoID4gMCkgcmV0dXJuIGRvbVswXS5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRvbS5zY3JvbGxUbyhsZWZ0LCB1bmRlZmluZWQsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZShpbml0aWFsUHJvcHMsIGluaXRpYWxQYXJhbXMpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgZWxzID0gdGhpcztcbiAgdmFyIGEgPSB7XG4gICAgcHJvcHM6IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxQcm9wcyksXG4gICAgcGFyYW1zOiBPYmplY3QuYXNzaWduKHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBlYXNpbmc6ICdzd2luZycgLy8gb3IgJ2xpbmVhcidcblxuICAgICAgLyogQ2FsbGJhY2tzXG4gICAgICBiZWdpbihlbGVtZW50cylcbiAgICAgIGNvbXBsZXRlKGVsZW1lbnRzKVxuICAgICAgcHJvZ3Jlc3MoZWxlbWVudHMsIGNvbXBsZXRlLCByZW1haW5pbmcsIHN0YXJ0LCB0d2VlblZhbHVlKVxuICAgICAgKi9cblxuICAgIH0sIGluaXRpYWxQYXJhbXMpLFxuICAgIGVsZW1lbnRzOiBlbHMsXG4gICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICBxdWU6IFtdLFxuICAgIGVhc2luZ1Byb2dyZXNzOiBmdW5jdGlvbiBlYXNpbmdQcm9ncmVzcyhlYXNpbmcsIHByb2dyZXNzKSB7XG4gICAgICBpZiAoZWFzaW5nID09PSAnc3dpbmcnKSB7XG4gICAgICAgIHJldHVybiAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAoYS5mcmFtZUlkKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhLmZyYW1lSWQpO1xuICAgICAgfVxuXG4gICAgICBhLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgYS5lbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGVsO1xuICAgICAgICBkZWxldGUgZWxlbWVudC5kb203QW5pbWF0ZUluc3RhbmNlO1xuICAgICAgfSk7XG4gICAgICBhLnF1ZSA9IFtdO1xuICAgIH0sXG4gICAgZG9uZTogZnVuY3Rpb24gZG9uZShjb21wbGV0ZSkge1xuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGNvbXBsZXRlKSBjb21wbGV0ZShlbHMpO1xuXG4gICAgICBpZiAoYS5xdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgcXVlID0gYS5xdWUuc2hpZnQoKTtcbiAgICAgICAgYS5hbmltYXRlKHF1ZVswXSwgcXVlWzFdKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uIGFuaW1hdGUocHJvcHMsIHBhcmFtcykge1xuICAgICAgaWYgKGEuYW5pbWF0aW5nKSB7XG4gICAgICAgIGEucXVlLnB1c2goW3Byb3BzLCBwYXJhbXNdKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtZW50cyA9IFtdOyAvLyBEZWZpbmUgJiBDYWNoZSBJbml0aWFscyAmIFVuaXRzXG5cbiAgICAgIGEuZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgICAgIHZhciBpbml0aWFsRnVsbFZhbHVlO1xuICAgICAgICB2YXIgaW5pdGlhbFZhbHVlO1xuICAgICAgICB2YXIgdW5pdDtcbiAgICAgICAgdmFyIGZpbmFsVmFsdWU7XG4gICAgICAgIHZhciBmaW5hbEZ1bGxWYWx1ZTtcbiAgICAgICAgaWYgKCFlbC5kb203QW5pbWF0ZUluc3RhbmNlKSBhLmVsZW1lbnRzW2luZGV4XS5kb203QW5pbWF0ZUluc3RhbmNlID0gYTtcbiAgICAgICAgZWxlbWVudHNbaW5kZXhdID0ge1xuICAgICAgICAgIGNvbnRhaW5lcjogZWxcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICBpbml0aWFsRnVsbFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCkucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICAgICAgaW5pdGlhbFZhbHVlID0gcGFyc2VGbG9hdChpbml0aWFsRnVsbFZhbHVlKTtcbiAgICAgICAgICB1bml0ID0gaW5pdGlhbEZ1bGxWYWx1ZS5yZXBsYWNlKGluaXRpYWxWYWx1ZSwgJycpO1xuICAgICAgICAgIGZpbmFsVmFsdWUgPSBwYXJzZUZsb2F0KHByb3BzW3Byb3BdKTtcbiAgICAgICAgICBmaW5hbEZ1bGxWYWx1ZSA9IHByb3BzW3Byb3BdICsgdW5pdDtcbiAgICAgICAgICBlbGVtZW50c1tpbmRleF1bcHJvcF0gPSB7XG4gICAgICAgICAgICBpbml0aWFsRnVsbFZhbHVlOiBpbml0aWFsRnVsbFZhbHVlLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICB1bml0OiB1bml0LFxuICAgICAgICAgICAgZmluYWxWYWx1ZTogZmluYWxWYWx1ZSxcbiAgICAgICAgICAgIGZpbmFsRnVsbFZhbHVlOiBmaW5hbEZ1bGxWYWx1ZSxcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogaW5pdGlhbFZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgICAgdmFyIHRpbWU7XG4gICAgICB2YXIgZWxlbWVudHNEb25lID0gMDtcbiAgICAgIHZhciBwcm9wc0RvbmUgPSAwO1xuICAgICAgdmFyIGRvbmU7XG4gICAgICB2YXIgYmVnYW4gPSBmYWxzZTtcbiAgICAgIGEuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBwcm9ncmVzcztcbiAgICAgICAgdmFyIGVhc2VQcm9ncmVzczsgLy8gbGV0IGVsO1xuXG4gICAgICAgIGlmICghYmVnYW4pIHtcbiAgICAgICAgICBiZWdhbiA9IHRydWU7XG4gICAgICAgICAgaWYgKHBhcmFtcy5iZWdpbikgcGFyYW1zLmJlZ2luKGVscyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG4gICAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBwYXJhbXMucHJvZ3Jlc3MoZWxzLCBNYXRoLm1heChNYXRoLm1pbigodGltZSAtIHN0YXJ0VGltZSkgLyBwYXJhbXMuZHVyYXRpb24sIDEpLCAwKSwgc3RhcnRUaW1lICsgcGFyYW1zLmR1cmF0aW9uIC0gdGltZSA8IDAgPyAwIDogc3RhcnRUaW1lICsgcGFyYW1zLmR1cmF0aW9uIC0gdGltZSwgc3RhcnRUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgICAgICAgIGlmIChkb25lIHx8IGVsLmRvbmUpIHJldHVybjtcbiAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgaWYgKGRvbmUgfHwgZWwuZG9uZSkgcmV0dXJuO1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigodGltZSAtIHN0YXJ0VGltZSkgLyBwYXJhbXMuZHVyYXRpb24sIDEpLCAwKTtcbiAgICAgICAgICAgIGVhc2VQcm9ncmVzcyA9IGEuZWFzaW5nUHJvZ3Jlc3MocGFyYW1zLmVhc2luZywgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgdmFyIF9lbCRwcm9wID0gZWxbcHJvcF0sXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gX2VsJHByb3AuaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBfZWwkcHJvcC5maW5hbFZhbHVlLFxuICAgICAgICAgICAgICAgIHVuaXQgPSBfZWwkcHJvcC51bml0O1xuICAgICAgICAgICAgZWxbcHJvcF0uY3VycmVudFZhbHVlID0gaW5pdGlhbFZhbHVlICsgZWFzZVByb2dyZXNzICogKGZpbmFsVmFsdWUgLSBpbml0aWFsVmFsdWUpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGVsW3Byb3BdLmN1cnJlbnRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKGZpbmFsVmFsdWUgPiBpbml0aWFsVmFsdWUgJiYgY3VycmVudFZhbHVlID49IGZpbmFsVmFsdWUgfHwgZmluYWxWYWx1ZSA8IGluaXRpYWxWYWx1ZSAmJiBjdXJyZW50VmFsdWUgPD0gZmluYWxWYWx1ZSkge1xuICAgICAgICAgICAgICBlbC5jb250YWluZXIuc3R5bGVbcHJvcF0gPSBmaW5hbFZhbHVlICsgdW5pdDtcbiAgICAgICAgICAgICAgcHJvcHNEb25lICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKHByb3BzRG9uZSA9PT0gT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGVsLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzRG9uZSArPSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzRG9uZSA9PT0gZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgYS5kb25lKHBhcmFtcy5jb21wbGV0ZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWwuY29udGFpbmVyLnN0eWxlW3Byb3BdID0gY3VycmVudFZhbHVlICsgdW5pdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47IC8vIFRoZW4gY2FsbFxuXG4gICAgICAgIGEuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgIH1cblxuICAgICAgYS5mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICB9O1xuXG4gIGlmIChhLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBlbHM7XG4gIH1cblxuICB2YXIgYW5pbWF0ZUluc3RhbmNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2UpIHtcbiAgICAgIGFuaW1hdGVJbnN0YW5jZSA9IGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICB9IGVsc2UgYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlID0gYTtcbiAgfVxuXG4gIGlmICghYW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgYW5pbWF0ZUluc3RhbmNlID0gYTtcbiAgfVxuXG4gIGlmIChpbml0aWFsUHJvcHMgPT09ICdzdG9wJykge1xuICAgIGFuaW1hdGVJbnN0YW5jZS5zdG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgYW5pbWF0ZUluc3RhbmNlLmFuaW1hdGUoYS5wcm9wcywgYS5wYXJhbXMpO1xuICB9XG5cbiAgcmV0dXJuIGVscztcbn1cblxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgdmFyIGVscyA9IHRoaXM7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZWxzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2UpIHtcbiAgICAgIGVsc1tpXS5kb203QW5pbWF0ZUluc3RhbmNlLnN0b3AoKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIG5vVHJpZ2dlciA9ICdyZXNpemUgc2Nyb2xsJy5zcGxpdCgnICcpO1xuXG5mdW5jdGlvbiBzaG9ydGN1dChuYW1lKSB7XG4gIGZ1bmN0aW9uIGV2ZW50SGFuZGxlcigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChub1RyaWdnZXIuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgICBpZiAobmFtZSBpbiB0aGlzW2ldKSB0aGlzW2ldW25hbWVdKCk7ZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXNbaV0pLnRyaWdnZXIobmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm9uLmFwcGx5KHRoaXMsIFtuYW1lXS5jb25jYXQoYXJncykpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50SGFuZGxlcjtcbn1cblxudmFyIGNsaWNrID0gc2hvcnRjdXQoJ2NsaWNrJyk7XG52YXIgYmx1ciA9IHNob3J0Y3V0KCdibHVyJyk7XG52YXIgZm9jdXMgPSBzaG9ydGN1dCgnZm9jdXMnKTtcbnZhciBmb2N1c2luID0gc2hvcnRjdXQoJ2ZvY3VzaW4nKTtcbnZhciBmb2N1c291dCA9IHNob3J0Y3V0KCdmb2N1c291dCcpO1xudmFyIGtleXVwID0gc2hvcnRjdXQoJ2tleXVwJyk7XG52YXIga2V5ZG93biA9IHNob3J0Y3V0KCdrZXlkb3duJyk7XG52YXIga2V5cHJlc3MgPSBzaG9ydGN1dCgna2V5cHJlc3MnKTtcbnZhciBzdWJtaXQgPSBzaG9ydGN1dCgnc3VibWl0Jyk7XG52YXIgY2hhbmdlID0gc2hvcnRjdXQoJ2NoYW5nZScpO1xudmFyIG1vdXNlZG93biA9IHNob3J0Y3V0KCdtb3VzZWRvd24nKTtcbnZhciBtb3VzZW1vdmUgPSBzaG9ydGN1dCgnbW91c2Vtb3ZlJyk7XG52YXIgbW91c2V1cCA9IHNob3J0Y3V0KCdtb3VzZXVwJyk7XG52YXIgbW91c2VlbnRlciA9IHNob3J0Y3V0KCdtb3VzZWVudGVyJyk7XG52YXIgbW91c2VsZWF2ZSA9IHNob3J0Y3V0KCdtb3VzZWxlYXZlJyk7XG52YXIgbW91c2VvdXQgPSBzaG9ydGN1dCgnbW91c2VvdXQnKTtcbnZhciBtb3VzZW92ZXIgPSBzaG9ydGN1dCgnbW91c2VvdmVyJyk7XG52YXIgdG91Y2hzdGFydCA9IHNob3J0Y3V0KCd0b3VjaHN0YXJ0Jyk7XG52YXIgdG91Y2hlbmQgPSBzaG9ydGN1dCgndG91Y2hlbmQnKTtcbnZhciB0b3VjaG1vdmUgPSBzaG9ydGN1dCgndG91Y2htb3ZlJyk7XG52YXIgcmVzaXplID0gc2hvcnRjdXQoJ3Jlc2l6ZScpO1xudmFyIHNjcm9sbCA9IHNob3J0Y3V0KCdzY3JvbGwnKTtcblxuZXhwb3J0IGRlZmF1bHQgJDtcbmV4cG9ydCB7ICQsIGFkZCwgYWRkQ2xhc3MsIGFuaW1hdGUsIGFuaW1hdGlvbkVuZCwgYXBwZW5kLCBhcHBlbmRUbywgYXR0ciwgYmx1ciwgY2hhbmdlLCBjaGlsZHJlbiwgY2xpY2ssIGNsb3Nlc3QsIGNzcywgZGF0YSwgZGF0YXNldCwgZGV0YWNoLCBlYWNoLCBlbXB0eSwgZXEsIGZpbHRlciwgZmluZCwgZm9jdXMsIGZvY3VzaW4sIGZvY3Vzb3V0LCBoYXNDbGFzcywgaGVpZ2h0LCBoaWRlLCBodG1sLCBpbmRleCwgaW5zZXJ0QWZ0ZXIsIGluc2VydEJlZm9yZSwgaXMsIGtleWRvd24sIGtleXByZXNzLCBrZXl1cCwgbW91c2Vkb3duLCBtb3VzZWVudGVyLCBtb3VzZWxlYXZlLCBtb3VzZW1vdmUsIG1vdXNlb3V0LCBtb3VzZW92ZXIsIG1vdXNldXAsIG5leHQsIG5leHRBbGwsIG9mZiwgb2Zmc2V0LCBvbiwgb25jZSwgb3V0ZXJIZWlnaHQsIG91dGVyV2lkdGgsIHBhcmVudCwgcGFyZW50cywgcHJlcGVuZCwgcHJlcGVuZFRvLCBwcmV2LCBwcmV2QWxsLCBwcm9wLCByZW1vdmUsIHJlbW92ZUF0dHIsIHJlbW92ZUNsYXNzLCByZW1vdmVEYXRhLCByZXNpemUsIHNjcm9sbCwgc2Nyb2xsTGVmdCwgc2Nyb2xsVG8sIHNjcm9sbFRvcCwgc2hvdywgc2libGluZ3MsIHN0b3AsIHN0eWxlcywgc3VibWl0LCB0ZXh0LCB0b2dnbGVDbGFzcywgdG91Y2hlbmQsIHRvdWNobW92ZSwgdG91Y2hzdGFydCwgdHJhbnNmb3JtLCB0cmFuc2l0aW9uLCB0cmFuc2l0aW9uRW5kLCB0cmlnZ2VyLCB2YWwsIHZhbHVlLCB3aWR0aCB9O1xuIiwgImltcG9ydCB7ICQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgaGFzQ2xhc3MsIHRvZ2dsZUNsYXNzLCBhdHRyLCByZW1vdmVBdHRyLCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24sIG9uLCBvZmYsIHRyaWdnZXIsIHRyYW5zaXRpb25FbmQsIG91dGVyV2lkdGgsIG91dGVySGVpZ2h0LCBzdHlsZXMsIG9mZnNldCwgY3NzLCBlYWNoLCBodG1sLCB0ZXh0LCBpcywgaW5kZXgsIGVxLCBhcHBlbmQsIHByZXBlbmQsIG5leHQsIG5leHRBbGwsIHByZXYsIHByZXZBbGwsIHBhcmVudCwgcGFyZW50cywgY2xvc2VzdCwgZmluZCwgY2hpbGRyZW4sIGZpbHRlciwgcmVtb3ZlIH0gZnJvbSAnZG9tNyc7XG52YXIgTWV0aG9kcyA9IHtcbiAgYWRkQ2xhc3M6IGFkZENsYXNzLFxuICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXG4gIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICBhdHRyOiBhdHRyLFxuICByZW1vdmVBdHRyOiByZW1vdmVBdHRyLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbixcbiAgb246IG9uLFxuICBvZmY6IG9mZixcbiAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCxcbiAgb3V0ZXJXaWR0aDogb3V0ZXJXaWR0aCxcbiAgb3V0ZXJIZWlnaHQ6IG91dGVySGVpZ2h0LFxuICBzdHlsZXM6IHN0eWxlcyxcbiAgb2Zmc2V0OiBvZmZzZXQsXG4gIGNzczogY3NzLFxuICBlYWNoOiBlYWNoLFxuICBodG1sOiBodG1sLFxuICB0ZXh0OiB0ZXh0LFxuICBpczogaXMsXG4gIGluZGV4OiBpbmRleCxcbiAgZXE6IGVxLFxuICBhcHBlbmQ6IGFwcGVuZCxcbiAgcHJlcGVuZDogcHJlcGVuZCxcbiAgbmV4dDogbmV4dCxcbiAgbmV4dEFsbDogbmV4dEFsbCxcbiAgcHJldjogcHJldixcbiAgcHJldkFsbDogcHJldkFsbCxcbiAgcGFyZW50OiBwYXJlbnQsXG4gIHBhcmVudHM6IHBhcmVudHMsXG4gIGNsb3Nlc3Q6IGNsb3Nlc3QsXG4gIGZpbmQ6IGZpbmQsXG4gIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIHJlbW92ZTogcmVtb3ZlXG59O1xuT2JqZWN0LmtleXMoTWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAkLmZuW21ldGhvZE5hbWVdID0gTWV0aG9kc1ttZXRob2ROYW1lXTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgJDsiLCAiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb3BzKG9iaikge1xuICB2YXIgb2JqZWN0ID0gb2JqO1xuICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHRyeSB7XG4gICAgICBvYmplY3Rba2V5XSA9IG51bGw7XG4gICAgfSBjYXRjaCAoZSkgey8vIG5vIGdldHRlciBmb3Igb2JqZWN0XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gc29tZXRoaW5nIGdvdCB3cm9uZ1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGNhbGxiYWNrLCBkZWxheSkge1xuICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgIGRlbGF5ID0gMDtcbiAgfVxuXG4gIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSk7XG59XG5cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIERhdGUubm93KCk7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbCwgYXhpcykge1xuICBpZiAoYXhpcyA9PT0gdm9pZCAwKSB7XG4gICAgYXhpcyA9ICd4JztcbiAgfVxuXG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIG1hdHJpeDtcbiAgdmFyIGN1clRyYW5zZm9ybTtcbiAgdmFyIHRyYW5zZm9ybU1hdHJpeDtcbiAgdmFyIGN1clN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuXG4gIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSB7XG4gICAgY3VyVHJhbnNmb3JtID0gY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLndlYmtpdFRyYW5zZm9ybTtcblxuICAgIGlmIChjdXJUcmFuc2Zvcm0uc3BsaXQoJywnKS5sZW5ndGggPiA2KSB7XG4gICAgICBjdXJUcmFuc2Zvcm0gPSBjdXJUcmFuc2Zvcm0uc3BsaXQoJywgJykubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBhLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgfSkuam9pbignLCAnKTtcbiAgICB9IC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIFdlYmtpdCBjaG9rZSB3aGVuICdub25lJyBpcyBwYXNzZWQ7IHBhc3NcbiAgICAvLyBlbXB0eSBzdHJpbmcgaW5zdGVhZCBpbiB0aGlzIGNhc2VcblxuXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gbmV3IHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgoY3VyVHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IGN1clRyYW5zZm9ybSk7XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNmb3JtTWF0cml4ID0gY3VyU3R5bGUuTW96VHJhbnNmb3JtIHx8IGN1clN0eWxlLk9UcmFuc2Zvcm0gfHwgY3VyU3R5bGUuTXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUubXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoJ3RyYW5zbGF0ZSgnLCAnbWF0cml4KDEsIDAsIDAsIDEsJyk7XG4gICAgbWF0cml4ID0gdHJhbnNmb3JtTWF0cml4LnRvU3RyaW5nKCkuc3BsaXQoJywnKTtcbiAgfVxuXG4gIGlmIChheGlzID09PSAneCcpIHtcbiAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQxOyAvLyBDcmF6eSBJRTEwIE1hdHJpeFxuICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxMl0pOyAvLyBOb3JtYWwgQnJvd3NlcnNcbiAgICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEzXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgICAgZWxzZSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs1XSk7XG4gIH1cblxuICByZXR1cm4gY3VyVHJhbnNmb3JtIHx8IDA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvICE9PSBudWxsICYmIG8uY29uc3RydWN0b3IgJiYgby5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gIHZhciB0byA9IE9iamVjdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0pO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIG5leHRTb3VyY2UgPSBpIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaV07XG5cbiAgICBpZiAobmV4dFNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIG5leHRTb3VyY2UgIT09IG51bGwpIHtcbiAgICAgIHZhciBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpO1xuXG4gICAgICBmb3IgKHZhciBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxKSB7XG4gICAgICAgIHZhciBuZXh0S2V5ID0ga2V5c0FycmF5W25leHRJbmRleF07XG4gICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLCBuZXh0S2V5KTtcblxuICAgICAgICBpZiAoZGVzYyAhPT0gdW5kZWZpbmVkICYmIGRlc2MuZW51bWVyYWJsZSkge1xuICAgICAgICAgIGlmIChpc09iamVjdCh0b1tuZXh0S2V5XSkgJiYgaXNPYmplY3QobmV4dFNvdXJjZVtuZXh0S2V5XSkpIHtcbiAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IHt9O1xuICAgICAgICAgICAgZXh0ZW5kKHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxuZnVuY3Rpb24gYmluZE1vZHVsZU1ldGhvZHMoaW5zdGFuY2UsIG9iaikge1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChpc09iamVjdChvYmpba2V5XSkpIHtcbiAgICAgIE9iamVjdC5rZXlzKG9ialtrZXldKS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJLZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XVtzdWJLZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb2JqW2tleV1bc3ViS2V5XSA9IG9ialtrZXldW3N1YktleV0uYmluZChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluc3RhbmNlW2tleV0gPSBvYmpba2V5XTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGRlbGV0ZVByb3BzLCBuZXh0VGljaywgbm93LCBnZXRUcmFuc2xhdGUsIGlzT2JqZWN0LCBleHRlbmQsIGJpbmRNb2R1bGVNZXRob2RzIH07IiwgImltcG9ydCB7IGdldFdpbmRvdywgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbnZhciBzdXBwb3J0O1xuXG5mdW5jdGlvbiBjYWxjU3VwcG9ydCgpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICByZXR1cm4ge1xuICAgIHRvdWNoOiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCksXG4gICAgcG9pbnRlckV2ZW50czogISF3aW5kb3cuUG9pbnRlckV2ZW50ICYmICdtYXhUb3VjaFBvaW50cycgaW4gd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID49IDAsXG4gICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uIGNoZWNrT2JzZXJ2ZXIoKSB7XG4gICAgICByZXR1cm4gJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyB8fCAnV2Via2l0TXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93O1xuICAgIH0oKSxcbiAgICBwYXNzaXZlTGlzdGVuZXI6IGZ1bmN0aW9uIGNoZWNrUGFzc2l2ZUxpc3RlbmVyKCkge1xuICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUxpc3RlbmVyJywgbnVsbCwgb3B0cyk7XG4gICAgICB9IGNhdGNoIChlKSB7Ly8gTm8gc3VwcG9ydFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgIH0oKSxcbiAgICBnZXN0dXJlczogZnVuY3Rpb24gY2hlY2tHZXN0dXJlcygpIHtcbiAgICAgIHJldHVybiAnb25nZXN0dXJlc3RhcnQnIGluIHdpbmRvdztcbiAgICB9KClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgaWYgKCFzdXBwb3J0KSB7XG4gICAgc3VwcG9ydCA9IGNhbGNTdXBwb3J0KCk7XG4gIH1cblxuICByZXR1cm4gc3VwcG9ydDtcbn1cblxuZXhwb3J0IHsgZ2V0U3VwcG9ydCB9OyIsICJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCB7IGdldFN1cHBvcnQgfSBmcm9tICcuL2dldC1zdXBwb3J0JztcbnZhciBkZXZpY2U7XG5cbmZ1bmN0aW9uIGNhbGNEZXZpY2UoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50O1xuXG4gIHZhciBzdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBwbGF0Zm9ybSA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm07XG4gIHZhciB1YSA9IHVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgdmFyIGRldmljZSA9IHtcbiAgICBpb3M6IGZhbHNlLFxuICAgIGFuZHJvaWQ6IGZhbHNlXG4gIH07XG4gIHZhciBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gIHZhciBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgdmFyIGFuZHJvaWQgPSB1YS5tYXRjaCgvKEFuZHJvaWQpOz9bXFxzXFwvXSsoW1xcZC5dKyk/Lyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICB2YXIgaXBhZCA9IHVhLm1hdGNoKC8oaVBhZCkuKk9TXFxzKFtcXGRfXSspLyk7XG4gIHZhciBpcG9kID0gdWEubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKTtcbiAgdmFyIGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuICB2YXIgd2luZG93cyA9IHBsYXRmb3JtID09PSAnV2luMzInO1xuICB2YXIgbWFjb3MgPSBwbGF0Zm9ybSA9PT0gJ01hY0ludGVsJzsgLy8gaVBhZE9zIDEzIGZpeFxuXG4gIHZhciBpUGFkU2NyZWVucyA9IFsnMTAyNHgxMzY2JywgJzEzNjZ4MTAyNCcsICc4MzR4MTE5NCcsICcxMTk0eDgzNCcsICc4MzR4MTExMicsICcxMTEyeDgzNCcsICc3Njh4MTAyNCcsICcxMDI0eDc2OCcsICc4MjB4MTE4MCcsICcxMTgweDgyMCcsICc4MTB4MTA4MCcsICcxMDgweDgxMCddO1xuXG4gIGlmICghaXBhZCAmJiBtYWNvcyAmJiBzdXBwb3J0LnRvdWNoICYmIGlQYWRTY3JlZW5zLmluZGV4T2Yoc2NyZWVuV2lkdGggKyBcInhcIiArIHNjcmVlbkhlaWdodCkgPj0gMCkge1xuICAgIGlwYWQgPSB1YS5tYXRjaCgvKFZlcnNpb24pXFwvKFtcXGQuXSspLyk7XG4gICAgaWYgKCFpcGFkKSBpcGFkID0gWzAsIDEsICcxM18wXzAnXTtcbiAgICBtYWNvcyA9IGZhbHNlO1xuICB9IC8vIEFuZHJvaWRcblxuXG4gIGlmIChhbmRyb2lkICYmICF3aW5kb3dzKSB7XG4gICAgZGV2aWNlLm9zID0gJ2FuZHJvaWQnO1xuICAgIGRldmljZS5hbmRyb2lkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpcGFkIHx8IGlwaG9uZSB8fCBpcG9kKSB7XG4gICAgZGV2aWNlLm9zID0gJ2lvcyc7XG4gICAgZGV2aWNlLmlvcyA9IHRydWU7XG4gIH0gLy8gRXhwb3J0IG9iamVjdFxuXG5cbiAgcmV0dXJuIGRldmljZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGV2aWNlKG92ZXJyaWRlcykge1xuICBpZiAob3ZlcnJpZGVzID09PSB2b2lkIDApIHtcbiAgICBvdmVycmlkZXMgPSB7fTtcbiAgfVxuXG4gIGlmICghZGV2aWNlKSB7XG4gICAgZGV2aWNlID0gY2FsY0RldmljZShvdmVycmlkZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZTtcbn1cblxuZXhwb3J0IHsgZ2V0RGV2aWNlIH07IiwgImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xudmFyIGJyb3dzZXI7XG5cbmZ1bmN0aW9uIGNhbGNCcm93c2VyKCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gICAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignc2FmYXJpJykgPj0gMCAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA8IDAgJiYgdWEuaW5kZXhPZignYW5kcm9pZCcpIDwgMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNFZGdlOiAhIXdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlL2cpLFxuICAgIGlzU2FmYXJpOiBpc1NhZmFyaSgpLFxuICAgIGlzV2ViVmlldzogLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRCcm93c2VyKCkge1xuICBpZiAoIWJyb3dzZXIpIHtcbiAgICBicm93c2VyID0gY2FsY0Jyb3dzZXIoKTtcbiAgfVxuXG4gIHJldHVybiBicm93c2VyO1xufVxuXG5leHBvcnQgeyBnZXRCcm93c2VyIH07IiwgImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG52YXIgc3VwcG9ydHNSZXNpemVPYnNlcnZlciA9IGZ1bmN0aW9uIHN1cHBvcnRzUmVzaXplT2JzZXJ2ZXIoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncmVzaXplJyxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgZXh0ZW5kKHN3aXBlciwge1xuICAgICAgcmVzaXplOiB7XG4gICAgICAgIG9ic2VydmVyOiBudWxsLFxuICAgICAgICBjcmVhdGVPYnNlcnZlcjogZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIoKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gc3dpcGVyLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHN3aXBlci5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgbmV3V2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgICAgdmFyIGNvbnRlbnRCb3hTaXplID0gX3JlZi5jb250ZW50Qm94U2l6ZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRSZWN0ID0gX3JlZi5jb250ZW50UmVjdCxcbiAgICAgICAgICAgICAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0O1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gc3dpcGVyLmVsKSByZXR1cm47XG4gICAgICAgICAgICAgIG5ld1dpZHRoID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC53aWR0aCA6IChjb250ZW50Qm94U2l6ZVswXSB8fCBjb250ZW50Qm94U2l6ZSkuaW5saW5lU2l6ZTtcbiAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC5oZWlnaHQgOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmJsb2NrU2l6ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobmV3V2lkdGggIT09IHdpZHRoIHx8IG5ld0hlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICAgIHN3aXBlci5yZXNpemUucmVzaXplSGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVPYnNlcnZlcjogZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIoKSB7XG4gICAgICAgICAgaWYgKHN3aXBlci5yZXNpemUub2JzZXJ2ZXIgJiYgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlci51bm9ic2VydmUgJiYgc3dpcGVyLmVsKSB7XG4gICAgICAgICAgICBzd2lwZXIucmVzaXplLm9ic2VydmVyLnVub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICAgICAgICAgICAgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZXNpemVIYW5kbGVyOiBmdW5jdGlvbiByZXNpemVIYW5kbGVyKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVSZXNpemUnKTtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgncmVzaXplJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcjogZnVuY3Rpb24gb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdvcmllbnRhdGlvbmNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMucmVzaXplT2JzZXJ2ZXIgJiYgc3VwcG9ydHNSZXNpemVPYnNlcnZlcigpKSB7XG4gICAgICAgIHN3aXBlci5yZXNpemUuY3JlYXRlT2JzZXJ2ZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBFbWl0IHJlc2l6ZVxuXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzd2lwZXIucmVzaXplLnJlc2l6ZUhhbmRsZXIpOyAvLyBFbWl0IG9yaWVudGF0aW9uY2hhbmdlXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgICBzd2lwZXIucmVzaXplLnJlbW92ZU9ic2VydmVyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn07IiwgImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IHsgYmluZE1vZHVsZU1ldGhvZHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG52YXIgT2JzZXJ2ZXIgPSB7XG4gIGF0dGFjaDogZnVuY3Rpb24gYXR0YWNoKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIE9ic2VydmVyRnVuYyA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJraXRNdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBPYnNlcnZlckZ1bmMoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgLy8gVGhlIG9ic2VydmVyVXBkYXRlIGV2ZW50IHNob3VsZCBvbmx5IGJlIHRyaWdnZXJlZFxuICAgICAgLy8gb25jZSBkZXNwaXRlIHRoZSBudW1iZXIgb2YgbXV0YXRpb25zLiAgQWRkaXRpb25hbFxuICAgICAgLy8gdHJpZ2dlcnMgYXJlIHJlZHVuZGFudCBhbmQgYXJlIHZlcnkgY29zdGx5XG4gICAgICBpZiAobXV0YXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvYnNlcnZlclVwZGF0ZSA9IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgfTtcblxuICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShvYnNlcnZlclVwZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChvYnNlcnZlclVwZGF0ZSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkTGlzdDogdHlwZW9mIG9wdGlvbnMuY2hpbGRMaXN0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoaWxkTGlzdCxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHR5cGVvZiBvcHRpb25zLmNoYXJhY3RlckRhdGEgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hhcmFjdGVyRGF0YVxuICAgIH0pO1xuICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuc3VwcG9ydC5vYnNlcnZlciB8fCAhc3dpcGVyLnBhcmFtcy5vYnNlcnZlcikgcmV0dXJuO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpIHtcbiAgICAgIHZhciBjb250YWluZXJQYXJlbnRzID0gc3dpcGVyLiRlbC5wYXJlbnRzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGFpbmVyUGFyZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKGNvbnRhaW5lclBhcmVudHNbaV0pO1xuICAgICAgfVxuICAgIH0gLy8gT2JzZXJ2ZSBjb250YWluZXJcblxuXG4gICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChzd2lwZXIuJGVsWzBdLCB7XG4gICAgICBjaGlsZExpc3Q6IHN3aXBlci5wYXJhbXMub2JzZXJ2ZVNsaWRlQ2hpbGRyZW5cbiAgICB9KTsgLy8gT2JzZXJ2ZSB3cmFwcGVyXG5cbiAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKHN3aXBlci4kd3JhcHBlckVsWzBdLCB7XG4gICAgICBhdHRyaWJ1dGVzOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgICBzd2lwZXIub2JzZXJ2ZXIub2JzZXJ2ZXJzID0gW107XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvYnNlcnZlcicsXG4gIHBhcmFtczoge1xuICAgIG9ic2VydmVyOiBmYWxzZSxcbiAgICBvYnNlcnZlUGFyZW50czogZmFsc2UsXG4gICAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IGZhbHNlXG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGJpbmRNb2R1bGVNZXRob2RzKHN3aXBlciwge1xuICAgICAgb2JzZXJ2ZXI6IF9leHRlbmRzKHt9LCBPYnNlcnZlciwge1xuICAgICAgICBvYnNlcnZlcnM6IFtdXG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIub2JzZXJ2ZXIuaW5pdCgpO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5vYnNlcnZlci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59OyIsICJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHVzZVBhcmFtczogZnVuY3Rpb24gdXNlUGFyYW1zKGluc3RhbmNlUGFyYW1zKSB7XG4gICAgdmFyIGluc3RhbmNlID0gdGhpcztcbiAgICBpZiAoIWluc3RhbmNlLm1vZHVsZXMpIHJldHVybjtcbiAgICBPYmplY3Qua2V5cyhpbnN0YW5jZS5tb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG4gICAgICB2YXIgbW9kdWxlID0gaW5zdGFuY2UubW9kdWxlc1ttb2R1bGVOYW1lXTsgLy8gRXh0ZW5kIHBhcmFtc1xuXG4gICAgICBpZiAobW9kdWxlLnBhcmFtcykge1xuICAgICAgICBleHRlbmQoaW5zdGFuY2VQYXJhbXMsIG1vZHVsZS5wYXJhbXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB1c2VNb2R1bGVzOiBmdW5jdGlvbiB1c2VNb2R1bGVzKG1vZHVsZXNQYXJhbXMpIHtcbiAgICBpZiAobW9kdWxlc1BhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgICBtb2R1bGVzUGFyYW1zID0ge307XG4gICAgfVxuXG4gICAgdmFyIGluc3RhbmNlID0gdGhpcztcbiAgICBpZiAoIWluc3RhbmNlLm1vZHVsZXMpIHJldHVybjtcbiAgICBPYmplY3Qua2V5cyhpbnN0YW5jZS5tb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG4gICAgICB2YXIgbW9kdWxlID0gaW5zdGFuY2UubW9kdWxlc1ttb2R1bGVOYW1lXTtcbiAgICAgIHZhciBtb2R1bGVQYXJhbXMgPSBtb2R1bGVzUGFyYW1zW21vZHVsZU5hbWVdIHx8IHt9OyAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICAgIGlmIChtb2R1bGUub24gJiYgaW5zdGFuY2Uub24pIHtcbiAgICAgICAgT2JqZWN0LmtleXMobW9kdWxlLm9uKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVFdmVudE5hbWUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5vbihtb2R1bGVFdmVudE5hbWUsIG1vZHVsZS5vblttb2R1bGVFdmVudE5hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIE1vZHVsZSBjcmVhdGUgY2FsbGJhY2tcblxuXG4gICAgICBpZiAobW9kdWxlLmNyZWF0ZSkge1xuICAgICAgICBtb2R1bGUuY3JlYXRlLmJpbmQoaW5zdGFuY2UpKG1vZHVsZVBhcmFtcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07IiwgIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uOiBmdW5jdGlvbiBvbihldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgdmFyIG1ldGhvZCA9IHByaW9yaXR5ID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF1bbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb25jZTogZnVuY3Rpb24gb25jZShldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG5cbiAgICBmdW5jdGlvbiBvbmNlSGFuZGxlcigpIHtcbiAgICAgIHNlbGYub2ZmKGV2ZW50cywgb25jZUhhbmRsZXIpO1xuXG4gICAgICBpZiAob25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHkpIHtcbiAgICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlci5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG5cbiAgICBvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIHNlbGYub24oZXZlbnRzLCBvbmNlSGFuZGxlciwgcHJpb3JpdHkpO1xuICB9LFxuICBvbkFueTogZnVuY3Rpb24gb25BbnkoaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG5cbiAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKSA8IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzW21ldGhvZF0oaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9mZkFueTogZnVuY3Rpb24gb2ZmQW55KGhhbmRsZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0FueUxpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgdmFyIGluZGV4ID0gc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvZmY6IGZ1bmN0aW9uIG9mZihldmVudHMsIGhhbmRsZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyLCBpbmRleCkge1xuICAgICAgICAgIGlmIChldmVudEhhbmRsZXIgPT09IGhhbmRsZXIgfHwgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ICYmIGV2ZW50SGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgZW1pdDogZnVuY3Rpb24gZW1pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgdmFyIGV2ZW50cztcbiAgICB2YXIgZGF0YTtcbiAgICB2YXIgY29udGV4dDtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgZXZlbnRzID0gYXJnc1swXTtcbiAgICAgIGRhdGEgPSBhcmdzLnNsaWNlKDEsIGFyZ3MubGVuZ3RoKTtcbiAgICAgIGNvbnRleHQgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdLmV2ZW50cztcbiAgICAgIGRhdGEgPSBhcmdzWzBdLmRhdGE7XG4gICAgICBjb250ZXh0ID0gYXJnc1swXS5jb250ZXh0IHx8IHNlbGY7XG4gICAgfVxuXG4gICAgZGF0YS51bnNoaWZ0KGNvbnRleHQpO1xuICAgIHZhciBldmVudHNBcnJheSA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IGV2ZW50cy5zcGxpdCgnICcpO1xuICAgIGV2ZW50c0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBbZXZlbnRdLmNvbmNhdChkYXRhKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG59OyIsICJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTaXplKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHdpZHRoO1xuICB2YXIgaGVpZ2h0O1xuICB2YXIgJGVsID0gc3dpcGVyLiRlbDtcblxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMud2lkdGggIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMud2lkdGggIT09IG51bGwpIHtcbiAgICB3aWR0aCA9IHN3aXBlci5wYXJhbXMud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSAkZWxbMF0uY2xpZW50V2lkdGg7XG4gIH1cblxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gbnVsbCkge1xuICAgIGhlaWdodCA9IHN3aXBlci5wYXJhbXMuaGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGhlaWdodCA9ICRlbFswXS5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBpZiAod2lkdGggPT09IDAgJiYgc3dpcGVyLmlzSG9yaXpvbnRhbCgpIHx8IGhlaWdodCA9PT0gMCAmJiBzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIFN1YnRyYWN0IHBhZGRpbmdzXG5cblxuICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1sZWZ0JykgfHwgMCwgMTApIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1yaWdodCcpIHx8IDAsIDEwKTtcbiAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy10b3AnKSB8fCAwLCAxMCkgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLWJvdHRvbScpIHx8IDAsIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTih3aWR0aCkpIHdpZHRoID0gMDtcbiAgaWYgKE51bWJlci5pc05hTihoZWlnaHQpKSBoZWlnaHQgPSAwO1xuICBleHRlbmQoc3dpcGVyLCB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHNpemU6IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHdpZHRoIDogaGVpZ2h0XG4gIH0pO1xufSIsICJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgdmFyIGdldERpcmVjdGlvbkxhYmVsID0gZnVuY3Rpb24gZ2V0RGlyZWN0aW9uTGFiZWwocHJvcGVydHkpIHtcbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICd3aWR0aCc6ICdoZWlnaHQnLFxuICAgICAgJ21hcmdpbi10b3AnOiAnbWFyZ2luLWxlZnQnLFxuICAgICAgJ21hcmdpbi1ib3R0b20gJzogJ21hcmdpbi1yaWdodCcsXG4gICAgICAnbWFyZ2luLWxlZnQnOiAnbWFyZ2luLXRvcCcsXG4gICAgICAnbWFyZ2luLXJpZ2h0JzogJ21hcmdpbi1ib3R0b20nLFxuICAgICAgJ3BhZGRpbmctbGVmdCc6ICdwYWRkaW5nLXRvcCcsXG4gICAgICAncGFkZGluZy1yaWdodCc6ICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAnbWFyZ2luUmlnaHQnOiAnbWFyZ2luQm90dG9tJ1xuICAgIH1bcHJvcGVydHldO1xuICB9O1xuXG4gIHZhciBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlID0gZnVuY3Rpb24gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShub2RlLCBsYWJlbCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG5vZGUuZ2V0UHJvcGVydHlWYWx1ZShnZXREaXJlY3Rpb25MYWJlbChsYWJlbCkpIHx8IDApO1xuICB9O1xuXG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBzd2lwZXJTaXplID0gc3dpcGVyLnNpemUsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgd3JvbmdSVEwgPSBzd2lwZXIud3JvbmdSVEw7XG4gIHZhciBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICB2YXIgcHJldmlvdXNTbGlkZXNMZW5ndGggPSBpc1ZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gIHZhciBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgdmFyIHNsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzbGlkZXMubGVuZ3RoO1xuICB2YXIgc25hcEdyaWQgPSBbXTtcbiAgdmFyIHNsaWRlc0dyaWQgPSBbXTtcbiAgdmFyIHNsaWRlc1NpemVzR3JpZCA9IFtdO1xuXG4gIGZ1bmN0aW9uIHNsaWRlc0Zvck1hcmdpbihzbGlkZUVsLCBzbGlkZUluZGV4KSB7XG4gICAgaWYgKCFwYXJhbXMuY3NzTW9kZSkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoc2xpZGVJbmRleCA9PT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlO1xuXG4gIGlmICh0eXBlb2Ygb2Zmc2V0QmVmb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gIH1cblxuICB2YXIgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXI7XG5cbiAgaWYgKHR5cGVvZiBvZmZzZXRBZnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyLmNhbGwoc3dpcGVyKTtcbiAgfVxuXG4gIHZhciBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoID0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcbiAgdmFyIHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCA9IHN3aXBlci5zbGlkZXNHcmlkLmxlbmd0aDtcbiAgdmFyIHNwYWNlQmV0d2VlbiA9IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gIHZhciBzbGlkZVBvc2l0aW9uID0gLW9mZnNldEJlZm9yZTtcbiAgdmFyIHByZXZTbGlkZVNpemUgPSAwO1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIGlmICh0eXBlb2Ygc3dpcGVyU2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzd2lwZXJTaXplO1xuICB9XG5cbiAgc3dpcGVyLnZpcnR1YWxTaXplID0gLXNwYWNlQmV0d2VlbjsgLy8gcmVzZXQgbWFyZ2luc1xuXG4gIGlmIChydGwpIHNsaWRlcy5jc3Moe1xuICAgIG1hcmdpbkxlZnQ6ICcnLFxuICAgIG1hcmdpblRvcDogJydcbiAgfSk7ZWxzZSBzbGlkZXMuY3NzKHtcbiAgICBtYXJnaW5SaWdodDogJycsXG4gICAgbWFyZ2luQm90dG9tOiAnJ1xuICB9KTtcbiAgdmFyIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3M7XG5cbiAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgaWYgKE1hdGguZmxvb3Ioc2xpZGVzTGVuZ3RoIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgPT09IHNsaWRlc0xlbmd0aCAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSB7XG4gICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gc2xpZGVzTGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5jZWlsKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pICogcGFyYW1zLnNsaWRlc1BlckNvbHVtbjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ3JvdycpIHtcbiAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBNYXRoLm1heChzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzLCBwYXJhbXMuc2xpZGVzUGVyVmlldyAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pO1xuICAgIH1cbiAgfSAvLyBDYWxjIHNsaWRlc1xuXG5cbiAgdmFyIHNsaWRlU2l6ZTtcbiAgdmFyIHNsaWRlc1BlckNvbHVtbiA9IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gIHZhciBzbGlkZXNQZXJSb3cgPSBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gc2xpZGVzUGVyQ29sdW1uO1xuICB2YXIgbnVtRnVsbENvbHVtbnMgPSBNYXRoLmZsb29yKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzbGlkZVNpemUgPSAwO1xuICAgIHZhciBzbGlkZSA9IHNsaWRlcy5lcShpKTtcblxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgICAgLy8gU2V0IHNsaWRlcyBvcmRlclxuICAgICAgdmFyIG5ld1NsaWRlT3JkZXJJbmRleCA9IHZvaWQgMDtcbiAgICAgIHZhciBjb2x1bW4gPSB2b2lkIDA7XG4gICAgICB2YXIgcm93ID0gdm9pZCAwO1xuXG4gICAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdyb3cnICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA+IDEpIHtcbiAgICAgICAgdmFyIGdyb3VwSW5kZXggPSBNYXRoLmZsb29yKGkgLyAocGFyYW1zLnNsaWRlc1Blckdyb3VwICogcGFyYW1zLnNsaWRlc1BlckNvbHVtbikpO1xuICAgICAgICB2YXIgc2xpZGVJbmRleEluR3JvdXAgPSBpIC0gcGFyYW1zLnNsaWRlc1BlckNvbHVtbiAqIHBhcmFtcy5zbGlkZXNQZXJHcm91cCAqIGdyb3VwSW5kZXg7XG4gICAgICAgIHZhciBjb2x1bW5zSW5Hcm91cCA9IGdyb3VwSW5kZXggPT09IDAgPyBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgOiBNYXRoLm1pbihNYXRoLmNlaWwoKHNsaWRlc0xlbmd0aCAtIGdyb3VwSW5kZXggKiBzbGlkZXNQZXJDb2x1bW4gKiBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIC8gc2xpZGVzUGVyQ29sdW1uKSwgcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcihzbGlkZUluZGV4SW5Hcm91cCAvIGNvbHVtbnNJbkdyb3VwKTtcbiAgICAgICAgY29sdW1uID0gc2xpZGVJbmRleEluR3JvdXAgLSByb3cgKiBjb2x1bW5zSW5Hcm91cCArIGdyb3VwSW5kZXggKiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICAgIG5ld1NsaWRlT3JkZXJJbmRleCA9IGNvbHVtbiArIHJvdyAqIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgLyBzbGlkZXNQZXJDb2x1bW47XG4gICAgICAgIHNsaWRlLmNzcyh7XG4gICAgICAgICAgJy13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXAnOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgJy1tb3otYm94LW9yZGluYWwtZ3JvdXAnOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgJy1tcy1mbGV4LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICctd2Via2l0LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgIG9yZGVyOiBuZXdTbGlkZU9yZGVySW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAnY29sdW1uJykge1xuICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICByb3cgPSBpIC0gY29sdW1uICogc2xpZGVzUGVyQ29sdW1uO1xuXG4gICAgICAgIGlmIChjb2x1bW4gPiBudW1GdWxsQ29sdW1ucyB8fCBjb2x1bW4gPT09IG51bUZ1bGxDb2x1bW5zICYmIHJvdyA9PT0gc2xpZGVzUGVyQ29sdW1uIC0gMSkge1xuICAgICAgICAgIHJvdyArPSAxO1xuXG4gICAgICAgICAgaWYgKHJvdyA+PSBzbGlkZXNQZXJDb2x1bW4pIHtcbiAgICAgICAgICAgIHJvdyA9IDA7XG4gICAgICAgICAgICBjb2x1bW4gKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlclJvdyk7XG4gICAgICAgIGNvbHVtbiA9IGkgLSByb3cgKiBzbGlkZXNQZXJSb3c7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlLmNzcyhnZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luLXRvcCcpLCByb3cgIT09IDAgJiYgcGFyYW1zLnNwYWNlQmV0d2VlbiAmJiBwYXJhbXMuc3BhY2VCZXR3ZWVuICsgXCJweFwiKTtcbiAgICB9XG5cbiAgICBpZiAoc2xpZGUuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICB2YXIgc2xpZGVTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZVswXSwgbnVsbCk7XG4gICAgICB2YXIgY3VycmVudFRyYW5zZm9ybSA9IHNsaWRlWzBdLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgIHZhciBjdXJyZW50V2ViS2l0VHJhbnNmb3JtID0gc2xpZGVbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtO1xuXG4gICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICAgICAgc2xpZGVTaXplID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUub3V0ZXJXaWR0aCh0cnVlKSA6IHNsaWRlLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHZhciB3aWR0aCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICd3aWR0aCcpO1xuICAgICAgICB2YXIgcGFkZGluZ0xlZnQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAncGFkZGluZy1sZWZ0Jyk7XG4gICAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAncGFkZGluZy1yaWdodCcpO1xuICAgICAgICB2YXIgbWFyZ2luTGVmdCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdtYXJnaW4tbGVmdCcpO1xuICAgICAgICB2YXIgbWFyZ2luUmlnaHQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnbWFyZ2luLXJpZ2h0Jyk7XG4gICAgICAgIHZhciBib3hTaXppbmcgPSBzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnYm94LXNpemluZycpO1xuXG4gICAgICAgIGlmIChib3hTaXppbmcgJiYgYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX3NsaWRlJCA9IHNsaWRlWzBdLFxuICAgICAgICAgICAgICBjbGllbnRXaWR0aCA9IF9zbGlkZSQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgIG9mZnNldFdpZHRoID0gX3NsaWRlJC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIHBhZGRpbmdMZWZ0ICsgcGFkZGluZ1JpZ2h0ICsgbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0ICsgKG9mZnNldFdpZHRoIC0gY2xpZW50V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRUcmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSBNYXRoLmZsb29yKHNsaWRlU2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlU2l6ZSA9IChzd2lwZXJTaXplIC0gKHBhcmFtcy5zbGlkZXNQZXJWaWV3IC0gMSkgKiBzcGFjZUJldHdlZW4pIC8gcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuXG4gICAgICBpZiAoc2xpZGVzW2ldKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZVtnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBzbGlkZVNpemUgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICB9XG5cbiAgICBzbGlkZXNTaXplc0dyaWQucHVzaChzbGlkZVNpemUpO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgLyAyICsgcHJldlNsaWRlU2l6ZSAvIDIgKyBzcGFjZUJldHdlZW47XG4gICAgICBpZiAocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKGkgPT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgc2xpZGVQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoaW5kZXggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmICgoaW5kZXggLSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpKSAlIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHN3aXBlci52aXJ0dWFsU2l6ZSwgc3dpcGVyU2l6ZSkgKyBvZmZzZXRBZnRlcjtcbiAgdmFyIG5ld1NsaWRlc0dyaWQ7XG5cbiAgaWYgKHJ0bCAmJiB3cm9uZ1JUTCAmJiAocGFyYW1zLmVmZmVjdCA9PT0gJ3NsaWRlJyB8fCBwYXJhbXMuZWZmZWN0ID09PSAnY292ZXJmbG93JykpIHtcbiAgICAkd3JhcHBlckVsLmNzcyh7XG4gICAgICB3aWR0aDogc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIlxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgIHZhciBfJHdyYXBwZXJFbCRjc3M7XG5cbiAgICAkd3JhcHBlckVsLmNzcygoXyR3cmFwcGVyRWwkY3NzID0ge30sIF8kd3JhcHBlckVsJGNzc1tnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBzd2lwZXIudmlydHVhbFNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuICsgXCJweFwiLCBfJHdyYXBwZXJFbCRjc3MpKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgIHZhciBfJHdyYXBwZXJFbCRjc3MyO1xuXG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gKHNsaWRlU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pICogc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLmNlaWwoc3dpcGVyLnZpcnR1YWxTaXplIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgLSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgICR3cmFwcGVyRWwuY3NzKChfJHdyYXBwZXJFbCRjc3MyID0ge30sIF8kd3JhcHBlckVsJGNzczJbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIiwgXyR3cmFwcGVyRWwkY3NzMikpO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgc25hcEdyaWQubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICAgIHZhciBzbGlkZXNHcmlkSXRlbSA9IHNuYXBHcmlkW19pXTtcbiAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlc0dyaWRJdGVtID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkSXRlbSk7XG4gICAgICAgIGlmIChzbmFwR3JpZFtfaV0gPCBzd2lwZXIudmlydHVhbFNpemUgKyBzbmFwR3JpZFswXSkgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIH1cblxuICAgICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuICAgIH1cbiAgfSAvLyBSZW1vdmUgbGFzdCBncmlkIGVsZW1lbnRzIGRlcGVuZGluZyBvbiB3aWR0aFxuXG5cbiAgaWYgKCFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBuZXdTbGlkZXNHcmlkID0gW107XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBzbmFwR3JpZC5sZW5ndGg7IF9pMiArPSAxKSB7XG4gICAgICB2YXIgX3NsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbX2kyXTtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBfc2xpZGVzR3JpZEl0ZW0gPSBNYXRoLmZsb29yKF9zbGlkZXNHcmlkSXRlbSk7XG5cbiAgICAgIGlmIChzbmFwR3JpZFtfaTJdIDw9IHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIHtcbiAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKF9zbGlkZXNHcmlkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuXG4gICAgaWYgKE1hdGguZmxvb3Ioc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkgLSBNYXRoLmZsb29yKHNuYXBHcmlkW3NuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgIHNuYXBHcmlkLnB1c2goc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmxlbmd0aCA9PT0gMCkgc25hcEdyaWQgPSBbMF07XG5cbiAgaWYgKHBhcmFtcy5zcGFjZUJldHdlZW4gIT09IDApIHtcbiAgICB2YXIgX3NsaWRlcyRmaWx0ZXIkY3NzO1xuXG4gICAgdmFyIGtleSA9IHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBydGwgPyAnbWFyZ2luTGVmdCcgOiBnZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luUmlnaHQnKTtcbiAgICBzbGlkZXMuZmlsdGVyKHNsaWRlc0Zvck1hcmdpbikuY3NzKChfc2xpZGVzJGZpbHRlciRjc3MgPSB7fSwgX3NsaWRlcyRmaWx0ZXIkY3NzW2tleV0gPSBzcGFjZUJldHdlZW4gKyBcInB4XCIsIF9zbGlkZXMkZmlsdGVyJGNzcykpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXNCb3VuZHMpIHtcbiAgICB2YXIgYWxsU2xpZGVzU2l6ZSA9IDA7XG4gICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlU2l6ZVZhbHVlKSB7XG4gICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgfSk7XG4gICAgYWxsU2xpZGVzU2l6ZSAtPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgIHZhciBtYXhTbmFwID0gYWxsU2xpZGVzU2l6ZSAtIHN3aXBlclNpemU7XG4gICAgc25hcEdyaWQgPSBzbmFwR3JpZC5tYXAoZnVuY3Rpb24gKHNuYXApIHtcbiAgICAgIGlmIChzbmFwIDwgMCkgcmV0dXJuIC1vZmZzZXRCZWZvcmU7XG4gICAgICBpZiAoc25hcCA+IG1heFNuYXApIHJldHVybiBtYXhTbmFwICsgb2Zmc2V0QWZ0ZXI7XG4gICAgICByZXR1cm4gc25hcDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKSB7XG4gICAgdmFyIF9hbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGVTaXplVmFsdWUpIHtcbiAgICAgIF9hbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgfSk7XG4gICAgX2FsbFNsaWRlc1NpemUgLT0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcblxuICAgIGlmIChfYWxsU2xpZGVzU2l6ZSA8IHN3aXBlclNpemUpIHtcbiAgICAgIHZhciBhbGxTbGlkZXNPZmZzZXQgPSAoc3dpcGVyU2l6ZSAtIF9hbGxTbGlkZXNTaXplKSAvIDI7XG4gICAgICBzbmFwR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbmFwLCBzbmFwSW5kZXgpIHtcbiAgICAgICAgc25hcEdyaWRbc25hcEluZGV4XSA9IHNuYXAgLSBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICAgIHNsaWRlc0dyaWQuZm9yRWFjaChmdW5jdGlvbiAoc25hcCwgc25hcEluZGV4KSB7XG4gICAgICAgIHNsaWRlc0dyaWRbc25hcEluZGV4XSA9IHNuYXAgKyBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBleHRlbmQoc3dpcGVyLCB7XG4gICAgc2xpZGVzOiBzbGlkZXMsXG4gICAgc25hcEdyaWQ6IHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQ6IHNsaWRlc0dyaWQsXG4gICAgc2xpZGVzU2l6ZXNHcmlkOiBzbGlkZXNTaXplc0dyaWRcbiAgfSk7XG5cbiAgaWYgKHNsaWRlc0xlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc25hcEdyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICBzd2lwZXIuZW1pdCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChzbGlkZXNHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB9XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUF1dG9IZWlnaHQoc3BlZWQpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBhY3RpdmVTbGlkZXMgPSBbXTtcbiAgdmFyIG5ld0hlaWdodCA9IDA7XG4gIHZhciBpO1xuXG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICdudW1iZXInKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICB9IGVsc2UgaWYgKHNwZWVkID09PSB0cnVlKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCk7XG4gIH0gLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcblxuXG4gIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5jZWlsKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyk7IGkgKz0gMSkge1xuICAgICAgICB2YXIgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggKyBpO1xuICAgICAgICBpZiAoaW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHN3aXBlci5zbGlkZXMuZXEoaW5kZXgpWzBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlU2xpZGVzLnB1c2goc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpWzBdKTtcbiAgfSAvLyBGaW5kIG5ldyBoZWlnaHQgZnJvbSBoaWdoZXN0IHNsaWRlIGluIHZpZXdcblxuXG4gIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBoZWlnaHQgPSBhY3RpdmVTbGlkZXNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3SGVpZ2h0ID0gaGVpZ2h0ID4gbmV3SGVpZ2h0ID8gaGVpZ2h0IDogbmV3SGVpZ2h0O1xuICAgIH1cbiAgfSAvLyBVcGRhdGUgSGVpZ2h0XG5cblxuICBpZiAobmV3SGVpZ2h0KSBzd2lwZXIuJHdyYXBwZXJFbC5jc3MoJ2hlaWdodCcsIG5ld0hlaWdodCArIFwicHhcIik7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc09mZnNldCgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlT2Zmc2V0ID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc2xpZGVzW2ldLm9mZnNldExlZnQgOiBzbGlkZXNbaV0ub2Zmc2V0VG9wO1xuICB9XG59IiwgImltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlID0gdGhpcyAmJiB0aGlzLnRyYW5zbGF0ZSB8fCAwO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gIGlmIChzbGlkZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGlmICh0eXBlb2Ygc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0ID09PSAndW5kZWZpbmVkJykgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB2YXIgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcbiAgaWYgKHJ0bCkgb2Zmc2V0Q2VudGVyID0gdHJhbnNsYXRlOyAvLyBWaXNpYmxlIFNsaWRlc1xuXG4gIHNsaWRlcy5yZW1vdmVDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMgPSBbXTtcbiAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBzbGlkZSA9IHNsaWRlc1tpXTtcbiAgICB2YXIgc2xpZGVQcm9ncmVzcyA9IChvZmZzZXRDZW50ZXIgKyAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIDogMCkgLSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldCkgLyAoc2xpZGUuc3dpcGVyU2xpZGVTaXplICsgcGFyYW1zLnNwYWNlQmV0d2Vlbik7XG5cbiAgICBpZiAocGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSB8fCBwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgIHZhciBzbGlkZUJlZm9yZSA9IC0ob2Zmc2V0Q2VudGVyIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQpO1xuICAgICAgdmFyIHNsaWRlQWZ0ZXIgPSBzbGlkZUJlZm9yZSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbaV07XG4gICAgICB2YXIgaXNWaXNpYmxlID0gc2xpZGVCZWZvcmUgPj0gMCAmJiBzbGlkZUJlZm9yZSA8IHN3aXBlci5zaXplIC0gMSB8fCBzbGlkZUFmdGVyID4gMSAmJiBzbGlkZUFmdGVyIDw9IHN3aXBlci5zaXplIHx8IHNsaWRlQmVmb3JlIDw9IDAgJiYgc2xpZGVBZnRlciA+PSBzd2lwZXIuc2l6ZTtcblxuICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBzd2lwZXIudmlzaWJsZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gICAgICAgIHNsaWRlcy5lcShpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNsaWRlLnByb2dyZXNzID0gcnRsID8gLXNsaWRlUHJvZ3Jlc3MgOiBzbGlkZVByb2dyZXNzO1xuICB9XG5cbiAgc3dpcGVyLnZpc2libGVTbGlkZXMgPSAkKHN3aXBlci52aXNpYmxlU2xpZGVzKTtcbn0iLCAiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgdHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBtdWx0aXBsaWVyID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICB0cmFuc2xhdGUgPSBzd2lwZXIgJiYgc3dpcGVyLnRyYW5zbGF0ZSAmJiBzd2lwZXIudHJhbnNsYXRlICogbXVsdGlwbGllciB8fCAwO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgdmFyIHByb2dyZXNzID0gc3dpcGVyLnByb2dyZXNzLFxuICAgICAgaXNCZWdpbm5pbmcgPSBzd2lwZXIuaXNCZWdpbm5pbmcsXG4gICAgICBpc0VuZCA9IHN3aXBlci5pc0VuZDtcbiAgdmFyIHdhc0JlZ2lubmluZyA9IGlzQmVnaW5uaW5nO1xuICB2YXIgd2FzRW5kID0gaXNFbmQ7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgcHJvZ3Jlc3MgPSAwO1xuICAgIGlzQmVnaW5uaW5nID0gdHJ1ZTtcbiAgICBpc0VuZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICAgIGlzQmVnaW5uaW5nID0gcHJvZ3Jlc3MgPD0gMDtcbiAgICBpc0VuZCA9IHByb2dyZXNzID49IDE7XG4gIH1cblxuICBleHRlbmQoc3dpcGVyLCB7XG4gICAgcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgIGlzQmVnaW5uaW5nOiBpc0JlZ2lubmluZyxcbiAgICBpc0VuZDogaXNFbmRcbiAgfSk7XG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5IHx8IHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuYXV0b0hlaWdodCkgc3dpcGVyLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSk7XG5cbiAgaWYgKGlzQmVnaW5uaW5nICYmICF3YXNCZWdpbm5pbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hCZWdpbm5pbmcgdG9FZGdlJyk7XG4gIH1cblxuICBpZiAoaXNFbmQgJiYgIXdhc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEVuZCB0b0VkZ2UnKTtcbiAgfVxuXG4gIGlmICh3YXNCZWdpbm5pbmcgJiYgIWlzQmVnaW5uaW5nIHx8IHdhc0VuZCAmJiAhaXNFbmQpIHtcbiAgICBzd2lwZXIuZW1pdCgnZnJvbUVkZ2UnKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdwcm9ncmVzcycsIHByb2dyZXNzKTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2xpZGVzQ2xhc3NlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcmVhbEluZGV4ID0gc3dpcGVyLnJlYWxJbmRleDtcbiAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIHNsaWRlcy5yZW1vdmVDbGFzcyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlTmV4dENsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVQcmV2Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gIHZhciBhY3RpdmVTbGlkZTtcblxuICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBhY3RpdmVJbmRleCArIFwiXFxcIl1cIik7XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpO1xuICB9IC8vIEFjdGl2ZSBjbGFzc2VzXG5cblxuICBhY3RpdmVTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgLy8gRHVwbGljYXRlIHRvIGFsbCBsb29wZWQgc2xpZGVzXG4gICAgaWYgKGFjdGl2ZVNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9IC8vIE5leHQgU2xpZGVcblxuXG4gIHZhciBuZXh0U2xpZGUgPSBhY3RpdmVTbGlkZS5uZXh0QWxsKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wICYmIG5leHRTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBuZXh0U2xpZGUgPSBzbGlkZXMuZXEoMCk7XG4gICAgbmV4dFNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gIH0gLy8gUHJldiBTbGlkZVxuXG5cbiAgdmFyIHByZXZTbGlkZSA9IGFjdGl2ZVNsaWRlLnByZXZBbGwoXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcykuZXEoMCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3AgJiYgcHJldlNsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHByZXZTbGlkZSA9IHNsaWRlcy5lcSgtMSk7XG4gICAgcHJldlNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICBpZiAobmV4dFNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIG5leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgbmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlci5lbWl0U2xpZGVzQ2xhc3NlcygpO1xufSIsICJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVBY3RpdmVJbmRleChuZXdBY3RpdmVJbmRleCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIHZhciBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcHJldmlvdXNSZWFsSW5kZXggPSBzd2lwZXIucmVhbEluZGV4LFxuICAgICAgcHJldmlvdXNTbmFwSW5kZXggPSBzd2lwZXIuc25hcEluZGV4O1xuICB2YXIgYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcbiAgdmFyIHNuYXBJbmRleDtcblxuICBpZiAodHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdIC0gKHNsaWRlc0dyaWRbaSArIDFdIC0gc2xpZGVzR3JpZFtpXSkgLyAyKSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdKSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfSAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuXG5cbiAgICBpZiAocGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpIHtcbiAgICAgIGlmIChhY3RpdmVJbmRleCA8IDAgfHwgdHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykgYWN0aXZlSW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSkgPj0gMCkge1xuICAgIHNuYXBJbmRleCA9IHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2tpcCA9IE1hdGgubWluKHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGFjdGl2ZUluZGV4KTtcbiAgICBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoYWN0aXZlSW5kZXggLSBza2lwKSAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIH1cblxuICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcblxuICBpZiAoYWN0aXZlSW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoc25hcEluZGV4ICE9PSBwcmV2aW91c1NuYXBJbmRleCkge1xuICAgICAgc3dpcGVyLnNuYXBJbmRleCA9IHNuYXBJbmRleDtcbiAgICAgIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gLy8gR2V0IHJlYWwgaW5kZXhcblxuXG4gIHZhciByZWFsSW5kZXggPSBwYXJzZUludChzd2lwZXIuc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIHx8IGFjdGl2ZUluZGV4LCAxMCk7XG4gIGV4dGVuZChzd2lwZXIsIHtcbiAgICBzbmFwSW5kZXg6IHNuYXBJbmRleCxcbiAgICByZWFsSW5kZXg6IHJlYWxJbmRleCxcbiAgICBwcmV2aW91c0luZGV4OiBwcmV2aW91c0luZGV4LFxuICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleFxuICB9KTtcbiAgc3dpcGVyLmVtaXQoJ2FjdGl2ZUluZGV4Q2hhbmdlJyk7XG4gIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcblxuICBpZiAocHJldmlvdXNSZWFsSW5kZXggIT09IHJlYWxJbmRleCkge1xuICAgIHN3aXBlci5lbWl0KCdyZWFsSW5kZXhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgfHwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2UnKTtcbiAgfVxufSIsICJpbXBvcnQgJCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ2xpY2tlZFNsaWRlKGUpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgc2xpZGUgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpWzBdO1xuICB2YXIgc2xpZGVGb3VuZCA9IGZhbHNlO1xuICB2YXIgc2xpZGVJbmRleDtcblxuICBpZiAoc2xpZGUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzW2ldID09PSBzbGlkZSkge1xuICAgICAgICBzbGlkZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzbGlkZSAmJiBzbGlkZUZvdW5kKSB7XG4gICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHNsaWRlO1xuXG4gICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gcGFyc2VJbnQoJChzbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gc2xpZGVJbmRleDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHVuZGVmaW5lZDtcbiAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSB1bmRlZmluZWQgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gc3dpcGVyLmFjdGl2ZUluZGV4KSB7XG4gICAgc3dpcGVyLnNsaWRlVG9DbGlja2VkU2xpZGUoKTtcbiAgfVxufSIsICJpbXBvcnQgdXBkYXRlU2l6ZSBmcm9tICcuL3VwZGF0ZVNpemUnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlcyBmcm9tICcuL3VwZGF0ZVNsaWRlcyc7XG5pbXBvcnQgdXBkYXRlQXV0b0hlaWdodCBmcm9tICcuL3VwZGF0ZUF1dG9IZWlnaHQnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc09mZnNldCBmcm9tICcuL3VwZGF0ZVNsaWRlc09mZnNldCc7XG5pbXBvcnQgdXBkYXRlU2xpZGVzUHJvZ3Jlc3MgZnJvbSAnLi91cGRhdGVTbGlkZXNQcm9ncmVzcyc7XG5pbXBvcnQgdXBkYXRlUHJvZ3Jlc3MgZnJvbSAnLi91cGRhdGVQcm9ncmVzcyc7XG5pbXBvcnQgdXBkYXRlU2xpZGVzQ2xhc3NlcyBmcm9tICcuL3VwZGF0ZVNsaWRlc0NsYXNzZXMnO1xuaW1wb3J0IHVwZGF0ZUFjdGl2ZUluZGV4IGZyb20gJy4vdXBkYXRlQWN0aXZlSW5kZXgnO1xuaW1wb3J0IHVwZGF0ZUNsaWNrZWRTbGlkZSBmcm9tICcuL3VwZGF0ZUNsaWNrZWRTbGlkZSc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHVwZGF0ZVNpemU6IHVwZGF0ZVNpemUsXG4gIHVwZGF0ZVNsaWRlczogdXBkYXRlU2xpZGVzLFxuICB1cGRhdGVBdXRvSGVpZ2h0OiB1cGRhdGVBdXRvSGVpZ2h0LFxuICB1cGRhdGVTbGlkZXNPZmZzZXQ6IHVwZGF0ZVNsaWRlc09mZnNldCxcbiAgdXBkYXRlU2xpZGVzUHJvZ3Jlc3M6IHVwZGF0ZVNsaWRlc1Byb2dyZXNzLFxuICB1cGRhdGVQcm9ncmVzczogdXBkYXRlUHJvZ3Jlc3MsXG4gIHVwZGF0ZVNsaWRlc0NsYXNzZXM6IHVwZGF0ZVNsaWRlc0NsYXNzZXMsXG4gIHVwZGF0ZUFjdGl2ZUluZGV4OiB1cGRhdGVBY3RpdmVJbmRleCxcbiAgdXBkYXRlQ2xpY2tlZFNsaWRlOiB1cGRhdGVDbGlja2VkU2xpZGVcbn07IiwgImltcG9ydCB7IGdldFRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN3aXBlclRyYW5zbGF0ZShheGlzKSB7XG4gIGlmIChheGlzID09PSB2b2lkIDApIHtcbiAgICBheGlzID0gdGhpcy5pc0hvcml6b250YWwoKSA/ICd4JyA6ICd5JztcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICB0cmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuXG4gIGlmIChwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgIHJldHVybiBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgfVxuXG4gIHZhciBjdXJyZW50VHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKCR3cmFwcGVyRWxbMF0sIGF4aXMpO1xuICBpZiAocnRsKSBjdXJyZW50VHJhbnNsYXRlID0gLWN1cnJlbnRUcmFuc2xhdGU7XG4gIHJldHVybiBjdXJyZW50VHJhbnNsYXRlIHx8IDA7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbCxcbiAgICAgIHByb2dyZXNzID0gc3dpcGVyLnByb2dyZXNzO1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDtcbiAgdmFyIHogPSAwO1xuXG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICB4ID0gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICB5ID0gdHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbFtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAteCA6IC15O1xuICB9IGVsc2UgaWYgKCFwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgICR3cmFwcGVyRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgXCIgKyB6ICsgXCJweClcIik7XG4gIH1cblxuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICBzd2lwZXIudHJhbnNsYXRlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8geCA6IHk7IC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG5cbiAgdmFyIG5ld1Byb2dyZXNzO1xuICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgfVxuXG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gcHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaW5UcmFuc2xhdGUoKSB7XG4gIHJldHVybiAtdGhpcy5zbmFwR3JpZFswXTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF4VHJhbnNsYXRlKCkge1xuICByZXR1cm4gLXRoaXMuc25hcEdyaWRbdGhpcy5zbmFwR3JpZC5sZW5ndGggLSAxXTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNsYXRlVG8odHJhbnNsYXRlLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCB0cmFuc2xhdGVCb3VuZHMsIGludGVybmFsKSB7XG4gIGlmICh0cmFuc2xhdGUgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZSA9IDA7XG4gIH1cblxuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRyYW5zbGF0ZUJvdW5kcyA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlQm91bmRzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWw7XG5cbiAgaWYgKHN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLnByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBtaW5UcmFuc2xhdGUgPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIHZhciBtYXhUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gIHZhciBuZXdUcmFuc2xhdGU7XG4gIGlmICh0cmFuc2xhdGVCb3VuZHMgJiYgdHJhbnNsYXRlID4gbWluVHJhbnNsYXRlKSBuZXdUcmFuc2xhdGUgPSBtaW5UcmFuc2xhdGU7ZWxzZSBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA8IG1heFRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWF4VHJhbnNsYXRlO2Vsc2UgbmV3VHJhbnNsYXRlID0gdHJhbnNsYXRlOyAvLyBVcGRhdGUgcHJvZ3Jlc3NcblxuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MobmV3VHJhbnNsYXRlKTtcblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB2YXIgaXNIID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuXG4gICAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gLW5ld1RyYW5zbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAod3JhcHBlckVsLnNjcm9sbFRvKSB7XG4gICAgICAgIHZhciBfd3JhcHBlckVsJHNjcm9sbFRvO1xuXG4gICAgICAgIHdyYXBwZXJFbC5zY3JvbGxUbygoX3dyYXBwZXJFbCRzY3JvbGxUbyA9IHt9LCBfd3JhcHBlckVsJHNjcm9sbFRvW2lzSCA/ICdsZWZ0JyA6ICd0b3AnXSA9IC1uZXdUcmFuc2xhdGUsIF93cmFwcGVyRWwkc2Nyb2xsVG8uYmVoYXZpb3IgPSAnc21vb3RoJywgX3dyYXBwZXJFbCRzY3JvbGxUbykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IC1uZXdUcmFuc2xhdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG5cbiAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG5cbiAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnKTtcbiAgICB9XG5cbiAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAoIXN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kO1xuXG4gICAgICAgICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCAiaW1wb3J0IGdldFRyYW5zbGF0ZSBmcm9tICcuL2dldFRyYW5zbGF0ZSc7XG5pbXBvcnQgc2V0VHJhbnNsYXRlIGZyb20gJy4vc2V0VHJhbnNsYXRlJztcbmltcG9ydCBtaW5UcmFuc2xhdGUgZnJvbSAnLi9taW5UcmFuc2xhdGUnO1xuaW1wb3J0IG1heFRyYW5zbGF0ZSBmcm9tICcuL21heFRyYW5zbGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRlVG8gZnJvbSAnLi90cmFuc2xhdGVUbyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFRyYW5zbGF0ZTogZ2V0VHJhbnNsYXRlLFxuICBzZXRUcmFuc2xhdGU6IHNldFRyYW5zbGF0ZSxcbiAgbWluVHJhbnNsYXRlOiBtaW5UcmFuc2xhdGUsXG4gIG1heFRyYW5zbGF0ZTogbWF4VHJhbnNsYXRlLFxuICB0cmFuc2xhdGVUbzogdHJhbnNsYXRlVG9cbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICBpZiAoIXN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci4kd3JhcHBlckVsLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zaXRpb24nLCBkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIucHJldmlvdXNJbmRleDtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG5cbiAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgfVxuXG4gIHZhciBkaXIgPSBkaXJlY3Rpb247XG5cbiAgaWYgKCFkaXIpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPiBwcmV2aW91c0luZGV4KSBkaXIgPSAnbmV4dCc7ZWxzZSBpZiAoYWN0aXZlSW5kZXggPCBwcmV2aW91c0luZGV4KSBkaXIgPSAncHJldic7ZWxzZSBkaXIgPSAncmVzZXQnO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcpO1xuXG4gIGlmIChydW5DYWxsYmFja3MgJiYgYWN0aXZlSW5kZXggIT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoZGlyID09PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVSZXNldFRyYW5zaXRpb25TdGFydCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydCcpO1xuXG4gICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICB9XG4gIH1cbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIucHJldmlvdXNJbmRleCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICB2YXIgZGlyID0gZGlyZWN0aW9uO1xuXG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO2Vsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO2Vsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyAmJiBhY3RpdmVJbmRleCAhPT0gcHJldmlvdXNJbmRleCkge1xuICAgIGlmIChkaXIgPT09ICdyZXNldCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVJlc2V0VHJhbnNpdGlvbkVuZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnKTtcblxuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnKTtcbiAgICB9XG4gIH1cbn0iLCAiaW1wb3J0IHNldFRyYW5zaXRpb24gZnJvbSAnLi9zZXRUcmFuc2l0aW9uJztcbmltcG9ydCB0cmFuc2l0aW9uU3RhcnQgZnJvbSAnLi90cmFuc2l0aW9uU3RhcnQnO1xuaW1wb3J0IHRyYW5zaXRpb25FbmQgZnJvbSAnLi90cmFuc2l0aW9uRW5kJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0VHJhbnNpdGlvbjogc2V0VHJhbnNpdGlvbixcbiAgdHJhbnNpdGlvblN0YXJ0OiB0cmFuc2l0aW9uU3RhcnQsXG4gIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmRcbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgaW5kZXggPSAwO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInICYmIHR5cGVvZiBpbmRleCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ2luZGV4JyBhcmd1bWVudCBjYW5ub3QgaGF2ZSB0eXBlIG90aGVyIHRoYW4gJ251bWJlcicgb3IgJ3N0cmluZycuIFtcIiArIHR5cGVvZiBpbmRleCArIFwiXSBnaXZlbi5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJykge1xuICAgIC8qKlxuICAgICAqIFRoZSBgaW5kZXhgIGFyZ3VtZW50IGNvbnZlcnRlZCBmcm9tIGBzdHJpbmdgIHRvIGBudW1iZXJgLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdmFyIGluZGV4QXNOdW1iZXIgPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYGluZGV4YCBhcmd1bWVudCBpcyBhIHZhbGlkIGBudW1iZXJgXG4gICAgICogYWZ0ZXIgYmVpbmcgY29udmVydGVkIGZyb20gdGhlIGBzdHJpbmdgIHR5cGUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgICB2YXIgaXNWYWxpZE51bWJlciA9IGlzRmluaXRlKGluZGV4QXNOdW1iZXIpO1xuXG4gICAgaWYgKCFpc1ZhbGlkTnVtYmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGFzc2VkLWluICdpbmRleCcgKHN0cmluZykgY291bGRuJ3QgYmUgY29udmVydGVkIHRvICdudW1iZXInLiBbXCIgKyBpbmRleCArIFwiXSBnaXZlbi5cIik7XG4gICAgfSAvLyBLbm93aW5nIHRoYXQgdGhlIGNvbnZlcnRlZCBgaW5kZXhgIGlzIGEgdmFsaWQgbnVtYmVyLFxuICAgIC8vIHdlIGNhbiB1cGRhdGUgdGhlIG9yaWdpbmFsIGFyZ3VtZW50J3MgdmFsdWUuXG5cblxuICAgIGluZGV4ID0gaW5kZXhBc051bWJlcjtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVJbmRleCA9IGluZGV4O1xuICBpZiAoc2xpZGVJbmRleCA8IDApIHNsaWRlSW5kZXggPSAwO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4LFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbDtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgc2xpZGVJbmRleCk7XG4gIHZhciBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoc2xpZGVJbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuXG4gIGlmICgoYWN0aXZlSW5kZXggfHwgcGFyYW1zLmluaXRpYWxTbGlkZSB8fCAwKSA9PT0gKHByZXZpb3VzSW5kZXggfHwgMCkgJiYgcnVuQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKTtcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGUgPSAtc25hcEdyaWRbc25hcEluZGV4XTsgLy8gVXBkYXRlIHByb2dyZXNzXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7IC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG5cbiAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IC1NYXRoLmZsb29yKHRyYW5zbGF0ZSAqIDEwMCk7XG4gICAgICB2YXIgbm9ybWFsaXplZEdpcmQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaV0gKiAxMDApO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRHcmlkTmV4dCA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpICsgMV0gKiAxMDApO1xuXG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0IC0gKG5vcm1hbGl6ZWRHcmlkTmV4dCAtIG5vcm1hbGl6ZWRHaXJkKSAvIDIpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IG5vcm1hbGl6ZWRHaXJkICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPCBub3JtYWxpemVkR3JpZE5leHQpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCkge1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gRGlyZWN0aW9ucyBsb2Nrc1xuXG5cbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHRyYW5zbGF0ZSA8IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgdHJhbnNsYXRlID4gc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGlmICgoYWN0aXZlSW5kZXggfHwgMCkgIT09IHNsaWRlSW5kZXgpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgZGlyZWN0aW9uO1xuICBpZiAoc2xpZGVJbmRleCA+IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAnbmV4dCc7ZWxzZSBpZiAoc2xpZGVJbmRleCA8IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAncHJldic7ZWxzZSBkaXJlY3Rpb24gPSAncmVzZXQnOyAvLyBVcGRhdGUgSW5kZXhcblxuICBpZiAocnRsICYmIC10cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUgfHwgIXJ0bCAmJiB0cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7IC8vIFVwZGF0ZSBIZWlnaHRcblxuICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgaWYgKHBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScpIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB2YXIgaXNIID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgIHZhciB0ID0gLXRyYW5zbGF0ZTtcblxuICAgIGlmIChydGwpIHtcbiAgICAgIHQgPSB3cmFwcGVyRWwuc2Nyb2xsV2lkdGggLSB3cmFwcGVyRWwub2Zmc2V0V2lkdGggLSB0O1xuICAgIH1cblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKHdyYXBwZXJFbC5zY3JvbGxUbykge1xuICAgICAgICB2YXIgX3dyYXBwZXJFbCRzY3JvbGxUbztcblxuICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oKF93cmFwcGVyRWwkc2Nyb2xsVG8gPSB7fSwgX3dyYXBwZXJFbCRzY3JvbGxUb1tpc0ggPyAnbGVmdCcgOiAndG9wJ10gPSB0LCBfd3JhcHBlckVsJHNjcm9sbFRvLmJlaGF2aW9yID0gJ3Ntb290aCcsIF93cmFwcGVyRWwkc2Nyb2xsVG8pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSB0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuXG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKCFzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlVG9Mb29wKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgIGluZGV4ID0gMDtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIG5ld0luZGV4ID0gaW5kZXg7XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgIG5ld0luZGV4ICs9IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gIH1cblxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZU5leHQoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIGFuaW1hdGluZyA9IHN3aXBlci5hbmltYXRpbmc7XG4gIHZhciBpbmNyZW1lbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkZSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBpbmNyZW1lbnQsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVByZXYoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIGFuaW1hdGluZyA9IHN3aXBlci5hbmltYXRpbmcsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIHJ0bFRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKGFuaW1hdGluZyAmJiBwYXJhbXMubG9vcFByZXZlbnRzU2xpZGUpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIubG9vcEZpeCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRlID0gcnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWwpIHtcbiAgICBpZiAodmFsIDwgMCkgcmV0dXJuIC1NYXRoLmZsb29yKE1hdGguYWJzKHZhbCkpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHZhbCk7XG4gIH1cblxuICB2YXIgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IG5vcm1hbGl6ZSh0cmFuc2xhdGUpO1xuICB2YXIgbm9ybWFsaXplZFNuYXBHcmlkID0gc25hcEdyaWQubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplKHZhbCk7XG4gIH0pO1xuICB2YXIgY3VycmVudFNuYXAgPSBzbmFwR3JpZFtub3JtYWxpemVkU25hcEdyaWQuaW5kZXhPZihub3JtYWxpemVkVHJhbnNsYXRlKV07XG4gIHZhciBwcmV2U25hcCA9IHNuYXBHcmlkW25vcm1hbGl6ZWRTbmFwR3JpZC5pbmRleE9mKG5vcm1hbGl6ZWRUcmFuc2xhdGUpIC0gMV07XG5cbiAgaWYgKHR5cGVvZiBwcmV2U25hcCA9PT0gJ3VuZGVmaW5lZCcgJiYgcGFyYW1zLmNzc01vZGUpIHtcbiAgICBzbmFwR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICBpZiAoIXByZXZTbmFwICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gc25hcCkgcHJldlNuYXAgPSBzbmFwO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHByZXZJbmRleDtcblxuICBpZiAodHlwZW9mIHByZXZTbmFwICE9PSAndW5kZWZpbmVkJykge1xuICAgIHByZXZJbmRleCA9IHNsaWRlc0dyaWQuaW5kZXhPZihwcmV2U25hcCk7XG4gICAgaWYgKHByZXZJbmRleCA8IDApIHByZXZJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCAtIDE7XG4gIH1cblxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8ocHJldkluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwgIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVSZXNldChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCAiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvQ2xvc2VzdChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCwgdGhyZXNob2xkKSB7XG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICBpZiAodGhyZXNob2xkID09PSB2b2lkIDApIHtcbiAgICB0aHJlc2hvbGQgPSAwLjU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICB2YXIgc2tpcCA9IE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBpbmRleCk7XG4gIHZhciBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoaW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICB2YXIgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBpZiAodHJhbnNsYXRlID49IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdKSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIG9uIG9yIGFmdGVyIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGFmdGVyIGl0LlxuICAgIHZhciBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAgIHZhciBuZXh0U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggKyAxXTtcblxuICAgIGlmICh0cmFuc2xhdGUgLSBjdXJyZW50U25hcCA+IChuZXh0U25hcCAtIGN1cnJlbnRTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggKz0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIGJlZm9yZSB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBiZWZvcmUgaXQuXG4gICAgdmFyIHByZXZTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCAtIDFdO1xuICAgIHZhciBfY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcblxuICAgIGlmICh0cmFuc2xhdGUgLSBwcmV2U25hcCA8PSAoX2N1cnJlbnRTbmFwIC0gcHJldlNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCAtPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfVxuXG4gIGluZGV4ID0gTWF0aC5tYXgoaW5kZXgsIDApO1xuICBpbmRleCA9IE1hdGgubWluKGluZGV4LCBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwgImltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBuZXh0VGljayB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlVG9DbGlja2VkU2xpZGUoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgdmFyIHNsaWRlc1BlclZpZXcgPSBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgdmFyIHNsaWRlVG9JbmRleCA9IHN3aXBlci5jbGlja2VkSW5kZXg7XG4gIHZhciByZWFsSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHJldHVybjtcbiAgICByZWFsSW5kZXggPSBwYXJzZUludCgkKHN3aXBlci5jbGlja2VkU2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIGlmIChzbGlkZVRvSW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzIC0gc2xpZGVzUGVyVmlldyAvIDIgfHwgc2xpZGVUb0luZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzICsgc2xpZGVzUGVyVmlldyAvIDIpIHtcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXTpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilcIikuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNsaWRlVG9JbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgIHNsaWRlVG9JbmRleCA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl06bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpXCIpLmVxKDApLmluZGV4KCk7XG4gICAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgfVxufSIsICJpbXBvcnQgc2xpZGVUbyBmcm9tICcuL3NsaWRlVG8nO1xuaW1wb3J0IHNsaWRlVG9Mb29wIGZyb20gJy4vc2xpZGVUb0xvb3AnO1xuaW1wb3J0IHNsaWRlTmV4dCBmcm9tICcuL3NsaWRlTmV4dCc7XG5pbXBvcnQgc2xpZGVQcmV2IGZyb20gJy4vc2xpZGVQcmV2JztcbmltcG9ydCBzbGlkZVJlc2V0IGZyb20gJy4vc2xpZGVSZXNldCc7XG5pbXBvcnQgc2xpZGVUb0Nsb3Nlc3QgZnJvbSAnLi9zbGlkZVRvQ2xvc2VzdCc7XG5pbXBvcnQgc2xpZGVUb0NsaWNrZWRTbGlkZSBmcm9tICcuL3NsaWRlVG9DbGlja2VkU2xpZGUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzbGlkZVRvOiBzbGlkZVRvLFxuICBzbGlkZVRvTG9vcDogc2xpZGVUb0xvb3AsXG4gIHNsaWRlTmV4dDogc2xpZGVOZXh0LFxuICBzbGlkZVByZXY6IHNsaWRlUHJldixcbiAgc2xpZGVSZXNldDogc2xpZGVSZXNldCxcbiAgc2xpZGVUb0Nsb3Nlc3Q6IHNsaWRlVG9DbG9zZXN0LFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBzbGlkZVRvQ2xpY2tlZFNsaWRlXG59OyIsICJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3BDcmVhdGUoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDsgLy8gUmVtb3ZlIGR1cGxpY2F0ZWQgc2xpZGVzXG5cbiAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykucmVtb3ZlKCk7XG4gIHZhciBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuXG4gIGlmIChwYXJhbXMubG9vcEZpbGxHcm91cFdpdGhCbGFuaykge1xuICAgIHZhciBibGFua1NsaWRlc051bSA9IHBhcmFtcy5zbGlkZXNQZXJHcm91cCAtIHNsaWRlcy5sZW5ndGggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgICBpZiAoYmxhbmtTbGlkZXNOdW0gIT09IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibGFua1NsaWRlc051bTsgaSArPSAxKSB7XG4gICAgICAgIHZhciBibGFua05vZGUgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlQmxhbmtDbGFzcyk7XG4gICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKGJsYW5rTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgIXBhcmFtcy5sb29wZWRTbGlkZXMpIHBhcmFtcy5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICBzd2lwZXIubG9vcGVkU2xpZGVzID0gTWF0aC5jZWlsKHBhcnNlRmxvYXQocGFyYW1zLmxvb3BlZFNsaWRlcyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldywgMTApKTtcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyArPSBwYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG5cbiAgaWYgKHN3aXBlci5sb29wZWRTbGlkZXMgPiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XG4gIH1cblxuICB2YXIgcHJlcGVuZFNsaWRlcyA9IFtdO1xuICB2YXIgYXBwZW5kU2xpZGVzID0gW107XG4gIHNsaWRlcy5lYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICB2YXIgc2xpZGUgPSAkKGVsKTtcblxuICAgIGlmIChpbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMpIHtcbiAgICAgIGFwcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCBzbGlkZXMubGVuZ3RoICYmIGluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzKSB7XG4gICAgICBwcmVwZW5kU2xpZGVzLnB1c2goZWwpO1xuICAgIH1cblxuICAgIHNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICB9KTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXBwZW5kU2xpZGVzLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKCQoYXBwZW5kU2xpZGVzW19pXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gIH1cblxuICBmb3IgKHZhciBfaTIgPSBwcmVwZW5kU2xpZGVzLmxlbmd0aCAtIDE7IF9pMiA+PSAwOyBfaTIgLT0gMSkge1xuICAgICR3cmFwcGVyRWwucHJlcGVuZCgkKHByZXBlbmRTbGlkZXNbX2kyXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gIH1cbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcEZpeCgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHN3aXBlci5lbWl0KCdiZWZvcmVMb29wRml4Jyk7XG4gIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXMsXG4gICAgICBsb29wZWRTbGlkZXMgPSBzd2lwZXIubG9vcGVkU2xpZGVzLFxuICAgICAgYWxsb3dTbGlkZVByZXYgPSBzd2lwZXIuYWxsb3dTbGlkZVByZXYsXG4gICAgICBhbGxvd1NsaWRlTmV4dCA9IHN3aXBlci5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgdmFyIG5ld0luZGV4O1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICB2YXIgc25hcFRyYW5zbGF0ZSA9IC1zbmFwR3JpZFthY3RpdmVJbmRleF07XG4gIHZhciBkaWZmID0gc25hcFRyYW5zbGF0ZSAtIHN3aXBlci5nZXRUcmFuc2xhdGUoKTsgLy8gRml4IEZvciBOZWdhdGl2ZSBPdmVyc2xpZGluZ1xuXG4gIGlmIChhY3RpdmVJbmRleCA8IGxvb3BlZFNsaWRlcykge1xuICAgIG5ld0luZGV4ID0gc2xpZGVzLmxlbmd0aCAtIGxvb3BlZFNsaWRlcyAqIDMgKyBhY3RpdmVJbmRleDtcbiAgICBuZXdJbmRleCArPSBsb29wZWRTbGlkZXM7XG4gICAgdmFyIHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICBpZiAoc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPj0gc2xpZGVzLmxlbmd0aCAtIGxvb3BlZFNsaWRlcykge1xuICAgIC8vIEZpeCBGb3IgUG9zaXRpdmUgT3ZlcnNsaWRpbmdcbiAgICBuZXdJbmRleCA9IC1zbGlkZXMubGVuZ3RoICsgYWN0aXZlSW5kZXggKyBsb29wZWRTbGlkZXM7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuXG4gICAgdmFyIF9zbGlkZUNoYW5nZWQgPSBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuXG4gICAgaWYgKF9zbGlkZUNoYW5nZWQgJiYgZGlmZiAhPT0gMCkge1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSgocnRsID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKSAtIGRpZmYpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcbiAgc3dpcGVyLmVtaXQoJ2xvb3BGaXgnKTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcERlc3Ryb3koKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIiwuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlQmxhbmtDbGFzcykucmVtb3ZlKCk7XG4gIHNsaWRlcy5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xufSIsICJpbXBvcnQgbG9vcENyZWF0ZSBmcm9tICcuL2xvb3BDcmVhdGUnO1xuaW1wb3J0IGxvb3BGaXggZnJvbSAnLi9sb29wRml4JztcbmltcG9ydCBsb29wRGVzdHJveSBmcm9tICcuL2xvb3BEZXN0cm95JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9vcENyZWF0ZTogbG9vcENyZWF0ZSxcbiAgbG9vcEZpeDogbG9vcEZpeCxcbiAgbG9vcERlc3Ryb3k6IGxvb3BEZXN0cm95XG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRHcmFiQ3Vyc29yKG1vdmluZykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5zdXBwb3J0LnRvdWNoIHx8ICFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggfHwgc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgdmFyIGVsID0gc3dpcGVyLmVsO1xuICBlbC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctd2Via2l0LWdyYWJiaW5nJyA6ICctd2Via2l0LWdyYWInO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLW1vei1ncmFiYmluJyA6ICctbW96LWdyYWInO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bnNldEdyYWJDdXJzb3IoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuXG4gIGlmIChzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCBzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN3aXBlci5lbC5zdHlsZS5jdXJzb3IgPSAnJztcbn0iLCAiaW1wb3J0IHNldEdyYWJDdXJzb3IgZnJvbSAnLi9zZXRHcmFiQ3Vyc29yJztcbmltcG9ydCB1bnNldEdyYWJDdXJzb3IgZnJvbSAnLi91bnNldEdyYWJDdXJzb3InO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRHcmFiQ3Vyc29yOiBzZXRHcmFiQ3Vyc29yLFxuICB1bnNldEdyYWJDdXJzb3I6IHVuc2V0R3JhYkN1cnNvclxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kU2xpZGUoc2xpZGVzKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tpXSkgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gIH1cblxuICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW2ldKSAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG5cbiAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgfSBlbHNlIHtcbiAgICAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU2xpZGUoaW5kZXgsIHNsaWRlcykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgdmFyIGFjdGl2ZUluZGV4QnVmZmVyID0gYWN0aXZlSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICBzd2lwZXIuc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgfVxuXG4gIHZhciBiYXNlTGVuZ3RoID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4IDw9IDApIHtcbiAgICBzd2lwZXIucHJlcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZGV4ID49IGJhc2VMZW5ndGgpIHtcbiAgICBzd2lwZXIuYXBwZW5kU2xpZGUoc2xpZGVzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyAxIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gIHZhciBzbGlkZXNCdWZmZXIgPSBbXTtcblxuICBmb3IgKHZhciBpID0gYmFzZUxlbmd0aCAtIDE7IGkgPj0gaW5kZXg7IGkgLT0gMSkge1xuICAgIHZhciBjdXJyZW50U2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgIGN1cnJlbnRTbGlkZS5yZW1vdmUoKTtcbiAgICBzbGlkZXNCdWZmZXIudW5zaGlmdChjdXJyZW50U2xpZGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBzbGlkZXMubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW19pXSkgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzW19pXSk7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyBzbGlkZXMubGVuZ3RoIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHNsaWRlc0J1ZmZlci5sZW5ndGg7IF9pMiArPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzQnVmZmVyW19pMl0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgfVxuXG4gIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBzd2lwZXIuc3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICB9XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIHZhciBhY3RpdmVJbmRleEJ1ZmZlciA9IGFjdGl2ZUluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGFjdGl2ZUluZGV4QnVmZmVyIC09IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgc3dpcGVyLnNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyk7XG4gIH1cblxuICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlcjtcbiAgdmFyIGluZGV4VG9SZW1vdmU7XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXNJbmRleGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXNJbmRleGVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNJbmRleGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlc1tpXTtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSBzd2lwZXIuc2xpZGVzLmVxKGluZGV4VG9SZW1vdmUpLnJlbW92ZSgpO1xuICAgICAgaWYgKGluZGV4VG9SZW1vdmUgPCBuZXdBY3RpdmVJbmRleCkgbmV3QWN0aXZlSW5kZXggLT0gMTtcbiAgICB9XG5cbiAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgfSBlbHNlIHtcbiAgICBpbmRleFRvUmVtb3ZlID0gc2xpZGVzSW5kZXhlcztcbiAgICBpZiAoc3dpcGVyLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgc3dpcGVyLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTtcbiAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSBuZXdBY3RpdmVJbmRleCAtPSAxO1xuICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgfVxuXG4gIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBzd2lwZXIuc3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICB9XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUFsbFNsaWRlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZXNJbmRleGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICB9XG5cbiAgc3dpcGVyLnJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpO1xufSIsICJpbXBvcnQgYXBwZW5kU2xpZGUgZnJvbSAnLi9hcHBlbmRTbGlkZSc7XG5pbXBvcnQgcHJlcGVuZFNsaWRlIGZyb20gJy4vcHJlcGVuZFNsaWRlJztcbmltcG9ydCBhZGRTbGlkZSBmcm9tICcuL2FkZFNsaWRlJztcbmltcG9ydCByZW1vdmVTbGlkZSBmcm9tICcuL3JlbW92ZVNsaWRlJztcbmltcG9ydCByZW1vdmVBbGxTbGlkZXMgZnJvbSAnLi9yZW1vdmVBbGxTbGlkZXMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBhcHBlbmRTbGlkZTogYXBwZW5kU2xpZGUsXG4gIHByZXBlbmRTbGlkZTogcHJlcGVuZFNsaWRlLFxuICBhZGRTbGlkZTogYWRkU2xpZGUsXG4gIHJlbW92ZVNsaWRlOiByZW1vdmVTbGlkZSxcbiAgcmVtb3ZlQWxsU2xpZGVzOiByZW1vdmVBbGxTbGlkZXNcbn07IiwgImltcG9ydCB7IGdldFdpbmRvdywgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBleHRlbmQsIG5vdyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChldmVudCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICB2YXIgJHRhcmdldEVsID0gJChlLnRhcmdldCk7XG5cbiAgaWYgKHBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ3dyYXBwZXInKSB7XG4gICAgaWYgKCEkdGFyZ2V0RWwuY2xvc2VzdChzd2lwZXIud3JhcHBlckVsKS5sZW5ndGgpIHJldHVybjtcbiAgfVxuXG4gIGRhdGEuaXNUb3VjaEV2ZW50ID0gZS50eXBlID09PSAndG91Y2hzdGFydCc7XG4gIGlmICghZGF0YS5pc1RvdWNoRXZlbnQgJiYgJ3doaWNoJyBpbiBlICYmIGUud2hpY2ggPT09IDMpIHJldHVybjtcbiAgaWYgKCFkYXRhLmlzVG91Y2hFdmVudCAmJiAnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uID4gMCkgcmV0dXJuO1xuICBpZiAoZGF0YS5pc1RvdWNoZWQgJiYgZGF0YS5pc01vdmVkKSByZXR1cm47IC8vIGNoYW5nZSB0YXJnZXQgZWwgZm9yIHNoYWRvdyByb290IGNvbXBvbmVuZXRcblxuICB2YXIgc3dpcGluZ0NsYXNzSGFzVmFsdWUgPSAhIXBhcmFtcy5ub1N3aXBpbmdDbGFzcyAmJiBwYXJhbXMubm9Td2lwaW5nQ2xhc3MgIT09ICcnO1xuXG4gIGlmIChzd2lwaW5nQ2xhc3NIYXNWYWx1ZSAmJiBlLnRhcmdldCAmJiBlLnRhcmdldC5zaGFkb3dSb290ICYmIGV2ZW50LnBhdGggJiYgZXZlbnQucGF0aFswXSkge1xuICAgICR0YXJnZXRFbCA9ICQoZXZlbnQucGF0aFswXSk7XG4gIH1cblxuICBpZiAocGFyYW1zLm5vU3dpcGluZyAmJiAkdGFyZ2V0RWwuY2xvc2VzdChwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgPyBwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgOiBcIi5cIiArIHBhcmFtcy5ub1N3aXBpbmdDbGFzcylbMF0pIHtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zd2lwZUhhbmRsZXIpIHtcbiAgICBpZiAoISR0YXJnZXRFbC5jbG9zZXN0KHBhcmFtcy5zd2lwZUhhbmRsZXIpWzBdKSByZXR1cm47XG4gIH1cblxuICB0b3VjaGVzLmN1cnJlbnRYID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICB0b3VjaGVzLmN1cnJlbnRZID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICB2YXIgc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgdmFyIHN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7IC8vIERvIE5PVCBzdGFydCBpZiBpT1MgZWRnZSBzd2lwZSBpcyBkZXRlY3RlZC4gT3RoZXJ3aXNlIGlPUyBhcHAgY2Fubm90IHN3aXBlLXRvLWdvLWJhY2sgYW55bW9yZVxuXG4gIHZhciBlZGdlU3dpcGVEZXRlY3Rpb24gPSBwYXJhbXMuZWRnZVN3aXBlRGV0ZWN0aW9uIHx8IHBhcmFtcy5pT1NFZGdlU3dpcGVEZXRlY3Rpb247XG4gIHZhciBlZGdlU3dpcGVUaHJlc2hvbGQgPSBwYXJhbXMuZWRnZVN3aXBlVGhyZXNob2xkIHx8IHBhcmFtcy5pT1NFZGdlU3dpcGVUaHJlc2hvbGQ7XG5cbiAgaWYgKGVkZ2VTd2lwZURldGVjdGlvbiAmJiAoc3RhcnRYIDw9IGVkZ2VTd2lwZVRocmVzaG9sZCB8fCBzdGFydFggPj0gd2luZG93LmlubmVyV2lkdGggLSBlZGdlU3dpcGVUaHJlc2hvbGQpKSB7XG4gICAgaWYgKGVkZ2VTd2lwZURldGVjdGlvbiA9PT0gJ3ByZXZlbnQnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZXh0ZW5kKGRhdGEsIHtcbiAgICBpc1RvdWNoZWQ6IHRydWUsXG4gICAgaXNNb3ZlZDogZmFsc2UsXG4gICAgYWxsb3dUb3VjaENhbGxiYWNrczogdHJ1ZSxcbiAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWRcbiAgfSk7XG4gIHRvdWNoZXMuc3RhcnRYID0gc3RhcnRYO1xuICB0b3VjaGVzLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IG5vdygpO1xuICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gIHN3aXBlci51cGRhdGVTaXplKCk7XG4gIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IGZhbHNlO1xuXG4gIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgaWYgKCR0YXJnZXRFbC5pcyhkYXRhLmZvcm1FbGVtZW50cykpIHByZXZlbnREZWZhdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKGRhdGEuZm9ybUVsZW1lbnRzKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSAkdGFyZ2V0RWxbMF0pIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cblxuICAgIHZhciBzaG91bGRQcmV2ZW50RGVmYXVsdCA9IHByZXZlbnREZWZhdWx0ICYmIHN3aXBlci5hbGxvd1RvdWNoTW92ZSAmJiBwYXJhbXMudG91Y2hTdGFydFByZXZlbnREZWZhdWx0O1xuXG4gICAgaWYgKChwYXJhbXMudG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQpICYmICEkdGFyZ2V0RWxbMF0uaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuZW1pdCgndG91Y2hTdGFydCcsIGUpO1xufSIsICJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmltcG9ydCB7IGV4dGVuZCwgbm93IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB0b3VjaGVzID0gc3dpcGVyLnRvdWNoZXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICB2YXIgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5zdGFydE1vdmluZyAmJiBkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgZS50eXBlICE9PSAndG91Y2htb3ZlJykgcmV0dXJuO1xuICB2YXIgdGFyZ2V0VG91Y2ggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICYmIGUudGFyZ2V0VG91Y2hlcyAmJiAoZS50YXJnZXRUb3VjaGVzWzBdIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xuICB2YXIgcGFnZVggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gdGFyZ2V0VG91Y2gucGFnZVggOiBlLnBhZ2VYO1xuICB2YXIgcGFnZVkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gdGFyZ2V0VG91Y2gucGFnZVkgOiBlLnBhZ2VZO1xuXG4gIGlmIChlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKSB7XG4gICAgdG91Y2hlcy5zdGFydFggPSBwYWdlWDtcbiAgICB0b3VjaGVzLnN0YXJ0WSA9IHBhZ2VZO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghc3dpcGVyLmFsbG93VG91Y2hNb3ZlKSB7XG4gICAgLy8gaXNNb3ZlZCA9IHRydWU7XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcblxuICAgIGlmIChkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgZXh0ZW5kKHRvdWNoZXMsIHtcbiAgICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgICAgY3VycmVudFg6IHBhZ2VYLFxuICAgICAgICBjdXJyZW50WTogcGFnZVlcbiAgICAgIH0pO1xuICAgICAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IG5vdygpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcyAmJiAhcGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgICAgLy8gVmVydGljYWxcbiAgICAgIGlmIChwYWdlWSA8IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VZID4gdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhZ2VYIDwgdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVggPiB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICQoZS50YXJnZXQpLmlzKGRhdGEuZm9ybUVsZW1lbnRzKSkge1xuICAgICAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmUnLCBlKTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHJldHVybjtcbiAgdG91Y2hlcy5jdXJyZW50WCA9IHBhZ2VYO1xuICB0b3VjaGVzLmN1cnJlbnRZID0gcGFnZVk7XG4gIHZhciBkaWZmWCA9IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WDtcbiAgdmFyIGRpZmZZID0gdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMuc3RhcnRZO1xuICBpZiAoc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQgJiYgTWF0aC5zcXJ0KE1hdGgucG93KGRpZmZYLCAyKSArIE1hdGgucG93KGRpZmZZLCAyKSkgPCBzd2lwZXIucGFyYW1zLnRocmVzaG9sZCkgcmV0dXJuO1xuXG4gIGlmICh0eXBlb2YgZGF0YS5pc1Njcm9sbGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgdG91Y2hBbmdsZTtcblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgdG91Y2hlcy5jdXJyZW50WSA9PT0gdG91Y2hlcy5zdGFydFkgfHwgc3dpcGVyLmlzVmVydGljYWwoKSAmJiB0b3VjaGVzLmN1cnJlbnRYID09PSB0b3VjaGVzLnN0YXJ0WCkge1xuICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmIChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSA+PSAyNSkge1xuICAgICAgICB0b3VjaEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlIDogOTAgLSB0b3VjaEFuZ2xlID4gcGFyYW1zLnRvdWNoQW5nbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGF0YS5zdGFydE1vdmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodG91Y2hlcy5jdXJyZW50WCAhPT0gdG91Y2hlcy5zdGFydFggfHwgdG91Y2hlcy5jdXJyZW50WSAhPT0gdG91Y2hlcy5zdGFydFkpIHtcbiAgICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWRhdGEuc3RhcnRNb3ZpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuXG4gIGlmICghcGFyYW1zLmNzc01vZGUgJiYgZS5jYW5jZWxhYmxlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy50b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24gJiYgIXBhcmFtcy5uZXN0ZWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgaWYgKCFkYXRhLmlzTW92ZWQpIHtcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgfVxuXG4gICAgZGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcblxuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC50cmlnZ2VyKCd3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnKTtcbiAgICB9XG5cbiAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSBmYWxzZTsgLy8gR3JhYiBDdXJzb3JcblxuICAgIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKHRydWUpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzbGlkZXJGaXJzdE1vdmUnLCBlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzbGlkZXJNb3ZlJywgZSk7XG4gIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gIHZhciBkaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gZGlmZlggOiBkaWZmWTtcbiAgdG91Y2hlcy5kaWZmID0gZGlmZjtcbiAgZGlmZiAqPSBwYXJhbXMudG91Y2hSYXRpbztcbiAgaWYgKHJ0bCkgZGlmZiA9IC1kaWZmO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSBkaWZmID4gMCA/ICdwcmV2JyA6ICduZXh0JztcbiAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGlmZiArIGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIHZhciBkaXNhYmxlUGFyZW50U3dpcGVyID0gdHJ1ZTtcbiAgdmFyIHJlc2lzdGFuY2VSYXRpbyA9IHBhcmFtcy5yZXNpc3RhbmNlUmF0aW87XG5cbiAgaWYgKHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgcmVzaXN0YW5jZVJhdGlvID0gMDtcbiAgfVxuXG4gIGlmIChkaWZmID4gMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgLSAxICsgTWF0aC5wb3coLXN3aXBlci5taW5UcmFuc2xhdGUoKSArIGRhdGEuc3RhcnRUcmFuc2xhdGUgKyBkaWZmLCByZXNpc3RhbmNlUmF0aW8pO1xuICB9IGVsc2UgaWYgKGRpZmYgPCAwICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICBpZiAocGFyYW1zLnJlc2lzdGFuY2UpIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSArIDEgLSBNYXRoLnBvdyhzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBkYXRhLnN0YXJ0VHJhbnNsYXRlIC0gZGlmZiwgcmVzaXN0YW5jZVJhdGlvKTtcbiAgfVxuXG4gIGlmIChkaXNhYmxlUGFyZW50U3dpcGVyKSB7XG4gICAgZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciA9IHRydWU7XG4gIH0gLy8gRGlyZWN0aW9ucyBsb2Nrc1xuXG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmICFzd2lwZXIuYWxsb3dTbGlkZU5leHQpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9IC8vIFRocmVzaG9sZFxuXG5cbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSB7XG4gICAgaWYgKE1hdGguYWJzKGRpZmYpID4gcGFyYW1zLnRocmVzaG9sZCB8fCBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgaWYgKCFkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgICBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IHRydWU7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgICAgICAgdG91Y2hlcy5zdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZO1xuICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICB0b3VjaGVzLmRpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFggOiB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoIXBhcmFtcy5mb2xsb3dGaW5nZXIgfHwgcGFyYW1zLmNzc01vZGUpIHJldHVybjsgLy8gVXBkYXRlIGFjdGl2ZSBpbmRleCBpbiBmcmVlIG1vZGVcblxuICBpZiAocGFyYW1zLmZyZWVNb2RlIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgIC8vIFZlbG9jaXR5XG4gICAgaWYgKGRhdGEudmVsb2NpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRhdGEudmVsb2NpdGllcy5wdXNoKHtcbiAgICAgICAgcG9zaXRpb246IHRvdWNoZXNbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3N0YXJ0WCcgOiAnc3RhcnRZJ10sXG4gICAgICAgIHRpbWU6IGRhdGEudG91Y2hTdGFydFRpbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRhdGEudmVsb2NpdGllcy5wdXNoKHtcbiAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdjdXJyZW50WCcgOiAnY3VycmVudFknXSxcbiAgICAgIHRpbWU6IG5vdygpXG4gICAgfSk7XG4gIH0gLy8gVXBkYXRlIHByb2dyZXNzXG5cblxuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTsgLy8gVXBkYXRlIHRyYW5zbGF0ZVxuXG4gIHN3aXBlci5zZXRUcmFuc2xhdGUoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTtcbn0iLCAiaW1wb3J0IHsgbm93LCBuZXh0VGljayB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB0b3VjaGVzID0gc3dpcGVyLnRvdWNoZXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQ7XG4gIHZhciBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG5cbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaEVuZCcsIGUpO1xuICB9XG5cbiAgZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzID0gZmFsc2U7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLmlzTW92ZWQgJiYgcGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICB9XG5cbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9IC8vIFJldHVybiBHcmFiIEN1cnNvclxuXG5cbiAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIGRhdGEuaXNNb3ZlZCAmJiBkYXRhLmlzVG91Y2hlZCAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gIH0gLy8gVGltZSBkaWZmXG5cblxuICB2YXIgdG91Y2hFbmRUaW1lID0gbm93KCk7XG4gIHZhciB0aW1lRGlmZiA9IHRvdWNoRW5kVGltZSAtIGRhdGEudG91Y2hTdGFydFRpbWU7IC8vIFRhcCwgZG91YmxlVGFwLCBDbGlja1xuXG4gIGlmIChzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIHN3aXBlci51cGRhdGVDbGlja2VkU2xpZGUoZSk7XG4gICAgc3dpcGVyLmVtaXQoJ3RhcCBjbGljaycsIGUpO1xuXG4gICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmIHRvdWNoRW5kVGltZSAtIGRhdGEubGFzdENsaWNrVGltZSA8IDMwMCkge1xuICAgICAgc3dpcGVyLmVtaXQoJ2RvdWJsZVRhcCBkb3VibGVDbGljaycsIGUpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEubGFzdENsaWNrVGltZSA9IG5vdygpO1xuICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzd2lwZXIuZGVzdHJveWVkKSBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gIH0pO1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQgfHwgIWRhdGEuaXNNb3ZlZCB8fCAhc3dpcGVyLnN3aXBlRGlyZWN0aW9uIHx8IHRvdWNoZXMuZGlmZiA9PT0gMCB8fCBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPT09IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICB2YXIgY3VycmVudFBvcztcblxuICBpZiAocGFyYW1zLmZvbGxvd0Zpbmdlcikge1xuICAgIGN1cnJlbnRQb3MgPSBydGwgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBvcyA9IC1kYXRhLmN1cnJlbnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgaWYgKGN1cnJlbnRQb3MgPCAtc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50UG9zID4gLXN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXMubGVuZ3RoIDwgc25hcEdyaWQubGVuZ3RoKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNuYXBHcmlkLmxlbmd0aCAtIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bSkge1xuICAgICAgaWYgKGRhdGEudmVsb2NpdGllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBsYXN0TW92ZUV2ZW50ID0gZGF0YS52ZWxvY2l0aWVzLnBvcCgpO1xuICAgICAgICB2YXIgdmVsb2NpdHlFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gbGFzdE1vdmVFdmVudC5wb3NpdGlvbiAtIHZlbG9jaXR5RXZlbnQucG9zaXRpb247XG4gICAgICAgIHZhciB0aW1lID0gbGFzdE1vdmVFdmVudC50aW1lIC0gdmVsb2NpdHlFdmVudC50aW1lO1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSBkaXN0YW5jZSAvIHRpbWU7XG4gICAgICAgIHN3aXBlci52ZWxvY2l0eSAvPSAyO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhzd2lwZXIudmVsb2NpdHkpIDwgcGFyYW1zLmZyZWVNb2RlTWluaW11bVZlbG9jaXR5KSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfSAvLyB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBhIGZpbmdlciB0aGVuIHJlbGVhc2VkLlxuICAgICAgICAvLyBUaGVyZSB3b3VsZCBiZSBubyBldmVudHMgd2l0aCBkaXN0YW5jZSB6ZXJvLCBzbyB0aGUgbGFzdCBldmVudCBpcyBzdGFsZS5cblxuXG4gICAgICAgIGlmICh0aW1lID4gMTUwIHx8IG5vdygpIC0gbGFzdE1vdmVFdmVudC50aW1lID4gMzAwKSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnZlbG9jaXR5ICo9IHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbztcbiAgICAgIGRhdGEudmVsb2NpdGllcy5sZW5ndGggPSAwO1xuICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSAxMDAwICogcGFyYW1zLmZyZWVNb2RlTW9tZW50dW1SYXRpbztcbiAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlID0gc3dpcGVyLnZlbG9jaXR5ICogbW9tZW50dW1EdXJhdGlvbjtcbiAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHN3aXBlci50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xuICAgICAgaWYgKHJ0bCkgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG4gICAgICB2YXIgZG9Cb3VuY2UgPSBmYWxzZTtcbiAgICAgIHZhciBhZnRlckJvdW5jZVBvc2l0aW9uO1xuICAgICAgdmFyIGJvdW5jZUFtb3VudCA9IE1hdGguYWJzKHN3aXBlci52ZWxvY2l0eSkgKiAyMCAqIHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW87XG4gICAgICB2YXIgbmVlZHNMb29wRml4O1xuXG4gICAgICBpZiAobmV3UG9zaXRpb24gPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uICsgc3dpcGVyLm1heFRyYW5zbGF0ZSgpIDwgLWJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIG5lZWRzTG9vcEZpeCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSA+IGJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgKyBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIG5lZWRzTG9vcEZpeCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICB2YXIgbmV4dFNsaWRlO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc25hcEdyaWQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoc25hcEdyaWRbal0gPiAtbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5leHRTbGlkZSA9IGo7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoc25hcEdyaWRbbmV4dFNsaWRlXSAtIG5ld1Bvc2l0aW9uKSA8IE1hdGguYWJzKHNuYXBHcmlkW25leHRTbGlkZSAtIDFdIC0gbmV3UG9zaXRpb24pIHx8IHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzbmFwR3JpZFtuZXh0U2xpZGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICBuZXdQb3NpdGlvbiA9IC1uZXdQb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRzTG9vcEZpeCkge1xuICAgICAgICBzd2lwZXIub25jZSgndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRml4IGR1cmF0aW9uXG5cblxuICAgICAgaWYgKHN3aXBlci52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKCgtbmV3UG9zaXRpb24gLSBzd2lwZXIudHJhbnNsYXRlKSAvIHN3aXBlci52ZWxvY2l0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKChuZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAvLyBJZiBmcmVlTW9kZVN0aWNreSBpcyBhY3RpdmUgYW5kIHRoZSB1c2VyIGVuZHMgYSBzd2lwZSB3aXRoIGEgc2xvdy12ZWxvY2l0eVxuICAgICAgICAgIC8vIGV2ZW50LCB0aGVuIGR1cmF0aW9ucyBjYW4gYmUgMjArIHNlY29uZHMgdG8gc2xpZGUgb25lIChvciB6ZXJvISkgc2xpZGVzLlxuICAgICAgICAgIC8vIEl0J3MgZWFzeSB0byBzZWUgdGhpcyB3aGVuIHNpbXVsYXRpbmcgdG91Y2ggd2l0aCBtb3VzZSBldmVudHMuIFRvIGZpeCB0aGlzLFxuICAgICAgICAgIC8vIGxpbWl0IHNpbmdsZS1zbGlkZSBzd2lwZXMgdG8gdGhlIGRlZmF1bHQgc2xpZGUgZHVyYXRpb24uIFRoaXMgYWxzbyBoYXMgdGhlXG4gICAgICAgICAgLy8gbmljZSBzaWRlIGVmZmVjdCBvZiBtYXRjaGluZyBzbGlkZSBzcGVlZCBpZiB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBiZWZvcmVcbiAgICAgICAgICAvLyBsaWZ0aW5nIGZpbmdlciBvciBtb3VzZSB2cy4gbW92aW5nIHNsb3dseSBiZWZvcmUgbGlmdGluZyB0aGUgZmluZ2VyL21vdXNlLlxuICAgICAgICAgIC8vIEZvciBmYXN0ZXIgc3dpcGVzLCBhbHNvIGFwcGx5IGxpbWl0cyAoYWxiZWl0IGhpZ2hlciBvbmVzKS5cbiAgICAgICAgICB2YXIgbW92ZURpc3RhbmNlID0gTWF0aC5hYnMoKHJ0bCA/IC1uZXdQb3NpdGlvbiA6IG5ld1Bvc2l0aW9uKSAtIHN3aXBlci50cmFuc2xhdGUpO1xuICAgICAgICAgIHZhciBjdXJyZW50U2xpZGVTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuYWN0aXZlSW5kZXhdO1xuXG4gICAgICAgICAgaWYgKG1vdmVEaXN0YW5jZSA8IGN1cnJlbnRTbGlkZVNpemUpIHtcbiAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb3ZlRGlzdGFuY2UgPCAyICogY3VycmVudFNsaWRlU2l6ZSkge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZCAqIDEuNTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZCAqIDIuNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSAmJiBkb0JvdW5jZSkge1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnbW9tZW50dW1Cb3VuY2UnKTtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihwYXJhbXMuc3BlZWQpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnZlbG9jaXR5KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuZW1pdCgnX2ZyZWVNb2RlTm9Nb21lbnR1bVJlbGVhc2UnKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgc3dpcGVyLmVtaXQoJ19mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMuZnJlZU1vZGVNb21lbnR1bSB8fCB0aW1lRGlmZiA+PSBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gLy8gRmluZCBjdXJyZW50IHNsaWRlXG5cblxuICB2YXIgc3RvcEluZGV4ID0gMDtcbiAgdmFyIGdyb3VwU2l6ZSA9IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSBpIDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICB2YXIgX2luY3JlbWVudCA9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwIC0gMSA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIF9pbmNyZW1lbnRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSAmJiBjdXJyZW50UG9zIDwgc2xpZGVzR3JpZFtpICsgX2luY3JlbWVudF0pIHtcbiAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtpICsgX2luY3JlbWVudF0gLSBzbGlkZXNHcmlkW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDFdIC0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xuICAgIH1cbiAgfSAvLyBGaW5kIGN1cnJlbnQgc2xpZGUgc2l6ZVxuXG5cbiAgdmFyIHJhdGlvID0gKGN1cnJlbnRQb3MgLSBzbGlkZXNHcmlkW3N0b3BJbmRleF0pIC8gZ3JvdXBTaXplO1xuICB2YXIgaW5jcmVtZW50ID0gc3RvcEluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gIGlmICh0aW1lRGlmZiA+IHBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAvLyBMb25nIHRvdWNoZXNcbiAgICBpZiAoIXBhcmFtcy5sb25nU3dpcGVzKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgaWYgKHJhdGlvID49IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgaWYgKHJhdGlvID4gMSAtIHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICBpZiAoIXBhcmFtcy5zaG9ydFN3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNOYXZCdXR0b25UYXJnZXQgPSBzd2lwZXIubmF2aWdhdGlvbiAmJiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCB8fCBlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKTtcblxuICAgIGlmICghaXNOYXZCdXR0b25UYXJnZXQpIHtcbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuICB9XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBlbCA9IHN3aXBlci5lbDtcbiAgaWYgKGVsICYmIGVsLm9mZnNldFdpZHRoID09PSAwKSByZXR1cm47IC8vIEJyZWFrcG9pbnRzXG5cbiAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gIH0gLy8gU2F2ZSBsb2Nrc1xuXG5cbiAgdmFyIGFsbG93U2xpZGVOZXh0ID0gc3dpcGVyLmFsbG93U2xpZGVOZXh0LFxuICAgICAgYWxsb3dTbGlkZVByZXYgPSBzd2lwZXIuYWxsb3dTbGlkZVByZXYsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZDsgLy8gRGlzYWJsZSBsb2NrcyBvbiByZXNpemVcblxuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChzd2lwZXIuYXV0b3BsYXkgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgfSAvLyBSZXR1cm4gbG9ja3MgYWZ0ZXIgcmVzaXplXG5cblxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgfVxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3MpIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiAmJiBzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbCxcbiAgICAgIHJ0bFRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gIHN3aXBlci5wcmV2aW91c1RyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG5cbiAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgIGlmIChydGxUcmFuc2xhdGUpIHtcbiAgICAgIHN3aXBlci50cmFuc2xhdGUgPSB3cmFwcGVyRWwuc2Nyb2xsV2lkdGggLSB3cmFwcGVyRWwub2Zmc2V0V2lkdGggLSB3cmFwcGVyRWwuc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnRyYW5zbGF0ZSA9IC13cmFwcGVyRWwuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnRyYW5zbGF0ZSA9IC13cmFwcGVyRWwuc2Nyb2xsVG9wO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgaWYgKHN3aXBlci50cmFuc2xhdGUgPT09IC0wKSBzd2lwZXIudHJhbnNsYXRlID0gMDtcbiAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIHZhciBuZXdQcm9ncmVzcztcbiAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuXG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9IChzd2lwZXIudHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICB9XG5cbiAgaWYgKG5ld1Byb2dyZXNzICE9PSBzd2lwZXIucHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MocnRsVHJhbnNsYXRlID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBmYWxzZSk7XG59IiwgImltcG9ydCB7IGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgb25Ub3VjaFN0YXJ0IGZyb20gJy4vb25Ub3VjaFN0YXJ0JztcbmltcG9ydCBvblRvdWNoTW92ZSBmcm9tICcuL29uVG91Y2hNb3ZlJztcbmltcG9ydCBvblRvdWNoRW5kIGZyb20gJy4vb25Ub3VjaEVuZCc7XG5pbXBvcnQgb25SZXNpemUgZnJvbSAnLi9vblJlc2l6ZSc7XG5pbXBvcnQgb25DbGljayBmcm9tICcuL29uQ2xpY2snO1xuaW1wb3J0IG9uU2Nyb2xsIGZyb20gJy4vb25TY3JvbGwnO1xudmFyIGR1bW15RXZlbnRBdHRhY2hlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkdW1teUV2ZW50TGlzdGVuZXIoKSB7fVxuXG5mdW5jdGlvbiBhdHRhY2hFdmVudHMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoRXZlbnRzID0gc3dpcGVyLnRvdWNoRXZlbnRzLFxuICAgICAgZWwgPSBzd2lwZXIuZWwsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsLFxuICAgICAgZGV2aWNlID0gc3dpcGVyLmRldmljZSxcbiAgICAgIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgc3dpcGVyLm9uVG91Y2hTdGFydCA9IG9uVG91Y2hTdGFydC5iaW5kKHN3aXBlcik7XG4gIHN3aXBlci5vblRvdWNoTW92ZSA9IG9uVG91Y2hNb3ZlLmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kLmJpbmQoc3dpcGVyKTtcblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIub25TY3JvbGwgPSBvblNjcm9sbC5iaW5kKHN3aXBlcik7XG4gIH1cblxuICBzd2lwZXIub25DbGljayA9IG9uQ2xpY2suYmluZChzd2lwZXIpO1xuICB2YXIgY2FwdHVyZSA9ICEhcGFyYW1zLm5lc3RlZDsgLy8gVG91Y2ggRXZlbnRzXG5cbiAgaWYgKCFzdXBwb3J0LnRvdWNoICYmIHN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHN1cHBvcnQudG91Y2gpIHtcbiAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSB0b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnICYmIHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICBjYXB0dXJlOiBmYWxzZVxuICAgICAgfSA6IGZhbHNlO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciA/IHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgIGNhcHR1cmU6IGNhcHR1cmVcbiAgICAgIH0gOiBjYXB0dXJlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHRvdWNoRXZlbnRzLmNhbmNlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmNhbmNlbCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGlmICghZHVtbXlFdmVudEF0dGFjaGVkKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkdW1teUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICBkdW1teUV2ZW50QXR0YWNoZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhZGV2aWNlLmlvcyAmJiAhZGV2aWNlLmFuZHJvaWQgfHwgcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIXN1cHBvcnQudG91Y2ggJiYgZGV2aWNlLmlvcykge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgIH1cbiAgfSAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuXG5cbiAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzd2lwZXIub25TY3JvbGwpO1xuICB9IC8vIFJlc2l6ZSBoYW5kbGVyXG5cblxuICBpZiAocGFyYW1zLnVwZGF0ZU9uV2luZG93UmVzaXplKSB7XG4gICAgc3dpcGVyLm9uKGRldmljZS5pb3MgfHwgZGV2aWNlLmFuZHJvaWQgPyAncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIG9ic2VydmVyVXBkYXRlJyA6ICdyZXNpemUgb2JzZXJ2ZXJVcGRhdGUnLCBvblJlc2l6ZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLm9uKCdvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXRhY2hFdmVudHMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoRXZlbnRzID0gc3dpcGVyLnRvdWNoRXZlbnRzLFxuICAgICAgZWwgPSBzd2lwZXIuZWwsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsLFxuICAgICAgZGV2aWNlID0gc3dpcGVyLmRldmljZSxcbiAgICAgIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgdmFyIGNhcHR1cmUgPSAhIXBhcmFtcy5uZXN0ZWQ7IC8vIFRvdWNoIEV2ZW50c1xuXG4gIGlmICghc3VwcG9ydC50b3VjaCAmJiBzdXBwb3J0LnBvaW50ZXJFdmVudHMpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzdXBwb3J0LnRvdWNoKSB7XG4gICAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gdG91Y2hFdmVudHMuc3RhcnQgPT09ICdvblRvdWNoU3RhcnQnICYmIHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICBjYXB0dXJlOiBmYWxzZVxuICAgICAgfSA6IGZhbHNlO1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHRvdWNoRXZlbnRzLmNhbmNlbCkge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmNhbmNlbCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFkZXZpY2UuaW9zICYmICFkZXZpY2UuYW5kcm9pZCB8fCBwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhc3VwcG9ydC50b3VjaCAmJiBkZXZpY2UuaW9zKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfVxuICB9IC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG5cblxuICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN3aXBlci5vblNjcm9sbCk7XG4gIH0gLy8gUmVzaXplIGhhbmRsZXJcblxuXG4gIHN3aXBlci5vZmYoZGV2aWNlLmlvcyB8fCBkZXZpY2UuYW5kcm9pZCA/ICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGUnIDogJ3Jlc2l6ZSBvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhdHRhY2hFdmVudHM6IGF0dGFjaEV2ZW50cyxcbiAgZGV0YWNoRXZlbnRzOiBkZXRhY2hFdmVudHNcbn07IiwgImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEJyZWFrcG9pbnQoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBpbml0aWFsaXplZCA9IHN3aXBlci5pbml0aWFsaXplZCxcbiAgICAgIF9zd2lwZXIkbG9vcGVkU2xpZGVzID0gc3dpcGVyLmxvb3BlZFNsaWRlcyxcbiAgICAgIGxvb3BlZFNsaWRlcyA9IF9zd2lwZXIkbG9vcGVkU2xpZGVzID09PSB2b2lkIDAgPyAwIDogX3N3aXBlciRsb29wZWRTbGlkZXMsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJGVsID0gc3dpcGVyLiRlbDtcbiAgdmFyIGJyZWFrcG9pbnRzID0gcGFyYW1zLmJyZWFrcG9pbnRzO1xuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJyZWFrcG9pbnRzICYmIE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5sZW5ndGggPT09IDApIHJldHVybjsgLy8gR2V0IGJyZWFrcG9pbnQgZm9yIHdpbmRvdyB3aWR0aCBhbmQgdXBkYXRlIHBhcmFtZXRlcnNcblxuICB2YXIgYnJlYWtwb2ludCA9IHN3aXBlci5nZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzLCBzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzQmFzZSwgc3dpcGVyLmVsKTtcblxuICBpZiAoYnJlYWtwb2ludCAmJiBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgIT09IGJyZWFrcG9pbnQpIHtcbiAgICB2YXIgYnJlYWtwb2ludE9ubHlQYXJhbXMgPSBicmVha3BvaW50IGluIGJyZWFrcG9pbnRzID8gYnJlYWtwb2ludHNbYnJlYWtwb2ludF0gOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoYnJlYWtwb2ludE9ubHlQYXJhbXMpIHtcbiAgICAgIFsnc2xpZGVzUGVyVmlldycsICdzcGFjZUJldHdlZW4nLCAnc2xpZGVzUGVyR3JvdXAnLCAnc2xpZGVzUGVyR3JvdXBTa2lwJywgJ3NsaWRlc1BlckNvbHVtbiddLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHZhciBwYXJhbVZhbHVlID0gYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dO1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtVmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHBhcmFtID09PSAnc2xpZGVzUGVyVmlldycgJiYgKHBhcmFtVmFsdWUgPT09ICdBVVRPJyB8fCBwYXJhbVZhbHVlID09PSAnYXV0bycpKSB7XG4gICAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dID0gJ2F1dG8nO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtID09PSAnc2xpZGVzUGVyVmlldycpIHtcbiAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSBwYXJzZUZsb2F0KHBhcmFtVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXSA9IHBhcnNlSW50KHBhcmFtVmFsdWUsIDEwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGJyZWFrcG9pbnRQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtcyB8fCBzd2lwZXIub3JpZ2luYWxQYXJhbXM7XG4gICAgdmFyIHdhc011bHRpUm93ID0gcGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDE7XG4gICAgdmFyIGlzTXVsdGlSb3cgPSBicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDE7XG5cbiAgICBpZiAod2FzTXVsdGlSb3cgJiYgIWlzTXVsdGlSb3cpIHtcbiAgICAgICRlbC5yZW1vdmVDbGFzcyhwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3cgXCIgKyBwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3ctY29sdW1uXCIpO1xuICAgICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gICAgfSBlbHNlIGlmICghd2FzTXVsdGlSb3cgJiYgaXNNdWx0aVJvdykge1xuICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJtdWx0aXJvd1wiKTtcblxuICAgICAgaWYgKGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgXCJtdWx0aXJvdy1jb2x1bW5cIik7XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICAgIH1cblxuICAgIHZhciBkaXJlY3Rpb25DaGFuZ2VkID0gYnJlYWtwb2ludFBhcmFtcy5kaXJlY3Rpb24gJiYgYnJlYWtwb2ludFBhcmFtcy5kaXJlY3Rpb24gIT09IHBhcmFtcy5kaXJlY3Rpb247XG4gICAgdmFyIG5lZWRzUmVMb29wID0gcGFyYW1zLmxvb3AgJiYgKGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgfHwgZGlyZWN0aW9uQ2hhbmdlZCk7XG5cbiAgICBpZiAoZGlyZWN0aW9uQ2hhbmdlZCAmJiBpbml0aWFsaXplZCkge1xuICAgICAgc3dpcGVyLmNoYW5nZURpcmVjdGlvbigpO1xuICAgIH1cblxuICAgIGV4dGVuZChzd2lwZXIucGFyYW1zLCBicmVha3BvaW50UGFyYW1zKTtcbiAgICBleHRlbmQoc3dpcGVyLCB7XG4gICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICAgIGFsbG93U2xpZGVOZXh0OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXZcbiAgICB9KTtcbiAgICBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xuICAgIHN3aXBlci5lbWl0KCdfYmVmb3JlQnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xuXG4gICAgaWYgKG5lZWRzUmVMb29wICYmIGluaXRpYWxpemVkKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVJbmRleCAtIGxvb3BlZFNsaWRlcyArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnYnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICB9XG59IiwgImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgYmFzZSwgY29udGFpbmVyRWwpIHtcbiAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgIGJhc2UgPSAnd2luZG93JztcbiAgfVxuXG4gIGlmICghYnJlYWtwb2ludHMgfHwgYmFzZSA9PT0gJ2NvbnRhaW5lcicgJiYgIWNvbnRhaW5lckVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgYnJlYWtwb2ludCA9IGZhbHNlO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBjdXJyZW50V2lkdGggPSBiYXNlID09PSAnd2luZG93JyA/IHdpbmRvdy5pbm5lcldpZHRoIDogY29udGFpbmVyRWwuY2xpZW50V2lkdGg7XG4gIHZhciBjdXJyZW50SGVpZ2h0ID0gYmFzZSA9PT0gJ3dpbmRvdycgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBjb250YWluZXJFbC5jbGllbnRIZWlnaHQ7XG4gIHZhciBwb2ludHMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykubWFwKGZ1bmN0aW9uIChwb2ludCkge1xuICAgIGlmICh0eXBlb2YgcG9pbnQgPT09ICdzdHJpbmcnICYmIHBvaW50LmluZGV4T2YoJ0AnKSA9PT0gMCkge1xuICAgICAgdmFyIG1pblJhdGlvID0gcGFyc2VGbG9hdChwb2ludC5zdWJzdHIoMSkpO1xuICAgICAgdmFyIHZhbHVlID0gY3VycmVudEhlaWdodCAqIG1pblJhdGlvO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBwb2ludDogcG9pbnRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwb2ludCxcbiAgICAgIHBvaW50OiBwb2ludFxuICAgIH07XG4gIH0pO1xuICBwb2ludHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBwYXJzZUludChhLnZhbHVlLCAxMCkgLSBwYXJzZUludChiLnZhbHVlLCAxMCk7XG4gIH0pO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIF9wb2ludHMkaSA9IHBvaW50c1tpXSxcbiAgICAgICAgcG9pbnQgPSBfcG9pbnRzJGkucG9pbnQsXG4gICAgICAgIHZhbHVlID0gX3BvaW50cyRpLnZhbHVlO1xuXG4gICAgaWYgKHZhbHVlIDw9IGN1cnJlbnRXaWR0aCkge1xuICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBicmVha3BvaW50IHx8ICdtYXgnO1xufSIsICJpbXBvcnQgc2V0QnJlYWtwb2ludCBmcm9tICcuL3NldEJyZWFrcG9pbnQnO1xuaW1wb3J0IGdldEJyZWFrcG9pbnQgZnJvbSAnLi9nZXRCcmVha3BvaW50JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0QnJlYWtwb2ludDogc2V0QnJlYWtwb2ludCxcbiAgZ2V0QnJlYWtwb2ludDogZ2V0QnJlYWtwb2ludFxufTsiLCAiZnVuY3Rpb24gcHJlcGFyZUNsYXNzZXMoZW50cmllcywgcHJlZml4KSB7XG4gIHZhciByZXN1bHRDbGFzc2VzID0gW107XG4gIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKGl0ZW0pLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZXMgPSBfcmVmWzBdLFxuICAgICAgICAgICAgY29uZGl0aW9uID0gX3JlZlsxXTtcblxuICAgICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGNsYXNzTmFtZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHRDbGFzc2VzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDbGFzc2VzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGNsYXNzTmFtZXMgPSBzd2lwZXIuY2xhc3NOYW1lcyxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsLFxuICAgICAgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgIGRldmljZSA9IHN3aXBlci5kZXZpY2UsXG4gICAgICBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gIHZhciBzdWZmaXhlcyA9IHByZXBhcmVDbGFzc2VzKFsnaW5pdGlhbGl6ZWQnLCBwYXJhbXMuZGlyZWN0aW9uLCB7XG4gICAgJ3BvaW50ZXItZXZlbnRzJzogc3VwcG9ydC5wb2ludGVyRXZlbnRzICYmICFzdXBwb3J0LnRvdWNoXG4gIH0sIHtcbiAgICAnZnJlZS1tb2RlJzogcGFyYW1zLmZyZWVNb2RlXG4gIH0sIHtcbiAgICAnYXV0b2hlaWdodCc6IHBhcmFtcy5hdXRvSGVpZ2h0XG4gIH0sIHtcbiAgICAncnRsJzogcnRsXG4gIH0sIHtcbiAgICAnbXVsdGlyb3cnOiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMVxuICB9LCB7XG4gICAgJ211bHRpcm93LWNvbHVtbic6IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxICYmIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAnY29sdW1uJ1xuICB9LCB7XG4gICAgJ2FuZHJvaWQnOiBkZXZpY2UuYW5kcm9pZFxuICB9LCB7XG4gICAgJ2lvcyc6IGRldmljZS5pb3NcbiAgfSwge1xuICAgICdjc3MtbW9kZSc6IHBhcmFtcy5jc3NNb2RlXG4gIH1dLCBwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyk7XG4gIGNsYXNzTmFtZXMucHVzaC5hcHBseShjbGFzc05hbWVzLCBzdWZmaXhlcyk7XG4gICRlbC5hZGRDbGFzcyhbXS5jb25jYXQoY2xhc3NOYW1lcykuam9pbignICcpKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgIGNsYXNzTmFtZXMgPSBzd2lwZXIuY2xhc3NOYW1lcztcbiAgJGVsLnJlbW92ZUNsYXNzKGNsYXNzTmFtZXMuam9pbignICcpKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59IiwgImltcG9ydCBhZGRDbGFzc2VzIGZyb20gJy4vYWRkQ2xhc3Nlcyc7XG5pbXBvcnQgcmVtb3ZlQ2xhc3NlcyBmcm9tICcuL3JlbW92ZUNsYXNzZXMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRDbGFzc2VzOiBhZGRDbGFzc2VzLFxuICByZW1vdmVDbGFzc2VzOiByZW1vdmVDbGFzc2VzXG59OyIsICJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSW1hZ2UoaW1hZ2VFbCwgc3JjLCBzcmNzZXQsIHNpemVzLCBjaGVja0ZvckNvbXBsZXRlLCBjYWxsYmFjaykge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBpbWFnZTtcblxuICBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgfVxuXG4gIHZhciBpc1BpY3R1cmUgPSAkKGltYWdlRWwpLnBhcmVudCgncGljdHVyZScpWzBdO1xuXG4gIGlmICghaXNQaWN0dXJlICYmICghaW1hZ2VFbC5jb21wbGV0ZSB8fCAhY2hlY2tGb3JDb21wbGV0ZSkpIHtcbiAgICBpZiAoc3JjKSB7XG4gICAgICBpbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IG9uUmVhZHk7XG4gICAgICBpbWFnZS5vbmVycm9yID0gb25SZWFkeTtcblxuICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgIGltYWdlLnNpemVzID0gc2l6ZXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgfVxuXG4gICAgICBpZiAoc3JjKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb25SZWFkeSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpbWFnZSBhbHJlYWR5IGxvYWRlZC4uLlxuICAgIG9uUmVhZHkoKTtcbiAgfVxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgc3dpcGVyLmltYWdlc1RvTG9hZCA9IHN3aXBlci4kZWwuZmluZCgnaW1nJyk7XG5cbiAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICBpZiAodHlwZW9mIHN3aXBlciA9PT0gJ3VuZGVmaW5lZCcgfHwgc3dpcGVyID09PSBudWxsIHx8ICFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuaW1hZ2VzTG9hZGVkICE9PSB1bmRlZmluZWQpIHN3aXBlci5pbWFnZXNMb2FkZWQgKz0gMTtcblxuICAgIGlmIChzd2lwZXIuaW1hZ2VzTG9hZGVkID09PSBzd2lwZXIuaW1hZ2VzVG9Mb2FkLmxlbmd0aCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudXBkYXRlT25JbWFnZXNSZWFkeSkgc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgc3dpcGVyLmVtaXQoJ2ltYWdlc1JlYWR5Jyk7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuaW1hZ2VzVG9Mb2FkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGltYWdlRWwgPSBzd2lwZXIuaW1hZ2VzVG9Mb2FkW2ldO1xuICAgIHN3aXBlci5sb2FkSW1hZ2UoaW1hZ2VFbCwgaW1hZ2VFbC5jdXJyZW50U3JjIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmMnKSwgaW1hZ2VFbC5zcmNzZXQgfHwgaW1hZ2VFbC5nZXRBdHRyaWJ1dGUoJ3NyY3NldCcpLCBpbWFnZUVsLnNpemVzIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzaXplcycpLCB0cnVlLCBvblJlYWR5KTtcbiAgfVxufSIsICJpbXBvcnQgbG9hZEltYWdlIGZyb20gJy4vbG9hZEltYWdlJztcbmltcG9ydCBwcmVsb2FkSW1hZ2VzIGZyb20gJy4vcHJlbG9hZEltYWdlcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWRJbWFnZTogbG9hZEltYWdlLFxuICBwcmVsb2FkSW1hZ2VzOiBwcmVsb2FkSW1hZ2VzXG59OyIsICJmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciB3YXNMb2NrZWQgPSBzd2lwZXIuaXNMb2NrZWQ7XG4gIHZhciBsYXN0U2xpZGVQb3NpdGlvbiA9IHN3aXBlci5zbGlkZXMubGVuZ3RoID4gMCAmJiBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlICsgcGFyYW1zLnNwYWNlQmV0d2VlbiAqIChzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEpICsgc3dpcGVyLnNsaWRlc1swXS5vZmZzZXRXaWR0aCAqIHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuXG4gIGlmIChwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlICYmIHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlciAmJiBsYXN0U2xpZGVQb3NpdGlvbikge1xuICAgIHN3aXBlci5pc0xvY2tlZCA9IGxhc3RTbGlkZVBvc2l0aW9uIDw9IHN3aXBlci5zaXplO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5pc0xvY2tlZCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGggPT09IDE7XG4gIH1cblxuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSAhc3dpcGVyLmlzTG9ja2VkO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSAhc3dpcGVyLmlzTG9ja2VkOyAvLyBldmVudHNcblxuICBpZiAod2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHN3aXBlci5lbWl0KHN3aXBlci5pc0xvY2tlZCA/ICdsb2NrJyA6ICd1bmxvY2snKTtcblxuICBpZiAod2FzTG9ja2VkICYmIHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSB7XG4gICAgc3dpcGVyLmlzRW5kID0gZmFsc2U7XG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uKSBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoZWNrT3ZlcmZsb3c6IGNoZWNrT3ZlcmZsb3dcbn07IiwgImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogdHJ1ZSxcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIHRvdWNoRXZlbnRzVGFyZ2V0OiAnY29udGFpbmVyJyxcbiAgaW5pdGlhbFNsaWRlOiAwLFxuICBzcGVlZDogMzAwLFxuICBjc3NNb2RlOiBmYWxzZSxcbiAgdXBkYXRlT25XaW5kb3dSZXNpemU6IHRydWUsXG4gIHJlc2l6ZU9ic2VydmVyOiBmYWxzZSxcbiAgbmVzdGVkOiBmYWxzZSxcbiAgLy8gT3ZlcnJpZGVzXG4gIHdpZHRoOiBudWxsLFxuICBoZWlnaHQ6IG51bGwsXG4gIC8vXG4gIHByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbjogZmFsc2UsXG4gIC8vIHNzclxuICB1c2VyQWdlbnQ6IG51bGwsXG4gIHVybDogbnVsbCxcbiAgLy8gVG8gc3VwcG9ydCBpT1MncyBzd2lwZS10by1nby1iYWNrIGdlc3R1cmUgKHdoZW4gYmVpbmcgdXNlZCBpbi1hcHApLlxuICBlZGdlU3dpcGVEZXRlY3Rpb246IGZhbHNlLFxuICBlZGdlU3dpcGVUaHJlc2hvbGQ6IDIwLFxuICAvLyBGcmVlIG1vZGVcbiAgZnJlZU1vZGU6IGZhbHNlLFxuICBmcmVlTW9kZU1vbWVudHVtOiB0cnVlLFxuICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IDEsXG4gIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2U6IHRydWUsXG4gIGZyZWVNb2RlTW9tZW50dW1Cb3VuY2VSYXRpbzogMSxcbiAgZnJlZU1vZGVNb21lbnR1bVZlbG9jaXR5UmF0aW86IDEsXG4gIGZyZWVNb2RlU3RpY2t5OiBmYWxzZSxcbiAgZnJlZU1vZGVNaW5pbXVtVmVsb2NpdHk6IDAuMDIsXG4gIC8vIEF1dG9oZWlnaHRcbiAgYXV0b0hlaWdodDogZmFsc2UsXG4gIC8vIFNldCB3cmFwcGVyIHdpZHRoXG4gIHNldFdyYXBwZXJTaXplOiBmYWxzZSxcbiAgLy8gVmlydHVhbCBUcmFuc2xhdGVcbiAgdmlydHVhbFRyYW5zbGF0ZTogZmFsc2UsXG4gIC8vIEVmZmVjdHNcbiAgZWZmZWN0OiAnc2xpZGUnLFxuICAvLyAnc2xpZGUnIG9yICdmYWRlJyBvciAnY3ViZScgb3IgJ2NvdmVyZmxvdycgb3IgJ2ZsaXAnXG4gIC8vIEJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnRzOiB1bmRlZmluZWQsXG4gIGJyZWFrcG9pbnRzQmFzZTogJ3dpbmRvdycsXG4gIC8vIFNsaWRlcyBncmlkXG4gIHNwYWNlQmV0d2VlbjogMCxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICBzbGlkZXNQZXJDb2x1bW5GaWxsOiAnY29sdW1uJyxcbiAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gIHNsaWRlc1Blckdyb3VwU2tpcDogMCxcbiAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICBjZW50ZXJlZFNsaWRlc0JvdW5kczogZmFsc2UsXG4gIHNsaWRlc09mZnNldEJlZm9yZTogMCxcbiAgLy8gaW4gcHhcbiAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDAsXG4gIC8vIGluIHB4XG4gIG5vcm1hbGl6ZVNsaWRlSW5kZXg6IHRydWUsXG4gIGNlbnRlckluc3VmZmljaWVudFNsaWRlczogZmFsc2UsXG4gIC8vIERpc2FibGUgc3dpcGVyIGFuZCBoaWRlIG5hdmlnYXRpb24gd2hlbiBjb250YWluZXIgbm90IG92ZXJmbG93XG4gIHdhdGNoT3ZlcmZsb3c6IGZhbHNlLFxuICAvLyBSb3VuZCBsZW5ndGhcbiAgcm91bmRMZW5ndGhzOiBmYWxzZSxcbiAgLy8gVG91Y2hlc1xuICB0b3VjaFJhdGlvOiAxLFxuICB0b3VjaEFuZ2xlOiA0NSxcbiAgc2ltdWxhdGVUb3VjaDogdHJ1ZSxcbiAgc2hvcnRTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXNSYXRpbzogMC41LFxuICBsb25nU3dpcGVzTXM6IDMwMCxcbiAgZm9sbG93RmluZ2VyOiB0cnVlLFxuICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcbiAgdGhyZXNob2xkOiAwLFxuICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IGZhbHNlLFxuICB0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6IHRydWUsXG4gIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiBmYWxzZSxcbiAgdG91Y2hSZWxlYXNlT25FZGdlczogZmFsc2UsXG4gIC8vIFVuaXF1ZSBOYXZpZ2F0aW9uIEVsZW1lbnRzXG4gIHVuaXF1ZU5hdkVsZW1lbnRzOiB0cnVlLFxuICAvLyBSZXNpc3RhbmNlXG4gIHJlc2lzdGFuY2U6IHRydWUsXG4gIHJlc2lzdGFuY2VSYXRpbzogMC44NSxcbiAgLy8gUHJvZ3Jlc3NcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogZmFsc2UsXG4gIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogZmFsc2UsXG4gIC8vIEN1cnNvclxuICBncmFiQ3Vyc29yOiBmYWxzZSxcbiAgLy8gQ2xpY2tzXG4gIHByZXZlbnRDbGlja3M6IHRydWUsXG4gIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gIC8vIEltYWdlc1xuICBwcmVsb2FkSW1hZ2VzOiB0cnVlLFxuICB1cGRhdGVPbkltYWdlc1JlYWR5OiB0cnVlLFxuICAvLyBsb29wXG4gIGxvb3A6IGZhbHNlLFxuICBsb29wQWRkaXRpb25hbFNsaWRlczogMCxcbiAgbG9vcGVkU2xpZGVzOiBudWxsLFxuICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiBmYWxzZSxcbiAgbG9vcFByZXZlbnRzU2xpZGU6IHRydWUsXG4gIC8vIFN3aXBpbmcvbm8gc3dpcGluZ1xuICBhbGxvd1NsaWRlUHJldjogdHJ1ZSxcbiAgYWxsb3dTbGlkZU5leHQ6IHRydWUsXG4gIHN3aXBlSGFuZGxlcjogbnVsbCxcbiAgLy8gJy5zd2lwZS1oYW5kbGVyJyxcbiAgbm9Td2lwaW5nOiB0cnVlLFxuICBub1N3aXBpbmdDbGFzczogJ3N3aXBlci1uby1zd2lwaW5nJyxcbiAgbm9Td2lwaW5nU2VsZWN0b3I6IG51bGwsXG4gIC8vIFBhc3NpdmUgTGlzdGVuZXJzXG4gIHBhc3NpdmVMaXN0ZW5lcnM6IHRydWUsXG4gIC8vIE5TXG4gIGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItY29udGFpbmVyLScsXG4gIC8vIE5FV1xuICBzbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlJyxcbiAgc2xpZGVCbGFua0NsYXNzOiAnc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuaycsXG4gIHNsaWRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtYWN0aXZlJyxcbiAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlJyxcbiAgc2xpZGVWaXNpYmxlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdmlzaWJsZScsXG4gIHNsaWRlRHVwbGljYXRlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlJyxcbiAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXG4gIHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1uZXh0JyxcbiAgc2xpZGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtcHJldicsXG4gIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2JyxcbiAgd3JhcHBlckNsYXNzOiAnc3dpcGVyLXdyYXBwZXInLFxuICAvLyBDYWxsYmFja3NcbiAgcnVuQ2FsbGJhY2tzT25Jbml0OiB0cnVlLFxuICAvLyBJbnRlcm5hbHNcbiAgX2VtaXRDbGFzc2VzOiBmYWxzZVxufTsiLCAiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IFwib2ZmXCIgKi9cbmltcG9ydCAkIGZyb20gJy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBleHRlbmQsIG5vdywgZGVsZXRlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBnZXRTdXBwb3J0IH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0LXN1cHBvcnQnO1xuaW1wb3J0IHsgZ2V0RGV2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0LWRldmljZSc7XG5pbXBvcnQgeyBnZXRCcm93c2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0LWJyb3dzZXInO1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9tb2R1bGVzL3Jlc2l6ZS9yZXNpemUnO1xuaW1wb3J0IE9ic2VydmVyIGZyb20gJy4uLy4uL21vZHVsZXMvb2JzZXJ2ZXIvb2JzZXJ2ZXInO1xuaW1wb3J0IG1vZHVsYXIgZnJvbSAnLi9tb2R1bGFyJztcbmltcG9ydCBldmVudHNFbWl0dGVyIGZyb20gJy4vZXZlbnRzLWVtaXR0ZXInO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuL3VwZGF0ZS9pbmRleCc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4vdHJhbnNsYXRlL2luZGV4JztcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJy4vdHJhbnNpdGlvbi9pbmRleCc7XG5pbXBvcnQgc2xpZGUgZnJvbSAnLi9zbGlkZS9pbmRleCc7XG5pbXBvcnQgbG9vcCBmcm9tICcuL2xvb3AvaW5kZXgnO1xuaW1wb3J0IGdyYWJDdXJzb3IgZnJvbSAnLi9ncmFiLWN1cnNvci9pbmRleCc7XG5pbXBvcnQgbWFuaXB1bGF0aW9uIGZyb20gJy4vbWFuaXB1bGF0aW9uL2luZGV4JztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMvaW5kZXgnO1xuaW1wb3J0IGJyZWFrcG9pbnRzIGZyb20gJy4vYnJlYWtwb2ludHMvaW5kZXgnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9jbGFzc2VzL2luZGV4JztcbmltcG9ydCBpbWFnZXMgZnJvbSAnLi9pbWFnZXMvaW5kZXgnO1xuaW1wb3J0IGNoZWNrT3ZlcmZsb3cgZnJvbSAnLi9jaGVjay1vdmVyZmxvdy9pbmRleCc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cyc7XG52YXIgcHJvdG90eXBlcyA9IHtcbiAgbW9kdWxhcjogbW9kdWxhcixcbiAgZXZlbnRzRW1pdHRlcjogZXZlbnRzRW1pdHRlcixcbiAgdXBkYXRlOiB1cGRhdGUsXG4gIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxuICBzbGlkZTogc2xpZGUsXG4gIGxvb3A6IGxvb3AsXG4gIGdyYWJDdXJzb3I6IGdyYWJDdXJzb3IsXG4gIG1hbmlwdWxhdGlvbjogbWFuaXB1bGF0aW9uLFxuICBldmVudHM6IGV2ZW50cyxcbiAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRzLFxuICBjaGVja092ZXJmbG93OiBjaGVja092ZXJmbG93LFxuICBjbGFzc2VzOiBjbGFzc2VzLFxuICBpbWFnZXM6IGltYWdlc1xufTtcbnZhciBleHRlbmRlZERlZmF1bHRzID0ge307XG5cbnZhciBTd2lwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTd2lwZXIoKSB7XG4gICAgdmFyIGVsO1xuICAgIHZhciBwYXJhbXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGFyZ3NbMF0uY29uc3RydWN0b3IgJiYgYXJnc1swXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICBwYXJhbXMgPSBhcmdzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IGFyZ3NbMF07XG4gICAgICBwYXJhbXMgPSBhcmdzWzFdO1xuICAgIH1cblxuICAgIGlmICghcGFyYW1zKSBwYXJhbXMgPSB7fTtcbiAgICBwYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcyk7XG4gICAgaWYgKGVsICYmICFwYXJhbXMuZWwpIHBhcmFtcy5lbCA9IGVsO1xuXG4gICAgaWYgKHBhcmFtcy5lbCAmJiAkKHBhcmFtcy5lbCkubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIHN3aXBlcnMgPSBbXTtcbiAgICAgICQocGFyYW1zLmVsKS5lYWNoKGZ1bmN0aW9uIChjb250YWluZXJFbCkge1xuICAgICAgICB2YXIgbmV3UGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgICBlbDogY29udGFpbmVyRWxcbiAgICAgICAgfSk7XG4gICAgICAgIHN3aXBlcnMucHVzaChuZXcgU3dpcGVyKG5ld1BhcmFtcykpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3dpcGVycztcbiAgICB9IC8vIFN3aXBlciBJbnN0YW5jZVxuXG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIuc3VwcG9ydCA9IGdldFN1cHBvcnQoKTtcbiAgICBzd2lwZXIuZGV2aWNlID0gZ2V0RGV2aWNlKHtcbiAgICAgIHVzZXJBZ2VudDogcGFyYW1zLnVzZXJBZ2VudFxuICAgIH0pO1xuICAgIHN3aXBlci5icm93c2VyID0gZ2V0QnJvd3NlcigpO1xuICAgIHN3aXBlci5ldmVudHNMaXN0ZW5lcnMgPSB7fTtcbiAgICBzd2lwZXIuZXZlbnRzQW55TGlzdGVuZXJzID0gW107XG5cbiAgICBpZiAodHlwZW9mIHN3aXBlci5tb2R1bGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgc3dpcGVyLm1vZHVsZXMgPSB7fTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzd2lwZXIubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgdmFyIG1vZHVsZSA9IHN3aXBlci5tb2R1bGVzW21vZHVsZU5hbWVdO1xuXG4gICAgICBpZiAobW9kdWxlLnBhcmFtcykge1xuICAgICAgICB2YXIgbW9kdWxlUGFyYW1OYW1lID0gT2JqZWN0LmtleXMobW9kdWxlLnBhcmFtcylbMF07XG4gICAgICAgIHZhciBtb2R1bGVQYXJhbXMgPSBtb2R1bGUucGFyYW1zW21vZHVsZVBhcmFtTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlUGFyYW1zICE9PSAnb2JqZWN0JyB8fCBtb2R1bGVQYXJhbXMgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKCEobW9kdWxlUGFyYW1OYW1lIGluIHBhcmFtcyAmJiAnZW5hYmxlZCcgaW4gbW9kdWxlUGFyYW1zKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSAnb2JqZWN0JyAmJiAhKCdlbmFibGVkJyBpbiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkpIHtcbiAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7IC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIG1vZHVsZXMgcGFyYW1zXG5cbiAgICB2YXIgc3dpcGVyUGFyYW1zID0gZXh0ZW5kKHt9LCBkZWZhdWx0cyk7XG4gICAgc3dpcGVyLnVzZVBhcmFtcyhzd2lwZXJQYXJhbXMpOyAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBwYXNzZWQgcGFyYW1zXG5cbiAgICBzd2lwZXIucGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXJQYXJhbXMsIGV4dGVuZGVkRGVmYXVsdHMsIHBhcmFtcyk7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXIucGFyYW1zKTtcbiAgICBzd2lwZXIucGFzc2VkUGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpOyAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uKSB7XG4gICAgICBPYmplY3Qua2V5cyhzd2lwZXIucGFyYW1zLm9uKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgc3dpcGVyLm9uKGV2ZW50TmFtZSwgc3dpcGVyLnBhcmFtcy5vbltldmVudE5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zICYmIHN3aXBlci5wYXJhbXMub25BbnkpIHtcbiAgICAgIHN3aXBlci5vbkFueShzd2lwZXIucGFyYW1zLm9uQW55KTtcbiAgICB9IC8vIFNhdmUgRG9tIGxpYlxuXG5cbiAgICBzd2lwZXIuJCA9ICQ7IC8vIEV4dGVuZCBTd2lwZXJcblxuICAgIGV4dGVuZChzd2lwZXIsIHtcbiAgICAgIGVsOiBlbCxcbiAgICAgIC8vIENsYXNzZXNcbiAgICAgIGNsYXNzTmFtZXM6IFtdLFxuICAgICAgLy8gU2xpZGVzXG4gICAgICBzbGlkZXM6ICQoKSxcbiAgICAgIHNsaWRlc0dyaWQ6IFtdLFxuICAgICAgc25hcEdyaWQ6IFtdLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkOiBbXSxcbiAgICAgIC8vIGlzRGlyZWN0aW9uXG4gICAgICBpc0hvcml6b250YWw6IGZ1bmN0aW9uIGlzSG9yaXpvbnRhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB9LFxuICAgICAgaXNWZXJ0aWNhbDogZnVuY3Rpb24gaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgICAgfSxcbiAgICAgIC8vIEluZGV4ZXNcbiAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgcmVhbEluZGV4OiAwLFxuICAgICAgLy9cbiAgICAgIGlzQmVnaW5uaW5nOiB0cnVlLFxuICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgICAgLy8gUHJvcHNcbiAgICAgIHRyYW5zbGF0ZTogMCxcbiAgICAgIHByZXZpb3VzVHJhbnNsYXRlOiAwLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICB2ZWxvY2l0eTogMCxcbiAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAvLyBMb2Nrc1xuICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldixcbiAgICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgICAgdG91Y2hFdmVudHM6IGZ1bmN0aW9uIHRvdWNoRXZlbnRzKCkge1xuICAgICAgICB2YXIgdG91Y2ggPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJ107XG4gICAgICAgIHZhciBkZXNrdG9wID0gWydtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnXTtcblxuICAgICAgICBpZiAoc3dpcGVyLnN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgICAgICAgIGRlc2t0b3AgPSBbJ3BvaW50ZXJkb3duJywgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCddO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggPSB7XG4gICAgICAgICAgc3RhcnQ6IHRvdWNoWzBdLFxuICAgICAgICAgIG1vdmU6IHRvdWNoWzFdLFxuICAgICAgICAgIGVuZDogdG91Y2hbMl0sXG4gICAgICAgICAgY2FuY2VsOiB0b3VjaFszXVxuICAgICAgICB9O1xuICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wID0ge1xuICAgICAgICAgIHN0YXJ0OiBkZXNrdG9wWzBdLFxuICAgICAgICAgIG1vdmU6IGRlc2t0b3BbMV0sXG4gICAgICAgICAgZW5kOiBkZXNrdG9wWzJdXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggOiBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wO1xuICAgICAgfSgpLFxuICAgICAgdG91Y2hFdmVudHNEYXRhOiB7XG4gICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHVuZGVmaW5lZCxcbiAgICAgICAgdG91Y2hTdGFydFRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmU6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gRm9ybSBlbGVtZW50cyB0byBtYXRjaFxuICAgICAgICBmb3JtRWxlbWVudHM6ICdpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvLCBsYWJlbCcsXG4gICAgICAgIC8vIExhc3QgY2xpY2sgdGltZVxuICAgICAgICBsYXN0Q2xpY2tUaW1lOiBub3coKSxcbiAgICAgICAgY2xpY2tUaW1lb3V0OiB1bmRlZmluZWQsXG4gICAgICAgIC8vIFZlbG9jaXRpZXNcbiAgICAgICAgdmVsb2NpdGllczogW10sXG4gICAgICAgIGFsbG93TW9tZW50dW1Cb3VuY2U6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNUb3VjaEV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICAvLyBDbGlja3NcbiAgICAgIGFsbG93Q2xpY2s6IHRydWUsXG4gICAgICAvLyBUb3VjaGVzXG4gICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICAgIHRvdWNoZXM6IHtcbiAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgZGlmZjogMFxuICAgICAgfSxcbiAgICAgIC8vIEltYWdlc1xuICAgICAgaW1hZ2VzVG9Mb2FkOiBbXSxcbiAgICAgIGltYWdlc0xvYWRlZDogMFxuICAgIH0pOyAvLyBJbnN0YWxsIE1vZHVsZXNcblxuICAgIHN3aXBlci51c2VNb2R1bGVzKCk7XG4gICAgc3dpcGVyLmVtaXQoJ19zd2lwZXInKTsgLy8gSW5pdFxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaW5pdCkge1xuICAgICAgc3dpcGVyLmluaXQoKTtcbiAgICB9IC8vIFJldHVybiBhcHAgaW5zdGFuY2VcblxuXG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTd2lwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5lbWl0Q29udGFpbmVyQ2xhc3NlcyA9IGZ1bmN0aW9uIGVtaXRDb250YWluZXJDbGFzc2VzKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5fZW1pdENsYXNzZXMgfHwgIXN3aXBlci5lbCkgcmV0dXJuO1xuICAgIHZhciBjbGFzc2VzID0gc3dpcGVyLmVsLmNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluZGV4T2YoJ3N3aXBlci1jb250YWluZXInKSA9PT0gMCB8fCBjbGFzc05hbWUuaW5kZXhPZihzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MpID09PSAwO1xuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfY29udGFpbmVyQ2xhc3NlcycsIGNsYXNzZXMuam9pbignICcpKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24gZ2V0U2xpZGVDbGFzc2VzKHNsaWRlRWwpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICByZXR1cm4gc2xpZGVFbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZS5pbmRleE9mKCdzd2lwZXItc2xpZGUnKSA9PT0gMCB8fCBjbGFzc05hbWUuaW5kZXhPZihzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpID09PSAwO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfTtcblxuICBfcHJvdG8uZW1pdFNsaWRlc0NsYXNzZXMgPSBmdW5jdGlvbiBlbWl0U2xpZGVzQ2xhc3NlcygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICB2YXIgdXBkYXRlcyA9IFtdO1xuICAgIHN3aXBlci5zbGlkZXMuZWFjaChmdW5jdGlvbiAoc2xpZGVFbCkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBzd2lwZXIuZ2V0U2xpZGVDbGFzc2VzKHNsaWRlRWwpO1xuICAgICAgdXBkYXRlcy5wdXNoKHtcbiAgICAgICAgc2xpZGVFbDogc2xpZGVFbCxcbiAgICAgICAgY2xhc3NOYW1lczogY2xhc3NOYW1lc1xuICAgICAgfSk7XG4gICAgICBzd2lwZXIuZW1pdCgnX3NsaWRlQ2xhc3MnLCBzbGlkZUVsLCBjbGFzc05hbWVzKTtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX3NsaWRlQ2xhc3NlcycsIHVwZGF0ZXMpO1xuICB9O1xuXG4gIF9wcm90by5zbGlkZXNQZXJWaWV3RHluYW1pYyA9IGZ1bmN0aW9uIHNsaWRlc1BlclZpZXdEeW5hbWljKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgICBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICAgIHN3aXBlclNpemUgPSBzd2lwZXIuc2l6ZSxcbiAgICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgdmFyIHNwdiA9IDE7XG5cbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICB2YXIgc2xpZGVTaXplID0gc2xpZGVzW2FjdGl2ZUluZGV4XS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICB2YXIgYnJlYWtMb29wO1xuXG4gICAgICBmb3IgKHZhciBpID0gYWN0aXZlSW5kZXggKyAxOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgIHNsaWRlU2l6ZSArPSBzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9pID0gYWN0aXZlSW5kZXggLSAxOyBfaSA+PSAwOyBfaSAtPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbX2ldICYmICFicmVha0xvb3ApIHtcbiAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW19pXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2kyID0gYWN0aXZlSW5kZXggKyAxOyBfaTIgPCBzbGlkZXMubGVuZ3RoOyBfaTIgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzR3JpZFtfaTJdIC0gc2xpZGVzR3JpZFthY3RpdmVJbmRleF0gPCBzd2lwZXJTaXplKSB7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3B2O1xuICB9O1xuXG4gIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHZhciBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtczsgLy8gQnJlYWtwb2ludHNcblxuICAgIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgIGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgIHZhciB0cmFuc2xhdGVWYWx1ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlICogLTEgOiBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgdmFyIG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHRyYW5zbGF0ZVZhbHVlLCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpLCBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2xhdGVkO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgIHNldFRyYW5zbGF0ZSgpO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XG4gICAgICAgIHNldFRyYW5zbGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCd1cGRhdGUnKTtcbiAgfTtcblxuICBfcHJvdG8uY2hhbmdlRGlyZWN0aW9uID0gZnVuY3Rpb24gY2hhbmdlRGlyZWN0aW9uKG5ld0RpcmVjdGlvbiwgbmVlZFVwZGF0ZSkge1xuICAgIGlmIChuZWVkVXBkYXRlID09PSB2b2lkIDApIHtcbiAgICAgIG5lZWRVcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBjdXJyZW50RGlyZWN0aW9uID0gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb247XG5cbiAgICBpZiAoIW5ld0RpcmVjdGlvbikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBuZXdEaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH1cblxuICAgIGlmIChuZXdEaXJlY3Rpb24gPT09IGN1cnJlbnREaXJlY3Rpb24gfHwgbmV3RGlyZWN0aW9uICE9PSAnaG9yaXpvbnRhbCcgJiYgbmV3RGlyZWN0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gc3dpcGVyO1xuICAgIH1cblxuICAgIHN3aXBlci4kZWwucmVtb3ZlQ2xhc3MoXCJcIiArIHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIGN1cnJlbnREaXJlY3Rpb24pLmFkZENsYXNzKFwiXCIgKyBzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBuZXdEaXJlY3Rpb24pO1xuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICAgIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xuICAgIHN3aXBlci5zbGlkZXMuZWFjaChmdW5jdGlvbiAoc2xpZGVFbCkge1xuICAgICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBzbGlkZUVsLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZUVsLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdjaGFuZ2VEaXJlY3Rpb24nKTtcbiAgICBpZiAobmVlZFVwZGF0ZSkgc3dpcGVyLnVwZGF0ZSgpO1xuICAgIHJldHVybiBzd2lwZXI7XG4gIH07XG5cbiAgX3Byb3RvLm1vdW50ID0gZnVuY3Rpb24gbW91bnQoZWwpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLm1vdW50ZWQpIHJldHVybiB0cnVlOyAvLyBGaW5kIGVsXG5cbiAgICB2YXIgJGVsID0gJChlbCB8fCBzd2lwZXIucGFyYW1zLmVsKTtcbiAgICBlbCA9ICRlbFswXTtcblxuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBlbC5zd2lwZXIgPSBzd2lwZXI7IC8vIEZpbmQgV3JhcHBlclxuXG4gICAgdmFyICR3cmFwcGVyRWw7XG5cbiAgICBpZiAoZWwgJiYgZWwuc2hhZG93Um9vdCAmJiBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICR3cmFwcGVyRWwgPSAkKGVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5cIiArIHN3aXBlci5wYXJhbXMud3JhcHBlckNsYXNzKSk7IC8vIENoaWxkcmVuIG5lZWRzIHRvIHJldHVybiBzbG90IGl0ZW1zXG5cbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gJGVsLmNoaWxkcmVuKG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbCA9ICRlbC5jaGlsZHJlbihcIi5cIiArIHN3aXBlci5wYXJhbXMud3JhcHBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBleHRlbmQoc3dpcGVyLCB7XG4gICAgICAkZWw6ICRlbCxcbiAgICAgIGVsOiBlbCxcbiAgICAgICR3cmFwcGVyRWw6ICR3cmFwcGVyRWwsXG4gICAgICB3cmFwcGVyRWw6ICR3cmFwcGVyRWxbMF0sXG4gICAgICBtb3VudGVkOiB0cnVlLFxuICAgICAgLy8gUlRMXG4gICAgICBydGw6IGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcsXG4gICAgICBydGxUcmFuc2xhdGU6IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgKGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpLFxuICAgICAgd3JvbmdSVEw6ICR3cmFwcGVyRWwuY3NzKCdkaXNwbGF5JykgPT09ICctd2Via2l0LWJveCdcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoZWwpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm4gc3dpcGVyO1xuICAgIHZhciBtb3VudGVkID0gc3dpcGVyLm1vdW50KGVsKTtcbiAgICBpZiAobW91bnRlZCA9PT0gZmFsc2UpIHJldHVybiBzd2lwZXI7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZUluaXQnKTsgLy8gU2V0IGJyZWFrcG9pbnRcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH0gLy8gQWRkIENsYXNzZXNcblxuXG4gICAgc3dpcGVyLmFkZENsYXNzZXMoKTsgLy8gQ3JlYXRlIGxvb3BcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gICAgfSAvLyBVcGRhdGUgc2l6ZVxuXG5cbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpOyAvLyBVcGRhdGUgc2xpZGVzXG5cbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93KSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH0gLy8gU2V0IEdyYWIgQ3Vyc29yXG5cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJlbG9hZEltYWdlcykge1xuICAgICAgc3dpcGVyLnByZWxvYWRJbWFnZXMoKTtcbiAgICB9IC8vIFNsaWRlIFRvIEluaXRpYWwgU2xpZGVcblxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk7XG4gICAgfSAvLyBBdHRhY2ggZXZlbnRzXG5cblxuICAgIHN3aXBlci5hdHRhY2hFdmVudHMoKTsgLy8gSW5pdCBGbGFnXG5cbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSB0cnVlOyAvLyBFbWl0XG5cbiAgICBzd2lwZXIuZW1pdCgnaW5pdCcpO1xuICAgIHN3aXBlci5lbWl0KCdhZnRlckluaXQnKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveShkZWxldGVJbnN0YW5jZSwgY2xlYW5TdHlsZXMpIHtcbiAgICBpZiAoZGVsZXRlSW5zdGFuY2UgPT09IHZvaWQgMCkge1xuICAgICAgZGVsZXRlSW5zdGFuY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjbGVhblN0eWxlcyA9PT0gdm9pZCAwKSB7XG4gICAgICBjbGVhblN0eWxlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAgICRlbCA9IHN3aXBlci4kZWwsXG4gICAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcblxuICAgIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgfHwgc3dpcGVyLmRlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZURlc3Ryb3knKTsgLy8gSW5pdCBGbGFnXG5cbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSBmYWxzZTsgLy8gRGV0YWNoIGV2ZW50c1xuXG4gICAgc3dpcGVyLmRldGFjaEV2ZW50cygpOyAvLyBEZXN0cm95IGxvb3BcblxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgfSAvLyBDbGVhbnVwIHN0eWxlc1xuXG5cbiAgICBpZiAoY2xlYW5TdHlsZXMpIHtcbiAgICAgIHN3aXBlci5yZW1vdmVDbGFzc2VzKCk7XG4gICAgICAkZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICR3cmFwcGVyRWwucmVtb3ZlQXR0cignc3R5bGUnKTtcblxuICAgICAgaWYgKHNsaWRlcyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgIHNsaWRlcy5yZW1vdmVDbGFzcyhbcGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzLCBwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcywgcGFyYW1zLnNsaWRlTmV4dENsYXNzLCBwYXJhbXMuc2xpZGVQcmV2Q2xhc3NdLmpvaW4oJyAnKSkucmVtb3ZlQXR0cignc3R5bGUnKS5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdkZXN0cm95Jyk7IC8vIERldGFjaCBlbWl0dGVyIGV2ZW50c1xuXG4gICAgT2JqZWN0LmtleXMoc3dpcGVyLmV2ZW50c0xpc3RlbmVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICBzd2lwZXIub2ZmKGV2ZW50TmFtZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoZGVsZXRlSW5zdGFuY2UgIT09IGZhbHNlKSB7XG4gICAgICBzd2lwZXIuJGVsWzBdLnN3aXBlciA9IG51bGw7XG4gICAgICBkZWxldGVQcm9wcyhzd2lwZXIpO1xuICAgIH1cblxuICAgIHN3aXBlci5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIFN3aXBlci5leHRlbmREZWZhdWx0cyA9IGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRzKG5ld0RlZmF1bHRzKSB7XG4gICAgZXh0ZW5kKGV4dGVuZGVkRGVmYXVsdHMsIG5ld0RlZmF1bHRzKTtcbiAgfTtcblxuICBTd2lwZXIuaW5zdGFsbE1vZHVsZSA9IGZ1bmN0aW9uIGluc3RhbGxNb2R1bGUobW9kdWxlKSB7XG4gICAgaWYgKCFTd2lwZXIucHJvdG90eXBlLm1vZHVsZXMpIFN3aXBlci5wcm90b3R5cGUubW9kdWxlcyA9IHt9O1xuICAgIHZhciBuYW1lID0gbW9kdWxlLm5hbWUgfHwgT2JqZWN0LmtleXMoU3dpcGVyLnByb3RvdHlwZS5tb2R1bGVzKS5sZW5ndGggKyBcIl9cIiArIG5vdygpO1xuICAgIFN3aXBlci5wcm90b3R5cGUubW9kdWxlc1tuYW1lXSA9IG1vZHVsZTtcbiAgfTtcblxuICBTd2lwZXIudXNlID0gZnVuY3Rpb24gdXNlKG1vZHVsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZHVsZSkpIHtcbiAgICAgIG1vZHVsZS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBTd2lwZXIuaW5zdGFsbE1vZHVsZShtKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFN3aXBlcjtcbiAgICB9XG5cbiAgICBTd2lwZXIuaW5zdGFsbE1vZHVsZShtb2R1bGUpO1xuICAgIHJldHVybiBTd2lwZXI7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFN3aXBlciwgbnVsbCwgW3tcbiAgICBrZXk6IFwiZXh0ZW5kZWREZWZhdWx0c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGV4dGVuZGVkRGVmYXVsdHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN3aXBlcjtcbn0oKTtcblxuT2JqZWN0LmtleXMocHJvdG90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvdG90eXBlR3JvdXApIHtcbiAgT2JqZWN0LmtleXMocHJvdG90eXBlc1twcm90b3R5cGVHcm91cF0pLmZvckVhY2goZnVuY3Rpb24gKHByb3RvTWV0aG9kKSB7XG4gICAgU3dpcGVyLnByb3RvdHlwZVtwcm90b01ldGhvZF0gPSBwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXVtwcm90b01ldGhvZF07XG4gIH0pO1xufSk7XG5Td2lwZXIudXNlKFtSZXNpemUsIE9ic2VydmVyXSk7XG5leHBvcnQgZGVmYXVsdCBTd2lwZXI7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQU8sbUJBQ0wsU0FDQSxVQUNzQjtBQUN0QixVQUFNLFdBQVcsSUFBSSxxQkFBcUI7QUFDMUMsYUFBUyxRQUFRO0FBQ2pCLFdBQU87QUFBQTs7O0FDTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlPLHNCQUFzQztBQUMzQyxVQUFNLE1BQU0sYUFBYSxRQUFRO0FBQ2pDLFdBQU8sS0FBSyxNQUFNLG9CQUFPO0FBQUE7QUFHcEIsb0JBQWtCLE9BQXlCO0FBQ2hELFVBQU0sTUFBTSxLQUFLLFVBQVU7QUFDM0IsaUJBQWEsUUFBUSxXQUFXO0FBQUE7QUFHM0IsZUFDTCxNQUNBLE9BQ0E7QUFDQSxVQUFNLFFB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dEIsb0JBQW9CO0FBQUEsSUFFcEIsbUJBQW1CO0FBQUEsSUFFbkIscUJBQXFCO0FBQUEsSUFDckIsMEJBQTBCO0FBQUEsSUFFMUIsZUFBZTtBQUFBLElBRWYsY0FBYztBQUFBLElBRWQsWUFBWTtBQUFBLElBQ1osWUFBWTtBQUFBLElBQ1osZUFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osaUJBQWlCO0FBQUEsSUFDakIsY0FBYztBQUFBLElBQ2QsY0FBYztBQUFBLElBQ2QsZ0JBQWdCO0FBQUEsSUFDaEIsV0FBVztBQUFBLElBQ1gsMEJBQTBCO0FBQUEsSUFDMUIsMEJBQTBCO0FBQUEsSUFDMUIsK0JBQStCO0FBQUEsSUFDL0IscUJBQXFCO0FBQUEsSUFFckIsbUJBQW1CO0FBQUEsSUFFbkIsWUFBWTtBQUFBLElBQ1osaUJBQWlCO0FBQUEsSUFFakIscUJBQXFCO0FBQUEsSUFDckIsdUJBQXVCO0FBQUEsSUFFdkIsWUFBWTtBQUFBLElBRVosZUFBZTtBQUFBLElBQ2YsMEJBQTBCO0FBQUEsSUFDMUIscUJBQXFCO0FBQUEsSUFFckIsZUFBZTtBQUFBLElBQ2YscUJBQXFCO0FBQUEsSUFFckIsTUFBTTtBQUFBLElBQ04sc0JBQXNCO0FBQUEsSUFDdEIsY0FBYztBQUFBLElBQ2Qsd0JBQXdCO0FBQUEsSUFDeEIsbUJBQW1CO0FBQUEsSUFFbkIsZ0JBQWdCO0FBQUEsSUFDaEIsZ0JBQWdCO0FBQUEsSUFDaEIsY0FBYztBQUFBLElBRWQsV0FBVztBQUFBLElBQ1gsZ0JBQWdCO0FBQUEsSUFDaEIsbUJBQW1CO0FBQUEsSUFFbkIsa0JBQWtCO0FBQUEsSUFFbEIsd0JBQXdCO0FBQUEsSUFFeEIsWUFBWTtBQUFBLElBQ1osaUJBQWlCO0FBQUEsSUFDakIsa0JBQWtCO0FBQUEsSUFDbEIsMkJBQTJCO0FBQUEsSUFDM0IsbUJBQW1CO0FBQUEsSUFDbkIscUJBQXFCO0FBQUEsSUFDckIsZ0JBQWdCO0FBQUEsSUFDaEIseUJBQXlCO0FBQUEsSUFDekIsZ0JBQWdCO0FBQUEsSUFDaEIs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Q0FBQyxRQUFPLFVBQVU7QUFBUyxnQkFBTyxVQUFVLFVBQVU7QUFDMUQsVUFBSSxPQUFPLE9BQU8sUUFBUSxPQUFPLEtBQUssUUFBTyxVQUFVLFNBQVMsU0FBUyxNQUFNO0FBQy9FLGNBQU8sVUFBVSxRQUFRLFFBQVE7QUFBQTtBQUduQyxZQUFPLE1BQU0sYUFBYSxRQUFRO0FBQ2hDLFVBQUksTUFBTSxRQUFRLFNBQVM7QUFDekIsZUFBTyxRQUFRLFNBQVUsR0FBRztBQUMxQixpQkFBTyxRQUFPLGNBQWM7QUFBQTtBQUU5QixlQUFPO0FBQUE7QUFHVCxjQUFPLGNBQWM7QUFDckIsYUFBTztBQUFBO0FBR1QsaUJBQWEsU0FBUSxNQUFNLENBQUM7QUFBQSxNQUMxQixLQUFLO0FBQUEsTUFDTCxLQUFLLGdCQUFlO0FBQ2xCLGVBQU87QUFBQTtBQUFBLE9BRVI7QUFBQSxNQUNELEtBQUs7QUFBQSxNQUNMLEtBQUssZ0JBQWU7QUFDbEIsZUFBTztBQUFBO0FBQUE7QUFJWCxXQUFPO0FBQUE7QUFHVCxTQUFPLEtBQUssWUFBWSxRQUFRLFNBQVUsZ0JBQWdCO0FBQ3hELFdBQU8sS0FBSyxXQUFXLGlCQUFpQixRQUFRLFNBQVUsYUFBYTtBQUNyRSxhQUFPLFVBQVUsZUFBZSxXQUFXLGdCQUFnQjtBQUFBO0FBQUE7QUFHL0QsU0FBTyxJQUFJLENBQUMsZ0JBQVE7QUFDcEIsTUFBTyxxQkFBUTs7O0E1RXpqQmYsTUFBTSxXQUFXLFNBQVMsY0FBYztBQUV4QyxFQUFLLFNBQVMsUUFBUSxDQUFDLFlBQVk7QUFDakMsYUFBUyxZQUNQLEFBQU0sc0JBQXNCO0FBQUE7QUFBQTtBQUFBLHNCQUdWLFFBQVEsZUFBZSxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSTlCLFFBQVE7QUFBQTtBQUFBO0FBQUEsY0FHakIsUUFBUTtBQUFBO0FBQUEsZUFFUCxRQUFRO0FBQUE7QUFBQSxjQUVULFFBQVEsYUFDUCxJQUFJLENBQUMsV0FBVyxPQUFPLGVBQ3ZCLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUXBCLE1BQUksbUJBQU8scUJBQXFCO0FBQUEsSUFDOUIsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLE1BQ1YsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBO0FBQUEsSUFFUixZQUFZO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUE7QUFBQSxJQUVWLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
