"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2168,8539],{

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
//# sourceMappingURL=throwUnobservableError.js.map

/***/ }),

/***/ 440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24511);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12347);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11681);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33002);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 3780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8602);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55456);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24430);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94178);




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

/***/ 6513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24430);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ 6638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* unused harmony export pipe */
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67404);

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

/***/ 7620:
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

/***/ 8034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ UpworkService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45715);




let UpworkService = /*#__PURE__*/(() => {
  class UpworkService {
    constructor(http) {
      this.http = http;
    }
    uploadTransaction(formData) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integrations/upwork/transactions`, formData);
    }
    getAccessTokenSecretPair(config, organizationId) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integrations/upwork/token-secret-pair/${organizationId}`, config);
    }
    getAccessToken(accessTokenDto, organizationId) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integrations/upwork/access-token/${organizationId}`, accessTokenDto);
    }
    getContracts(config) {
      const data = JSON.stringify({
        config
      });
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integrations/upwork/freelancer-contracts`, {
        params: {
          data
        }
      });
    }
    getConfig(dto) {
      const {
        integrationId,
        data
      } = dto;
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integrations/upwork/config/${integrationId}`, {
        params: {
          data
        }
      });
    }
    syncContracts(syncContractsDto) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integrations/upwork/sync-contracts`, syncContractsDto);
    }
    syncContractsRelatedData(dto) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integrations/upwork/sync-contracts-related-data`, dto);
    }
    getAllReports(dto) {
      const {
        integrationId,
        data
      } = dto;
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integrations/upwork/report/${integrationId}`, {
        params: {
          data
        }
      });
    }
    static {
      this.ɵfac = function UpworkService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || UpworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: UpworkService,
        factory: UpworkService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return UpworkService;
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

/***/ 8602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56961);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72298);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94712);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6638);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54113);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24430);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73155);







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

/***/ 10140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24511);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ 11681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tg: () => (/* binding */ innerFrom)
/* harmony export */ });
/* unused harmony exports fromInteropObservable, fromArrayLike, fromPromise, fromIterable, fromAsyncIterable, fromReadableStreamLike */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13553);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77562);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6513);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8602);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40640);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52866);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(162);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73220);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52074);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24430);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36807);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94712);












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

/***/ 12347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* unused harmony export OperatorSubscriber */
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56961);

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

/***/ 13553:
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

/***/ 15235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ IntegrationUpworkRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(908);
/* harmony import */ var _components_upwork_upwork_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42825);
/* harmony import */ var _components_upwork_authorize_upwork_authorize_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89933);
/* harmony import */ var _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22747);
/* harmony import */ var _components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83707);
/* harmony import */ var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23187);
/* harmony import */ var _integration_upwork_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);









let IntegrationUpworkRoutes = /*#__PURE__*/(() => {
  class IntegrationUpworkRoutes {
    static {
      this.ɵfac = function IntegrationUpworkRoutes_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationUpworkRoutes)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: IntegrationUpworkRoutes
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterModule */ .iI.forChild([{
          path: '',
          component: _integration_upwork_layout_component__WEBPACK_IMPORTED_MODULE_2__/* .IntegrationUpworkLayoutComponent */ .E,
          children: [{
            path: '',
            component: _components_upwork_authorize_upwork_authorize_component__WEBPACK_IMPORTED_MODULE_3__/* .UpworkAuthorizeComponent */ .n,
            data: {
              state: true
            }
          }, {
            path: 'regenerate',
            component: _components_upwork_authorize_upwork_authorize_component__WEBPACK_IMPORTED_MODULE_3__/* .UpworkAuthorizeComponent */ .n,
            data: {
              state: false
            }
          }, {
            path: ':id',
            component: _components_upwork_upwork_component__WEBPACK_IMPORTED_MODULE_4__/* .UpworkComponent */ .w,
            children: [{
              path: '',
              redirectTo: 'contracts',
              pathMatch: 'full'
            }, {
              path: 'activities',
              component: _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_5__/* .TransactionsComponent */ .v
            }, {
              path: 'reports',
              component: _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_6__/* .ReportsComponent */ .l,
              data: {
                selectors: {
                  project: false
                }
              }
            }, {
              path: 'transactions',
              component: _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_5__/* .TransactionsComponent */ .v
            }, {
              path: 'contracts',
              component: _components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_7__/* .ContractsComponent */ .D
            }]
          }, {
            path: ':id/settings',
            loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(7178), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(6588), __webpack_require__.e(1750), __webpack_require__.e(7478), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(3213), __webpack_require__.e(5110), __webpack_require__.e(2180), __webpack_require__.e(1588), __webpack_require__.e(9867), __webpack_require__.e(6161), __webpack_require__.e(7288), __webpack_require__.e(6089), __webpack_require__.e(6622), __webpack_require__.e(9860), __webpack_require__.e(1760), __webpack_require__.e(7204), __webpack_require__.e(3812), __webpack_require__.e(1707), __webpack_require__.e(236), __webpack_require__.e(1297), __webpack_require__.e(7483), __webpack_require__.e(4243), __webpack_require__.e(3734), __webpack_require__.e(588), __webpack_require__.e(6076), __webpack_require__.e(1232), __webpack_require__.e(7007), __webpack_require__.e(4445), __webpack_require__.e(5398), __webpack_require__.e(4232), __webpack_require__.e(8264), __webpack_require__.e(1094), __webpack_require__.e(427), __webpack_require__.e(7607), __webpack_require__.e(7140), __webpack_require__.e(7088), __webpack_require__.e(4916), __webpack_require__.e(5684), __webpack_require__.e(9882), __webpack_require__.e(5379), __webpack_require__.e(6747), __webpack_require__.e(7622), __webpack_require__.e(2076), __webpack_require__.e(8927)]).then(__webpack_require__.bind(__webpack_require__, 36747)).then(m => m.WorkInProgressModule)
          }]
        }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterModule */ .iI]
      });
    }
  }
  return IntegrationUpworkRoutes;
})();

/***/ }),

/***/ 15406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ IntegrationUpworkLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13553);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42851);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61280);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55389);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9620);












let IntegrationUpworkLayoutComponent = /*#__PURE__*/(() => {
  let IntegrationUpworkLayoutComponent = class IntegrationUpworkLayoutComponent {
    constructor(_translateService, _store, _i18nService) {
      this._translateService = _translateService;
      this._store = _store;
      this._i18nService = _i18nService;
    }
    ngOnInit() {
      this.initializeUiLanguagesAndLocale(); // Initialize UI languages and Update Locale
      console.log(`Integration Upwork UI module plugin initialized`);
    }
    /**
     * Initialize UI languages and Update Locale
     */
    initializeUiLanguagesAndLocale() {
      // Observable that emits when preferred language changes.
      const preferredLanguage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .merge */ .h)(this._store.preferredLanguage$, this._i18nService.preferredLanguage$).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(lang => !!lang), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(lang => {
        console.log('integration upwork ui module plugin lang', lang);
        this._translateService.use(lang);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this));
      // Subscribe to initiate the stream
      preferredLanguage$.subscribe();
    }
    ngOnDestroy() {
      console.log(`Integration Upwork UI module plugin destroyed`);
    }
    static {
      this.ɵfac = function IntegrationUpworkLayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationUpworkLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_8__/* .I18nService */ .W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: IntegrationUpworkLayoutComponent,
        selectors: [["ngx-integration-upwork-layout"]],
        standalone: false,
        decls: 1,
        vars: 0,
        template: function IntegrationUpworkLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(0, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterOutlet */ .n3],
        encapsulation: 2
      });
    }
  };
  IntegrationUpworkLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il, _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_8__/* .I18nService */ .W])], IntegrationUpworkLayoutComponent);
  return IntegrationUpworkLayoutComponent;
})();


