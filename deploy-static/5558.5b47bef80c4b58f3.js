"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5558,8539],{

/***/ 952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4414);

const ObjectUnsubscribedError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ 969:
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

/***/ 2077:
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

/***/ 3748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68600);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10016);


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

/***/ 4414:
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

/***/ 8234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11157);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76868);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__/* .observable */ .s]);
}
//# sourceMappingURL=isInteropObservable.js.map

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

/***/ 10016:
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

/***/ 10507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40978);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89547);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__/* .scheduled */ .c)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(input);
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ 11157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ observable)
/* harmony export */ });
const observable = /*#__PURE__*/(() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ 12315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ms: () => (/* binding */ SafeSubscriber),
/* harmony export */   vU: () => (/* binding */ Subscriber)
/* harmony export */ });
/* unused harmony export EMPTY_OBSERVER */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76868);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66452);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17027);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58745);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31892);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90326);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2077);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38445);








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

/***/ 13235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ readableStreamLikeToAsyncGenerator),
/* harmony export */   U: () => (/* binding */ isReadableStreamLike)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92591);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76868);


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

/***/ 14073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ MakeComSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92591);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16458);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23702);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15990);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);















function MakeComSettingsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function MakeComSettingsComponent_form_7_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function MakeComSettingsComponent_form_7_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INTEGRATIONS.MAKE_COM.SETTINGS.WEBHOOK_URL_INVALID"), " ");
  }
}
function MakeComSettingsComponent_form_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, MakeComSettingsComponent_form_7_div_11_span_1_Template, 3, 3, "span", 14)(2, MakeComSettingsComponent_form_7_div_11_span_2_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (tmp_2_0 = ctx_r1.form.get("webhookUrl").errors) == null ? null : tmp_2_0.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (tmp_3_0 = ctx_r1.form.get("webhookUrl").errors) == null ? null : tmp_3_0.pattern);
  }
}
function MakeComSettingsComponent_form_7_nb_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 15);
  }
}
function MakeComSettingsComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function MakeComSettingsComponent_form_7_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.saveSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 5)(2, "nb-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 5)(6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, MakeComSettingsComponent_form_7_div_11_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 10)(13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, MakeComSettingsComponent_form_7_nb_icon_14_Template, 1, 0, "nb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 8, "INTEGRATIONS.MAKE_COM.SETTINGS.ENABLE_INTEGRATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 10, "INTEGRATIONS.MAKE_COM.SETTINGS.WEBHOOK_URL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 12, "INTEGRATIONS.MAKE_COM.SETTINGS.WEBHOOK_URL_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.form.get("webhookUrl").invalid && ctx_r1.form.get("webhookUrl").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.form.invalid || ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 14, "INTEGRATIONS.MAKE_COM.SETTINGS.SAVE"), " ");
  }
}
let MakeComSettingsComponent = /*#__PURE__*/(() => {
  let MakeComSettingsComponent = class MakeComSettingsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(_fb, _makeComStoreService, _toastrService, translateService) {
      super(translateService);
      this._fb = _fb;
      this._makeComStoreService = _makeComStoreService;
      this._toastrService = _toastrService;
      this.translateService = translateService;
      this.loading = false;
      this.settings = null;
    }
    ngOnInit() {
      this._initializeForm();
      this._loadSettings();
    }
    _initializeForm() {
      this.form = this._fb.group({
        isEnabled: [false],
        webhookUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.pattern('https?://.+')]]
      });
    }
    _loadSettings() {
      this.loading = true;
      this._makeComStoreService.loadIntegrationSettings().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(settings => {
        this.settings = settings;
        this.form.patchValue({
          isEnabled: settings.isEnabled,
          webhookUrl: settings.webhookUrl
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
        this._toastrService.error(this.getTranslation('INTEGRATIONS.MAKE_COM_PAGE.ERRORS.LOAD_SETTINGS'), this.getTranslation('TOASTR.TITLE.ERROR'));
        console.error('Error loading Make.com settings:', error);
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(() => {
        this.loading = false;
      });
    }
    /**
     * Save Make.com integration settings
     */
    saveSettings() {
      if (this.form.invalid) {
        this._toastrService.error(this.getTranslation('INTEGRATIONS.MAKE_COM_PAGE.ERRORS.INVALID_FORM'), this.getTranslation('TOASTR.TITLE.ERROR'));
        return;
      }
      this.loading = true;
      this._makeComStoreService.updateIntegrationSettings(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(settings => {
        this.settings = settings;
        this._toastrService.success(this.getTranslation('INTEGRATIONS.MAKE_COM_PAGE.SUCCESS.SETTINGS_SAVED'), this.getTranslation('TOASTR.TITLE.SUCCESS'));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
        this._toastrService.error(this.getTranslation('INTEGRATIONS.MAKE_COM_PAGE.ERRORS.SAVE_SETTINGS'), this.getTranslation('TOASTR.TITLE.ERROR'));
        console.error('Error saving Make.com settings:', error);
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(() => {
        this.loading = false;
      });
    }
    static {
      this.ɵfac = function MakeComSettingsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MakeComSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormBuilder */ .ok), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .MakeComStoreService */ .O), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: MakeComSettingsComponent,
        selectors: [["ngx-make-com-settings"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 8,
        vars: 5,
        consts: [[1, "card-scroll"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "col-xl-6 col-12", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "d-flex", "justify-content-center"], [1, "col-xl-6", "col-12", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["formControlName", "isEnabled"], ["for", "webhookUrl", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "url", "id", "webhookUrl", "formControlName", "webhookUrl", 3, "placeholder"], ["class", "text-danger", 4, "ngIf"], [1, "actions"], ["nbButton", "", "status", "primary", "type", "submit", 3, "disabled"], ["icon", "loader-outline", "pack", "eva", 4, "ngIf"], [1, "text-danger"], [4, "ngIf"], ["icon", "loader-outline", "pack", "eva"]],
        template: function MakeComSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, MakeComSettingsComponent_div_6_Template, 2, 0, "div", 1)(7, MakeComSettingsComponent_form_7_Template, 17, 16, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "INTEGRATIONS.MAKE_COM.SETTINGS.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.loading);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbSpinnerComponent */ .jBr, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  MakeComSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormBuilder */ .ok, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .MakeComStoreService */ .O, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$])], MakeComSettingsComponent);
  return MakeComSettingsComponent;
})();


/***/ }),

/***/ 14479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94424);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89547);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23702);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69961);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10507);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popNumber */ .R0)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY */ .w : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__/* .mergeAll */ .U)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__/* .from */ .H)(sources, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 15274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4414);

