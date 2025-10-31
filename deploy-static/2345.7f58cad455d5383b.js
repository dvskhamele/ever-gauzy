"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2345],{

/***/ 1604:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23953);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24602);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90116);




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeys);

/***/ }),

/***/ 2130:
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

/***/ 2216:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66530);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44975);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98583);




/* Node.js helper references. */
var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMap);

/***/ }),

/***/ 2819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71482);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92769);
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21602);
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80599);
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34569);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70286);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84435);








/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_DataView_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A),
  mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_Map_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A),
  promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_Promise_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A),
  setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_Set_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A),
  weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(new ArrayBuffer(1))) != dataViewTag || _Map_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A()) != mapTag || _Promise_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.resolve()) != promiseTag || _Set_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A()) != setTag || _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A()) != weakMapTag) {
  getTag = function (value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);

/***/ }),

/***/ 3049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25383);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48918);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29384);



function take(count) {
  return count <= 0 ? () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY */ .w : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let seen = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}
//# sourceMappingURL=take.js.map

/***/ }),

/***/ 4916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82318);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46013);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74137);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ 5585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13004);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4916);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37780);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65743);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94331);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26623);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9282);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82529);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38981);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41617);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20335);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86476);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36642);













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

/***/ 7782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ms: () => (/* binding */ SafeSubscriber),
/* harmony export */   vU: () => (/* binding */ Subscriber)
/* harmony export */ });
/* unused harmony export EMPTY_OBSERVER */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38887);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23673);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2130);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34758);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55343);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29109);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30134);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20330);








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

/***/ 8670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38887);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 9282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38887);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ 13004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82318);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46013);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74137);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ 13487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25069);

const UnsubscriptionError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 15309:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42727);
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50399);
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69103);
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29154);
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57383);






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object);
    case boolTag:
    case dateTag:
      return new Ctor(+object);
    case dataViewTag:
      return (0,_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(object, isDeep);
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(object, isDeep);
    case mapTag:
      return new Ctor();
    case numberTag:
    case stringTag:
      return new Ctor(object);
    case regexpTag:
      return (0,_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(object);
    case setTag:
      return new Ctor();
    case symbolTag:
      return (0,_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(object);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneByTag);

/***/ }),

/***/ 18844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48918);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29384);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 20330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ errorContext),
/* harmony export */   l: () => (/* binding */ captureError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2130);

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

/***/ 20335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
//# sourceMappingURL=throwUnobservableError.js.map

/***/ }),

/***/ 20440:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60101);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50859);



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(source, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignIn);

/***/ }),

/***/ 20779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ concatAll)
/* harmony export */ });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91789);

function concatAll() {
  return (0,_mergeAll__WEBPACK_IMPORTED_MODULE_0__/* .mergeAll */ .U)(1);
}
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ 21504:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35717);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Object.keys, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);

/***/ }),

/***/ 21602:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29460);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19311);



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_root_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, 'Promise');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);

/***/ }),

/***/ 23673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kn: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Uv: () => (/* binding */ isSubscription),
/* harmony export */   yU: () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38887);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13487);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76388);



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

/***/ 23953:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66710);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69007);



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(result, symbolsFunc(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetAllKeys);

/***/ }),

/***/ 24171:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
    result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneArray);

/***/ }),

/***/ 24602:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56871);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97539);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0,_arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbols);

/***/ }),

/***/ 25069:
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

/***/ 25383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80993);

const EMPTY = /*#__PURE__*/new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 26623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63478);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38887);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__/* .observable */ .s]);
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ 27499:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60101);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90116);



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(source, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssign);

/***/ }),

/***/ 28088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55380);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48918);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29384);



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

/***/ 29109:
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

/***/ 29154:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54883);


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneSymbol);

/***/ }),

/***/ 29384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* unused harmony export OperatorSubscriber */
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7782);

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

/***/ 29589:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87205);


/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return (0,_baseClone_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDeep);

/***/ }),

/***/ 30134:
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

/***/ 32374:
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

/***/ 33118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lI: () => (/* binding */ popScheduler)
/* harmony export */ });
/* unused harmony exports popResultSelector, popNumber */
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8670);


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

/***/ 33657:
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

/***/ 34569:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29460);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19311);



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_root_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, 'WeakMap');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);

/***/ }),

/***/ 34758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2130);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30134);


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

/***/ 36055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ mapTo)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52530);

function mapTo(value) {
  return (0,_map__WEBPACK_IMPORTED_MODULE_0__/* .map */ .T)(() => value);
}
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ 36642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94331);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86476);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__/* .scheduleAsyncIterable */ .M)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__/* .readableStreamLikeToAsyncGenerator */ .C)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ }),

/***/ 36849:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60101);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24602);



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(source, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbols);

/***/ }),

/***/ 37274:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60101);
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49437);



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(source, (0,_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbolsIn);

/***/ }),

/***/ 37780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80993);

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

/***/ 38887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 38981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45289);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38887);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__/* .iterator */ .l]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ 41502:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11561);
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21504);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);

/***/ }),

/***/ 41617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38887);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ 43137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48918);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29384);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82318);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55343);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 45248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ concat)
/* harmony export */ });
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20779);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33118);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99228);



function concat(...args) {
  return (0,_operators_concatAll__WEBPACK_IMPORTED_MODULE_0__/* .concatAll */ .K)()((0,_from__WEBPACK_IMPORTED_MODULE_1__/* .from */ .H)(args, (0,_util_args__WEBPACK_IMPORTED_MODULE_2__/* .popScheduler */ .lI)(args)));
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ 45289:
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

/***/ 45631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45248);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3049);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52773);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36055);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47700);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82318);






function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__/* .concat */ .x)(subscriptionDelay.pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__/* .take */ .s)(1), (0,_ignoreElements__WEBPACK_IMPORTED_MODULE_2__/* .ignoreElements */ .w)()), source.pipe(delayWhen(delayDurationSelector)));
  }
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_3__/* .mergeMap */ .Z)((value, index) => (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__/* .innerFrom */ .Tg)(delayDurationSelector(value, index)).pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__/* .take */ .s)(1), (0,_mapTo__WEBPACK_IMPORTED_MODULE_5__/* .mapTo */ .u)(value)));
}
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ 46013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33657);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48918);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29384);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 46092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23673);

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

/***/ 47700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52530);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82318);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48918);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67508);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38887);





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

/***/ 48918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ operate)
/* harmony export */ });
/* unused harmony export hasLift */
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38887);

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

/***/ 49437:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66710);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15749);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24602);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97539);





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A : function (object) {
  var result = [];
  while (object) {
    (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(result, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(object));
    object = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(object);
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbolsIn);

/***/ }),

/***/ 49523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79567);

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

/***/ 50399:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42727);


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDataView);

/***/ }),

/***/ 50866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Subject)
/* harmony export */ });
/* unused harmony export AnonymousSubject */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80993);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23673);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51405);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76388);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20330);





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

/***/ 51405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25069);

const ObjectUnsubscribedError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ 52345:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nr: () => (/* binding */ ServerDataSource),
/* harmony export */   T9: () => (/* binding */ Angular2SmartTableComponent),
/* harmony export */   fh: () => (/* binding */ Cell),
/* harmony export */   gQ: () => (/* binding */ Angular2SmartTableModule),
/* harmony export */   h0: () => (/* binding */ LocalDataSource),
/* harmony export */   ny: () => (/* binding */ DefaultEditor),
/* harmony export */   yG: () => (/* binding */ DefaultFilter)
/* harmony export */ });
/* unused harmony exports Column, DataSet, DataSource, Row */
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50866);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63007);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60622);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28088);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43137);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18844);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52530);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29589);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86388);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45715);










const _c0 = a0 => ({
  disabled: a0
});
const _c1 = a0 => ({
  active: a0
});
function PagerComponent_nav_0_li_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const page_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", page_r3, " ");
  }
}
function PagerComponent_nav_0_li_14_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PagerComponent_nav_0_li_14_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const page_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.paginate(page_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const page_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(page_r3);
  }
}
function PagerComponent_nav_0_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, PagerComponent_nav_0_li_14_span_1_Template, 4, 1, "span", 13)(2, PagerComponent_nav_0_li_14_a_2_Template, 2, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(3, _c1, ctx_r1.getPage() == page_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.getPage() == page_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.getPage() != page_r3);
  }
}
function PagerComponent_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nav", 3)(1, "ul", 4)(2, "li", 5)(3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PagerComponent_nav_0_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.getPage() == 1 ? false : ctx_r1.paginate(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5, "\xAB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "li", 5)(9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PagerComponent_nav_0_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.getPage() == 1 ? false : ctx_r1.prev());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, PagerComponent_nav_0_li_14_Template, 3, 5, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "li", 5)(16, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PagerComponent_nav_0_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.getPage() == ctx_r1.getLast() ? false : ctx_r1.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "li", 5)(22, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PagerComponent_nav_0_Template_a_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.getPage() == ctx_r1.getLast() ? false : ctx_r1.paginate(ctx_r1.getLast()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(23, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24, "\xBB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(26, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c0, ctx_r1.getPage() == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(7, _c0, ctx_r1.getPage() == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.getPages());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(9, _c0, ctx_r1.getPage() == ctx_r1.getLast()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(11, _c0, ctx_r1.getPage() == ctx_r1.getLast()));
  }
}
function PagerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div");
  }
}
function PagerComponent_nav_2_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.perPageSelectLabel);
  }
}
function PagerComponent_nav_2_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", item_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r6);
  }
}
function PagerComponent_nav_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nav", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, PagerComponent_nav_2_label_1_Template, 2, 1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function PagerComponent_nav_2_Template_select_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onChangePerPage($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, PagerComponent_nav_2_option_3_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.perPageSelectLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r1.perPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.perPageSelect);
  }
}
const _c2 = ["dynamicTarget"];
function CustomEditComponent_ng_template_0_Template(rf, ctx) {}
const _c3 = "[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   select[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}";
function SelectEditorComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", option_r1.value)("selected", option_r1.value === ctx_r1.cell.getRawValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", option_r1.title, " ");
  }
}
function DefaultEditComponent_select_editor_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "select-editor", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onClick($event));
    })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEdited());
    })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onStopEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
  }
}
function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "textarea-editor", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onClick($event));
    })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEdited());
    })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onStopEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
  }
}
function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "checkbox-editor", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
  }
}
function DefaultEditComponent_input_editor_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input-editor", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onClick", function DefaultEditComponent_input_editor_4_Template_input_editor_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onClick($event));
    })("onEdited", function DefaultEditComponent_input_editor_4_Template_input_editor_onEdited_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEdited());
    })("onStopEditing", function DefaultEditComponent_input_editor_4_Template_input_editor_onStopEditing_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onStopEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
  }
}
function EditCellComponent_table_cell_custom_editor_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "table-cell-custom-editor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("edited", function EditCellComponent_table_cell_custom_editor_1_Template_table_cell_custom_editor_edited_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.edited.emit());
    })("stopEditing", function EditCellComponent_table_cell_custom_editor_1_Template_table_cell_custom_editor_stopEditing_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.stopEditing.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
  }
}
function EditCellComponent_table_cell_default_editor_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "table-cell-default-editor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("edited", function EditCellComponent_table_cell_default_editor_2_Template_table_cell_default_editor_edited_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.edited.emit());
    })("stopEditing", function EditCellComponent_table_cell_default_editor_2_Template_table_cell_default_editor_stopEditing_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.stopEditing.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
  }
}
function CustomViewComponent_ng_template_0_Template(rf, ctx) {}
function ViewCellComponent_custom_view_component_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "custom-view-component", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", ctx_r0.cell);
  }
}
function ViewCellComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "bypassSecurityTrust");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(1, 2, ctx_r0.cell.getValue(), ctx_r0.bypassSecurityTrust), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT)("ngClass", ctx_r0.cssClass);
  }
}
function ViewCellComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx_r0.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.cell.getValue());
  }
}
function CellComponent_table_cell_view_mode_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "table-cell-view-mode", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", ctx_r0.cell);
  }
}
function CellComponent_table_cell_edit_mode_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "table-cell-edit-mode", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("edited", function CellComponent_table_cell_edit_mode_1_Template_table_cell_edit_mode_edited_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onEdited());
    })("stopEditing", function CellComponent_table_cell_edit_mode_1_Template_table_cell_edit_mode_stopEditing_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onStopEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", ctx_r0.cell)("inputClass", ctx_r0.inputClass);
  }
}
const _c4 = a0 => ({
  "not-allowed": a0
});
function TbodyEditDeleteComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "bypassSecurityTrust");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TbodyEditDeleteComponent_a_0_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEdit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c4, ctx_r1.editDisabled))("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(1, 2, ctx_r1.editRowButtonContent, ctx_r1.editButtonBypassSecurityTrust), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
function TbodyEditDeleteComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "bypassSecurityTrust");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TbodyEditDeleteComponent_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onDelete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c4, ctx_r1.deleteDisabled))("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(1, 2, ctx_r1.deleteRowButtonContent, ctx_r1.deleteButtonBypassSecurityTrust), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
function TbodyCustomItemComponent_ng_template_0_Template(rf, ctx) {}
function TbodyCustomComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "bypassSecurityTrust");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TbodyCustomComponent_ng_container_0_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const action_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onCustom(action_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const action_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c4, ctx_r2.disableAction(action_r2)))("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(1, 2, ctx_r2.buttonContent(action_r2), ctx_r2.bypassSecurityTrustFor(action_r2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
function TbodyCustomComponent_ng_container_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TbodyCustomComponent_ng_container_0_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const action_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onCustom(action_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "angular2-st-tbody-custom-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const action_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(3, _c4, ctx_r2.disableAction(action_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("action", action_r2)("row", ctx_r2.row);
  }
}
function TbodyCustomComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, TbodyCustomComponent_ng_container_0_a_1_Template, 2, 7, "a", 1)(2, TbodyCustomComponent_ng_container_0_a_2_Template, 2, 5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !action_r2.renderComponent && ctx_r2.showAction(action_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", action_r2.renderComponent && ctx_r2.showAction(action_r2));
  }
}
function TbodyExpandRowComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "bypassSecurityTrust");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TbodyExpandRowComponent_a_0_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onExpand($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c4, ctx_r1.disabled))("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(1, 2, ctx_r1.buttonContent, ctx_r1.bypassSecurityTrust), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
const _c5 = ["expandedRowChild"];
const _c6 = ["angular2-st-tbody", ""];
const _c7 = a0 => ({
  selected: a0
});
function NgxSmartTableTbodyComponent_ng_container_0_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxSmartTableTbodyComponent_ng_container_0_td_2_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.multipleSelectRow.emit(row_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", row_r2.isSelected);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_td_3_angular2_st_tbody_expand_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "angular2-st-tbody-expand", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onExpandRow", function NgxSmartTableTbodyComponent_ng_container_0_td_3_angular2_st_tbody_expand_2_Template_angular2_st_tbody_expand_onExpandRow_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onExpandRow.emit(row_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r2.grid)("row", row_r2);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "td", 9)(1, "angular2-st-tbody-custom", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("custom", function NgxSmartTableTbodyComponent_ng_container_0_td_3_Template_angular2_st_tbody_custom_custom_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.custom.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, NgxSmartTableTbodyComponent_ng_container_0_td_3_angular2_st_tbody_expand_2_Template, 1, 2, "angular2-st-tbody-expand", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "angular2-st-tbody-edit-delete", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("edit", function NgxSmartTableTbodyComponent_ng_container_0_td_3_Template_angular2_st_tbody_edit_delete_edit_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.edit.emit($event));
    })("delete", function NgxSmartTableTbodyComponent_ng_container_0_td_3_Template_angular2_st_tbody_edit_delete_delete_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.delete.emit($event));
    })("editRowSelect", function NgxSmartTableTbodyComponent_ng_container_0_td_3_Template_angular2_st_tbody_edit_delete_editRowSelect_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.editRowSelect.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r2.grid)("row", row_r2)("source", ctx_r2.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.hasChildComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r2.grid)("deleteConfirm", ctx_r2.deleteConfirm)("row", row_r2)("source", ctx_r2.source);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "angular2-st-tbody-create-cancel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r2.grid)("row", row_r2)("editConfirm", ctx_r2.editConfirm)("editCancel", ctx_r2.editCancel);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_ng_container_5_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "angular2-smart-table-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const cell_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", cell_r7)("grid", ctx_r2.grid)("row", row_r2)("isNew", false)("mode", ctx_r2.mode)("editConfirm", ctx_r2.editConfirm)("editCancel", ctx_r2.editCancel)("inputClass", ctx_r2.editInputClass)("isInEditing", row_r2.isInEditing);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_ng_container_5_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "angular2-smart-table-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const cell_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", cell_r7)("grid", ctx_r2.grid)("row", row_r2)("isNew", false)("mode", ctx_r2.mode)("editConfirm", ctx_r2.editConfirm)("editCancel", ctx_r2.editCancel)("inputClass", ctx_r2.editInputClass)("isInEditing", row_r2.isInEditing);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxSmartTableTbodyComponent_ng_container_0_ng_container_5_td_1_Template, 2, 9, "td", 2)(2, NgxSmartTableTbodyComponent_ng_container_0_ng_container_5_th_2_Template, 2, 9, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const cell_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !cell_r7.getColumn().isRowHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", cell_r7.getColumn().isRowHeading);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "angular2-st-tbody-create-cancel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r2.grid)("row", row_r2)("editConfirm", ctx_r2.editConfirm)("editCancel", ctx_r2.editCancel);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_td_7_angular2_st_tbody_expand_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "angular2-st-tbody-expand", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onExpandRow", function NgxSmartTableTbodyComponent_ng_container_0_td_7_angular2_st_tbody_expand_2_Template_angular2_st_tbody_expand_onExpandRow_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onExpandRow.emit(row_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r2.grid)("row", row_r2);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_td_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "td", 9)(1, "angular2-st-tbody-custom", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("custom", function NgxSmartTableTbodyComponent_ng_container_0_td_7_Template_angular2_st_tbody_custom_custom_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.custom.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, NgxSmartTableTbodyComponent_ng_container_0_td_7_angular2_st_tbody_expand_2_Template, 1, 2, "angular2-st-tbody-expand", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "angular2-st-tbody-edit-delete", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("edit", function NgxSmartTableTbodyComponent_ng_container_0_td_7_Template_angular2_st_tbody_edit_delete_edit_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.edit.emit($event));
    })("delete", function NgxSmartTableTbodyComponent_ng_container_0_td_7_Template_angular2_st_tbody_edit_delete_delete_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.delete.emit($event));
    })("editRowSelect", function NgxSmartTableTbodyComponent_ng_container_0_td_7_Template_angular2_st_tbody_edit_delete_editRowSelect_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.editRowSelect.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r2.grid)("row", row_r2)("source", ctx_r2.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.hasChildComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r2.grid)("deleteConfirm", ctx_r2.deleteConfirm)("row", row_r2)("source", ctx_r2.source);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_tr_8_ng_template_2_Template(rf, ctx) {}
