"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7793,8539],{

/***/ 800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40173);

function scheduleArray(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => {
    let i = 0;
    return scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ 1465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A2: () => (/* binding */ errorNotification),
/* harmony export */   M7: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   ro: () => (/* binding */ nextNotification)
/* harmony export */ });
/* unused harmony export createNotification */
const COMPLETE_NOTIFICATION = /*#__PURE__*/(() => createNotification('C', undefined, undefined))();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}
//# sourceMappingURL=NotificationFactories.js.map

/***/ }),

/***/ 4642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ timeoutProvider)
/* harmony export */ });
const timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const {
      delegate
    } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const {
      delegate
    } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=timeoutProvider.js.map

/***/ }),

/***/ 4989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47971);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ 5829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50066);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35040);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__/* .from */ .H)(args, scheduler);
}
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 6313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ClickableLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let ClickableLinkComponent = /*#__PURE__*/(() => {
  class ClickableLinkComponent {
    constructor() {
      this.target = '_blank';
    }
    ngOnInit() {
      // Your custom logic here
    }
    static {
      this.ɵfac = function ClickableLinkComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ClickableLinkComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ClickableLinkComponent,
        selectors: [["ngx-clickable-link"]],
        inputs: {
          value: "value",
          rowData: "rowData",
          href: "href",
          target: "target"
        },
        standalone: false,
        decls: 2,
        vars: 3,
        consts: [[3, "href", "target"]],
        template: function ClickableLinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", ctx.rowData[ctx.href], _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B)("target", ctx.target);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.value, " ");
          }
        },
        styles: ["a[_ngcontent-%COMP%] {\n  color: rgb(0, 136, 254);\n  text-decoration: none;\n}"]
      });
    }
  }
  return ClickableLinkComponent;
})();

/***/ }),

/***/ 8539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ getBrowserLanguage)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81236);

/**
 * Utility function to get the browser language and fall back to a default if needed.
 * @returns {string} The browser language or the default language.
 */
function getBrowserLanguage() {
  const browserLang = window.navigator.language.split('-')[0]; // Get base language code
  const supportedLanguages = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .LanguagesEnum */ .TR); // List of supported languages
  // Check if the browser language is supported; otherwise, return default
  return supportedLanguages.includes(browserLang) ? browserLang : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .LanguagesEnum */ .TR.ENGLISH;
}

/***/ }),

/***/ 9710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48170);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62388);


function map(project, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 10066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17496);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70354);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30208);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__/* .Action */ .r {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__/* .intervalProvider */ .f.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__/* .intervalProvider */ .f.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__/* .arrRemove */ .o)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 10477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};
//# sourceMappingURL=dateTimestampProvider.js.map

/***/ }),

/***/ 11610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ms: () => (/* binding */ SafeSubscriber),
/* harmony export */   vU: () => (/* binding */ Subscriber)
/* harmony export */ });
/* unused harmony export EMPTY_OBSERVER */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47971);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54509);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50166);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22546);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52787);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1465);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4642);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79454);








class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__/* .Subscription */ .yU {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_0__/* .isSubscription */ .Uv)(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__/* .nextNotification */ .ro)(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__/* .errorNotification */ .A2)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__/* .COMPLETE_NOTIFICATION */ .M7, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
class ConsumerObserver {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const {
      partialObserver
    } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const {
      partialObserver
    } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const {
      partialObserver
    } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
}
class SafeSubscriber extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__/* .isFunction */ .T)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      let context;
      if (this && _config__WEBPACK_IMPORTED_MODULE_3__/* .config */ .$.useDeprecatedNextContext) {
        context = Object.create(observerOrNext);
        context.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context),
          error: observerOrNext.error && bind(observerOrNext.error, context),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
}
function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_3__/* .config */ .$.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_4__/* .captureError */ .l)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__/* .reportUnhandledError */ .m)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const {
    onStoppedNotification
  } = _config__WEBPACK_IMPORTED_MODULE_3__/* .config */ .$;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__/* .timeoutProvider */ .f.setTimeout(() => onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_7__/* .noop */ .l,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_7__/* .noop */ .l
};
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ 13305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47971);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48170);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62388);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93177);




function tap(observerOrNext, error, complete) {
  const tapObserver = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(observerOrNext) || error || complete ? {
    next: observerOrNext,
    error,
    complete
  } : observerOrNext;
  return tapObserver ? (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    let isUnsub = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      var _a;
      (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      subscriber.complete();
    }, err => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a, _b;
      if (isUnsub) {
        (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : _util_identity__WEBPACK_IMPORTED_MODULE_3__/* .identity */ .D;
}
//# sourceMappingURL=tap.js.map

/***/ }),

/***/ 14869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ iterator)
/* harmony export */ });
/* unused harmony export getSymbolIterator */
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
const iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ 17087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ TrustHtmlLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _pipes_text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43826);


let TrustHtmlLinkComponent = /*#__PURE__*/(() => {
  class TrustHtmlLinkComponent {
    static {
      this.ɵfac = function TrustHtmlLinkComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TrustHtmlLinkComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TrustHtmlLinkComponent,
        selectors: [["ngx-security-trust-html"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 3,
        consts: [[3, "innerHTML"]],
        template: function TrustHtmlLinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "nl2br");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx.value), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
          }
        },
        dependencies: [_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_1__/* .Nl2BrPipe */ .V],
        encapsulation: 2
      });
    }
  }
  return TrustHtmlLinkComponent;
})();

/***/ }),

/***/ 17496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54509);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__/* .Subscription */ .yU {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 20345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ DebounceClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);



let DebounceClickDirective = /*#__PURE__*/(() => {
  class DebounceClickDirective {
    constructor() {
      this.clicks = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B();
      this.debounceTime = 300;
      this.throttledClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    }
    /**
     * Handles the click event and emits it after a debounce time.
     *
     * @param {Event} event - The click event object.
     * @return {void} This function does not return a value.
     */
    clickEvent(event) {
      event.preventDefault();
      event.stopPropagation();
      this.clicks.next(event);
    }
    ngOnInit() {
      this.subscription = this.clicks.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(this.debounceTime), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(e => this.throttledClick.emit(e))).subscribe();
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static {
      this.ɵfac = function DebounceClickDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DebounceClickDirective)();
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .FsC({
        type: DebounceClickDirective,
        selectors: [["", "debounceClick", ""]],
        hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function DebounceClickDirective_click_HostBindingHandler($event) {
              return ctx.clickEvent($event);
            });
          }
        },
        inputs: {
          debounceTime: "debounceTime"
        },
        outputs: {
          throttledClick: "throttledClick"
        },
        standalone: false
      });
    }
  }
  return DebounceClickDirective;
})();

/***/ }),

/***/ 21928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* unused harmony export async */
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10066);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96663);


const asyncScheduler = /*#__PURE__*/new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = (/* unused pure expression or super */ null && (asyncScheduler));
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 22339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ GithubRepositoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71466);


let GithubRepositoryComponent = /*#__PURE__*/(() => {
  class GithubRepositoryComponent {
    constructor() {}
    ngOnInit() {}
    static {
      this.ɵfac = function GithubRepositoryComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GithubRepositoryComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GithubRepositoryComponent,
        selectors: [["ngx-github-repository"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 5,
        vars: 1,
        consts: [[1, "repository-render"], ["src", "assets/images/integrations/github.svg"], [1, "name"]],
        template: function GithubRepositoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span")(3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.rowData == null ? null : ctx.rowData.customFields == null ? null : ctx.rowData.customFields.repository == null ? null : ctx.rowData.customFields.repository.fullName);
          }
        },
        dependencies: [_directives_img_directive__WEBPACK_IMPORTED_MODULE_1__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.repository-render[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.repository-render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: nb-theme(border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}\n.repository-render[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n}"]
      });
    }
  }
  return GithubRepositoryComponent;
})();

/***/ }),

/***/ 22546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50166);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4642);


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__/* .timeoutProvider */ .f.setTimeout(() => {
    const {
      onUnhandledError
    } = _config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .$;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}
//# sourceMappingURL=reportUnhandledError.js.map

/***/ }),

/***/ 22611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40173);

const EMPTY = /*#__PURE__*/new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 22666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ observable)
/* harmony export */ });
const observable = /*#__PURE__*/(() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ 23729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82393);

const ObjectUnsubscribedError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ 24646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ IntegrationGithubLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64064);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13305);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);






let IntegrationGithubLayoutComponent = /*#__PURE__*/(() => {
  let IntegrationGithubLayoutComponent = class IntegrationGithubLayoutComponent {
    constructor(_router, _activatedRoute) {
      this._router = _router;
      this._activatedRoute = _activatedRoute;
    }
    ngOnInit() {
      this._activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .tap */ .M)(({
        integration
      }) => {
        const path = integration ? `/pages/integrations/github/${integration.id}` : '/pages/integrations/github/setup/wizard';
        this._router.navigate([path]);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    static {
      this.ɵfac = function IntegrationGithubLayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationGithubLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .ActivatedRoute */ .nX));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: IntegrationGithubLayoutComponent,
        selectors: [["ngx-integration-github-layout"]],
        standalone: false,
        decls: 1,
        vars: 0,
        template: function IntegrationGithubLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterOutlet */ .n3],
        encapsulation: 2
      });
    }
  };
  IntegrationGithubLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .ActivatedRoute */ .nX])], IntegrationGithubLayoutComponent);
  return IntegrationGithubLayoutComponent;
})();


/***/ }),

/***/ 26852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ RepositorySelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let RepositorySelectorModule = /*#__PURE__*/(() => {
  class RepositorySelectorModule {
    static {
      this.ɵfac = function RepositorySelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RepositorySelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RepositorySelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return RepositorySelectorModule;
})();

/***/ }),

/***/ 27327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ GithubRepositoryStatusEnum)
/* harmony export */ });
/* unused harmony export GithubPropertyMapEnum */
// Enum for GitHub property mapping
var GithubPropertyMapEnum = /*#__PURE__*/function (GithubPropertyMapEnum) {
  GithubPropertyMapEnum["INSTALLATION_ID"] = "installation_id";
  GithubPropertyMapEnum["SETUP_ACTION"] = "setup_action";
  GithubPropertyMapEnum["ACCESS_TOKEN"] = "access_token";
  GithubPropertyMapEnum["EXPIRES_IN"] = "expires_in";
  GithubPropertyMapEnum["REFRESH_TOKEN"] = "refresh_token";
  GithubPropertyMapEnum["REFRESH_TOKEN_EXPIRES_IN"] = "refresh_token_expires_in";
  GithubPropertyMapEnum["TOKEN_TYPE"] = "token_type";
  GithubPropertyMapEnum["SYNC_TAG"] = "sync_tag";
  return GithubPropertyMapEnum;
}(GithubPropertyMapEnum || {});
var GithubRepositoryStatusEnum = /*#__PURE__*/function (GithubRepositoryStatusEnum) {
  GithubRepositoryStatusEnum["SYNCING"] = "Syncing";
  GithubRepositoryStatusEnum["SUCCESSFULLY"] = "Successfully";
  GithubRepositoryStatusEnum["ERROR"] = "Error";
  GithubRepositoryStatusEnum["DISABLED"] = "Disabled";
  return GithubRepositoryStatusEnum;
}(GithubRepositoryStatusEnum || {});

/***/ }),

/***/ 27985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);




function ProjectComponent_div_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("src", ctx_r0.project.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" Members count ", ctx_r0.project == null ? null : ctx_r0.project.count, " ");
  }
}
function ProjectComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectComponent_div_0_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span")(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, ProjectComponent_div_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.project == null ? null : ctx_r0.project.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.project == null ? null : ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.project == null ? null : ctx_r0.project.count);
  }
}
function ProjectComponent_div_1_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 5);
  }
  if (rf & 2) {
    const project_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("src", project_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectComponent_div_1_ng_container_1_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", project_r2 == null ? null : project_r2.imageUrl);
  }
}
function ProjectComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.projects);
  }
}
let ProjectComponent = /*#__PURE__*/(() => {
  class ProjectComponent {
    constructor() {
      this.organization = null;
      this.project = {
        name: null,
        count: null,
        imageUrl: null
      };
      this.projects = [];
    }
    ngOnInit() {
      this.init();
    }
    init() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
        if (_this.rowData?.project || _this.value?.project) {
          _this.project.name = _this.rowData?.project?.name || _this.value?.project?.name;
          _this.project.count = _this.rowData?.project?.membersCount || _this.value?.project?.membersCount;
          _this.project.imageUrl = _this.rowData?.project?.imageUrl || _this.value?.project?.imageUrl;
        } else if (_this.rowData.projects) {
          _this.projects = _this.rowData.projects.map(project => {
            return {
              name: project.name,
              count: project.membersCount,
              imageUrl: project.imageUrl
            };
          });
        }
      })();
    }
    static {
      this.ɵfac = function ProjectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectComponent,
        selectors: [["ngx-project"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 2,
        consts: [["class", "project-render", 4, "ngIf"], [1, "project-render"], [3, "src", 4, "ngIf"], [1, "name"], ["class", "member", 4, "ngIf"], [3, "src"], [1, "member"], [4, "ngFor", "ngForOf"]],
        template: function ProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProjectComponent_div_0_Template, 6, 3, "div", 0)(1, ProjectComponent_div_1_Template, 2, 1, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.project);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.projects);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.project-render[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.project-render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}\n.project-render[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n}\n.project-render[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n}"]
      });
    }
  }
  return ProjectComponent;
})();

/***/ }),

/***/ 29071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40173);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89965);


function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__/* .executeSchedule */ .N)(subscriber, scheduler, () => {
      const iterator = input[Symbol.asyncIterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__/* .executeSchedule */ .N)(subscriber, scheduler, () => {
        iterator.next().then(result => {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}
//# sourceMappingURL=scheduleAsyncIterable.js.map

/***/ }),

/***/ 29177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IntegrationGithubUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45715);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55567);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99209);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8539);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26852);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37383);
/* harmony import */ var _integration_github_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);











let IntegrationGithubUiModule = /*#__PURE__*/(() => {
  class IntegrationGithubUiModule {
    static {
      this.ɵfac = function IntegrationGithubUiModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationGithubUiModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: IntegrationGithubUiModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogModule */ .nZv, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbPopoverModule */ .Ofb, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbToggleModule */ .jVr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__/* .NgSelectModule */ .MQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_3__/* .NgxPermissionsModule */ .Ov.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forRoot({
          defaultLanguage: (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .getBrowserLanguage */ .x)(),
          // Get the browser language and fall back to a default if needed
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateLoader */ .Wr,
            useFactory: _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_6__/* .HttpLoaderFactory */ .M,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__/* .HttpClient */ .Qq]
          }
        }), _integration_github_routes__WEBPACK_IMPORTED_MODULE_8__/* .IntegrationGithubRoutes */ .K, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .RepositorySelectorModule */ .e, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .ProjectSelectModule */ .A]
      });
    }
  }
  return IntegrationGithubUiModule;
})();

/***/ }),

/***/ 30208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
//# sourceMappingURL=arrRemove.js.map

/***/ }),

/***/ 30478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47971);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ 34060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ GithubService)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);