const UnsubscriptionError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 15299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76868);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 15990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ MakeComStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40868);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _make_com_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63698);





let MakeComStoreService = /*#__PURE__*/(() => {
  class MakeComStoreService {
    constructor(_makeComService) {
      this._makeComService = _makeComService;
      this._settings$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(null);
      this.settings$ = this._settings$.asObservable();
      this._oauthConfig$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(null);
      this.oauthConfig$ = this._oauthConfig$.asObservable();
    }
    /**
     * Loads the current Make.com integration settings
     * @returns An observable of the settings
     */
    loadIntegrationSettings() {
      return this._makeComService.getIntegrationSettings().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(settings => this._settings$.next(settings)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => {
        console.error('Error loading Make.com integration settings:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ .$)(() => error);
      }));
    }
    /**
     * Updates the Make.com integration settings
     * @param settings The updated settings
     * @returns An observable of the updated settings
     */
    updateIntegrationSettings(settings) {
      return this._makeComService.updateIntegrationSettings(settings).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(updatedSettings => this._settings$.next(updatedSettings)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => {
        console.error('Error updating Make.com integration settings:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ .$)(() => error);
      }));
    }
    /**
     * Adds or updates Make.com OAuth settings
     * @param credentials The OAuth credentials
     * @returns An observable of the updated settings
     */
    addOAuthSettings(credentials) {
      return this._makeComService.addOAuthSettings(credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => {
        console.error('Error adding Make.com OAuth settings:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ .$)(() => error);
      }));
    }
    /**
     * Loads the OAuth configuration
     * @returns An observable of the OAuth config
     */
    loadOAuthConfig() {
      return this._makeComService.getOAuthConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(config => this._oauthConfig$.next(config)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => {
        console.error('Error loading Make.com OAuth config:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ .$)(() => error);
      }));
    }
    /**
     * Gets the current integration settings without making an API call
     * @returns The current settings or null if not loaded
     */
    getCurrentSettings() {
      return this._settings$.getValue();
    }
    /**
     * Gets the current OAuth configuration without making an API call
     * @returns The current OAuth config or null if not loaded
     */
    getCurrentOAuthConfig() {
      return this._oauthConfig$.getValue();
    }
    /**
     * Clears all stored data
     */
    clearStore() {
      this._settings$.next(null);
      this._oauthConfig$.next(null);
    }
    static {
      this.ɵfac = function MakeComStoreService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MakeComStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .KVO(_make_com_service__WEBPACK_IMPORTED_MODULE_5__/* .MakeComService */ .v));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: MakeComStoreService,
        factory: MakeComStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MakeComStoreService;
})();

/***/ }),

/***/ 16246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ IntegrationMakeComLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92591);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14479);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16458);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18895);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9620);