/***/ }),

/***/ 20355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ EmptyError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31748);

const EmptyError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function EmptyErrorImpl() {
  _super(this);
  this.name = 'EmptyError';
  this.message = 'no elements in sequence';
});
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ 22747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ TransactionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13553);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42851);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55389);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8034);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);










let TransactionsComponent = /*#__PURE__*/(() => {
  let TransactionsComponent = class TransactionsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(_upworkService, _store, translateService, toastrService, errorHandler) {
      super(translateService);
      this._upworkService = _upworkService;
      this._store = _store;
      this.translateService = translateService;
      this.toastrService = toastrService;
      this.errorHandler = errorHandler;
    }
    ngOnInit() {
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(organization => {
        this._selectedOrganizationId = organization.id;
      });
    }
    ngOnDestroy() {}
    imageUrlChanged(event) {
      const [file] = event.target.files;
      this.file = file;
      event.target.value = null;
    }
    importCsv() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('organizationId', this._selectedOrganizationId);
      this._upworkService.uploadTransaction(formData).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.file = null)).subscribe(({
        totalExpenses,
        totalIncomes
      }) => {
        this.toastrService.success(this.getTranslation('INTEGRATIONS.TOTAL_UPWORK_TRANSACTIONS_SUCCEED', {
          totalExpenses,
          totalIncomes
        }));
      }, err => {
        // added infinite duration to error toastr, error message can be too long to read in 3 sec
        this.errorHandler.handleError(err, 0);
      });
    }
    static {
      this.ɵfac = function TransactionsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .UpworkService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TransactionsComponent,
        selectors: [["ngx-transactions"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 10,
        vars: 9,
        consts: [["fileInput", ""], [1, "d-flex", "file-uploader-container"], ["type", "file", "id", "fileInput", "accept", ".csv", 3, "change", "hidden"], ["type", "text", "readonly", "true", "fullWidth", "", 1, "form-control", 3, "value"], ["nbButton", "", "status", "primary", 1, "browse", 3, "click"], ["nbButton", "", "status", "success", 1, "add", 3, "click", "disabled"]],
        template: function TransactionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "input", 2, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("change", function TransactionsComponent_Template_input_change_1_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.imageUrlChanged($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(3, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function TransactionsComponent_Template_button_click_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(2);
              return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(fileInput_r2.click());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(7, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function TransactionsComponent_Template_button_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.importCsv());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("hidden", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("value", ctx.file == null ? null : ctx.file.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, "BROWSE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx.file);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(9, 7, "BUTTONS.ADD"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .YP2, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        styles: [".file-uploader-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.add[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}"]
      });
    }
  };
  TransactionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .UpworkService */ .i, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ErrorHandlingService */ .X])], TransactionsComponent);
  return TransactionsComponent;
})();


/***/ }),