let GithubService = /*#__PURE__*/(() => {
  class GithubService {
    constructor(_http) {
      this._http = _http;
    }
    /**
     * Add a GitHub app installation.
     * @param input The input data for the GitHub app installation.
     * @returns A promise that resolves to the integration tenant object.
     */
    addInstallationApp(input) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/install`;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(_this._http.post(url, input));
      })();
    }
    /**
     * Get GitHub repositories for a specific integration.
     *
     * @param {string} integrationId - The ID of the integration.
     * @param {IBasePerTenantAndOrganizationEntityModel} query - Query parameters for the request.
     * @returns {Observable<IGithubRepositoryResponse>} An observable that emits GitHub repositories.
     */
    getRepositories(integrationId, query) {
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/${integrationId}/repositories`;
      const params = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)(query);
      return this._http.get(url, {
        params
      });
    }
    /**
     * Get GitHub repository issues for a specific integration, owner, and repository.
     *
     * @param {string} integrationId - The ID of the integration.
     * @param {string} owner - The owner (username or organization) of the repository.
     * @param {string} repo - The name of the repository.
     * @param {IBasePerTenantAndOrganizationEntityModel} query - Query parameters for the request.
     * @returns {Observable<IGithubIssue[]>} An observable that emits GitHub issues.
     */
    getRepositoryIssues(integrationId, owner, repo, query) {
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/${integrationId}/${owner}/${repo}/issues`;
      const params = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)(query);
      return this._http.get(url, {
        params
      });
    }
    /**
     * Synchronize a GitHub repository.
     * @param input The synchronization input data.
     * @returns An Observable of the synchronized IntegrationMap.
     */
    syncGithubRepository(input) {
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/repository/sync`;
      return this._http.post(url, input);
    }
    /**
     * Update a GitHub repository's information.
     *
     * @param id - A string representing the unique identifier of the GitHub repository to be updated.
     * @param input - An object containing the data to update the GitHub repository.
     * @returns An Observable that emits the updated GitHub repository data.
     */
    updateGithubRepository(id, input) {
      // Construct the URL for the API endpoint.
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/repository/${id}`;
      // Send an HTTP PUT request to update the GitHub repository using the provided input.
      return this._http.put(url, input);
    }
    /**
     * Auto-synchronize GitHub issues for a specific repository.
     *
     * @param integrationId - The ID of the integration tenant.
     * @param repository - The GitHub repository to auto-sync issues for.
     * @param options - Additional options for synchronization, including organization, tenant, and an optional project.
     * @returns An Observable representing the result of the auto-synchronization.
     */
    autoSyncIssues(integrationId, repository, options) {
      return this._http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/${integrationId}/auto-sync/issues`, {
        integrationId,
        repository,
        projectId: options.projectId,
        organizationId: options.organizationId,
        tenantId: options.tenantId
      });
    }
    /**
     * Sync GitHub issues and labels for a given organization and integration.
     *
     * @param integrationId - The ID of the integration.
     * @param options - An object containing organizationId, tenantId, and issues.
     * @returns An observable that represents the HTTP POST request to sync issues and labels.
     */
    manualSyncIssues(integrationId, repository, options) {
      return this._http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/${integrationId}/manual-sync/issues`, {
        integrationId,
        repository,
        issues: this._mapIssuePayload(options.issues),
        projectId: options.projectId,
        organizationId: options.organizationId,
        tenantId: options.tenantId
      });
    }
    /**
     * Maps a GitHub repository's data to a custom payload object.
     *
     * @param data - The GitHub repository data to map.
     * @returns A custom payload object with selected properties.
     */
    _mapRepositoryPayload(data) {
      const {
        id,
        name,
        full_name,
        owner,
        visibility,
        open_issues_count
      } = data;
      return {
        id,
        name,
        full_name,
        owner: {
          login: owner.login
        },
        visibility,
        open_issues_count,
        private: data.private
      };
    }
    /**
     * Map GitHub issue payload data to the required format.
     *
     * @param data - An array of GitHub issues.
     * @returns An array of mapped issue payload data.
     */
    _mapIssuePayload(data) {
      return data.map(({
        id,
        number,
        title,
        state,
        body,
        labels = []
      }) => ({
        id,
        number,
        title,
        state,
        body,
        labels
      }));
    }
    static {
      this.ɵfac = function GithubService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: GithubService,
        factory: GithubService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GithubService;
})();

/***/ }),

/***/ 34269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ResyncButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20345);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);





let ResyncButtonComponent = /*#__PURE__*/(() => {
  class ResyncButtonComponent {
    constructor() {
      /**
       * An output property for emitting click events.
       *
       * This output property emits events of type Event when a click event occurs.
       */
      this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    /**
     * Getter for retrieving the current value.
     *
     * @returns The current value of the dynamic element.
     */
    get value() {
      return this._value;
    }
    /**
     * Setter for updating the dynamic value.
     * This setter is decorated with @Input to allow external components to bind and update the value.
     *
     * @param value - The new value to set for the dynamic element.
     */
    set value(value) {
      // Stores the value in the local variable for future reference.
      this._value = value;
    }
    /**
     * Handle a click event, conditionally emitting it for further processing.
     *
     * @param event - The click event to be handled.
     */
    onClicked(event) {
      // Access the repository data from the component's rowData.
      const repository = this.rowData.customFields?.repository;
      // Check if the repository data exists and has synchronization enabled.
      if (!repository || !repository.hasSyncEnabled) {
        return; // If repository is missing or synchronization is not enabled, exit the function.
      }
      // Emit the event using an EventEmitter, possibly to notify other parts of the application.
      this.clicked.emit(event);
    }
    static {
      this.ɵfac = function ResyncButtonComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ResyncButtonComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ResyncButtonComponent,
        selectors: [["ngx-resync-button"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        outputs: {
          clicked: "clicked"
        },
        standalone: false,
        decls: 5,
        vars: 4,
        consts: [["nbButton", "", "status", "primary", "debounceClick", "", 1, "mr-2", 3, "throttledClick", "disabled"], [1, "sync-container"], ["icon", "sync-outline", 1, "sync"]],
        template: function ResyncButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function ResyncButtonComponent_Template_button_throttledClick_0_listener($event) {
              return ctx.onClicked($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !(ctx.rowData == null ? null : ctx.rowData.customFields == null ? null : ctx.rowData.customFields.repository == null ? null : ctx.rowData.customFields.repository.hasSyncEnabled));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "BUTTONS.RESYNC"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconComponent */ .tHu, _directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_2__/* .DebounceClickDirective */ .J, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return ResyncButtonComponent;
})();

/***/ }),

/***/ 34360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48170);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62388);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 34576:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ UntilDestroy),
/* harmony export */   s: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94166);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54509);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35040);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89032);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67186);



const NG_PIPE_DEF = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵNG_PIPE_DEF"] */ .YHP;
function isPipe(target) {
  return !!target[NG_PIPE_DEF];
}

/**
 * Applied to instances and stores `Subject` instance when
 * no custom destroy method is provided.
 */
const DESTROY = Symbol('__destroy');
/**
 * Applied to definitions and informs that class is decorated
 */
const DECORATOR_APPLIED = Symbol('__decoratorApplied');
/**
 * If we use the `untilDestroyed` operator multiple times inside the single
 * instance providing different `destroyMethodName`, then all streams will
 * subscribe to the single subject. If any method is invoked, the subject will
 * emit and all streams will be unsubscribed. We wan't to prevent this behavior,
 * thus we store subjects under different symbols.
 */
function getSymbol(destroyMethodName) {
  if (typeof destroyMethodName === 'string') {
    return Symbol(`__destroy__${destroyMethodName}`);
  } else {
    return DESTROY;
  }
}
function markAsDecorated(type) {
  // Store this property on the prototype if it's an injectable class, component or directive.
  // We will be able to handle class extension this way.
  type.prototype[DECORATOR_APPLIED] = true;
}
function createSubjectOnTheInstance(instance, symbol) {
  if (!instance[symbol]) {
    instance[symbol] = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
  }
}
function completeSubjectOnTheInstance(instance, symbol) {
  if (instance[symbol]) {
    instance[symbol].next();
    instance[symbol].complete();
    // We also have to re-assign this property thus in the future
    // we will be able to create new subject on the same instance.
    instance[symbol] = null;
  }
}
function unsubscribe(property) {
  if (property instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subscription */ .yU) {
    property.unsubscribe();
  }
}
function unsubscribeIfPropertyIsArrayLike(property) {
  Array.isArray(property) && property.forEach(unsubscribe);
}
function decorateNgOnDestroy(ngOnDestroy, options) {
  return function () {
    // Invoke the original `ngOnDestroy` if it exists
    ngOnDestroy && ngOnDestroy.call(this);
    // It's important to use `this` instead of caching instance
    // that may lead to memory leaks
    completeSubjectOnTheInstance(this, getSymbol());
    // Check if subscriptions are pushed to some array
    if (options.arrayName) {
      unsubscribeIfPropertyIsArrayLike(this[options.arrayName]);
    }
    // Loop through the properties and find subscriptions
    if (options.checkProperties) {
      for (const property in this) {
        if (options.blackList?.includes(property)) {
          continue;
        }
        unsubscribe(this[property]);
      }
    }
  };
}
function decorateProviderDirectiveOrComponent(type, options) {
  type.prototype.ngOnDestroy = decorateNgOnDestroy(type.prototype.ngOnDestroy, options);
}
function decoratePipe(type, options) {
  const def = type.ɵpipe;
  def.onDestroy = decorateNgOnDestroy(def.onDestroy, options);
}
function UntilDestroy(options = {}) {
  return type => {
    if (isPipe(type)) {
      decoratePipe(type, options);
    } else {
      decorateProviderDirectiveOrComponent(type, options);
    }
    markAsDecorated(type);
  };
}

// `LView` is an array where each index matches the specific data structure.
// The 7th element in an `LView` is an array of cleanup listeners. They are
// invoked when the view is removed (similar to `ComponentRef.onDestroy`).
const CLEANUP = 7;
const CheckerHasBeenSet = Symbol('CheckerHasBeenSet');
function setupSubjectUnsubscribedChecker(instance, destroy$) {
  // This function is used within the `untilDestroyed` operator and setups a function that
  // listens for the view removal and checks if the `destroy$` subject has any observers (usually `takeUntil`).
  // Note: this code will not be shipped into production since it's guarded with `ngDevMode`,
  // this means it'll exist only in development mode.
  if (instance[CheckerHasBeenSet] || isAngularInTestMode()) {
    return;
  }
  runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .from */ .H)(Promise.resolve()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .mergeMap */ .Z)(() => {
    let lContext;
    try {
      // The `ɵgetLContext` might not work for a pipe, because it's not a component nor a directive,
      // which means there's no `RNode` for an instance.
      lContext = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵgetLContext"] */ .xtB)(instance);
    } catch {
      lContext = null;
    }
    const lView = lContext?.lView;
    if (lView == null) {
      return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w;
    }
    const lCleanup = lView[CLEANUP] || (lView[CLEANUP] = []);
    const cleanupHasBeenExecuted$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
    // Note: this function is named for debugging purposes.
    lCleanup.push(function untilDestroyedLCleanup() {
      // We leave the Angular zone, so RxJS will also call subsequent `next` functions
      // outside of the Angular zone, which is done to avoid scheduling a microtask (through
      // `asapScheduler`) within the Angular zone.
      runOutsideAngular(() => {
        cleanupHasBeenExecuted$.next();
        cleanupHasBeenExecuted$.complete();
      });
    });
    return cleanupHasBeenExecuted$;
  }),
  // We can't use `observeOn(asapScheduler)` because this might break the app's change detection.
  // RxJS schedulers coalesce tasks and then flush the queue, which means our task might be scheduled
  // within the root zone, and then all of the tasks (that were set up by developers in the Angular zone)
  // will also be flushed in the root zone.
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .mergeMap */ .Z)(() => Promise.resolve())).subscribe(() => {
    // Note: The `observed` property is available only in RxJS@7.2.0, which will throw
    // an error in lower versions. We have integration test with RxJS@6 to ensure we don't
    // import operators from `rxjs`; that's why it's wrapped into braces. The `observers`
    // property is also being deprecated.
    const observed = destroy$['observed'] ?? destroy$['observers'].length > 0;
    if (observed) {
      console.warn(createMessage(instance));
    }
  }));
  instance[CheckerHasBeenSet] = true;
}
function isAngularInTestMode() {
  // Gets whether the code is currently running in a test environment.
  // We don't use `declare const` because it might cause conflicts with the real typings.
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jest !== 'undefined' && !!jest ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha ||
    // Jest is not defined in ESM mode since it must be access only by importing from `@jest/globals`.
    // There's no way to check if we're in Jest ESM mode or not, but we can check if the `process` is defined.
    // Note: it's required to check for `[object process]` because someone might be running unit tests with
    // Webpack and shimming `process`.
    typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]'
  );
}
function runOutsideAngular(fn) {
  // We cannot inject the `NgZone` class when running the checker. The `__ngContext__` is read
  // for the first time within a microtask which triggers change detection; we want to avoid that.
  // The `Zone` is always available globally when the `zone.js` is imported. Otherwise, it may be
  // nooped through bootstrap options. The `NgZone.runOutsideAngular` calls `Zone.root.run`, so we're
  // safe calling that function directly.
  const Zone = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵglobal"] */ .JZv.Zone;
  const isNgZoneEnabled = !!Zone && typeof Zone.root?.run === 'function';
  return isNgZoneEnabled ? Zone.root.run(fn) : fn();
}
function createMessage(instance) {
  return `
  The ${instance.constructor.name} still has subscriptions that haven't been unsubscribed.
  This may happen if the class extends another class decorated with @UntilDestroy().
  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().
  Let's look at the following example:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {}
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
    }
  }
  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()
  on the ConcreteComponent, but not on the BaseDirective.
  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {
    ngOnDestroy(): void {}
  }
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
      super.ngOnDestroy();
    }
  }
  `;
}
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || ngDevMode;
function overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol) {
  const originalDestroy = instance[destroyMethodName];
  if (NG_DEV_MODE && typeof originalDestroy !== 'function') {
    throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
  }
  createSubjectOnTheInstance(instance, symbol);
  instance[destroyMethodName] = function () {
    // eslint-disable-next-line prefer-rest-params
    originalDestroy.apply(this, arguments);
    completeSubjectOnTheInstance(this, symbol);
    // We have to re-assign this property back to the original value.
    // If the `untilDestroyed` operator is called for the same instance
    // multiple times, then we will be able to get the original
    // method again and not the patched one.
    instance[destroyMethodName] = originalDestroy;
  };
}
function untilDestroyed(instance, destroyMethodName) {
  return source => {
    const symbol = getSymbol(destroyMethodName);
    // If `destroyMethodName` is passed then the developer applies
    // this operator to something non-related to Angular DI system
    if (typeof destroyMethodName === 'string') {
      overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol);
    } else {
      NG_DEV_MODE && ensureClassIsDecorated(instance);
      createSubjectOnTheInstance(instance, symbol);
    }
    const destroy$ = instance[symbol];
    NG_DEV_MODE && setupSubjectUnsubscribedChecker(instance, destroy$);
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .takeUntil */ .Q)(destroy$));
  };
}
function ensureClassIsDecorated(instance) {
  const prototype = Object.getPrototypeOf(instance);
  const missingDecorator = !(DECORATOR_APPLIED in prototype);
  if (missingDecorator) {
    throw new Error('untilDestroyed operator cannot be used inside directives or ' + 'components or providers that are not decorated with UntilDestroy decorator');
  }
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngneat-until-destroy.mjs.map

/***/ }),

/***/ 35040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40821);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72834);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__/* .scheduled */ .c)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(input);
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ 35809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72834);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62388);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48170);



function catchError(selector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let innerSub = null;
    let syncUnsub = false;
    let handledResult;
    innerSub = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, undefined, undefined, err => {
      handledResult = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(selector(err, catchError(selector)(source)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ 38721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ GithubIssueTitleDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _tags_only_tags_only_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91045);
/* harmony import */ var _trust_html_trust_html_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17087);








function GithubIssueTitleDescriptionComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-only-tags", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r0.rowData == null ? null : ctx_r0.rowData.labels)("rowData", ctx_r0.rowData);
  }
}
let GithubIssueTitleDescriptionComponent = /*#__PURE__*/(() => {
  class GithubIssueTitleDescriptionComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
    }
    /**
     *
     * @returns
     */
    openIssue() {
      if (!this.rowData) {
        return;
      }
      if (this.rowData?.html_url) {
        window.open(this.rowData.html_url, '_blank');
      }
    }
    static {
      this.ɵfac = function GithubIssueTitleDescriptionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GithubIssueTitleDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GithubIssueTitleDescriptionComponent,
        selectors: [["issue-title-description"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 11,
        vars: 4,
        consts: [[1, "issue-details"], [1, "issue-header"], [1, "issue-labels"], [3, "ngIf"], [1, "issue-title"], ["href", "javascript:void(0)", 3, "click"], ["icon", "eye-outline", "pack", "eva", 3, "nbTooltip"], [1, "issue-body"], [1, "issue-description"], [3, "value"], [3, "value", "rowData"]],
        template: function GithubIssueTitleDescriptionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, GithubIssueTitleDescriptionComponent_ng_template_3_Template, 1, 2, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 4)(5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GithubIssueTitleDescriptionComponent_Template_a_click_5_listener() {
              return ctx.openIssue();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 7)(9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "ngx-security-trust-html", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.labels);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", ctx.rowData == null ? null : ctx.rowData.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.rowData == null ? null : ctx.rowData.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx.rowData == null ? null : ctx.rowData.body);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipDirective */ .BmQ, _tags_only_tags_only_component__WEBPACK_IMPORTED_MODULE_5__/* .TagsOnlyComponent */ .F, _trust_html_trust_html_component__WEBPACK_IMPORTED_MODULE_6__/* .TrustHtmlLinkComponent */ .l],
        styles: ["[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%] {\n  letter-spacing: 0em;\n  text-align: left;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-labels[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: block;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  padding-top: 10px;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-body[_ngcontent-%COMP%]   .issue-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 10px;\n  line-height: 17px;\n}"]
      });
    }
  }
  return GithubIssueTitleDescriptionComponent;
})();

/***/ }),

/***/ 39643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22666);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47971);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__/* .observable */ .s]);
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ 39794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72834);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48170);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62388);



function switchMap(project, resultSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let innerSubscriber = null;
    let index = 0;
    let isComplete = false;
    const checkComplete = () => isComplete && !innerSubscriber && subscriber.complete();
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      let innerIndex = 0;
      const outerIndex = index++;
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(project(value, outerIndex)).subscribe(innerSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, innerValue => subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue), () => {
        innerSubscriber = null;
        checkComplete();
      }));
    }, () => {
      isComplete = true;
      checkComplete();
    }));
  });
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ 39904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10477);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__/* .dateTimestampProvider */ .U.now;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 40173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11610);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54509);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22666);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70439);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50166);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47971);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79454);







let Observable = /*#__PURE__*/(() => {
  class Observable {
    constructor(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    lift(operator) {
      const observable = new Observable();
      observable.source = this;
      observable.operator = operator;
      return observable;
    }
    subscribe(observerOrNext, error, complete) {
      const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__/* .SafeSubscriber */ .Ms(observerOrNext, error, complete);
      (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__/* .errorContext */ .Y)(() => {
        const {
          operator,
          source
        } = this;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
      });
      return subscriber;
    }
    _trySubscribe(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    }
    forEach(next, promiseCtor) {
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor((resolve, reject) => {
        const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__/* .SafeSubscriber */ .Ms({
          next: value => {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
        this.subscribe(subscriber);
      });
    }
    _subscribe(subscriber) {
      var _a;
      return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    }
    [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__/* .observable */ .s]() {
      return this;
    }
    pipe(...operations) {
      return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__/* .pipeFromArray */ .m)(operations)(this);
    }
    toPromise(promiseCtor) {
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor((resolve, reject) => {
        let value;
        this.subscribe(x => value = x, err => reject(err), () => resolve(value));
      });
    }
  }
  Observable.create = subscribe => {
    return new Observable(subscribe);
  };
  return Observable;
})();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__/* .config */ .$.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__/* .isFunction */ .T)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__/* .isFunction */ .T)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__/* .isFunction */ .T)(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__/* .Subscriber */ .vU || isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__/* .isSubscription */ .Uv)(value);
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ 40821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59208);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43432);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(800);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79459);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29071);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39643);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30478);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68725);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47969);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4989);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63723);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94336);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94078);













function scheduled(input, scheduler) {
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__/* .isInteropObservable */ .l)(input)) {
      return (0,_scheduleObservable__WEBPACK_IMPORTED_MODULE_1__/* .scheduleObservable */ .x)(input, scheduler);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__/* .isArrayLike */ .X)(input)) {
      return (0,_scheduleArray__WEBPACK_IMPORTED_MODULE_3__/* .scheduleArray */ .V)(input, scheduler);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_4__/* .isPromise */ .y)(input)) {
      return (0,_schedulePromise__WEBPACK_IMPORTED_MODULE_5__/* .schedulePromise */ .P)(input, scheduler);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__/* .isAsyncIterable */ .T)(input)) {
      return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__/* .scheduleAsyncIterable */ .M)(input, scheduler);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_8__/* .isIterable */ .x)(input)) {
      return (0,_scheduleIterable__WEBPACK_IMPORTED_MODULE_9__/* .scheduleIterable */ .S)(input, scheduler);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__/* .isReadableStreamLike */ .U)(input)) {
      return (0,_scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__/* .scheduleReadableStreamLike */ .v)(input, scheduler);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__/* .createInvalidObservableTypeError */ .L)(input);
}
//# sourceMappingURL=scheduled.js.map

/***/ }),

/***/ 42728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94166);

class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B {
  constructor(_value) {
    super();
    this._value = _value;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(subscriber) {
    const subscription = super._subscribe(subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  }
  getValue() {
    const {
      hasError,
      thrownError,
      _value
    } = this;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  }
  next(value) {
    super.next(this._value = value);
  }
}
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ 43432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72834);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84705);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69933);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ 45242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47971);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 46088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72834);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89965);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62388);



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  const buffer = [];
  let active = 0;
  let index = 0;
  let isComplete = false;
  const checkComplete = () => {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  const outerNext = value => active < concurrent ? doInnerSub(value) : buffer.push(value);
  const doInnerSub = value => {
    expand && subscriber.next(value);
    active++;
    let innerComplete = false;
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(project(value, index++)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, innerValue => {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, () => {
      innerComplete = true;
    }, undefined, () => {
      if (innerComplete) {
        try {
          active--;
          while (buffer.length && active < concurrent) {
            const bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
            } else {
              doInnerSub(bufferedValue);
            }
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, outerNext, () => {
    isComplete = true;
    checkComplete();
  }));
  return () => {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}
//# sourceMappingURL=mergeInternals.js.map

/***/ }),

/***/ 47049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ SyncTags)
/* harmony export */ });
/**
 * Sync tag constants used to categorize synchronization sources.
 */
const SyncTags = {
  GITHUB: 'GitHub',
  GAUZY: 'Gauzy'
};

/***/ }),

/***/ 47108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ PaginationFilterBaseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);









let PaginationFilterBaseComponent = /*#__PURE__*/(() => {
  let PaginationFilterBaseComponent = class PaginationFilterBaseComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    get minItemPerPage() {
      return this._minItemPerPage;
    }
    get pagination() {
      return this._pagination;
    }
    set pagination(value) {
      this._pagination = value;
    }
    set filters(val) {
      this._filters = val;
    }
    get filters() {
      return this._filters;
    }
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.activePage = 1;
      this.totalItems = 0;
      this.itemsPerPage = 10;
      /**
       * Getter for minimum items per page
       * Can't be modified outside the class
       */
      this._minItemPerPage = 10;
      /**
       * Pagination
       */
      this._pagination = {
        totalItems: this.totalItems,
        activePage: this.activePage,
        itemsPerPage: this.itemsPerPage
      };
      this.pagination$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t({
        activePage: this.pagination.activePage,
        itemsPerPage: this.pagination.itemsPerPage
      });
      this.subject$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      /*
       * getter setter for filters
       */
      this._filters = {};
    }
    ngAfterViewInit() {}
    /*
     * refresh pagination
     */
    refreshPagination() {
      this.setPagination({
        ...this.getPagination(),
        activePage: this.activePage,
        itemsPerPage: this.minItemPerPage
      });
    }
    /**
     * Set filter for data based on the provided filter object.
     * @param filter - The filter object containing information about the field and search criteria.
     * @param doEmit - A boolean flag indicating whether to emit a notification after setting the filter. Default is true.
     */
    setFilter(filter, doEmit = true) {
      // Split the field path into an array of field names
      const fields = filter.field.split('.');
      // Check if the search criteria is not empty or a boolean
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .isNotEmpty */ .hj)(filter.search) || 'boolean' === typeof filter.search) {
        const search = filter.search;
        // Create an object with nested keys representing the field path and set the search value
        const keys = fields.reduceRight((value, key) => ({
          [key]: value
        }), search);
        // Update the 'where' property in the 'filters' object with the new keys
        this.filters = {
          where: {
            ...this.filters.where,
            ...keys,
            ...(0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .mergeDeep */ .D9)(this.filters.where, keys)
          }
        };
      } else {
        // If the search criteria is empty or not a boolean, remove the field from the 'where' property
        const [field] = fields.reverse();
        (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .cleanKeys */ .Yg)(this.filters.where, field);
      }
      // Emit a notification if doEmit is true
      if (doEmit) {
        this.subject$.next(true);
      }
    }
    /**
     *
     * @param selectedPage
     */
    onPageChange(selectedPage) {
      this.setPagination({
        ...this.getPagination(),
        activePage: selectedPage
      });
      // Scroll to the table top
      this.scrollTop();
    }
    /**
     *
     */
    getPagination() {
      return this.pagination;
    }
    /**
     *
     */
    setPagination(pagination) {
      this.pagination = pagination;
      const {
        activePage,
        itemsPerPage
      } = this.getPagination();
      this.pagination$.next({
        activePage,
        itemsPerPage
      });
    }
    /**
     *
     * @param itemsPerPage
     */
    onUpdateOption(itemsPerPage) {
      this.refreshPagination();
      this.pagination.itemsPerPage = itemsPerPage;
      this.setPagination({
        ...this.getPagination(),
        itemsPerPage: this.pagination.itemsPerPage
      });
    }
    /**
     * Scroll to the table top after set pagination
     */
    onScroll() {
      const activePage = this.pagination.activePage + 1;
      this.setPagination({
        ...this.getPagination(),
        activePage: activePage
      });
    }
    /**
     * Scroll to the table top after set pagination
     */
    scrollTop() {
      try {
        const table = document.querySelector('angular2-smart-table > table');
        if (!!table) {
          table.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } catch (error) {
        console.log('Error while scrolling to the table top', error);
      }
    }
    static {
      this.ɵfac = function PaginationFilterBaseComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PaginationFilterBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PaginationFilterBaseComponent,
        selectors: [["ng-component"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 0,
        vars: 0,
        template: function PaginationFilterBaseComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
    }
  };
  PaginationFilterBaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$])], PaginationFilterBaseComponent);
  return PaginationFilterBaseComponent;
})();


/***/ }),

/***/ 47969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14869);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47971);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__/* .iterator */ .l]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ 47971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 48170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ operate)
/* harmony export */ });
/* unused harmony export hasLift */
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47971);

function hasLift(source) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return source => {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
//# sourceMappingURL=lift.js.map

/***/ }),

/***/ 50066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lI: () => (/* binding */ popScheduler)
/* harmony export */ });
/* unused harmony exports popResultSelector, popNumber */
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45242);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return isFunction(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_0__/* .isScheduler */ .m)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map

/***/ }),

/***/ 50166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ config)
/* harmony export */ });
const config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 52787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 53025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ RepositorySelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45230);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34060);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);













function RepositorySelectorComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("input", function RepositorySelectorComponent_ng_template_8_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      const select_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(select_r3.filter($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "INTEGRATIONS.GITHUB_PAGE.SEARCH_REPOSITORY"));
  }
}
function RepositorySelectorComponent_ng_template_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r4.full_name);
  }
}
function RepositorySelectorComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, RepositorySelectorComponent_ng_template_9_ng_container_0_Template, 4, 1, "ng-container", 8);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", item_r4);
  }
}
function RepositorySelectorComponent_ng_template_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r5.full_name);
  }
}
function RepositorySelectorComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, RepositorySelectorComponent_ng_template_10_ng_container_0_Template, 4, 1, "ng-container", 8);
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", item_r5);
  }
}
let RepositorySelectorComponent = /*#__PURE__*/(() => {
  let RepositorySelectorComponent = class RepositorySelectorComponent {
    /**
     * Setter for the integration property.
     * Updates the integration and notifies observers with the new value.
     */
    set integration(value) {
      if (value) {
        this._integration = value;
        this.subject$.next(value); // Emit the updated value to observers
      }
    }
    /**
     * Getter for the integration property.
     * Returns the current integration value.
     */
    get integration() {
      return this._integration;
    }
    /**
     * Setter for the sourceId property.
     * Updates the source ID and triggers relevant changes when a valid value is provided.
     */
    set sourceId(val) {
      if (val) {
        // Check if the conversion was successful
        this._sourceId = val;
        this.onChange(this._sourceId); // Trigger the onChange event with the converted number
        this.onTouched(); // Mark the field as touched
        // Handle pre-selected repository if applicable
        if (this.selected) {
          this._preSelectedRepository(this._sourceId); // Pre-select the repository
        }
      }
    }
    /**
     * Getter for the sourceId property.
     * Returns the current source ID value.
     */
    get sourceId() {
      return this._sourceId;
    }
    constructor(_store, _githubService, _errorHandlingService) {
      this._store = _store;
      this._githubService = _githubService;
      this._errorHandlingService = _errorHandlingService;
      this.preSelected = false;
      this.loading = false;
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
      this.organization = this._store.selectedOrganization;
      this.repositories = [];
      /**
       * Placeholder text to guide the user. Defaults to null if not provided.
       */
      this.placeholder = null;
      /**
       * Indicates whether the component is selected. Defaults to false.
       */
      this.selected = false;
      /** */
      this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.afterLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      // Implement your onChange and onTouched methods
      this.onChange = () => {};
      this.onTouched = () => {};
      this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this._getRepositories()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnInit() {}
    /**
     * Pre-selects a repository based on the provided source ID.
     *
     * @param sourceId - The ID of the source repository to pre-select.
     */
    _preSelectedRepository(sourceId) {
      const repository = this.repositories.find(repo => repo.id === sourceId);
      if (repository) {
        this.selectRepository(repository); // Select the found repository
      }
    }
    /**
     * Fetches repositories for a given integration and organization.
     */
    _getRepositories() {
      if (!this.integration) return; // Ensure a valid integration is present
      this.loading = true;
      // Destructure required properties from the integration object
      const {
        id: integrationId,
        organizationId,
        tenantId
      } = this.integration;
      // Fetch the repositories using the integration details
      const repositories$ = this._githubService.getRepositories(integrationId, {
        organizationId,
        tenantId
      });
      this.repositories$ = repositories$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .T)(({
        repositories
      }) => repositories),
      // Update component state with fetched repositories
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(repositories => {
        this.repositories = repositories;
        this.afterLoad.emit(this.repositories || []);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(error => {
        // Handle and log errors
        this._errorHandlingService.handleError(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .finalize */ .j)(() => {
        // Set loading to false once finished
        this.loading = false;
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this));
    }
    /**
     * Selects a GitHub repository and emits the selection event.
     *
     * @param repository - The selected GitHub repository.
     */
    selectRepository(repository) {
      if (repository) {
        this.onChanged.emit(repository); // Emit the selected repository
      }
    }
    /**
     * Write the value (repository ID) into the component.
     *
     * @param value - The value to be written, representing the repository ID.
     */
    writeValue(value) {
      this._sourceId = value; // Assign the provided value to _sourceId
    }
    /**
     * Register a function to call when the control's value changes.
     *
     * @param fn - The function that handles value changes.
     */
    registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Register a function to call when the control is touched.
     *
     * @param fn - The function that handles touch events.
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function RepositorySelectorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RepositorySelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .GithubService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RepositorySelectorComponent,
        selectors: [["ngx-github-repository-selector"]],
        inputs: {
          placeholder: "placeholder",
          selected: "selected",
          integration: "integration",
          sourceId: "sourceId"
        },
        outputs: {
          onChanged: "onChanged",
          afterLoad: "afterLoad"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => RepositorySelectorComponent),
          multi: true
        }])],
        decls: 11,
        vars: 13,
        consts: [["select", ""], [1, "form-group"], [1, "label"], ["bindLabel", "full_name", "bindValue", "id", "appendTo", "body", "dropdownPosition", "bottom", 1, "mb-2", 3, "ngModelChange", "change", "items", "searchable", "clearable", "loading", "ngModel", "placeholder"], ["ng-header-tmp", ""], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["type", "search", 1, "form-control", 3, "input", "placeholder"], [4, "ngIf"], ["src", "assets/images/integrations/github.svg"], [1, "ml-1"]],
        template: function RepositorySelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "ng-select", 3, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function RepositorySelectorComponent_Template_ng_select_ngModelChange_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.sourceId, $event) || (ctx.sourceId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function RepositorySelectorComponent_Template_ng_select_change_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.selectRepository($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, RepositorySelectorComponent_ng_template_8_Template, 2, 3, "ng-template", 4)(9, RepositorySelectorComponent_ng_template_9_Template, 1, 1, "ng-template", 5)(10, RepositorySelectorComponent_ng_template_10_Template, 1, 1, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 7, "FORM.LABELS.GITHUB_REPOSITORY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 9, ctx.repositories$))("searchable", false)("clearable", true)("loading", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.sourceId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", ctx.placeholder || _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 11, "INTEGRATIONS.GITHUB_PAGE.SELECT_REPOSITORY"));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgLabelTemplateDirective */ .ZZ, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgHeaderTemplateDirective */ .Uc, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9],
        styles: ["[_nghost-%COMP%] {\n  min-width: 200px;\n  display: block;\n}\n[_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  max-width: none;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: nb-theme(border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}"]
      });
    }
  };
  RepositorySelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .GithubService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X])], RepositorySelectorComponent);
  return RepositorySelectorComponent;
})();


/***/ }),

/***/ 54509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kn: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Uv: () => (/* binding */ isSubscription),
/* harmony export */   yU: () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47971);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75571);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30208);



class Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage
      } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const {
        initialTeardown: initialFinalizer
      } = this;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__/* .UnsubscriptionError */ .Z ? e.errors : [e];
        }
      }
      const {
        _finalizers
      } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__/* .UnsubscriptionError */ .Z) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__/* .UnsubscriptionError */ .Z(errors);
      }
    }
  }
  add(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const {
      _parentage
    } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const {
      _parentage
    } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const {
      _parentage
    } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__/* .arrRemove */ .o)(_parentage, parent);
    }
  }
  remove(teardown) {
    const {
      _finalizers
    } = this;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__/* .arrRemove */ .o)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  }
}
Subscription.EMPTY = /*#__PURE__*/(() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ 55552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ GithubViewComponent),
/* harmony export */   h: () => (/* binding */ SyncTabsEnum)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(64064);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14572);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42728);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94166);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91292);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22611);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5829);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(63408);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13305);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34360);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39794);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35809);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9710);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(89032);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34576);
/* harmony import */ var _gauzy_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(47049);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(18548);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(27327);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(81995);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(34060);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6313);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(38721);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90475);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(22339);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27985);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(77485);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(34269);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(91073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(79475);
/* harmony import */ var _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(90910);
/* harmony import */ var _ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(20345);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(52345);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(81073);
/* harmony import */ var _ui_core_shared_src_lib_integrations_github_repository_selector_repository_selector_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(53025);
/* harmony import */ var _ui_core_shared_src_lib_selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(46582);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(70675);






























const _c0 = ["issuesTable"];
const _c1 = () => ["INTEGRATION_EDIT"];
const _c2 = a0 => ({
  spin: a0
});
function GithubViewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GithubViewComponent_ng_template_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.navigateToResetIntegration());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.RESET_INTEGRATION"), " ");
  }
}
function GithubViewComponent_nb_card_body_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function GithubViewComponent_nb_card_body_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div");
  }
}
function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header")(2, "div", 21)(3, "div", 22)(4, "ngx-github-repository-selector", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onChanged", function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_3_ng_template_1_Template_ngx_github_repository_selector_onChanged_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectAutoRepository($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 22)(9, "ga-project-selector", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onChanged", function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_3_ng_template_1_Template_ga_project_selector_onChanged_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectedProject$.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 27)(12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_3_ng_template_1_Template_button_throttledClick_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.autoSyncIssues());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "nb-card-body")(17, "div", 30)(18, "div", 31)(19, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(22, "angular2-smart-table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("sourceId", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 15, ctx_r2.project$)) == null ? null : tmp_7_0.customFields == null ? null : tmp_7_0.customFields.repository == null ? null : tmp_7_0.customFields.repository.repositoryId)("integration", ctx_r2.integration)("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 17, "FORM.PLACEHOLDERS.SELECT_PROJECT"))("label", "FORM.LABELS.PROJECT")("defaultSelected", false)("showAllOption", false)("skipGlobalChange", true)("shortened", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r2.project || !ctx_r2.repository);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(25, _c2, ctx_r2.syncing));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 19, ctx_r2.syncing ? "BUTTONS.AUTO_SYNCING" : "BUTTONS.AUTO_SYNC"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(21, 21, "INTEGRATIONS.GITHUB_PAGE.AUTO_SYNC_TABLE_LABEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r2.settingsSmartTableProjects)("source", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 23, ctx_r2.projects$));
  }
}
function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_3_ng_template_1_Template, 24, 27, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.integration);
  }
}
function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_ng_container_22_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ga-pagination", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedOption", function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_ng_container_22_ng_container_2_Template_ga_pagination_selectedOption_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onUpdateOption($event));
    })("selectedPage", function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_ng_container_22_ng_container_2_Template_ga_pagination_selectedPage_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("doEmit", false)("totalItems", ctx_r2.pagination == null ? null : ctx_r2.pagination.totalItems)("itemsPerPage", ctx_r2.pagination == null ? null : ctx_r2.pagination.itemsPerPage)("activePage", ctx_r2.pagination == null ? null : ctx_r2.pagination.activePage);
  }
}
function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_ng_container_22_ng_container_2_Template, 2, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.pagination.totalItems > ctx_r2.minItemPerPage);
  }
}
function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header")(2, "div", 21)(3, "div", 22)(4, "ngx-github-repository-selector", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onChanged", function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_Template_ngx_github_repository_selector_onChanged_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectManualRepository($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 22)(9, "ga-project-selector", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onChanged", function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_Template_ga_project_selector_onChanged_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectedProject$.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 27)(12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_Template_button_throttledClick_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.manualSyncIssues());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(14, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "nb-card-body")(19, "div", 30)(20, "angular2-smart-table", 35, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_Template_angular2_smart_table_userRowSelect_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectIssues($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(22, GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_ng_container_22_Template, 3, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("sourceId", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 16, ctx_r2.project$)) == null ? null : tmp_8_0.customFields == null ? null : tmp_8_0.customFields.repository == null ? null : tmp_8_0.customFields.repository.repositoryId)("integration", ctx_r2.integration)("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 18, "FORM.PLACEHOLDERS.SELECT_PROJECT"))("label", "FORM.LABELS.PROJECT")("defaultSelected", false)("showAllOption", false)("skipGlobalChange", true)("shortened", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.selectedIssues.length == 0 || !ctx_r2.project || !ctx_r2.repository);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(26, _c2, ctx_r2.syncing));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 20, ctx_r2.syncing ? "BUTTONS.SYNCING" : "BUTTONS.SYNC"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 22, "BUTTONS.SELECTED_TASKS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r2.settingsSmartTableIssues)("source", ctx_r2.issues);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 24, ctx_r2.page$));
  }
}
function GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_ng_template_1_Template, 24, 28, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.integration);
  }
}
function GithubViewComponent_nb_card_body_12_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-tabset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("changeTab", function GithubViewComponent_nb_card_body_12_ng_template_4_Template_nb_tabset_changeTab_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onChangeTab($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "nb-tab", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_3_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "nb-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, GithubViewComponent_nb_card_body_12_ng_template_4_ng_container_7_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 7, "INTEGRATIONS.GITHUB_PAGE.TAB.AUTO_SYNC"))("active", true)("tabId", ctx_r2.syncTabsEnum.AUTO_SYNC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 9, ctx_r2.nbTab$) === ctx_r2.syncTabsEnum.AUTO_SYNC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 11, "INTEGRATIONS.GITHUB_PAGE.TAB.MANUAL_SYNC"))("tabId", ctx_r2.syncTabsEnum.MANUAL_SYNC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 13, ctx_r2.nbTab$) === ctx_r2.syncTabsEnum.MANUAL_SYNC);
  }
}
function GithubViewComponent_nb_card_body_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, GithubViewComponent_nb_card_body_12_ng_container_1_Template, 1, 0, "ng-container", 15)(2, GithubViewComponent_nb_card_body_12_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(4, GithubViewComponent_nb_card_body_12_ng_template_4_Template, 9, 15, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ngxIntegrationSyncExcept_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(3);
    const ngxIntegrationSync_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.integration == null ? null : ctx_r2.integration.isActive)("ngIfThen", ngxIntegrationSync_r9)("ngIfElse", ngxIntegrationSyncExcept_r8);
  }
}
function GithubViewComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ngx-github-settings", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("canceled", function GithubViewComponent_ng_template_14_Template_ngx_github_settings_canceled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.openSettingModalPopover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("integration", ctx_r2.integration);
  }
}
var SyncTabsEnum = /*#__PURE__*/function (SyncTabsEnum) {
  SyncTabsEnum["AUTO_SYNC"] = "AUTO_SYNC";
  SyncTabsEnum["MANUAL_SYNC"] = "MANUAL_SYNC";
  return SyncTabsEnum;
}(SyncTabsEnum || {});
let GithubViewComponent = /*#__PURE__*/(() => {
  let GithubViewComponent = class GithubViewComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
    set content(content) {
      if (content) {
        this._issuesTable = content;
      }
    }
    constructor(_router, _translateService, _activatedRoute, _titlecasePipe, _hashNumberPipe, _toastrService, _errorHandlingService, _store, _githubService, _organizationProjectsService) {
      super(_translateService);
      this._router = _router;
      this._translateService = _translateService;
      this._activatedRoute = _activatedRoute;
      this._titlecasePipe = _titlecasePipe;
      this._hashNumberPipe = _hashNumberPipe;
      this._toastrService = _toastrService;
      this._errorHandlingService = _errorHandlingService;
      this._store = _store;
      this._githubService = _githubService;
      this._organizationProjectsService = _organizationProjectsService;
      this.syncTabsEnum = SyncTabsEnum;
      this.nbTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .BehaviorSubject */ .t(SyncTabsEnum.AUTO_SYNC);
      this.syncing = false; // Flag to indicate if data synchronization is in progress
      this.loading = false; // Flag to indicate if data loading is in progress
      this.user = this._store.user; // User object obtained from a service (likely a store)
      this.organization = this._store.selectedOrganization; // Selected organization object
      this.projects = []; // Array of organization projects
      this.issues = []; // Array of GitHub issues
      this.selectedIssues = []; // Array of selected GitHub issues
      this.selectedProject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B(); // Subject for selected organization projects
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .BehaviorSubject */ .t(true);
    }
    ngOnInit() {
      this._loadSmartTableSettings();
      this._applyTranslationOnSmartTable();
      this._getIntegrationTenant();
      this._getIntegrationProjects();
    }
    ngAfterViewInit() {
      this.project$ = this.selectedProject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(project => this.project = project || null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(() => !!this.project), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .switchMap */ .n)(() => {
        // Extract project properties
        const {
          id: projectId
        } = this.project;
        // Ensure there is a valid organization
        if (!projectId) {
          return rxjs__WEBPACK_IMPORTED_MODULE_9__/* .EMPTY */ .w; // No valid organization, return false
        }
        return this._organizationProjectsService.getById(projectId, ['customFields.repository']).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
          // Handle and log errors
          this._errorHandlingService.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_9__/* .EMPTY */ .w;
        }),
        // Handle component lifecycle to avoid memory leaks
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
      }));
    }
    /**
     * Fetches and sets the GitHub integration data from the ActivatedRoute data.
     */
    _getIntegrationTenant() {
      this.integration$ = this._activatedRoute.parent.data.pipe(
      // Extract the 'integration' from the data
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .map */ .T)(({
        integration
      }) => integration),
      // Store the integration in the 'integration' property
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(integration => this.integration = integration),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
    }
    /**
     * Fetches and sets the GitHub integration projects from the ActivatedRoute data.
     */
    _getIntegrationProjects() {
      this.projects$ = this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(() => !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .switchMap */ .n)(() => {
        // Extract project properties
        const {
          id: organizationId,
          tenantId
        } = this.organization;
        // Ensure there is a valid organization
        if (!organizationId) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]); // No valid organization, return false
        }
        return this._organizationProjectsService.findSyncedProjects({
          organizationId,
          tenantId
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .map */ .T)(({
          items
        }) => items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
          // Handle and log errors
          this._errorHandlingService.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_9__/* .EMPTY */ .w;
        }),
        // Handle component lifecycle to avoid memory leaks
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
      }));
    }
    /**
     * Selects a GitHub repository.
     *
     * @param repository The GitHub repository to select.
     */
    selectAutoRepository(repository) {
      // Set the 'repository' property to the provided 'repository' object.
      this.repository = repository;
    }
    /**
     * Select a GitHub repository manually and fetch its issues.
     *
     * @param repository The GitHub repository to select.
     */
    selectManualRepository(repository) {
      // Set the 'repository' property to the provided 'repository' object.
      this.repository = repository;
      // Initialize the 'selectedIssues' property with an empty array.
      this.selectedIssues = [];
      // Refresh the pagination settings or configuration.
      this.refreshPagination();
      // Create an Observable `page$` by piping the `pagination$` Observable through a series of operators.
      this.page$ = this.pagination$.pipe(
      // Add a 100ms delay to the emitted values.
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100),
      // Ensure only distinct values are emitted.
      (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(),
      // Fetch and assign issues using 'getRepositoryIssue'.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.getRepositoryIssue()),
      // Manage the component's lifecycle to avoid memory leaks.
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
    }
    /**
     * Fetches issues for a given repository.
     *
     * @param repository
     * @returns
     */
    getRepositoryIssue() {
      // Ensure there is a valid organization
      if (!this.organization || !this.repository) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]); // Return an empty observable if there is no organization
      }
      const repository = this.repository;
      const owner = repository.owner['login'];
      const repo = repository.name;
      // Extract organization properties
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      this.issues$ = this._activatedRoute.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(({
        integration
      }) => !!integration), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .switchMap */ .n)(() => this._activatedRoute.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(({
        integrationId
      }) => integrationId))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.loading = true),
      // Get the 'integrationId' route parameter
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .switchMap */ .n)(({
        integrationId
      }) => {
        /**
         * Applied smart table pagination configuration
         */
        const {
          activePage,
          itemsPerPage
        } = this.getPagination();
        return this._githubService.getRepositoryIssues(integrationId, owner, repo, {
          organizationId,
          tenantId,
          per_page: itemsPerPage,
          page: activePage
        });
      }),
      // Update component state with fetched issues
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(issues => {
        this.issues = issues;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => {
        this.setPagination({
          ...this.getPagination(),
          totalItems: repository.open_issues_count
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
        // Handle and log errors
        this._errorHandlingService.handleError(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.loading = false),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
      this.issues$.subscribe();
    }
    /**
     * Apply translations to a Smart Table component when the language changes.
     */
    _applyTranslationOnSmartTable() {
      // Listen for language changes using the 'translateService.onLangChange' observable
      this.translateService.onLangChange.pipe(
      // When the language changes, load Smart Table settings
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._loadSmartTableSettings()),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Load Smart Table settings to configure the component.
     */
    _loadSmartTableSettings() {
      const pagination = this.getPagination();
      // Define settings for the Smart Table
      this.settingsSmartTableIssues = {
        selectedRowIndex: -1,
        // Initialize the selected row index
        selectMode: 'multi',
        // Set select mode to 'multi' for multiple row selection
        actions: {
          add: false,
          // Disable 'add' action
          edit: false,
          // Disable 'edit' action
          delete: false,
          // Disable 'delete' action
          select: true // Enable 'select' action
        },
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        columns: {
          number: {
            title: this.getTranslation('SM_TABLE.NUMBER'),
            // Set column title based on translation
            width: '10%',
            type: 'custom',
            // Set column type to 'custom'
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .ClickableLinkComponent */ .E,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
              instance.href = 'html_url';
            },
            valuePrepareFunction: number => {
              return this._hashNumberPipe.transform(number);
            }
          },
          body: {
            title: this.getTranslation('SM_TABLE.DESCRIPTION'),
            // Set column title based on translation
            width: '80%',
            type: 'custom',
            // Set column type to 'custom'
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .GithubIssueTitleDescriptionComponent */ .M,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          state: {
            title: this.getTranslation('SM_TABLE.STATUS'),
            // Set column title based on translation
            width: '10%',
            type: 'custom',
            // Set column type to 'custom'
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .StatusBadgeComponent */ .v,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getValue();
            },
            valuePrepareFunction: value => this.getIssueStatus(value)
          }
        }
      };
      // Define settings for the Smart Table
      this.settingsSmartTableProjects = {
        selectedRowIndex: -1,
        // Initialize the selected row index
        hideSubHeader: true,
        actions: false,
        mode: 'external',
        editable: true,
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        columns: {
          repository: {
            title: this.getTranslation('SM_TABLE.GITHUB_REPOSITORY'),
            // Set column title based on translation
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .GithubRepositoryComponent */ .h,
            componentInitFunction: (instance, cell) => {
              // Set properties on the ProjectComponent instance
              instance.rowData = cell.getRow().getData();
              // Set properties on the GithubRepositoryComponent instance
              instance.value = cell.getRawValue();
            }
          },
          project: {
            title: this.getTranslation('SM_TABLE.PROJECT'),
            // Set column title based on translation
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .ProjectComponent */ .t,
            valuePrepareFunction: (_, cell) => ({
              project: cell.getRow().getData()
            }),
            componentInitFunction: (instance, cell) => {
              // Set properties on the ProjectComponent instance
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          issuesCount: {
            title: this.getTranslation('SM_TABLE.ISSUES_SYNC'),
            // Set column title based on translation
            type: 'number',
            isFilterable: false,
            valuePrepareFunction: (_, cell) => {
              // Get the data of the entire row
              const row = cell.getRow().getData();
              const count = row.customFields?.repository?.issuesCount; // Get repository synced issues count
              // Prepare the value for the cell by using translation and the 'issuesCount' property from the row
              return this.getTranslation('SM_TABLE.ISSUES_SYNC_COUNT', {
                count
              });
            }
          },
          hasSyncEnabled: {
            title: this.getTranslation('SM_TABLE.ENABLED_DISABLED_SYNC'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .ToggleSwitcherComponent */ .F,
            componentInitFunction: (instance, cell) => {
              // Get the data of the entire row
              const rowData = cell.getRow().getData();
              // Set properties on the ToggleSwitcherComponent instance
              instance.rowData = rowData;
              instance.value = rowData?.customFields?.repository?.hasSyncEnabled || false;
              // Subscribe to the 'switched' event of the ToggleSwitcherComponent
              instance.onSwitched.subscribe({
                // When the switch state changes, execute the following callback
                next: hasSyncEnabled => {
                  // Call the 'updateGithubRepository' method with the row data and the new switch state
                  this.updateGithubRepository(rowData, hasSyncEnabled);
                },
                // If there is an error, log a warning
                error: error => {
                  // Handle and log errors using an error handling service
                  this._errorHandlingService.handleError(error);
                }
              });
            }
          },
          resync: {
            title: this.getTranslation('SM_TABLE.RESYNC_ISSUES'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .ResyncButtonComponent */ .G,
            componentInitFunction: (instance, cell) => {
              // Get the data of the entire row
              const rowData = cell.getRow().getData();
              // Set properties on the ResyncButtonComponent instance
              instance.rowData = rowData;
              // Subscribe to the 'clicked' event of the ResyncButtonComponent
              instance.clicked.subscribe({
                // When the button is clicked, execute the following callback
                next: () => {
                  // Call the 'resyncIssues' method with the rowData as an argument
                  this.resyncIssues(instance.rowData);
                },
                // Handle errors if they occur during the subscription
                error: error => {
                  // Handle and log errors using an error handling service
                  this._errorHandlingService.handleError(error);
                }
              });
            }
          },
          status: {
            title: this.getTranslation('SM_TABLE.STATUS'),
            // Set column title based on translation
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .StatusBadgeComponent */ .v,
            componentInitFunction: (instance, cell) => {
              // Get the data of the entire row
              const row = cell.getRow().getData();
              // Get repository object
              const repository = row.customFields?.repository;
              // Transform the column data using 'this.statusMapper' only if repository is not null
              instance.value = repository ? this.statusMapper(repository) : null;
            }
          }
        }
      };
    }
    /**
     * Update a GitHub repository within the context of an organization project and handle various operations.
     * @param project - An object representing the organization project.
     * @param hasSyncEnabled - A boolean indicating whether sync is enabled.
     */
    updateGithubRepository(project, hasSyncEnabled) {
      // Get the repository object from the project
      const repository = project.customFields?.repository;
      // Check if the repository object exists
      if (!repository) {
        return;
      }
      const {
        organizationId,
        tenantId
      } = project;
      // Update a GitHub repository using the _githubService and handle various operations.
      this._githubService.updateGithubRepository(repository.id, {
        hasSyncEnabled,
        tenantId,
        organizationId
      }).pipe(
      // Perform side effects
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => {
        // Determine the success message based on whether hasSyncEnabled is true or false
        const message = hasSyncEnabled ? 'INTEGRATIONS.GITHUB_PAGE.HAS_SYNCED_ENABLED' : 'INTEGRATIONS.GITHUB_PAGE.HAS_SYNCED_DISABLED';
        // Display a success toast message using the _toastrService
        this._toastrService.success(this.getTranslation(message, {
          repository: repository.fullName
        }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
      }),
      // Update the subject with a value of true
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.subject$.next(true)),
      // Catch and handle errors
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
        // Handle and log errors using the _errorHandlingService
        this._errorHandlingService.handleError(error);
        // Return an empty observable to continue the stream
        return rxjs__WEBPACK_IMPORTED_MODULE_9__/* .EMPTY */ .w;
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Opens a modal popover for integration settings if the 'integration' object is defined.
     */
    openSettingModalPopover() {
      // Check if the 'integration' object is falsy and return early if it is
      if (!this.integration) {
        return;
      }
      // Open the modal popover (assuming `popups` is an array or collection of popovers)
      this.popups.first.toggle();
    }
    /**
     * Updates the selected issues based on the user's selection.
     * @param selected - An array of selected issues.
     */
    selectIssues({
      selected
    }) {
      this.selectedIssues = selected;
    }
    /**
     *
     */
    onChangeTab(tab) {
      this.nbTab$.next(tab.tabId);
    }
    /**
     * Check if there is a valid organization, repository, and project.
     * If valid, log the organization, repository, and project to the console.
     */
    autoSyncIssues() {
      try {
        // Ensure there is a valid organization, repository, and project
        if (!this.organization || !this.repository || !this.project) {
          return;
        }
        // Avoid running another synchronization if one is already in progress
        if (this.syncing) {
          return;
        }
        // Mark the synchronization as in progress
        this.syncing = this.loading = true;
        const {
          id: organizationId,
          tenantId
        } = this.organization;
        const {
          id: integrationId
        } = this.integration;
        const {
          id: projectId
        } = this.project;
        // Create a request object for syncing the GitHub repository
        const repositorySyncRequest = {
          organizationId,
          tenantId,
          integrationId,
          repository: this.repository
        };
        let repository;
        // Synchronize the GitHub repository and update project settings
        this._githubService.syncGithubRepository(repositorySyncRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(item => {
          repository = item;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__/* .mergeMap */ .Z)(({
          id: repositoryId
        }) => {
          const setting$ = this._organizationProjectsService.updateProjectSetting(projectId, {
            organizationId,
            tenantId,
            customFields: {
              repositoryId
            },
            syncTag: _gauzy_constants__WEBPACK_IMPORTED_MODULE_22__/* .SyncTags */ .R.GAUZY
          });
          const issues$ = this._githubService.autoSyncIssues(integrationId, repository, {
            projectId,
            organizationId,
            tenantId
          });
          return setting$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__/* .mergeMap */ .Z)(() => issues$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(process => {
            if (process) {
              this._toastrService.success(this.getTranslation('INTEGRATIONS.GITHUB_PAGE.SYNCED_ISSUES', {
                repository: this.repository.full_name
              }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
            }
            this.subject$.next(true);
          }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
          this._errorHandlingService.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_9__/* .EMPTY */ .w;
        }),
        // Execute the following code block when the observable completes or errors
        (0,rxjs__WEBPACK_IMPORTED_MODULE_23__/* .finalize */ .j)(() => {
          this.syncing = this.loading = false;
        }),
        // Automatically unsubscribe when the component is destroyed
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
      } catch (error) {
        // Handle errors (e.g., display an error message or log the error)
        console.error('Error while syncing GitHub issues automatically:', error.message);
        // Optionally, you can provide error feedback to the user
        this._errorHandlingService.handleError(error);
      }
    }
    /**
     * Initiates a manual synchronization process for GitHub issues.
     *
     * @returns
     */
    manualSyncIssues() {
      try {
        // Ensure there is a valid organization, repository, and project
        if (!this.organization || !this.repository || !this.project) {
          return;
        }
        // Avoid running another synchronization if one is already in progress
        if (this.syncing) {
          return;
        }
        // Mark the synchronization as in progress
        this.syncing = this.loading = true;
        const {
          id: organizationId,
          tenantId
        } = this.organization;
        const {
          id: integrationId
        } = this.integration;
        const {
          id: projectId
        } = this.project;
        // Create a request object for syncing the GitHub repository
        const repositorySyncRequest = {
          organizationId,
          tenantId,
          integrationId,
          repository: this.repository
        };
        let repository;
        // Synchronize the GitHub repository and update project settings
        this._githubService.syncGithubRepository(repositorySyncRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(item => repository = item), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__/* .mergeMap */ .Z)(({
          id: repositoryId
        }) => this._organizationProjectsService.updateProjectSetting(projectId, {
          organizationId,
          tenantId,
          customFields: {
            repositoryId
          },
          syncTag: _gauzy_constants__WEBPACK_IMPORTED_MODULE_22__/* .SyncTags */ .R.GAUZY
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__/* .mergeMap */ .Z)(() => this._githubService.manualSyncIssues(integrationId, repository, {
          projectId,
          organizationId,
          tenantId,
          issues: this.selectedIssues
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(response => {
          if (response['status'] == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_24__/* .HttpStatus */ .t.BAD_REQUEST) {
            throw new Error(`${response['message']}`);
          }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(process => {
          if (process) {
            this._toastrService.success(this.getTranslation('INTEGRATIONS.GITHUB_PAGE.SYNCED_ISSUES', {
              repository: this.repository.full_name
            }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
          }
          this.resetTableSelectedItems();
          this.getRepositoryIssue();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
          // Handle and log errors
          console.error('Error while syncing GitHub issues & labels manually:', error.message);
          this._errorHandlingService.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_9__/* .EMPTY */ .w;
        }),
        // Execute the following code block when the observable completes or errors
        (0,rxjs__WEBPACK_IMPORTED_MODULE_23__/* .finalize */ .j)(() => this.syncing = this.loading = false),
        // Automatically unsubscribe when the component is destroyed
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
      } catch (error) {
        // Handle errors (e.g., display an error message or log the error)
        console.error('Error while syncing GitHub issues & labels manually:', error.message);
        // Optionally, you can provide error feedback to the user
        this._errorHandlingService.handleError(error);
      }
    }
    /**
     *
     * @param project
     */
    resyncIssues(project) {
      try {
        // Ensure there is a valid organization, and project
        if (!this.organization || !project || !project?.customFields?.repository) {
          return;
        }
        this.loading = true;
        this.project = project;
        const {
          repository
        } = project.customFields;
        const {
          id: organizationId,
          tenantId
        } = this.organization;
        const {
          id: integrationId
        } = this.integration;
        const {
          id: projectId
        } = this.project;
        this._githubService.autoSyncIssues(integrationId, repository, {
          projectId,
          organizationId,
          tenantId
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(process => {
          if (process) {
            this._toastrService.success(this.getTranslation('INTEGRATIONS.GITHUB_PAGE.SYNCED_ISSUES', {
              repository: repository.fullName
            }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
          }
          this.subject$.next(true);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
          this._errorHandlingService.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_9__/* .EMPTY */ .w;
        }),
        // Execute the following code block when the observable completes or errors
        (0,rxjs__WEBPACK_IMPORTED_MODULE_23__/* .finalize */ .j)(() => {
          this.loading = false;
        }),
        // Automatically unsubscribe when the component is destroyed
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
      } catch (error) {
        // Handle errors (e.g., display an error message or log the error)
        console.log('Error while re-syncing issues from repository:', error.message);
        // Optionally, you can provide error feedback to the user
        this._errorHandlingService.handleError(error);
      }
    }
    /**
     * Clears selected items in the table component and resets the 'selectedIssues' array.
     */
    resetTableSelectedItems() {
      if (this._issuesTable && this._issuesTable.grid) {
        // Deselect all items in the table
        this._issuesTable.grid.dataSet.deselectAll();
        // Clear the 'selectedIssues' array
        this.selectedIssues = [];
      }
    }
    /**
     * Map the status of a GitHub repository to an object with text, value, and class properties.
     * @param row - An object representing the GitHub repository.
     * @returns An object with text, value, and class properties that describe the status.
     */
    statusMapper(row) {
      // If sync is not enabled, return a warning status
      if (!row.hasSyncEnabled) {
        return {
          text: this._titlecasePipe.transform(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_25__/* .GithubRepositoryStatusEnum */ .D.DISABLED),
          value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_25__/* .GithubRepositoryStatusEnum */ .D.DISABLED,
          class: 'warning'
        };
      }
      // Map status to badgeClass based on the status value
      let badgeClass;
      let value = row.status;
      switch (row.status) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_25__/* .GithubRepositoryStatusEnum */ .D.SYNCING:
          badgeClass = 'info';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_25__/* .GithubRepositoryStatusEnum */ .D.SUCCESSFULLY:
          badgeClass = 'success';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_25__/* .GithubRepositoryStatusEnum */ .D.ERROR:
          badgeClass = 'danger';
          break;
        default:
          badgeClass = 'warning';
          break;
      }
      // Return an object with the mapped status information
      return {
        text: this._titlecasePipe.transform(value),
        value: value,
        class: badgeClass
      };
    }
    /**
     * Get job status text and class
     *
     * @param status
     */
    getIssueStatus(state) {
      let badgeClass, badgeText;
      switch (state.toLowerCase()) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_26__/* .TaskStatusEnum */ .F.OPEN.toLowerCase():
          badgeClass = 'success';
          badgeText = this._titlecasePipe.transform(state);
          break;
        default:
          badgeClass = 'default';
          badgeText = state;
          break;
      }
      return {
        text: badgeText,
        class: badgeClass
      };
    }
    /**
     * Navigate to the "Integrations" page.
     */
    navigateToIntegrations() {
      this._router.navigate(['/pages/integrations']);
    }
    /**
     * Navigates to the 'Reset Integration' route within the GitHub integration setup wizard.
     */
    navigateToResetIntegration() {
      this._router.navigate(['/pages/integrations/github/setup/wizard/reset']);
    }
    static {
      this.ɵfac = function GithubViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GithubViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_27__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_27__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_29__/* .TitleCasePipe */ .PV), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__/* .HashNumberPipe */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__/* .GithubService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__/* .OrganizationProjectsService */ .d));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GithubViewComponent,
        selectors: [["ng-component"]],
        viewQuery: function GithubViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbPopoverDirective */ .vs7, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.popups = _t);
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([_angular_common__WEBPACK_IMPORTED_MODULE_29__/* .TitleCasePipe */ .PV]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 16,
        vars: 13,
        consts: [["settingsPopover", ""], ["ngxIntegrationSyncExcept", ""], ["ngxIntegrationSync", ""], ["issuesTable", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "card-scroll", 3, "nbSpinner"], [1, "card-header-title"], [1, "float-left", 3, "click", "haveLink"], [3, "ngxPermissionsOnly"], ["nbButton", "", "size", "small", 3, "click", "nbPopoverPlacement", "nbPopoverTrigger", "nbPopover"], ["icon", "settings-2-outline"], ["class", "p-0", 4, "ngIf"], ["nbButton", "", "status", "primary", "size", "small", 1, "mr-2", 3, "click"], [1, "sync-container"], ["icon", "sync-outline", 1, "sync"], [1, "p-0"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "mt-4", 3, "changeTab"], [3, "tabTitle", "active", "tabId"], [4, "ngIf"], [3, "tabTitle", "tabId"], [3, "ngIf"], [1, "row"], [1, "col-4"], ["id", "auto-repository", 3, "onChanged", "sourceId", "integration", "selected"], [1, "sync-arrow-right"], [1, "fas", "fa-arrow-right"], [3, "onChanged", "placeholder", "label", "defaultSelected", "showAllOption", "skipGlobalChange", "shortened"], [1, "sync-process-button"], ["nbButton", "", "status", "success", "size", "small", "debounceClick", "", 1, "mr-2", 3, "throttledClick", "disabled"], ["icon", "sync-outline", 1, "sync", 3, "ngClass"], [1, "table-scroll-container"], [1, "mb-2"], [1, "subtitle"], [2, "cursor", "pointer", 3, "settings", "source"], ["id", "manual-repository", 3, "onChanged", "sourceId", "integration", "selected"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [3, "selectedOption", "selectedPage", "doEmit", "totalItems", "itemsPerPage", "activePage"], [3, "canceled", "integration"]],
        template: function GithubViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "div", 5)(3, "h5")(4, "ngx-back-navigation", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GithubViewComponent_Template_ngx_back_navigation_click_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.navigateToIntegrations());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div")(8, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, GithubViewComponent_ng_template_9_Template, 5, 3, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GithubViewComponent_Template_button_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.openSettingModalPopover());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "nb-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, GithubViewComponent_nb_card_body_12_Template, 6, 3, "nb-card-body", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, GithubViewComponent_ng_template_14_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const settingsPopover_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("haveLink", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 8, "INTEGRATIONS.GITHUB_PAGE.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(12, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbPopoverPlacement", "bottom")("nbPopoverTrigger", "noop")("nbPopover", settingsPopover_r11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 10, ctx.integration$));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbPopoverDirective */ .vs7, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbTabsetComponent */ .Hsi, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbTabComponent */ .d3K, ngx_permissions__WEBPACK_IMPORTED_MODULE_37__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .NgIf */ .bT, _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_38__/* .BackNavigationComponent */ .r, _ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_39__/* .DebounceClickDirective */ .J, angular2_smart_table__WEBPACK_IMPORTED_MODULE_40__/* .Angular2SmartTableComponent */ .T9, _ui_core_shared_src_lib_smart_data_layout_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_41__/* .PaginationComponent */ .e, _ui_core_shared_src_lib_integrations_github_repository_selector_repository_selector_component__WEBPACK_IMPORTED_MODULE_42__/* .RepositorySelectorComponent */ .J, _ui_core_shared_src_lib_selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_43__/* .ProjectSelectorComponent */ .a, _settings_settings_component__WEBPACK_IMPORTED_MODULE_44__/* .GithubSettingsComponent */ .g, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .AsyncPipe */ .Jj],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .sync-arrow-right[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 40px;\n}\n[_nghost-%COMP%]   .sync-process-button[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n\n  .table-scroll-container input[type=checkbox] {\n  box-shadow: none !important;\n  height: auto !important;\n}"]
      });
    }
  };
  GithubViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_45__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_45__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_27__/* .Router */ .Ix, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_27__/* .ActivatedRoute */ .nX, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .TitleCasePipe */ .PV, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__/* .HashNumberPipe */ .q, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__/* .GithubService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__/* .OrganizationProjectsService */ .d])], GithubViewComponent);
  return GithubViewComponent;
})();


/***/ }),

/***/ 59208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72834);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84705);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69933);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ 62388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* unused harmony export OperatorSubscriber */
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11610);

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
class OperatorSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__/* .Subscriber */ .vU {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed
      } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  }
}
//# sourceMappingURL=OperatorSubscriber.js.map

/***/ }),

/***/ 63408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ finalize)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48170);

function finalize(callback) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ 63723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
//# sourceMappingURL=throwUnobservableError.js.map

/***/ }),

/***/ 64064:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AQ: () => (/* binding */ __asyncGenerator),
/* harmony export */   Cg: () => (/* binding */ __decorate),
/* harmony export */   N3: () => (/* binding */ __await),
/* harmony export */   Sn: () => (/* binding */ __metadata),
/* harmony export */   sH: () => (/* binding */ __awaiter),
/* harmony export */   xN: () => (/* binding */ __asyncValues)
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __asyncDelegator, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ 67186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48170);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62388);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72834);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52787);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 68725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ 69933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48170);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ 70354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=intervalProvider.js.map

/***/ }),

/***/ 70439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* unused harmony export pipe */
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93177);

function pipe(...fns) {
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .D;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 70675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ GithubSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35809);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22611);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9710);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63408);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13305);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34576);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98035);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18548);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97121);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90805);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14572);















function GithubSettingsComponent_div_10_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 14)(2, "nb-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("checkedChange", function GithubSettingsComponent_div_10_ng_container_1_ng_container_4_Template_nb_toggle_checkedChange_2_listener($event) {
      const tiedEntity_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(tiedEntity_r4.sync, $event) || (tiedEntity_r4.sync = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const tiedEntity_r4 = ctx.$implicit;
    const entity_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("checked", tiedEntity_r4.sync);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !entity_r2.sync);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", tiedEntity_r4.entity, " ");
  }
}
function GithubSettingsComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "nb-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("checkedChange", function GithubSettingsComponent_div_10_ng_container_1_Template_nb_toggle_checkedChange_1_listener($event) {
      const entity_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(entity_r2.sync, $event) || (entity_r2.sync = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, GithubSettingsComponent_div_10_ng_container_1_ng_container_4_Template, 4, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const entity_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("checked", entity_r2.sync);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", entity_r2.entity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", entity_r2.tiedEntities);
  }
}
function GithubSettingsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, GithubSettingsComponent_div_10_ng_container_1_Template, 5, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const entitiesToSync_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", entitiesToSync_r5.currentValue);
  }
}
let GithubSettingsComponent = /*#__PURE__*/(() => {
  let GithubSettingsComponent = class GithubSettingsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    // Define a getter to retrieve the integration tenant
    get integration() {
      return this._integration;
    }
    // Define an @Input setter to set the integration tenant from external sources
    set integration(value) {
      // Set the private integration tenant property when the value is provided
      this._integration = value;
    }
    constructor(_translateService, _cdRef, _toastrService, _errorHandlingService, _integrationEntitySettingService, _integrationEntitySettingServiceStoreService) {
      super(_translateService);
      this._translateService = _translateService;
      this._cdRef = _cdRef;
      this._toastrService = _toastrService;
      this._errorHandlingService = _errorHandlingService;
      this._integrationEntitySettingService = _integrationEntitySettingService;
      this._integrationEntitySettingServiceStoreService = _integrationEntitySettingServiceStoreService;
      // Define a public property 'IntegrationEntity' that appears to be an enum.
      this.IntegrationEntity = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .IntegrationEntity */ .c2;
      // Define a public property 'entitiesToSync$' of type Observable<IEntitySettingToSync>.
      // It's initialized with a property from '_integrationsService', possibly an observable.
      this.entitiesToSync$ = this._integrationEntitySettingServiceStoreService.entitiesToSync$;
      /**
       *
       */
      this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      this.getEntitySettings();
    }
    ngAfterViewInit() {
      // Trigger change detection to update the view
      this._cdRef.detectChanges();
    }
    /**
     * Fetch entity settings for a given integration.
     */
    getEntitySettings() {
      // Check if the 'integration' object is falsy and return early if it is
      if (!this.integration) {
        return;
      }
      // Set the 'loading' flag to true to indicate that data is being loaded
      this.loading = true;
      // Extract the 'id' property from the 'integration' object
      const {
        id: integrationId
      } = this.integration;
      // Fetch entity settings by integration ID and handle the result as an observable
      this._integrationEntitySettingService.getEntitySettings(integrationId).pipe(
      // Map the result to the desired format using '_setSettingsValue' function
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .map */ .T)(({
        items
      }) => this._integrationEntitySettingServiceStoreService.setEntitySettingsValue(items)),
      // Execute the following code block when the observable completes or errors
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .finalize */ .j)(() => this.loading = false),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Saves the integration settings if the 'integration' object is defined.
     *
     * @returns
     */
    saveIntegrationSettings() {
      // Check if the 'integration' object is falsy and return early if it is
      if (!this.integration) {
        return;
      }
      // Extract the 'id' property from the 'integration' object
      const {
        id: integrationId
      } = this.integration;
      // Use try-catch for better error handling
      try {
        // Retrieve the current settings from the service
        const {
          currentValue: settings
        } = this._integrationEntitySettingServiceStoreService.getEntitySettingsValue();
        // Set the 'loading' flag to true to indicate that data is being loaded
        this.loading = true;
        // Update entity settings if needed
        this._integrationEntitySettingService.updateEntitySettings(integrationId, settings).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(response => {
          if (response['status'] == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .HttpStatus */ .t.BAD_REQUEST) {
            throw new Error(`${response['message']}`);
          }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => {
          // Display a success message
          this._toastrService.success(this.getTranslation('INTEGRATIONS.MESSAGE.SETTINGS_UPDATED', {
            provider: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .IntegrationEnum */ .I5.GITHUB
          }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .catchError */ .W)(error => {
          this._errorHandlingService.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_9__/* .EMPTY */ .w;
        }),
        // Execute the following code block when the observable completes or errors
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .finalize */ .j)(() => this.loading = false),
        // Automatically unsubscribe when the component is destroyed
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
        // Optionally, you can provide feedback or handle success here
      } catch (error) {
        // Handle errors (e.g., display an error message or log the error)
        console.error('Error updating entity settings:', error);
        // Optionally, you can provide error feedback to the user
        this._errorHandlingService.handleError(error);
      }
    }
    /**
     *
     */
    cancel($event) {
      this.canceled.emit($event);
    }
    static {
      this.ɵfac = function GithubSettingsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GithubSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .IntegrationEntitySettingService */ .P), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .IntegrationEntitySettingServiceStoreService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GithubSettingsComponent,
        selectors: [["ngx-github-settings"]],
        inputs: {
          integration: "integration"
        },
        outputs: {
          canceled: "canceled"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 16,
        vars: 10,
        consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "small", 3, "nbSpinner"], [1, "popover-container"], [1, "d-flex", "justify-content-end", "w-100"], [1, "cursor", 3, "click"], [1, "fas", "fa-times"], [1, "d-flex", "justify-content-start", "w-100", "mb-2"], [1, "title"], [1, "d-flex", "justify-content-start", "w-100"], ["class", "switcher-wrapper", 4, "ngIf"], ["nbButton", "", "status", "primary", 1, "mr-2", 3, "click"], [1, "switcher-wrapper"], [4, "ngFor", "ngForOf"], ["labelPosition", "start", "status", "basic", 3, "checkedChange", "checked"], [1, "tied-entities-wrapper"], [1, "tied-entity"], ["labelPosition", "start", "status", "basic", 3, "checkedChange", "checked", "disabled"]],
        template: function GithubSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GithubSettingsComponent_Template_span_click_3_listener($event) {
              return ctx.cancel($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 5)(6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, GithubSettingsComponent_div_10_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 2)(13, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GithubSettingsComponent_Template_button_click_13_listener() {
              return ctx.saveIntegrationSettings();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 4, "INTEGRATIONS.SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 6, ctx.entitiesToSync$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 8, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbToggleComponent */ .YF2, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .AsyncPipe */ .Jj],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  align-items: flex-start;\n  padding: 12.5px 14px 12.5px 18px;\n  border-radius: var(--border-radius);\n  width: 250px;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .switcher-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .switcher-wrapper[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .switcher-wrapper[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]     .toggle-label {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n[_nghost-%COMP%]   .popover-container[_ngcontent-%COMP%]   .switcher-wrapper[_ngcontent-%COMP%]   .tied-entities-wrapper[_ngcontent-%COMP%]   .tied-entity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}"]
      });
    }
  };
  GithubSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .IntegrationEntitySettingService */ .P, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .IntegrationEntitySettingServiceStoreService */ .t])], GithubSettingsComponent);
  return GithubSettingsComponent;
})();


/***/ }),

/***/ 72834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tg: () => (/* binding */ innerFrom)
/* harmony export */ });
/* unused harmony exports fromInteropObservable, fromArrayLike, fromPromise, fromIterable, fromAsyncIterable, fromReadableStreamLike */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64064);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68725);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30478);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40173);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39643);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4989);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63723);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47969);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94336);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47971);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22546);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22666);












function innerFrom(input) {
  if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c) {
    return input;
  }
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__/* .isInteropObservable */ .l)(input)) {
      return fromInteropObservable(input);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__/* .isArrayLike */ .X)(input)) {
      return fromArrayLike(input);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__/* .isPromise */ .y)(input)) {
      return fromPromise(input);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__/* .isAsyncIterable */ .T)(input)) {
      return fromAsyncIterable(input);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__/* .isIterable */ .x)(input)) {
      return fromIterable(input);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__/* .isReadableStreamLike */ .U)(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__/* .createInvalidObservableTypeError */ .L)(input);
}
function fromInteropObservable(obj) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__/* .observable */ .s]();
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__/* .isFunction */ .T)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => {
    promise.then(value => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, err => subscriber.error(err)).then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__/* .reportUnhandledError */ .m);
  });
}
function fromIterable(iterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => {
    process(asyncIterable, subscriber).catch(err => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__/* .readableStreamLikeToAsyncGenerator */ .C)(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a;
  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__awaiter */ .sH)(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__asyncValues */ .xN)(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done;) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
//# sourceMappingURL=innerFrom.js.map

/***/ }),

/***/ 75571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82393);

const UnsubscriptionError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 77076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ GITHUB_AUTHORIZATION_URL)
/* harmony export */ });
const GITHUB_AUTHORIZATION_URL = 'https://github.com/login/oauth/authorize';

/***/ }),

/***/ 77496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ GithubWizardComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64064);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34360);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13305);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91292);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34576);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _github_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);














function GithubWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2, "Installing. Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
}
let GithubWizardComponent = /*#__PURE__*/(() => {
  let GithubWizardComponent = class GithubWizardComponent {
    /**
     * Event listener function for handling the 'window:onSuccess' custom event.
     * This function is triggered when a custom event named 'window:onSuccess' occurs,
     * typically in response to a specific user action or external event.
     *
     * @param event - The event object containing information about the custom event.
     */
    onSuccessEvent(event) {
      // Handle the custom event data here
      // Set the isLoading property to false, indicating that the loading is complete
      this.loading = false;
      // Delay the navigation to a specific URL by 100 milliseconds before redirecting
      // This is often used to provide a smoother user experience
      this.timer = setTimeout(() => {
        // Redirect the user to a specific URL, typically related to a successful operation
        this._router.navigate(['/pages/integrations/github/', event.detail.id]);
      }, 100); // 100 milliseconds
    }
    constructor(_activatedRoute, _router, _store) {
      this._activatedRoute = _activatedRoute;
      this._router = _router;
      this._store = _store;
      this.loading = true;
      // save a reference to the window so we can close it
      this.window = null;
    }
    /**
     * This method is part of the Angular lifecycle and is called when the component is initialized.
     * It sets up an observable subscription to listen for data from the ActivatedRoute.
     * When data is received, it checks if there is an 'integration' object in the data.
     * If 'integration' data is present, it redirects the user to a specific URL related to that integration.
     */
    ngOnInit() {
      this._activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(({
        integration
      }) => !!integration),
      // Use the 'tap' operator to perform side effects when data is emitted
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        integration
      }) => {
        // Check if 'integration' data is present in the emitted data
        if (integration) {
          // Redirect the user to a specific URL related to the integration
          this._router.navigate(['/pages/integrations/github', integration.id]);
        }
      }),
      // Use the 'untilDestroyed' operator to automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this))
      // Subscribe to the observable to start listening for data
      .subscribe();
    }
    /**
     * This method is part of the Angular lifecycle and is called after the component's view has been initialized.
     * It sets up an observable subscription to listen for changes in the selected organization.
     * When the selected organization changes, it performs the following actions:
     * 1. Debounces the changes to avoid excessive updates (waits for 200 milliseconds of inactivity).
     * 2. Ensures that the organization is valid (truthy) before proceeding.
     * 3. Sets the 'organization' property to the selected organization.
     * 4. Calls the 'startGitHubAppInstallation' method.
     * 5. Uses the 'untilDestroyed' operator to automatically unsubscribe when the component is destroyed.
     */
    ngAfterViewInit() {
      this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(),
      // Debounce changes to avoid excessive updates (waits for 200 milliseconds of inactivity)
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(200),
      // Ensure that the organization is valid (truthy) before proceeding
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(organization => !!organization),
      // Set the 'organization' property to the selected organization
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(organization => this.organization = organization),
      // Call the 'startGitHubAppInstallation' method
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.startGitHubAppInstallation()),
      // Use the 'untilDestroyed' operator to automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this))
      // Subscribe to the observable to start listening for changes in the selected organization
      .subscribe();
    }
    /**
     * Initiate OAuth authorization for a GitHub application.
     * Redirect the user to GitHub's authorization endpoint.
     */
    oAuthAppAuthorization() {
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        // Get the redirect URI, Post Install URL and client ID from the environment
        const redirect_uri = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__/* .environment */ .c.GAUZY_GITHUB_REDIRECT_URL;
        const client_id = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__/* .environment */ .c.GAUZY_GITHUB_CLIENT_ID;
        const post_install_url = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__/* .environment */ .c.GAUZY_GITHUB_POST_INSTALL_URL;
        // Define the query parameters for the authorization request
        const queryParams = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .toParams */ .SV)({
          redirect_uri: `${redirect_uri}`,
          client_id: `${client_id}`,
          scope: 'user',
          state: `${post_install_url}`
        });
        // Construct the external URL for GitHub authorization with the query parameters
        const externalUrl = `${_github_config__WEBPACK_IMPORTED_MODULE_8__/* .GITHUB_AUTHORIZATION_URL */ .o}?${queryParams.toString()}`;
        console.log('External Github OAuth App URL: %s', externalUrl);
        // Redirect the user's browser to the GitHub authorization URL
        // This action starts the GitHub OAuth authorization process
        window.location.replace(externalUrl);
      })();
    }
    /**
     * Start the installation process of a GitHub application.
     * This method manages the behavior of a popup window used for the installation.
     */
    startGitHubAppInstallation() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this.organization) {
          // If there is no selected organization, return early
          return;
        }
        try {
          if (!_this.window || _this.window.closed) {
            // If no window is open or the existing window is closed, open a new one
            _this.openGitHubAppPopup();
          } else {
            // If a window is already open, you can handle it here (e.g., focus or bring it to the front)
            _this.focusGitHubAppPopup();
          }
          // Check the status of the popup window
          _this.checkPopupWindowStatus();
        } catch (error) {
          // Handle any errors that may occur during the setup of GitHub integration
          console.log('Error while setting up GitHub integration: %s', error?.message);
        }
      })();
    }
    /**
     * Focus on an existing GitHub application popup window.
     * This method is used when a popup window is already open and needs to be brought to the foreground.
     */
    focusGitHubAppPopup() {
      // Focus on the existing popup window
      this.window.focus();
    }
    /**
     * Open a new popup window for GitHub application installation.
     */
    openGitHubAppPopup() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
          return;
        }
        // Specify the width and height for the popup window
        const width = 600,
          height = 600;
        // Calculate the left and top positions for the popup window
        const left = window.innerWidth - width; // Adjust the left position to place it on the right side
        const top = window.innerHeight / 2 - height / 2;
        // Specify a unique window name to identify the window
        const windowName = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__/* .environment */ .c.GAUZY_GITHUB_APP_NAME;
        // Check if a window with the same name is already open
        if (window.frames[windowName] && !window.frames[windowName].closed) {
          // A window with the same name is already open, so focus on it
          window.frames[windowName].focus();
        } else {
          // Destructure environment variables for better readability
          const {
            GAUZY_GITHUB_APP_NAME,
            GAUZY_GITHUB_REDIRECT_URL,
            GAUZY_GITHUB_POST_INSTALL_URL
          } = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_7__/* .environment */ .c;
          // Get the redirect URI, Post Install URL from the environment
          const redirect_uri = GAUZY_GITHUB_REDIRECT_URL;
          // const client_id = environment.GAUZY_GITHUB_CLIENT_ID;
          const postInstallURL = GAUZY_GITHUB_POST_INSTALL_URL;
          // Define the query parameters for the authorization request
          const queryParams = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .toParams */ .SV)({
            redirect_uri: `${redirect_uri}`,
            state: `${postInstallURL}`
          });
          // Construct the external URL for GitHub authorization with the query parameters
          /** Navigate to the target external URL */
          const url = `https://github.com/apps/${GAUZY_GITHUB_APP_NAME}/installations/new?${queryParams.toString()}`;
          console.log('External Github App Installation URL: %s', url);
          /** Navigate to the external URL with query parameters */
          _this2.window = window.open(url, windowName, `width=${width},height=${height},top=${top},left=${left},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`);
        }
      })();
    }
    /**
     * Continuously check the status of a popup window.
     * When the window is closed, take appropriate actions.
     */
    checkPopupWindowStatus() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const timer = setInterval(() => {
          if (!_this3.timer) {
            if (_this3.window == null || _this3.window.closed) {
              clearInterval(timer); // Stop checking when the window is closed
              // Call a method to handle the closed popup window
              _this3.handleClosedPopupWindow();
            }
          }
        }, 500); // Check every 500 milliseconds (adjust the interval as needed)
      })();
    }
    /**
     *  Handle the case when the popup window is closed.
     *
     * @param ms The delay in milliseconds before redirecting. Default is 200 milliseconds.
     */
    handleClosedPopupWindow(ms = 200) {
      // Set isLoading to false to indicate that loading has completed
      this.loading = false;
      // Delay navigation by 'ms' milliseconds before redirecting
      setTimeout(() => {
        const data = this._activatedRoute.snapshot.data;
        if (data['redirectTo']) {
          this._router.navigate([data['redirectTo']]);
          return;
        }
        // Navigate to a specific route, e.g., '/pages/integrations'
        this._router.navigate(['/pages/integrations']);
      }, ms); // Delay for 'ms' milliseconds before redirecting
    }
    /**
     * Angular lifecycle hook called when the component is destroyed.
     * Clear the timeout when the component is destroyed to prevent memory leaks.
     */
    ngOnDestroy() {
      // Clear the timeout (if it exists) when the component is destroyed
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
    static {
      this.ɵfac = function GithubWizardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GithubWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GithubWizardComponent,
        selectors: [["ngx-integration-github-wizard"]],
        hostBindings: function GithubWizardComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSuccess", function GithubWizardComponent_onSuccess_HostBindingHandler($event) {
              return ctx.onSuccessEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresolveWindow"] */ .tSv);
          }
        },
        standalone: false,
        decls: 4,
        vars: 1,
        consts: [[1, "card-scroll"], [1, "d-flex"], [3, "ngIf"], [1, "flex-col", "items-center", "justify-center"], [1, ""]],
        template: function GithubWizardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-card-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, GithubWizardComponent_ng_template_3_Template, 3, 0, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.loading);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardHeaderComponent */ .zJv, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgIf */ .bT],
        encapsulation: 2
      });
    }
  };
  GithubWizardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il])], GithubWizardComponent);
  return GithubWizardComponent;
})();