let IntegrationMakeComLayoutComponent = /*#__PURE__*/(() => {
  let IntegrationMakeComLayoutComponent = class IntegrationMakeComLayoutComponent {
    constructor(_translateService, _store, _i18nService) {
      this._translateService = _translateService;
      this._store = _store;
      this._i18nService = _i18nService;
    }
    ngOnInit() {
      this.initializeUiLanguagesAndLocale();
    }
    /**
     * Initialize UI languages and Update Locale
     */
    initializeUiLanguagesAndLocale() {
      // Observable that emits when preferred language changes.
      const preferredLanguage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .merge */ .h)(this._store.preferredLanguage$, this._i18nService.preferredLanguage$).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(lang => !!lang), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(lang => {
        console.log('integration Make.com ui module plugin lang', lang);
        this._translateService.use(lang);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this));
      // Subscribe to initiate the stream
      preferredLanguage$.subscribe();
    }
    ngOnDestroy() {
      console.log(`Integration Make.com UI module plugin destroyed`);
    }
    static {
      this.ɵfac = function IntegrationMakeComLayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationMakeComLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_8__/* .I18nService */ .W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: IntegrationMakeComLayoutComponent,
        selectors: [["ngx-integration-make-com-layout"]],
        standalone: false,
        decls: 1,
        vars: 0,
        template: function IntegrationMakeComLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(0, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterOutlet */ .n3],
        encapsulation: 2
      });
    }
  };
  IntegrationMakeComLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il, _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_8__/* .I18nService */ .W])], IntegrationMakeComLayoutComponent);
  return IntegrationMakeComLayoutComponent;
})();


/***/ }),

/***/ 16458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76868);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98049);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95869);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86390);




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

/***/ 17027:
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

/***/ 17652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* unused harmony export pipe */
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86390);

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

/***/ 18895:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ UntilDestroy),
/* harmony export */   s: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64958);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10507);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41097);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52602);



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

/***/ 22923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89547);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92954);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84750);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ 23702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68600);

const EMPTY = /*#__PURE__*/new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 24119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ AuthorizationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(92591);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16458);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23702);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63698);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98035);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90910);
var AuthorizationComponent_1;



















function AuthorizationComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function AuthorizationComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
let AuthorizationComponent = /*#__PURE__*/(() => {
  let AuthorizationComponent = class AuthorizationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    static {
      AuthorizationComponent_1 = this;
    }
    static {
      this.MAKE_DASHBOARD_ROUTE = '/pages/integrations/makecom';
    }
    constructor(_fb, _makeComService, _toastrService, translateService, _router, _route, _store, _integrationsService) {
      super(translateService);
      this._fb = _fb;
      this._makeComService = _makeComService;
      this._toastrService = _toastrService;
      this.translateService = translateService;
      this._router = _router;
      this._route = _route;
      this._store = _store;
      this._integrationsService = _integrationsService;
      this.loading = false;
      this.oauthConfig = null;
    }
    ngOnInit() {
      this._initializeForm();
      this._loadOrganization();
      this._loadOAuthConfig();
    }
    _initializeForm() {
      this.form = this._fb.group({
        clientId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]],
        clientSecret: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]]
      });
    }
    _loadOrganization() {
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._checkRememberState()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    _loadOAuthConfig() {
      this.loading = true;
      this._makeComService.getOAuthConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(config => {
        this.oauthConfig = config;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .W)(error => {
        console.error('Error loading OAuth config:', error);
        return rxjs__WEBPACK_IMPORTED_MODULE_7__/* .EMPTY */ .w;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(() => {
        this.loading = false;
      });
    }
    /**
     * Check if there's an existing Make.com integration
     */
    _checkRememberState() {
      if (!this.organization) {
        return;
      }
      // Get the state from route data
      this._route.data.subscribe(data => {
        this.rememberState = data.state;
        // Only check for existing integration if state is true
        if (this.rememberState) {
          const {
            id: organizationId,
            tenantId
          } = this.organization;
          const state$ = this._integrationsService.getIntegrationByOptions({
            name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .IntegrationEnum */ .I5.MakeCom,
            organizationId,
            tenantId
          });
          state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(integration => !!integration.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(integration => {
            this._redirectToMakeDashboard(integration.id);
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .W)(error => {
            console.error('Error checking integration state:', error);
            return rxjs__WEBPACK_IMPORTED_MODULE_7__/* .EMPTY */ .w;
          }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
        }
      });
    }
    /**
     * Start OAuth authorization flow
     */
    startAuthorization() {
      if (this.form.invalid || !this.organization) {
        this._toastrService.error(this.getTranslation('INTEGRATIONS.MAKE_PAGE.ERRORS.INVALID_FORM'), this.getTranslation('TOASTR.TITLE.ERROR'));
        return;
      }
      this.loading = true;
      const credentials = this.form.value;
      this._makeComService.addOAuthSettings(credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(response => {
        // Redirect to Make.com authorization page
        window.location.href = response.authorizationUrl;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .W)(error => {
        this._toastrService.error(this.getTranslation('INTEGRATIONS.MAKE_COM_PAGE.ERRORS.START_AUTHORIZATION'), this.getTranslation('TOASTR.TITLE.ERROR'));
        console.error('Error starting authorization:', error);
        return rxjs__WEBPACK_IMPORTED_MODULE_7__/* .EMPTY */ .w;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(() => {
        this.loading = false;
      });
    }
    /**
     * Redirect to Make.com dashboard
     */
    _redirectToMakeDashboard(integrationId) {
      this._router.navigate([AuthorizationComponent_1.MAKE_DASHBOARD_ROUTE, integrationId]);
    }
    static {
      this.ɵfac = function AuthorizationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormBuilder */ .ok), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .MakeComService */ .v), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .IntegrationsService */ .J));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: AuthorizationComponent,
        selectors: [["ngx-make-com-authorize"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 29,
        vars: 25,
        consts: [[1, "card-scroll"], [1, "d-flex"], [1, "col-xl-6", "col-12", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "clientId", 1, "label"], ["fullWidth", "", "id", "clientId", "formControlName", "clientId", "type", "text", "nbInput", "", 3, "placeholder"], ["class", "text-danger", 4, "ngIf"], ["for", "clientSecret", 1, "label"], ["fullWidth", "", "id", "clientSecret", "formControlName", "clientSecret", "type", "password", "nbInput", "", 3, "placeholder"], [1, "hint"], ["icon", "info-outline"], ["nbButton", "", "status", "primary", "size", "small", "outline", "", "type", "submit", 3, "disabled"], [1, "text-danger"]],
        template: function AuthorizationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body")(7, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function AuthorizationComponent_Template_form_ngSubmit_7_listener() {
              return ctx.startAuthorization();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 3)(9, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, AuthorizationComponent_div_14_Template, 3, 3, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "div", 3)(16, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(19, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(21, AuthorizationComponent_div_21_Template, 3, 3, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(23, "nb-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            let tmp_4_0;
            let tmp_7_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 11, "MENU.MAKE_COM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 13, "INTEGRATIONS.MAKE_COM_PAGE.CLIENT_ID"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 15, "FORM.PLACEHOLDERS.MAKE_COM_CLIENT_ID"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_4_0 = ctx.form.get("clientId")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.form.get("clientId")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 17, "INTEGRATIONS.MAKE_COM_PAGE.CLIENT_SECRET"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 19, "FORM.PLACEHOLDERS.MAKE_COM_CLIENT_SECRET"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_7_0 = ctx.form.get("clientSecret")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.form.get("clientSecret")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 21, "INTEGRATIONS.MAKE_COM_PAGE.NEXT_STEP_INFO"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(28, 23, "BUTTONS.NEXT"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_17__/* .BackNavigationComponent */ .r, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .D9],
        styles: [".authorization-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n  padding: 2rem;\n}\n\n.authorization-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  text-align: center;\n}\n.authorization-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: var(--gauzy-text-color-1);\n}\n.authorization-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  color: var(--gauzy-text-color-2);\n}\n\n.authorization-actions[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.authorization-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  max-width: 100%;\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n  border: none !important;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  };
  return AuthorizationComponent;
})();
AuthorizationComponent = AuthorizationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormBuilder */ .ok, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .MakeComService */ .v, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ToastrService */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .IntegrationsService */ .J])], AuthorizationComponent);


/***/ }),

/***/ 31892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 33611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76868);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ 34846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68600);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91990);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76868);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10016);




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

/***/ 35558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorizationComponent: () => (/* reexport safe */ _lib_components_make_com_authorize_make_com_authorize_component__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   IntegrationMakeComLayoutComponent: () => (/* reexport safe */ _lib_integration_make_com_layout_component__WEBPACK_IMPORTED_MODULE_5__.F),
/* harmony export */   IntegrationMakeComUiModule: () => (/* reexport safe */ _lib_integration_make_com_ui_module__WEBPACK_IMPORTED_MODULE_4__.W),
/* harmony export */   MakeComCallbackComponent: () => (/* reexport safe */ _lib_components_make_com_callback_make_com_callback_component__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   MakeComSettingsComponent: () => (/* reexport safe */ _lib_components_make_com_settings_make_com_settings_component__WEBPACK_IMPORTED_MODULE_2__.W),
/* harmony export */   MakeComponent: () => (/* reexport safe */ _lib_components_make_make_component__WEBPACK_IMPORTED_MODULE_3__.I)
/* harmony export */ });
/* harmony import */ var _lib_components_make_com_authorize_make_com_authorize_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24119);
/* harmony import */ var _lib_components_make_com_callback_make_com_callback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98853);
/* harmony import */ var _lib_components_make_com_settings_make_com_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14073);
/* harmony import */ var _lib_components_make_make_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51919);
/* harmony import */ var _lib_integration_make_com_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76054);
/* harmony import */ var _lib_integration_make_com_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16246);







/***/ }),

/***/ 38137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89547);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10016);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95869);



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