/***/ 23187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(13553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40847);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42851);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81298);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70976);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40651);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55389);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31296);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60006);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47825);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28005);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56383);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(52345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
















let ReportsComponent = /*#__PURE__*/(() => {
  let ReportsComponent = class ReportsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    get selectedDateRange() {
      return this._selectedDateRange;
    }
    set selectedDateRange(range) {
      this._selectedDateRange = range;
    }
    constructor(cdr, translateService, _upworkStoreService, _storeService) {
      super(translateService);
      this.cdr = cdr;
      this.translateService = translateService;
      this._upworkStoreService = _upworkStoreService;
      this._storeService = _storeService;
      this.reports$ = this._upworkStoreService.reports$;
      this.today = new Date();
      this.defaultDateRange$ = this._upworkStoreService.dateRangeActivity$;
      this.updateReports$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    }
    ngOnInit() {
      this._loadSettingsSmartTable();
      this._applyTranslationOnSmartTable();
      this._subscribeToOrganizationAndReports();
    }
    ngAfterViewInit() {
      this.cdr.detectChanges();
    }
    /*
     * Subscribe to selected organization and update reports
     */
    _subscribeToOrganizationAndReports() {
      this._storeService.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(organization => !!organization),
      // Ensure organization is truthy
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(organization => {
        this.organization = organization; // Set the selected organization
        this._setDefaultRange(); // Set the default date range
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .W)(error => {
        console.error('Error retrieving organization:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null); // Return null or an appropriate default value
      })).subscribe();
      this.updateReports$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._getReport()),
      // Call method to get reports
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .W)(error => {
        console.error('Error updating reports:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null); // Return null or an appropriate default value
      })).subscribe();
    }
    /*
     * Load reports for the organization
     */
    _getReport() {
      this._upworkStoreService.loadReports(this.organization).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => {
        // Optional: You can set a loading state here if needed
        console.log('Reports are being loaded...');
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .W)(error => {
        // Handle error case
        console.error('Failed to load reports:', error);
        // Optionally return a default value or empty result
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]); // Assuming you want to return an empty array in case of error
      })).subscribe();
    }
    /**
     *
     */
    _loadSettingsSmartTable() {
      this.settingsSmartTable = {
        actions: false,
        mode: 'external',
        noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.REPORT'),
        columns: {
          valueDate: {
            title: this.getTranslation('SM_TABLE.DATE'),
            type: 'custom',
            width: '10%',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .DateViewComponent */ .l,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          type: {
            title: this.getTranslation('SM_TABLE.TRANSACTION_TYPE'),
            type: 'string',
            isFilterable: false,
            valuePrepareFunction: (value, item) => {
              if (item.hasOwnProperty('category')) {
                return item.category ? item.category.name : null;
              }
              return this.getTranslation(`INTEGRATIONS.UPWORK_PAGE.${_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .IncomeTypeEnum */ .H.HOURLY.toUpperCase()}`);
            }
          },
          clientName: {
            title: this.getTranslation('SM_TABLE.CLIENT_NAME'),
            type: 'string',
            valuePrepareFunction: (value, item) => item.vendor?.name || value
          },
          amount: {
            title: this.getTranslation('SM_TABLE.AMOUNT'),
            type: 'custom',
            width: '15%',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .IncomeExpenseAmountComponent */ .j,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          notes: {
            title: this.getTranslation('SM_TABLE.NOTES'),
            type: 'string'
          },
          employee: {
            title: this.getTranslation('SM_TABLE.EMPLOYEE'),
            type: 'string',
            isFilterable: true,
            valuePrepareFunction: item => {
              const {
                user
              } = item; // Destructure user directly from item
              return user ? `${user.firstName} ${user.lastName}` : ''; // Return an empty string if user is null or undefined
            },
            filterFunction(cell, search) {
              if (!search) return true; // If there's no search term, return true for all
              const user = cell?.user; // Use optional chaining to safely access user
              return user?.firstName.includes(search) || user?.lastName.includes(search) || false; // Return true if search matches first or last name
            }
          }
        },
        pager: {
          display: true,
          perPage: 8
        }
      };
    }
    _applyTranslationOnSmartTable() {
      this.translateService.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._loadSettingsSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /*
     * Set 1 month default date range for filter
     */
    _setDefaultRange() {
      this.defaultDateRange$ = this._upworkStoreService.dateRangeActivity$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .B)(100), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(({
        start,
        end
      }) => {
        // Set selected date range
        this.selectedDateRange = {
          start,
          end
        };
        // Update report trigger
        this.updateReports$.next(true);
        // Set display date
        this.displayDate = this.formatDateRange(start, end);
      }));
    }
    /*
     * Format date range for display
     */
    formatDateRange(start, end) {
      return `${moment__WEBPACK_IMPORTED_MODULE_0__(start).format('MMM D, YYYY')} - ${moment__WEBPACK_IMPORTED_MODULE_0__(end).format('MMM D, YYYY')}`;
    }
    /**
     * Handles the change in the date range.
     * This method validates the start and end dates emitted from the calendar component
     * and updates the filter date range in the Upwork store.
     *
     * @param range - The calendar range object containing start and end dates.
     */
    handleRangeChange(range) {
      const {
        start,
        end
      } = range; // Destructure start and end from the emitted range
      // Check if both start and end dates are valid
      if (start && end && moment__WEBPACK_IMPORTED_MODULE_0__(start, 'YYYY-MM-DD').isValid() && moment__WEBPACK_IMPORTED_MODULE_0__(end, 'YYYY-MM-DD').isValid()) {
        // Update the filter date range in the store
        this._upworkStoreService.setFilterDateRange({
          start,
          end
        });
        // Trigger report updates
        this.updateReports$.next(true);
      }
    }
    /*
     * Change month by the specified number of months
     */
    changeMonth(months) {
      const {
        start,
        end
      } = this.selectedDateRange;
      const newStart = moment__WEBPACK_IMPORTED_MODULE_0__(start).add(months, 'months').format('YYYY-MM-DD');
      const newEnd = moment__WEBPACK_IMPORTED_MODULE_0__(end).add(months, 'months').format('YYYY-MM-DD');
      this.selectedDateRange = {
        start: new Date(newStart),
        end: new Date(newEnd)
      };
      // Ensure the selected range does not exceed today's date
      if (this.selectedDateRange.start > this.today) {
        this.selectedDateRange.start = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(this.today).subtract(1, 'months').format('YYYY-MM-DD'));
      }
      if (this.selectedDateRange.end > this.today) {
        this.selectedDateRange.end = this.today;
      }
      this._upworkStoreService.setFilterDateRange(this.selectedDateRange);
    }
    /*
     * Previous month calendar
     */
    previousMonth() {
      this.changeMonth(-1);
    }
    /*
     * Next month calendar
     */
    nextMonth() {
      this.changeMonth(1);
    }
    /*
     * Disable next month button
     */
    isNextButtonDisabled() {
      if (!this.selectedDateRange) {
        return true;
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(this.selectedDateRange.end).isSameOrAfter(this.today, 'day');
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function ReportsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_12__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .UpworkStoreService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ReportsComponent,
        selectors: [["ngx-upwork-reports"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 17,
        vars: 14,
        consts: [["rangePicker", ""], [1, "reports-container"], [1, "mb-3", "mt-3"], [1, "input-group"], [1, "input-group-append"], ["nbButton", "", "status", "primary", 3, "click"], ["icon", "arrow-ios-back-outline"], [1, "ml-1"], ["nbInput", "", 3, "placeholder", "nbDatepicker", "value"], [3, "rangeChange", "range", "max"], [1, "input-group-append", "ml-1"], ["nbButton", "", "status", "primary", 3, "click", "disabled"], ["icon", "arrow-ios-forward-outline"], [2, "cursor", "pointer", 3, "settings", "source"]],
        template: function ReportsComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .bIt("click", function ReportsComponent_Template_button_click_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .Njj(ctx.previousMonth());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .j41(6, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ .nrm(7, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .j41(9, "nb-rangepicker", 9, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .nI1(11, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .bIt("rangeChange", function ReportsComponent_Template_nb_rangepicker_rangeChange_9_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .Njj(ctx.handleRangeChange($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .j41(12, "div", 10)(13, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .bIt("click", function ReportsComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .Njj(ctx.nextMonth());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ .nrm(14, "nb-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ .nrm(15, "angular2-smart-table", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .nI1(16, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            const rangePicker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵreference"] */ .sdS(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .bMT(8, 8, "INTEGRATIONS.UPWORK_PAGE.DATE_RANGE_PLACEHOLDER"))("nbDatepicker", rangePicker_r2)("value", ctx.displayDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Y8G("range", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .bMT(11, 10, ctx.defaultDateRange$))("max", ctx.today);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.isNextButtonDisabled());
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Y8G("settings", ctx.settingsSmartTable)("source", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .bMT(16, 12, ctx.reports$));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbRangepickerComponent */ .dTt, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbInputDirective */ .i6h, angular2_smart_table__WEBPACK_IMPORTED_MODULE_17__/* .Angular2SmartTableComponent */ .T9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .AsyncPipe */ .Jj],
        encapsulation: 2
      });
    }
  };
  ReportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .Sn)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_12__/* .ChangeDetectorRef */ .gRc, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .UpworkStoreService */ .T, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il])], ReportsComponent);
  return ReportsComponent;
})();


/***/ }),

/***/ 24430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 24511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ operate)
/* harmony export */ });
/* unused harmony export hasLift */
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24430);

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

/***/ 24781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97754);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11681);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35852);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64095);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85361);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popNumber */ .R0)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY */ .w : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__/* .mergeAll */ .U)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__/* .from */ .H)(sources, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 24947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72298);

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

/***/ 27811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11681);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82380);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10140);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ 28005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ IncomeExpenseAmountComponent)
/* harmony export */ });
/* harmony import */ var _invoice_total_value_invoice_total_value_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42128);






const _c0 = (a0, a1) => ({
  originalValue: a0,
  employeeCount: a1
});
function IncomeExpenseAmountComponent_nb_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "INCOME_PAGE.BONUS_TOOLTIP"));
  }
}
function IncomeExpenseAmountComponent_nb_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "EXPENSES_PAGE.SPLIT_WILL_BE_TOOLTIP"));
  }
}
function IncomeExpenseAmountComponent_nb_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(1, 1, "POP_UPS.SPLIT_EXPENSE_WITH_INFO", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(4, _c0, ctx_r0.rowData.originalValue, ctx_r0.rowData.employeeCount)));
  }
}
let IncomeExpenseAmountComponent = /*#__PURE__*/(() => {
  class IncomeExpenseAmountComponent extends _invoice_total_value_invoice_total_value_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceTotalValueComponent */ .s {
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵIncomeExpenseAmountComponent_BaseFactory;
        return function IncomeExpenseAmountComponent_Factory(__ngFactoryType__) {
          return (ɵIncomeExpenseAmountComponent_BaseFactory || (ɵIncomeExpenseAmountComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(IncomeExpenseAmountComponent)))(__ngFactoryType__ || IncomeExpenseAmountComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: IncomeExpenseAmountComponent,
        selectors: [["ga-income-amount"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 7,
        vars: 10,
        consts: [["icon", "gift-outline", 3, "nbTooltip", 4, "ngIf"], ["icon", "pricetags-outline", 3, "nbTooltip", 4, "ngIf"], ["icon", "gift-outline", 3, "nbTooltip"], ["icon", "pricetags-outline", 3, "nbTooltip"]],
        template: function IncomeExpenseAmountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "position");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, IncomeExpenseAmountComponent_nb_icon_4_Template, 2, 3, "nb-icon", 0)(5, IncomeExpenseAmountComponent_nb_icon_5_Template, 2, 3, "nb-icon", 1)(6, IncomeExpenseAmountComponent_nb_icon_6_Template, 2, 7, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 4, ctx.value, ctx.rowData == null ? null : ctx.rowData.currency), ctx.organization == null ? null : ctx.organization.currencyPosition), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.isBonus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rowData == null ? null : ctx.rowData.splitExpense) && !((ctx.rowData == null ? null : ctx.rowData.originalValue) && (ctx.rowData == null ? null : ctx.rowData.employeeCount)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rowData == null ? null : ctx.rowData.splitExpense) && (ctx.rowData == null ? null : ctx.rowData.originalValue) && (ctx.rowData == null ? null : ctx.rowData.employeeCount));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyPipe */ .oe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9, _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyPositionPipe */ .n],
        encapsulation: 2
      });
    }
  }
  return IncomeExpenseAmountComponent;
})();