/***/ }),

/***/ 77793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GITHUB_AUTHORIZATION_URL: () => (/* reexport safe */ _lib_github_config__WEBPACK_IMPORTED_MODULE_1__.o),
/* harmony export */   GithubInstallationComponent: () => (/* reexport safe */ _lib_components_installation_installation_component__WEBPACK_IMPORTED_MODULE_2__.v),
/* harmony export */   GithubSettingsComponent: () => (/* reexport safe */ _lib_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__.g),
/* harmony export */   GithubViewComponent: () => (/* reexport safe */ _lib_components_view_view_component__WEBPACK_IMPORTED_MODULE_4__.K),
/* harmony export */   GithubWizardComponent: () => (/* reexport safe */ _lib_components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__.G),
/* harmony export */   IntegrationGithubUiModule: () => (/* reexport safe */ _lib_integration_github_ui_module__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   SyncTabsEnum: () => (/* reexport safe */ _lib_components_view_view_component__WEBPACK_IMPORTED_MODULE_4__.h)
/* harmony export */ });
/* harmony import */ var _lib_integration_github_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29177);
/* harmony import */ var _lib_github_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77076);
/* harmony import */ var _lib_components_installation_installation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83398);
/* harmony import */ var _lib_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70675);
/* harmony import */ var _lib_components_view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55552);
/* harmony import */ var _lib_components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77496);
/**
 * Public API Surface of @gauzy/plugin-integration-github-ui
 */