function NgxSmartTableTbodyComponent_ng_container_0_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "tr", 18)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, NgxSmartTableTbodyComponent_ng_container_0_tr_8_ng_template_2_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("colspan", ctx_r2.tableColumnsCount);
  }
}
function NgxSmartTableTbodyComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxSmartTableTbodyComponent_ng_container_0_Template_tr_click_1_listener() {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.userSelectRow.emit(row_r2));
    })("mouseover", function NgxSmartTableTbodyComponent_ng_container_0_Template_tr_mouseover_1_listener() {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.rowHover.emit(row_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, NgxSmartTableTbodyComponent_ng_container_0_td_2_Template, 2, 1, "td", 4)(3, NgxSmartTableTbodyComponent_ng_container_0_td_3_Template, 4, 8, "td", 5)(4, NgxSmartTableTbodyComponent_ng_container_0_td_4_Template, 2, 4, "td", 5)(5, NgxSmartTableTbodyComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 1)(6, NgxSmartTableTbodyComponent_ng_container_0_td_6_Template, 2, 4, "td", 5)(7, NgxSmartTableTbodyComponent_ng_container_0_td_7_Template, 4, 8, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, NgxSmartTableTbodyComponent_ng_container_0_tr_8_Template, 4, 1, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("className", ctx_r2.rowClassFunction(row_r2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(9, _c7, row_r2.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isMultiSelectVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !row_r2.isInEditing && ctx_r2.showActionColumnLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", row_r2.isInEditing && ctx_r2.showActionColumnLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.getVisibleCells(row_r2.cells));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", row_r2.isInEditing && ctx_r2.showActionColumnRight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !row_r2.isInEditing && ctx_r2.showActionColumnRight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", row_r2.isExpanded);
  }
}
function NgxSmartTableTbodyComponent_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("colspan", ctx_r2.tableColumnsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r2.noDataMessage, " ");
  }
}
function CheckboxFilterComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CheckboxFilterComponent_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.resetFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.resetText);
  }
}
function SelectFilterComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", option_r1.title, " ");
  }
}
function DefaultFilterComponent_select_filter_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "select-filter", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("filter", function DefaultFilterComponent_select_filter_1_Template_select_filter_filter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("query", ctx_r1.query)("inputClass", ctx_r1.inputClass)("debounceTime", ctx_r1.debounceTime)("column", ctx_r1.column);
  }
}
function DefaultFilterComponent_checkbox_filter_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "checkbox-filter", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("filter", function DefaultFilterComponent_checkbox_filter_2_Template_checkbox_filter_filter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("query", ctx_r1.query)("inputClass", ctx_r1.inputClass)("debounceTime", ctx_r1.debounceTime)("column", ctx_r1.column);
  }
}
function DefaultFilterComponent_input_filter_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input-filter", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("filter", function DefaultFilterComponent_input_filter_3_Template_input_filter_filter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("query", ctx_r1.query)("inputClass", ctx_r1.inputClass)("debounceTime", ctx_r1.debounceTime)("column", ctx_r1.column);
  }
}
function CustomFilterComponent_ng_template_0_Template(rf, ctx) {}
function FilterComponent_div_0_custom_table_filter_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "custom-table-filter", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("query", ctx_r0.query)("column", ctx_r0.column)("source", ctx_r0.source)("inputClass", ctx_r0.inputClass)("debounceTime", ctx_r0.debounceTime);
  }
}
function FilterComponent_div_0_default_table_filter_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "default-table-filter", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("query", ctx_r0.query)("column", ctx_r0.column)("source", ctx_r0.source)("inputClass", ctx_r0.inputClass)("debounceTime", ctx_r0.debounceTime);
  }
}
function FilterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, FilterComponent_div_0_custom_table_filter_1_Template, 1, 5, "custom-table-filter", 2)(2, FilterComponent_div_0_default_table_filter_2_Template, 1, 5, "default-table-filter", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx_r0.column.filter.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "custom");
  }
}
const _c8 = ["angular2-st-add-button", ""];
function AddButtonComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "bypassSecurityTrust");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function AddButtonComponent_a_0_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onAdd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c4, ctx_r1.disabled))("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(1, 2, ctx_r1.addNewButtonContent, ctx_r1.bypassSecurityTrust), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
const _c9 = ["angular2-st-thead-filters-row", ""];
function TheadFitlersRowComponent_th_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "th", 4);
  }
}
function TheadFitlersRowComponent_th_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("create", function TheadFitlersRowComponent_th_1_Template_th_create_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.create.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r1.grid);
  }
}
function TheadFitlersRowComponent_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "angular2-smart-table-filter", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMapInterpolate1"] */ .ZvI("angular2-smart-th ", column_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.source)("column", column_r3)("inputClass", ctx_r1.filterInputClass)("debounceTime", ctx_r1.filterDebounceTime);
  }
}
function TheadFitlersRowComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("create", function TheadFitlersRowComponent_th_3_Template_th_create_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.create.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r1.grid)("source", ctx_r1.source);
  }
}
const _c10 = ["angular2-st-thead-form-row", ""];
function TheadFormRowComponent_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "td");
  }
}
function TheadFormRowComponent_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "angular2-st-actions", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r0.grid)("createConfirm", ctx_r0.createConfirm)("createCancel", ctx_r0.createCancel);
  }
}
function TheadFormRowComponent_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "angular2-smart-table-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const cell_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cell", cell_r2)("grid", ctx_r0.grid)("isNew", true)("createConfirm", ctx_r0.createConfirm)("createCancel", ctx_r0.createCancel)("inputClass", ctx_r0.addInputClass)("isInEditing", true);
  }
}
function TheadFormRowComponent_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "angular2-st-actions", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r0.grid)("createConfirm", ctx_r0.createConfirm)("createCancel", ctx_r0.createCancel);
  }
}
const _c11 = ["angular2-st-actions-title", ""];
function ColumnTitleComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ColumnTitleComponent_a_0_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1._sort($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", (tmp_1_0 = ctx_r1.currentDirection) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.column.title, " ");
  }
}
function ColumnTitleComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.column.title);
  }
}
function ColumnTitleComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ColumnTitleComponent_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1._hideColumnClicked($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1, "\uD83D\uDDD9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
const _c12 = ["angular2-st-thead-titles-row", ""];
const _c13 = (a0, a1) => ({
  column: a0,
  siblingColumn: a1
});
function TheadTitlesRowComponent_th_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "th", 3)(1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TheadTitlesRowComponent_th_0_Template_input_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectAllRows.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("width", ctx_r1.multiSelectWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx_r1.isAllSelected);
  }
}
function TheadTitlesRowComponent_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "th", 5);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r1.grid);
  }
}
function TheadTitlesRowComponent_th_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const column_r5 = ctx_r3.$implicit;
    const i_r6 = ctx_r3.index;
    const isLast_r7 = ctx_r3.last;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("angular2SmartTableResizer", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(1, _c13, column_r5, isLast_r7 ? undefined : ctx_r1.visibleColumns[i_r6 + 1]));
  }
}
function TheadTitlesRowComponent_th_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "th", 6)(1, "angular2-st-column-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("hide", function TheadTitlesRowComponent_th_2_Template_angular2_st_column_title_hide_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hide.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, TheadTitlesRowComponent_th_2_div_2_Template, 1, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const column_r5 = ctx.$implicit;
    const isLast_r7 = ctx.last;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMapInterpolate1"] */ .ZvI("angular2-smart-th ", column_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("width", column_r5.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", column_r5.classHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.source)("column", column_r5)("isHideable", ctx_r1.isHideable)("multiSort", ctx_r1.grid.isMultiSortEnabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.isResizable && (ctx_r1.showActionColumnRight || !isLast_r7));
  }
}
function TheadTitlesRowComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "th", 5);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r1.grid);
  }
}
const _c14 = ["angular2-st-thead", ""];
function NgxSmartTableTheadComponent_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("hide", function NgxSmartTableTheadComponent_tr_0_Template_tr_hide_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hide.emit($event));
    })("selectAllRows", function NgxSmartTableTheadComponent_tr_0_Template_tr_selectAllRows_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectAllRows.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r1.grid)("isAllSelected", ctx_r1.isAllSelected)("source", ctx_r1.source);
  }
}
function NgxSmartTableTheadComponent_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("create", function NgxSmartTableTheadComponent_tr_1_Template_tr_create_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.create.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r1.grid)("source", ctx_r1.source);
  }
}
function NgxSmartTableTheadComponent_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "tr", 5);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r1.grid)("row", ctx_r1.grid.createFormRow)("createConfirm", ctx_r1.createConfirm)("createCancel", ctx_r1.createCancel);
  }
}
function TagsListComponent_angular2_smart_table_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "angular2-smart-table-tag", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("close", function TagsListComponent_angular2_smart_table_tag_1_Template_angular2_smart_table_tag_close_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.closedTag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("item", tag_r3);
  }
}
function Angular2SmartTableComponent_ng_container_0_angular2_smart_table_tags_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "angular2-smart-table-tags-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("close", function Angular2SmartTableComponent_ng_container_0_angular2_smart_table_tags_list_1_Template_angular2_smart_table_tags_list_close_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onShowColumn($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tags", ctx_r2.notVisibleColumnTagsList);
  }
}
function Angular2SmartTableComponent_ng_container_0_thead_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "thead", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("create", function Angular2SmartTableComponent_ng_container_0_thead_4_Template_thead_create_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.create.emit($event));
    })("selectAllRows", function Angular2SmartTableComponent_ng_container_0_thead_4_Template_thead_selectAllRows_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onSelectAllRows());
    })("hide", function Angular2SmartTableComponent_ng_container_0_thead_4_Template_thead_hide_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onHideColumn($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r2.grid)("isAllSelected", ctx_r2.isAllSelected)("source", ctx_r2.source)("createConfirm", ctx_r2.createConfirm)("createCancel", ctx_r2.createCancel);
  }
}
function Angular2SmartTableComponent_ng_container_0_angular2_smart_table_pager_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "angular2-smart-table-pager", 9);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r2.source)("perPageSelect", ctx_r2.perPageSelect)("perPageSelectLabel", ctx_r2.perPageSelectLabel);
  }
}
function Angular2SmartTableComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, Angular2SmartTableComponent_ng_container_0_angular2_smart_table_tags_list_1_Template, 1, 1, "angular2-smart-table-tags-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 2)(3, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, Angular2SmartTableComponent_ng_container_0_thead_4_Template, 1, 5, "thead", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("edit", function Angular2SmartTableComponent_ng_container_0_Template_tbody_edit_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.edit.emit($event));
    })("delete", function Angular2SmartTableComponent_ng_container_0_Template_tbody_delete_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.delete.emit($event));
    })("custom", function Angular2SmartTableComponent_ng_container_0_Template_tbody_custom_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.custom.emit($event));
    })("userSelectRow", function Angular2SmartTableComponent_ng_container_0_Template_tbody_userSelectRow_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onUserSelectRow($event));
    })("editRowSelect", function Angular2SmartTableComponent_ng_container_0_Template_tbody_editRowSelect_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onEditRowSelect($event));
    })("multipleSelectRow", function Angular2SmartTableComponent_ng_container_0_Template_tbody_multipleSelectRow_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onMultipleSelectRow($event));
    })("onExpandRow", function Angular2SmartTableComponent_ng_container_0_Template_tbody_onExpandRow_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onExpandRow($event));
    })("rowHover", function Angular2SmartTableComponent_ng_container_0_Template_tbody_rowHover_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onRowHover($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, Angular2SmartTableComponent_ng_container_0_angular2_smart_table_pager_6_Template, 1, 3, "angular2-smart-table-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isTagListShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("id", ctx_r2.tableId)("ngClass", ctx_r2.tableClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.isHideHeader || !ctx_r2.isHideSubHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("grid", ctx_r2.grid)("source", ctx_r2.source)("deleteConfirm", ctx_r2.deleteConfirm)("editConfirm", ctx_r2.editConfirm)("editCancel", ctx_r2.editCancel)("rowClassFunction", ctx_r2.rowClassFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isPagerDisplay);
  }
}
class DataSource {
  onChangedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
  onAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
  onUpdatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
  onRemovedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
  refresh() {
    this.emitOnChanged('refresh');
  }
  load(data) {
    this.emitOnChanged('load');
    return Promise.resolve();
  }
  onChanged() {
    return this.onChangedSource.asObservable();
  }
  onAdded() {
    return this.onAddedSource.asObservable();
  }
  onUpdated() {
    return this.onUpdatedSource.asObservable();
  }
  onRemoved() {
    return this.onRemovedSource.asObservable();
  }
  prepend(element) {
    this.emitOnAdded(element);
    this.emitOnChanged('prepend');
    return Promise.resolve();
  }
  append(element) {
    this.emitOnAdded(element);
    this.emitOnChanged('append');
    return Promise.resolve();
  }
  add(element) {
    this.emitOnAdded(element);
    this.emitOnChanged('add');
    return Promise.resolve();
  }
  remove(element) {
    this.emitOnRemoved(element);
    this.emitOnChanged('remove');
    return Promise.resolve();
  }
  update(element, values) {
    this.emitOnUpdated(element);
    this.emitOnChanged('update');
    return Promise.resolve();
  }
  empty() {
    this.emitOnChanged('empty');
    return Promise.resolve();
  }
  /**
   *
   * Array of conf objects
   * [
   *  {field: string, direction: asc|desc|null, compare?: ColumnCompareFunction|null},
   * ]
   * @param conf the configuration to add
   * @param doEmit indicates whether a sort event shall be emitted
   * @returns this data source
   */
  setSort(conf, doEmit) {
    if (doEmit) {
      this.emitOnChanged('sort');
    }
  }
  /**
   *
   * Array of conf objects
   * [
   *  {field: string, direction: asc|desc|null, compare?: ColumnCompareFunction|null},
   * ]
   * @param conf the configuration to add
   * @param doEmit indicates whether a sort event shall be emitted
   * @returns this data source
   */
  updateSort(conf, doEmit) {
    if (doEmit) {
      this.emitOnChanged('sort');
    }
  }
  setFilter(conf, doEmit) {
    if (doEmit) {
      this.emitOnChanged('filter');
    }
  }
  addFilter(fieldConf, doEmit) {
    if (doEmit) {
      this.emitOnChanged('filter');
    }
  }
  removeFilter(fieldName, doEmit) {
    if (doEmit) {
      this.emitOnChanged('filter');
    }
  }
  setPaging(page, perPage, doEmit) {
    if (doEmit) {
      this.emitOnChanged('paging');
    }
  }
  setPage(page, doEmit) {
    if (doEmit) {
      this.emitOnChanged('page');
    }
  }
  emitOnRemoved(element) {
    this.onRemovedSource.next(element);
  }
  emitOnUpdated(element) {
    this.onUpdatedSource.next(element);
  }
  emitOnAdded(element) {
    this.onAddedSource.next(element);
  }
  emitOnChanged(action) {
    this.getElements().then(elements => this.onChangedSource.next({
      action: action,
      elements: elements,
      paging: this.getPaging(),
      filter: this.getFilter(),
      sort: this.getSort()
    }));
  }
}
function defaultObjectComparator(direction, left, right) {
  if (left == null && right == null) {
    return 0;
  }
  // only one of them can be null now
  if (left == null || left < right) {
    return -1 * direction;
  }
  if (right == null || right < left) {
    return direction;
  }
  // none of them can be null now, and they must be equal
  return 0;
}
function defaultNumberComparator(direction, left, right) {
  // the default comparator already does what we want, so this function is merely a type-safe alias
  return defaultObjectComparator(direction, left, right);
}
function defaultStringComparator(direction, left, right) {
  if (left == null && right == null) {
    return 0;
  } else if (left == null) {
    return -1 * direction;
  } else if (right == null) {
    return direction;
  } else {
    return left.localeCompare(right) * direction;
  }
}
/**
 * Compares two values with special treatment for numbers and strings.
 *
 * The rule is: if both values are of type number (or null), they are compared as if they were numbers.
 * If both values are either null, undefined or typeof string, they are compared as strings using the current locale.
 * Otherwise, they are compared using their natural ordering.
 *
 * Null values are considered less than any non-null element. Null and undefined are considered equal.
 *
 * @param direction 1 for ascending and -1 for descending (other values are not allowed)
 * @param left the left value
 * @param right the right value
 */