/***/ }),

/***/ 31296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ IncomeTypeEnum)
/* harmony export */ });
var IncomeTypeEnum = /*#__PURE__*/function (IncomeTypeEnum) {
  IncomeTypeEnum["HOURLY"] = "Hourly";
  return IncomeTypeEnum;
}(IncomeTypeEnum || {});

/***/ }),

/***/ 31748:
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

/***/ 32168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContractsComponent: () => (/* reexport safe */ _lib_components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_4__.D),
/* harmony export */   IntegrationUpworkUiModule: () => (/* reexport safe */ _lib_integration_upwork_ui_module__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   ReportsComponent: () => (/* reexport safe */ _lib_components_reports_reports_component__WEBPACK_IMPORTED_MODULE_5__.l),
/* harmony export */   SyncDataSelectionComponent: () => (/* reexport safe */ _lib_components_sync_data_selection_sync_data_selection_component__WEBPACK_IMPORTED_MODULE_6__.b),
/* harmony export */   TransactionsComponent: () => (/* reexport safe */ _lib_components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_3__.v),
/* harmony export */   UpworkAuthorizeComponent: () => (/* reexport safe */ _lib_components_upwork_authorize_upwork_authorize_component__WEBPACK_IMPORTED_MODULE_2__.n),
/* harmony export */   UpworkComponent: () => (/* reexport safe */ _lib_components_upwork_upwork_component__WEBPACK_IMPORTED_MODULE_1__.w)
/* harmony export */ });
/* harmony import */ var _lib_integration_upwork_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67870);
/* harmony import */ var _lib_components_upwork_upwork_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42825);
/* harmony import */ var _lib_components_upwork_authorize_upwork_authorize_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89933);
/* harmony import */ var _lib_components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22747);
/* harmony import */ var _lib_components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83707);
/* harmony import */ var _lib_components_reports_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23187);
/* harmony import */ var _lib_components_sync_data_selection_sync_data_selection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42015);
/**
 * Public API Surface of @gauzy/plugin-integration-upwork-ui
 */








/***/ }),

/***/ 33002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 35852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8602);

const EMPTY = /*#__PURE__*/new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 36433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11681);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82380);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10140);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ 36807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54113);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94487);


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

/***/ 37961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24430);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 40640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94712);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24430);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__/* .observable */ .s]);
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ 40651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41365);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24511);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12347);



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

/***/ 40847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Subject)
/* harmony export */ });
/* unused harmony export AnonymousSubject */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8602);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72298);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63090);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88267);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73155);





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

/***/ 41365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* unused harmony export async */
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82087);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59548);


const asyncScheduler = /*#__PURE__*/new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = (/* unused pure expression or super */ null && (asyncScheduler));
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 42015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ SyncDataSelectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70976);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81298);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55389);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60006);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ui_core_shared_src_lib_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54982);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10936);















function SyncDataSelectionComponent_div_5_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 11)(1, "ga-employee-selector", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectionChanged", function SyncDataSelectionComponent_div_5_ng_container_1_div_3_Template_ga_employee_selector_selectionChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r4.setSelectedEmployee($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 13)(3, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function SyncDataSelectionComponent_div_5_ng_container_1_div_3_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const entity_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(entity_r3.datePicker.selectedDate, $event) || (entity_r3.datePicker.selectedDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "nb-datepicker", 16, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const taskDueDatePicker_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(9);
    const entity_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const contractsSettings_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("skipGlobalChange", true)("showAllEmployeesOption", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 8, "INTEGRATIONS.UPWORK_PAGE.SELECT_DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 10, "INTEGRATIONS.UPWORK_PAGE.SELECT_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", taskDueDatePicker_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", entity_r3.datePicker.selectedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", contractsSettings_r7.onlyContracts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("max", entity_r3.datePicker.max);
  }
}
function SyncDataSelectionComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "nb-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("checkedChange", function SyncDataSelectionComponent_div_5_ng_container_1_Template_nb_toggle_checkedChange_1_listener($event) {
      const entity_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(entity_r3.sync, $event) || (entity_r3.sync = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, SyncDataSelectionComponent_div_5_ng_container_1_div_3_Template, 10, 12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const entity_r3 = ctx.$implicit;
    const contractsSettings_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("checked", entity_r3.sync);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", contractsSettings_r7.onlyContracts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", entity_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", entity_r3.datePicker);
  }
}
function SyncDataSelectionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, SyncDataSelectionComponent_div_5_ng_container_1_Template, 4, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "nb-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("checkedChange", function SyncDataSelectionComponent_div_5_Template_nb_checkbox_checkedChange_2_listener($event) {
      const contractsSettings_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).ngIf;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(contractsSettings_r7.onlyContracts, $event) || (contractsSettings_r7.onlyContracts = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const contractsSettings_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", contractsSettings_r7.entitiesToSync);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("checked", contractsSettings_r7.onlyContracts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 3, "INTEGRATIONS.UPWORK_PAGE.ONLY_CONTRACTS"), "");
  }
}
let SyncDataSelectionComponent = /*#__PURE__*/(() => {
  let SyncDataSelectionComponent = class SyncDataSelectionComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(_us, translateService, toastrService, dialogRef, errorHandlingService) {
      super(translateService);
      this._us = _us;
      this.translateService = translateService;
      this.toastrService = toastrService;
      this.dialogRef = dialogRef;
      this.errorHandlingService = errorHandlingService;
      this.contractsSettings$ = this._us.contractsSettings$;
    }
    ngOnInit() {}
    syncData() {
      this._us.syncDataWithContractRelated(this.contracts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        this.toastrService.success(this.getTranslation('INTEGRATIONS.UPWORK_PAGE.CONTRACTS_RELATED_DATA'));
        this.dialogRef.close();
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .catchError */ .W)(err => {
        this.errorHandlingService.handleError(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    setSelectedEmployee(employee) {
      if (employee) {
        this._us.setSelectedEmployeeId(employee.id);
      }
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function SyncDataSelectionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SyncDataSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .UpworkStoreService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: SyncDataSelectionComponent,
        selectors: [["ngx-sync-data-selection"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 13,
        vars: 9,
        consts: [["taskDueDatePicker", ""], [1, "sync-data-selection"], ["class", "switcher-wrapper", 4, "ngIf"], [1, "dialog-footer"], ["nbButton", "", "status", "primary", 1, "mr-2", 3, "click"], ["icon", "edit-outline", 1, "mr-1"], [1, "switcher-wrapper"], [4, "ngFor", "ngForOf"], [1, "only-contracts", 3, "checkedChange", "checked"], ["labelPosition", "start", "status", "basic", 3, "checkedChange", "checked", "disabled"], ["class", "datepicker", 4, "ngIf"], [1, "datepicker"], [1, "employee-selector", 3, "selectionChanged", "skipGlobalChange", "showAllEmployeesOption"], [1, "datepicker-wrapper"], ["for", "dueDate", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", 3, "ngModelChange", "placeholder", "nbDatepicker", "ngModel", "disabled"], [3, "max"]],
        template: function SyncDataSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, SyncDataSelectionComponent_div_5_Template, 6, 5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-footer")(8, "div", 3)(9, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function SyncDataSelectionComponent_Template_button_click_9_listener() {
              return ctx.syncData();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "INTEGRATIONS.SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, ctx.contractsSettings$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 7, "BUTTONS.SYNC"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbToggleComponent */ .YF2, _ui_core_shared_src_lib_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_11__/* .EmployeeSelectorComponent */ .R, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgModel */ .vS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .AsyncPipe */ .Jj],
        styles: [".datepicker[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: flex;\n}\n\n.employee-selector[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-right: 20px;\n  flex: 1;\n}\n\n.only-contracts[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.datepicker-wrapper[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.switcher-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.switcher-wrapper[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%] {\n  display: flex;\n}\n.switcher-wrapper[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]     .toggle-label {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.tied-entities-wrapper[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.visible[_ngcontent-%COMP%] {\n  height: 50px;\n  transition: 0.2s all ease-in-out;\n}\n\n.not-visible[_ngcontent-%COMP%] {\n  transition: 0.2s all ease-in-out;\n  height: 0px;\n  visibility: hidden;\n}\n\n.tied-entity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.entity-more-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: -20px;\n}\n.entity-more-options[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin: 0 5px 0 0;\n}"]
      });
    }
  };
  SyncDataSelectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .UpworkStoreService */ .T, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X])], SyncDataSelectionComponent);
  return SyncDataSelectionComponent;
})();


/***/ }),