/***/ }),

/***/ 79454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ errorContext),
/* harmony export */   l: () => (/* binding */ captureError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50166);

let context = null;
function errorContext(cb) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .$.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      const {
        errorThrown,
        error
      } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .$.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}
//# sourceMappingURL=errorContext.js.map

/***/ }),

/***/ 79459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40173);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14869);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47971);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89965);




function scheduleIterable(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => {
    let iterator;
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__/* .executeSchedule */ .N)(subscriber, scheduler, () => {
      iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__/* .iterator */ .l]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__/* .executeSchedule */ .N)(subscriber, scheduler, () => {
        let value;
        let done;
        try {
          ({
            value,
            done
          } = iterator.next());
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return () => (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .T)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
  });
}
//# sourceMappingURL=scheduleIterable.js.map

/***/ }),

/***/ 82393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
  const _super = instance => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map

/***/ }),

/***/ 83355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ IntegrationGithubRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98035);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16283);
/* harmony import */ var _components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77496);
/* harmony import */ var _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83398);
/* harmony import */ var _integration_github_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24646);
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);









let IntegrationGithubRoutes = /*#__PURE__*/(() => {
  class IntegrationGithubRoutes {
    static {
      this.ɵfac = function IntegrationGithubRoutes_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationGithubRoutes)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: IntegrationGithubRoutes
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterModule */ .iI.forChild([{
          path: '',
          component: _integration_github_layout_component__WEBPACK_IMPORTED_MODULE_2__/* .IntegrationGithubLayoutComponent */ .z,
          canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .a],
          data: {
            permissions: {
              only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.INTEGRATION_ADD],
              redirectTo: '/pages/dashboard'
            },
            integration: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .IntegrationEnum */ .I5.GITHUB
          },
          resolve: {
            integration: _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .IntegrationResolver */ .J
          },
          runGuardsAndResolvers: 'always',
          children: [{
            path: ':integrationId',
            component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_7__/* .GithubViewComponent */ .K,
            data: {
              selectors: false
            }
          }, {
            path: 'setup/wizard',
            component: _components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_8__/* .GithubWizardComponent */ .G
          }]
        }, {
          path: 'setup/wizard/reset',
          component: _components_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_8__/* .GithubWizardComponent */ .G,
          data: {
            selectors: false,
            redirectTo: '/pages/integrations/github/setup/wizard'
          }
        }, {
          path: 'setup/installation',
          component: _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_9__/* .GithubInstallationComponent */ .v
        }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterModule */ .iI]
      });
    }
  }
  return IntegrationGithubRoutes;
})();