/***/ 38445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ errorContext),
/* harmony export */   l: () => (/* binding */ captureError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17027);

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

/***/ 39909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98049);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95869);


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

/***/ 40978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93341);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22923);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71507);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34846);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3748);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8234);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33611);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98316);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50270);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83140);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59808);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13235);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99507);













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

/***/ 41097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39909);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89547);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98049);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38137);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76868);





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

/***/ 42808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89547);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95869);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98049);



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

/***/ 50270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91990);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76868);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__/* .iterator */ .l]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ 51919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ MakeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92591);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69761);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16458);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23702);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18895);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98035);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45245);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90910);
















function MakeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function MakeComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-route-tabset", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabs", ctx_r0.tabs);
  }
}
let MakeComponent = /*#__PURE__*/(() => {
  let MakeComponent = class MakeComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(_router, translateService, _activatedRoute, _store, _integrationsService, _makeComStoreService) {
      super(translateService);
      this._router = _router;
      this.translateService = translateService;
      this._activatedRoute = _activatedRoute;
      this._store = _store;
      this._integrationsService = _integrationsService;
      this._makeComStoreService = _makeComStoreService;
      this.tabs = [];
      this.menus = [];
      this.loading = false;
      this.BASE_MENU_ROUTE = 'pages/integrations/makecom';
    }
    ngOnInit() {
      this._loadTabs();
      this._applyTranslationOnTabsActions();
      this._activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(params => this.integrationId = params['id']), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this._loadMenus()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this._loadIntegrationSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Get route for tab navigation
     */
    getRoute(tabName) {
      return `./${tabName}`;
    }
    /**
     * Load tabs for Make.com integration
     */
    _loadTabs() {
      this.tabs = [{
        title: this.getTranslation('INTEGRATIONS.MAKE_COM_PAGE.SCENARIOS'),
        icon: 'flash-outline',
        responsive: true,
        route: this.getRoute('scenarios')
      }, {
        title: this.getTranslation('INTEGRATIONS.MAKE_COM_PAGE.EXECUTIONS'),
        icon: 'activity-outline',
        responsive: true,
        route: this.getRoute('executions')
      }, {
        title: this.getTranslation('INTEGRATIONS.MAKE_COM_PAGE.HISTORY'),
        icon: 'clock-outline',
        responsive: true,
        route: this.getRoute('history')
      }, {
        title: this.getTranslation('INTEGRATIONS.MAKE_COM_PAGE.SETTINGS'),
        icon: 'settings-2-outline',
        responsive: true,
        route: this.getRoute('settings')
      }];
    }
    /**
     * Load menu items for Make.com integration
     */
    _loadMenus() {
      this.menus = [{
        title: this.getTranslation('INTEGRATIONS.RE_INTEGRATE'),
        icon: 'text-outline',
        link: `${this.BASE_MENU_ROUTE}/regenerate`
      }, {
        title: this.getTranslation('INTEGRATIONS.SETTINGS'),
        icon: 'settings-2-outline',
        link: `${this.BASE_MENU_ROUTE}/${this.integrationId}/settings`
      }];
    }
    /**
     * Load integration settings
     */
    _loadIntegrationSettings() {
      if (!this.organization) return;
      this.loading = true;
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      this._integrationsService.getIntegrationByOptions({
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .IntegrationEnum */ .I5.MakeCom,
        organizationId,
        tenantId
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(integration => {
        if (integration) {
          this._makeComStoreService.loadIntegrationSettings().subscribe();
        }
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .W)(error => {
        console.error('Error loading Make.com integration settings:', error);
        return rxjs__WEBPACK_IMPORTED_MODULE_7__/* .EMPTY */ .w;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .finalize */ .j)(() => this.loading = false)).subscribe();
    }
    /**
     * Apply translations when language changes
     */
    _applyTranslationOnTabsActions() {
      this.translateService.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        this._loadTabs();
        this._loadMenus();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Navigate to the "Integrations" page
     */
    navigateToIntegrations() {
      this._router.navigate(['/pages/integrations']);
    }
    ngOnDestroy() {
      this._makeComStoreService.clearStore();
    }
    static {
      this.ɵfac = function MakeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MakeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .IntegrationsService */ .J), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .MakeComStoreService */ .O));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: MakeComponent,
        selectors: [["ngx-make"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 12,
        vars: 6,
        consts: [[1, "card-scroll"], [1, "float-left", 3, "click"], ["size", "small", 1, "float-left", "pt-2"], [1, "toggle-layout", "p-0"], ["icon", "settings-2-outline", 3, "nbContextMenu"], ["class", "d-flex justify-content-center", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["fullWidth", "", 3, "tabs"]],
        template: function MakeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "ngx-back-navigation", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function MakeComponent_Template_ngx_back_navigation_click_2_listener() {
              return ctx.navigateToIntegrations();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "nb-actions", 2)(4, "nb-action", 3)(5, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "nb-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, MakeComponent_div_10_Template, 2, 0, "div", 5)(11, MakeComponent_div_11_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 4, "MENU.MAKE_COM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbContextMenu", ctx.menus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.loading);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbActionComponent */ .kK0, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbActionsComponent */ .pb1, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSpinnerComponent */ .jBr, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbContextMenuDirective */ .yUn, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbRouteTabsetComponent */ .ssE, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgIf */ .bT, _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_16__/* .BackNavigationComponent */ .r, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  MakeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .Router */ .Ix, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .IntegrationsService */ .J, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .MakeComStoreService */ .O])], MakeComponent);
  return MakeComponent;
})();


/***/ }),

/***/ 52602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98049);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95869);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89547);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31892);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 57945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98049);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95869);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 58745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17027);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2077);


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