function defaultComparator(direction, left, right) {
  const leftIsNumeric = left == null || !isNaN(parseFloat(left)) && !isNaN(left - 0);
  const rightIsNumeric = right == null || !isNaN(parseFloat(right)) && !isNaN(right - 0);
  const leftIsString = left == null || typeof left === 'string';
  const rightIsString = right == null || typeof right === 'string';
  if (leftIsNumeric && rightIsNumeric) {
    return defaultNumberComparator(direction, Number(left), Number(right));
  } else if (leftIsString && rightIsString) {
    return defaultStringComparator(direction, left, right);
  } else {
    return defaultObjectComparator(direction, left, right);
  }
}
class LocalPager {
  static paginate(data, page, perPage) {
    return data.slice(perPage * (page - 1), perPage * page);
  }
}

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
const deepExtend = function (...objects) {
  if (arguments.length < 1 || typeof arguments[0] !== 'object') {
    return false;
  }
  if (arguments.length < 2) {
    return arguments[0];
  }
  const target = arguments[0];
  // convert arguments to array and cut off target object
  const args = Array.prototype.slice.call(arguments, 1);
  let val, src;
  args.forEach(obj => {
    // skip argument if it is array or isn't object
    if (typeof obj !== 'object' || Array.isArray(obj)) {
      return;
    }
    Object.keys(obj).forEach(function (key) {
      src = target[key]; // source value
      val = obj[key]; // new value
      // recursion prevention
      if (val === target) {
        return;
        /**
         * if new value isn't object then just overwrite by new value
         * instead of extending.
         */
      } else if (typeof val !== 'object' || val === null) {
        target[key] = val;
        return;
        // just clone arrays (and recursive clone objects inside)
      } else if (Array.isArray(val)) {
        target[key] = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(val);
        return;
        // overwrite by new value if source isn't object or array
      } else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
        target[key] = deepExtend({}, val);
        return;
        // source value and new value is objects both, extending...
      } else {
        target[key] = deepExtend(src, val);
        return;
      }
    });
  });
  return target;
};
class Deferred {
  promise;
  resolve;
  reject;
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object = {}, name, defaultValue) {
  const keys = name.split('.');
  // clone the object
  let level = deepExtend({}, object);
  keys.forEach(k => {
    if (typeof level !== 'undefined') {
      level = level[k];
    }
  });
  return typeof level === 'undefined' ? defaultValue : level;
}
function getPageForRowIndex(index, perPage) {
  // we need to add 1 to convert 0-based index to 1-based page number.
  return Math.floor(index / perPage) + 1;
}
class LocalDataSource extends DataSource {
  data = [];
  filteredAndSorted = [];
  sortConf = [];
  filterConf = [];
  pagingConf = {
    page: 1,
    perPage: 10
  };
  selectedItems = [];
  constructor(data = []) {
    super();
    this.data = data;
  }
  load(data) {
    this.data = data;
    return super.load(data);
  }
  prepend(element) {
    this.reset(true);
    this.data.unshift(element);
    return super.prepend(element);
  }
  append(element) {
    this.reset(true);
    this.data.push(element);
    return super.append(element);
  }
  add(element) {
    this.data.push(element);
    return super.add(element);
  }
  remove(element) {
    this.data = this.data.filter(el => el !== element);
    return super.remove(element);
  }
  update(element, values) {
    return new Promise((resolve, reject) => {
      this.find(element).then(found => {
        found = deepExtend(found, values);
        super.update(found, values).then(resolve).catch(reject);
      }).catch(reject);
    });
  }
  find(element) {
    const found = this.data.find(el => el === element);
    if (found) {
      return Promise.resolve(found);
    }
    return Promise.reject(new Error('Element was not found in the dataset'));
  }
  getElements() {
    const data = this.data.slice(0);
    return Promise.resolve(this.prepareData(data));
  }
  getFilteredAndSorted() {
    let data = this.data.slice(0);
    this.prepareData(data); // this would return only the current page, but it sets filteredAndSorted array
    return Promise.resolve(this.filteredAndSorted);
  }
  getAll() {
    const data = this.data.slice(0);
    return Promise.resolve(data);
  }
  reset(silent = false) {
    this.setFilter([], false);
    this.setSort([], false);
    this.setPage(1, !silent);
  }
  empty() {
    this.data = [];
    return super.empty();
  }
  count() {
    return this.filteredAndSorted.length;
  }
  toggleItem(row, isSelected) {
    if (isSelected) this.selectedItems.push(row);else this.selectedItems = this.selectedItems.filter(i => i !== row);
  }
  // TODO: actually there is no need that this is an async function, but changing the signature would be a breaking change
  selectAllItems(_x) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* (checked, onlyFiltered = false) {
      if (checked) {
        const itemsToSelect = onlyFiltered ? _this.filteredAndSorted : _this.data;
        _this.selectedItems = itemsToSelect.slice(0);
      } else _this.selectedItems = [];
    }).apply(this, arguments);
  }
  isEveryElementSelected(onlyFiltered = false, reportEmptyAsFalse = false) {
    const itemsToCheck = onlyFiltered ? this.filteredAndSorted : this.data;
    if (itemsToCheck.length === 0) {
      return !reportEmptyAsFalse;
    }
    if (onlyFiltered) {
      // TODO: this is an ugly and costly O(n²) check, but currently we have no other choice....
      if (itemsToCheck.length !== this.selectedItems.length) return false;
      for (const item of itemsToCheck) {
        if (this.selectedItems.indexOf(itemsToCheck) < 0) return false;
      }
      return true;
    } else {
      return itemsToCheck.length === this.selectedItems.length;
    }
  }
  getSelectedItems() {
    return this.selectedItems;
  }
  setSort(conf, doEmit = true) {
    this.sortConf = conf;
    super.setSort(conf, doEmit);
  }
  updateSort(conf, doEmit = true) {
    if (conf !== null) {
      conf.forEach(fieldConf => {
        const found = this.sortConf.findIndex(c => c.field === fieldConf.field);
        if (found >= 0) {
          if (fieldConf.compare === undefined) {
            // keep the previously configured compare function
            fieldConf.compare = this.sortConf[found].compare;
          }
          this.sortConf.splice(found, 1);
        }
        // push the updated config to the front of the array (highest sort priority)
        this.sortConf = [fieldConf, ...this.sortConf];
      });
    }
    super.setSort(conf, doEmit);
  }
  /**
   *
   * Replaces all filters with the given array of filters.
   * [
   *  {field: string, search: string, filter: ColumnCompareFunction|null},
   * ]
   *
   * @param conf the array of filters
   * @param doEmit true if an event shall be emitted that triggers a table refresh
   */
  setFilter(conf, doEmit = true) {
    this.filterConf = conf;
    super.setFilter(conf, doEmit);
  }
  /**
   *
   * Adds a filter to this data source.
   *
   * {field: string, search: string, filter: ColumnFilterFunction|null},
   *
   * @param fieldConf the filter config
   * @param doEmit true if an event shall be emitted that triggers a table refresh
   */
  addFilter(fieldConf, doEmit = true) {
    let found = false;
    this.filterConf.forEach((currentFieldConf, index) => {
      if (currentFieldConf.field === fieldConf.field) {
        this.filterConf[index] = fieldConf;
        found = true;
      }
    });
    if (!found) {
      this.filterConf.push(fieldConf);
    }
    super.addFilter(fieldConf, doEmit);
  }
  removeFilter(fieldName, doEmit = true) {
    this.filterConf = this.filterConf.filter(c => c.field !== fieldName);
    super.removeFilter(fieldName, doEmit);
  }
  setPaging(page, perPage, doEmit = true) {
    this.pagingConf.page = page;
    this.pagingConf.perPage = perPage;
    super.setPaging(page, perPage, doEmit);
  }
  setPage(page, doEmit = true) {
    this.pagingConf.page = page;
    super.setPage(page, doEmit);
  }
  getSort() {
    return this.sortConf;
  }
  getFilter() {
    return this.filterConf;
  }
  getPaging() {
    return this.pagingConf;
  }
  prepareData(data) {
    data = this.filter(data);
    data = this.sort(data);
    this.filteredAndSorted = data.slice(0);
    return this.paginate(data);
  }
  sort(data) {
    // only use the part of the config where sorting is enabled
    const sortConfig = this.sortConf.filter(c => c.direction !== null);
    return data.sort((a, b) => {
      for (const sc of sortConfig) {
        const dir = sc.direction === 'asc' ? 1 : -1;
        const compare = sc.compare ? sc.compare : defaultComparator;
        let parts = sc.field.split(".");
        let propA = a;
        for (let i = 0; i < parts.length && typeof propA !== 'undefined'; i++) {
          propA = propA[parts[i]];
        }
        let propB = b;
        for (let i = 0; i < parts.length && typeof propB !== 'undefined'; i++) {
          propB = propB[parts[i]];
        }
        const result = compare.call(null, dir, propA, propB);
        if (result !== 0) return result;
      }
      return 0;
    });
  }
  filter(data) {
    if (this.filterConf) {
      for (const filterConf of this.filterConf) {
        const filter = filterConf.filter ?? ((v, s) => (v?.toString() ?? '').toLowerCase().includes(s.toLowerCase()));
        data = data.filter(el => {
          let parts = filterConf.field.split(".");
          let prop = el;
          for (let i = 0; i < parts.length && typeof prop !== 'undefined'; i++) {
            prop = prop[parts[i]];
          }
          return filter.call(null, prop, filterConf.search);
        });
      }
    }
    return data;
  }
  paginate(data) {
    return LocalPager.paginate(data, this.pagingConf.page, this.pagingConf.perPage);
  }
}
class Cell {
  value;
  row;
  column;
  cachedValue;
  cachedPreparedValue = '';
  newValue;
  constructor(value, row, column) {
    this.value = value;
    this.row = row;
    this.column = column;
    this.resetValue();
  }
  getColumn() {
    return this.column;
  }
  getRow() {
    return this.row;
  }
  /**
   * Gets the value (after post-processing with valuePrepareFunction).
   */
  getValue() {
    if (this.cachedValue !== this.value) {
      this.cachedPreparedValue = this.getPreparedValue();
      this.cachedValue = this.value;
    }
    return this.cachedPreparedValue;
  }
  getPreparedValue() {
    try {
      const prepare = this.column.valuePrepareFunction ?? (v => v?.toString() ?? '');
      return prepare.call(null, this.value, this);
    } catch (_) {
      console.error(`The valuePrepareFunction of column ${this.column.id} threw an error. Using simple toString() as fallback.`);
      console.error('Please check the implementation of valuePrepareFunction.');
      console.error('If this error was raised when creating a new row, please also check the implementation of valueCreateFunction.');
      return this.value?.toString() ?? '';
    }
  }
  /**
   * Returns the raw value that has not been post-processed by the valuePrepareFunction.
   */
  getRawValue() {
    return this.value;
  }
  setValue(value) {
    const store = this.column.valueStoreFunction ?? (v => v);
    this.newValue = store.call(null, value, this);
  }
  /**
   * Returns the new raw value after being post-processed by the valueStoreFunction.
   */
  getNewRawValue() {
    return this.newValue;
  }
  getId() {
    return this.getColumn().id;
  }
  getTitle() {
    return this.getColumn().title;
  }
  isEditable() {
    if (this.getRow().index === -1) {
      return this.getColumn().isAddable ?? false;
    } else {
      return this.getColumn().isEditable ?? false;
    }
  }
  resetValue() {
    this.cachedValue = this.value;
    this.newValue = this.value;
    this.cachedPreparedValue = this.getPreparedValue();
  }
}
class Row {
  index;
  data;
  _dataSet;
  isSelected = false;
  isInEditing = false;
  isExpanded = false;
  cells = [];
  constructor(index, data, _dataSet) {
    this.index = index;
    this.data = data;
    this._dataSet = _dataSet;
    this.process();
  }
  getCell(column) {
    const theCell = this.cells.find(el => el.getColumn() === column);
    if (!theCell) throw new Error('There is no cell with such Column');
    return theCell;
  }
  getCells() {
    return this.cells;
  }
  getData() {
    return this.data;
  }
  getIsSelected() {
    return this.isSelected;
  }
  getIsExpanded() {
    return this.isExpanded;
  }
  getNewData() {
    const values = Object.assign({}, this.data);
    this.getCells().forEach(cell => values[cell.getColumn().id] = cell.getNewRawValue());
    return values;
  }
  setData(data) {
    this.data = data;
    this.process();
  }
  process() {
    this.cells = [];
    this._dataSet.getColumns().forEach(column => {
      this.cells.push(new Cell(this.data[column.id], this, column));
    });
  }
}
class Column {
  id;
  settings;
  dataSet;
  placeholder;
  title;
  hide;
  type;
  sanitizer;
  classHeader;
  classContent;
  width;
  /**
   * If this column was resized, this contains the new width in pixels.
   * Please be aware that this only contains the width specified in the width
   * CSS attribute. It does NOT necessarily equal the actual width of the column
   * unless the table-layout is fixed.
   * Also note carefully that in automatic table layouts the actual width of other columns,
   * that are not adjacent to the resized column, may also change. Those changes are not
   * reflected by this property.
   */
  resizedWidth = undefined;
  isSortable;
  isEditable;
  isAddable;
  isRowHeading;
  isFilterable;
  defaultSortDirection;
  editor;
  filter;
  renderComponent;
  compareFunction;
  valuePrepareFunction;
  valueStoreFunction;
  filterFunction;
  componentInitFunction;
  constructor(id, settings, dataSet) {
    this.id = id;
    this.settings = settings;
    this.dataSet = dataSet;
    this.type = this.settings.type ?? 'text';
    this.placeholder = this.settings.placeholder;
    this.sanitizer = this.settings.sanitizer ?? {};
    this.title = this.settings.title ?? '';
    this.classHeader = this.settings.classHeader ?? '';
    this.classContent = this.settings.classContent ?? '';
    this.width = this.settings.width ?? 'auto';
    this.hide = this.settings.hide ?? false;
    this.editor = this.settings.editor ?? {
      type: 'text'
    };
    this.filter = this.settings.filter ?? {
      type: 'text'
    };
    this.renderComponent = this.settings.renderComponent;
    this.isFilterable = this.settings.isFilterable ?? true;
    this.isSortable = this.settings.isSortable ?? true;
    this.isEditable = this.settings.isEditable ?? true;
    this.isAddable = this.settings.isAddable ?? true;
    this.isRowHeading = this.settings.isRowHeading ?? false;
    this.defaultSortDirection = this.settings.sortDirection ?? null;
    this.compareFunction = this.settings.compareFunction;
    this.valuePrepareFunction = this.settings.valuePrepareFunction;
    this.valueStoreFunction = this.settings.valueStoreFunction;
    this.filterFunction = this.settings.filterFunction;
    this.componentInitFunction = this.settings.componentInitFunction;
  }
  getConfig() {
    return this.editor && this.editor.config;
  }
}
class DataSet {
  columnSettings;
  data = [];
  columns = [];
  rows = [];
  selectedRow = null;
  expandedRow;
  willSelect = 'indexed';
  constructor(data = [], columnSettings) {
    this.columnSettings = columnSettings;
    this.createColumns(columnSettings);
    this.setData(data);
  }
  setData(data, selectedRows = []) {
    this.data = data.map((el, index) => {
      const row = new Row(index, el, this);
      row.isSelected = selectedRows.indexOf(el) > -1;
      return row;
    });
    this.createRows();
  }
  getColumns() {
    return this.columns;
  }
  getExpandedRow() {
    if (!this.expandedRow) {
      console.warn('Expanded row not found');
      throw new Error('Expanded row not found');
    }
    return this.expandedRow;
  }
  getSelectedRow() {
    return this.selectedRow;
  }
  getRows() {
    return this.rows ?? [];
  }
  getFirstRow() {
    return this.rows[0];
  }
  getLastRow() {
    return this.rows[this.rows.length - 1];
  }
  findRowByData(data) {
    const row = this.rows.find(row => row.getData() === data);
    if (!row) {
      console.warn('Data row not found', data);
      throw new Error('Row not found');
    }
    return row;
  }
  deselectAll() {
    this.rows.forEach(row => {
      row.isSelected = false;
    });
    // we need to clear selectedRow field because no one row selected
    this.selectedRow = null;
  }
  clearExpandAll() {
    this.rows.forEach(row => {
      row.isExpanded = false;
    });
    // we need to clear selectedRow field because no one row selected
    this.expandedRow = undefined;
  }
  selectRow(row) {
    const previousIsSelected = row.isSelected;
    this.deselectAll();
    row.isSelected = !previousIsSelected;
    this.selectedRow = row;
  }
  multipleSelectRow(row) {
    row.isSelected = !row.isSelected;
    this.selectedRow = row;
  }
  expandRow(row) {
    const previousIsExpanded = row.isExpanded;
    this.clearExpandAll();
    if (row.index !== this.expandedRow?.index) {
      this.expandedRow = undefined;
    }
    row.isExpanded = !previousIsExpanded;
    this.expandedRow = row;
    return this.expandedRow;
  }
  selectPreviousRow() {
    if (this.rows.length > 0) {
      let index = this.selectedRow ? this.selectedRow.index : 0;
      if (index > this.rows.length - 1) {
        index = this.rows.length - 1;
      }
      this.selectRow(this.rows[index]);
      return this.getSelectedRow();
    } else {
      return null;
    }
  }
  selectFirstRow() {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[0]);
      return this.getSelectedRow();
    } else {
      return null;
    }
  }
  selectLastRow() {
    if (this.rows.length > 0) {
      this.selectRow(this.rows[this.rows.length - 1]);
      return this.getSelectedRow();
    } else {
      return null;
    }
  }
  willSelectFirstRow() {
    this.willSelect = 'first';
  }
  willSelectLastRow() {
    this.willSelect = 'last';
  }
  select(index) {
    if (index >= 0 && this.getRows().length === 0) {
      return null;
    }
    const willSelect = this.willSelect;
    this.willSelect = 'indexed';
    if (willSelect === 'indexed') {
      if (index >= 0 && index < this.rows.length) {
        this.selectRow(this.rows[index]);
        return this.selectedRow;
      } else {
        // we need to deselect all rows if we got an incorrect index
        this.deselectAll();
        return null;
      }
    } else if (willSelect === 'first') {
      return this.selectFirstRow();
    } else if (willSelect === 'last') {
      return this.selectLastRow();
    } else {
      // this branch is unreachable, because the if-else is exhaustive, but stupid typescript compilers do not see that
      return null;
    }
  }
  /**
   * Create columns by mapping from the settings
   * @param settings
   * @private
   */
  createColumns(settings) {
    for (const id in settings) {
      if (settings.hasOwnProperty(id)) {
        this.columns.push(new Column(id, settings[id], this));
      }
    }
  }
  /**
   * Create rows based on current data prepared in data source
   * @private
   */
  createRows() {
    this.rows = [];
    this.data.forEach(el => {
      this.rows.push(el);
    });
  }
}
class Grid {
  createFormShown = false;
  createFormRow;
  source;
  settings;
  dataSet;
  /**
   * Points to an element in all data
   *
   * when < 0 all lines must be deselected
   */
  selectedRowIndex = -1;
  onSelectRowSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
  sourceOnChangedSubscription;
  sourceOnUpdatedSubscription;
  constructor(source, settings) {
    this.setSettings(settings);
    this.setSource(source);
  }
  detach() {
    if (this.sourceOnChangedSubscription) {
      this.sourceOnChangedSubscription.unsubscribe();
    }
    if (this.sourceOnUpdatedSubscription) {
      this.sourceOnUpdatedSubscription.unsubscribe();
    }
  }
  showActionColumn(position) {
    // no actions configured, therefore now actions visible
    if (this.settings.actions === false || this.settings.actions === undefined) {
      return false;
    }
    // not the correct position
    if (position !== this.settings.actions?.position) {
      return false;
    }
    // column is visible if and only if at least one action is visible - check all of them
    return this.settings.actions.add || this.settings.actions.edit || this.settings.actions.delete || (this.settings.actions.custom?.length ?? 0) > 0 || this.getExpandedRowComponentClass() !== undefined;
  }
  isMultiSelectVisible() {
    return this.settings.selectMode === 'multi' || this.settings.selectMode === 'multi_filtered';
  }
  isMultiSortEnabled() {
    return this.settings.sortMode !== 'single';
  }
  getExpandedRowComponentClass() {
    return this.settings.expand?.component;
  }
  setSettings(settings) {
    this.settings = settings;
    this.recreateDataSet();
  }
  recreateDataSet() {
    this.dataSet = new DataSet([], this.settings.columns);
    if (this.source) {
      this.source.refresh();
    }
  }
  getDataSet() {
    return this.dataSet;
  }
  setSource(source) {
    this.detach();
    this.source = this.prepareSource(source);
    this.sourceOnChangedSubscription = this.source.onChanged().subscribe(changes => this.processDataChange(changes));
    this.sourceOnUpdatedSubscription = this.source.onUpdated().subscribe(data => {
      const changedRow = this.dataSet.findRowByData(data);
      changedRow.setData(data);
    });
  }
  getColumns() {
    return this.dataSet.getColumns();
  }
  getRows() {
    return this.dataSet.getRows();
  }
  selectRow(row) {
    this.dataSet.selectRow(row);
    this.source.toggleItem(row.getData(), row.isSelected);
  }
  multipleSelectRow(row) {
    this.dataSet.multipleSelectRow(row);
    this.source.toggleItem(row.getData(), row.isSelected);
  }
  onSelectRow() {
    return this.onSelectRowSource.asObservable();
  }
  expandRow(row) {
    this.dataSet.expandRow(row);
  }
  edit(row) {
    row.isInEditing = true;
  }
  create(row, confirmEmitter) {
    const deferred = new Deferred();
    deferred.promise.then(newData => {
      newData = newData ? newData : row.getNewData();
      this.createFormShown = false;
      this.source.prepend(newData).then();
    }).catch(err => {
      // doing nothing
    });
    if (this.settings.add?.confirmCreate ?? false) {
      confirmEmitter.emit({
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred
      });
    } else {
      deferred.resolve();
    }
  }
  save(row, confirmEmitter) {
    const deferred = new Deferred();
    deferred.promise.then(newData => {
      newData = newData ? newData : row.getNewData();
      if (deferred.resolve.skipEdit) {
        row.isInEditing = false;
      } else {
        this.source.update(row.getData(), newData).then(() => {
          row.isInEditing = false;
        });
      }
    }).catch(err => {
      // doing nothing
    });
    if (this.settings.edit?.confirmSave ?? false) {
      confirmEmitter.emit({
        row: row,
        data: row.getData(),
        newData: row.getNewData(),
        source: this.source,
        confirm: deferred
      });
    } else {
      deferred.resolve();
    }
  }
  delete(row, confirmEmitter) {
    const deferred = new Deferred();
    deferred.promise.then(() => {
      this.source.remove(row.getData());
    }).catch(err => {
      // doing nothing
    });
    if (this.settings.delete?.confirmDelete ?? false) {
      confirmEmitter.emit({
        row: row,
        data: row.getData(),
        source: this.source,
        confirm: deferred
      });
    } else {
      deferred.resolve();
    }
  }
  processDataChange(changes) {
    if (this.shouldProcessChange(changes)) {
      this.dataSet.setData(changes.elements, this.getSelectedItems());
      if (this.settings.selectMode === 'single') {
        if (this.dataSet.getRows().length > 0) {
          const row = this.determineRowToSelect(changes);
          this.onSelectRowSource.next(row);
        } else {
          this.onSelectRowSource.next(null);
        }
      }
    }
  }
  shouldProcessChange(changes) {
    if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'empty', 'paging'].indexOf(changes.action) !== -1) {
      return true;
    } else if (['prepend', 'append'].indexOf(changes.action) !== -1 && (this.settings.pager?.display ?? true)) {
      return true;
    }
    return false;
  }
  determineRowToSelect(changes) {
    if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes.action) !== -1) {
      return this.dataSet.select(this.getRowIndexToSelect());
    }
    if (this.selectedRowIndex < 0) {
      return null;
    }
    if (changes.action === 'remove') {
      if (changes.elements.length === 0) {
        // we have to store which one to select as the data will be reloaded
        this.dataSet.willSelectLastRow();
      } else {
        return this.dataSet.selectPreviousRow();
      }
    }
    if (changes.action === 'append') {
      // we have to store which one to select as the data will be reloaded
      this.dataSet.willSelectLastRow();
    }
    if (changes.action === 'add') {
      return this.dataSet.selectFirstRow();
    }
    if (changes.action === 'update') {
      return this.dataSet.selectFirstRow();
    }
    if (changes.action === 'prepend') {
      // we have to store which one to select as the data will be reloaded
      this.dataSet.willSelectFirstRow();
    }
    return null;
  }
  prepareSource(source) {
    let sortConf = [];
    for (const column of this.getColumns()) {
      if (column.isSortable && column.defaultSortDirection !== null) {
        sortConf.push({
          field: column.id,
          direction: column.defaultSortDirection,
          compare: column.compareFunction
        });
      }
    }
    source.setSort(sortConf, false);
    source.setPaging(this.getPageToSelect(source), this.settings.pager?.perPage ?? 10, false);
    source.refresh();
    return source;
  }
  getSelectedItems() {
    return this.source.getSelectedItems();
  }
  selectAllRows(status) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      // remember that the data set of the grid only contains the visible elements on the current page
      _this2.dataSet.getRows().forEach(r => r.isSelected = status);
      // advise the data source to also update the selected elements
      yield _this2.source.selectAllItems(status, _this2.settings.selectMode === 'multi_filtered');
    })();
  }
  getFirstRow() {
    return this.dataSet.getFirstRow();
  }
  getLastRow() {
    return this.dataSet.getLastRow();
  }
  getSelectionInfo() {
    return {
      perPage: this.settings.pager?.perPage ?? 10,
      page: this.settings.pager?.page ?? 1,
      selectedRowIndex: this.selectedRowIndex,
      switchPageToSelectedRowPage: this.settings.switchPageToSelectedRowPage ?? false
    };
  }
  getRowIndexToSelect() {
    const {
      switchPageToSelectedRowPage,
      selectedRowIndex,
      perPage
    } = this.getSelectionInfo();
    const dataAmount = this.source.count();
    /**
     * source - contains all table data
     * dataSet - contains data for current page
     * selectedRowIndex - contains index for data in all data
     *
     * because of that, we need to count index for a specific row in page
     * if
     * `switchPageToSelectedRowPage` - we need to change page automatically
     * `selectedRowIndex < dataAmount && selectedRowIndex >= 0` - index points to existing data
     * (if index points to non-existing data and we calculate index for current page - we will get wrong selected row.
     *  if we return index witch not points to existing data - no line will be highlighted)
     */
    return switchPageToSelectedRowPage && selectedRowIndex < dataAmount && selectedRowIndex >= 0 ? selectedRowIndex % perPage : selectedRowIndex;
  }
  getPageToSelect(source) {
    const {
      switchPageToSelectedRowPage,
      selectedRowIndex,
      perPage,
      page
    } = this.getSelectionInfo();
    let pageToSelect = Math.max(1, page);
    if (switchPageToSelectedRowPage && selectedRowIndex >= 0) {
      pageToSelect = getPageForRowIndex(selectedRowIndex, perPage);
    }
    const maxPageAmount = Math.ceil(source.count() / perPage);
    return maxPageAmount ? Math.min(pageToSelect, maxPageAmount) : pageToSelect;
  }
  showCreateForm() {
    // if already shown, do nothing
    if (this.createFormShown) return;
    const vcf = this.settings.valueCreateFunction ?? (() => ({}));
    this.createFormRow = new Row(-1, vcf(), this.dataSet);
    this.createFormRow.isInEditing = true;
    this.createFormShown = true;
  }
}
let PagerComponent = /*#__PURE__*/(() => {
  class PagerComponent {
    source;
    perPageSelect;
    perPageSelectLabel;
    pages;
    page;
    count = 0;
    perPage;
    dataChangedSub = null;
    ngOnChanges(changes) {
      if (changes.source) {
        if (this.dataChangedSub !== null) {
          this.dataChangedSub.unsubscribe();
        }
        this.dataChangedSub = this.source.onChanged().subscribe(dataChanges => {
          this.page = this.source.getPaging().page;
          this.perPage = this.source.getPaging().perPage;
          this.count = this.source.count();
          const lastPage = this.getLast();
          if (dataChanges.action === 'prepend') {
            this.source.setPage(1);
          } else if (dataChanges.action === 'append') {
            this.source.setPage(lastPage);
          } else if (this.page > lastPage) {
            this.source.setPage(lastPage);
          } else if (this.page < 1) {
            // for whatever reason...
            this.source.setPage(1);
          } else {
            // do not execute the following function when we needed to adjust the page!
            // another event will be emitted and as a reaction we will end up here again
            // (in previous versions, this code was executed unnecessarily often)
            this.initPages();
          }
        });
      }
    }
    ngOnDestroy() {
      if (this.dataChangedSub !== null) {
        this.dataChangedSub.unsubscribe();
        this.dataChangedSub = null;
      }
    }
    shouldShow() {
      return this.source.count() > this.perPage;
    }
    paginate(page) {
      this.source.setPage(page);
      this.page = page;
      return false;
    }
    next() {
      return this.paginate(this.getPage() + 1);
    }
    prev() {
      return this.paginate(this.getPage() - 1);
    }
    getPage() {
      return this.page;
    }
    getPages() {
      return this.pages;
    }
    getLast() {
      const last = Math.ceil(this.count / this.perPage);
      return last === 0 ? 1 : last;
    }
    initPages() {
      const pagesCount = this.getLast();
      let showPagesCount = 4;
      showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
      this.pages = [];
      if (this.shouldShow()) {
        let middleOne = Math.ceil(showPagesCount / 2);
        middleOne = this.page >= middleOne ? this.page : middleOne;
        let lastOne = middleOne + Math.floor(showPagesCount / 2);
        lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
        const firstOne = lastOne - showPagesCount + 1;
        for (let i = firstOne; i <= lastOne; i++) {
          this.pages.push(i);
        }
      }
    }
    onChangePerPage(newPerPage) {
      this.source.getPaging().perPage = newPerPage;
      this.source.refresh();
      this.initPages();
    }
    static ɵfac = function PagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PagerComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: PagerComponent,
      selectors: [["angular2-smart-table-pager"]],
      inputs: {
        source: "source",
        perPageSelect: "perPageSelect",
        perPageSelectLabel: "perPageSelectLabel"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 3,
      vars: 3,
      consts: [["class", "angular2-smart-pagination-nav", 4, "ngIf"], [4, "ngIf"], ["class", "angular2-smart-pagination-per-page", 4, "ngIf"], [1, "angular2-smart-pagination-nav"], [1, "angular2-smart-pagination", "pagination"], [1, "angular2-smart-page-item", "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "angular2-smart-page-link", "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", "aria-label", "Prev", 1, "angular2-smart-page-link", "page-link", "page-link-prev", 3, "click"], ["class", "angular2-smart-page-item page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next", 1, "angular2-smart-page-link", "page-link", "page-link-next", 3, "click"], ["href", "#", "aria-label", "Last", 1, "angular2-smart-page-link", "page-link", 3, "click"], ["class", "angular2-smart-page-link page-link", 4, "ngIf"], ["class", "angular2-smart-page-link page-link", "href", "#", 3, "click", 4, "ngIf"], [1, "angular2-smart-page-link", "page-link"], ["href", "#", 1, "angular2-smart-page-link", "page-link", 3, "click"], [1, "angular2-smart-pagination-per-page"], ["for", "per-page", 4, "ngIf"], ["id", "per-page", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "per-page"], [3, "value"]],
      template: function PagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, PagerComponent_nav_0_Template, 27, 13, "nav", 0)(1, PagerComponent_div_1_Template, 1, 0, "div", 1)(2, PagerComponent_nav_2_Template, 4, 3, "nav", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.shouldShow());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.shouldShow());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.perPageSelect && ctx.perPageSelect.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT],
      styles: [".angular2-smart-pagination[_ngcontent-%COMP%]{display:inline-flex;font-size:.875em;padding:0}.angular2-smart-pagination[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.angular2-smart-pagination[_ngcontent-%COMP%]   .angular2-smart-page-item[_ngcontent-%COMP%]{display:inline}.angular2-smart-pagination[_ngcontent-%COMP%]   .page-link-next[_ngcontent-%COMP%], .angular2-smart-pagination[_ngcontent-%COMP%]   .page-link-prev[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{margin:1rem 0}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{margin:1rem 0}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{margin:1rem 1rem 1rem 0;line-height:2.5rem}"]
    });
  }
  return PagerComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let EditCellDefault = /*#__PURE__*/(() => {
  class EditCellDefault {
    cell;
    inputClass = '';
    edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    stopEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    onEdited() {
      this.edited.emit();
      return false;
    }
    onStopEditing() {
      this.stopEditing.emit();
      return false;
    }
    onClick(event) {
      event.stopPropagation();
    }
    static ɵfac = function EditCellDefault_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditCellDefault)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditCellDefault,
      selectors: [["ng-component"]],
      inputs: {
        cell: "cell",
        inputClass: "inputClass"
      },
      outputs: {
        edited: "edited",
        stopEditing: "stopEditing"
      },
      standalone: false,
      decls: 0,
      vars: 0,
      template: function EditCellDefault_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
  return EditCellDefault;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CustomEditComponent = /*#__PURE__*/(() => {
  class CustomEditComponent extends EditCellDefault {
    customComponent;
    dynamicTarget;
    ngOnChanges(changes) {
      if (this.cell && !this.customComponent) {
        const editor = this.cell.getColumn().editor;
        if (!editor) return;
        this.customComponent = this.dynamicTarget.createComponent(editor.component);
        // set @Inputs and @Outputs of custom component
        this.customComponent.instance.cell = this.cell;
        this.customComponent.instance.inputClass = this.inputClass;
        this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
        this.customComponent.instance.onEdited.subscribe(() => this.onEdited());
        this.customComponent.instance.onClick.subscribe(event => this.onClick(event));
      }
    }
    ngOnDestroy() {
      if (this.customComponent) {
        this.customComponent.destroy();
      }
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵCustomEditComponent_BaseFactory;
      return function CustomEditComponent_Factory(__ngFactoryType__) {
        return (ɵCustomEditComponent_BaseFactory || (ɵCustomEditComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(CustomEditComponent)))(__ngFactoryType__ || CustomEditComponent);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: CustomEditComponent,
      selectors: [["table-cell-custom-editor"]],
      viewQuery: function CustomEditComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ViewContainerRef */ .c1b);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.dynamicTarget = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 2,
      vars: 0,
      consts: [["dynamicTarget", ""]],
      template: function CustomEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CustomEditComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
      },
      encapsulation: 2
    });
  }
  return CustomEditComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DefaultEditor = /*#__PURE__*/(() => {
  class DefaultEditor {
    cell;
    inputClass;
    onStopEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    onEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    get disableEnterKeySave() {
      return this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().disableEnterKeySave;
    }
    static ɵfac = function DefaultEditor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DefaultEditor)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: DefaultEditor,
      selectors: [["ng-component"]],
      inputs: {
        cell: "cell",
        inputClass: "inputClass"
      },
      outputs: {
        onStopEditing: "onStopEditing",
        onEdited: "onEdited",
        onClick: "onClick"
      },
      standalone: false,
      decls: 0,
      vars: 0,
      template: function DefaultEditor_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
  return DefaultEditor;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CheckboxEditorComponent = /*#__PURE__*/(() => {
  class CheckboxEditorComponent extends DefaultEditor {
    trueVal = 'true';
    falseVal = 'false';
    constructor() {
      super();
    }
    ngOnInit() {
      const config = this.cell.getColumn().editor.config;
      if (config !== undefined) {
        const ces = config;
        this.trueVal = ces.true;
        this.falseVal = ces.false;
      }
    }
    onChange(newVal) {
      this.cell.setValue(newVal ? this.trueVal : this.falseVal);
    }
    static ɵfac = function CheckboxEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CheckboxEditorComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: CheckboxEditorComponent,
      selectors: [["checkbox-editor"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 1,
      vars: 4,
      consts: [["type", "checkbox", 3, "click", "change", "ngClass", "name", "disabled", "checked"]],
      template: function CheckboxEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CheckboxEditorComponent_Template_input_click_0_listener($event) {
            return ctx.onClick.emit($event);
          })("change", function CheckboxEditorComponent_Template_input_change_0_listener($event) {
            return ctx.onChange($event.target.checked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.inputClass)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("checked", ctx.cell.getValue() === ctx.trueVal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU],
      styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   select[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"]
    });
  }
  return CheckboxEditorComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InputEditorComponent = /*#__PURE__*/(() => {
  class InputEditorComponent extends DefaultEditor {
    constructor() {
      super();
    }
    static ɵfac = function InputEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InputEditorComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InputEditorComponent,
      selectors: [["input-editor"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 1,
      vars: 5,
      consts: [[3, "click", "keyup", "keydown.enter", "keydown.esc", "ngClass", "value", "name", "placeholder", "disabled"]],
      template: function InputEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InputEditorComponent_Template_input_click_0_listener($event) {
            return ctx.onClick.emit($event);
          })("keyup", function InputEditorComponent_Template_input_keyup_0_listener($event) {
            return ctx.cell.setValue($event.target.value);
          })("keydown.enter", function InputEditorComponent_Template_input_keydown_enter_0_listener() {
            return ctx.disableEnterKeySave || ctx.onEdited.emit();
          })("keydown.esc", function InputEditorComponent_Template_input_keydown_esc_0_listener() {
            return ctx.onStopEditing.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.inputClass)("value", ctx.cell.getValue())("name", ctx.cell.getId())("placeholder", ctx.cell.getTitle())("disabled", !ctx.cell.isEditable());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU],
      styles: [_c3]
    });
  }
  return InputEditorComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SelectEditorComponent = /*#__PURE__*/(() => {
  class SelectEditorComponent extends DefaultEditor {
    constructor() {
      super();
    }
    get editorConfig() {
      return this.cell.getColumn().getConfig();
    }
    onSelectionChanged(newValue) {
      this.cell.setValue(newValue);
    }
    static ɵfac = function SelectEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SelectEditorComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: SelectEditorComponent,
      selectors: [["select-editor"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 4,
      vars: 5,
      consts: [[3, "change", "click", "keydown.enter", "keydown.esc", "ngClass", "name", "disabled"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
      template: function SelectEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function SelectEditorComponent_Template_select_change_0_listener($event) {
            return ctx.onSelectionChanged($event.target.value);
          })("click", function SelectEditorComponent_Template_select_click_0_listener($event) {
            return ctx.onClick.emit($event);
          })("keydown.enter", function SelectEditorComponent_Template_select_keydown_enter_0_listener() {
            return ctx.disableEnterKeySave || ctx.onEdited.emit();
          })("keydown.esc", function SelectEditorComponent_Template_select_keydown_esc_0_listener() {
            return ctx.onStopEditing.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, SelectEditorComponent_option_3_Template, 2, 3, "option", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.inputClass)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh((tmp_3_0 = ctx.editorConfig.selectText) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "Select...");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.editorConfig.list);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq],
      styles: [_c3]
    });
  }
  return SelectEditorComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TextareaEditorComponent = /*#__PURE__*/(() => {
  class TextareaEditorComponent extends DefaultEditor {
    constructor() {
      super();
    }
    static ɵfac = function TextareaEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TextareaEditorComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TextareaEditorComponent,
      selectors: [["textarea-editor"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 2,
      vars: 5,
      consts: [[3, "click", "keyup", "keydown.enter", "keydown.esc", "ngClass", "value", "name", "disabled", "placeholder"]],
      template: function TextareaEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "textarea", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TextareaEditorComponent_Template_textarea_click_0_listener($event) {
            return ctx.onClick.emit($event);
          })("keyup", function TextareaEditorComponent_Template_textarea_keyup_0_listener($event) {
            return ctx.cell.setValue($event.target.value);
          })("keydown.enter", function TextareaEditorComponent_Template_textarea_keydown_enter_0_listener() {
            return ctx.disableEnterKeySave || ctx.onEdited.emit();
          })("keydown.esc", function TextareaEditorComponent_Template_textarea_keydown_esc_0_listener() {
            return ctx.onStopEditing.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1, "    ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.inputClass)("value", ctx.cell.getValue())("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("placeholder", ctx.cell.getTitle());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU],
      styles: [_c3]
    });
  }
  return TextareaEditorComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DefaultEditComponent = /*#__PURE__*/(() => {
  class DefaultEditComponent extends EditCellDefault {
    constructor() {
      super();
    }
    getEditorType() {
      const editor = this.cell.getColumn().editor;
      if (!editor) {
        return 'default';
      }
      return editor.type;
    }
    static ɵfac = function DefaultEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DefaultEditComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: DefaultEditComponent,
      selectors: [["table-cell-default-editor"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 5,
      vars: 4,
      consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchDefault"], [3, "onClick", "onEdited", "onStopEditing", "cell", "inputClass"], [3, "onClick", "cell", "inputClass"]],
      template: function DefaultEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, DefaultEditComponent_select_editor_1_Template, 1, 2, "select-editor", 1)(2, DefaultEditComponent_textarea_editor_2_Template, 1, 2, "textarea-editor", 1)(3, DefaultEditComponent_checkbox_editor_3_Template, 1, 2, "checkbox-editor", 2)(4, DefaultEditComponent_input_editor_4_Template, 1, 2, "input-editor", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx.getEditorType());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "list");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "textarea");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "checkbox");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitchDefault */ .fG, CheckboxEditorComponent, InputEditorComponent, SelectEditorComponent, TextareaEditorComponent],
      encapsulation: 2
    });
  }
  return DefaultEditComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let EditCellComponent = /*#__PURE__*/(() => {
  class EditCellComponent {
    cell;
    inputClass = '';
    edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    stopEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    ngOnInit() {
      this.cell.resetValue();
    }
    getEditorType() {
      const editor = this.cell.getColumn().editor;
      if (!editor) {
        return 'default';
      }
      return editor.type;
    }
    static ɵfac = function EditCellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditCellComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditCellComponent,
      selectors: [["table-cell-edit-mode"]],
      inputs: {
        cell: "cell",
        inputClass: "inputClass"
      },
      outputs: {
        edited: "edited",
        stopEditing: "stopEditing"
      },
      standalone: false,
      decls: 3,
      vars: 2,
      consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "edited", "stopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "edited", "stopEditing", 4, "ngSwitchDefault"], [3, "edited", "stopEditing", "cell", "inputClass"]],
      template: function EditCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCellComponent_table_cell_custom_editor_1_Template, 1, 2, "table-cell-custom-editor", 1)(2, EditCellComponent_table_cell_default_editor_2_Template, 1, 2, "table-cell-default-editor", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx.getEditorType());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "custom");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitchDefault */ .fG, CustomEditComponent, DefaultEditComponent],
      encapsulation: 2
    });
  }
  return EditCellComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CustomViewComponent = /*#__PURE__*/(() => {
  class CustomViewComponent {
    customComponent;
    cell;
    dynamicTarget;
    ngOnInit() {
      if (this.cell && !this.customComponent) {
        this.customComponent = this.dynamicTarget.createComponent(this.cell.getColumn().renderComponent);
        const componentInitFunction = this.cell.getColumn().componentInitFunction;
        if (componentInitFunction === undefined) {
          console.error('Since version 3.0.0, a custom renderer always needs a componentInitFunction');
        } else {
          componentInitFunction(this.customComponent.instance, this.cell);
        }
      }
    }
    ngOnDestroy() {
      this.customComponent.destroy();
    }
    static ɵfac = function CustomViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustomViewComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: CustomViewComponent,
      selectors: [["custom-view-component"]],
      viewQuery: function CustomViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ViewContainerRef */ .c1b);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.dynamicTarget = _t.first);
        }
      },
      inputs: {
        cell: "cell"
      },
      standalone: false,
      decls: 2,
      vars: 0,
      consts: [["dynamicTarget", ""]],
      template: function CustomViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
      },
      encapsulation: 2
    });
  }
  return CustomViewComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let BypassSecurityTrustPipe = /*#__PURE__*/(() => {
  class BypassSecurityTrustPipe {
    sanitizer;
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
    }
    transform(value, type) {
      switch (type) {
        case 'html':
          return this.sanitizer.bypassSecurityTrustHtml(value);
        case 'style':
          return this.sanitizer.bypassSecurityTrustStyle(value);
        case 'script':
          return this.sanitizer.bypassSecurityTrustScript(value);
        case 'url':
          return this.sanitizer.bypassSecurityTrustUrl(value);
        case 'resourceUrl':
          return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        case 'none':
          return value;
      }
    }
    static ɵfac = function BypassSecurityTrustPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BypassSecurityTrustPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__/* .DomSanitizer */ .up, 16));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefinePipe"] */ .EJ8({
      name: "bypassSecurityTrust",
      type: BypassSecurityTrustPipe,
      pure: true,
      standalone: false
    });
  }
  return BypassSecurityTrustPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ViewCellComponent = /*#__PURE__*/(() => {
  class ViewCellComponent {
    cell;
    get bypassSecurityTrust() {
      return this.cell.getColumn().sanitizer.bypassHtml ? 'html' : 'none';
    }
    get cssClass() {
      return this.cell.getColumn().classContent;
    }
    static ɵfac = function ViewCellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewCellComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ViewCellComponent,
      selectors: [["table-cell-view-mode"]],
      inputs: {
        cell: "cell"
      },
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [[3, "ngSwitch"], [3, "cell", 4, "ngSwitchCase"], [3, "innerHTML", "ngClass", 4, "ngSwitchCase"], [3, "ngClass", 4, "ngSwitchDefault"], [3, "cell"], [3, "innerHTML", "ngClass"], [3, "ngClass"]],
      template: function ViewCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ViewCellComponent_custom_view_component_1_Template, 1, 1, "custom-view-component", 1)(2, ViewCellComponent_div_2_Template, 2, 5, "div", 2)(3, ViewCellComponent_div_3_Template, 2, 2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx.cell.getColumn().type);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "custom");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "html");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitchDefault */ .fG, CustomViewComponent, BypassSecurityTrustPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return ViewCellComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CellComponent = /*#__PURE__*/(() => {
  class CellComponent {
    grid;
    row;
    cell;
    inputClass = '';
    mode = 'inline';
    isInEditing = false;
    isNew;
    // if isNew === false
    editConfirm;
    editCancel;
    // if isNew === true
    createConfirm;
    createCancel;
    onEdited() {
      if (this.isNew) {
        this.grid.create(this.grid.createFormRow, this.createConfirm);
      } else {
        this.grid.save(this.row, this.editConfirm);
      }
    }
    onStopEditing() {
      if (this.isNew) {
        this.grid.createFormShown = false;
        this.createCancel.emit({
          discardedData: this.grid.createFormRow.getNewData(),
          source: this.grid.source
        });
      } else {
        this.row.isInEditing = false;
        this.editCancel.emit({
          row: this.row,
          data: this.row.getData(),
          discardedData: this.row.getNewData(),
          source: this.grid.source
        });
      }
    }
    static ɵfac = function CellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CellComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: CellComponent,
      selectors: [["angular2-smart-table-cell"]],
      inputs: {
        grid: "grid",
        row: "row",
        cell: "cell",
        inputClass: "inputClass",
        mode: "mode",
        isInEditing: "isInEditing",
        isNew: "isNew",
        editConfirm: "editConfirm",
        editCancel: "editCancel",
        createConfirm: "createConfirm",
        createCancel: "createCancel"
      },
      standalone: false,
      decls: 2,
      vars: 2,
      consts: [[3, "cell", 4, "ngIf"], [3, "cell", "inputClass", "edited", "stopEditing", 4, "ngIf"], [3, "cell"], [3, "edited", "stopEditing", "cell", "inputClass"]],
      template: function CellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CellComponent_table_cell_view_mode_0_Template, 1, 1, "table-cell-view-mode", 0)(1, CellComponent_table_cell_edit_mode_1_Template, 1, 2, "table-cell-edit-mode", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.isInEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isInEditing);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, EditCellComponent, ViewCellComponent],
      encapsulation: 2
    });
  }
  return CellComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TbodySaveCancelComponent = /*#__PURE__*/(() => {
  class TbodySaveCancelComponent {
    grid;
    row;
    editConfirm;
    editCancel;
    cancelButtonContent;
    saveButtonContent;
    bypassSecurityTrust = 'none';
    onSave(event) {
      event.preventDefault();
      event.stopPropagation();
      this.grid.save(this.row, this.editConfirm);
    }
    onCancelEdit(event) {
      event.preventDefault();
      event.stopPropagation();
      this.row.isInEditing = false;
      this.editCancel.emit({
        row: this.row,
        data: this.row.getData(),
        discardedData: this.row.getNewData(),
        source: this.grid.source
      });
    }
    ngOnChanges() {
      // we can assume that default settings have been applied and all values are defined
      this.saveButtonContent = this.grid.settings.edit.saveButtonContent;
      this.cancelButtonContent = this.grid.settings.edit.cancelButtonContent;
      this.bypassSecurityTrust = this.grid.settings.edit?.sanitizer?.bypassHtml ? 'html' : 'none';
    }
    static ɵfac = function TbodySaveCancelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TbodySaveCancelComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TbodySaveCancelComponent,
      selectors: [["angular2-st-tbody-create-cancel"]],
      inputs: {
        grid: "grid",
        row: "row",
        editConfirm: "editConfirm",
        editCancel: "editCancel"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 4,
      vars: 8,
      consts: [["href", "#", 1, "angular2-smart-action", "angular2-smart-action-edit-save", 3, "click", "innerHTML"], ["href", "#", 1, "angular2-smart-action", "angular2-smart-action-edit-cancel", 3, "click", "innerHTML"]],
      template: function TbodySaveCancelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "bypassSecurityTrust");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TbodySaveCancelComponent_Template_a_click_0_listener($event) {
            return ctx.onSave($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "bypassSecurityTrust");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TbodySaveCancelComponent_Template_a_click_2_listener($event) {
            return ctx.onCancelEdit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(1, 2, ctx.saveButtonContent, ctx.bypassSecurityTrust), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(3, 5, ctx.cancelButtonContent, ctx.bypassSecurityTrust), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
        }
      },
      dependencies: [BypassSecurityTrustPipe],
      encapsulation: 2
    });
  }
  return TbodySaveCancelComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TbodyEditDeleteComponent = /*#__PURE__*/(() => {
  class TbodyEditDeleteComponent {
    grid;
    row;
    source;
    deleteConfirm;
    edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    editRowButtonContent;
    editButtonBypassSecurityTrust = 'none';
    editHiddenWhenFunction = _ => false;
    editDisabledWhenFunction = _ => false;
    deleteHiddenWhenFunction = _ => false;
    deleteDisabledWhenFunction = _ => false;
    deleteRowButtonContent;
    deleteButtonBypassSecurityTrust = 'none';
    onEdit(event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.editDisabled) return;
      this.editRowSelect.emit(this.row);
      if (this.grid.settings.mode === 'external') {
        this.edit.emit({
          row: this.row,
          data: this.row.getData(),
          source: this.source
        });
      } else {
        this.grid.edit(this.row);
      }
    }
    onDelete(event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.deleteDisabled) return;
      if (this.grid.settings.mode === 'external') {
        this.delete.emit({
          row: this.row,
          data: this.row.getData(),
          source: this.source
        });
      } else {
        this.grid.delete(this.row, this.deleteConfirm);
      }
    }
    get editVisible() {
      return !this.editHiddenWhenFunction(this.row);
    }
    get editDisabled() {
      return this.editDisabledWhenFunction(this.row);
    }
    get deleteVisible() {
      return !this.deleteHiddenWhenFunction(this.row);
    }
    get deleteDisabled() {
      return this.deleteDisabledWhenFunction(this.row);
    }
    ngOnChanges() {
      const actions = this.grid.settings.actions;
      if (actions === false || actions === undefined) {
        // handle the "flexibility" of this property....
        this.editHiddenWhenFunction = _ => actions === false;
        this.deleteHiddenWhenFunction = _ => actions === false;
        return;
      }
      this.editRowButtonContent = this.grid.settings.edit?.editButtonContent ?? 'Edit';
      this.editButtonBypassSecurityTrust = this.grid.settings.edit?.sanitizer?.bypassHtml ? 'html' : 'none';
      this.editHiddenWhenFunction = this.grid.settings.edit?.hiddenWhen ?? (_ => actions.edit === false);
      this.editDisabledWhenFunction = this.grid.settings.edit?.disabledWhen ?? this.editDisabledWhenFunction;
      this.deleteRowButtonContent = this.grid.settings.delete?.deleteButtonContent ?? 'Delete';
      this.deleteButtonBypassSecurityTrust = this.grid.settings.delete?.sanitizer?.bypassHtml ? 'html' : 'none';
      this.deleteHiddenWhenFunction = this.grid.settings.delete?.hiddenWhen ?? (_ => actions.delete === false);
      this.deleteDisabledWhenFunction = this.grid.settings.delete?.disabledWhen ?? this.deleteDisabledWhenFunction;
    }
    static ɵfac = function TbodyEditDeleteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TbodyEditDeleteComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TbodyEditDeleteComponent,
      selectors: [["angular2-st-tbody-edit-delete"]],
      inputs: {
        grid: "grid",
        row: "row",
        source: "source",
        deleteConfirm: "deleteConfirm"
      },
      outputs: {
        edit: "edit",
        delete: "delete",
        editRowSelect: "editRowSelect"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 2,
      vars: 2,
      consts: [["href", "#", "class", "angular2-smart-action angular2-smart-action-edit-edit", 3, "ngClass", "innerHTML", "click", 4, "ngIf"], ["href", "#", "class", "angular2-smart-action angular2-smart-action-delete-delete", 3, "ngClass", "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "angular2-smart-action", "angular2-smart-action-edit-edit", 3, "click", "ngClass", "innerHTML"], ["href", "#", 1, "angular2-smart-action", "angular2-smart-action-delete-delete", 3, "click", "ngClass", "innerHTML"]],
      template: function TbodyEditDeleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TbodyEditDeleteComponent_a_0_Template, 2, 7, "a", 0)(1, TbodyEditDeleteComponent_a_1_Template, 2, 7, "a", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.editVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.deleteVisible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, BypassSecurityTrustPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TbodyEditDeleteComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TbodyCustomItemComponent = /*#__PURE__*/(() => {
  class TbodyCustomItemComponent {
    customComponent;
    action;
    row;
    dynamicTarget;
    ngOnInit() {
      this.customComponent = this.dynamicTarget.createComponent(this.action.renderComponent);
      Object.assign(this.customComponent.instance, this.getPatch());
    }
    ngOnDestroy() {
      this.customComponent.destroy();
    }
    getPatch() {
      return {
        action: this.action,
        rowData: this.row.getData()
      };
    }
    static ɵfac = function TbodyCustomItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TbodyCustomItemComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TbodyCustomItemComponent,
      selectors: [["angular2-st-tbody-custom-item"]],
      viewQuery: function TbodyCustomItemComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ViewContainerRef */ .c1b);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.dynamicTarget = _t.first);
        }
      },
      inputs: {
        action: "action",
        row: "row"
      },
      standalone: false,
      decls: 2,
      vars: 0,
      consts: [["dynamicTarget", ""]],
      template: function TbodyCustomItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TbodyCustomItemComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
      },
      encapsulation: 2
    });
  }
  return TbodyCustomItemComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TbodyCustomComponent = /*#__PURE__*/(() => {
  class TbodyCustomComponent {
    grid;
    row;
    source;
    custom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    get customActions() {
      if (this.grid.settings.actions === false) return [];
      return this.grid.settings.actions?.custom ?? [];
    }
    buttonContent(action) {
      return action.customButtonContent ?? action.title ?? action.name;
    }
    bypassSecurityTrustFor(action) {
      return action.sanitizer?.bypassHtml ?? false ? 'html' : 'none';
    }
    showAction(action) {
      return action.hiddenWhen === undefined || !action.hiddenWhen(this.row);
    }
    disableAction(action) {
      return action.disabledWhen !== undefined && action.disabledWhen(this.row);
    }
    onCustom(action, event) {
      event.preventDefault();
      event.stopPropagation();
      this.custom.emit({
        action: action.name,
        row: this.row,
        data: this.row.getData(),
        source: this.source
      });
    }
    static ɵfac = function TbodyCustomComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TbodyCustomComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TbodyCustomComponent,
      selectors: [["angular2-st-tbody-custom"]],
      inputs: {
        grid: "grid",
        row: "row",
        source: "source"
      },
      outputs: {
        custom: "custom"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["href", "#", "class", "angular2-smart-action angular2-smart-action-custom-custom", 3, "ngClass", "innerHTML", "click", 4, "ngIf"], ["href", "#", "class", "angular2-smart-action angular2-smart-action-custom-custom", 3, "ngClass", "click", 4, "ngIf"], ["href", "#", 1, "angular2-smart-action", "angular2-smart-action-custom-custom", 3, "click", "ngClass", "innerHTML"], ["href", "#", 1, "angular2-smart-action", "angular2-smart-action-custom-custom", 3, "click", "ngClass"], [1, "angular2-smart-action", "angular2-smart-action-custom-custom", 3, "action", "row"]],
      template: function TbodyCustomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TbodyCustomComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.customActions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, TbodyCustomItemComponent, BypassSecurityTrustPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TbodyCustomComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TbodyExpandRowComponent = /*#__PURE__*/(() => {
  class TbodyExpandRowComponent {
    grid;
    row;
    onExpandRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    buttonContent;
    bypassSecurityTrust = 'none';
    hiddenWhenFunction = _ => false;
    disabledWhenFunction = _ => false;
    constructor() {}
    get visible() {
      return !this.hiddenWhenFunction(this.row);
    }
    get disabled() {
      return this.disabledWhenFunction(this.row);
    }
    onExpand(event) {
      event.preventDefault();
      event.stopPropagation();
      if (!this.disabled) {
        this.onExpandRow.emit(this.row);
      }
    }
    ngOnChanges() {
      this.buttonContent = this.grid.settings.expand?.buttonContent ?? 'Expand';
      this.bypassSecurityTrust = this.grid.settings.expand?.sanitizer?.bypassHtml ? 'html' : 'none';
      this.hiddenWhenFunction = this.grid.settings.expand?.hiddenWhen ?? this.hiddenWhenFunction;
      this.disabledWhenFunction = this.grid.settings.expand?.disabledWhen ?? this.disabledWhenFunction;
    }
    static ɵfac = function TbodyExpandRowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TbodyExpandRowComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TbodyExpandRowComponent,
      selectors: [["angular2-st-tbody-expand"]],
      inputs: {
        grid: "grid",
        row: "row"
      },
      outputs: {
        onExpandRow: "onExpandRow"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 1,
      vars: 1,
      consts: [["href", "#", "class", "angular2-smart-action angular2-smart-action-expand-expand", 3, "ngClass", "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "angular2-smart-action", "angular2-smart-action-expand-expand", 3, "click", "ngClass", "innerHTML"]],
      template: function TbodyExpandRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TbodyExpandRowComponent_a_0_Template, 2, 7, "a", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.visible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, BypassSecurityTrustPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TbodyExpandRowComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgxSmartTableTbodyComponent = /*#__PURE__*/(() => {
  class NgxSmartTableTbodyComponent {
    grid;
    source;
    deleteConfirm;
    editConfirm;
    editCancel;
    rowClassFunction;
    edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    custom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    userSelectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    multipleSelectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    rowHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    onExpandRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    expandedRowChild;
    expandedRowComponent;
    hasChildComponent = false;
    ngAfterViewInit() {
      let cmp = this.grid.getExpandedRowComponentClass();
      if (cmp !== undefined && !this.expandedRowComponent) {
        this.expandedRowChild.forEach(c => c.clear());
        this.hasChildComponent = true;
        this.createExpandedRowComponent();
      }
    }
    ngOnDestroy() {
      if (this.expandedRowComponent) this.expandedRowComponent.destroy();
    }
    createExpandedRowComponent() {
      const cmp = this.grid.getExpandedRowComponentClass();
      if (cmp !== undefined) {
        this.expandedRowChild.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .delay */ .c)(0)).subscribe(list => {
          if (list.length) {
            this.expandedRowComponent = list.first.createComponent(cmp);
            Object.assign(this.expandedRowComponent.instance, this.grid.dataSet.expandRow, {
              rowData: this.grid.dataSet.getExpandedRow().getData()
            });
          }
        });
      }
    }
    isMultiSelectVisible;
    showActionColumnLeft;
    showActionColumnRight;
    mode;
    editInputClass;
    noDataMessage;
    get tableColumnsCount() {
      const actionColumn = this.showActionColumnLeft || this.showActionColumnRight ? 1 : 0;
      const selectColumn = this.isMultiSelectVisible ? 1 : 0;
      return this.grid.getColumns().length + actionColumn + selectColumn;
    }
    ngOnChanges() {
      this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
      this.showActionColumnLeft = this.grid.showActionColumn('left');
      this.mode = this.grid.settings.mode ?? 'inline';
      this.editInputClass = this.grid.settings.edit?.inputClass ?? '';
      this.showActionColumnRight = this.grid.showActionColumn('right');
      this.noDataMessage = this.grid.settings.noDataMessage;
    }
    getVisibleCells(cells) {
      return (cells || []).filter(cell => !cell.getColumn().hide);
    }
    static ɵfac = function NgxSmartTableTbodyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxSmartTableTbodyComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: NgxSmartTableTbodyComponent,
      selectors: [["", "angular2-st-tbody", ""]],
      viewQuery: function NgxSmartTableTbodyComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ViewContainerRef */ .c1b);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.expandedRowChild = _t);
        }
      },
      inputs: {
        grid: "grid",
        source: "source",
        deleteConfirm: "deleteConfirm",
        editConfirm: "editConfirm",
        editCancel: "editCancel",
        rowClassFunction: "rowClassFunction"
      },
      outputs: {
        edit: "edit",
        delete: "delete",
        custom: "custom",
        userSelectRow: "userSelectRow",
        editRowSelect: "editRowSelect",
        multipleSelectRow: "multipleSelectRow",
        rowHover: "rowHover",
        onExpandRow: "onExpandRow"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      attrs: _c6,
      decls: 2,
      vars: 2,
      consts: [["expandedRowChild", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "angular2-smart-row", 3, "click", "mouseover", "className", "ngClass"], ["class", "angular2-smart-actions angular2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "angular2-smart-actions", 4, "ngIf"], ["class", "angular2-smart-row angular2-smart-row-detail", 4, "ngIf"], [1, "angular2-smart-actions", "angular2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 3, "checked"], [1, "angular2-smart-actions"], [3, "custom", "grid", "row", "source"], [3, "grid", "row", "onExpandRow", 4, "ngIf"], [3, "edit", "delete", "editRowSelect", "grid", "deleteConfirm", "row", "source"], [3, "onExpandRow", "grid", "row"], [3, "grid", "row", "editConfirm", "editCancel"], ["scope", "row", 4, "ngIf"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "editCancel", "inputClass", "isInEditing"], ["scope", "row"], [1, "angular2-smart-row", "angular2-smart-row-detail"], [1, "angular2-smart-column-expandedDetail"]],
      template: function NgxSmartTableTbodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, NgxSmartTableTbodyComponent_ng_container_0_Template, 9, 11, "ng-container", 1)(1, NgxSmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.grid.getRows());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.grid.getRows().length == 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, CellComponent, TbodySaveCancelComponent, TbodyEditDeleteComponent, TbodyCustomComponent, TbodyExpandRowComponent],
      styles: ["[_nghost-%COMP%]   .angular2-smart-row.selected[_ngcontent-%COMP%]{background:#0000000d}[_nghost-%COMP%]   .angular2-smart-row[_ngcontent-%COMP%]   .angular2-smart-actions.angular2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     angular2-st-tbody-edit-delete a:first-child, [_nghost-%COMP%]     angular2-st-tbody-create-cancel a:first-child, [_nghost-%COMP%]     angular2-st-tbody-expand a:first-child{margin-right:.25rem}"]
    });
  }
  return NgxSmartTableTbodyComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TableService = /*#__PURE__*/(() => {
  class TableService {
    mouseMoveEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
    static ɵfac = function TableService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TableService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
      token: TableService,
      factory: TableService.ɵfac,
      providedIn: 'root'
    });
  }
  return TableService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let FilterDefault = /*#__PURE__*/(() => {
  class FilterDefault {
    column;
    source;
    inputClass = '';
    debounceTime = 300;
    query = '';
    onFilter(query) {
      if (query === '') {
        this.source.removeFilter(this.column.id);
      } else {
        this.source.addFilter({
          field: this.column.id,
          search: query,
          filter: this.column.filterFunction
        });
      }
    }
    static ɵfac = function FilterDefault_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterDefault)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: FilterDefault,
      selectors: [["ng-component"]],
      inputs: {
        column: "column",
        source: "source",
        inputClass: "inputClass",
        debounceTime: "debounceTime",
        query: "query"
      },
      standalone: false,
      decls: 0,
      vars: 0,
      template: function FilterDefault_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
  return FilterDefault;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DefaultFilter = /*#__PURE__*/(() => {
  class DefaultFilter {
    subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
    changesSubscription;
    query = '';
    inputClass;
    debounceTime = 300;
    column;
    filter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    ngOnInit() {
      this.changesSubscription = this.subject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChanged */ .F)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(this.debounceTime)).subscribe(value => this.setFilter());
    }
    ngOnDestroy() {
      this.changesSubscription?.unsubscribe();
    }
    onValueChanged(value) {
      this.query = value;
      this.subject.next(value);
    }
    setFilter() {
      this.filter.emit(this.query);
    }
    static ɵfac = function DefaultFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DefaultFilter)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: DefaultFilter,
      selectors: [["ng-component"]],
      inputs: {
        query: "query",
        inputClass: "inputClass",
        debounceTime: "debounceTime",
        column: "column"
      },
      outputs: {
        filter: "filter"
      },
      standalone: false,
      decls: 0,
      vars: 0,
      template: function DefaultFilter_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
  return DefaultFilter;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CheckboxFilterComponent = /*#__PURE__*/(() => {
  class CheckboxFilterComponent extends DefaultFilter {
    filterActive = false;
    checked = false;
    trueVal = 'true';
    falseVal = 'false';
    resetText = 'reset';
    ngOnInit() {
      if (this.column.filter.config !== undefined) {
        const config = this.column.filter.config;
        this.trueVal = config?.true ?? 'true';
        this.falseVal = config?.false ?? 'false';
        this.resetText = config?.resetText ?? 'reset';
      }
      super.ngOnInit();
    }
    onChecked(checked) {
      this.filterActive = true;
      this.checked = checked;
      this.onValueChanged(checked ? this.trueVal : this.falseVal);
    }
    resetFilter(event) {
      event.preventDefault();
      this.query = '';
      this.checked = false;
      this.filterActive = false;
      this.setFilter();
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵCheckboxFilterComponent_BaseFactory;
      return function CheckboxFilterComponent_Factory(__ngFactoryType__) {
        return (ɵCheckboxFilterComponent_BaseFactory || (ɵCheckboxFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(CheckboxFilterComponent)))(__ngFactoryType__ || CheckboxFilterComponent);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: CheckboxFilterComponent,
      selectors: [["checkbox-filter"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 2,
      vars: 3,
      consts: [["type", "checkbox", 3, "change", "checked", "ngClass"], ["href", "#", 3, "click", 4, "ngIf"], ["href", "#", 3, "click"]],
      template: function CheckboxFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function CheckboxFilterComponent_Template_input_change_0_listener($event) {
            return ctx.onChecked($event.target.checked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, CheckboxFilterComponent_a_1_Template, 2, 1, "a", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.checked)("ngClass", ctx.inputClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.filterActive);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT],
      encapsulation: 2
    });
  }
  return CheckboxFilterComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InputFilterComponent = /*#__PURE__*/(() => {
  class InputFilterComponent extends DefaultFilter {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵInputFilterComponent_BaseFactory;
      return function InputFilterComponent_Factory(__ngFactoryType__) {
        return (ɵInputFilterComponent_BaseFactory || (ɵInputFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(InputFilterComponent)))(__ngFactoryType__ || InputFilterComponent);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InputFilterComponent,
      selectors: [["input-filter"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 1,
      vars: 3,
      consts: [["type", "text", 3, "change", "keyup", "ngClass", "value", "placeholder"]],
      template: function InputFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function InputFilterComponent_Template_input_change_0_listener($event) {
            return ctx.onValueChanged($event.target.value);
          })("keyup", function InputFilterComponent_Template_input_keyup_0_listener($event) {
            return ctx.onValueChanged($event.target.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", ctx.column.placeholder || ctx.column.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.inputClass)("value", ctx.query);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU],
      encapsulation: 2
    });
  }
  return InputFilterComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SelectFilterComponent = /*#__PURE__*/(() => {
  class SelectFilterComponent extends DefaultFilter {
    config;
    ngOnInit() {
      this.config = this.column.filter.config;
      // if no filter function is provided, but filtering shall be strict, define the respective filter
      const strict = this.config.strict === undefined || this.config.strict;
      if (this.column.filterFunction === undefined && strict) {
        this.column.filterFunction = (v, f) => v?.toString() === f;
      }
      super.ngOnInit();
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵSelectFilterComponent_BaseFactory;
      return function SelectFilterComponent_Factory(__ngFactoryType__) {
        return (ɵSelectFilterComponent_BaseFactory || (ɵSelectFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(SelectFilterComponent)))(__ngFactoryType__ || SelectFilterComponent);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: SelectFilterComponent,
      selectors: [["select-filter"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 4,
      vars: 4,
      consts: [[3, "change", "ngClass", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function SelectFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function SelectFilterComponent_Template_select_change_0_listener($event) {
            return ctx.onValueChanged($event.target.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, SelectFilterComponent_option_3_Template, 2, 2, "option", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.inputClass)("value", ctx.query);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh((tmp_2_0 = ctx.config.selectText) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "Select...");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.config.list);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq],
      encapsulation: 2
    });
  }
  return SelectFilterComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DefaultFilterComponent = /*#__PURE__*/(() => {
  class DefaultFilterComponent extends FilterDefault {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵDefaultFilterComponent_BaseFactory;
      return function DefaultFilterComponent_Factory(__ngFactoryType__) {
        return (ɵDefaultFilterComponent_BaseFactory || (ɵDefaultFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(DefaultFilterComponent)))(__ngFactoryType__ || DefaultFilterComponent);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: DefaultFilterComponent,
      selectors: [["default-table-filter"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 4,
      vars: 3,
      consts: [[3, "ngSwitch"], [3, "query", "inputClass", "debounceTime", "column", "filter", 4, "ngSwitchCase"], [3, "query", "inputClass", "debounceTime", "column", "filter", 4, "ngSwitchDefault"], [3, "filter", "query", "inputClass", "debounceTime", "column"]],
      template: function DefaultFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, DefaultFilterComponent_select_filter_1_Template, 1, 4, "select-filter", 1)(2, DefaultFilterComponent_checkbox_filter_2_Template, 1, 4, "checkbox-filter", 1)(3, DefaultFilterComponent_input_filter_3_Template, 1, 4, "input-filter", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx.column.filter.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "list");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "checkbox");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitchDefault */ .fG, CheckboxFilterComponent, InputFilterComponent, SelectFilterComponent],
      encapsulation: 2
    });
  }
  return DefaultFilterComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CustomFilterComponent = /*#__PURE__*/(() => {
  class CustomFilterComponent extends FilterDefault {
    customComponent;
    dynamicTarget;
    ngOnChanges(changes) {
      if (this.column && !this.customComponent) {
        const filter = this.column.filter;
        if (!filter) {
          return;
        }
        this.customComponent = this.dynamicTarget.createComponent(filter.component);
        // set @Inputs and @Outputs of custom component
        this.customComponent.instance.query = this.query;
        this.customComponent.instance.column = this.column;
        this.customComponent.instance.source = this.source;
        this.customComponent.instance.inputClass = this.inputClass;
        this.customComponent.instance.debounceTime = this.debounceTime;
        this.customComponent.instance.filter.subscribe(event => {
          this.onFilter(event);
        });
      }
      if (this.customComponent.instance.ngOnChanges !== undefined) {
        this.customComponent.instance.ngOnChanges(changes);
      }
    }
    ngOnDestroy() {
      if (this.customComponent) {
        this.customComponent.destroy();
      }
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵCustomFilterComponent_BaseFactory;
      return function CustomFilterComponent_Factory(__ngFactoryType__) {
        return (ɵCustomFilterComponent_BaseFactory || (ɵCustomFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(CustomFilterComponent)))(__ngFactoryType__ || CustomFilterComponent);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: CustomFilterComponent,
      selectors: [["custom-table-filter"]],
      viewQuery: function CustomFilterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ViewContainerRef */ .c1b);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.dynamicTarget = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 2,
      vars: 0,
      consts: [["dynamicTarget", ""]],
      template: function CustomFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CustomFilterComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
      },
      encapsulation: 2
    });
  }
  return CustomFilterComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let FilterComponent = /*#__PURE__*/(() => {
  class FilterComponent extends FilterDefault {
    query = '';
    dataChangedSub;
    ngOnChanges(changes) {
      if (changes.source) {
        if (!changes.source.firstChange) {
          this.dataChangedSub.unsubscribe();
        }
        this.dataChangedSub = this.source.onChanged().subscribe(dataChanges => {
          let newQuery = '';
          for (const f of dataChanges.filter) {
            if (f.field == this.column.id) {
              newQuery = f.search;
              break;
            }
          }
          this.query = newQuery;
        });
      }
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵFilterComponent_BaseFactory;
      return function FilterComponent_Factory(__ngFactoryType__) {
        return (ɵFilterComponent_BaseFactory || (ɵFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(FilterComponent)))(__ngFactoryType__ || FilterComponent);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: FilterComponent,
      selectors: [["angular2-smart-table-filter"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 1,
      vars: 1,
      consts: [["class", "angular2-smart-filter", 3, "ngSwitch", 4, "ngIf"], [1, "angular2-smart-filter", 3, "ngSwitch"], [3, "query", "column", "source", "inputClass", "debounceTime", 4, "ngSwitchCase"], [3, "query", "column", "source", "inputClass", "debounceTime", 4, "ngSwitchDefault"], [3, "query", "column", "source", "inputClass", "debounceTime"]],
      template: function FilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, FilterComponent_div_0_Template, 3, 2, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.column.isFilterable);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgSwitchDefault */ .fG, DefaultFilterComponent, CustomFilterComponent],
      styles: ["[_nghost-%COMP%]   .angular2-smart-filter[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   .angular2-smart-filter[_ngcontent-%COMP%]     select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}[_nghost-%COMP%]   .angular2-smart-filter[_ngcontent-%COMP%]     input[type=search]{box-sizing:inherit}[_nghost-%COMP%]   .angular2-smart-filter[_ngcontent-%COMP%]     a{font-weight:400}"]
    });
  }
  return FilterComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AddButtonComponent = /*#__PURE__*/(() => {
  class AddButtonComponent {
    ref;
    grid;
    source;
    create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    hiddenWhenFunction = () => false;
    disabledWhenFunction = () => false;
    addNewButtonContent;
    bypassSecurityTrust = 'none';
    constructor(ref) {
      this.ref = ref;
    }
    ngAfterViewInit() {
      this.ref.nativeElement.classList.add('angular2-smart-actions-title', 'angular2-smart-actions-title-add');
    }
    get visible() {
      return !this.hiddenWhenFunction();
    }
    get disabled() {
      return this.disabledWhenFunction();
    }
    ngOnChanges() {
      this.addNewButtonContent = this.grid.settings.add?.addButtonContent ?? 'Add';
      this.bypassSecurityTrust = this.grid.settings.add?.sanitizer?.bypassHtml ? 'html' : 'none';
      this.disabledWhenFunction = this.grid.settings.add?.disabledWhen ?? this.disabledWhenFunction;
      const actions = this.grid.settings.actions;
      if (actions === false || actions === undefined) {
        this.hiddenWhenFunction = () => actions === false;
      } else {
        this.hiddenWhenFunction = this.grid.settings.add?.hiddenWhen ?? (() => actions.add === false);
      }
    }
    onAdd(event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled) return;
      if (this.grid.settings.mode === 'external') {
        this.create.emit({
          source: this.source
        });
      } else {
        this.grid.showCreateForm();
      }
    }
    static ɵfac = function AddButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: AddButtonComponent,
      selectors: [["", "angular2-st-add-button", ""]],
      inputs: {
        grid: "grid",
        source: "source"
      },
      outputs: {
        create: "create"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      attrs: _c8,
      decls: 1,
      vars: 1,
      consts: [["href", "#", "class", "angular2-smart-action angular2-smart-action-add-add", 3, "ngClass", "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "angular2-smart-action", "angular2-smart-action-add-add", 3, "click", "ngClass", "innerHTML"]],
      template: function AddButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, AddButtonComponent_a_0_Template, 2, 7, "a", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.visible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, BypassSecurityTrustPipe],
      encapsulation: 2
    });
  }
  return AddButtonComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TheadFitlersRowComponent = /*#__PURE__*/(() => {
  class TheadFitlersRowComponent {
    grid;
    source;
    create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    isMultiSelectVisible;
    showActionColumnLeft;
    showActionColumnRight;
    filterInputClass;
    filterDebounceTime = 300;
    ngOnChanges(changes) {
      if (changes['grid'] !== undefined) {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.settings.filter?.inputClass ?? '';
        this.filterDebounceTime = this.grid.settings.filter?.debounceTime ?? 300;
      }
    }
    getVisibleColumns(columns) {
      return (columns || []).filter(column => !column.hide);
    }
    static ɵfac = function TheadFitlersRowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TheadFitlersRowComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TheadFitlersRowComponent,
      selectors: [["", "angular2-st-thead-filters-row", ""]],
      inputs: {
        grid: "grid",
        source: "source"
      },
      outputs: {
        create: "create"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      attrs: _c9,
      decls: 4,
      vars: 4,
      consts: [["scope", "col", 4, "ngIf"], ["angular2-st-add-button", "", "scope", "col", 3, "grid", "create", 4, "ngIf"], ["scope", "col", 3, "class", 4, "ngFor", "ngForOf"], ["angular2-st-add-button", "", "scope", "col", 3, "grid", "source", "create", 4, "ngIf"], ["scope", "col"], ["angular2-st-add-button", "", "scope", "col", 3, "create", "grid"], [3, "source", "column", "inputClass", "debounceTime"], ["angular2-st-add-button", "", "scope", "col", 3, "create", "grid", "source"]],
      template: function TheadFitlersRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TheadFitlersRowComponent_th_0_Template, 1, 0, "th", 0)(1, TheadFitlersRowComponent_th_1_Template, 1, 1, "th", 1)(2, TheadFitlersRowComponent_th_2_Template, 2, 7, "th", 2)(3, TheadFitlersRowComponent_th_3_Template, 1, 2, "th", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isMultiSelectVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showActionColumnLeft);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.getVisibleColumns(ctx.grid.getColumns()));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showActionColumnRight);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, FilterComponent, AddButtonComponent],
      encapsulation: 2
    });
  }
  return TheadFitlersRowComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TheadCreateCancelComponent = /*#__PURE__*/(() => {
  class TheadCreateCancelComponent {
    grid;
    createConfirm;
    createCancel;
    createButtonContent;
    cancelButtonContent;
    bypassSecurityTrust = 'none';
    onCreate(event) {
      event.preventDefault();
      event.stopPropagation();
      this.grid.create(this.grid.createFormRow, this.createConfirm);
    }
    onCancelCreate(event) {
      event.preventDefault();
      event.stopPropagation();
      this.grid.createFormShown = false;
      this.createCancel.emit({
        discardedData: this.grid.createFormRow.getNewData(),
        source: this.grid.source
      });
    }
    ngOnChanges() {
      // we can assume that default settings have been applied and all values are defined
      this.createButtonContent = this.grid.settings.add.createButtonContent;
      this.cancelButtonContent = this.grid.settings.add.cancelButtonContent;
      this.bypassSecurityTrust = this.grid.settings.add?.sanitizer?.bypassHtml ? 'html' : 'none';
    }
    static ɵfac = function TheadCreateCancelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TheadCreateCancelComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TheadCreateCancelComponent,
      selectors: [["angular2-st-actions"]],
      inputs: {
        grid: "grid",
        createConfirm: "createConfirm",
        createCancel: "createCancel"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 4,
      vars: 8,
      consts: [["href", "#", 1, "angular2-smart-action", "angular2-smart-action-add-create", 3, "click", "innerHTML"], ["href", "#", 1, "angular2-smart-action", "angular2-smart-action-add-cancel", 3, "click", "innerHTML"]],
      template: function TheadCreateCancelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "bypassSecurityTrust");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TheadCreateCancelComponent_Template_a_click_0_listener($event) {
            return ctx.onCreate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "bypassSecurityTrust");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TheadCreateCancelComponent_Template_a_click_2_listener($event) {
            return ctx.onCancelCreate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(1, 2, ctx.createButtonContent, ctx.bypassSecurityTrust), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(3, 5, ctx.cancelButtonContent, ctx.bypassSecurityTrust), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
        }
      },
      dependencies: [BypassSecurityTrustPipe],
      encapsulation: 2
    });
  }
  return TheadCreateCancelComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TheadFormRowComponent = /*#__PURE__*/(() => {
  class TheadFormRowComponent {
    grid;
    row;
    createConfirm;
    createCancel;
    isMultiSelectVisible;
    showActionColumnLeft;
    showActionColumnRight;
    addInputClass;
    ngOnChanges() {
      this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
      this.showActionColumnLeft = this.grid.showActionColumn('left');
      this.showActionColumnRight = this.grid.showActionColumn('right');
      this.addInputClass = this.grid.settings.add?.inputClass ?? '';
    }
    getVisibleCells(cells) {
      return (cells || []).filter(cell => !cell.getColumn().hide);
    }
    static ɵfac = function TheadFormRowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TheadFormRowComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TheadFormRowComponent,
      selectors: [["", "angular2-st-thead-form-row", ""]],
      inputs: {
        grid: "grid",
        row: "row",
        createConfirm: "createConfirm",
        createCancel: "createCancel"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      attrs: _c10,
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf"], ["class", "angular2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "angular2-smart-actions"], [3, "grid", "createConfirm", "createCancel"], [3, "cell", "grid", "isNew", "createConfirm", "createCancel", "inputClass", "isInEditing"]],
      template: function TheadFormRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TheadFormRowComponent_td_0_Template, 1, 0, "td", 0)(1, TheadFormRowComponent_td_1_Template, 2, 3, "td", 1)(2, TheadFormRowComponent_td_2_Template, 2, 7, "td", 2)(3, TheadFormRowComponent_td_3_Template, 2, 3, "td", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isMultiSelectVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showActionColumnLeft);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.getVisibleCells(ctx.row.getCells()));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showActionColumnRight);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, CellComponent, TheadCreateCancelComponent],
      encapsulation: 2
    });
  }
  return TheadFormRowComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgxResizerDirective = /*#__PURE__*/(() => {
  class NgxResizerDirective {
    elementRef;
    renderer;
    tableService;
    angular2SmartTableResizer;
    isClicked;
    parentElement;
    siblingElement;
    pointerOffset = 0;
    parentOffset = 0;
    siblingOffset = undefined;
    destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
    constructor(elementRef, renderer, tableService) {
      this.elementRef = elementRef;
      this.renderer = renderer;
      this.tableService = tableService;
    }
    ngOnInit() {
      this.tableService.mouseMoveEvent$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .takeUntil */ .Q)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(() => this.isClicked)).subscribe(event => {
        const offset = this.pointerOffset - event.pageX;
        const width = this.parentOffset - offset;
        this.angular2SmartTableResizer.column.resizedWidth = width;
        this.renderer.setStyle(this.parentElement, 'width', width + 'px');
        const siblingColumn = this.angular2SmartTableResizer.siblingColumn;
        if (siblingColumn !== undefined && this.siblingOffset !== undefined) {
          const siblingWidth = this.siblingOffset + offset;
          siblingColumn.resizedWidth = siblingWidth;
          this.renderer.setStyle(this.siblingElement, 'width', siblingWidth + 'px');
        }
      });
    }
    onMouseEnter(event) {
      this.isClicked = true;
      this.parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
      this.siblingElement = this.renderer.nextSibling(this.parentElement);
      this.pointerOffset = event.pageX;
      this.parentOffset = this.parentElement.offsetWidth;
      this.siblingOffset = this.siblingElement?.offsetWidth;
    }
    onMouseDown() {
      this.isClicked = false;
    }
    ngOnDestroy() {
      this.destroyed$.next(null);
    }
    static ɵfac = function NgxResizerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxResizerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .Renderer2 */ .sFG), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(TableService));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .FsC({
      type: NgxResizerDirective,
      selectors: [["", "angular2SmartTableResizer", ""]],
      hostBindings: function NgxResizerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("mousedown", function NgxResizerDirective_mousedown_HostBindingHandler($event) {
            return ctx.onMouseEnter($event);
          })("mouseup", function NgxResizerDirective_mouseup_HostBindingHandler() {
            return ctx.onMouseDown();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresolveDocument"] */ .EBC);
        }
      },
      inputs: {
        angular2SmartTableResizer: "angular2SmartTableResizer"
      },
      standalone: false
    });
  }
  return NgxResizerDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ActionsTitleComponent = /*#__PURE__*/(() => {
  class ActionsTitleComponent {
    ref;
    grid;
    actionsColumnTitle;
    constructor(ref) {
      this.ref = ref;
    }
    ngAfterViewInit() {
      this.ref.nativeElement.classList.add('angular2-smart-actions');
    }
    ngOnChanges() {
      this.actionsColumnTitle = 'Actions';
      if (this.grid.settings.actions !== false) {
        this.actionsColumnTitle = this.grid.settings.actions?.columnTitle ?? 'Actions';
      }
    }
    static ɵfac = function ActionsTitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ActionsTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ActionsTitleComponent,
      selectors: [["", "angular2-st-actions-title", ""]],
      inputs: {
        grid: "grid"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      attrs: _c11,
      decls: 2,
      vars: 1,
      consts: [[1, "angular2-smart-title"]],
      template: function ActionsTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.actionsColumnTitle);
        }
      },
      encapsulation: 2
    });
  }
  return ActionsTitleComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ColumnTitleComponent = /*#__PURE__*/(() => {
  class ColumnTitleComponent {
    currentDirection = null;
    multiSort = true;
    column;
    source;
    isHideable;
    hide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    dataChangedSub = null;
    ngOnChanges(changes) {
      if (changes.source) {
        if (this.dataChangedSub !== null) {
          this.dataChangedSub.unsubscribe();
        }
        this.dataChangedSub = this.source.onChanged().subscribe(_ => {
          this.currentDirection = null;
          const sortConf = this.source.getSort();
          if (sortConf) {
            sortConf.forEach(c => {
              if (c.field === this.column.id) {
                this.currentDirection = c.direction;
              }
            });
          }
        });
      }
    }
    ngOnDestroy() {
      if (this.dataChangedSub !== null) {
        this.dataChangedSub.unsubscribe();
        this.dataChangedSub = null;
      }
    }
    _sort(event) {
      event.preventDefault();
      this.changeSortDirection();
      const conf = {
        field: this.column.id,
        direction: this.currentDirection,
        compare: this.column.compareFunction
      };
      if (this.multiSort) {
        this.source.updateSort([conf]);
      } else {
        this.source.setSort([conf]);
      }
    }
    _hideColumnClicked(event) {
      event.preventDefault();
      this.hide.emit(this.column.id);
    }
    changeSortDirection() {
      // rotate sort direction, including null (no sort)
      if (this.currentDirection === null) {
        this.currentDirection = 'asc';
      } else if (this.currentDirection === 'asc') {
        this.currentDirection = 'desc';
      } else if (this.currentDirection === 'desc') {
        this.currentDirection = null;
      }
    }
    static ɵfac = function ColumnTitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ColumnTitleComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ColumnTitleComponent,
      selectors: [["angular2-st-column-title"]],
      inputs: {
        multiSort: "multiSort",
        column: "column",
        source: "source",
        isHideable: "isHideable"
      },
      outputs: {
        hide: "hide"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 3,
      vars: 3,
      consts: [["href", "#", "class", "angular2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "angular2-smart-sort", 4, "ngIf"], ["style", "position: absolute; top:0; right:0; border:none", 3, "click", 4, "ngIf"], ["href", "#", 1, "angular2-smart-sort-link", "sort", 3, "click", "ngClass"], [1, "angular2-smart-sort"], [2, "position", "absolute", "top", "0", "right", "0", "border", "none", 3, "click"]],
      template: function ColumnTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ColumnTitleComponent_a_0_Template, 2, 2, "a", 0)(1, ColumnTitleComponent_span_1_Template, 2, 1, "span", 1)(2, ColumnTitleComponent_button_2_Template, 2, 0, "button", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.column.isSortable);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.column.isSortable);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isHideable);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT],
      styles: ["a.sort[_ngcontent-%COMP%]:after{display:inline-block;font-size:.8em;color:#a9a9a9;vertical-align:top}a.sort.asc[_ngcontent-%COMP%]:after{content:\"\\25b2\"}a.sort.desc[_ngcontent-%COMP%]:after{content:\"\\25bc\"}"]
    });
  }
  return ColumnTitleComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TheadTitlesRowComponent = /*#__PURE__*/(() => {
  class TheadTitlesRowComponent {
    grid;
    isAllSelected;
    source;
    hide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    multiSelectWidth = '3rem';
    isMultiSelectVisible;
    showActionColumnLeft;
    showActionColumnRight;
    isResizable;
    isHideable = false;
    ngOnChanges() {
      this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
      this.showActionColumnLeft = this.grid.showActionColumn('left');
      this.showActionColumnRight = this.grid.showActionColumn('right');
      this.isResizable = this.grid.settings.resizable ?? false;
      this.isHideable = this.grid.settings.hideable ?? false;
    }
    get visibleColumns() {
      return (this.grid.getColumns() || []).filter(column => !column.hide);
    }
    static ɵfac = function TheadTitlesRowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TheadTitlesRowComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TheadTitlesRowComponent,
      selectors: [["", "angular2-st-thead-titles-row", ""]],
      inputs: {
        grid: "grid",
        isAllSelected: "isAllSelected",
        source: "source"
      },
      outputs: {
        hide: "hide",
        selectAllRows: "selectAllRows"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      attrs: _c12,
      decls: 4,
      vars: 4,
      consts: [["scope", "col", 3, "width", 4, "ngIf"], ["angular2-st-actions-title", "", "scope", "col", 3, "grid", 4, "ngIf"], ["scope", "col", 3, "class", "ngClass", "width", 4, "ngFor", "ngForOf"], ["scope", "col"], ["type", "checkbox", 3, "click", "checked"], ["angular2-st-actions-title", "", "scope", "col", 3, "grid"], ["scope", "col", 3, "ngClass"], [3, "hide", "source", "column", "isHideable", "multiSort"], ["class", "angular2-resizer-block", 3, "angular2SmartTableResizer", 4, "ngIf"], [1, "angular2-resizer-block", 3, "angular2SmartTableResizer"]],
      template: function TheadTitlesRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TheadTitlesRowComponent_th_0_Template, 2, 3, "th", 0)(1, TheadTitlesRowComponent_th_1_Template, 1, 1, "th", 1)(2, TheadTitlesRowComponent_th_2_Template, 3, 11, "th", 2)(3, TheadTitlesRowComponent_th_3_Template, 1, 1, "th", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isMultiSelectVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showActionColumnLeft);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.visibleColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showActionColumnRight);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, NgxResizerDirective, ActionsTitleComponent, ColumnTitleComponent],
      encapsulation: 2
    });
  }
  return TheadTitlesRowComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgxSmartTableTheadComponent = /*#__PURE__*/(() => {
  class NgxSmartTableTheadComponent {
    tableService;
    grid;
    source;
    isAllSelected;
    createConfirm;
    createCancel;
    hide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    isHideHeader;
    isHideSubHeader;
    constructor(tableService) {
      this.tableService = tableService;
    }
    ngOnChanges() {
      this.isHideHeader = this.grid.settings.hideHeader ?? false;
      this.isHideSubHeader = this.grid.settings.hideSubHeader ?? false;
    }
    mouseMove(event) {
      this.tableService.mouseMoveEvent$.next(event);
    }
    static ɵfac = function NgxSmartTableTheadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxSmartTableTheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(TableService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: NgxSmartTableTheadComponent,
      selectors: [["", "angular2-st-thead", ""]],
      hostBindings: function NgxSmartTableTheadComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("mousemove", function NgxSmartTableTheadComponent_mousemove_HostBindingHandler($event) {
            return ctx.mouseMove($event);
          });
        }
      },
      inputs: {
        grid: "grid",
        source: "source",
        isAllSelected: "isAllSelected",
        createConfirm: "createConfirm",
        createCancel: "createCancel"
      },
      outputs: {
        hide: "hide",
        selectAllRows: "selectAllRows",
        create: "create"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      attrs: _c14,
      decls: 3,
      vars: 3,
      consts: [["angular2-st-thead-titles-row", "", "class", "angular2-smart-titles", 3, "grid", "isAllSelected", "source", "hide", "selectAllRows", 4, "ngIf"], ["angular2-st-thead-filters-row", "", "class", "angular2-smart-filters", 3, "grid", "source", "create", 4, "ngIf"], ["angular2-st-thead-form-row", "", 3, "grid", "row", "createConfirm", "createCancel", 4, "ngIf"], ["angular2-st-thead-titles-row", "", 1, "angular2-smart-titles", 3, "hide", "selectAllRows", "grid", "isAllSelected", "source"], ["angular2-st-thead-filters-row", "", 1, "angular2-smart-filters", 3, "create", "grid", "source"], ["angular2-st-thead-form-row", "", 3, "grid", "row", "createConfirm", "createCancel"]],
      template: function NgxSmartTableTheadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, NgxSmartTableTheadComponent_tr_0_Template, 1, 3, "tr", 0)(1, NgxSmartTableTheadComponent_tr_1_Template, 1, 2, "tr", 1)(2, NgxSmartTableTheadComponent_tr_2_Template, 1, 4, "tr", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.isHideHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.isHideSubHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.grid.createFormShown);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, TheadFitlersRowComponent, TheadFormRowComponent, TheadTitlesRowComponent],
      styles: ["[_nghost-%COMP%]     angular2-st-actions a:first-child{margin-right:.25rem}"]
    });
  }
  return NgxSmartTableTheadComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TagComponent = /*#__PURE__*/(() => {
  class TagComponent {
    item;
    close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    closeClicked(evt) {
      evt.stopPropagation();
      this.close.emit(this.item.key);
    }
    static ɵfac = function TagComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TagComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TagComponent,
      selectors: [["angular2-smart-table-tag"]],
      inputs: {
        item: "item"
      },
      outputs: {
        close: "close"
      },
      standalone: false,
      decls: 6,
      vars: 1,
      consts: [[2, "padding", ".25em", "display", "inline", "white-space", "nowrap"], ["aria-hidden", "true", "focusable", "false", "role", "img", "viewBox", "0 0 64 64", "id", "svg19", "xmlns", "http://www.w3.org/2000/svg", 2, "width", "1.2em", "cursor", "pointer", 3, "click"], ["id", "defs23"], ["fill", "currentColor", "d", "m 32.271186,1.2711864 c -17.125,0 -30.9999996,13.8749996 -30.9999996,30.9999996 0,17.125 13.8749996,31 30.9999996,31 17.125,0 31,-13.875 31,-31 0,-17.125 -13.875,-30.9999996 -31,-30.9999996 z m 15.2,39.1374996 c 0.5875,0.5875 0.5875,1.5375 0,2.125 l -4.95,4.9375 c -0.5875,0.5875 -1.5375,0.5875 -2.125,0 l -8.125,-8.2 -8.1375,8.2 c -0.5875,0.5875 -1.5375,0.5875 -2.125,0 l -4.9375,-4.95 c -0.5875,-0.5875 -0.5875,-1.5375 0,-2.125 l 8.2,-8.125 -8.2,-8.1375 c -0.5875,-0.5875 -0.5875,-1.5375 0,-2.125 l 4.95,-4.95 c 0.5875,-0.5875 1.5375,-0.5875 2.125,0 l 8.125,8.2125 8.1375,-8.2 c 0.5875,-0.5875 1.5375,-0.5875 2.125,0 l 4.95,4.95 c 0.5875,0.5875 0.5875,1.5375 0,2.125 l -8.2125,8.125 z", "id", "path17", 2, "stroke-width", "0.125"], [2, "margin-left", "3px", "font-size", "1.5em"]],
      template: function TagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceSVG"] */ .qSk();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TagComponent_Template_svg_click_1_listener($event) {
            return ctx.closeClicked($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "defs", 2)(3, "path", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceHTML"] */ .joV();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.item.value);
        }
      },
      encapsulation: 2
    });
  }
  return TagComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TagsListComponent = /*#__PURE__*/(() => {
  class TagsListComponent {
    tags;
    close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    closedTag(tagKey) {
      this.close.emit(tagKey);
    }
    static ɵfac = function TagsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TagsListComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TagsListComponent,
      selectors: [["angular2-smart-table-tags-list"]],
      inputs: {
        tags: "tags"
      },
      outputs: {
        close: "close"
      },
      standalone: false,
      decls: 2,
      vars: 1,
      consts: [[3, "item", "close", 4, "ngFor", "ngForOf"], [3, "close", "item"]],
      template: function TagsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, TagsListComponent_angular2_smart_table_tag_1_Template, 1, 1, "angular2-smart-table-tag", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.tags);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, TagComponent],
      encapsulation: 2
    });
  }
  return TagsListComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let Angular2SmartTableComponent = /*#__PURE__*/(() => {
  class Angular2SmartTableComponent {
    source;
    settings;
    rowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    userRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    custom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    deleteConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    editConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    editCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    createConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    createCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    rowHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    afterGridInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    dataChangeSubscription;
    tableClass;
    tableId;
    perPageSelect;
    perPageSelectLabel;
    isHideHeader;
    isHideSubHeader;
    isPagerDisplay;
    isTagListShown = true;
    rowClassFunction;
    grid; // initially undefined, but will never be set to undefined, so we do not add undefined type here
    defaultSettings = {
      mode: 'inline',
      selectMode: 'single',
      sortMode: 'multi',
      switchPageToSelectedRowPage: false,
      hideHeader: false,
      hideSubHeader: false,
      resizable: false,
      hideable: false,
      hideTagList: false,
      actions: {
        columnTitle: 'Actions',
        add: true,
        edit: true,
        delete: true,
        custom: [],
        position: 'left'
      },
      filter: {
        inputClass: '',
        debounceTime: 300
      },
      edit: {
        inputClass: '',
        editButtonContent: 'Edit',
        saveButtonContent: 'Update',
        cancelButtonContent: 'Cancel',
        confirmSave: false
      },
      add: {
        inputClass: '',
        addButtonContent: 'Add New',
        createButtonContent: 'Create',
        cancelButtonContent: 'Cancel',
        confirmCreate: false
      },
      delete: {
        deleteButtonContent: 'Delete',
        confirmDelete: false
      },
      expand: {
        buttonContent: 'Expand'
      },
      attr: {
        id: '',
        class: ''
      },
      noDataMessage: 'No data found',
      columns: {},
      pager: {
        display: true,
        page: 1,
        perPage: 10,
        perPageSelect: [],
        perPageSelectLabel: 'Per Page:'
      },
      rowClassFunction: _ => ''
    };
    isAllSelected = false;
    onSelectRowSubscription;
    destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
    ngOnChanges(changes) {
      if (this.grid !== undefined) {
        // grid is already created, just update the relevant properties
        if (changes['settings']) {
          this.grid.setSettings(this.prepareSettings());
          this.updateNotVisibleColumnTagList();
        }
        if (changes['source']) {
          this.source = this.prepareSource();
          this.grid.setSource(this.source);
        }
      } else if (this.settings !== undefined && this.source !== undefined) {
        // create a new grid, but only if settings and source are already available
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.updateNotVisibleColumnTagList();
        this.subscribeToOnSelectRow();
        /** Delay a bit the grid init event trigger to prevent empty rows */
        setTimeout(() => {
          this.afterGridInit.emit(this.grid.dataSet);
        }, 10);
      }
      // once everything is set up, we can copy some settings
      // we use the settings from the grid, because those are enriched with the defaults
      if (this.grid !== undefined) {
        this.tableId = this.grid.settings.attr.id;
        this.tableClass = this.grid.settings.attr.class;
        this.isHideHeader = this.grid.settings.hideHeader;
        this.isHideSubHeader = this.grid.settings.hideSubHeader;
        this.isTagListShown = !(this.grid.settings.hideTagList ?? false);
        this.isPagerDisplay = this.grid.settings.pager.display;
        this.perPageSelect = this.grid.settings.pager.perPageSelect;
        this.perPageSelectLabel = this.grid.settings.pager.perPageSelectLabel;
        this.rowClassFunction = this.grid.settings.rowClassFunction;
      }
    }
    ngOnDestroy() {
      this.destroyed$.next();
    }
    onEditRowSelect(row) {
      if (this.grid.settings.selectMode === 'single') {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
      }
    }
    onUserSelectRow(row) {
      if (this.grid.settings.selectMode === 'single') {
        this.grid.selectRow(row);
        this.emitUserSelectRow(row);
      }
    }
    onRowHover(row) {
      this.rowHover.emit(row);
    }
    onMultipleSelectRow(row) {
      this.grid.multipleSelectRow(row);
      // TODO: currently we make our life easy and just deselect the "select all" checkbox when needed
      //       but we do not check it, when we determine that the user has selected everything
      if (!row.isSelected) this.isAllSelected = false;
      this.emitUserSelectRow(row);
    }
    onSelectAllRows() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        _this3.isAllSelected = !_this3.isAllSelected;
        yield _this3.grid.selectAllRows(_this3.isAllSelected);
        _this3.emitUserSelectRow(null);
      })();
    }
    onExpandRow(row) {
      this.grid.expandRow(row);
    }
    prepareSource() {
      let source;
      if (this.source instanceof DataSource) {
        source = this.source;
      } else if (this.source instanceof Array) {
        source = new LocalDataSource(this.source);
      } else {
        source = new LocalDataSource();
      }
      // we have to hook up a listener to update some variables when the data source changes
      if (this.dataChangeSubscription) this.dataChangeSubscription.unsubscribe();
      this.dataChangeSubscription = source.onChanged().subscribe(changes => this.processDataChange(changes));
      return source;
    }
    processDataChange(_) {
      // here we can already assume that the source has been lifted to an instance of DataSource
      const source = this.source;
      this.isAllSelected = source.isEveryElementSelected(this.grid.settings.selectMode === 'multi_filtered', true);
    }
    prepareSettings() {
      return deepExtend({}, this.defaultSettings, this.settings);
    }
    getNotVisibleColumns() {
      return (this.grid?.getColumns() ?? []).filter(column => column.hide);
    }
    notVisibleColumnTagsList = [];
    updateNotVisibleColumnTagList() {
      this.notVisibleColumnTagsList = this.getNotVisibleColumns().map(c => ({
        key: c.id,
        value: c.title
      }));
    }
    onShowColumn(columnId) {
      this.grid.settings.columns[columnId].hide = false;
      this.grid.recreateDataSet();
      this.updateNotVisibleColumnTagList();
    }
    onHideColumn(columnId) {
      this.grid.settings.columns[columnId].hide = true;
      this.grid.recreateDataSet();
      this.updateNotVisibleColumnTagList();
    }
    createRowSelectionEvent(row) {
      return {
        row: row,
        data: row ? row.getData() : null,
        isSelected: row ? row.getIsSelected() : null,
        source: this.source,
        selected: this.grid.getSelectedItems()
      };
    }
    emitUserSelectRow(row) {
      this.userRowSelect.emit(this.createRowSelectionEvent(row));
      // always also emit the general event
      this.emitSelectRow(row);
    }
    emitSelectRow(row) {
      this.rowSelect.emit(this.createRowSelectionEvent(row));
    }
    isIndexOutOfRange(index) {
      const dataAmount = this.source?.count();
      return index < 0 || typeof dataAmount === 'number' && index >= dataAmount;
    }
    subscribeToOnSelectRow() {
      if (this.onSelectRowSubscription) {
        this.onSelectRowSubscription.unsubscribe();
      }
      this.onSelectRowSubscription = this.grid.onSelectRow().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .takeUntil */ .Q)(this.destroyed$)).subscribe(row => {
        this.emitSelectRow(row);
      });
    }
    static ɵfac = function Angular2SmartTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Angular2SmartTableComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: Angular2SmartTableComponent,
      selectors: [["angular2-smart-table"]],
      inputs: {
        source: "source",
        settings: "settings"
      },
      outputs: {
        rowSelect: "rowSelect",
        userRowSelect: "userRowSelect",
        delete: "delete",
        edit: "edit",
        create: "create",
        custom: "custom",
        deleteConfirm: "deleteConfirm",
        editConfirm: "editConfirm",
        editCancel: "editCancel",
        createConfirm: "createConfirm",
        createCancel: "createCancel",
        rowHover: "rowHover",
        afterGridInit: "afterGridInit"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "tags", "close", 4, "ngIf"], [2, "overflow-x", "auto", "-webkit-overflow-scrolling", "touch"], [3, "id", "ngClass"], ["angular2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "createCancel", "create", "selectAllRows", "hide", 4, "ngIf"], ["angular2-st-tbody", "", 3, "edit", "delete", "custom", "userSelectRow", "editRowSelect", "multipleSelectRow", "onExpandRow", "rowHover", "grid", "source", "deleteConfirm", "editConfirm", "editCancel", "rowClassFunction"], [3, "source", "perPageSelect", "perPageSelectLabel", 4, "ngIf"], [3, "close", "tags"], ["angular2-st-thead", "", 3, "create", "selectAllRows", "hide", "grid", "isAllSelected", "source", "createConfirm", "createCancel"], [3, "source", "perPageSelect", "perPageSelectLabel"]],
      template: function Angular2SmartTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, Angular2SmartTableComponent_ng_container_0_Template, 7, 11, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.grid !== undefined);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, PagerComponent, NgxSmartTableTbodyComponent, NgxSmartTableTheadComponent, TagsListComponent],
      styles: ["[_nghost-%COMP%]{font-size:1rem}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     button, [_nghost-%COMP%]     input, [_nghost-%COMP%]     optgroup, [_nghost-%COMP%]     select, [_nghost-%COMP%]     textarea{color:inherit;font:inherit;margin:0}[_nghost-%COMP%]     table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}[_nghost-%COMP%]     table tr th{font-weight:700;position:relative}[_nghost-%COMP%]     table tr th .angular2-resizer-block{width:8px;height:100%;position:absolute;right:0;top:0;cursor:col-resize}[_nghost-%COMP%]     table tr section{font-size:.75em;font-weight:700}[_nghost-%COMP%]     table tr td, [_nghost-%COMP%]     table tr th{font-size:.875em;margin:0;padding:.5em 1em}[_nghost-%COMP%]     a{color:#1e6bb8;text-decoration:none}[_nghost-%COMP%]     a:hover{text-decoration:underline}[_nghost-%COMP%]     .not-allowed{cursor:not-allowed}"]
    });
  }
  return Angular2SmartTableComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const PIPES = [BypassSecurityTrustPipe];