/***/ }),

/***/ 83398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ GithubInstallationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64064);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34360);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13305);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34576);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34060);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14572);











function GithubInstallationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2, "Installing. Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
}
let GithubInstallationComponent = /*#__PURE__*/(() => {
  let GithubInstallationComponent = class GithubInstallationComponent {
    constructor(_route, _githubService, _store) {
      this._route = _route;
      this._githubService = _githubService;
      this._store = _store;
      this.isLoading = true;
    }
    /**
     * Initialize the component when it is created.
     * This method sets up an observable subscription to listen for query parameters in the URL.
     */
    ngOnInit() {
      var _this = this;
      this._route.queryParams.pipe(
      // Filter and keep only valid queryParams with 'installation_id' and 'setup_action'
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(({
        installation_id,
        setup_action
      }) => !!installation_id && !!setup_action), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.organization = this._store.selectedOrganization),
      // Use 'tap' operator to perform an asynchronous action
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* ({
          installation_id,
          setup_action,
          state
        }) {
          return yield _this.verifyGitHubAppAuthorization({
            installation_id,
            setup_action,
            state
          });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()),
      // Use 'untilDestroyed' operator to automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this))
      // Subscribe to the observable to start listening for query parameters
      .subscribe();
    }
    /**
     *
     */
    ngAfterViewInit() {}
    /**
     * Verify GitHub application authorization and perform actions based on input parameters.
     *
     * @param input - An object containing input parameters, including 'installation_id', 'setup_action', and 'state'.
     */
    verifyGitHubAppAuthorization(input) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
          return;
        }
        // Split the 'state' parameter to extract 'organizationId' and 'tenantId'
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const {
          installation_id,
          setup_action
        } = input;
        // Check if all required parameters are provided
        if (installation_id && setup_action) {
          try {
            // Call a service method (likely from _githubService) to add the installation app
            const integration = yield _this2._githubService.addInstallationApp({
              installation_id,
              setup_action,
              organizationId,
              tenantId
            });
            // Simulate a success scenario, possibly updating the UI or performing other actions
            _this2.simulateSuccess(integration);
          } catch (error) {
            // Handle errors, such as failed GitHub app installation
            console.log('Error while failed to install GitHub app: %s', installation_id);
            // Simulate an error scenario, possibly displaying an error message or taking corrective actions
            _this2.simulateError();
          }
        }
      })();
    }
    /**
     * Simulate a successful scenario after GitHub app installation.
     *
     * @param integration - An object containing integration data.
     */
    simulateSuccess(integration) {
      // Create a custom success event with data
      const event = new CustomEvent('onSuccess', {
        detail: {
          ...integration
        }
      });
      // Dispatch the success event to the parent window
      window.opener.dispatchEvent(event);
      // Log a message indicating that the popup window is closed after GitHub app installation
      console.log('Popup window closed after GitHub app installed!');
      // Delay navigation by 2 seconds before closing the window
      this.handleClosedPopupWindow(2000); // 2000 milliseconds (2 seconds)
    }
    /**
     * Simulate an error scenario after failing to install the GitHub app.
     */
    simulateError() {
      // Create a custom error event with data (in this case, 'false' indicating an error)
      const event = new CustomEvent('onError', {
        detail: false
      });
      // Set isLoading to false to indicate that loading has completed
      this.isLoading = false;
      // Dispatch the error event to the parent window
      window.opener.dispatchEvent(event);
      // Log a message indicating that the popup window is closed after failing to install the GitHub app
      console.log('Popup window closed after failed to install GitHub app!');
      // Delay navigation by 2 seconds before closing the window
      this.handleClosedPopupWindow(2000); // 2000 milliseconds (2 seconds)
    }
    /**
     * Handle the case when the popup window is closed.
     *
     * @param ms - Optional delay in milliseconds before closing the window (default: 500 milliseconds)
     */
    handleClosedPopupWindow(ms = 500) {
      // Set isLoading to false to indicate that loading has completed
      this.isLoading = false;
      // Delay navigation by 'ms' milliseconds before closing the window
      setTimeout(() => {
        // Close the current window
        window.open('', '_self');
        window.close();
      }, ms); // Delay for 'ms' milliseconds before closing the window
    }
    static {
      this.ɵfac = function GithubInstallationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GithubInstallationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .GithubService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GithubInstallationComponent,
        selectors: [["ngx-integration-github-installation"]],
        standalone: false,
        decls: 4,
        vars: 1,
        consts: [[1, "card-scroll"], [1, "d-flex"], [3, "ngIf"], [1, "flex-col", "items-center", "justify-center"], [1, ""]],
        template: function GithubInstallationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-card-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, GithubInstallationComponent_ng_template_3_Template, 3, 0, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isLoading);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardHeaderComponent */ .zJv, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .bT],
        encapsulation: 2
      });
    }
  };
  GithubInstallationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .GithubService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il])], GithubInstallationComponent);
  return GithubInstallationComponent;
})();