/***/ 59808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
//# sourceMappingURL=throwUnobservableError.js.map

/***/ }),

/***/ 63698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ MakeComService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45715);




let MakeComService = /*#__PURE__*/(() => {
  class MakeComService {
    constructor(http) {
      this.http = http;
    }
    /**
     * Get Make.com integration settings for the current tenant
     */
    getIntegrationSettings() {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration/make-com`);
    }
    /**
     * Update Make.com integration settings
     */
    updateIntegrationSettings(settings) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration/make-com`, settings);
    }
    /**
     * Add or update Make.com OAuth settings
     */
    addOAuthSettings(credentials) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration/make-com/oauth-settings`, {
        client_id: credentials.clientId,
        client_secret: credentials.clientSecret
      });
    }
    /**
     * Get Make.com OAuth configuration
     */
    getOAuthConfig() {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration/make-com/oauth-config`);
    }
    /**
     * Handle OAuth callback from Make.com
     */
    handleOAuthCallback(code, state) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration/make-com/oauth/callback`, {
        params: {
          code,
          state
        }
      });
    }
    /**
     * Handle token requests from Make.com custom apps
     */
    handleTokenRequest(body) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration/make-com/token`, body);
    }
    static {
      this.ɵfac = function MakeComService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MakeComService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: MakeComService,
        factory: MakeComService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MakeComService;
})();

/***/ }),

/***/ 64958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Subject)
/* harmony export */ });
/* unused harmony export AnonymousSubject */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68600);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66452);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(952);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(969);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38445);





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

/***/ 66452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kn: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Uv: () => (/* binding */ isSubscription),
/* harmony export */   yU: () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76868);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15274);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(969);



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

/***/ 68600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12315);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66452);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11157);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17652);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17027);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76868);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38445);







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

/***/ 69761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ finalize)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98049);

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

/***/ 69961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R0: () => (/* binding */ popNumber),
/* harmony export */   lI: () => (/* binding */ popScheduler)
/* harmony export */ });
/* unused harmony export popResultSelector */
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15299);


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

/***/ 71507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68600);

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

/***/ 76054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ IntegrationMakeComUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99209);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8539);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98048);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57832);
/* harmony import */ var _integration_make_com_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);









let IntegrationMakeComUiModule = /*#__PURE__*/(() => {
  class IntegrationMakeComUiModule {
    static {
      this.ɵfac = function IntegrationMakeComUiModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationMakeComUiModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: IntegrationMakeComUiModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbActionsModule */ ._A2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCalendarKitModule */ .VmO, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbContextMenuModule */ .DkL, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbRouteTabsetModule */ .x$5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateModule */ .h.forChild({
          defaultLanguage: (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .getBrowserLanguage */ .x)(),
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateLoader */ .Wr,
            useFactory: _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_4__/* .HttpLoaderFactory */ .M,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq]
          }
        }), _integration_make_com_routes__WEBPACK_IMPORTED_MODULE_6__/* .IntegrationMakeComRoutes */ .q, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .SelectorsModule */ .b, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .TableComponentsModule */ .p, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .CommonModule */ .MD]
      });
    }
  }
  return IntegrationMakeComUiModule;
})();

/***/ }),

/***/ 76868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 83140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76868);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ 84750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98049);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ 86390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 89547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tg: () => (/* binding */ innerFrom)
/* harmony export */ });
/* unused harmony exports fromInteropObservable, fromArrayLike, fromPromise, fromIterable, fromAsyncIterable, fromReadableStreamLike */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92591);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98316);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33611);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68600);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8234);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83140);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59808);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50270);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13235);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76868);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58745);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11157);












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

/***/ 90326:
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

/***/ 91990:
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

/***/ 92591:
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

/***/ 92954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10016);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98049);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95869);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 93341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89547);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92954);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84750);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ 94424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41097);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86390);


function mergeAll(concurrent = Infinity) {
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__/* .mergeMap */ .Z)(_util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ 95869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* unused harmony export OperatorSubscriber */
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12315);

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

/***/ 98049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ operate)
/* harmony export */ });
/* unused harmony export hasLift */
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76868);

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