/***/ 42197:
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

/***/ 42825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ UpworkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42851);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61280);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55389);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60006);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90910);














let UpworkComponent = /*#__PURE__*/(() => {
  let UpworkComponent = class UpworkComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(_router, translateService, _activatedRoute, _upworkStore, _store) {
      super(translateService);
      this._router = _router;
      this.translateService = translateService;
      this._activatedRoute = _activatedRoute;
      this._upworkStore = _upworkStore;
      this._store = _store;
      this.tabs = [];
      this.menus = [];
    }
    ngOnInit() {
      this._loadTabs();
      this._applyTranslationOnTabsActions();
      this._activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(params => this.integrationId = params['id']), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => this._loadMenus())).subscribe();
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => this._getConfig()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     *
     */
    _getConfig() {
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      const integrationId = this.integrationId;
      this._upworkStore.getConfig({
        integrationId,
        organizationId,
        tenantId
      }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     *
     * @param tabName
     * @returns
     */
    getRoute(tabName) {
      return `./${tabName}`;
    }
    /**
     *
     */
    _loadTabs() {
      this.tabs = [{
        title: this.getTranslation('INTEGRATIONS.UPWORK_PAGE.ACTIVITIES'),
        icon: 'trending-up-outline',
        responsive: true,
        route: this.getRoute('activities')
      }, {
        title: this.getTranslation('INTEGRATIONS.UPWORK_PAGE.REPORTS'),
        icon: 'file-text-outline',
        responsive: true,
        route: this.getRoute('reports')
      }, {
        title: this.getTranslation('INTEGRATIONS.UPWORK_PAGE.TRANSACTIONS'),
        icon: 'flip-outline',
        responsive: true,
        route: this.getRoute('transactions')
      }, {
        title: this.getTranslation('INTEGRATIONS.UPWORK_PAGE.CONTRACTS'),
        icon: 'book-outline',
        responsive: true,
        route: this.getRoute('contracts')
      }];
    }
    /**
     *
     */
    _loadMenus() {
      this.menus = [{
        title: this.getTranslation('INTEGRATIONS.RE_INTEGRATE'),
        icon: 'text-outline',
        link: `pages/integrations/upwork/regenerate`
      }, {
        title: this.getTranslation('INTEGRATIONS.SETTINGS'),
        icon: 'settings-2-outline',
        link: `pages/integrations/upwork/${this.integrationId}/settings`
      }];
    }
    /**
     *
     */
    _applyTranslationOnTabsActions() {
      this.translateService.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => {
        this._loadTabs();
        this._loadMenus();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Navigate to the "Integrations" page.
     */
    navigateToIntegrations() {
      this._router.navigate(['/pages/integrations']);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function UpworkComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || UpworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .UpworkStoreService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .VBU({
        type: UpworkComponent,
        selectors: [["ngx-upwork"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 12,
        vars: 6,
        consts: [[1, "card-sroll"], [1, "float-left", 3, "click", "haveLink"], ["size", "small", 1, "float-left", "pt-2"], [1, "toggle-layout", "p-0"], ["icon", "settings-2-outline", 3, "nbContextMenu"], ["fullWidth", "", 3, "tabs"]],
        template: function UpworkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "ngx-back-navigation", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function UpworkComponent_Template_ngx_back_navigation_click_2_listener() {
              return ctx.navigateToIntegrations();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(3, "nb-actions", 2)(4, "nb-action", 3)(5, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(8, "nb-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-body")(10, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(11, "nb-route-tabset", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("haveLink", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(7, 4, "MENU.UPWORK"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("nbContextMenu", ctx.menus);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("tabs", ctx.tabs);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbActionComponent */ .kK0, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbActionsComponent */ .pb1, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbContextMenuDirective */ .yUn, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbRouteTabsetComponent */ .ssE, _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_10__/* .BackNavigationComponent */ .r, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  UpworkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .Ix, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .UpworkStoreService */ .T, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il])], UpworkComponent);
  return UpworkComponent;
})();


/***/ }),

/***/ 42851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24511);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12347);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 44795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11681);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94178);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12347);



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

/***/ 45843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81603);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11681);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24511);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44795);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24430);





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

/***/ 47825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ DateViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11031);





function DateViewComponent_nb_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "POP_UPS.RECURRING_EXPENSE"));
  }
}
let DateViewComponent = /*#__PURE__*/(() => {
  class DateViewComponent {
    static {
      this.ɵfac = function DateViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DateViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: DateViewComponent,
        selectors: [["ngx-date-view"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 4,
        vars: 4,
        consts: [["icon", "sync-outline", 3, "nbTooltip", 4, "ngIf"], ["icon", "sync-outline", 3, "nbTooltip"]],
        template: function DateViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "dateFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, DateViewComponent_nb_icon_3_Template, 2, 3, "nb-icon", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, ctx.value), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.recurring);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipDirective */ .BmQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_4__/* .DateFormatPipe */ .a],
        encapsulation: 2
      });
    }
  }
  return DateViewComponent;
})();

/***/ }),

/***/ 49341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8602);

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

/***/ 52074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ readableStreamLikeToAsyncGenerator),
/* harmony export */   U: () => (/* binding */ isReadableStreamLike)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13553);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24430);


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

/***/ 52866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24430);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ 54113:
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

/***/ 54306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8602);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94178);


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

/***/ 55389:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ UntilDestroy),
/* harmony export */   s: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40847);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72298);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85361);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(440);



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

/***/ 55456:
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

/***/ 56961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ms: () => (/* binding */ SafeSubscriber),
/* harmony export */   vU: () => (/* binding */ Subscriber)
/* harmony export */ });
/* unused harmony export EMPTY_OBSERVER */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24430);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72298);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54113);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36807);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33002);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85576);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94487);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73155);








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

/***/ 59548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70838);

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

/***/ }),

/***/ 60006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ UpworkStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55801);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79708);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);
/* harmony import */ var _upwork_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8034);
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);








