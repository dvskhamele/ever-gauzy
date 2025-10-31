(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1760],{

/***/ 68:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var CalChinese = __webpack_require__(81515);
var CalEvent = __webpack_require__(99063);
var CalDate = __webpack_require__(76431);
var Chinese = /*#__PURE__*/function (_CalEvent) {
  _inherits(Chinese, _CalEvent);
  var _super = _createSuper(Chinese);

  /**
   * @param {object} [opts]
   */
  function Chinese(opts) {
    var _this;
    _classCallCheck(this, Chinese);
    opts = opts || {};
    _this = _super.call(this, opts);
    switch (opts.fn) {
      case 'chinese':
        _this.cal = new CalChinese.CalendarChinese();
        break;
      case 'korean':
        _this.cal = new CalChinese.CalendarKorean();
        break;
      case 'vietnamese':
        _this.cal = new CalChinese.CalendarVietnamese();
        break;
    }
    return _this;
  }
  _createClass(Chinese, [{
    key: "inYear",
    value: function inYear(year) {
      var d;
      var jde;
      var date;
      var opts = this.opts;
      if (opts.solarterm) {
        jde = this.cal.solarTerm(opts.solarterm, year);
        date = this.cal.fromJDE(jde).toGregorian();
        d = new CalDate(date).setOffset(opts.day - 1);
      } else {
        this.cal.set(opts.cycle, opts.year, opts.month, opts.leapMonth, opts.day);
        jde = this.cal.toJDE(year);
        date = this.cal.fromJDE(jde).toGregorian();
        d = new CalDate(date);
      }
      this.dates.push(d);
      return this;
    }
  }]);
  return Chinese;
}(CalEvent);
module.exports = Chinese;

/***/ }),

/***/ 1870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ TimeOffMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _selectors_selectors_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98048);
/* harmony import */ var _file_uploader_input_file_uploader_input_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46880);
/* harmony import */ var _time_off_policy_select_time_off_policy_select_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);










let TimeOffMutationModule = /*#__PURE__*/(() => {
  class TimeOffMutationModule {
    static {
      this.ɵfac = function TimeOffMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeOffMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TimeOffMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormsModule */ .YN, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _selectors_selectors_module__WEBPACK_IMPORTED_MODULE_6__/* .SelectorsModule */ .b, _file_uploader_input_file_uploader_input_module__WEBPACK_IMPORTED_MODULE_7__/* .FileUploaderModule */ .N, _time_off_policy_select_time_off_policy_select_module__WEBPACK_IMPORTED_MODULE_8__/* .TimeOffPolicySelectModule */ .N]
      });
    }
  }
  return TimeOffMutationModule;
})();

/***/ }),

/***/ 2420:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var CalEventMap = __webpack_require__(35481);
var calendar = __webpack_require__(63825);
var Hebrew = /*#__PURE__*/function (_CalEventMap) {
  _inherits(Hebrew, _CalEventMap);
  var _super = _createSuper(Hebrew);
  function Hebrew(opts) {
    var _this;
    _classCallCheck(this, Hebrew);
    _this = _super.call(this, opts);
    _this.calendar = calendar;
    return _this;
  }
  _createClass(Hebrew, [{
    key: "get",
    value: function get(timezone) {
      var _this2 = this;
      var arr = this.dates.map(function (date) {
        var o = {
          date: date.toString() + ' -0600',
          start: date.setOffset(-6, 'h').toTimezone(timezone),
          end: date.toEndDate().toTimezone(timezone)
        };
        _this2._addSubstitute(date, o);
        return o;
      });
      return arr;
    }
  }]);
  return Hebrew;
}(CalEventMap);
module.exports = Hebrew;

/***/ }),

/***/ 3039:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CalendarToJD = CalendarToJD;
exports.CalendarGregorianToJD = CalendarGregorianToJD;
exports.CalendarJulianToJD = CalendarJulianToJD;
exports.LeapYearJulian = LeapYearJulian;
exports.LeapYearGregorian = LeapYearGregorian;
exports.JDToCalendar = JDToCalendar;
exports.JDToCalendarGregorian = JDToCalendarGregorian;
exports.JDToCalendarJulian = JDToCalendarJulian;
exports.isJDCalendarGregorian = isJDCalendarGregorian;
exports.isCalendarGregorian = isCalendarGregorian;
exports.JDToDate = JDToDate;
exports.DateToJD = DateToJD;
exports.JDEToDate = JDEToDate;
exports.DateToJDE = DateToJDE;
exports.MJDToJD = MJDToJD;
exports.JDToMJD = JDToMJD;
exports.DayOfWeek = DayOfWeek;
exports.DayOfYearGregorian = DayOfYearGregorian;
exports.DayOfYearJulian = DayOfYearJulian;
exports.DayOfYear = DayOfYear;
exports.DayOfYearToCalendar = DayOfYearToCalendar;
exports.DayOfYearToCalendarGregorian = DayOfYearToCalendarGregorian;
exports.DayOfYearToCalendarJulian = DayOfYearToCalendarJulian;
exports["default"] = exports.CalendarGregorian = exports.CalendarJulian = exports.Calendar = exports.GREGORIAN0JD = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
var _sexagesimal = _interopRequireDefault(__webpack_require__(31115));
var _deltat = _interopRequireDefault(__webpack_require__(91352));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var _int = Math.trunc;
/** 1582-10-05 Julian Date is 1st Gregorian Date (1582-10-15) */

var GREGORIAN0JD = 2299160.5;
exports.GREGORIAN0JD = GREGORIAN0JD;
var DAYS_OF_YEAR = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var SECS_OF_DAY = 86400; // 24 * 60 * 60

/**
 * Base class for CalendarJulian and CalendarGregorian
 * Respects the start of the Gregorian Calendar at `GREGORIAN0JD`
 */

var Calendar = /*#__PURE__*/function () {
  /**
   * @param {number|Date} year - If `Date` is given then year, month, day is taken from that. Shortcut to `new Calendar().fromDate(date)`
   * @param {number} month
   * @param {number} day
   */
  function Calendar(year) {
    var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    _classCallCheck(this, Calendar);
    this.year = year;
    this.month = month;
    this.day = day;
    if (year instanceof Date) {
      this.fromDate(year);
    }
  }
  _createClass(Calendar, [{
    key: "getDate",
    value: function getDate() {
      return {
        year: this.year,
        month: this.month,
        day: Math.floor(this.day)
      };
    }
  }, {
    key: "getTime",
    value: function getTime() {
      var t = new _sexagesimal["default"].Time(this.day * SECS_OF_DAY);
      var _t$toHMS = t.toHMS(),
        _t$toHMS2 = _slicedToArray(_t$toHMS, 4),
        neg = _t$toHMS2[0],
        h = _t$toHMS2[1],
        m = _t$toHMS2[2],
        _s = _t$toHMS2[3]; // eslint-disable-line no-unused-vars

      var _base$modf = _base["default"].modf(_s),
        _base$modf2 = _slicedToArray(_base$modf, 2),
        s = _base$modf2[0],
        ms = _base$modf2[1];
      ms = Math.trunc(ms * 1000);
      return {
        hour: h % 24,
        minute: m,
        second: s,
        millisecond: ms
      };
    }
  }, {
    key: "toISOString",
    value: function toISOString() {
      var _this$getDate = this.getDate(),
        year = _this$getDate.year,
        month = _this$getDate.month,
        day = _this$getDate.day;
      var _this$getTime = this.getTime(),
        hour = _this$getTime.hour,
        minute = _this$getTime.minute,
        second = _this$getTime.second,
        millisecond = _this$getTime.millisecond;
      return "".concat(pad(year, 4), "-").concat(pad(month), "-").concat(pad(day), "T") + "".concat(pad(hour), ":").concat(pad(minute), ":").concat(pad(second), ".").concat(pad(millisecond, 3), "Z");
    }
  }, {
    key: "isGregorian",
    value: function isGregorian() {
      return isCalendarGregorian(this.year, this.month, this.day);
    }
    /**
     * Note: Take care for dates < GREGORIAN0JD as `date` is always within the
     * proleptic Gregorian Calender
     * @param {Date} date - proleptic Gregorian date
     */
  }, {
    key: "fromDate",
    value: function fromDate(date) {
      this.year = date.getUTCFullYear();
      this.month = date.getUTCMonth() + 1;
      var day = date.getUTCDate();
      var hour = date.getUTCHours();
      var minute = date.getUTCMinutes();
      var second = date.getUTCSeconds();
      var ms = date.getMilliseconds();
      this.day = day + (hour + (minute + (second + ms / 1000) / 60) / 60) / 24;
      return this;
    }
    /**
     * Note: Take care for dates < GREGORIAN0JD as `date` is always within the
     * proleptic Gregorian Calender
     * @returns {Date} proleptic Gregorian date
     */
  }, {
    key: "toDate",
    value: function toDate() {
      var _base$modf3 = _base["default"].modf(this.day),
        _base$modf4 = _slicedToArray(_base$modf3, 2),
        day = _base$modf4[0],
        fhour = _base$modf4[1];
      var _base$modf5 = _base["default"].modf(fhour * 24),
        _base$modf6 = _slicedToArray(_base$modf5, 2),
        hour = _base$modf6[0],
        fminute = _base$modf6[1];
      var _base$modf7 = _base["default"].modf(fminute * 60),
        _base$modf8 = _slicedToArray(_base$modf7, 2),
        minute = _base$modf8[0],
        fsecond = _base$modf8[1];
      var _base$modf9 = _base["default"].modf(fsecond * 60),
        _base$modf10 = _slicedToArray(_base$modf9, 2),
        second = _base$modf10[0],
        fms = _base$modf10[1];
      var date = new Date(Date.UTC(this.year, this.month - 1, day, hour, minute, second, Math.round(fms * 1000)));
      date.setUTCFullYear(this.year);
      return date;
    }
    /**
     * converts a calendar date to decimal year
     * @returns {number} decimal year
     */
  }, {
    key: "toYear",
    value: function toYear() {
      var _base$modf11 = _base["default"].modf(this.day),
        _base$modf12 = _slicedToArray(_base$modf11, 2),
        d = _base$modf12[0],
        f = _base$modf12[1]; // eslint-disable-line no-unused-vars

      var n = this.dayOfYear() - 1 + f;
      var days = this.isLeapYear() ? 366 : 365;
      var decYear = this.year + n / days;
      return decYear;
    }
    /**
     * converts a decimal year to a calendar date
     * @param {number} decimal year
     */
  }, {
    key: "fromYear",
    value: function fromYear(year) {
      var _base$modf13 = _base["default"].modf(year),
        _base$modf14 = _slicedToArray(_base$modf13, 2),
        y = _base$modf14[0],
        f = _base$modf14[1];
      this.year = y;
      var days = this.isLeapYear() ? 366 : 365;
      var dayOfYear = _base["default"].round(f * days, 5);
      var m = 12;
      while (m > 0 && DAYS_OF_YEAR[m] > dayOfYear) {
        m--;
      }
      this.month = m;
      this.day = 1 + dayOfYear - DAYS_OF_YEAR[this.month];
      return this;
    }
  }, {
    key: "isLeapYear",
    value: function isLeapYear() {
      if (this.isGregorian()) {
        return LeapYearGregorian(this.year);
      } else {
        return LeapYearJulian(this.year);
      }
    }
  }, {
    key: "toJD",
    value: function toJD() {
      return CalendarToJD(this.year, this.month, this.day, !this.isGregorian());
    }
  }, {
    key: "fromJD",
    value: function fromJD(jd) {
      var isJulian = !isJDCalendarGregorian(jd);
      var _JDToCalendar = JDToCalendar(jd, isJulian),
        year = _JDToCalendar.year,
        month = _JDToCalendar.month,
        day = _JDToCalendar.day;
      this.year = year;
      this.month = month;
      this.day = day;
      return this;
    }
  }, {
    key: "fromJDE",
    value: function fromJDE(jde) {
      this.fromJD(jde);
      var dT = _deltat["default"].deltaT(this.toYear()); // in seconds

      this.day -= dT / 86400;
      return this;
    }
  }, {
    key: "toJDE",
    value: function toJDE() {
      var dT = _deltat["default"].deltaT(this.toYear()); // in seconds

      this.day += dT / 86400;
      return this.toJD();
    }
    /**
     * set date to midnight UTC
     */
  }, {
    key: "midnight",
    value: function midnight() {
      this.day = Math.floor(this.day);
      return this;
    }
    /**
     * set date to noon UTC
     */
  }, {
    key: "noon",
    value: function noon() {
      this.day = Math.floor(this.day) + 0.5;
      return this;
    }
    /**
     * @param {Boolean} td - if `true` calendar instance is in TD; date gets converted to UT
     *   true  - `UT = TD - ΔT`
     *   false - `TD = UT + ΔT`
     */
  }, {
    key: "deltaT",
    value: function deltaT(td) {
      var dT = _deltat["default"].deltaT(this.toYear()); // in seconds

      if (td) {
        this.day -= dT / 86400;
      } else {
        this.day += dT / 86400;
      }
      return this;
    }
  }, {
    key: "dayOfWeek",
    value: function dayOfWeek() {
      return DayOfWeek(this.toJD());
    }
  }, {
    key: "dayOfYear",
    value: function dayOfYear() {
      if (this.isGregorian()) {
        return DayOfYearGregorian(this.year, this.month, this.day);
      } else {
        return DayOfYearJulian(this.year, this.month, this.day);
      }
    }
  }]);
  return Calendar;
}();
exports.Calendar = Calendar;
var CalendarJulian = /*#__PURE__*/function (_Calendar) {
  _inherits(CalendarJulian, _Calendar);
  var _super = _createSuper(CalendarJulian);
  function CalendarJulian() {
    _classCallCheck(this, CalendarJulian);
    return _super.apply(this, arguments);
  }
  _createClass(CalendarJulian, [{
    key: "toJD",
    value: function toJD() {
      return CalendarJulianToJD(this.year, this.month, this.day);
    }
  }, {
    key: "fromJD",
    value: function fromJD(jd) {
      var _JDToCalendarJulian = JDToCalendarJulian(jd),
        year = _JDToCalendarJulian.year,
        month = _JDToCalendarJulian.month,
        day = _JDToCalendarJulian.day;
      this.year = year;
      this.month = month;
      this.day = day;
      return this;
    }
  }, {
    key: "isLeapYear",
    value: function isLeapYear() {
      return LeapYearJulian(this.year);
    }
  }, {
    key: "dayOfYear",
    value: function dayOfYear() {
      return DayOfYearJulian(this.year, this.month, this.day);
    }
    /**
     * toGregorian converts a Julian calendar date to a year, month, and day
     * in the Gregorian calendar.
     * @returns {CalendarGregorian}
     */
  }, {
    key: "toGregorian",
    value: function toGregorian() {
      var jd = this.toJD();
      return new CalendarGregorian().fromJD(jd);
    }
  }]);
  return CalendarJulian;
}(Calendar);
exports.CalendarJulian = CalendarJulian;
var CalendarGregorian = /*#__PURE__*/function (_Calendar2) {
  _inherits(CalendarGregorian, _Calendar2);
  var _super2 = _createSuper(CalendarGregorian);
  function CalendarGregorian() {
    _classCallCheck(this, CalendarGregorian);
    return _super2.apply(this, arguments);
  }
  _createClass(CalendarGregorian, [{
    key: "toJD",
    value: function toJD() {
      return CalendarGregorianToJD(this.year, this.month, this.day);
    }
  }, {
    key: "fromJD",
    value: function fromJD(jd) {
      var _JDToCalendarGregoria = JDToCalendarGregorian(jd),
        year = _JDToCalendarGregoria.year,
        month = _JDToCalendarGregoria.month,
        day = _JDToCalendarGregoria.day;
      this.year = year;
      this.month = month;
      this.day = day;
      return this;
    }
  }, {
    key: "isLeapYear",
    value: function isLeapYear() {
      return LeapYearGregorian(this.year);
    }
  }, {
    key: "dayOfYear",
    value: function dayOfYear() {
      return DayOfYearGregorian(this.year, this.month, this.day);
    }
    /*
    * toJulian converts a Gregorian calendar date to a year, month, and day
    * in the Julian calendar.
    * @returns {CalendarJulian}
    */
  }, {
    key: "toJulian",
    value: function toJulian() {
      var jd = this.toJD();
      return new CalendarJulian().fromJD(jd);
    }
  }]);
  return CalendarGregorian;
}(Calendar); // -----------------------------------------------------------------------------

/**
 * base conversion from calendar date to julian day
 */

exports.CalendarGregorian = CalendarGregorian;
function CalendarToJD(y, m, d, isJulian) {
  var b = 0;
  if (m < 3) {
    y--;
    m += 12;
  }
  if (!isJulian) {
    var a = _base["default"].floorDiv(y, 100);
    b = 2 - a + _base["default"].floorDiv(a, 4);
  } // (7.1) p. 61

  var jd = _base["default"].floorDiv(36525 * _int(y + 4716), 100) + (_base["default"].floorDiv(306 * (m + 1), 10) + b) + d - 1524.5;
  return jd;
}
/**
 * CalendarGregorianToJD converts a Gregorian year, month, and day of month
 * to Julian day.
 *
 * Negative years are valid, back to JD 0.  The result is not valid for
 * dates before JD 0.
 * @param {number} y - year (int)
 * @param {number} m - month (int)
 * @param {number} d - day (float)
 * @returns {number} jd - Julian day (float)
 */

function CalendarGregorianToJD(y, m, d) {
  return CalendarToJD(y, m, d, false);
}
/**
 * CalendarJulianToJD converts a Julian year, month, and day of month to Julian day.
 *
 * Negative years are valid, back to JD 0.  The result is not valid for
 * dates before JD 0.
 * @param {number} y - year (int)
 * @param {number} m - month (int)
 * @param {number} d - day (float)
 * @returns {number} jd - Julian day (float)
 */

function CalendarJulianToJD(y, m, d) {
  return CalendarToJD(y, m, d, true);
}
/**
 * LeapYearJulian returns true if year y in the Julian calendar is a leap year.
 * @param {number} y - year (int)
 * @returns {boolean} true if leap year in Julian Calendar
 */

function LeapYearJulian(y) {
  return y % 4 === 0;
}
/**
 * LeapYearGregorian returns true if year y in the Gregorian calendar is a leap year.
 * @param {number} y - year (int)
 * @returns {boolean} true if leap year in Gregorian Calendar
 */

function LeapYearGregorian(y) {
  return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
}
/**
 * JDToCalendar returns the calendar date for the given jd.
 *
 * Note that this function returns a date in either the Julian or Gregorian
 * Calendar, as appropriate.
 * @param {number} jd - Julian day (float)
 * @param {boolean} isJulian - set true for Julian Calendar, otherwise Gregorian is used
 * @returns {object} `{ (int) year, (int) month, (float) day }`
 */

function JDToCalendar(jd, isJulian) {
  var _base$modf15 = _base["default"].modf(jd + 0.5),
    _base$modf16 = _slicedToArray(_base$modf15, 2),
    z = _base$modf16[0],
    f = _base$modf16[1];
  var a = z;
  if (!isJulian) {
    var α = _base["default"].floorDiv(z * 100 - 186721625, 3652425);
    a = z + 1 + α - _base["default"].floorDiv(α, 4);
  }
  var b = a + 1524;
  var c = _base["default"].floorDiv(b * 100 - 12210, 36525);
  var d = _base["default"].floorDiv(36525 * c, 100);
  var e = _int(_base["default"].floorDiv((b - d) * 1e4, 306001)); // compute return values

  var year;
  var month;
  var day = _int(b - d) - _base["default"].floorDiv(306001 * e, 1e4) + f;
  if (e === 14 || e === 15) {
    month = e - 13;
  } else {
    month = e - 1;
  }
  if (month < 3) {
    year = _int(c) - 4715;
  } else {
    year = _int(c) - 4716;
  }
  return {
    year: year,
    month: month,
    day: day
  };
}
/**
 * JDToCalendarGregorian returns the calendar date for the given jd in the Gregorian Calendar.
 *
 * @param {number} jd - Julian day (float)
 * @returns {object} `{ (int) year, (int) month, (float) day }`
 */

function JDToCalendarGregorian(jd) {
  return JDToCalendar(jd, false);
}
/**
 * JDToCalendarJulian returns the calendar date for the given jd in the Julian Calendar.
 *
 * @param {number} jd - Julian day (float)
 * @returns {object} { (int) year, (int) month, (float) day }
 */

function JDToCalendarJulian(jd) {
  return JDToCalendar(jd, true);
}
/**
 * isJDCalendarGregorian tests if Julian day `jd` falls into the Gregorian calendar
 * @param {number} jd - Julian day (float)
 * @returns {boolean} true for Gregorian, false for Julian calendar
 */

function isJDCalendarGregorian(jd) {
  return jd >= GREGORIAN0JD;
}
/**
 * isCalendarGregorian tests if date falls into the Gregorian calendar
 * @param {number} year - julian/gregorian year
 * @param {number} [month] - month of julian/gregorian year
 * @param {number} [day] - day of julian/gregorian year
 * @returns {boolean} true for Gregorian, false for Julian calendar
 */

function isCalendarGregorian(year) {
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return year > 1582 || year === 1582 && month > 10 || year === 1582 && month === 10 && day >= 15;
}
/**
 * JDToDate converts a Julian day `jd` to a Date Object (Gregorian Calendar)
 *
 * Note: Javascript uses the the ISO-8601 calendar, which is a proleptic Gregorian
 * calendar, i.e. it acts as if this calendar was always in effect, even before
 * its year of introduction in 1582. Therefore dates between 1582-10-05 and
 * 1582-10-14 exists.
 *
 * @param {number} jd - Julian day (float)
 * @returns {Date}
 */

function JDToDate(jd) {
  return new CalendarGregorian().fromJD(jd).toDate();
}
/**
 * DateToJD converts a proleptic Gregorian Date into a Julian day `jd`
 * @param {Date} date
 * @returns {number} jd - Julian day (float)
 */

function DateToJD(date) {
  return new CalendarGregorian().fromDate(date).toJD();
}
/**
 * JDEToDate converts a Julian ephemeris day `jde` to a Date Object (Gregorian Calendar)
 * To obtain "Universal Time" (UT) from "Dynamical Time" (TD) the correction ΔT (in seconds) gets applied
 * ```
 * UT = TD - ΔT
 * ```
 * If your use case does not require such accuracy converting `jde` using `JDToDate` is fine.
 *
 * Note: Javascript uses the the ISO-8601 calendar, which is a proleptic Gregorian
 * calendar, i.e. it acts as if this calendar was always in effect, even before
 * its year of introduction in 1582. Therefore dates between 1582-10-05 and
 * 1582-10-14 exists.
 *
 * @param {number} jde - Julian ephemeris day
 * @returns {Date} Javascript Date Object
 */

function JDEToDate(jde) {
  return new CalendarGregorian().fromJDE(jde).toDate();
}
/**
 * DateToJDE converts a Date Object (Gregorian Calendar) to a Julian ephemeris day `jde`
 * To obtain "Dynamical Time" (TD) from "Universal Time" (UT) the correction ΔT (in seconds) gets applied
 * ```
 * TD = UT + ΔT
 * ```
 * If your use case does not require such accuracy converting `Date` using `DateToJD` is fine.
 *
 * @param {Date} date - Javascript Date Object
 * @returns {number} jde - Julian ephemeris day (float)
 */

function DateToJDE(date) {
  return new CalendarGregorian().fromDate(date).toJDE();
}
/**
 * converts Modified Julian Day `mjd` to Julian Day `jd`
 * @param {Number} mjd - Modified Julian Day
 * @returns {Number} jd - Julian Day
 */

function MJDToJD(mjd) {
  return mjd - _base["default"].JMod;
}
/**
 * converts Julian Day `jd` to Modified Julian Day `mjd`
 * @param {Number} jd - Julian Day
 * @returns {Number} mjd - Modified Julian Day
 */

function JDToMJD(jd) {
  return jd + _base["default"].JMod;
}
/**
 * DayOfWeek determines the day of the week for a given JD.
 *
 * The value returned is an integer in the range 0 to 6, where 0 represents
 * Sunday.  This is the same convention followed in the time package of the
 * Javascript standard library.
 * @param {number} jd - Julian day (float)
 * @returns {number} (int) 0 == sunday; ...; 6 == saturday
 */

function DayOfWeek(jd) {
  return _int(jd + 1.5) % 7;
}
/**
 * DayOfYearGregorian computes the day number within the year of the Gregorian
 * calendar.
 * @param {number} y - year (int)
 * @param {number} m - month (int)
 * @param {number} d - day (float)
 * @returns {number} day of year
 */

function DayOfYearGregorian(y, m, d) {
  return DayOfYear(y, m, _int(d), LeapYearGregorian(y));
}
/**
 * DayOfYearJulian computes the day number within the year of the Julian
 * calendar.
 * @param {number} y - year (int)
 * @param {number} m - month (int)
 * @param {number} d - day (float)
 * @returns {number} day of year
 */

function DayOfYearJulian(y, m, d) {
  return DayOfYear(y, m, _int(d), LeapYearJulian(y));
}
/**
 * DayOfYear computes the day number within the year.
 *
 * This form of the function is not specific to the Julian or Gregorian
 * calendar, but you must tell it whether the year is a leap year.
 * @param {number} y - year (int)
 * @param {number} m - month (int)
 * @param {number} d - day (float)
 * @param {boolean} leap - set `true` if `y` is leap year
 * @returns {number} day of year
 */

function DayOfYear(y, m, d, leap) {
  var k = 0;
  if (leap && m > 1) {
    k = 1;
  }
  return k + DAYS_OF_YEAR[m] + _int(d);
}
/**
 * DayOfYearToCalendar returns the calendar month and day for a given
 * day of year and leap year status.
 * @param {number} n - day of year (int)
 * @param {boolean} leap - set `true` if `y` is leap year
 * @returns {object} `{ (int) month, (float) day }`
 */

function DayOfYearToCalendar(n, leap) {
  var month;
  var k = 0;
  if (leap) {
    k = 1;
  }
  for (month = 1; month <= 12; month++) {
    if (k + DAYS_OF_YEAR[month] > n) {
      month = month - 1;
      break;
    }
  }
  var day = n - k - DAYS_OF_YEAR[month];
  return {
    month: month,
    day: day
  };
}
/**
 * DayOfYearToCalendarGregorian returns the calendar month and day for a given
 * day of year.
 * @param {number} year
 * @param {number} n - day of year (int)
 * @returns {CalendarGregorian} { (int) year, (int) month, (float) day }
 */

function DayOfYearToCalendarGregorian(year, n) {
  var _DayOfYearToCalendar = DayOfYearToCalendar(n, LeapYearGregorian(year)),
    month = _DayOfYearToCalendar.month,
    day = _DayOfYearToCalendar.day;
  return new CalendarGregorian(year, month, day);
}
/**
 * DayOfYearToCalendarJulian returns the calendar month and day for a given
 * day of year.
 * @param {number} year
 * @param {number} n - day of year (int)
 * @returns {CalendarJulian} { (int) year, (int) month, (float) day }
 */

function DayOfYearToCalendarJulian(year, n) {
  var _DayOfYearToCalendar2 = DayOfYearToCalendar(n, LeapYearJulian(year)),
    month = _DayOfYearToCalendar2.month,
    day = _DayOfYearToCalendar2.day;
  return new CalendarJulian(year, month, day);
}
function pad(num, len) {
  len = len || 2;
  var neg = num < 0 ? '-' : '';
  num = Math.abs(num);
  var padded = '0000' + num;
  return neg + padded.substr(padded.length - len, len);
}
var _default = {
  GREGORIAN0JD: GREGORIAN0JD,
  Calendar: Calendar,
  CalendarJulian: CalendarJulian,
  CalendarGregorian: CalendarGregorian,
  CalendarToJD: CalendarToJD,
  CalendarGregorianToJD: CalendarGregorianToJD,
  CalendarJulianToJD: CalendarJulianToJD,
  LeapYearJulian: LeapYearJulian,
  LeapYearGregorian: LeapYearGregorian,
  JDToCalendar: JDToCalendar,
  JDToCalendarGregorian: JDToCalendarGregorian,
  JDToCalendarJulian: JDToCalendarJulian,
  isJDCalendarGregorian: isJDCalendarGregorian,
  isCalendarGregorian: isCalendarGregorian,
  JDToDate: JDToDate,
  DateToJD: DateToJD,
  JDEToDate: JDEToDate,
  DateToJDE: DateToJDE,
  MJDToJD: MJDToJD,
  JDToMJD: JDToMJD,
  DayOfWeek: DayOfWeek,
  DayOfYearGregorian: DayOfYearGregorian,
  DayOfYearJulian: DayOfYearJulian,
  DayOfYear: DayOfYear,
  DayOfYearToCalendar: DayOfYearToCalendar,
  DayOfYearToCalendarGregorian: DayOfYearToCalendarGregorian,
  DayOfYearToCalendarJulian: DayOfYearToCalendarJulian
};
exports["default"] = _default;

/***/ }),

/***/ 3114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

/**
 * lodash compatible methods
 */
var deepmerge = (__webpack_require__(83984).all);
/**
 * get value at `keys` from `object`
 * @example
 * get({a: {b: {c: 2}}}, ['a', 'b', 'c']) //> 2
 */

var get = function get(obj) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var def = arguments.length > 2 ? arguments[2] : undefined;
  var o = obj;
  if (typeof keys === 'string') keys = keys.split('.');
  var _iterator = _createForOfIteratorHelper(keys),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      if (o && o[key]) {
        o = o[key];
      } else {
        return def;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return o;
};
/**
 * set `value` at `keys` from `object`
 * @example
 * set({a: {b: {c: 2}}}, ['a', 'b', 'c'], 3)
 */

var set = function set(obj) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var value = arguments.length > 2 ? arguments[2] : undefined;
  var key;
  var ref;
  var o = obj;
  var _iterator2 = _createForOfIteratorHelper(keys),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      key = _step2.value;
      ref = o;
      if (toString.call(o[key]) !== '[object Object]') o[key] = {};
      o = o[key];
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  ref[key] = value;
  return obj;
};
/**
 * omit `object` properties `props`
 */

var omit = function omit(object) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object.keys(object).filter(function (p) {
    return !~props.indexOf(p);
  }).reduce(function (o, p) {
    p in object && (o[p] = object[p]);
    return o;
  }, {});
};
var merge = function merge() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return deepmerge(args);
};
module.exports = {
  get: get,
  set: set,
  omit: omit,
  merge: merge
};

/***/ }),

/***/ 3722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ StatusTypesEnum)
/* harmony export */ });
/* unused harmony export StatusTypesMapRequestApprovalEnum */
var StatusTypesEnum = /*#__PURE__*/function (StatusTypesEnum) {
  StatusTypesEnum["REQUESTED"] = "REQUESTED";
  StatusTypesEnum["APPROVED"] = "APPROVED";
  StatusTypesEnum["DENIED"] = "DENIED";
  StatusTypesEnum["ALL"] = "ALL";
  return StatusTypesEnum;
}(StatusTypesEnum || {});
var StatusTypesMapRequestApprovalEnum = /*#__PURE__*/function (StatusTypesMapRequestApprovalEnum) {
  StatusTypesMapRequestApprovalEnum[StatusTypesMapRequestApprovalEnum["REQUESTED"] = 1] = "REQUESTED";
  StatusTypesMapRequestApprovalEnum[StatusTypesMapRequestApprovalEnum["APPROVED"] = 2] = "APPROVED";
  StatusTypesMapRequestApprovalEnum[StatusTypesMapRequestApprovalEnum["DENIED"] = 3] = "DENIED";
  return StatusTypesMapRequestApprovalEnum;
}(StatusTypesMapRequestApprovalEnum || {});

/***/ }),

/***/ 8788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ throwIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51548);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89800);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86690);



function throwIfEmpty(errorFactory = defaultErrorFactory) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let hasValue = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      hasValue = true;
      subscriber.next(value);
    }, () => hasValue ? subscriber.complete() : subscriber.error(errorFactory())));
  });
}
function defaultErrorFactory() {
  return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_2__/* .EmptyError */ .G();
}
//# sourceMappingURL=throwIfEmpty.js.map

/***/ }),

/***/ 10748:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * @copyright 2015-present (c) commenthol
 * @license ISC
 */


var Parser = __webpack_require__(42095);
var data = __webpack_require__(99542);
/**
 * @class
 * @param {String|Object} country - if object use `{ country: {String}, state: {String}, region: {String} }`
 * @param {String} [state] - specifies state
 * @param {String} [region] - specifies region
 * @param {Object} [opts] - options
 * @param {Array|String} opts.languages - set language(s) with ISO 639-1 shortcodes
 * @param {String} opts.timezone - set timezone
 * @param {Array} opts.types - holiday types to consider
 * @example
 * ```js
 * new Holiday('US', 'la', 'no') // is the same as
 * new Holiday('us.la.no')       // is the same as
 * new Holiday({ country: 'us', state: 'la', region: 'no'})
 * ```
 */

function Holidays(country, state, region, opts) {
  if (!(this instanceof Holidays)) {
    return new Holidays(country, state, region, opts);
  }
  Parser.apply(this, [data, country, state, region, opts]);
  this.init(country, state, region, opts);
}
Holidays.prototype = Object.create(Parser.prototype);
Holidays.prototype.constructor = Holidays;
module.exports = Holidays;

/***/ }),

/***/ 13519:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.approxAnnualPrecession = approxAnnualPrecession;
exports.mn = mn;
exports.approxPosition = approxPosition;
exports.position = position;
exports.eclipticPosition = eclipticPosition;
exports.properMotion = properMotion;
exports.properMotion3D = properMotion3D;
exports["default"] = exports.EclipticPrecessor = exports.Precessor = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
var _coord = _interopRequireDefault(__webpack_require__(93637));
var _elementequinox = _interopRequireDefault(__webpack_require__(35395));
var _nutation = _interopRequireDefault(__webpack_require__(46722));
var _sexagesimal = _interopRequireDefault(__webpack_require__(31115));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/**
 * approxAnnualPrecession returns approximate annual precision in right
 * ascension and declination.
 *
 * The two epochs should be within a few hundred years.
 * The declinations should not be too close to the poles.
 *
 * @param {coord.Equatorial} eqFrom
 * @param {Number} epochFrom - use `base.JDEToJulianYear(year)` to get epoch
 * @param {Number} epochTo - use `base.JDEToJulianYear(year)` to get epoch
 * @returns {Array}
 *  {sexa.HourAngle} seconds of right ascension
 *  {sexa.Angle} seconds of Declination
 */
function approxAnnualPrecession(eqFrom, epochFrom, epochTo) {
  var _mn = mn(epochFrom, epochTo),
    _mn2 = _slicedToArray(_mn, 3),
    m = _mn2[0],
    na = _mn2[1],
    nd = _mn2[2];
  var _base$sincos = _base["default"].sincos(eqFrom.ra),
    _base$sincos2 = _slicedToArray(_base$sincos, 2),
    sa = _base$sincos2[0],
    ca = _base$sincos2[1]; // (21.1) p. 132

  var Δαs = m + na * sa * Math.tan(eqFrom.dec); // seconds of RA

  var Δδs = nd * ca; // seconds of Dec

  var ra = new _sexagesimal["default"].HourAngle(false, 0, 0, Δαs).rad();
  var dec = new _sexagesimal["default"].Angle(false, 0, 0, Δδs).rad();
  return {
    ra: ra,
    dec: dec
  };
}
/**
 * @param {Number} epochFrom - use `base.JDEToJulianYear(year)` to get epoch
 * @param {Number} epochTo - use `base.JDEToJulianYear(year)` to get epoch
 */

function mn(epochFrom, epochTo) {
  var T = (epochTo - epochFrom) * 0.01;
  var m = 3.07496 + 0.00186 * T;
  var na = 1.33621 - 0.00057 * T;
  var nd = 20.0431 - 0.0085 * T;
  return [m, na, nd];
}
/**
 * ApproxPosition uses ApproxAnnualPrecession to compute a simple and quick
 * precession while still considering proper motion.
 *
 * @param {coord.Equatorial} eqFrom
 * @param {Number} epochFrom
 * @param {Number} epochTo
 * @param {Number} mα - in radians
 * @param {Number} mδ - in radians
 * @returns {coord.Equatorial} eqTo
 */

function approxPosition(eqFrom, epochFrom, epochTo, mα, mδ) {
  var _approxAnnualPrecessi = approxAnnualPrecession(eqFrom, epochFrom, epochTo),
    ra = _approxAnnualPrecessi.ra,
    dec = _approxAnnualPrecessi.dec;
  var dy = epochTo - epochFrom;
  var eqTo = new _coord["default"].Equatorial();
  eqTo.ra = eqFrom.ra + (ra + mα) * dy;
  eqTo.dec = eqFrom.dec + (dec + mδ) * dy;
  return eqTo;
} // constants

var d = Math.PI / 180;
var s = d / 3600; // coefficients from (21.2) p. 134

var ζT = [2306.2181 * s, 1.39656 * s, -0.000139 * s];
var zT = [2306.2181 * s, 1.39656 * s, -0.000139 * s];
var θT = [2004.3109 * s, -0.8533 * s, -0.000217 * s]; // coefficients from (21.3) p. 134

var ζt = [2306.2181 * s, 0.30188 * s, 0.017998 * s];
var zt = [2306.2181 * s, 1.09468 * s, 0.018203 * s];
var θt = [2004.3109 * s, -0.42665 * s, -0.041833 * s];
/**
 * Precessor represents precession from one epoch to another.
 *
 * Construct with NewPrecessor, then call method Precess.
 * After construction, Precess may be called multiple times to precess
 * different coordinates with the same initial and final epochs.
 */

var Precessor = /*#__PURE__*/function () {
  /**
   * constructs a Precessor object and initializes it to precess
   * coordinates from epochFrom to epochTo.
   * @param {Number} epochFrom
   * @param {Number} epochTo
   */
  function Precessor(epochFrom, epochTo) {
    _classCallCheck(this, Precessor);

    // (21.2) p. 134
    var ζCoeff = ζt;
    var zCoeff = zt;
    var θCoeff = θt;
    if (epochFrom !== 2000) {
      var T = (epochFrom - 2000) * 0.01;
      ζCoeff = [_base["default"].horner(T, ζT), 0.30188 * s - 0.000344 * s * T, 0.017998 * s];
      zCoeff = [_base["default"].horner(T, zT), 1.09468 * s + 0.000066 * s * T, 0.018203 * s];
      θCoeff = [_base["default"].horner(T, θT), -0.42665 * s - 0.000217 * s * T, -0.041833 * s];
    }
    var t = (epochTo - epochFrom) * 0.01;
    this.ζ = _base["default"].horner(t, ζCoeff) * t;
    this.z = _base["default"].horner(t, zCoeff) * t;
    var θ = _base["default"].horner(t, θCoeff) * t;
    this.sθ = Math.sin(θ);
    this.cθ = Math.cos(θ);
  }
  /**
   * Precess precesses coordinates eqFrom, leaving result in eqTo.
   *
   * @param {coord.Equatorial} eqFrom
   * @returns {coord.Equatorial} eqTo
   */

  _createClass(Precessor, [{
    key: "precess",
    value: function precess(eqFrom) {
      // (21.4) p. 134
      var _base$sincos3 = _base["default"].sincos(eqFrom.dec),
        _base$sincos4 = _slicedToArray(_base$sincos3, 2),
        sδ = _base$sincos4[0],
        cδ = _base$sincos4[1];
      var _base$sincos5 = _base["default"].sincos(eqFrom.ra + this.ζ),
        _base$sincos6 = _slicedToArray(_base$sincos5, 2),
        sαζ = _base$sincos6[0],
        cαζ = _base$sincos6[1];
      var A = cδ * sαζ;
      var B = this.cθ * cδ * cαζ - this.sθ * sδ;
      var C = this.sθ * cδ * cαζ + this.cθ * sδ;
      var eqTo = new _coord["default"].Equatorial();
      eqTo.ra = Math.atan2(A, B) + this.z;
      if (C < _base["default"].CosSmallAngle) {
        eqTo.dec = Math.asin(C);
      } else {
        eqTo.dec = Math.acos(Math.hypot(A, B)); // near pole
      }
      return eqTo;
    }
  }]);
  return Precessor;
}();
/**
 * Position precesses equatorial coordinates from one epoch to another,
 * including proper motions.
 *
 * If proper motions are not to be considered or are not applicable, pass 0, 0
 * for mα, mδ
 *
 * Both eqFrom and eqTo must be non-nil, although they may point to the same
 * struct.  EqTo is returned for convenience.
 * @param {coord.Equatorial} eqFrom
 * @param {coord.Equatorial} eqTo
 * @param {Number} epochFrom
 * @param {Number} epochTo
 * @param {Number} mα - in radians
 * @param {Number} mδ - in radians
 * @returns {coord.Equatorial} [eqTo]
 */

exports.Precessor = Precessor;
function position(eqFrom, epochFrom, epochTo, mα, mδ) {
  var p = new Precessor(epochFrom, epochTo);
  var t = epochTo - epochFrom;
  var eqTo = new _coord["default"].Equatorial();
  eqTo.ra = eqFrom.ra + mα * t;
  eqTo.dec = eqFrom.dec + mδ * t;
  return p.precess(eqTo);
} // coefficients from (21.5) p. 136

var ηT = [47.0029 * s, -0.06603 * s, 0.000598 * s];
var πT = [174.876384 * d, 3289.4789 * s, 0.60622 * s];
var pT = [5029.0966 * s, 2.22226 * s, -0.000042 * s];
var ηt = [47.0029 * s, -0.03302 * s, 0.000060 * s];
var πt = [174.876384 * d, -869.8089 * s, 0.03536 * s];
var pt = [5029.0966 * s, 1.11113 * s, -0.000006 * s];
/**
 * EclipticPrecessor represents precession from one epoch to another.
 *
 * Construct with NewEclipticPrecessor, then call method Precess.
 * After construction, Precess may be called multiple times to precess
 * different coordinates with the same initial and final epochs.
 */

var EclipticPrecessor = /*#__PURE__*/function () {
  /**
   * constructs an EclipticPrecessor object and initializes
   * it to precess coordinates from epochFrom to epochTo.
   * @param {Number} epochFrom
   * @param {Number} epochTo
   */
  function EclipticPrecessor(epochFrom, epochTo) {
    _classCallCheck(this, EclipticPrecessor);

    // (21.5) p. 136
    var ηCoeff = ηt;
    var πCoeff = πt;
    var pCoeff = pt;
    if (epochFrom !== 2000) {
      var T = (epochFrom - 2000) * 0.01;
      ηCoeff = [_base["default"].horner(T, ηT), -0.03302 * s + 0.000598 * s * T, 0.000060 * s];
      πCoeff = [_base["default"].horner(T, πT), -869.8089 * s - 0.50491 * s * T, 0.03536 * s];
      pCoeff = [_base["default"].horner(T, pT), 1.11113 * s - 0.000042 * s * T, -0.000006 * s];
    }
    var t = (epochTo - epochFrom) * 0.01;
    this.π = _base["default"].horner(t, πCoeff);
    this.p = _base["default"].horner(t, pCoeff) * t;
    var η = _base["default"].horner(t, ηCoeff) * t;
    this.sη = Math.sin(η);
    this.cη = Math.cos(η);
  }
  /**
   * EclipticPrecess precesses coordinates eclFrom, leaving result in eclTo.
   *
   * The same struct may be used for eclFrom and eclTo.
   * EclTo is returned for convenience.
   * @param {coord.Ecliptic} eclFrom
   * @param {coord.Ecliptic} eclTo
   * @returns {coord.Ecliptic} [eclTo]
   */

  _createClass(EclipticPrecessor, [{
    key: "precess",
    value: function precess(eclFrom) {
      // (21.7) p. 137
      var _base$sincos7 = _base["default"].sincos(eclFrom.lat),
        _base$sincos8 = _slicedToArray(_base$sincos7, 2),
        sβ = _base$sincos8[0],
        cβ = _base$sincos8[1];
      var _base$sincos9 = _base["default"].sincos(this.π - eclFrom.lon),
        _base$sincos10 = _slicedToArray(_base$sincos9, 2),
        sd = _base$sincos10[0],
        cd = _base$sincos10[1];
      var A = this.cη * cβ * sd - this.sη * sβ;
      var B = cβ * cd;
      var C = this.cη * sβ + this.sη * cβ * sd;
      var eclTo = new _coord["default"].Ecliptic();
      eclTo.lon = this.p + this.π - Math.atan2(A, B);
      if (C < _base["default"].CosSmallAngle) {
        eclTo.lat = Math.asin(C);
      } else {
        eclTo.lat = Math.acos(Math.hypot(A, B)); // near pole
      }
      return eclTo;
    }
    /**
     * ReduceElements reduces orbital elements of a solar system body from one
     * equinox to another.
     *
     * This function is described in chapter 24, but is located in this
     * package so it can be a method of EclipticPrecessor.
     *
     * @param {elementequinox.Elements} eFrom
     * @returns {elementequinox.Elements} eTo
     */
  }, {
    key: "reduceElements",
    value: function reduceElements(eFrom) {
      var ψ = this.π + this.p;
      var _base$sincos11 = _base["default"].sincos(eFrom.inc),
        _base$sincos12 = _slicedToArray(_base$sincos11, 2),
        si = _base$sincos12[0],
        ci = _base$sincos12[1];
      var _base$sincos13 = _base["default"].sincos(eFrom.node - this.π),
        _base$sincos14 = _slicedToArray(_base$sincos13, 2),
        snp = _base$sincos14[0],
        cnp = _base$sincos14[1];
      var eTo = new _elementequinox["default"].Elements(); // (24.1) p. 159

      eTo.inc = Math.acos(ci * this.cη + si * this.sη * cnp); // (24.2) p. 159

      eTo.node = Math.atan2(si * snp, this.cη * si * cnp - this.sη * ci) + ψ; // (24.3) p. 159

      eTo.peri = Math.atan2(-this.sη * snp, si * this.cη - ci * this.sη * cnp) + eFrom.peri;
      return eTo;
    }
  }]);
  return EclipticPrecessor;
}();
/**
 * eclipticPosition precesses ecliptic coordinates from one epoch to another,
 * including proper motions.
 * While eclFrom is given as ecliptic coordinates, proper motions mα, mδ are
 * still expected to be equatorial.  If proper motions are not to be considered
 * or are not applicable, pass 0, 0.
 * Both eclFrom and eclTo must be non-nil, although they may point to the same
 * struct.  EclTo is returned for convenience.
 *
 * @param {coord.Ecliptic} eclFrom,
 * @param {Number} epochFrom
 * @param {Number} epochTo
 * @param {sexa.HourAngle} mα
 * @param {sexa.Angle} mδ
 * @returns {coord.Ecliptic} eclTo
 */

exports.EclipticPrecessor = EclipticPrecessor;
function eclipticPosition(eclFrom, epochFrom, epochTo, mα, mδ) {
  var p = new EclipticPrecessor(epochFrom, epochTo);
  if (mα !== 0 || mδ !== 0) {
    var _properMotion = properMotion(mα.rad(), mδ.rad(), epochFrom, eclFrom),
      lon = _properMotion.lon,
      lat = _properMotion.lat;
    var t = epochTo - epochFrom;
    eclFrom.lon += lon * t;
    eclFrom.lat += lat * t;
  }
  return p.precess(eclFrom);
}
/**
 * @param {Number} mα - anual proper motion (ra)
 * @param {Number} mδ - anual proper motion (dec)
 * @param {Number} epoch
 * @param {coord.Ecliptic} ecl
 * @returns {Number[]} [mλ, mβ]
 */

function properMotion(mα, mδ, epoch, ecl) {
  var ε = _nutation["default"].meanObliquity(_base["default"].JulianYearToJDE(epoch));
  var _base$sincos15 = _base["default"].sincos(ε),
    _base$sincos16 = _slicedToArray(_base$sincos15, 2),
    εsin = _base$sincos16[0],
    εcos = _base$sincos16[1];
  var _ecl$toEquatorial = ecl.toEquatorial(ε),
    ra = _ecl$toEquatorial.ra,
    dec = _ecl$toEquatorial.dec;
  var _base$sincos17 = _base["default"].sincos(ra),
    _base$sincos18 = _slicedToArray(_base$sincos17, 2),
    sα = _base$sincos18[0],
    cα = _base$sincos18[1];
  var _base$sincos19 = _base["default"].sincos(dec),
    _base$sincos20 = _slicedToArray(_base$sincos19, 2),
    sδ = _base$sincos20[0],
    cδ = _base$sincos20[1];
  var cβ = Math.cos(ecl.lat);
  var lon = (mδ * εsin * cα + mα * cδ * (εcos * cδ + εsin * sδ * sα)) / (cβ * cβ);
  var lat = (mδ * (εcos * cδ + εsin * sδ * sα) - mα * εsin * cα * cδ) / cβ;
  return new _coord["default"].Ecliptic(lon, lat);
}
/**
 * ProperMotion3D takes the 3D equatorial coordinates of an object
 * at one epoch and computes its coordinates at a new epoch, considering
 * proper motion and radial velocity.
 *
 * Radial distance (r) must be in parsecs, radial velocitiy (mr) in
 * parsecs per year.
 *
 * Both eqFrom and eqTo must be non-nil, although they may point to the same
 * struct.  EqTo is returned for convenience.
 *
 * @param {coord.Equatorial} eqFrom,
 * @param {Number} epochFrom
 * @param {Number} r
 * @param {Number} mr
 * @param {sexa.HourAngle} mα
 * @param {sexa.Angle} mδ
 * @returns {coord.Equatorial} eqTo
 */

function properMotion3D(eqFrom, epochFrom, epochTo, r, mr, mα, mδ) {
  var _base$sincos21 = _base["default"].sincos(eqFrom.ra),
    _base$sincos22 = _slicedToArray(_base$sincos21, 2),
    sα = _base$sincos22[0],
    cα = _base$sincos22[1];
  var _base$sincos23 = _base["default"].sincos(eqFrom.dec),
    _base$sincos24 = _slicedToArray(_base$sincos23, 2),
    sδ = _base$sincos24[0],
    cδ = _base$sincos24[1];
  var x = r * cδ * cα;
  var y = r * cδ * sα;
  var z = r * sδ;
  var mrr = mr / r;
  var zmδ = z * mδ.rad();
  var mx = x * mrr - zmδ * cα - y * mα.rad();
  var my = y * mrr - zmδ * sα + x * mα.rad();
  var mz = z * mrr + r * mδ.rad() * cδ;
  var t = epochTo - epochFrom;
  var xp = x + t * mx;
  var yp = y + t * my;
  var zp = z + t * mz;
  var eqTo = new _coord["default"].Equatorial();
  eqTo.ra = Math.atan2(yp, xp);
  eqTo.dec = Math.atan2(zp, Math.hypot(xp, yp));
  return eqTo;
}
var _default = {
  approxAnnualPrecession: approxAnnualPrecession,
  mn: mn,
  approxPosition: approxPosition,
  Precessor: Precessor,
  position: position,
  EclipticPrecessor: EclipticPrecessor,
  eclipticPosition: eclipticPosition,
  properMotion: properMotion,
  properMotion3D: properMotion3D
};
exports["default"] = _default;

/***/ }),

/***/ 14140:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _Chinese = __webpack_require__(81376);
var _Chinese2 = _interopRequireDefault(_Chinese);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * @copyright 2016 commenthol
   * @license MIT
   */

/**
 * @see http://law.e-gov.go.jp/htmldata/M19/M19CO051.html
 */
var UTC_DATES = [{
  date: new Date('1888-02-11T15:00:00.000Z'),
  // 1888-02-12T00:00:00+0900
  shift: 9 / 24 // +9:00:00h (135° East) Japanese standard meridian
}];

/**
 * Note: I could not find details about the epoch(s) for the year zero of the
 * Japanese calendar dating before 1873. Therefore this calendar uses (wrongly)
 * the Chinese epoch.
 *
 * According to <https://en.wikipedia.org/wiki/History_of_Japan> the eras are:
 *
 * Yayoi  300 BC – 250 AD
 * Kofun  250 – 538
 * Asuka  538 – 710
 * Nara   710 – 794
 * Heian  794 – 1185
 * Kamakura   1185 – 1333
 * Kenmu Restoration  1333 – 1336
 * Muromachi 1336 – 1573
 * Azuchi–Momoyama 1568 – 1603
 * Edo  1603 – 1868
 * Meiji  1868 – 1912
 * Taishō 1912 – 1926
 * Shōwa  1926 – 1989
 * Heisei 1989 – present
 *
 * Unfortunately the linking from era to calendar era (especially to the Chinese
 * pre 1873 one) is unknown to me.
 */

var CalendarJapanese = function (_CalendarChinese) {
  _inherits(CalendarJapanese, _CalendarChinese);
  function CalendarJapanese() {
    _classCallCheck(this, CalendarJapanese);
    return _possibleConstructorReturn(this, (CalendarJapanese.__proto__ || Object.getPrototypeOf(CalendarJapanese)).apply(this, arguments));
  }
  _createClass(CalendarJapanese, [{
    key: 'timeshiftUTC',
    /**
     * timeshift to UTC
     *
     * @param {CalendarGregorian} gcal - gregorian calendar date
     * @return {Number} timeshift in fraction of day
     */
    value: function timeshiftUTC(gcal) {
      var date = gcal.toDate();
      for (var i in UTC_DATES) {
        if (date >= UTC_DATES[i].date) {
          return UTC_DATES[i].shift;
        }
      }
      return 4193 / 450 / 24; // +9:19:04h (139°46'E)
    }
  }]);
  return CalendarJapanese;
}(_Chinese2.default);
exports["default"] = CalendarJapanese;

/***/ }),

/***/ 16354:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * @copyright 2016- (c) commenthol
 * @license ISC
 */


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var CalDate = __webpack_require__(76431);
var _ = __webpack_require__(3114);
var _require = __webpack_require__(51312),
  toYear = _require.toYear,
  toDate = _require.toDate;
var Data = __webpack_require__(79395);
var DateFn = __webpack_require__(65443); // priority in ascending order (low ... high)

var TYPES = ['observance', 'optional', 'school', 'bank', 'public'];
/**
 * @class
 * @param {Object} data - holiday data object - see data/holidays.json
 * @param {String|Object} country - if object use `{ country: {String}, state: {String}, region: {String} }`
 * @param {String} [state] - specifies state
 * @param {String} [region] - specifies region
 * @param {Object} [opts] - options
 * @param {Array|String} opts.languages - set language(s) with ISO 639-1 shortcodes
 * @param {String} opts.timezone - set timezone
 * @param {Array} opts.types - holiday types to consider
 * @example
 * ```js
 * new Holiday(data, 'US', 'la', 'no') // is the same as
 * new Holiday(data, 'us.la.no')       // is the same as
 * new Holiday(data, { country: 'us', state: 'la', region: 'no'})
 * ```
 */

function Holidays(data, country, state, region, opts) {
  if (!(this instanceof Holidays)) {
    return new Holidays(data, country, state, region, opts);
  }
  if (!data) {
    throw new TypeError('need holiday data');
  }
  this._data = data;
  this.init(country, state, region, opts);
}
module.exports = Holidays;
Holidays.prototype = {
  /**
   * initialize holidays for a country/state/region
   * @param {String|Object} country - if object use `{ country: {String}, state: {String}, region: {String} }`
   * @param {String} [state] - specifies state
   * @param {String} [region] - specifies region
   * @param {Object} [opts] - options
   * @param {Array|String} [opts.languages] - set language(s) with ISO 639-1 shortcodes
   * @param {String} [opts.timezone] - set timezone
   * @param {Array} [opts.types] - holiday types to consider
   */
  init: function init() {
    var _this = this;
    var _getArgs = getArgs.apply(void 0, arguments),
      _getArgs2 = _slicedToArray(_getArgs, 4),
      country = _getArgs2[0],
      state = _getArgs2[1],
      region = _getArgs2[2],
      opts = _getArgs2[3]; // reset settings

    this.__conf = null;
    this.holidays = {};
    this.setLanguages();
    this._setTypes(opts.types);
    this.__conf = Data.splitName(country, state, region);
    this.__data = new Data(opts.data || this._data, this.__conf);
    if (opts.languages) {
      this.setLanguages(opts.languages);
    } else {
      this.setLanguages(this.__data.getLanguages(this.__conf));
    }
    var holidays = this.__data.getRules();
    if (holidays) {
      this.__timezone = opts.timezone || this.__data.getTimezones()[0];
      Object.keys(holidays).forEach(function (rule) {
        _this.setHoliday(rule, holidays[rule]);
      });
      return true;
    }
  },
  /**
   * set (custom) holiday
   * @param {String} rule - rule for holiday (check supported grammar) or date in ISO Format, e.g. 12-31 for 31th Dec
   * @param {Object|String} [opts] - holiday options, if String then opts is used as name
   * @param {Object} opts.name - translated holiday names e.g. `{ en: 'name', es: 'nombre', ... }`
   * @param {String} opts.type - holiday type `public|bank|school|observance`
   * @throws {TypeError}
   * @return {Boolean} if holiday could be set returns `true`
   */
  setHoliday: function setHoliday(rule, opts) {
    // remove days
    if (opts === false) {
      if (this.holidays[rule]) {
        this.holidays[rule] = false;
        return true;
      }
      return false;
    } // assign a name to rule

    if (!opts || typeof opts === 'string') {
      opts = opts || rule;
      var lang = this.getLanguages()[0];
      opts = _.set({
        type: 'public'
      }, ['name', lang], opts);
    } // convert active properties to Date

    if (opts.active) {
      if (!Array.isArray(opts.active)) {
        throw TypeError('.active is not of type Array: ' + rule);
      }
      opts.active = opts.active.map(function (a) {
        var from = toDate(a.from);
        var to = toDate(a.to);
        if (!(from || to)) {
          throw TypeError('.active needs .from or .to property: ' + rule);
        }
        return {
          from: from,
          to: to
        };
      });
    } // check for supported type

    if (!this._hasType(opts.type)) {
      return false;
    }
    this.holidays[rule] = opts;
    var fn = new DateFn(rule, this.holidays);
    if (fn.ok) {
      this.holidays[rule].fn = fn;
      return true;
    } else {
      // throw Error('could not parse rule: ' + rule) // NEXT
      console.log('could not parse rule: ' + rule); // eslint-disable-line
    }
    return false;
  },
  /**
   * get all holidays for `year` with names using prefered `language`
   * @param {String|Date} [year] - if omitted current year is choosen
   * @param {String} [language] - ISO 639-1 code for language
   * @return {Array} of found holidays in given year sorted by Date:
   * ```
   * {String} date - ISO Date String of (start)-date in local format
   * {Date} start - start date of holiday
   * {Date} end - end date of holiday
   * {String} name - name of holiday using `language` (if available)
   * {String} type - type of holiday `public|bank|school|observance`
   * ```
   */
  getHolidays: function getHolidays(year, language) {
    var _this2 = this;
    year = toYear(year);
    var langs = this.getLanguages();
    if (language) {
      langs.unshift(language);
    }
    var startSorter = function startSorter(a, b) {
      return +a.start - +b.start;
    };
    var typeIndex = function typeIndex(a) {
      return TYPES.indexOf(a.type);
    };
    var typeSorter = function typeSorter(a, b) {
      return typeIndex(b) - typeIndex(a);
    };
    var ruleIndex = function ruleIndex(a) {
      return /substitutes|and if /.test(a.rule) ? 1 : 0;
    };
    var ruleLength = function ruleLength(a) {
      return String(a.rule || '').length;
    };
    var ruleSorter = function ruleSorter(a, b) {
      return ruleIndex(a) - ruleIndex(b) || ruleLength(a) - ruleLength(b);
    };
    var filterMap = {};
    var arr = Object.keys(this.holidays).reduce(function (arr, rule) {
      if (_this2.holidays[rule].fn) {
        _this2._dateByRule(year, rule).forEach(function (o) {
          arr.push(_objectSpread(_objectSpread({}, _this2._translate(o, langs)), {}, {
            rule: rule
          }));
        });
      }
      return arr;
    }, []) // sort by date and type to filter by duplicate
    .sort(function (a, b) {
      return startSorter(a, b) || typeSorter(a, b) || ruleSorter(a, b);
    }).filter(function (item) {
      var hash = item.name + +item.start;
      if (!filterMap[hash]) {
        filterMap[hash] = true;
        return true;
      }
      return false;
    });
    return arr;
  },
  /**
   * check whether `date` is a holiday or not
   * @param {Date} [date]
   * @return {Object} holiday:
   * ```
   * {String} date - ISO Date String of (start)-date in local format
   * {Date} start - start date of holiday
   * {Date} end - end date of holiday
   * {String} name - name of holiday using `language` (if available)
   * {String} type - type of holiday `public|bank|school|observance`
   * ```
   */
  isHoliday: function isHoliday(date) {
    date = date || new Date();
    var d = new CalDate();
    d.fromTimezone(date, this.__timezone);
    var year = d.year;
    var rules = Object.keys(this.holidays);
    for (var i in rules) {
      var hd = [].concat(this._dateByRule(year, rules[i]));
      for (var j in hd) {
        if (hd[j] && date >= hd[j].start && date < hd[j].end) {
          return this._translate(hd[j]);
        }
      }
    }
    return false;
  },
  /**
   * Query for available Countries, States, Regions
   * @param {String} [country]
   * @param {String} [state]
   * @param {String} [lang] - ISO-639 language shortcode
   * @return {Object} shortcode, name pairs of supported countries, states, regions
   */
  query: function query(country, state, lang) {
    var o = Data.splitName(country, state);
    if (!o || !o.country) {
      return this.getCountries(lang);
    } else if (!o.state) {
      return this.getStates(o.country, lang);
    } else {
      return this.getRegions(o.country, o.state, lang);
    }
  },
  /**
   * get supported countries
   * @param {String} [lang] - ISO-639 language shortcode
   * @return {Object} shortcode, name pairs of supported countries
   * ```js
   * { AD: 'Andorra',
   *   US: 'United States' }
   * ```
   */
  getCountries: function getCountries(lang) {
    return this.__data.getCountries(lang);
  },
  /**
   * get supported states for a given country
   * @param {String} country - shortcode of country
   * @param {String} [lang] - ISO-639 language shortcode
   * @return {Object} shortcode, name pairs of supported states, regions
   * ```js
   * { al: 'Alabama', ...
   *   wy: 'Wyoming' }
   * ```
   */
  getStates: function getStates(country, lang) {
    return this.__data.getStates(country, lang);
  },
  /**
   * get supported regions for a given country, state
   * @param {String} country - shortcode of country
   * @param {String} state - shortcode of state
   * @param {String} [lang] - ISO-639 language shortcode
   * @return {Object} shortcode, name pairs of supported regions
   * ```js
   * { no: 'New Orleans' }
   * ```
   */
  getRegions: function getRegions(country, state, lang) {
    return this.__data.getRegions(country, state, lang);
  },
  /**
   * get timezones for country, state, region
   * @return {Array} of {String}s containing the timezones
   */
  getTimezones: function getTimezones() {
    if (this.__data) {
      return this.__data.getTimezones();
    }
  },
  /**
   * sets timezone
   * @param {String} timezone - see `moment-timezone`
   * if `timezone` is `undefined` then all dates are considered local dates
   */
  setTimezone: function setTimezone(timezone) {
    this.__timezone = timezone;
  },
  /**
   * get languages for selected country, state, region
   * @return {Array} containing ISO 639-1 language shortcodes
   */
  getLanguages: function getLanguages() {
    return this.__languages;
  },
  /**
   * set language(s) for holiday names
   * @param {Array|String} language
   * @return {Array} set languages
   */
  setLanguages: function setLanguages(language) {
    if (typeof language === 'string') {
      language = [language];
    }
    var tmp = {};
    this.__languages = [].concat(language, this.__conf ? this.__data.getLanguages(this.__conf) : [], 'en').filter(function (l) {
      // filter out duplicates
      if (!l || tmp[l]) {
        return false;
      }
      tmp[l] = 1;
      return true;
    });
  },
  /**
   * get default day off as weekday
   * @return {String} weekday of day off
   */
  getDayOff: function getDayOff() {
    if (this.__conf) {
      return this.__data.getDayOff();
    }
  },
  /**
   * @private
   * @param {Number} year
   * @param {String} rule
   */
  _dateByRule: function _dateByRule(year, rule) {
    var _rule = this.holidays[rule];
    var dates = _rule.fn.inYear(year).get(this.__timezone).map(function (date) {
      var odate = _.merge({}, _.omit(date, ['substitute']), _.omit(_rule, ['fn', 'enable', 'disable', 'substitute', 'active']));
      if (_rule.substitute && date.substitute) {
        odate.substitute = true;
      }
      return odate;
    });
    return dates;
  },
  /**
   * translate holiday object `o` to a language
   * @private
   * @param {Object} o
   * @param {Array} langs - languages for translation
   * @return {Object} translated holiday object
   */
  _translate: function _translate(o, langs) {
    if (o && _typeof(o.name) === 'object') {
      langs = langs || this.getLanguages();
      for (var i in langs) {
        var name = o.name[langs[i]];
        if (name) {
          o.name = name;
          break;
        }
      }
      if (o.substitute) {
        for (var _i2 in langs) {
          var subst = this.__data.getSubstitueNames();
          var _name = subst[langs[_i2]];
          if (_name) {
            o.name += ' (' + _name + ')';
            break;
          }
        }
      }
    }
    return o;
  },
  /**
   * set holiday types
   * @private
   * @param {Array} [t] - holiday types
   * @return {Object} new array of types
   */
  _setTypes: function _setTypes(t) {
    t = t || TYPES;
    this.__types = TYPES.reduce(function (types, type) {
      if (t.indexOf(type) !== -1) {
        types[type] = 1;
      }
      return types;
    }, {});
  },
  /**
   * check for supported holiday type
   * @private
   * @param {String} type
   * @return {Boolean}
   */
  _hasType: function _hasType(type) {
    return !!this.__types[type];
  }
};
function getArgs(country, state, region, opts) {
  if (_typeof(region) === 'object') {
    opts = region;
    region = null;
  } else if (_typeof(state) === 'object') {
    opts = state;
    state = null;
  } else if (_typeof(country) === 'object' && !country.country) {
    opts = country;
  }
  opts = opts || {};
  return [country, state, region, opts];
}

/***/ }),

/***/ 16547:
/***/ ((module) => {

/**
 * DO NOT EDIT MANUALLY
 * Use `scripts/deltat.js` to generate file.
 * Datasets are from <http://maia.usno.navy.mil/ser7> and
 * <ftp://ftp.iers.org/products/eop/rapid/standard>
 */
module.exports = {
  historic: {
    table: [44, 43, 43, 41, 40, 39, 38, 37, 37, 36, 36, 36, 37, 37, 38, 37, 36, 36, 35, 35, 34, 33, 33, 32, 32, 31, 31, 30, 30, 29, 29, 29, 29, 29, 28, 28, 27, 27, 26, 26, 25, 25, 25, 26, 26, 26, 26, 25, 25, 25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 23, 23, 23, 23, 22, 22, 22, 22, 22, 21, 21, 21, 21, 21, 21, 21, 21, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 20, 20, 20, 20, 20, 19, 19, 19, 19, 19, 20, 20, 20, 20, 19, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21.1, 21, 21, 21, 20.9, 20.8, 20.7, 20.6, 20.4, 20.2, 20, 19.7, 19.4, 19.1, 18.7, 18.3, 17.8, 17.4, 17, 16.8, 16.6, 16.4, 16.1, 15.9, 15.7, 15.5, 15.3, 15, 14.7, 14.5, 14.3, 14.2, 14.1, 14.1, 14.1, 13.9, 13.7, 13.6, 13.5, 13.5, 13.5, 13.5, 13.4, 13.4, 13.4, 13.4, 13.3, 13.3, 13.2, 13.2, 13.2, 13.1, 13.1, 13.1, 13, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14, 14, 14.1, 14.1, 14.1, 14.1, 14.2, 14.3, 14.4, 14.4, 14.5, 14.6, 14.6, 14.7, 14.7, 14.7, 14.8, 14.8, 14.9, 14.9, 15, 15, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.6, 15.6, 15.8, 15.9, 15.9, 15.9, 15.8, 15.7, 15.8, 15.7, 15.7, 15.7, 15.8, 15.9, 16.1, 16.1, 16, 15.9, 15.9, 15.7, 15.4, 15.3, 15.4, 15.5, 15.6, 15.6, 15.6, 15.6, 15.6, 15.6, 15.6, 15.5, 15.5, 15.4, 15.3, 15.2, 15.1, 14.9, 14.8, 14.6, 14.4, 14.3, 14.2, 14.1, 14.2, 14.2, 13.9, 13.7, 13.5, 13.3, 13.1, 13, 13.2, 13.2, 13.1, 13.1, 13.2, 13.3, 13.5, 13.5, 13.4, 13.2, 13.2, 13.1, 13.1, 13, 12.8, 12.6, 12.7, 12.6, 12.3, 12, 11.9, 11.8, 11.6, 11.4, 11.2, 11.1, 11.1, 11.1, 11.1, 11.1, 11.2, 11.1, 11.1, 11.2, 11.4, 11.5, 11.3, 11.2, 11.4, 11.7, 11.9, 11.9, 11.9, 11.8, 11.7, 11.8, 11.8, 11.8, 11.7, 11.6, 11.6, 11.5, 11.5, 11.4, 11.4, 11.3, 11.3, 11.13, 11.16, 10.94, 10.72, 10.29, 10.04, 9.94, 9.91, 9.88, 9.86, 9.72, 9.67, 9.66, 9.64, 9.51, 9.4, 9.21, 9, 8.6, 8.29, 7.95, 7.73, 7.59, 7.49, 7.36, 7.26, 7.1, 7, 6.89, 6.82, 6.73, 6.64, 6.39, 6.28, 6.25, 6.27, 6.25, 6.27, 6.22, 6.24, 6.22, 6.27, 6.3, 6.36, 6.35, 6.37, 6.32, 6.33, 6.33, 6.37, 6.37, 6.41, 6.4, 6.44, 6.46, 6.51, 6.48, 6.51, 6.53, 6.58, 6.55, 6.61, 6.69, 6.8, 6.84, 6.94, 7.03, 7.13, 7.15, 7.22, 7.26, 7.3, 7.23, 7.22, 7.21, 7.2, 6.99, 6.98, 7.19, 7.36, 7.35, 7.39, 7.41, 7.45, 7.36, 7.18, 6.95, 6.72, 6.45, 6.24, 5.92, 5.59, 5.15, 4.67, 4.11, 3.52, 2.94, 2.47, 1.97, 1.52, 1.04, 0.6, 0.11, -0.34, -0.82, -1.25, -1.7, -2.08, -2.48, -2.82, -3.19, -3.5, -3.84, -4.14, -4.43, -4.59, -4.79, -4.92, -5.09, -5.24, -5.36, -5.34, -5.37, -5.32, -5.34, -5.33, -5.4, -5.47, -5.58, -5.66, -5.74, -5.68, -5.69, -5.65, -5.67, -5.68, -5.73, -5.72, -5.78, -5.79, -5.86, -5.89, -6.01, -6.13, -6.28, -6.41, -6.53, -6.49, -6.5, -6.45, -6.41, -6.26, -6.11, -5.9, -5.63, -5.13, -4.68, -4.19, -3.72, -3.21, -2.7, -2.09, -1.48, -0.75, -0.08, 0.62, 1.26, 1.95, 2.59, 3.28, 3.92, 4.61, 5.2, 5.73, 6.29, 7, 7.68, 8.45, 9.13, 9.78, 10.38, 10.99, 11.64, 12.47, 13.23, 14, 14.69, 15.38, 16, 16.64, 17.19, 17.72, 18.19, 18.67, 19.13, 19.69, 20.14, 20.54, 20.86, 21.14, 21.41, 21.78, 22.06, 22.3, 22.51, 22.79, 23.01, 23.29, 23.46, 23.55, 23.63, 23.8, 23.95, 24.25, 24.39, 24.42, 24.34, 24.22, 24.1, 24.08, 24.02, 24.04, 23.98, 23.91, 23.89, 23.95, 23.93, 23.92, 23.88, 23.94, 23.91, 23.82, 23.76, 23.87, 23.91, 23.95, 23.96, 24, 24.04, 24.2, 24.35, 24.61, 24.82, 25.09, 25.3, 25.56, 25.77, 26.05, 26.27, 26.54, 26.76, 27.04, 27.27, 27.55, 27.77, 28.03, 28.25, 28.5, 28.7, 28.95, 29.15, 29.38, 29.57, 29.8, 29.97, 30.19, 30.36, 30.57, 30.72, 30.93, 31.07, 31.24, 31.349, 31.516, 31.677, 31.923, 32.166, 32.449, 32.671, 32.919, 33.15, 33.397, 33.584, 33.804, 33.992, 34.24, 34.466, 34.731, 35.03, 35.4, 35.738, 36.147, 36.546, 36.995, 37.429, 37.879, 38.291, 38.753, 39.204, 39.707, 40.182, 40.706, 41.17, 41.686, 42.227, 42.825, 43.373, 43.959, 44.486, 44.997, 45.477, 45.983, 46.458, 46.997, 47.521, 48.034, 48.535, 49.099, 49.589, 50.102, 50.54, 50.975, 51.382, 51.81, 52.168, 52.572, 52.957, 53.434, 53.789, 54.087],
    first: 1657,
    last: 1984.5
  },
  data: {
    table: [43.4724, 43.5648, 43.6737, 43.7782, 43.8763, 43.9562, 44.0315, 44.1132, 44.1982, 44.2952, 44.3936, 44.4841, 44.5646, 44.6425, 44.7386, 44.837, 44.9302, 44.9986, 45.0584, 45.1284, 45.2064, 45.298, 45.3897, 45.4761, 45.5632, 45.645, 45.7375, 45.8284, 45.9133, 45.982, 46.0407, 46.1067, 46.1825, 46.2789, 46.3713, 46.4567, 46.5445, 46.6311, 46.7302, 46.8284, 46.9247, 46.997, 47.0709, 47.145, 47.2362, 47.3413, 47.4319, 47.5214, 47.6049, 47.6837, 47.7781, 47.8771, 47.9687, 48.0348, 48.0942, 48.1608, 48.246, 48.3439, 48.4355, 48.5344, 48.6324, 48.7294, 48.8365, 48.9353, 49.0319, 49.1013, 49.1591, 49.2286, 49.307, 49.4018, 49.4945, 49.5861, 49.6805, 49.7602, 49.8556, 49.9489, 50.0347, 50.1019, 50.1622, 50.226, 50.2968, 50.3831, 50.4599, 50.5387, 50.616, 50.6866, 50.7658, 50.8454, 50.9187, 50.9761, 51.0278, 51.0843, 51.1538, 51.2319, 51.3063, 51.3808, 51.4526, 51.516, 51.5985, 51.6809, 51.7573, 51.8133, 51.8532, 51.9014, 51.9603, 52.0328, 52.0985, 52.1668, 52.2316, 52.2938, 52.368, 52.4465, 52.518, 52.5751, 52.6178, 52.6668, 52.734, 52.8056, 52.8792, 52.9565, 53.0445, 53.1268, 53.2197, 53.3024, 53.3747, 53.4335, 53.4778, 53.53, 53.5845, 53.6523, 53.7256, 53.7882, 53.8367, 53.883, 53.9443, 54.0042, 54.0536, 54.0856, 54.1084, 54.1463, 54.1914, 54.2452, 54.2958, 54.3427, 54.3911, 54.432, 54.4898, 54.5456, 54.5977, 54.6355, 54.6532, 54.6776, 54.7174, 54.7741, 54.8253, 54.8712, 54.9161, 54.9581, 54.9997, 55.0476, 55.0912, 55.1132, 55.1328, 55.1532, 55.1898, 55.2416, 55.2838, 55.3222, 55.3613, 55.4063, 55.4629, 55.5111, 55.5524, 55.5812, 55.6004, 55.6262, 55.6656, 55.7168, 55.7698, 55.8197, 55.8615, 55.913, 55.9663, 56.022, 56.07, 56.0939, 56.1105, 56.1314, 56.1611, 56.2068, 56.2582, 56.3, 56.3399, 56.379, 56.4283, 56.4804, 56.5352, 56.5697, 56.5983, 56.6328, 56.6739, 56.7332, 56.7972, 56.8553, 56.9111, 56.9755, 57.0471, 57.1136, 57.1738, 57.2226, 57.2597, 57.3073, 57.3643, 57.4334, 57.5016, 57.5653, 57.6333, 57.6973, 57.7711, 57.8407, 57.9058, 57.9576, 57.9975, 58.0425, 58.1043, 58.1679, 58.2389, 58.3091659, 58.3833021, 58.4536748, 58.5401438, 58.6227714, 58.6916662, 58.7409628, 58.7836189, 58.8405543, 58.898579, 58.9713678, 59.043837, 59.1218414, 59.2002687, 59.274737, 59.3574134, 59.4433827, 59.5242416, 59.5849787, 59.6343497, 59.6927827, 59.758805, 59.8386448, 59.9110567, 59.9844537, 60.056435, 60.123065, 60.2042185, 60.2803745, 60.3530352, 60.4011891, 60.4439959, 60.4900257, 60.5578054, 60.6324446, 60.7058569, 60.7853482, 60.8663504, 60.9386672, 61.0276757, 61.1103448, 61.1870458, 61.2453891, 61.2881024, 61.3377799, 61.4036165, 61.4760366, 61.5524599, 61.6286593, 61.6845819, 61.743306, 61.8132425, 61.8823203, 61.9496762, 61.9968743, 62.0342938, 62.0714108, 62.1202315, 62.1809508, 62.2382046, 62.2950486, 62.3506479, 62.3995381, 62.475395, 62.5463091, 62.6136031, 62.6570739, 62.6941742, 62.7383271, 62.7926305, 62.8566986, 62.9145607, 62.9658689, 63.0216632, 63.0807052, 63.1461718, 63.2052946, 63.2599441, 63.2844088, 63.2961369, 63.3126092, 63.3421622, 63.3871303, 63.4339302, 63.4673369, 63.4978642, 63.5319327, 63.5679441, 63.6104432, 63.6444291, 63.6641815, 63.6739403, 63.692603, 63.7147066, 63.7518055, 63.792717, 63.8285221, 63.8556871, 63.8803854, 63.9075025, 63.9392787, 63.9690744, 63.9798604, 63.9833077, 63.9938011, 64.0093384, 64.0399621, 64.0670429, 64.0907881, 64.1068077, 64.1282125, 64.1584211, 64.1832722, 64.2093975, 64.2116628, 64.2073173, 64.2115565, 64.2222858, 64.2499625, 64.2760973, 64.2998037, 64.3191858, 64.345013, 64.3734584, 64.3943291, 64.4151156, 64.4132064, 64.4118464, 64.4096536, 64.4167832, 64.43292, 64.4510529, 64.4734276, 64.4893377, 64.5053342, 64.5269189, 64.5470942, 64.5596729, 64.5512293, 64.5370906, 64.5359472, 64.5414947, 64.5543634, 64.5654298, 64.5736111, 64.5891142, 64.6014759, 64.6176147, 64.6374397, 64.6548674, 64.6530021, 64.6379271, 64.637161, 64.6399614, 64.6543152, 64.6723164, 64.6876311, 64.7051905, 64.7313433, 64.7575312, 64.7811143, 64.8000929, 64.7994561, 64.7876424, 64.783095, 64.7920604, 64.8096421, 64.8310888, 64.8451826, 64.8597013, 64.8849929, 64.9174991, 64.9480298, 64.9793881, 64.9894772, 65.0028155, 65.0138193, 65.0371432, 65.0772597, 65.112197, 65.1464034, 65.1832638, 65.2145358, 65.2493713, 65.2920645, 65.3279403, 65.3413366, 65.3451881, 65.34964, 65.3711307, 65.3971998, 65.4295547, 65.4573487, 65.486752, 65.5152012, 65.5449916, 65.5780768, 65.612728, 65.6287505, 65.6370091, 65.6493375, 65.6759928, 65.7096966, 65.746092, 65.7768362, 65.8024614, 65.8236695, 65.8595036, 65.8973008, 65.932291, 65.950911, 65.9534105, 65.962833, 65.9838647, 66.0146733, 66.042049, 66.0699217, 66.0961343, 66.1310116, 66.1682713, 66.2071627, 66.2355846, 66.2408549, 66.2335423, 66.2349107, 66.2441095, 66.2751123, 66.3054334, 66.3245568, 66.3405713, 66.3624433, 66.3957101, 66.428903, 66.4618675, 66.4748837, 66.4751281, 66.4828678, 66.5056165, 66.5382912, 66.5705628, 66.6030198, 66.6339689, 66.6569117, 66.6925011, 66.7288729, 66.7578719, 66.7707625, 66.7740427, 66.7846288, 66.810324, 66.840048, 66.8778601, 66.9069091, 66.944259, 66.9762508, 67.0258126, 67.0716286, 67.1100184, 67.1266401, 67.1331391, 67.145797, 67.17174, 67.2091069, 67.2459812, 67.2810383, 67.3136452, 67.3456968, 67.389003, 67.4318433, 67.4666209, 67.4858459, 67.4989147, 67.5110936, 67.5352658, 67.571103, 67.6070253, 67.6439167, 67.6765272, 67.7116693, 67.7590634, 67.8011542, 67.840213, 67.8606318, 67.8821576, 67.9120101, 67.9546462, 68.0054839, 68.051412, 68.1024205, 68.1577127, 68.2043653, 68.2664507, 68.3188171, 68.3703564, 68.3964356, 68.4094472, 68.4304611, 68.4629791, 68.507818, 68.5537018, 68.5927179, 68.6298107, 68.6670627, 68.7135208, 68.7622755, 68.8032843, 68.8244838, 68.8373427, 68.847693, 68.8688567, 68.9005814, 68.9354999, 68.9676423, 68.9875354, 69.0175527, 69.0499081, 69.0823433, 69.1070034, 69.1134027, 69.1141898, 69.1207203, 69.1355578, 69.16459, 69.1964228, 69.2201632, 69.2451564, 69.2732758, 69.3031979, 69.3325675, 69.3540507, 69.3581722, 69.3441594, 69.3376329, 69.3377424, 69.3432191, 69.3540144, 69.3611554, 69.37517, 69.3889927, 69.4091685, 69.4264676, 69.4386343, 69.4241397, 69.3921239, 69.3693408, 69.3574744, 69.359326, 69.3630196, 69.3593565, 69.3503365, 69.3497, 69.3610943, 69.3670471, 69.3598135, 69.3376245, 69.3038235, 69.2771612, 69.2725271, 69.2889782, 69.3006227, 69.30818],
    first: 1973.0849315068492,
    firstYM: [1973, 2],
    last: 2022,
    lastYM: [2022, 1]
  },
  prediction: {
    table: [69.30818, 69.45818, 69.57818, 69.64818, 69.79818, 69.93818, 70.06818, 70.13817999999999, 70.27817999999999, 70.42818, 70.54818, 70.61818, 70.75818, 70.89818, 71.01818, 71.08818, 71.22818, 71.37818, 71.49817999999999, 71.56818, 71.71817999999999, 71.85817999999999, 71.97818, 72.05818],
    first: 2022,
    last: 2027.75
  }
};

/***/ }),

/***/ 17866:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
var isObject = exports.isObject = function (arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
};
var isDate = exports.isDate = function (d) {
  return isObject(d) && objectToString(d) === '[object Date]';
};

/**
 * pad number with `0`
 * @param {number} number
 * @param {number} [len] - length
 * @return {string} padded string
 */
exports.pad0 = function pad0(number, len) {
  len = len || 2;
  number = Array(len).join('0') + number.toString();
  return number.substr(number.length - len, len);
};

/**
 * convert string to number
 * @private
 * @param {String} str
 * @return {Number} converted number or undefined
 */
var toNumber = exports.toNumber = function toNumber(str) {
  var num = parseInt(str, 10);
  if (!isNaN(num)) {
    return num;
  }
};

/**
 * extract or set year
 * @private
 * @param {Number|Date|String} year
 * @return {Number} year
 */
exports.toYear = function toYear(year) {
  if (!year) {
    year = new Date().getFullYear();
  } else if (isDate(year)) {
    year = year.getFullYear();
  } else if (typeof year === 'string') {
    year = toNumber(year);
  }
  return year;
};

/***/ }),

/***/ 19214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var solstice = __webpack_require__(50746);
var julian = __webpack_require__(3039);
var planetpos = __webpack_require__(82779);
var earth = new planetpos.Planet(__webpack_require__(30274));
var moment = __webpack_require__(73247);
var CalEvent = __webpack_require__(99063);
var CalDate = __webpack_require__(76431);
var Equinox = /*#__PURE__*/function (_CalEvent) {
  _inherits(Equinox, _CalEvent);
  var _super = _createSuper(Equinox);

  /**
   * @param {object} [opts]
   * @param {string} opts.season - type of season (spring|summer|autumn|winter)
   * @param {number|string} opts.offset - offset in days
   */
  function Equinox(opts) {
    var _this;
    _classCallCheck(this, Equinox);
    opts = opts || {};
    _this = _super.call(this, opts);
    _this._season = opts.season;
    _this._timezone = opts.timezone || 'GMT';
    return _this;
  }
  _createClass(Equinox, [{
    key: "inYear",
    value: function inYear(year) {
      var jde;
      switch (this._season) {
        case 'march':
          {
            jde = solstice.march2(year, earth);
            break;
          }
        case 'june':
          {
            jde = solstice.june2(year, earth);
            break;
          }
        case 'september':
          {
            jde = solstice.september2(year, earth);
            break;
          }
        case 'december':
          {
            jde = solstice.december2(year, earth);
            break;
          }
      }
      var str = new julian.Calendar().fromJDE(jde).toDate().toISOString();
      var date;
      if (/^[+-]\d{2}:\d{2}?$/.test(this._timezone)) {
        // for '+08:00' formats
        date = moment(str).utcOffset(this._timezone);
      } else {
        // for 'Asia/Shanghai' formats
        date = moment(str).tz(this._timezone); // move to timezone
      }
      var floorDate = {
        year: year,
        month: date.month() + 1,
        day: date.date()
      };
      var d = new CalDate(floorDate).setOffset(this.offset);
      this.dates.push(d);
      return this;
    }
  }]);
  return Equinox;
}(CalEvent);
module.exports = Equinox;

/***/ }),

/***/ 23226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ TimeOffPolicySelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let TimeOffPolicySelectModule = /*#__PURE__*/(() => {
  class TimeOffPolicySelectModule {
    static {
      this.ɵfac = function TimeOffPolicySelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeOffPolicySelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TimeOffPolicySelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return TimeOffPolicySelectModule;
})();

/***/ }),

/***/ 23536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint
   no-spaced-func: 0,
   no-unexpected-multiline: 0
 */


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var toNumber = (__webpack_require__(51312).toNumber);
/**
 * regular expressions to parse holiday statements
 */

var grammar = function () {
  /**
   * combines different regexes
   * @private
   * @return {RegExp} combined regex
   */
  function replace(regex, opt) {
    regex = regex.source;
    opt = opt || '';
    return function self(name, val) {
      if (!name) return new RegExp(regex, opt);
      val = val.source || val;
      val = val.replace(/(^|[^[])\^/g, '$1');
      regex = regex.replace(name, val);
      return self;
    };
  } // raw rules

  var raw = {
    _weekdays: 'sunday|monday|tuesday|wednesday|thursday|friday|saturday|day',
    _months: 'January|February|March|April|May|June|July|August|September|October|November|December',
    _islamicMonths: 'Muharram|Safar|Rabi al-awwal|Rabi al-thani|Jumada al-awwal|Jumada al-thani|Rajab|Shaban|Ramadan|Shawwal|Dhu al-Qidah|Dhu al-Hijjah',
    _hebrewMonths: 'Nisan|Iyyar|Sivan|Tamuz|Av|Elul|Tishrei|Cheshvan|Kislev|Tevet|Shvat|Adar',
    _days: /(_weekdays)s?/,
    _direction: /(before|after|next|previous|in)/,
    _counts: /(\d+)(?:st|nd|rd|th)?/,
    _count_days: /([-+]?\d{1,2}) ?(?:days?|d)?/,
    _timezone: / in ([^\s]*|[+-]\d{2}:\d{2})/,
    dateMonth: /^(_months)/,
    date: /^(?:0*(\d{1,4})-)?0?(\d{1,2})-0?(\d{1,2})/,
    time: /^(?:T?0?(\d{1,2}):0?(\d{1,2})|T0?(\d{1,2}))/,
    duration: /^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?)?/,
    // follows ISO 8601
    julian: /^julian date/,
    easter: /^(easter|orthodox)(?: _count_days)?/,
    equinox: /^(march|june|september|december) (?:equinox|solstice)?(?:_timezone)?/,
    hebrew: /^0?(\d{1,2}) (_hebrewMonths)(?: 0*(\d{1,}))?/,
    islamic: /^0?(\d{1,2}) (_islamicMonths)(?: 0*(\d{1,}))?/,
    chineseLunar: /^(chinese|korean|vietnamese) (?:(\d+)-(\d{1,2})-)?(\d{1,2})-([01])-(\d{1,2})/,
    chineseSolar: /^(chinese|korean|vietnamese) (?:(\d+)-(\d{1,2})-)?(\d{1,2})-(\d{1,2}) solarterm/,
    bengaliRevised: /^(bengali-revised) (?:-?0*(\d{1,4})-)?0?(\d{1,2})-0?(\d{1,2})/,
    modifier: /^(substitutes|and|if equal|then|if)\b/,
    rule_year: /^(?:in (even|odd|leap|non-leap) years|every (\d+) years? since 0*(\d{1,4}))/,
    rule_weekday: /(not )?on ((?:(?:_weekdays)(?:,\s?)?)*)/,
    rule_date_if_then: /^if ((?:(?:_weekdays)(?:,\s?)?)*) then (?:_direction _days)?/,
    rule_day_dir_date: /^(?:_counts )?_days _direction/,
    rule_bridge: /^is (?:([^ ]+) )?holiday/,
    rule_same_day: /^#\d+/,
    rule_type_if_then: /if ((?:(?:_weekdays)(?:,\s?)?)*) then/,
    rule_type_dir: /_days _direction$/,
    rule_type_bridge: / if .* is .* holiday$/,
    space: /^\s+/
  };
  /* eslint-disable func-call-spacing */

  raw._days = replace(raw._days)(/_weekdays/, raw._weekdays)();
  raw.julian = replace(raw.julian, '')(/date/, raw.date)();
  raw.easter = replace(raw.easter, '')(/_count_days/, raw._count_days)();
  raw.equinox = replace(raw.equinox, '')(/_count_days/g, raw._count_days)(/_direction/g, raw._direction)(/_timezone/g, raw._timezone)();
  raw.hebrew = replace(raw.hebrew, '')(/_hebrewMonths/, raw._hebrewMonths)();
  raw.islamic = replace(raw.islamic, '')(/_islamicMonths/, raw._islamicMonths)();
  raw.dateMonth = replace(raw.dateMonth)(/_months/, raw._months)();
  raw.rule_weekday = replace(raw.rule_weekday, '')(/_weekdays/g, raw._weekdays)();
  raw.rule_date_if_then = replace(raw.rule_date_if_then, '')(/_direction/g, raw._direction)(/_weekdays/g, raw._weekdays)(/_days/g, raw._days)();
  raw.rule_day_dir_date = replace(raw.rule_day_dir_date, '')(/_counts/, raw._counts)(/_days/g, raw._days)(/_direction/g, raw._direction)();
  raw.rule_type_if_then = replace(raw.rule_type_if_then, '')(/_direction/g, raw._direction)(/_days/g, raw._days)();
  var i = 1;
  raw.months = {};
  raw._months.split('|').forEach(function (m) {
    raw.months[m] = i++;
  });
  i = 1;
  raw.islamicMonths = {};
  raw._islamicMonths.split('|').forEach(function (m) {
    raw.islamicMonths[m] = i++;
  });
  i = 1;
  raw.hebrewMonths = {};
  raw._hebrewMonths.split('|').forEach(function (m) {
    raw.hebrewMonths[m] = i++;
  });
  return raw;
  /* eslint-enable */
}();
var Parser = /*#__PURE__*/function () {
  function Parser(fns) {
    _classCallCheck(this, Parser);
    this.fns = fns || ['_julian', '_date', '_easter', '_islamic', '_hebrew', '_equinox', '_chineseSolar', '_chineseLunar', '_bengaliRevised', '_dateMonth', '_ruleDateIfThen', '_ruleWeekday', '_ruleYear', '_ruleDateDir', '_ruleBridge', '_ruleTime', '_ruleDuration', '_ruleModifier', '_ruleSameDay'];
    this.tokens = [];
  }
  _createClass(Parser, [{
    key: "parse",
    value: function parse(rule) {
      this.setup = {
        str: rule,
        rule: rule
      };
      this.error = 0;
      this.tokens = [];
      this._tokenize(this.setup);
      this._reorder();
      return this.tokens;
    }
    /**
     * reorder set of tokens for rule dateDir
     * dateDir: [dateDir2, dateDir1, fn] --> [fn, dateDir1, dateDir2]
     * dateIfThen: [fn, dateIfThen1, dateIfThen2] --> [fn, dateIfThen1, dateIfThen2]
     */
  }, {
    key: "_reorder",
    value: function _reorder() {
      var tmp = [];
      var res = [];
      this.tokens.forEach(function (token) {
        if (token.rule === 'dateDir') {
          tmp.push(token);
        } else {
          res.push(token);
          if (tmp.length) {
            while (tmp.length) {
              res.push(tmp.pop());
            }
          }
        } // no modifiers before a date

        if (token.fn && res[0].modifier) {
          while (res[0].modifier) {
            res.push(res.shift());
          }
        }
      });
      this.tokens = res;
    }
  }, {
    key: "_tokenize",
    value: function _tokenize(o) {
      var last;
      while (o.str) {
        for (var i = 0; i < this.fns.length; i++) {
          if (this[this.fns[i]](o)) break;
        }
        this._space(o);
        if (last === o.str) {
          this.error++;
          break;
        }
        last = o.str;
      }
    }
  }, {
    key: "_shorten",
    value: function _shorten(o, cap0) {
      o.str = o.str.substr(cap0.length, o.str.length);
    }
  }, {
    key: "_date",
    value: function _date(o) {
      var cap;
      if (cap = grammar.date.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          fn: 'gregorian',
          year: toNumber(cap.shift()),
          month: toNumber(cap.shift()),
          day: toNumber(cap.shift())
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_julian",
    value: function _julian(o) {
      var cap;
      if (cap = grammar.julian.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          fn: 'julian',
          year: toNumber(cap.shift()),
          month: toNumber(cap.shift()),
          day: toNumber(cap.shift())
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_easter",
    value: function _easter(o) {
      var cap;
      if (cap = grammar.easter.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          fn: 'easter',
          type: cap.shift(),
          offset: toNumber(cap.shift()) || 0
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_equinox",
    value: function _equinox(o) {
      var cap;
      if (cap = grammar.equinox.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          fn: 'equinox',
          season: cap.shift(),
          timezone: cap.shift() || 'GMT'
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_hebrew",
    value: function _hebrew(o) {
      var cap;
      if (cap = grammar.hebrew.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          fn: 'hebrew',
          day: toNumber(cap.shift()),
          month: grammar.hebrewMonths[cap.shift()],
          year: toNumber(cap.shift())
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_islamic",
    value: function _islamic(o) {
      var cap;
      if (cap = grammar.islamic.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          fn: 'islamic',
          day: toNumber(cap.shift()),
          month: grammar.islamicMonths[cap.shift()],
          year: toNumber(cap.shift())
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_chineseSolar",
    value: function _chineseSolar(o) {
      var cap;
      if (cap = grammar.chineseSolar.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          fn: cap.shift(),
          cycle: toNumber(cap.shift()),
          year: toNumber(cap.shift()),
          solarterm: toNumber(cap.shift()),
          day: toNumber(cap.shift()),
          timezone: cap.shift()
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_chineseLunar",
    value: function _chineseLunar(o) {
      var cap;
      if (cap = grammar.chineseLunar.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          fn: cap.shift(),
          cycle: toNumber(cap.shift()),
          year: toNumber(cap.shift()),
          month: toNumber(cap.shift()),
          leapMonth: !!toNumber(cap.shift()),
          day: toNumber(cap.shift()),
          timezone: cap.shift()
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_bengaliRevised",
    value: function _bengaliRevised(o) {
      var cap;
      if (cap = grammar.bengaliRevised.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          fn: cap.shift(),
          year: toNumber(cap.shift()),
          month: toNumber(cap.shift()),
          day: toNumber(cap.shift())
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_dateMonth",
    value: function _dateMonth(o) {
      var cap;
      if (cap = grammar.dateMonth.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          fn: 'gregorian',
          day: 1,
          month: grammar.months[cap.shift()],
          year: undefined
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_space",
    value: function _space(o) {
      var cap;
      if (cap = grammar.space.exec(o.str)) {
        this._shorten(o, cap[0]);
        return true;
      }
    }
  }, {
    key: "_ruleSameDay",
    value: function _ruleSameDay(o) {
      var cap;
      if (cap = grammar.rule_same_day.exec(o.str)) {
        this._shorten(o, cap[0]);
        return true;
      }
    }
  }, {
    key: "_ruleModifier",
    value: function _ruleModifier(o) {
      var cap;
      if (cap = grammar.modifier.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          modifier: cap.shift()
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_ruleTime",
    value: function _ruleTime(o) {
      var cap;
      if (cap = grammar.time.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          rule: 'time',
          hour: toNumber(cap.shift()) || 0,
          minute: toNumber(cap.shift()) || 0
        };
        res.hour = res.hour || toNumber(cap.shift()) || 0;
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_ruleDuration",
    value: function _ruleDuration(o) {
      var cap;
      if (cap = grammar.duration.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var tmp = {
          days: toNumber(cap.shift()) || 0,
          hours: toNumber(cap.shift()) || 0,
          minutes: toNumber(cap.shift()) || 0
        };
        var res = {
          rule: 'duration',
          // duration is calculated in hours
          duration: tmp.days * 24 + tmp.hours + tmp.minutes / 60
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_ruleDateIfThen",
    value: function _ruleDateIfThen(o) {
      var cap;
      if (cap = grammar.rule_date_if_then.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          rule: 'dateIfThen',
          "if": cap.shift().split(/(?:,\s?)/),
          direction: cap.shift(),
          then: cap.shift()
        }; // create a sub-parser to only check for time, duration

        var p = new Parser(['_ruleTime', '_ruleDuration']);
        p.parse(o.str);
        if (p.tokens.length) {
          res.rules = p.tokens;
        }
        o.str = ' ' + p.setup.str; // ' ' required such that the _tokenize function finalizes the loop

        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_ruleWeekday",
    value: function _ruleWeekday(o) {
      var cap;
      if (cap = grammar.rule_weekday.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          rule: 'weekday',
          not: !!cap.shift(),
          "if": cap.shift().split(/(?:,\s?)/)
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_ruleDateDir",
    value: function _ruleDateDir(o) {
      var cap;
      if (cap = grammar.rule_day_dir_date.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          rule: 'dateDir',
          count: toNumber(cap.shift()) || 1,
          weekday: cap.shift(),
          direction: cap.shift()
        };
        if (res.direction === 'in') {
          res.direction = 'after';
        }
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_ruleYear",
    value: function _ruleYear(o) {
      var cap;
      if (cap = grammar.rule_year.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          rule: 'year',
          cardinality: cap.shift(),
          every: toNumber(cap.shift()),
          since: toNumber(cap.shift())
        };
        this.tokens.push(res);
        return true;
      }
    }
  }, {
    key: "_ruleBridge",
    value: function _ruleBridge(o) {
      var cap;
      if (cap = grammar.rule_bridge.exec(o.str)) {
        this._shorten(o, cap[0]);
        cap.shift();
        var res = {
          rule: 'bridge',
          type: cap.shift()
        };
        this.tokens.push(res);
        return true;
      }
    }
  }]);
  return Parser;
}();
module.exports = Parser;

/***/ }),

/***/ 23907:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var moment = __webpack_require__(73247);
var _require = __webpack_require__(17866),
  toNumber = _require.toNumber,
  isDate = _require.isDate,
  pad0 = _require.pad0;
var PROPS = ['year', 'month', 'day', 'hour', 'minute', 'second'];
var CalDate = function () {
  /**
   * constructs a new CalDate instance
   * @param {Object|Date} [opts] - See `set(opts)`
   * @example
   * const CalDate = require('caldate')
   * const caldate = new CalDate('2000-01-01 12:00:00')
   * caldate.year
   * //> 2000
   * caldate.month
   * //> 1
   */
  function CalDate(opts) {
    _classCallCheck(this, CalDate);
    this.set(opts);
  }

  /**
   * set calendar date
   * @param {Object|Date} [opts] - defaults to `1900-01-01`
   * @param {String} opts.year
   * @param {String} opts.month - January equals to 1, December to 12
   * @param {String} opts.day
   * @param {String} opts.hour
   * @param {String} opts.minute
   * @param {String} opts.second
   * @param {String} opts.duration - defaults to 24 hours
   */

  _createClass(CalDate, [{
    key: 'set',
    value: function set(opts) {
      var _this = this;
      opts = opts || {
        year: 1900,
        month: 1,
        day: 1
      };
      if (isDate(opts)) {
        this.year = opts.getFullYear();
        this.month = opts.getMonth() + 1;
        this.day = opts.getDate();
        this.hour = opts.getHours();
        this.minute = opts.getMinutes();
        this.second = opts.getSeconds();
      } else {
        PROPS.forEach(function (p) {
          _this[p] = toNumber(opts[p]) || 0;
        });
        this.month = this.month || 1;
        this.day = this.day || 1;
      }
      this.duration = opts.duration || 24; // duration is in hours
      return this;
    }

    /**
     * checks if Date is equal to `calDate`
     * @param {CalDate} calDate
     * @return {Boolean} true if date matches
     */
  }, {
    key: 'isEqualDate',
    value: function isEqualDate(calDate) {
      var _this2 = this;
      var res = true;
      this.update();
      ['year', 'month', 'day'].forEach(function (p) {
        res &= _this2[p] === calDate[p];
      });
      return !!res;
    }

    /**
     * get day of week
     * @return {Number} day of week 0=sunday, 1=monday, ...
     */
  }, {
    key: 'getDay',
    value: function getDay() {
      return this.toDate().getDay();
    }

    /**
     * set offset per unit
     * @param {Number} number
     * @param {String} [unit='d'] - Unit in days `d`, hours `h, minutes `m`
     * @return {Object} this
     */
  }, {
    key: 'setOffset',
    value: function setOffset(number, unit) {
      if (number) {
        if ((typeof number === 'undefined' ? 'undefined' : _typeof(number)) === 'object') {
          unit = number.unit;
          number = number.number;
        }
        unit = unit || 'd';
        number = parseFloat(number, 10);
        if (isNaN(number)) {
          throw new Error('Number required');
        }
        var o = {
          day: 0
        };
        if (unit === 'd') {
          o.day = number | 0;
          number -= o.day;
          number *= 24;
        }
        if (unit === 'd' || unit === 'h') {
          o.hour = number % 24 | 0;
          number -= o.hour;
          number *= 60;
        }
        o.minute = number % 60 | 0;
        number -= o.minute;
        number *= 60;
        o.second = number % 60 | 0;
        this.day += o.day;
        this.hour += o.hour;
        this.minute += o.minute;
        this.second += o.second;
      }
      this.update();
      return this;
    }

    /**
     * set time per hour, minute or second while maintaining duration at midnight
     * @param {Number} [hour]
     * @param {Number} [minute]
     * @param {Number} [second]
     * @return {Object} this
     */
  }, {
    key: 'setTime',
    value: function setTime(hour, minute, second) {
      hour = hour || 0;
      minute = minute || 0;
      second = second || 0;
      // the holiday usually ends at midnight - if this is not the case set different duration explicitely
      this.duration = 24 - (hour + minute / 60 + second / 3600);
      this.hour = hour;
      this.minute = minute;
      this.second = second;
      this.update();
      return this;
    }

    /**
     * set duration in hours
     * @param {Number} duration in hours
     * @return {Object} this
     */
  }, {
    key: 'setDuration',
    value: function setDuration(duration) {
      this.duration = duration;
      return this;
    }

    /**
     * update internal data to real date
     * @return {Object} this
     */
  }, {
    key: 'update',
    value: function update() {
      var _this3 = this;
      if (this.year) {
        var d = new CalDate(this.toDate());
        PROPS.forEach(function (p) {
          _this3[p] = d[p];
        });
      }
      return this;
    }

    /**
     * get end date of calendar date
     * @return {CalDate}
     */
  }, {
    key: 'toEndDate',
    value: function toEndDate() {
      var d = new CalDate(this.toDate());
      d.minute += this.duration * 60 | 0;
      d.update();
      return d;
    }

    /**
     * move internal date to a date in `timezone`
     * @param {String} timezone - e.g. 'America/New_York'
     * @return {Date}
     */
  }, {
    key: 'toTimezone',
    value: function toTimezone(timezone) {
      if (timezone) {
        return new Date(moment.tz(this.toString(), timezone).format());
      } else {
        return this.toDate();
      }
    }

    /**
     * set date from a given `timezone`
     * @param {Date} dateUTC - date in UTC
     * @param {String} [timezone] - timezone of dateUTC, e.g. 'America/New_York'
     * @return {CalDate} self
     */
  }, {
    key: 'fromTimezone',
    value: function fromTimezone(dateUTC, timezone) {
      if (timezone) {
        var m = moment.tz(dateUTC, timezone);
        this.year = m.year();
        this.month = m.month() + 1;
        this.day = m.date();
        this.hour = m.hours();
        this.minute = m.minutes();
        this.second = m.seconds();
      } else {
        this.set(dateUTC);
      }
      return this;
    }

    /**
     * convert to Date
     * @return {Date}
     */
  }, {
    key: 'toDate',
    value: function toDate() {
      return new Date(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, 0);
    }

    /**
     * get Date in ISO format
     */
  }, {
    key: 'toISOString',
    value: function toISOString() {
      return this.toString(true);
    }

    /**
     * get Date as String `YYYY-MM-DD HH:MM:SS`
     */
  }, {
    key: 'toString',
    value: function toString(iso) {
      var d = new CalDate(this.toDate());
      return pad0(d.year, 4) + '-' + pad0(d.month) + '-' + pad0(d.day) + (iso ? 'T' : ' ') + pad0(d.hour) + ':' + pad0(d.minute) + ':' + pad0(d.second) + (iso ? 'Z' : '');
    }
  }]);
  return CalDate;
}();
module.exports = CalDate;

/***/ }),

/***/ 25645:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var CalEventMap = __webpack_require__(35481);
var calendar = __webpack_require__(35662);
var Hijri = /*#__PURE__*/function (_CalEventMap) {
  _inherits(Hijri, _CalEventMap);
  var _super = _createSuper(Hijri);
  function Hijri(opts) {
    var _this;
    _classCallCheck(this, Hijri);
    _this = _super.call(this, opts);
    _this.calendar = calendar;
    return _this;
  }
  _createClass(Hijri, [{
    key: "get",
    value: function get(timezone) {
      var _this2 = this;
      var arr = this.dates.map(function (date) {
        var o = {
          date: date.toString() + ' -0600',
          start: date.setOffset(-6, 'h').toTimezone(timezone),
          end: date.toEndDate().toTimezone(timezone)
        };
        _this2._addSubstitute(date, o);
        return o;
      });
      return arr;
    }
  }]);
  return Hijri;
}(CalEventMap);
module.exports = Hijri;

/***/ }),

/***/ 29187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ defaultIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89800);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86690);


function defaultIfEmpty(defaultValue) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let hasValue = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      hasValue = true;
      subscriber.next(value);
    }, () => {
      if (!hasValue) {
        subscriber.next(defaultValue);
      }
      subscriber.complete();
    }));
  });
}
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ 30274:
/***/ ((module) => {

module.exports = {
  L: {
    "0": [[1.75347045673, 0, 0], [0.03341656453, 4.66925680415, 6283.0758499914], [0.00034894275, 4.62610242189, 12566.1516999828], [0.00003417572, 2.82886579754, 3.523118349], [0.00003497056, 2.74411783405, 5753.3848848968], [0.00003135899, 3.62767041756, 77713.7714681205], [0.00002676218, 4.41808345438, 7860.4193924392], [0.00002342691, 6.13516214446, 3930.2096962196], [0.00001273165, 2.03709657878, 529.6909650946], [0.00001324294, 0.74246341673, 11506.7697697936], [0.00000901854, 2.04505446477, 26.2983197998], [0.00001199167, 1.10962946234, 1577.3435424478], [0.00000857223, 3.50849152283, 398.1490034082], [0.00000779786, 1.17882681962, 5223.6939198022], [0.0000099025, 5.23268072088, 5884.9268465832], [0.00000753141, 2.53339052847, 5507.5532386674], [0.00000505267, 4.58292599973, 18849.2275499742], [0.00000492392, 4.20505711826, 775.522611324], [0.00000356672, 2.91954114478, 0.0673103028], [0.00000284125, 1.89869240932, 796.2980068164], [0.00000242879, 0.34481445893, 5486.777843175], [0.00000317087, 5.84901948512, 11790.6290886588], [0.00000271112, 0.31486255375, 10977.078804699], [0.00000206217, 4.80646631478, 2544.3144198834], [0.00000205478, 1.86953770281, 5573.1428014331], [0.00000202318, 2.45767790232, 6069.7767545534], [0.00000126225, 1.08295459501, 20.7753954924], [0.00000155516, 0.83306084617, 213.299095438], [0.00000115132, 0.64544911683, 0.9803210682], [0.00000102851, 0.63599845579, 4694.0029547076], [0.00000101724, 4.2667980198, 7.1135470008], [9.9206e-7, 6.20992926918, 2146.1654164752], [0.00000132212, 3.41118292683, 2942.4634232916], [9.7607e-7, 0.68101342359, 155.4203994342], [8.5128e-7, 1.29870764804, 6275.9623029906], [7.4651e-7, 1.755089133, 5088.6288397668], [0.00000101895, 0.97569280312, 15720.8387848784], [8.4711e-7, 3.67080093031, 71430.69561812909], [7.3547e-7, 4.67926633877, 801.8209311238], [7.3874e-7, 3.50319414955, 3154.6870848956], [7.8757e-7, 3.03697458703, 12036.4607348882], [7.9637e-7, 1.80791287082, 17260.1546546904], [8.5803e-7, 5.9832263126, 161000.6857376741], [5.6963e-7, 2.78430458592, 6286.5989683404], [6.1148e-7, 1.81839892984, 7084.8967811152], [6.9627e-7, 0.83297621398, 9437.762934887], [5.6116e-7, 4.38694865354, 14143.4952424306], [6.2449e-7, 3.97763912806, 8827.3902698748], [5.1145e-7, 0.28306832879, 5856.4776591154], [5.5577e-7, 3.47006059924, 6279.5527316424], [4.1036e-7, 5.36817592855, 8429.2412664666], [5.1605e-7, 1.33282739866, 1748.016413067], [5.1992e-7, 0.18914947184, 12139.5535091068], [4.9e-7, 0.48735014197, 1194.4470102246], [3.92e-7, 6.16833020996, 10447.3878396044], [3.557e-7, 1.775968892, 6812.766815086], [3.677e-7, 6.04133863162, 10213.285546211], [3.6596e-7, 2.56957481827, 1059.3819301892], [3.3296e-7, 0.59310278598, 17789.845619785], [3.5954e-7, 1.70875808777, 2352.8661537718], [4.0938e-7, 2.39850938714, 19651.048481098], [3.0047e-7, 2.73975124088, 1349.8674096588], [3.0412e-7, 0.44294464169, 83996.84731811189], [2.3663e-7, 0.48473622521, 8031.0922630584], [2.3574e-7, 2.06528133162, 3340.6124266998], [2.1089e-7, 4.14825468851, 951.7184062506], [2.4738e-7, 0.21484762138, 3.5904286518], [2.5352e-7, 3.16470891653, 4690.4798363586], [2.2823e-7, 5.22195230819, 4705.7323075436], [2.1419e-7, 1.42563910473, 16730.4636895958], [2.1891e-7, 5.55594302779, 553.5694028424], [1.7481e-7, 4.56052900312, 135.0650800354], [1.9927e-7, 5.22209149316, 12168.0026965746], [1.986e-7, 5.77470242235, 6309.3741697912], [2.03e-7, 0.37133792946, 283.8593188652], [1.4421e-7, 4.19315052005, 242.728603974], [1.6225e-7, 5.98837767951, 11769.8536931664], [1.5077e-7, 4.1956716337, 6256.7775301916], [1.9124e-7, 3.82219958698, 23581.2581773176], [1.8888e-7, 5.38626892076, 149854.4001348079], [1.4346e-7, 3.72355084422, 38.0276726358], [1.7898e-7, 2.21490566029, 13367.9726311066], [1.2054e-7, 2.62229602614, 955.5997416086], [1.1287e-7, 0.17739329984, 4164.311989613], [1.3973e-7, 4.40134615007, 6681.2248533996], [1.3621e-7, 1.88934516495, 7632.9432596502], [1.2503e-7, 1.13052412208, 5.5229243074], [1.0498e-7, 5.35909979317, 1592.5960136328], [9.803e-8, 0.99948172646, 11371.7046897582], [9.22e-8, 4.57138585348, 4292.3308329504], [1.0327e-7, 6.19982170609, 6438.4962494256], [1.2003e-7, 1.00351462266, 632.7837393132], [1.0827e-7, 0.32734523824, 103.0927742186], [8.356e-8, 4.53902748706, 25132.3033999656], [1.0005e-7, 6.0291496328, 5746.271337896], [8.409e-8, 3.29946177848, 7234.794256242], [8.006e-8, 5.82145271855, 28.4491874678], [1.0523e-7, 0.93870455544, 11926.2544136688], [7.686e-8, 3.1214364064, 7238.6755916], [9.378e-8, 2.62413793196, 5760.4984318976], [8.127e-8, 6.11227839253, 4732.0306273434], [9.232e-8, 0.48344234496, 522.5774180938], [9.802e-8, 5.24413877132, 27511.4678735372], [7.871e-8, 0.99590133077, 5643.1785636774], [8.123e-8, 6.27053020099, 426.598190876], [9.048e-8, 5.33686323585, 6386.16862421], [8.621e-8, 4.16537179089, 7058.5984613154], [6.297e-8, 4.71723143652, 6836.6452528338], [7.575e-8, 3.97381357237, 11499.6562227928], [7.756e-8, 2.95728422442, 23013.5395395872], [7.314e-8, 0.60652522715, 11513.8833167944], [5.955e-8, 2.87641047954, 6283.14316029419], [6.534e-8, 5.79046406784, 18073.7049386502], [7.188e-8, 3.99831461988, 74.7815985673], [7.346e-8, 4.38582423903, 316.3918696566], [5.413e-8, 5.39199023275, 419.4846438752], [5.127e-8, 2.36059551778, 10973.55568635], [7.056e-8, 0.32258442532, 263.0839233728], [6.624e-8, 3.6647416584, 17298.1823273262], [6.762e-8, 5.91131766896, 90955.5516944961], [4.938e-8, 5.73672172371, 9917.6968745098], [5.547e-8, 2.45152589382, 12352.8526045448], [5.958e-8, 3.3205134466, 6283.0085396886], [4.471e-8, 2.06386138131, 7079.3738568078], [6.153e-8, 1.45823347458, 233141.3144043615], [4.348e-8, 4.42338625285, 5216.5803728014], [6.124e-8, 1.07494838623, 19804.8272915828], [4.488e-8, 3.65285033073, 206.1855484372], [4.02e-8, 0.83995823171, 20.3553193988], [5.188e-8, 4.06503864016, 6208.2942514241], [5.307e-8, 0.38216728132, 31441.6775697568], [3.785e-8, 2.34369213733, 3.881335358], [4.497e-8, 3.27230792447, 11015.1064773348], [4.132e-8, 0.92129851256, 3738.761430108], [3.521e-8, 5.9784480361, 3894.1818295422], [4.215e-8, 1.90601721876, 245.8316462294], [3.701e-8, 5.03067498875, 536.8045120954], [3.866e-8, 1.82632980909, 11856.2186514245], [3.652e-8, 1.01840564429, 16200.7727245012], [3.39e-8, 0.97784870142, 8635.9420037632], [3.737e-8, 2.9537891957, 3128.3887650958], [3.507e-8, 3.71291946317, 6290.1893969922], [3.086e-8, 3.64646921512, 10.6366653498], [3.397e-8, 1.10589356888, 14712.317116458], [3.334e-8, 0.83684903082, 6496.3749454294], [2.805e-8, 2.58503711584, 14314.1681130498], [3.65e-8, 1.08344142571, 88860.05707098669], [3.388e-8, 3.20182380957, 5120.6011455836], [3.252e-8, 3.47857474229, 6133.5126528568], [2.553e-8, 3.9486902726, 1990.745017041], [3.52e-8, 2.05559692878, 244287.60000722768], [2.565e-8, 1.56072409371, 23543.23050468179], [2.621e-8, 3.85639359951, 266.6070417218], [2.954e-8, 3.39692614359, 9225.539273283], [2.876e-8, 6.02633318445, 154717.6098876827], [2.395e-8, 1.16130078696, 10984.1923516998], [3.161e-8, 1.32798862116, 10873.9860304804], [3.163e-8, 5.08946546862, 21228.3920235458], [2.361e-8, 4.27212461943, 6040.3472460174], [3.03e-8, 1.80210001168, 35371.8872659764], [2.343e-8, 3.57688971514, 10969.9652576982], [2.618e-8, 2.57870151918, 22483.84857449259], [2.113e-8, 3.71711179417, 65147.6197681377], [2.019e-8, 0.81393923319, 170.6728706192], [2.003e-8, 0.38091017375, 6172.869528772], [2.506e-8, 3.74378169126, 10575.4066829418], [2.381e-8, 0.10581361289, 7.046236698], [1.949e-8, 4.86892513469, 36.0278666774], [2.074e-8, 4.22802468213, 5650.2921106782], [1.924e-8, 5.59460549844, 6282.0955289232], [1.949e-8, 1.06999605576, 5230.807466803], [1.988e-8, 5.19734705445, 6262.300454499], [1.887e-8, 3.74365662683, 23.8784377478], [1.787e-8, 1.25929659066, 12559.038152982], [1.883e-8, 1.90364058477, 15.252471185], [1.816e-8, 3.68083794819, 15110.4661198662], [1.701e-8, 4.41109562589, 110.2063212194], [1.99e-8, 3.93295788548, 6206.8097787158], [2.103e-8, 0.75354936681, 13521.7514415914], [1.774e-8, 0.48750515837, 1551.045222648], [1.882e-8, 0.86685462305, 22003.9146348698], [1.924e-8, 1.22901099088, 709.9330485583], [2.073e-8, 4.62531597856, 6037.244203762], [1.924e-8, 0.60231842492, 6284.0561710596], [1.596e-8, 3.98332879712, 13916.0191096416], [1.664e-8, 4.41947015623, 8662.240323563], [1.971e-8, 1.04560686192, 18209.33026366019], [1.942e-8, 4.31335979989, 6244.9428143536], [1.476e-8, 0.93274523818, 2379.1644735716], [1.81e-8, 0.49112137707, 1.4844727083], [1.346e-8, 1.51574753411, 4136.9104335162], [1.528e-8, 5.61833568587, 6127.6554505572], [1.791e-8, 3.22191142746, 39302.096962196], [1.747e-8, 3.05595292589, 18319.5365848796], [1.432e-8, 4.51123984264, 20426.571092422], [1.695e-8, 0.22049418623, 25158.6017197654], [1.242e-8, 4.46665354536, 17256.6315363414], [1.463e-8, 4.69248613506, 14945.3161735544], [1.205e-8, 1.86911906771, 4590.910180489], [1.19e-8, 2.74169967367, 12569.6748183318], [1.222e-8, 5.18120087481, 5333.9002410216], [1.39e-8, 5.42888623322, 143571.32428481648], [1.473e-8, 1.70487100866, 11712.9553182308], [1.362e-8, 2.61069503292, 6062.6632075526], [1.148e-8, 6.0300843061, 3634.6210245184], [1.198e-8, 5.15296117339, 10177.2576795336], [1.266e-8, 0.11422490557, 18422.62935909819], [1.411e-8, 1.09910890045, 3496.032826134], [1.349e-8, 2.99804623019, 17654.7805397496], [1.253e-8, 2.79844902576, 167283.7615876655], [1.311e-8, 1.609410743, 5481.2549188676], [1.079e-8, 6.20304501787, 3.2863574178], [1.181e-8, 1.20653777627, 131.5419616864], [1.254e-8, 5.45103277799, 6076.8903015542], [1.036e-8, 2.32136959491, 7342.4577801806], [1.117e-8, 0.38842340979, 949.1756089698], [9.66e-9, 3.18352079941, 11087.2851259184], [1.171e-8, 3.39635167732, 12562.6285816338], [1.121e-8, 0.72631814699, 220.4126424388], [1.024e-8, 2.19381113265, 11403.676995575], [8.88e-9, 3.91167196431, 4686.8894077068], [9.1e-9, 1.98802695087, 735.8765135318], [8.23e-9, 0.48822202854, 24072.9214697764], [1.096e-8, 6.17377835617, 5436.9930152402], [9.08e-9, 0.44959148878, 7477.522860216], [9.74e-9, 1.52996313552, 9623.6882766912], [8.4e-9, 1.79540573407, 5429.8794682394], [7.78e-9, 6.17703744517, 38.1330356378], [7.76e-9, 4.09859968447, 14.2270940016], [1.068e-8, 4.64209577648, 43232.3066584156], [9.54e-9, 1.49985885818, 1162.4747044078], [9.07e-9, 0.86986870809, 10344.2950653858], [9.31e-9, 4.06049877517, 28766.924424484], [7.39e-9, 5.04368192034, 639.897286314], [9.65e-9, 3.44286716197, 1589.0728952838], [7.63e-9, 5.86304776787, 16858.4825329332], [9.53e-9, 4.20801492835, 11190.377900137], [7.08e-9, 1.72432323967, 13095.8426650774], [9.69e-9, 1.64437243011, 29088.811415985], [7.17e-9, 0.16688678895, 11.729352836], [9.62e-9, 3.53101876172, 12416.5885028482], [7.45e-9, 5.77741082302, 12592.4500197826], [6.72e-9, 1.91091228744, 3.9321532631], [6.71e-9, 5.46240758839, 18052.9295431578], [6.75e-9, 6.28311649798, 4535.0594369244], [6.84e-9, 0.39975011401, 5849.3641121146], [7.99e-9, 0.29859056777, 12132.439962106], [7.58e-9, 0.96370719224, 1052.2683831884], [7.82e-9, 5.33875702541, 13517.8701062334], [7.3e-9, 1.70114998543, 17267.26820169119], [7.49e-9, 2.59607005624, 11609.8625440122], [7.34e-9, 2.7842049778, 640.8776073822], [6.88e-9, 5.15097673557, 16496.3613962024], [7.7e-9, 1.62459252416, 4701.1165017084], [6.33e-9, 2.20588443066, 25934.1243310894], [7.6e-9, 4.21317219403, 377.3736079158], [5.84e-9, 2.13420121623, 10557.5941608238], [5.72e-9, 0.24649745829, 9779.1086761254], [5.73e-9, 3.16435264609, 533.2140834436], [6.85e-9, 3.19344289472, 12146.6670561076], [6.75e-9, 0.96179234176, 10454.5013866052], [6.48e-9, 1.46327342554, 6268.8487559898], [5.89e-9, 2.50543543638, 3097.88382272579], [5.51e-9, 5.28106257475, 9388.0059094152], [6.96e-9, 3.6534215555, 4804.209275927], [6.69e-9, 2.5103005926, 2388.8940204492], [5.5e-9, 0.06883090057, 20199.094959633], [6.29e-9, 4.13350997495, 45892.73043315699], [6.78e-9, 6.09190163533, 135.62532501], [5.93e-9, 1.50129499103, 226858.23855437007], [5.42e-9, 3.58582033525, 6148.010769956], [5.99e-9, 6.12058050643, 18875.525869774], [6.82e-9, 5.0221361683, 17253.04110768959], [5.65e-9, 4.29309214275, 11933.3679606696], [4.86e-9, 0.77746204893, 27.4015560968], [5.03e-9, 0.58974557727, 15671.0817594066], [6.16e-9, 4.06539884128, 227.476132789], [5.37e-9, 2.15064382406, 21954.15760939799], [6.69e-9, 6.06995500278, 47162.5163546352], [5.4e-9, 2.83444221432, 5326.7866940208], [4.74e-9, 0.40346826846, 6915.8595893046], [5.32e-9, 5.26131065063, 10988.808157535], [5.82e-9, 3.24533095664, 153.7788104848], [6.41e-9, 3.24711790399, 2107.0345075424], [6.19e-9, 3.08302108547, 33019.0211122046], [4.66e-9, 3.14982369789, 10440.2742926036], [4.66e-9, 0.90708835651, 5966.6839803348], [5.28e-9, 0.8192645447, 813.5502839598], [6.03e-9, 3.81378921927, 316428.22867391503], [5.59e-9, 1.8189498573, 17996.0311682222], [4.37e-9, 2.28631745987, 6303.8512454838], [5.18e-9, 4.86068318058, 20597.2439630412], [4.24e-9, 6.23520018697, 6489.2613984286], [5.18e-9, 6.17617826756, 0.2438174835], [4.04e-9, 5.72804304258, 5642.1982426092], [4.58e-9, 1.34117773914, 6287.0080032545], [5.48e-9, 5.6845445832, 155427.542936241], [5.47e-9, 1.03391472434, 3646.3503773544], [4.28e-9, 4.6980968782, 846.0828347512], [4.13e-9, 6.0252069939, 6279.4854213396], [5.34e-9, 3.03030638223, 66567.48586525429], [3.83e-9, 1.4905558804, 19800.9459562248], [4.11e-9, 5.28384176408, 18451.07854656599], [3.52e-9, 4.68891600525, 4907.3020501456], [4.8e-9, 5.36572651091, 348.924420448], [3.44e-9, 5.89157452889, 6546.1597733642], [3.4e-9, 0.37557440365, 13119.72110282519], [4.34e-9, 4.98417856239, 6702.5604938666], [3.32e-9, 2.6890934443, 29296.6153895786], [4.48e-9, 2.16478480251, 5905.7022420756], [3.44e-9, 2.06546633735, 49.7570254718], [3.15e-9, 1.24023810969, 4061.2192153944], [3.24e-9, 2.30897526929, 5017.508371365], [4.13e-9, 0.17171692945, 6286.6662786432], [4.31e-9, 3.8660110138, 12489.8856287072], [3.49e-9, 4.55372493131, 4933.2084403326], [3.23e-9, 0.41971136084, 10770.8932562618], [3.41e-9, 2.68612860807, 11.0457002639], [3.16e-9, 3.52966641606, 17782.7320727842], [3.15e-9, 5.63357264999, 568.8218740274], [3.4e-9, 3.83571212349, 10660.6869350424], [2.96e-9, 0.62703270489, 20995.3929664494], [4.05e-9, 1.00084965393, 16460.33352952499], [4.14e-9, 1.21998752076, 51092.7260508548], [3.36e-9, 4.71465945215, 6179.9830757728], [3.61e-9, 3.71235613733, 28237.2334593894], [3.27e-9, 1.05606504715, 11919.140866668], [3.27e-9, 6.1422242098, 6254.6266625236], [2.68e-9, 2.47224339737, 664.75604513], [2.69e-9, 1.86210872453, 23141.5583829246], [3.45e-9, 0.93461290184, 6058.7310542895], [3.53e-9, 4.50033650657, 36949.2308084242], [3.44e-9, 6.26166140367, 24356.7807886416], [3e-9, 4.46964001975, 6418.1409300268], [2.6e-9, 4.04967464725, 6525.8044539654], [2.98e-9, 2.20018811054, 156137.47598479927], [2.53e-9, 3.49930797865, 29864.334027309], [2.54e-9, 2.44883530154, 5331.3574437408], [2.96e-9, 0.84341183907, 5729.506447149], [2.41e-9, 2.00721298729, 16737.5772365966], [3.11e-9, 1.23668016336, 6281.5913772831], [3.32e-9, 3.55576945724, 7668.6374249425], [2.36e-9, 2.47437156031, 6245.0481773556], [2.64e-9, 4.43924412283, 12964.300703391], [2.57e-9, 1.79654471948, 11080.1715789176], [2.6e-9, 3.3307759606, 5888.4499649322], [2.85e-9, 0.3088636143, 11823.1616394502], [2.9e-9, 5.70141882483, 77.673770428], [2.55e-9, 4.00939662024, 5881.4037282342], [2.53e-9, 4.73318512715, 16723.350142595], [2.28e-9, 0.95333661324, 5540.0857894588], [2.81e-9, 1.29199646396, 22805.7355659936], [3.19e-9, 1.38633229189, 163096.18036118348], [2.24e-9, 1.65156322696, 10027.9031957292], [2.26e-9, 0.34125379653, 17796.9591667858], [2.36e-9, 4.19817431922, 19.66976089979], [2.81e-9, 4.14114899916, 12539.853380183], [2.75e-9, 5.50306930248, 32.5325507914], [2.23e-9, 5.23334210294, 56.8983749356], [2.17e-9, 6.08598789777, 6805.6532680852], [2.28e-9, 5.17114391778, 11720.0688652316], [2.74e-9, 4.50716805713, 6016.4688082696], [2.45e-9, 3.96486270306, 22.7752014508], [2.2e-9, 4.7207808197, 6.62855890001], [2.07e-9, 5.71701403951, 41.5507909848], [2.04e-9, 3.9122741125, 2699.7348193176], [2.09e-9, 0.86881969024, 6321.1035226272], [2e-9, 2.11984442601, 4274.5183108324], [2e-9, 5.39839888151, 6019.9919266186], [2.09e-9, 5.67606291663, 11293.4706743556], [2.52e-9, 1.6496572935, 9380.9596727172], [2.75e-9, 5.04826903506, 73.297125859], [2.08e-9, 1.88207277133, 11300.5842213564], [2.06e-9, 5.0728488933, 6277.552925684], [2.72e-9, 0.74640924904, 1975.492545856], [1.99e-9, 3.30813142103, 22743.4093795164], [2.69e-9, 4.48560812155, 64471.99124174489], [1.92e-9, 2.17463565107, 5863.5912061162], [2.28e-9, 5.85373115869, 128.0188433374], [2.61e-9, 2.64321183295, 55022.9357470744], [1.96e-9, 2.4853762232, 16062.1845261168], [1.87e-9, 1.3189176028, 29826.3063546732], [2.2e-9, 5.75012110079, 29.429508536], [1.87e-9, 4.03230554718, 467.9649903544], [2e-9, 5.60555262896, 1066.49547719], [2.31e-9, 1.09802712785, 12341.8069042809], [1.98e-9, 0.29474229005, 149.5631971346], [2.49e-9, 5.1047702317, 7875.6718636242], [1.79e-9, 0.87066197995, 12721.572099417], [2.03e-9, 1.56914310573, 28286.9904848612], [1.98e-9, 3.54061588502, 30.914125635], [1.71e-9, 3.45366018621, 5327.4761083828], [1.83e-9, 0.72325421604, 6272.0301497275], [2.16e-9, 2.97175184412, 19402.7969528166], [1.68e-9, 2.51559879907, 23937.856389741], [1.95e-9, 0.09045393425, 156.4007205024], [2.16e-9, 0.42162375972, 23539.7073863328], [1.89e-9, 0.37542530191, 9814.6041002912], [2.07e-9, 2.01752547259, 238004.5241572363], [2.18e-9, 2.36835893645, 16627.3709153772], [1.66e-9, 4.23182960518, 16840.67001081519], [2e-9, 2.02153258098, 16097.6799502826], [1.69e-9, 0.91318727, 95.9792272178], [2.11e-9, 5.73370637657, 151.8972810852], [2.04e-9, 0.42643085174, 515.463871093], [2.12e-9, 3.00223140894, 12043.574281889], [1.92e-9, 5.46153589821, 6379.0550772092], [1.6e-9, 6.23798383332, 202.2533951741], [2.15e-9, 0.20889073407, 5621.8429232104], [1.5e-9, 3.12999753018, 799.8211251654], [1.87e-9, 2.12345787867, 491.6632924588], [1.92e-9, 1.33928820063, 394.6258850592], [1.49e-9, 2.65697593276, 21.335640467], [1.46e-9, 5.58021191726, 412.3710968744], [1.56e-9, 3.7565767638, 12323.4230960088], [1.43e-9, 3.28248547724, 29.8214381488], [1.44e-9, 1.07862546598, 1265.5674786264], [1.48e-9, 0.2338663109, 10021.8372800994], [1.64e-9, 0.94288727597, 14919.0178537546], [1.93e-9, 5.92751083827, 40879.4405046438], [1.4e-9, 4.97612440269, 158.9435177832], [1.48e-9, 2.61651818006, 17157.0618804718], [1.4e-9, 3.66947933935, 26084.0218062162], [1.47e-9, 5.09968173403, 661.232926781], [1.47e-9, 1.36976712162, 4171.4255366138], [1.34e-9, 4.79432636012, 111.1866422876], [1.4e-9, 1.27748013377, 107.6635239386], [1.71e-9, 2.77586207403, 26735.9452622132], [1.83e-9, 5.43418358741, 369.6998159404], [1.34e-9, 3.09132862833, 17.812522118], [1.32e-9, 3.05633896779, 22490.9621214934], [1.81e-9, 4.22950689891, 966.9708774356], [1.66e-9, 3.67660435776, 15508.6151232744], [1.52e-9, 5.28885813387, 12669.2444742014], [1.5e-9, 5.86819430895, 97238.62754448749], [1.45e-9, 5.07330784304, 87.30820453981], [1.33e-9, 5.65471067133, 31.9723058168], [1.24e-9, 2.83326216907, 12566.2190102856], [1.4e-9, 5.84212721453, 22476.73502749179], [1.34e-9, 3.12858101887, 32217.2001810808], [1.37e-9, 0.86487461904, 9924.8104215106], [1.72e-9, 1.98369595114, 174242.4659640497], [1.7e-9, 4.41115280254, 327574.51427678124], [1.28e-9, 4.49087631612, 31415.379249957], [1.51e-9, 0.46542092001, 39609.6545831656], [1.53e-9, 3.78801830344, 17363.24742890899], [1.65e-9, 5.31654110459, 16943.7627850338], [1.65e-9, 4.06747587817, 58953.145443294], [1.18e-9, 0.63846333239, 6.0659156298], [1.59e-9, 0.86086959274, 221995.02880149524], [1.19e-9, 5.96432932413, 1385.8952763362], [1.14e-9, 5.16516114595, 25685.872802808], [1.12e-9, 4.92889233335, 56.8032621698], [1.19e-9, 2.40626699328, 18635.9284545362], [1.15e-9, 0.23374479051, 418.9243989006], [1.13e-9, 2.7938757674, 6272.4391846416], [1.22e-9, 0.936940724, 24492.40611365159], [1.33e-9, 4.87155573413, 22345.2603761082], [1.13e-9, 3.80362889046, 6293.7125153412], [1.3e-9, 3.72996018683, 12573.2652469836], [1.07e-9, 3.40227152756, 21393.5419698576], [1.22e-9, 1.00385670948, 95143.1329209781], [1.4e-9, 1.094130757, 44809.6502008634], [1.12e-9, 6.05462382871, 433.7117378768], [1.23e-9, 4.55640196386, 239424.39025435288], [1.04e-9, 1.54931540602, 127.9515330346], [1.11e-9, 3.04186517428, 8982.810669309], [1.02e-9, 4.12448497391, 15664.03552270859], [1.07e-9, 4.67919356465, 77690.75950573849], [1.18e-9, 4.5232017012, 19004.6479494084], [1.07e-9, 5.71774478555, 77736.78343050249], [1.03e-9, 4.79332126649, 33794.5437235286], [1.43e-9, 1.81201813018, 4214.0690150848], [1.02e-9, 3.7581778657, 58864.5439181463], [1.25e-9, 1.14419195615, 625.6701923124], [1.24e-9, 3.27736513892, 12566.08438968], [1.1e-9, 1.08705709966, 2787.0430238574], [1.02e-9, 4.75119578149, 12242.6462833254], [1.01e-9, 4.91289409429, 401.6721217572], [1.38e-9, 2.89578979744, 9411.4646150872], [1.29e-9, 1.23516042371, 12029.3471878874], [1.38e-9, 2.45654707076, 7576.560073574], [9.8e-10, 5.4477176502, 29026.48522950779], [1.34e-9, 1.43105174912, 86464.6133168312], [1.08e-9, 0.9898977494, 5636.0650166766], [1.17e-9, 5.17362847134, 34520.3093093808], [9.7e-10, 3.34717130592, 16310.9790457206], [1.07e-9, 2.94547931851, 24602.61243487099], [9.8e-10, 4.37041908717, 34513.2630726828], [1.25e-9, 2.72182830814, 24065.80792277559], [1.11e-9, 0.58899131543, 6303.4311693902], [1.02e-9, 0.66938025772, 10239.5838660108], [1.19e-9, 1.21666517886, 1478.8665740644], [1.11e-9, 1.04321934681, 16522.6597160022], [9.4e-10, 4.31076339857, 26880.3198130326], [9.8e-10, 4.14248433763, 6599.467719648], [9.5e-10, 2.89807657534, 34911.412076091], [9.7e-10, 0.89642320201, 71980.63357473118], [9.5e-10, 0.65717727948, 6288.5987742988], [1.16e-9, 4.19967201116, 206.7007372966], [9.5e-10, 1.78315464297, 18139.2945014159], [9.9e-10, 1.37437847718, 1039.0266107904], [1.26e-9, 3.21642544972, 305281.9430710488], [9.4e-10, 0.6899503186, 7834.1210726394], [9.5e-10, 5.58111421744, 3104.9300594238], [1.08e-9, 0.52696637156, 276.7457718644], [1.24e-9, 3.43899862683, 172146.9713405403], [8.7e-10, 1.18764938806, 18842.11400297339], [8.7e-10, 0.09094166389, 15141.390794312], [1.08e-9, 1.03363414379, 82576.9812209953], [1.19e-9, 2.86729109648, 90394.82301305079], [1.04e-9, 3.39218586218, 290.972865866], [9.4e-10, 5.68284937444, 32367.0976562076], [1.17e-9, 0.78475956902, 83286.91426955358], [1.05e-9, 3.96551057233, 6357.8574485587], [9.4e-10, 4.03443174853, 13341.6743113068], [9.6e-10, 0.92742567538, 1062.9050485382], [8.9e-10, 4.45371820659, 792.7748884674], [8.7e-10, 0.40013481685, 90279.92316810328], [1.13e-9, 2.48165313368, 48739.859897083], [8.7e-10, 3.43122851097, 27707.5424942948], [1.01e-9, 5.32081603011, 2301.58581590939], [8.4e-10, 0.67020912458, 28628.3362260996], [8.2e-10, 0.87060089842, 10241.2022911672], [8.6e-10, 4.6206479229, 36147.4098773004], [8e-10, 4.77649625396, 6819.8803620868], [9.5e-10, 2.87032913492, 23020.65308658799], [1.07e-9, 5.77864921649, 34115.1140692746], [1.1e-9, 3.32898859416, 72140.6286666874], [8.7e-10, 4.40657711727, 142.1786270362], [1.03e-9, 4.2250672681, 30666.1549584328], [8.2e-10, 3.89404392552, 5547.1993364596], [1.09e-9, 1.94546065204, 24279.10701821359], [8.7e-10, 4.32472045435, 742.9900605326], [1.07e-9, 4.91580912547, 277.0349937414], [8.8e-10, 2.10180817713, 26482.1708096244], [8.6e-10, 4.01895021483, 12491.3701014155], [1.06e-9, 5.49092372854, 62883.3551395136], [8e-10, 6.1978570495, 6709.6740408674], [1.05e-9, 2.44166529175, 6298.3283211764], [8.3e-10, 4.90662164029, 51.28033786241], [7.4e-10, 2.34622575625, 7018.9523635232], [7.8e-10, 6.06947270265, 148434.53403769128], [7.9e-10, 3.03048221644, 838.9692877504], [7.3e-10, 3.05008665738, 567.7186377304], [1.02e-9, 3.59223815483, 22380.755800274], [8.4e-10, 0.46604373274, 45.1412196366], [9.2e-10, 4.12917744733, 18216.443810661], [9.1e-10, 0.49382398887, 6453.7487206106], [7.3e-10, 1.72446569088, 21424.4666443034], [6.9e-10, 1.4937267773, 21548.9623692918], [6.9e-10, 4.73181018058, 8858.3149443206], [7.7e-10, 0.47683782532, 11520.9968637952], [7.8e-10, 5.4394263099, 15265.8865193004], [7.7e-10, 2.53773750372, 76.2660712756], [6.9e-10, 2.53932635192, 9910.583327509], [7.5e-10, 0.1559472921, 23006.42599258639], [7.8e-10, 2.41004950269, 6393.2821712108], [6.7e-10, 5.05152846816, 57375.8019008462], [7.7e-10, 3.9107560486, 24383.0791084414], [6.7e-10, 0.78239147387, 12779.4507954208], [7.1e-10, 1.24817900687, 10419.9862835076], [6.7e-10, 5.7785122776, 6311.5250374592], [6.1e-10, 2.66705754411, 18852.7506683232], [7.9e-10, 1.89137330427, 6528.9074962208], [8.4e-10, 5.11523704221, 50317.2034395308], [5.9e-10, 3.38290426621, 35707.7100829074], [6.5e-10, 4.66767908854, 26709.6469424134], [7.9e-10, 5.59773848156, 71960.38658322369], [6.1e-10, 3.30733768968, 18845.7044316252], [5.7e-10, 3.90831298022, 5999.2165311262], [5.8e-10, 3.92572820333, 30348.883772767], [6.1e-10, 0.05695045822, 7856.89627409019], [6.1e-10, 5.63297960691, 7863.9425107882], [6.8e-10, 2.53986117507, 20452.8694122218], [5.3e-10, 5.44021645443, 32370.9789915656], [5.9e-10, 4.95695131145, 11925.2740926006], [5.9e-10, 5.34668243273, 137288.2484348251], [5.6e-10, 4.05779957425, 17892.93839400359], [5.3e-10, 3.94182462468, 18624.8827542723], [4.9e-10, 2.11782803206, 22594.05489571199], [6.2e-10, 2.47154086715, 12345.739057544], [4.9e-10, 5.7659693738, 18606.4989460002], [5.2e-10, 6.20902099741, 21947.1113727], [5.1e-10, 3.13287981215, 33326.5787331742], [5.7e-10, 6.17003357597, 61306.0115970658], [6.4e-10, 5.66596451842, 34596.3646546524], [6.6e-10, 3.922623355, 69853.3520756813], [5.3e-10, 5.51119362049, 77710.24834977149], [5.3e-10, 4.88573986965, 77717.29458646949], [4.8e-10, 2.71399112516, 20760.4270331914], [4.6e-10, 6.08376164442, 29822.7832363242], [5.2e-10, 0.3139748138, 37724.7534197482], [4.5e-10, 5.53587248663, 6262.7205305926], [5.9e-10, 2.45437896854, 69166.430989505], [6e-10, 5.24261569842, 56600.2792895222], [5.1e-10, 6.15794342172, 11616.976091013], [6e-10, 1.74758109828, 44034.1275895394], [4.9e-10, 5.08973141046, 33990.6183442862], [4.4e-10, 3.28270864884, 29424.634232916], [5.2e-10, 5.34866947943, 28313.288804661], [5.9e-10, 2.12384971916, 36173.7081971002], [5e-10, 0.46480931695, 25287.7237993998], [4.4e-10, 2.0550351721, 63658.8777508376], [4.4e-10, 1.71009200258, 13362.4497067992], [4.1e-10, 3.91721318316, 6279.1945146334], [4.2e-10, 1.52106001448, 23550.34405168259], [4.2e-10, 3.10938258068, 84672.47584450469], [4.1e-10, 3.78863023321, 35050.00027447539], [4.2e-10, 5.57543459263, 38500.2760310722], [4e-10, 5.55145719363, 12565.1713789146], [5.4e-10, 0.889354921, 50290.905119731], [5.5e-10, 2.50268487636, 77828.671313068], [5.4e-10, 4.16257918787, 22910.44676536859], [4.1e-10, 2.32141215064, 6286.9571853494], [4.5e-10, 3.18590576311, 45585.1728121874], [4.5e-10, 2.24348941683, 23646.32327890039], [4.3e-10, 3.8789211095, 6549.6828917132], [4.8e-10, 2.11364139445, 31570.7996493912], [4.3e-10, 5.55099558987, 12359.9661515456], [4.1e-10, 4.88191569433, 23536.11695768099], [4.9e-10, 2.44790922235, 13613.804277336], [4.7e-10, 3.5818169391, 4797.0957289262]],
    "1": [[6283.0758499914, 0, 0], [0.00206058863, 2.67823455808, 6283.0758499914], [0.00004303419, 2.63512233481, 12566.1516999828], [0.00000425264, 1.59046982018, 3.523118349], [0.00000109017, 2.96631010675, 1577.3435424478], [9.3479e-7, 2.59211109542, 18849.2275499742], [0.00000119305, 5.79555765566, 26.2983197998], [7.2121e-7, 1.13840581212, 529.6909650946], [6.7784e-7, 1.87453300345, 398.1490034082], [6.735e-7, 4.40932832004, 5507.5532386674], [5.9045e-7, 2.88815790631, 5223.6939198022], [5.5976e-7, 2.17471740035, 155.4203994342], [4.5411e-7, 0.39799502896, 796.2980068164], [3.6298e-7, 0.46875437227, 775.522611324], [2.8962e-7, 2.64732254645, 7.1135470008], [1.9097e-7, 1.84628376049, 5486.777843175], [2.0844e-7, 5.34138275149, 0.9803210682], [1.8508e-7, 4.96855179468, 213.299095438], [1.6233e-7, 0.03216587315, 2544.3144198834], [1.7293e-7, 2.9911676063, 6275.9623029906], [1.5832e-7, 1.43049301283, 2146.1654164752], [1.4608e-7, 1.2046979369, 10977.078804699], [1.1877e-7, 3.25805082007, 5088.6288397668], [1.1514e-7, 2.07502080082, 4694.0029547076], [9.721e-8, 4.2392586526, 1349.8674096588], [9.969e-8, 1.30263423409, 6286.5989683404], [9.452e-8, 2.69956827011, 242.728603974], [1.2461e-7, 2.83432282119, 1748.016413067], [1.1808e-7, 5.27379760438, 1194.4470102246], [8.577e-8, 5.6447608598, 951.7184062506], [1.0641e-7, 0.76614722966, 553.5694028424], [7.576e-8, 5.30056172859, 2352.8661537718], [5.764e-8, 1.77228445837, 1059.3819301892], [6.385e-8, 2.65034514038, 9437.762934887], [5.223e-8, 5.66135782131, 71430.69561812909], [5.315e-8, 0.91110018969, 3154.6870848956], [6.101e-8, 4.66633726278, 4690.4798363586], [4.335e-8, 0.23934560382, 6812.766815086], [5.041e-8, 1.42489704722, 6438.4962494256], [4.259e-8, 0.77355543889, 10447.3878396044], [5.2e-8, 1.85528830215, 801.8209311238], [3.744e-8, 2.00119905572, 8031.0922630584], [3.553e-8, 2.42789590229, 14143.4952424306], [3.372e-8, 3.86210786421, 1592.5960136328], [3.38e-8, 0.88545388924, 12036.4607348882], [3.196e-8, 3.19713328141, 4705.7323075436], [3.221e-8, 0.6160104899, 8429.2412664666], [4.132e-8, 5.23992584671, 7084.8967811152], [2.97e-8, 6.07029819073, 4292.3308329504], [2.9e-8, 2.32464208411, 20.3553193988], [3.504e-8, 4.79976712702, 6279.5527316424], [2.95e-8, 1.43108874817, 5746.271337896], [2.697e-8, 4.80365209201, 7234.794256242], [2.531e-8, 6.22289990904, 6836.6452528338], [2.745e-8, 0.93466065396, 5760.4984318976], [3.25e-8, 3.39951915286, 7632.9432596502], [2.278e-8, 5.00339914806, 17789.845619785], [2.076e-8, 3.95551309007, 10213.285546211], [2.061e-8, 2.2240771919, 5856.4776591154], [2.252e-8, 5.67166717686, 11499.6562227928], [2.148e-8, 5.20182663314, 11513.8833167944], [1.886e-8, 0.53198539077, 3340.6124266998], [1.875e-8, 4.73511969924, 83996.84731811189], [2.06e-8, 2.54985307819, 25132.3033999656], [1.794e-8, 1.47435300254, 4164.311989613], [1.778e-8, 3.02473091781, 5.5229243074], [2.036e-8, 0.90908165072, 6256.7775301916], [2.064e-8, 2.27051326957, 522.5774180938], [1.773e-8, 3.03090500693, 5753.3848848968], [1.569e-8, 6.12406216872, 5216.5803728014], [1.59e-8, 4.63713748247, 3.2863574178], [1.533e-8, 4.20305593883, 13367.9726311066], [1.427e-8, 1.19087535126, 3894.1818295422], [1.376e-8, 4.24955891338, 426.598190876], [1.375e-8, 3.09301252193, 135.0650800354], [1.308e-8, 3.0849213889, 5643.1785636774], [1.34e-8, 5.76513167968, 6040.3472460174], [1.25e-8, 3.07748196332, 11926.2544136688], [1.551e-8, 3.07664090662, 6681.2248533996], [1.148e-8, 3.24144202282, 12168.0026965746], [1.268e-8, 2.09201189992, 6290.1893969922], [1.248e-8, 3.44506939791, 536.8045120954], [1.118e-8, 2.31830078762, 16730.4636895958], [1.105e-8, 5.31966001019, 23.8784377478], [1.012e-8, 3.74953487087, 7860.4193924392], [1.025e-8, 2.4468377161, 1990.745017041], [9.62e-9, 0.81771017882, 3.881335358], [9.11e-9, 0.41724352112, 7079.3738568078], [1.091e-8, 3.98233608618, 11506.7697697936], [9.57e-9, 4.07671436153, 6127.6554505572], [8.35e-9, 5.28348689371, 11790.6290886588], [8.02e-9, 3.88779080089, 10973.55568635], [7.73e-9, 2.41044394817, 1589.0728952838], [7.58e-9, 1.30034365873, 103.0927742186], [7.49e-9, 4.96281442361, 6496.3749454294], [7.65e-9, 3.36312388424, 36.0278666774], [9.15e-9, 5.41549763095, 206.1855484372], [7.76e-9, 2.57589060224, 11371.7046897582], [7.72e-9, 3.98363364977, 955.5997416086], [7.49e-9, 5.17900231417, 10969.9652576982], [8.06e-9, 0.34226117299, 9917.6968745098], [7.28e-9, 5.20962563787, 38.0276726358], [6.85e-9, 2.77592961854, 20.7753954924], [6.36e-9, 4.28242193632, 28.4491874678], [6.08e-9, 5.63278510221, 10984.1923516998], [7.04e-9, 5.60739437733, 3738.761430108], [6.85e-9, 0.38876148682, 15.252471185], [6.01e-9, 0.73489602442, 419.4846438752], [7.16e-9, 2.65286869987, 6309.3741697912], [5.84e-9, 5.54508741381, 17298.1823273262], [6.28e-9, 1.11733054796, 7058.5984613154], [6.88e-9, 2.59684132401, 3496.032826134], [4.85e-9, 0.44470714066, 12352.8526045448], [5.62e-9, 2.82510352358, 3930.2096962196], [5.97e-9, 5.27675789973, 10575.4066829418], [5.83e-9, 3.1893153986, 4732.0306273434], [5.26e-9, 5.01737745304, 5884.9268465832], [5.4e-9, 1.29182747488, 640.8776073822], [4.81e-9, 5.49721461067, 5230.807466803], [4.06e-9, 5.21253018484, 220.4126424388], [3.95e-9, 1.87489912123, 16200.7727245012], [3.67e-9, 0.88533542945, 6283.14316029419], [3.69e-9, 3.84778078192, 18073.7049386502], [3.79e-9, 0.37991716505, 10177.2576795336], [3.56e-9, 3.84152910109, 11712.9553182308], [3.74e-9, 5.01577520608, 7.046236698], [3.81e-9, 4.30250406634, 6062.6632075526], [4.71e-9, 0.86388942467, 6069.7767545534], [3.67e-9, 1.3294383993, 6283.0085396886], [4.6e-9, 5.19667219582, 6284.0561710596], [3.33e-9, 5.54250425107, 4686.8894077068], [3.41e-9, 4.36524495363, 7238.6755916], [3.36e-9, 4.00205876835, 3097.88382272579], [3.59e-9, 6.22679790284, 245.8316462294], [3.07e-9, 2.35299010924, 170.6728706192], [3.43e-9, 3.77164927142, 6076.8903015542], [2.96e-9, 5.44138799494, 17260.1546546904], [3.28e-9, 0.13817705132, 11015.1064773348], [2.69e-9, 1.13308244952, 12569.6748183318], [2.63e-9, 0.0055073751, 4136.9104335162], [2.82e-9, 5.04399588559, 7477.522860216], [2.8e-9, 3.13703211405, 12559.038152982], [2.59e-9, 0.93882269388, 5642.1982426092], [2.92e-9, 1.98426314297, 12132.439962106], [2.47e-9, 3.84244798673, 5429.8794682394], [3.19e-9, 5.0417014879, 90617.7374312997], [2.45e-9, 5.70469737024, 65147.6197681377], [3.18e-9, 1.35581968834, 78051.5857313169], [2.41e-9, 0.99469787369, 3634.6210245184], [2.46e-9, 3.06168069393, 110.2063212194], [2.39e-9, 6.11854529589, 11856.2186514245], [2.67e-9, 0.65297608414, 21228.3920235458], [2.62e-9, 1.51070507866, 12146.6670561076], [2.3e-9, 1.75923794017, 9779.1086761254], [2.23e-9, 2.00967043606, 6172.869528772], [2.46e-9, 1.10411690861, 6282.0955289232], [2.14e-9, 4.03840492266, 14314.1681130498], [2.12e-9, 2.13695623228, 5849.3641121146], [2.07e-9, 3.07724246401, 11.729352836], [2.07e-9, 6.10303325026, 23543.23050468179], [2.66e-9, 1.00720021877, 2388.8940204492], [2.17e-9, 6.27840212312, 17267.26820169119], [2.31e-9, 5.37372783468, 13916.0191096416], [2.04e-9, 2.34615348695, 266.6070417218], [1.95e-9, 5.55015549753, 6133.5126528568], [2.03e-9, 4.65616806503, 24072.9214697764], [1.88e-9, 2.52682282169, 6525.8044539654], [1.77e-9, 1.73426919199, 154717.6098876827], [1.87e-9, 4.76501318048, 4535.0594369244], [1.86e-9, 4.63080493407, 10440.2742926036], [1.83e-9, 3.20060840641, 8635.9420037632], [1.72e-9, 1.45551703877, 9225.539273283], [1.62e-9, 3.30665137166, 639.897286314], [1.68e-9, 2.17671416605, 27.4015560968], [1.6e-9, 1.6816871275, 15110.4661198662], [1.94e-9, 2.79243768345, 7342.4577801806], [1.83e-9, 0.56273524797, 13517.8701062334], [1.72e-9, 5.97039514134, 4701.1165017084], [1.79e-9, 3.58450811616, 87.30820453981], [1.52e-9, 2.84070476839, 5650.2921106782], [1.56e-9, 1.07156076421, 18319.5365848796], [1.82e-9, 0.44053620124, 17253.04110768959], [1.42e-9, 1.4629013752, 11087.2851259184], [1.31e-9, 5.40912137746, 2699.7348193176], [1.44e-9, 2.07312089638, 25158.6017197654], [1.47e-9, 6.15107800602, 9623.6882766912], [1.41e-9, 5.55739979498, 10454.5013866052], [1.35e-9, 0.0609812943, 16723.350142595], [1.23e-9, 5.81194797368, 17256.6315363414], [1.24e-9, 2.36269386269, 4933.2084403326], [1.26e-9, 3.47483886466, 22483.84857449259], [1.59e-9, 5.63944722033, 5729.506447149], [1.37e-9, 1.93811728826, 20426.571092422], [1.23e-9, 3.92815962825, 17996.0311682222], [1.48e-9, 3.02542567608, 1551.045222648], [1.21e-9, 0.05537321071, 13095.8426650774], [1.2e-9, 5.91904349732, 6206.8097787158], [1.34e-9, 3.11122937825, 21954.15760939799], [1.19e-9, 5.52143897201, 709.9330485583], [1.22e-9, 3.00840036775, 19800.9459562248], [1.27e-9, 1.37534182407, 14945.3161735544], [1.41e-9, 2.56886299638, 1052.2683831884], [1.23e-9, 2.83671175442, 11919.140866668], [1.18e-9, 0.81918292547, 5331.3574437408], [1.51e-9, 2.68728567951, 11769.8536931664], [1.19e-9, 5.08654046247, 5481.2549188676], [1.13e-9, 4.42675663942, 18422.62935909819], [1.53e-9, 2.46021790779, 11933.3679606696], [1.08e-9, 1.04936452151, 11403.676995575], [1.28e-9, 0.99810456461, 8827.3902698748], [1.44e-9, 2.54869747042, 227.476132789], [1.5e-9, 4.50631437136, 2379.1644735716], [1.09e-9, 0.29269062317, 16737.5772365966], [1.22e-9, 4.23040027813, 29.429508536], [1.11e-9, 5.16970710025, 17782.7320727842], [1.05e-9, 1.61738153441, 13119.72110282519], [1e-9, 3.52204690579, 18052.9295431578], [1.08e-9, 1.08493117155, 16858.4825329332], [1.35e-9, 3.2016061697, 6262.300454499], [1.06e-9, 1.96085069786, 74.7815985673], [1.29e-9, 4.85949366504, 16496.3613962024], [1.1e-9, 2.30605777952, 16460.33352952499], [9.7e-10, 3.5091894021, 5333.9002410216], [9.9e-10, 3.56417337974, 735.8765135318], [9.6e-10, 3.40918487598, 15720.8387848784], [9.4e-10, 5.01601027363, 3128.3887650958], [9.7e-10, 1.65579893894, 533.2140834436], [9.2e-10, 0.89219199493, 29296.6153895786], [1.23e-9, 3.16062062663, 9380.9596727172], [1.02e-9, 1.20493500565, 23020.65308658799], [8.8e-10, 2.21265504437, 12721.572099417], [8.9e-10, 1.5432266957, 20199.094959633], [1.21e-9, 6.19860353182, 9388.0059094152], [8.9e-10, 4.08082274765, 22805.7355659936], [9.8e-10, 1.09176668094, 12043.574281889], [8.6e-10, 1.13649001466, 143571.32428481648], [8.8e-10, 5.96980472191, 107.6635239386], [8.2e-10, 5.01561173481, 22003.9146348698], [9.4e-10, 1.69615700473, 23006.42599258639], [8.1e-10, 3.00664741995, 2118.7638603784], [9.8e-10, 1.39215287161, 8662.240323563], [8e-10, 5.16340988714, 17796.9591667858], [8.2e-10, 5.86893959287, 2787.0430238574], [7.7e-10, 0.80723694712, 167283.7615876655], [9.1e-10, 5.74902425304, 21424.4666443034], [7.6e-10, 5.67183650604, 14.2270940016], [8.1e-10, 6.16619455699, 1039.0266107904], [7.6e-10, 3.21449884756, 111.1866422876], [7.8e-10, 1.37531518377, 21947.1113727], [7.4e-10, 3.58814195051, 11609.8625440122], [7.7e-10, 4.84846488388, 22743.4093795164], [9e-10, 1.48869013606, 15671.0817594066], [8.2e-10, 3.48618398216, 29088.811415985], [7.1e-10, 2.2159156119, 12029.3471878874], [6.9e-10, 1.93625656075, 135.62532501], [7e-10, 2.66552760898, 18875.525869774], [6.9e-10, 5.41478093731, 26735.9452622132], [7.9e-10, 5.15158156951, 12323.4230960088], [7.8e-10, 4.17014063638, 1066.49547719], [6.5e-10, 5.64584720343, 12139.5535091068], [7.1e-10, 3.89804774037, 22779.4372461938], [6.3e-10, 4.53968787714, 8982.810669309], [7.6e-10, 3.29088891716, 2942.4634232916], [6.9e-10, 0.94232113005, 14919.0178537546], [6.3e-10, 4.0918653549, 16062.1845261168], [6.5e-10, 3.34580407184, 51.28033786241], [6.5e-10, 5.75757544877, 52670.0695933026], [5.7e-10, 5.25050277534, 20995.3929664494], [6.1e-10, 1.92290673861, 6805.6532680852], [6.1e-10, 0.08878901558, 13362.4497067992], [7.6e-10, 1.86947679415, 25287.7237993998], [5.6e-10, 4.25396542622, 6709.6740408674], [5.8e-10, 4.79429715781, 6286.3622074092], [7.3e-10, 0.53299090807, 2301.58581590939], [7e-10, 4.31243357502, 19402.7969528166], [6.7e-10, 2.53852336668, 377.3736079158], [5.6e-10, 3.20816844695, 24889.5747959916], [5.4e-10, 5.17336469511, 26084.0218062162], [5.3e-10, 3.17675406016, 18451.07854656599], [5.3e-10, 3.61529270216, 77.673770428], [5.3e-10, 0.45467549335, 30666.1549584328], [5.3e-10, 2.97761644192, 21548.9623692918], [6.1e-10, 0.14805728543, 23013.5395395872], [5.1e-10, 3.32803972907, 56.8983749356], [5.2e-10, 3.41304011355, 23141.5583829246], [5.8e-10, 3.13638677202, 309.2783226558], [5.4e-10, 1.60896548545, 13341.6743113068], [5.3e-10, 5.81426394852, 16193.65917750039], [6.7e-10, 6.27917920454, 22345.2603761082], [5e-10, 0.42577644151, 25685.872802808], [4.8e-10, 0.70204553352, 1162.4747044078], [6.6e-10, 3.64350022359, 15265.8865193004], [5e-10, 5.7438291744, 19.66976089979], [5.4e-10, 1.97277370837, 23581.2581773176], [5.1e-10, 1.23713196525, 12539.853380183], [4.6e-10, 5.41431704639, 33019.0211122046], [4.6e-10, 4.80640843261, 19651.048481098], [5e-10, 1.23847511223, 22476.73502749179], [5.1e-10, 4.91913434178, 12592.4500197826], [4.6e-10, 2.41369976086, 98068.53671630539], [4.5e-10, 3.45227074337, 30774.5016425748], [4.5e-10, 4.39659083856, 433.7117378768], [4.5e-10, 3.71921056816, 18209.33026366019], [4.4e-10, 2.47683925106, 24356.7807886416], [4.9e-10, 2.17835058609, 13521.7514415914], [4.6e-10, 0.26142733448, 11.0457002639], [4.5e-10, 2.46230645202, 51868.2486621788], [4.3e-10, 4.29458463014, 28230.18722269139], [4.8e-10, 0.89551707131, 56600.2792895222], [4.2e-10, 3.63410684699, 4590.910180489], [4.9e-10, 3.17757670967, 6303.8512454838], [4.3e-10, 4.93350349236, 10021.8372800994], [5.2e-10, 3.65410195699, 7872.1487452752], [4.1e-10, 4.82166756935, 10988.808157535], [4e-10, 1.81891629936, 34596.3646546524], [4.3e-10, 1.94164978061, 1903.4368125012], [4.1e-10, 0.74461854136, 23937.856389741], [4.5e-10, 5.4557501753, 60530.4889857418], [5e-10, 5.67355640472, 18216.443810661], [4e-10, 0.04502010161, 38526.574350872], [5.3e-10, 3.64807615995, 11925.2740926006], [4.2e-10, 5.19292937193, 19004.6479494084], [4.1e-10, 0.94309683296, 9924.8104215106], [3.9e-10, 4.61184303844, 95.9792272178], [4.9e-10, 2.05532526216, 12573.2652469836], [4.5e-10, 3.73717824543, 7875.6718636242], [4.3e-10, 1.14078465002, 49.7570254718], [3.9e-10, 1.70539366023, 32217.2001810808], [3.7e-10, 1.29390383811, 310.8407988684], [3.8e-10, 0.9597092595, 664.75604513], [3.9e-10, 0.85957361635, 16522.6597160022], [4e-10, 1.00170796001, 36949.2308084242], [4e-10, 3.78164718776, 55798.4583583984], [3.7e-10, 5.42237070904, 6286.6662786432], [3.6e-10, 1.68167662194, 10344.2950653858], [4e-10, 5.13217319067, 15664.03552270859], [4.9e-10, 3.62741283878, 77713.7714681205], [4.5e-10, 6.15877872538, 28286.9904848612], [3.6e-10, 3.32158458257, 16207.886271502], [3.5e-10, 5.83917764292, 6321.1035226272], [3.6e-10, 1.80784164083, 6279.7894925736], [3.5e-10, 4.60279245362, 28237.2334593894], [3.3e-10, 0.47301775923, 18635.9284545362], [3.5e-10, 4.36571027474, 48739.859897083], [3.1e-10, 3.06828028412, 6819.8803620868], [3.1e-10, 2.4020319848, 28628.3362260996], [3.4e-10, 1.90096411242, 12964.300703391], [2.9e-10, 6.09291010354, 18606.4989460002], [2.8e-10, 3.42046112698, 6288.5987742988], [2.8e-10, 3.437361406, 34115.1140692746], [2.9e-10, 1.48920816078, 6489.2613984286], [2.8e-10, 3.07474749886, 29822.7832363242], [3.8e-10, 2.44608264663, 31415.379249957], [2.8e-10, 2.98392582088, 6277.552925684], [2.7e-10, 5.03556015623, 12779.4507954208], [2.7e-10, 5.40812977287, 26087.9031415742], [3.8e-10, 5.56439937893, 27832.0382192832], [2.6e-10, 3.87685883153, 6262.7205305926], [2.7e-10, 6.1556539284, 28759.81087748319], [2.5e-10, 5.17122153205, 6915.8595893046], [2.7e-10, 4.03132006944, 9910.583327509], [3.3e-10, 3.97763407373, 12410.7313005486], [2.4e-10, 5.31307120044, 29026.48522950779], [2.5e-10, 0.81055213297, 36173.7081971002], [2.4e-10, 1.2870610131, 24491.4257925834], [2.1e-10, 2.02548478742, 28766.924424484], [2.1e-10, 6.07545114034, 18139.2945014159], [2.2e-10, 2.31199937131, 6303.4311693902], [2.3e-10, 1.35235057478, 49515.382508407], [2.3e-10, 2.92765926961, 65236.2212932854], [1.9e-10, 0.03636659763, 29864.334027309], [2e-10, 0.91374066194, 45585.1728121874], [2.1e-10, 4.45003013294, 22490.9621214934], [2.2e-10, 1.97119365888, 34513.2630726828], [2e-10, 4.11682669951, 17157.0618804718], [2.4e-10, 1.40243942415, 14712.317116458], [2.2e-10, 2.19759737115, 31570.7996493912], [2.1e-10, 1.48739821208, 61306.0115970658], [2.5e-10, 5.71465573409, 25934.1243310894]],
    "2": [[0.00008721859, 1.07253635559, 6283.0758499914], [0.0000099099, 3.14159265359, 0], [0.00000294833, 0.43717350256, 12566.1516999828], [2.7338e-7, 0.05295636147, 3.523118349], [1.6333e-7, 5.18820215724, 26.2983197998], [1.5745e-7, 3.68504712183, 155.4203994342], [9.425e-8, 0.29667114694, 18849.2275499742], [8.938e-8, 2.05706319592, 77713.7714681205], [6.94e-8, 0.82691541038, 775.522611324], [5.061e-8, 4.6624323168, 1577.3435424478], [4.06e-8, 1.03067032318, 7.1135470008], [3.464e-8, 5.14021224609, 796.2980068164], [3.172e-8, 6.05479318507, 5507.5532386674], [3.02e-8, 1.19240008524, 242.728603974], [2.885e-8, 6.11705865396, 529.6909650946], [3.809e-8, 3.44043369494, 5573.1428014331], [2.719e-8, 0.30363248164, 398.1490034082], [2.365e-8, 4.37666117992, 5223.6939198022], [2.538e-8, 2.27966434314, 553.5694028424], [2.078e-8, 3.75435095487, 0.9803210682], [1.675e-8, 0.90149951436, 951.7184062506], [1.534e-8, 5.75895831192, 1349.8674096588], [1.224e-8, 2.97285792195, 2146.1654164752], [1.449e-8, 4.36401639552, 1748.016413067], [1.341e-8, 3.72019379666, 1194.4470102246], [1.253e-8, 2.9488872631, 6438.4962494256], [9.99e-9, 5.98665341008, 6286.5989683404], [9.17e-9, 4.79722195184, 5088.6288397668], [8.29e-9, 3.31021398862, 213.299095438], [1.102e-8, 1.27094359244, 161000.6857376741], [7.64e-9, 3.41231607038, 5486.777843175], [1.046e-8, 0.60374190029, 3154.6870848956], [8.87e-9, 5.23364022595, 7084.8967811152], [6.44e-9, 1.59974355582, 2544.3144198834], [6.81e-9, 3.42742947469, 4694.0029547076], [6.06e-9, 2.47688996663, 10977.078804699], [7.06e-9, 6.19369692903, 4690.4798363586], [6.43e-9, 1.98119869589, 801.8209311238], [5.02e-9, 1.44415463861, 6836.6452528338], [4.9e-9, 2.33889753806, 1592.5960136328], [4.58e-9, 1.30867922972, 4292.3308329504], [4.31e-9, 0.03542536476, 7234.794256242], [3.49e-9, 0.98779272263, 6040.3472460174], [3.85e-9, 1.57065592218, 71430.69561812909], [3.71e-9, 3.16149051601, 6309.3741697912], [3.48e-9, 0.64980950594, 1059.3819301892], [4.58e-9, 3.81505682017, 149854.4001348079], [3.02e-9, 1.91723873447, 10447.3878396044], [3.06e-9, 3.55405857884, 8031.0922630584], [3.95e-9, 4.93742673052, 7632.9432596502], [3.14e-9, 3.18058352846, 2352.8661537718], [2.81e-9, 4.41751404023, 9437.762934887], [2.76e-9, 2.71075791682, 3894.1818295422], [2.98e-9, 2.52045757001, 6127.6554505572], [2.72e-9, 0.24370191144, 25132.3033999656], [2.51e-9, 0.55449375765, 6279.5527316424], [2.24e-9, 1.40790249012, 4705.7323075436], [2.58e-9, 5.29510765044, 6812.766815086], [1.78e-9, 0.92636669742, 1990.745017041], [2.17e-9, 0.68543630022, 6256.7775301916], [1.54e-9, 0.77808632062, 14143.4952424306], [1.5e-9, 2.40636982736, 426.598190876], [1.96e-9, 6.06877865012, 640.8776073822], [1.37e-9, 2.21947617717, 8429.2412664666], [1.27e-9, 5.47380312768, 12036.4607348882], [1.21e-9, 3.32740512021, 17789.845619785], [1.23e-9, 2.16004509785, 10213.285546211], [1.16e-9, 0.49705139709, 7058.5984613154], [1.38e-9, 2.36181661472, 11506.7697697936], [1.01e-9, 0.86299995919, 6290.1893969922], [1.18e-9, 5.82317768355, 7860.4193924392], [9.2e-10, 5.11639978593, 7079.3738568078], [1.25e-9, 2.65424538513, 88860.05707098669], [8.8e-10, 4.3118823616, 83996.84731811189], [8.4e-10, 3.57682769713, 16730.4636895958], [9.7e-10, 5.58011309774, 13367.9726311066], [1.02e-9, 2.05853060226, 87.30820453981], [8e-10, 4.73827128421, 11926.2544136688], [8e-10, 5.41344057121, 10973.55568635], [1.06e-9, 4.10978997399, 3496.032826134], [7.5e-10, 4.89166898876, 5643.1785636774], [1e-9, 3.62645659087, 244287.60000722768], [9.6e-10, 1.39443577787, 6681.2248533996], [6.9e-10, 1.88399189965, 10177.2576795336], [8.7e-10, 0.40842153208, 11015.1064773348], [6.6e-10, 0.99444831932, 6525.8044539654], [6.6e-10, 1.42471816453, 9917.6968745098], [6.7e-10, 5.5124099707, 3097.88382272579], [7.6e-10, 2.7156469351, 4164.311989613], [8.5e-10, 0.4965552367, 10575.4066829418], [7.7e-10, 3.51693861509, 11856.2186514245], [6.2e-10, 3.6258762869, 16496.3613962024], [5.4e-10, 5.25957420065, 3340.6124266998], [5.3e-10, 1.10902178415, 8635.9420037632], [4.9e-10, 5.65761054625, 20426.571092422], [6.4e-10, 5.79211164779, 2388.8940204492], [4.6e-10, 5.45092696155, 6275.9623029906], [5.7e-10, 4.97077155798, 14945.3161735544], [4.3e-10, 3.30685683359, 9779.1086761254], [4.2e-10, 1.61412785248, 12168.0026965746], [4.9e-10, 3.92715473768, 5729.506447149], [4.2e-10, 0.6348125893, 2699.7348193176], [5.6e-10, 4.34038639086, 90955.5516944961], [4e-10, 5.66871428338, 11712.9553182308], [3.9e-10, 3.10911294009, 16200.7727245012], [4e-10, 5.71338386146, 709.9330485583], [5.3e-10, 6.17067257683, 233141.3144043615], [3.7e-10, 0.32095173508, 24356.7807886416], [3.5e-10, 0.95557073457, 17298.1823273262], [3.5e-10, 0.64913397996, 25158.6017197654], [4.1e-10, 1.53850422484, 65147.6197681377], [3.5e-10, 0.77655626359, 13916.0191096416], [3.1e-10, 5.35897350775, 5331.3574437408], [3e-10, 4.48114682755, 23543.23050468179], [3.2e-10, 3.45976963453, 7477.522860216], [2.9e-10, 3.46648040769, 13119.72110282519], [3.8e-10, 2.90863974625, 12721.572099417], [2.9e-10, 3.13390968321, 4136.9104335162], [3.5e-10, 3.79717126309, 143571.32428481648], [2.7e-10, 0.95726093828, 12559.038152982], [2.6e-10, 4.9532687703, 5753.3848848968], [3.2e-10, 3.49943896928, 6284.0561710596], [2.6e-10, 4.59276256636, 5884.9268465832], [2.6e-10, 1.53958920253, 154717.6098876827], [2.3e-10, 4.88012908735, 13095.8426650774], [2.3e-10, 0.35935706511, 31415.379249957], [2.4e-10, 5.11515116629, 18319.5365848796], [2.1e-10, 5.73872879912, 12569.6748183318], [2.1e-10, 1.32901200081, 10988.808157535], [1.9e-10, 2.24263229491, 18073.7049386502], [1.9e-10, 3.14253175605, 6496.3749454294], [2.1e-10, 2.80122025076, 6282.0955289232], [2.3e-10, 0.14288760398, 6283.0085396886], [1.9e-10, 4.28209473754, 3930.2096962196], [1.6e-10, 0.25933207663, 11790.6290886588], [1.5e-10, 6.0962350124, 13517.8701062334], [2e-10, 5.06358906224, 6283.14316029419], [1.5e-10, 1.0768066315, 4933.2084403326], [1.9e-10, 5.74000581249, 3128.3887650958], [1.6e-10, 6.18924226747, 7342.4577801806], [1.3e-10, 1.69105044945, 4535.0594369244], [1.5e-10, 3.36968394452, 17260.1546546904], [1e-10, 3.78885035015, 22003.9146348698], [1.1e-10, 2.12851973876, 7875.6718636242]],
    "3": [[0.00000289058, 5.84173149732, 6283.0758499914], [2.0712e-7, 6.0498393902, 12566.1516999828], [2.962e-8, 5.1956057957, 155.4203994342], [2.527e-8, 3.14159265359, 0], [1.288e-8, 4.7219761197, 3.523118349], [6.35e-9, 5.96904899168, 242.728603974], [5.7e-9, 5.54182903238, 18849.2275499742], [4.02e-9, 3.78606612895, 553.5694028424], [7.2e-10, 4.37131884946, 6286.5989683404], [6.7e-10, 0.91133898967, 6127.6554505572], [3.7e-10, 5.28611190997, 6438.4962494256], [2.1e-10, 2.94917211527, 6309.3741697912], [1.5e-10, 3.63037493932, 71430.69561812909], [1.1e-10, 4.83261533939, 25132.3033999656], [1.1e-10, 5.84259014283, 6525.8044539654], [1.2e-10, 3.82296977522, 7058.5984613154], [1.3e-10, 2.39991715131, 5729.506447149], [8e-11, 0.55390332094, 6040.3472460174], [8e-11, 1.46298993048, 11856.2186514245], [8e-11, 5.07535888338, 6256.7775301916], [6e-11, 2.88803526743, 5507.5532386674], [5e-11, 3.87019253131, 12036.4607348882], [5e-11, 2.70838853362, 83996.84731811189]],
    "4": [[7.714e-8, 4.14117321449, 6283.0758499914], [1.016e-8, 3.27573644241, 12566.1516999828], [4.2e-9, 0.41892851415, 155.4203994342], [4.7e-10, 3.50591071186, 18849.2275499742], [4.1e-10, 3.14032562331, 3.523118349], [3.5e-10, 5.0111077, 5573.1428014331], [1e-10, 5.64816633449, 6127.6554505572], [1.3e-10, 0.48609240774, 77713.7714681205], [7e-11, 2.84139222289, 161000.6857376741], [4e-11, 3.6550904707, 25132.3033999656], [2e-11, 0.54880603487, 6438.4962494256]],
    "5": [[1.72e-9, 2.74854172392, 6283.0758499914], [5e-10, 2.01352986713, 155.4203994342], [2.8e-10, 2.93369985477, 12566.1516999828], [5e-11, 1.93829214518, 18849.2275499742]]
  },
  B: {
    "0": [[0.0000027962, 3.19870156017, 84334.66158130829], [0.00000101643, 5.42248619256, 5507.5532386674], [8.0445e-7, 3.88013204458, 5223.6939198022], [4.3806e-7, 3.70444689759, 2352.8661537718], [3.1933e-7, 4.00026369781, 1577.3435424478], [2.2724e-7, 3.9847383156, 1047.7473117547], [1.6392e-7, 3.56456119782, 5856.4776591154], [1.8141e-7, 4.98367470262, 6283.0758499914], [1.4443e-7, 3.70275614915, 9437.762934887], [1.4304e-7, 3.41117857526, 10213.285546211], [1.1246e-7, 4.82820690527, 14143.4952424306], [1.09e-7, 2.08574562329, 6812.766815086], [9.714e-8, 3.47303947751, 4694.0029547076], [1.0367e-7, 4.05663927945, 71092.88135493269], [8.775e-8, 4.44016515666, 5753.3848848968], [8.366e-8, 4.99251512183, 7084.8967811152], [6.921e-8, 4.32559054073, 6275.9623029906], [9.145e-8, 1.14182646613, 6620.8901131878], [7.194e-8, 3.60193205744, 529.6909650946], [7.698e-8, 5.55425745881, 167621.5758508619], [5.285e-8, 2.48446991536, 4705.7323075436], [5.208e-8, 6.24992674532, 18073.7049386502], [4.529e-8, 2.33827747356, 6309.3741697912], [5.579e-8, 4.41023653719, 7860.4193924392], [4.743e-8, 0.70995680136, 5884.9268465832], [4.301e-8, 1.10255777773, 6681.2248533996], [3.849e-8, 1.82229412532, 5486.777843175], [4.093e-8, 5.11700141197, 13367.9726311066], [3.681e-8, 0.43793170336, 3154.6870848956], [3.42e-8, 5.42034800952, 6069.7767545534], [3.617e-8, 6.04641937568, 3930.2096962196], [3.67e-8, 4.58210192227, 12194.0329146209], [2.918e-8, 1.95463881136, 10977.078804699], [2.797e-8, 5.61259274877, 11790.6290886588], [2.502e-8, 0.60499729368, 6496.3749454294], [2.319e-8, 5.01648216088, 1059.3819301892], [2.684e-8, 1.39470396487, 22003.9146348698], [2.428e-8, 3.24183056545, 78051.5857313169], [2.12e-8, 4.30691000285, 5643.1785636774], [2.257e-8, 3.15557225087, 90617.7374312997], [1.813e-8, 3.75574218286, 3340.6124266998], [2.226e-8, 2.79699346673, 12036.4607348882], [1.888e-8, 0.86991545944, 8635.9420037632], [1.517e-8, 1.9585205571, 398.1490034082], [1.581e-8, 3.19976230948, 5088.6288397668], [1.421e-8, 6.25530883828, 2544.3144198834], [1.595e-8, 0.25619915132, 17298.1823273262], [1.391e-8, 4.69964175574, 7058.5984613154], [1.478e-8, 2.81808207569, 25934.1243310894], [1.481e-8, 3.6582355461, 11506.7697697936], [1.693e-8, 4.95689385293, 156475.2902479957], [1.183e-8, 1.29343060777, 775.522611324], [1.114e-8, 2.37889311847, 3738.761430108], [9.94e-9, 4.30088900425, 9225.539273283], [9.24e-9, 3.06451026809, 4164.311989613], [8.67e-9, 0.55606931068, 8429.2412664666], [9.88e-9, 5.97286104208, 7079.3738568078], [8.24e-9, 1.50984806177, 10447.3878396044], [9.15e-9, 0.12635654605, 11015.1064773348], [7.42e-9, 1.99159139281, 26087.9031415742], [1.039e-8, 3.14159265359, 0], [8.5e-9, 4.24120016095, 29864.334027309], [7.55e-9, 2.89631873314, 4732.0306273434], [7.14e-9, 1.37548118605, 2146.1654164752], [7.08e-9, 1.91406542362, 8031.0922630584], [7.46e-9, 0.57893808622, 796.2980068164], [8.02e-9, 5.12339137235, 2942.4634232916], [7.51e-9, 1.67479850166, 21228.3920235458], [6.02e-9, 4.099765389, 64809.80550494129], [5.94e-9, 3.49580704849, 16496.3613962024], [5.92e-9, 4.59481504319, 4690.4798363586], [5.3e-9, 5.73979295194, 8827.3902698748], [5.03e-9, 5.66433137112, 33794.5437235286], [4.83e-9, 1.57106522322, 801.8209311238], [4.38e-9, 0.0670773372, 3128.3887650958], [4.23e-9, 2.86944596145, 12566.1516999828], [5.04e-9, 3.2620766916, 7632.9432596502], [5.52e-9, 1.02926440457, 239762.20451754928], [4.27e-9, 3.67434378208, 213.299095438], [4.04e-9, 1.4619329736, 15720.8387848784], [5.03e-9, 4.85802444134, 6290.1893969922], [4.17e-9, 0.81920713533, 5216.5803728014], [3.65e-9, 0.01002966145, 12168.0026965746], [3.63e-9, 1.28376436579, 6206.8097787158], [3.53e-9, 4.7005913311, 7234.794256242], [4.15e-9, 0.96862624176, 4136.9104335162], [3.87e-9, 3.09145061418, 25158.6017197654], [3.73e-9, 2.65119262808, 7342.4577801806], [3.61e-9, 2.97762937735, 9623.6882766912], [4.18e-9, 3.75759994446, 5230.807466803], [3.96e-9, 1.22507712354, 6438.4962494256], [3.22e-9, 1.21162178805, 8662.240323563], [2.84e-9, 5.64170320179, 1589.0728952838], [3.79e-9, 1.72248432756, 14945.3161735544], [3.2e-9, 3.94161159658, 7330.8231617461], [3.13e-9, 5.47602376451, 1194.4470102246], [2.92e-9, 1.38971327568, 11769.8536931664], [3.05e-9, 0.80429352049, 37724.7534197482], [2.57e-9, 5.81382810029, 426.598190876], [2.65e-9, 6.10358507671, 6836.6452528338], [2.5e-9, 4.56452895547, 7477.522860216], [2.66e-9, 2.62926282354, 7238.6755916], [2.63e-9, 6.22089501237, 6133.5126528568], [3.06e-9, 2.79682380532, 1748.016413067], [2.36e-9, 2.46093023707, 11371.7046897582], [3.16e-9, 1.62662805006, 250908.4901204155], [2.16e-9, 3.68721275185, 5849.3641121146], [2.3e-9, 0.36165162947, 5863.5912061162], [2.33e-9, 5.03509933618, 20426.571092422], [2e-9, 5.86073159059, 4535.0594369244], [2.77e-9, 4.65400292395, 82239.1669577989], [2.09e-9, 3.72323200803, 10973.55568635], [1.99e-9, 5.05186622555, 5429.8794682394], [2.56e-9, 2.40923279886, 19651.048481098], [2.1e-9, 4.50691909144, 29088.811415985], [1.81e-9, 6.00294783127, 4292.3308329504], [2.49e-9, 0.12900984422, 154379.7956244863], [2.09e-9, 3.87759458541, 17789.845619785], [2.25e-9, 3.18339652605, 18875.525869774], [1.91e-9, 4.53897489216, 18477.1087646123], [1.72e-9, 2.0969418273, 13095.8426650774], [1.82e-9, 3.16107943487, 16730.4636895958], [1.88e-9, 2.22746128596, 41654.9631159678], [1.64e-9, 5.18686274999, 5481.2549188676], [1.6e-9, 2.4929885502, 12592.4500197826], [1.55e-9, 1.59595438224, 10021.8372800994], [1.35e-9, 0.21349051305, 10988.808157535], [1.78e-9, 3.80375178044, 23581.2581773176], [1.23e-9, 1.66800739151, 15110.4661198662], [1.22e-9, 2.72678272224, 18849.2275499742], [1.26e-9, 1.17675512872, 14919.0178537546], [1.42e-9, 3.95053440992, 337.8142631964], [1.16e-9, 6.06340906212, 6709.6740408674], [1.37e-9, 3.52143246244, 12139.5535091068], [1.36e-9, 2.92179113491, 32217.2001810808], [1.1e-9, 3.51203379263, 18052.9295431578], [1.47e-9, 4.63371971408, 22805.7355659936], [1.08e-9, 5.45280815225, 7.1135470008], [1.48e-9, 0.65447253687, 95480.9471841745], [1.19e-9, 5.92110458985, 33019.0211122046], [1.1e-9, 5.34824206403, 639.897286314], [1.06e-9, 3.71081682614, 14314.1681130498], [1.39e-9, 6.17607198262, 24356.7807886416], [1.18e-9, 5.59738712949, 161338.5000008705], [1.17e-9, 3.6506527164, 45585.1728121874], [1.27e-9, 4.74596574209, 49515.382508407], [1.2e-9, 1.04211499785, 6915.8595893046], [1.2e-9, 5.60638811846, 5650.2921106782], [1.15e-9, 3.10668213303, 14712.317116458], [9.9e-10, 0.6901893993, 12779.4507954208], [9.7e-10, 1.07908724794, 9917.6968745098], [9.3e-10, 2.62295197146, 17260.1546546904], [9.9e-10, 4.45774681732, 4933.2084403326], [1.23e-9, 1.37488921994, 28286.9904848612], [1.21e-9, 5.19767249869, 27511.4678735372], [1.05e-9, 0.87192268229, 77375.95720492408], [8.7e-10, 3.9363781295, 17654.7805397496], [1.22e-9, 2.2395606868, 83997.09113559539], [8.7e-10, 4.18201600921, 22779.4372461938], [1.04e-9, 4.59580877285, 1349.8674096588], [1.02e-9, 2.83545248595, 12352.8526045448], [1.02e-9, 3.97386522171, 10818.1352869158], [1.01e-9, 4.32892825818, 36147.4098773004], [9.4e-10, 5.00001709338, 150192.2143980043], [7.7e-10, 3.971993693, 1592.5960136328], [1e-9, 6.07733097102, 26735.9452622132], [8.6e-10, 5.2602963825, 28313.288804661], [9.3e-10, 4.31900620254, 44809.6502008634], [7.6e-10, 6.22743405935, 13521.7514415914], [7.2e-10, 1.55820597747, 6256.7775301916], [8.2e-10, 4.95202664555, 10575.4066829418], [8.2e-10, 1.69647647075, 1990.745017041], [7.5e-10, 2.29836095644, 3634.6210245184], [7.5e-10, 2.66367876557, 16200.7727245012], [8.7e-10, 0.26630214764, 31441.6775697568], [7.7e-10, 2.25530952876, 5235.3285382367], [7.6e-10, 1.09869730334, 12903.9659631792], [5.8e-10, 4.28246137794, 12559.038152982], [6.4e-10, 5.51112829602, 173904.65170085328], [5.6e-10, 2.60133794851, 73188.3759784421], [5.5e-10, 5.81483150022, 143233.51002162008], [5.4e-10, 3.38482031504, 323049.11878710287], [3.9e-10, 3.28500401937, 71768.50988132549], [3.9e-10, 3.11239910096, 96900.81328129109]],
    "1": [[0.00227777722, 3.4137662053, 6283.0758499914], [0.00003805678, 3.37063423795, 12566.1516999828], [0.00003619589, 0, 0], [7.1542e-7, 3.32777549735, 18849.2275499742], [7.655e-8, 1.79489607186, 5223.6939198022], [8.107e-8, 3.89190403643, 5507.5532386674], [6.456e-8, 5.1978942475, 2352.8661537718], [3.894e-8, 2.15568517178, 6279.5527316424], [3.892e-8, 1.53021064904, 6286.5989683404], [3.897e-8, 4.87293945629, 10213.285546211], [3.812e-8, 1.43523182316, 12036.4607348882], [3.577e-8, 2.32913869227, 83996.84731811189], [3.57e-8, 4.92637739003, 71430.69561812909], [3.494e-8, 2.20864641831, 529.6909650946], [2.421e-8, 6.22876183393, 7860.4193924392], [2.056e-8, 3.06747139741, 14143.4952424306], [1.399e-8, 0.50107877909, 6309.3741697912], [1.417e-8, 3.28454570977, 25132.3033999656], [1.544e-8, 1.82062047625, 5856.4776591154], [1.457e-8, 1.75339303307, 5884.9268465832], [1.497e-8, 2.19673914456, 9437.762934887], [1.549e-8, 5.73650061398, 17789.845619785], [1.277e-8, 3.9672171733, 4705.7323075436], [1.038e-8, 2.9481870117, 6256.7775301916], [1.018e-8, 2.24114547164, 6681.2248533996], [1.021e-8, 1.4679502613, 11790.6290886588], [9.16e-9, 3.72965830745, 1059.3819301892], [1.156e-8, 6.04591336669, 398.1490034082], [1.24e-8, 0.77195902957, 6812.766815086], [1.115e-8, 3.92255876225, 12168.0026965746], [9.08e-9, 1.78447918237, 3930.2096962196], [8.33e-9, 0.09941579828, 11506.7697697936], [7.9e-9, 2.45555993228, 775.522611324], [6.66e-9, 4.40761401665, 5753.3848848968], [5.2e-9, 1.60179602491, 4694.0029547076], [3.82e-9, 0.26754532042, 1577.3435424478], [4.05e-9, 1.97558286872, 6283.0085396886], [4.05e-9, 1.53147989887, 6283.14316029419], [3.88e-9, 2.59563818411, 7058.5984613154], [3.41e-9, 3.61275156842, 13367.9726311066], [2.8e-9, 4.63052251735, 796.2980068164], [2.76e-9, 0.43350778219, 7079.3738568078], [3.11e-9, 5.28219636656, 17260.1546546904], [2.75e-9, 5.27597553634, 11769.8536931664], [2.86e-9, 2.98639716345, 6275.9623029906], [2.51e-9, 2.81315684448, 6290.1893969922], [2.39e-9, 5.77837903893, 10977.078804699], [2.28e-9, 0.14375973844, 3738.761430108], [2.27e-9, 2.51020991853, 7084.8967811152], [2.11e-9, 4.7202946547, 6496.3749454294], [2.34e-9, 3.1153527401, 709.9330485583], [2.34e-9, 0.5707581762, 11856.2186514245], [2.37e-9, 2.38791907394, 213.299095438], [2.27e-9, 1.12059781634, 12352.8526045448], [1.69e-9, 3.20148089605, 5486.777843175], [1.59e-9, 3.14604135756, 8827.3902698748], [1.6e-9, 1.14784478002, 5643.1785636774], [1.44e-9, 5.23285657431, 78051.5857313169], [1.44e-9, 1.16454654602, 90617.7374312997], [1.44e-9, 3.81203756929, 6262.300454499], [1.43e-9, 5.97809021355, 6303.8512454838], [1.38e-9, 4.29829933273, 1589.0728952838], [1.61e-9, 3.03298851492, 20426.571092422], [1.65e-9, 5.09134896587, 17298.1823273262], [1.28e-9, 4.41590143012, 6127.6554505572], [1.58e-9, 2.00984506334, 5230.807466803], [1.3e-9, 1.44170683802, 12569.6748183318], [1.25e-9, 1.69950379498, 3128.3887650958], [1.52e-9, 4.96946111415, 65147.6197681377], [1.31e-9, 4.24961399629, 6282.0955289232], [1.31e-9, 5.54051222995, 6284.0561710596], [1.61e-9, 3.32421999691, 6283.3196674749], [1.23e-9, 2.93221463795, 15720.8387848784], [1.52e-9, 1.56488157456, 18319.5365848796], [1.14e-9, 1.89110005546, 18073.7049386502], [1.13e-9, 4.95214866677, 4136.9104335162], [1.11e-9, 4.79699611405, 8429.2412664666], [1.18e-9, 3.06184958762, 22003.9146348698], [1.28e-9, 2.09693027395, 12562.6285816338], [1.38e-9, 0.84648544836, 6069.7767545534], [1e-9, 0.41938790104, 5481.2549188676], [1.01e-9, 4.43791289246, 19651.048481098], [1.16e-9, 1.87002428935, 77713.7714681205], [9.5e-10, 0.68638183645, 3340.6124266998], [1.04e-9, 4.90822646457, 8635.9420037632], [1.14e-9, 0.36008214928, 23543.23050468179], [9.1e-10, 1.1761121931, 9225.539273283], [9.1e-10, 2.74682631104, 5216.5803728014], [8.6e-10, 3.09315282195, 1194.4470102246], [9.3e-10, 6.2764351319, 12559.038152982], [8.7e-10, 3.64926989547, 7.1135470008], [8.3e-10, 0.37008971174, 11371.7046897582], [9.8e-10, 4.68473306376, 167283.7615876655], [9.8e-10, 0.99865886857, 154717.6098876827], [8.6e-10, 4.41152307486, 25934.1243310894], [9.8e-10, 4.98209568932, 16496.3613962024], [8.5e-10, 2.35438163823, 3154.6870848956], [8.3e-10, 0.24859477658, 21228.3920235458], [7.6e-10, 5.46661600296, 29864.334027309], [6.9e-10, 3.22045334237, 801.8209311238], [6.8e-10, 2.19928242745, 37724.7534197482], [7e-10, 5.33711014698, 2544.3144198834], [5.5e-10, 5.37872238211, 11015.1064773348], [5.1e-10, 5.03600618727, 5863.5912061162], [5.9e-10, 3.54984809612, 4535.0594369244], [5.3e-10, 1.50812064137, 7342.4577801806], [4.4e-10, 1.33712241647, 4164.311989613], [5.5e-10, 5.38460045253, 7477.522860216], [4.9e-10, 5.61844340512, 24072.9214697764], [5.7e-10, 6.17973522898, 8031.0922630584], [5.2e-10, 4.24379064407, 5088.6288397668], [4.1e-10, 3.41960196246, 26087.9031415742], [5.2e-10, 1.68150981131, 25158.6017197654], [5.3e-10, 0.11041408311, 29088.811415985], [4.3e-10, 0.53354396923, 2146.1654164752], [5e-10, 0.60270799844, 33794.5437235286], [4.5e-10, 1.69577010458, 6702.5604938666], [3.7e-10, 6.09033460795, 64809.80550494129], [4.4e-10, 2.67993061247, 15110.4661198662], [4.7e-10, 3.62555676035, 41654.9631159678], [3.6e-10, 0.47219666269, 13095.8426650774], [3.5e-10, 5.99520523215, 23581.2581773176], [4.3e-10, 4.08726331262, 156137.47598479927], [4.3e-10, 5.17376496602, 18422.62935909819], [3.4e-10, 2.14460100274, 4933.2084403326], [3e-10, 4.12992793541, 426.598190876], [3.6e-10, 2.28596930002, 90279.92316810328], [3.2e-10, 0.81117747619, 26.2983197998], [2.8e-10, 4.07036560467, 14712.317116458], [2.5e-10, 1.92905243842, 1748.016413067], [2.4e-10, 5.06152880842, 16730.4636895958], [2.3e-10, 3.24047012195, 31415.379249957], [2.7e-10, 3.90672018305, 18451.07854656599], [2.1e-10, 3.51419811826, 10447.3878396044]],
    "2": [[0.00009721424, 5.1519280992, 6283.0758499914], [0.00000233002, 3.14159265359, 0], [0.00000134188, 0.64406212977, 12566.1516999828], [6.504e-8, 1.07333397797, 18849.2275499742], [1.662e-8, 1.62746869551, 84334.66158130829], [6.35e-9, 3.51985338656, 6279.5527316424], [4.92e-9, 2.41382223971, 1047.7473117547], [3.07e-9, 6.10181422085, 5223.6939198022], [3.22e-9, 0.37660897389, 6286.5989683404], [3.26e-9, 2.35727931602, 5507.5532386674], [2.74e-9, 1.65307581765, 7860.4193924392], [2.28e-9, 1.14082932988, 25132.3033999656], [2.02e-9, 0.4983668253, 2352.8661537718], [2.01e-9, 0.155527656, 10213.285546211], [1.67e-9, 3.98005254015, 529.6909650946], [1.7e-9, 5.28668290523, 6256.7775301916], [1.66e-9, 3.04613930284, 12036.4607348882], [1.53e-9, 4.06779216239, 83996.84731811189], [1.5e-9, 3.18772213951, 71430.69561812909], [1.2e-9, 3.13558669517, 5884.9268465832], [1.23e-9, 4.17102530625, 6309.3741697912], [1e-9, 1.46356761368, 11506.7697697936], [1e-9, 3.00322421365, 11790.6290886588], [7.7e-10, 1.65643898948, 4705.7323075436], [6.8e-10, 6.03791904123, 6812.766815086], [7.5e-10, 4.85191600582, 14143.4952424306], [7.9e-10, 4.12628805658, 5753.3848848968], [6.4e-10, 2.7194416046, 6127.6554505572], [6.3e-10, 0.78655326011, 6438.4962494256], [7.5e-10, 0.84213523741, 167621.5758508619], [5.1e-10, 4.55059044701, 5486.777843175], [5e-10, 5.29314320585, 7079.3738568078], [4.5e-10, 0.33147576416, 775.522611324], [4.3e-10, 3.6179371164, 1577.3435424478], [5.7e-10, 6.15295833679, 12194.0329146209], [4.5e-10, 1.18274698508, 17789.845619785], [4.7e-10, 1.11643162773, 398.1490034082], [4.7e-10, 5.5298423843, 12168.0026965746], [4.2e-10, 2.6437530062, 10988.808157535], [3.7e-10, 0.31226891972, 6681.2248533996], [4.6e-10, 3.38617099014, 156475.2902479957], [3.3e-10, 1.26266496002, 6290.1893969922], [3.3e-10, 2.25067065498, 6275.9623029906], [2.7e-10, 1.72859626293, 1059.3819301892], [2.8e-10, 2.88681054153, 796.2980068164], [3e-10, 5.52021264181, 7058.5984613154], [2.1e-10, 6.22275008403, 6069.7767545534], [2.4e-10, 5.83690442827, 6282.0955289232], [2.4e-10, 3.95322179797, 6284.0561710596], [2.1e-10, 4.87022458966, 3738.761430108], [2.1e-10, 3.58048145762, 6496.3749454294], [2.2e-10, 1.97770318395, 7.1135470008], [1.9e-10, 3.4597988877, 4136.9104335162], [1.5e-10, 2.81379880771, 1589.0728952838], [1.5e-10, 1.61313151838, 1194.4470102246], [1.5e-10, 0.63083434831, 11769.8536931664], [1.9e-10, 0.28082047767, 17260.1546546904], [1.7e-10, 1.35165136146, 78051.5857313169], [1.5e-10, 2.3094159956, 11856.2186514245], [1.2e-10, 1.12997370513, 90617.7374312997], [1.2e-10, 0.00611601597, 18073.7049386502], [1.2e-10, 1.70058636365, 12559.038152982]],
    "3": [[0.00000275993, 0.59480097092, 6283.0758499914], [1.7034e-7, 3.14159265359, 0], [3.617e-8, 0.11750575325, 12566.1516999828], [3.39e-9, 5.66087461682, 18849.2275499742], [5.6e-10, 5.02765554835, 6279.5527316424], [1.9e-10, 5.99007646261, 6256.7775301916], [1.8e-10, 3.80004734567, 6309.3741697912], [1.8e-10, 1.21049250774, 6127.6554505572], [1.8e-10, 2.29734567137, 6438.4962494256], [1.5e-10, 4.72881467263, 6286.5989683404], [1.2e-10, 0.41481671808, 83996.84731811189], [1.3e-10, 5.54637369296, 25132.3033999656], [1e-10, 2.91937214232, 71430.69561812909], [6e-11, 2.1417324121, 11856.2186514245]],
    "4": [[5.745e-8, 2.26734029843, 6283.0758499914], [8.7e-9, 0, 0], [1.19e-9, 4.26807972611, 12566.1516999828], [1.7e-10, 4.0742262044, 18849.2275499742], [5e-11, 0.84308705203, 1047.7473117547], [5e-11, 0.05711572303, 84334.66158130829]],
    "5": [[1.14e-9, 4.31455980099, 6283.0758499914], [2.4e-10, 0, 0]]
  },
  R: {
    "0": [[1.00013988784, 0, 0], [0.01670699632, 3.09846350258, 6283.0758499914], [0.00013956024, 3.05524609456, 12566.1516999828], [0.0000308372, 5.19846674381, 77713.7714681205], [0.00001628463, 1.17387558054, 5753.3848848968], [0.00001575572, 2.84685214877, 7860.4193924392], [0.00000924799, 5.45292236722, 11506.7697697936], [0.00000542439, 4.56409151453, 3930.2096962196], [0.0000047211, 3.66100022149, 5884.9268465832], [0.0000032878, 5.89983686142, 5223.6939198022], [0.00000345969, 0.96368627272, 5507.5532386674], [0.00000306784, 0.29867139512, 5573.1428014331], [0.00000174844, 3.01193636733, 18849.2275499742], [0.00000243181, 4.2734953079, 11790.6290886588], [0.00000211836, 5.84714461348, 1577.3435424478], [0.0000018574, 5.02199710705, 10977.078804699], [0.00000109835, 5.0551063586, 5486.777843175], [9.8316e-7, 0.88681311278, 6069.7767545534], [8.65e-7, 5.68956418946, 15720.8387848784], [8.5831e-7, 1.27079125277, 161000.6857376741], [6.2917e-7, 0.92177053978, 529.6909650946], [5.7056e-7, 2.01374292245, 83996.84731811189], [6.4908e-7, 0.27251341435, 17260.1546546904], [4.9384e-7, 3.24501240359, 2544.3144198834], [5.5736e-7, 5.2415979917, 71430.69561812909], [4.252e-7, 6.01110257982, 6275.9623029906], [4.6966e-7, 2.57799853213, 775.522611324], [3.8963e-7, 5.36063832897, 4694.0029547076], [4.4666e-7, 5.53715663816, 9437.762934887], [3.5661e-7, 1.67447135798, 12036.4607348882], [3.1922e-7, 0.18368299942, 5088.6288397668], [3.1846e-7, 1.77775642078, 398.1490034082], [3.3193e-7, 0.24370221704, 7084.8967811152], [3.8245e-7, 2.39255343973, 8827.3902698748], [2.8468e-7, 1.21344887533, 6286.5989683404], [3.7486e-7, 0.82961281844, 19651.048481098], [3.6957e-7, 4.90107587287, 12139.5535091068], [3.4537e-7, 1.84270693281, 2942.4634232916], [2.6275e-7, 4.58896863104, 10447.3878396044], [2.4596e-7, 3.78660838036, 8429.2412664666], [2.3587e-7, 0.26866098169, 796.2980068164], [2.7795e-7, 1.89934427832, 6279.5527316424], [2.3927e-7, 4.99598548145, 5856.4776591154], [2.0345e-7, 4.65282190725, 2146.1654164752], [2.3287e-7, 2.80783632869, 14143.4952424306], [2.2099e-7, 1.95002636847, 3154.6870848956], [1.9509e-7, 5.38233922479, 2352.8661537718], [1.7958e-7, 0.1987136996, 6812.766815086], [1.7178e-7, 4.43322156854, 10213.285546211], [1.619e-7, 5.23159323213, 17789.845619785], [1.7315e-7, 6.15224075188, 16730.4636895958], [1.3814e-7, 5.18962074032, 8031.0922630584], [1.8834e-7, 0.67280058021, 149854.4001348079], [1.833e-7, 2.25348717053, 23581.2581773176], [1.3639e-7, 3.68511810757, 4705.7323075436], [1.3142e-7, 0.65267698994, 13367.9726311066], [1.0414e-7, 4.33285688501, 11769.8536931664], [9.978e-8, 4.20126336356, 6309.3741697912], [1.017e-7, 1.59366684542, 4690.4798363586], [7.564e-8, 2.62560597391, 6256.7775301916], [9.654e-8, 3.67583728703, 27511.4678735372], [6.743e-8, 0.56269927047, 3340.6124266998], [8.743e-8, 6.06359123461, 1748.016413067], [7.786e-8, 3.67371235367, 12168.0026965746], [6.633e-8, 5.66149277789, 11371.7046897582], [7.712e-8, 0.31242577788, 7632.9432596502], [6.586e-8, 3.13580054586, 801.8209311238], [7.46e-8, 5.6475806666, 11926.2544136688], [6.933e-8, 2.92384586372, 6681.2248533996], [6.805e-8, 1.42327153767, 23013.5395395872], [6.118e-8, 5.13395999022, 1194.4470102246], [6.477e-8, 2.64986648493, 19804.8272915828], [5.233e-8, 4.62432817299, 6438.4962494256], [6.147e-8, 3.02863936662, 233141.3144043615], [4.608e-8, 1.72194702724, 7234.794256242], [4.221e-8, 1.55697533726, 7238.6755916], [5.31e-8, 2.40821524293, 11499.6562227928], [5.128e-8, 5.3239896569, 11513.8833167944], [4.77e-8, 0.2555431173, 11856.2186514245], [5.519e-8, 2.09089153789, 17298.1823273262], [5.625e-8, 4.34052903053, 90955.5516944961], [4.578e-8, 4.4656964157, 5746.271337896], [3.788e-8, 4.9072829481, 4164.311989613], [5.337e-8, 5.09957905103, 31441.6775697568], [3.967e-8, 1.20054555175, 1349.8674096588], [4.005e-8, 3.02853885902, 1059.3819301892], [3.48e-8, 0.76066308841, 10973.55568635], [4.232e-8, 1.05485713117, 5760.4984318976], [4.582e-8, 3.76570026763, 6386.16862421], [3.335e-8, 3.13829943354, 6836.6452528338], [3.42e-8, 3.00043974511, 4292.3308329504], [3.595e-8, 5.70703236079, 5643.1785636774], [3.236e-8, 4.16387400645, 9917.6968745098], [4.154e-8, 2.59940749519, 7058.5984613154], [3.362e-8, 4.54577164994, 4732.0306273434], [2.978e-8, 1.3056126882, 6283.14316029419], [2.765e-8, 0.51311975671, 26.2983197998], [2.807e-8, 5.66230537649, 8635.9420037632], [2.927e-8, 5.7378783408, 16200.7727245012], [3.167e-8, 1.691817599, 11015.1064773348], [2.598e-8, 2.96244118358, 25132.3033999656], [3.519e-8, 3.62639325753, 244287.60000722768], [2.676e-8, 4.20727719487, 18073.7049386502], [2.978e-8, 1.74971565805, 6283.0085396886], [2.287e-8, 1.06976449088, 14314.1681130498], [2.863e-8, 5.92838917309, 14712.317116458], [3.071e-8, 0.23793217, 35371.8872659764], [2.656e-8, 0.89959301615, 12352.8526045448], [2.415e-8, 2.799751768, 709.9330485583], [2.811e-8, 3.51513864541, 21228.3920235458], [1.977e-8, 2.61358297551, 951.7184062506], [2.548e-8, 2.47684686575, 6208.2942514241], [1.999e-8, 0.56090396506, 7079.3738568078], [2.305e-8, 1.05376463592, 22483.84857449259], [1.855e-8, 2.86093570752, 5216.5803728014], [2.157e-8, 1.31395211105, 154717.6098876827], [1.97e-8, 4.36931551625, 167283.7615876655], [1.754e-8, 2.14452400686, 6290.1893969922], [1.628e-8, 5.85704450617, 10984.1923516998], [2.154e-8, 6.03828353794, 10873.9860304804], [1.714e-8, 3.70158195222, 1592.5960136328], [1.541e-8, 6.21599512982, 23543.23050468179], [1.602e-8, 1.99860679677, 10969.9652576982], [1.712e-8, 1.34295218697, 3128.3887650958], [1.647e-8, 5.54948299069, 6496.3749454294], [1.495e-8, 5.43980459648, 155.4203994342], [1.827e-8, 5.91227480351, 3738.761430108], [1.726e-8, 2.16765465036, 10575.4066829418], [1.532e-8, 5.35683107063, 13521.7514415914], [1.824e-8, 1.66056145084, 39302.096962196], [1.605e-8, 1.90930973224, 6133.5126528568], [1.282e-8, 2.46013372544, 13916.0191096416], [1.211e-8, 4.4136063155, 3894.1818295422], [1.394e-8, 1.7780192925, 9225.539273283], [1.571e-8, 4.95512957606, 25158.6017197654], [1.205e-8, 1.19212756308, 3.523118349], [1.132e-8, 2.69830084955, 6040.3472460174], [1.504e-8, 5.77577388271, 18209.33026366019], [1.393e-8, 1.62625077326, 5120.6011455836], [1.081e-8, 2.93726744446, 17256.6315363414], [1.232e-8, 0.71651766504, 143571.32428481648], [1.087e-8, 0.99769687961, 955.5997416086], [1.068e-8, 5.28472576591, 65147.6197681377], [1.169e-8, 3.11663802316, 14945.3161735544], [9.75e-9, 5.1088726078, 6172.869528772], [1.202e-8, 4.02992510403, 553.5694028424], [9.79e-9, 2.00000879106, 15110.4661198662], [9.62e-9, 4.023807714, 6282.0955289232], [9.99e-9, 3.6264300279, 6262.300454499], [1.03e-8, 5.84987815239, 213.299095438], [1.014e-8, 2.84227679965, 8662.240323563], [1.185e-8, 1.51330629149, 17654.7805397496], [9.67e-9, 2.67081017562, 5650.2921106782], [1.222e-8, 2.65423784904, 88860.05707098669], [9.86e-9, 2.36212814824, 6206.8097787158], [1.034e-8, 0.13634950642, 11712.9553182308], [1.103e-8, 3.08477302937, 43232.3066584156], [7.81e-9, 2.53374971725, 16496.3613962024], [1.019e-8, 3.04569392376, 6037.244203762], [7.95e-9, 5.80662989126, 5230.807466803], [8.13e-9, 3.57702871938, 10177.2576795336], [9.62e-9, 5.31470594766, 6284.0561710596], [7.17e-9, 5.95797471837, 12559.038152982], [9.67e-9, 2.74413738053, 6244.9428143536], [9.21e-9, 0.1016016083, 29088.811415985], [7.19e-9, 5.91788189939, 4136.9104335162], [6.88e-9, 3.89489045092, 1589.0728952838], [7.72e-9, 4.05505380285, 6127.6554505572], [7.06e-9, 5.49323197725, 22003.9146348698], [6.65e-9, 1.60002747134, 11087.2851259184], [6.9e-9, 4.50539825729, 426.598190876], [8.54e-9, 3.2610464506, 20426.571092422], [6.56e-9, 4.3241018294, 16858.4825329332], [8.4e-9, 2.59572585212, 28766.924424484], [6.86e-9, 0.61944033771, 11403.676995575], [7e-9, 3.40901412473, 7.1135470008], [7.28e-9, 0.04050185963, 5481.2549188676], [6.53e-9, 1.0386945123, 6062.6632075526], [5.59e-9, 4.79221805695, 20199.094959633], [6.33e-9, 5.70229959167, 45892.73043315699], [5.91e-9, 6.10986487621, 9623.6882766912], [5.2e-9, 3.62310356479, 5333.9002410216], [6.02e-9, 5.58381898589, 10344.2950653858], [4.96e-9, 2.21027756314, 1990.745017041], [6.91e-9, 1.96733114988, 12416.5885028482], [6.4e-9, 1.59062417043, 18319.5365848796], [6.25e-9, 3.82358168221, 13517.8701062334], [4.75e-9, 1.1702590418, 12569.6748183318], [6.6e-9, 5.08498512995, 283.8593188652], [6.64e-9, 4.50029469969, 47162.5163546352], [5.69e-9, 0.16318535463, 17267.26820169119], [5.68e-9, 3.86100969474, 6076.8903015542], [4.62e-9, 0.26368763517, 4590.910180489], [5.35e-9, 4.83225423196, 18422.62935909819], [4.66e-9, 0.75873879417, 7342.4577801806], [5.41e-9, 3.07212190556, 226858.23855437007], [6.1e-9, 1.53597089605, 33019.0211122046], [6.17e-9, 2.62356328726, 11190.377900137], [5.48e-9, 4.55798855803, 18875.525869774], [6.33e-9, 4.60110281228, 66567.48586525429], [5.87e-9, 5.78087907808, 632.7837393132], [6.03e-9, 5.38458554802, 316428.22867391503], [5.25e-9, 5.01522072363, 12132.439962106], [4.69e-9, 0.59975173763, 21954.15760939799], [5.48e-9, 3.50627043672, 17253.04110768959], [5.02e-9, 0.98804327589, 11609.8625440122], [5.68e-9, 1.98497313089, 7668.6374249425], [4.82e-9, 1.62460405687, 12146.6670561076], [3.91e-9, 3.68718382972, 18052.9295431578], [4.57e-9, 3.7721489661, 156137.47598479927], [4.01e-9, 5.2922154024, 15671.0817594066], [4.69e-9, 1.80963351735, 12562.6285816338], [5.14e-9, 3.37031288919, 20597.2439630412], [4.52e-9, 5.66811219778, 10454.5013866052], [3.75e-9, 4.98528185039, 9779.1086761254], [5.23e-9, 0.97215560834, 155427.542936241], [4.03e-9, 5.1394818977, 1551.045222648], [3.72e-9, 3.69883738807, 9388.0059094152], [3.67e-9, 4.43875659833, 4535.0594369244], [4.06e-9, 4.20863156497, 12592.4500197826], [3.62e-9, 2.55099560446, 242.728603974], [4.71e-9, 4.61907324819, 5436.9930152402], [3.88e-9, 4.960209284, 24356.7807886416], [4.41e-9, 5.83872966262, 3496.032826134], [3.49e-9, 6.16307810648, 19800.9459562248], [3.56e-9, 0.2381908124, 5429.8794682394], [3.46e-9, 5.60809622572, 2379.1644735716], [3.8e-9, 2.72105213132, 11933.3679606696], [4.32e-9, 0.24215988572, 17996.0311682222], [3.78e-9, 5.22516848076, 7477.522860216], [3.37e-9, 5.10885555836, 5849.3641121146], [3.15e-9, 0.57827745123, 10557.5941608238], [3.18e-9, 4.4994900732, 3634.6210245184], [3.23e-9, 1.55850824803, 10440.2742926036], [3.14e-9, 5.77154773334, 20.7753954924], [3.03e-9, 2.34615580398, 4686.8894077068], [4.14e-9, 5.9323760231, 51092.7260508548], [3.62e-9, 2.17561997119, 28237.2334593894], [2.88e-9, 0.18377405421, 13095.8426650774], [2.77e-9, 5.1295220503, 13119.72110282519], [3.25e-9, 6.18608287927, 6268.8487559898], [2.73e-9, 0.30522428863, 23141.5583829246], [2.67e-9, 5.76152585786, 5966.6839803348], [3.45e-9, 2.94246040875, 36949.2308084242], [2.53e-9, 5.20994580359, 24072.9214697764], [3.42e-9, 5.76212804329, 16460.33352952499], [3.07e-9, 6.01039067183, 22805.7355659936], [2.61e-9, 2.00304796059, 6148.010769956], [2.38e-9, 5.08241964961, 6915.8595893046], [2.49e-9, 2.94762789744, 135.0650800354], [3.06e-9, 3.89765478921, 10988.808157535], [3.08e-9, 0.05451027736, 4701.1165017084], [3.19e-9, 2.95712862064, 163096.18036118348], [2.72e-9, 2.07967681309, 4804.209275927], [2.09e-9, 4.43768461442, 6546.1597733642], [2.17e-9, 0.73691592312, 6303.8512454838], [2.03e-9, 0.32033085531, 25934.1243310894], [2.05e-9, 5.22936478995, 20995.3929664494], [2.13e-9, 0.20671418919, 28286.9904848612], [1.97e-9, 0.4828613129, 16737.5772365966], [2.3e-9, 6.06567392849, 6287.0080032545], [2.19e-9, 1.291942163, 5326.7866940208], [2.01e-9, 1.74700937253, 22743.4093795164], [2.07e-9, 4.45440927276, 6279.4854213396], [2.69e-9, 6.0564044503, 64471.99124174489], [1.9e-9, 0.99261116842, 29296.6153895786], [1.94e-9, 3.82656562755, 419.4846438752], [2.62e-9, 5.26961924126, 522.5774180938], [2.1e-9, 4.68618183158, 6254.6266625236], [1.97e-9, 2.80624554186, 4933.2084403326], [2.52e-9, 4.3622015462, 40879.4405046438], [2.61e-9, 1.07241516738, 55022.9357470744], [2.33e-9, 5.41751014958, 39609.6545831656], [1.85e-9, 4.14324541379, 5642.1982426092], [2.47e-9, 3.44855612987, 6702.5604938666], [2.05e-9, 4.04424043226, 536.8045120954], [1.91e-9, 3.15807087926, 16723.350142595], [2.22e-9, 5.16259496507, 23539.7073863328], [1.8e-9, 4.56214752149, 6489.2613984286], [2.27e-9, 0.60156339452, 5905.7022420756], [1.7e-9, 0.93185903228, 16062.1845261168], [1.59e-9, 0.92751013112, 23937.856389741], [1.57e-9, 4.69607868164, 6805.6532680852], [2.18e-9, 0.8553337343, 16627.3709153772], [1.69e-9, 0.94641052064, 3097.88382272579], [2.07e-9, 4.88410451334, 6286.6662786432], [1.6e-9, 4.95943826819, 10021.8372800994], [1.75e-9, 6.12762824563, 239424.39025435288], [1.73e-9, 3.13887234973, 6179.9830757728], [1.57e-9, 3.62822057807, 18451.07854656599], [2.06e-9, 5.74617821138, 3646.3503773544], [1.57e-9, 4.67695912207, 6709.6740408674], [1.46e-9, 3.09506069745, 4907.3020501456], [1.65e-9, 2.2713912876, 10660.6869350424], [1.44e-9, 3.96947747592, 6019.9919266186], [1.71e-9, 5.91302216729, 6058.7310542895], [1.44e-9, 2.1315565512, 26084.0218062162], [1.51e-9, 0.67417383565, 2388.8940204492], [1.96e-9, 1.67718461229, 2107.0345075424], [1.46e-9, 5.10373877968, 10770.8932562618], [1.87e-9, 1.23915444627, 19402.7969528166], [1.37e-9, 1.26247412216, 12566.2190102856], [1.91e-9, 5.03547476279, 263.0839233728], [1.37e-9, 3.52825454595, 639.897286314], [1.35e-9, 0.73840670927, 5017.508371365], [1.64e-9, 2.39195095081, 6357.8574485587], [1.68e-9, 0.05515907462, 9380.9596727172], [1.61e-9, 1.15721259392, 26735.9452622132], [1.44e-9, 1.76097645199, 5888.4499649322], [1.31e-9, 2.51859277344, 6599.467719648], [1.42e-9, 2.43802911123, 5881.4037282342], [1.59e-9, 5.90325893762, 6281.5913772831], [1.51e-9, 3.72338532519, 12669.2444742014], [1.32e-9, 2.38417741883, 6525.8044539654], [1.27e-9, 0.00254936441, 10027.9031957292], [1.48e-9, 2.85102145528, 6418.1409300268], [1.43e-9, 5.7446027956, 26087.9031415742], [1.72e-9, 0.4128996224, 174242.4659640497], [1.36e-9, 4.15497742275, 6311.5250374592], [1.7e-9, 5.98194913129, 327574.51427678124], [1.36e-9, 2.48430537541, 13341.6743113068], [1.49e-9, 0.33002271275, 245.8316462294], [1.65e-9, 2.496679246, 58953.145443294], [1.23e-9, 1.67328384813, 32217.2001810808], [1.23e-9, 3.45660563754, 6277.552925684], [1.17e-9, 0.86065134175, 6245.0481773556], [1.49e-9, 5.61358281003, 5729.506447149], [1.28e-9, 0.71204006448, 103.0927742186], [1.59e-9, 2.43166592149, 221995.02880149524], [1.37e-9, 1.706577092, 12566.08438968], [1.29e-9, 2.80667872683, 6016.4688082696], [1.13e-9, 3.58302904101, 25685.872802808], [1.09e-9, 3.26403795962, 6819.8803620868], [1.22e-9, 0.34120688202, 1162.4747044078], [1.06e-9, 1.59721172719, 17782.7320727842], [1.44e-9, 2.28891651774, 12489.8856287072], [1.37e-9, 5.82029768354, 44809.6502008634], [1.34e-9, 1.26539983018, 5331.3574437408], [1.03e-9, 5.96518130595, 6321.1035226272], [1.09e-9, 0.33808549034, 11300.5842213564], [1.29e-9, 5.8918727719, 12029.3471878874], [1.22e-9, 5.77325634636, 11919.140866668], [1.07e-9, 6.2499898935, 77690.75950573849], [1.07e-9, 1.00535580713, 77736.78343050249], [1.15e-9, 5.86963518266, 12721.572099417], [1.02e-9, 5.66283467269, 5540.0857894588], [1.43e-9, 0.24122178432, 4214.0690150848], [1.43e-9, 0.88529649733, 7576.560073574], [1.07e-9, 2.92124030351, 31415.379249957], [1e-9, 5.99485644501, 4061.2192153944], [1.03e-9, 2.41941934525, 5547.1993364596], [1.04e-9, 4.44106051277, 2118.7638603784], [1.1e-9, 0.37559635174, 5863.5912061162], [1.24e-9, 2.55619029611, 12539.853380183], [1.1e-9, 3.66952094465, 238004.5241572363], [1.12e-9, 4.32512422724, 97238.62754448749], [1.2e-9, 1.26895630075, 12043.574281889], [9.7e-10, 5.42612959752, 7834.1210726394], [9.4e-10, 2.56461130309, 19004.6479494084], [1.05e-9, 5.68272475301, 16522.6597160022], [1.17e-9, 3.65425622684, 34520.3093093808], [1.08e-9, 1.24206843948, 84672.47584450469], [9.8e-10, 0.13589994287, 11080.1715789176], [9.7e-10, 2.46722096722, 71980.63357473118], [9.5e-10, 5.36958330451, 6288.5987742988], [9.6e-10, 0.20796618776, 18139.2945014159], [1.11e-9, 5.01961920313, 11823.1616394502], [9e-10, 2.72355843779, 26880.3198130326], [9.9e-10, 0.90164266199, 18635.9284545362], [1.26e-9, 4.78722177847, 305281.9430710488], [1.24e-9, 5.00979495566, 172146.9713405403], [9e-10, 4.50544881196, 40077.61957352], [1.04e-9, 5.6367968071, 2787.0430238574], [9.1e-10, 5.43564326147, 6272.0301497275], [1e-9, 2.00639461597, 12323.4230960088], [1.17e-9, 2.35555589778, 83286.91426955358], [1.05e-9, 2.59824000109, 30666.1549584328], [9e-10, 2.35779490026, 12491.3701014155], [8.9e-10, 3.57152453732, 11720.0688652316], [9.5e-10, 5.67015349858, 14919.0178537546], [8.7e-10, 1.86043406047, 27707.5424942948], [1.06e-9, 3.04150600352, 22345.2603761082], [8.2e-10, 5.58298993353, 10241.2022911672], [8.3e-10, 3.10607039533, 36147.4098773004], [9.4e-10, 5.47749711149, 9924.8104215106], [8.2e-10, 4.71988314145, 15141.390794312], [9.6e-10, 3.89073946348, 6379.0550772092], [1.1e-9, 4.92131611151, 5621.8429232104], [1.1e-9, 4.89978492291, 72140.6286666874], [9.7e-10, 5.20764563059, 6303.4311693902], [8.5e-10, 1.61269222311, 33326.5787331742], [9.3e-10, 1.32651591333, 23020.65308658799], [9e-10, 0.5773301638, 26482.1708096244], [7.8e-10, 3.99588630754, 11293.4706743556], [1.06e-9, 3.92012705073, 62883.3551395136], [9.8e-10, 2.94397773524, 316.3918696566], [7.6e-10, 3.96310417608, 29026.48522950779], [9.8e-10, 0.95914722366, 48739.859897083], [7.8e-10, 1.97068528043, 90279.92316810328], [7.6e-10, 0.23027966596, 21424.4666443034], [7.9e-10, 1.46227790922, 8982.810669309], [7.8e-10, 2.28840998832, 266.6070417218], [7.1e-10, 1.5194076559, 33794.5437235286], [7.6e-10, 0.22880641443, 57375.8019008462], [9.7e-10, 0.39449562097, 24279.10701821359], [7.5e-10, 2.77638584795, 12964.300703391], [7.7e-10, 5.18846946344, 11520.9968637952], [6.8e-10, 0.50006599129, 4274.5183108324], [7.5e-10, 2.07323762803, 15664.03552270859], [7.7e-10, 0.4666517878, 16207.886271502], [8.1e-10, 4.10452219483, 161710.6187862324], [7.1e-10, 3.91415328513, 7875.6718636242], [8.1e-10, 0.91938383406, 74.7815985673], [8.3e-10, 4.69916218791, 23006.42599258639], [6.9e-10, 0.98999300277, 6393.2821712108], [6.5e-10, 5.41938745446, 28628.3362260996], [7.3e-10, 2.45564765251, 15508.6151232744], [6.5e-10, 3.02336771694, 5959.570433334], [6.4e-10, 0.18375587635, 1066.49547719], [8e-10, 5.81239171612, 12341.8069042809], [6.6e-10, 2.15105504851, 38.0276726358], [6.7e-10, 5.14047250153, 9814.6041002912], [6.2e-10, 2.43313614978, 10138.1095169486], [6.8e-10, 2.24442548639, 24383.0791084414], [7.8e-10, 1.39649333997, 9411.4646150872], [5.9e-10, 4.95362151577, 35707.7100829074], [7.3e-10, 1.35229143121, 5327.4761083828], [5.7e-10, 3.16018882154, 5490.300961524], [7.2e-10, 5.91833527334, 10881.0995774812], [6.7e-10, 0.66414713064, 29864.334027309], [6.5e-10, 0.30352816135, 7018.9523635232], [5.9e-10, 5.36231868425, 10239.5838660108], [5.6e-10, 3.22196331515, 2636.725472637], [6.8e-10, 5.32086226658, 3116.6594122598], [5.9e-10, 1.63156134967, 61306.0115970658], [5.4e-10, 4.29491690425, 21947.1113727], [7e-10, 0.29271565928, 6528.9074962208], [5.7e-10, 5.89190132575, 34513.2630726828], [5.4e-10, 2.51856815404, 6279.1945146334], [7.4e-10, 1.38235845304, 9967.4538999816], [5.4e-10, 0.92276712152, 6286.9571853494], [7e-10, 5.00933012248, 6453.7487206106], [5.3e-10, 3.86543309344, 32370.9789915656], [5.5e-10, 4.51794544854, 34911.412076091], [6.3e-10, 5.41479412056, 11502.8376165305], [6.3e-10, 2.34416220742, 11510.7019230567], [5.6e-10, 0.91310629913, 9910.583327509], [6.7e-10, 4.03308763854, 34596.3646546524], [6e-10, 5.57024703495, 5756.9080032458], [7.2e-10, 2.80863088166, 10866.8724834796], [6.6e-10, 6.12047940728, 12074.488407524], [5.1e-10, 2.59519527563, 11396.5634485742], [6.2e-10, 5.14746754396, 25287.7237993998], [5.4e-10, 2.50994032776, 5999.2165311262], [5.1e-10, 4.51195861837, 29822.7832363242], [5.9e-10, 0.44167237876, 250570.6758572191], [5.1e-10, 3.6884906676, 6262.7205305926], [4.9e-10, 0.54704693048, 22594.05489571199], [6.5e-10, 2.38423614501, 52670.0695933026], [6.9e-10, 5.34363738671, 66813.5648357332], [5.6e-10, 2.67216180349, 17892.93839400359], [4.9e-10, 4.18361320516, 18606.4989460002], [5.5e-10, 0.83886167974, 20452.8694122218], [5e-10, 1.46327331958, 37455.7264959744], [5.8e-10, 3.34847975377, 33990.6183442862], [6.5e-10, 1.45522693982, 76251.32777062019], [5.6e-10, 2.356506642, 37724.7534197482], [4.8e-10, 1.80689447612, 206.1855484372], [5.6e-10, 3.84224878744, 5483.254724826], [5.3e-10, 0.17334326094, 77717.29458646949], [5.3e-10, 0.79879700631, 77710.24834977149], [4.7e-10, 0.43240779709, 735.8765135318], [5.3e-10, 4.58786566028, 11616.976091013], [4.8e-10, 6.20230111054, 4171.4255366138], [5.2e-10, 2.9171905303, 6993.0088985497], [5.7e-10, 3.42008310383, 50317.2034395308], [4.8e-10, 0.12356889012, 13362.4497067992], [6e-10, 5.52056066934, 949.1756089698], [4.5e-10, 3.37963782356, 10763.779709261], [4.7e-10, 5.50958184902, 12779.4507954208], [5.2e-10, 5.42770349015, 310145.1528239236], [6.1e-10, 2.93237974631, 5791.4125575326], [4.4e-10, 2.87440620802, 8584.6616659008], [4.6e-10, 4.0314179656, 10667.8004820432], [4.4e-10, 1.21579107625, 6272.4391846416], [4.7e-10, 2.57670800912, 11492.542675792], [4.4e-10, 3.62570223167, 63658.8777508376], [5.1e-10, 0.84531181151, 12345.739057544], [4.6e-10, 1.17584556517, 149.5631971346], [4.3e-10, 0.01524970172, 37853.8754993826], [4.3e-10, 0.79038834934, 640.8776073822], [4.4e-10, 2.22554419931, 6293.7125153412], [4.9e-10, 1.01528394907, 149144.46708624958], [4.1e-10, 3.27146326065, 8858.3149443206], [4.5e-10, 3.03765521215, 65236.2212932854], [5.8e-10, 5.45843180927, 1975.492545856], [4.1e-10, 1.32190847146, 2547.8375382324], [4.7e-10, 3.67626039848, 28313.288804661], [4.7e-10, 6.21438985953, 10991.3058987006], [4e-10, 2.37237751212, 8273.8208670324], [5.6e-10, 1.09773690181, 77376.2010224076], [4e-10, 2.35698541041, 2699.7348193176], [4.3e-10, 5.28030897946, 17796.9591667858], [5.4e-10, 2.59175932091, 22910.44676536859], [5.5e-10, 0.07988985505, 83467.15635301729], [4.1e-10, 4.47510694062, 5618.3198048614], [4e-10, 1.35670430524, 27177.8515292002], [4.1e-10, 2.48011323946, 6549.6828917132], [5e-10, 2.56387920528, 82576.9812209953], [4.2e-10, 4.78798367468, 7856.89627409019], [4.7e-10, 2.75482175292, 18202.21671665939], [3.9e-10, 1.97008298629, 24491.4257925834], [4.2e-10, 4.04346599946, 7863.9425107882], [3.9e-10, 3.0103393642, 853.196381752], [3.8e-10, 0.49178679251, 38650.173506199], [4.4e-10, 1.35931241699, 21393.5419698576], [3.6e-10, 4.86047906533, 4157.1984426122], [4.3e-10, 5.64354880978, 1062.9050485382], [3.9e-10, 3.92736779879, 3903.9113764198], [4e-10, 5.3969491832, 9498.2122306346], [4.3e-10, 2.40863861919, 29424.634232916], [4.6e-10, 2.08022244271, 12573.2652469836], [5e-10, 6.15760345261, 78051.34191383338]],
    "1": [[0.00103018607, 1.10748968172, 6283.0758499914], [0.00001721238, 1.06442300386, 12566.1516999828], [0.00000702217, 3.14159265359, 0], [3.2345e-7, 1.02168583254, 18849.2275499742], [3.0801e-7, 2.84358443952, 5507.5532386674], [2.4978e-7, 1.31906570344, 5223.6939198022], [1.8487e-7, 1.42428709076, 1577.3435424478], [1.0077e-7, 5.91385248388, 10977.078804699], [8.635e-8, 0.27158192945, 5486.777843175], [8.654e-8, 1.42046854427, 6275.9623029906], [5.069e-8, 1.68613408916, 5088.6288397668], [4.985e-8, 6.01402338185, 6286.5989683404], [4.667e-8, 5.98749245692, 529.6909650946], [4.395e-8, 0.51800423445, 4694.0029547076], [3.87e-8, 4.74932206877, 2544.3144198834], [3.755e-8, 5.07053801166, 796.2980068164], [4.1e-8, 1.08424801084, 9437.762934887], [3.518e-8, 0.02290216978, 83996.84731811189], [3.436e-8, 0.94937503872, 71430.69561812909], [3.221e-8, 6.15628775321, 2146.1654164752], [3.418e-8, 5.4115158188, 775.522611324], [2.863e-8, 5.48433323746, 10447.3878396044], [2.525e-8, 0.24296913555, 398.1490034082], [2.205e-8, 4.94892172085, 6812.766815086], [2.186e-8, 0.41991932164, 8031.0922630584], [2.828e-8, 3.41986300734, 2352.8661537718], [2.554e-8, 6.13241770582, 6438.4962494256], [1.932e-8, 5.31374587091, 8429.2412664666], [2.427e-8, 3.09118902115, 4690.4798363586], [1.73e-8, 1.53685999718, 4705.7323075436], [2.25e-8, 3.6883639562, 7084.8967811152], [2.094e-8, 1.281690604, 1748.016413067], [1.483e-8, 3.22226346483, 7234.794256242], [1.434e-8, 0.81293662216, 14143.4952424306], [1.754e-8, 3.22883705112, 6279.5527316424], [1.583e-8, 4.09815978783, 11499.6562227928], [1.575e-8, 5.53890314149, 3154.6870848956], [1.847e-8, 1.82041234937, 7632.9432596502], [1.499e-8, 3.63177937611, 11513.8833167944], [1.337e-8, 4.64442556061, 6836.6452528338], [1.275e-8, 2.69329661394, 1349.8674096588], [1.348e-8, 6.15284035323, 5746.271337896], [1.126e-8, 3.35676107739, 17789.845619785], [1.47e-8, 3.65282991735, 1194.4470102246], [1.101e-8, 4.4974742767, 4292.3308329504], [1.168e-8, 2.58033028504, 13367.9726311066], [1.236e-8, 5.64980098028, 5760.4984318976], [9.85e-9, 0.65326301914, 5856.4776591154], [9.28e-9, 2.3255501829, 10213.285546211], [1.073e-8, 5.82672338169, 12036.4607348882], [9.18e-9, 0.76907130762, 16730.4636895958], [8.76e-9, 1.50335727807, 11926.2544136688], [1.023e-8, 5.62071200879, 6256.7775301916], [8.53e-9, 0.6567813463, 155.4203994342], [8.02e-9, 4.10519132094, 951.7184062506], [8.59e-9, 1.42880883564, 5753.3848848968], [9.92e-9, 1.1423800161, 1059.3819301892], [8.14e-9, 1.63584008733, 6681.2248533996], [6.64e-9, 4.55039663226, 5216.5803728014], [6.27e-9, 1.50782904323, 5643.1785636774], [6.44e-9, 4.19480024859, 6040.3472460174], [5.9e-9, 6.18371704849, 4164.311989613], [6.35e-9, 0.5242358477, 6290.1893969922], [6.5e-9, 0.97935492869, 25132.3033999656], [5.68e-9, 2.30121525349, 10973.55568635], [5.49e-9, 5.26737827342, 3340.6124266998], [5.47e-9, 2.20143332641, 1592.5960136328], [5.26e-9, 0.92464258271, 11371.7046897582], [4.93e-9, 5.91036281399, 3894.1818295422], [4.83e-9, 1.6600571154, 12168.0026965746], [5.14e-9, 3.59683072524, 10969.9652576982], [5.16e-9, 3.97164781773, 17298.1823273262], [5.29e-9, 5.0353867768, 9917.6968745098], [4.87e-9, 2.50544745305, 6127.6554505572], [4.19e-9, 4.05235655996, 10984.1923516998], [5.38e-9, 5.54081539813, 553.5694028424], [4.02e-9, 2.16859478359, 7860.4193924392], [5.52e-9, 2.32219865498, 11506.7697697936], [3.67e-9, 3.39145698451, 6496.3749454294], [3.6e-9, 5.34467204596, 7079.3738568078], [3.34e-9, 3.61346365667, 11790.6290886588], [4.54e-9, 0.28755421898, 801.8209311238], [4.19e-9, 3.69613970002, 10575.4066829418], [3.19e-9, 0.30793759304, 16200.7727245012], [3.76e-9, 5.81560210508, 7058.5984613154], [3.64e-9, 1.08425056923, 6309.3741697912], [2.94e-9, 4.54798604178, 11856.2186514245], [2.9e-9, 1.26451946335, 8635.9420037632], [3.94e-9, 4.15683669084, 26.2983197998], [2.6e-9, 5.09424572996, 10177.2576795336], [2.41e-9, 2.25766000302, 11712.9553182308], [2.39e-9, 1.06936978753, 242.728603974], [2.76e-9, 3.44260568764, 5884.9268465832], [2.55e-9, 5.38496803122, 21228.3920235458], [3.07e-9, 4.24313885601, 3738.761430108], [2.13e-9, 3.44661200485, 213.299095438], [1.98e-9, 0.69427265195, 1990.745017041], [1.95e-9, 5.16563409007, 12352.8526045448], [2.13e-9, 3.89937836808, 13916.0191096416], [2.14e-9, 4.00445200772, 5230.807466803], [1.84e-9, 5.59805976614, 6283.14316029419], [1.84e-9, 2.85275392124, 7238.6755916], [1.79e-9, 2.54259058252, 14314.1681130498], [2.36e-9, 5.58826125715, 6069.7767545534], [1.89e-9, 2.72689937708, 6062.6632075526], [1.84e-9, 6.04216273598, 6283.0085396886], [2.25e-9, 1.66128561344, 4732.0306273434], [2.3e-9, 3.62591335086, 6284.0561710596], [1.72e-9, 0.97566476085, 3930.2096962196], [1.62e-9, 2.19467339429, 18073.7049386502], [2.15e-9, 1.04672844028, 3496.032826134], [1.82e-9, 5.17782354566, 17253.04110768959], [1.67e-9, 2.17754938066, 6076.8903015542], [1.67e-9, 4.75672473773, 17267.26820169119], [1.49e-9, 0.80944185798, 709.9330485583], [1.49e-9, 0.17584214812, 9779.1086761254], [1.92e-9, 5.00680790235, 11015.1064773348], [1.41e-9, 4.38420380014, 4136.9104335162], [1.58e-9, 4.60969054283, 9623.6882766912], [1.33e-9, 3.30507062245, 154717.6098876827], [1.66e-9, 6.13191098325, 3.523118349], [1.81e-9, 1.60715321141, 7.1135470008], [1.5e-9, 5.28136702046, 13517.8701062334], [1.42e-9, 0.49788089569, 25158.6017197654], [1.24e-9, 6.03440459813, 9225.539273283], [1.24e-9, 0.99251562639, 65147.6197681377], [1.28e-9, 1.92032744711, 22483.84857449259], [1.24e-9, 3.99739675184, 4686.8894077068], [1.21e-9, 2.37814805239, 167283.7615876655], [1.23e-9, 5.6231511294, 5642.1982426092], [1.17e-9, 5.81755956156, 12569.6748183318], [1.57e-9, 3.40236948518, 16496.3613962024], [1.3e-9, 2.10499918142, 1589.0728952838], [1.16e-9, 0.55839966736, 5849.3641121146], [1.23e-9, 5.81645568991, 6282.0955289232], [1.1e-9, 0.42176497674, 6172.869528772], [1.5e-9, 4.26279600865, 3128.3887650958], [1.06e-9, 2.27436561182, 5429.8794682394], [1.14e-9, 1.52894564202, 12559.038152982], [1.21e-9, 0.39459045915, 12132.439962106], [1.04e-9, 2.41845930933, 426.598190876], [1.09e-9, 5.82786999856, 16858.4825329332], [1.02e-9, 4.4662648491, 23543.23050468179], [1e-9, 2.93812275274, 4535.0594369244], [9.7e-10, 3.97935904984, 6133.5126528568], [9.8e-10, 0.87616810121, 6525.8044539654], [1.1e-9, 6.22339014386, 12146.6670561076], [9.8e-10, 3.17344332543, 10440.2742926036], [9.6e-10, 2.44128701699, 3097.88382272579], [9.9e-10, 5.75642493267, 7342.4577801806], [9e-10, 0.18984343165, 13119.72110282519], [9.9e-10, 5.58884724219, 2388.8940204492], [9.1e-10, 6.04278320182, 20426.571092422], [8e-10, 1.29028142103, 5650.2921106782], [8.6e-10, 3.94529200528, 10454.5013866052], [8.5e-10, 1.92836879835, 29088.811415985], [7.6e-10, 2.70726317966, 143571.32428481648], [9.1e-10, 5.63859073351, 8827.3902698748], [7.6e-10, 1.80783856698, 28286.9904848612], [7.5e-10, 3.40858032804, 5481.2549188676], [7e-10, 4.53719487231, 17256.6315363414], [8.9e-10, 1.10064490942, 11769.8536931664], [6.6e-10, 2.78384937771, 536.8045120954], [6.8e-10, 3.88199295043, 17260.1546546904], [8.8e-10, 3.88075269535, 7477.522860216], [6.1e-10, 6.17558202197, 11087.2851259184], [6e-10, 4.34824715818, 6206.8097787158], [8.2e-10, 4.59843208943, 9388.0059094152], [7.9e-10, 1.63139280394, 4933.2084403326], [8.1e-10, 1.55550779371, 9380.9596727172], [7.8e-10, 4.20905757519, 5729.506447149], [5.8e-10, 5.76889633224, 3634.6210245184], [6e-10, 0.93813100594, 12721.572099417], [7.1e-10, 6.11408885148, 8662.240323563], [5.7e-10, 5.48112524468, 18319.5365848796], [7e-10, 0.01749174864, 14945.3161735544], [7.4e-10, 1.0997604582, 16460.33352952499], [5.6e-10, 1.63036186739, 15720.8387848784], [5.5e-10, 4.86788348404, 13095.8426650774], [6e-10, 5.93729841267, 12539.853380183], [5.4e-10, 0.22608242982, 15110.4661198662], [5.4e-10, 2.30250047594, 16062.1845261168], [6.4e-10, 2.13513754101, 7875.6718636242], [5.9e-10, 5.87963500139, 5331.3574437408], [5.8e-10, 2.30546168615, 955.5997416086], [4.9e-10, 1.93839278478, 5333.9002410216], [5.4e-10, 5.80331607119, 12043.574281889], [5.4e-10, 4.44671053809, 4701.1165017084], [4.9e-10, 0.30241161485, 6805.6532680852], [4.6e-10, 2.76898193028, 6709.6740408674], [4.6e-10, 3.98449608961, 98068.53671630539], [4.9e-10, 3.72022009896, 12323.4230960088], [4.5e-10, 3.30065998328, 22003.9146348698], [4.8e-10, 0.71071357303, 6303.4311693902], [6.1e-10, 1.66030429494, 6262.300454499], [4.7e-10, 1.26317154881, 11919.140866668], [5.1e-10, 1.08020906825, 10988.808157535], [4.5e-10, 0.89150445122, 51868.2486621788], [4.3e-10, 0.57756724285, 24356.7807886416], [4.3e-10, 1.61526242998, 6277.552925684], [4.5e-10, 2.96132920534, 8982.810669309], [4.3e-10, 5.74295325645, 11403.676995575], [5.5e-10, 3.14274403422, 33019.0211122046], [5.7e-10, 0.06379726305, 15671.0817594066], [4.1e-10, 2.53761820726, 6262.7205305926], [4e-10, 1.53130436944, 18451.07854656599], [5.2e-10, 1.71451922581, 1551.045222648], [5.5e-10, 0.89439119424, 11933.3679606696], [4.5e-10, 3.88495384656, 60530.4889857418], [4e-10, 4.75740908001, 38526.574350872], [4e-10, 3.77498297348, 26087.9031415742], [3.9e-10, 2.97113832621, 2118.7638603784], [4e-10, 3.36050962605, 10021.8372800994], [4.7e-10, 1.67051113434, 6303.8512454838], [5.2e-10, 5.21827368711, 77713.7714681205], [4.7e-10, 4.26356628717, 21424.4666443034], [3.7e-10, 1.66712389942, 6819.8803620868], [3.7e-10, 0.65746800933, 12029.3471878874], [3.5e-10, 3.36255650927, 24072.9214697764], [3.6e-10, 0.11087914947, 10344.2950653858], [4e-10, 4.14725582115, 2787.0430238574], [3.5e-10, 5.93650887012, 31570.7996493912], [3.6e-10, 2.15108874765, 30774.5016425748], [3.6e-10, 1.75078825382, 16207.886271502], [3.4e-10, 2.75708224536, 12139.5535091068], [3.4e-10, 6.168913788, 24491.4257925834], [3.4e-10, 2.31528650443, 55798.4583583984], [3.2e-10, 4.21446357042, 15664.03552270859], [3.4e-10, 3.19783054699, 32217.2001810808], [3.9e-10, 1.24979117796, 6418.1409300268], [3.8e-10, 5.89832942685, 640.8776073822], [3.3e-10, 4.80200120107, 16723.350142595], [3.2e-10, 1.72442327688, 27433.88921587499], [3.5e-10, 4.44608896525, 18202.21671665939], [3.1e-10, 4.5279073128, 6702.5604938666], [3.4e-10, 3.96287980676, 18216.443810661], [3e-10, 5.06259854444, 226858.23855437007], [3.4e-10, 1.43910280005, 49515.382508407], [3e-10, 0.29303163371, 13521.7514415914], [2.9e-10, 2.0263384022, 11609.8625440122], [3e-10, 2.5492323024, 9924.8104215106], [3.2e-10, 4.91793198558, 11300.5842213564], [3e-10, 0.23284423547, 23581.2581773176], [2.9e-10, 1.62807736495, 639.897286314], [2.8e-10, 3.84568936822, 2699.7348193176], [2.9e-10, 1.83149729794, 29822.7832363242], [3.3e-10, 4.60320094415, 19004.6479494084], [2.7e-10, 1.86151121799, 6288.5987742988], [3e-10, 4.4649407224, 36147.4098773004], [2.8e-10, 5.19684492912, 5863.5912061162], [3.5e-10, 4.52695674113, 36949.2308084242], [2.7e-10, 3.52528177609, 10770.8932562618], [2.6e-10, 1.48499438453, 11080.1715789176], [3.5e-10, 2.82154380962, 19402.7969528166], [2.5e-10, 2.46339998836, 6279.4854213396], [2.6e-10, 4.97688894643, 16737.5772365966], [2.7e-10, 0.408271125, 12964.300703391], [2.9e-10, 4.15148654061, 45892.73043315699], [2.6e-10, 4.56404104286, 17796.9591667858], [2.5e-10, 2.89309528854, 6286.6662786432], [2.6e-10, 4.82914580957, 1066.49547719], [3.1e-10, 3.93096113738, 29864.334027309], [2.4e-10, 6.14987193584, 18606.4989460002], [2.4e-10, 3.74225964547, 29026.48522950779], [2.5e-10, 5.70460621565, 27707.5424942948], [2.5e-10, 5.33928840652, 15141.390794312], [2.3e-10, 2.37624087345, 17996.0311682222], [2.6e-10, 1.34231351782, 18875.525869774], [2.2e-10, 5.5079162612, 6245.0481773556], [2.4e-10, 1.33998410121, 19800.9459562248], [2.3e-10, 0.2251228089, 6279.7894925736], [2.2e-10, 1.17576471775, 11925.2740926006], [2.2e-10, 3.5860360664, 6915.8595893046], [2.3e-10, 3.21621246666, 6286.3622074092], [2.9e-10, 2.09564449439, 15265.8865193004], [2.2e-10, 4.74660932338, 28230.18722269139], [2.1e-10, 2.30688751432, 5999.2165311262], [2.8e-10, 3.92087592807, 18208.349942592], [2.1e-10, 3.22643339385, 25934.1243310894], [2.1e-10, 3.04956726238, 6566.9351688566], [2.7e-10, 5.35645770522, 33794.5437235286], [2.5e-10, 5.91542362188, 6489.2613984286], [2e-10, 1.52296293311, 135.0650800354], [1.9e-10, 1.78134428631, 156137.47598479927], [1.9e-10, 0.34388684087, 5327.4761083828], [2.6e-10, 3.41701003233, 25287.7237993998], [1.9e-10, 2.86664271911, 18422.62935909819], [1.9e-10, 4.71432851499, 77690.75950573849], [1.9e-10, 2.54227398241, 77736.78343050249], [2e-10, 5.91915117116, 48739.859897083]],
    "2": [[0.00004359385, 5.78455133808, 6283.0758499914], [0.00000123633, 5.57935427994, 12566.1516999828], [1.2342e-7, 3.14159265359, 0], [8.792e-8, 3.62777893099, 77713.7714681205], [5.689e-8, 1.86958905084, 5573.1428014331], [3.302e-8, 5.47034879713, 18849.2275499742], [1.471e-8, 4.47964125007, 5507.5532386674], [1.013e-8, 2.81323115556, 5223.6939198022], [8.54e-9, 3.107765669, 1577.3435424478], [1.102e-8, 2.84173992403, 161000.6857376741], [6.48e-9, 5.47348203398, 775.522611324], [6.08e-9, 1.37894173533, 6438.4962494256], [4.99e-9, 4.4164924225, 6286.5989683404], [4.16e-9, 0.90332697974, 10977.078804699], [4.04e-9, 3.2056726953, 5088.6288397668], [3.51e-9, 1.81081728907, 5486.777843175], [4.66e-9, 3.65086758149, 7084.8967811152], [4.58e-9, 5.38585314743, 149854.4001348079], [3.04e-9, 3.51015066341, 796.2980068164], [2.66e-9, 6.17413982699, 6836.6452528338], [2.81e-9, 1.8387467254, 4694.0029547076], [2.62e-9, 1.41420110644, 2146.1654164752], [2.64e-9, 3.14103683911, 71430.69561812909], [3.19e-9, 5.35037932146, 3154.6870848956], [2.38e-9, 2.17695432424, 155.4203994342], [2.29e-9, 4.7596958807, 7234.794256242], [2.91e-9, 4.61776401638, 4690.4798363586], [2.11e-9, 0.21864885298, 4705.7323075436], [2.04e-9, 4.22895113488, 1349.8674096588], [1.95e-9, 4.58550676556, 529.6909650946], [2.55e-9, 2.81442711144, 1748.016413067], [1.82e-9, 5.70454011389, 6040.3472460174], [1.8e-9, 6.02147727878, 4292.3308329504], [1.86e-9, 1.58690991244, 6309.3741697912], [1.67e-9, 2.88802733052, 9437.762934887], [1.66e-9, 1.99990574734, 8031.0922630584], [1.6e-9, 0.04412738495, 2544.3144198834], [1.97e-9, 2.01089431842, 1194.4470102246], [1.65e-9, 5.78372596774, 83996.84731811189], [2.14e-9, 3.38300910371, 7632.9432596502], [1.4e-9, 0.36669664351, 10447.3878396044], [1.51e-9, 0.95519595275, 6127.6554505572], [1.36e-9, 1.48417295645, 2352.8661537718], [1.28e-9, 5.48057748834, 951.7184062506], [1.26e-9, 5.26866506592, 6279.5527316424], [1.27e-9, 3.77552907014, 6812.766815086], [1.03e-9, 4.95897533789, 398.1490034082], [1.04e-9, 0.70183576826, 1592.5960136328], [1.01e-9, 1.14481598642, 3894.1818295422], [1.31e-9, 0.76624310306, 553.5694028424], [1.09e-9, 5.41063597567, 6256.7775301916], [7.8e-10, 5.84775340741, 242.728603974], [9.7e-10, 1.94685257714, 11856.2186514245], [1e-9, 5.19725292131, 244287.60000722768], [7.6e-10, 0.70480774041, 8429.2412664666], [8e-10, 6.18430772683, 1059.3819301892], [6.8e-10, 5.29561709093, 14143.4952424306], [8.5e-10, 5.39487308005, 25132.3033999656], [5.5e-10, 5.16874637579, 7058.5984613154], [6.3e-10, 0.48494730699, 801.8209311238], [5.8e-10, 4.07254840265, 13367.9726311066], [5.1e-10, 3.89696552232, 12036.4607348882], [5.1e-10, 5.56335232286, 1990.745017041], [6e-10, 2.2504659671, 8635.9420037632], [4.9e-10, 5.58163417371, 6290.1893969922], [5.1e-10, 3.87240194908, 26.2983197998], [5.1e-10, 4.19300909995, 7860.4193924392], [4.1e-10, 3.97169191582, 10973.55568635], [4.1e-10, 3.5708091923, 7079.3738568078], [5.6e-10, 2.76959005761, 90955.5516944961], [4.2e-10, 1.91461189163, 7477.522860216], [4.2e-10, 0.42775891995, 10213.285546211], [4.2e-10, 1.06925480488, 709.9330485583], [3.8e-10, 6.17935925345, 9917.6968745098], [5e-10, 0.81691517401, 11506.7697697936], [5.3e-10, 1.45828359397, 233141.3144043615], [3.8e-10, 3.32444534628, 5643.1785636774], [4.7e-10, 6.21543665927, 6681.2248533996], [3.7e-10, 0.3635930998, 10177.2576795336], [4.5e-10, 5.29587706357, 10575.4066829418], [3.4e-10, 5.63446915337, 6525.8044539654], [3.4e-10, 5.36385158519, 4933.2084403326], [3.5e-10, 5.36152295839, 25158.6017197654], [4.2e-10, 5.08837645072, 11015.1064773348], [4.2e-10, 4.22496037505, 88860.05707098669], [3.9e-10, 1.99171699618, 6284.0561710596], [2.9e-10, 3.1908862817, 11926.2544136688], [2.9e-10, 0.14996158324, 12168.0026965746], [3e-10, 1.58346276808, 9779.1086761254], [2.6e-10, 4.16210340581, 12569.6748183318], [3.6e-10, 2.74684637873, 3738.761430108], [2.6e-10, 0.7282491532, 1589.0728952838], [3.1e-10, 5.34906371821, 143571.32428481648], [2.5e-10, 0.10240267494, 22483.84857449259], [3e-10, 3.47110495524, 14945.3161735544], [2.6e-10, 3.89359701125, 5753.3848848968], [2.4e-10, 1.18744224678, 4535.0594369244], [3.3e-10, 2.99317143244, 3930.2096962196], [2.4e-10, 1.57253767584, 6496.3749454294], [2.4e-10, 3.47434797542, 4136.9104335162], [2.2e-10, 3.91230073719, 6275.9623029906], [2.5e-10, 4.02978941287, 3128.3887650958], [2.3e-10, 1.07724492065, 12721.572099417], [2.1e-10, 1.89591807148, 16730.4636895958], [2.5e-10, 2.42198937013, 5729.506447149], [2e-10, 1.78163489101, 17789.845619785], [2.1e-10, 0.49258939822, 29088.811415985], [2.6e-10, 4.14947806747, 2388.8940204492], [2.7e-10, 2.54785812264, 3496.032826134], [2e-10, 4.29944129273, 16858.4825329332], [2.1e-10, 5.97796936723, 7.1135470008], [1.9e-10, 0.80292033311, 16062.1845261168], [2.4e-10, 4.89894141052, 17260.1546546904], [2.5e-10, 1.37003752175, 6282.0955289232], [2.2e-10, 4.92663152168, 18875.525869774], [2.3e-10, 5.68902059771, 16460.33352952499], [2.3e-10, 3.03021283729, 66567.48586525429], [1.6e-10, 3.89713736666, 5331.3574437408], [1.6e-10, 5.68562539832, 12559.038152982], [1.6e-10, 3.95085099736, 3097.88382272579], [1.6e-10, 3.99041783945, 6283.14316029419], [2e-10, 6.106439191, 167283.7615876655], [1.5e-10, 4.09775914607, 11712.9553182308], [1.6e-10, 5.717699407, 17298.1823273262], [1.6e-10, 3.28894009404, 5884.9268465832], [1.5e-10, 4.4256424368, 13517.8701062334], [1.6e-10, 4.4345208093, 6283.0085396886], [1.4e-10, 1.44384279999, 4164.311989613], [1.4e-10, 4.47380919159, 11790.6290886588], [1.4e-10, 4.77646531825, 7342.4577801806], [1.1e-10, 2.56768522896, 5481.2549188676], [1.1e-10, 1.514433322, 16200.7727245012], [1.1e-10, 0.88708889185, 21228.3920235458], [1.4e-10, 4.50116508534, 640.8776073822]],
    "3": [[0.00000144595, 4.27319433901, 6283.0758499914], [6.729e-8, 3.91706261708, 12566.1516999828], [7.74e-9, 0, 0], [2.47e-9, 3.73021571217, 18849.2275499742], [3.6e-10, 2.8008140905, 6286.5989683404], [3.3e-10, 5.62990083112, 6127.6554505572], [1.8e-10, 3.72826142555, 6438.4962494256], [1.6e-10, 4.26011484232, 6525.8044539654], [1.4e-10, 3.47817116396, 6256.7775301916], [1.2e-10, 3.55747379482, 25132.3033999656], [1e-10, 4.43995693209, 4705.7323075436], [1e-10, 4.2804525547, 83996.84731811189], [9e-11, 5.36457057335, 6040.3472460174], [8e-11, 1.78458957263, 5507.5532386674], [9e-11, 0.4727519993, 6279.5527316424], [9e-11, 1.34741231639, 6309.3741697912], [9e-11, 0.77092900708, 5729.506447149], [7e-11, 3.50146897332, 7058.5984613154], [5e-11, 2.890710617, 775.522611324], [6e-11, 2.36514111314, 6836.6452528338]],
    "4": [[3.858e-8, 2.56389016346, 6283.0758499914], [3.06e-9, 2.26911740541, 12566.1516999828], [5.3e-10, 3.44031471924, 5573.1428014331], [1.5e-10, 2.03136359366, 18849.2275499742], [1.3e-10, 2.05688873673, 77713.7714681205], [7e-11, 4.4121885448, 161000.6857376741], [4e-11, 5.33854414781, 6438.4962494256], [6e-11, 3.81514213664, 149854.4001348079], [4e-11, 4.26602478239, 6127.6554505572]],
    "5": [[8.6e-10, 1.21805304895, 6283.0758499914], [1.2e-10, 0.65572878044, 12566.1516999828]]
  },
  name: "earth",
  type: "B"
};

/***/ }),

/***/ 31115:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DMSToDeg = DMSToDeg;
exports.degToDMS = degToDMS;
exports["default"] = exports.secFromHourAngle = exports.secFromAngle = exports.degFromAngle = exports.angleFromSec = exports.angleFromMin = exports.angleFromDeg = exports.Time = exports.RA = exports.HourAngle = exports.Angle = void 0;
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module sexagesimal
 */

/**
 * Sexagesimal functions
 */

/**
 * Angle represents a general purpose angle.
 * Unit is radians.
 */
var Angle = /*#__PURE__*/function () {
  /**
  * constructs a new Angle value from sign, degree, minute, and second
  * components.
  * __One argument__
  * @param {Number} angle - (float) angle in radians
  * __Four arguments__
  * @param {Boolean} neg - sign, true if negative (required to attribute -0°30')
  * @param {Number} d - (int) degree
  * @param {Number} m - (int) minute
  * @param {Number} s - (float) second
  */
  function Angle(neg, d, m, s) {
    _classCallCheck(this, Angle);
    if (arguments.length === 1) {
      this.angle = neg;
    } else {
      this.setDMS(neg, d, m, s);
    }
  }
  /**
   * SetDMS sets the value of an FAngle from sign, degree, minute, and second
   * components.
   * The receiver is returned as a convenience.
   * @param {Boolean} neg - sign, true if negative
   * @param {Number} d - (int) degree
   * @param {Number} m - (int) minute
   * @param {Number} s - (float) second
   * @returns {Angle}
   */

  _createClass(Angle, [{
    key: "setDMS",
    value: function setDMS() {
      var neg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.0;
      this.angle = DMSToDeg(neg, d, m, s) * Math.PI / 180;
      return this;
    }
    /**
     * sets angle
     * @param {Number} angle - (float) angle in radians
     * @returns {Angle}
     */
  }, {
    key: "setAngle",
    value: function setAngle(rad) {
      this.angle = rad;
      return this;
    }
    /**
     * Rad returns the angle in radians.
     * @returns {Number} angle in radians
     */
  }, {
    key: "rad",
    value: function rad() {
      return this.angle;
    }
    /**
     * Deg returns the angle in degrees.
     * @returns {Number} angle in degree
     */
  }, {
    key: "deg",
    value: function deg() {
      return this.angle * 180 / Math.PI;
    }
    /**
     * toDMS converts to parsed sexagesimal angle component.
     */
  }, {
    key: "toDMS",
    value: function toDMS() {
      return degToDMS(this.deg());
    }
    /**
     * Print angle in degree using `d°m´s.ss″`
     * @param {Number} precision - precision of `s.ss`
     * @returns {String}
     */
  }, {
    key: "toString",
    value: function toString(precision) {
      var _this$toDMS = this.toDMS(),
        _this$toDMS2 = _slicedToArray(_this$toDMS, 4),
        neg = _this$toDMS2[0],
        d = _this$toDMS2[1],
        m = _this$toDMS2[2],
        s = _this$toDMS2[3];
      s = round(s, precision).toString().replace(/^0\./, '.');
      var str = (neg ? '-' : '') + (d + '°') + (m + '′') + (s + '″');
      return str;
    }
    /**
     * Print angle in degree using `d°.ff`
     * @param {Number} precision - precision of `.ff`
     * @returns {String}
     */
  }, {
    key: "toDegString",
    value: function toDegString(precision) {
      var _modf = modf(this.deg()),
        _modf2 = _slicedToArray(_modf, 2),
        i = _modf2[0],
        s = _modf2[1];
      s = round(s, precision).toString().replace(/^0\./, '.');
      var str = i + '°' + s;
      return str;
    }
  }]);
  return Angle;
}();
/**
 * HourAngle represents an angle corresponding to angular rotation of
 * the Earth in a specified time.
 *
 * Unit is radians.
 */

exports.Angle = Angle;
var HourAngle = /*#__PURE__*/function (_Angle) {
  _inherits(HourAngle, _Angle);
  var _super = _createSuper(HourAngle);
  function HourAngle() {
    _classCallCheck(this, HourAngle);
    return _super.apply(this, arguments);
  }
  _createClass(HourAngle, [{
    key: "setDMS",
    value:
    /**
    * NewHourAngle constructs a new HourAngle value from sign, hour, minute,
    * and second components.
    * @param {Boolean} neg
    * @param {Number} h - (int)
    * @param {Number} m - (int)
    * @param {Number} s - (float)
    */
    // constructor (neg, h, m, s) {
    // super(neg, h, m, s)
    // }

    /**
     * SetDMS sets the value of an FAngle from sign, degree, minute, and second
     * components.
     * The receiver is returned as a convenience.
     * @param {Boolean} neg - sign, true if negative
     * @param {Number} h - (int) hour
     * @param {Number} m - (int) minute
     * @param {Number} s - (float) second
     * @returns {Angle}
     */
    function setDMS() {
      var neg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.0;
      this.angle = DMSToDeg(neg, h, m, s) * 15 * Math.PI / 180;
      return this;
    }
    /**
     * Hour returns the hour angle as hours of time.
     * @returns hour angle
     */
  }, {
    key: "hour",
    value: function hour() {
      return this.angle * 12 / Math.PI; // 12 = 180 / 15
    }
  }, {
    key: "deg",
    value: function deg() {
      return this.hour();
    }
    /**
     * Print angle in `HʰMᵐs.ssˢ`
     * @param {Number} precision - precision of `s.ss`
     * @returns {String}
     */
  }, {
    key: "toString",
    value: function toString(precision) {
      var _this$toDMS3 = this.toDMS(),
        _this$toDMS4 = _slicedToArray(_this$toDMS3, 4),
        neg = _this$toDMS4[0],
        h = _this$toDMS4[1],
        m = _this$toDMS4[2],
        s = _this$toDMS4[3];
      s = round(s, precision).toString().replace(/^0\./, '.');
      var str = (neg ? '-' : '') + (h + 'ʰ') + (m + 'ᵐ') + (s + 'ˢ');
      return str;
    }
  }]);
  return HourAngle;
}(Angle);
/**
 * DMSToDeg converts from parsed sexagesimal angle components to decimal
 * degrees.
 * @param {Boolean} neg - sign, true if negative
 * @param {Number} d - (int) degree
 * @param {Number} m - (int) minute
 * @param {Number} s - (float) second
 * @returns {Number} angle in degree
 */

exports.HourAngle = HourAngle;
function DMSToDeg(neg, d, m, s) {
  s = ((d * 60 + m) * 60 + s) / 3600;
  if (neg) {
    return -s;
  }
  return s;
}
/**
 * DegToDMS converts from decimal degrees to parsed sexagesimal angle component.
 * @param {Number} deg - angle in degree
 * @returns {Array} [neg, d, m, s]
 *  {Boolean} neg - sign, true if negative
 *  {Number} d - (int) degree
 *  {Number} m - (int) minute
 *  {Number} s - (float) second
 */

function degToDMS(deg) {
  var neg = deg < 0;
  deg = Math.abs(deg);
  var _modf3 = modf(deg % 360),
    _modf4 = _slicedToArray(_modf3, 2),
    d = _modf4[0],
    s = _modf4[1];
  var _modf5 = modf(s * 60),
    _modf6 = _slicedToArray(_modf5, 2),
    m = _modf6[0],
    s1 = _modf6[1];
  s = round(s1 * 60); // may introduce an error < 1e13

  return [neg, d, m, s];
}
/**
 * TODO
 */

var RA = /*#__PURE__*/function (_HourAngle) {
  _inherits(RA, _HourAngle);
  var _super2 = _createSuper(RA);

  /**
   * constructs a new RA value from hour, minute, and second components.
   * Negative values are not supported, RA wraps values larger than 24
   * to the range [0,24) hours.
   * @param {Number} h - (int) hour
   * @param {Number} m - (int) minute
   * @param {Number} s - (float) second
   */
  function RA() {
    var _this;
    var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    _classCallCheck(this, RA);
    _this = _super2.call(this);
    var args = [].slice.call(arguments);
    if (args.length === 1) {
      _this.angle = h;
    } else {
      var hr = DMSToDeg(false, h, m, s) % 24;
      _this.angle = hr * 15 * Math.PI / 180;
    }
    return _this;
  }
  _createClass(RA, [{
    key: "hour",
    value: function hour() {
      var h = this.angle * 12 / Math.PI;
      return (24 + h % 24) % 24;
    }
  }]);
  return RA;
}(HourAngle);
/**
 * Time Angle
 * Unit is time in seconds.
 */

exports.RA = RA;
var Time = /*#__PURE__*/function () {
  /**
   * @param {Boolean} neg - set `true` if negative
   * @param {Number} h - (int) hour
   * @param {Number} m - (int) minute
   * @param {Number} s - (float) second
   */
  function Time(neg, h, m, s) {
    _classCallCheck(this, Time);
    if (arguments.length === 1) {
      this.time = neg;
    } else {
      this.setHMS(neg, h, m, s);
    }
  }
  _createClass(Time, [{
    key: "setHMS",
    value: function setHMS() {
      var neg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      s += (h * 60 + m) * 60;
      if (neg) {
        s = -s;
      }
      this.time = s;
    }
    /**
     * @returns {Number} time in seconds.
     */
  }, {
    key: "sec",
    value: function sec() {
      return this.time;
    }
    /**
     * @returns {Number} time in minutes.
     */
  }, {
    key: "min",
    value: function min() {
      return this.time / 60;
    }
    /**
     * @returns {Number} time in hours.
     */
  }, {
    key: "hour",
    value: function hour() {
      return this.time / 3600;
    }
    /**
     * @returns {Number} time in days.
     */
  }, {
    key: "day",
    value: function day() {
      return this.time / 3600 / 24;
    }
    /**
     * @returns {Number} time in radians, where 1 day = 2 Pi radians.
     */
  }, {
    key: "rad",
    value: function rad() {
      return this.time * Math.PI / 12 / 3600;
    }
    /**
     * convert time to HMS
     * @returns {Array} [neg, h, m, s]
     *  {Boolean} neg - sign, true if negative
     *  {Number} h - (int) hour
     *  {Number} m - (int) minute
     *  {Number} s - (float) second
     */
  }, {
    key: "toHMS",
    value: function toHMS() {
      var t = this.time;
      var neg = t < 0;
      t = neg ? -t : t;
      var h = Math.trunc(t / 3600);
      t = t - h * 3600;
      var m = Math.trunc(t / 60);
      var s = t - m * 60;
      return [neg, h, m, s];
    }
    /**
     * Print time using `HʰMᵐsˢ.ss`
     * @param {Number} precision - precision of `.ss`
     * @returns {String}
     */
  }, {
    key: "toString",
    value: function toString(precision) {
      var _this$toHMS = this.toHMS(),
        _this$toHMS2 = _slicedToArray(_this$toHMS, 4),
        neg = _this$toHMS2[0],
        h = _this$toHMS2[1],
        m = _this$toHMS2[2],
        s = _this$toHMS2[3];
      var _modf7 = modf(s),
        _modf8 = _slicedToArray(_modf7, 2),
        si = _modf8[0],
        sf = _modf8[1];
      if (precision === 0) {
        si = round(s, 0);
        sf = 0;
      } else {
        sf = round(sf, precision).toString().substr(1);
      }
      var str = (neg ? '-' : '') + (h + 'ʰ') + (m + 'ᵐ') + (si + 'ˢ') + (sf || '');
      return str;
    }
  }]);
  return Time;
}(); // units

exports.Time = Time;
var angleFromDeg = function angleFromDeg(deg) {
  return deg * Math.PI / 180;
};
exports.angleFromDeg = angleFromDeg;
var angleFromMin = function angleFromMin(min) {
  return min / 60 * Math.PI / 180;
};
exports.angleFromMin = angleFromMin;
var angleFromSec = function angleFromSec(sec) {
  return sec / 3600 * Math.PI / 180;
};
exports.angleFromSec = angleFromSec;
var degFromAngle = function degFromAngle(angle) {
  return angle * 180 / Math.PI;
};
exports.degFromAngle = degFromAngle;
var secFromAngle = function secFromAngle(angle) {
  return angle * 3600 * 180 / Math.PI;
};
exports.secFromAngle = secFromAngle;
var secFromHourAngle = function secFromHourAngle(ha) {
  return ha * 240 * 180 / Math.PI;
};
/**
 * separate fix `i` from fraction `f`
 * @private
 * @param {Number} float
 * @returns {Array} [i, f]
 *  {Number} i - (int) fix value
 *  {Number} f - (float) fractional portion; always > 1
 */

exports.secFromHourAngle = secFromHourAngle;
function modf(_float) {
  var i = Math.trunc(_float);
  var f = Math.abs(_float - i);
  return [i, f];
}
/**
 * Rounds `float` value by precision
 * @private
 * @param {Number} float - value to round
 * @param {Number} precision - (int) number of post decimal positions
 * @return {Number} rounded `float`
 */

function round(_float2, precision) {
  precision = precision === undefined ? 10 : precision;
  return parseFloat(_float2.toFixed(precision), 10);
}
var _default = {
  Angle: Angle,
  HourAngle: HourAngle,
  DMSToDeg: DMSToDeg,
  degToDMS: degToDMS,
  RA: RA,
  Time: Time,
  angleFromDeg: angleFromDeg,
  angleFromMin: angleFromMin,
  angleFromSec: angleFromSec,
  degFromAngle: degFromAngle,
  secFromAngle: secFromAngle,
  secFromHourAngle: secFromHourAngle
};
exports["default"] = _default;

/***/ }),

/***/ 31675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ TimeOffPolicySelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41992);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4644);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);















function TimeOffPolicySelectComponent_nb_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const policy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", policy_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", policy_r1 == null ? null : policy_r1.name, " ");
  }
}
let TimeOffPolicySelectComponent = /*#__PURE__*/(() => {
  let TimeOffPolicySelectComponent = class TimeOffPolicySelectComponent {
    set policyId(value) {
      if (value) {
        this._policyId = value;
        this.onChange(value);
        this.onTouched();
      }
    }
    get policyId() {
      return this._policyId;
    }
    set policy(value) {
      if (value) {
        this._policy = value;
      }
    }
    get policy() {
      return this._policy;
    }
    get ctrl() {
      return this._ctrl;
    }
    set ctrl(value) {
      this._ctrl = value;
    }
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get id() {
      return this._id;
    }
    set id(value) {
      this._id = value;
    }
    constructor(_store, timeOffService) {
      this._store = _store;
      this.timeOffService = timeOffService;
      this.policies = [];
      this.policies$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
      this.onChange = () => {};
      this.onTouched = () => {};
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      /*
       * Getter & Setter accessor for dynamic form control
       */
      this._ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .MJ();
    }
    ngOnInit() {
      this.policies$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.getTimeOffPolicies()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.policies$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    writeValue(policyId) {
      if (policyId) {
        this.policyId = policyId;
      }
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * On policy select
     *
     * @param selectedItem
     */
    onSelectedChange(policyId) {
      this.policy = this.getPolicyById(policyId);
      this.selectedChange.emit(this.policy || null);
    }
    /**
     * GET time off policies
     *
     * @returns
     */
    getTimeOffPolicies() {
      if (!this.organization) {
        return;
      }
      const {
        tenantId
      } = this._store.user;
      const {
        id: organizationId
      } = this.organization;
      this.timeOffService.getAllPolicies(['employees'], {
        organizationId,
        tenantId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .first */ .$)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(({
        items
      }) => this.policies = items)).subscribe();
    }
    getPolicyById(policyId) {
      return this.policies.find(policy => policyId === policy.id);
    }
    static {
      this.ɵfac = function TimeOffPolicySelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeOffPolicySelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .TimeOffService */ .a));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TimeOffPolicySelectComponent,
        selectors: [["ga-time-off-policy-select"]],
        inputs: {
          policyId: "policyId",
          policy: "policy",
          ctrl: "ctrl",
          placeholder: "placeholder",
          id: "id"
        },
        outputs: {
          selectedChange: "selectedChange"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => TimeOffPolicySelectComponent),
          multi: true
        }])],
        decls: 7,
        vars: 12,
        consts: [[1, "form-group"], [1, "label"], ["fullWidth", "", 3, "selectedChange", "ngModelChange", "formControl", "placeholder", "ngModel", "status"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function TimeOffPolicySelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "nb-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function TimeOffPolicySelectComponent_Template_nb_select_selectedChange_4_listener($event) {
              return ctx.onSelectedChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function TimeOffPolicySelectComponent_Template_nb_select_ngModelChange_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.policyId, $event) || (ctx.policyId = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, TimeOffPolicySelectComponent_nb_option_6_Template, 2, 2, "nb-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("for", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 8, "TIME_OFF_PAGE.POLICY.POLICY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.ctrl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 10, ctx.placeholder || "TIME_OFF_PAGE.SELECT_TIME_OFF_POLICY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.policyId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx.ctrl.invalid && (ctx.ctrl.touched || ctx.ctrl.dirty) ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.policies);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbOptionComponent */ .ZJ2, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  TimeOffPolicySelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .TimeOffService */ .a])], TimeOffPolicySelectComponent);
  return TimeOffPolicySelectComponent;
})();


/***/ }),

/***/ 34777:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(10748);

/***/ }),

/***/ 35395:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.reduceB1950ToJ2000 = reduceB1950ToJ2000;
exports.reduceB1950FK4ToJ2000FK5 = reduceB1950FK4ToJ2000FK5;
exports["default"] = exports.Elements = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * Elements are the orbital elements of a solar system object which change
 * from one equinox to another.
 *
 * @param {Number} inc  - inclination
 * @param {Number} node - longitude of ascending node (Ω)
 * @param {Number} peri - argument of perihelion (ω)
 */
var Elements = function Elements(inc, node, peri) {
  _classCallCheck(this, Elements);
  if (_typeof(inc) === 'object') {
    node = inc.pode;
    peri = inc.peri;
    inc = inc.inc;
  }
  this.inc = inc || 0;
  this.node = node || 0;
  this.peri = peri || 0;
}; // (24.4) p. 161

exports.Elements = Elements;
var S = 0.0001139788;
var C = 0.9999999935;
/**
 * ReduceB1950ToJ2000 reduces orbital elements of a solar system body from
 * equinox B1950 to J2000.
 *
 * @param {Elements} eFrom
 * @returns {Elements} eTo
 */

function reduceB1950ToJ2000(eFrom) {
  var W = eFrom.node - 174.298782 * Math.PI / 180;
  var _base$sincos = _base["default"].sincos(eFrom.inc),
    _base$sincos2 = _slicedToArray(_base$sincos, 2),
    si = _base$sincos2[0],
    ci = _base$sincos2[1];
  var _base$sincos3 = _base["default"].sincos(W),
    _base$sincos4 = _slicedToArray(_base$sincos3, 2),
    sW = _base$sincos4[0],
    cW = _base$sincos4[1];
  var A = si * sW;
  var B = C * si * cW - S * ci;
  var eTo = new Elements();
  eTo.inc = Math.asin(Math.hypot(A, B));
  eTo.node = _base["default"].pmod(174.997194 * Math.PI / 180 + Math.atan2(A, B), 2 * Math.PI);
  eTo.peri = _base["default"].pmod(eFrom.peri + Math.atan2(-S * sW, C * si - S * ci * cW), 2 * Math.PI);
  return eTo;
}
var Lp = 4.50001688 * Math.PI / 180;
var L = 5.19856209 * Math.PI / 180;
var J = 0.00651966 * Math.PI / 180;
/**
 * ReduceB1950ToJ2000 reduces orbital elements of a solar system body from
 * equinox B1950 in the FK4 system to equinox J2000 in the FK5 system.
 *
 * @param {Elements} eFrom
 * @returns {Elements} eTo
 */

function reduceB1950FK4ToJ2000FK5(eFrom) {
  var W = L + eFrom.node;
  var _base$sincos5 = _base["default"].sincos(eFrom.inc),
    _base$sincos6 = _slicedToArray(_base$sincos5, 2),
    si = _base$sincos6[0],
    ci = _base$sincos6[1];
  var _base$sincos7 = _base["default"].sincos(J),
    _base$sincos8 = _slicedToArray(_base$sincos7, 2),
    sJ = _base$sincos8[0],
    cJ = _base$sincos8[1];
  var _base$sincos9 = _base["default"].sincos(W),
    _base$sincos10 = _slicedToArray(_base$sincos9, 2),
    sW = _base$sincos10[0],
    cW = _base$sincos10[1];
  var eTo = new Elements();
  eTo.inc = Math.acos(ci * cJ - si * sJ * cW);
  eTo.node = _base["default"].pmod(Math.atan2(si * sW, ci * sJ + si * cJ * cW) - Lp, 2 * Math.PI);
  eTo.peri = _base["default"].pmod(eFrom.peri + Math.atan2(sJ * sW, si * cJ + ci * sJ * cW), 2 * Math.PI);
  return eTo;
}
var _default = {
  Elements: Elements,
  reduceB1950ToJ2000: reduceB1950ToJ2000,
  reduceB1950FK4ToJ2000FK5: reduceB1950FK4ToJ2000FK5
};
exports["default"] = _default;

/***/ }),

/***/ 35481:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var CalEvent = __webpack_require__(99063);
var CalDate = __webpack_require__(76431);
/**
 * Mapper class for mapped calenders like hijri and hebrew
 * `this.calender` needs to be set in child classes
 */

var CalEventMap = /*#__PURE__*/function (_CalEvent) {
  _inherits(CalEventMap, _CalEvent);
  var _super = _createSuper(CalEventMap);
  function CalEventMap(opts) {
    var _this;
    _classCallCheck(this, CalEventMap);
    _this = _super.call(this, opts);
    _this.calendar = {};
    return _this;
  }
  _createClass(CalEventMap, [{
    key: "inYear",
    value: function inYear(year) {
      if (!(this.calendar[year] && this.calendar[year + 1] && this.calendar[year - 1])) {
        return this;
      }
      for (var y = year - 1; y <= year + 1; y++) {
        // resolve date in `calendar` as gregorian date
        var firstDays = this.calendar[y][this.opts.month - 1]; // firstDays `[M, D, diffYear]`

        for (var i = 0; i < firstDays.length; i += 3) {
          if (this.opts.year) {
            var calYear = this.calendar.year + firstDays[i + 2];
            if (this.opts.year !== calYear) {
              break;
            }
          }
          var d = new CalDate({
            year: y,
            month: firstDays[i] + 1,
            day: firstDays[i + 1]
          }).setOffset(this.opts.day - 1);
          if (d.year === year) {
            this.dates.push(d);
          }
        }
      }
      return this;
    }
  }]);
  return CalEventMap;
}(CalEvent);
module.exports = CalEventMap;

/***/ }),

/***/ 35662:
/***/ ((module) => {

"use strict";


/*eslint-disable*/
module.exports = {
  1969: [[2, 19, 0], [3, 18, 0], [4, 17, 0], [5, 16, 0], [6, 15, 0], [7, 14, 0], [8, 12, 0], [9, 12, 0], [10, 10, 0], [11, 10, 0]],
  1970: [[2, 9, 1], [3, 8, 1], [4, 7, 1], [5, 6, 1], [6, 5, 1], [7, 4, 1], [8, 2, 1], [9, 2, 1], [10, 1, 1], [10, 30, 1], [0, 8, 0, 11, 30, 1], [1, 7, 0]],
  1971: [[1, 26, 2], [2, 28, 2], [3, 26, 2], [4, 26, 2], [5, 24, 2], [6, 24, 2], [7, 22, 2], [8, 21, 2], [9, 20, 2], [10, 19, 2], [11, 18, 2], [0, 28, 1]],
  1972: [[1, 16, 3], [2, 16, 3], [3, 14, 3], [4, 14, 3], [5, 12, 3], [6, 12, 3], [7, 10, 3], [8, 9, 3], [9, 8, 3], [10, 7, 3], [11, 6, 3], [0, 17, 2]],
  1973: [[1, 4, 4], [2, 6, 4], [3, 4, 4], [4, 4, 4], [5, 2, 4], [6, 1, 4], [6, 30, 4], [7, 29, 4], [8, 27, 4], [9, 27, 4], [10, 25, 4], [0, 5, 3, 11, 25, 4]],
  1974: [[0, 24, 5], [1, 23, 5], [2, 24, 5], [3, 23, 5], [4, 22, 5], [5, 21, 5], [6, 20, 5], [7, 19, 5], [8, 17, 5], [9, 16, 5], [10, 15, 5], [11, 15, 5]],
  1975: [[0, 13, 6], [1, 12, 6], [2, 13, 6], [3, 12, 6], [4, 12, 6], [5, 10, 6], [6, 10, 6], [7, 8, 6], [8, 6, 6], [9, 6, 6], [10, 4, 6], [11, 4, 6]],
  1976: [[0, 2, 7, 11, 22, 8], [1, 1, 7], [2, 1, 7], [2, 31, 7], [3, 30, 7], [4, 30, 7], [5, 28, 7], [6, 28, 7], [7, 26, 7], [8, 24, 7], [9, 24, 7], [10, 22, 7]],
  1977: [[11, 11, 9], [0, 20, 8], [1, 19, 8], [2, 20, 8], [3, 19, 8], [4, 19, 8], [5, 17, 8], [6, 17, 8], [7, 15, 8], [8, 14, 8], [9, 13, 8], [10, 12, 8]],
  1978: [[11, 1, 10], [0, 10, 9, 11, 30, 10], [1, 8, 9], [2, 10, 9], [3, 8, 9], [4, 8, 9], [5, 6, 9], [6, 6, 9], [7, 5, 9], [8, 3, 9], [9, 3, 9], [10, 1, 9]],
  1979: [[10, 20, 11], [11, 20, 11], [0, 29, 10], [1, 27, 10], [2, 29, 10], [3, 27, 10], [4, 27, 10], [5, 25, 10], [6, 25, 10], [7, 23, 10], [8, 22, 10], [9, 22, 10]],
  1980: [[10, 9, 12], [11, 8, 12], [0, 19, 11], [1, 17, 11], [2, 18, 11], [3, 16, 11], [4, 15, 11], [5, 14, 11], [6, 13, 11], [7, 12, 11], [8, 10, 11], [9, 10, 11]],
  1981: [[9, 28, 13], [10, 27, 13], [0, 7, 12, 11, 27, 13], [1, 5, 12], [2, 7, 12], [3, 5, 12], [4, 5, 12], [5, 3, 12], [6, 2, 12], [7, 1, 12], [7, 30, 12], [8, 29, 12]],
  1982: [[9, 18, 14], [10, 16, 14], [11, 16, 14], [0, 26, 13], [1, 24, 13], [2, 26, 13], [3, 24, 13], [4, 24, 13], [5, 22, 13], [6, 21, 13], [7, 20, 13], [8, 18, 13]],
  1983: [[9, 7, 15], [10, 5, 15], [11, 5, 15], [0, 15, 14], [1, 14, 14], [2, 15, 14], [3, 14, 14], [4, 13, 14], [5, 12, 14], [6, 11, 14], [7, 9, 14], [8, 8, 14]],
  1984: [[8, 26, 16], [9, 25, 16], [10, 23, 16], [0, 4, 15, 11, 23, 16], [1, 2, 15], [2, 3, 15], [3, 2, 15], [4, 2, 15], [4, 31, 15], [5, 30, 15], [6, 29, 15], [7, 27, 15]],
  1985: [[8, 15, 17], [9, 15, 17], [10, 13, 17], [11, 13, 17], [0, 22, 16], [1, 20, 16], [2, 22, 16], [3, 21, 16], [4, 20, 16], [5, 19, 16], [6, 18, 16], [7, 17, 16]],
  1986: [[8, 5, 18], [9, 4, 18], [10, 3, 18], [11, 2, 18], [0, 11, 17], [1, 10, 17], [2, 11, 17], [3, 10, 17], [4, 9, 17], [5, 8, 17], [6, 8, 17], [7, 6, 17]],
  1987: [[7, 25, 19], [8, 24, 19], [9, 23, 19], [10, 22, 19], [0, 1, 18, 11, 21, 19], [0, 30, 18], [2, 1, 18], [2, 30, 18], [3, 29, 18], [4, 28, 18], [5, 27, 18], [6, 26, 18]],
  1988: [[7, 13, 20], [8, 12, 20], [9, 11, 20], [10, 10, 20], [11, 10, 20], [0, 20, 19], [1, 18, 19], [2, 19, 19], [3, 17, 19], [4, 16, 19], [5, 15, 19], [6, 14, 19]],
  1989: [[7, 2, 21], [8, 1, 21], [8, 30, 21], [9, 30, 21], [10, 29, 21], [0, 8, 20, 11, 29, 21], [1, 7, 20], [2, 8, 20], [3, 7, 20], [4, 6, 20], [5, 4, 20], [6, 4, 20]],
  1990: [[6, 23, 22], [7, 21, 22], [8, 20, 22], [9, 19, 22], [10, 18, 22], [11, 18, 22], [0, 27, 21], [1, 26, 21], [2, 27, 21], [3, 26, 21], [4, 25, 21], [5, 23, 21]],
  1991: [[6, 12, 23], [7, 11, 23], [8, 9, 23], [9, 8, 23], [10, 7, 23], [11, 7, 23], [0, 16, 22], [1, 15, 22], [2, 17, 22], [3, 15, 22], [4, 15, 22], [5, 13, 22]],
  1992: [[6, 1, 24], [6, 30, 24], [7, 29, 24], [8, 27, 24], [9, 26, 24], [10, 25, 24], [0, 5, 23, 11, 25, 24], [1, 4, 23], [2, 5, 23], [3, 4, 23], [4, 3, 23], [5, 2, 23]],
  1993: [[5, 21, 25], [6, 20, 25], [7, 18, 25], [8, 17, 25], [9, 16, 25], [10, 14, 25], [11, 14, 25], [0, 23, 24], [1, 22, 24], [2, 24, 24], [3, 22, 24], [4, 22, 24]],
  1994: [[5, 10, 26], [6, 9, 26], [7, 8, 26], [8, 6, 26], [9, 6, 26], [10, 4, 26], [11, 3, 26], [0, 12, 25], [1, 11, 25], [2, 13, 25], [3, 12, 25], [4, 11, 25]],
  1995: [[4, 30, 27], [5, 29, 27], [6, 28, 27], [7, 27, 27], [8, 25, 27], [9, 25, 27], [10, 23, 27], [0, 2, 26, 11, 23, 27], [0, 31, 26], [2, 2, 26], [3, 1, 26], [3, 30, 26]],
  1996: [[4, 18, 28], [5, 17, 28], [6, 16, 28], [7, 15, 28], [8, 13, 28], [9, 13, 28], [10, 12, 28], [11, 11, 28], [0, 21, 27], [1, 19, 27], [2, 20, 27], [3, 18, 27]],
  1997: [[4, 7, 29], [5, 6, 29], [6, 5, 29], [7, 4, 29], [8, 2, 29], [9, 2, 29], [10, 1, 29], [11, 1, 29], [0, 10, 28, 11, 30, 29], [1, 8, 28], [2, 10, 28], [3, 8, 28]],
  1998: [[3, 27, 30], [4, 26, 30], [5, 25, 30], [6, 24, 30], [7, 23, 30], [8, 21, 30], [9, 21, 30], [10, 20, 30], [11, 19, 30], [0, 29, 29], [1, 27, 29], [2, 29, 29]],
  1999: [[3, 17, 31], [4, 16, 31], [5, 15, 31], [6, 14, 31], [7, 12, 31], [8, 11, 31], [9, 10, 31], [10, 9, 31], [11, 9, 31], [0, 18, 30], [1, 17, 30], [2, 18, 30]],
  2000: [[3, 6, 32], [4, 5, 32], [5, 3, 32], [6, 3, 32], [7, 1, 32], [7, 30, 32], [8, 28, 32], [9, 28, 32], [10, 27, 32], [0, 8, 31, 11, 27, 32], [1, 7, 31], [2, 7, 31]],
  2001: [[2, 26, 33], [3, 25, 33], [4, 24, 33], [5, 22, 33], [6, 22, 33], [7, 20, 33], [8, 18, 33], [9, 17, 33], [10, 16, 33], [11, 16, 33], [0, 26, 32], [1, 24, 32]],
  2002: [[2, 15, 34], [3, 14, 34], [4, 13, 34], [5, 12, 34], [6, 11, 34], [7, 10, 34], [8, 8, 34], [9, 7, 34], [10, 6, 34], [11, 5, 34], [0, 15, 33], [1, 13, 33]],
  2003: [[2, 4, 35], [3, 3, 35], [4, 2, 35], [5, 1, 35], [6, 1, 35], [6, 30, 35], [7, 29, 35], [8, 27, 35], [9, 26, 35], [10, 25, 35], [0, 4, 34, 11, 24, 35], [1, 2, 34]],
  2004: [[1, 21, 36], [2, 22, 36], [3, 20, 36], [4, 20, 36], [5, 19, 36], [6, 18, 36], [7, 17, 36], [8, 15, 36], [9, 15, 36], [10, 14, 36], [11, 13, 36], [0, 23, 35]],
  2005: [[1, 10, 37], [2, 11, 37], [3, 10, 37], [4, 9, 37], [5, 8, 37], [6, 7, 37], [7, 6, 37], [8, 5, 37], [9, 4, 37], [10, 3, 37], [11, 3, 37], [0, 12, 36]],
  2006: [[0, 31, 38], [2, 1, 38], [2, 30, 38], [3, 29, 38], [4, 28, 38], [5, 26, 38], [6, 26, 38], [7, 25, 38], [8, 24, 38], [9, 23, 38], [10, 22, 38], [0, 1, 37, 11, 22, 38]],
  2007: [[0, 20, 39], [1, 19, 39], [2, 20, 39], [3, 18, 39], [4, 18, 39], [5, 16, 39], [6, 15, 39], [7, 14, 39], [8, 13, 39], [9, 13, 39], [10, 11, 39], [11, 11, 39]],
  2008: [[0, 10, 40, 11, 29, 41], [1, 8, 40], [2, 9, 40], [3, 7, 40], [4, 6, 40], [5, 5, 40], [6, 4, 40], [7, 2, 40], [8, 1, 40], [9, 1, 40], [9, 30, 40], [10, 29, 40]],
  2009: [[11, 18, 42], [0, 27, 41], [1, 26, 41], [2, 28, 41], [3, 26, 41], [4, 25, 41], [5, 24, 41], [6, 23, 41], [7, 22, 41], [8, 20, 41], [9, 20, 41], [10, 18, 41]],
  2010: [[11, 7, 43], [0, 16, 42], [1, 15, 42], [2, 17, 42], [3, 15, 42], [4, 15, 42], [5, 13, 42], [6, 13, 42], [7, 11, 42], [8, 10, 42], [9, 9, 42], [10, 7, 42]],
  2011: [[10, 26, 44], [0, 5, 43, 11, 26, 44], [1, 4, 43], [2, 6, 43], [3, 5, 43], [4, 4, 43], [5, 3, 43], [6, 2, 43], [7, 1, 43], [7, 30, 43], [8, 29, 43], [9, 28, 43]],
  2012: [[10, 15, 45], [11, 14, 45], [0, 24, 44], [1, 23, 44], [2, 24, 44], [3, 22, 44], [4, 22, 44], [5, 21, 44], [6, 20, 44], [7, 19, 44], [8, 17, 44], [9, 17, 44]],
  2013: [[10, 4, 46], [11, 4, 46], [0, 13, 45], [1, 11, 45], [2, 13, 45], [3, 11, 45], [4, 11, 45], [5, 10, 45], [6, 9, 45], [7, 8, 45], [8, 7, 45], [9, 6, 45]],
  2014: [[9, 25, 47], [10, 23, 47], [0, 2, 46, 11, 23, 47], [1, 1, 46], [2, 2, 46], [3, 1, 46], [3, 30, 46], [4, 30, 46], [5, 28, 46], [6, 28, 46], [7, 27, 46], [8, 25, 46]],
  2015: [[9, 14, 48], [10, 13, 48], [11, 12, 48], [0, 21, 47], [1, 20, 47], [2, 21, 47], [3, 20, 47], [4, 19, 47], [5, 18, 47], [6, 17, 47], [7, 16, 47], [8, 14, 47]],
  2016: [[9, 2, 49], [10, 1, 49], [10, 30, 49], [0, 11, 48, 11, 30, 49], [1, 10, 48], [2, 10, 48], [3, 8, 48], [4, 8, 48], [5, 6, 48], [6, 6, 48], [7, 4, 48], [8, 2, 48]],
  2017: [[8, 21, 50], [9, 21, 50], [10, 19, 50], [11, 19, 50], [0, 29, 49], [1, 28, 49], [2, 29, 49], [3, 27, 49], [4, 27, 49], [5, 25, 49], [6, 24, 49], [7, 23, 49]],
  2018: [[8, 11, 51], [9, 10, 51], [10, 9, 51], [11, 8, 51], [0, 18, 50], [1, 17, 50], [2, 18, 50], [3, 17, 50], [4, 16, 50], [5, 15, 50], [6, 14, 50], [7, 12, 50]],
  2019: [[7, 31, 52], [8, 30, 52], [9, 29, 52], [10, 28, 52], [0, 7, 51, 11, 27, 52], [1, 6, 51], [2, 8, 51], [3, 6, 51], [4, 6, 51], [5, 4, 51], [6, 4, 51], [7, 2, 51]],
  2020: [[7, 20, 53], [8, 18, 53], [9, 18, 53], [10, 16, 53], [11, 16, 53], [0, 26, 52], [1, 25, 52], [2, 25, 52], [3, 24, 52], [4, 24, 52], [5, 22, 52], [6, 22, 52]],
  2021: [[7, 9, 54], [8, 8, 54], [9, 7, 54], [10, 6, 54], [11, 5, 54], [0, 14, 53], [1, 13, 53], [2, 14, 53], [3, 13, 53], [4, 13, 53], [5, 11, 53], [6, 11, 53]],
  2022: [[6, 30, 55], [7, 28, 55], [8, 27, 55], [9, 26, 55], [10, 25, 55], [0, 4, 54, 11, 25, 55], [1, 2, 54], [2, 4, 54], [3, 2, 54], [4, 2, 54], [4, 31, 54], [5, 30, 54]],
  2023: [[6, 19, 56], [7, 17, 56], [8, 16, 56], [9, 16, 56], [10, 15, 56], [11, 14, 56], [0, 23, 55], [1, 21, 55], [2, 23, 55], [3, 21, 55], [4, 21, 55], [5, 19, 55]],
  2024: [[6, 7, 57], [7, 5, 57], [8, 4, 57], [9, 4, 57], [10, 3, 57], [11, 3, 57], [0, 13, 56], [1, 11, 56], [2, 11, 56], [3, 10, 56], [4, 9, 56], [5, 7, 56]],
  2025: [[5, 26, 58], [6, 26, 58], [7, 24, 58], [8, 23, 58], [9, 23, 58], [10, 22, 58], [0, 1, 57, 11, 21, 58], [0, 31, 57], [2, 1, 57], [2, 30, 57], [3, 29, 57], [4, 28, 57]],
  2026: [[5, 16, 59], [6, 15, 59], [7, 14, 59], [8, 12, 59], [9, 12, 59], [10, 11, 59], [11, 10, 59], [0, 20, 58], [1, 18, 58], [2, 20, 58], [3, 18, 58], [4, 18, 58]],
  2027: [[5, 6, 60], [6, 5, 60], [7, 3, 60], [8, 2, 60], [9, 1, 60], [9, 31, 60], [10, 29, 60], [0, 9, 59, 11, 29, 60], [1, 8, 59], [2, 9, 59], [3, 8, 59], [4, 7, 59]],
  2028: [[4, 25, 61], [5, 24, 61], [6, 23, 61], [7, 22, 61], [8, 20, 61], [9, 19, 61], [10, 18, 61], [11, 17, 61], [0, 28, 60], [1, 26, 60], [2, 27, 60], [3, 26, 60]],
  2029: [[4, 14, 62], [5, 13, 62], [6, 13, 62], [7, 11, 62], [8, 10, 62], [9, 9, 62], [10, 7, 62], [11, 7, 62], [0, 16, 61], [1, 14, 61], [2, 16, 61], [3, 15, 61]],
  2030: [[4, 3, 63], [5, 2, 63], [6, 2, 63], [7, 1, 63], [7, 30, 63], [8, 29, 63], [9, 28, 63], [10, 26, 63], [0, 5, 62, 11, 26, 63], [1, 4, 62], [2, 5, 62], [3, 4, 62]],
  2031: [[3, 23, 64], [4, 22, 64], [5, 21, 64], [6, 21, 64], [7, 20, 64], [8, 18, 64], [9, 17, 64], [10, 16, 64], [11, 15, 64], [0, 24, 63], [1, 23, 63], [2, 24, 63]],
  2032: [[3, 11, 65], [4, 10, 65], [5, 9, 65], [6, 9, 65], [7, 8, 65], [8, 6, 65], [9, 6, 65], [10, 4, 65], [11, 4, 65], [0, 14, 64], [1, 12, 64], [2, 13, 64]],
  2033: [[3, 1, 66], [3, 30, 66], [4, 29, 66], [5, 28, 66], [6, 28, 66], [7, 26, 66], [8, 25, 66], [9, 24, 66], [10, 23, 66], [0, 2, 65, 11, 23, 66], [1, 1, 65], [2, 2, 65]],
  2034: [[2, 21, 67], [3, 20, 67], [4, 19, 67], [5, 17, 67], [6, 17, 67], [7, 15, 67], [8, 14, 67], [9, 13, 67], [10, 12, 67], [11, 12, 67], [0, 21, 66], [1, 20, 66]],
  2035: [[2, 11, 68], [3, 9, 68], [4, 9, 68], [5, 7, 68], [6, 6, 68], [7, 5, 68], [8, 3, 68], [9, 2, 68], [10, 1, 68], [11, 1, 68], [0, 11, 67, 11, 30, 68], [1, 9, 67]],
  2036: [[1, 28, 69], [2, 29, 69], [3, 27, 69], [4, 27, 69], [5, 25, 69], [6, 24, 69], [7, 23, 69], [8, 21, 69], [9, 20, 69], [10, 19, 69], [11, 19, 69], [0, 29, 68]],
  2037: [[1, 16, 70], [2, 18, 70], [3, 17, 70], [4, 16, 70], [5, 15, 70], [6, 14, 70], [7, 12, 70], [8, 11, 70], [9, 10, 70], [10, 8, 70], [11, 8, 70], [0, 17, 69]],
  2038: [[1, 5, 71], [2, 7, 71], [3, 6, 71], [4, 5, 71], [5, 4, 71], [6, 3, 71], [7, 2, 71], [7, 31, 71], [8, 30, 71], [9, 29, 71], [10, 27, 71], [0, 7, 70, 11, 27, 71]],
  2039: [[0, 26, 72], [1, 24, 72], [2, 26, 72], [3, 24, 72], [4, 24, 72], [5, 23, 72], [6, 22, 72], [7, 21, 72], [8, 19, 72], [9, 19, 72], [10, 17, 72], [11, 17, 72]],
  2040: [[0, 15, 73], [1, 14, 73], [2, 14, 73], [3, 13, 73], [4, 12, 73], [5, 11, 73], [6, 10, 73], [7, 9, 73], [8, 7, 73], [9, 7, 73], [10, 6, 73], [11, 5, 73]],
  2041: [[0, 4, 74, 11, 24, 75], [1, 2, 74], [2, 4, 74], [3, 2, 74], [4, 1, 74], [4, 31, 74], [5, 29, 74], [6, 29, 74], [7, 28, 74], [8, 26, 74], [9, 26, 74], [10, 25, 74]],
  2042: [[11, 14, 76], [0, 23, 75], [1, 21, 75], [2, 23, 75], [3, 21, 75], [4, 20, 75], [5, 19, 75], [6, 18, 75], [7, 17, 75], [8, 15, 75], [9, 15, 75], [10, 14, 75]],
  2043: [[11, 3, 77], [0, 12, 76], [1, 11, 76], [2, 12, 76], [3, 11, 76], [4, 10, 76], [5, 8, 76], [6, 8, 76], [7, 6, 76], [8, 4, 76], [9, 4, 76], [10, 3, 76]],
  2044: [[10, 21, 78], [0, 2, 77, 11, 21, 78], [0, 31, 77], [2, 1, 77], [2, 30, 77], [3, 29, 77], [4, 28, 77], [5, 26, 77], [6, 26, 77], [7, 24, 77], [8, 23, 77], [9, 22, 77]],
  2045: [[10, 10, 79], [11, 10, 79], [0, 19, 78], [1, 18, 78], [2, 20, 78], [3, 18, 78], [4, 18, 78], [5, 16, 78], [6, 15, 78], [7, 14, 78], [8, 12, 78], [9, 12, 78]],
  2046: [[9, 31, 80], [10, 29, 80], [0, 8, 79, 11, 28, 80], [1, 7, 79], [2, 9, 79], [3, 7, 79], [4, 7, 79], [5, 5, 79], [6, 5, 79], [7, 3, 79], [8, 2, 79], [9, 1, 79]],
  2047: [[9, 20, 81], [10, 19, 81], [11, 18, 81], [0, 27, 80], [1, 26, 80], [2, 27, 80], [3, 26, 80], [4, 26, 80], [5, 24, 80], [6, 24, 80], [7, 23, 80], [8, 21, 80]],
  2048: [[9, 9, 82], [10, 7, 82], [11, 7, 82], [0, 16, 81], [1, 15, 81], [2, 16, 81], [3, 14, 81], [4, 14, 81], [5, 12, 81], [6, 12, 81], [7, 11, 81], [8, 10, 81]],
  2049: [[8, 28, 83], [9, 28, 83], [10, 26, 83], [0, 5, 82, 11, 26, 83], [1, 3, 82], [2, 5, 82], [3, 3, 82], [4, 3, 82], [5, 2, 82], [6, 1, 82], [6, 31, 82], [7, 30, 82]],
  2050: [[8, 17, 84], [9, 17, 84], [10, 15, 84], [11, 15, 84], [0, 24, 83], [1, 23, 83], [2, 24, 83], [3, 22, 83], [4, 22, 83], [5, 20, 83], [6, 20, 83], [7, 19, 83]],
  2051: [[8, 6, 85], [9, 6, 85], [10, 5, 85], [11, 4, 85], [0, 14, 84], [1, 12, 84], [2, 14, 84], [3, 12, 84], [4, 11, 84], [5, 10, 84], [6, 9, 84], [7, 8, 84]],
  2052: [[7, 26, 86], [8, 24, 86], [9, 24, 86], [10, 22, 86], [0, 3, 85, 11, 22, 86], [1, 2, 85], [2, 2, 85], [3, 1, 85], [3, 30, 85], [4, 29, 85], [5, 28, 85], [6, 27, 85]],
  2053: [[7, 15, 87], [8, 13, 87], [9, 13, 87], [10, 11, 87], [11, 11, 87], [0, 21, 86], [1, 20, 86], [2, 21, 86], [3, 20, 86], [4, 19, 86], [5, 17, 86], [6, 17, 86]],
  2054: [[7, 5, 88], [8, 3, 88], [9, 2, 88], [10, 1, 88], [10, 30, 88], [0, 10, 87, 11, 30, 88], [1, 9, 87], [2, 10, 87], [3, 9, 87], [4, 9, 87], [5, 7, 87], [6, 6, 87]],
  2055: [[6, 25, 89], [7, 24, 89], [8, 22, 89], [9, 21, 89], [10, 20, 89], [11, 19, 89], [0, 29, 88], [1, 27, 88], [2, 29, 88], [3, 28, 88], [4, 28, 88], [5, 26, 88]],
  2056: [[6, 14, 90], [7, 12, 90], [8, 11, 90], [9, 10, 90], [10, 8, 90], [11, 8, 90], [0, 18, 89], [1, 17, 89], [2, 17, 89], [3, 16, 89], [4, 16, 89], [5, 14, 89]],
  2057: [[6, 3, 91], [7, 1, 91], [7, 31, 91], [8, 30, 91], [9, 29, 91], [10, 27, 91], [0, 6, 90, 11, 27, 91], [1, 5, 90], [2, 6, 90], [3, 5, 90], [4, 5, 90], [5, 3, 90]],
  2058: [[5, 22, 92], [6, 21, 92], [7, 20, 92], [8, 19, 92], [9, 18, 92], [10, 17, 92], [11, 17, 92], [0, 25, 91], [1, 24, 91], [2, 25, 91], [3, 24, 91], [4, 23, 91]],
  2059: [[5, 11, 93], [6, 11, 93], [7, 9, 93], [8, 8, 93], [9, 8, 93], [10, 6, 93], [11, 6, 93], [0, 15, 92], [1, 14, 92], [2, 15, 92], [3, 13, 92], [4, 13, 92]],
  2060: [[4, 31, 94], [5, 29, 94], [6, 28, 94], [7, 27, 94], [8, 26, 94], [9, 25, 94], [10, 24, 94], [0, 5, 93, 11, 24, 94], [1, 3, 93], [2, 4, 93], [3, 2, 93], [4, 1, 93]],
  2061: [[4, 20, 95], [5, 19, 95], [6, 18, 95], [7, 16, 95], [8, 15, 95], [9, 15, 95], [10, 13, 95], [11, 13, 95], [0, 23, 94], [1, 21, 94], [2, 23, 94], [3, 21, 94]],
  2062: [[4, 10, 96], [5, 8, 96], [6, 8, 96], [7, 6, 96], [8, 4, 96], [9, 4, 96], [10, 3, 96], [11, 2, 96], [0, 12, 95], [1, 10, 95], [2, 12, 95], [3, 11, 95]],
  2063: [[3, 30, 97], [4, 29, 97], [5, 27, 97], [6, 27, 97], [7, 25, 97], [8, 24, 97], [9, 23, 97], [10, 22, 97], [0, 1, 96, 11, 21, 97], [0, 31, 96], [2, 1, 96], [2, 31, 96]],
  2064: [[3, 18, 98], [4, 17, 98], [5, 16, 98], [6, 15, 98], [7, 14, 98], [8, 12, 98], [9, 12, 98], [10, 10, 98], [11, 9, 98], [0, 20, 97], [1, 18, 97], [2, 19, 97]],
  2065: [[3, 7, 99], [4, 6, 99], [5, 5, 99], [6, 5, 99], [7, 3, 99], [8, 2, 99], [9, 1, 99], [9, 31, 99], [10, 29, 99], [0, 8, 98, 11, 28, 99], [1, 6, 98], [2, 8, 98]],
  2066: [[2, 27, 100], [3, 25, 100], [4, 25, 100], [5, 24, 100], [6, 24, 100], [7, 22, 100], [8, 21, 100], [9, 20, 100], [10, 19, 100], [11, 18, 100], [0, 27, 99], [1, 25, 99]],
  2067: [[2, 16, 101], [3, 15, 101], [4, 14, 101], [5, 13, 101], [6, 13, 101], [7, 11, 101], [8, 10, 101], [9, 10, 101], [10, 8, 101], [11, 8, 101], [0, 16, 100], [1, 15, 100]],
  2068: [[2, 5, 102], [3, 3, 102], [4, 3, 102], [5, 1, 102], [6, 1, 102], [6, 30, 102], [7, 29, 102], [8, 28, 102], [9, 27, 102], [10, 26, 102], [0, 6, 101, 11, 25, 102], [1, 4, 101]],
  2069: [[1, 23, 103], [2, 24, 103], [3, 22, 103], [4, 22, 103], [5, 20, 103], [6, 20, 103], [7, 18, 103], [8, 17, 103], [9, 16, 103], [10, 15, 103], [11, 15, 103], [0, 24, 102]],
  2070: [[1, 12, 104], [2, 14, 104], [3, 12, 104], [4, 11, 104], [5, 10, 104], [6, 9, 104], [7, 8, 104], [8, 6, 104], [9, 5, 104], [10, 4, 104], [11, 4, 104], [0, 13, 103]],
  2071: [[1, 1, 105], [2, 3, 105], [3, 2, 105], [4, 1, 105], [4, 30, 105], [5, 29, 105], [6, 28, 105], [7, 26, 105], [8, 25, 105], [9, 24, 105], [10, 23, 105], [0, 2, 104, 11, 22, 105]],
  2072: [[0, 21, 106], [1, 20, 106], [2, 21, 106], [3, 19, 106], [4, 19, 106], [5, 17, 106], [6, 17, 106], [7, 15, 106], [8, 13, 106], [9, 13, 106], [10, 11, 106], [11, 11, 106]],
  2073: [[0, 9, 107, 11, 30, 108], [1, 8, 107], [2, 10, 107], [3, 9, 107], [4, 8, 107], [5, 7, 107], [6, 6, 107], [7, 5, 107], [8, 3, 107], [9, 2, 107], [10, 1, 107], [10, 30, 107]],
  2074: [[11, 19, 109], [0, 28, 108], [1, 27, 108], [2, 29, 108], [3, 27, 108], [4, 27, 108], [5, 26, 108], [6, 25, 108], [7, 23, 108], [8, 22, 108], [9, 21, 108], [10, 20, 108]],
  2075: [[11, 9, 110], [0, 18, 109], [1, 16, 109], [2, 18, 109], [3, 16, 109], [4, 16, 109], [5, 15, 109], [6, 14, 109], [7, 13, 109], [8, 11, 109], [9, 11, 109], [10, 9, 109]],
  2076: [[10, 27, 111], [0, 7, 110, 11, 27, 111], [1, 6, 110], [2, 6, 110], [3, 5, 110], [4, 4, 110], [5, 3, 110], [6, 2, 110], [7, 1, 110], [7, 30, 110], [8, 29, 110], [9, 29, 110]],
  2077: [null, null, [0, 26, 111], [1, 24, 111], [2, 25, 111], [3, 24, 111], [4, 23, 111], [5, 21, 111], [6, 21, 111], [7, 19, 111], [8, 18, 111], [9, 18, 111]],
  year: 1389
};

/***/ }),

/***/ 37723:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _julian = __webpack_require__(3039);
var _julian2 = _interopRequireDefault(_julian);
var _Chinese = __webpack_require__(81376);
var _Chinese2 = _interopRequireDefault(_Chinese);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * @copyright 2016 commenthol
   * @license MIT
   */

// import {julian} from 'astronomia' // TODO waiting for tree-shaking that works...

// Start of Korean Calendar in 2333 BCE (단군기원 http://ko.wikipedia.org/wiki/단기)
var epochY = -2333;
var epoch = new _julian2.default.CalendarGregorian(epochY, 1, 27).toJDE();

/**
 * change of timezone shifts during the last century
 * @see https://en.wikipedia.org/wiki/Time_in_South_Korea
 */
var UTC_DATES = [{
  date: new Date('1961-10-09T15:00:00.000Z'),
  // 1961-10-10T00:00:00+0900
  shift: 9 / 24
},
// +9:00:00h (135° East)
{
  date: new Date('1954-03-20T15:30:00.000Z'),
  // 1954-03-21T00:00:00+0830
  shift: 8.5 / 24
}, {
  date: new Date('1911-12-31T15:00:00.000Z'),
  // 1912-01-01T00:00:00+0900
  shift: 9 / 24
}, {
  date: new Date('1908-03-31T15:30:00.000Z'),
  // 1908-04-01T00:00:00+0830
  shift: 8.5 / 24
}];
var CalendarKorean = function (_CalendarChinese) {
  _inherits(CalendarKorean, _CalendarChinese);
  function CalendarKorean(cycle, year, month, leap, day) {
    _classCallCheck(this, CalendarKorean);
    var _this = _possibleConstructorReturn(this, (CalendarKorean.__proto__ || Object.getPrototypeOf(CalendarKorean)).call(this, cycle, year, month, leap, day));
    _this._epochY = epochY;
    _this._epoch = epoch;
    return _this;
  }

  /**
   * timeshift to UTC
   *
   * @param {CalendarGregorian} gcal - gregorian calendar date
   * @return {Number} timeshift in fraction of day
   */

  _createClass(CalendarKorean, [{
    key: 'timeshiftUTC',
    value: function timeshiftUTC(gcal) {
      var date = gcal.toDate();
      for (var i in UTC_DATES) {
        if (date >= UTC_DATES[i].date) {
          return UTC_DATES[i].shift;
        }
      }
      return 3809 / 450 / 24; // +8:27:52h Seoul City Hall 126°58'E
    }
  }]);
  return CalendarKorean;
}(_Chinese2.default);
exports["default"] = CalendarKorean;

/***/ }),

/***/ 40483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var _convert = __webpack_require__(92508);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var YEAR0 = 593;
var MILLISECONDS_PER_DAY = 86400000;
var monthDaysNorm = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];
var monthDaysLeap = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 31, 30];
var isLeapYear = function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};
var UTC6 = 6; // timezone offset UTC+6

var toEpoch = function toEpoch(year) {
  return Date.UTC(year, 3, 13, UTC6);
};
var CalendarBengaliRevised = /*#__PURE__*/
function () {
  /**
   * @constructor
   * @param {Number|String} year - bengali year
   * @param {Number|String} month - (int) 1...12
   * @param {Number|String} day - 1...31
   * @return {Object} this
   */
  function CalendarBengaliRevised(year, month, day) {
    _classCallCheck(this, CalendarBengaliRevised);
    Object.assign(this, {
      year: (0, _convert.banglaToDigit)(year),
      month: (0, _convert.banglaToDigit)(month) || 1,
      day: (0, _convert.banglaToDigit)(day) || 1
    });
  }
  /**
   * convert gregorian date to bengali calendar date
   * @param {Number} year - (int) year in Gregorian Calendar
   * @param {Number} month - (int)
   * @param {Number} day - (int)
   * @return {Object} this
   */

  _createClass(CalendarBengaliRevised, [{
    key: "fromGregorian",
    value: function fromGregorian(year, month, day) {
      var monthDays = isLeapYear(year) ? monthDaysLeap : monthDaysNorm;
      var _year = year;
      if (month < 4 || month === 4 && day < 14) {
        _year -= 1;
      }
      this.year = _year - YEAR0;
      var date = Date.UTC(year, month - 1, day, UTC6);
      var days = Math.floor((date - toEpoch(_year)) / MILLISECONDS_PER_DAY);
      for (var i = 0; i < monthDays.length; i++) {
        if (days <= monthDays[i]) {
          this.month = i + 1;
          break;
        }
        days -= monthDays[i];
      }
      this.day = days;
      return this;
    }
    /**
     * convert date to bengali calendar date
     * @param {Date} date - javascript date object - uses local date
     * @return {Object} this
     */
  }, {
    key: "fromDate",
    value: function fromDate(date) {
      return this.fromGregorian(date.getFullYear(), date.getMonth() + 1, date.getDate());
    }
    /**
     * convert bengali date to gregorian date
     * @return {Object} date in gregorian (preleptic) calendar
     *   {Number} year - (int)
     *   {Number} month - (int) 1...12
     *   {Number} day - (int) 1...31
     */
  }, {
    key: "toGregorian",
    value: function toGregorian() {
      var date = this.toDate();
      return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        day: date.getUTCDate()
      };
    }
    /**
     * convert bengali date to Date
     * @return {Date} javascript date object in gregorian (preleptic) calendar
     */
  }, {
    key: "toDate",
    value: function toDate() {
      var year = this.year + YEAR0;
      var epoch = toEpoch(year);
      var _year = this.month > 10 ? year + 1 : year;
      var monthDays = isLeapYear(_year) ? monthDaysLeap : monthDaysNorm;
      var days = this.day;
      for (var i = 0; i < this.month - 1; i++) {
        days += monthDays[i];
      }
      var date = new Date(days * MILLISECONDS_PER_DAY + epoch);
      return date;
    }
    /**
     * format date in bengali
     * @param {String} formatStr - string formatter
     *
     * | Input | Description  |
     * | ----- | ------------ |
     * | Y     | Year with any number of digits and sign |
     * | Q     | Season Name  |
     * | M     | Month number |
     * | MMMM  | Month name   |
     * | D     | Day of month |
     * | dddd  | Day name     |
     *
     * @return {String}
     */
  }, {
    key: "format",
    value: function format(formatStr) {
      formatStr = formatStr || 'D M, Y';
      if (/dddd/.test(formatStr)) {
        var date = this.toDate();
        formatStr = formatStr.replace(/dddd/g, (0, _convert.weekDay)(date.getUTCDay()));
      }
      return formatStr.replace(/Y/g, (0, _convert.digitToBangla)(this.year)).replace(/Q/g, (0, _convert.seasonName)(this.month)).replace(/MMMM/g, (0, _convert.monthName)(this.month)).replace(/M/g, (0, _convert.digitToBangla)(this.month)).replace(/D/g, (0, _convert.digitToBangla)(this.day));
    }
  }]);
  return CalendarBengaliRevised;
}();
exports.A = CalendarBengaliRevised;

/***/ }),

/***/ 41280:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.meanNew = meanNew;
exports.meanFirst = meanFirst;
exports.meanFull = meanFull;
exports.meanLast = meanLast;
exports.newMoon = newMoon;
exports.first = first;
exports.full = full;
exports.last = last;
exports["default"] = exports.meanLunarMonth = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var sin = Math.sin,
  cos = Math.cos;
var ck = 1 / 1236.85;
var D2R = Math.PI / 180;
/**
 * mean synodial lunar month
 */

var meanLunarMonth = 29.530588861; // (49.1) p. 349

exports.meanLunarMonth = meanLunarMonth;
function mean(T) {
  return _base["default"].horner(T, 2451550.09766, 29.530588861 / ck, 0.00015437, -0.00000015, 0.00000000073);
}
/** snap returns k at specified quarter q nearest year y. */

function snap(y, q) {
  var k = (y - 2000) * 12.3685; // (49.2) p. 350

  return Math.floor(k - q + 0.5) + q;
}
/**
 * MeanNew returns the jde of the mean New Moon nearest the given datthis.
 * The mean date is within 0.5 day of the true date of New Moon.
 *
 * @param {Number} year - decimal year
 * @returns {Number} jde
 */

function meanNew(year) {
  return mean(snap(year, 0) * ck);
}
/**
 * MeanFirst returns the jde of the mean First Quarter Moon nearest the given datthis.
 * The mean date is within 0.5 day of the true date of First Quarter Moon.
 *
 * @param {Number} year - decimal year
 * @returns {Number} jde
 */

function meanFirst(year) {
  return mean(snap(year, 0.25) * ck);
}
/**
 * MeanFull returns the jde of the mean Full Moon nearest the given datthis.
 * The mean date is within 0.5 day of the true date of Full Moon.
 *
 * @param {Number} year - decimal year
 * @returns {Number} jde
 */

function meanFull(year) {
  return mean(snap(year, 0.5) * ck);
}
/**
 * MeanLast returns the jde of the mean Last Quarter Moon nearest the given datthis.
 * The mean date is within 0.5 day of the true date of Last Quarter Moon.
 *
 * @param {Number} year - decimal year
 * @returns {Number} jde
 */

function meanLast(year) {
  return mean(snap(year, 0.75) * ck);
}
/**
 * New returns the jde of New Moon nearest the given date.
 *
 * @param {Number} year - decimal year
 * @returns {Number} jde
 */

function newMoon(year) {
  var m = new Mp(year, 0);
  return mean(m.T) + m.nfc(nc) + m.a();
}
/**
 * First returns the jde of First Quarter Moon nearest the given datthis.
 *
 * @param {Number} year - decimal year
 * @returns {Number} jde
 */

function first(year) {
  var m = new Mp(year, 0.25);
  return mean(m.T) + m.flc() + m.w() + m.a();
}
/**
 * Full returns the jde of Full Moon nearest the given datthis.
 *
 * @param {Number} year - decimal year
 * @returns {Number} jde
 */

function full(year) {
  var m = new Mp(year, 0.5);
  return mean(m.T) + m.nfc(fc) + m.a();
}
/**
 * Last returns the jde of Last Quarter Moon nearest the given datthis.
 *
 * @param {Number} year - decimal year
 * @returns {Number} jde
 */

function last(year) {
  var m = new Mp(year, 0.75);
  return mean(m.T) + m.flc() - m.w() + m.a();
}
var Mp = /*#__PURE__*/function () {
  function Mp(y, q) {
    _classCallCheck(this, Mp);
    this.A = new Array(14);
    var k = this.k = snap(y, q);
    var T = this.T = this.k * ck; // (49.3) p. 350

    this.E = _base["default"].horner(T, 1, -0.002516, -0.0000074);
    this.M = _base["default"].horner(T, 2.5534 * D2R, 29.1053567 * D2R / ck, -0.0000014 * D2R, -0.00000011 * D2R);
    this.M_ = _base["default"].horner(T, 201.5643 * D2R, 385.81693528 * D2R / ck, 0.0107582 * D2R, 0.00001238 * D2R, -0.000000058 * D2R);
    this.F = _base["default"].horner(T, 160.7108 * D2R, 390.67050284 * D2R / ck, -0.0016118 * D2R, -0.00000227 * D2R, 0.000000011 * D2R);
    this.Ω = _base["default"].horner(T, 124.7746 * D2R, -1.56375588 * D2R / ck, 0.0020672 * D2R, 0.00000215 * D2R);
    this.A[0] = 299.7 * D2R + 0.107408 * D2R * k - 0.009173 * T * T;
    this.A[1] = 251.88 * D2R + 0.016321 * D2R * k;
    this.A[2] = 251.83 * D2R + 26.651886 * D2R * k;
    this.A[3] = 349.42 * D2R + 36.412478 * D2R * k;
    this.A[4] = 84.66 * D2R + 18.206239 * D2R * k;
    this.A[5] = 141.74 * D2R + 53.303771 * D2R * k;
    this.A[6] = 207.17 * D2R + 2.453732 * D2R * k;
    this.A[7] = 154.84 * D2R + 7.30686 * D2R * k;
    this.A[8] = 34.52 * D2R + 27.261239 * D2R * k;
    this.A[9] = 207.19 * D2R + 0.121824 * D2R * k;
    this.A[10] = 291.34 * D2R + 1.844379 * D2R * k;
    this.A[11] = 161.72 * D2R + 24.198154 * D2R * k;
    this.A[12] = 239.56 * D2R + 25.513099 * D2R * k;
    this.A[13] = 331.55 * D2R + 3.592518 * D2R * k;
  } // new or full corrections

  _createClass(Mp, [{
    key: "nfc",
    value: function nfc(c) {
      var M = this.M,
        M_ = this.M_,
        E = this.E,
        F = this.F,
        Ω = this.Ω;
      return c[0] * sin(M_) + c[1] * sin(M) * E + c[2] * sin(2 * M_) + c[3] * sin(2 * F) + c[4] * sin(M_ - M) * E + c[5] * sin(M_ + M) * E + c[6] * sin(2 * M) * E * E + c[7] * sin(M_ - 2 * F) + c[8] * sin(M_ + 2 * F) + c[9] * sin(2 * M_ + M) * E + c[10] * sin(3 * M_) + c[11] * sin(M + 2 * F) * E + c[12] * sin(M - 2 * F) * E + c[13] * sin(2 * M_ - M) * E + c[14] * sin(Ω) + c[15] * sin(M_ + 2 * M) + c[16] * sin(2 * (M_ - F)) + c[17] * sin(3 * M) + c[18] * sin(M_ + M - 2 * F) + c[19] * sin(2 * (M_ + F)) + c[20] * sin(M_ + M + 2 * F) + c[21] * sin(M_ - M + 2 * F) + c[22] * sin(M_ - M - 2 * F) + c[23] * sin(3 * M_ + M) + c[24] * sin(4 * M_);
    } // first or last corrections
  }, {
    key: "flc",
    value: function flc() {
      var M = this.M,
        M_ = this.M_,
        E = this.E,
        F = this.F,
        Ω = this.Ω;
      return -0.62801 * sin(M_) + 0.17172 * sin(M) * E + -0.01183 * sin(M_ + M) * E + 0.00862 * sin(2 * M_) + 0.00804 * sin(2 * F) + 0.00454 * sin(M_ - M) * E + 0.00204 * sin(2 * M) * E * E + -0.0018 * sin(M_ - 2 * F) + -0.0007 * sin(M_ + 2 * F) + -0.0004 * sin(3 * M_) + -0.00034 * sin(2 * M_ - M) * E + 0.00032 * sin(M + 2 * F) * E + 0.00032 * sin(M - 2 * F) * E + -0.00028 * sin(M_ + 2 * M) * E * E + 0.00027 * sin(2 * M_ + M) * E + -0.00017 * sin(Ω) + -0.00005 * sin(M_ - M - 2 * F) + 0.00004 * sin(2 * M_ + 2 * F) + -0.00004 * sin(M_ + M + 2 * F) + 0.00004 * sin(M_ - 2 * M) + 0.00003 * sin(M_ + M - 2 * F) + 0.00003 * sin(3 * M) + 0.00002 * sin(2 * M_ - 2 * F) + 0.00002 * sin(M_ - M + 2 * F) + -0.00002 * sin(3 * M_ + M);
    }
  }, {
    key: "w",
    value: function w() {
      var M = this.M,
        M_ = this.M_,
        E = this.E,
        F = this.F;
      return 0.00306 - 0.00038 * E * cos(M) + 0.00026 * cos(M_) - 0.00002 * (cos(M_ - M) - cos(M_ + M) - cos(2 * F));
    } // additional corrections
  }, {
    key: "a",
    value: function a() {
      var _this = this;
      var a = 0;
      ac.forEach(function (c, i) {
        a += c * sin(_this.A[i]);
      });
      return a;
    }
  }]);
  return Mp;
}(); // new coefficients

var nc = [-0.4072, 0.17241, 0.01608, 0.01039, 0.00739, -0.00514, 0.00208, -0.00111, -0.00057, 0.00056, -0.00042, 0.00042, 0.00038, -0.00024, -0.00017, -0.00007, 0.00004, 0.00004, 0.00003, 0.00003, -0.00003, 0.00003, -0.00002, -0.00002, 0.00002]; // full coefficients

var fc = [-0.40614, 0.17302, 0.01614, 0.01043, 0.00734, -0.00515, 0.00209, -0.00111, -0.00057, 0.00056, -0.00042, 0.00042, 0.00038, -0.00024, -0.00017, -0.00007, 0.00004, 0.00004, 0.00003, 0.00003, -0.00003, 0.00003, -0.00002, -0.00002, 0.00002]; // additional corrections

var ac = [0.000325, 0.000165, 0.000164, 0.000126, 0.00011, 0.000062, 0.00006, 0.000056, 0.000047, 0.000042, 0.000040, 0.000037, 0.000035, 0.000023];
var _default = {
  meanLunarMonth: meanLunarMonth,
  meanNew: meanNew,
  meanFirst: meanFirst,
  meanFull: meanFull,
  meanLast: meanLast,
  newMoon: newMoon,
  "new": newMoon,
  // BACKWARDS-COMPATIBILITY
  first: first,
  full: full,
  last: last
};
exports["default"] = _default;

/***/ }),

/***/ 41992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ first)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51548);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52738);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53827);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29187);
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8788);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8271);






function first(predicate, defaultValue) {
  const hasDefaultValue = arguments.length >= 2;
  return source => source.pipe(predicate ? (0,_filter__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .p)((v, i) => predicate(v, i, source)) : _util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, (0,_take__WEBPACK_IMPORTED_MODULE_2__/* .take */ .s)(1), hasDefaultValue ? (0,_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__/* .defaultIfEmpty */ .U)(defaultValue) : (0,_throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__/* .throwIfEmpty */ .v)(() => new _util_EmptyError__WEBPACK_IMPORTED_MODULE_5__/* .EmptyError */ .G()));
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ 42095:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(16354);

/***/ }),

/***/ 44179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ OrganizationDocumentsService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45715);




let OrganizationDocumentsService = /*#__PURE__*/(() => {
  class OrganizationDocumentsService {
    constructor(http) {
      this.http = http;
    }
    create(newDocument) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/organization-documents`, newDocument);
    }
    getAll(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/organization-documents`, {
        params: {
          data
        }
      });
    }
    update(id, updateInput) {
      return this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/organization-documents/${id}`, updateInput);
    }
    delete(id) {
      return this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/organization-documents/${id}`);
    }
    static {
      this.ɵfac = function OrganizationDocumentsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationDocumentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationDocumentsService,
        factory: OrganizationDocumentsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationDocumentsService;
})();

/***/ }),

/***/ 46722:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.nutation = nutation;
exports.approxNutation = approxNutation;
exports.meanObliquity = meanObliquity;
exports.meanObliquityLaskar = meanObliquityLaskar;
exports.nutationInRA = nutationInRA;
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
var _sexagesimal = _interopRequireDefault(__webpack_require__(31115));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

// Nutation: Chapter 22, Nutation and the Obliquity of the Ecliptic.

/**
 * Nutation returns nutation in longitude (Δψ) and nutation in obliquity (Δε)
 * for a given JDE.
 *
 * JDE = UT + ΔT, see package.
 *
 * Computation is by 1980 IAU theory, with terms < .0003″ neglected.
 *
 * Result units are radians.
 *
 * @param {number} jde - Julian ephemeris day
 * @return {number[]} [Δψ, Δε] - [longitude, obliquity] in radians
 */
function nutation(jde) {
  var T = _base["default"].J2000Century(jde); // Mean elongation of the Moon from the sun

  var D = _base["default"].horner(T, 297.85036, 445267.11148, -0.0019142, 1.0 / 189474) * Math.PI / 180; // Mean anomaly of the Sun (Earth)

  var M = _base["default"].horner(T, 357.52772, 35999.050340, -0.0001603, -1.0 / 300000) * Math.PI / 180; // Mean anomaly of the Moon

  var N = _base["default"].horner(T, 134.96298, 477198.867398, 0.0086972, 1.0 / 56250) * Math.PI / 180; // Moon's argument of latitude

  var F = _base["default"].horner(T, 93.27191, 483202.017538, -0.0036825, 1.0 / 327270) * Math.PI / 180; // Longitude of the ascending node of the Moon's mean orbit on the ecliptic, measured from mean equinox of date

  var Ω = _base["default"].horner(T, 125.04452, -1934.136261, 0.0020708, 1.0 / 450000) * Math.PI / 180;
  var Δψ = 0;
  var Δε = 0; // sum in reverse order to accumulate smaller terms first

  for (var i = table22A.length - 1; i >= 0; i--) {
    var row = table22A[i];
    var arg = row.d * D + row.m * M + row.n * N + row.f * F + row.ω * Ω;
    var _base$sincos = _base["default"].sincos(arg),
      _base$sincos2 = _slicedToArray(_base$sincos, 2),
      s = _base$sincos2[0],
      c = _base$sincos2[1];
    Δψ += s * (row.s0 + row.s1 * T);
    Δε += c * (row.c0 + row.c1 * T);
  }
  Δψ *= 0.0001 / 3600 * (Math.PI / 180);
  Δε *= 0.0001 / 3600 * (Math.PI / 180);
  return [Δψ, Δε]; // (Δψ, Δε float)
}
/**
 * ApproxNutation returns a fast approximation of nutation in longitude (Δψ)
 * and nutation in obliquity (Δε) for a given JDE.
 *
 * Accuracy is 0.5″ in Δψ, 0.1″ in Δε.
 *
 * Result units are radians.
 *
 * @param {number} jde - Julian ephemeris day
 * @return {number[]} [Δψ, Δε] - [longitude, obliquity] in radians
 */

function approxNutation(jde) {
  var T = (jde - _base["default"].J2000) / 36525;
  var Ω = (125.04452 - 1934.136261 * T) * Math.PI / 180;
  var L = (280.4665 + 36000.7698 * T) * Math.PI / 180;
  var N = (218.3165 + 481267.8813 * T) * Math.PI / 180;
  var _base$sincos3 = _base["default"].sincos(Ω),
    _base$sincos4 = _slicedToArray(_base$sincos3, 2),
    sΩ = _base$sincos4[0],
    cΩ = _base$sincos4[1];
  var _base$sincos5 = _base["default"].sincos(2 * L),
    _base$sincos6 = _slicedToArray(_base$sincos5, 2),
    s2L = _base$sincos6[0],
    c2L = _base$sincos6[1];
  var _base$sincos7 = _base["default"].sincos(2 * N),
    _base$sincos8 = _slicedToArray(_base$sincos7, 2),
    s2N = _base$sincos8[0],
    c2N = _base$sincos8[1];
  var _base$sincos9 = _base["default"].sincos(2 * Ω),
    _base$sincos10 = _slicedToArray(_base$sincos9, 2),
    s2Ω = _base$sincos10[0],
    c2Ω = _base$sincos10[1];
  var Δψ = (-17.2 * sΩ - 1.32 * s2L - 0.23 * s2N + 0.21 * s2Ω) / 3600 * (Math.PI / 180);
  var Δε = (9.2 * cΩ + 0.57 * c2L + 0.1 * c2N - 0.09 * c2Ω) / 3600 * (Math.PI / 180);
  return [Δψ, Δε]; // (Δψ, Δε float)
}
/**
 * MeanObliquity returns mean obliquity (ε₀) following the IAU 1980
 * polynomial.
 *
 * Accuracy is 1″ over the range 1000 to 3000 years and 10″ over the range
 * 0 to 4000 years.
 *
 * Result unit is radians.
 *
 * @param {number} jde - Julian ephemeris day
 * @return {number} mean obliquity (ε₀)
 */

function meanObliquity(jde) {
  // (22.2) p. 147
  return _base["default"].horner(_base["default"].J2000Century(jde), new _sexagesimal["default"].Angle(false, 23, 26, 21.448).rad(), -46.815 / 3600 * (Math.PI / 180), -0.00059 / 3600 * (Math.PI / 180), 0.001813 / 3600 * (Math.PI / 180));
}
/**
 * MeanObliquityLaskar returns mean obliquity (ε₀) following the Laskar
 * 1986 polynomial.
 *
 * Accuracy over the range 1000 to 3000 years is .01″.
 *
 * Accuracy over the valid date range of -8000 to +12000 years is
 * "a few seconds."
 *
 * Result unit is radians.
 *
 * @param {number} jde - Julian ephemeris day
 * @return {number} mean obliquity (ε₀)
 */

function meanObliquityLaskar(jde) {
  // (22.3) p. 147
  return _base["default"].horner(_base["default"].J2000Century(jde) * 0.01, new _sexagesimal["default"].Angle(false, 23, 26, 21.448).rad(), -4680.93 / 3600 * (Math.PI / 180), -1.55 / 3600 * (Math.PI / 180), 1999.25 / 3600 * (Math.PI / 180), -51.38 / 3600 * (Math.PI / 180), -249.67 / 3600 * (Math.PI / 180), -39.05 / 3600 * (Math.PI / 180), 7.12 / 3600 * (Math.PI / 180), 27.87 / 3600 * (Math.PI / 180), 5.79 / 3600 * (Math.PI / 180), 2.45 / 3600 * (Math.PI / 180));
}
/**
 * NutationInRA returns "nutation in right ascension" or "equation of the
 * equinoxes."
 *
 * Result is an angle in radians.
 *
 * @param {number} jde - Julian ephemeris day
 * @return {number} nutation in right ascension
 */

function nutationInRA(jde) {
  var _nutation = nutation(jde),
    _nutation2 = _slicedToArray(_nutation, 2),
    Δψ = _nutation2[0],
    Δε = _nutation2[1];
  var ε0 = meanObliquity(jde);
  return Δψ * Math.cos(ε0 + Δε);
}
var table22A = function () {
  var PROPS = 'd,m,n,f,ω,s0,s1,c0,c1'.split(',');
  var tab = [[0, 0, 0, 0, 1, -171996, -174.2, 92025, 8.9], [-2, 0, 0, 2, 2, -13187, -1.6, 5736, -3.1], [0, 0, 0, 2, 2, -2274, -0.2, 977, -0.5], [0, 0, 0, 0, 2, 2062, 0.2, -895, 0.5], [0, 1, 0, 0, 0, 1426, -3.4, 54, -0.1], [0, 0, 1, 0, 0, 712, 0.1, -7, 0], [-2, 1, 0, 2, 2, -517, 1.2, 224, -0.6], [0, 0, 0, 2, 1, -386, -0.4, 200, 0], [0, 0, 1, 2, 2, -301, 0, 129, -0.1], [-2, -1, 0, 2, 2, 217, -0.5, -95, 0.3], [-2, 0, 1, 0, 0, -158, 0, 0, 0], [-2, 0, 0, 2, 1, 129, 0.1, -70, 0], [0, 0, -1, 2, 2, 123, 0, -53, 0], [2, 0, 0, 0, 0, 63, 0, 0, 0], [0, 0, 1, 0, 1, 63, 0.1, -33, 0], [2, 0, -1, 2, 2, -59, 0, 26, 0], [0, 0, -1, 0, 1, -58, -0.1, 32, 0], [0, 0, 1, 2, 1, -51, 0, 27, 0], [-2, 0, 2, 0, 0, 48, 0, 0, 0], [0, 0, -2, 2, 1, 46, 0, -24, 0], [2, 0, 0, 2, 2, -38, 0, 16, 0], [0, 0, 2, 2, 2, -31, 0, 13, 0], [0, 0, 2, 0, 0, 29, 0, 0, 0], [-2, 0, 1, 2, 2, 29, 0, -12, 0], [0, 0, 0, 2, 0, 26, 0, 0, 0], [-2, 0, 0, 2, 0, -22, 0, 0, 0], [0, 0, -1, 2, 1, 21, 0, -10, 0], [0, 2, 0, 0, 0, 17, -0.1, 0, 0], [2, 0, -1, 0, 1, 16, 0, -8, 0], [-2, 2, 0, 2, 2, -16, 0.1, 7, 0], [0, 1, 0, 0, 1, -15, 0, 9, 0], [-2, 0, 1, 0, 1, -13, 0, 7, 0], [0, -1, 0, 0, 1, -12, 0, 6, 0], [0, 0, 2, -2, 0, 11, 0, 0, 0], [2, 0, -1, 2, 1, -10, 0, 5, 0], [2, 0, 1, 2, 2, -8, 0, 3, 0], [0, 1, 0, 2, 2, 7, 0, -3, 0], [-2, 1, 1, 0, 0, -7, 0, 0, 0], [0, -1, 0, 2, 2, -7, 0, 3, 0], [2, 0, 0, 2, 1, -7, 0, 3, 0], [2, 0, 1, 0, 0, 6, 0, 0, 0], [-2, 0, 2, 2, 2, 6, 0, -3, 0], [-2, 0, 1, 2, 1, 6, 0, -3, 0], [2, 0, -2, 0, 1, -6, 0, 3, 0], [2, 0, 0, 0, 1, -6, 0, 3, 0], [0, -1, 1, 0, 0, 5, 0, 0, 0], [-2, -1, 0, 2, 1, -5, 0, 3, 0], [-2, 0, 0, 0, 1, -5, 0, 3, 0], [0, 0, 2, 2, 1, -5, 0, 3, 0], [-2, 0, 2, 0, 1, 4, 0, 0, 0], [-2, 1, 0, 2, 1, 4, 0, 0, 0], [0, 0, 1, -2, 0, 4, 0, 0, 0], [-1, 0, 1, 0, 0, -4, 0, 0, 0], [-2, 1, 0, 0, 0, -4, 0, 0, 0], [1, 0, 0, 0, 0, -4, 0, 0, 0], [0, 0, 1, 2, 0, 3, 0, 0, 0], [0, 0, -2, 2, 2, -3, 0, 0, 0], [-1, -1, 1, 0, 0, -3, 0, 0, 0], [0, 1, 1, 0, 0, -3, 0, 0, 0], [0, -1, 1, 2, 2, -3, 0, 0, 0], [2, -1, -1, 2, 2, -3, 0, 0, 0], [0, 0, 3, 2, 2, -3, 0, 0, 0], [2, -1, 0, 2, 2, -3, 0, 0, 0]];
  return tab.map(function (row) {
    var o = {};
    PROPS.forEach(function (p, i) {
      o[p] = row[i];
    });
    return o;
  });
}();
var _default = {
  nutation: nutation,
  approxNutation: approxNutation,
  meanObliquity: meanObliquity,
  meanObliquityLaskar: meanObliquityLaskar,
  nutationInRA: nutationInRA
};
exports["default"] = _default;

/***/ }),

/***/ 48586:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.len3ForInterpolateX = len3ForInterpolateX;
exports.len4Half = len4Half;
exports.lagrange = lagrange;
exports.lagrangePoly = lagrangePoly;
exports.linear = linear;
exports["default"] = exports.Len5 = exports.iterate = exports.Len3 = exports.errorNoConverge = exports.errorZeroOutside = exports.errorExtremumOutside = exports.errorNoExtremum = exports.errorNOutOfRange = exports.errorNoXRange = exports.errorNot5 = exports.errorNot4 = exports.errorNot3 = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var _int = Math.trunc;
/**
 * Error values returned by functions and methods in this package.
 * Defined here to help testing for specific errors.
 */

var errorNot3 = new Error('Argument y must be length 3');
exports.errorNot3 = errorNot3;
var errorNot4 = new Error('Argument y must be length 4');
exports.errorNot4 = errorNot4;
var errorNot5 = new Error('Argument y must be length 5');
exports.errorNot5 = errorNot5;
var errorNoXRange = new Error('Argument x3 (or x5) cannot equal x1');
exports.errorNoXRange = errorNoXRange;
var errorNOutOfRange = new Error('Interpolating factor n must be in range -1 to 1');
exports.errorNOutOfRange = errorNOutOfRange;
var errorNoExtremum = new Error('No extremum in table');
exports.errorNoExtremum = errorNoExtremum;
var errorExtremumOutside = new Error('Extremum falls outside of table');
exports.errorExtremumOutside = errorExtremumOutside;
var errorZeroOutside = new Error('Zero falls outside of table');
exports.errorZeroOutside = errorZeroOutside;
var errorNoConverge = new Error('Failure to converge');
/**
 * Len3 allows second difference interpolation.
 */

exports.errorNoConverge = errorNoConverge;
var Len3 = /*#__PURE__*/function () {
  /**
   * NewLen3 prepares a Len3 object from a table of three rows of x and y values.
   *
   * X values must be equally spaced, so only the first and last are supplied.
   * X1 must not equal to x3.  Y must be a slice of three y values.
   *
   * @throws Error
   * @param {Number} x1 - is the x value corresponding to the first y value of the table.
   * @param {Number} x3 - is the x value corresponding to the last y value of the table.
   * @param {Number[]} y - is all y values in the table. y.length should be >= 3.0
   */
  function Len3(x1, x3, y) {
    _classCallCheck(this, Len3);
    if (y.length !== 3) {
      throw errorNot3;
    }
    if (x3 === x1) {
      throw errorNoXRange;
    }
    this.x1 = x1;
    this.x3 = x3;
    this.y = y; // differences. (3.1) p. 23

    this.a = y[1] - y[0];
    this.b = y[2] - y[1];
    this.c = this.b - this.a; // other intermediate values

    this.abSum = this.a + this.b;
    this.xSum = x3 + x1;
    this.xDiff = x3 - x1;
  }
  /**
   * InterpolateX interpolates for a given x value.
   */

  _createClass(Len3, [{
    key: "interpolateX",
    value: function interpolateX(x) {
      var n = (2 * x - this.xSum) / this.xDiff;
      return this.interpolateN(n);
    }
    /**
     * InterpolateXStrict interpolates for a given x value,
     * restricting x to the range x1 to x3 given to the constructor NewLen3.
     */
  }, {
    key: "interpolateXStrict",
    value: function interpolateXStrict(x) {
      var n = (2 * x - this.xSum) / this.xDiff;
      var y = this.interpolateNStrict(n, true);
      return y;
    }
    /**
     * InterpolateN interpolates for (a given interpolating factor n.
     *
     * This is interpolation formula (3.3)
     *
     * The interpolation factor n is x-x2 in units of the tabular x interval.
     * (See Meeus p. 24.)
     */
  }, {
    key: "interpolateN",
    value: function interpolateN(n) {
      return this.y[1] + n * 0.5 * (this.abSum + n * this.c);
    }
    /**
     * InterpolateNStrict interpolates for (a given interpolating factor n.
     *
     * N is restricted to the range [-1..1] corresponding to the range x1 to x3
     * given to the constructor of Len3.
     */
  }, {
    key: "interpolateNStrict",
    value: function interpolateNStrict(n) {
      if (n < -1 || n > 1) {
        throw errorNOutOfRange;
      }
      return this.interpolateN(n);
    }
    /**
     * Extremum returns the x and y values at the extremum.
     *
     * Results are restricted to the range of the table given to the constructor
     * new Len3.
     */
  }, {
    key: "extremum",
    value: function extremum() {
      if (this.c === 0) {
        throw errorNoExtremum;
      }
      var n = this.abSum / (-2 * this.c); // (3.5), p. 25

      if (n < -1 || n > 1) {
        throw errorExtremumOutside;
      }
      var x = 0.5 * (this.xSum + this.xDiff * n);
      var y = this.y[1] - this.abSum * this.abSum / (8 * this.c); // (3.4), p. 25

      return [x, y];
    }
    /**
     * Len3Zero finds a zero of the quadratic function represented by the table.
     *
     * That is, it returns an x value that yields y=0.
     *
     * Argument strong switches between two strategies for the estimation step.
     * when iterating to converge on the zero.
     *
     * Strong=false specifies a quick and dirty estimate that works well
     * for gentle curves, but can work poorly or fail on more dramatic curves.
     *
     * Strong=true specifies a more sophisticated and thus somewhat more
     * expensive estimate.  However, if the curve has quick changes, This estimate
     * will converge more reliably and in fewer steps, making it a better choice.
     *
     * Results are restricted to the range of the table given to the constructor
     * NewLen3.
     */
  }, {
    key: "zero",
    value: function zero(strong) {
      var _this = this;
      var f;
      if (strong) {
        // (3.7), p. 27
        f = function f(n0) {
          return n0 - (2 * _this.y[1] + n0 * (_this.abSum + _this.c * n0)) / (_this.abSum + 2 * _this.c * n0);
        };
      } else {
        // (3.6), p. 26
        f = function f(n0) {
          return -2 * _this.y[1] / (_this.abSum + _this.c * n0);
        };
      }
      var _iterate = iterate(0, f),
        _iterate2 = _slicedToArray(_iterate, 2),
        n0 = _iterate2[0],
        ok = _iterate2[1];
      if (!ok) {
        throw errorNoConverge;
      }
      if (n0 > 1 || n0 < -1) {
        throw errorZeroOutside;
      }
      return 0.5 * (this.xSum + this.xDiff * n0); // success
    }
  }]);
  return Len3;
}();
/**
 * Len3ForInterpolateX is a special purpose Len3 constructor.
 *
 * Like NewLen3, it takes a table of x and y values, but it is not limited
 * to tables of 3 rows.  An X value is also passed that represents the
 * interpolation target x value.  Len3ForInterpolateX will locate the
 * appropriate three rows of the table for interpolating for x, and initialize
 * the Len3 object for those rows.
 *
 * @param {Number} x - is the target for interpolation
 * @param {Number} x1 - is the x value corresponding to the first y value of the table.
 * @param {Number} xn - is the x value corresponding to the last y value of the table.
 * @param {Number[]} y - is all y values in the table.  y.length should be >= 3.0
 * @returns {Number} interpolation value
 */

exports.Len3 = Len3;
function len3ForInterpolateX(x, x1, xN, y) {
  var y3 = y;
  if (y.length > 3) {
    var interval = (xN - x1) / (y.length - 1);
    if (interval === 0) {
      throw errorNoXRange;
    }
    var nearestX = _int((x - x1) / interval + 0.5);
    if (nearestX < 1) {
      nearestX = 1;
    } else if (nearestX > y.length - 2) {
      nearestX = y.length - 2;
    }
    y3 = y.slice(nearestX - 1, nearestX + 2);
    xN = x1 + (nearestX + 1) * interval;
    x1 = x1 + (nearestX - 1) * interval;
  }
  return new Len3(x1, xN, y3);
}
/**
 * @private
 * @param {Number} n0
 * @param {Function} f
 * @returns {Array}
 *   {Number} n1
 *   {Boolean} ok - if `false` failure to converge
 */

var iterate = function iterate(n0, f) {
  for (var limit = 0; limit < 50; limit++) {
    var n1 = f(n0);
    if (!isFinite(n1) || isNaN(n1)) {
      break; // failure to converge
    }
    if (Math.abs((n1 - n0) / n0) < 1e-15) {
      return [n1, true]; // success
    }
    n0 = n1;
  }
  return [0, false]; // failure to converge
};
/**
 * Len4Half interpolates a center value from a table of four rows.
 * @param {Number[]} y - 4 values
 * @returns {Number} interpolation result
 */

exports.iterate = iterate;
function len4Half(y) {
  if (y.length !== 4) {
    throw errorNot4;
  } // (3.12) p. 32

  return (9 * (y[1] + y[2]) - y[0] - y[3]) / 16;
}
/**
 * Len5 allows fourth Difference interpolation.
 */

var Len5 = /*#__PURE__*/function () {
  /**
   * NewLen5 prepares a Len5 object from a table of five rows of x and y values.
   *
   * X values must be equally spaced, so only the first and last are suppliethis.
   * X1 must not equal x5.  Y must be a slice of five y values.
   */
  function Len5(x1, x5, y) {
    _classCallCheck(this, Len5);
    if (y.length !== 5) {
      throw errorNot5;
    }
    if (x5 === x1) {
      throw errorNoXRange;
    }
    this.x1 = x1;
    this.x5 = x5;
    this.y = y;
    this.y3 = y[2]; // differences

    this.a = y[1] - y[0];
    this.b = y[2] - y[1];
    this.c = y[3] - y[2];
    this.d = y[4] - y[3];
    this.e = this.b - this.a;
    this.f = this.c - this.b;
    this.g = this.d - this.c;
    this.h = this.f - this.e;
    this.j = this.g - this.f;
    this.k = this.j - this.h; // other intermediate values

    this.xSum = x5 + x1;
    this.xDiff = x5 - x1;
    this.interpCoeff = [
    // (3.8) p. 28
    this.y3, (this.b + this.c) / 2 - (this.h + this.j) / 12, this.f / 2 - this.k / 24, (this.h + this.j) / 12, this.k / 24];
  }
  /**
   * InterpolateX interpolates for (a given x value.
   */

  _createClass(Len5, [{
    key: "interpolateX",
    value: function interpolateX(x) {
      var n = (4 * x - 2 * this.xSum) / this.xDiff;
      return this.interpolateN(n);
    }
    /**
     * InterpolateXStrict interpolates for a given x value,
     * restricting x to the range x1 to x5 given to the the constructor NewLen5.
     */
  }, {
    key: "interpolateXStrict",
    value: function interpolateXStrict(x) {
      var n = (4 * x - 2 * this.xSum) / this.xDiff;
      var y = this.interpolateNStrict(n);
      return y;
    }
    /**
     * InterpolateN interpolates for (a given interpolating factor n.
     *
     * The interpolation factor n is x-x3 in units of the tabular x interval.
     * (See Meeus p. 28.)
     */
  }, {
    key: "interpolateN",
    value: function interpolateN(n) {
      return _base["default"].horner.apply(_base["default"], [n].concat(_toConsumableArray(this.interpCoeff)));
    }
    /**
     * InterpolateNStrict interpolates for (a given interpolating factor n.
     *
     * N is restricted to the range [-1..1].  This is only half the range given
     * to the constructor NewLen5, but is the recommendation given on p. 31.0
     */
  }, {
    key: "interpolateNStrict",
    value: function interpolateNStrict(n) {
      if (n < -1 || n > 1) {
        throw errorNOutOfRange;
      }
      return _base["default"].horner.apply(_base["default"], [n].concat(_toConsumableArray(this.interpCoeff)));
    }
    /**
     * Extremum returns the x and y values at the extremum.
     *
     * Results are restricted to the range of the table given to the constructor
     * NewLen5.  (Meeus actually recommends restricting the range to one unit of
     * the tabular interval, but that seems a little harsh.)
     */
  }, {
    key: "extremum",
    value: function extremum() {
      // (3.9) p. 29
      var nCoeff = [6 * (this.b + this.c) - this.h - this.j, 0, 3 * (this.h + this.j), 2 * this.k];
      var den = this.k - 12 * this.f;
      if (den === 0) {
        throw errorExtremumOutside;
      }
      var _iterate3 = iterate(0, function (n0) {
          return _base["default"].horner.apply(_base["default"], [n0].concat(nCoeff)) / den;
        }),
        _iterate4 = _slicedToArray(_iterate3, 2),
        n0 = _iterate4[0],
        ok = _iterate4[1];
      if (!ok) {
        throw errorNoConverge;
      }
      if (n0 < -2 || n0 > 2) {
        throw errorExtremumOutside;
      }
      var x = 0.5 * this.xSum + 0.25 * this.xDiff * n0;
      var y = _base["default"].horner.apply(_base["default"], [n0].concat(_toConsumableArray(this.interpCoeff)));
      return [x, y];
    }
    /**
     * Len5Zero finds a zero of the quartic function represented by the table.
     *
     * That is, it returns an x value that yields y=0.
     *
     * Argument strong switches between two strategies for the estimation step.
     * when iterating to converge on the zero.
     *
     * Strong=false specifies a quick and dirty estimate that works well
     * for gentle curves, but can work poorly or fail on more dramatic curves.
     *
     * Strong=true specifies a more sophisticated and thus somewhat more
     * expensive estimate.  However, if the curve has quick changes, This estimate
     * will converge more reliably and in fewer steps, making it a better choice.
     *
     * Results are restricted to the range of the table given to the constructor
     * NewLen5.
     */
  }, {
    key: "zero",
    value: function zero(strong) {
      var f;
      if (strong) {
        // (3.11), p. 29
        var M = this.k / 24;
        var N = (this.h + this.j) / 12;
        var P = this.f / 2 - M;
        var Q = (this.b + this.c) / 2 - N;
        var numCoeff = [this.y3, Q, P, N, M];
        var denCoeff = [Q, 2 * P, 3 * N, 4 * M];
        f = function f(n0) {
          return n0 - _base["default"].horner.apply(_base["default"], [n0].concat(numCoeff)) / _base["default"].horner.apply(_base["default"], [n0].concat(denCoeff));
        };
      } else {
        // (3.10), p. 29
        var _numCoeff = [-24 * this.y3, 0, this.k - 12 * this.f, -2 * (this.h + this.j), -this.k];
        var den = 12 * (this.b + this.c) - 2 * (this.h + this.j);
        f = function f(n0) {
          return _base["default"].horner.apply(_base["default"], [n0].concat(_numCoeff)) / den;
        };
      }
      var _iterate5 = iterate(0, f),
        _iterate6 = _slicedToArray(_iterate5, 2),
        n0 = _iterate6[0],
        ok = _iterate6[1];
      if (!ok) {
        throw errorNoConverge;
      }
      if (n0 > 2 || n0 < -2) {
        throw errorZeroOutside;
      }
      var x = 0.5 * this.xSum + 0.25 * this.xDiff * n0;
      return x;
    }
  }]);
  return Len5;
}();
/**
 * Lagrange performs interpolation with unequally-spaced abscissae.
 *
 * Given a table of X and Y values, interpolate a new y value for argument x.
 *
 * X values in the table do not have to be equally spaced; they do not even
 * have to be in order. They must however, be distinct.
 *
 * @param {Number} x - x-value of interpolation
 * @param {Array} table - `[[x0, y0], ... [xN, yN]]` of x, y values
 * @returns {Number} interpolation result `y` of `x`
 */

exports.Len5 = Len5;
function lagrange(x, table) {
  // method of BASIC program, p. 33.0
  var sum = 0;
  table.forEach(function (ti, i) {
    var xi = ti[0];
    var prod = 1.0;
    table.forEach(function (tj, j) {
      if (i !== j) {
        var xj = tj[0];
        prod *= (x - xj) / (xi - xj);
      }
    });
    sum += ti[1] * prod;
  });
  return sum;
}
/**
 * LagrangePoly uses the formula of Lagrange to produce an interpolating
 * polynomial.
 *
 * X values in the table do not have to be equally spaced; they do not even
 * have to be in order.  They must however, be distinct.
 *
 * The returned polynomial will be of degree n-1 where n is the number of rows
 * in the table.  It can be evaluated for x using base.horner.
 *
 * @param {Array} table - `[[x0, y0], ... [xN, yN]]`
 * @returns {Array} - polynomial array
 */

function lagrangePoly(table) {
  // Method not fully described by Meeus, but needed for (numerical solution
  // to Example 3.g.
  var sum = new Array(table.length).fill(0);
  var prod = new Array(table.length).fill(0);
  var last = table.length - 1;
  var _loop = function _loop(i) {
    var xi = table[i][0] || table[i].x || 0;
    var yi = table[i][1] || table[i].y || 0;
    prod[last] = 1;
    var den = 1.0;
    var n = last;
    for (var j = 0; j < table.length; j++) {
      if (i !== j) {
        var xj = table[j][0] || table[j].x || 0;
        prod[n - 1] = prod[n] * -xj;
        for (var k = n; k < last; k++) {
          prod[k] -= prod[k + 1] * xj;
        }
        n--;
        den *= xi - xj;
      }
    }
    prod.forEach(function (pj, j) {
      sum[j] += yi * pj / den;
    });
  };
  for (var i = 0; i < table.length; i++) {
    _loop(i);
  }
  return sum;
}
/**
 * Linear Interpolation of x
 */

function linear(x, x1, xN, y) {
  var interval = (xN - x1) / (y.length - 1);
  if (interval === 0) {
    throw errorNoXRange;
  }
  var nearestX = Math.floor((x - x1) / interval);
  if (nearestX < 0) {
    nearestX = 0;
  } else if (nearestX > y.length - 2) {
    nearestX = y.length - 2;
  }
  var y2 = y.slice(nearestX, nearestX + 2);
  var x01 = x1 + nearestX * interval;
  return y2[0] + (y[1] - y[0]) * (x - x01) / interval;
}
var _default = {
  errorNot3: errorNot3,
  errorNot4: errorNot4,
  errorNot5: errorNot5,
  errorNoXRange: errorNoXRange,
  errorNOutOfRange: errorNOutOfRange,
  errorNoExtremum: errorNoExtremum,
  errorExtremumOutside: errorExtremumOutside,
  errorZeroOutside: errorZeroOutside,
  errorNoConverge: errorNoConverge,
  Len3: Len3,
  len3ForInterpolateX: len3ForInterpolateX,
  iterate: iterate,
  len4Half: len4Half,
  Len5: Len5,
  lagrange: lagrange,
  lagrangePoly: lagrangePoly,
  linear: linear
};
exports["default"] = _default;

/***/ }),

/***/ 50746:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.march = march;
exports.june = june;
exports.september = september;
exports.december = december;
exports.march2 = march2;
exports.june2 = june2;
exports.september2 = september2;
exports.december2 = december2;
exports.longitude = longitude;
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
var _solar = _interopRequireDefault(__webpack_require__(65805));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module solstice
 */

/**
 * Solstice: Chapter 27: Equinoxes and Solstices.
 */
var abs = Math.abs,
  cos = Math.cos,
  sin = Math.sin;
var D2R = Math.PI / 180; // table 27.a - for years from -1000 to +1000

var mc0 = [1721139.29189, 365242.13740, 0.06134, 0.00111, -0.00071];
var jc0 = [1721233.25401, 365241.72562, -0.05323, 0.00907, 0.00025];
var sc0 = [1721325.70455, 365242.49558, -0.11677, -0.00297, 0.00074];
var dc0 = [1721414.39987, 365242.88257, -0.00769, -0.00933, -0.00006]; // table 27.b - for years from +1000 to +3000

var mc2 = [2451623.80984, 365242.37404, 0.05169, -0.00411, -0.00057];
var jc2 = [2451716.56767, 365241.62603, 0.00325, 0.00888, -0.00030];
var sc2 = [2451810.21715, 365242.01767, -0.11575, 0.00337, 0.00078];
var dc2 = [2451900.05952, 365242.74049, -0.06223, -0.00823, 0.00032]; // table 27.c

var terms = function () {
  var term = [[485, 324.96, 1934.136], [203, 337.23, 32964.467], [199, 342.08, 20.186], [182, 27.85, 445267.112], [156, 73.14, 45036.886], [136, 171.52, 22518.443], [77, 222.54, 65928.934], [74, 296.72, 3034.906], [70, 243.58, 9037.513], [58, 119.81, 33718.147], [52, 297.17, 150.678], [50, 21.02, 2281.226], [45, 247.54, 29929.562], [44, 325.15, 31555.956], [29, 60.93, 4443.417], [18, 155.12, 67555.328], [17, 288.79, 4562.452], [16, 198.04, 62894.029], [14, 199.76, 31436.921], [12, 95.39, 14577.848], [12, 287.11, 31931.756], [12, 320.81, 34777.259], [9, 227.73, 1222.114], [8, 15.45, 16859.074]];
  return term.map(function (t) {
    return {
      a: t[0],
      b: t[1],
      c: t[2]
    };
  });
}();
/**
 * March returns the JDE of the March equinox for the given year.
 *
 * Results are valid for the years -1000 to +3000.
 *
 * Accuracy is within one minute of time for the years 1951-2050.
 * @param {Number} y - (int) year
 * @returns {Number} JDE
 */

function march(y) {
  if (y < 1000) {
    return eq(y, mc0);
  }
  return eq(y - 2000, mc2);
}
/**
 * June returns the JDE of the June solstice for the given year.
 *
 * Results are valid for the years -1000 to +3000.
 *
 * Accuracy is within one minute of time for the years 1951-2050.
 * @param {Number} y - (int) year
 * @returns {Number} JDE
 */

function june(y) {
  if (y < 1000) {
    return eq(y, jc0);
  }
  return eq(y - 2000, jc2);
}
/**
 * September returns the JDE of the September equinox for the given year.
 *
 * Results are valid for the years -1000 to +3000.
 *
 * Accuracy is within one minute of time for the years 1951-2050.
 * @param {Number} y - (int) year
 * @returns {Number} JDE
 */

function september(y) {
  if (y < 1000) {
    return eq(y, sc0);
  }
  return eq(y - 2000, sc2);
}
/**
 * December returns the JDE of the December solstice for a given year.
 *
 * Results are valid for the years -1000 to +3000.
 *
 * Accuracy is within one minute of time for the years 1951-2050.
 * @param {Number} y - (int) year
 * @returns {Number} JDE
 */

function december(y) {
  if (y < 1000) {
    return eq(y, dc0);
  }
  return eq(y - 2000, dc2);
}
/**
 * Fast calculation of solstices/ equinoxes
 * Accuracy is within one minute of time for the years 1951-2050.
 *
 * @param {Number} y - (int) year
 * @param {Array} c - term from table 27.a / 27.b
 * @returns {Number} JDE
 */

function eq(y, c) {
  var J0 = _base["default"].horner(y * 0.001, c);
  var T = _base["default"].J2000Century(J0);
  var W = 35999.373 * D2R * T - 2.47 * D2R;
  var Δλ = 1 + 0.0334 * cos(W) + 0.0007 * cos(2 * W);
  var S = 0;
  for (var i = terms.length - 1; i >= 0; i--) {
    var t = terms[i];
    S += t.a * cos((t.b + t.c * T) * D2R);
  }
  return J0 + 0.00001 * S / Δλ;
}
/**
 * March2 returns a more accurate JDE of the March equinox.
 *
 * Result is accurate to one second of time.
 *
 * @param {Number} year - (int) year
 * @param {planetposition.Planet} planet - must be a V87Planet object representing Earth, obtained with
 * the package planetposition
 * @returns {Number} JDE
 */

function march2(year, planet) {
  return longitude(year, planet, 0);
}
/**
 * June2 returns a more accurate JDE of the June solstice.
 *
 * Result is accurate to one second of time.
 *
 * @param {Number} year - (int) year
 * @param {planetposition.Planet} planet - must be a V87Planet object representing Earth, obtained with
 * the package planetposition
 * @returns {Number} JDE
 */

function june2(year, planet) {
  return longitude(year, planet, Math.PI / 2);
}
/**
 * September2 returns a more accurate JDE of the September equinox.
 *
 * Result is accurate to one second of time.
 *
 * @param {Number} year - (int) year
 * @param {planetposition.Planet} planet - must be a V87Planet object representing Earth, obtained with
 * the package planetposition
 * @returns {Number} JDE
 */

function september2(year, planet) {
  return longitude(year, planet, Math.PI);
}
/**
 * December2 returns a more accurate JDE of the December solstice.
 *
 * Result is accurate to one second of time.
 *
 * @param {Number} year - (int) year
 * @param {planetposition.Planet} planet - must be a V87Planet object representing Earth, obtained with
 * the package planetposition
 * @returns {Number} JDE
 */

function december2(year, planet) {
  return longitude(year, planet, Math.PI * 3 / 2);
}
/**
 * Longitude returns the JDE for a given `year`, VSOP87 Planet `planet` at a
 * given geocentric solar longitude `lon`
 * @param {Number} year - (int)
 * @param {planetposition.Planet} planet
 * @param {Number} lon - geocentric solar longitude in radians
 * @returns {Number} JDE
 */

function longitude(year, planet, lon) {
  var c;
  var ct;
  if (year < 1000) {
    ct = [mc0, jc0, sc0, dc0];
  } else {
    ct = [mc2, jc2, sc2, dc2];
    year -= 2000;
  }
  lon = lon % (Math.PI * 2);
  if (lon < Math.PI / 2) {
    c = ct[0];
  } else if (lon < Math.PI) {
    c = ct[1];
  } else if (lon < Math.PI * 3 / 2) {
    c = ct[2];
  } else {
    c = ct[3];
  }
  return eq2(year, planet, lon, c);
}
/**
  * Accurate calculation of solstices/ equinoxes
  * Result is accurate to one second of time.
  *
  * @param {Number} year - (int) year
  * @param {planetposition.Planet} planet - vsop87 planet
  * @param {Number} lon - longitude in radians
  * @param {Array} c - term from table 27.a / 27.b
  * @returns {Number} JDE
  */

function eq2(year, planet, lon, c) {
  var J0 = _base["default"].horner(year * 0.001, c);
  for (;;) {
    var a = _solar["default"].apparentVSOP87(planet, J0);
    var _c = 58 * sin(lon - a.lon); // (27.1) p. 180

    J0 += _c;
    if (abs(_c) < 0.000005) {
      break;
    }
  }
  return J0;
}
var _default = {
  march: march,
  june: june,
  september: september,
  december: december,
  march2: march2,
  june2: june2,
  september2: september2,
  december2: december2,
  longitude: longitude
};
exports["default"] = _default;

/***/ }),

/***/ 51312:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * {
 *   0: 'sunday', ...
 *   sunday: 0, ...
 * }
 */
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
exports.DAYS = function () {
  var o = {};
  'sunday|monday|tuesday|wednesday|thursday|friday|saturday'.split('|').forEach(function (name, idx) {
    o[name] = idx;
    o[idx] = name;
  });
  return o;
}();
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
var isObject = exports.isObject = function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
};
exports.isDate = function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
};
/**
 * pad number with `0`
 * @param {number} number
 * @param {number} [len] - length
 * @return {string} padded string
 */

exports.pad0 = function pad0(number, len) {
  len = len || 2;
  number = Array(len).join('0') + number.toString();
  return number.substr(number.length - len, len);
};
/**
 * convert string to number
 * @private
 * @param {String} str
 * @return {Number} converted number or undefined
 */

var toNumber = exports.toNumber = function toNumber(str) {
  var num = parseInt(str, 10);
  if (!isNaN(num)) {
    return num;
  }
};
/**
 * extract or set year
 * @private
 * @param {Number|Date|String} year
 * @return {Number} year
 */

exports.toYear = function toYear(year) {
  if (!year) {
    year = new Date().getFullYear();
  } else if (year instanceof Date) {
    year = year.getFullYear();
  } else if (typeof year === 'string') {
    year = toNumber(year);
  }
  return year;
};
/**
* convert string to Date.
* 2017        : year = 2017, month = 1, day = 1
* '2017-07'   : year = 2017, month = 7, day = 1
* '2017-07-03': year = 2017, month = 7, day = 3
* @param {String} str
* @param {Boolean} isUTC - return date in UTC
* @return {Date}
*/

exports.toDate = function toDate(str, isUTC) {
  var m = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?.*$/.exec((str || '').toString());
  if (m) {
    m.shift();
    var _m$map = m.map(function (num) {
        return parseInt(num || 1, 10);
      }),
      _m$map2 = _slicedToArray(_m$map, 3),
      year = _m$map2[0],
      month = _m$map2[1],
      day = _m$map2[2];
    if (isUTC) {
      return new Date(Date.UTC(year, month - 1, day));
    } else {
      return new Date(year, month - 1, day);
    }
  }
};

/***/ }),

/***/ 62415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var _get = (__webpack_require__(3114).get);
var CalEvent = __webpack_require__(99063);
var Parser = __webpack_require__(23536);
var PostRule = /*#__PURE__*/function () {
  /**
   * @param {String} ruleStr
   * @param {Object} opts
   * @param {Array} [holidays]
   */
  function PostRule(ruleStr, opts, holidays) {
    _classCallCheck(this, PostRule);
    this.opts = opts;
    this.ruleStr = ruleStr;
    this.ruleSet = holidays && holidays[ruleStr];
    this.holidays = holidays;
    this.events = [];
  }
  _createClass(PostRule, [{
    key: "push",
    value: function push(calEvent) {
      this.events.push(calEvent);
    }
  }, {
    key: "getEvent",
    value: function getEvent(year) {
      var active = this.ruleSet && this.ruleSet.active;
      this.disable(year);
      var ev = this.events[0];
      ev.filter(year, active);
      return ev;
    }
    /**
     * @param {Array} rule
     */
  }, {
    key: "resolve",
    value: function resolve(rule, year) {
      if (rule.rule && typeof this[rule.rule] === 'function') {
        this[rule.rule](rule, year);
      }
    }
    /**
     * @param {CalEvent} [calEvent]
     */
  }, {
    key: "bridge",
    value: function bridge(rule, year) {
      var found = new Array(this.events.length).fill(false);
      found[0] = true;
      var type = rule.type || 'public'; // get all holidays of the given year

      for (var ruleStr in this.holidays) {
        var dateFn = this.holidays[ruleStr].fn;
        if (dateFn && dateFn.ruleStr !== this.ruleStr) {
          var tmpEv = dateFn.inYear(year);
          var tmpEvType = _get(tmpEv, 'opts.type') || 'public';
          for (var i = 1; i < this.events.length; i++) {
            if (found[i]) continue;
            var isEqualDate = tmpEv.event.isEqualDate(this.events[i]);
            if (isEqualDate && tmpEvType === type) {
              found[i] = true;
            }
          }
        }
        if (!~found.indexOf(false)) {
          // pre-exit if all found
          break;
        }
      }
      if (~found.indexOf(false)) {
        this.events[0].reset();
      }
    }
  }, {
    key: "disable",
    value: function disable(year) {
      var ev = this.events[0];
      var tmpEv = this._findEventInYear(year, this.opts.disable);
      if (tmpEv) {
        if (tmpEv.isEqualDate(ev)) {
          ev.reset();
          tmpEv = this._findEventInYear(year, this.opts.enable);
          if (tmpEv) this.events[0] = tmpEv;
        }
      }
    }
  }, {
    key: "_findEventInYear",
    value: function _findEventInYear(year, arr) {
      arr = arr || [];
      var parser = new Parser();
      var _iterator = _createForOfIteratorHelper(arr),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var p = parser.parse(item);
          if (p && p[0] && p[0].year && p[0].year === year) {
            return new CalEvent(p[0]).inYear(p[0].year);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return PostRule;
}();
module.exports = PostRule;

/***/ }),

/***/ 63825:
/***/ ((module) => {

"use strict";


/*eslint-disable*/
module.exports = {
  1968: [null, null, null, null, null, null, [8, 23, 0], [9, 23, 0], [10, 22, 0], [11, 22, 0]],
  1969: [[2, 20, 0], [3, 19, 0], [4, 18, 0], [5, 17, 0], [6, 16, 0], [7, 15, 0], [8, 13, 1], [9, 13, 1], [10, 11, 1], [11, 10, 1], [0, 20, 0], [1, 19, 0]],
  1970: [[3, 7, 1], [4, 7, 1], [5, 5, 1], [6, 5, 1], [7, 3, 1], [8, 2, 1], [9, 1, 2], [9, 31, 2], [10, 29, 2], [11, 29, 2], [0, 8, 1], [1, 7, 1]],
  1971: [[2, 27, 2], [3, 26, 2], [4, 25, 2], [5, 24, 2], [6, 23, 2], [7, 22, 2], [8, 20, 3], [9, 20, 3], [10, 19, 3], [11, 19, 3], [0, 27, 2], [1, 26, 2]],
  1972: [[2, 16, 3], [3, 15, 3], [4, 14, 3], [5, 13, 3], [6, 12, 3], [7, 11, 3], [8, 9, 4], [9, 9, 4], [10, 7, 4], [11, 6, 4], [0, 17, 3], [1, 16, 3]],
  1973: [[3, 3, 4], [4, 3, 4], [5, 1, 4], [6, 1, 4], [6, 30, 4], [7, 29, 4], [8, 27, 5], [9, 27, 5], [10, 26, 5], [11, 26, 5], [0, 4, 4], [1, 3, 4]],
  1974: [[2, 24, 5], [3, 23, 5], [4, 22, 5], [5, 21, 5], [6, 20, 5], [7, 19, 5], [8, 17, 6], [9, 17, 6], [10, 15, 6], [11, 15, 6], [0, 24, 5], [1, 23, 5]],
  1975: [[2, 13, 6], [3, 12, 6], [4, 11, 6], [5, 10, 6], [6, 9, 6], [7, 8, 6], [8, 6, 7], [9, 6, 7], [10, 5, 7], [11, 5, 7], [0, 13, 6], [1, 12, 6]],
  1976: [[3, 1, 7], [4, 1, 7], [4, 30, 7], [5, 29, 7], [6, 28, 7], [7, 27, 7], [8, 25, 8], [9, 25, 8], [10, 23, 8], [11, 22, 8], [0, 3, 7], [1, 2, 7]],
  1977: [[2, 20, 8], [3, 19, 8], [4, 18, 8], [5, 17, 8], [6, 16, 8], [7, 15, 8], [8, 13, 9], [9, 13, 9], [10, 11, 9], [11, 11, 9], [0, 20, 8], [1, 19, 8]],
  1978: [[3, 8, 9], [4, 8, 9], [5, 6, 9], [6, 6, 9], [7, 4, 9], [8, 3, 9], [9, 2, 10], [10, 1, 10], [11, 1, 10], [11, 31, 10], [0, 9, 9], [1, 8, 9]],
  1979: [[2, 29, 10], [3, 28, 10], [4, 27, 10], [5, 26, 10], [6, 25, 10], [7, 24, 10], [8, 22, 11], [9, 22, 11], [10, 21, 11], [11, 21, 11], [0, 29, 10], [1, 28, 10]],
  1980: [[2, 18, 11], [3, 17, 11], [4, 16, 11], [5, 15, 11], [6, 14, 11], [7, 13, 11], [8, 11, 12], [9, 11, 12], [10, 9, 12], [11, 8, 12], [0, 19, 11], [1, 18, 11]],
  1981: [[3, 5, 12], [4, 5, 12], [5, 3, 12], [6, 3, 12], [7, 1, 12], [7, 31, 12], [8, 29, 13], [9, 29, 13], [10, 27, 13], [11, 27, 13], [0, 6, 12], [1, 5, 12]],
  1982: [[2, 25, 13], [3, 24, 13], [4, 23, 13], [5, 22, 13], [6, 21, 13], [7, 20, 13], [8, 18, 14], [9, 18, 14], [10, 17, 14], [11, 17, 14], [0, 25, 13], [1, 24, 13]],
  1983: [[2, 15, 14], [3, 14, 14], [4, 13, 14], [5, 12, 14], [6, 11, 14], [7, 10, 14], [8, 8, 15], [9, 8, 15], [10, 7, 15], [11, 7, 15], [0, 15, 14], [1, 14, 14]],
  1984: [[3, 3, 15], [4, 3, 15], [5, 1, 15], [6, 1, 15], [6, 30, 15], [7, 29, 15], [8, 27, 16], [9, 27, 16], [10, 25, 16], [11, 25, 16], [0, 5, 15], [1, 4, 15]],
  1985: [[2, 23, 16], [3, 22, 16], [4, 21, 16], [5, 20, 16], [6, 19, 16], [7, 18, 16], [8, 16, 17], [9, 16, 17], [10, 14, 17], [11, 13, 17], [0, 23, 16], [1, 22, 16]],
  1986: [[3, 10, 17], [4, 10, 17], [5, 8, 17], [6, 8, 17], [7, 6, 17], [8, 5, 17], [9, 4, 18], [10, 3, 18], [11, 3, 18], null, [0, 11, 17], [1, 10, 17]],
  1987: [[2, 31, 18], [3, 30, 18], [4, 29, 18], [5, 28, 18], [6, 27, 18], [7, 26, 18], [8, 24, 19], [9, 24, 19], [10, 22, 19], [0, 2, 18, 11, 22, 19], [0, 31, 18], [2, 2, 18]],
  1988: [[2, 19, 19], [3, 18, 19], [4, 17, 19], [5, 16, 19], [6, 15, 19], [7, 14, 19], [8, 12, 20], [9, 12, 20], [10, 10, 20], [11, 9, 20], [0, 20, 19], [1, 19, 19]],
  1989: [[3, 6, 20], [4, 6, 20], [5, 4, 20], [6, 4, 20], [7, 2, 20], [8, 1, 20], [8, 30, 21], [9, 30, 21], [10, 29, 21], [11, 29, 21], [0, 7, 20], [1, 6, 20]],
  1990: [[2, 27, 21], [3, 26, 21], [4, 25, 21], [5, 24, 21], [6, 23, 21], [7, 22, 21], [8, 20, 22], [9, 20, 22], [10, 18, 22], [11, 18, 22], [0, 27, 21], [1, 26, 21]],
  1991: [[2, 16, 22], [3, 15, 22], [4, 14, 22], [5, 13, 22], [6, 12, 22], [7, 11, 22], [8, 9, 23], [9, 9, 23], [10, 8, 23], [11, 8, 23], [0, 16, 22], [1, 15, 22]],
  1992: [[3, 4, 23], [4, 4, 23], [5, 2, 23], [6, 2, 23], [6, 31, 23], [7, 30, 23], [8, 28, 24], [9, 28, 24], [10, 26, 24], [11, 25, 24], [0, 6, 23], [1, 5, 23]],
  1993: [[2, 23, 24], [3, 22, 24], [4, 21, 24], [5, 20, 24], [6, 19, 24], [7, 18, 24], [8, 16, 25], [9, 16, 25], [10, 15, 25], [11, 15, 25], [0, 23, 24], [1, 22, 24]],
  1994: [[2, 13, 25], [3, 12, 25], [4, 11, 25], [5, 10, 25], [6, 9, 25], [7, 8, 25], [8, 6, 26], [9, 6, 26], [10, 4, 26], [11, 4, 26], [0, 13, 25], [1, 12, 25]],
  1995: [[3, 1, 26], [4, 1, 26], [4, 30, 26], [5, 29, 26], [6, 28, 26], [7, 27, 26], [8, 25, 27], [9, 25, 27], [10, 24, 27], [11, 24, 27], [0, 2, 26], [1, 1, 26]],
  1996: [[2, 21, 27], [3, 20, 27], [4, 19, 27], [5, 18, 27], [6, 17, 27], [7, 16, 27], [8, 14, 28], [9, 14, 28], [10, 12, 28], [11, 11, 28], [0, 22, 27], [1, 21, 27]],
  1997: [[3, 8, 28], [4, 8, 28], [5, 6, 28], [6, 6, 28], [7, 4, 28], [8, 3, 28], [9, 2, 29], [10, 1, 29], [10, 30, 29], [11, 30, 29], [0, 9, 28], [1, 8, 28]],
  1998: [[2, 28, 29], [3, 27, 29], [4, 26, 29], [5, 25, 29], [6, 24, 29], [7, 23, 29], [8, 21, 30], [9, 21, 30], [10, 20, 30], [11, 20, 30], [0, 28, 29], [1, 27, 29]],
  1999: [[2, 18, 30], [3, 17, 30], [4, 16, 30], [5, 15, 30], [6, 14, 30], [7, 13, 30], [8, 11, 31], [9, 11, 31], [10, 10, 31], [11, 10, 31], [0, 18, 30], [1, 17, 30]],
  2000: [[3, 6, 31], [4, 6, 31], [5, 4, 31], [6, 4, 31], [7, 2, 31], [8, 1, 31], [8, 30, 32], [9, 30, 32], [10, 28, 32], [11, 27, 32], [0, 8, 31], [1, 7, 31]],
  2001: [[2, 25, 32], [3, 24, 32], [4, 23, 32], [5, 22, 32], [6, 21, 32], [7, 20, 32], [8, 18, 33], [9, 18, 33], [10, 16, 33], [11, 16, 33], [0, 25, 32], [1, 24, 32]],
  2002: [[2, 14, 33], [3, 13, 33], [4, 12, 33], [5, 11, 33], [6, 10, 33], [7, 9, 33], [8, 7, 34], [9, 7, 34], [10, 6, 34], [11, 6, 34], [0, 14, 33], [1, 13, 33]],
  2003: [[3, 3, 34], [4, 3, 34], [5, 1, 34], [6, 1, 34], [6, 30, 34], [7, 29, 34], [8, 27, 35], [9, 27, 35], [10, 26, 35], [11, 26, 35], [0, 4, 34], [1, 3, 34]],
  2004: [[2, 23, 35], [3, 22, 35], [4, 21, 35], [5, 20, 35], [6, 19, 35], [7, 18, 35], [8, 16, 36], [9, 16, 36], [10, 14, 36], [11, 13, 36], [0, 24, 35], [1, 23, 35]],
  2005: [[3, 10, 36], [4, 10, 36], [5, 8, 36], [6, 8, 36], [7, 6, 36], [8, 5, 36], [9, 4, 37], [10, 3, 37], [11, 2, 37], null, [0, 11, 36], [1, 10, 36]],
  2006: [[2, 30, 37], [3, 29, 37], [4, 28, 37], [5, 27, 37], [6, 26, 37], [7, 25, 37], [8, 23, 38], [9, 23, 38], [10, 22, 38], [0, 1, 37, 11, 22, 38], [0, 30, 37], [2, 1, 37]],
  2007: [[2, 20, 38], [3, 19, 38], [4, 18, 38], [5, 17, 38], [6, 16, 38], [7, 15, 38], [8, 13, 39], [9, 13, 39], [10, 11, 39], [11, 10, 39], [0, 20, 38], [1, 19, 38]],
  2008: [[3, 6, 39], [4, 6, 39], [5, 4, 39], [6, 4, 39], [7, 2, 39], [8, 1, 39], [8, 30, 40], [9, 30, 40], [10, 28, 40], [11, 28, 40], [0, 8, 39], [1, 7, 39]],
  2009: [[2, 26, 40], [3, 25, 40], [4, 24, 40], [5, 23, 40], [6, 22, 40], [7, 21, 40], [8, 19, 41], [9, 19, 41], [10, 18, 41], [11, 18, 41], [0, 26, 40], [1, 25, 40]],
  2010: [[2, 16, 41], [3, 15, 41], [4, 14, 41], [5, 13, 41], [6, 12, 41], [7, 11, 41], [8, 9, 42], [9, 9, 42], [10, 8, 42], [11, 8, 42], [0, 16, 41], [1, 15, 41]],
  2011: [[3, 5, 42], [4, 5, 42], [5, 3, 42], [6, 3, 42], [7, 1, 42], [7, 31, 42], [8, 29, 43], [9, 29, 43], [10, 27, 43], [11, 27, 43], [0, 6, 42], [1, 5, 42]],
  2012: [[2, 24, 43], [3, 23, 43], [4, 22, 43], [5, 21, 43], [6, 20, 43], [7, 19, 43], [8, 17, 44], [9, 17, 44], [10, 15, 44], [11, 14, 44], [0, 25, 43], [1, 24, 43]],
  2013: [[2, 12, 44], [3, 11, 44], [4, 10, 44], [5, 9, 44], [6, 8, 44], [7, 7, 44], [8, 5, 45], [9, 5, 45], [10, 4, 45], [11, 4, 45], [0, 12, 44], [1, 11, 44]],
  2014: [[3, 1, 45], [4, 1, 45], [4, 30, 45], [5, 29, 45], [6, 28, 45], [7, 27, 45], [8, 25, 46], [9, 25, 46], [10, 23, 46], [11, 23, 46], [0, 2, 45], [1, 1, 45]],
  2015: [[2, 21, 46], [3, 20, 46], [4, 19, 46], [5, 18, 46], [6, 17, 46], [7, 16, 46], [8, 14, 47], [9, 14, 47], [10, 13, 47], [11, 13, 47], [0, 21, 46], [1, 20, 46]],
  2016: [[3, 9, 47], [4, 9, 47], [5, 7, 47], [6, 7, 47], [7, 5, 47], [8, 4, 47], [9, 3, 48], [10, 2, 48], [11, 1, 48], [11, 30, 48], [0, 11, 47], [1, 10, 47]],
  2017: [[2, 28, 48], [3, 27, 48], [4, 26, 48], [5, 25, 48], [6, 24, 48], [7, 23, 48], [8, 21, 49], [9, 21, 49], [10, 19, 49], [11, 19, 49], [0, 28, 48], [1, 27, 48]],
  2018: [[2, 17, 49], [3, 16, 49], [4, 15, 49], [5, 14, 49], [6, 13, 49], [7, 12, 49], [8, 10, 50], [9, 10, 50], [10, 9, 50], [11, 9, 50], [0, 17, 49], [1, 16, 49]],
  2019: [[3, 6, 50], [4, 6, 50], [5, 4, 50], [6, 4, 50], [7, 2, 50], [8, 1, 50], [8, 30, 51], [9, 30, 51], [10, 29, 51], [11, 29, 51], [0, 7, 50], [1, 6, 50]],
  2020: [[2, 26, 51], [3, 25, 51], [4, 24, 51], [5, 23, 51], [6, 22, 51], [7, 21, 51], [8, 19, 52], [9, 19, 52], [10, 17, 52], [11, 16, 52], [0, 27, 51], [1, 26, 51]],
  2021: [[2, 14, 52], [3, 13, 52], [4, 12, 52], [5, 11, 52], [6, 10, 52], [7, 9, 52], [8, 7, 53], [9, 7, 53], [10, 5, 53], [11, 5, 53], [0, 14, 52], [1, 13, 52]],
  2022: [[3, 2, 53], [4, 2, 53], [4, 31, 53], [5, 30, 53], [6, 29, 53], [7, 28, 53], [8, 26, 54], [9, 26, 54], [10, 25, 54], [11, 25, 54], [0, 3, 53], [1, 2, 53]],
  2023: [[2, 23, 54], [3, 22, 54], [4, 21, 54], [5, 20, 54], [6, 19, 54], [7, 18, 54], [8, 16, 55], [9, 16, 55], [10, 14, 55], [11, 13, 55], [0, 23, 54], [1, 22, 54]],
  2024: [[3, 9, 55], [4, 9, 55], [5, 7, 55], [6, 7, 55], [7, 5, 55], [8, 4, 55], [9, 3, 56], [10, 2, 56], [11, 2, 56], null, [0, 11, 55], [1, 10, 55]],
  2025: [[2, 30, 56], [3, 29, 56], [4, 28, 56], [5, 27, 56], [6, 26, 56], [7, 25, 56], [8, 23, 57], [9, 23, 57], [10, 21, 57], [0, 1, 56, 11, 21, 57], [0, 30, 56], [2, 1, 56]],
  2026: [[2, 19, 57], [3, 18, 57], [4, 17, 57], [5, 16, 57], [6, 15, 57], [7, 14, 57], [8, 12, 58], [9, 12, 58], [10, 11, 58], [11, 11, 58], [0, 19, 57], [1, 18, 57]],
  2027: [[3, 8, 58], [4, 8, 58], [5, 6, 58], [6, 6, 58], [7, 4, 58], [8, 3, 58], [9, 2, 59], [10, 1, 59], [11, 1, 59], [11, 31, 59], [0, 9, 58], [1, 8, 58]],
  2028: [[2, 28, 59], [3, 27, 59], [4, 26, 59], [5, 25, 59], [6, 24, 59], [7, 23, 59], [8, 21, 60], [9, 21, 60], [10, 19, 60], [11, 19, 60], [0, 29, 59], [1, 28, 59]],
  2029: [[2, 17, 60], [3, 16, 60], [4, 15, 60], [5, 14, 60], [6, 13, 60], [7, 12, 60], [8, 10, 61], [9, 10, 61], [10, 8, 61], [11, 7, 61], [0, 17, 60], [1, 16, 60]],
  2030: [[3, 4, 61], [4, 4, 61], [5, 2, 61], [6, 2, 61], [6, 31, 61], [7, 30, 61], [8, 28, 62], [9, 28, 62], [10, 27, 62], [11, 27, 62], [0, 5, 61], [1, 4, 61]],
  2031: [[2, 25, 62], [3, 24, 62], [4, 23, 62], [5, 22, 62], [6, 21, 62], [7, 20, 62], [8, 18, 63], [9, 18, 63], [10, 16, 63], [11, 16, 63], [0, 25, 62], [1, 24, 62]],
  2032: [[2, 13, 63], [3, 12, 63], [4, 11, 63], [5, 10, 63], [6, 9, 63], [7, 8, 63], [8, 6, 64], [9, 6, 64], [10, 4, 64], [11, 3, 64], [0, 14, 63], [1, 13, 63]],
  2033: [[2, 31, 64], [3, 30, 64], [4, 29, 64], [5, 28, 64], [6, 27, 64], [7, 26, 64], [8, 24, 65], [9, 24, 65], [10, 23, 65], [11, 23, 65], [0, 1, 64], [0, 31, 64]],
  2034: [[2, 21, 65], [3, 20, 65], [4, 19, 65], [5, 18, 65], [6, 17, 65], [7, 16, 65], [8, 14, 66], [9, 14, 66], [10, 13, 66], [11, 13, 66], [0, 21, 65], [1, 20, 65]],
  2035: [[3, 10, 66], [4, 10, 66], [5, 8, 66], [6, 8, 66], [7, 6, 66], [8, 5, 66], [9, 4, 67], [10, 3, 67], [11, 2, 67], null, [0, 11, 66], [1, 10, 66]],
  2036: [[2, 29, 67], [3, 28, 67], [4, 27, 67], [5, 26, 67], [6, 25, 67], [7, 24, 67], [8, 22, 68], [9, 22, 68], [10, 20, 68], [0, 1, 67, 11, 19, 68], [0, 30, 67], [1, 29, 67]],
  2037: [[2, 17, 68], [3, 16, 68], [4, 15, 68], [5, 14, 68], [6, 13, 68], [7, 12, 68], [8, 10, 69], [9, 10, 69], [10, 9, 69], [11, 9, 69], [0, 17, 68], [1, 16, 68]],
  2038: [[3, 6, 69], [4, 6, 69], [5, 4, 69], [6, 4, 69], [7, 2, 69], [8, 1, 69], [8, 30, 70], [9, 30, 70], [10, 28, 70], [11, 28, 70], [0, 7, 69], [1, 6, 69]],
  2039: [[2, 26, 70], [3, 25, 70], [4, 24, 70], [5, 23, 70], [6, 22, 70], [7, 21, 70], [8, 19, 71], [9, 19, 71], [10, 18, 71], [11, 18, 71], [0, 26, 70], [1, 25, 70]],
  2040: [[2, 15, 71], [3, 14, 71], [4, 13, 71], [5, 12, 71], [6, 11, 71], [7, 10, 71], [8, 8, 72], [9, 8, 72], [10, 6, 72], [11, 5, 72], [0, 16, 71], [1, 15, 71]],
  2041: [[3, 2, 72], [4, 2, 72], [4, 31, 72], [5, 30, 72], [6, 29, 72], [7, 28, 72], [8, 26, 73], [9, 26, 73], [10, 24, 73], [11, 24, 73], [0, 3, 72], [1, 2, 72]],
  2042: [[2, 22, 73], [3, 21, 73], [4, 20, 73], [5, 19, 73], [6, 18, 73], [7, 17, 73], [8, 15, 74], [9, 15, 74], [10, 14, 74], [11, 14, 74], [0, 22, 73], [1, 21, 73]],
  2043: [[3, 11, 74], [4, 11, 74], [5, 9, 74], [6, 9, 74], [7, 7, 74], [8, 6, 74], [9, 5, 75], [10, 4, 75], [11, 3, 75], null, [0, 12, 74], [1, 11, 74]],
  2044: [[2, 29, 75], [3, 28, 75], [4, 27, 75], [5, 26, 75], [6, 25, 75], [7, 24, 75], [8, 22, 76], [9, 22, 76], [10, 21, 76], [0, 1, 75, 11, 21, 76], [0, 30, 75], [1, 29, 75]],
  2045: [[2, 19, 76], [3, 18, 76], [4, 17, 76], [5, 16, 76], [6, 15, 76], [7, 14, 76], [8, 12, 77], [9, 12, 77], [10, 10, 77], [11, 10, 77], [0, 19, 76], [1, 18, 76]],
  2046: [[3, 7, 77], [4, 7, 77], [5, 5, 77], [6, 5, 77], [7, 3, 77], [8, 2, 77], [9, 1, 78], [9, 31, 78], [10, 30, 78], [11, 30, 78], [0, 8, 77], [1, 7, 77]],
  2047: [[2, 28, 78], [3, 27, 78], [4, 26, 78], [5, 25, 78], [6, 24, 78], [7, 23, 78], [8, 21, 79], [9, 21, 79], [10, 19, 79], [11, 18, 79], [0, 28, 78], [1, 27, 78]],
  2048: [[2, 15, 79], [3, 14, 79], [4, 13, 79], [5, 12, 79], [6, 11, 79], [7, 10, 79], [8, 8, 80], [9, 8, 80], [10, 6, 80], [11, 6, 80], [0, 16, 79], [1, 15, 79]],
  2049: [[3, 3, 80], [4, 3, 80], [5, 1, 80], [6, 1, 80], [6, 30, 80], [7, 29, 80], [8, 27, 81], [9, 27, 81], [10, 26, 81], [11, 26, 81], [0, 4, 80], [1, 3, 80]],
  2050: [[2, 24, 81], [3, 23, 81], [4, 22, 81], [5, 21, 81], [6, 20, 81], [7, 19, 81], [8, 17, 82], [9, 17, 82], [10, 16, 82], [11, 16, 82], [0, 24, 81], [1, 23, 81]],
  2051: [[2, 14, 82], [3, 13, 82], [4, 12, 82], [5, 11, 82], [6, 10, 82], [7, 9, 82], [8, 7, 83], [9, 7, 83], [10, 5, 83], [11, 4, 83], [0, 14, 82], [1, 13, 82]],
  2052: [[2, 31, 83], [3, 30, 83], [4, 29, 83], [5, 28, 83], [6, 27, 83], [7, 26, 83], [8, 24, 84], [9, 24, 84], [10, 22, 84], [11, 22, 84], [0, 2, 83], [1, 1, 83]],
  2053: [[2, 20, 84], [3, 19, 84], [4, 18, 84], [5, 17, 84], [6, 16, 84], [7, 15, 84], [8, 13, 85], [9, 13, 85], [10, 12, 85], [11, 12, 85], [0, 20, 84], [1, 19, 84]],
  2054: [[3, 9, 85], [4, 9, 85], [5, 7, 85], [6, 7, 85], [7, 5, 85], [8, 4, 85], [9, 3, 86], [10, 2, 86], [11, 2, 86], null, [0, 10, 85], [1, 9, 85]],
  2055: [[2, 30, 86], [3, 29, 86], [4, 28, 86], [5, 27, 86], [6, 26, 86], [7, 25, 86], [8, 23, 87], [9, 23, 87], [10, 21, 87], [0, 1, 86, 11, 21, 87], [0, 30, 86], [2, 1, 86]],
  2056: [[2, 18, 87], [3, 17, 87], [4, 16, 87], [5, 15, 87], [6, 14, 87], [7, 13, 87], [8, 11, 88], [9, 11, 88], [10, 9, 88], [11, 8, 88], [0, 19, 87], [1, 18, 87]],
  2057: [[3, 5, 88], [4, 5, 88], [5, 3, 88], [6, 3, 88], [7, 1, 88], [7, 31, 88], [8, 29, 89], [9, 29, 89], [10, 28, 89], [11, 28, 89], [0, 6, 88], [1, 5, 88]],
  2058: [[2, 26, 89], [3, 25, 89], [4, 24, 89], [5, 23, 89], [6, 22, 89], [7, 21, 89], [8, 19, 90], [9, 19, 90], [10, 17, 90], [11, 17, 90], [0, 26, 89], [1, 25, 89]],
  2059: [[2, 15, 90], [3, 14, 90], [4, 13, 90], [5, 12, 90], [6, 11, 90], [7, 10, 90], [8, 8, 91], [9, 8, 91], [10, 6, 91], [11, 5, 91], [0, 15, 90], [1, 14, 90]],
  2060: [[3, 1, 91], [4, 1, 91], [4, 30, 91], [5, 29, 91], [6, 28, 91], [7, 27, 91], [8, 25, 92], [9, 25, 92], [10, 24, 92], [11, 24, 92], [0, 3, 91], [1, 2, 91]],
  2061: [[2, 22, 92], [3, 21, 92], [4, 20, 92], [5, 19, 92], [6, 18, 92], [7, 17, 92], [8, 15, 93], [9, 15, 93], [10, 14, 93], [11, 14, 93], [0, 22, 92], [1, 21, 92]],
  2062: [[3, 11, 93], [4, 11, 93], [5, 9, 93], [6, 9, 93], [7, 7, 93], [8, 6, 93], [9, 5, 94], [10, 4, 94], [11, 3, 94], null, [0, 12, 93], [1, 11, 93]],
  2063: [[2, 31, 94], [3, 30, 94], [4, 29, 94], [5, 28, 94], [6, 27, 94], [7, 26, 94], [8, 24, 95], [9, 24, 95], [10, 22, 95], [0, 2, 94, 11, 21, 95], [0, 31, 94], [2, 2, 94]],
  2064: [[2, 18, 95], [3, 17, 95], [4, 16, 95], [5, 15, 95], [6, 14, 95], [7, 13, 95], [8, 11, 96], [9, 11, 96], [10, 10, 96], [11, 10, 96], [0, 19, 95], [1, 18, 95]],
  2065: [[3, 7, 96], [4, 7, 96], [5, 5, 96], [6, 5, 96], [7, 3, 96], [8, 2, 96], [9, 1, 97], [9, 31, 97], [10, 29, 97], [11, 29, 97], [0, 8, 96], [1, 7, 96]],
  2066: [[2, 27, 97], [3, 26, 97], [4, 25, 97], [5, 24, 97], [6, 23, 97], [7, 22, 97], [8, 20, 98], [9, 20, 98], [10, 19, 98], [11, 19, 98], [0, 27, 97], [1, 26, 97]],
  2067: [[2, 17, 98], [3, 16, 98], [4, 15, 98], [5, 14, 98], [6, 13, 98], [7, 12, 98], [8, 10, 99], [9, 10, 99], [10, 8, 99], [11, 7, 99], [0, 17, 98], [1, 16, 98]],
  2068: [[3, 3, 99], [4, 3, 99], [5, 1, 99], [6, 1, 99], [6, 30, 99], [7, 29, 99], [8, 27, 100], [9, 27, 100], [10, 25, 100], [11, 25, 100], [0, 5, 99], [1, 4, 99]],
  2069: [[2, 23, 100], [3, 22, 100], [4, 21, 100], [5, 20, 100], [6, 19, 100], [7, 18, 100], [8, 16, 101], [9, 16, 101], [10, 15, 101], [11, 15, 101], [0, 23, 100], [1, 22, 100]],
  2070: [[2, 13, 101], [3, 12, 101], [4, 11, 101], [5, 10, 101], [6, 9, 101], [7, 8, 101], [8, 6, 102], [9, 6, 102], [10, 4, 102], [11, 3, 102], [0, 13, 101], [1, 12, 101]],
  2071: [[2, 31, 102], [3, 30, 102], [4, 29, 102], [5, 28, 102], [6, 27, 102], [7, 26, 102], [8, 24, 103], [9, 24, 103], [10, 23, 103], [11, 23, 103], [0, 1, 102], [0, 31, 102]],
  2072: [[2, 20, 103], [3, 19, 103], [4, 18, 103], [5, 17, 103], [6, 16, 103], [7, 15, 103], [8, 13, 104], [9, 13, 104], [10, 11, 104], [11, 11, 104], [0, 21, 103], [1, 20, 103]],
  2073: [[3, 8, 104], [4, 8, 104], [5, 6, 104], [6, 6, 104], [7, 4, 104], [8, 3, 104], [9, 2, 105], [10, 1, 105], [11, 1, 105], [11, 31, 105], [0, 9, 104], [1, 8, 104]],
  2074: [[2, 29, 105], [3, 28, 105], [4, 27, 105], [5, 26, 105], [6, 25, 105], [7, 24, 105], [8, 22, 106], [9, 22, 106], [10, 20, 106], [11, 19, 106], [0, 29, 105], [1, 28, 105]],
  2075: [[2, 17, 106], [3, 16, 106], [4, 15, 106], [5, 14, 106], [6, 13, 106], [7, 12, 106], [8, 10, 107], [9, 10, 107], [10, 8, 107], [11, 8, 107], [0, 17, 106], [1, 16, 106]],
  2076: [[3, 4, 107], [4, 4, 107], [5, 2, 107], [6, 2, 107], [6, 31, 107], [7, 30, 107], [8, 28, 108], [9, 28, 108], [10, 27, 108], [11, 27, 108], [0, 6, 107], [1, 5, 107]],
  2077: [[2, 25, 108], [3, 24, 108], [4, 23, 108], [5, 22, 108], [6, 21, 108], [7, 20, 108], [8, 18, 109], [9, 18, 109], [10, 17, 109], [11, 17, 109], [0, 25, 108], [1, 24, 108]],
  2078: [[2, 15, 109], [3, 14, 109], [4, 13, 109], [5, 12, 109], [6, 11, 109], [7, 10, 109], [8, 8, 110], [9, 8, 110], [10, 6, 110], [11, 5, 110], [0, 15, 109], [1, 14, 109]],
  2079: [[3, 2, 110], [4, 2, 110], [4, 31, 110], [5, 30, 110], [6, 29, 110], [7, 28, 110], [8, 26, 111], [9, 26, 111], [10, 24, 111], [11, 24, 111], [0, 3, 110], [1, 2, 110]],
  2080: [[2, 21, 111], [3, 20, 111], [4, 19, 111], [5, 18, 111], [6, 17, 111], [7, 16, 111], [8, 14, 112], [9, 14, 112], [10, 13, 112], [11, 13, 112], [0, 22, 111], [1, 21, 111]],
  2081: [[3, 10, 112], [4, 10, 112], [5, 8, 112], [6, 8, 112], [7, 6, 112], [8, 5, 112], [9, 4, 113], [10, 3, 113], [11, 3, 113], null, [0, 11, 112], [1, 10, 112]],
  2082: [[2, 31, 113], [3, 30, 113], [4, 29, 113], [5, 28, 113], [6, 27, 113], [7, 26, 113], [8, 24, 114], [9, 24, 114], [10, 22, 114], [0, 2, 113, 11, 22, 114], [0, 31, 113], [2, 2, 113]],
  2083: [[2, 20, 114], [3, 19, 114], [4, 18, 114], [5, 17, 114], [6, 16, 114], [7, 15, 114], [8, 13, 115], [9, 13, 115], [10, 11, 115], [11, 10, 115], [0, 20, 114], [1, 19, 114]],
  2084: [[3, 6, 115], [4, 6, 115], [5, 4, 115], [6, 4, 115], [7, 2, 115], [8, 1, 115], [8, 30, 116], [9, 30, 116], [10, 29, 116], [11, 29, 116], [0, 8, 115], [1, 7, 115]],
  2085: [[2, 27, 116], [3, 26, 116], [4, 25, 116], [5, 24, 116], [6, 23, 116], [7, 22, 116], [8, 20, 117], [9, 20, 117], [10, 18, 117], [11, 18, 117], [0, 27, 116], [1, 26, 116]],
  2086: [[2, 16, 117], [3, 15, 117], [4, 14, 117], [5, 13, 117], [6, 12, 117], [7, 11, 117], [8, 9, 118], [9, 9, 118], [10, 7, 118], [11, 6, 118], [0, 16, 117], [1, 15, 117]],
  2087: [[3, 3, 118], [4, 3, 118], [5, 1, 118], [6, 1, 118], [6, 30, 118], [7, 29, 118], [8, 27, 119], [9, 27, 119], [10, 26, 119], [11, 26, 119], [0, 4, 118], [1, 3, 118]],
  2088: [[2, 23, 119], [3, 22, 119], [4, 21, 119], [5, 20, 119], [6, 19, 119], [7, 18, 119], [8, 16, 120], [9, 16, 120], [10, 14, 120], [11, 14, 120], [0, 24, 119], [1, 23, 119]],
  2089: [[2, 12, 120], [3, 11, 120], [4, 10, 120], [5, 9, 120], [6, 8, 120], [7, 7, 120], [8, 5, 121], [9, 5, 121], [10, 4, 121], [11, 4, 121], [0, 12, 120], [1, 11, 120]],
  2090: [[3, 1, 121], [4, 1, 121], [4, 30, 121], [5, 29, 121], [6, 28, 121], [7, 27, 121], [8, 25, 122], [9, 25, 122], [10, 23, 122], [11, 22, 122], [0, 2, 121], [1, 1, 121]],
  2091: [[2, 20, 122], [3, 19, 122], [4, 18, 122], [5, 17, 122], [6, 16, 122], [7, 15, 122], [8, 13, 123], [9, 13, 123], [10, 12, 123], [11, 12, 123], [0, 20, 122], [1, 19, 122]],
  2092: [[3, 8, 123], [4, 8, 123], [5, 6, 123], [6, 6, 123], [7, 4, 123], [8, 3, 123], [9, 2, 124], [10, 1, 124], [10, 30, 124], [11, 30, 124], [0, 10, 123], [1, 9, 123]],
  2093: [[2, 28, 124], [3, 27, 124], [4, 26, 124], [5, 25, 124], [6, 24, 124], [7, 23, 124], [8, 21, 125], [9, 21, 125], [10, 20, 125], [11, 20, 125], [0, 28, 124], [1, 27, 124]],
  2094: [[2, 18, 125], [3, 17, 125], [4, 16, 125], [5, 15, 125], [6, 14, 125], [7, 13, 125], [8, 11, 126], [9, 11, 126], [10, 9, 126], [11, 8, 126], [0, 18, 125], [1, 17, 125]],
  2095: [[3, 5, 126], [4, 5, 126], [5, 3, 126], [6, 3, 126], [7, 1, 126], [7, 31, 126], [8, 29, 127], [9, 29, 127], [10, 27, 127], [11, 27, 127], [0, 6, 126], [1, 5, 126]],
  2096: [[2, 24, 127], [3, 23, 127], [4, 22, 127], [5, 21, 127], [6, 20, 127], [7, 19, 127], [8, 17, 128], [9, 17, 128], [10, 16, 128], [11, 16, 128], [0, 25, 127], [1, 24, 127]],
  2097: [[2, 14, 128], [3, 13, 128], [4, 12, 128], [5, 11, 128], [6, 10, 128], [7, 9, 128], [8, 7, 129], [9, 7, 129], [10, 6, 129], [11, 6, 129], [0, 14, 128], [1, 13, 128]],
  2098: [[3, 3, 129], [4, 3, 129], [5, 1, 129], [6, 1, 129], [6, 30, 129], [7, 29, 129], [8, 27, 130], [9, 27, 130], [10, 25, 130], [11, 24, 130], [0, 4, 129], [1, 3, 129]],
  2099: [[2, 22, 130], [3, 21, 130], [4, 20, 130], [5, 19, 130], [6, 18, 130], [7, 17, 130], [8, 15, 131], [9, 15, 131], [10, 13, 131], [11, 13, 131], [0, 22, 130], [1, 21, 130]],
  2100: [[3, 10, 131], [4, 10, 131], [5, 8, 131], [6, 8, 131], [7, 6, 131], [8, 5, 131], null, null, null, null, [0, 11, 131], [1, 10, 131]],
  year: 5729
};

/***/ }),

/***/ 65443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var Parser = __webpack_require__(23536);
var Rule = __webpack_require__(75445);
var PostRule = __webpack_require__(62415);
var CalEventFactory = __webpack_require__(80337);
/**
 * handles one rule
 */

var DateFn = /*#__PURE__*/function () {
  /**
   * @param {string} rule - unparsed rule
   * @param {array} holidays - all holidays rules (required for bridge day calculations)
   */
  function DateFn(ruleStr, holidays) {
    _classCallCheck(this, DateFn);
    var parser = new Parser();
    this.ruleStr = ruleStr;
    this.rules = parser.parse(ruleStr);
    this.ok = !parser.error;
    this.holidays = holidays;
    this.opts = holidays ? holidays[ruleStr] : {};
    this.event = undefined;
  }
  _createClass(DateFn, [{
    key: "inYear",
    value: function inYear(year) {
      var ruleFn; // current rule

      var postProc = new PostRule(this.ruleStr, this.opts, this.holidays);
      this.rules.forEach(function (rule) {
        var calEvent;
        if (rule.fn) {
          calEvent = new CalEventFactory(rule).inYear(year - 1) // run over neighboring dates to catch overlaps
          .inYear(year).inYear(year + 1);
          postProc.push(calEvent);
          ruleFn = new Rule(calEvent);
        } else {
          if (ruleFn.resolve(rule)) {
            postProc.resolve(rule, year);
          }
        }
      });
      this.event = postProc.getEvent(year);
      return this;
    }
  }, {
    key: "get",
    value: function get(timezone) {
      return this.event.get(timezone);
    }
  }]);
  return DateFn;
}();
module.exports = DateFn;

/***/ }),

/***/ 65805:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.trueLongitude = trueLongitude;
exports.meanAnomaly = meanAnomaly;
exports.eccentricity = eccentricity;
exports.radius = radius;
exports.apparentLongitude = apparentLongitude;
exports.true2000 = true2000;
exports.trueEquatorial = trueEquatorial;
exports.apparentEquatorial = apparentEquatorial;
exports.trueVSOP87 = trueVSOP87;
exports.apparentVSOP87 = apparentVSOP87;
exports.apparentEquatorialVSOP87 = apparentEquatorialVSOP87;
exports.aberration = aberration;
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
var _coord = _interopRequireDefault(__webpack_require__(93637));
var _nutation = _interopRequireDefault(__webpack_require__(46722));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/**
 * True returns true geometric longitude and anomaly of the sun referenced to the mean equinox of date.
 *
 * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
 * @returns {Object}
 *   {Number} lon = true geometric longitude, ☉, in radians
 *   {Number} ano = true anomaly in radians
 */
function trueLongitude(T) {
  // (25.2) p. 163
  var L0 = _base["default"].horner(T, 280.46646, 36000.76983, 0.0003032) * Math.PI / 180;
  var m = meanAnomaly(T);
  var C = (_base["default"].horner(T, 1.914602, -0.004817, -0.000014) * Math.sin(m) + (0.019993 - 0.000101 * T) * Math.sin(2 * m) + 0.000289 * Math.sin(3 * m)) * Math.PI / 180;
  var lon = _base["default"].pmod(L0 + C, 2 * Math.PI);
  var ano = _base["default"].pmod(m + C, 2 * Math.PI);
  return {
    lon: lon,
    ano: ano
  };
}
/**
 * meanAnomaly returns the mean anomaly of Earth at the given T.
 *
 * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
 * @returns {Number} Result is in radians and is not normalized to the range 0..2π.
 */

function meanAnomaly(T) {
  // (25.3) p. 163
  return _base["default"].horner(T, 357.52911, 35999.05029, -0.0001537) * Math.PI / 180;
}
/**
 * eccentricity returns eccentricity of the Earth's orbit around the sun.
 *
 * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
 * @returns {Number} eccentricity of the Earth's orbit around the sun.
 */

function eccentricity(T) {
  // (25.4) p. 163
  return _base["default"].horner(T, 0.016708634, -0.000042037, -0.0000001267);
}
/**
 * Radius returns the Sun-Earth distance in AU.
 *
 * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
 * @returns {Number} Sun-Earth distance in AU
 */

function radius(T) {
  var _trueLongitude = trueLongitude(T),
    lon = _trueLongitude.lon,
    ano = _trueLongitude.ano; // eslint-disable-line

  var e = eccentricity(T); // (25.5) p. 164

  return 1.000001018 * (1 - e * e) / (1 + e * Math.cos(ano));
}
/**
 * ApparentLongitude returns apparent longitude of the Sun referenced to the true equinox of date.
 * Result includes correction for nutation and aberration.  Unit is radians.
 *
 * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
 * @returns {Number} apparent longitude of the Sun referenced to the true equinox of date.
 */

function apparentLongitude(T) {
  var Ω = node(T);
  var _trueLongitude2 = trueLongitude(T),
    lon = _trueLongitude2.lon,
    ano = _trueLongitude2.ano; // eslint-disable-line

  return lon - 0.00569 * Math.PI / 180 - 0.00478 * Math.PI / 180 * Math.sin(Ω);
}
/**
 * @private
 */

function node(T) {
  return 125.04 * Math.PI / 180 - 1934.136 * Math.PI / 180 * T;
}
/**
 * true2000 returns true geometric longitude and anomaly of the sun referenced to equinox J2000.
 * Results are accurate to .01 degree for years 1900 to 2100.
 *
 * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
 * @returns {Object}
 *   {Number} lon - true geometric longitude, ☉, in radians
 *   {Number} ano - true anomaly in radians
 */

function true2000(T) {
  var _trueLongitude3 = trueLongitude(T),
    lon = _trueLongitude3.lon,
    ano = _trueLongitude3.ano;
  lon -= 0.01397 * Math.PI / 180 * T * 100;
  return {
    lon: lon,
    ano: ano
  };
}
/**
 * trueEquatorial returns the true geometric position of the Sun as equatorial coordinates.
 *
 * @param {Number} jde - Julian ephemeris day
 * @returns {base.Coord}
 *   {Number} ra - right ascension in radians
 *   {Number} dec - declination in radians
 */

function trueEquatorial(jde) {
  var _trueLongitude4 = trueLongitude(_base["default"].J2000Century(jde)),
    lon = _trueLongitude4.lon,
    ano = _trueLongitude4.ano; // eslint-disable-line

  var ε = _nutation["default"].meanObliquity(jde);
  var _base$sincos = _base["default"].sincos(lon),
    _base$sincos2 = _slicedToArray(_base$sincos, 2),
    ss = _base$sincos2[0],
    cs = _base$sincos2[1];
  var _base$sincos3 = _base["default"].sincos(ε),
    _base$sincos4 = _slicedToArray(_base$sincos3, 2),
    sε = _base$sincos4[0],
    cε = _base$sincos4[1]; // (25.6, 25.7) p. 165

  var ra = Math.atan2(cε * ss, cs);
  var dec = sε * ss;
  return new _base["default"].Coord(ra, dec);
}
/**
 * apparentEquatorial returns the apparent position of the Sun as equatorial coordinates.
 *
 * @param {Number} jde - Julian ephemeris day
 * @returns {base.Coord}
 *   {Number} ra - right ascension in radians
 *   {Number} dec - declination in radians
 */

function apparentEquatorial(jde) {
  var T = _base["default"].J2000Century(jde);
  var λ = apparentLongitude(T);
  var ε = _nutation["default"].meanObliquity(jde);
  var _base$sincos5 = _base["default"].sincos(λ),
    _base$sincos6 = _slicedToArray(_base$sincos5, 2),
    sλ = _base$sincos6[0],
    cλ = _base$sincos6[1]; // (25.8) p. 165

  var _base$sincos7 = _base["default"].sincos(ε + 0.00256 * Math.PI / 180 * Math.cos(node(T))),
    _base$sincos8 = _slicedToArray(_base$sincos7, 2),
    sε = _base$sincos8[0],
    cε = _base$sincos8[1];
  var ra = Math.atan2(cε * sλ, cλ);
  var dec = Math.asin(sε * sλ);
  return new _base["default"].Coord(ra, dec);
}
/**
 * trueVSOP87 returns the true geometric position of the sun as ecliptic coordinates.
 *
 * Result computed by full VSOP87 theory.  Result is at equator and equinox
 * of date in the FK5 frame.  It does not include nutation or aberration.
 *
 * @param {planetposition.Planet} planet
 * @param {Number} jde - Julian ephemeris day
 * @returns {Object}
 *   {Number} lon - ecliptic longitude in radians
 *   {Number} lat - ecliptic latitude in radians
 *   {Number} range - range in AU
 */

function trueVSOP87(planet, jde) {
  var _planet$position = planet.position(jde),
    lon = _planet$position.lon,
    lat = _planet$position.lat,
    range = _planet$position.range;
  var s = lon + Math.PI; // FK5 correction.

  var λp = _base["default"].horner(_base["default"].J2000Century(jde), s, -1.397 * Math.PI / 180, -0.00031 * Math.PI / 180);
  var _base$sincos9 = _base["default"].sincos(λp),
    _base$sincos10 = _slicedToArray(_base$sincos9, 2),
    sλp = _base$sincos10[0],
    cλp = _base$sincos10[1];
  var Δβ = 0.03916 / 3600 * Math.PI / 180 * (cλp - sλp); // (25.9) p. 166

  lon = _base["default"].pmod(s - 0.09033 / 3600 * Math.PI / 180, 2 * Math.PI);
  lat = Δβ - lat;
  return new _base["default"].Coord(lon, lat, range);
}
/**
 * apparentVSOP87 returns the apparent position of the sun as ecliptic coordinates.
 *
 * Result computed by VSOP87, at equator and equinox of date in the FK5 frame,
 * and includes effects of nutation and aberration.
 *
 * @param {planetposition.Planet} planet
 * @param {Number} jde - Julian ephemeris day
 * @returns {base.Coord}
 *   {Number} lon - ecliptic longitude in radians
 *   {Number} lat - ecliptic latitude in radians
 *   {Number} range - range in AU
 */

function apparentVSOP87(planet, jde) {
  // note: see duplicated code in ApparentEquatorialVSOP87.
  var _trueVSOP = trueVSOP87(planet, jde),
    lon = _trueVSOP.lon,
    lat = _trueVSOP.lat,
    range = _trueVSOP.range;
  var Δψ = _nutation["default"].nutation(jde)[0];
  var a = aberration(range);
  lon = lon + Δψ + a;
  return new _base["default"].Coord(lon, lat, range);
}
/**
 * apparentEquatorialVSOP87 returns the apparent position of the sun as equatorial coordinates.
 *
 * Result computed by VSOP87, at equator and equinox of date in the FK5 frame,
 * and includes effects of nutation and aberration.
 *
 * @param {planetposition.Planet} planet
 * @param {Number} jde - Julian ephemeris day
 * @returns
 *   {Number} ra - right ascension in radians
 *   {Number} dec - declination in radians
 *   {Number} range - range in AU
 */

function apparentEquatorialVSOP87(planet, jde) {
  // note: duplicate code from ApparentVSOP87 so we can keep Δε.
  // see also duplicate code in time.E().
  var _trueVSOP2 = trueVSOP87(planet, jde),
    lon = _trueVSOP2.lon,
    lat = _trueVSOP2.lat,
    range = _trueVSOP2.range;
  var _nutation$nutation = _nutation["default"].nutation(jde),
    _nutation$nutation2 = _slicedToArray(_nutation$nutation, 2),
    Δψ = _nutation$nutation2[0],
    Δε = _nutation$nutation2[1];
  var a = aberration(range);
  var λ = lon + Δψ + a;
  var ε = _nutation["default"].meanObliquity(jde) + Δε;
  var _coord$Ecliptic$toEqu = new _coord["default"].Ecliptic(λ, lat).toEquatorial(ε),
    ra = _coord$Ecliptic$toEqu.ra,
    dec = _coord$Ecliptic$toEqu.dec;
  return new _base["default"].Coord(ra, dec, range);
}
/**
 * Low precision formula.  The high precision formula is not implemented
 * because the low precision formula already gives position results to the
 * accuracy given on p. 165.  The high precision formula represents lots
 * of typing with associated chance of typos, and no way to test the result.
 * @param {Number} range
 * @returns {Number} aberation
 */

function aberration(range) {
  // (25.10) p. 167
  return -20.4898 / 3600 * Math.PI / 180 / range;
}
var _default = {
  trueLongitude: trueLongitude,
  "true": trueLongitude,
  // BACKWARDS-COMPATIBILITY
  meanAnomaly: meanAnomaly,
  eccentricity: eccentricity,
  radius: radius,
  apparentLongitude: apparentLongitude,
  true2000: true2000,
  trueEquatorial: trueEquatorial,
  apparentEquatorial: apparentEquatorial,
  trueVSOP87: trueVSOP87,
  apparentVSOP87: apparentVSOP87,
  apparentEquatorialVSOP87: apparentEquatorialVSOP87,
  aberration: aberration
};
exports["default"] = _default;

/***/ }),

/***/ 69764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _Chinese = __webpack_require__(81376);
var _Chinese2 = _interopRequireDefault(_Chinese);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * @copyright 2016 commenthol
   * @license MIT
   */

var CalendarVietnamese = function (_CalendarChinese) {
  _inherits(CalendarVietnamese, _CalendarChinese);
  function CalendarVietnamese() {
    _classCallCheck(this, CalendarVietnamese);
    return _possibleConstructorReturn(this, (CalendarVietnamese.__proto__ || Object.getPrototypeOf(CalendarVietnamese)).apply(this, arguments));
  }
  _createClass(CalendarVietnamese, [{
    key: 'timeshiftUTC',
    /**
     * timeshift to UTC
     *
     * @param {CalendarGregorian} gcal - gregorian calendar date
     * @return {Number} timeshift in fraction of day
     */
    value: function timeshiftUTC(gcal) {
      if (gcal.toYear() >= 1968) {
        return 7 / 24; // +7:00:00h
      }
      return 8 / 24; // +8:00:00h Standard China time zone (120° East)
    }
  }]);
  return CalendarVietnamese;
}(_Chinese2.default);
exports["default"] = CalendarVietnamese;

/***/ }),

/***/ 70999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ TimeOffHolidayMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(55598);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3722);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41992);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41598);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_holidays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34777);
/* harmony import */ var date_holidays__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_holidays__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22779);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48840);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14572);
/* harmony import */ var _time_off_policy_select_time_off_policy_select_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(31675);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19223);

var TimeOffHolidayMutationComponent_1;



















function TimeOffHolidayMutationComponent_nb_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const holiday_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("value", holiday_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", holiday_r2.name, " ");
  }
}
function TimeOffHolidayMutationComponent_nb_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("value", employee_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("src", employee_r3.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", employee_r3.fullName, " ");
  }
}
let TimeOffHolidayMutationComponent = /*#__PURE__*/(() => {
  let TimeOffHolidayMutationComponent = class TimeOffHolidayMutationComponent {
    static {
      TimeOffHolidayMutationComponent_1 = this;
    }
    constructor(dialogRef, fb, toastrService, employeesService, store, dateService) {
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.toastrService = toastrService;
      this.employeesService = employeesService;
      this.store = store;
      this.dateService = dateService;
      this.FormHelpers = _forms_helpers__WEBPACK_IMPORTED_MODULE_3__/* .FormHelpers */ .k;
      this.orgEmployees = [];
      this.employeesArr = [];
      this.holidays = [];
      this.employeeIds = [];
      /*
       * Time Off Holiday Mutation Form
       */
      this.form = TimeOffHolidayMutationComponent_1.buildForm(this.fb);
      this.minDate = this.dateService.addMonth(this.dateService.today(), 0);
    }
    static buildForm(fb) {
      const form = fb.group({
        start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required],
        end: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required],
        policy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required],
        policyId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required],
        status: [],
        description: []
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .CompareDateValidator */ .A.validateDate('start', 'end')]
      });
      return form;
    }
    ngOnInit() {
      this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(user => !!user.employee), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(({
        employee: {
          contact
        }
      }) => {
        if (contact && contact.country) {
          this.countryCode = contact.country;
        }
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .B)(200), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(({
        contact
      }) => {
        if (contact && contact.country) {
          this.countryCode = contact.country;
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._getFormData()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._getOrganizationEmployees()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    _getAllHolidays() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        const holidays = new date_holidays__WEBPACK_IMPORTED_MODULE_1__();
        const countryCode = _this.countryCode || _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_12__/* .environment */ .c.DEFAULT_COUNTRY;
        if (countryCode) {
          holidays.init(countryCode);
          _this.holidays = holidays.getHolidays(moment__WEBPACK_IMPORTED_MODULE_0__().year()).filter(holiday => holiday.type === 'public');
        } else {
          _this.toastrService.danger('TOASTR.MESSAGE.HOLIDAY_ERROR');
        }
      })();
    }
    saveHoliday() {
      this.employeeIds.forEach(element => {
        const employee = this.orgEmployees.find(e => e.id === element);
        this.employeesArr.push(employee);
      });
      this._createNewRecord();
    }
    _createNewRecord() {
      if (this.form.invalid) {
        return;
      }
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      this.dialogRef.close(Object.assign({
        employees: this.employeesArr,
        organizationId,
        tenantId,
        isHoliday: true,
        requestDate: new Date()
      }, this.form.getRawValue()));
    }
    _getFormData() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        _this2._getAllHolidays();
      })();
    }
    _getOrganizationEmployees() {
      if (!this.organization) {
        return;
      }
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      this.employeesService.getAll(['user', 'tags'], {
        organizationId,
        tenantId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .first */ .$)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(({
        items
      }) => this.orgEmployees = items)).subscribe();
    }
    onPolicySelected(policy) {
      this.form.get('policy').setValue(policy);
      if (policy.requiresApproval) {
        this.form.get('status').setValue(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__/* .StatusTypesEnum */ .Z.REQUESTED);
      } else {
        this.form.get('status').setValue(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__/* .StatusTypesEnum */ .Z.APPROVED);
      }
      this.form.updateValueAndValidity();
    }
    onEmployeesSelected(employees) {
      this.employeeIds = employees;
    }
    /**
     * Patch value on holiday selected
     *
     * @param holiday
     */
    onHolidaySelected(holiday) {
      this.form.patchValue({
        start: holiday.start,
        end: holiday.end || null,
        description: holiday.name
      });
    }
    close() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function TimeOffHolidayMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeOffHolidayMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDateService */ .Att));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TimeOffHolidayMutationComponent,
        selectors: [["ngx-time-off-holiday-mutation"]],
        standalone: false,
        decls: 56,
        vars: 49,
        consts: [["startDatePicker", ""], ["endDatePicker", ""], [1, "main"], [1, "dflex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup"], [1, "row"], [1, "col-6"], [1, "form-group"], [1, "label"], ["fullWidth", "", 3, "selectedChange", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "fullWidth", "", "required", "", 3, "selectedChange", "selected", "placeholder"], [1, "col-12"], ["formControlName", "policyId", 3, "selectedChange", "id", "ctrl", "placeholder"], ["for", "start", 1, "label"], ["formControlName", "start", "nbInput", "", "fullWidth", "", "required", "", 3, "placeholder", "nbDatepicker", "status"], [3, "min"], ["for", "end", 1, "label"], ["formControlName", "end", "nbInput", "", "fullWidth", "", 3, "placeholder", "nbDatepicker", "status"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", "size", "small", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", "size", "small", 3, "click", "disabled"], [3, "value"], ["alt", "Smiley face", "height", "40", "width", "40", 2, "margin-right", "10px", 3, "src"]],
        template: function TimeOffHolidayMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3)(2, "span", 4)(3, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffHolidayMutationComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "h5", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "form", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(15, "nb-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("selectedChange", function TimeOffHolidayMutationComponent_Template_nb_select_selectedChange_15_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.onHolidaySelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(17, TimeOffHolidayMutationComponent_nb_option_17_Template, 2, 2, "nb-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(18, "div", 9)(19, "div", 10)(20, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(23, "nb-select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("selectedChange", function TimeOffHolidayMutationComponent_Template_nb_select_selectedChange_23_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.onEmployeesSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(25, TimeOffHolidayMutationComponent_nb_option_25_Template, 3, 3, "nb-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(26, "div", 8)(27, "div", 15)(28, "ga-time-off-policy-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("selectedChange", function TimeOffHolidayMutationComponent_Template_ga_time_off_policy_select_selectedChange_28_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.onPolicySelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(30, "div", 8)(31, "div", 9)(32, "div", 10)(33, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(36, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(38, "nb-datepicker", 19, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(40, "div", 9)(41, "div", 10)(42, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(45, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(47, "nb-datepicker", 19, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(49, "nb-card-footer", 22)(50, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffHolidayMutationComponent_Template_button_click_50_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(51);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(53, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffHolidayMutationComponent_Template_button_click_53_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.saveHoliday());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(54);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const startDatePicker_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(39);
            const endDatePicker_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(48);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(6, 25, "TIME_OFF_PAGE.ADD_HOLIDAYS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(14, 27, "TIME_OFF_PAGE.HOLIDAY_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(16, 29, "TIME_OFF_PAGE.SELECT_HOLIDAY_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.holidays);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(22, 31, "TIME_OFF_PAGE.SELECT_EMPLOYEES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("selected", ctx.employeesArr)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(24, 33, "TIME_OFF_PAGE.ADD_OR_REMOVE_EMPLOYEES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.orgEmployees);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("id", "policy")("ctrl", ctx.form.get("policyId"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(29, 35, "TIME_OFF_PAGE.SELECT_TIME_OFF_POLICY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(35, 37, "FORM.LABELS.FROM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(37, 39, "POP_UPS.PICK_DATE"))("nbDatepicker", startDatePicker_r4)("status", ctx.FormHelpers.isInvalidControl(ctx.form, "start") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("min", ctx.minDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(44, 41, "FORM.LABELS.TO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(46, 43, "POP_UPS.PICK_DATE"))("nbDatepicker", endDatePicker_r5)("status", ctx.FormHelpers.isInvalidControl(ctx.form, "end") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("min", ctx.minDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(52, 45, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(55, 47, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .RequiredValidator */ .YS, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbInputDirective */ .i6h, _time_off_policy_select_time_off_policy_select_component__WEBPACK_IMPORTED_MODULE_20__/* .TimeOffPolicySelectComponent */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 645px;\n}\n.main[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.main[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  padding-right: 15px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.download-btn[_ngcontent-%COMP%] {\n  height: 2rem;\n  font-weight: 400;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  };
  return TimeOffHolidayMutationComponent;
})();
TimeOffHolidayMutationComponent = TimeOffHolidayMutationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDialogRef */ .ybQ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .il, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDateService */ .Att])], TimeOffHolidayMutationComponent);


/***/ }),

/***/ 71774:
/***/ (function(module) {

/* global define */

// UMD Wrapper
;
(function (root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (true) {
    // CommonJS
    module.exports = factory();
  } else {}
})(this, function () {
  'use strict';

  var exports = {}; // define the module

  /**
   * @private
   */
  function _toYear(year) {
    if (!year) {
      year = new Date().getFullYear();
    } else if (year instanceof Date) {
      year = year.getFullYear();
    } else if (typeof year === 'string') {
      year = parseInt(year, 10);
    }
    return year;
  }
  function EasterDate(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  EasterDate.prototype = {
    toString: function () {
      function pre(num, l) {
        l = l || 2;
        var s = '0000' + num;
        return s.substr(s.length - l, l);
      }
      return [pre(this.year, 4), pre(this.month), pre(this.day)].join('-');
    }
  };

  /**
   * from https://de.wikipedia.org/wiki/Gau%C3%9Fsche_Osterformel
   * ergänzte Formel
   */
  function _easter(year, julian, gregorian) {
    year = _toYear(year);
    var k = Math.floor(year / 100);
    var m = 15 + Math.floor((3 * k + 3) / 4) - Math.floor((8 * k + 13) / 25);
    var s = 2 - Math.floor((3 * k + 3) / 4);
    if (julian) {
      m = 15;
      s = 0;
    }
    var a = year % 19;
    var d = (19 * a + m) % 30;
    var r = Math.floor((d + a / 11) / 29);
    var og = 21 + d - r;
    var sz = 7 - Math.floor(year + year / 4 + s) % 7;
    var oe = 7 - (og - sz) % 7;
    var os = og + oe;
    if (gregorian) {
      os = os + Math.floor(year / 100) - Math.floor(year / 400) - 2;
    }
    //                      1   2   3   4   5   6   7   8
    var daysPerMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31];
    var day = os;
    var month;
    for (month = 3; month < 8; month++) {
      if (day <= daysPerMonth[month]) {
        break;
      }
      day -= daysPerMonth[month];
    }
    return new EasterDate(year, month, day);
  }

  /**
   * calculate easter sunday in the gregorian calendar
   * @param {Date|Number} year
   */
  function gregorianEaster(year) {
    return _easter(year);
  }
  exports.gregorianEaster = gregorianEaster;

  /**
   * calculate easter sunday in the gregorian calendar (Shortcut for
   * `gregorianEaster`)
   * @param {Date|Number} year
   */
  exports.easter = gregorianEaster;

  /**
   * calculate easter sunday in the julian calendar
   * @param {Date|Number} year
   * @param {Boolean} [gregorian] - if `true` then output is a date in the gregorian calendar
   */
  function julianEaster(year) {
    return _easter(year, true);
  }
  exports.julianEaster = julianEaster;

  /**
   * Orthodox Easter in gregorian calender
   * @param {Date|Number} year
   */
  function orthodoxEaster(year) {
    return _easter(year, true, true);
  }
  exports.orthodoxEaster = orthodoxEaster;
  return exports;
});

/***/ }),

/***/ 72617:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var CalBengali = (__webpack_require__(40483)/* ["default"] */ .A);
var CalEvent = __webpack_require__(99063);
var CalDate = __webpack_require__(76431);
var BengaliRevised = /*#__PURE__*/function (_CalEvent) {
  _inherits(BengaliRevised, _CalEvent);
  var _super = _createSuper(BengaliRevised);

  /**
   * @param {object} [opts]
   */
  function BengaliRevised(opts) {
    _classCallCheck(this, BengaliRevised);
    opts = opts || {};
    return _super.call(this, opts);
  }
  _createClass(BengaliRevised, [{
    key: "inYear",
    value: function inYear(year) {
      var opts = this.opts;
      var date = new CalBengali(year - 593, opts.month, opts.day).toGregorian();
      var d = new CalDate(date);
      this.dates.push(d);
      return this;
    }
  }]);
  return BengaliRevised;
}(CalEvent);
module.exports = BengaliRevised;

/***/ }),

/***/ 73011:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.lightTime = lightTime;
exports.JulianYearToJDE = JulianYearToJDE;
exports.JDEToJulianYear = JDEToJulianYear;
exports.BesselianYearToJDE = BesselianYearToJDE;
exports.JDEToBesselianYear = JDEToBesselianYear;
exports.J2000Century = J2000Century;
exports.illuminated = illuminated;
exports.Coord = Coord;
exports.limb = limb;
exports.pmod = pmod;
exports.horner = horner;
exports.floorDiv = floorDiv;
exports.cmp = cmp;
exports.sincos = sincos;
exports.toRad = toRad;
exports.toDeg = toDeg;
exports.modf = modf;
exports.round = round;
exports.errorCode = errorCode;
exports["default"] = exports.CosSmallAngle = exports.SmallAngle = exports.meanSiderealYear = exports.BesselianYear = exports.JulianCentury = exports.JulianYear = exports.B1950 = exports.B1900 = exports.J1900 = exports.J2000 = exports.JMod = exports.COblJ2000 = exports.SOblJ2000 = exports.AU = exports.K = void 0;

/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module base
 */

/**
 * Base: Functions and other definitions useful with multiple packages.
 *
 * Base contains various definitions and support functions useful in multiple
 * chapters.
 *
 * Bessellian and Julian Year
 *
 * Chapter 21, Precession actually contains these definitions.  They are moved
 * here because of their general utility.
 *
 * Chapter 22, Nutation contains the function for Julian centuries since J2000.
 *
 * Phase angle functions
 *
 * Two functions, Illuminated and Limb, concern the illumnated phase of a body
 * and are given in two chapters, 41 an 48.  They are collected here because
 * the identical functions apply in both chapters.
 *
 * General purpose math functions
 *
 * SmallAngle is recommended in chapter 17, p. 109.
 *
 * PMod addresses the issue on p. 7, chapter 1, in the section "Trigonometric
 * functions of large angles", but the function is not written to be specific
 * to angles and so has more general utility.
 *
 * Horner is described on p. 10, chapter 1.
 *
 * FloorDiv and FloorDiv64 are optimizations for the INT function described
 * on p. 60, chapter 7.
*/
// ---- constants ----

/** K is the Gaussian gravitational constant. */
var K = 0.01720209895; // K from ch 33, p. 228, for example

/** AU is one astronomical unit in km. */

exports.K = K;
var AU = 149597870; // from Appendix I, p, 407.

/** SOblJ2000 sine obliquity at J2000. */

exports.AU = AU;
var SOblJ2000 = 0.397777156;
/** COblJ2000 cosine obliquity at J2000. */

exports.SOblJ2000 = SOblJ2000;
var COblJ2000 = 0.917482062; // SOblJ2000, COblJ2000 from ch 33, p. 228, for example

/**
 * lightTime returns time for light to travel a given distance.
 * `dist` is distance in to earth in AU. √(x² + y² + z²)
 * Result in seconds of time.
 * @param {Number} dist - distance in to earth in AU
 * @returns {Number} time for light to travel a given distance in seconds
 */

exports.COblJ2000 = COblJ2000;
function lightTime(dist) {
  // Formula given as (33.3) p. 224.
  return 0.0057755183 * dist;
} // ---- julian ----

/**
 * Julian and Besselian years described in chapter 21, Precession.
 * T, Julian centuries since J2000 described in chapter 22, Nutation.
 */

/** JMod is the Julian date of the modified Julian date epoch. */

var JMod = 2400000.5;
/** J2000 is the Julian date corresponding to January 1.5, year 2000. */

exports.JMod = JMod;
var J2000 = 2451545.0; // Julian days of common epochs.
// B1900, B1950 from p. 133

/** Julian days of Julian epoch 1900 */

exports.J2000 = J2000;
var J1900 = 2415020.0;
/** Julian days of Besselian epoch 1900 */

exports.J1900 = J1900;
var B1900 = 2415020.3135;
/** Julian days of Besselian epoch 1950 */

exports.B1900 = B1900;
var B1950 = 2433282.4235; // JulianYear and other common periods

/** JulianYear in days */

exports.B1950 = B1950;
var JulianYear = 365.25; // days

/** JulianCentury in days */

exports.JulianYear = JulianYear;
var JulianCentury = 36525; // days

/** BesselianYear in days; equals mean tropical year */

exports.JulianCentury = JulianCentury;
var BesselianYear = 365.2421988; // days

/** Mean sidereal year */

exports.BesselianYear = BesselianYear;
var meanSiderealYear = 365.25636; // days

/**
 * JulianYearToJDE returns the Julian ephemeris day for a Julian year.
 * @param {Number} jy - Julian year
 * @returns {Number} jde - Julian ephemeris day
 */

exports.meanSiderealYear = meanSiderealYear;
function JulianYearToJDE(jy) {
  return J2000 + JulianYear * (jy - 2000);
}
/**
 * JDEToJulianYear returns a Julian year for a Julian ephemeris day.
 * @param {Number} jde - Julian ephemeris day
 * @returns {Number} jy - Julian year
 */

function JDEToJulianYear(jde) {
  return 2000 + (jde - J2000) / JulianYear;
}
/**
 * BesselianYearToJDE returns the Julian ephemeris day for a Besselian year.
 * @param {Number} by - Besselian year
 * @returns {Number} jde - Julian ephemeris day
 */

function BesselianYearToJDE(by) {
  return B1900 + BesselianYear * (by - 1900);
}
/**
 * JDEToBesselianYear returns the Besselian year for a Julian ephemeris day.
 * @param {Number} jde - Julian ephemeris day
 * @returns {Number} by - Besselian year
 */

function JDEToBesselianYear(jde) {
  return 1900 + (jde - B1900) / BesselianYear;
}
/**
 * J2000Century returns the number of Julian centuries since J2000.
 *
 * The quantity appears as T in a number of time series.
 * @param {Number} jde - Julian ephemeris day
 * @returns {Number} number of Julian centuries since J2000
 */

function J2000Century(jde) {
  // The formula is given in a number of places in the book, for example
  // (12.1) p. 87.
  // (22.1) p. 143.
  // (25.1) p. 163.
  return (jde - J2000) / JulianCentury;
} // ---- phase ----

/**
 * illuminated returns the illuminated fraction of a body's disk.
 *
 * The illuminated body can be the Moon or a planet.
 *
 * @param {Number} i - phase angle in radians.
 * @returns {Number} illuminated fraction of a body's disk.
 */

function illuminated(i) {
  // (41.1) p. 283, also (48.1) p. 345.
  return (1 + Math.cos(i)) * 0.5;
}
/**
 * celestial coordinates in right ascension and declination
 * or ecliptic coordinates in longitude and latitude
 *
 * @param {number} ra - right ascension (or longitude)
 * @param {number} dec - declination (or latitude)
 * @param {number} [range] - distance
 * @param {number} [elongation] - elongation
 */

function Coord(ra
/* lon */, dec
/* lat */, range, elongation) {
  this._ra = ra || 0;
  this._dec = dec || 0;
  this.range = range;
  this.elongation = elongation;
  Object.defineProperties(this, {
    ra: {
      get: function get() {
        return this._ra;
      },
      set: function set(ra) {
        this._ra = ra;
      }
    },
    dec: {
      get: function get() {
        return this._dec;
      },
      set: function set(dec) {
        this._dec = dec;
      }
    },
    lon: {
      get: function get() {
        return this._ra;
      },
      set: function set(ra) {
        this._ra = ra;
      }
    },
    lat: {
      get: function get() {
        return this._dec;
      },
      set: function set(dec) {
        this._dec = dec;
      }
    }
  });
}
/**
 * Limb returns the position angle of the midpoint of an illuminated limb.
 *
 * The illuminated body can be the Moon or a planet.
 *
 * @param {base.Coord} equ - equatorial coordinates of the body `{ra, dec}` (in radians)
 * @param {base.Coord} appSun - apparent coordinates of the Sun `{ra, dec}` (In radians).
 * @returns {Number} position angle of the midpoint (in radians).
 */

function limb(equ, appSun) {
  var α = equ.ra;
  var δ = equ.dec;
  var α0 = appSun.ra;
  var δ0 = appSun.dec; // Mentioned in ch 41, p. 283.  Formula (48.5) p. 346

  var sδ = Math.sin(δ);
  var cδ = Math.cos(δ);
  var sδ0 = Math.sin(δ0);
  var cδ0 = Math.cos(δ0);
  var sα0α = Math.sin(α0 - α);
  var cα0α = Math.cos(α0 - α);
  var χ = Math.atan2(cδ0 * sα0α, sδ0 * cδ - cδ0 * sδ * cα0α);
  if (χ < 0) {
    χ += 2 * Math.PI;
  }
  return χ;
} // ---- math ----
// In chapter 17, p. 109, Meeus recommends 10′.

/**
 * SmallAngle is threshold used by various routines for switching between
 * trigonometric functions and Pythagorean approximations.
 */

var SmallAngle = 10 * Math.PI / 180 / 60; // about .003 radians

/** cosine of SmallAngle */

exports.SmallAngle = SmallAngle;
var CosSmallAngle = Math.cos(SmallAngle); // about .999996

/**
 * pmod returns a positive floating-point x mod y.
 *
 * For a positive argument y, it returns a value in the range [0,y).
 *
 * @param {Number} x
 * @param {Number} y
 * @returns {Number} x % y - The result may not be useful if y is negative.
 */

exports.CosSmallAngle = CosSmallAngle;
function pmod(x, y) {
  var r = x % y;
  if (r < 0) {
    r += y;
  }
  return r;
}
/**
 * horner evaluates a polynomal with coefficients c at x.  The constant
 * term is c[0].
 * @param {Number} x
 * @param {Number|Number[]} c - coefficients
 * @returns {Number}
 */

function horner(x) {
  for (var _len = arguments.length, c = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    c[_key - 1] = arguments[_key];
  }
  if (Array.isArray(c[0])) {
    c = c[0];
  }
  var i = c.length - 1;
  var y = c[i];
  while (i > 0) {
    i--;
    y = y * x + c[i];
  }
  return y;
}
/**
 * FloorDiv returns the integer floor of the fractional value (x / y).
 * @param {Number} x
 * @param {Number} y
 * @returns {Number} (int)
 */

function floorDiv(x, y) {
  var q = x / y;
  return Math.floor(q);
}
/**
 * Cmp compares two float64s and returns -1, 0, or 1 if a is <, ==, or > b,
 * respectively.
 * .
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} comparison result
 */

function cmp(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
/**
 * shorthand function for Math.sin, Math.cos
 * @param {Number} ε
 * @returns {Number[]} [sin(ε), cos(ε)]
 */

function sincos(ε) {
  return [Math.sin(ε), Math.cos(ε)];
}
/**
 * Convert degrees to radians
 * @param  {Number} deg - Angle in degrees
 * @return {Number} Angle in radians
 */

function toRad(deg) {
  return Math.PI / 180.0 * deg;
}
/**
 * Convert radians to degrees
 * @param  {Number} rad - Angle in radians
 * @return {Number} Angle in degrees
 */

function toDeg(rad) {
  return 180.0 / Math.PI * rad;
}
/**
 * separate fix `i` from fraction `f`
 * @param {Number} float
 * @returns {Array} [i, f]
 *  {Number} i - (int) fix value
 *  {Number} f - (float) fractional portion; always > 1
 */

function modf(_float) {
  var i = Math.trunc(_float);
  var f = Math.abs(_float - i);
  return [i, f];
}
/**
 * Rounds `float` value by precision
 * @param {Number} float - value to round
 * @param {Number} precision - (int) number of post decimal positions
 * @return {Number} rounded `float`
 */

function round(_float2, precision) {
  precision = precision == undefined ? 14 : precision; // eslint-disable-line eqeqeq

  return parseFloat(_float2.toFixed(precision), 10);
}
function errorCode(msg, code) {
  var err = new Error(msg);
  err.code = code;
  return err;
}
var _default = {
  K: K,
  AU: AU,
  SOblJ2000: SOblJ2000,
  COblJ2000: COblJ2000,
  lightTime: lightTime,
  JMod: JMod,
  J2000: J2000,
  J1900: J1900,
  B1900: B1900,
  B1950: B1950,
  JulianYear: JulianYear,
  JulianCentury: JulianCentury,
  BesselianYear: BesselianYear,
  meanSiderealYear: meanSiderealYear,
  JulianYearToJDE: JulianYearToJDE,
  JDEToJulianYear: JDEToJulianYear,
  BesselianYearToJDE: BesselianYearToJDE,
  JDEToBesselianYear: JDEToBesselianYear,
  J2000Century: J2000Century,
  illuminated: illuminated,
  Coord: Coord,
  limb: limb,
  SmallAngle: SmallAngle,
  CosSmallAngle: CosSmallAngle,
  pmod: pmod,
  horner: horner,
  floorDiv: floorDiv,
  cmp: cmp,
  sincos: sincos,
  toRad: toRad,
  toDeg: toDeg,
  modf: modf,
  round: round,
  errorCode: errorCode
};
exports["default"] = _default;

/***/ }),

/***/ 75445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * handle rule per event
 */


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var CalDate = __webpack_require__(76431);
var DAYS = (__webpack_require__(51312).DAYS);
var Rule = /*#__PURE__*/function () {
  /**
  * @param {CalEvent} [calEvent]
   * @param {array} [holidays]
   */
  function Rule(calEvent) {
    _classCallCheck(this, Rule);
    this.calEvent = calEvent;
  }
  /**
   * @param {CalEvent} calEvent
   */

  _createClass(Rule, [{
    key: "setEvent",
    value: function setEvent(calEvent) {
      this.calEvent = calEvent;
      return this;
    }
    /**
     * @return {CalEvent}
     */
  }, {
    key: "getEvent",
    value: function getEvent() {
      return this.calEvent;
    }
    /**
     * @param {string} modifier
     */
  }, {
    key: "setModifier",
    value: function setModifier(modifier) {
      this.modifier = modifier;
    }
    /**
     * resolves rule to function
     * @param {object} rule
     */
  }, {
    key: "resolve",
    value: function resolve(rule) {
      if (rule.rule && typeof this[rule.rule] === 'function') {
        this[rule.rule](rule);
      } else if (rule.modifier) {
        this.modifier = rule.modifier;
      }
      return this;
    }
    /**
     * @param {CalEvent} [calEvent]
     * @param {object} rule
     * {
     *   rule: "dateDir",
     *   count: 1,
     *   weekday: "tuesday",
     *   direction: "after"
     * }
     */
  }, {
    key: "dateDir",
    value: function dateDir(rule) {
      this.calEvent.dates.forEach(function (date) {
        var offset;
        var count = rule.count - 1;
        var weekday = date.getDay();
        var ruleWeekday = DAYS[rule.weekday];
        if (rule.weekday === 'day') {
          if (rule.direction === 'before') {
            offset = (count + 1) * -1;
          } else {
            offset = count + 1;
          }
        } else {
          if (rule.direction === 'before') {
            if (weekday === ruleWeekday) {
              count++;
            }
            offset = ((7 + weekday - ruleWeekday) % 7 + count * 7) * -1;
          } else {
            offset = (7 - weekday + ruleWeekday) % 7 + count * 7;
          }
        }
        if (offset) {
          date.setOffset(offset);
        }
      });
    }
    /**
     * @param {object} rule
     * {
     *   rule: "dateIfThen",
     *   if: ["sunday"],
     *   direction: "next",
     *   then: "sunday"
     * }
     */
  }, {
    key: "dateIfThen",
    value: function dateIfThen(rule) {
      var _this = this;
      var dates = [];
      this.calEvent.dates = this.calEvent.dates.map(function (date) {
        if (date._lock) {
          return date;
        }
        var weekday = date.getDay();
        if (~rule["if"].indexOf(DAYS[weekday])) {
          if (_this.modifier === 'and') {
            dates.push(new CalDate(date));
            date.substitute = true;
          }
          date._filter = false;
          var offset = 0;
          var then = DAYS[rule.then];
          if (rule.then && then !== 'undefined') {
            if (rule.direction === 'previous') {
              offset = -1 * ((7 + weekday - then) % 7);
              if (!offset) {
                offset = -7;
              }
            } else {
              offset = (7 - weekday + then) % 7;
              if (!offset) {
                offset = 7;
              }
            }
            date.setOffset(offset);
            date._lock = true;
            if (_this.modifier === 'substitutes') date.substitute = true;
          }
          (rule.rules || []).forEach(function (rule) {
            switch (rule.rule) {
              case 'time':
                date.setTime(rule.hour, rule.minute);
                break;
              case 'duration':
                date.duration = rule.duration;
                break;
            }
          });
        } else if (_this.modifier === 'substitutes') {
          date._filter = true;
        }
        return date;
      });
      this.calEvent.dates = dates.concat(this.calEvent.dates);
    }
    /**
     * @param {object} rule
     * {
     *   rule: "weekday",
     *   if: ["sunday", "saturday"],
     *   not: false,
     * }
     */
  }, {
    key: "weekday",
    value: function weekday(rule) {
      this.calEvent.dates = this.calEvent.dates.map(function (date) {
        var weekday = date.getDay();
        var match = rule["if"].indexOf(DAYS[weekday]) !== -1;
        if (rule.not) match = !match;
        if (match) return date;
      }).filter(function (date) {
        return date;
      });
    }
  }, {
    key: "time",
    value: function time(rule) {
      this.calEvent.dates.forEach(function (date) {
        date.setTime(rule.hour, rule.minute);
      });
    }
  }, {
    key: "duration",
    value: function duration(rule) {
      this.calEvent.dates.forEach(function (date) {
        date.duration = rule.duration;
      });
    }
  }, {
    key: "bridge",
    value: function bridge() {
      return true; // needs postprocessing
    }
    /**
     * @param {object} rule
     * {
     *   rule: "year",
     *   cardinality: "leap",
     *   every: undefined,
     *   since: undefined
     * }
     */
  }, {
    key: "year",
    value: function year(rule) {
      var _this2 = this;
      this.calEvent.dates = this.calEvent.dates.map(function (date) {
        if (rule.cardinality) {
          if (rule.cardinality === 'leap' && _this2._isLeapYear(date.year)) {
            return date;
          } else if (rule.cardinality === 'non-leap' && !_this2._isLeapYear(date.year)) {
            return date;
          } else if (rule.cardinality === 'even' && (date.year + 1) % 2) {
            return date;
          } else if (rule.cardinality === 'odd' && date.year % 2) {
            return date;
          }
        } else if (rule.every !== undefined && rule.since !== undefined) {
          var tmp = (date.year - rule.since) % rule.every;
          if (tmp === 0) {
            return date;
          }
        }
      }).filter(function (date) {
        return date;
      });
    }
    /**
     * @private
     * @return {Boolean} if true year is a leap year
     */
  }, {
    key: "_isLeapYear",
    value: function _isLeapYear(year) {
      if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        return true;
      }
      return false;
    }
  }]);
  return Rule;
}();
module.exports = Rule;

/***/ }),

/***/ 76373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var easter = __webpack_require__(71774);
var CalEvent = __webpack_require__(99063);
var CalDate = __webpack_require__(76431);
var Easter = /*#__PURE__*/function (_CalEvent) {
  _inherits(Easter, _CalEvent);
  var _super = _createSuper(Easter);

  /**
   * @param {object} [opts]
   * @param {string} opts.type - type of eastern (easter|orthodox)
   * @param {number|string} opts.offset - offset in days
   */
  function Easter(opts) {
    var _this;
    _classCallCheck(this, Easter);
    opts = opts || {};
    _this = _super.call(this, opts);
    _this._fn = easter.easter;
    if (opts.type === 'orthodox') {
      _this._fn = easter.orthodoxEaster;
    }
    return _this;
  }
  _createClass(Easter, [{
    key: "inYear",
    value: function inYear(year) {
      var d = new CalDate(this._fn(year)).setOffset(this.offset);
      this.dates.push(d);
      return this;
    }
  }]);
  return Easter;
}(CalEvent);
module.exports = Easter;

/***/ }),

/***/ 76431:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var M = module.exports = __webpack_require__(23907);
M.pad0 = (__webpack_require__(17866).pad0);
M.toNumber = (__webpack_require__(17866).toNumber);
M.isDate = (__webpack_require__(17866).isDate);
M.toYear = (__webpack_require__(17866).toYear);

/***/ }),

/***/ 79395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var _ = __webpack_require__(3114);
/**
 * Handler for holiday data provided in the Json file
 * @class
 * @param {Object} [data]
 * @param {Object|String} [country]
 * @param {String} [state]
 * @param {String} [region]
 */

var Data = /*#__PURE__*/function () {
  function Data(data, country, state, region) {
    _classCallCheck(this, Data);
    this.opts = Data.splitName(country, state, region) || {};
    this.data = data || {};
  }
  /**
   * get all countries from the data
   * @param {String} lang - Iso-639 shortcode
   * @return {Object} shortcode-name value pairs. E.g. `{ AT: 'Österreich', ... }`
   */

  _createClass(Data, [{
    key: "getCountries",
    value: function getCountries(lang) {
      var _this = this;
      var o = {};
      var countries = _.get(this.data, 'holidays', {});
      Object.keys(countries).forEach(function (country) {
        o[country] = _this._name(countries, country, lang, {
          country: country
        });
      });
      return o;
    }
    /**
     * get all states for a given country from the data
     * @param {String|Object} country
     * @param {String} [lang] - Iso-639 shortcode
     * @return {Object} shortcode-name value pairs. E.g. `{ b: 'Burgenland', ... }`
     */
  }, {
    key: "getStates",
    value: function getStates(country, lang) {
      var _this2 = this;
      var opts = Object.assign({}, Data.splitName(country));
      var states = _.get(this.data, ['holidays', opts.country, 'states']) || _.get(this.data, ['holidays', opts.country, 'regions']);
      if (states) {
        var o = {};
        Object.keys(states).forEach(function (state) {
          opts.state = state;
          o[state] = _this2._name(states, state, lang, opts);
        });
        return o;
      }
    }
    /**
     * get all regions for a given country/ state from the data
     * @param {String} country
     * @param {String} state
     * @param {String} [lang] - Iso-639 shortcode
     * @return {Object} shortcode-name value pairs.
     */
  }, {
    key: "getRegions",
    value: function getRegions(country, state, lang) {
      var _this3 = this;
      var opts = Object.assign({}, Data.splitName(country, state));
      var regions = _.get(this.data, ['holidays', opts.country, 'states', opts.state, 'regions']);
      if (regions) {
        var o = {};
        Object.keys(regions).forEach(function (region) {
          opts.region = region;
          o[region] = _this3._name(regions, region, lang, opts);
        });
        return o;
      }
    }
    /**
     * @private
     */
  }, {
    key: "_name",
    value: function _name(obj, key, lang, opts) {
      var names = obj[key].names;
      var _lang = lang || this.getLanguages(opts)[0] || Object.keys(names)[0];
      var mlang = Data.majorLang(_lang);
      var name = obj[key].name || names[_lang] || names[mlang] || names[Object.keys(names)[0]];
      return name;
    }
    /**
     * get languages for selected country, state, region
     * @return {Array} containing ISO 639-1 language shortcodes
     */
  }, {
    key: "getLanguages",
    value: function getLanguages(opts) {
      return this._getValue('langs', opts) || [];
    }
    /**
     * get default day off as weekday
     * @return {String} weekday of day off
     */
  }, {
    key: "getDayOff",
    value: function getDayOff() {
      return this._getValue('dayoff');
    }
    /**
     * get timezones for country, state, region
     * @return {Array} of {String}s containing the timezones
     */
  }, {
    key: "getTimezones",
    value: function getTimezones() {
      return this._getValue('zones') || [];
    }
    /**
     * get list of raw holiday rules for country/ state/ region
     * @param {Object|String} [country]
     * @param {String} [state]
     * @param {String} [region]
     * @return {Object} holidayname <-> unparsed rule or date pairs
     */
  }, {
    key: "getRules",
    value: function getRules(country, state, region) {
      var _this4 = this;
      var rules = {};
      var opts = Data.splitName(country, state, region) || this.opts;
      if (!(opts && opts.country)) {
        return rules;
      }
      country = opts.country.toUpperCase();
      state = opts.state;
      region = opts.region;
      var tmp = _.get(this.data, ['holidays', country]);
      if (tmp) {
        this._assign(rules, tmp);
        if (state && tmp.regions && (tmp = tmp.regions[state]) || state && tmp.states && (tmp = tmp.states[state])) {
          this._assign(rules, tmp);
          if (region && tmp.regions && (tmp = tmp.regions[region])) {
            this._assign(rules, tmp);
          }
        }
        Object.keys(rules).forEach(function (key) {
          // assign name references with `_name`
          var _name = rules[key]._name;
          if (_name && _this4.data.names[_name]) {
            delete rules[key]._name;
            rules[key] = _.merge({}, _this4.data.names[_name], rules[key]);
          }
        });
      }
      return rules;
    }
    /**
     * get name for substitute name
     * @return {Object} translations of substitute day names
     */
  }, {
    key: "getSubstitueNames",
    value: function getSubstitueNames() {
      return _.get(this.data, ['names', 'substitutes', 'name']);
    }
    /**
     * helper to assign objects based on properties
     * @private
     * @param {Object} out - object where obj gets assigned into
     * @param {Object} obj - input obj
     * @return {Object}
     */
  }, {
    key: "_assign",
    value: function _assign(out, obj) {
      var days = {};
      if (obj._days) {
        // resolve reference
        var path = ['holidays'].concat(obj._days, 'days');
        var ref = _.get(this.data, path);
        if (!ref) throw new Error('unknown path for _days: ' + path.join('.'));
        days = Object.assign({}, ref);
      }
      if (days || obj.days) {
        days = Object.assign(days, obj.days);
        Object.keys(days).forEach(function (p) {
          if (days[p] === false) {
            // remove rules
            if (out[p]) {
              delete out[p];
            }
            return;
          }
          out[p] = Object.assign({}, out[p], days[p]);
          if (!days[p].type) {
            out[p].type = 'public';
          }
        });
      }
      return out;
    }
    /**
     * get a object from the data tree
     * @private
     * @param {String} key - key to look at
     * @return {Object} return object
     */
  }, {
    key: "_getValue",
    value: function _getValue(key) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.opts;
      return _.get(this.data, ['holidays', opts.country, 'states', opts.state, 'regions', opts.regions, key]) || _.get(this.data, ['holidays', opts.country, 'states', opts.state, key]) || _.get(this.data, ['holidays', opts.country, key]);
    }
  }]);
  return Data;
}();
module.exports = Data; // static functions

/**
 * split country state names if they appear in concatenated format e.g. 'at.b'
 * @param {String|Object} country
 * @param {String} [state]
 * @param {String} [region]
 * @return {Object}
 */

Data.splitName = function (country, state, region) {
  if (_typeof(country) === 'object' && country.country) {
    return toUpperCase(country);
  } else if (typeof country === 'string') {
    var a = country.split(/[.-]/);
    var o = {
      country: a.shift(),
      state: a.shift() || state,
      region: a.shift() || region
    };
    return toUpperCase(o);
  }
};
Data.majorLang = function (lang) {
  return (lang || '').split(/-/)[0];
};
/**
 * @private
 */

function toUpperCase(obj) {
  ;
  ['country', 'state', 'region'].forEach(function (key) {
    if (typeof obj[key] === 'string') {
      obj[key] = obj[key].toUpperCase();
    }
  });
  return obj;
}

/***/ }),

/***/ 80337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint spaced-comment:0 */


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var CalEvent = __webpack_require__(99063);
var Easter = __webpack_require__(76373); // --- pre-processor instructions for prepin ---
// #ifndef nojulian

var Julian = __webpack_require__(83162); // #endif
// #ifndef nohebrew

var Hebrew = __webpack_require__(2420); // #endif
// #ifndef noislamic

var Hijri = __webpack_require__(25645); // #endif
// #ifndef noequinox

var Equinox = __webpack_require__(19214); // #endif
// #ifndef nochinese

var Chinese = __webpack_require__(68); // #endif
// #ifndef nobengali

var BengaliRevised = __webpack_require__(72617); // #endif

var CalEventFactory = function CalEventFactory(opts) {
  _classCallCheck(this, CalEventFactory);
  switch (opts.fn) {
    case 'easter':
      return new Easter(opts);
    // #ifndef nojulian

    case 'julian':
      return new Julian(opts);
    // #endif
    // #ifndef nohebrew

    case 'hebrew':
      return new Hebrew(opts);
    // #endif
    // #ifndef noislamic

    case 'islamic':
      return new Hijri(opts);
    // #endif
    // #ifndef noequinox

    case 'equinox':
      return new Equinox(opts);
    // #endif
    // #ifndef nochinese

    case 'chinese':
    case 'korean':
    case 'vietnamese':
      return new Chinese(opts);
    // #endif
    // #ifndef nobengali

    case 'bengali-revised':
      return new BengaliRevised(opts);
    // #endif

    default:
      return new CalEvent(opts);
  }
};
module.exports = CalEventFactory;

/***/ }),

/***/ 81376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}(); /**
      * @copyright 2016 commenthol
      * @license MIT
      */

// import {base, solstice, solar, moonphase, planetposition, julian, data} from 'astronomia' // TODO waiting for tree-shaking that works...

var _base = __webpack_require__(73011);
var _base2 = _interopRequireDefault(_base);
var _solstice = __webpack_require__(50746);
var _solstice2 = _interopRequireDefault(_solstice);
var _solar = __webpack_require__(65805);
var _solar2 = _interopRequireDefault(_solar);
var _moonphase = __webpack_require__(41280);
var _moonphase2 = _interopRequireDefault(_moonphase);
var _planetposition = __webpack_require__(82779);
var _planetposition2 = _interopRequireDefault(_planetposition);
var _julian = __webpack_require__(3039);
var _julian2 = _interopRequireDefault(_julian);
var _vsop87Bearth = __webpack_require__(30274);
var _vsop87Bearth2 = _interopRequireDefault(_vsop87Bearth);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var earth = new _planetposition2.default.Planet(_vsop87Bearth2.default);
var lunarOffset = _moonphase2.default.meanLunarMonth / 2;
var p = 180 / Math.PI;

// Start of Chinese Calendar in 2636 BCE by Chalmers
var epochY = -2636;
var epoch = new _julian2.default.CalendarGregorian(epochY, 2, 15).toJDE();
function toYear(jde) {
  return new _julian2.default.CalendarGregorian().fromJDE(jde).toYear();
}

// prevent rounding errors
function toFixed(val, e) {
  return parseFloat(val.toFixed(e), 10);
}
var CalendarChinese = function () {
  /**
   * constructor
   *
   * @param {Number|Array|Object} cycle - chinese 60 year cicle; if `{Array}` than `[cycle, year, ..., day]`
   * @param {Number} year - chinese year of cycle
   * @param {Number} month - chinese month
   * @param {Number} leap - `true` if leap month
   * @param {Number} day - chinese day
   */
  function CalendarChinese(cycle, year, month, leap, day) {
    _classCallCheck(this, CalendarChinese);
    this.set(cycle, year, month, leap, day);
    this._epochY = epochY;
    this._epoch = epoch;
    this._cache = {
      // cache for results
      lon: {},
      sue: {},
      ny: {}
    };
  }

  /**
   * set a new chinese date
   *
   * @param {Number|Array|Object} cycle - chinese 60 year cicle; if `{Array}` than `[cycle, year, ..., day]`
   * @param {Number} year - chinese year of cycle
   * @param {Number} month - chinese month
   * @param {Number} leap - `true` if leap month
   * @param {Number} day - chinese day
   */

  _createClass(CalendarChinese, [{
    key: 'set',
    value: function set(cycle, year, month, leap, day) {
      if (cycle instanceof CalendarChinese) {
        this.cycle = cycle.cycle;
        this.year = cycle.year;
        this.month = cycle.month;
        this.leap = cycle.leap;
        this.day = cycle.day;
      } else if (Array.isArray(cycle)) {
        this.cycle = cycle[0];
        this.year = cycle[1];
        this.month = cycle[2];
        this.leap = cycle[3];
        this.day = cycle[4];
      } else {
        this.cycle = cycle;
        this.year = year;
        this.month = month;
        this.leap = leap;
        this.day = day;
      }
    }

    /**
     * returns chinese date
     * @returns {Array}
     */
  }, {
    key: 'get',
    value: function get() {
      return [this.cycle, this.year, this.month, this.leap, this.day];
    }

    /**
     * get Gregorian year from Epoch / Cycle
     * @return {Number} year
     */
  }, {
    key: 'yearFromEpochCycle',
    value: function yearFromEpochCycle() {
      return this._epochY + (this.cycle - 1) * 60 + (this.year - 1);
    }

    /**
     * convert gregorian date to chinese calendar date
     *
     * @param {Number} year - (int) year in Gregorian or Julian Calendar
     * @param {Number} month - (int)
     * @param {Number} day - needs to be in correct (chinese) timezone
     * @return {Object} this
     */
  }, {
    key: 'fromGregorian',
    value: function fromGregorian(year, month, day) {
      var j = this.midnight(new _julian2.default.CalendarGregorian(year, month, day).toJDE());
      if (month === 1 && day <= 20) year--; // chinese new year never starts before 20/01
      this._from(j, year);
      return this;
    }

    /**
     * convert date to chinese calendar date
     *
     * @param {Date} date - javascript date object
     * @return {Object} this
     */
  }, {
    key: 'fromDate',
    value: function fromDate(date) {
      var j = this.midnight(new _julian2.default.CalendarGregorian().fromDate(date).toJDE());
      this._from(j, date.getFullYear());
      return this;
    }

    /**
     * convert JDE to chinese calendar date
     *
     * @param {Number} jde - date in JDE
     * @return {Object} this
     */
  }, {
    key: 'fromJDE',
    value: function fromJDE(jde) {
      var j = this.midnight(jde);
      var gc = new _julian2.default.CalendarGregorian().fromJDE(j);
      if (gc.month === 1 && gc.day < 20) gc.year--; // chinese new year never starts before 20/01
      this._from(j, gc.year);
      return this;
    }

    /**
     * common conversion from JDE, year to chinese date
     *
     * @private
     * @param {Number} j - date in JDE
     * @param {Number} year - gregorian year
     */
  }, {
    key: '_from',
    value: function _from(j, year) {
      var ny = this.newYear(year);
      if (ny > j) {
        ny = this.newYear(year - 1);
      }
      var nm = this.previousNewMoon(j);
      if (nm < ny) {
        nm = ny;
      }
      var years = 1.5 + (ny - this._epoch) / _base2.default.BesselianYear;
      this.cycle = 1 + Math.trunc((years - 1) / 60);
      this.year = 1 + Math.trunc((years - 1) % 60);
      this.month = this.inMajorSolarTerm(nm).term;
      var m = Math.round((nm - ny) / _moonphase2.default.meanLunarMonth);
      if (m === 0) {
        this.month = 1;
        this.leap = false;
      } else {
        this.leap = this.isLeapMonth(nm);
      }
      if (m > this.month) {
        this.month = m;
      } else if (this.leap) {
        this.month--;
      }
      this.day = 1 + Math.trunc(toFixed(j, 3) - toFixed(nm, 3));
    }

    /**
     * convert chinese date to gregorian date
     *
     * @param {Number} [gyear] - (int) gregorian year
     * @return {Object} date in gregorian (preleptic) calendar; Timezone is Standard Chinese / Bejing Time
     *   {Number} year - (int)
     *   {Number} month - (int)
     *   {Number} day - (int)
     */
  }, {
    key: 'toGregorian',
    value: function toGregorian(gyear) {
      var jde = this.toJDE(gyear);
      var gc = new _julian2.default.CalendarGregorian().fromJDE(jde + 0.5); // add 0.5 as day get truncated
      return {
        year: gc.year,
        month: gc.month,
        day: Math.trunc(gc.day)
      };
    }

    /**
     * convert chinese date to Date
     *
     * @param {Number} [gyear] - (int) gregorian year
     * @return {Date} javascript date object in gregorian (preleptic) calendar
     */
  }, {
    key: 'toDate',
    value: function toDate(gyear) {
      var jde = this.toJDE(gyear);
      return new _julian2.default.CalendarGregorian().fromJDE(toFixed(jde, 4)).toDate();
    }

    /**
     * convert chinese date to JDE
     *
     * @param {Number} [gyear] - (int) gregorian year
     * @return {Number} date in JDE
     */
  }, {
    key: 'toJDE',
    value: function toJDE(gyear) {
      var years = gyear || this.yearFromEpochCycle();
      var ny = this.newYear(years);
      var nm = ny;
      if (this.month > 1) {
        nm = this.previousNewMoon(ny + this.month * 29);
        var st = this.inMajorSolarTerm(nm).term;
        var lm = this.isLeapMonth(nm);
        if (st > this.month) {
          nm = this.previousNewMoon(nm - 1);
        } else if (st < this.month || lm && !this.leap) {
          nm = this.nextNewMoon(nm + 1);
        }
      }
      if (this.leap) {
        nm = this.nextNewMoon(nm + 1);
      }
      var jde = nm + this.day - 1;
      return jde;
    }

    /**
     * timeshift to UTC
     *
     * @param {CalendarGregorian} gcal - gregorian calendar date
     * @return {Number} timeshift in fraction of day
     */
  }, {
    key: 'timeshiftUTC',
    value: function timeshiftUTC(gcal) {
      if (gcal.toYear() >= 1929) {
        return 8 / 24; // +8:00:00h Standard China time zone (120° East)
      }
      return 1397 / 180 / 24; // +7:45:40h Beijing (116°25´ East)
    }

    /**
     * time/date at midnight - truncate `jde` to actual day
     *
     * @param {Number} jde - julian ephemeris day
     * @return {Number} truncated jde
     */
  }, {
    key: 'midnight',
    value: function midnight(jde) {
      var gcal = new _julian2.default.CalendarGregorian().fromJDE(jde);
      var ts = 0.5 - this.timeshiftUTC(gcal);
      var mn = Math.trunc(gcal.toJD() - ts) + ts;
      mn = gcal.fromJD(mn).toJDE();
      if (toFixed(jde, 5) === toFixed(mn, 5) + 1) {
        return jde;
      }
      return mn;
    }

    /**
     * get major solar term `Z1...Z12` for a given date in JDE
     *
     * @param {Number} jde - date of new moon
     * @returns {Number} major solar term part of that month
     */
  }, {
    key: 'inMajorSolarTerm',
    value: function inMajorSolarTerm(jde) {
      var lon = this._cache.lon[jde] || _solar2.default.apparentVSOP87(earth, jde).lon;
      this._cache.lon[jde] = lon;
      var lonDeg = lon * p - 1e-13;
      var term = (2 + Math.floor(lonDeg / 30)) % 12 + 1;
      return {
        term: term,
        lon: lonDeg
      };
    }

    /**
     * Test if date `jde` is inside a leap month
     * `jde` and previous new moon need to have the same major solar term
     *
     * @param {Number} jde - date of new moon
     * @returns {Boolean} `true` if previous new moon falls into same solar term
     */
  }, {
    key: 'isLeapMonth',
    value: function isLeapMonth(jde) {
      var t1 = this.inMajorSolarTerm(jde);
      var next = this.nextNewMoon(this.midnight(jde + lunarOffset));
      var t2 = this.inMajorSolarTerm(next);
      var r = t1.term === t2.term;
      return r;
    }

    /**
     * next new moon since `jde`
     *
     * @param {Number} jde - date in julian ephemeris days
     * @return {Number} jde at midnight
     */
  }, {
    key: 'nextNewMoon',
    value: function nextNewMoon(jde) {
      var nm = this.midnight(_moonphase2.default.newMoon(toYear(jde)));
      var cnt = 0;
      while (nm < jde && cnt++ < 4) {
        nm = this.midnight(_moonphase2.default.newMoon(toYear(jde + cnt * lunarOffset)));
      }
      return nm;
    }

    /**
     * next new moon since `jde`
     *
     * @param {Number} jde - date in julian ephemeris days
     * @return {Number} jde at midnight
     */
  }, {
    key: 'previousNewMoon',
    value: function previousNewMoon(jde) {
      var nm = this.midnight(_moonphase2.default.newMoon(toYear(jde)));
      var cnt = 0;
      while (nm > jde && cnt++ < 4) {
        nm = this.midnight(_moonphase2.default.newMoon(toYear(jde - cnt * lunarOffset)));
      }
      return nm;
    }

    /**
     * chinese new year for a given gregorian year
     *
     * @param {Number} gyear - gregorian year (int)
     * @param {Number} jde at midnight
     */
  }, {
    key: 'newYear',
    value: function newYear(gyear) {
      gyear = Math.trunc(gyear);
      if (this._cache.ny[gyear]) return this._cache.ny[gyear];
      var sue1 = this._cache.sue[gyear - 1] || _solstice2.default.december2(gyear - 1, earth);
      var sue2 = this._cache.sue[gyear] || _solstice2.default.december2(gyear, earth);
      this._cache.sue[gyear - 1] = sue1;
      this._cache.sue[gyear] = sue2;
      var m11n = this.previousNewMoon(this.midnight(sue2 + 1));
      var m12 = this.nextNewMoon(this.midnight(sue1 + 1));
      var m13 = this.nextNewMoon(this.midnight(m12 + lunarOffset));
      this.leapSui = Math.round((m11n - m12) / _moonphase2.default.meanLunarMonth) === 12;
      var ny = m13;
      if (this.leapSui && (this.isLeapMonth(m12) || this.isLeapMonth(m13))) {
        ny = this.nextNewMoon(this.midnight(m13 + _moonphase2.default.meanLunarMonth / 2));
      }
      this._cache.ny[gyear] = ny;
      return ny;
    }

    /**
     * get major solar term
     *
     * @param {Number} term - zhōngqì solar term Z1 .. Z12
     * @param {Number} [gyear] - (int) gregorian year
     * @returns {Number} jde at midnight
     */
  }, {
    key: 'majorSolarTerm',
    value: function majorSolarTerm(term, gyear) {
      return this.solarTerm(term * 2, gyear);
    }

    /**
     * get minor solar term
     *
     * @param {Number} term - jiéqì solar term J1 .. J12
     * @param {Number} [gyear] - (int) gregorian year
     * @returns {Number} jde at midnight
     */
  }, {
    key: 'minorSolarTerm',
    value: function minorSolarTerm(term, gyear) {
      return this.solarTerm(term * 2 - 1, gyear);
    }

    /**
     * get solar term from solar longitude
     *
     * @param {Number} term - jiéqì solar term 1 .. 24
     * @param {Number} [gyear] - (int) gregorian year
     * @returns {Number} jde at midnight
     */
  }, {
    key: 'solarTerm',
    value: function solarTerm(term, gyear) {
      if (gyear && term <= 3) gyear--;
      var years = gyear || this.yearFromEpochCycle();
      var lon = (term + 20) % 24 * 15 % 360;
      var st = _solstice2.default.longitude(years, earth, lon / p);
      st = this.midnight(st);
      return st;
    }

    /**
     * Qı̄ngmíng - Pure brightness Festival
     *
     * @param {Number} [gyear] - (int) gregorian year
     * @returns {Number} jde at midnight
     */
  }, {
    key: 'qingming',
    value: function qingming(gyear) {
      return this.solarTerm(5, gyear);
    }
  }]);
  return CalendarChinese;
}();
exports["default"] = CalendarChinese;

/***/ }),

/***/ 81515:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _Chinese = __webpack_require__(81376);
Object.defineProperty(exports, "CalendarChinese", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Chinese).default;
  }
}));
var _Korean = __webpack_require__(37723);
Object.defineProperty(exports, "CalendarKorean", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Korean).default;
  }
}));
var _Vietnamese = __webpack_require__(69764);
Object.defineProperty(exports, "CalendarVietnamese", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Vietnamese).default;
  }
}));
var _Japanese = __webpack_require__(14140);
Object.defineProperty(exports, "CalendarJapanese", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Japanese).default;
  }
}));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 82779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toFK5 = toFK5;
exports["default"] = exports.Planet = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
var _sexagesimal = _interopRequireDefault(__webpack_require__(31115));
var _coord = _interopRequireDefault(__webpack_require__(93637));
var _precess = _interopRequireDefault(__webpack_require__(13519));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function sum(t, series) {
  var coeffs = [];
  Object.keys(series).forEach(function (x) {
    coeffs[x] = 0;
    var y = series[x].length - 1;
    for (y; y >= 0; y--) {
      var term = {
        a: series[x][y][0],
        b: series[x][y][1],
        c: series[x][y][2]
      };
      coeffs[x] += term.a * Math.cos(term.b + term.c * t);
    }
  });
  var res = _base["default"].horner(t, coeffs);
  return res;
}
var Planet = /*#__PURE__*/function () {
  /**
   * VSOP87 representation of a Planet
   * @constructs Planet
   * @param {object} planet - planet data series
   * @example
   * ```js
   * // for use in browser
   * import {data} from 'astronomia'
   * const earth = new planetposition.Planet(data.vsop87Bearth)
   * ```
   */
  function Planet(planet) {
    _classCallCheck(this, Planet);
    if (_typeof(planet) !== 'object') throw new TypeError('need planet vsop87 data');
    this.name = planet.name;
    this.type = planet.type || 'B';
    this.series = planet;
  }
  /**
   * Position2000 returns ecliptic position of planets by full VSOP87 theory.
   *
   * @param {Number} jde - the date for which positions are desired.
   * @returns {base.Coord} Results are for the dynamical equinox and ecliptic J2000.
   *  {Number} lon - heliocentric longitude in radians.
   *  {Number} lat - heliocentric latitude in radians.
   *  {Number} range - heliocentric range in AU.
   */

  _createClass(Planet, [{
    key: "position2000",
    value: function position2000(jde) {
      var T = _base["default"].J2000Century(jde);
      var τ = T * 0.1;
      var lon = _base["default"].pmod(sum(τ, this.series.L), 2 * Math.PI);
      var lat = sum(τ, this.series.B);
      var range = sum(τ, this.series.R);
      switch (this.type) {
        case 'B':
          return new _base["default"].Coord(lon, lat, range);
        case 'D':
          {
            var eclFrom = new _coord["default"].Ecliptic(lon, lat);
            var epochFrom = _base["default"].JDEToJulianYear(jde);
            var epochTo = 2000.0;
            var eclTo = _precess["default"].eclipticPosition(eclFrom, epochFrom, epochTo, 0, 0);
            return new _base["default"].Coord(eclTo.lon, eclTo.lat, range);
          }
      }
    }
    /**
     * Position returns ecliptic position of planets at equinox and ecliptic of date.
     *
     * @param {Number} jde - the date for which positions are desired.
     * @returns {base.Coord} Results are positions consistent with those from Meeus's
     * Apendix III, that is, at equinox and ecliptic of date.
     *  {Number} lon - heliocentric longitude in radians.
     *  {Number} lat - heliocentric latitude in radians.
     *  {Number} range - heliocentric range in AU.
     */
  }, {
    key: "position",
    value: function position(jde) {
      var T = _base["default"].J2000Century(jde);
      var τ = T * 0.1;
      var lon = _base["default"].pmod(sum(τ, this.series.L), 2 * Math.PI);
      var lat = sum(τ, this.series.B);
      var range = sum(τ, this.series.R);
      switch (this.type) {
        case 'B':
          {
            var eclFrom = new _coord["default"].Ecliptic(lon, lat);
            var epochFrom = 2000.0;
            var epochTo = _base["default"].JDEToJulianYear(jde);
            var eclTo = _precess["default"].eclipticPosition(eclFrom, epochFrom, epochTo, 0, 0);
            return new _base["default"].Coord(eclTo.lon, eclTo.lat, range);
          }
        case 'D':
          return new _base["default"].Coord(lon, lat, range);
      }
    }
  }]);
  return Planet;
}();
/**
 * ToFK5 converts ecliptic longitude and latitude from dynamical frame to FK5.
 *
 * @param {Number} lon - ecliptic longitude in radians
 * @param {Number} lat - ecliptic latitude in radians
 * @param {Number} jde - Julian ephemeris day
 * @return {base.Coord}
 *    {Number} lon - FK5 longitude
 *    {Number} lat - FK5 latitude
 */

exports.Planet = Planet;
function toFK5(lon, lat, jde) {
  // formula 32.3, p. 219.
  var T = _base["default"].J2000Century(jde); // const Lp = lon - 1.397 * Math.PI / 180 * T - 0.00031 * Math.PI / 180 * T * T

  var Lp = lon - _sexagesimal["default"].angleFromDeg((1.397 + 0.00031 * T) * T);
  var _base$sincos = _base["default"].sincos(Lp),
    _base$sincos2 = _slicedToArray(_base$sincos, 2),
    sLp = _base$sincos2[0],
    cLp = _base$sincos2[1]; // (32.3) p. 219

  var L5 = lon + _sexagesimal["default"].angleFromSec(-0.09033 + 0.03916 * (cLp + sLp) * Math.tan(lat));
  var B5 = lat + _sexagesimal["default"].angleFromSec(0.03916 * (cLp - sLp));
  return new _base["default"].Coord(L5, B5);
}
var _default = {
  Planet: Planet,
  toFK5: toFK5
};
exports["default"] = _default;

/***/ }),

/***/ 83162:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var julian = __webpack_require__(3039);
var CalEvent = __webpack_require__(99063);
var CalDate = __webpack_require__(76431);
var Julian = /*#__PURE__*/function (_CalEvent) {
  _inherits(Julian, _CalEvent);
  var _super = _createSuper(Julian);
  function Julian() {
    _classCallCheck(this, Julian);
    return _super.apply(this, arguments);
  }
  _createClass(Julian, [{
    key: "inYear",
    value: function inYear(year) {
      if (this.opts.year && this.opts.year !== year) {
        return this;
      }
      var cal = new julian.CalendarJulian(year, this.opts.month, this.opts.day).toGregorian();
      var d = new CalDate(cal).setOffset(this.offset);
      this.dates.push(d);
      return this;
    }
  }]);
  return Julian;
}(CalEvent);
module.exports = Julian;

/***/ }),

/***/ 83984:
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === 'object';
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }
  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;

/***/ }),

/***/ 89019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ TimeOffRequestMutationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41992);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22779);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44179);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26024);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26860);
/* harmony import */ var _selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54982);
/* harmony import */ var _file_uploader_input_file_uploader_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53437);
/* harmony import */ var _time_off_policy_select_time_off_policy_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31675);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19223);
var TimeOffRequestMutationComponent_1;


















const _c0 = ["employeeSelector"];
let TimeOffRequestMutationComponent = /*#__PURE__*/(() => {
  let TimeOffRequestMutationComponent = class TimeOffRequestMutationComponent {
    static {
      TimeOffRequestMutationComponent_1 = this;
    }
    set content(component) {
      if (component) {
        this.employeeSelector = component;
      }
    }
    get timeOff() {
      return this._timeOff;
    }
    set timeOff(value) {
      this._timeOff = value;
    }
    static buildForm(fb) {
      const form = fb.group({
        start: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators */ .k0.required],
        end: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators */ .k0.required],
        policy: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators */ .k0.required],
        policyId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators */ .k0.required],
        documentUrl: [{
          value: null,
          disabled: true
        }],
        documentId: [],
        status: [],
        description: []
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .CompareDateValidator */ .A.validateDate('start', 'end')]
      });
      return form;
    }
    constructor(dialogRef, fb, documentsService, store, dateService) {
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.documentsService = documentsService;
      this.store = store;
      this.dateService = dateService;
      this.FormHelpers = _forms_helpers__WEBPACK_IMPORTED_MODULE_2__/* .FormHelpers */ .k;
      this.employeesArr = [];
      this.isEditMode = false;
      /*
       * Time Off Request Mutation Form
       */
      this.form = TimeOffRequestMutationComponent_1.buildForm(this.fb);
      this.minDate = this.dateService.addMonth(this.dateService.today(), 0);
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(200), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.patchFormValue()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Upload document asset
     *
     * @param image
     */
    uploadDocumentAsset(document) {
      try {
        this.form.get('documentId').setValue(document.id);
        this.form.get('documentUrl').setValue(document.fullUrl);
        this.form.updateValueAndValidity();
      } catch (error) {
        console.log('Error while uploading document asset', error);
      }
    }
    /**
     * Upload document asset URL
     *
     * @param image
     */
    uploadDocumentAssetUrl(documentUrl) {
      try {
        const documentUrlControl = this.form.get('documentUrl');
        if (documentUrl) {
          documentUrlControl.enable();
          documentUrlControl.setValue(documentUrl);
        } else {
          documentUrlControl.setValue(null);
          documentUrlControl.disable();
        }
      } catch (error) {
        console.log('Error while uploading document asset', error);
      }
    }
    /**
     * Patch form value on edit section
     */
    patchFormValue() {
      // patch form value
      if (this.timeOff) {
        this.form.patchValue({
          start: this.timeOff.start,
          end: this.timeOff.end,
          description: this.timeOff.description,
          policy: this.timeOff.policy,
          policyId: this.timeOff.policyId,
          status: this.timeOff.status,
          documentUrl: this.timeOff.documentUrl,
          documentId: this.timeOff.documentId
        });
        this.selectedEmployee = this.timeOff['employees'][0];
        this.employeesArr = this.timeOff['employees'];
      }
    }
    saveRequest() {
      this.selectedEmployee = this.employeeSelector.selectedEmployee;
      if (this.selectedEmployee.id) {
        this.employeesArr.push(this.selectedEmployee);
        this._createNewRecord();
      }
    }
    getRequestForm(reqType) {
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      this.documentsService.getAll({
        tenantId,
        organizationId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .first */ .$)()).subscribe(({
        items
      }) => {
        if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .isNotEmpty */ .hj)(items)) {
          let downloadDocUrl;
          if (reqType === 'paid') {
            downloadDocUrl = items[0].documentUrl;
          } else {
            downloadDocUrl = items[1].documentUrl;
          }
          window.open(`${downloadDocUrl}`);
        }
      });
    }
    _createNewRecord() {
      if (this.form.invalid) {
        return;
      }
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      this.dialogRef.close(Object.assign({
        employees: this.employeesArr,
        organizationId,
        tenantId,
        isHoliday: false,
        requestDate: new Date()
      }, this.form.value));
    }
    /**
     * On Policy Selection
     *
     * @param policy
     */
    onPolicySelected(policy) {
      this.form.get('policy').setValue(policy);
      if (policy.requiresApproval) {
        this.form.get('status').setValue(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .StatusTypesEnum */ .Z.REQUESTED);
      } else {
        this.form.get('status').setValue(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .StatusTypesEnum */ .Z.APPROVED);
      }
      this.form.updateValueAndValidity();
    }
    close() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function TimeOffRequestMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeOffRequestMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .OrganizationDocumentsService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDateService */ .Att));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TimeOffRequestMutationComponent,
        selectors: [["ngx-time-off-request-mutation"]],
        viewQuery: function TimeOffRequestMutationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.content = _t.first);
          }
        },
        inputs: {
          type: "type",
          timeOff: "timeOff"
        },
        standalone: false,
        decls: 75,
        vars: 60,
        consts: [["employeeSelector", ""], ["startDatePicker", ""], ["endDatePicker", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup"], [1, "row"], [1, "col-6"], [1, "form-group"], [1, "label"], ["fullWidth", "", "required", "", 1, "employees", 3, "skipGlobalChange"], ["formControlName", "policyId", 3, "selectedChange", "id", "ctrl", "placeholder"], ["for", "start", 1, "label"], ["formControlName", "start", "nbInput", "", "fullWidth", "", "required", "", 3, "placeholder", "nbDatepicker", "status"], [3, "min"], ["for", "end", 1, "label"], ["formControlName", "end", "nbInput", "", "fullWidth", "", 3, "placeholder", "nbDatepicker", "status"], ["nbButton", "", "status", "basic", 1, "download-btn", "mr-4", 3, "click"], ["nbButton", "", "status", "basic", 1, "download-btn", 3, "click"], [3, "uploadedImgUrl", "uploadedImageAsset", "placeholder", "fileUrl"], [1, "col-12"], ["for", "description", 1, "label"], ["fullWidth", "", "nbInput", "", "formControlName", "description", 3, "placeholder"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"]],
        template: function TimeOffRequestMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4)(2, "span", 5)(3, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffRequestMutationComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(4, "h5", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "form", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(15, "ga-employee-selector", 13, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(17, "div", 10)(18, "ga-time-off-policy-select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("selectedChange", function TimeOffRequestMutationComponent_Template_ga_time_off_policy_select_selectedChange_18_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.onPolicySelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(20, "div", 9)(21, "div", 10)(22, "div", 11)(23, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(26, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(28, "nb-datepicker", 17, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(30, "div", 10)(31, "div", 11)(32, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(33);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(35, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(37, "nb-datepicker", 17, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(39, "div", 9)(40, "div", 10)(41, "div", 11)(42, "div")(43, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(46, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffRequestMutationComponent_Template_button_click_46_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.getRequestForm("paid"));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(49, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffRequestMutationComponent_Template_button_click_49_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.getRequestForm("unpaid"));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(50);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(52, "div", 10)(53, "div", 11)(54, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(55);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(57, "ngx-file-uploader-input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("uploadedImgUrl", function TimeOffRequestMutationComponent_Template_ngx_file_uploader_input_uploadedImgUrl_57_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.form.get("documentUrl").setValue($event));
            })("uploadedImageAsset", function TimeOffRequestMutationComponent_Template_ngx_file_uploader_input_uploadedImageAsset_57_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.uploadDocumentAsset($event));
            })("uploadedImgUrl", function TimeOffRequestMutationComponent_Template_ngx_file_uploader_input_uploadedImgUrl_57_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.uploadDocumentAssetUrl($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(59, "div", 9)(60, "div", 23)(61, "div", 11)(62, "div", 11)(63, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(64);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(66, "textarea", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(67, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(68, "nb-card-footer", 26)(69, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffRequestMutationComponent_Template_button_click_69_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(70);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(71, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(72, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffRequestMutationComponent_Template_button_click_72_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.saveRequest());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(73);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(74, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const startDatePicker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵreference"] */ .sdS(29);
            const endDatePicker_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵreference"] */ .sdS(38);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(6, 28, !ctx.isEditMode ? "TIME_OFF_PAGE.REQUEST_TIME_OFF" : "TIME_OFF_PAGE.ACTIONS.EDIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(14, 30, "FORM.LABELS.EMPLOYEE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("skipGlobalChange", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("id", "policy")("ctrl", ctx.form.get("policyId"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(19, 32, "TIME_OFF_PAGE.SELECT_TIME_OFF_POLICY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(25, 34, "FORM.LABELS.FROM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(27, 36, "POP_UPS.PICK_DATE"))("nbDatepicker", startDatePicker_r2)("status", ctx.FormHelpers.isInvalidControl(ctx.form, "start") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("min", ctx.minDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(34, 38, "FORM.LABELS.TO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(36, 40, "POP_UPS.PICK_DATE"))("nbDatepicker", endDatePicker_r3)("status", ctx.FormHelpers.isInvalidControl(ctx.form, "end") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("min", ctx.minDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(45, 42, "FORM.LABELS.DOWNLOAD_REQUEST_FORM"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(48, 44, "BUTTONS.PAID_DAYS_OFF"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(51, 46, "BUTTONS.UNPAID_DAYS_OFF"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(56, 48, "TIME_OFF_PAGE.UPLOAD_REQUEST_DOCUMENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(58, 50, "FORM.PLACEHOLDERS.UPLOADER_DOCUMENT_PLACEHOLDER"))("fileUrl", ctx.form.get("documentUrl").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(65, 52, "FORM.LABELS.DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(67, 54, "TIME_OFF_PAGE.ADD_A_DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(71, 56, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(74, 58, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbInputDirective */ .i6h, _selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_14__/* .EmployeeSelectorComponent */ .R, _file_uploader_input_file_uploader_input_component__WEBPACK_IMPORTED_MODULE_15__/* .FileUploaderInputComponent */ .e, _time_off_policy_select_time_off_policy_select_component__WEBPACK_IMPORTED_MODULE_16__/* .TimeOffPolicySelectComponent */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 645px;\n}\n.main[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.main[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  padding-right: 15px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.download-btn[_ngcontent-%COMP%] {\n  height: 2rem;\n  font-weight: 400;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  };
  return TimeOffRequestMutationComponent;
})();
TimeOffRequestMutationComponent = TimeOffRequestMutationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogRef */ .ybQ, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .OrganizationDocumentsService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDateService */ .Att])], TimeOffRequestMutationComponent);


/***/ }),

/***/ 91352:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.deltaT = deltaT;
exports["default"] = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
var _interpolation = _interopRequireDefault(__webpack_require__(48586));
var _deltat = _interopRequireDefault(__webpack_require__(16547));
var _julian = __webpack_require__(3039);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/**
 * deltaT returns the difference ΔT = TD - UT between Dynamical Time TD and
 * Univeral Time (GMT+12) in seconds
 *
 * Polynoms are from <http://eclipse.gsfc.nasa.gov/SEcat5/deltatpoly.html>
 * and <http://www.staff.science.uu.nl/~gent0113/deltat/deltat_old.htm>
 *
 * @param {Number} dyear - decimal year
 * @returns {Number} ΔT in seconds.
 */
function deltaT(dyear) {
  var ΔT;
  if (dyear < -500) {
    ΔT = _base["default"].horner((dyear - 1820) * 0.01, -20, 0, 32);
  } else if (dyear < 500) {
    ΔT = _base["default"].horner(dyear * 0.01, 10583.6, -1014.41, 33.78311, -5.952053, -0.1798452, 0.022174192, 0.0090316521);
  } else if (dyear < 1600) {
    ΔT = _base["default"].horner((dyear - 1000) * 0.01, 1574.2, -556.01, 71.23472, 0.319781, -0.8503463, -0.005050998, 0.0083572073);
  } else if (dyear < _deltat["default"].historic.first) {
    ΔT = _base["default"].horner(dyear - 1600, 120, -0.9808, -0.01532, 1 / 7129);
  } else if (dyear < _deltat["default"].data.first) {
    ΔT = interpolate(dyear, _deltat["default"].historic);
  } else if (dyear < _deltat["default"].data.last - 0.25) {
    // -0.25 ~= do not consider last 3 months in dataset
    ΔT = interpolateData(dyear, _deltat["default"].data);
  } else if (dyear < _deltat["default"].prediction.last) {
    ΔT = interpolate(dyear, _deltat["default"].prediction);
  } else if (dyear < 2050) {
    ΔT = _base["default"].horner((dyear - 2000) / 100, 62.92, 32.217, 55.89);
  } else if (dyear < 2150) {
    ΔT = _base["default"].horner((dyear - 1820) / 100, -205.72, 56.28, 32);
  } else {
    var u = (dyear - 1820) / 100;
    ΔT = -20 + 32 * u * u;
  }
  return ΔT;
}
/**
 * interpolation of dataset
 * @private
 * @param {Number} dyear - julian year
 * @returns {Number} ΔT in seconds.
 */

function interpolate(dyear, data) {
  var d3 = _interpolation["default"].len3ForInterpolateX(dyear, data.first, data.last, data.table);
  return d3.interpolateX(dyear);
}
/**
 * interpolation of dataset from finals2000A with is one entry per month
 * linear interpolation over whole dataset is inaccurate as points per month
 * are not equidistant. Therefore points are approximated using 2nd diff. interpolation
 * from current month using the following two points
 *
 * @private
 * @param {Number} dyear - julian year
 * @returns {Number} ΔT in seconds.
 */

function interpolateData(dyear, data) {
  var _data$firstYM = _slicedToArray(data.firstYM, 2),
    fyear = _data$firstYM[0],
    fmonth = _data$firstYM[1];
  var _monthOfYear = monthOfYear(dyear),
    year = _monthOfYear.year,
    month = _monthOfYear.month,
    first = _monthOfYear.first,
    last = _monthOfYear.last;
  var pos = 12 * (year - fyear) + (month - fmonth);
  var table = data.table.slice(pos, pos + 3);
  var d3 = new _interpolation["default"].Len3(first, last, table);
  return d3.interpolateX(dyear);
}
/**
* Get month of Year from fraction. Fraction differs at leap years.
* @private
* @param {Number} dyear - decimal year
* @return {Object} `{year: Number, month: Number, first: Number, last}`
*/

function monthOfYear(dyear) {
  if (!monthOfYear.data) {
    // memoize yearly fractions per month
    monthOfYear.data = {
      0: [],
      1: []
    };
    for (var m = 0; m <= 12; m++) {
      monthOfYear.data[0][m] = new _julian.Calendar(1999, m, 1).toYear() - 1999; // non leap year

      monthOfYear.data[1][m] = new _julian.Calendar(2000, m, 1).toYear() - 2000; // leap year
    }
  }
  var year = dyear | 0;
  var f = dyear - year;
  var d = (0, _julian.LeapYearGregorian)(year) ? 1 : 0;
  var data = monthOfYear.data[d];
  var month = 12; // TODO loop could be improved

  while (month > 0 && data[month] > f) {
    month--;
  }
  var first = year + data[month];
  var last = month < 11 ? year + data[month + 2] : year + 1 + data[(month + 2) % 12];
  return {
    year: year,
    month: month,
    first: first,
    last: last
  };
}
var _default = {
  deltaT: deltaT
};
exports["default"] = _default;

/***/ }),

/***/ 92508:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.seasonName = exports.monthName = exports.weekDay = exports.banglaToDigit = exports.digitToBangla = void 0;

/**
 * bengali names were taken from https://github.com/nuhil/bangla-calendar - MIT licensed
 */
var monthNames = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'];
var weekDays = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
var seasonNames = ['গ্রীষ্ম', 'বর্ষা', 'শরৎ', 'হেমন্ত', 'শীত', 'বসন্ত'];
var digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
var banglas;
var createBanglas = function createBanglas() {
  banglas = digits.reduce(function (o, c, i) {
    o[c] = i;
    return o;
  }, {});
};
var digitToBangla = function digitToBangla(number) {
  return String(number).replace(/\d/g, function (digit) {
    return digits[digit];
  });
};
exports.digitToBangla = digitToBangla;
var banglaToDigit = function banglaToDigit(bangla) {
  if (!banglas) createBanglas(); // memoize

  var month = monthNames.indexOf(bangla);
  var str = month !== -1 ? month + 1 : String(bangla).replace(/./g, function (bangla) {
    var r = banglas[bangla];
    return r !== undefined ? r : bangla;
  });
  return Number(str);
};
exports.banglaToDigit = banglaToDigit;
var weekDay = function weekDay(day) {
  return weekDays[day];
};
exports.weekDay = weekDay;
var monthName = function monthName(month) {
  return monthNames[month - 1];
};
exports.monthName = monthName;
var seasonName = function seasonName(month) {
  return seasonNames[Math.floor((month - 1) / 2)];
}; // ('পৌষ' + 'মাঘ') = 'শীত'. Every consecutive two index in 'banglaMonths' indicates a single index in 'banglaSeasons'.

exports.seasonName = seasonName;

/***/ }),

/***/ 93637:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.galactic0Lon1950 = exports.galacticLon0 = exports.galacticNorth1950 = exports.galacticNorth = exports.Galactic = exports.Horizontal = exports.Equatorial = exports.Ecliptic = void 0;
var _base = _interopRequireDefault(__webpack_require__(73011));
var _sexagesimal = _interopRequireDefault(__webpack_require__(31115));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
* Ecliptic coordinates are referenced to the plane of the ecliptic.
*/
var Ecliptic = /*#__PURE__*/function () {
  /**
   * IMPORTANT: Longitudes are measured *positively* westwards
   * e.g. Washington D.C. +77°04; Vienna -16°23'
   * @param {Number} lon - Longitude (λ) in radians
   * @param {Number} lat - Latitude (β) in radians
   */
  function Ecliptic(lon, lat) {
    _classCallCheck(this, Ecliptic);
    if (_typeof(lon) === 'object') {
      lat = lon.lat;
      lon = lon.lon;
    }
    this.lon = lon || 0;
    this.lat = lat || 0;
  }
  /**
   * converts ecliptic coordinates to equatorial coordinates.
   * @param {Number} ε - Obliquity
   * @returns {Equatorial}
   */

  _createClass(Ecliptic, [{
    key: "toEquatorial",
    value: function toEquatorial(ε) {
      var _base$sincos = _base["default"].sincos(ε),
        _base$sincos2 = _slicedToArray(_base$sincos, 2),
        εsin = _base$sincos2[0],
        εcos = _base$sincos2[1];
      var _base$sincos3 = _base["default"].sincos(this.lat),
        _base$sincos4 = _slicedToArray(_base$sincos3, 2),
        sβ = _base$sincos4[0],
        cβ = _base$sincos4[1];
      var _base$sincos5 = _base["default"].sincos(this.lon),
        _base$sincos6 = _slicedToArray(_base$sincos5, 2),
        sλ = _base$sincos6[0],
        cλ = _base$sincos6[1];
      var ra = Math.atan2(sλ * εcos - sβ / cβ * εsin, cλ); // (13.3) p. 93

      if (ra < 0) {
        ra += 2 * Math.PI;
      }
      var dec = Math.asin(sβ * εcos + cβ * εsin * sλ); // (13.4) p. 93

      return new Equatorial(ra, dec);
    }
  }]);
  return Ecliptic;
}();
/**
 * Equatorial coordinates are referenced to the Earth's rotational axis.
 */

exports.Ecliptic = Ecliptic;
var Equatorial = /*#__PURE__*/function () {
  /**
   * @param {Number} ra - (float) Right ascension (α) in radians
   * @param {Number} dec - (float) Declination (δ) in radians
   */
  function Equatorial() {
    var ra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var dec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, Equatorial);
    this.ra = ra;
    this.dec = dec;
  }
  /**
   * EqToEcl converts equatorial coordinates to ecliptic coordinates.
   * @param {Number} ε - Obliquity
   * @returns {Ecliptic}
   */

  _createClass(Equatorial, [{
    key: "toEcliptic",
    value: function toEcliptic(ε) {
      var _base$sincos7 = _base["default"].sincos(ε),
        _base$sincos8 = _slicedToArray(_base$sincos7, 2),
        εsin = _base$sincos8[0],
        εcos = _base$sincos8[1];
      var _base$sincos9 = _base["default"].sincos(this.ra),
        _base$sincos10 = _slicedToArray(_base$sincos9, 2),
        sα = _base$sincos10[0],
        cα = _base$sincos10[1];
      var _base$sincos11 = _base["default"].sincos(this.dec),
        _base$sincos12 = _slicedToArray(_base$sincos11, 2),
        sδ = _base$sincos12[0],
        cδ = _base$sincos12[1];
      var lon = Math.atan2(sα * εcos + sδ / cδ * εsin, cα); // (13.1) p. 93

      var lat = Math.asin(sδ * εcos - cδ * εsin * sα); // (13.2) p. 93

      return new Ecliptic(lon, lat);
    }
    /**
     * EqToHz computes Horizontal coordinates from equatorial coordinates.
     *
     * Argument g is the location of the observer on the Earth.  Argument st
     * is the sidereal time at Greenwich.
     *
     * Sidereal time must be consistent with the equatorial coordinates.
     * If coordinates are apparent, sidereal time must be apparent as well.
     *
     * @param {Equatorial} eq - equatorial coordinates (right ascension, declination)
     * @param {globe.Coord} g - coordinates of observer on Earth
     * @param {Number} st - sidereal time at Greenwich at time of observation
     * @returns {Horizontal}
     */
  }, {
    key: "toHorizontal",
    value: function toHorizontal(g, st) {
      var H = new _sexagesimal["default"].Time(st).rad() - g.lon - this.ra;
      var _base$sincos13 = _base["default"].sincos(H),
        _base$sincos14 = _slicedToArray(_base$sincos13, 2),
        sH = _base$sincos14[0],
        cH = _base$sincos14[1];
      var _base$sincos15 = _base["default"].sincos(g.lat),
        _base$sincos16 = _slicedToArray(_base$sincos15, 2),
        sφ = _base$sincos16[0],
        cφ = _base$sincos16[1];
      var _base$sincos17 = _base["default"].sincos(this.dec),
        _base$sincos18 = _slicedToArray(_base$sincos17, 2),
        sδ = _base$sincos18[0],
        cδ = _base$sincos18[1];
      var azimuth = Math.atan2(sH, cH * sφ - sδ / cδ * cφ); // (13.5) p. 93

      var altitude = Math.asin(sφ * sδ + cφ * cδ * cH); // (13.6) p. 93

      return new Horizontal(azimuth, altitude);
    }
    /**
     * EqToGal converts equatorial coordinates to galactic coordinates.
     *
     * Equatorial coordinates must be referred to the standard equinox of B1950.0.
     * For conversion to B1950, see package precess and utility functions in
     * package "common".
     *
     * @param {Equatorial} eq
     * @returns {Galactic}
     */
  }, {
    key: "toGalactic",
    value: function toGalactic() {
      var _base$sincos19 = _base["default"].sincos(galacticNorth1950.ra - this.ra),
        _base$sincos20 = _slicedToArray(_base$sincos19, 2),
        sdα = _base$sincos20[0],
        cdα = _base$sincos20[1];
      var _base$sincos21 = _base["default"].sincos(galacticNorth1950.dec),
        _base$sincos22 = _slicedToArray(_base$sincos21, 2),
        sgδ = _base$sincos22[0],
        cgδ = _base$sincos22[1];
      var _base$sincos23 = _base["default"].sincos(this.dec),
        _base$sincos24 = _slicedToArray(_base$sincos23, 2),
        sδ = _base$sincos24[0],
        cδ = _base$sincos24[1];
      var x = Math.atan2(sdα, cdα * sgδ - sδ / cδ * cgδ); // (13.7) p. 94
      // (galactic0Lon1950 + 1.5*math.Pi) = magic number of 303 deg

      var lon = (galactic0Lon1950 + 1.5 * Math.PI - x) % (2 * Math.PI); // (13.8) p. 94

      var lat = Math.asin(sδ * sgδ + cδ * cgδ * cdα);
      return new Galactic(lon, lat);
    }
  }]);
  return Equatorial;
}();
/**
 * Horizontal coordinates are referenced to the local horizon of an observer
 * on the surface of the Earth.
 * @param {Number} az - Azimuth (A) in radians
 * @param {Number} alt - Altitude (h) in radians
 */

exports.Equatorial = Equatorial;
var Horizontal = /*#__PURE__*/function () {
  function Horizontal() {
    var az = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, Horizontal);
    this.az = az;
    this.alt = alt;
  }
  /**
   * transforms horizontal coordinates to equatorial coordinates.
   *
   * Sidereal time must be consistent with the equatorial coordinates.
   * If coordinates are apparent, sidereal time must be apparent as well.
   * @param {globe.Coord} g - coordinates of observer on Earth (lat, lon)
   * @param {Number} st - sidereal time at Greenwich at time of observation.
   * @returns {Equatorial} (right ascension, declination)
   */

  _createClass(Horizontal, [{
    key: "toEquatorial",
    value: function toEquatorial(g, st) {
      var _base$sincos25 = _base["default"].sincos(this.az),
        _base$sincos26 = _slicedToArray(_base$sincos25, 2),
        sA = _base$sincos26[0],
        cA = _base$sincos26[1];
      var _base$sincos27 = _base["default"].sincos(this.alt),
        _base$sincos28 = _slicedToArray(_base$sincos27, 2),
        sh = _base$sincos28[0],
        ch = _base$sincos28[1];
      var _base$sincos29 = _base["default"].sincos(g.lat),
        _base$sincos30 = _slicedToArray(_base$sincos29, 2),
        sφ = _base$sincos30[0],
        cφ = _base$sincos30[1];
      var H = Math.atan2(sA, cA * sφ + sh / ch * cφ);
      var ra = _base["default"].pmod(new _sexagesimal["default"].Time(st).rad() - g.lon - H, 2 * Math.PI);
      var dec = Math.asin(sφ * sh - cφ * ch * cA);
      return new Equatorial(ra, dec);
    }
  }]);
  return Horizontal;
}();
/**
 * Galactic coordinates are referenced to the plane of the Milky Way.
 * @param {Number} lon - Longitude (l) in radians
 * @param {Number} lat - Latitude (b) in radians
 */

exports.Horizontal = Horizontal;
var Galactic = /*#__PURE__*/function () {
  function Galactic() {
    var lon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var lat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, Galactic);
    this.lon = lon;
    this.lat = lat;
  }
  /**
   * GalToEq converts galactic coordinates to equatorial coordinates.
   *
   * Resulting equatorial coordinates will be referred to the standard equinox of
   * B1950.0.  For subsequent conversion to other epochs, see package precess and
   * utility functions in package meeus.
   *
   * @returns {Equatorial} (right ascension, declination)
   */

  _createClass(Galactic, [{
    key: "toEquatorial",
    value: function toEquatorial() {
      // (-galactic0Lon1950 - math.Pi/2) = magic number of -123 deg
      var _base$sincos31 = _base["default"].sincos(this.lon - galactic0Lon1950 - Math.PI / 2),
        _base$sincos32 = _slicedToArray(_base$sincos31, 2),
        sdLon = _base$sincos32[0],
        cdLon = _base$sincos32[1];
      var _base$sincos33 = _base["default"].sincos(galacticNorth1950.dec),
        _base$sincos34 = _slicedToArray(_base$sincos33, 2),
        sgδ = _base$sincos34[0],
        cgδ = _base$sincos34[1];
      var _base$sincos35 = _base["default"].sincos(this.lat),
        _base$sincos36 = _slicedToArray(_base$sincos35, 2),
        sb = _base$sincos36[0],
        cb = _base$sincos36[1];
      var y = Math.atan2(sdLon, cdLon * sgδ - sb / cb * cgδ); // (galacticNorth1950.RA.Rad() - math.Pi) = magic number of 12.25 deg

      var ra = _base["default"].pmod(y + galacticNorth1950.ra - Math.PI, 2 * Math.PI);
      var dec = Math.asin(sb * sgδ + cb * cgδ * cdLon);
      return new Equatorial(ra, dec);
    }
  }]);
  return Galactic;
}();
/**
* equatorial coords for galactic north
* IAU B1950.0 coordinates of galactic North Pole
*/

exports.Galactic = Galactic;
var galacticNorth = new Equatorial(new _sexagesimal["default"].RA(12, 49, 0).rad(), 27.4 * Math.PI / 180);
exports.galacticNorth = galacticNorth;
var galacticNorth1950 = galacticNorth;
/**
* Galactic Longitude 0°
* Meeus gives 33 as the origin of galactic longitudes relative to the
* ascending node of of the galactic equator.  33 + 90 = 123, the IAU
* value for origin relative to the equatorial pole.
*/

exports.galacticNorth1950 = galacticNorth1950;
var galacticLon0 = 33 * Math.PI / 180;
exports.galacticLon0 = galacticLon0;
var galactic0Lon1950 = galacticLon0;
exports.galactic0Lon1950 = galactic0Lon1950;
var _default = {
  Ecliptic: Ecliptic,
  Equatorial: Equatorial,
  Horizontal: Horizontal,
  Galactic: Galactic,
  galacticNorth: galacticNorth,
  galacticNorth1950: galacticNorth1950,
  galacticLon0: galacticLon0,
  galactic0Lon1950: galactic0Lon1950
};
exports["default"] = _default;

/***/ }),

/***/ 99063:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var _require = __webpack_require__(51312),
  isDate = _require.isDate;
var CalDate = __webpack_require__(76431);
var CalEvent = /*#__PURE__*/function () {
  function CalEvent(opts) {
    _classCallCheck(this, CalEvent);
    opts = opts || {};
    this.substitute = opts.substitute;
    this.opts = opts;
    this.offset = opts.offset;
    this.dates = [];
    if (isDate(opts)) {
      this.opts = new CalDate(opts);
    }
  }
  _createClass(CalEvent, [{
    key: "inYear",
    value: function inYear(year) {
      var d = new CalDate(this.opts).setOffset(this.offset);
      if (!(d.year && d.year !== year)) {
        d.year = year;
        this.dates.push(d);
      }
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.dates = [];
    }
  }, {
    key: "isEqualDate",
    value: function isEqualDate(calEvent) {
      var res = false;
      var _iterator = _createForOfIteratorHelper(this.dates),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var thisDate = _step.value;
          var _iterator2 = _createForOfIteratorHelper(calEvent.dates),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var date = _step2.value;
              res |= thisDate.isEqualDate(date);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return !!res;
    }
    /**
     * @param {Number} year - year to filter
     * @param {Object[]} active - definition of active ranges `{from: {Date}, [to]: {Date}}`
     * @return {this} for chaining
     */
  }, {
    key: "filter",
    value: function filter(year, active) {
      this.dates = this.dates.filter(function (date) {
        if (!date._filter && isActive(date, year, active)) {
          return date;
        }
      });
      return this;
    }
  }, {
    key: "push",
    value: function push(calEvent) {
      if (calEvent && Array.isArray(calEvent.dates)) {
        this.dates = this.dates.concat(calEvent.dates);
      }
    }
  }, {
    key: "get",
    value: function get(timezone) {
      var _this = this;
      var arr = this.dates.map(function (date) {
        var o = {
          date: date.toString(),
          start: date.toTimezone(timezone),
          end: date.toEndDate().toTimezone(timezone)
        };
        _this._addSubstitute(date, o);
        return o;
      });
      return arr;
    }
  }, {
    key: "_addSubstitute",
    value: function _addSubstitute(date, obj) {
      if (this.substitute || date.substitute) obj.substitute = true;
    }
  }]);
  return CalEvent;
}();
module.exports = CalEvent;
function isActive(date, year, active) {
  if (!active) {
    if (date.year === year) {
      return true;
    } else {
      return false;
    }
  }
  var _date = date.toDate();
  var _iterator3 = _createForOfIteratorHelper(active),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var a = _step3.value;
      var from = a.from,
        to = a.to;
      if (date.year === year && (from && to && from <= _date && to > _date || from && !to && from <= _date || !from && to && to > _date)) {
        return true;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

/***/ }),

/***/ 99542:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"version":"2021-01-28","license":"CC-BY-SA-3","holidays":{"AD":{"names":{"ca":"Andorra","es":"Andorra","en":"Andorra"},"dayoff":"sunday","langs":["ca","es"],"zones":["Europe/Andorra"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06"},"03-14":{"_name":"Constitution Day"},"05-01":{"_name":"05-01"},"08-15":{"_name":"08-15"},"09-08":{"name":{"en":"Our Lady of Meritxell","es":"Nuestra Sra. De Meritxell","ca":"Mare de Déu de Meritxell"}},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-24":{"type":"bank","_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"easter -47":{"_name":"easter -47"},"easter -3 14:00":{"type":"bank","_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"}},"regions":{"07":{"name":"Andorra la Vella","days":{"1st saturday in August P3D":{"name":{"en":"Andorra La Vella Festival","ca":"Andorra La Vella Festival"}}}}}},"AE":{"names":{"en":"United Arab Emirates","ar":"دولة الإمارات العربية المتحدة"},"langs":["ar"],"zones":["Asia/Dubai"],"dayoff":"","days":{"01-01":{"_name":"01-01","name":{"ar":"رأس السنة الميلادية"}},"12-02":{"name":{"en":"National Day","ar":"اليوم الوطني"}},"1 Muharram":{"_name":"1 Muharram"},"1 Shawwal P3D":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah P3D":{"_name":"10 Dhu al-Hijjah"},"27 Rajab":{"_name":"27 Rajab"},"1 Ramadan":{"_name":"1 Ramadan"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal"}}},"AG":{"names":{"en":"Antigua & Barbuda"},"langs":["en"],"dayoff":"sunday","weekend":["saturday","sunday"],"zones":["America/Port_of_Spain"],"days":{"01-01 and if sunday then next monday":{"substitute":true,"_name":"01-01"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"easter 49":{"_name":"easter 49","type":"observance"},"easter 50":{"_name":"easter 50"},"08-01":{"name":{"en":"J\'Ouvert Morning"}},"08-02":{"name":{"en":"Last Lap"}},"11-01 if saturday,sunday then next monday":{"_name":"Independence Day"},"12-09":{"name":{"en":"V.C Bird Day"}},"12-25 and if saturday then next monday if sunday then next tuesday":{"_name":"12-25","substitute":true},"12-26 and if sunday then next monday":{"_name":"12-26","substitute":true}},"regions":{"10":{"name":"Barbuda","days":{"easter 47 P4D":{"name":{"en":"Caribana"},"type":"observance"}}}}},"AI":{"names":{"en":"Anguilla"},"langs":["en"],"dayoff":"sunday","weekend":["saturday","sunday"],"zones":["America/Port_of_Spain"],"days":{"01-01":{"_name":"01-01"},"03-02":{"name":{"en":"James Ronald Webster Day"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"05-30":{"name":{"en":"Anguilla Day"}},"easter 49":{"_name":"easter 49","type":"observance"},"easter 50":{"_name":"easter 50"},"2nd monday in June":{"name":{"en":"Celebration of the Birthday of Her Majesty the Queen"}},"1st monday in August":{"name":{"en":"August Monday"}},"1st thursday in August":{"name":{"en":"August Thursday"}},"1st friday in August":{"_name":"Constitution Day"},"12-19":{"name":{"en":"National Heroes and Heroines Day"}},"12-25 and if saturday then next monday if sunday then next tuesday":{"_name":"12-25","substitute":true},"12-26 and if sunday then next monday":{"_name":"12-26","substitute":true}}},"AL":{"names":{"sq":"Shqipëri","en":"Albania"},"dayoff":"sunday","langs":["sq","es"],"zones":["Europe/Tirane"],"days":{"01-01 and if sunday then next tuesday":{"_name":"01-01","substitute":true},"01-02 and if sunday then next monday":{"name":{"sq":"Festa e Vitit të Ri","en":"New Year Holiday"},"substitute":true},"03-02":{"name":{"sq":"Dita e Besëlidhjes së Lezhës","en":"League of Lezhë day"},"type":"observance"},"03-07":{"name":{"sq":"Dita e Mësuesit","en":"Teacher\'s Day"},"type":"observance"},"03-08":{"_name":"Mothers Day","type":"observance"},"03-14 and if sunday then next monday":{"name":{"sq":"Dita e Verës","en":"Summer Day"},"substitute":true},"03-22 and if sunday then next monday":{"name":{"sq":"Dita e Sulltan Nevruzit","en":"Sultan Nevruz\'s Day"},"substitute":true},"04-01":{"_name":"04-01","type":"observance"},"easter":{"name":{"sq":"Pashkët Katolike","en":"Catholic Easter"}},"easter 1":{"name":{"sq":"Pashkët Katolike","en":"Catholic Easter"}},"orthodox":{"name":{"sq":"Pashkët Ortodokse","en":"Orthodox Easter"}},"orthodox 1":{"name":{"sq":"Pashkët Ortodokse","en":"Orthodox Easter"}},"05-01 and if sunday then next monday":{"_name":"05-01","substitute":true},"06-01":{"name":{"sq":"Dita Ndërkombëtare e Fëmijëve","en":"Children\'s Day"},"type":"observance"},"10-19 and if sunday then next monday":{"name":{"sq":"Dita e Nënë Terezës","en":"Mother Teresa Day"},"substitute":true,"active":[{"from":2004}]},"11-22":{"name":{"sq":"Dita e Alfabetit","en":"Alphabet Day"},"type":"observance"},"11-28 and if sunday then next monday":{"_name":"Independence Day","substitute":true},"11-29 and if sunday then next monday":{"_name":"Liberation Day","substitute":true},"12-08 and if sunday then next monday":{"name":{"sq":"Dita Kombëtare e Rinisë","en":"Youth Day"},"substitute":true,"active":[{"from":2010}]},"12-24":{"_name":"12-24","type":"bank"},"12-25 and if sunday then next monday":{"_name":"12-25","substitute":true},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}},"regions":null},"AM":{"names":{"hy":"Հայաստան","en":"Armenia"},"dayoff":"sunday","langs":["hy"],"zones":["Asia/Yerevan"],"days":{"12-31":{"_name":"12-31"},"01-01 P2D":{"_name":"01-01"},"01-03 P3D":{"name":{"en":"Pre-Christmas holidays","hy":"Նախածննդյան տոներ"}},"01-06":{"_name":"12-25"},"01-28":{"name":{"en":"Army Day","hy":"Բանակի օր"}},"02-21":{"name":{"en":"Mother Language Day","hy":"Մայրենի լեզվի օր"},"type":"observance"},"easter -52":{"name":{"en":"St. Vartan the good work and the duty days","hy":"Սուրբ Վարդանանց տոն՝ բարի գործի եւ ազգային տուրքի օր"},"type":"observance"},"03-08":{"_name":"03-08"},"04-07":{"name":{"en":"Motherhood and Beauty Day","hy":"Մայրության, գեղեցկության եւ սիրո տոն"},"type":"observance"},"04-24":{"_name":"Mothers Day"},"05-01":{"_name":"05-01"},"05-08":{"name":{"en":"Yerkrapah Day","hy":"Երկրապահի օր"},"type":"observance"},"05-09":{"name":{"en":"Victory and Peace Day","hy":"Հաղթանակի եւ Խաղաղության տոն"}},"05-28":{"name":{"en":"Republic Day","hy":"Հանրապետության օր"}},"06-01":{"name":{"en":"The day of protection of children rights","hy":"Երեխաների իրավունքների պաշտպանության օր"},"type":"observance"},"07-05":{"_name":"Constitution Day"},"09-01":{"name":{"en":"Knowledge, Literacy and Education Day","hy":"Գիտելիքի, գրի եւ դպրության օր"},"type":"observance"},"09-21":{"_name":"Independence Day"},"2nd saturday in October":{"name":{"en":"Translator\'s Day","hy":"Թարգմանչաց տոն"},"type":"observance"},"12-07":{"name":{"en":"Earthquake Remembrance Day","hy":"Երկրաշարժի զոհերի հիշատակի օր"},"type":"observance"}}},"AO":{"names":{"pt":"Angola","en":"Angola"},"dayoff":"sunday","zones":["Africa/Lagos"],"langs":["pt"],"days":{"01-01":{"_name":"01-01"},"02-04":{"name":{"pt":"Dia do Início da Luta Armada de Libertação Nacional","en":"Liberation Day"}},"easter -47":{"_name":"easter -47"},"03-08":{"name":{"pt":"Dia Internacional da Mulher","en":"International Woman\'s Day"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"04-04":{"name":{"pt":"Dia da Paz","en":"Peace Day"}},"05-01":{"_name":"05-01"},"1st sunday in May":{"_name":"Mothers Day","type":"observance"},"09-17":{"name":{"pt":"Fundador da Nação e Dia dos Heróis Nacionais","en":"National Hero Day"}},"11-02":{"_name":"11-02"},"11-11":{"_name":"Independence Day"},"12-25":{"_name":"12-25"}}},"AR":{"names":{"es":"Argentina","en":"Argentina"},"dayoff":"sunday","langs":["es"],"zones":["America/Argentina/Buenos_Aires","America/Argentina/Cordoba","America/Argentina/Salta","America/Argentina/Jujuy","America/Argentina/Tucuman","America/Argentina/Catamarca","America/Argentina/La_Rioja","America/Argentina/San_Juan","America/Argentina/Mendoza","America/Argentina/San_Luis","America/Argentina/Rio_Gallegos","America/Argentina/Ushuaia"],"days":{"01-01":{"_name":"01-01"},"easter -48":{"_name":"easter -48"},"easter -47":{"_name":"easter -47"},"03-24":{"name":{"en":"Day of Remembrance for Truth and Justice","es":"Día de la Memoria por la Verdad y la Justicia"}},"substitutes 03-24 if tuesday then previous monday if thursday then next friday":{"name":{"en":"Bridge Day","es":"Feriado Puente Turístico"}},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"04-02":{"name":{"en":"Day of the veterans and the fallen in Malvinas War","es":"Día del Veterano y de los Caídos en la Guerra de Malvinas"}},"substitutes 04-02 if tuesday then previous monday if thursday then next friday":{"name":{"en":"Bridge Day","es":"Feriado Puente Turístico"}},"05-01":{"_name":"05-01"},"substitutes 05-01 if tuesday then previous monday if thursday then next friday":{"name":{"en":"Bridge Day","es":"Feriado Puente Turístico"}},"05-25":{"name":{"en":"Day of the First National Government","es":"Primer Gobierno Patrio"}},"substitutes 05-25 if tuesday then previous monday if thursday then next friday":{"name":{"en":"Bridge Day","es":"Feriado Puente Turístico"}},"06-20":{"name":{"en":"National Flag Day","es":"Día de la Bandera"}},"substitutes 06-20 if tuesday then previous monday if thursday then next friday":{"name":{"en":"Bridge Day","es":"Feriado Puente Turístico"}},"07-09":{"_name":"Independence Day"},"3rd monday in August":{"name":{"en":"Anniversary of the death of General José de San Martín","es":"Día del Libertador José de San Martín"}},"10-12 if tuesday,wednesday then previous monday if thursday,friday,saturday,sunday then next monday":{"name":{"en":"Day of Respect for Cultural Diversity","es":"Día del Respeto a la Diversidad Cultural"}},"4th monday in November":{"disable":["2015-11-23"],"enable":["2015-11-27"],"name":{"en":"Day of National Sovereignty","es":"Día de la Soberanía nacional"}},"12-08":{"_name":"12-08"},"substitutes 12-08 if tuesday then previous monday if thursday then next friday":{"name":{"en":"Bridge Day","es":"Feriado Puente Turístico"}},"12-24 12:00":{"_name":"12-24","type":"optional"},"substitutes 12-24 if tuesday then previous monday":{"name":{"en":"Bridge Day","es":"Feriado Puente Turístico"}},"12-25":{"_name":"12-25"},"substitutes 12-25 if thursday then next friday":{"name":{"en":"Bridge Day","es":"Feriado Puente Turístico"}},"12-31 12:00":{"_name":"12-31","type":"optional"}}},"AS":{"names":{"en":"American Samoa"},"dayoff":"sunday","zones":["Pacific/Pago_Pago"],"langs":["en"],"_days":["US"],"days":{"3rd monday in February":{"name":{"en":"Washington\'s Birthday"}},"04-15 if friday then next monday if saturday,sunday then next tuesday":false,"04-17 and if sunday then next monday":{"name":{"en":"American Samoa Flag Day"},"substitute":true},"07-16":{"name":{"en":"Manu\'a Cession Day"},"type":"optional","note":"Goverment offices closed"},"2nd sunday in October":{"name":{"en":"White Sunday"},"type":"observance","note":"christian"},"12-24 12:00":{"_name":"12-24","type":"bank"},"12-31 12:00":{"_name":"12-31","type":"bank"}}},"AT":{"names":{"de-at":"Österreich","en":"Austria"},"dayoff":"sunday","zones":["Europe/Vienna"],"langs":["de-at","de"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06"},"easter -2":{"_name":"easter -2","type":"optional"},"easter -1":{"_name":"easter -1","type":"observance"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"05-01":{"name":{"de-at":"Staatsfeiertag"}},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"10-26":{"_name":"National Holiday"},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-24 14:00 if sunday then 00:00":{"_name":"12-24","type":"bank"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12-31 14:00 if sunday then 00:00":{"_name":"12-31","type":"bank"}},"states":{"1":{"name":"Burgenland","days":{"11-11":{"name":{"de-at":"Martinstag"}}}},"2":{"names":{"de":"Kärnten","en":"Carinthia"},"days":{"03-19":{"_name":"03-19"},"10-10":{"name":{"de-at":"Tag der Volksabstimmung"}}}},"3":{"names":{"de":"Niederösterreich","en":"Lower Austria"},"days":{"11-15":{"name":{"de-at":"Leopold"}}}},"4":{"names":{"de":"Oberösterreich","en":"Upper Austria"},"days":{"05-04":{"name":{"de-at":"Florian"}}}},"5":{"names":{"de":"Land Salzburg","en":"Salzburg"},"days":{"09-24":{"name":{"de-at":"Rupert"}}}},"6":{"names":{"de":"Steiermark","en":"Styria"},"days":{"03-19":{"_name":"03-19"}}},"7":{"names":{"de":"Tirol","en":"Tyrol"},"days":{"03-19":{"_name":"03-19"}}},"8":{"name":"Vorarlberg","days":{"03-19":{"_name":"03-19"}}},"9":{"names":{"de":"Wien","en":"Vienna"},"days":{"11-15":{"name":{"de-at":"Leopold"}}}}}},"AU":{"names":{"en":"Australia"},"dayoff":"sunday","langs":["en"],"zones":["Australia/Sydney","Australia/Lord_Howe","Antarctica/Macquarie","Australia/Hobart","Australia/Currie","Australia/Melbourne","Australia/Broken_Hill","Australia/Brisbane","Australia/Lindeman","Australia/Adelaide","Australia/Darwin","Australia/Perth","Australia/Eucla"],"days":{"01-01 and if saturday,sunday then next monday":{"_name":"01-01"},"01-26 if saturday,sunday then next monday":{"substitute":true,"name":{"en":"Australia Day"}},"easter -2":{"_name":"easter -2"},"easter -1":{"_name":"easter -1"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"04-25":{"name":{"en":"Anzac Day"}},"12-25 and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"12-25"},"12-26 and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"12-26"}},"states":{"ACT":{"name":"Australian Capital Territory","zones":["Australia/Sydney"],"days":{"2nd monday in March":{"name":{"en":"Canberra Day"}},"04-25":false,"04-25 if sunday then next monday":{"substitute":true,"name":{"en":"Anzac Day"}},"2020-04-27":{"name":{"en":"Declared public holiday"},"type":"public"},"monday after 05-27":{"name":{"en":"Reconciliation Day"}},"2nd monday in June":{"name":{"en":"Queen\'s Birthday"}},"1st monday in October":{"name":{"en":"Labour Day"}}}},"NSW":{"name":"New South Wales","zones":["Australia/Sydney"],"days":{"2nd monday in June":{"name":{"en":"Queen\'s Birthday"}},"1st monday in August":{"name":{"en":"Bank Holiday"},"type":"bank"},"1st monday in October":{"name":{"en":"Labour Day"}}}},"NT":{"name":"Northern Territory","zones":["Australia/Darwin"],"days":{"easter":false,"04-25":false,"04-25 if sunday then next monday":{"substitute":true,"name":{"en":"Anzac Day"}},"1st monday in May":{"name":{"en":"May Day"}},"2nd monday in June":{"name":{"en":"Queen\'s Birthday"}},"1st monday in August":{"name":{"en":"Picnic Day"}},"1st monday in October":false,"12-24 19:00":{"_name":"12-24"},"12-25 and if saturday then next monday if sunday then next tuesday":false,"12-25 if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"12-25"},"12-26 and if saturday then next monday if sunday then next tuesday":false,"12-26 if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"12-26"},"12-31 19:00":{"_name":"12-31"}}},"QLD":{"name":"Queensland","zones":["Australia/Brisbane","Australia/Lindeman"],"days":{"04-25":false,"04-25 if sunday then next monday":{"substitute":true,"name":{"en":"Anzac Day"}},"1st monday in May":{"name":{"en":"Labour Day"}},"2nd monday in June":false,"1st monday in October":{"name":{"en":"Queen\'s Birthday"}},"12-24 18:00":{"_name":"12-24"}}},"SA":{"name":"South Australia","zones":["Australia/Adelaide"],"days":{"easter":false,"2nd monday in March":{"name":{"en":"Adelaide Cup Day"}},"2nd monday in June":{"name":{"en":"Queen\'s Birthday"}},"1st monday in October":{"name":{"en":"Labour Day"}},"12-24 19:00":{"_name":"12-24"},"12-25 and if saturday then next monday if sunday then next tuesday":false,"12-25 if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"12-25"},"12-26 and if saturday then next monday if sunday then next tuesday":false,"12-26 if saturday then next monday if sunday then next tuesday":{"substitute":true,"name":"Proclamation Day"},"12-31 19:00":{"_name":"12-31"}}},"TAS":{"name":"Tasmania","zones":["Australia/Hobart"],"days":{"01-01 and if saturday,sunday then next monday":false,"01-01 if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"01-01"},"2nd monday in March":{"name":{"en":"Eight Hours Day"}},"easter -1":false,"easter":false,"easter +2":{"name":"Easter Tuesday","type":"optional","note":"Public Service employees or contract dependent"},"2nd monday in June":{"name":{"en":"Queen\'s Birthday"}},"1st monday in October":false,"12-26 and if saturday then next monday if sunday then next tuesday":false,"12-26 if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"12-26"}}},"VIC":{"name":"Victoria","zones":["Australia/Melbourne"],"days":{"2nd monday in March":{"name":{"en":"Labour Day"}},"2nd monday in June":{"name":{"en":"Queen\'s Birthday"}},"1st monday in October":false,"1st friday before October":{"name":{"en":"AFL Grand Final Friday"},"note":"Date might differ as dependent on AFL schedule"},"1st tuesday in November":{"name":{"en":"Melbourne Cup"}}}},"WA":{"name":"Western Australia","zones":["Australia/Perth","Australia/Eucla"],"days":{"1st monday in March":{"name":{"en":"Labour Day"}},"easter -1":false,"easter":false,"04-25":false,"04-25 and if saturday,sunday then next monday":{"substitute":true,"name":{"en":"Anzac Day"}},"1st monday in June":{"name":{"en":"Western Australia Day"}},"2nd monday in June":false,"monday before October":{"name":{"en":"Queen\'s Birthday"},"note":"Might be on a different day; is proclaimed by Governor"},"1st monday in October":false}}}},"AW":{"names":{"pap":"Aruba","nl":"Aruba","en":"Aruba"},"dayoff":"sunday","zones":["America/Curacao"],"langs":["pap","nl"],"days":{"01-01":{"_name":"01-01"},"01-25":{"name":{"pap":"Dia di Betico","nl":"Herdenking G. F. Croes","en":"Betico Croes Day"}},"easter -48":{"_name":"easter -48"},"03-18 and if saturday then previous friday if sunday then next monday":{"substitute":true,"name":{"pap":"Dia di Himno y Bandera","nl":"Herdenking Vlag en Volkslied","en":"National Anthem and Flag Day"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"04-27":{"name":{"pap":"Aña di Rey","nl":"Koningsdag","en":"Kings Day"}},"05-01 if sunday then next monday":{"_name":"05-01"},"06-24":{"name":{"pap":"Dera Gai","nl":"Dera Gai","en":"Dera Gai"},"type":"observance"},"easter 39":{"_name":"easter 39"},"12-05":{"name":{"nl":"Sinterklaasavond","en":"St. Nicholas\' Eve"},"type":"observance"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"AX":{"names":{"sv":"Landskapet Åland","en":"Åland Islands"},"dayoff":"sunday","zones":["Europe/Helsinki"],"langs":["sv"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06"},"03-30":{"name":{"sv":"Ålands demilitariseringsdag","en":"Demilitarization Day"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49","type":"observance"},"06-09":{"name":{"sv":"Självstyrelsedagen","en":"Autonomy Day"}},"3rd friday after 06-01 12:00":{"name":{"sv":"Midsommarafton","en":"Midsummer Eve"}},"3rd saturday after 06-01":{"name":{"sv":"Midsommardagen","en":"Midsummer Day"}},"12-06":{"_name":"Independence Day"},"12-24 12:00":{"_name":"12-24","type":"bank"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12-31 12:00":{"_name":"12-31","type":"bank"}}},"AZ":{"names":{"az":"Azərbaycan Respublikası","en":"Azerbaijan"},"dayoff":"sunday","weekend":["saturday","sunday"],"zones":["Asia/Baku"],"langs":["az"],"days":{"01-01 and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"01-01"},"01-02 and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"01-01"},"01-20":{"name":{"az":"Qara Yanvar","en":"Martyrs\' Day"},"type":"observance"},"03-08 and if saturday,sunday then next monday":{"substitute":true,"_name":"03-08"},"03-20":{"name":{"az":"Novruz","en":"Spring Festival"},"active":[{"from":2011}]},"05-09 and if saturday,sunday then next monday":{"substitute":true,"name":{"az":"Faşizm üzərində qələbə günü","en":"Day of Victory over Fascism"}},"05-28 and if saturday,sunday then next monday":{"substitute":true,"name":{"az":"Respublika günü","en":"Republic Day"}},"06-15 and if saturday,sunday then next monday":{"substitute":true,"name":{"az":"Azərbaycan xalqının Milli Qurtuluş günü","en":"National Salvation Day"}},"06-26 and if saturday,sunday then next monday":{"substitute":true,"name":{"az":"Azərbaycan Respublikasının Silahlı Qüvvələri günü","en":"Azerbaijan Armed Forces Day"}},"10-18 and if saturday,sunday then next monday":{"substitute":true,"name":{"az":"Dövlət Müstəqilliyi günü","en":"Independence Day"}},"11-09 and if saturday,sunday then next monday":{"substitute":true,"name":{"az":"Dövlət Bayrağı günü","en":"Flag Day"}},"11-12":{"name":{"az":"Konstitusiya günü","en":"Constitution Day"}},"11-17":{"name":{"az":"Milli Dirçəliş günü","en":"National Revival Day"}},"12-31 and if saturday,sunday then next monday":{"substitute":true,"name":{"az":"Dünya azərbaycanlıların həmrəyliyi günü","en":"International Solidarity Day of Azerbaijanis"}},"1 Shawwal and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"1 Shawwal"},"2 Shawwal and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"1 Shawwal"},"10 Dhu al-Hijjah and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"10 Dhu al-Hijjah"},"11 Dhu al-Hijjah and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"10 Dhu al-Hijjah"}}},"BA":{"names":{"bs":"Bosna i Hercegovina","sr":"Боснa и Херцеговина","hr":"Bosna i Hercegovina","en":"Bosnia and Herzegovina"},"langs":["bs","sr","hr"],"zones":["Europe/Belgrade"],"dayoff":"sunday","days":{"01-01 and if sunday then next tuesday":{"_name":"01-01","substitute":true},"01-02 and if sunday then next monday":{"name":{"en":"2nd day of the New Year","bs":"Drugi dan Nove Godine"},"substitute":true},"05-01 and if sunday then next tuesday":{"_name":"05-01","substitute":true},"05-02 and if sunday then next monday":{"name":{"en":"2nd day of the Labour Day","bs":"Drugi dan Dana rada"},"substitute":true},"01-06":{"_name":"01-06"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"11-02":{"_name":"11-02"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"julian 01-01":{"_name":"julian 01-01"},"orthodox":{"_name":"orthodox"},"julian 08-15":{"_name":"08-15","note":"orthodox"},"julian 12-25":{"_name":"julian 12-25"},"1 Muharram":{"_name":"1 Muharram"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal"},"10 Dhu al-Hijjah P4D":{"_name":"10 Dhu al-Hijjah"},"1 Shawwal P3D":{"_name":"1 Shawwal"}},"states":{"BIH":{"name":"Federation of Bosnia and Herzegovina","days":{"03-01":{"_name":"Independence Day"},"11-25":{"name":{"en":"Statehood Day","bs":"Dan državnosti"}}},"regions":{"W":{"name":"Western Herzegovina","days":{"11-25":false}}}},"BRC":{"name":"Brčko District","days":{"03-08":{"name":{"en":"Day of the Establishment of the District"}}}},"SRP":{"name":"Republika Srpska","days":{"01-09":{"name":{"en":"Republic Day","bs":"Dan Republike"}},"05-09":{"name":{"en":"Victory Day","bs":"Dan pobjede"}},"11-21":{"name":{"en":"Dayton Agreement Day","bs":"Dan uspostave Opšteg okvirnog sporazuma za mir u Bosni i Hercegovini"}}}}}},"BB":{"names":{"en":"Barbados"},"dayoff":"sunday","langs":["en"],"zones":["America/Barbados"],"days":{"01-01":{"_name":"01-01"},"01-21":{"name":{"en":"Errol Barrow Day"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"04-28":{"name":{"en":"National Heroes Day"}},"05-01 if sunday then next monday":{"name":{"en":"May Day"}},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"08-01":{"name":{"en":"Emancipation Day"}},"1st monday in August":{"name":{"en":"Kadooment Day"}},"11-30":{"_name":"Independence Day"},"12-25":{"_name":"12-25"},"substitutes 12-25 if sunday then next tuesday":{"_name":"Public Holiday"},"12-26":{"_name":"12-26"},"substitutes 12-26 if sunday then next monday":{"_name":"Public Holiday"}}},"BD":{"names":{"bn":"গণপ্রজাতন্ত্রী বাংলাদেশ","en":"People\'s Republic of Bangladesh"},"langs":["bn"],"zones":["Asia/Dhaka"],"dayoff":"friday","weekend":["friday","saturday"],"days":{"bengali-revised 11-9":{"name":{"bn":"শহীদ দিবস","en":"Language Martyrs\' Day"}},"bengali-revised 12-3":{"name":{"bn":"মুজিব জয়ন","en":"Mujib\'s Birthday & Children\'s Day"}},"bengali-revised 12-12":{"name":{"bn":"স্বাধীনতা দিবস","en":"Independence Day"}},"bengali-revised 1-1":{"name":{"bn":"পহেলা বৈশাখ","en":"Bengali New Year\'s Day"}},"bengali-revised 1-18":{"_name":"05-01","name":{"bn":"মে দিবস","en":"May Day"}},"bengali-revised 4-31":{"name":{"bn":"জাতীয় শোক দিবস","en":"National Mourning Day"}},"bengali-revised 9-2":{"name":{"bn":"বিজয় দিবস","en":"Victory Day"}},"10 Muharram":{"_name":"10 Muharram"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal"},"1 Shawwal P3D":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah P3D":{"_name":"10 Dhu al-Hijjah"},"05-19":{"name":{"bn":"বুদ্ধ পূর্ণিমা","en":"Buddha\'s Birthday"},"enable":["2016-05-21","2017-05-10","2018-04-29","2019-05-19","2020-05-07"],"disable":["2016-05-19","2017-05-19","2018-05-19","2019-05-19","2020-05-19"]},"08-24":{"name":{"bn":"জন্মাষ্টমী","en":"Krishna Janmashtami"},"enable":["2016-08-25","2017-08-14","2018-09-02","2019-08-24","2020-08-11"],"disable":["2016-08-24","2017-08-24","2018-08-24","2019-08-24","2020-08-24"]},"10-08":{"name":{"bn":"দুর্গা পূজা","en":"Durga Puja"},"enable":["2016-10-11","2017-09-30","2018-10-19","2019-10-08","2020-10-25"],"disable":["2016-10-08","2017-10-08","2018-10-08","2019-10-08","2020-10-08"]},"bengali-revised 9-11":{"_name":"12-25"},"03-25":{"name":{"en":"Genocide Remembrance Day"},"type":"observance"},"11-21":{"name":{"en":"Armed Forces Day"},"type":"observance"},"12-14":{"name":{"en":"Martyred Intellectuals Day"},"type":"observance"}}},"BE":{"names":{"fr":"Belgique","nl":"België","de":"Belgien","en":"Belgium"},"dayoff":"sunday","zones":["Europe/Brussels"],"langs":["fr","nl","de"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06","name":{"de":"Erscheinung des Herrn"},"type":"observance"},"02-14":{"_name":"02-14","type":"observance"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"07-21":{"_name":"National Holiday"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"11-02":{"_name":"11-02","type":"observance"},"11-11":{"name":{"de":"Waffenstillstand","fr":"Armistice","nl":"Wapenstilstand"}},"11-15":{"name":{"nl":"Koningsdag","fr":"Fête du Roi","de":"Festtag des Königs"},"type":"observance"},"12-06":{"_name":"12-06","type":"observance"},"12-25":{"_name":"12-25"}},"states":{"BRU":{"name":"Bruxelles","langs":["fr","nl"],"days":{"05-08":{"name":{"nl":"Feest van de Iris","fr":"Fête de l\'Iris"}}}},"DE":{"name":"Deutschsprachige Gemeinschaft","langs":["de"],"days":{"11-15":{"name":{"de":"Tag der Deutschsprachigen Gemeinschaft","fr":"Jour de la Communauté Germanophone","nl":"Feestdag van de Duitstalige Gemeenschap"}}}},"VLG":{"name":"Vlaamse Gemeenschap","langs":["nl"],"days":{"07-11":{"name":{"de":"Festtag der Wallonischen Region","fr":"Fête de la Région wallonne","nl":"Feestdag van de Vlaamse Gemeenschap"}}}},"WAL":{"name":"Communauté française","langs":["fr"],"days":{"09-27":{"name":{"de":"Tag der Französischsprachigen Gemeinschaft","fr":"La fête de la communauté française","nl":"Feestdag van de Franse Gemeenschap"}}}}}},"BF":{"names":{"fr":"Burkina Faso","en":"Burkina Faso"},"langs":["fr"],"zones":["Africa/Abidjan"],"dayoff":"","days":{"01-01":{"_name":"01-01"},"01-03":{"name":{"fr":"Soulèvement populaire","en":"Anniversary of the 1966 Upper Voltan coup d\'état"}},"03-08":{"_name":"03-08"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49"},"05-01":{"_name":"05-01"},"08-05":{"_name":"Independence Day"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-11":{"name":{"fr":"Fête nationale","en":"Proclamation of the Republic"}},"12-25":{"_name":"12-25"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}}},"BG":{"names":{"bg":"България","en":"Bulgaria"},"langs":["bg"],"zones":["Europe/Sofia"],"days":{"01-01":{"_name":"01-01"},"03-01":{"name":{"bg":"Баба Марта","en":"Granny March Day"},"type":"observance"},"03-03":{"name":{"bg":"Ден на Освобождението на България от Османската Империя","en":"Liberation Day"}},"03-08":{"_name":"03-08","type":"observance"},"orthodox -2":{"_name":"easter -2"},"orthodox":{"_name":"easter"},"orthodox 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"05-06":{"name":{"bg":"Гергьовден","en":"St. George\'s Day"}},"05-07":{"name":{"bg":"Ден на радиото и телевизията","en":"Radio and Television Day"},"type":"observance"},"05-24":{"name":{"bg":"Ден на азбуката, културата и просветата","en":"Bulgarian Education and Culture, and Slavonic Literature Day"}},"09-06":{"name":{"bg":"Ден на съединението","en":"Unification Day"}},"09-22":{"_name":"Independence Day"},"11-01":{"name":{"bg":"Ден на народните будители","en":"Revival Leaders\' Day"},"type":"school"},"12-24":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26","type":"observance"}}},"BH":{"names":{"ar":"مملكة البحرين","en":"Bahrain"},"langs":["ar"],"zones":["Asia/Qatar"],"dayoff":"","days":{"01-01":{"_name":"01-01"},"05-01":{"_name":"05-01","name":{"ar":"يوم العمال"}},"12-16":{"name":{"ar":"اليوم الوطني","en":"National Day"}},"12-17":{"name":{"ar":"يوم الجلوس","en":"Accession Day"}},"1 Muharram":{"_name":"1 Muharram"},"10 Muharram":{"_name":"10 Muharram"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal"},"1 Shawwal":{"_name":"1 Shawwal"},"9 Dhu al-Hijjah":{"_name":"9 Dhu al-Hijjah"},"10 Dhu al-Hijjah P3D":{"_name":"10 Dhu al-Hijjah"}}},"BI":{"names":{"rn":"Republika y\'Uburundi","fr":"République du Burundi","en":"Burundi"},"dayoff":"sunday","langs":["fr","en"],"zones":["Africa/Maputo"],"days":{"01-01":{"_name":"01-01"},"02-05":{"name":{"fr":"Jour de l\'Unité","en":"Unity Day"}},"04-06":{"name":{"fr":"Jour de Ntaryamira","en":"Ntaryamira Day"}},"05-01":{"_name":"05-01"},"easter 39":{"_name":"easter 39"},"07-01":{"_name":"Independence Day"},"08-15":{"_name":"08-15"},"10-13":{"name":{"fr":"Jour de Rwagasore","en":"Rwagasore Day"}},"10-21":{"name":{"fr":"Jour de Ndadaye","en":"Ndadaye Day"}},"11-01":{"_name":"11-01"},"12-25":{"_name":"12-25"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"},"2015-07-24":{"_name":"Public Holiday","name":{"fr":"Jour l\'élection des Sénateurs"}}}},"BJ":{"names":{"fr":"République du Bénin","en":"Benin"},"langs":["fr"],"zones":["Africa/Lagos"],"dayoff":"","days":{"01-01":{"_name":"01-01"},"01-10":{"name":{"fr":"Fête du Vodoun"}},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49","type":"observance"},"easter 50":{"_name":"easter 50"},"05-01":{"_name":"05-01"},"08-01":{"_name":"Independence Day","name":{"fr":"Fête Nationale"}},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-25":{"_name":"12-25"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal"}}},"BL":{"names":{"fr":"St. Barthélemy","en":"St. Barths"},"langs":["fr"],"zones":["America/Port_of_Spain"],"days":{"01-01":{"_name":"01-01"},"easter -48":{"_name":"easter -48","type":"observance"},"easter -47":{"_name":"easter -47","type":"Observance"},"easter -46":{"_name":"easter -46","type":"observance"},"easter -21":{"name":{"fr":"Mi-Carême","en":"Laetare Sunday"},"type":"observance"},"easter -2":{"_name":"easter -2","type":"bank"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"easter 39":{"_name":"easter 39"},"05-08":{"name":{"en":"Victory Day","fr":"Fête de la Victoire 1945"}},"easter 49":{"_name":"easter 49","type":"observance"},"easter 50":{"_name":"easter 50"},"07-14":{"name":{"fr":"Fête Nationale","en":"National Day"}},"08-15":{"_name":"08-15"},"08-24":{"name":{"fr":"Fête de Saint Barthélemy","en":"Saint Barth"},"type":"observance"},"10-09":{"_name":"Abolition of Slavery","type":"observance"},"11-01":{"_name":"11-01"},"11-11":{"name":{"en":"Armistice Day","fr":"Armistice de 1918"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"BM":{"names":{"en":"Bermuda"},"langs":["en"],"zones":["Atlantic/Bermuda"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"substitutes 01-01 if saturday, sunday then next monday":{"_name":"01-01","substitute":true,"type":"bank","note":"Goverment offices close"},"easter -2":{"_name":"easter -2"},"friday before 06-01":{"name":{"en":"Bermuda Day"}},"3nd monday in June":{"name":{"en":"National Heroes Day"}},"thursday before 08-04":{"name":{"en":"Emancipation Day"}},"friday before 08-05":{"name":{"en":"Somers\' Day"}},"monday after 09-01":{"name":{"en":"Labour Day"}},"11-11":{"name":{"en":"Remembrance Day"}},"substitutes 11-11 if saturday, sunday then next monday":{"name":{"en":"Remembrance Day"},"substitute":true,"type":"bank","note":"Goverment offices close"},"12-25":{"_name":"12-25"},"substitutes 12-25 if saturday then next monday if sunday then next tuesday":{"_name":"12-25","substitute":true,"type":"bank","note":"Goverment offices close"},"12-26":{"_name":"12-26"},"substitutes 12-26 if saturday then next monday if sunday then next tuesday":{"_name":"12-26","substitute":true,"type":"bank","note":"Goverment offices close"}}},"BN":{"names":{"ms":"Negara Brunei Darussalam","en":"Brunei"},"langs":["ms","en"],"zones":["Asia/Brunei"],"dayoff":"","days":{"01-01":{"_name":"01-01","name":{"ms":"Awal Tahun Masihi"}},"02-23":{"name":{"en":"National Day","ms":"Hari Kebangsaan"}},"03-31":{"name":{"en":"Armed Forces Day","ms":"Hari Angkatan Bersenjata Diraja Brunei"}},"07-15":{"name":{"en":"Sultan\'s Birthday","ms":"Hari Keputeraan KDYMM Sultan Brunei"}},"1 Ramadan":{"_name":"1 Ramadan"},"17 Ramadan":{"name":{"en":"Nuzul Al-Quran","ms":"Hari Nuzul Al-Quran"}},"1 Shawwal P3D":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"},"1 Muharram":{"_name":"1 Muharram"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal"},"27 Rajab":{"_name":"27 Rajab"},"12-25":{"_name":"12-25"},"chinese 01-0-01":{"name":{"en":"Chinese New Year","ms":"Tahun Baru Cina"}}}},"BO":{"names":{"es":"Bolivia","en":"Bolivia"},"dayoff":"sunday","langs":["es","qu","ay"],"zones":["America/La_Paz"],"days":{"01-01":{"_name":"01-01"},"02-02":{"name":{"en":"Feast of the Virgin of Candelaria","qu":"Mamacha Candelaria","es":"Fiesta de la Virgen de Candelaria"}},"easter -48":{"name":{"en":"Carnival","es":"Carnaval"}},"easter -47":{"_name":"easter -47"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 39":{"_name":"easter 39"},"06-21":{"name":{"en":"Andean New Year","ay":"Willkakuti","es":"Año Nuevo Andino"}},"08-02":{"name":{"en":"Agrarian Reform Day","es":"Día de la Revolución Agraria, Productiva y Comunitaria"}},"08-06":{"_name":"Independence Day","name":{"es":"Día de la Patria"}},"11-02":{"_name":"11-02"},"12-25":{"_name":"12-25"}}},"BQ":{"names":{"nl":"Caribisch Nederland","en":"Caribbean Netherlands"},"dayoff":"sunday","zones":["America/Curacao"],"langs":["nl","en","pap"],"days":{"01-01":{"_name":"01-01"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"04-27":{"name":{"pap":"Aña di Rey","nl":"Koningsdag","en":"Kings Day"}},"05-01 if sunday then next monday":{"substitute":true,"_name":"05-01"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"3rd sunday in June":{"_name":"Fathers Day","type":"observance"},"easter 39":{"_name":"easter 39"},"12-05":{"name":{"nl":"Sinterklaasavond","en":"St. Nicholas\' Eve"},"type":"observance"},"12-15":{"name":{"pap":"Dia di Reino","nl":"Koninkrijksdag","en":"Kingdom Day"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}},"regions":{"BO":{"name":"Bonaire","days":{"easter -48":{"_name":"easter -48","name":{"en":"Carnival Monday"}},"04-30":{"name":{"en":"Rincon Day","pap":"Dia di Rincon"}},"09-06":{"name":{"nl":"Boneiru Dag","en":"Bonaire Day","pap":"Dia di Boneiru"}}}},"SA":{"name":"Saba","days":{"1st monday in August":{"_name":"easter -48","name":{"en":"Carnival Monday"}},"1st friday in December":{"name":{"en":"Saba Day"}}}},"SE":{"name":"Sint Eustatius","days":{"08-01":{"name":{"en":"Emancipation Day"}},"11-16":{"name":{"en":"Statia Day"}}}}}},"BR":{"names":{"pt":"Brasil","en":"Brazil"},"dayoff":"sunday","langs":["pt"],"zones":["America/Sao_Paulo","America/Noronha","America/Belem","America/Fortaleza","America/Recife","America/Araguaina","America/Maceio","America/Bahia","America/Campo_Grande","America/Cuiaba","America/Santarem","America/Porto_Velho","America/Boa_Vista","America/Manaus","America/Eirunepe","America/Rio_Branco"],"days":{"01-01":{"_name":"01-01"},"04-21":{"name":{"pt":"Dia de Tiradentes","en":"Tiradentes\' Day"}},"easter -50 PT110H":{"name":{"pt":"Carnaval","en":"Carnival"},"type":"optional"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"05-01":{"_name":"05-01"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 60":{"_name":"easter 60","type":"optional"},"06-12":{"name":{"pt":"Dia dos Namorados","en":"Lovers\' Day"},"type":"observance"},"2nd sunday in August":{"_name":"Fathers Day","type":"observance"},"09-07":{"_name":"Independence Day"},"10-12":{"name":{"pt":"Nossa Senhora Aparecida","en":"Our Lady of Aparecida"}},"1st sunday in October in even years":{"name":{"pt":"Dia de Eleição","en":"Election Day"}},"1st sunday before 11-01 in even years":{"name":{"pt":"Dia de Eleição","en":"Election Day"}},"11-02":{"_name":"11-02"},"11-15":{"name":{"pt":"Proclamação da República","en":"Republic Day"}},"12-24 14:00":{"_name":"12-24","type":"optional"},"12-25":{"_name":"12-25"},"12-31 14:00":{"_name":"12-31","type":"optional"}},"states":{"AC":{"name":"Acre","zones":["America/Rio_Branco"],"days":{"01-12":{"name":{"pt":"Dia do evangélico"},"active":[{"from":"2004-01-29T00:00:00.000Z"}]},"03-08":{"name":{"pt":"Alusivo ao Dia Internacional da Mulher"},"active":[{"from":"2001-09-14T00:00:00.000Z"}]},"06-15":{"name":{"pt":"Aniversário do estado"},"active":[{"from":"1964-09-02T00:00:00.000Z"}]},"09-05":{"name":{"pt":"Dia da Amazônia"},"active":[{"from":"2004-01-05T00:00:00.000Z"}]},"11-17":{"name":{"pt":"Assinatura do Tratado de Petrópolis"},"type":"optional","active":[{"from":"2012-02-21T00:00:00.000Z"}]}}},"AL":{"name":"Alagoas","zones":["America/Maceio"],"days":{"06-24":{"name":{"pt":"São João"},"active":[{"from":"1993-07-07T00:00:00.000Z"}]},"06-29":{"name":{"pt":"São Pedro"},"active":[{"from":"1993-07-07T00:00:00.000Z"}]},"09-16":{"name":{"pt":"Emancipação política"}},"11-20":{"name":{"pt":"Morte de Zumbi dos Palmares"},"active":[{"from":"1995-08-01T00:00:00.000Z"}]}}},"AM":{"name":"Amazonas","zones":["America/Manaus"],"days":{"09-05":{"name":{"pt":"Elevação do Amazonas à categoria de província"},"active":[{"from":"1977-12-21T00:00:00.000Z"}]},"11-20":{"name":{"pt":"Dia da Consciência Negra"},"active":[{"from":"2010-07-08T00:00:00.000Z"}]}}},"AP":{"name":"Amapá","zones":["America/Belem"],"days":{"03-19":{"name":{"pt":"Dia de São José"},"note":"Santo padroeiro do Estado do Amapá","active":[{"from":"2002-04-16T00:00:00.000Z"}]},"09-13":{"name":{"pt":"Criação do Território Federal"}}}},"BA":{"name":"Bahia","zones":["America/Bahia"],"days":{"07-02":{"name":{"pt":"Independência da Bahia"}}}},"CE":{"name":"Ceará","zones":["America/Fortaleza"],"days":{"03-25":{"name":{"pt":"Data magna do estado"},"active":[{"from":"2011-12-01T00:00:00.000Z"}]}}},"DF":{"name":"Distrito Federal","zones":["America/Sao_Paulo"],"days":{"04-21":{"name":{"pt":"Fundação de Brasília"}},"11-30":{"name":{"pt":"Dia do Evangélico"},"type":"public","active":[{"from":"1995-12-04T00:00:00.000Z"}]}}},"MA":{"name":"Maranhão","zones":["America/Belem"],"days":{"07-28":{"name":{"pt":"Adesão do Maranhão à independência do Brasil"},"active":[{"from":"1964-10-02T00:00:00.000Z"}]}}},"MG":{"name":"Minas Gerais","zones":["America/Sao_Paulo"],"days":{"04-21":{"name":{"pt":"Data magna do estado"}}},"regions":{"BH":{"name":"Belo Horizonte","days":{"08-15":{"_name":"08-15","name":{"pt":"Assunção de Nossa Senhora"},"type":"public"},"12-08":{"_name":"12-08","type":"public"}}}}},"MS":{"name":"Mato Grosso do Sul","zones":["America/Campo_Grande"],"days":{"10-11":{"name":{"pt":"Criação do estado"},"active":[{"from":"1979-10-29T00:00:00.000Z"}]}}},"MT":{"name":"Mato Grosso","zones":["America/Cuiaba"],"days":{"11-20":{"name":{"pt":"Dia da Consciência Negra"},"active":[{"from":"2002-12-27T00:00:00.000Z"}]}}},"PA":{"name":"Pará","zones":["America/Santarem"],"days":{"08-15":{"name":{"pt":"Adesão do Grão-Pará à independência do Brasil"},"active":[{"from":"1996-09-10T00:00:00.000Z"}]}}},"PB":{"name":"Paraíba","zones":["America/Recife"],"days":{"07-26":{"name":{"pt":"Homenagem à memória do ex-presidente João Pessoa"}},"08-05":{"name":{"pt":"Nossa Senhora das Neves"},"note":"Fundação do Estado em 1585 e dia da sua padroeira","active":[{"from":"1967-08-30T00:00:00.000Z"}]}}},"PE":{"name":"Pernambuco","zones":["America/Recife"],"days":{"1st sunday in March":{"name":{"pt":"Revolução Pernambucana de 1817"},"active":[{"from":"2009-07-02T00:00:00.000Z"}]}},"regions":{"RE":{"name":"Recife","days":{"06-24":{"name":{"pt":"São João","en":"Saint John\'s Day"},"type":"public"},"07-16":{"name":{"pt":"Nossa Senhora do Carmo"},"type":"public"},"12-08":{"_name":"12-08","name":{"pt":"Nossa Senhora da Conceição"},"type":"public"}}}}},"PI":{"name":"Piauí","zones":["America/Fortaleza"],"days":{"10-19":{"name":{"pt":"Dia do Piauí"},"active":[{"from":"1937-01-01T00:00:00.000Z"}]}}},"PR":{"name":"Paraná","zones":["America/Sao_Paulo"],"days":{"12-19":{"name":{"pt":"Emancipação política do estado do Paraná"},"active":[{"from":"1962-12-18T00:00:00.000Z"}]}},"regions":{"CU":{"name":"Curitiba","days":{"09-08":{"name":{"pt":"Nossa Senhora da Luz dos Pinhais"},"type":"public"}}}}},"RJ":{"name":"Rio de Janeiro","zones":["America/Sao_Paulo"],"days":{"easter -47":{"name":{"pt":"Carnaval"},"active":[{"from":"2008-05-14T00:00:00.000Z"}]},"04-23":{"name":{"pt":"Dia de São Jorge"},"active":[{"from":"2008-03-05T00:00:00.000Z"}]},"3rd tuesday in October":{"name":{"pt":"Dia do Comércio"},"type":"observance","note":"feriado para os comerciantes e trabalhadores da construção civil"},"11-20":{"name":{"pt":"Dia da Consciência Negra"},"active":[{"from":"2002-11-11T00:00:00.000Z"}]}}},"RN":{"name":"Rio Grande do Norte","zones":["America/Recife"],"days":{"10-03":{"name":{"pt":"Mártires de Cunhaú e Uruaçu"},"active":[{"from":"2006-12-06T00:00:00.000Z"}]}}},"RO":{"name":"Rondônia","zones":["America/Porto_Velho"],"days":{"01-04":{"name":{"pt":"Criação do estado"},"active":[{"from":"2010-04-22T00:00:00.000Z"}]},"06-18":{"name":{"pt":"Dia do evangélico"},"active":[{"from":"2001-12-20T00:00:00.000Z"}]}}},"RR":{"name":"Roraima","zones":["America/Boa_Vista"],"days":{"10-05":{"name":{"pt":"Criação do estado"}}}},"RS":{"name":"Rio Grande do Sul","zones":["America/Sao_Paulo"],"days":{"09-20":{"name":{"pt":"Proclamação da República Rio-Grandense"}}}},"SC":{"name":"Santa Catarina","zones":["America/Sao_Paulo"],"days":{"08-11":{"name":{"pt":"Dia de Santa Catarina"},"active":[{"from":"2004-01-22T00:00:00.000Z","to":"2005-07-15T00:00:00.000Z"}]},"08-11 if monday,tuesday,wednesday,thursday,friday,saturday then next sunday":{"name":{"pt":"Dia de Santa Catarina"},"active":[{"from":"2005-07-15T00:00:00.000Z"}]},"11-25":{"name":{"pt":"Dia de Santa Catarina de Alexandria"},"active":[{"from":"1996-12-26T00:00:00.000Z","to":"2005-07-15T00:00:00.000Z"}]},"11-25 if monday,tuesday,wednesday,thursday,friday,saturday then next sunday":{"name":{"pt":"Dia de Santa Catarina de Alexandria"},"active":[{"from":"2005-07-15T00:00:00.000Z"}]}}},"SE":{"name":"Sergipe","zones":["America/Recife"],"days":{"07-08":{"name":{"pt":"Emancipação política de Sergipe"}}}},"SP":{"name":"São Paulo","zones":["America/Sao_Paulo"],"days":{"07-09":{"name":{"pt":"Revolução Constitucionalista"},"active":[{"from":"1997-03-05T00:00:00.000Z"}]}},"regions":{"SP":{"name":"São Paulo","days":{"01-25":{"name":{"pt":"Aniversário da Cidade","en":"City Birthday"},"type":"public"}}}}},"TO":{"name":"Tocantins","zones":["America/Araguaina"],"days":{"10-05":{"name":{"pt":"Criação do estado"},"active":[{"from":"1989-11-17T00:00:00.000Z"}]},"03-18":{"name":{"pt":"Autonomia do Estado"},"active":[{"from":"1998-03-17T00:00:00.000Z"}]},"09-08":{"name":{"pt":"Nossa Senhora da Natividade"},"note":"Padroeira do Estado","active":[{"from":"1993-12-28T00:00:00.000Z"}]}}}}},"BS":{"names":{"en":"Bahamas"},"dayoff":"sunday","langs":["en"],"zones":["America/Nassau"],"days":{"01-01":{"_name":"01-01"},"01-10 and if saturday,sunday then next monday":{"substitute":true,"name":{"en":"Majority Rule Day"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 49":{"_name":"easter 49","type":"observance"},"easter 50":{"_name":"easter 50"},"1st friday in June":{"_name":"05-01","name":{"en":"Randol Fawkes Labour Day"}},"07-10 and if saturday,sunday then next monday":{"substitute":true,"_name":"Independence Day"},"1st monday in August":{"name":{"en":"Emancipation Day"}},"10-12 and if saturday,sunday then next monday":{"substitute":true,"name":{"en":"National Heroes\' Day"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"BW":{"names":{"en":"Botswana"},"dayoff":"sunday","langs":["en"],"zones":["Africa/Maputo"],"days":{"01-01":{"_name":"01-01","note":"except mining industy"},"01-02":{"name":{"en":"New Year\'s Holiday"},"note":"except mining industy"},"substitutes 01-02 if monday then next tuesday":{"name":{"en":"Public Holiday"},"note":"except mining industy"},"easter -2":{"_name":"easter -2"},"easter -1":{"_name":"easter -1","note":"except mining industy"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1","note":"except mining industy"},"easter 39":{"_name":"easter 39","note":"except mining industy"},"05-01":{"_name":"05-01","note":"except mining industy"},"substitutes 05-01 if sunday then next monday":{"name":{"en":"Public Holiday"},"note":"except mining industy"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"07-01":{"name":{"en":"Sir Seretse Khama Day"},"note":"except mining industy"},"substitutes 07-01 if sunday then next monday":{"name":{"en":"Public Holiday"},"note":"except mining industy"},"3rd monday in July":{"name":{"en":"President’s Day"},"note":"except mining industy"},"tuesday after 3rd monday in July":{"name":{"en":"President’s Day Holiday"},"note":"except mining industy"},"09-30":{"name":{"en":"Botswana Day"}},"substitutes 09-30 if saturday,sunday then next monday":{"name":{"en":"Public Holiday"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26","name":{"en":"Family Day"},"note":"except mining industy"},"substitutes 12-26 if monday then next tuesday":{"name":{"en":"Public Holiday"}}}},"BY":{"names":{"be":"Рэспубліка Беларусь","ru":"Республика Беларусь","en":"Belarus"},"zones":["Europe/Minsk"],"langs":["be","ru"],"days":{"01-01":{"_name":"01-01"},"julian 12-25":{"_name":"12-25","name":{"be":"Каляды праваслаўныя"}},"easter":{"_name":"easter","name":{"be":"Вялiкдзень каталiцкi"},"type":"observance"},"orthodox":{"name":{"en":"Orthodox Easter","be":"Вялiкдзень праваслаўны"},"type":"observance"},"orthodox +9":{"name":{"en":"Commemoration Day","be":"Радунiца"}},"03-08":{"_name":"03-08"},"05-01":{"_name":"05-01"},"05-09":{"name":{"en":"Victory Day","be":"Дзень Перамогi"}},"07-03":{"_name":"Independence Day","active":[{"from":1996}]},"11-07":{"name":{"en":"October Revolution Day","be":"Дзень Кастрычніцкай рэвалюцыі"}},"12-25":{"_name":"12-25","name":{"be":"Каляды каталiцкiя"}}}},"BZ":{"names":{"en":"Belize"},"dayoff":"sunday","langs":["en"],"zones":["America/Belize"],"days":{"01-01":{"_name":"01-01"},"03-09 if friday,saturday,sunday then next monday if tuesday,wednesday,thursday then previous monday":{"name":{"en":"Baron Bliss Day"}},"easter -2":{"_name":"easter -2"},"easter -1":{"_name":"easter -1"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01 if sunday then next monday":{"_name":"05-01"},"05-24 if friday,saturday,sunday then next monday if tuesday,wednesday,thursday then previous monday":{"name":{"en":"Commonwealth Day, Sovereign\'s Day"}},"09-10 if sunday then next monday":{"name":{"en":"Saint George\'s Caye Day, National Day"}},"09-21 if sunday then next monday":{"_name":"Independence Day"},"10-12 if friday,saturday,sunday then next monday if tuesday,wednesday,thursday then previous monday":{"name":{"en":"Day of the Americas"}},"11-19 if sunday then next monday":{"name":{"en":"Garifuna Settlement Day"}},"12-25 and if sunday then next tuesday":{"_name":"12-25","substitute":true},"12-26 and if sunday then next monday":{"_name":"12-26","substitute":true}}},"CA":{"names":{"en":"Canada","fr":"Canada"},"zones":["America/Toronto","America/St_Johns","America/Halifax","America/Glace_Bay","America/Moncton","America/Goose_Bay","America/Blanc-Sablon","America/Nipigon","America/Thunder_Bay","America/Iqaluit","America/Pangnirtung","America/Resolute","America/Atikokan","America/Rankin_Inlet","America/Winnipeg","America/Rainy_River","America/Regina","America/Swift_Current","America/Edmonton","America/Cambridge_Bay","America/Yellowknife","America/Inuvik","America/Creston","America/Dawson_Creek","America/Fort_Nelson","America/Vancouver","America/Whitehorse","America/Dawson"],"langs":["en","fr"],"days":{"01-01":{"_name":"01-01"},"02-02":{"name":{"en":"Groundhog Day","fr":"Jour de la marmotte"},"type":"observance"},"02-14":{"_name":"02-14","type":"observance"},"03-17":{"name":{"en":"St. Patrick’s Day","fr":"Fête de la Saint-Patrick"},"type":"observance"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"2nd sunday after 05-01":{"_name":"Mothers Day","type":"observance"},"monday before 05-25":{"name":{"en":"Victoria Day","fr":"Fête de la Reine"}},"3rd sunday after 06-01":{"_name":"Fathers Day","type":"observance"},"07-01":{"name":{"en":"Canada Day","fr":"Fête du Canada"}},"monday after 08-01":{"name":{"en":"Civic Holiday","fr":"Premier lundi d’août"}},"1st monday in September":{"_name":"05-01"},"2nd monday after 10-01":{"name":{"en":"Thanksgiving","fr":"Action de grâce"}},"10-31 18:00":{"name":{"en":"Halloween","fr":"l\'Halloween"},"type":"observance"},"11-11":{"name":{"en":"Remembrance Day","fr":"Jour du Souvenir"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}},"states":{"AB":{"name":"Alberta","zones":["America/Edmonton"],"days":{"3rd monday after 02-01":{"name":{"en":"Family Day","fr":"Fête de la famille"}},"easter 1":{"_name":"easter 1","type":"optional"},"monday after 08-01":{"name":{"en":"Heritage Day","fr":"Fête du patrimoine"},"type":"optional"}}},"BC":{"name":"British Columbia","zones":["America/Vancouver","America/Edmonton","America/Creston","America/Dawson_Creek"],"days":{"2nd monday after 02-01":{"name":{"en":"Family Day","fr":"Fête de la famille"},"active":[{"to":2019}]},"3rd monday after 02-01":{"name":{"en":"Family Day","fr":"Fête de la famille"},"active":[{"from":2019}]}}},"MB":{"name":"Manitoba","zones":["America/Winnipeg"],"days":{"3rd monday after 02-01":{"name":{"en":"Louis Riel Day","fr":"Journée Louis Riel"}}}},"NB":{"name":"New Brunswick","zones":["America/Moncton"],"days":{"monday after 08-01":{"name":{"en":"New Brunswick Day","fr":"Jour de Nouveau Brunswick"}}}},"NL":{"name":"Newfoundland and Labrador","zones":["America/St_Johns","America/Goose_Bay"],"days":{"03-17":{"name":{"en":"Saint Patrick\'s Day","fr":"Jour de la Saint-Patrick"},"type":"optional"},"04-23":{"name":{"en":"Saint George\'s Day","fr":"Jour de St. George"},"type":"optional"},"06-24":{"name":{"en":"Discovery Day","fr":"Journée découverte"},"type":"optional"},"07-12":{"name":{"en":"Orangemen\'s Day","fr":"Fête des orangistes"},"type":"optional"},"11-11":{"name":{"en":"Armistice Day","fr":"Jour de l\'Armistice"}}}},"NS":{"name":"Nova Scotia","zones":["America/Halifax","America/Moncton"],"days":{"3rd monday after 02-01":{"name":{"en":"Heritage Day","fr":"Fête du Patrimoine"}},"monday after 08-01":{"name":{"en":"Natal Day","fr":"Jour de la Fondation"}}}},"NT":{"name":"Northwest Territories","zones":["America/Yellowknife","America/Inuvik"],"days":{"06-21":{"name":{"en":"National Aboriginal Day","fr":"Journée nationale des Autochthones"}}}},"NU":{"name":"Nunavut","zones":["America/Iqaluit","America/Pangnirtung","America/Resolute","America/Rankin_Inlet","America/Atikokan","America/Cambridge_Bay"],"days":{"07-09":{"name":{"en":"Nunavut Day"},"type":"bank"}}},"ON":{"name":"Ontario","zones":["America/Toronto","America/Nipigon","America/Thunder_Bay","America/Atikokan","America/Rainy_River","America/Winnipeg"],"days":{"3rd monday after 02-01":{"name":{"en":"Family Day","fr":"Fête de la famille"}},"easter 1":{"_name":"easter 1"}}},"PE":{"name":"Prince Edward Island","days":{"3rd monday after 02-01":{"name":{"en":"Islander Day","fr":"Fête des Insulaires"}},"easter 1":{"_name":"easter 1","type":"optional"},"3rd friday after 08-01":{"name":{"en":"Gold Cup Parade Day","fr":"Défilé de la Coupe d\'or"}}}},"QC":{"name":"Quebec","zones":["America/Blanc-Sablon","America/Toronto","America/Nipigon"],"days":{"monday before 05-25":{"name":{"en":"National Patriots\' Day","fr":"Journée nationale des patriotes"}},"06-24":{"name":{"en":"National Holiday","fr":"Fête nationale du Québec"}}}},"SK":{"name":"Saskatchewan","zones":["America/Regina","America/Swift_Current","America/Edmonton"],"days":{"3rd monday after 02-01":{"name":{"en":"Family Day","fr":"Fête de la famille"}},"3rd monday after 08-01":{"name":{"en":"Saskatchewan Day"}}}},"YT":{"name":"Yukon","zones":["America/Whitehorse","America/Dawson"],"days":{"easter 1":{"_name":"easter 1"},"3rd monday after 08-01":{"name":{"en":"Discovery Day","fr":"Jour de la Découverte"}}}}}},"CC":{"names":{"en":"Cocos (Keeling) Islands"},"langs":["en"],"zones":["Indian/Cocos"],"dayoff":"sunday","days":{"chinese 01-0-01 and if sunday then next tuesday if saturday then next monday":{"name":{"en":"Chinese New Year"},"substitute":true},"chinese 01-0-02 and if sunday then next tuesday if saturday then next monday":{"name":{"en":"Chinese New Year (2nd Day)"},"substitute":true},"01-01":{"_name":"01-01"},"01-26":{"name":{"en":"Australia Day"}},"03-20":{"name":{"en":"Labour Day"}},"easter 1":{"_name":"easter 1"},"04-06":{"name":{"en":"Self Determination Day"}},"04-25":{"name":{"en":"Anzac Day"}},"12-25 and if sunday then next tuesday":{"_name":"12-25","substitute":true},"12-26 and if sunday then next monday":{"_name":"12-26","substitute":true},"1 Muharram and if sunday then next monday":{"substitute":true,"_name":"1 Muharram"},"1 Shawwal and if sunday then next monday":{"substitute":true,"_name":"1 Shawwal","name":{"en":"Hari Raya Puasa"}},"10 Dhu al-Hijjah and if sunday then next monday":{"substitute":true,"_name":"10 Dhu al-Hijjah","name":{"en":"Hari Raya Haji"}},"12 Rabi al-awwal and if sunday then next monday":{"substitute":true,"_name":"12 Rabi al-awwal","name":{"en":"Hari Maulaud Nabi"}}}},"CD":{"names":{"fr":"République démocratique du Congo","en":"Democratic Republic of the Congo"},"dayoff":"sunday","langs":["fr"],"zones":["Africa/Maputo","Africa/Lagos"],"days":{"01-01 and if sunday then next monday":{"substitute":true,"_name":"01-01"},"01-04 and if sunday then next monday":{"substitute":true,"name":{"fr":"Martyrs de l\'Indépendance","en":"Day of the Martyrs"}},"01-16 and if sunday then next tuesday":{"substitute":true,"name":{"fr":"Journée du Héro National Laurent Désiré Kabila","en":"Anniversary of President Laurent Kabila"}},"01-17 and if sunday then next monday":{"substitute":true,"name":{"fr":"Journée du Héro National Patrice Emery Lumumba","en":"Anniversary of Prime Minister Patrice Emery Lumumba"}},"05-01 and if sunday then next monday":{"substitute":true,"_name":"05-01"},"05-17 and if sunday then next monday":{"substitute":true,"name":{"fr":"Journée de la Révolution et des Forces Armées","en":"Liberation Day"}},"06-30 and if sunday then next monday":{"substitute":true,"_name":"Independence Day","name":{"fr":"Anniversaire de Indépendance"}},"08-01 and if sunday then next monday":{"substitute":true,"name":{"fr":"Fête des parents","en":"Parents\' Day"}},"12-25 and if sunday then next monday":{"substitute":true,"_name":"12-25"},"2016-01-15":{"_name":"Public Holiday"}}},"CF":{"names":{"fr":"République centrafricaine","sg":"Ködörösêse tî Bêafrîka","en":"Central African Republic"},"dayoff":"sunday","langs":["fr","sg"],"zones":["Africa/Lagos"],"days":{"01-01":{"_name":"01-01"},"03-29":{"name":{"fr":"Décès du Fondateur Barthélémy Boganda","en":"Boganda Day"}},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"easter 39":{"_name":"easter 39"},"easter 50":{"_name":"easter 50"},"06-30":{"name":{"fr":"Journée de prière","en":"General Prayer Day"}},"08-13":{"_name":"Independence Day"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-01":{"name":{"fr":"Jour de la République","en":"Republic Day"}},"12-25":{"_name":"12-25"}}},"CG":{"names":{"fr":"République du Congo","en":"Republic of the Congo"},"dayoff":"sunday","langs":["fr","en"],"zones":["Africa/Lagos"],"days":{"01-01":{"_name":"01-01"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"06-10":{"name":{"fr":"Fête de la commémoration de la conférence nationale souveraine"}},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"11-28":{"name":{"fr":"Journée nationale de la République"}},"12-25":{"_name":"12-25"}}},"CH":{"names":{"de":"Schweiz","fr":"Suisse","it":"Svizzera","en":"Switzerland"},"dayoff":"sunday","langs":["de-ch","de","fr","it"],"zones":["Europe/Zurich"],"days":{"01-01":{"_name":"01-01"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"easter 39":{"_name":"easter 39","name":{"de":"Auffahrt"}},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"1st sunday in June":{"name":{"de":"Vätertag","fr":"Fête des pères"},"type":"observance","active":[{"from":"2009-01-01"}]},"08-01":{"name":{"de":"Bundesfeiertag","fr":"Fête nationnale","it":"Giorno festivo federale"}},"3 sunday after 09-01":{"name":{"de":"Eidg. Dank-, Buss- und Bettag","fr":"Jeûne fédéral","it":"Digiuno federale","en":"Federal Day of Thanksgiving, Repentance and Prayer"}},"12-25":{"_name":"12-25","name":{"de":"Weihnachtstag"}},"12-26":{"_name":"12-26","name":{"de":"Stephanstag","fr":"Saint-Etienne"}}},"states":{"ZH":{"names":{"de":"Kanton Zürich","fr":"Canton de Zurich","it":"Canton Zurigo","en":"Canton of Zürich"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"optional"},"05-01":{"_name":"05-01"},"easter 50":{"_name":"easter 50"},"monday after 2nd saturday in September 13:00":{"name":{"de":"Knabenschiessen"},"type":"optional"}}},"BE":{"names":{"de":"Kanton Bern","fr":"Canton de Berne","it":"Canton Berna","en":"Canton of Bern"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"2 janvier"}}}},"LU":{"names":{"de":"Kanton Luzern","fr":"Canton de Lucerne","it":"Canton Lucerna","en":"Canton of Lucerne"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"optional"},"03-19":{"_name":"03-19","type":"observance"},"easter 1":{"_name":"easter 1","type":"optional"},"easter 50":{"_name":"easter 50","type":"optional"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"}}},"UR":{"names":{"de":"Kanton Uri","fr":"Canton d\'Uri","it":"Canton Uri","en":"Canton of Uri"},"days":{"01-06":{"_name":"01-06"},"03-19":{"_name":"03-19"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-26":false,"12-26 not on monday, friday":{"_name":"12-26"}}},"SZ":{"names":{"de":"Kanton Schwyz","fr":"Canton de Schwytz","it":"Canton Svitto","en":"Canton of Schwyz"},"days":{"01-06":{"_name":"01-06"},"03-19":{"_name":"03-19"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"}}},"OW":{"names":{"de":"Kanton Obwalden","fr":"Canton d\'Obwald","it":"Canton Obvaldo","en":"Canton of Obwalden"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"optional"},"easter 1":{"_name":"easter 1","type":"optional"},"easter 50":{"_name":"easter 50","type":"optional"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"09-25":{"name":{"de":"Bruderklausenfest","fr":"Saint-Nicholas-de-Flüe","en":"Saint Nicholas of Flüe"}},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-26":{"_name":"12-26","type":"optional"}}},"NW":{"names":{"de":"Kanton Nidwalden","fr":"Canton de Nidwald","it":"Canton Nidvaldo","en":"Canton of Nidwalden"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"bank"},"03-19":{"_name":"03-19"},"easter 1":{"_name":"easter 1","type":"optional"},"easter 50":{"_name":"easter 50","type":"optional"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-26":{"_name":"12-26","type":"optional"}}},"GL":{"names":{"de":"Kanton Glarus","fr":"Canton de Glaris","it":"Canton Glarona","en":"Canton of Glarus"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"optional"},"thursday after 04-01":{"name":{"de":"Fahrtsfest","fr":"Bataille de Näfels"}},"11-01":{"_name":"11-01"}}},"ZG":{"names":{"de":"Kanton Zug","fr":"Canton de Zoug","it":"Canton Zugo","en":"Canton of Zug"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"optional"},"easter 1":{"_name":"easter 1","type":"optional"},"easter 50":{"_name":"easter 50","type":"optional"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-26":{"_name":"12-26","type":"optional"}}},"FR":{"names":{"fr":"Canton de Fribourg","de":"Kanton Freiburg","it":"Canton Friburgo","en":"Canton of Fribourg"},"langs":["fr","de-ch","de","it"],"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"optional"},"easter 1":{"_name":"easter 1","type":"optional"},"easter 50":{"_name":"easter 50","type":"optional"},"easter 60":{"_name":"easter 60","note":"excluding communities: Agriswil, Altavilla, Büchslen, Cordast, Courgevaux, Courlevon, Fräschels, Galmiz, Gempenach, Greng, Jeuss, Kerzers, Lurtigen, Meyriez, Muntelier, Murten, Ried bei Kerzers (halb), Salvenach, Ulmiz, Bas-Vully, Haut-Vully\\n"},"08-15":{"_name":"08-15","note":"excluding communities: Agriswil, Altavilla, Büchslen, Cordast, Courgevaux, Courlevon, Fräschels, Galmiz, Gempenach, Greng, Jeuss, Kerzers, Lurtigen, Meyriez, Muntelier, Murten, Ried bei Kerzers (halb), Salvenach, Ulmiz, Bas-Vully, Haut-Vully\\n"},"11-01":{"_name":"11-01","note":"excluding communities: Agriswil, Altavilla, Büchslen, Cordast, Courgevaux, Courlevon, Fräschels, Galmiz, Gempenach, Greng, Jeuss, Kerzers, Lurtigen, Meyriez, Muntelier, Murten, Ried bei Kerzers (halb), Salvenach, Ulmiz, Bas-Vully, Haut-Vully\\n"},"12-08":{"_name":"12-08","note":"excluding communities: Agriswil, Altavilla, Büchslen, Cordast, Courgevaux, Courlevon, Fräschels, Galmiz, Gempenach, Greng, Jeuss, Kerzers, Lurtigen, Meyriez, Muntelier, Murten, Ried bei Kerzers (halb), Salvenach, Ulmiz, Bas-Vully, Haut-Vully\\n"},"12-26":{"_name":"12-26","type":"optional"}}},"SO":{"names":{"de":"Kanton Solothurn","fr":"Canton de Soleure","it":"Canton Soletta","en":"Canton of Solothurn"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"optional"},"03-19":{"_name":"03-19","note":"Only in communities: Fulenbach, Walterswil, Wisen, Metzerlen, Nulgar-St. Pantaleon, Rodersdorf, Bärschwil, Büsserach\\n"},"easter 1":{"_name":"easter 1","type":"optional"},"05-01 12:00":{"_name":"05-01"},"easter 50":{"_name":"easter 50","type":"optional"},"easter 60":{"_name":"easter 60","note":"is optional in Bucheggberg"},"08-15":{"_name":"08-15","note":"is optional in Bucheggberg"},"11-01":{"_name":"11-01","note":"is optional in Bucheggberg"},"12-26":{"_name":"12-26","type":"optional"}}},"BS":{"names":{"de":"Kanton Basel-Stadt","fr":"Canton de Bâle-Ville","it":"Canton Basilea Città","en":"Canton of Basel-City"},"days":{"05-01":{"_name":"05-01"}}},"BL":{"names":{"de":"Kanton Basel-Landschaft","fr":"Canton de Bâle-Campagne","it":"Canton Basilea Campagna","en":"Canton of Basel-Country"},"days":{"05-01":{"_name":"05-01"},"easter 60":{"_name":"easter 60","type":"observance"}}},"SH":{"names":{"de":"Kanton Schaffhausen","fr":"Canton de Schaffhouse","it":"Canton Sciaffusa","en":"Canton of Schaffhausen"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"optional"},"05-01":{"_name":"05-01"}}},"AR":{"names":{"de":"Kanton Appenzell Ausserrhoden","fr":"Canton d\'Appenzell Rhodes-Extérieures","it":"Canton Appenzello Esterno","en":"Canton of Appenzell Outer Rhodes"},"days":{"12-26":false,"12-26 not on monday":{"_name":"12-26"}}},"AI":{"names":{"de":"Kanton Appenzell Innerrhoden","fr":"Canton d\'Appenzell Rhodes-Intérieures","it":"Canton Appenzello Interno","en":"Canton of Appenzell Inner-Rhodes"},"days":{"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"09-22":{"name":{"de":"Mauritiustag"},"note":"excluding: Bezirk Oberegg\\n"},"11-01":{"_name":"11-01"},"12-26":{"type":"observance"},"12-26 not on tuesday, saturday":{"_name":"12-26"}}},"SG":{"names":{"de":"Kanton St. Gallen","fr":"Canton de Saint-Gall","it":"Canton San Gallo","en":"Canton of St. Gallen"},"days":{"11-01":{"_name":"11-01"}}},"GR":{"names":{"de":"Kanton Graubünden","it":"Cantone dei Grigioni","fr":"Canton des Grisons","en":"Canton of Grisons"},"langs":["de-ch","de","it","fr"],"days":{"01-06":{"_name":"01-06","type":"observance"},"03-19":{"_name":"03-19","type":"observance"},"easter -2":{"_name":"easter -2","type":"optional"},"easter 60":{"_name":"easter 60","type":"observance"},"08-15":{"_name":"08-15","type":"observance"},"11-01":{"_name":"11-01","type":"observance"},"12-08":{"_name":"12-08","type":"observance"}}},"AG":{"names":{"de":"Kanton Aargau","fr":"Canton d\'Argovie","it":"Canton Argovia","en":"Canton of Aargau"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"}},"05-01":{"_name":"05-01"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"}}},"TG":{"names":{"de":"Kanton Thurgau","fr":"Canton de Thurgovie","it":"Canton Turgovia","en":"Canton of Thurgau"},"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"}},"05-01":{"_name":"05-01"}}},"TI":{"names":{"it":"Canton Ticino","de":"Kanton Tessin","fr":"Canton du Tessin","en":"Canton of Ticino"},"langs":["it","de-ch","de","fr"],"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"bank"},"01-06":{"_name":"01-06","name":{"it":"Epifania"}},"03-19":{"_name":"03-19"},"easter -2":false,"easter 60":{"_name":"easter 60"},"05-01":{"_name":"05-01"},"06-29":{"_name":"06-29"},"1st sunday in June":false,"08-15":{"_name":"08-15","name":{"it":"Assunzione"}},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"}}},"VD":{"names":{"fr":"Canton de Vaud","de":"Kanton Waadt","it":"Canton Vaud","en":"Canton of Vaud"},"langs":["fr","de-ch","de","it"],"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"2 Janvier"}},"monday after 3 sunday in September":{"name":{"de":"Bettagsmontag","fr":"Lundi du Jeûne Fédéral","en":"Monday after Federal Day of Thanksgiving, Repentance and Prayer"}},"12-26":false}},"VS":{"names":{"fr":"Canton du Valais","de":"Kanton Wallis","it":"Canton Vallese","en":"Canton of Valais"},"langs":["fr","de-ch","de","it"],"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"Saint-Berthold"},"type":"bank"},"03-19":{"_name":"03-19"},"easter -2":false,"easter 1":{"_name":"easter 1","type":"optional"},"05-01 12:00":{"_name":"05-01"},"easter 50":{"_name":"easter 50"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"monday after 3 sunday after 09-01":{"name":{"de":"Bettagsmontag","fr":"Lundi du Jeûne Fédéral","en":"Monday after Federal Day of Thanksgiving, Repentance and Prayer"},"type":"bank"},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-24 12:00":{"_name":"12-24"},"12-26":{"type":"optional"}}},"NE":{"names":{"fr":"Canton de Neuchâtel","de":"Kanton Neuenburg","it":"Canton Neuchâtel","en":"Canton of Neuchâtel"},"langs":["fr","de-ch","de","it"],"days":{"01-02 on monday":{"name":{"de":"Berchtoldstag","fr":"2 Janvier"}},"01-02":{"name":{"de":"Berchtoldstag","fr":"2 Janvier"},"type":"observance"},"03-01":{"name":{"fr":"Instauration de la République","de":"Jahrestag Ausrufung der Republik"}},"easter -2":{"_name":"easter -2"},"05-01":{"_name":"05-01"},"easter 50":{"_name":"easter 50","type":"observance"},"easter 60":{"_name":"easter 60"},"monday after 3 sunday in September":{"name":{"de":"Bettagsmontag","fr":"Lundi du Jeûne Fédéral","en":"Monday after Federal Day of Thanksgiving, Repentance and Prayer"},"type":"optional"},"12-26":{"type":"observance"},"12-26 on monday":{"_name":"12-26"}}},"GE":{"names":{"fr":"Canton de Genève","de":"Kanton Genf","it":"Canton Ginevra","en":"Canton of Geneva"},"langs":["fr","de-ch","de","it"],"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"2 Janvier"},"type":"bank"},"thursday after 1 sunday after 09-01":{"name":{"de":"Genfer Bettag","fr":"Jeûne Genevois"}},"12-26":{"type":"bank"},"12-31":{"name":{"de":"Wiederherstellung der Republik","fr":"Restauration de la République","en":"Restoration of the Republic"}}}},"JU":{"names":{"fr":"Canton du Jura","de":"Kanton Jura","it":"Canton Giura","en":"Canton of Jura"},"langs":["fr","de-ch","de","it"],"days":{"01-02":{"name":{"de":"Berchtoldstag","fr":"2 Janvier"}},"05-01":{"_name":"05-01"},"easter 60":{"_name":"easter 60"},"06-23":{"name":{"fr":"Plébiscite jurassien","en":"Jura Plebiscite","de":"Fest der Unabhängigkeit"}},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-26":false}}}},"CL":{"names":{"es":"Chile","en":"Chile"},"dayoff":"sunday","langs":["es"],"zones":["America/Santiago","Pacific/Easter"],"days":{"01-01":{"_name":"01-01"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"05-01":{"_name":"05-01"},"05-21":{"name":{"en":"Navy Day","es":"Día de las Glorias Navales"}},"06-29":{"_name":"06-29"},"07-16":{"name":{"en":"Our Lady of Mount Carmel","es":"Virgen del Carmen"}},"08-15":{"_name":"08-15"},"09-18":{"name":{"en":"National holiday","es":"Fiestas Patrias"}},"09-19":{"name":{"en":"Army Day","es":"Día de las Glorias del Ejército"}},"10-12":{"name":{"en":"Columbus Day","es":"Día del Descubrimiento de Dos Mundos"}},"10-31 if wednesday then next friday if tuesday then previous friday":{"_name":"Reformation Day"},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-25":{"_name":"12-25"},"12-31":{"_name":"12-31","type":"bank"}},"states":{"AP":{"name":"Arica y Parinacota","days":{"06-07":{"name":{"en":"Battle of Arica","es":"Asalto y Toma del Morro de Arica"}}}},"BI":{"name":"Biobío","regions":{"CH":{"name":"Chillán y Chillán Viejo","days":{"08-20":{"name":{"en":"Nativity of Liberator Bernardo O\'Higgins","es":"Nacimiento del Prócer de la Independencia"}}}}}},"TA":{"name":"Tarapacá","days":{"08-10":{"name":{"en":"Saint Lawrence","es":"San Lorenzo de Tarapacá"}}}}}},"CM":{"names":{"fr":"Cameroun","en":"Cameroon"},"dayoff":"sunday","langs":["fr","en"],"zones":["Africa/Lagos"],"days":{"01-01":{"_name":"01-01"},"02-11":{"name":{"fr":"Fête de la Jeunesse","en":"Youth Day"}},"easter -2":{"_name":"easter -2"},"05-01 if sunday then next monday":{"_name":"05-01"},"05-20":{"name":{"fr":"Fête nationale ou de l\'unité","en":"National Day"}},"easter 39":{"_name":"easter 39"},"08-15":{"_name":"08-15"},"12-25":{"_name":"12-25"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}}},"CN":{"names":{"en":"China","zh":"中华人民共和国"},"dayoff":"sunday","langs":["zh","en"],"zones":["Asia/Shanghai","Asia/Urumqi"],"days":{"01-01":{"_name":"01-01"},"03-08 12:00":{"_name":"03-08","note":"Women"},"05-01":{"_name":"05-01"},"05-04 12:00":{"name":{"en":"Youth Day","zh":"青年节"},"note":"Youth from the age of 14 to 28"},"06-01":{"name":{"en":"Children\'s Day","zh":"六一儿童节"},"note":"Children below the age of 14"},"08-01 12:00":{"name":{"en":"Army Day","zh":"建军节"},"note":"Military personnel in active service"},"10-01":{"name":{"en":"National Day","zh":"国庆节"}},"chinese 01-0-01":{"name":{"en":"Spring Festival","zh":"春节"}},"chinese 5-01 solarterm":{"name":{"en":"Qingming Festival","zh":"清明节 清明節"}},"chinese 05-0-05":{"name":{"en":"Dragon Boat Festival","zh":"端午节"}},"chinese 08-0-15":{"name":{"en":"Mid-Autumn Festival","zh":"中秋节"}}}},"CO":{"names":{"es":"Colombia","en":"Colombia"},"dayoff":"sunday","langs":["es"],"zones":["America/Bogota"],"days":{"01-01":{"_name":"01-01"},"monday after 01-06":{"_name":"01-06"},"monday after 03-19":{"_name":"03-19"},"easter -7":{"_name":"easter -7","type":"observance"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"05-01":{"_name":"05-01"},"easter 43":{"_name":"easter 39"},"easter 64":{"_name":"easter 60"},"easter 71":{"name":{"es":"Sagrado Corazón de Jesús","en":"Sacred Heart"}},"monday after 06-29":{"_name":"06-29"},"07-20":{"_name":"Independence Day"},"08-07":{"name":{"en":"Battle of Boyacá","es":"Batalla de Boyacá"}},"monday after 08-15":{"_name":"08-15"},"monday after 10-12":{"name":{"es":"Día de la Raza","en":"Columbus Day"}},"1st monday in November":{"_name":"11-01"},"monday after 11-11":{"name":{"es":"Independencia de Cartagena","en":"Independence of Cartagena"}},"12-08":{"_name":"12-08"},"12-25":{"_name":"12-25"}}},"CR":{"names":{"es":"Costa Rica","en":"Costa Rica"},"dayoff":"sunday","langs":["es"],"zones":["America/Costa_Rica"],"days":{"01-01":{"_name":"01-01"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"04-11":{"name":{"es":"Gesta Heroica de Juan Santamaría"}},"05-01":{"_name":"05-01"},"07-25":{"name":{"en":"Guanacaste Day","es":"Anexión del Partido de Nicoya"}},"08-02":{"name":{"en":"Our Lady of Los Ángeles","es":"Día de la Virgen de los Ángeles"}},"08-15":{"_name":"Mothers Day"},"09-15":{"_name":"Independence Day"},"10-12 if monday then previous friday":{"name":{"en":"Columbus Day","es":"Día de la Raza"}},"12-25":{"_name":"12-25"}}},"CU":{"names":{"es":"Cuba","en":"Cuba"},"dayoff":"sunday","langs":["es"],"zones":["America/Havana"],"days":{"01-01":{"name":{"es":"Triunfo de la Revolución","en":"Triumph of the Revolution"}},"01-02":{"name":{"es":"Día de Victoria de las Fuerzas Armadas","en":"Victory of Armed Forces Day"}},"easter -2":{"_name":"easter -2"},"05-01":{"_name":"05-01"},"07-25":{"name":{"es":"Conmemoración del asalto a Moncada","en":"Day before the Commemoration of the Assault of the Moncada garrison"}},"07-26":{"name":{"es":"Día de la Rebeldía Nacional","en":"Commemoration of the Assault of the Moncada garrison"}},"07-27":{"name":{"es":"Conmemoración del asalto a Moncada","en":"Day after the Commemoration of the Assault of the Moncada garrison"}},"10-10":{"_name":"Independence Day"},"12-25":{"_name":"12-25"}}},"CV":{"names":{"pt":"República de Cabo Verde","en":"Cape Verde"},"langs":["pt"],"zones":["Atlantic/Cape_Verde"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"01-13":{"name":{"pt":"Dia da Democracia","en":"Democracy Day"}},"01-20":{"name":{"pt":"Dia dos Heróis Nacionais","en":"Heroes\' Day"}},"easter -47":{"_name":"easter -47"},"easter -46":{"_name":"easter -46"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"05-01":{"_name":"05-01"},"06-01":{"name":{"pt":"Dia das Crianças","en":"Children\'s Day"}},"07-05":{"_name":"Independence Day"},"08-15":{"_name":"08-15","name":{"pt":"Dia da Padroeira Nacional"}},"09-12":{"name":{"pt":"Dia Nacional","en":"National Day"}},"11-01":{"_name":"11-01"},"12-25":{"_name":"12-25"}},"states":{"S":{"name":"Sotavento Islands","regions":{"PR":{"name":"Praia","days":{"05-19":{"name":{"pt":"Dia do Município da Praia"}}}}}}}},"CW":{"names":{"nl":"Curaçao","pap":"Kòrsou","en":"Curaçao"},"langs":["nl","pap","en"],"zones":["America/Curacao"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"easter -48":{"_name":"easter -48","name":{"en":"Carnival Monday"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"04-27":{"name":{"pap":"Aña di Rey","nl":"Koningsdag","en":"Kings Day"}},"05-01 if sunday then next monday":{"_name":"05-01"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"1st sunday in June":{"_name":"Fathers Day","type":"observance"},"easter 39":{"_name":"easter 39","name":{"nl":"Hemelvaartsdag"}},"07-02":{"name":{"nl":"Dag van het volkslied en de Vlag","pap":"Dia di Himno i Bandera","en":"Flag Day"}},"10-10":{"name":{"nl":"Dag van het land Curaçao","pap":"Pais Kòrsou","en":"Curaçao Day"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12-31 12:00":{"_name":"12-31"}}},"CX":{"names":{"en":"Christmas Island"},"langs":["en","ms"],"zones":["Indian/Christmas"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"01-26":{"name":{"en":"Australia Day"}},"chinese 01-0-01 P2D":{"name":{"en":"Chinese New Year","zh":"春节"}},"4th monday in March":{"_name":"05-01"},"easter -2":{"_name":"easter -2"},"04-25":{"name":{"en":"Anzac Day"}},"1 Shawwal":{"_name":"1 Shawwal","name":{"ms":"Hari Raya Puasa"}},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah","name":{"ms":"Hari Raya Haji"}},"10-06":{"name":{"en":"Territory Day"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"CY":{"names":{"el":"Κύπρος","en":"Cyprus"},"dayoff":null,"langs":["el"],"zones":["Asia/Nicosia"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06"},"orthodox -48":{"name":{"el":"Καθαρά Δευτέρα","en":"Ash Sunday"},"type":"observance"},"orthodox -47":{"name":{"el":"Καθαρά Δευτέρα","en":"Clean Monday"}},"03-25":{"name":{"el":"Ευαγγελισμός, Εθνική Εορτή","en":"Annunciation, Anniversary of 1821 Revolution"}},"04-01":{"name":{"en":"Cyprus National Day","el":"Κύπρος Εθνική Εορτή"}},"orthodox -2":{"_name":"easter -2"},"orthodox":{"_name":"easter"},"orthodox 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"orthodox 49":{"_name":"easter 49"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"08-15":{"_name":"08-15"},"10-01":{"name":{"en":"Cyprus Independence Day","el":"Ημέρα της Ανεξαρτησίας Κύπρος"}},"10-28":{"_name":"National Holiday","name":{"el":"Επέτειος του Όχι"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"CZ":{"names":{"cz":"Česká republika","en":"Czech Republic"},"langs":["cz"],"zones":["Europe/Prague"],"days":{"01-01":{"_name":"01-01","name":{"cz":"Nový rok a Den obnovy samostatného českého státu"}},"easter -4":{"name":{"cz":"Škaredá středa","en":"Ugly Wednesday"},"type":"observance"},"easter -3":{"_name":"easter -3","type":"observance"},"easter -2":{"_name":"easter -2"},"easter -1":{"_name":"easter -1","type":"observance"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"05-08":{"name":{"cz":"Den vítězství","en":"Liberation Day"}},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"07-05":{"name":{"cz":"Den slovanských věrozvěstů Cyrila a Metoděje","en":"Saints Cyril and Methodius Day"}},"07-06":{"name":{"cz":"Den upálení mistra Jana Husa","en":"Jan Hus Day"}},"09-28":{"name":{"cz":"Den české státnosti","en":"St. Wenceslas Day (Czech Statehood Day)"}},"10-28":{"name":{"cz":"Den vzniku samostatného československého státu","en":"Independent Czechoslovak State Day"}},"11-17":{"name":{"cz":"Den boje za svobodu a demokracii","en":"Struggle for Freedom and Democracy Day"}},"12-24":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"DE":{"names":{"de":"Deutschland","en":"Germany"},"dayoff":"sunday","zones":["Europe/Berlin"],"langs":["de"],"days":{"01-01":{"_name":"01-01"},"02-14":{"_name":"02-14","type":"observance"},"easter -52":{"name":{"de":"Weiberfastnacht","en":"Women\'s Carnival Day"},"type":"observance"},"easter -48":{"name":{"de":"Rosenmontag","en":"Shrove Monday"},"type":"observance"},"easter -47 14:00":{"_name":"easter -47","type":"observance"},"easter -46":{"_name":"easter -46","type":"observance"},"easter -3":{"_name":"easter -3","type":"observance"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01","name":{"de":"Maifeiertag"}},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49","type":"observance"},"easter 50":{"_name":"easter 50"},"10-03":{"_name":"National Holiday","name":{"de":"Tag der Deutschen Einheit"}},"11-01":{"_name":"11-01","type":"observance"},"11-02":{"_name":"11-02","type":"observance"},"11-11":{"_name":"11-11","type":"observance"},"wednesday before 11-23":{"_name":"Buß- und Bettag","type":"observance"},"6th sunday before 12-25":{"name":{"de":"Volkstrauertag","en":"Memorial Day"},"type":"observance"},"5th sunday before 12-25":{"name":{"de":"Totensonntag"},"type":"observance"},"4th sunday before 12-25":{"name":{"de":"1. Advent"},"type":"observance"},"3th sunday before 12-25":{"name":{"de":"2. Advent"},"type":"observance"},"2nd sunday before 12-25":{"name":{"de":"3. Advent"},"type":"observance"},"1st sunday before 12-25":{"name":{"de":"4. Advent"},"type":"observance"},"12-24 14:00 if sunday then 00:00":{"_name":"12-24","type":"bank"},"12-25":{"_name":"12-25","name":{"de":"1. Weihnachtstag"}},"12-26":{"_name":"12-26"},"12-31 14:00 if sunday then 00:00":{"_name":"12-31","type":"bank"},"2017-10-31":{"_name":"Reformation Day"}},"states":{"BB":{"name":"Brandenburg","days":{"easter":{"_name":"easter"},"easter 49":{"_name":"easter 49"},"10-31":{"_name":"Reformation Day"}}},"BE":{"name":"Berlin","days":{"03-08":{"_name":"03-08","active":[{"from":"2019-01-01T00:00:00.000Z"}]},"easter":{"_name":"easter","type":"observance"},"easter 49":{"_name":"easter 49","type":"observance"},"2020-05-08":{"name":{"de":"Tag der Befreiung (75. Jahrestag)","en":"Liberation Day (75th Anniversary)"}}}},"BW":{"name":"Baden-Württemberg","days":{"01-06":{"_name":"01-06"},"easter -3":{"_name":"easter -3","type":"school"},"easter 60":{"_name":"easter 60"},"10-31":{"_name":"Reformation Day","type":"school"},"11-01":{"_name":"11-01"}}},"BY":{"name":"Bayern","days":{"01-06":{"_name":"01-06"},"02-02":{"_name":"02-02","type":"observance"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"wednesday before 11-23":{"_name":"Buß- und Bettag","type":"school"}},"regions":{"A":{"name":"Stadt Augsburg","days":{"08-08":{"name":{"de":"Augsburger Friedensfest","en":"Augsburg Peace Festival"}}}},"EVANG":{"names":{"de":"Überwiegend evangelische Gemeinden","en":"Predominantly protestant communities"},"days":{"08-15":{"_name":"08-15","type":"school"}}}}},"HB":{"name":"Hansestadt Bremen","days":{"12-31 14:00 if sunday then 00:00":{"_name":"12-31","type":"public"},"10-31":{"_name":"Reformation Day","active":[{"from":"2018-01-01T00:00:00.000Z"}]}}},"HE":{"name":"Hessen","days":{"easter 60":{"_name":"easter 60"},"12-31 14:00 if sunday then 00:00":{"_name":"12-31"}}},"HH":{"name":"Hansestadt Hamburg","days":{"10-31":{"_name":"Reformation Day","active":[{"from":"2018-01-01T00:00:00.000Z"}]}}},"MV":{"name":"Mecklenburg Vorpommern","days":{"10-31":{"_name":"Reformation Day"}}},"NI":{"name":"Niedersachsen","days":{"10-31":{"_name":"Reformation Day","active":[{"from":"2018-01-01T00:00:00.000Z"}]}}},"NW":{"name":"Nordrhein-Westfalen","days":{"easter 60":{"_name":"easter 60"},"11-01":{"_name":"11-01"}}},"RP":{"name":"Rheinland-Pfalz","days":{"easter 60":{"_name":"easter 60"},"11-01":{"_name":"11-01"}}},"SH":{"name":"Schleswig-Holstein","days":{"10-31":{"_name":"Reformation Day","active":[{"from":"2018-01-01T00:00:00.000Z"}]}}},"SL":{"name":"Saarland","days":{"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"}}},"SN":{"name":"Sachsen","days":{"easter 60":{"_name":"easter 60","type":"observance"},"10-31":{"_name":"Reformation Day"},"wednesday before 11-23":{"_name":"Buß- und Bettag"}},"regions":{"BZ":{"name":"Landkreis Bautzen","days":{"easter 60":{"_name":"easter 60","type":"public","note":"Bautzen (nur in den Ortsteilen Bolbritz und Salzenforst), Crostwitz, Göda (nur im Ortsteil Prischwitz), Großdubrau (nur im Ortsteil Sdier), Hoyerswerda (nur im Ortsteil Dörgenhausen), Königswartha (nicht im Ortsteil Wartha), Nebelschütz, Neschwitz (nur in den Ortsteilen Neschwitz und Saritsch), Panschwitz-Kuckau, Puschwitz, Räckelwitz, Radibor, Ralbitz-Rosenthal und Wittichenau."}}}}},"ST":{"name":"Sachsen-Anhalt","days":{"01-06":{"_name":"01-06"},"10-31":{"_name":"Reformation Day"}}},"TH":{"name":"Thüringen","days":{"easter 60":{"_name":"easter 60","type":"observance"},"09-20":{"name":{"de":"Weltkindertag","en":"International Children\'s Day"},"active":[{"from":2019}]},"10-31":{"_name":"Reformation Day"},"12-31 14:00 if sunday then 00:00":{"_name":"12-31"}},"regions":{"EIC":{"name":"Landkreis Eichfeld","days":{"easter 60":{"_name":"easter 60","type":"public"}}},"UH":{"name":"Unstrut-Hainich-Kreis","days":{"easter 60":{"_name":"easter 60","type":"public","note":"In Anrode (nur in den Ortsteilen Bickenriede und Zella), Dünwald (nur in den Ortsteilen Beberstedt und Hüpstedt), Rodeberg (nur im Ortsteil Struth), Südeichsfeld"}}},"WAK":{"name":"Wartburgkreis","days":{"easter 60":{"_name":"easter 60","type":"public","note":"In Brunnhartshausen (nur in den Ortsteilen Föhlritz und Steinberg), Buttlar, Geisa, Schleid, Zella/Rhön"}}}}}}},"DK":{"names":{"da":"Danmark","en":"Denmark"},"langs":["da"],"zones":["Europe/Copenhagen"],"days":{"01-01":{"_name":"01-01"},"easter -48":{"name":{"da":"Fastelavn"},"type":"observance"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"easter 26":{"name":{"da":"Store Bededag","en":"Prayer Day","de":"Buß- und Bettag"}},"easter 39":{"_name":"easter 39"},"05-01":{"_name":"05-01","type":"observance","note":"Full holiday for blue collar workers"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"06-05":{"_name":"Constitution Day","type":"observance","note":"Shops are closed"},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"12-24":{"_name":"12-24","type":"observance","note":"Shops are closed"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"DM":{"names":{"en":"Dominica"},"langs":["en"],"zones":["America/Port_of_Spain"],"dayoff":"sunday","days":{"01-01 and if sunday then next monday":{"_name":"01-01","substitute":true},"easter -48":{"_name":"easter -48","name":{"en":"Carnival Monday"}},"easter -47":{"_name":"easter -47","name":{"en":"Carnival Tuesday"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"easter 49":{"_name":"easter 49","type":"observance"},"easter 50":{"_name":"easter 50"},"1st monday in August":{"name":{"en":"Emancipation Day"}},"11-03 if sunday then next monday":{"_name":"Independence Day"},"11-04 if sunday then next monday if monday then next tuesday":{"name":{"en":"National Day of Community Service"}},"12-25 and if sunday then next tuesday":{"_name":"12-25","substitute":true},"12-26 and if sunday then next monday":{"_name":"12-26","substitute":true}}},"DO":{"names":{"es":"República Dominicana","en":"Dominican Republic"},"dayoff":"sunday","zones":["America/Santo_Domingo"],"langs":["es"],"days":{"01-01":{"_name":"01-01"},"01-06 if tuesday,wednesday then previous monday if thursday,friday then next monday":{"_name":"01-06"},"01-21":{"name":{"es":"Nuestra Señora de la Altagracia","en":"Our Lady of Altagracia"}},"01-26 if tuesday,wednesday then previous monday if thursday,friday then next monday":{"name":{"es":"Día de Duarte","en":"Duarte\'s Birthday"}},"02-27":{"_name":"Independence Day"},"easter -2":{"_name":"easter -2"},"05-01 if tuesday,wednesday then previous monday if thursday,friday,sunday then next monday":{"_name":"05-01"},"easter 60":{"_name":"easter 60"},"08-16":{"name":{"es":"Día de la Restauración","en":"Restoration Day"}},"09-24":{"name":{"es":"Nuestra Señora de las Mercedes","en":"Our Lady of las Mercedes"}},"11-06 if tuesday,wednesday,thursday,friday,saturday then next monday":{"_name":"Constitution Day"},"12-25":{"_name":"12-25"}}},"EC":{"names":{"es":"Ecuador","en":"Ecuador"},"dayoff":"sunday","langs":["es"],"zones":["America/Guayaquil","Pacific/Galapagos"],"days":{"01-01":{"_name":"01-01"},"easter -48":{"name":{"en":"Carnival","es":"Carnaval"}},"easter -47":{"_name":"easter -47"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"05-01":{"_name":"05-01"},"05-24":{"name":{"en":"The Battle of Pichincha","es":"Batalla del Pichincha"}},"07-24":{"name":{"en":"The Birthday of Simón Bolívar","es":"El Natalicio de Simón Bolívar"},"type":"observance"},"08-10":{"name":{"en":"Declaration of Independence of Quito","es":"Día del Primer Grito de Independencia de Quito"}},"09-10":{"name":{"en":"Independence of Guayaquil","es":"Independencia de Guayaquil"}},"10-31":{"name":{"en":"Flag Day","es":"Dia de La Bandera"},"type":"observance"},"11-02":{"_name":"11-02"},"11-03":{"name":{"en":"Independence of Cuenca","es":"Independencia de Cuenca"}},"12-25":{"_name":"12-25"},"12-31":{"_name":"12-31","type":"observance"}},"states":{"P":{"name":"Pichincha","regions":{"QU":{"name":"Quito","days":{"12-06":{"name":{"en":"Foundation of Quito","es":"Aniversario de la fundación de Quito"},"type":"observance"}}}}}}},"EE":{"names":{"et":"Eesti","en":"Estonia"},"dayoff":"sunday","langs":["et"],"zones":["Europe/Tallinn"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06","type":"observance"},"02-02":{"name":{"et":"Tartu rahulepingu aastapäev","en":"Anniversary of the Tartu Peace Treaty"},"type":"observance"},"02-24":{"_name":"Independence Day","type":"observance"},"03-14":{"name":{"et":"emakeelepäev","en":"Native Language Day"},"type":"observance"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"05-01":{"_name":"05-01"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 49":{"_name":"easter 49"},"06-04":{"name":{"et":"Eesti lipu päev","en":"National Flag Day"},"type":"observance"},"06-14":{"name":{"et":"leinapäev","en":"Day of Mourning and Commemoration"},"type":"observance"},"06-23":{"name":{"et":"võidupüha","en":"Victory Day"}},"06-24":{"name":{"et":"jaanipäev","en":"Midsummer Day"}},"08-20":{"name":{"et":"taasiseseisvumispäev","en":"Day of Restoration of Independence"}},"08-23":{"name":{"et":"kommunismi ja natsismi ohvrite mälestuspäev","en":"European Day of Remembrance for Victims of Stalinism and Nazism"},"type":"observance"},"2nd sunday in September":{"name":{"et":"vanavanemate päev","en":"Grandparents Day"},"type":"observance"},"09-22":{"name":{"et":"vastupanuvõitluse päev","en":"Resistance Fighting Day"},"type":"observance"},"11-02":{"_name":"11-02","type":"observance"},"2nd sunday in November":{"_name":"Fathers Day","type":"observance"},"11-16":{"name":{"et":"taassünni päev","en":"Day of Declaration of Sovereignty"},"type":"observance"},"12-24":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"ES":{"names":{"es":"España","en":"Spain"},"langs":["es"],"zones":["Europe/Madrid","Africa/Ceuta","Atlantic/Canary"],"days":{"01-01":{"_name":"01-01"},"substitutes 01-01 if sunday then next monday":{"type":"observance","substitute":true,"_name":"01-01"},"01-06":{"_name":"01-06"},"substitutes 01-06 if sunday then next monday":{"type":"observance","substitute":true,"_name":"01-06"},"03-19":{"_name":"03-19","type":"observance"},"easter -3":{"_name":"easter -3","type":"observance"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"05-01":{"_name":"05-01"},"substitutes 05-01 if sunday then next monday":{"type":"observance","substitute":true,"_name":"05-01"},"1st sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 49":{"_name":"easter 49","type":"observance"},"07-25":{"name":{"es":"Santiago Apostol"},"type":"observance","note":"regional"},"08-15":{"_name":"08-15"},"substitutes 08-15 if sunday then next monday":{"substitute":true,"type":"observance","_name":"08-15"},"10-12":{"name":{"es":"Fiesta Nacional de España"}},"substitutes 10-12 if sunday then next monday":{"substitute":true,"type":"observance","name":{"es":"Fiesta Nacional de España"}},"11-01":{"_name":"11-01"},"substitutes 11-01 if sunday then next monday":{"substitute":true,"type":"observance","_name":"11-01"},"12-06":{"name":{"es":"Día de la Constitución Española"}},"substitutes 12-06 if sunday then next monday":{"type":"observance","substitute":true,"name":{"es":"Día de la Constitución Española"}},"12-08":{"_name":"12-08"},"substitutes 12-08 if sunday then next monday":{"type":"observance","substitute":true,"_name":"12-08"},"12-25":{"_name":"12-25"},"substitutes 12-25 if sunday then next monday":{"type":"observance","substitute":true,"_name":"12-25"}},"states":{"MD":{"name":"Comunidad de Madrid","days":{"05-16":{"name":{"es":"San Isidro Labrador"}},"11-09 if sunday then next monday":{"name":{"es":"Nuestra Señora de la Almudena"}}}},"AN":{"name":"Andalucía","days":{"02-28":{"name":{"es":"Día de Andalucía"}}}},"AR":{"name":"Aragón","days":{"04-23 if sunday then next monday":{"name":{"es":"Día de Aragón"}}}},"CT":{"name":"Catalonia","days":{"09-11":{"name":{"es":"Diada de Catalunya"}},"06-24":{"name":{"es":"Sant Joan"}},"09-24 if sunday then next monday":{"name":{"es":"Mare de Déu de la Mercè"}},"12-26":{"name":{"es":"Sant Esteve"}}}}}},"ET":{"names":{"am":"ኢትዮጵያ","en":"Ethiopia"},"dayoff":"sunday","langs":["am","en"],"zones":["Africa/Nairobi"],"days":{"01-06 in non-leap years":{"_name":"12-25"},"01-07 in leap years":{"_name":"12-25"},"01-19":{"_name":"01-06"},"03-02":{"name":{"am":"የዓድዋ ድል በዓል","en":"Victory at Adwa Day"}},"03-28":{"name":{"am":"የቀይ ሽብር መታሰቢያ ቀን","en":"Day of Lament"}},"orthodox -2":{"_name":"easter -2"},"orthodox":{"_name":"easter"},"05-28":{"name":{"am":"ደርግ የወደቀበት ቀን","en":"Derg Downfall Day"}},"09-11 in non-leap years":{"_name":"01-01"},"09-12 in leap years":{"_name":"01-01"},"09-27 in non-leap years":{"name":{"am":"ብርሐነ-መስቀል","en":"Finding of the True Cross"}},"09-28 in leap years":{"name":{"am":"ብርሐነ-መስቀል","en":"Finding of the True Cross"}},"1 Ramadan":{"_name":"1 Ramadan"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}}},"FI":{"names":{"fi":"Suomi","en":"Finland"},"dayoff":"sunday","langs":["fi"],"zones":["Europe/Helsinki"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"friday after 06-19":{"name":{"fi":"Juhannusaatto","en":"Midsummer Eve","sv":"Midsommarafton"},"type":"bank"},"saturday after 06-20":{"name":{"fi":"Juhannuspäivä","en":"Midsummer Day","sv":"Midsommardagen"}},"saturday after 10-31":{"_name":"11-01"},"12-06":{"_name":"Independence Day"},"12-24":{"_name":"12-24","type":"bank"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12-31 14:00 if sunday then 00:00":{"_name":"12-31","type":"bank"}}},"FO":{"names":{"fo":"Føroyar","da":"Færøerne","en":"Faroe Islands"},"langs":["fo","da"],"zones":["Atlantic/Faroe"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"04-24":{"name":{"fo":"Flaggdagur","da":"Flagdag","en":"Flag Day"}},"easter 26":{"name":{"fo":"Dýri biðidagur","en":"Great Prayer Day"}},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"06-05 12:00 if sunday then 00:00":{"_name":"Constitution Day"},"07-28 12:00 if sunday then 00:00":{"name":{"da":"Sankt Olavsaften","en":"St.Olav\'s Eve"},"note":"half-day holiday for some workers\' unions","type":"observance"},"07-29":{"name":{"fo":"Ólavsøka","da":"Sankt Olavs Dag","en":"St.Olav\'s Day"},"note":"full holiday for most workers\' unions","type":"observance"},"12-24":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12-31 12:00 if sunday then 00:00":{"_name":"12-31"}}},"FR":{"names":{"fr":"France","en":"France"},"dayoff":"sunday","zones":["Europe/Paris"],"langs":["fr"],"days":{"01-01":{"_name":"01-01"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"05-08":{"name":{"fr":"Fête de la Victoire 1945"}},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"sunday before 06-01":{"_name":"Mothers Day","type":"observance"},"07-14":{"name":{"fr":"Fête Nationale de la France"}},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"11-11":{"name":{"fr":"Armistice 1918"}},"12-25":{"_name":"12-25"}},"states":{"57":{"name":"Département Moselle","days":{"easter -2":{"_name":"easter -2"},"12-26":{"_name":"12-26"}}},"67":{"name":"Département Bas-Rhin","days":{"easter -2":{"_name":"easter -2"},"12-26":{"_name":"12-26"}}},"68":{"name":"Département Haut-Rhin","days":{"easter -2":{"_name":"easter -2"},"12-26":{"_name":"12-26"}}},"YT":{"name":"Département et région d\'outre-mer Mayotte","zones":["Africa/Nairobi"],"_days":"YT"},"MQ":{"name":"Département et région d\'outre-mer Martinique","zones":["America/Martinique"],"_days":"MQ"},"GP":{"name":"Département et région d\'outre-mer Guadeloupe","zones":["America/Port_of_Spain"],"_days":"GP"},"GF":{"name":"Département et région d\'outre-mer Guyane","zones":["America/Cayenne"],"_days":"GF"},"RE":{"name":"Département et région d\'outre-mer La Réunion","zones":["Indian/Reunion"],"_days":"RE"}}},"GA":{"names":{"fr":"Gabon","en":"Gabon"},"dayoff":"sunday","langs":["fr"],"zones":["Africa/Lagos"],"days":{"01-01":{"_name":"01-01"},"easter 1":{"_name":"easter 1"},"04-17":{"name":{"fr":"Journée des droits de la femme","en":"Women\'s Day"}},"05-01":{"_name":"05-01"},"easter 50":{"_name":"easter 50"},"08-15":{"_name":"08-15"},"08-16 P2D":{"_name":"Independence Day"},"11-01":{"_name":"11-01"},"12-25":{"_name":"12-25"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}}},"GB":{"names":{"en":"United Kingdom"},"dayoff":"sunday","zones":["Europe/London"],"langs":["en"],"days":{"01-01":{"_name":"01-01"},"substitutes 01-01 if sunday then next monday":{"substitute":true,"_name":"01-01"},"substitutes 01-01 if saturday then next monday":{"substitute":true,"_name":"01-01"},"easter -21":{"_name":"Mothers Day","type":"observance"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"1st monday in May":{"name":{"en":"Early May bank holiday"},"disable":["2020-05-04"]},"2020-05-08":{"name":{"en":"Early May bank holiday (VE day)"}},"1st monday before 06-01":{"name":{"en":"Spring bank holiday"}},"12-25":{"_name":"12-25"},"substitutes 12-25 if saturday then next tuesday":{"substitute":true,"_name":"12-25"},"substitutes 12-25 if sunday then next tuesday":{"substitute":true,"_name":"12-25"},"12-26":{"_name":"12-26"},"substitutes 12-26 if saturday then next monday":{"substitute":true,"_name":"12-26"},"substitutes 12-26 if sunday then next monday":{"substitute":true,"_name":"12-26"},"2012-06-05":{"name":{"en":"Queen’s Diamond Jubilee"}}},"states":{"ALD":{"name":"Alderney","zones":["Europe/Guernsey"],"days":{"12-15":{"name":{"en":"Homecoming Day"}}}},"ENG":{"name":"England","days":{"1st monday before 09-01":{"name":{"en":"Summer bank holiday"}}}},"NIR":{"name":"Northern Ireland","zones":["Europe/Belfast"],"days":{"03-17":{"name":{"en":"St Patrick\'s Day"}},"substitutes 03-17 if saturday then next monday":{"substitute":true,"name":{"en":"St Patrick\'s Day"}},"substitutes 03-17 if sunday then next monday":{"substitute":true,"name":{"en":"St Patrick\'s Day"}},"07-12":{"name":{"en":"Battle of the Boyne, Orangemen’s Day"}},"substitutes 07-12 if saturday then next monday":{"substitute":true,"name":{"en":"Battle of the Boyne"}},"substitutes 07-12 if sunday then next monday":{"substitute":true,"name":{"en":"Battle of the Boyne"}},"1st monday before 09-01":{"name":{"en":"Summer bank holiday"}}}},"SCT":{"name":"Scotland","days":{"substitutes 01-01 if sunday then next monday":false,"substitutes 01-01 if saturday then next monday":false,"substitutes 01-01 if saturday then next tuesday":{"substitute":true,"_name":"01-01"},"substitutes 01-01 if sunday then next tuesday":{"substitute":true,"_name":"01-01"},"01-02":{"name":{"en":"Januar 2nd"}},"substitutes 01-02 if saturday then next monday":{"substitute":true,"name":{"en":"Januar 2nd"}},"substitutes 01-02 if sunday then next monday":{"substitute":true,"name":{"en":"Januar 2nd"}},"easter 1":{"_name":"easter 1"},"1st monday in August":{"name":{"en":"Summer bank holiday"}},"11-30":{"name":{"en":"St Andrew’s Day"}}}},"WLS":{"name":"Wales","days":{"1st monday before 09-01":{"name":{"en":"Summer bank holiday"}}},"regions":null}}},"GD":{"names":{"en":"Grenada"},"dayoff":"sunday","langs":["en"],"zones":["America/Port_of_Spain"],"days":{"01-01":{"_name":"01-01"},"02-07":{"_name":"Independence Day"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"04-24 P3D":{"name":{"en":"Carriacou Maroon and String Band Music Festival"},"type":"observance"},"05-01":{"_name":"05-01"},"easter 49":{"_name":"easter 49","type":"observance"},"easter 50":{"_name":"easter 50"},"easter 60":{"_name":"easter 60"},"1st monday in August":{"name":{"en":"Emancipation Day"}},"2nd monday in August":{"name":{"en":"Carnival Monday"}},"tuesday after 2nd monday in August":{"name":{"en":"Carnival Tuesday"}},"09-01":{"name":{"en":"Kirani Day"},"type":"observance"},"10-15 P5D":{"name":{"en":"Aunty Tek Spice Word Festival"},"type":"observance"},"10-25":{"name":{"en":"Thanksgiving Day"}},"12-04 P3D":{"name":{"en":"Camerhogne Folk Festival"},"type":"observance"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"GE":{"names":{"ge":"საქართველო","en":"Georgia"},"langs":["ge"],"zones":["Asia/Tbilisi"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"01-02":{"name":{"ge":"ბედობა","en":"Bedoba"}},"01-07":{"name":{"ge":"შობა","en":"Orthodox Christmas"}},"01-19":{"name":{"ge":"ნათლისღება","en":"Orthodox Epiphany"}},"03-03":{"name":{"ge":"დედის დღე","en":"Mother\'s Day"}},"03-08":{"_name":"03-08"},"04-09":{"name":{"ge":"ეროვნული ერთიანობის დღე","en":"National Unity Day"}},"orthodox -2":{"_name":"easter -2"},"orthodox -1":{"_name":"easter -1"},"orthodox":{"_name":"easter"},"orthodox 1":{"_name":"easter 1"},"05-09":{"name":{"ge":"ფაშიზმზე გამარჯვების დღე","en":"Victory Day"}},"05-12":{"name":{"ge":"წმინდა ანდრია პირველწოდებულის ხსენების დღე","en":"Saint Andrew the First-Called Day"}},"05-26":{"name":{"ge":"დამოუკიდებლობის დღე","en":"Independence Day"}},"08-28":{"name":{"ge":"მარიამობა","en":"Saint Mary\'s Day"}},"10-14":{"name":{"ge":"სვეტიცხოვლობა","en":"Svetitskhovloba"}},"11-23":{"name":{"ge":"გიორგობა","en":"Saint George\'s Day"}}}},"GF":{"names":{"fr":"Guyane","en":"French Guiana"},"langs":["fr"],"zones":["America/Cayenne"],"dayoff":"sunday","_days":"FR","days":{"06-10":{"_name":"Abolition of Slavery"}}},"GG":{"names":{"en":"Guernsey"},"dayoff":"sunday","zones":["Europe/Guernsey"],"langs":["en"],"_days":["GB"],"days":{"05-09":{"name":{"en":"Liberation Day"}}}},"GI":{"names":{"en":"Gibraltar"},"langs":["en"],"zones":["Europe/Gibraltar"],"dayoff":"sunday","_days":"GB","days":{"2nd monday in March":{"name":{"en":"Commonwealth Day"}},"easter":{"_name":"easter","type":"observance"},"04-28":{"name":{"en":"Workers Memorial Day"},"disable":["2015-04-28"],"enable":["2015-04-27"]},"05-01 if sunday, saturday then next monday":{"substitute":true,"name":{"en":"May Day"}},"1st monday in May":false,"2020-05-08":{"name":{"en":"Victory in Europe Day (VE Day)"}},"monday before 06-20":{"name":{"en":"Queen\'s Birthday"}},"monday before September":{"name":{"en":"Late Summer Bank Holiday"}},"09-10":{"name":{"en":"Gibraltar National Day"},"active":[{"to":2015}]},"09-10 and if sunday, saturday then previous monday":{"substitute":true,"name":{"en":"Gibraltar National Day"},"active":[{"from":2015}]}}},"GL":{"names":{"kl":"Kalaallit Nunaat","da":"Grønland","en":"Greenland"},"langs":["kl","da"],"zones":["America/Godthab","America/Danmarkshavn","America/Scoresbysund","America/Thule"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"easter 26":{"name":{"kl":"tussiarfissuaq","da":"Store Bededag","en":"Prayer Day"}},"easter 39":{"_name":"easter 39"},"06-21":{"name":{"kl":"ullortuneq","da":"Nationaldag","en":"National Day"}},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"12-24":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"GP":{"names":{"fr":"Guadeloupe","en":"Guadeloupe"},"langs":["fr"],"zones":["America/Port_of_Spain"],"dayoff":"sunday","_days":"FR","days":{"easter -2":{"_name":"easter -2"},"05-27":{"_name":"Abolition of Slavery"}}},"GQ":{"names":{"es":"República de Guinea Ecuatorial","fr":"République de Guinée équatoriale","pt":"República da Guiné Equatorial","en":"Republic of Equatorial Guinea"},"dayoff":"sunday","weekend":["saturday","sunday"],"langs":["es","fr","pt"],"zones":["Africa/Lagos"],"days":{"01-01 and if sunday then next monday":{"substitute":true,"_name":"01-01"},"easter -2":{"_name":"easter -2"},"05-01 and if sunday then next monday":{"substitute":true,"_name":"05-01"},"easter 60":{"_name":"easter 60"},"06-05 and if sunday then next monday":{"substitute":true,"name":{"es":"Natalicio de Teodoro Obiang","en":"President\'s Day"}},"08-03 and if sunday then next monday":{"substitute":true,"name":{"es":"Día del Golpe de Libertad","en":"Armed Forces Day"}},"08-15 and if sunday then next monday":{"substitute":true,"_name":"Constitution Day"},"10-12 and if sunday then next monday":{"substitute":true,"_name":"Independence Day"},"12-08 and if sunday then next monday":{"substitute":true,"_name":"12-08"},"12-25 and if sunday then next monday":{"substitute":true,"_name":"12-25"}}},"GR":{"names":{"el":"Ελλάδα","en":"Greece"},"dayoff":"sunday","zones":["Europe/Athens"],"langs":["el"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06"},"orthodox -48":{"name":{"el":"Καθαρά Δευτέρα","en":"Ash Sunday"}},"03-25":{"name":{"el":"Ευαγγελισμός, Εθνική Εορτή","en":"Annunciation, Anniversary of 1821 Revolution"}},"orthodox -2":{"_name":"easter -2"},"orthodox":{"_name":"easter"},"orthodox 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"orthodox 49":{"_name":"easter 49"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"08-15":{"_name":"08-15"},"10-28":{"_name":"National Holiday","name":{"el":"Επέτειος του Όχι"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"GT":{"names":{"es":"Guatemala","en":"Guatemala"},"dayoff":"sunday","langs":["es"],"zones":["America/Guatemala"],"days":{"01-01":{"_name":"01-01"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter -1":{"_name":"easter -1"},"easter":{"_name":"easter","type":"observance"},"05-01":{"_name":"05-01"},"06-30 if tuesday then previous monday if wednesday,thursday then next friday":{"name":{"es":"Día de las Fuerzas Armadas","en":"Army Day"}},"09-15":{"_name":"Independence Day"},"10-20":{"_name":"Revolution Day"},"11-01":{"_name":"11-01"},"12-24 12:00":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-31 12:00":{"_name":"12-31"}}},"GU":{"names":{"en":"Guam"},"dayoff":"sunday","langs":["en-us","en"],"zones":["Pacific/Guam"],"_days":["US"],"days":{"3rd monday in February":false,"1st monday in March":{"name":{"en":"Guam History and Chamorro Heritage Day"}},"easter -2":{"_name":"easter -2","type":"observance"},"07-21 if sunday then next monday":{"name":{"en":"Liberation Day"}},"11-02":{"_name":"11-02"},"12-08 if sunday then next monday":{"name":{"en":"Our Lady of Camarin Day"}}}},"GY":{"names":{"en":"Guyana"},"coord":{"lat":6.8045,"lng":-58.1553},"dayoff":"sunday","langs":["en"],"zones":["America/Guyana"],"days":{"01-01":{"_name":"01-01"},"02-23":{"name":{"en":"Republic Day"}},"easter -2":{"_name":"easter -2"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"05-05":{"name":{"en":"Arrival Day"}},"05-26":{"_name":"Independence Day"},"monday after 07-01":{"name":{"en":"CARICOM Day"}},"08-01":{"name":{"en":"Emancipation Day"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal","name":{"en":"Youman Nabi"},"note":"tentative","disable":["2016-12-11","2015-12-23","2013-01-24"],"enable":["2016-12-12","2015-12-24","2013-01-23"]},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah","name":{"en":"Eid Ul Adha"},"note":"tentative","disable":["2015-09-23"],"enable":["2015-09-24"]},"2017-03-12":{"name":{"en":"Phagwah"}},"2016-03-23":{"name":{"en":"Phagwah"}},"2015-03-05":{"name":{"en":"Phagwah"}},"2017-10-18":{"name":{"en":"Deepavali"}},"2015-11-11":{"name":{"en":"Deepavali"}}}},"HN":{"names":{"es":"Honduras","en":"Honduras"},"dayoff":"sunday","langs":["es"],"zones":["America/Tegucigalpa"],"days":{"01-01":{"_name":"01-01"},"03-19":{"_name":"Fathers Day","type":"observance"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"04-14":{"name":{"es":"Día de las Américas"}},"05-01":{"_name":"05-01"},"2nd monday in May":{"_name":"Mothers Day","type":"observance"},"06-11":{"name":{"en":"Pupil\'s Day","es":"Día del Estudiante"},"type":"observance"},"09-10":{"name":{"en":"Children\'s Day","es":"Día del Niño"},"type":"observance"},"09-15":{"_name":"Independence Day"},"09-17":{"name":{"en":"Teacher\'s Day","es":"Día del Maestro"},"type":"observance"},"10-03":{"name":{"en":"Soldier\'s Day","es":"Día del Soldado"}},"10-12":{"name":{"es":"Día de la Raza","en":"Columbus Day"}},"10-21":{"name":{"es":"Día de las Fuerzas Armadas","en":"Armed forces Day"}},"12-25":{"_name":"12-25"}}},"HR":{"names":{"hr":"Hrvatska","en":"Croatia"},"langs":["hr"],"zones":["Europe/Belgrade"],"days":{"01-01":{"_name":"01-01","type":"public"},"01-06":{"_name":"01-06","type":"public"},"easter -47":{"_name":"easter -47","type":"observance"},"easter":{"_name":"easter","type":"public"},"easter 1":{"_name":"easter 1","type":"public"},"easter 60":{"_name":"easter 60","type":"public"},"03-08":{"_name":"03-08","type":"observance"},"05-01":{"_name":"05-01","type":"public"},"05-30":{"name":{"hr":"Dan državnosti","en":"National Day"},"type":"public","active":[{"from":"2020-01-01"}]},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"06-22":{"name":{"hr":"Dan antifašističke borbe","en":"Anti-Fascist Struggle Day"},"type":"public"},"06-25 #1":{"name":{"hr":"Dan državnosti","en":"Statehood Day"},"type":"public","active":[{"to":"2020-01-01"}]},"06-25":{"name":{"hr":"Dan neovisnosti","en":"Independence Day"},"type":"observance","active":[{"from":"2020-01-01"}]},"08-05":{"name":{"hr":"Dan pobjede i domovinske zahvalnosti i Dan hrvatskih branitelja","en":"Victory and Homeland Thanksgiving Day and the Day of Croatian defenders"},"type":"public"},"08-15":{"_name":"08-15","type":"public"},"10-08 #1":{"name":{"hr":"Dan neovisnosti","en":"Independence Day"},"type":"public","active":[{"to":"2020-01-01"}]},"10-08":{"name":{"hr":"Dan Hrvatskoga sabora","en":"Day of the Croatian Parliament"},"type":"observence","active":[{"from":"2020-01-01"}]},"11-01":{"_name":"11-01","type":"public"},"11-18 #1":{"name":{"hr":"Dan sjećanja na žrtvu Vukovara i Škabrnje","en":"Remembrance Day"},"type":"observance","active":[{"to":"2020-01-01"}]},"11-18":{"name":{"hr":"Dan sjećanja na žrtve Domovinskog rata i Dan sjećanja na žrtvu Vukovara i Škabrnje","en":"Remembrance Day"},"type":"public","active":[{"from":"2020-01-01"}]},"12-25":{"_name":"12-25","type":"public"},"12-26":{"_name":"12-26","type":"public"},"orthodox":{"_name":"orthodox","type":"optional","note":"Orthodox believers (legally defined as Christians who follow the Julian Calender)"},"orthodox 1":{"_name":"orthodox 1","type":"optional","note":"Orthodox believers (legally defined as Christians who follow the Julian Calender)"},"julian 12-25":{"_name":"julian 12-25","type":"optional","note":"Orthodox believers (legally defined as Christians who follow the Julian Calender)"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah","type":"optional","note":"Muslim believers"},"1 Shawwal":{"_name":"1 Shawwal","type":"optional","note":"Muslim believers"},"1 Tishrei":{"_name":"10 Tishrei","type":"optional","note":"Jewish believers"},"10 Tishrei":{"_name":"10 Tishrei","type":"optional","note":"Jewish believers"}},"regions":{"17":{"name":"Split-Dalmatia","days":{"05-07":{"name":{"hr":"Sveti Duje","en":"Saint Domnius"},"type":"optional"}}},"19":{"name":"Dubrovnik-Neretva","days":{"02-03":{"name":{"hr":"Sveti Vlaho","en":"Saint Blaise"},"type":"optional"}}}}},"HT":{"names":{"fr":"Haïti","en":"Haiti"},"dayoff":"sunday","langs":["fr"],"zones":["America/Port-au-Prince"],"days":{"01-01":{"_name":"Independence Day"},"01-02":{"name":{"fr":"Jour des Aieux","en":"Ancestry Day"}},"01-06":{"_name":"01-06","name":{"fr":"Le Jour des Rois"},"type":"observance"},"easter -48 14:00":{"name":{"fr":"Lundi Gras","en":"Lundi Gras"}},"easter -47":{"name":{"fr":"Mardi Gras","en":"Mardi Gras"}},"easter -46":{"_name":"easter -46","type":"observance"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 39":{"_name":"easter 39"},"easter 60":{"_name":"easter 60"},"05-01":{"_name":"05-01"},"05-18":{"name":{"fr":"Jour du Drapeau et de l\'Université","en":"Flag and Universities\' Day"}},"08-15":{"_name":"08-15"},"10-17":{"name":{"fr":"Anniversaire de la mort de Dessalines","en":"Anniversary of the death of Dessalines"}},"11-01":{"_name":"11-01"},"11-02":{"_name":"11-02"},"11-18":{"name":{"fr":"Vertières","en":"Battle of Vertières Day"}},"12-05":{"name":{"fr":"Découverte d\'Haïti","en":"Discovery Day"},"type":"observance"},"12-25":{"_name":"12-25"}}},"HU":{"names":{"hu":"Magyarország","en":"Hungary"},"dayoff":"sunday","langs":["hu"],"zones":["Europe/Budapest"],"days":{"01-01":{"_name":"01-01","type":"public"},"02-01":{"name":{"hu":"A köztársaság emléknapja","en":"Memorial Day of the Republic"},"type":"observance"},"02-25":{"name":{"hu":"A kommunista diktatúrák áldozatainak emléknapja","en":"Memorial Day for the Victims of the Communist Dictatorships"},"type":"observance"},"03-08":{"_name":"03-08","type":"observance"},"03-15":{"name":{"hu":"1948-as forradalom","en":"National Day"},"type":"public"},"04-16":{"name":{"en":"Memorial Day for the Victims of the Holocaust","hu":"A holokauszt áldozatainak emléknapja"},"type":"observance"},"easter":{"_name":"easter","type":"public"},"easter 1":{"_name":"easter 1","type":"public"},"05-01":{"_name":"05-01","type":"public"},"1st sunday in May":{"_name":"Mothers Day","type":"observance"},"05-21":{"name":{"en":"National Defense Day","hu":"Honvédelmi nap"},"type":"observance"},"easter 49":{"_name":"easter 49","type":"public"},"easter 50":{"_name":"easter 50","type":"public"},"06-04":{"name":{"en":"Day of National Unity","hu":"A nemzeti összetartozás napja"},"type":"observance"},"06-19":{"name":{"en":"Day of the Independent Hungary","hu":"A független Magyarország napja"},"type":"observance"},"08-20":{"name":{"hu":"Szent István ünnepe","en":"Saint Stephen\'s Day"},"type":"public"},"10-06":{"name":{"en":"Memorial Day for the Martyrs of Arad","hu":"Az aradi vértanúk emléknapja"},"type":"observance"},"10-23":{"name":{"hu":"1956-os forradalom","en":"National Day"},"type":"public"},"11-01":{"_name":"11-01","type":"public"},"12-06":{"_name":"12-06"},"12-24":{"_name":"12-24","type":"optional"},"12-25":{"_name":"12-25","type":"public"},"12-26":{"_name":"12-26","type":"public"},"12-31":{"_name":"12-31","type":"observance"}}},"ID":{"names":{"en":"Indonesia","id":"Indonesia"},"langs":["id"],"zones":["Asia/Jakarta","Asia/Pontianak","Asia/Makassar","Asia/Jayapura"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"chinese 01-0-01":{"name":{"en":"Chinese New Year","id":"Tahun Baru Imlek"}},"easter -2":{"_name":"easter -2"},"05-01":{"_name":"05-01"},"easter 39":{"_name":"easter 39"},"06-01":{"name":{"en":"Pancasila Day","id":"Hari Lahir Pancasila"}},"08-21":{"_name":"Independence Day"},"12-25":{"_name":"12-25"},"1 Muharram":{"_name":"1 Muharram"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal"},"27 Rajab":{"_name":"27 Rajab"},"1 Shawwal":{"_name":"1 Shawwal"},"2 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"},"2009-03-26":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2010-03-16":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2011-03-05":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2012-03-23":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2013-03-12":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2014-03-31":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2015-03-21":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2016-03-09":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2017-03-28":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2018-03-17":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2019-03-07":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2020-03-25":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2021-03-14":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2022-03-03":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2023-03-22":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2024-03-11":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2025-03-29":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2026-03-19":{"name":{"en":"Nyepi","id":"Hari Raya Nyepi"}},"2001-05-07":{"_name":"Vesak"},"2002-05-26":{"_name":"Vesak"},"2003-05-16":{"_name":"Vesak"},"2004-06-03":{"_name":"Vesak"},"2005-05-24":{"_name":"Vesak"},"2006-05-13":{"_name":"Vesak"},"2007-06-01":{"_name":"Vesak"},"2008-05-20":{"_name":"Vesak"},"2009-05-09":{"_name":"Vesak"},"2010-05-28":{"_name":"Vesak"},"2011-05-17":{"_name":"Vesak"},"2012-05-06":{"_name":"Vesak"},"2013-05-25":{"_name":"Vesak"},"2014-05-15":{"_name":"Vesak"},"2015-06-02":{"_name":"Vesak"},"2016-05-22":{"_name":"Vesak"},"2017-05-11":{"_name":"Vesak"},"2018-05-29":{"_name":"Vesak"},"2019-05-19":{"_name":"Vesak"},"2020-05-07":{"_name":"Vesak"}}},"IE":{"names":{"en":"Ireland"},"dayoff":"sunday","zones":["Europe/Dublin"],"langs":["en"],"days":{"01-01":{"_name":"01-01"},"03-17":{"name":{"en":"St. Patrick’s Day"}},"03-17 and if saturday then next monday if sunday then next monday":{"name":{"en":"St. Patrick’s Day"},"substitute":true,"type":"bank"},"easter -21":{"_name":"Mothers Day","type":"observance"},"easter -2":{"_name":"easter -2","type":"bank"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"1st monday in May":{"name":{"en":"May Day"}},"1st monday in June":{"name":{"en":"First Monday in June"}},"1st monday in August":{"name":{"en":"First Monday in August"}},"1st monday before 10-31":{"name":{"en":"October Bank Holiday","type":"bank"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26","name":{"en":"St. Stephen\'s Day"}},"12-26 and if saturday then next monday if sunday then next monday":{"_name":"12-26","name":{"en":"St. Stephen\'s Day"},"substitute":true,"type":"bank"},"12-27 if saturday then next monday if sunday then next tuesday":{"name":{"en":"Christmas Bank Holiday"},"type":"bank"}}},"IM":{"names":{"en":"Isle of Man"},"zones":["Europe/Isle_of_Man"],"langs":["en"],"_days":["GB"],"days":{"2nd friday in June":{"name":{"en":"Tourist Trophy, Senior Race Day"}},"07-05":{"name":{"en":"Tynwald Day"}}}},"IS":{"names":{"is":"Ísland","en":"Iceland"},"dayoff":"sunday","zones":["Atlantic/Reykjavik"],"langs":["is"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06","type":"observance"},"friday after 01-18":{"name":{"is":"Bóndadagur"},"type":"observance"},"02-18":{"name":{"is":"Konudagur","en":"Woman\'s Day"},"type":"observance"},"easter -48":{"name":{"is":"Bolludagur"},"type":"observance"},"easter -47":{"name":{"is":"Sprengidagur"},"type":"observance"},"easter -46":{"_name":"easter -46","type":"observance"},"easter -7":{"_name":"easter -7","type":"observance"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"thursday after 04-18":{"name":{"is":"Sumardagurinn fyrsti","en":"First Day of Summer"}},"05-01":{"_name":"05-01"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"1st sunday in June":{"name":{"is":"Sjómannadagurinn","en":"The Seamen\'s Day"},"type":"observance"},"06-17":{"name":{"is":"Íslenski þjóðhátíðardagurinn","en":"Icelandic National Day"}},"monday in August":{"name":{"is":"Frídagur verslunarmanna","en":"Commerce Day"}},"saturday after 10-21":{"name":{"is":"Fyrsti vetrardagur","en":"First Day of Winter"},"type":"observance"},"11-16":{"name":{"is":"Dagur íslenskrar tungu","en":"Icelandic Language Day"},"type":"observance"},"12-23":{"name":{"is":"Þorláksmessa","en":"St Þorlákur\'s Day"},"type":"observance"},"12-24 13:00 if sunday then 00:00":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12-31 13:00 if sunday then 00:00":{"_name":"12-31"}}},"IT":{"names":{"it":"Italia","en":"Italia"},"dayoff":"sunday","zones":["Europe/Rome"],"langs":["it"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"04-25":{"name":{"it":"Anniversario della Liberazione","en":"Liberation Day"}},"05-01":{"_name":"05-01"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"06-02":{"name":{"it":"Festa della Repubblica","en":"Republic Day"}},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"2011-03-17":{"name":{"it":"Festa Nazionale 2011","en":"National Day 2011"}}},"states":{"32":{"name":"Südtirol, Alto Adige","days":{"easter 50":{"_name":"easter 50"}}}}},"JE":{"names":{"en":"Jersey"},"zones":["Europe/Jersey"],"langs":["en"],"_days":["GB"],"days":{"05-09":{"name":{"en":"Liberation Day"}}}},"JM":{"names":{"en":"Jamaica"},"dayoff":"sunday","langs":["en"],"zones":["America/Jamaica"],"days":{"01-01 and if sunday then next monday":{"_name":"01-01","substitute":true},"easter -46":{"_name":"easter -46"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-23 if saturday,sunday then next monday":{"_name":"05-01"},"08-01 if sunday then next monday":{"name":{"en":"Emancipation Day"}},"08-06 and if sunday then next monday":{"_name":"Independence Day","substitute":true},"3rd monday in October":{"name":{"en":"National Heroes Day"}},"12-25 and if sunday then next tuesday":{"_name":"12-25","substitute":true},"12-26 and if sunday then next monday":{"_name":"12-26","substitute":true}}},"JP":{"names":{"jp":"日本","en":"Japan"},"dayoff":"sunday","langs":["jp"],"zones":["Asia/Tokyo"],"days":{"01-01":{"_name":"01-01"},"substitutes 01-01 if sunday then next monday":{"substitute":true,"_name":"01-01","active":[{"from":"1973-04-12T00:00:00.000Z"}]},"01-02":{"name":{"en":"January 2nd","jp":"銀行休業日"},"type":"bank"},"01-03":{"name":{"en":"January 3rd","jp":"銀行休業日"},"type":"bank"},"01-15":{"name":{"en":"Coming of Age Day","jp":"成人の日"},"active":[{"from":"1948-07-20T00:00:00.000Z","to":"1999-12-31T00:00:00.000Z"}]},"substitutes 01-15 and if sunday then next monday":{"substitute":true,"name":{"en":"Coming of Age Day","jp":"成人の日"},"active":[{"from":"1973-04-12T00:00:00.000Z","to":"1999-12-31T00:00:00.000Z"}]},"2nd monday in January":{"name":{"en":"Coming of Age Day","jp":"成人の日"},"active":[{"from":"2000-01-01T00:00:00.000Z"}]},"02-11":{"name":{"en":"Foundation Day","jp":"建国記念の日"},"active":[{"from":"1967-01-01T00:00:00.000Z"}]},"substitutes 02-11 and if sunday then next monday":{"substitute":true,"name":{"en":"Foundation Day","jp":"建国記念の日"},"active":[{"from":"1973-04-12T00:00:00.000Z"}]},"02-23 and if sunday then next monday":{"substitute":true,"name":{"en":"Emperor\'s Birthday","jp":"天皇誕生日"},"active":[{"from":"2020-01-01T00:00:00.000Z"}]},"march equinox in +09:00":{"name":{"en":"Spring Equinox Day","jp":"春分の日"},"active":[{"from":"1948-07-20T00:00:00.000Z"}]},"substitutes march equinox in +09:00 and if sunday then next monday":{"substitute":true,"name":{"en":"Spring Equinox Day","jp":"春分の日"},"active":[{"from":"1973-04-12T00:00:00.000Z"}]},"04-29":{"name":{"en":"Emperor\'s Birthday","jp":"天皇誕生日"},"active":[{"from":"1948-07-20T00:00:00.000Z","to":"1988-12-31T00:00:00.000Z"}]},"substitutes 04-29 and if sunday then next monday":{"substitute":true,"name":{"en":"Emperor\'s Birthday","jp":"天皇誕生日"},"active":[{"from":"1973-04-12T00:00:00.000Z","to":"1988-12-31T00:00:00.000Z"}]},"04-29 and if sunday then next monday #1":{"substitute":true,"name":{"en":"Greenery Day","jp":"みどりの日"},"active":[{"from":"1989-01-01T00:00:00.000Z","to":"2006-12-31T00:00:00.000Z"}]},"04-29 and if sunday then next monday #2":{"substitute":true,"name":{"en":"Showa Day","jp":"昭和の日"},"active":[{"from":"2007-01-01T00:00:00.000Z"}]},"2019-04-30":{"name":{"en":"Citizens\' Holiday","jp":"国民の休日"}},"2019-05-01":{"name":{"en":"Coronation Day","jp":"即位の日"}},"2019-05-02":{"name":{"en":"Citizens\' Holiday","jp":"国民の休日"}},"05-03":{"_name":"Constitution Day"},"substitutes 05-03 if sunday then next monday":{"substitute":true,"_name":"Constitution Day","active":[{"from":"1973-04-12T00:00:00.000Z","to":"2006-12-31T00:00:00.000Z"}]},"substitutes 05-03 if sunday then next wednesday":{"substitute":true,"_name":"Constitution Day","active":[{"from":"2007-01-01T00:00:00.000Z"}]},"05-04 not on sunday, monday":{"name":{"en":"Citizens\' Holiday","jp":"国民の休日"},"active":[{"from":"1986-01-01T00:00:00.000Z","to":"2006-12-31T00:00:00.000Z"}]},"05-04 and if sunday then next tuesday":{"substitute":true,"name":{"en":"Greenery Day","jp":"みどりの日"},"active":[{"from":"2007-01-01T00:00:00.000Z"}]},"05-05":{"name":{"en":"Children\'s Day","jp":"こどもの日"}},"substitutes 05-05 if sunday then next monday":{"substitute":true,"name":{"en":"Children\'s Day","jp":"こどもの日"},"active":[{"from":"1973-04-12T00:00:00.000Z"}]},"07-20":{"substitute":true,"name":{"en":"Marine Day","jp":"海の日"},"active":[{"from":"1996-01-01T00:00:00.000Z","to":"2002-12-31T00:00:00.000Z"}]},"3rd monday in July":{"name":{"en":"Marine Day","jp":"海の日"},"disable":["2020-07-20","2021-07-19"],"enable":["2020-07-23","2021-07-22"],"active":[{"from":"2003-01-01T00:00:00.000Z"}]},"substitutes 2021-08-08 and if sunday then next monday":{"substitute":true,"name":{"en":"Mountain Day","jp":"山の日"}},"substitutes 08-11 and if sunday then next monday":{"substitute":true,"name":{"en":"Mountain Day","jp":"山の日"},"disable":["2020-08-11","2021-08-11"],"enable":["2020-08-10"],"active":[{"from":"2016-01-01T00:00:00.000Z"}]},"09-15":{"name":{"en":"Respect-for-the-Aged Day","jp":"敬老の日"},"active":[{"from":"1966-01-01T00:00:00.000Z","to":"2002-12-31T00:00:00.000Z"}]},"substitutes 09-15 and if sunday then next monday":{"substitute":true,"name":{"en":"Respect-for-the-Aged Day","jp":"敬老の日"},"active":[{"from":"1973-04-12T00:00:00.000Z","to":"2002-12-31T00:00:00.000Z"}]},"3rd monday in September":{"name":{"en":"Respect-for-the-Aged Day","jp":"敬老の日"},"active":[{"from":"2003-01-01T00:00:00.000Z"}]},"09-22 if 09-21 and 09-23 is public holiday":{"name":{"en":"Citizens\' Holiday","jp":"国民の休日"}},"september equinox in +09:00":{"name":{"en":"Autumnal Equinox Day","jp":"秋分の日"},"active":[{"from":"1948-07-20T00:00:00.000Z"}]},"substitutes september equinox in +09:00 and if sunday then next monday":{"substitute":true,"name":{"en":"Autumnal Equinox Day","jp":"秋分の日"},"active":[{"from":"1973-04-12T00:00:00.000Z"}]},"10-10":{"name":{"en":"Sports Day","jp":"体育の日"},"active":[{"from":"1966-01-01T00:00:00.000Z","to":"1999-12-31T00:00:00.000Z"}]},"substitutes 10-10 and if sunday then next monday":{"substitute":true,"name":{"en":"Sports Day","jp":"体育の日"},"active":[{"from":"1973-04-12T00:00:00.000Z","to":"1999-12-31T00:00:00.000Z"}]},"2nd monday in October #1":{"name":{"en":"Sports Day","jp":"体育の日"},"active":[{"from":"2000-01-01T00:00:00.000Z","to":"2019-12-31T00:00:00.000Z"}]},"2nd monday in October #2":{"name":{"en":"Sports Day","jp":"スポーツの日"},"disable":["2020-10-12","2021-10-11"],"enable":["2020-07-24","2021-07-23"],"active":[{"from":"2020-01-01T00:00:00.000Z"}]},"2019-10-22":{"name":{"en":"Enthronement Ceremony Day","jp":"即位礼正殿の儀"}},"11-03":{"substitute":true,"name":{"en":"Culture Day","jp":"文化の日"},"active":[{"from":"1948-07-20T00:00:00.000Z"}]},"substitutes 11-03 and if sunday then next monday":{"substitute":true,"name":{"en":"Culture Day","jp":"文化の日"},"active":[{"from":"1973-04-12T00:00:00.000Z"}]},"11-15":{"name":{"en":"Seven-Five-Three Festival","jp":"七五三"},"type":"observance"},"11-23":{"name":{"en":"Labor Thanksgiving Day","jp":"勤労感謝の日"},"active":[{"from":"1948-07-20T00:00:00.000Z"}]},"substitutes 11-23 and if sunday then next monday":{"substitute":true,"name":{"en":"Labor Thanksgiving Day","jp":"勤労感謝の日"},"active":[{"from":"1973-04-12T00:00:00.000Z"}]},"12-23 and if sunday then next monday":{"substitute":true,"name":{"en":"Emperor\'s Birthday","jp":"天皇誕生日"},"active":[{"from":"1989-01-01T00:00:00.000Z","to":"2018-12-31T00:00:00.000Z"}]},"12-25":{"_name":"12-25","type":"observance"},"12-31":{"_name":"12-31","type":"bank"}}},"KE":{"names":{"en":"Kenya"},"dayoff":"sunday","langs":["sw","en"],"zones":["Africa/Nairobi"],"days":{"01-01 and if sunday then next monday":{"substitute":true,"_name":"01-01"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"05-01 and if sunday then next monday":{"substitute":true,"_name":"05-01"},"06-01 and if sunday then next monday":{"substitute":true,"name":{"sw":"Siku ya Madaraka","en":"Madaraka Day"}},"10-10 and if sunday then next monday":{"substitute":true,"name":{"en":"Moi Day"}},"10-20 and if sunday then next monday":{"substitute":true,"name":{"sw":"Siku ya Mashujaa","en":"Mashujaa Day"}},"12-12 and if sunday then next monday":{"substitute":true,"name":{"sw":"Siku ya Jamhuri","en":"Jamhuri Day"}},"12-25 and if sunday then next tuesday":{"substitute":true,"_name":"12-25"},"12-26 and if sunday then next monday":{"substitute":true,"_name":"12-26"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah","note":"For all persons belonging to the Islamic faith."}}},"KR":{"names":{"ko":"대한민국","en":"South Korea"},"dayoff":"sunday","langs":["ko"],"zones":["Asia/Seoul"],"days":{"01-01":{"_name":"01-01"},"korean 01-0-01 P3D":{"name":{"en":"Korean New Year","ko":"설날"}},"03-01":{"name":{"en":"Independence Movement Day","ko":"3·1절"}},"05-05":{"name":{"en":"Children\'s Day","ko":"어린이날"}},"korean 4-0-8":{"name":{"en":"Buddha\'s Birthday","ko":"석가탄신일"}},"06-06":{"name":{"en":"Memorial Day","ko":"현충일"}},"07-17":{"_name":"Constitution Day","type":"observance"},"08-15":{"name":{"en":"Liberation Day","ko":"광복절"}},"korean 8-0-15 P3D":{"name":{"en":"Korean Thanksgiving","ko":"추석"}},"10-03":{"name":{"en":"National Foundation Day","ko":"개천절"}},"10-09":{"name":{"en":"Hangul Day","ko":"한글날"}},"12-25":{"_name":"12-25"}}},"LI":{"names":{"de":"Lichtenstein","en":"Lichtenstein"},"dayoff":"sunday","langs":["de"],"zones":["Europe/Zurich"],"days":{"01-01":{"_name":"01-01"},"01-02":{"name":{"de":"Berchtoldstag","en":"Berchtold Day"},"type":"bank"},"01-06":{"_name":"01-06"},"02-02":{"_name":"02-02","type":"observance"},"03-19":{"_name":"03-19","type":"observance"},"easter -47":{"_name":"easter -47","type":"bank"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 39":{"_name":"easter 39","name":{"de":"Auffahrt"}},"easter 40":{"name":{"de":"Feiertagsbrücke"}},"easter 49":{"_name":"easter 49","type":"observance"},"easter 50":{"_name":"easter 50"},"easter 60":{"_name":"easter 60"},"easter 61":{"name":{"de":"Feiertagsbrücke"}},"08-15":{"name":{"de":"Staatsfeiertag"},"type":"observance"},"09-08":{"name":{"de":"Mariä Geburt"}},"11-01":{"_name":"11-01","type":"observance"},"12-08":{"_name":"12-08"},"12-24":{"_name":"12-24","type":"bank"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26","name":{"de":"Stephanstag"}},"12-31":{"_name":"12-31","type":"bank"}}},"LS":{"names":{"st":"\\\\\'Muso oa Lesotho","en":"Lesotho"},"langs":["st","en"],"zones":["Africa/Johannesburg"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"03-11":{"name":{"en":"Moshoeshoe Day"}},"easter -2":{"_name":"easter -2"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01","name":{"en":"Workers\' Day"}},"easter 39":{"_name":"easter 39"},"05-25":{"name":{"en":"Africa Day/ Heroes\' Day"}},"07-17":{"name":{"en":"King Letsie III\'s Birthday"}},"10-04":{"_name":"Independence Day"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"LT":{"names":{"lt":"Lietuva","en":"Lithuania"},"dayoff":"sunday","langs":["lt"],"zones":["Europe/Vilnius"],"days":{"01-01":{"_name":"01-01"},"02-16":{"name":{"en":"Day of Restoration of the State of Lithuania","lt":"Lietuvos valstybės atkūrimo diena"}},"03-11":{"name":{"en":"Day of Restoration of Independence of Lithuania","lt":"Lietuvos nepriklausomybės atkūrimo diena"}},"easter":{"_name":"easter"},"05-01":{"_name":"05-01"},"1st sunday in May":{"_name":"Mothers Day","type":"observance"},"1st sunday in June":{"_name":"Fathers Day","type":"observance"},"06-24":{"name":{"en":"St. John\'s Day","lt":"Joninės, Rasos"}},"07-06":{"name":{"en":"Statehood Day","lt":"Valstybės diena"}},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"11-02":{"_name":"11-02","active":[{"from":2020}]},"12-24":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"LU":{"names":{"fr":"Luxembourg","en":"Luxembourg"},"langs":["fr"],"zones":["Europe/Luxembourg"],"days":{"01-01":{"_name":"01-01"},"easter -2":{"_name":"easter -2","type":"observance"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01","name":{"fr":"1er mai"}},"05-09":{"_name":"05-09","active":[{"from":"2019-01-01"}]},"easter 39":{"_name":"easter 39"},"easter 50":{"_name":"easter 50"},"06-23":{"name":{"fr":"L’anniversaire du Grand-Duc"}},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"11-11":{"name":{"fr":"Armistice 1918"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"LV":{"names":{"lv":"Latvija","en":"Latvia"},"dayoff":"sunday","langs":["lv"],"zones":["Europe/Riga"],"days":{"01-01":{"_name":"01-01"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"05-04 and if saturday,sunday then next monday":{"substitute":true,"name":{"en":"Restoration of Independence day","lv":"Latvijas Republikas Neatkarības atjaunošanas diena"}},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"06-23":{"name":{"en":"Midsummer Eve","lv":"Līgo Diena"}},"06-24":{"name":{"en":"Midsummer","lv":"Jāņi"}},"11-18 and if saturday,sunday then next monday":{"substitute":true,"name":{"en":"Republic Day","lv":"Latvijas Republikas proklamēšanas diena"}},"12-24":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12-31":{"_name":"12-31"}}},"MC":{"names":{"fr":"Monaco","en":"Monaco"},"dayoff":"sunday","langs":["fr"],"zones":["Europe/Monaco"],"days":{"01-01":{"_name":"01-01"},"01-27 and if sunday then next monday":{"substitute":true,"name":{"en":"Saint Devota\'s Day","fr":"Sainte Dévote"}},"easter -2":{"_name":"easter -2","type":"observance"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01 and if sunday then next monday":{"substitute":true,"_name":"05-01","name":{"fr":"1er mai"}},"easter 39":{"_name":"easter 39"},"easter 50":{"_name":"easter 50"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"11-19 and if sunday then next monday":{"substitute":true,"name":{"en":"H.S.H. the Sovereign Prince\'s Day","fr":"La Fête du Prince"}},"12-08":{"_name":"12-08"},"12-25 and if sunday then next monday":{"substitute":true,"_name":"12-25"}}},"MD":{"names":{"ro":"Republica Moldova","en":"Moldova"},"langs":["ro"],"zones":["Europe/Chisinau"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"julian 12-25 P2D":{"_name":"julian 12-25","name":{"ro":"Craciun pe Rit Vechi"}},"03-08":{"_name":"03-08"},"orthodox":{"_name":"easter"},"orthodox 1":{"_name":"easter 1"},"orthodox 8":{"name":{"ro":"Paştele Blăjinilor","en":"Memorial Day"}},"05-01":{"_name":"05-01"},"05-09":{"name":{"ro":"Ziua Victoriei","en":"Victory Day"}},"08-27":{"_name":"Independence Day"},"08-31":{"name":{"ro":"Limba noastră","en":"National Language Day"}},"1st saturday in October P2D":{"name":{"ro":"Ziua vinului","en":"Wine Day"},"type":"observance","active":[{"from":2013}]},"12-25":{"_name":"12-25","name":{"ro":"Craciun pe stil Nou"}}},"states":{"CA":{"name":"Cahul","days":{"11-21":{"name":{"ro":"Ziua Cahul","en":"Cahul Day"}}}},"CU":{"name":"Chișinău","days":{"10-14":{"name":{"ro":"Ziua capitalului","en":"Capital\'s Day"}}}}}},"ME":{"names":{"hr":"Crna Gora","sr":"Црна Гора","bs":"Crna Gora","sq":"Mali i Zi","en":"Montenegro"},"dayoff":"sunday","langs":["hr","sr","bs","sq"],"zones":["Europe/Belgrade"],"days":{"05-21 and if sunday then next tuesday":{"substitute":true,"_name":"Independence Day"},"05-22 and if sunday then next monday":{"substitute":true,"_name":"Independence Day"},"07-13 and if sunday then next tuesday":{"substitute":true,"name":{"hr":"Dan državnosti","sr":"Дан државности","en":"Statehood Day"}},"07-14 and if sunday then next monday":{"substitute":true,"name":{"hr":"Dan državnosti","sr":"Дан државности","en":"Statehood Day"}},"01-01 and if sunday then next tuesday":{"substitute":true,"_name":"01-01"},"01-02 and if sunday then next monday":{"substitute":true,"_name":"01-01"},"05-01 and if sunday then next tuesday":{"substitute":true,"_name":"05-01"},"05-02 and if sunday then next monday":{"substitute":true,"_name":"05-01"},"julian 12-24":{"_name":"12-24"},"julian 12-25":{"_name":"12-25"},"julian 12-26":{"_name":"12-26"},"julian 01-01":{"_name":"julian 01-01","type":"observance"},"orthodox -2":{"_name":"easter -2"},"orthodox":{"_name":"easter"},"12-24":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-25"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter"},"08-15":{"_name":"08-15","type":"observance"},"11-01":{"_name":"11-01"},"1 Shawwal P3D":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah P3D":{"_name":"10 Dhu al-Hijjah"},"1 Muharram":{"_name":"1 Muharram","type":"observance"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal","type":"observance"},"27 Rajab":{"_name":"27 Rajab","type":"observance"},"15 Shaban":{"_name":"15 Shaban","type":"observance"},"1 Ramadan":{"_name":"1 Ramadan","type":"observance"},"27 Ramadan":{"_name":"27 Ramadan","type":"observance"},"15 Nisan P2D":{"_name":"15 Nisan"},"1 Tishrei":{"_name":"1 Tishrei","type":"observance"},"10 Tishrei P2D":{"_name":"10 Tishrei"}}},"MG":{"names":{"mg":"Repoblikan\'i Madagasikara","fr":"République de Madagascar","en":"Madagascar"},"dayoff":"sunday","langs":["mg","fr","en"],"zones":["Africa/Nairobi"],"days":{"01-01":{"_name":"01-01"},"03-29":{"name":{"mg":"Martioran\'ny tolona tamin\'ny 1947","fr":"Commémoration des martyrs de l\'insurrection de 1947.","en":"Martyrs\' Day"}},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"05-25":{"name":{"mg":"Andron\'i Afrika","fr":"Jour de l\'Afrique","en":"Africa Day"}},"easter 39":{"_name":"easter 39"},"easter 50":{"_name":"easter 50"},"06-26":{"_name":"Independence Day","name":{"mg":"Fetim-pirenena","fr":"Fête Nationale"}},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-25":{"_name":"12-25"}}},"MK":{"names":{"mk":"Република Македонија","en":"Macedonia"},"langs":["mk"],"zones":["Europe/Belgrade"],"dayoff":"sunday","days":{"01-01 and if sunday then next monday":{"substitute":true,"_name":"01-01"},"julian 12-25 and if sunday then next monday":{"substitute":true,"_name":"julian 12-25"},"orthodox":{"_name":"orthodox"},"orthodox 1":{"_name":"orthodox 1"},"05-01 and if sunday then next monday":{"substitute":true,"_name":"05-01"},"05-24 and if sunday then next monday":{"substitute":true,"name":{"mk":"Св. Кирил и Методиј","en":"Saints Cyril and Methodius Day"}},"08-02 and if sunday then next monday":{"substitute":true,"name":{"mk":"Ден на Републиката","en":"Day of the Republic"}},"09-08 and if sunday then next monday":{"substitute":true,"_name":"Independence Day"},"10-11 and if sunday then next monday":{"substitute":true,"name":{"mk":"Ден на востанието","en":"Revolution Day"}},"10-23 and if sunday then next monday":{"substitute":true,"name":{"mk":"Ден на македонската револуционерна борба","en":"Day of the Macedonian Revolutionary Struggle"}},"12-08 and if sunday then next monday":{"substitute":true,"name":{"mk":"Св. Климент Охридски","en":"Saint Clement of Ohrid Day"}},"1 Shawwal and if sunday then next monday":{"substitute":true,"_name":"1 Shawwal"},"julian 12-24":{"_name":"julian 12-24","type":"optional","note":"Orthodox believers"},"julian 01-06":{"_name":"01-06","type":"optional","note":"Orthodox believers"},"orthodox -2":{"_name":"orthodox -2","type":"optional","note":"Orthodox believers"},"orthodox 47":{"name":{"mk":"петок пред Духовден","en":"Friday before Pentecost"},"type":"optional","note":"Orthodox believers"},"orthodox 49":{"_name":"easter 49","type":"optional","note":"Orthodox believers"},"julian 08-15":{"_name":"08-15","type":"optional","note":"Orthodox believers"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah","type":"optional","note":"Muslim believers"},"10 Tishrei":{"_name":"10 Tishrei","type":"optional","note":"Jewish believers"},"easter 1":{"_name":"easter 1","type":"optional","note":"Catholic believers"},"11-01":{"_name":"11-01","type":"optional","note":"Catholic believers"},"12-25":{"_name":"12-25","type":"optional","note":"Catholic believers"},"11-22":{"name":{"mk":"Ден на Албанската азбука","en":"Day of the Albanian Alphabet"},"type":"optional","note":"For members of the Albanian community"},"12-21":{"name":{"mk":"Ден на настава на турски јазик","en":"Turkish Language Day"},"type":"optional","note":"For members of the the Turkish community"},"01-27":{"name":{"mk":"Свети Сава","en":"St. Sava"},"type":"optional","note":"For members of the Serbian community"},"04-08":{"name":{"mk":"Меѓународен ден на Ромите","en":"International Roma Day"},"type":"optional","note":"For members of the the Roma community"},"05-23":{"name":{"mk":"Национален ден на Властите","en":"National Day of Authorities"},"type":"optional","note":"For members of the Vlach community"},"09-28":{"name":{"mk":"Меѓународен ден на Бошњаците","en":"International Day of Bosniaks"},"type":"optional","note":"For Members of the Bosniak community."}}},"MQ":{"names":{"fr":"Martinique","en":"Martinique"},"langs":["fr"],"zones":["America/Martinique"],"dayoff":"sunday","_days":"FR","days":{"easter -2":{"_name":"easter -2"},"05-22":{"_name":"Abolition of Slavery"}}},"MT":{"names":{"mt":"Malta","en":"Malta"},"dayoff":"sunday","langs":["mt"],"zones":["Europe/Malta"],"days":{"01-01":{"_name":"01-01"},"02-10":{"name":{"en":"Feast of Saint Paul\'s Shipwreck in Malta","mt":"Nawfraġju ta\' San Pawl"}},"03-19":{"_name":"03-19"},"03-31":{"name":{"en":"Freedom Day","mt":"Jum il-Ħelsien"}},"easter -2":{"_name":"easter -2"},"05-01":{"_name":"05-01"},"06-07":{"name":{"mt":"Sette Giugno","en":"June 7th"}},"06-29":{"_name":"06-29"},"08-15":{"_name":"08-15"},"09-08":{"name":{"en":"Victory Day","mt":"Jum il-Vitorja"}},"09-21":{"_name":"Independence Day"},"12-08":{"_name":"12-08"},"12-13":{"name":{"en":"Republic Day","mt":"Jum ir-Repubblika"}},"12-25":{"_name":"12-25"}}},"MW":{"names":{"en":"Malawi"},"dayoff":"sunday","langs":["en"],"zones":["Africa/Maputo"],"days":{"01-01 and if saturday,sunday then next monday":{"substitute":true,"_name":"01-01"},"01-15 and if saturday,sunday then next monday":{"substitute":true,"name":{"en":"John Chilembwe Day"}},"03-03 and if saturday,sunday then next monday":{"name":{"en":"Martyrs\' Day"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01 and if saturday,sunday then next monday":{"_name":"05-01"},"05-14 and if saturday,sunday then next monday":{"substitute":true,"name":{"en":"Kamuzu Day"}},"07-06 and if saturday,sunday then next monday":{"substitute":true,"_name":"Independence Day"},"10-15 and if saturday,sunday then next monday":{"substitute":true,"_name":"Mothers Day"},"12-25 and if saturday,sunday then next monday":{"substitute":true,"_name":"12-25"},"1 Shawwal and if saturday,sunday then next monday":{"substitute":true,"_name":"1 Shawwal","name":{"en":"Eid al Fitri"}}}},"MX":{"names":{"es":"México","en":"Mexico"},"dayoff":"sunday","langs":["es"],"zones":["America/Mexico_City","America/Cancun","America/Merida","America/Monterrey","America/Matamoros","America/Mazatlan","America/Chihuahua","America/Ojinaga","America/Hermosillo","America/Tijuana","America/Santa_Isabel","America/Bahia_Banderas"],"days":{"01-01":{"_name":"01-01"},"02-05":{"_name":"Constitution Day"},"1st monday in February":{"name":{"en":"Constitution Day (day off)","es":"Día de la Constitución (día libre)"}},"03-21":{"name":{"en":"Benito Juárez\'s birthday","es":"Natalicio de Benito Juárez"}},"3rd monday in March":{"name":{"en":"Benito Juárez\'s birthday (day off)","es":"Natalicio de Benito Juárez (día libre)"}},"easter -3":{"_name":"easter -3","type":"bank"},"easter -2":{"_name":"easter -2","type":"bank"},"05-01":{"_name":"05-01"},"05-10":{"_name":"Mothers Day","type":"observance"},"09-16":{"_name":"Independence Day"},"11-02":{"_name":"11-02","type":"bank"},"11-20":{"_name":"Revolution Day"},"3rd monday in November":{"name":{"en":"Revolution Day (day off)","es":"Día de la Revolución (día libre)"}},"12-01 every 6 years since 1934":{"name":{"en":"Change of Federal Government","es":"Transmisión del Poder Ejecutivo Federal"}},"12-12":{"name":{"en":"Day of the Virgin of Guadalupe","es":"Día de la Virgen de Guadalupe"},"type":"bank"},"12-25":{"_name":"12-25"}}},"MZ":{"names":{"pt":"Moçambique","en":"Mozambique"},"dayoff":"sunday","langs":["pt"],"zones":["Africa/Maputo"],"days":{"01-01":{"_name":"01-01","name":{"pt":"Dia da Fraternidade universal"}},"substitutes 01-01 if sunday then next monday":{"_name":"Public Holiday"},"02-03":{"name":{"pt":"Dia dos heróis moçambicanos","en":"Heroes’ Day"}},"substitutes 02-03 if sunday then next monday":{"_name":"Public Holiday"},"04-07":{"name":{"pt":"Dia da Mulher Moçambicana","en":"Women’s Day"}},"substitutes 04-07 if sunday then next monday":{"_name":"Public Holiday"},"05-01":{"_name":"05-01","name":{"pt":"Dia Internacional dos Trabalhadores","en":"Workers\' Day"}},"substitutes 05-01 if sunday then next monday":{"_name":"Public Holiday"},"1st sunday in May":{"_name":"Mothers Day","type":"observance"},"06-25":{"_name":"Independence Day","name":{"pt":"Dia da Independência Nacional"}},"substitutes 06-25 if sunday then next monday":{"_name":"Public Holiday"},"09-07":{"name":{"pt":"Dia da Vitória","en":"Lusaka Peace Agreement"}},"substitutes 09-07 if sunday then next monday":{"_name":"Public Holiday"},"09-25":{"name":{"pt":"Dia das Forças Armadas de Libertação Nacional","en":"Defense Force’s Day"}},"substitutes 09-25 if sunday then next monday":{"_name":"Public Holiday"},"10-04":{"name":{"pt":"Dia da Paz e Reconciliação","en":"Peace and Reconciliation Day"}},"substitutes 10-04 if sunday then next monday":{"_name":"Public Holiday"},"12-25":{"_name":"12-25","name":{"pt":"Dia da Família","en":"Family Day"}},"substitutes 12-25 if sunday then next monday":{"_name":"Public Holiday"}}},"NA":{"names":{"en":"Namibia"},"dayoff":"sunday","langs":["en"],"zones":["Africa/Windhoek"],"days":{"01-01":{"_name":"01-01"},"substitutes 01-01 if sunday then next monday":{"name":"Public Holiday"},"03-21":{"_name":"Independence Day"},"substitutes 03-21 if sunday then next monday":{"name":"Public Holiday"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01","name":{"en":"Workers Day"}},"substitutes 05-01 if sunday then next monday":{"name":"Public Holiday"},"05-04":{"name":{"en":"Cassinga Day"}},"substitutes 05-04 if sunday then next monday":{"name":"Public Holiday"},"easter 39":{"_name":"easter 39"},"05-25":{"name":{"en":"Africa Day"}},"substitutes 05-25 if sunday then next monday":{"name":"Public Holiday"},"08-26":{"name":{"en":"Heroes\' Day"}},"substitutes 08-26 if sunday then next monday":{"name":"Public Holiday"},"12-10":{"name":{"en":"Human Rights Day"}},"substitutes 12-10 if sunday then next monday":{"name":"Public Holiday"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26","name":{"en":"Day of Goodwill"}},"substitutes 12-26 if sunday then next monday":{"name":"Public Holiday"}}},"NI":{"names":{"es":"Nicaragua","en":"Nicaragua"},"dayoff":"sunday","langs":["es"],"zones":["America/Managua"],"days":{"01-01":{"_name":"01-01"},"01-18":{"name":{"en":"Birthday of Rubén Darío","es":"Natalicio de Rubén Darío"},"type":"observance"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"05-01":{"_name":"05-01"},"05-30":{"_name":"Mothers Day","name":{"es":"Día de la madre nicaragüense"},"type":"observance"},"06-01":{"name":{"en":"Children\'s Day","es":"Día del niño"}},"06-23":{"_name":"Fathers Day","name":{"es":"Día del padre nicaragüense"},"type":"observance"},"07-19":{"name":{"en":"Revolution Day","es":"Triunfo de la Revolución Popular"}},"09-14":{"name":{"en":"Battle of San Jacinto","es":"Batalla de San Jacinto"}},"09-15":{"_name":"Independence Day"},"10-12":{"name":{"en":"Indigenous Resistance Day","es":"Día de la resistencia indígena"}},"12-08":{"_name":"12-08"},"12-24":{"_name":"12-24","type":"observance"},"12-25":{"_name":"12-25"},"12-31":{"_name":"12-31","type":"observance"}}},"NL":{"names":{"nl":"Nederland","en":"Netherlands"},"dayoff":"sunday","langs":["nl"],"zones":["Europe/Amsterdam"],"days":{"01-01":{"_name":"01-01"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"04-27 if sunday then previous saturday":{"name":{"nl":"Koningsdag"}},"05-04":{"name":{"nl":"Nationale Dodenherdenking"},"type":"observance"},"05-05":{"name":{"nl":"Bevrijdingsdag"}},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"3rd sunday in June":{"_name":"Fathers Day","type":"observance"},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"3rd tuesday in September":{"name":{"nl":"Prinsjesdag"},"note":"Scholen in Den Haag geven meestal 1 dag vrij","type":"observance"},"11-11":{"_name":"11-11","type":"observance"},"12-05":{"name":{"nl":"Sinterklaasavond","en":"St Nicholas\' Eve"},"type":"observance"},"12-15":{"name":{"nl":"Koninkrijksdag","en":"Kingdom Day"},"type":"observance"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12-31":{"_name":"12-31","type":"bank"}}},"NO":{"names":{"no":"Norge","en":"Norway"},"dayoff":"sunday","langs":["no"],"zones":["Europe/Oslo"],"days":{"01-01":{"_name":"01-01"},"2nd sunday in February":{"_name":"Mothers Day","type":"observance"},"easter -49":{"name":{"no":"Fastelavn","en":"Carnival"},"type":"observance"},"easter -7":{"_name":"easter -7","type":"observance"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter -1":{"_name":"easter -1"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"05-08":{"_name":"Liberation Day","type":"observance"},"05-17":{"_name":"Constitution Day","name":{"no":"17. mai"}},"easter 39":{"_name":"easter 39"},"easter 49":{"_name":"easter 49"},"easter 50":{"_name":"easter 50"},"06-23":{"name":{"no":"Sankthansaften","en":"Midsummar Eve"},"type":"observance"},"2nd sunday in November":{"_name":"Fathers Day","type":"observance"},"4th sunday before 12-24":{"name":{"no":"Første søndag i advent","en":"First Sunday of Advent"},"type":"observance"},"3rd sunday before 12-24":{"name":{"no":"Andre søndag i advent","en":"Second Sunday of Advent"},"type":"observance"},"2nd sunday before 12-24":{"name":{"no":"Tredje søndag i advent","en":"Third Sunday of Advent"},"type":"observance"},"1st sunday before 12-24":{"name":{"no":"Fjerde søndag i advent","en":"Fourth Sunday of Advent"},"type":"observance"},"12-24":{"_name":"12-24","type":"bank"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12-31 14:00 if sunday then 00:00":{"_name":"12-31","type":"bank"}}},"NZ":{"names":{"en":"New Zealand"},"dayoff":"sunday","langs":["en"],"zones":["Pacific/Auckland","Pacific/Chatham"],"days":{"01-01 and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"01-01"},"01-02 and if saturday then next monday if sunday then next tuesday":{"substitute":true,"name":{"en":"Day after New Year\'s Day"}},"02-06 and if saturday,sunday then next monday":{"substitute":true,"name":{"en":"Waitangi Day"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"04-25 and if saturday,sunday then next monday":{"substitute":true,"name":{"en":"ANZAC Day"}},"1st monday in June":{"name":{"en":"Queen\'s Birthday"}},"4th monday in October":{"_name":"05-01"},"12-25 and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"12-25"},"12-26 and if saturday then next monday if sunday then next tuesday":{"substitute":true,"_name":"12-26"}},"states":{"AUK":{"name":"Auckland Province","days":{"01-29 if tuesday,wednesday,thursday then previous monday if friday,saturday,sunday then next monday":{"name":{"en":"Provincial anniversary day"}}}},"CAN":{"name":"Canterbury","days":{"friday after 2nd tuesday in November":{"name":{"en":"Christchurch Show Day"}}},"regions":{"S":{"name":"South Canterbury","days":{"friday after 2nd tuesday in November":false,"4th monday in September":{"name":{"en":"Dominion Day"}}}}}},"CIT":{"name":"Chatham Islands","days":{"11-30 if tuesday,wednesday,thursday then previous monday if friday,saturday,sunday then next monday":{"name":{"en":"Provincial anniversary day"}}}},"HKB":{"name":"Hawke\'s Bay","days":{"friday before 4th monday in October":{"name":{"en":"Provincial anniversary day"}}}},"MBH":{"name":"Marlborough","days":{"5th monday in October":{"name":{"en":"Provincial anniversary day"}}}},"NSN":{"name":"Nelson","days":{"02-01 if tuesday,wednesday,thursday then previous monday if friday,saturday,sunday then next monday":{"name":{"en":"Provincial anniversary day"}}}},"NTL":{"name":"Northland","days":{"01-29 if tuesday,wednesday,thursday then previous monday if friday,saturday,sunday then next monday":{"name":{"en":"Provincial anniversary day"}}}},"OTA":{"name":"Otago Province","days":{"03-23 if tuesday,wednesday,thursday then previous monday if friday,saturday,sunday then next monday":{"name":{"en":"Provincial anniversary day"},"note":"varies if coincides with easter monday"}}},"STL":{"name":"Southland","days":{"easter 2":{"name":{"en":"Provincial anniversary day"}}}},"TKI":{"name":"Taranaki","days":{"2nd monday in March":{"name":{"en":"Provincial anniversary day"}}}},"WGN":{"name":"Wellington Province","days":{"01-22 if tuesday,wednesday,thursday then previous monday if friday,saturday,sunday then next monday":{"name":{"en":"Provincial anniversary day"}}}},"WTC":{"name":"Westland","days":{"12-01 if tuesday,wednesday,thursday then previous monday if friday,saturday,sunday then next monday":{"name":{"en":"Provincial anniversary day"}}}}}},"PA":{"names":{"es":"Panamá","en":"Panama"},"dayoff":"sunday","langs":["es"],"zones":["America/Panama"],"days":{"01-01 and if sunday then next monday":{"substitute":true,"_name":"01-01"},"01-09 and if sunday then next monday":{"substitute":true,"name":{"en":"Martyrs\' Day","es":"Día de los Mártires Caídos en la Gesta Patriótica"}},"easter -48":{"_name":"easter -48","type":"observance"},"easter -47":{"_name":"easter -47"},"easter -2":{"_name":"easter -2"},"05-01 and if sunday then next monday":{"substitute":true,"_name":"05-01"},"07-01 every 5 years since 2014":{"name":{"en":"Presidential Inauguration"}},"11-03 and if sunday then next monday":{"substitute":true,"name":{"en":"Separation Day (from Columbia)","es":"Día de la Separación (de Colombia)"}},"11-10 and if sunday then next monday":{"substitute":true,"name":{"es":"Primer Grito de Independencia"}},"11-28 and if sunday then next monday":{"substitute":true,"_name":"Independence Day"},"12-08 and if sunday then next monday":{"substitute":true,"_name":"Mothers Day"},"12-25 and if sunday then next monday":{"substitute":true,"_name":"12-25"}}},"PE":{"names":{"es":"Perú","en":"Peru"},"dayoff":"sunday","langs":["es","qu"],"zones":["America/Lima"],"days":{"01-01":{"_name":"01-01"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"05-01":{"_name":"05-01"},"06-29":{"_name":"06-29"},"07-28":{"_name":"Independence Day"},"07-29":{"_name":"Independence Day"},"08-30":{"name":{"en":"Santa Rosa de Lima","es":"Día de Santa Rosa de Lima"}},"10-08":{"name":{"en":"Battle of Angamos","es":"Combate de Angamos"}},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-25":{"_name":"12-25"}},"regions":{"CUS":{"name":"Cuzco","days":{"06-24":{"name":{"en":"Festival of the Sun","es":"Fiesta Inca del Sol","qu":"Inti Raymi"},"type":"observance"}}}}},"PH":{"names":{"en":"Philippines"},"langs":["en","fil"],"zones":["Asia/Manila"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"01-23":{"type":"observance","name":{"en":"First Philippine Republic Day","fil":"Araw ng Unang Republika ng Pilipinas"}},"chinese 01-0-01":{"type":"optional","name":{"en":"Chinese New Year","fil":"Bagong Taon ng mga Tsino"}},"02-02":{"type":"observance","_name":"Constitution Day"},"chinese 01-0-15":{"type":"observance","name":{"en":"Lantern Festival","fil":"Piyesta ng mga Parol Tsino"}},"02-25":{"name":{"en":"EDSA Revolution Anniversary","fil":"Anibersaryo ng Rebolusyon sa EDSA"},"type":"optional","note":"Non-working Day"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter -1":{"_name":"easter -1","type":"optional","note":"Non-working Day"},"easter":{"_name":"easter"},"04-09":{"name":{"en":"Day of Valor","fil":"Araw ng Kagitingan"}},"04-27":{"type":"observance","name":{"en":"Lapu-Lapu Day","fil":"Araw ni Lapu-Lapu"}},"05-01":{"_name":"05-01","name":{"en":"Labour Day","fil":"Araw ng mga Manggagawa"}},"06-12":{"_name":"Independence Day"},"06-19":{"type":"observance","name":{"en":"José Rizal\'s birthday","fil":"Araw ng Kapanganakan ni José Rizal"},"active":[{"from":"1961-01-01T00:00:00.000Z"}],"disable":["2011-06-19"]},"2011-06-19":{"name":{"en":"José Rizal\'s birthday","fil":"Araw ng Kapanganakan ni José Rizal"}},"07-27":{"type":"observance","name":{"en":"Iglesia ni Cristo Day","fil":"Araw ng Iglesia ni Cristo"}},"08-21":{"name":{"en":"Ninoy Aquino Day","fil":"Araw ng Kabayanihan ni Ninoy Aquino"},"type":"optional","note":"Non-working Day"},"1st monday before September":{"name":{"en":"National Heroes\' Day","fil":"Araw ng mga Bayani"}},"chinese 08-0-15":{"type":"observance","name":{"en":"Mid-Autumn Festival","fil":"Piyestang Zhōngqiū Jié"}},"11-01":{"_name":"11-01","type":"optional","note":"Non-working Day"},"11-02":{"_name":"11-02","type":"optional","note":"Non-working Day"},"11-30":{"name":{"en":"Bonifacio Day","fil":"Araw ng Kapanganakan ni Bonifacio"}},"12-08":{"_name":"12-08","name":{"en":"Feast of the Immaculate Conception of the Blessed Virgin Mary","fil":"Pagdiriwang ng Kalinis-linisang Paglilihi sa Mahal na Birheng Maria"},"type":"optional","note":"Non-working Day"},"12-24":{"_name":"12-24","type":"optional","note":"Non-working Day"},"12-25":{"_name":"12-25"},"12-30":{"name":{"en":"Rizal Day","fil":"Paggunita sa Kamatayan ni Dr. Jose Rizal"}},"12-31":{"_name":"12-31","type":"optional","note":"Non-working Day"},"1 Muharram":{"type":"observance","_name":"1 Muharram"},"12 Rabi al-awwal":{"type":"observance","_name":"12 Rabi al-awwal"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}}},"PL":{"names":{"pl":"Polska","en":"Poland"},"dayoff":"sunday","langs":["pl"],"zones":["Europe/Warsaw"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01","name":{"pl":"Święto Państwowe; Święto Pracy"}},"05-03":{"name":{"pl":"Święto Narodowe Trzeciego Maja","en":"Constitution Day"}},"05-26":{"_name":"Mothers Day","type":"observance"},"easter 49":{"_name":"easter 49"},"easter 60":{"_name":"easter 60"},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"11-11":{"_name":"Independence Day"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"PT":{"names":{"pt":"Portugal","en":"Portugal"},"dayoff":"sunday","langs":["pt"],"zones":["Europe/Lisbon","Atlantic/Madeira","Atlantic/Azores"],"days":{"01-01":{"_name":"01-01"},"easter -47":{"_name":"easter -47","type":"observance"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"04-25":{"name":{"pt":"Dia da Liberdade","en":"Liberty Day"}},"05-01":{"_name":"05-01"},"1st sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 60":{"_name":"easter 60"},"06-10":{"name":{"pt":"Dia de Portugal","en":"Portugal Day"}},"08-15":{"_name":"08-15"},"10-05":{"name":{"pt":"Implantação da República"}},"11-01":{"_name":"11-01"},"12-01":{"name":{"pt":"Restauração da Independência"}},"12-08":{"_name":"12-08"},"12-24":{"_name":"12-24","type":"observance"},"12-25":{"_name":"12-25"},"12-31":{"_name":"12-31","type":"observance"}}},"PY":{"names":{"es":"Paraguay","en":"Paraguay"},"dayoff":"sunday","langs":["es"],"zones":["America/Asuncion"],"days":{"01-01":{"_name":"01-01"},"03-01":{"disable":["2017-03-01"],"enable":["2017-02-27"],"name":{"en":"Heroes\' Day","es":"Dia de los héroes"}},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"04-30":{"name":{"en":"Teacher\'s Day","es":"Día del Maestro"},"type":"optional","note":"Affects educational institutions"},"05-01":{"_name":"05-01"},"05-14":{"_name":"Independence Day"},"05-15":{"_name":"Independence Day"},"06-12 if tuesday,wednesday,thursday,friday,saturday,sunday then next monday":{"name":{"en":"Chaco Armistice","es":"Día de la Paz del Chaco"}},"08-15":{"_name":"08-15","disable":["2017-08-15"],"enable":["2017-08-14"]},"09-29":{"disable":["2017-09-29"],"enable":["2017-10-02"],"name":{"en":"Boqueron Battle Victory Day","es":"Victoria de Boquerón"}},"12-08":{"_name":"12-08","name":{"en":"Virgin of Caacupe","es":"Virgen de Caacupé"}},"12-25":{"_name":"12-25"},"12-31":{"_name":"12-31","type":"bank"}}},"RE":{"names":{"fr":"Réunion","en":"Réunion"},"langs":["fr"],"zones":["Indian/Reunion"],"dayoff":"","_days":"FR","days":{"12-20":{"_name":"Abolition of Slavery"}}},"RO":{"names":{"ro":"Romania","en":"Romania"},"dayoff":"sunday","langs":["ro"],"zones":["Europe/Bucharest"],"days":{"01-01":{"_name":"01-01"},"01-24":{"name":{"ro":"Ziua Unirii","en":"Unification Day"}},"03-08":{"name":{"ro":"Ziua Mamei"},"type":"observance"},"orthodox -2":{"_name":"easter -2"},"orthodox":{"_name":"easter"},"orthodox 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"orthodox 39":{"_name":"easter 39","type":"observance"},"orthodox 49":{"_name":"easter 49"},"orthodox 50":{"_name":"easter 50"},"1st sunday in May":{"_name":"Mothers Day","type":"observance"},"06-01":{"name":{"ro":"Ziua Copilului","en":"Children\'s Day"}},"06-26":{"name":{"ro":"Ziua drapelului national","en":"Flag Day"},"type":"observance"},"07-29":{"name":{"ro":"Ziua Imnului național","en":"National Anthem Day"},"type":"observance"},"08-15":{"_name":"08-15"},"11-30":{"name":{"ro":"Sfântul Andrei","en":"St Andrew\'s Day"}},"12-01":{"name":{"ro":"Ziua națională, Ziua Marii Uniri","en":"National holiday"}},"12-08":{"_name":"Constitution Day","type":"observance"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"RS":{"names":{"sr":"Република Србија","en":"Serbia"},"langs":["sr"],"zones":["Europe/Belgrade"],"dayoff":"sunday","days":{"01-01 if sunday then next tuesday":{"_name":"01-01"},"01-02 if sunday then next monday":{"_name":"01-01"},"julian 12-25":{"_name":"julian 12-25"},"02-15 if sunday then next tuesday":{"name":{"sr":"Дан државности Србије","en":"Statehood Day"}},"02-16 if sunday then next monday":{"name":{"sr":"Дан државности Србије","en":"Statehood Day"}},"orthodox -2":{"_name":"orthodox -2"},"orthodox":{"_name":"orthodox"},"orthodox 1":{"_name":"orthodox 1"},"05-01 if sunday then next tuesday":{"_name":"05-01"},"05-02 if sunday then next monday":{"_name":"05-01"},"11-11 if sunday then next monday":{"name":{"sr":"Дан примирја","en":"Armistice Day"}},"easter -2":{"_name":"easter -2","type":"optional","note":"Catholic believers"},"easter":{"_name":"easter","type":"optional","note":"Catholic believers"},"easter 1":{"_name":"easter 1","type":"optional","note":"Catholic believers"},"12-25":{"_name":"12-25","type":"optional","note":"Catholic believers"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah","type":"optional","note":"Muslim believers"},"1 Shawwal":{"_name":"1 Shawwal","type":"optional","note":"Muslim believers"},"10 Tishrei":{"_name":"10 Tishrei","type":"optional","note":"Jewish believers"},"julian 01-14":{"name":{"sr":"Свети Сава","en":"Saint Sava Day"},"type":"observance"},"04-22":{"name":{"sr":"Дан сећања на жртве холокауста","en":"Holocaust Remembrance Day"},"type":"observance"},"05-09":{"name":{"sr":"Дан победе","en":"Victory Day"},"type":"observance"},"julian 06-15":{"name":{"sr":"Видовдан","en":"Saint Vitus Day"},"type":"observance"},"10-21":{"name":{"sr":"Дан сећања на српске жртве у Другом светском рату","en":"World War II Serbian Victims Remembrance Day"},"type":"observance"}}},"RU":{"names":{"ru":"Россия","en":"Russia"},"dayoff":"sunday","langs":["ru"],"zones":["Europe/Moscow","Europe/Kaliningrad","Europe/Simferopol","Europe/Volgograd","Europe/Samara","Asia/Yekaterinburg","Asia/Omsk","Asia/Novosibirsk","Asia/Novokuznetsk","Asia/Krasnoyarsk","Asia/Irkutsk","Asia/Chita","Asia/Yakutsk","Asia/Khandyga","Asia/Vladivostok","Asia/Sakhalin","Asia/Ust-Nera","Asia/Magadan","Asia/Srednekolymsk","Asia/Kamchatka","Asia/Anadyr"],"days":{"01-01":{"_name":"01-01"},"01-02 P5D":{"name":{"ru":"Новогодние каникулы","en":"New Year Holiday"}},"julian 12-25":{"_name":"12-25"},"01-08":{"name":{"ru":"Новогодние каникулы","en":"New Year Holiday"}},"02-23":{"name":{"ru":"День защитника Отечества","en":"Defender of the Fatherland Day"}},"03-08":{"_name":"03-08"},"08-22":{"name":{"ru":"День Государственного флага","en":"National Flag Day"}},"05-01":{"name":{"ru":"День весны и труда","en":"Spring and Labour Day"}},"05-09":{"name":{"ru":"День Победы","en":"Victory Day"}},"06-12":{"name":{"ru":"День России","en":"Russia Day"}},"11-04":{"name":{"ru":"День народного единства","en":"Unity Day"}}}},"RW":{"names":{"rw":"Repubulika y\'u Rwanda","fr":"République du Rwanda","en":"Rwanda"},"dayoff":"sunday","langs":["rw","fr"],"zones":["Africa/Maputo"],"days":{"01-01":{"_name":"01-01"},"01-02":{"_name":"Public Holiday"},"02-01":{"name":{"en":"Heroes Day"}},"easter -2":{"_name":"easter -2"},"04-07":{"name":{"fr":"Jour de Mémorial du Génocide","en":"Genocide Memorial Day"}},"05-01":{"_name":"05-01"},"07-01":{"_name":"Independence Day"},"07-04":{"name":{"fr":"Jour de la Libération","en":"Liberation Day"}},"08-15":{"_name":"08-15"},"1st friday in August":{"name":{"rw":"Umuganura","fr":"Journée nationale de récolte","en":"National Harvest Day"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}}},"SE":{"names":{"sv":"Sverige","en":"Sweden"},"dayoff":"sunday","langs":["sv"],"zones":["Europe/Stockholm"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06"},"easter -3":{"_name":"easter -3","type":"observance"},"easter -2":{"_name":"easter -2"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"easter 39":{"_name":"easter 39"},"sunday before 06-01":{"_name":"Mothers Day","type":"observance"},"06-06":{"name":{"sv":"Sveriges nationaldag","en":"National Day"}},"friday after 06-19":{"name":{"sv":"Midsommarafton","en":"Midsummer Eve","fi":"Juhannusaatto"},"type":"bank"},"saturday after 06-20":{"name":{"sv":"Midsommardagen","en":"Midsummer Day","fi":"Juhannuspäivä"}},"saturday after 10-31":{"name":{"sv":"Alla Helgons dag"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"01-13":{"name":{"sv":"Tjugondag Knut"},"type":"observance"},"sunday in March":{"name":{"sv":"Vasaloppet"},"type":"observance"},"03-25":{"name":{"sv":"Marie Bebådelsedag","lat":"Annuntiatio Mariæ"},"type":"observance"},"04-30":{"name":{"sv":"Valborgsmässoafton","en":"Walpurgis Night"},"type":"observance"},"easter":{"_name":"easter","type":"observance"},"easter 49":{"_name":"easter 49","type":"public"},"easter 50":{"_name":"easter 50","type":"observance"},"11-06":{"name":{"sv":"Gustav-Adolf-dagen"},"type":"observance"},"11-11":{"name":{"sv":"Mårtensgås"},"type":"observance"},"12-10":{"name":{"sv":"Nobeldagen"},"type":"observance"},"12-13":{"name":{"sv":"Luciadagen"},"type":"observance"},"12-24":{"_name":"12-24","type":"bank"},"12-31":{"_name":"12-31","type":"bank"}}},"SG":{"names":{"en":"Singapore"},"langs":["en"],"zones":["Asia/Singapore"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"substitutes 01-01 if sunday then next monday":{"substitute":true,"_name":"01-01"},"chinese 01-0-01":{"name":{"en":"Chinese New Year"}},"chinese 01-0-02":{"name":{"en":"Chinese New Year"}},"substitutes chinese 01-0-01 if sunday then next tuesday":{"substitute":true,"name":{"en":"Chinese New Year"}},"substitutes chinese 01-0-02 if sunday then next monday":{"substitute":true,"name":{"en":"Chinese New Year"}},"easter -2":{"_name":"easter -2"},"05-01":{"_name":"05-01"},"substitutes 05-01 if sunday then next monday":{"substitute":true,"_name":"05-01"},"08-09":{"name":{"en":"National Day"}},"substitutes 08-09 if sunday then next monday":{"substitute":true,"name":{"en":"National Day"}},"12-25":{"_name":"12-25"},"substitutes 12-25 if sunday then next monday":{"substitute":true,"_name":"12-25"},"1 Shawwal":{"_name":"1 Shawwal","name":{"en":"Hari Raya Puasa"}},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah","name":{"en":"Hari Raya Haji"}},"2001-05-07":{"_name":"Vesak"},"2002-05-27":{"_name":"Vesak"},"2003-05-15":{"_name":"Vesak"},"2004-06-02":{"_name":"Vesak"},"2005-05-23":{"_name":"Vesak"},"2006-05-12":{"_name":"Vesak"},"2007-05-31":{"_name":"Vesak"},"2008-05-19":{"_name":"Vesak"},"2009-05-09":{"_name":"Vesak"},"2010-05-28":{"_name":"Vesak"},"2011-05-17":{"_name":"Vesak"},"2012-05-05":{"_name":"Vesak"},"2013-05-24":{"_name":"Vesak"},"2014-05-13":{"_name":"Vesak"},"2015-06-01":{"_name":"Vesak"},"2016-05-21":{"_name":"Vesak"},"2017-05-10":{"_name":"Vesak"},"2018-05-29":{"_name":"Vesak"},"2019-05-19":{"_name":"Vesak"},"2019-05-20":{"substitute":true,"_name":"Vesak"},"2020-05-07":{"_name":"Vesak"},"2014-10-22":{"_name":"Deepavali"},"2015-11-10":{"_name":"Deepavali"},"2016-10-29":{"_name":"Deepavali"},"2017-10-18":{"_name":"Deepavali"},"2018-11-06":{"_name":"Deepavali"},"2019-10-27":{"_name":"Deepavali"},"2019-10-28":{"substitute":true,"_name":"Deepavali"},"2020-11-14":{"_name":"Deepavali"}}},"SH":{"names":{"en":"St. Helena"},"langs":["en"],"zones":["Africa/Abidjan"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"substitutes 01-01 if sunday then next monday":{"substitute":true,"_name":"01-01"},"substitutes 01-01 if saturday then next monday":{"substitute":true,"_name":"01-01"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"3rd monday in April":{"name":{"en":"Queen\'s Birthday"}},"05-21":{"name":{"en":"Saint Helena Day"}},"easter 50":{"_name":"easter 50"},"monday before 09-01":{"name":{"en":"August Bank Holiday"}},"12-25":{"_name":"12-25"},"substitutes 12-25 if saturday then next tuesday":{"substitute":true,"_name":"12-25"},"substitutes 12-25 if sunday then next tuesday":{"substitute":true,"_name":"12-25"},"12-26":{"_name":"12-26"},"substitutes 12-26 if saturday then next monday":{"substitute":true,"_name":"12-26"},"substitutes 12-26 if sunday then next monday":{"substitute":true,"_name":"12-26"}},"states":{"AC":{"name":"Ascension Island","days":{"easter 39":{"_name":"easter 39"}}},"HL":{"name":"Saint Helena","days":{}},"TA":{"name":"Tristan da Cunha","days":{"easter 39":{"_name":"easter 39"},"2012-04-23":{"name":{"en":"Ratting Day"}},"2013-05-03":{"name":{"en":"Ratting Day"}},"2014-05-02":{"name":{"en":"Ratting Day"}},"2015-05-16":{"name":{"en":"Ratting Day"}},"2016-04-30":{"name":{"en":"Ratting Day"}},"2017-05-26":{"name":{"en":"Ratting Day"}},"2018-06-02":{"name":{"en":"Ratting Day"}},"08-14":{"name":{"en":"Anniversary Day"}},"monday before 09-01":false}}}},"SI":{"names":{"sl":"Republika Slovenija","en":"Slovenia"},"langs":["sl"],"zones":["Europe/Belgrade"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"01-02":{"_name":"01-01","active":[{"to":1955},{"from":2017}]},"02-08":{"name":{"en":"Prešeren Day","sl":"Prešernov dan"},"active":[{"from":1991}]},"03-08":{"_name":"03-08","type":"observance"},"04-23":{"name":{"sl":"jurjevanje","en":"St. George\'s Day"},"type":"observance"},"easter -49":{"name":{"sl":"pust","en":"Carnival"},"type":"observance"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"04-27":{"name":{"sl":"dan upora proti okupatorju","en":"Day of Uprising Against Occupation"}},"05-01":{"_name":"05-01","name":{"en":"May Day Holiday"},"active":[{"from":1949}]},"05-02":{"_name":"05-01","name":{"en":"May Day Holiday"},"active":[{"from":1949}]},"easter 49":{"_name":"easter 49"},"06-08":{"name":{"sl":"dan Primoža Trubarja","en":"Primož Trubar Day"},"active":[{"from":2010}]},"06-25":{"name":{"sl":"dan državnosti","en":"Statehood Day"},"active":[{"from":1991}]},"07-22":{"name":{"sl":"dan vstaje","en":"Insurrection Day"},"type":"observance"},"08-15":{"_name":"08-15","active":[{"from":1992}]},"08-17":{"name":{"sl":"združitev prekmurskih Slovencev z matičnim narodom","en":"Day of the Prekmurje Slovenes\'"},"type":"observance","active":[{"from":2006}]},"09-15":{"name":{"sl":"vrnitev Primorske k matični domovini","en":"Day of Restoration of the Littoral Region to the Motherland"},"type":"observance","active":[{"from":2005}]},"10-25":{"name":{"sl":"dan suverenosti","en":"Sovereignty Day"},"type":"observance","active":[{"from":2015}]},"10-31":{"name":{"sl":"dan reformacije","en":"Reformation Day"}},"11-01":{"name":{"sl":"dan spomina na mrtve or dan mrtvih","en":"Day (of Remembrance) of the Dead"}},"11-11":{"name":{"sl":"martinovanje","en":"St. Martin\'s Day"},"type":"observance"},"11-23":{"name":{"sl":"dan Rudolfa Maistra","en":"Rudolf Maister Day \\tdan Rudolfa Maistra"},"type":"observance","active":[{"from":2015}]},"12-06":{"name":{"sl":"miklavž","en":"Saint Nicholas Day"},"type":"observance"},"12-25":{"_name":"12-25","active":[{"to":1953},{"from":1991}]},"12-26":{"name":{"sl":"dan samostojnosti in enotnosti","en":"Independence and Unity Day"}}}},"SJ":{"names":{"en":"Svalbard & Jan Mayen"},"langs":["no"],"zones":["Europe/Oslo"],"dayoff":"sunday","_days":"NO"},"SK":{"names":{"sk":"Slovenská republika","en":"Slovakia"},"langs":["sk"],"zones":["Europe/Prague"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01","name":{"sk":"Deň vzniku Slovenskej republiky"}},"01-06":{"_name":"01-06"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"05-08":{"name":{"sk":"Deň víťazstva nad fašizmom","en":"Day of victory over fascism"}},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"07-05":{"name":{"sk":"Sviatok svätého Cyrila a Metoda","en":"Saints Cyril and Methodius Day"}},"08-29":{"name":{"sk":"Výročie Slovenského národného povstania","en":"Slovak National Uprising anniversary"}},"09-01":{"_name":"Constitution Day"},"09-15":{"name":{"sk":"Sviatok Panny Márie Sedembolestnej","en":"Day of Our Lady of the Seven Sorrows"}},"11-01":{"_name":"11-01"},"11-17":{"name":{"sk":"Deň boja za slobodu a demokraciu","en":"Struggle for Freedom and Democracy Day"}},"12-24":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"SM":{"names":{"it":"San Marino","en":"San Marino"},"langs":["it"],"zones":["Europe/Rome"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06","name":{"it":"Epifania"}},"02-05":{"name":{"it":"Festa di Sant’Agata","en":"Feast of Saint Agatha"}},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"03-25":{"name":{"it":"Anniversario dell\'Arengo","en":"Anniversary of the Arengo"}},"04-01":{"name":{"it":"Cerimonia di investitura dei Capitani Reggenti","en":"Inauguration Ceremony"}},"05-01":{"_name":"05-01"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"easter 60":{"_name":"easter 60"},"07-28":{"name":{"it":"Anniversario della caduta del Fascismo e Festa della Libertà","en":"Liberation from Fascism"}},"08-15":{"_name":"08-15"},"09-03":{"name":{"it":"Festa di San Marino e di Fondazione della Repubblica","en":"The Feast of San Marino and the Republic"}},"10-01":{"name":{"it":"Cerimonia di investitura dei Capitani Reggenti"}},"11-01":{"_name":"11-01","name":{"it":"Tutti i Santi"}},"11-02":{"name":{"it":"Commemorazione dei defunti","en":"Commemoration of the deceased"}},"12-08":{"_name":"12-08"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"12-31":{"_name":"12-31","type":"optional"}}},"SO":{"names":{"so":"Jamhuuriyadda Federaalka Soomaaliya","ar":"جمهورية الصومال الفدرالية","en":"Somalia"},"dayoff":"?","langs":["so","ar","en"],"zones":["Africa/Nairobi"],"days":{"01-01":{"_name":"01-01"},"05-01":{"_name":"05-01"},"06-26":{"name":{"ar":"استقلال الصومال البريطاني","en":"Independence of British Somaliland"}},"07-01":{"_name":"Independence Day"},"10 Muharram":{"_name":"10 Muharram"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}},"states":{"AW":{"name":"Awdal","days":{"01-01":false,"05-18 P2D":{"name":{"en":"Restoration of Somaliland Sovereignty"}},"07-01":false,"1 Muharram":{"_name":"1 Muharram"},"10 Muharram":false,"27 Rajab":{"_name":"27 Rajab"}}},"SA":{"name":"Sanaag","_days":["SO","states","AW"]},"SO":{"name":"Sool","_days":["SO","states","AW"]},"TO":{"name":"Togdheer","_days":["SO","states","AW"]},"WO":{"name":"Woqooyi Galbeed","_days":["SO","states","AW"]}}},"SS":{"names":{"en":"South Sudan"},"dayoff":"sunday","langs":["en"],"zones":["Africa/Maputo"],"days":{"01-01":{"_name":"01-01"},"01-09":{"name":{"en":"Peace Agreement Day"}},"03-08":{"_name":"03-08"},"05-16":{"name":{"en":"SPLA Day"}},"1st monday in July":{"_name":"Mothers Day","type":"observance"},"07-09":{"_name":"Independence Day"},"07-30":{"name":{"en":"Martyrs Day"}},"12-25":{"_name":"12-25"},"12-28":{"name":{"en":"Republic Day"}},"12-31":{"_name":"12-31"},"2 Shawwal":{"_name":"1 Shawwal"},"12 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}}},"SV":{"names":{"es":"El Salvador","en":"El Salvador"},"dayoff":"sunday","langs":["es"],"zones":["America/El_Salvador"],"days":{"01-01":{"_name":"01-01","type":"observance"},"01-16":{"name":{"es":"Firma de los Acuerdos de Paz"},"type":"observance"},"03-08":{"name":{"es":"Día de la Mujer"},"type":"observance"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter -1":{"_name":"easter -1"},"easter":{"_name":"easter","type":"observance"},"05-01":{"_name":"05-01"},"05-07":{"name":{"en":"Soldier\'s Day","es":"Día del Soldado"},"type":"observance"},"05-10":{"_name":"Mothers Day","type":"optional","note":"Public Offices only"},"06-17":{"_name":"Fathers Day","type":"observance"},"06-22":{"name":{"es":"Día del Maestro"},"type":"optional","note":"Dayoff for teachers only"},"08-06":{"name":{"es":"Celebración del Divino Salvador del Mundo"}},"09-15":{"_name":"Independence Day"},"11-02":{"_name":"11-02"},"12-25":{"_name":"12-25"}},"regions":{"SS":{"name":"San Salvador","days":{"08-03":{"name":{"es":"Fiestas Agostinas"}},"08-05":{"name":{"es":"Fiestas Agostinas"}}}}}},"TG":{"names":{"fr":"République togolaise"},"dayoff":"sunday","langs":["fr"],"zones":["Africa/Abidjan"],"days":{"01-01":{"_name":"01-01"},"01-13":{"name":{"fr":"Jour de la libération","en":"Liberation Day"}},"04-27":{"_name":"Independence Day"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"easter 50":{"_name":"easter 50"},"06-21":{"name":{"fr":"Journée des Martyrs","en":"Day of the Martyrs"}},"08-15":{"_name":"08-15"},"11-01":{"_name":"11-01"},"12-25":{"_name":"12-25"},"13 Rabi al-awwal":{"_name":"12 Rabi al-awwal"},"2 Shawwal":{"_name":"1 Shawwal"},"11 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}}},"TO":{"names":{"to":"Puleʻanga Fakatuʻi ʻo Tonga","en":"Tonga"},"langs":["to","en"],"zones":["Pacific/Tongatapu"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"easter -2":{"_name":"easter -2"},"easter 1":{"_name":"easter 1"},"04-25":{"name":{"en":"ANZAC Day"}},"06-04 if thursday,friday,saturday,sunday then next monday and if tuesday then previous monday":{"name":{"en":"Emancipation Day"}},"07-04":{"name":{"en":"Official Birthday of His Majesty King Tupou VI"}},"09-17 if thursday,friday,saturday,sunday then next monday and if tuesday then previous monday":{"name":{"en":"Birthday of His Royal Highness The Crown Prince Tupotoʻa-ʻUlukalala"}},"11-04 if thursday,friday,saturday,sunday then next monday and if tuesday then previous monday":{"_name":"Constitution Day","name":{"en":"Constitutional Day"}},"12-04 if thursday,friday,saturday,sunday then next monday and if tuesday then previous monday":{"name":{"en":"Tupou I Day"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}},"TR":{"names":{"tr":"Türkiye","en":"Turkey"},"dayoff":"saturday","langs":["tr"],"zones":["Europe/Istanbul"],"days":{"01-01":{"_name":"01-01"},"04-23":{"name":{"en":"National Sovereignty and Children\'s Day","tr":"Ulusal Egemenlik ve Çocuk Bayramı"}},"05-01":{"_name":"05-01","name":{"en":"Labour and Solidarity Day","tr":"Emek ve Dayanışma Günü"}},"05-19":{"name":{"en":"Commemoration of Atatürk, Youth and Sports Day","tr":"Atatürk\'ü Anma Gençlik ve Spor Bayramı"}},"07-15":{"name":{"en":"Democracy and National Unity Day","tr":"Demokrasi ve Millî Birlik Günü"}},"08-30":{"name":{"en":"Victory Day","tr":"Zafer Bayramı"}},"10-29":{"name":{"en":"Republic Day","tr":"Cumhuriyet Bayramı"}},"1 Shawwal PT90H":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah PT114H":{"_name":"10 Dhu al-Hijjah"}}},"TZ":{"names":{"en":"Tanzania"},"dayoff":"sunday","langs":["en"],"zones":["Africa/Nairobi"],"days":{"01-01":{"_name":"01-01"},"01-02":{"name":{"en":"Zanzibar Revolution Day"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"04-07":{"name":{"en":"Karume Day"}},"04-26":{"name":{"en":"Union Day"}},"05-01":{"_name":"05-01"},"07-07":{"name":{"en":"Saba Saba Day"}},"08-08":{"name":{"en":"Nane Nane Day"}},"10-14":{"name":{"en":"Nyerere Day"}},"12-09":{"_name":"Independence Day"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-25"},"1 Shawwal P2D":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"},"12 Rabi al-awwal":{"_name":"12 Rabi al-awwal","name":{"en":"Maulid Day"}}}},"UA":{"names":{"uk":"Україна","en":"Ukraine"},"langs":["uk"],"zones":["Europe/Kiev","Europe/Uzhgorod","Europe/Zaporozhye"],"dayoff":"sunday","days":{"01-01 and if saturday, sunday then next tuesday":{"_name":"01-01","name":{"en":"New Year"},"substitute":true},"01-02 and if saturday, sunday then next monday":{"_name":"01-01","name":{"en":"New Year"},"substitute":true},"julian 12-25 and if saturday, sunday then next monday":{"_name":"julian 12-25","substitute":true},"03-08 and if saturday, sunday then next monday":{"_name":"03-08"},"orthodox and if sunday then next monday":{"_name":"orthodox"},"orthodox 49 and if sunday then next monday":{"_name":"easter 49"},"05-01 and if saturday, sunday then next tuesday":{"_name":"05-01","substitute":true},"05-02 and if saturday, sunday then next monday":{"_name":"05-01","substitute":true},"05-09 and if saturday, sunday then next monday":{"name":{"uk":"День перемоги над нацизмом у Другій світовій війні","en":"Victory Day"},"substitute":true},"06-28 and if saturday, sunday then next monday":{"_name":"Constitution Day","substitute":true},"08-24 and if saturday, sunday then next monday":{"_name":"Independence Day","substitute":true},"10-14 and if saturday, sunday then next monday":{"name":{"uk":"День захисника України","en":"Defender of Ukraine Day"},"substitute":true,"active":[{"from":"2015-03-05"}]}}},"UG":{"names":{"en":"Uganda"},"dayoff":"sundays","langs":["en","sw"],"zones":["Africa/Nairobi"],"days":{"01-01":{"_name":"01-01"},"01-26":{"name":{"en":"Liberation Day"}},"02-16":{"name":{"en":"Archbishop Janan Luwum Day"}},"03-08":{"_name":"03-08"},"easter -46":{"_name":"easter -46","type":"observance"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"easter 1":{"_name":"easter 1"},"05-01":{"_name":"05-01"},"06-03":{"name":{"en":"Martyr\'s Day"}},"06-09":{"name":{"en":"National Heroes Day"}},"10-09":{"_name":"Independence Day"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}}},"US":{"names":{"en":"United States of America"},"dayoff":"sunday","zones":["America/New_York","America/Detroit","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Indiana/Indianapolis","America/Indiana/Vincennes","America/Indiana/Winamac","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Vevay","America/Chicago","America/Indiana/Tell_City","America/Indiana/Knox","America/Menominee","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/North_Dakota/Beulah","America/Denver","America/Boise","America/Phoenix","America/Los_Angeles","America/Metlakatla","America/Anchorage","America/Juneau","America/Sitka","America/Yakutat","America/Nome","America/Adak","Pacific/Honolulu"],"langs":["en-us","en"],"days":{"01-01 and if sunday then next monday if saturday then previous friday":{"substitute":true,"_name":"01-01"},"3rd monday in January":{"name":{"en":"Martin Luther King Jr. Day"}},"3rd monday in February":{"name":{"en":"Washington\'s Birthday"}},"02-14":{"_name":"02-14","type":"observance"},"easter":{"_name":"easter","type":"observance"},"04-15 if friday then next monday if saturday,sunday then next tuesday":{"name":{"en":"Tax Day"},"type":"observance"},"wednesday before 04-28":{"name":{"en":"Administrative Professionals Day"},"type":"observance"},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"monday before 06-01":{"name":{"en":"Memorial Day"}},"3rd sunday in June":{"_name":"Fathers Day","type":"observance"},"07-04 and if sunday then next monday if saturday then previous friday":{"substitute":true,"_name":"Independence Day"},"monday in September":{"_name":"05-01"},"2nd monday in October":{"name":{"en":"Columbus Day"}},"10-31 18:00":{"name":{"en":"Halloween"},"type":"observance"},"11-11":{"name":{"en":"Veterans Day"}},"substitutes 11-11 if sunday then next monday if saturday then previous friday":{"substitute":true,"name":{"en":"Veterans Day"},"type":"bank","note":"Federal Government offices are closed"},"tuesday after 1st monday in November every 4 years since 1848":{"name":{"en":"Election Day"},"type":"observance"},"4th thursday in November":{"name":{"en":"Thanksgiving Day"}},"friday after 4th thursday in November":{"name":{"en":"Day after Thanksgiving Day"},"type":"observance"},"12-24":{"_name":"12-24","type":"optional"},"12-25 and if sunday then next monday if saturday then previous friday":{"substitute":true,"_name":"12-25"},"12-31":{"_name":"12-31","type":"observance"}},"states":{"AL":{"name":"Alabama","zones":["America/Chicago"],"days":{"3rd monday in January":{"name":{"en":"Robert E. Lee/Martin Luther King Birthday"}},"3rd monday in February":{"name":{"en":"George Washington/Thomas Jefferson Birthday"}},"4th monday in April":{"name":{"en":"Confederate Memorial Day"}},"1st monday in June":{"name":{"en":"Jefferson Davis\' birthday"}}}},"AK":{"name":"Alaska","zones":["America/Anchorage","America/Metlakatla","America/Juneau","America/Sitka","America/Yakutat","America/Nome"],"days":{"3rd monday in February":{"name":{"en":"President\'s Day"}},"monday before April":{"name":{"en":"Seward\'s Day"}},"2nd monday in October":{"name":{"en":"Columbus Day"},"active":[{"to":"2017-01-01"}]},"2nd monday in October #1":{"name":{"en":"Indigenous Peoples\' Day"},"active":[{"from":"2017-01-01"}]},"10-18":{"name":{"en":"Alaska Day"}}}},"AZ":{"name":"Arizona","zones":["America/Phoenix","America/Denver"],"days":{"3rd monday in January":{"name":{"en":"Dr. Martin Luther King Jr./ Civil Rights Day"}},"3rd monday in February":{"name":{"en":"Lincoln/Washington Presidents\' Day"}}}},"AR":{"name":"Arkansas","zones":["America/Chicago"],"days":{"3rd monday in January":{"name":{"en":"Dr. Martin Luther King Jr./Robert E. Lee\'s Birthdays"}},"3rd monday in February":{"name":{"en":"George Washington\'s Birthday/Daisy Gatson Bates Day"}},"12-24":{"_name":"12-24"}}},"CA":{"name":"California","zones":["America/Los_Angeles"],"days":{"3rd monday in February":{"name":{"en":"The third Monday in February"}},"2nd monday in October":false,"02-15":{"type":"observance","name":{"en":"Susan B. Anthony Day"}},"03-31 and if sunday then next monday":{"substitute":true,"name":{"en":"César Chávez Day"}},"05-19":{"type":"observance","name":{"en":"Malcolm X Day"}},"05-23":{"type":"observance","name":{"en":"Harvey Milk Day"}},"friday after 4th thursday in November":{"name":{"en":"Day after Thanksgiving Day"},"type":"public"}},"regions":{"LA":{"name":"Los Angeles","days":{"08-24":{"name":{"en":"Kobe Bryant Day"},"type":"observance","active":[{"from":2016}]}}}}},"CO":{"name":"Colorado","zones":["America/Denver"],"days":{"3rd monday in February":{"name":{"en":"Washington-Lincoln Day"}},"2nd monday in October":{"type":"observance"}}},"CT":{"name":"Connecticut","zones":["America/New_York"],"days":{"02-12":{"name":{"en":"Lincoln\'s Birthday"}},"easter -2":{"_name":"easter -2"}}},"DE":{"name":"Delaware","days":{"2nd monday in October":false,"3rd monday in February":false,"easter -2":{"_name":"easter -2"},"friday after 4th thursday in November":{"name":{"en":"Day After Thanksgiving"}},"tuesday after 1st monday in November in even years":{"name":{"en":"Election Day"}}}},"DC":{"name":"District of Columbia","days":{"04-16":{"name":{"en":"Emancipation Day"}}}},"FL":{"name":"Florida","days":{"2nd monday in October":false,"3rd monday in February":false,"02-15":{"name":{"en":"Susan B. Anthony Day"}},"friday after 4th thursday in November":{"name":{"en":"Day After Thanksgiving"}}}},"GA":{"name":"Georgia","days":{"3rd monday in February":false,"monday before 05-01 #1":{"name":{"en":"Confederate Memorial Day"},"active":[{"to":"2016-01-01"}]},"monday before 05-01 #2":{"name":{"en":"State Holiday"},"note":"Known as Confederate Memorial Day prior to 2016","active":[{"from":"2016-01-01"}]},"friday after 4th thursday in November #1":{"name":{"en":"Robert E. Lee\'s Birthday"},"note":"General Lee was born on 1807-01-19 but this holiday was traditionally observed the day after Thanksgiving.","active":[{"to":"2016-01-01"}]},"friday after 4th thursday in November #2":{"name":{"en":"State Holiday"},"note":"Known as Robert E. Lee\'s Birtday prior to 2016","active":[{"from":"2016-01-01"}]},"12-24":{"name":{"en":"Washington\'s Birthday"}},"substitutes 12-24 if wednesday then next friday":{"substitute":true,"name":{"en":"Washington\'s Birthday"}}}},"HI":{"name":"Hawaii","zones":["Pacific/Honolulu"],"days":{"3rd monday in February":{"name":{"en":"Presidents\' Day"}},"03-26 and if saturday then previous friday if sunday then next monday":{"substitute":true,"name":{"en":"Prince Jonah Kuhio Kalanianaole Day"}},"easter -2":{"_name":"easter -2"},"06-11 and if saturday then previous friday if sunday then next monday":{"substitute":true,"name":{"en":"Kamehameha Day"}},"3rd friday in August":{"name":{"en":"Statehood Day"}},"2nd monday in October":false,"tuesday after 1st monday in November in even years":{"name":{"en":"General Election Day"}}}},"ID":{"name":"Idaho","zones":["America/Boise","America/Los_Angeles"],"days":{"3rd monday in January":{"name":{"en":"Martin Luther King, Jr./ Idaho Human Rights Day"}},"3rd monday in February":{"name":{"en":"President\'s Day"}}}},"IL":{"name":"Illinois","zones":["America/Chicago"],"days":{"02-12":{"name":{"en":"Lincoln\'s Birthday"}},"1st monday in March":{"name":{"en":"Casimir Pulaski Day"}},"05-19":{"name":{"en":"Malcolm X Day"}},"tuesday after 1st monday in November in even years":{"name":{"en":"Election Day"}}}},"IN":{"name":"Indiana","zones":["America/Indiana/Indianapolis","America/Indiana/Vincennes","America/Indiana/Winamac","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Vevay","America/Indiana/Tell_City","America/Indiana/Knox"],"days":{"easter -2":{"_name":"easter -2"},"tuesday after 1st monday in May":{"name":{"en":"Primary Election Day"}},"tuesday after 1st monday in November":{"name":{"en":"Election Day"}},"friday after 4th thursday in November":{"name":{"en":"Lincoln\'s Birthday"}}}},"IA":{"name":"Iowa","zones":["America/Chicago"],"days":{"02-12":{"name":{"en":"Lincoln\'s Birthday"}}}},"KS":{"name":"Kansas","zones":["America/Chicago","America/Denver"],"days":{"3rd monday in February":false}},"KY":{"name":"Kentucky","zones":["America/Kentucky/Louisville","America/Kentucky/Monticello"],"days":{"3rd monday in February":false,"easter -2 14:00":{"_name":"easter -2"},"12-24":{"_name":"12-24"},"12-31":{"_name":"12-31"}}},"LA":{"name":"Louisiana","zones":["America/Chicago"],"days":{"easter -2":{"_name":"easter -2"},"tuesday after 1st monday in November in even years":{"name":{"en":"Election Day"}}},"regions":{"NO":{"name":"New Orleans","days":{"easter -47":{"_name":"easter -47","name":{"en":"Mardi Gras"}}}}}},"ME":{"name":"Maine","zones":["America/New_York"],"days":{"3rd monday in February":{"name":{"en":"Washington\'s Birthday/President\'s Day"}},"3rd monday in April":{"name":{"en":"Patriots\' Day"}}}},"MD":{"name":"Maryland","zones":["America/New_York"],"days":{"3rd monday in February":{"name":{"en":"President\'s Day"}},"friday before 1st monday before 06-01":{"name":{"en":"Service Reduction Day"}},"friday after 4th thursday in November":{"name":{"en":"Native American Heritage Day"}}}},"MA":{"name":"Massachusetts","zones":["America/New_York"],"days":{"03-17":{"name":{"en":"Evacuation Day"}},"3rd monday in April":{"name":{"en":"Patriots\' Day"}},"06-17":{"name":{"en":"Bunker Hill Day"}}}},"MI":{"name":"Michigan","zones":["America/Detroit","America/Menominee"],"days":{"12-24":{"_name":"12-24"},"12-31":{"_name":"12-31"}}},"MN":{"name":"Minnesota","zones":["America/Chicago"],"days":{"3rd monday in February":{"name":{"en":"Washington\'s and Lincoln\'s Birthday"}},"2nd monday in October":{"name":{"en":"Columbus Day"},"active":[{"to":"2017-01-01"}]},"2nd monday in October #1":{"name":{"en":"Indigenous Peoples’ Day"},"active":[{"from":"2017-01-01"}]}}},"MS":{"name":"Mississippi","zones":["America/Chicago"],"days":{"3rd monday in January":{"name":{"en":"Martin Luther King\'s and Robert E. Lee\'s Birthdays"}},"monday before 05-01":{"name":{"en":"Confederate Memorial Day"}}}},"MO":{"name":"Missouri","zones":["America/Chicago"],"days":{"02-12":{"name":{"en":"Lincoln\'s Birthday"}},"05-08":{"name":{"en":"Truman Day"}}}},"MT":{"name":"Montana","zones":["America/Denver"],"days":{"3rd monday in February":{"name":{"en":"Lincoln\'s and Washington\'s Birthday"}},"tuesday after 1st monday in November":{"name":{"en":"Election Day"}},"12-24":{"_name":"12-24"},"12-31":{"_name":"12-31"}}},"NE":{"name":"Nebraska","zones":["America/Chicago","America/Denver"],"days":{"3rd monday in February":{"name":{"en":"President\'s Day"}},"friday before 05-01":{"name":{"en":"Arbor Day"}}}},"NV":{"name":"Nevada","zones":["America/Los_Angeles"],"days":{"3rd monday in February":{"name":{"en":"Presidents Day"}},"2nd monday in October":false,"08-09":{"name":{"en":"Indigenous Peoples\' Day"},"active":[{"from":"2017-01-01"}],"type":"observance"},"friday before 11-01":{"name":{"en":"Nevada Day"}},"4th friday in November":{"name":{"en":"Family Day"}}}},"NH":{"name":"New Hampshire","zones":["America/New_York"],"days":{"3rd monday in January":{"name":{"en":"Martin Luther King, Jr./ Civil Rights Day"}},"3rd monday in February":{"name":{"en":"President\'s Day"}},"2nd monday in October":{"type":"observance"},"tuesday after 1st monday in November in even years":{"name":{"en":"Election Day"}},"friday after 4th thursday in November":{"name":{"en":"Day after Thanksgiving"}}}},"NJ":{"name":"New Jersey","zones":["America/New_York"],"days":{"02-12":{"name":{"en":"Lincoln\'s Birthday"}},"3rd monday in February":{"name":{"en":"Presidents Day"}},"easter -2":{"_name":"easter -2"},"tuesday after 1st monday in November":{"name":{"en":"Election Day"}}}},"NM":{"name":"New Mexico","zones":["America/Denver"],"days":{"3rd monday in February":{"name":{"en":"Presidents\' Day"}},"friday after 4th thursday in November":{"name":{"en":"Day after Thanksgiving"}}}},"NY":{"name":"New York","zones":["America/New_York"],"days":{"02-12":{"name":{"en":"Lincoln\'s Birthday"}},"02-15":{"name":{"en":"Susan B. Anthony Day"}},"tuesday after 1st monday in November":{"name":{"en":"Election Day"}}}},"NC":{"name":"North Carolina","zones":["America/New_York"],"days":{"3rd monday in February":false,"2nd monday in October":false,"easter -2":{"_name":"easter -2"},"friday after 4th thursday in November":{"name":{"en":"Day after Thanksgiving"}},"12-24 and if friday then previous thursday if saturday,sunday then previous friday":{"substitute":true,"_name":"12-24"}}},"ND":{"name":"North Dakota","zones":["America/North_Dakota/Center","America/North_Dakota/New_Salem","America/North_Dakota/Beulah"],"days":{"3rd monday in February":{"name":{"en":"Presidents\' Day"}}}},"OH":{"name":"Ohio","zones":["America/New_York"],"days":{"3rd monday in February":{"name":{"en":"Washington-Lincoln Day"}}}},"OK":{"name":"Oklahoma","zones":["America/Chicago"],"days":{"3rd monday in February":{"name":{"en":"Presidents\' Day"}},"friday after 4th thursday in November":{"name":{"en":"Day after Thanksgiving"}}}},"OR":{"name":"Oregon","zones":["America/Los_Angeles"],"days":{"3rd monday in February":{"name":{"en":"Presidents Day"}}}},"PA":{"name":"Pennsylvania","zones":["America/New_York"],"days":{"3rd monday in February":{"name":{"en":"Presidents\' Day"}},"06-14":{"name":{"en":"Flag Day"}}}},"RI":{"name":"Rhode Island","zones":["America/New_York"],"days":{"2nd monday in August":{"name":{"en":"Victory Day"}}}},"SC":{"name":"South Carolina","zones":["America/New_York"],"days":{"05-10":{"name":{"en":"Confederate Memorial Day"}},"12-26":{"_name":"12-26"}}},"SD":{"name":"South Dakota","zones":["America/Chicago","America/Denver"],"days":{"3rd monday in February":{"name":{"en":"Presidents\' Day"}},"2nd monday in October":{"name":{"en":"Columbus Day"},"active":[{"to":"2015-01-01"}]},"2nd monday in October #1":{"name":{"en":"Native American Day"},"active":[{"from":"2015-01-01"}]}}},"TN":{"name":"Tennessee","zones":["America/Chicago","America/New_York"],"days":{"3rd monday in February":{"name":{"en":"President\'s Day"}},"easter -2":{"_name":"easter -2"},"12-24":{"_name":"12-24"}}},"TX":{"name":"Texas","zones":["America/Chicago","America/Denver"],"days":{"01-19":{"name":{"en":"Confederate Heroes Day"},"type":"observance","note":"state agencies are partially staffed"},"3rd monday in February":{"name":{"en":"Presidents\' Day"}},"03-02":{"name":{"en":"Texas Independence Day"},"type":"observance","note":"state agencies are partially staffed"},"03-31":{"name":{"en":"Cesar Chavez Day"},"type":"observance"},"easter -2":{"_name":"easter -2","type":"observance"},"04-21":{"name":{"en":"San Jacinto Day"},"type":"observance","note":"state agencies are partially staffed"},"06-19":{"name":{"en":"Emancipation Day In Texas"},"type":"observance","note":"state agencies are partially staffed"},"08-27":{"name":{"en":"Lyndon Baines Johnson Day"},"type":"observance","note":"state agencies are partially staffed"},"friday after 4th thursday in November":{"name":{"en":"Day after Thanksgiving"}},"12-24":{"_name":"12-24"},"12-26":{"_name":"12-26","name":{"en":"Day after Christmas"}}}},"UT":{"name":"Utah","zones":["America/Denver"],"days":{"3rd monday in February":{"name":{"en":"Washington and Lincoln Day"}},"07-24":{"name":{"en":"Pioneer Day"}}}},"VT":{"name":"Vermont","zones":["America/New_York"],"days":{"3rd monday in February":{"name":{"en":"Presidents\' Day"}},"1st tuesday in March":{"name":{"en":"Town Meeting Day"}},"3rd monday in August":{"name":{"en":"Bennington Battle Day"}},"2nd monday in October":{"name":{"en":"Columbus Day"},"active":[{"to":"2017-09-01"}]},"2nd monday in October #1":{"name":{"en":"Indigenous Peoples\' Day"},"active":[{"from":"2017-09-01"}]}}},"VA":{"name":"Virginia","zones":["America/New_York"],"days":{"3rd monday in February":{"name":{"en":"George Washington Day"}},"friday before 3rd monday in January":{"name":{"en":"Lee–Jackson Day"}}}},"WA":{"name":"Washington","zones":["America/Los_Angeles"],"days":{"3rd monday in February":{"name":{"en":"Presidents\' Day"}}}},"WV":{"name":"West Virginia","zones":["America/New_York"],"days":{"02-15":{"name":{"en":"Susan B. Anthony Day"}},"3rd monday in February":{"name":{"en":"President\'s Day"}},"06-20":{"name":{"en":"West Virginia Day"}},"4th friday in November":{"name":{"en":"Lincoln\'s Day"}}}},"WI":{"name":"Wisconsin","zones":["America/Chicago"],"days":{"02-15":{"name":{"en":"Susan B. Anthony Day"}},"2nd tuesday in September":{"name":{"en":"Primary Election Day"}},"tuesday after 1st monday in November":{"name":{"en":"Election Day"}}}},"WY":{"name":"Wyoming","zones":["America/Denver"],"days":{"3rd monday in February":{"name":{"en":"President\'s Day"}}}}}},"UY":{"names":{"es":"Uruguay","en":"Uruguay"},"dayoff":"sunday","langs":["es"],"zones":["America/Montevideo"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06","type":"observance"},"easter -48":{"name":{"en":"Carnival","es":"Carnaval"},"type":"observance"},"easter -47":{"_name":"easter -47","type":"observance"},"easter -6 P5D":{"name":{"en":"Tourism Week","es":"Semana de Turismo"},"type":"observance"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"04-19 if tuesday,wednesday then previous monday if thursday,friday then next monday":{"name":{"en":"Landing of the 33 Orientals","es":"Desembarco de los 33 Orientales"},"type":"observance"},"05-01":{"_name":"05-01"},"05-18 if tuesday,wednesday then previous monday if thursday,friday then next monday":{"name":{"en":"Battle of Las Piedras","es":"Batalla de las Piedras"},"type":"observance"},"06-19":{"name":{"en":"Birthday of José Gervasio Artigas and Never Again Day","es":"Natalicio de Artigas y Día del Nunca Más"},"type":"observance"},"07-18":{"_name":"Constitution Day"},"08-25":{"_name":"Independence Day"},"10-12 if tuesday,wednesday then previous monday if thursday,friday then next monday":{"name":{"en":"Columbus Day","es":"Día de la Raza"},"type":"observance"},"11-02":{"_name":"11-02","type":"observance"},"12-24":{"_name":"12-24","type":"observance"},"12-25":{"_name":"12-25"},"12-31":{"_name":"12-31","type":"observance"}}},"VA":{"names":{"it":"Stato della Città del Vaticano","la":"Status Civitatis Vaticanae","en":"Vatican City"},"langs":["it"],"zones":["Europe/Rome"],"dayoff":"sunday","days":{"01-01":{"name":{"en":"Solemnity of Mary, Mother of God","it":"Maria Santissima Madre di Dio"}},"01-06":{"name":{"en":"Epiphany","it":"Epifania del Signore"}},"02-11":{"name":{"en":"Anniversary of the foundation of Vatican City","it":"Anniversario della istituzione dello Stato della Città del Vaticano"}},"03-19":{"_name":"03-19"},"easter 1":{"_name":"easter 1"},"easter 39":{"_name":"easter 39","active":[{"to":2009}]},"easter 60":{"_name":"easter 60","active":[{"to":2009}]},"05-01":{"_name":"05-01","name":{"en":"Saint Joseph the Worker","it":"San Giuseppe lavoratore"}},"06-29":{"_name":"06-29"},"08-15":{"_name":"08-15","name":{"it":"Assunzione di Maria in Cielo"}},"09-08":{"name":{"en":"Nativity of Mary","it":"Festa della natività della madonna"}},"11-01":{"_name":"11-01"},"12-08":{"_name":"12-08"},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"},"10-16":{"name":{"en":"Anniversary of the election of Pope John Paul II","it":"Anniversario dell\'Elezione del Santo Padre"},"active":[{"from":1978,"to":2005}]},"11-04":{"name":{"en":"Saint Charles Borromeo - Name day of the Holy Father","it":"San Carlo Borromeo - Onomastico del Santo Padre"},"note":"Name day of Pope John Paul II (Karol Józef Wojtyła)","active":[{"from":1978,"to":2005}]},"04-19":{"name":{"en":"Anniversary of the election of Pope Benedict XVI","it":"Anniversario dell\'Elezione del Santo Padre"},"active":[{"from":2005,"to":2013}]},"03-19#1":{"name":{"en":"Saint Joseph - Name day of the Holy Father","it":"San Giuseppe - Onomastico del Santo Padre"},"note":"Name day of Pope Benedict XVI (Josef Ratzinger)","active":[{"from":2005,"to":2013}]},"03-13":{"name":{"en":"Anniversary of the election of Pope Francis","it":"Anniversario dell\'Elezione del Santo Padre"},"active":[{"from":2013}]},"04-23":{"name":{"en":"Saint George - Name day of the Holy Father","it":"San Giorgio - Onomastico del Santo Padre"},"note":"Name day of Pope Francis (Jorge Mario Bergoglio)","active":[{"from":2013}]}}},"VE":{"names":{"es":"Venezuela","en":"Venezuela"},"dayoff":"sundays","langs":["es"],"zones":["America/Caracas"],"days":{"01-01":{"_name":"01-01"},"01-06":{"_name":"01-06","type":"observance"},"01-15":{"name":{"es":"Día del Maestro","en":"Teacher\'s Day"},"type":"optional","note":"teachers only"},"03-19":{"_name":"03-19","type":"observance"},"easter -48":{"name":{"en":"Carnival","es":"Carnaval"}},"easter -47":{"_name":"easter -47"},"easter -6 P7D":{"name":{"en":"Holy Week","es":"Semana Santa"},"type":"observance"},"easter -3":{"_name":"easter -3"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter"},"04-19":{"name":{"en":"Declaration of Independence","es":"Declaración de la Independencia"}},"05-01":{"_name":"05-01"},"06-24":{"name":{"en":"Battle of Carabobo","es":"Aniversario de la Batalla de Carabobo"}},"07-05":{"_name":"Independence Day"},"07-24":{"name":{"en":"Birthday of Simón Bolívar","es":"Natalicio de Simón Bolívar"}},"08-03":{"name":{"en":"Flag Day","es":"Día de la Bandera"},"type":"observance"},"09-11":{"name":{"en":"Our Lady of Coromoto","es":"Día de Nuestra Señora de Coromoto"},"type":"observance"},"10-12":{"name":{"en":"Day of Indigenous Resistance","es":"Día de la resistencia indígena"}},"11-01":{"_name":"11-01","type":"observance"},"11-02":{"_name":"11-02","type":"observance"},"12-08":{"_name":"12-08","type":"observance"},"12-10":{"name":{"en":"Venezuelan Air Force Day","es":"Día de la Aviación Nacional"},"type":"observance"},"12-24":{"_name":"12-24"},"12-25":{"_name":"12-25"},"12-31":{"_name":"12-31"}},"states":{"B":{"name":"Anzoátegui","days":{"11-14":{"name":{"es":"Natalicio de José Antonio Anzoátegui"}}}},"G":{"name":"Carabobo","days":{"11-13":{"name":{"es":"Día de la Virgen del Socorro"}}}},"K":{"name":"Lara","days":{"01-14":{"name":{"es":"Día de La Divina Pastora"}},"05-28":{"name":{"es":"Natalicio de Jacinto Lara"}}},"regions":{"BA":{"name":"Barquisimeto","days":{"09-14":{"name":{"es":"Día de Barquisimeto"}}}}}},"M":{"name":"Miranda","days":{"03-19":{"_name":"03-19"}}},"N":{"name":"Monagas","days":{"12-07":{"name":{"es":"Día de Maturin"}}}},"S":{"name":"Táchira","days":{"08-15":{"_name":"08-15","name":{"es":"Día de la Virgen de Consolación"}}}},"V":{"name":"Zulia","days":{"10-24":{"name":{"es":"Natalicio de Rafael Urdaneta"}},"11-18":{"name":{"es":"Día de la Virgen de la Chinita"}}}}}},"VN":{"names":{"vi":"Cộng hòa Xã hội chủ nghĩa Việt Nam","en":"Vietnam"},"dayoff":null,"langs":["vi"],"zones":["Asia/Ho_Chi_Minh","Asia/Bangkok"],"days":{"01-01":{"_name":"01-01"},"vietnamese 1-0-1":{"name":{"en":"Vietnamese New Year","vi":"Tết Nguyên Đán"}},"1 day before vietnamese 1-0-1 P5D":{"name":{"en":"Vietnamese New Year Holidays","vi":"Giao thừa Tết Nguyên Đán"}},"vietnamese 3-0-10":{"name":{"en":"Hung Kings Commemorations","vi":"Giỗ tổ Hùng Vương"}},"04-30":{"name":{"en":"Day of liberating the South for national reunification","vi":"Ngày Giải phóng miền Nam"}},"05-01":{"_name":"05-01"},"09-02":{"name":{"en":"National Day","vi":"Quốc khánh"}},"02-03":{"name":{"en":"Communist Party of Viet Nam Foundation Anniversary","vi":"Ngày thành lập Đảng"},"type":"observance"},"03-08":{"_name":"03-08","type":"observance"},"04-21":{"name":{"en":"Vietnam Book Day","vi":"Ngày Sách Việt Nam"},"type":"observance"},"05-07":{"name":{"en":"Dien Bien Phu Victory Day","vi":"Ngày Chiến thắng Điện Biện Phủ"},"type":"observance"},"05-19":{"name":{"en":"President Ho Chi Minh\'s Birthday","vi":"Ngày sinh Chủ tịch Hồ Chí Minh"},"type":"observance"},"06-01":{"name":{"en":"International Children\'s Day","vi":"Ngày quốc tế Thiếu nhi"},"type":"observance"},"06-28":{"name":{"en":"Vietnamese Family Day","vi":"Ngày Gia đình Việt Nam"},"type":"observance"},"07-27":{"name":{"en":"Remembrance Day","vi":"Ngày Thương Binh Liệt Sĩ"},"type":"observance"},"08-19":{"name":{"en":"August Revolution Commemoration Day","vi":"Ngày cách mạng Tháng Tám"},"type":"observance"},"10-10":{"name":{"en":"Capital Liberation Day","vi":"Ngày giải phóng Thủ Đô"},"type":"observance"},"10-20":{"name":{"en":"Vietnamese Women\'s Day","vi":"Ngày Phụ nữ Việt Nam"},"type":"observance"},"11-20":{"name":{"en":"Vietnamese Teacher\'s Day","vi":"Ngày Nhà giáo Việt Nam"},"type":"observance"},"12-22":{"name":{"en":"National Defence Day","vi":"Ngày hội Quốc phòng Toàn dân"},"type":"observance"},"vietnamese 1-0-5":{"name":{"en":"Victory of Ngọc Hồi-Đống Đa","vi":"Chiến thắng Ngọc Hồi - Đống Đa"},"type":"observance"},"vietnamese 1-0-15":{"name":{"en":"Lantern Festival","vi":"Tết Nguyên Tiêu"},"type":"observance"},"vietnamese 4-0-15":{"name":{"en":"Buddha\'s Birthday","vi":"Lễ Phật đản"},"type":"observance"},"vietnamese 5-0-5":{"name":{"en":"Mid-year Festival","vi":"Tết Đoan ngọ"},"type":"observance"},"vietnamese 7-0-15":{"name":{"en":"Ghost Festival","vi":"Rằm Tháng Bảy, Vu Lan"},"type":"observance"},"vietnamese 8-0-15":{"name":{"en":"Mid-Autumn Festival","vi":"Tết Trung thu"},"type":"observance"},"vietnamese 12-0-23":{"name":{"en":"Kitchen guardians","vi":"Ông Táo chầu trời"},"type":"observance"}}},"XK":{"names":{"sq":"Republika e Kosovës","sr":"Република Косово","en":"Kosovo"},"langs":["sq","sr"],"zones":["Europe/Belgrade"],"dayoff":"sunday","days":{"01-01":{"_name":"01-01"},"julian 12-25":{"_name":"julian 12-25"},"02-17":{"_name":"Independence Day"},"04-09":{"_name":"Constitution Day"},"easter":{"_name":"easter"},"orthodox":{"_name":"orthodox"},"05-01":{"_name":"05-01"},"05-09":{"_name":"05-09"},"12-25":{"_name":"12-25"},"1 Shawwal":{"_name":"1 Shawwal"},"10 Dhu al-Hijjah":{"_name":"10 Dhu al-Hijjah"}}},"YT":{"names":{"fr":"Mayotte","en":"Mayotte"},"langs":["fr"],"zones":["Africa/Nairobi"],"dayoff":"sunday","_days":"FR","days":{"04-27":{"_name":"Abolition of Slavery"}}},"ZA":{"names":{"en":"South Africa"},"dayoff":"sunday","langs":["en"],"zones":["Africa/Johannesburg"],"days":{"01-01":{"_name":"01-01"},"substitutes 01-01 if sunday then next monday":{"name":{"en":"Public Holiday"}},"03-21":{"name":{"en":"Human Rights Day"}},"substitutes 03-21 if sunday then next monday":{"name":{"en":"Public Holiday"}},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1","name":{"en":"Family Day"}},"04-27":{"name":{"en":"Freedom Day"}},"substitutes 04-27 if sunday then next monday":{"name":{"en":"Public Holiday"}},"05-01":{"_name":"05-01","name":{"en":"Workers\' Day"}},"substitutes 05-01 if sunday then next monday":{"name":{"en":"Public Holiday"}},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"06-16":{"name":{"en":"Youth Day"}},"substitutes 06-16 if sunday then next monday":{"name":{"en":"Public Holiday"}},"3rd sunday in June":{"_name":"Fathers Day","type":"observance"},"08-09":{"name":{"en":"National Women\'s Day"}},"substitutes 08-09 if sunday then next monday":{"name":{"en":"Public Holiday"}},"07-18":{"name":{"en":"Nelson Mandela Day"},"type":"observance"},"09-24":{"name":{"en":"Heritage Day"}},"substitutes 09-24 if sunday then next monday":{"name":{"en":"Public Holiday"}},"12-16":{"name":{"en":"Day of Reconciliation"}},"substitutes 12-16 if sunday then next monday":{"name":{"en":"Public Holiday"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26","name":{"en":"Day of Goodwill"}},"substitutes 12-26 if sunday then next monday":{"name":{"en":"Public Holiday"}}}},"ZM":{"names":{"en":"Zambia"},"dayoff":"sunday","langs":["en"],"zones":["Africa/Maputo"],"days":{"01-01 and if sunday then next monday":{"substitute":true,"_name":"01-01"},"03-09":{"name":{"en":"Women’s Day"}},"03-12 and if sunday then next monday":{"substitute":true,"name":{"en":"Youth Day"}},"easter -2":{"_name":"easter -2"},"easter 1":{"_name":"easter 1"},"05-01 and if sunday then next monday":{"substitute":true,"_name":"05-01"},"05-25 and if sunday then next monday":{"substitute":true,"name":{"en":"African Freedom Day"}},"1st monday in July":{"name":{"en":"Heroes\' Day"}},"tuesday after 1st monday in July":{"name":{"en":"Unity Day"}},"1st monday in August":{"name":{"en":"Farmers\' Day"}},"2015-10-18":{"name":{"en":"National day of Prayers"}},"10-24 and if sunday then next monday":{"substitute":true,"_name":"Independence Day"},"12-25 and if sunday then next monday":{"substitute":true,"_name":"12-25"}}},"ZW":{"names":{"sn":"Nyika yeZimbabwe","nd":"iRiphabhuliki yeZimbabwe","xh":"iRiphubliki eyeZimbabwe","kck":"Nyika yeZimbabwe","en":"Zimbabwe"},"dayoff":"sunday","langs":["en"],"zones":["Africa/Maputo"],"days":{"01-01":{"_name":"01-01"},"easter -2":{"_name":"easter -2"},"easter":{"_name":"easter","type":"observance"},"easter 1":{"_name":"easter 1"},"04-18":{"_name":"Independence Day"},"05-01":{"_name":"05-01"},"05-25":{"name":{"en":"Africa Day"}},"2nd sunday in May":{"_name":"Mothers Day","type":"observance"},"3rd sunday in June":{"_name":"Fathers Day","type":"observance"},"2nd monday in August":{"name":{"en":"Heroes\' Day"}},"2nd tuesday in August":{"name":{"en":"Defence Forces Day"}},"12-22":{"name":{"en":"Unity Day"}},"12-25":{"_name":"12-25"},"12-26":{"_name":"12-26"}}}},"names":{"01-01":{"name":{"en":"New Year\'s Day","am":"እንቁጣጣሽ","ar":"عيد رأس السنة","az":"Yeni il","be":"Новы год","bg":"Нова Година","bs":"Novogodisnji dan","ca":"Any nou","cz":"Nový rok","da":"Nytår","de":"Neujahr","el":"Πρωτοχρονιά","es":"Año Nuevo","et":"uusaasta","fi":"Uudenvuodenpäivä","fil":"Araw ng Bagong Taon","fo":"Nýggjársdagur","fr":"Nouvel An","ge":"ახალი წელი","hr":"Nova godina","hu":"Újév","hy":"Ամանոր","id":"Hari tahun baru","it":"Capodanno","is":"Nýársdagur","jp":"元日","kl":"ukiortaaq","ko":"신정","lt":"Naujieji metai","lv":"Jaunais Gads","mg":"Taom-baovao","mk":"Нова Година","mt":"L-Ewwel tas-Sena","nl":"Nieuwjaar","no":"Første nyttårsdag","pap":"Aña Nobo","pl":"Nowy Rok","pt":"Ano Novo","ro":"Anul nou","ru":"Новый год","sl":"novo leto","sq":"Viti i Ri","sr":"Нова година","sv":"Nyårsdagen","sw":"Mwaka mpya","tr":"Yılbaşı","uk":"Новий Рік","vi":"Tết Dương lịch","zh":"元旦"}},"01-06":{"name":{"en":"Epiphany","am":"ብርሐነ ጥምቀት","da":"Åbenbaring","de":"Heilige Drei Könige","de-ch":"Dreikönigstag","es":"Día de los Reyes Magos","et":"kolmekuningapäev","fi":"Loppiainen","fr":"l\'Épiphanie","el":"Θεοφάνεια","hr":"Bogojavljenje, Sveta tri kralja","hu":"Vízkereszt","it":"Befana","is":"Þrettándinn","nl":"Driekoningen","mk":"Богојавление","pl":"Święto Trzech Króli","sk":"Zjavenie Pána","sv":"Trettondedag jul","vi":"Lễ Hiển Linh"}},"02-02":{"name":{"en":"Candlemas","de":"Lichtmess","hu":"Gyertyaszentelő Boldogasszony","nl":"Lichtmis","vi":"Lễ Đức Mẹ dâng Chúa Giêsu trong đền thánh"}},"02-14":{"name":{"en":"Valentine\'s Day","de":"Valentinstag","fr":"Saint-Valentin","hu":"Valentin nap","nl":"Valentijnsdag","vi":"Lễ tình nhân"}},"03-08":{"name":{"en":"International Women\'s Day","az":"Qadınlar günü","be":"Мiжнародны жаночы дзень","bg":"Ден на жената","fr":"Journée internationale des femmes","ge":"ქალთა საერთაშორისო დღე","hu":"Nemzetközi nőnap","hy":"Կանանց տոն","nl":"Internationale Vrouwendag","ro":"Ziua Internationala a Femeii","ru":"Международный женский день","sl":"Mednarodni dan žena","uk":"Міжнародний жіночий день","vi":"Quốc tế Phụ nữ","zh":"国际妇女节","de":"Internationaler Frauentag"}},"03-19":{"name":{"en":"Saint Joseph","de-at":"Josefitag","de":"Josefstag","es":"San José","it":"San Giuseppe","mt":"San Ġużepp","nl":"Hoogfeest van de Heilige Jozef","vi":"Kính Thánh Giuse"}},"04-01":{"name":{"en":"April Fools\' Day","hu":"Bolondok napja","nl":"1 April","sq":"Dita e Gënjeshtrave","vi":"Cá tháng tư"}},"05-01":{"name":{"en":"Labour Day","en-us":"Labor Day","ar":"يوم العمال","be":"Дзень працы","bg":"Ден на труда","bs":"Radni dan","cz":"Svátek práce","da":"1. maj","de":"Tag der Arbeit","el":"Εργατική Πρωτομαγιά","es":"Fiesta del trabajo","et":"kevadpüha","fi":"Vappu","fil":"Araw ng mga Manggagawa","fr":"Fête du travail","hr":"Praznik rada","hu":"A munka ünnepe","hy":"Աշխատանքի օր","id":"Hari Buruh Internasional","it":"Festa del Lavoro","is":"Hátíðisdagur Verkamanna","lt":"Tarptautinė darbo diena","lv":"Darba svētki","nl":"Dag van de Arbeid","no":"Arbeidernes dag","mg":"Fetin\'ny asa","mk":"Ден на трудот","mt":"Jum il-Ħaddiem","pap":"Dia di Obrero","pl":"Święto Pracy","pt":"Dia do trabalhador","ro":"Ziua muncii","sk":"Sviatok práce","sl":"praznik dela","sq":"Dita Ndërkombëtare e Punonjësve","sr":"Празник рада","sv":"Första Maj","uk":"День міжнародної солідарності трудящих","vi":"Quốc tế Lao động","zh":"劳动节"}},"05-09":{"name":{"en":"Europe Day","bg":"Денят на Европа","cs":"Den Evropy","da":"Europadagen","de":"Europatag","el":"Ημέρα της Ευρώπης","es":"Día de Europa","et":"Euroopa päev","fi":"Eurooppa-päivä","fr":"Journée de l\'Europe","ga":"Lá na hEorpa","hr":"Dan Europe","hu":"Európa-nap","it":"Festa dell\'Europa","ls":"Dan Evrope","lt":"Europos diena","lv":"Eiropas diena","mt":"Jum l-Ewropa","nl":"Dag van Europa ou Europadag","pl":"Dzień Europy","pt":"Dia da Europa","ro":"Ziua Europei","sk":"Deň Európy","sq":"Dita e Evropës","sv":"Europadagen"}},"06-29":{"name":{"en":"Saints Peter and Paul","de":"Peter und Paul","es":"San Pedro y San Pablo","fr":"Saint Pierre et Paul","it":"Santi Pietro e Paolo","mt":"L-Imnarja","nl":"Hoogfeest van Petrus en Paulus","vi":"Lễ kính Thánh Phêrô"}},"08-15":{"name":{"en":"Assumption","de":"Mariä Himmelfahrt","es":"Asunción","fr":"Assomption","el":"Κοίμηση της Θεοτόκου","hr":"Velika Gospa","it":"Ferragosto","lt":"Žolinė","mg":"Asompsiona","mk":"Успение на Пресвета Богородица","mt":"Santa Marija","nl":"O.L.V. Hemelvaart","pl":"Wniebowzięcie Najświętszej Maryi Panny","pt":"Assunção de Maria","ro":"Adormirea Maicii Domnului","sl":"Marijino vnebovzetje","sq":"Shën Mëria e Gushtit","vi":"Đức Mẹ Lên Trời"}},"11-01":{"name":{"en":"All Saints\' Day","bs":"Dita e të gjithë Shenjtorëve","de":"Allerheiligen","es":"Todos los Santos","fi":"Pyhäinpäivä","fil":"Undás; Todos los Santos; Araw ng mga Santo","fr":"Toussaint","hr":"Svi sveti","hu":"Mindenszentek","it":"Ognissanti","lt":"Visų šventųjų diena","mg":"Fetin\'ny olo-masina","mk":"Празникот на сите светци","nl":"Allerheiligen","pl":"Wszystkich Świętych","pt":"Todos os santos","sk":"Sviatok všetkých svätých","sq":"Të gjitha Saints","sr":"Сви Свети","sv":"Alla helgons dag","vi":"Lễ Các Thánh"}},"11-02":{"name":{"en":"All Souls\' Day","de":"Allerseelen","es":"Día de los Difuntos","et":"hingedepäev","fil":"Araw ng mga Kaluluwa","fr":"Fête des morts","hr":"Dušni dan","hu":"Halottak napja","nl":"Allerzielen","pt":"Dia de Finados","vi":"Lễ Các Đẳng","lt":"Vėlinės"}},"11-11":{"name":{"en":"Saint Martin","de":"Sankt Martin (Faschingsbeginn)","hu":"Márton nap","nl":"Sint Maarten","vi":"Lễ thánh Martin"}},"12-06":{"name":{"en":"Saint Nicholas","de":"Sankt Nikolaus","fr":"Saint-Nicolas","hu":"Mikulás","nl":"Sinterklaas","vi":"Thánh Saint Nicholas"}},"12-08":{"name":{"en":"Immaculate Conception","de":"Mariä Empfängnis","es":"La inmaculada concepción","fr":"Immaculée Conception","it":"Immacolata Concezione","mt":"Il-Kunċizzjoni","nl":"Onbevlekte Ontvangenis van Maria","pt":"Imaculada Conceição"}},"12-24":{"name":{"en":"Christmas Eve","bg":"Бъдни вечер","bs":"Badnji dan","cz":"Štědrý den","da":"Juleaften","de":"Heiliger Abend","es":"Nochebuena","et":"jõululaupäev","fo":"Jólaaftan","fi":"Jouluaatto","fil":"Bisperas ng Pasko","fr":"Veille de Noël","hr":"Badnji dan","hu":"Szenteste","is":"Aðfangadagur","kl":"juulliaraq","lt":"Šv. Kūčios","lv":"Ziemassvētku vakars","nl":"Kerstavond","no":"Julaften","pt":"Noite de Natal","sk":"Štedrý deň","sq":"Nata e Krishtlindjes","sr":"Бадњи дан","sv":"Julafton","vi":"Đêm Giáng Sinh"}},"12-25":{"name":{"en":"Christmas Day","am":"ልደተ-ለእግዚእነ/ ገና","bg":"Коледа","bn":"বড়দিন","bs":"Božić","de-at":"Christtag","ca":"Nadal","cz":"1. svátek vánoční","da":"Juledag","de":"Weihnachten","de-ch":"Weihnachtstag","el":"Χριστούγεννα","es":"Navidad","et":"esimene jõulupüha","fi":"Joulupäivä","fil":"Araw ng Pasko","fo":"Fyrsti jóladagur","fr":"Noël","hr":"Božić","hu":"Karácsony","hy":"Սուրբ Ծնունդ","id":"Hari Raya Natal","it":"Natale","is":"Jóladagur","jp":"ノエル","kl":"juullerujussuaq","ko":"기독탄신일","lt":"Šv. Kalėdos","lv":"Ziemassvētki","mg":"Krismasy","mk":"Католички Божиќ","ms":"Hari Natal","mt":"Il-Milied","nl":"Kerstmis","no":"Første Juledag","pap":"Dia Pasco di Nascimento","pl":"Pierwszy dzień Bożego Narodzenia","pt":"Natal","ro":"Crăciunul","ru":"Рождество Христово","sk":"Prvý sviatok vianočný","sl":"božič","sq":"Krishtlindja","sr":"Католички Божић","sv":"Juldagen","sw":"Krismasi","vi":"Lễ Giáng Sinh"}},"12-26":{"name":{"en":"Boxing Day","bg":"2-ри ден на Коледа","cz":"2. svátek vánoční","da":"Anden Juledag","de":"2. Weihnachtstag","de-at":"Stefanitag","de-ch":"Stephanstag","el":"Δεύτερη μέρα των Χριστουγέννων","es":"San Esteban","et":"teine jõulupüha","fi":"2. joulupäivä","fo":"Fyrsti gerandisdagur eftir jóladag","fr":"Lendemain de Noël","hr":"Svetog Stjepana","hu":"Karácsony másnapja","it":"Santo Stefano","is":"Annar í jólum","kl":"juullip aappaa","lt":"2. Kalėdų diena","lv":"Otrie Ziemassvētki","nl":"Tweede kerstdag","no":"Andre juledag","pap":"Di dos Dia Pasco di Nascimento","pl":"Drugi dzień Bożego Narodzenia","ro":"Două zi de Crăciun","sk":"Druhý sviatok vianočný","sv":"Annandag jul","vi":"Ngày tặng quà"}},"12-31":{"name":{"en":"New Year\'s Eve","da":"Nytårsaften","de":"Silvester","es":"Fin del Año","fi":"Uudenvuodenaatto","fil":"Bisperas ng Bagong Taon","fo":"Nýggjársaftan","fr":"Saint-Sylvestre","hu":"Szilveszter","hy":"Նոր տարվա գիշեր","is":"Gamlársdagur","it":"Ultimo dell’anno","jp":"大晦日","lv":"Vecgada vakars","nl":"Oudejaarsavond","no":"Nyttårsaften","pt":"Véspera de Ano Novo","sv":"Nyårsafton","vi":"Đêm giao thừa"}},"easter -48":{"name":{"en":"Shrove Monday","de":"Rosenmontag","es":"Carnaval","fr":"Lundi de Carnaval","nl":"Carnavalmaandag","pap":"Dialuna di Carnaval","vi":"Ngày thứ hai hoa hồng"}},"easter -47":{"name":{"en":"Shrove Tuesday","es":"Carnaval","de":"Faschingsdienstag","hr":"Pokladni utorak","hu":"Húshagyó kedd","nl":"Vastenavond","pt":"Carnaval","vi":"Thứ ba mập béo"}},"easter -46":{"name":{"en":"Ash Wednesday","de":"Aschermittwoch","es":"Miercoles de Ceniza","fr":"Mercredi des Cendres","hu":"Hamvazószerda","it":"Ceneri","is":"Öskudagur","nl":"Aswoensdag","pt":"Quarta-feira de Cinzas","sw":"Jumatano ya Majivu","vi":"Thứ tư Lễ Tro"}},"easter -7":{"name":{"en":"Palm Sunday","de":"Palmsonntag","es":"Domingo de Ramos","hu":"Virágvasárnap","it":"Domenica delle Palme","is":"Pálmasunnudagur","nl":"Palmzondag","no":"Palmesøndag","vi":"Chúa nhật Lễ Lá"}},"easter -3":{"name":{"en":"Maundy Thursday","cz":"Zelený čtvrtek","da":"Skærtorsdag","de":"Gründonnerstag","es":"Jueves Santo","fil":"Huwebes Santo","fo":"Skírhósdagur","fr":"Jeudi saint","is":"Skírdagur","it":"Giovedì santo","kl":"sisamanngortoq illernartoq","nl":"Witte donderdag","no":"Skjærtorsdag","sv":"Skärtorsdagen","vi":"Thứ năm Tuần Thánh"}},"easter -2":{"name":{"en":"Good Friday","am":"ስቅለት","bg":"Разпети петък","bs":"Dobar petak","cz":"Velký pátek","da":"Langfredag","de":"Karfreitag","es":"Viernes Santo","fi":"Pitkäperjantai","fil":"Biyernes Santo","fo":"Langafríggjadagur","fr":"Vendredi saint","el":"Μεγάλη Παρασκευή","et":"suur reede","ge":"წითელი პარასკევი","hr":"Veliki petak","hu":"Nagypéntek","id":"Wafat Yesus Kristus","it":"Venerdì santo","is":"Föstudagurinn langi","kl":"tallimanngornersuaq","lv":"Lielā Piektdiena","mt":"Il-Ġimgħa l-Kbira","nl":"Goede Vrijdag","no":"Langfredag","pap":"Diabierna Santo","pt":"Sexta-Feira Santa","ro":"Vinerea Mare","sk":"Veľkonočný piatok","sq":"E Premtja e Madhe","sr":"Католички Велики петак","sv":"Långfredagen","sw":"Ijumaa Kuu","vi":"Thứ sáu Tuần Thánh"}},"easter -1":{"name":{"en":"Easter Saturday","cz":"Bílá sobota","de":"Karsamstag","es":"Sabado Santo","fil":"Sabado de Gloria","fr":"Samedi saint","ge":"დიდი შაბათი","hu":"Nagyszombat","it":"Sabado santo","nl":"Dag voor Pasen","no":"Påskeaften","vi":"Thứ bảy Tuần Thánh"}},"easter":{"name":{"en":"Easter Sunday","am":"ፋሲካ","bg":"Великден","bs":"Vaskrs","cz":"Velikonoční neděle","da":"Påskesøndag","de":"Ostersonntag","el":"Πάσχα","es":"Pascua","et":"lihavõtted","fi":"Pääsiäispäivä","fil":"Pasko ng Pagkabuhay","fo":"Páskadagur","fr":"Pâques","ge":"აღდგომა","hr":"Uskrs","hu":"Húsvétvasárnap","it":"Domenica di Pasqua","is":"Páskadagur","kl":"poorskip-ullua","lt":"Velykos","lv":"Lieldienas","nl":"Pasen","no":"Første påskedag","pap":"Dia Pasco di Resureccion","pl":"Niedziela Wielkanocna","pt":"Páscoa","ro":"Paștele","sk":"Veľká noc","sl":"velika noč","sq":"Pashkët Katolike","sr":"Католички Васкрс","sv":"Påsk","sw":"Pasaka","vi":"Lễ Phục Sinh"}},"easter 1":{"name":{"en":"Easter Monday","bg":"Велики понеделник","bs":"Uskrsni ponedjeljak","cz":"Velikonoční pondělí","da":"Anden påskedag","de":"Ostermontag","el":"Δευτέρα του Πάσχα","es":"Lunes de Pascua","fi":"2. pääsiäispäivä","fo":"Annar páskadagur","fr":"Lundi de Pâques","ge":"აღდგომის ორშაბათი","hr":"Uskršnji ponedjeljak","hu":"Húsvéthétfő","it":"Lunedì dell’Angelo","is":"Annar í páskum","kl":"poorskip-aappaa","lv":"Otrās Lieldienas","mg":"Alatsinain\'ny Paska","mk":"вториот ден на Велигден","nl":"Tweede paasdag","no":"Andre påskedag","pap":"Di dos Dia Pasco di Resureccion","pl":"Drugi dzień Wielkanocy","ro":"Două zi de Pasti","sk":"Veľkonočný pondelok","sl":"Velikonočni ponedeljek","sr":"Католички Васкрсни понедељак","sv":"Annandag påsk","sw":"Jumatatu ya Pasaka","vi":"Thứ hai phục sinh"}},"easter 39":{"name":{"en":"Ascension Day","da":"Kristi Himmelfartsdag","de":"Christi Himmelfahrt","es":"La Asunción","fi":"Helatorstai","fo":"Kristi Himmalsferðardagur","fr":"Ascension","id":"Kenaikan Yesus Kristus","it":"Ascensione","is":"Uppstigningardagur","kl":"qilaliarfik","mg":"Andro niakarana","nl":"O.L.H. Hemelvaart","no":"Kristi himmelfartsdag","pap":"Dia di Asuncion","ro":"Ziua Eroilor","sv":"Kristi himmelfärds dag","vi":"Lễ Thăng Thiên"}},"easter 49":{"name":{"en":"Pentecost","da":"Pinsedag","de":"Pfingstsonntag","el":"Αγίου Πνεύματος","es":"Pentecostés","et":"nelipühade 1. püha","fi":"Helluntaipäivä","fo":"Hvítusunnudagur","fr":"Pentecôte","hu":"Pünkösdvasárnap","it":"Pentecoste","is":"Hvítasunnudagur","kl":"piinsip ullua","nl":"Pinksteren","no":"Første pinsedag","mk":"Духовден","pl":"Zielone Świątki","ro":"Rusaliile","sl":"binkošti","sv":"Pingst","uk":"Трійця","vi":"Lễ Chúa Thánh Thần Hiện Xuống"}},"easter 50":{"name":{"en":"Whit Monday","da":"Anden Pinsedag","de":"Pfingstmontag","es":"Lunes de Pentecostés","fo":"Annar hvítusunnudagur","fr":"Lundi de Pentecôte","hu":"Pünkösdhétfő","is":"Annar í hvítasunnu","it":"Lunedì di Pentecoste","kl":"piinsip aappaa","mg":"Alatsinain\'ny Pentekosta","nl":"Tweede pinksterdag","no":"Andre pinsedag","ro":"Două zi de Rusalii","sv":"Annandag pingst"}},"easter 60":{"name":{"en":"Corpus Christi","de":"Fronleichnam","es":"Corpus Christi","fr":"la Fête-Dieu","it":"Corpus Domini","hr":"Tijelovo","nl":"Sacramentsdag","pl":"Dzień Bożego Ciała","pt":"Corpo de Deus","vi":"Lễ Mình và Máu Thánh Chúa Kitô"}},"julian 01-01":{"name":{"en":"Orthodox New Year","bs":"Pravoslavni novogodišnji dan","hr":"Pravoslavna Nova Godina","nl":"Orthodox Nieuwjaar","sq":"Viti i Ri Ortodoks","sr":"Православна Нова година"}},"julian 12-24":{"name":{"en":"Orthodox Christmas Eve","nl":"Orthodox Kerstavond","mk":"Бадник"}},"julian 12-25":{"name":{"en":"Orthodox Christmas","bs":"Pravoslavni Božić","hr":"Pravoslavni Božić","mk":"Прв ден Божик","nl":"Orthodox Kerstmis","ro":"Craciun pe Rit Vechi","sq":"Krishtlindjet Ortodokse","sr":"Божић","uk":"Різдво"}},"orthodox -2":{"name":{"en":"Orthodox Good Friday","mk":"Велики Петок","nl":"Orthodoxe Goede vrijdag","sr":"Велики петак"}},"orthodox":{"name":{"en":"Orthodox Easter","bs":"Pravoslavni Vaskrs","hr":"Pravoslavni Uskrs","mk":"Прв ден Велигден","nl":"Orthodox Pasen","sq":"Pashkët Ortodokse","sr":"Васкрс","uk":"Великдень"}},"orthodox 1":{"name":{"en":"Orthodox Easter Monday","mk":"Втор ден Велигден","nl":"Orthodoxe Tweede Paasdag","sr":"Васкрсни понедељак"}},"1 Muharram":{"name":{"en":"Islamic New Year","ar":"رأس السنة الهجرية","bs":"Nova hidžretska godina","fil":"Unang Araw ng Muharram","hr":"Nova hidžretska godina","id":"Tahun Baru Islam","ms":"Awal Tahun Hijrah","nl":"Islamitisch Nieuwjaar","sq":"Viti i Ri hixhri"}},"10 Muharram":{"name":{"en":"Day of Ashura","ar":"عاشوراء","bn":"আশুরা","nl":"Asjoera"}},"12 Rabi al-awwal":{"name":{"en":"Birthday of Muhammad (Mawlid)","am":"መውሊድ","ar":"المولد النبويّ","bn":"ঈদে মিলাদুন্নবী","bs":"Mevlud","fr":"Mawlid","id":"Maulid Nabi Muhammad","ms":"Maulidur Rasul","nl":"Mawlid an-Nabi","sq":"Mevludi"}},"27 Rajab":{"name":{"en":"Laylat al-Mi\'raj","ar":"الإسراء والمعراج","bs":"Lejletul Mi\'radž","id":"Maulid Nabi Muhammad","ms":"Israk dan Mikraj","nl":"Laylat al-Miraadj","sq":"Nata e Miraxhit","tr":"Miraç Gecesi"}},"15 Shaban":{"name":{"en":"Laylat al-Bara\'at","ar":"ليلة البراءة","bs":"Lejletul berat","nl":"Laylat al-Baraat","sq":"Nata e Beratit"}},"1 Ramadan":{"name":{"en":"First day of Ramadan","am":"ረመዳን","ar":"اليوم الأول من رمضان","bs":"Prvi dan posta","ms":"Hari Pertama Berpuasa","nl":"Eerste dag van Ramadan","sq":"Dita e parë e agjërimit"}},"27 Ramadan":{"name":{"en":"Laylat al-Qadr","ar":"لیلة القدر","bs":"Lejletul kadr","nl":"Waardevolle Nacht (Laylat al-Qadr)","sq":"Nata e Kadrit"}},"1 Shawwal":{"name":{"en":"End of Ramadan (Eid al-Fitr)","am":"ዒድ አል ፈጥር","ar":"عيد الفطر","az":"Ramazan Bayramı","bn":"ঈদুল ফিতর","bs":"Ramazanski bajram","de":"Zuckerfest","fil":"Pagwawakas ng Ramadan","fr":"Fête de fin du Ramadan","hr":"Ramazanski bajram","id":"Hari Raya Idul Fitri","nl":"Suikerfeest (Eid al-Fitr)","mk":"Рамазан Бајрам","ms":"Hari Raya Aidil Fitri","sq":"Fitër Bajrami","tr":"Ramazan Bayramı","sr":"Рамазански Бајрам","sw":"Idd-ul-Fitr"}},"9 Dhu al-Hijjah":{"name":{"en":"Arafat Day","ar":"يوم عرفة"}},"10 Dhu al-Hijjah":{"name":{"en":"Feast of the Sacrifice (Eid al-Adha)","am":"ዒድ አል አድሐ","ar":"عيد الأضحى","az":"Qurban Bayramı","bn":"ঈদুল আযহা","bs":"Kurbanski bajram","de":"Opferfest","fil":"Eidul Adha","fr":"Fête du mouton","hr":"Kurban-bajram","id":"Hari Raya Idul Adha","nl":"Offerfeest (Eid Al-Adha)","mk":"Курбан Бајрам","ms":"Hari Raya Aidil Adha","sq":"Kurban Bajrami","tr":"Kurban Bayramı","sr":"Курбански Бајрам","sw":"Idd-ul-Azha"}},"15 Nisan":{"name":{"en":"Pesach","bs":"Pesah","de":"Pessach","hr":"Pesač","nl":"Pesach","sq":"Pesach","sr":"Песах"}},"1 Tishrei":{"name":{"en":"Rosh Hashanah","bs":"Roš Hašana","de":"Rosch Haschana","hr":"Roš Hašane","nl":"Rosj Hasjana","sq":"Rosh Hashanah","sr":"Рош Хашана"}},"10 Tishrei":{"name":{"en":"Yom Kippur","bs":"Jom Kipur","de":"Jom Kippur","hr":"Jom Kipur","mk":"Јом Кипур","nl":"Jom Kipoer","sq":"Yom Kippur","sr":"Јом Кипур"}},"Deepavali":{"name":{"en":"Deepavali"}},"Vesak":{"name":{"en":"Vesak Day","id":"Hari Raya Waisak"}},"Abolition of Slavery":{"name":{"en":"Abolition of Slavery","fr":"Abolition de l’esclavage","nl":"Afschaffing van de slavernij","vi":"Bãi bỏ chế độ Nô lệ"}},"Buß- und Bettag":{"name":{"de":"Buß- und Bettag","en":"Day of Prayer and Repentance"}},"Constitution Day":{"name":{"en":"Constitution Day","da":"Grundlovsdag","de":"Tag der Verfassung","ca":"Dia de la Constitució","es":"Día de la Constitución","fil":"Araw ng Saligang Batas","fo":"Grundlógardagur","hy":"Սահմանադրության օր","jp":"憲法記念日","ko":"제헌절","nl":"Dag van de Grondwet","no":"Grunnlovsdagen","pt":"Dia da Constituição","ro":"Ziua Constituției","sk":"Deň Ústavy","sq":"Dita e Kushtetutës","uk":"День Конституції","vi":"Ngày pháp luật"}},"Fathers Day":{"name":{"en":"Father\'s Day","et":"isadepäev","fr":"Fête des Pères","lt":"Tėvo diena","nl":"Vaderdag","pt":"Dia dos Pais","no":"Farsdag","vi":"Ngày của cha"}},"Independence Day":{"name":{"en":"Independence Day","ar":"عيد الاستقلال","be":"Дзень Незалежнасцi","bg":"Ден на независимостта","bs":"Dan nezavisnosti","de":"Unabhängigkeitstag","es":"Día de la Independencia","et":"iseseisvuspäev","fi":"Itsenäisyyspäivä","fil":"Araw ng Kalayaan","fr":"Jour de l\'Indépendance","hr":"Dan neovisnosti","hy":"Անկախության օր","id":"Hari Ulang Tahun Kemerdekaan Republik Indonesia","mk":"Ден на независноста","mt":"Jum l-Indipendenza","nl":"Onafhankelijkheidsdag","pl":"Narodowe Święto Niepodległości","pt":"Dia da Independência","ro":"Ziua Independentei","sq":"Dita e Pavarësisë","sr":"Дан независности","sv":"Självständighetsdagen","sw":"Siku ya uhuru","uk":"День Незалежності","vi":"Ngày Độc lập"}},"Liberation Day":{"name":{"en":"Liberation Day","nl":"Bevrijdingsdag","no":"Frigjøringsdagen","sq":"Dita e Çlirimit","vi":"Ngày Thống nhất"}},"Mothers Day":{"name":{"en":"Mother\'s Day","cz":"Den matek","da":"Mors Dag","de":"Muttertag","el":"Γιορτή της μητέρας","es":"Día de la Madre","et":"emadepäev","fi":"Äitien päivä","fr":"Fête des Mères","hr":"Majčin dan","hu":"Anyák napja","hy":"Ցեղասպանության զոհերի հիշատակի օր","is":"Mæðradagurinn","it":"Festa della mamma","lt":"Motinos diena","lv":"Mātes diena","nl":"Moederdag","no":"Morsdag","pt":"Dia das Mães","pl":"Dzień Matki","ro":"Ziua Mamei","sq":"Dita e Nënës","sv":"Mors dag","vi":"Ngày của mẹ"}},"National Holiday":{"name":{"en":"National Holiday","de":"Nationalfeiertag","es":"Fiesta Nacional","fr":"Fête nationale","hu":"Nemzeti ünnep","el":"εθνική επέτειος","nl":"Nationale feestdag","vi":"Quốc Lễ"}},"Public Holiday":{"name":{"en":"Public Holiday","fr":"Jour férié légaux","nl":"Wettelijke feestdag","pt":"Feriado Obrigatório","vi":"Nghỉ lễ Toàn Quốc"}},"Reformation Day":{"name":{"en":"Reformation Day","de":"Reformationstag","es":"Día Nacional de las Iglesias Evangélicas y Protestantes","nl":"Hervormingsdag","vi":"Kháng Cách"}},"Revolution Day":{"name":{"en":"Revolution Day","es":"Día de la Revolución","nl":"Dag van de revolutie","vi":"Tổng khởi nghĩa"}},"substitutes":{"name":{"en":"substitute day","az":"əvəz gün","bs":"zamjena dan","de":"Ersatztag","es":"día sustituto","fr":"jour substitut","hr":"zamjena dan","jp":"振替休日","lv":"aizstājējs diena","mk":"заменет ден","nl":"substituut","sq":"ditë zëvendësuese","sr":"замена дан","uk":"замінити день","vi":"ngày thay thế"}}}}');

/***/ }),

/***/ 99823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ TimeOffSettingsMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80189);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);












const _c0 = a0 => ({
  visibility: a0
});
function TimeOffSettingsMutationComponent_h5_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TIME_OFF_PAGE.POLICY.ADD_POLICY"), " ");
  }
}
function TimeOffSettingsMutationComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TIME_OFF_PAGE.POLICY.EDIT_POLICY"), " ");
  }
}
function TimeOffSettingsMutationComponent_nb_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", employee_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("src", employee_r2.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", employee_r2.user.firstName, " ", employee_r2.user.lastName, "");
  }
}
let TimeOffSettingsMutationComponent = /*#__PURE__*/(() => {
  let TimeOffSettingsMutationComponent = class TimeOffSettingsMutationComponent {
    constructor(dialogRef, employeesService, store) {
      this.dialogRef = dialogRef;
      this.employeesService = employeesService;
      this.store = store;
      this.selectedEmployees = [];
      this.employees = [];
      this.showWarning = false;
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(organization => {
        this.organization = organization;
        this.organizationId = organization.id;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
      this.loadEmployees();
      this._initializeForm();
    }
    loadEmployees() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (!_this.organizationId) {
          return;
        }
        const {
          items
        } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .firstValueFrom */ ._)(_this.employeesService.getAll(['user'], {
          organization: {
            id: _this.organizationId
          },
          tenantId: _this.organization.tenantId
        }));
        _this.employees = items;
        if (_this.policy) {
          _this.policy.employees.forEach(employee => {
            _this.selectedEmployees.push(employee.id);
          });
        }
      })();
    }
    _initializeForm() {
      if (this.policy) {
        this.name = this.policy.name;
        this.paid = this.policy.paid;
        this.requiresApproval = this.policy.requiresApproval;
      } else {
        this.name = '';
        this.paid = true;
        this.requiresApproval = false;
      }
    }
    addOrEditPolicy() {
      if (this.name && this.selectedEmployees) {
        this.dialogRef.close({
          name: this.name,
          organizationId: this.organizationId,
          tenantId: this.organization.tenantId,
          employees: this.selectedEmployees,
          requiresApproval: this.requiresApproval,
          paid: this.paid
        });
      } else {
        this.showWarning = true;
        const timeoutId = setTimeout(() => {
          this.closeWarning();
        }, 3000); // 3000 milliseconds, adjust as needed
        // Later, if you want to cancel the timeout
        clearTimeout(timeoutId);
      }
    }
    onEmployeesSelected(employees) {
      this.selectedEmployees = employees;
    }
    changeRequiresApproval(checked) {
      this.requiresApproval = checked;
    }
    changePaidStatus(checked) {
      this.paid = checked;
    }
    closeWarning() {
      this.showWarning = !this.showWarning;
    }
    close() {
      this.dialogRef.close();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function TimeOffSettingsMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeOffSettingsMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TimeOffSettingsMutationComponent,
        selectors: [["ngx-time-off-settings-mutation"]],
        inputs: {
          team: "team"
        },
        standalone: false,
        decls: 34,
        vars: 31,
        consts: [["showEditHeader", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], ["class", "title", 4, "ngIf", "ngIfElse"], [1, "pb-0"], [1, "row"], [1, "form-group", "col-6", "mb-2"], ["type", "text", "name", "name", "nbInput", "", "fullWidth", "", 3, "ngModelChange", "ngModel", "placeholder"], ["multiple", "", "fullWidth", "", 3, "selectedChange", "selected", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["accent", "warning", 1, "col-12", "mb-2", 3, "ngStyle"], [2, "color", "red", "font-size", "12px", "margin", "0"], [1, "form-group", "col-6", "checkboxes"], ["status", "primary", 1, "my-auto", "align-center", 3, "checkedChange", "checked"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click"], [1, "title"], [3, "value"], ["alt", "Smiley face", 3, "src"]],
        template: function TimeOffSettingsMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-header", 2)(2, "span", 3)(3, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffSettingsMutationComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, TimeOffSettingsMutationComponent_h5_4_Template, 3, 3, "h5", 5)(5, TimeOffSettingsMutationComponent_ng_template_5_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 6)(8, "form", 7)(9, "div", 8)(10, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function TimeOffSettingsMutationComponent_Template_input_ngModelChange_10_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.name, $event) || (ctx.name = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 8)(13, "nb-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function TimeOffSettingsMutationComponent_Template_nb_select_selectedChange_13_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onEmployeesSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(15, TimeOffSettingsMutationComponent_nb_option_15_Template, 3, 4, "nb-option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "nb-card", 12)(17, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "div", 14)(21, "nb-checkbox", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function TimeOffSettingsMutationComponent_Template_nb_checkbox_checkedChange_21_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.changeRequiresApproval($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(24, "nb-checkbox", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function TimeOffSettingsMutationComponent_Template_nb_checkbox_checkedChange_24_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.changePaidStatus($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(27, "nb-card-footer", 16)(28, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffSettingsMutationComponent_Template_button_click_28_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TimeOffSettingsMutationComponent_Template_button_click_31_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.addOrEditPolicy());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const showEditHeader_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.policy)("ngIfElse", showEditHeader_r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 15, "FORM.PLACEHOLDERS.POLICY_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 17, "FORM.PLACEHOLDERS.ADD_REMOVE_EMPLOYEES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selected", ctx.selectedEmployees);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.employees);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(29, _c0, ctx.showWarning ? "visible" : "hidden"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 19, "TIME_OFF_PAGE.POLICY.NAME_IS_REQUIRED"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.requiresApproval);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 21, "TIME_OFF_PAGE.POLICY.REQUIRES_APPROVAL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.paid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(26, 23, "TIME_OFF_PAGE.POLICY.PAID"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(30, 25, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(33, 27, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgModel */ .vS, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgForm */ .cV, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgStyle */ .B3, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCheckboxComponent */ .DMy, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 645px;\n}\n.main[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.main[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%]   .checkboxes[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  padding-right: 15px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.download-btn[_ngcontent-%COMP%] {\n  height: 2rem;\n  font-weight: 400;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  };
  TimeOffSettingsMutationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il])], TimeOffSettingsMutationComponent);
  return TimeOffSettingsMutationComponent;
})();


/***/ })

}]);