let PipesModule = /*#__PURE__*/(() => {
  class PipesModule {
    static ɵfac = function PipesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PipesModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
      type: PipesModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({});
  }
  return PipesModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const CELL_COMPONENTS = [CellComponent, EditCellDefault, DefaultEditor, CustomEditComponent, DefaultEditComponent, EditCellComponent, CheckboxEditorComponent, InputEditorComponent, SelectEditorComponent, TextareaEditorComponent, CustomViewComponent, ViewCellComponent];
let CellModule = /*#__PURE__*/(() => {
  class CellModule {
    static ɵfac = function CellModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CellModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
      type: CellModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD, PipesModule]
    });
  }
  return CellModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const FILTER_COMPONENTS = [FilterDefault, DefaultFilter, FilterComponent, DefaultFilterComponent, CustomFilterComponent, CheckboxFilterComponent, InputFilterComponent, SelectFilterComponent];
let FilterModule = /*#__PURE__*/(() => {
  class FilterModule {
    static ɵfac = function FilterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
      type: FilterModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD]
    });
  }
  return FilterModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PagerModule = /*#__PURE__*/(() => {
  class PagerModule {
    static ɵfac = function PagerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PagerModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
      type: PagerModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD]
    });
  }
  return PagerModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TagsModule = /*#__PURE__*/(() => {
  class TagsModule {
    static ɵfac = function TagsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TagsModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
      type: TagsModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD]
    });
  }
  return TagsModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const TBODY_COMPONENTS = [TbodySaveCancelComponent, TbodyEditDeleteComponent, TbodyCustomComponent, TbodyExpandRowComponent, TbodyCustomItemComponent, NgxSmartTableTbodyComponent];