/***/ }),

/***/ 84705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89965);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48170);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62388);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 89032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9710);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72834);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48170);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46088);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47971);





function mergeMap(project, resultSelector, concurrent = Infinity) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(resultSelector)) {
    return mergeMap((a, i) => (0,_map__WEBPACK_IMPORTED_MODULE_1__/* .map */ .T)((b, ii) => resultSelector(a, b, i, ii))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(project(a, i))), concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__/* .operate */ .N)((source, subscriber) => (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_4__/* .mergeInternals */ .h)(source, subscriber, project, concurrent));
}
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ 89965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ executeSchedule)
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function () {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}
//# sourceMappingURL=executeSchedule.js.map

/***/ }),

/***/ 90475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ StatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);


let StatusBadgeComponent = /*#__PURE__*/(() => {
  class StatusBadgeComponent {
    constructor() {}
    ngOnInit() {
      if (this.value && this.value.text) {
        if (this.layout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          if (typeof this.value === 'object') {
            this.text = this.value['text'];
            this.badgeClass = 'badge badge-' + this.value['class'];
          } else {
            this.text = this.value;
          }
        } else {
          this.text = this.value['text'];
          this.badgeClass = 'badge badge-' + this.value['class'];
        }
      }
    }
    static {
      this.ɵfac = function StatusBadgeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || StatusBadgeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: StatusBadgeComponent,
        selectors: [["ga-status-badge"]],
        inputs: {
          value: "value",
          layout: "layout"
        },
        standalone: false,
        decls: 1,
        vars: 3,
        consts: [[3, "innerHtml"]],
        template: function StatusBadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassMap"] */ .HbH(ctx.badgeClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", ctx.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
          }
        },
        styles: ["div[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  align-content: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 23px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"]
      });
    }
  }
  return StatusBadgeComponent;
})();