/***/ 98251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ IntegrationMakeComRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var _components_make_com_authorize_make_com_authorize_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24119);
/* harmony import */ var _integration_make_com_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16246);
/* harmony import */ var _components_make_make_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51919);
/* harmony import */ var _components_make_com_callback_make_com_callback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98853);
/* harmony import */ var _components_make_com_settings_make_com_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let IntegrationMakeComRoutes = /*#__PURE__*/(() => {
  class IntegrationMakeComRoutes {
    static {
      this.ɵfac = function IntegrationMakeComRoutes_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationMakeComRoutes)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: IntegrationMakeComRoutes
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterModule */ .iI.forChild([{
          path: '',
          component: _integration_make_com_layout_component__WEBPACK_IMPORTED_MODULE_2__/* .IntegrationMakeComLayoutComponent */ .F,
          children: [{
            path: '',
            component: _components_make_com_authorize_make_com_authorize_component__WEBPACK_IMPORTED_MODULE_3__/* .AuthorizationComponent */ .f,
            data: {
              state: true
            }
          }, {
            path: 'regenerate',
            component: _components_make_com_authorize_make_com_authorize_component__WEBPACK_IMPORTED_MODULE_3__/* .AuthorizationComponent */ .f,
            data: {
              state: false
            }
          }, {
            path: 'callback',
            component: _components_make_com_callback_make_com_callback_component__WEBPACK_IMPORTED_MODULE_4__/* .MakeComCallbackComponent */ .e
          }, {
            path: ':id',
            component: _components_make_make_component__WEBPACK_IMPORTED_MODULE_5__/* .MakeComponent */ .I,
            children: [{
              path: '',
              redirectTo: 'scenarios',
              pathMatch: 'full'
            }, {
              path: 'scenarios',
              loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(7178), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(6588), __webpack_require__.e(1750), __webpack_require__.e(7478), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(3213), __webpack_require__.e(5110), __webpack_require__.e(2180), __webpack_require__.e(1588), __webpack_require__.e(9867), __webpack_require__.e(6161), __webpack_require__.e(7288), __webpack_require__.e(6089), __webpack_require__.e(6622), __webpack_require__.e(9860), __webpack_require__.e(1760), __webpack_require__.e(7204), __webpack_require__.e(3812), __webpack_require__.e(1707), __webpack_require__.e(236), __webpack_require__.e(1297), __webpack_require__.e(7483), __webpack_require__.e(4243), __webpack_require__.e(3734), __webpack_require__.e(588), __webpack_require__.e(6076), __webpack_require__.e(1232), __webpack_require__.e(7007), __webpack_require__.e(4445), __webpack_require__.e(5398), __webpack_require__.e(4232), __webpack_require__.e(8264), __webpack_require__.e(1094), __webpack_require__.e(427), __webpack_require__.e(7607), __webpack_require__.e(7140), __webpack_require__.e(7088), __webpack_require__.e(4916), __webpack_require__.e(5684), __webpack_require__.e(9882), __webpack_require__.e(5379), __webpack_require__.e(6747), __webpack_require__.e(7622), __webpack_require__.e(2076), __webpack_require__.e(8859)]).then(__webpack_require__.bind(__webpack_require__, 36747)).then(m => m.WorkInProgressModule)
            }, {
              path: 'executions',
              loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(7178), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(6588), __webpack_require__.e(1750), __webpack_require__.e(7478), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(3213), __webpack_require__.e(5110), __webpack_require__.e(2180), __webpack_require__.e(1588), __webpack_require__.e(9867), __webpack_require__.e(6161), __webpack_require__.e(7288), __webpack_require__.e(6089), __webpack_require__.e(6622), __webpack_require__.e(9860), __webpack_require__.e(1760), __webpack_require__.e(7204), __webpack_require__.e(3812), __webpack_require__.e(1707), __webpack_require__.e(236), __webpack_require__.e(1297), __webpack_require__.e(7483), __webpack_require__.e(4243), __webpack_require__.e(3734), __webpack_require__.e(588), __webpack_require__.e(6076), __webpack_require__.e(1232), __webpack_require__.e(7007), __webpack_require__.e(4445), __webpack_require__.e(5398), __webpack_require__.e(4232), __webpack_require__.e(8264), __webpack_require__.e(1094), __webpack_require__.e(427), __webpack_require__.e(7607), __webpack_require__.e(7140), __webpack_require__.e(7088), __webpack_require__.e(4916), __webpack_require__.e(5684), __webpack_require__.e(9882), __webpack_require__.e(5379), __webpack_require__.e(6747), __webpack_require__.e(7622), __webpack_require__.e(2076), __webpack_require__.e(8859)]).then(__webpack_require__.bind(__webpack_require__, 36747)).then(m => m.WorkInProgressModule)
            }, {
              path: 'history',
              loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(7178), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(6588), __webpack_require__.e(1750), __webpack_require__.e(7478), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(3213), __webpack_require__.e(5110), __webpack_require__.e(2180), __webpack_require__.e(1588), __webpack_require__.e(9867), __webpack_require__.e(6161), __webpack_require__.e(7288), __webpack_require__.e(6089), __webpack_require__.e(6622), __webpack_require__.e(9860), __webpack_require__.e(1760), __webpack_require__.e(7204), __webpack_require__.e(3812), __webpack_require__.e(1707), __webpack_require__.e(236), __webpack_require__.e(1297), __webpack_require__.e(7483), __webpack_require__.e(4243), __webpack_require__.e(3734), __webpack_require__.e(588), __webpack_require__.e(6076), __webpack_require__.e(1232), __webpack_require__.e(7007), __webpack_require__.e(4445), __webpack_require__.e(5398), __webpack_require__.e(4232), __webpack_require__.e(8264), __webpack_require__.e(1094), __webpack_require__.e(427), __webpack_require__.e(7607), __webpack_require__.e(7140), __webpack_require__.e(7088), __webpack_require__.e(4916), __webpack_require__.e(5684), __webpack_require__.e(9882), __webpack_require__.e(5379), __webpack_require__.e(6747), __webpack_require__.e(7622), __webpack_require__.e(2076), __webpack_require__.e(8859)]).then(__webpack_require__.bind(__webpack_require__, 36747)).then(m => m.WorkInProgressModule)
            }, {
              path: 'settings',
              component: _components_make_com_settings_make_com_settings_component__WEBPACK_IMPORTED_MODULE_6__/* .MakeComSettingsComponent */ .W
            }]
          }]
        }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterModule */ .iI]
      });
    }
  }
  return IntegrationMakeComRoutes;
})();