const DEFAULT_DATE_RANGE = {
  start: new Date(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'months').format('YYYY-MM-DD')),
  end: new Date()
};
const contractSettings = {
  entitiesToSync: [{
    name: 'Work Diary',
    key: 'workDiary',
    relatedTo: ['TimeSlot', 'TimeLog', 'Timesheet', 'User'],
    sync: true,
    datePicker: {
      max: new Date(),
      selectedDate: new Date()
    }
  }, {
    name: 'Report',
    key: 'report',
    relatedTo: ['Income', 'Expense'],
    sync: true,
    datePicker: {
      max: new Date(),
      selectedDate: new Date()
    }
  }, {
    name: 'Proposal',
    key: 'proposal',
    relatedTo: [],
    sync: true,
    datePicker: {
      max: new Date(),
      selectedDate: new Date()
    }
  }],
  onlyContracts: false
};
let UpworkStoreService = /*#__PURE__*/(() => {
  class UpworkStoreService {
    constructor(_upworkService, _storeService) {
      this._upworkService = _upworkService;
      this._storeService = _storeService;
      this._config$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t(null);
      this._contracts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t([]);
      this.contracts$ = this._contracts$.asObservable();
      this._selectedIntegrationId$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t(null);
      this._contractsSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t(contractSettings);
      this.contractsSettings$ = this._contractsSettings$.asObservable();
      this._dateRangeActivity$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t(DEFAULT_DATE_RANGE);
      this.dateRangeActivity$ = this._dateRangeActivity$.asObservable();
      this._reports$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t(null);
      this.reports$ = this._reports$.asObservable();
    }
    /**
     * Retrieves contracts from Upwork service.
     *
     * @returns An observable stream of IEngagement[] representing contracts.
     */
    getContracts() {
      const contracts$ = this._contracts$.getValue();
      if (contracts$) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .w; // Return empty observable if contracts$ already has a value
      }
      return this._config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(config => config ? this._upworkService.getContracts(config) : rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .w), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(contracts => this._contracts$.next(contracts)));
    }
    /**
     * Get upwork income/expense reports
     */
    loadReports(organization) {
      const {
        id: organizationId,
        tenantId
      } = organization;
      const relations = {
        income: ['employee', 'employee.user'],
        expense: ['employee', 'employee.user', 'vendor', 'category']
      };
      const dateRange = this._dateRangeActivity$.getValue();
      const integrationId = this._selectedIntegrationId$.getValue();
      const data = JSON.stringify({
        relations,
        filter: {
          dateRange,
          ...{
            organizationId,
            tenantId
          }
        }
      });
      return this._upworkService.getAllReports({
        integrationId,
        data
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .map */ .T)(reports => reports.items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(reports => this._reports$.next(reports)));
    }
    /**
     * Sets the selected integration ID.
     * @param integrationId The ID of the integration to set.
     */
    setSelectedIntegrationId(integrationId) {
      this._selectedIntegrationId$.next(integrationId);
    }
    /**
     * Syncs contracts with Upwork.
     * @param contracts The contracts to sync.
     * @returns An observable that completes after syncing contracts.
     */
    syncContracts(contracts) {
      const integrationId = this._selectedIntegrationId$.getValue();
      const {
        id: organizationId,
        tenantId
      } = this.getSelectedOrganization();
      return this._upworkService.syncContracts({
        integrationId,
        organizationId,
        tenantId,
        contracts,
        employeeId: this.employeeId
      });
    }
    /**
     * Syncs data related to contracts with Upwork.
     * @param contracts The contracts to sync data for.
     * @returns An observable that completes after syncing data related to contracts.
     */
    syncDataWithContractRelated(contracts) {
      const config = this._config$.getValue();
      const settings = this._contractsSettings$.getValue();
      if (settings.onlyContracts) {
        return this.syncContracts(contracts);
      }
      const entitiesToSync = settings.entitiesToSync.filter(entity => entity.sync);
      if (!entitiesToSync.length) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .w;
      }
      const integrationId = this._selectedIntegrationId$.getValue();
      const {
        id: organizationId,
        tenantId
      } = this.getSelectedOrganization();
      const {
        provider__reference: providerReferenceId,
        provider__id: providerId
      } = contracts.find(contract => true // Modify condition based on your logic to find provider details
      );
      return this._upworkService.syncContractsRelatedData({
        integrationId,
        organizationId,
        tenantId,
        contracts,
        entitiesToSync,
        config,
        employeeId: this.employeeId,
        providerId,
        providerReferenceId
      });
    }
    /**
     * Sets the selected employee ID.
     * @param employeeId The ID of the employee to set.
     */
    setSelectedEmployeeId(employeeId) {
      this.employeeId = employeeId;
    }
    /**
     * Sets the filter date range for Upwork activities.
     * @param dateRange The date range to set.
     */
    setFilterDateRange(dateRange) {
      const {
        start,
        end
      } = dateRange;
      this._dateRangeActivity$.next({
        start: start || DEFAULT_DATE_RANGE.start,
        end: end || DEFAULT_DATE_RANGE.end
      });
    }
    /**
     * Gets the configuration for Upwork API.
     * @param input The input parameters to find the configuration.
     * @returns An observable of the Upwork API configuration.
     */
    getConfig(input) {
      const {
        integrationId,
        organizationId,
        tenantId
      } = input;
      this.setSelectedIntegrationId(integrationId);
      const config$ = this._config$.getValue();
      if (config$) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY */ .w;
      }
      const data = JSON.stringify({
        filter: {
          ...{
            organizationId,
            tenantId
          }
        }
      });
      return this._upworkService.getConfig({
        integrationId,
        data
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(config => this._config$.next(config)));
    }
    /*
     * Get selected organization from header dropdown
     */
    getSelectedOrganization() {
      return this._storeService.selectedOrganization;
    }
    static {
      this.ɵfac = function UpworkStoreService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || UpworkStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_upwork_service__WEBPACK_IMPORTED_MODULE_7__/* .UpworkService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_store_store_service__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: UpworkStoreService,
        factory: UpworkStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return UpworkStoreService;
})();

/***/ }),

/***/ 61280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24430);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24511);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12347);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67404);




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

/***/ 62525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54306);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52074);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__/* .scheduleAsyncIterable */ .M)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__/* .readableStreamLikeToAsyncGenerator */ .C)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ }),

/***/ 63090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31748);

const ObjectUnsubscribedError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ 64095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R0: () => (/* binding */ popNumber),
/* harmony export */   lI: () => (/* binding */ popScheduler)
/* harmony export */ });
/* unused harmony export popResultSelector */
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37961);


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

/***/ 67404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 67736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20355);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56961);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__/* .SafeSubscriber */ .Ms({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__/* .EmptyError */ .G());
        }
      }
    });
    source.subscribe(subscriber);
  });
}
//# sourceMappingURL=firstValueFrom.js.map

/***/ }),

/***/ 67870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ IntegrationUpworkUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99209);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8539);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98048);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57832);
/* harmony import */ var _integration_upwork_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let IntegrationUpworkUiModule = /*#__PURE__*/(() => {
  class IntegrationUpworkUiModule {
    static {
      this.ɵfac = function IntegrationUpworkUiModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationUpworkUiModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: IntegrationUpworkUiModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbActionsModule */ ._A2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCalendarKitModule */ .VmO, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbContextMenuModule */ .DkL, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbRouteTabsetModule */ .x$5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateModule */ .h.forRoot({
          defaultLanguage: (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .getBrowserLanguage */ .x)(),
          // Get the browser language and fall back to a default if needed
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateLoader */ .Wr,
            useFactory: _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_4__/* .HttpLoaderFactory */ .M,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq]
          }
        }), _integration_upwork_routes__WEBPACK_IMPORTED_MODULE_6__/* .IntegrationUpworkRoutes */ .p, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .SelectorsModule */ .b, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .TableComponentsModule */ .p]
      });
    }
  }
  return IntegrationUpworkUiModule;
})();