let TBodyModule = /*#__PURE__*/(() => {
  class TBodyModule {
    static ɵfac = function TBodyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TBodyModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
      type: TBodyModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD, CellModule, PipesModule]
    });
  }
  return TBodyModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const DIRECTIVES = [NgxResizerDirective];
let DirectivesModule = /*#__PURE__*/(() => {
  class DirectivesModule {
    static ɵfac = function DirectivesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DirectivesModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
      type: DirectivesModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD]
    });
  }
  return DirectivesModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const THEAD_COMPONENTS = [TheadCreateCancelComponent, ActionsTitleComponent, AddButtonComponent, ColumnTitleComponent, TheadFitlersRowComponent, TheadFormRowComponent, TheadTitlesRowComponent, NgxSmartTableTheadComponent];
let THeadModule = /*#__PURE__*/(() => {
  class THeadModule {
    static ɵfac = function THeadModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || THeadModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
      type: THeadModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD, FilterModule, CellModule, DirectivesModule, PipesModule]
    });
  }
  return THeadModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let Angular2SmartTableModule = /*#__PURE__*/(() => {
  class Angular2SmartTableModule {
    static ɵfac = function Angular2SmartTableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Angular2SmartTableModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
      type: Angular2SmartTableModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD, CellModule, FilterModule, PagerModule, TBodyModule, THeadModule, TagsModule]
    });
  }
  return Angular2SmartTableModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ServerSourceConf = /*#__PURE__*/(() => {
  class ServerSourceConf {
    static SORT_FIELD_KEY = '_sort';
    static SORT_DIR_KEY = '_order';
    static PAGER_PAGE_KEY = '_page';
    static PAGER_LIMIT_KEY = '_limit';
    static FILTER_FIELD_KEY = '#field#_like';
    static TOTAL_KEY = 'x-total-count';
    static DATA_KEY = '';
    endPoint;
    sortFieldKey;
    sortDirKey;
    pagerPageKey;
    pagerLimitKey;
    filterFieldKey;
    totalKey;
    dataKey;
    constructor({
      endPoint = '',
      sortFieldKey = '',
      sortDirKey = '',
      pagerPageKey = '',
      pagerLimitKey = '',
      filterFieldKey = '',
      totalKey = '',
      dataKey = ''
    } = {}) {
      this.endPoint = endPoint ? endPoint : '';
      this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
      this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
      this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
      this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
      this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
      this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
      this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
  }
  return ServerSourceConf;
})();
class ServerDataSource extends LocalDataSource {
  http;
  conf;
  lastRequestCount = 0;
  constructor(http, conf = {}) {
    super();
    this.http = http;
    this.conf = new ServerSourceConf(conf);
    if (!this.conf.endPoint) {
      throw new Error('At least endPoint must be specified as a configuration of the server data source.');
    }
  }
  count() {
    return this.lastRequestCount;
  }
  getAll() {
    return this.loadData(false, false, false);
  }
  getElements() {
    return this.loadData(true, true, true);
  }
  getFilteredAndSorted() {
    return this.loadData(true, true, false);
  }
  loadData(filtered, sorted, paginated) {
    return this.requestElements(filtered, sorted, paginated).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .map */ .T)(res => {
      this.lastRequestCount = this.extractTotalFromResponse(res);
      // TODO: the following two lines are obviously incorrect
      //       but whoever hacked this ServerDataSource into the project did not think about compatibility to the interface
      this.data = this.extractDataFromResponse(res);
      this.filteredAndSorted = this.data;
      return this.data;
    })).toPromise();
  }
  /**
   * Extracts array of data from server response
   * @param res
   * @returns {any}
   */
  extractDataFromResponse(res) {
    const rawData = res.body;
    const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
    if (data instanceof Array) {
      return data;
    }
    throw new Error(`Data must be an array. Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
  }
  /**
   * Extracts total rows count from the server response
   * Looks for the count in the headers first, then in the response body
   * @param res
   * @returns {any}
   */
  extractTotalFromResponse(res) {
    if (res.headers.has(this.conf.totalKey)) {
      return +res.headers.get(this.conf.totalKey);
    } else {
      const rawData = res.body;
      return getDeepFromObject(rawData, this.conf.totalKey, 0);
    }
  }
  requestElements(filtered, sorted, paginated) {
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__/* .HttpParams */ .Nl();
    if (filtered) httpParams = this.addFilterRequestParams(httpParams);
    if (sorted) httpParams = this.addSortRequestParams(httpParams);
    if (paginated) httpParams = this.addPagerRequestParams(httpParams);
    return this.http.get(this.conf.endPoint, {
      params: httpParams,
      observe: 'response'
    });
  }
  addSortRequestParams(httpParams) {
    if (this.sortConf) {
      let fields = [];
      let directions = [];
      this.sortConf.forEach(fieldConf => {
        if (fieldConf.direction !== null) {
          fields.push(fieldConf.field);
          directions.push(fieldConf.direction.toUpperCase());
        }
      });
      httpParams = httpParams.set(this.conf.sortFieldKey, fields.join(','));
      httpParams = httpParams.set(this.conf.sortDirKey, directions.join(','));
    }
    return httpParams;
  }
  addFilterRequestParams(httpParams) {
    this.filterConf.forEach(fieldConf => {
      if (fieldConf['search']) {
        httpParams = httpParams.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
      }
    });
    return httpParams;
  }
  addPagerRequestParams(httpParams) {
    httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf.page);
    httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf.perPage);
    return httpParams;
  }
}

/*
 * Public API Surface of angular2-smart-table
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular2-smart-table.mjs.map

/***/ }),

/***/ 52530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48918);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29384);


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

/***/ 52773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ ignoreElements)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48918);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29384);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55343);



function ignoreElements() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, _util_noop__WEBPACK_IMPORTED_MODULE_2__/* .noop */ .l));
  });
}
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ 55343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 55380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler),
/* harmony export */   b: () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82406);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49523);


const asyncScheduler = /*#__PURE__*/new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 56871:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFilter);

/***/ }),

/***/ 60622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98818);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48918);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29384);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .D) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 63007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55380);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45631);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75519);



function delay(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .E) {
  const duration = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .O)(due, scheduler);
  return (0,_delayWhen__WEBPACK_IMPORTED_MODULE_2__/* .delayWhen */ .o)(() => duration);
}
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ 63478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ observable)
/* harmony export */ });
const observable = /*#__PURE__*/(() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ 65743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80993);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45289);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38887);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33657);




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

/***/ 66530:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2819);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92312);



/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) == mapTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMap);

/***/ }),

/***/ 66710:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);

/***/ }),

/***/ 67393:
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

/***/ 67508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82318);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33657);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29384);



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

/***/ 69103:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneRegExp);

/***/ }),

/***/ 71482:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29460);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19311);



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_root_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, 'DataView');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);

/***/ }),

/***/ 74137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48918);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ 75519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80993);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55380);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8670);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90019);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .async */ .b) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__/* .isScheduler */ .m)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .c(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__/* .isValidDate */ .v)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 75928:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2819);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92312);



/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) == setTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsSet);

/***/ }),

/***/ 76388:
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

/***/ 79567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67393);

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

/***/ 80599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29460);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19311);



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_root_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, 'Set');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);

/***/ }),

/***/ 80993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7782);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23673);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63478);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87635);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2130);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38887);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20330);







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

/***/ 82318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tg: () => (/* binding */ innerFrom)
/* harmony export */ });
/* unused harmony exports fromInteropObservable, fromArrayLike, fromPromise, fromIterable, fromAsyncIterable, fromReadableStreamLike */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92042);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82529);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9282);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80993);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26623);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41617);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20335);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38981);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86476);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38887);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34758);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63478);












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

/***/ 82406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46092);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32374);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76388);



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

/***/ 82529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ 84271:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayEach);

/***/ }),

/***/ 86476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ readableStreamLikeToAsyncGenerator),
/* harmony export */   U: () => (/* binding */ isReadableStreamLike)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92042);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38887);


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

/***/ 87205:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56231);
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(84271);
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(52065);
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27499);
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20440);
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4224);
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31369);
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36849);
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37274);
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1604);
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(98571);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2819);
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24171);
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15309);
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25067);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69007);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79042);
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2216);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57999);
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96434);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90116);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50859);























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_FLAT_FLAG = 2,
  CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
    isDeep = bitmask & CLONE_DEEP_FLAG,
    isFlat = bitmask & CLONE_FLAT_FLAG,
    isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)) {
    return value;
  }
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value);
  if (isArr) {
    result = (0,_initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(value);
    if (!isDeep) {
      return (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value, result);
    }
  } else {
    var tag = (0,_getTag_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(value),
      isFunc = tag == funcTag || tag == genTag;
    if ((0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(value)) {
      return (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(value);
      if (!isDeep) {
        return isFlat ? (0,_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(value, (0,_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(result, value)) : (0,_copySymbols_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(value, (0,_baseAssign_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = (0,_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if ((0,_isSet_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if ((0,_isMap_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A : isFlat ? _keysIn_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A : _keys_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A;
  var props = isArr ? undefined : keysFunc(value);
  (0,_arrayEach_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseClone);

/***/ }),

/***/ 87635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* unused harmony export pipe */
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98818);

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

/***/ 90019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ 90116:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23477);
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41502);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22808);




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(object) : (0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),

/***/ 91789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47700);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98818);


function mergeAll(concurrent = Infinity) {
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__/* .mergeMap */ .Z)(_util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ 92042:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AQ: () => (/* binding */ __asyncGenerator),
/* harmony export */   N3: () => (/* binding */ __await),
/* harmony export */   sH: () => (/* binding */ __awaiter),
/* harmony export */   xN: () => (/* binding */ __asyncValues)
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __asyncDelegator, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
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

/***/ 94331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80993);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33657);


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

/***/ 96434:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75928);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44975);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98583);




/* Node.js helper references. */
var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSet);

/***/ }),

/***/ 97539:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubArray);

/***/ }),

/***/ 98571:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23953);
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49437);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50859);




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeysIn);

/***/ }),

/***/ 98818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 99228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5585);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82318);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__/* .scheduled */ .c)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(input);
}
//# sourceMappingURL=from.js.map

/***/ })

}]);