/***/ }),

/***/ 91045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ TagsOnlyComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71466);






function TagsOnlyComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.value == null ? null : ctx_r0.value.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function TagsOnlyComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.value == null ? null : ctx_r0.value.name);
  }
}
function TagsOnlyComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.value == null ? null : ctx_r0.value.level);
  }
}
function TagsOnlyComponent_ng_template_5_nb_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 6);
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(tag_r2 == null ? null : tag_r2.color))("color", ctx_r0.backgroundContrast(tag_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("text", tag_r2.name);
  }
}
function TagsOnlyComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TagsOnlyComponent_ng_template_5_nb_badge_0_Template, 1, 5, "nb-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r0.data)) == null ? null : tmp_1_0.labels);
  }
}
function TagsOnlyComponent_ng_template_7_nb_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 6);
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(tag_r3 == null ? null : tag_r3.color))("color", ctx_r0.backgroundContrast(tag_r3.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("text", tag_r3.name);
  }
}
function TagsOnlyComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TagsOnlyComponent_ng_template_7_nb_badge_0_Template, 1, 5, "nb-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r0.data)) == null ? null : tmp_1_0.tags);
  }
}
let TagsOnlyComponent = /*#__PURE__*/(() => {
  class TagsOnlyComponent extends _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_1__/* .NotesWithTagsComponent */ .i {
    constructor() {
      super(...arguments);
      this.ComponentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
    }
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵTagsOnlyComponent_BaseFactory;
        return function TagsOnlyComponent_Factory(__ngFactoryType__) {
          return (ɵTagsOnlyComponent_BaseFactory || (ɵTagsOnlyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(TagsOnlyComponent)))(__ngFactoryType__ || TagsOnlyComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TagsOnlyComponent,
        selectors: [["ga-only-tags"]],
        inputs: {
          value: "value"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 9,
        vars: 11,
        consts: [[3, "ngClass"], [4, "ngIf"], [1, "tags", "mt-2", 3, "ngClass"], [3, "ngIf"], ["height", "30", "width", "50", "alt", "Avatar", 1, "avatar", 3, "src"], ["class", "color", "position", "centered", 3, "background", "color", "text", 4, "ngFor", "ngForOf"], ["position", "centered", 1, "color", 3, "text"]],
        template: function TagsOnlyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, TagsOnlyComponent_div_1_Template, 2, 1, "div", 1)(2, TagsOnlyComponent_div_2_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, TagsOnlyComponent_div_3_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, TagsOnlyComponent_ng_template_5_Template, 2, 3, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, TagsOnlyComponent_ng_template_7_Template, 2, 3, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            let tmp_5_0;
            let tmp_6_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.layout === ctx.ComponentLayoutStyleEnum.CARDS_GRID ? "contacts-img" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.imageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.level);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.layout === "CARDS_GRID" ? "tags-right" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 7, ctx.data)) == null ? null : tmp_5_0.labels == null ? null : tmp_5_0.labels.length) > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 9, ctx.data)) == null ? null : tmp_6_0.tags == null ? null : tmp_6_0.tags.length) > 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbBadgeComponent */ .XyX, _directives_img_directive__WEBPACK_IMPORTED_MODULE_5__/* .ImgDirective */ .z, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .AsyncPipe */ .Jj],
        styles: [".color[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: 5px;\n  margin-right: 5px;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  padding: 3px 8px;\n}\n\n.tags[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.tags-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n\n.contacts-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}"]
      });
    }
  }
  return TagsOnlyComponent;
})();