/***/ }),

/***/ 70793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ InvoiceTotalValueComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42128);








let InvoiceTotalValueComponent = /*#__PURE__*/(() => {
  let InvoiceTotalValueComponent = class InvoiceTotalValueComponent {
    constructor(store) {
      this.store = store;
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(organization => {
        this.organization = organization;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    static {
      this.ɵfac = function InvoiceTotalValueComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoiceTotalValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InvoiceTotalValueComponent,
        selectors: [["ga-invoice-total-amount"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 4,
        vars: 7,
        template: function InvoiceTotalValueComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(2, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(3, "position");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .i5U(3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, ctx.value, ctx.rowData == null ? null : ctx.rowData.currency), ctx.organization == null ? null : ctx.organization.currencyPosition), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyPipe */ .oe, _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_6__/* .CurrencyPositionPipe */ .n],
        encapsulation: 2
      });
    }
  };
  InvoiceTotalValueComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il])], InvoiceTotalValueComponent);
  return InvoiceTotalValueComponent;
})();


/***/ }),

/***/ 70838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7620);

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

/***/ 70976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64095);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85361);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__/* .from */ .H)(args, scheduler);
}
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 72298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kn: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Uv: () => (/* binding */ isSubscription),
/* harmony export */   yU: () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24430);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83768);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88267);



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

/***/ 72468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27811);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36433);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49341);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3780);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54306);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40640);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6513);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77562);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73220);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52866);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(162);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52074);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62525);













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

/***/ 73155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ errorContext),
/* harmony export */   l: () => (/* binding */ captureError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54113);

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

/***/ 73220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55456);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24430);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__/* .iterator */ .l]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ 77562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ 78827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11681);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24511);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12347);



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

/***/ 81298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11681);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12347);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24511);



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

/***/ 81603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24511);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12347);


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

/***/ 82087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24947);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42197);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88267);



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

/***/ 82380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94178);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24511);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12347);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 83707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ContractsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(13553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14572);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42851);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81298);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70976);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35852);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55389);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60006);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47825);
/* harmony import */ var _sync_data_selection_sync_data_selection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26860);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52345);




















let ContractsComponent = /*#__PURE__*/(() => {
  let ContractsComponent = class ContractsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService, _upworkStoreServices, _toastrService, _errorHandlingService, _nbDialogService, _route, _titleCasePipe) {
      super(translateService);
      this.translateService = translateService;
      this._upworkStoreServices = _upworkStoreServices;
      this._toastrService = _toastrService;
      this._errorHandlingService = _errorHandlingService;
      this._nbDialogService = _nbDialogService;
      this._route = _route;
      this._titleCasePipe = _titleCasePipe;
      this.contracts$ = this._upworkStoreServices.contracts$;
      this.selectedContracts = [];
    }
    ngOnInit() {
      this._loadSmartTableSettings();
      this._applyTranslationOnSmartTable();
      this._loadContracts();
      // Subscribe to changes in the query parameters
      this._route.queryParamMap.pipe(
      // Filter out unwanted changes and only proceed if 'openAddDialog' is 'true'
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(params => !!params && params.get('openAddDialog') === 'true'),
      // Debounce the changes to avoid rapid triggering
      // Execute the addIncome method when conditions are met
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.manageEntitiesSync()),
      // Unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Loads contracts from Upwork and handles errors.
     * This method subscribes to the getContracts method of _upworkStoreServices.
     */
    _loadContracts() {
      this._upworkStoreServices.getContracts().pipe(
      // Handle errors using the _errorHandlingService.handleError method
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(error => {
        this._errorHandlingService.handleError(error);
        // Return an observable with a null value to continue the stream
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Loads Smart Table settings for displaying contracts.
     * This method configures the select mode, actions, mode, and columns for the Smart Table.
     */
    _loadSmartTableSettings() {
      // Configure Smart Table settings
      this.smartTableSettings = {
        selectedRowIndex: -1,
        // Initialize the selected row index
        selectMode: 'multi',
        actions: {
          add: false,
          edit: false,
          delete: false,
          select: true
        },
        mode: 'external',
        noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.CONTRACT'),
        columns: {
          engagement_start_date: {
            title: this.getTranslation('SM_TABLE.START_DATE'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .DateViewComponent */ .l,
            valuePrepareFunction: value => moment__WEBPACK_IMPORTED_MODULE_0__.unix(parseInt(value) / 1000),
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          engagement_end_date: {
            title: this.getTranslation('SM_TABLE.END_DATE'),
            type: 'custom',
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .DateViewComponent */ .l,
            isFilterable: false,
            valuePrepareFunction: value => moment__WEBPACK_IMPORTED_MODULE_0__.unix(parseInt(value) / 1000),
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          job__title: {
            title: this.getTranslation('SM_TABLE.JOB_TITLE'),
            type: 'string'
          },
          status: {
            title: this.getTranslation('SM_TABLE.STATUS'),
            type: 'string',
            valuePrepareFunction: value => this._titleCasePipe.transform(value)
          }
        }
      };
    }
    /**
     * Handles selection of contracts.
     *
     * @param selected The selected contracts array.
     */
    selectContract({
      selected
    }) {
      this.selectedContracts = selected;
    }
    /**
     * Opens a dialog to manage entity synchronization.
     * Waits for the dialog to close before resolving.
     */
    manageEntitiesSync() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        try {
          if (_this.selectedContracts.length > 0) {
            // Open the dialog for syncing data selection
            const dialog = _this._nbDialogService.open(_sync_data_selection_sync_data_selection_component__WEBPACK_IMPORTED_MODULE_9__/* .SyncDataSelectionComponent */ .b, {
              context: {
                contracts: _this.selectedContracts
              }
            });
            // Wait for the dialog to close using firstValueFrom
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .firstValueFrom */ ._)(dialog.onClose);
          }
        } catch (error) {
          // Handle any errors that may occur during the process
          console.error('Error in manageEntitiesSync:', error);
          // Optionally display an error message or handle the error accordingly
        }
      })();
    }
    /**
     * Initiates the synchronization of selected contracts with Upwork.
     * Displays a success toast upon successful synchronization.
     */
    syncContracts() {
      // Trigger the synchronization of selected contracts using _upworkStoreServices
      this._upworkStoreServices.syncContracts(this.selectedContracts).pipe(
      // Display a success toast upon successful synchronization
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => {
        this._toastrService.success(this.getTranslation('INTEGRATIONS.UPWORK_PAGE.SYNCED_CONTRACTS'), this.getTranslation('TOASTR.TITLE.SUCCESS'));
      }),
      // Handle errors using the _ehs.handleError method and return an EMPTY observable
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(error => {
        this._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_11__/* .EMPTY */ .w;
      }),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Listens for language changes and applies translations to Smart Table settings accordingly.
     * This method subscribes to the onLangChange event from the translateService.
     */
    _applyTranslationOnSmartTable() {
      // Subscribe to language changes using onLangChange
      this.translateService.onLangChange.pipe(
      // Trigger the loading of Smart Table settings when the language changes
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._loadSmartTableSettings()),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function ContractsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContractsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .UpworkStoreService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_18__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .TitleCasePipe */ .PV));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ContractsComponent,
        selectors: [["ngx-contracts"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵProvidersFeature"] */ .Jv_([_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .TitleCasePipe */ .PV]), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 8,
        vars: 8,
        consts: [[1, "contracts-container"], [1, "mb-3", "mt-3"], ["nbButton", "", "status", "primary", 3, "click", "disabled"], ["icon", "edit-outline", 1, "mr-1"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"]],
        template: function ContractsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .bIt("click", function ContractsComponent_Template_button_click_2_listener() {
              return ctx.manageEntitiesSync();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .j41(6, "angular2-smart-table", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .nI1(7, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function ContractsComponent_Template_angular2_smart_table_userRowSelect_6_listener($event) {
              return ctx.selectContract($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx.selectedContracts.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "BUTTONS.MANAGE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Y8G("settings", ctx.smartTableSettings)("source", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .bMT(7, 6, ctx.contracts$));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbIconComponent */ .tHu, angular2_smart_table__WEBPACK_IMPORTED_MODULE_20__/* .Angular2SmartTableComponent */ .T9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .AsyncPipe */ .Jj],
        styles: [".contracts-table .angular2-smart-actions {\n  text-align: center;\n  width: 5%;\n}\n  .contracts-table .angular2-smart-actions .form-control {\n  width: 15px;\n  display: inline-block;\n}"]
      });
    }
  };
  ContractsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .UpworkStoreService */ .T, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbDialogService */ .S0W, _angular_router__WEBPACK_IMPORTED_MODULE_18__/* .ActivatedRoute */ .nX, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .TitleCasePipe */ .PV])], ContractsComponent);
  return ContractsComponent;
})();


/***/ }),

/***/ 83768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31748);

const UnsubscriptionError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 85361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72468);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11681);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__/* .scheduled */ .c)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(input);
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ 85576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A2: () => (/* binding */ errorNotification),
/* harmony export */   M7: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   ro: () => (/* binding */ nextNotification)
/* harmony export */ });
/* unused harmony export createNotification */
const COMPLETE_NOTIFICATION = (() => createNotification('C', undefined, undefined))();
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