/***/ }),

/***/ 98316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ 98853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ MakeComCallbackComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92591);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16458);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23702);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63698);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);













const _c0 = () => ({
  type: "pulse"
});
const _c1 = a0 => ({
  animation: a0
});
let MakeComCallbackComponent = /*#__PURE__*/(() => {
  let MakeComCallbackComponent = class MakeComCallbackComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(_route, _router, _makeComService, _toastrService, translateService) {
      super(translateService);
      this._route = _route;
      this._router = _router;
      this._makeComService = _makeComService;
      this._toastrService = _toastrService;
      this.translateService = translateService;
      this.loading = false;
    }
    ngOnInit() {
      this._handleCallback();
    }
    _handleCallback() {
      this.loading = true;
      const {
        code,
        state
      } = this._route.snapshot.queryParams;
      if (!code || !state) {
        this._toastrService.error(this.getTranslation('INTEGRATIONS.MAKE_PAGE.ERRORS.INVALID_CALLBACK'), this.getTranslation('TOASTR.TITLE.ERROR'));
        this._redirectToIntegrations();
        return;
      }
      this._makeComService.handleTokenRequest({
        grant_type: 'authorization_code',
        code,
        state,
        client_id: '',
        // Will be handled by backend
        client_secret: '',
        redirect_uri: '' // Will be handled by backend
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => {
        this._toastrService.success(this.getTranslation('INTEGRATIONS.MAKE_PAGE.SUCCESS.AUTHORIZATION_COMPLETE'), this.getTranslation('TOASTR.TITLE.SUCCESS'));
        this._redirectToIntegrations();
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => {
        this._toastrService.error(this.getTranslation('INTEGRATIONS.MAKE_PAGE.ERRORS.AUTHORIZATION_FAILED'), this.getTranslation('TOASTR.TITLE.ERROR'));
        console.error('Error handling OAuth callback:', error);
        this._redirectToIntegrations();
        return rxjs__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY */ .w;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe(() => {
        this.loading = false;
      });
    }
    _redirectToIntegrations() {
      this._router.navigate(['/pages/integrations']);
    }
    static {
      this.ɵfac = function MakeComCallbackComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MakeComCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .MakeComService */ .v), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: MakeComCallbackComponent,
        selectors: [["ngx-make-com-callback"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 7,
        vars: 7,
        consts: [[1, "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "text-center"], ["icon", "sync-outline", 3, "options"], [1, "mt-3"]],
        template: function MakeComCallbackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "nb-card")(2, "nb-card-body", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("options", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .eq3(5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction0"] */ .lJ4(4, _c0)));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(6, 2, "INTEGRATIONS.MAKE_PAGE.PROCESSING_AUTHORIZATION"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconComponent */ .tHu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  MakeComCallbackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .MakeComService */ .v, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$])], MakeComCallbackComponent);
  return MakeComCallbackComponent;
})();


/***/ }),

/***/ 99507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3748);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13235);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__/* .scheduleAsyncIterable */ .M)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__/* .readableStreamLikeToAsyncGenerator */ .C)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ })

}]);