/***/ }),

/***/ 91292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21928);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48170);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62388);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .E) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 93177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 94078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29071);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94336);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__/* .scheduleAsyncIterable */ .M)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__/* .readableStreamLikeToAsyncGenerator */ .C)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ }),

/***/ 94166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Subject)
/* harmony export */ });
/* unused harmony export AnonymousSubject */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40173);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54509);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23729);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30208);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79454);





let Subject = /*#__PURE__*/(() => {
  class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c {
    constructor() {
      super();
      this.closed = false;
      this.currentObservers = null;
      this.observers = [];
      this.isStopped = false;
      this.hasError = false;
      this.thrownError = null;
    }
    lift(operator) {
      const subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    }
    _throwIfClosed() {
      if (this.closed) {
        throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUnsubscribedError */ .P();
      }
    }
    next(value) {
      (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__/* .errorContext */ .Y)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          if (!this.currentObservers) {
            this.currentObservers = Array.from(this.observers);
          }
          for (const observer of this.currentObservers) {
            observer.next(value);
          }
        }
      });
    }
    error(err) {
      (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__/* .errorContext */ .Y)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.hasError = this.isStopped = true;
          this.thrownError = err;
          const {
            observers
          } = this;
          while (observers.length) {
            observers.shift().error(err);
          }
        }
      });
    }
    complete() {
      (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__/* .errorContext */ .Y)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.isStopped = true;
          const {
            observers
          } = this;
          while (observers.length) {
            observers.shift().complete();
          }
        }
      });
    }
    unsubscribe() {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    }
    get observed() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    _trySubscribe(subscriber) {
      this._throwIfClosed();
      return super._trySubscribe(subscriber);
    }
    _subscribe(subscriber) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(subscriber);
      return this._innerSubscribe(subscriber);
    }
    _innerSubscribe(subscriber) {
      const {
        hasError,
        isStopped,
        observers
      } = this;
      if (hasError || isStopped) {
        return _Subscription__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_SUBSCRIPTION */ .Kn;
      }
      this.currentObservers = null;
      observers.push(subscriber);
      return new _Subscription__WEBPACK_IMPORTED_MODULE_3__/* .Subscription */ .yU(() => {
        this.currentObservers = null;
        (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__/* .arrRemove */ .o)(observers, subscriber);
      });
    }
    _checkFinalizedStatuses(subscriber) {
      const {
        hasError,
        thrownError,
        isStopped
      } = this;
      if (hasError) {
        subscriber.error(thrownError);
      } else if (isStopped) {
        subscriber.complete();
      }
    }
    asObservable() {
      const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c();
      observable.source = this;
      return observable;
    }
  }
  Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
  };
  return Subject;
})();
class AnonymousSubject extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  }
  error(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  }
  complete() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _subscribe(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_SUBSCRIPTION */ .Kn;
  }
}
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ 94336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ readableStreamLikeToAsyncGenerator),
/* harmony export */   U: () => (/* binding */ isReadableStreamLike)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64064);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47971);


function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__asyncGenerator */ .AQ)(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const {
          value,
          done
        } = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__await */ .N3)(reader.read());
        if (done) {
          return yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__await */ .N3)(void 0);
        }
        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__await */ .N3)(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .T)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map

/***/ }),

/***/ 96663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39904);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__/* .Scheduler */ ._ {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__/* .Scheduler */ ._.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ })

}]);