/***/ 88267:
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

/***/ 89933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ UpworkAuthorizeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35852);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42851);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40651);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78827);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55389);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98035);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8034);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90910);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);
var UpworkAuthorizeComponent_1;















let UpworkAuthorizeComponent = /*#__PURE__*/(() => {
  let UpworkAuthorizeComponent = class UpworkAuthorizeComponent {
    static {
      UpworkAuthorizeComponent_1 = this;
    }
    static buildForm(fb) {
      return fb.group({
        consumerKey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators */ .k0.required],
        consumerSecret: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators */ .k0.required]
      });
    }
    constructor(_fb, _upworkService, _activatedRoute, _router, _store, _integrationsService) {
      this._fb = _fb;
      this._upworkService = _upworkService;
      this._activatedRoute = _activatedRoute;
      this._router = _router;
      this._store = _store;
      this._integrationsService = _integrationsService;
      this.form = UpworkAuthorizeComponent_1.buildForm(this._fb);
    }
    ngOnInit() {
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
      this._activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(({
        state
      }) => !!state), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        state
      }) => this.rememberState = state), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this._getUpworkVerifier()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    _getUpworkVerifier() {
      this._activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .switchMap */ .n)(params => {
        if (params && params.oauth_verifier) {
          if (this.organization) {
            const {
              id: organizationId
            } = this.organization;
            const {
              oauth_token,
              oauth_verifier
            } = params;
            return this._upworkService.getAccessToken({
              requestToken: oauth_token,
              verifier: oauth_verifier
            }, organizationId);
          }
        }
        // if remember state is true
        if (this.rememberState) {
          this._checkRememberState();
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_6__/* .EMPTY */ .w;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(res => this._redirectToUpworkIntegration(res.integrationId)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Upwork integration remember state API call
     */
    _checkRememberState() {
      if (!this.organization) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      const state$ = this._integrationsService.getIntegrationByOptions({
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .IntegrationEnum */ .I5.UPWORK,
        organizationId,
        tenantId
      });
      state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(integration => !!integration.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(integration => {
        this._redirectToUpworkIntegration(integration.id);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     *
     * @param config
     * @returns
     */
    authorizeUpwork(config) {
      if (!this.organization || this.form.invalid) {
        return;
      }
      const {
        id: organizationId
      } = this.organization;
      const token$ = this._upworkService.getAccessTokenSecretPair(config, organizationId);
      token$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(token => {
        token.accessToken ? this._redirectToUpworkIntegration(token.integrationId) : window.location.replace(token.url);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     *
     * @param integrationId
     */
    _redirectToUpworkIntegration(integrationId) {
      this._router.navigate(['pages/integrations/upwork', integrationId]);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function UpworkAuthorizeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || UpworkAuthorizeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .UpworkService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .IntegrationsService */ .J));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineComponent"] */ .VBU({
        type: UpworkAuthorizeComponent,
        selectors: [["ngx-upwork-authorize"]],
        standalone: false,
        decls: 27,
        vars: 23,
        consts: [[1, "card-scroll"], [1, "d-flex"], [1, "col-xl-6", "col-12", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "consumerKey", 1, "label"], ["fullWidth", "", "id", "consumerKey", "formControlName", "consumerKey", "type", "text", "nbInput", "", 3, "placeholder"], ["for", "consumerSecret", 1, "label"], ["fullWidth", "", "id", "consumerSecret", "formControlName", "consumerSecret", "type", "text", "nbInput", "", 3, "placeholder"], [1, "hint"], ["icon", "info-outline"], ["nbButton", "", "status", "primary", "size", "small", "outline", "", 3, "disabled"]],
        template: function UpworkAuthorizeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .j41(3, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body")(7, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function UpworkAuthorizeComponent_Template_form_ngSubmit_7_listener() {
              return ctx.authorizeUpwork(ctx.form.value);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .j41(8, "div", 3)(9, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ .nrm(12, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .j41(14, "div", 3)(15, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ .EFF(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ .nrm(18, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .j41(20, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ .nrm(21, "nb-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ .EFF(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .j41(24, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ .EFF(25);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .nI1(26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .bMT(5, 9, "MENU.UPWORK"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .bMT(11, 11, "INTEGRATIONS.UPWORK_PAGE.API_KEY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .bMT(13, 13, "FORM.PLACEHOLDERS.UPWORK_API_KEY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .bMT(17, 15, "INTEGRATIONS.UPWORK_PAGE.SECRET"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .bMT(19, 17, "FORM.PLACEHOLDERS.UPWORK_SECRET"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .bMT(23, 19, "INTEGRATIONS.UPWORK_PAGE.NEXT_STEP_INFO"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .bMT(26, 21, "BUTTONS.NEXT"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbInputDirective */ .i6h, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormControlName */ .JD, _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__/* .BackNavigationComponent */ .r, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9],
        styles: [".hint[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n  border: none !important;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  };
  return UpworkAuthorizeComponent;
})();
UpworkAuthorizeComponent = UpworkAuthorizeComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .UpworkService */ .i, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .IntegrationsService */ .J])], UpworkAuthorizeComponent);


/***/ }),

/***/ 94178:
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

/***/ 94487:
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

/***/ 94712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ observable)
/* harmony export */ });
const observable = /*#__PURE__*/(() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ 97754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45843);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67404);


function mergeAll(concurrent = Infinity) {
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__/* .mergeMap */ .Z)(_util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ })

}]);