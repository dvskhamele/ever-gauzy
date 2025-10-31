"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5467],{

/***/ 2502:
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

/***/ 3722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvailabilitySlotsModule: () => (/* binding */ AvailabilitySlotsModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48637);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1618);
/* harmony import */ var _availability_slots_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);









let AvailabilitySlotsModule = /*#__PURE__*/(() => {
  class AvailabilitySlotsModule {
    static {
      this.ɵfac = function AvailabilitySlotsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AvailabilitySlotsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: AvailabilitySlotsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogModule */ .nZv, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__/* .FullCalendarModule */ .E, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_5__/* .NgxPermissionsModule */ .Ov.forChild(), _availability_slots_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .AvailabilitySlotsRouteModule */ .A, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .TimerPickerModule */ .O]
      });
    }
  }
  return AvailabilitySlotsModule;
})();

/***/ }),

/***/ 11768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2502);

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

/***/ 16061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43273);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83451);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27805);



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

/***/ 36676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AvailabilitySlotType)
/* harmony export */ });
/* unused harmony export AvailabilityMergeType */
var AvailabilitySlotType = /*#__PURE__*/function (AvailabilitySlotType) {
  AvailabilitySlotType["DEFAULT"] = "Default";
  AvailabilitySlotType["RECURRING"] = "Recurring";
  return AvailabilitySlotType;
}(AvailabilitySlotType || {});
var AvailabilityMergeType = /*#__PURE__*/function (AvailabilityMergeType) {
  AvailabilityMergeType["MERGE"] = "merge";
  AvailabilityMergeType["REMOVE"] = "remove";
  AvailabilityMergeType["SKIP"] = "skip";
  return AvailabilityMergeType;
}(AvailabilityMergeType || {});

/***/ }),

/***/ 36902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11768);

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

/***/ 43273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60640);

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

/***/ 48407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AvailabilitySlotsRouteModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(908);
/* harmony import */ var _availability_slots_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);




const routes = [{
  path: '',
  redirectTo: 'recurring-availability',
  pathMatch: 'full'
}, {
  path: 'date-specific-availability',
  data: {
    page: 'date-specific'
  },
  component: _availability_slots_component__WEBPACK_IMPORTED_MODULE_0__/* .AvailabilitySlotsComponent */ .e
}, {
  path: 'recurring-availability',
  data: {
    page: 'recurring'
  },
  component: _availability_slots_component__WEBPACK_IMPORTED_MODULE_0__/* .AvailabilitySlotsComponent */ .e
}];
let AvailabilitySlotsRouteModule = /*#__PURE__*/(() => {
  class AvailabilitySlotsRouteModule {
    static {
      this.ɵfac = function AvailabilitySlotsRouteModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AvailabilitySlotsRouteModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: AvailabilitySlotsRouteModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .iI]
      });
    }
  }
  return AvailabilitySlotsRouteModule;
})();

/***/ }),

/***/ 57733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ combineLatest)
/* harmony export */ });
/* unused harmony export combineLatestInit */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35484);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67306);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39127);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89685);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86289);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13685);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82795);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25969);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12508);









function combineLatest(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popResultSelector */ .ms)(args);
  const {
    args: observables,
    keys
  } = (0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__/* .argsArgArrayOrObject */ .D)(args);
  if (observables.length === 0) {
    return (0,_from__WEBPACK_IMPORTED_MODULE_2__/* .from */ .H)([], scheduler);
  }
  const result = new _Observable__WEBPACK_IMPORTED_MODULE_3__/* .Observable */ .c(combineLatestInit(observables, scheduler, keys ? values => (0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__/* .createObject */ .e)(keys, values) : _util_identity__WEBPACK_IMPORTED_MODULE_5__/* .identity */ .D));
  return resultSelector ? result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__/* .mapOneOrManyArgs */ .I)(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform = _util_identity__WEBPACK_IMPORTED_MODULE_5__/* .identity */ .D) {
  return subscriber => {
    maybeSchedule(scheduler, () => {
      const {
        length
      } = observables;
      const values = new Array(length);
      let active = length;
      let remainingFirstValues = length;
      for (let i = 0; i < length; i++) {
        maybeSchedule(scheduler, () => {
          const source = (0,_from__WEBPACK_IMPORTED_MODULE_2__/* .from */ .H)(observables[i], scheduler);
          let hasFirstValue = false;
          source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__/* .createOperatorSubscriber */ ._)(subscriber, value => {
            values[i] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, () => {
            if (! --active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__/* .executeSchedule */ .N)(subscription, scheduler, execute);
  } else {
    execute();
  }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 67306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ argsArgArrayOrObject)
/* harmony export */ });
const {
  isArray
} = Array;
const {
  getPrototypeOf,
  prototype: objectProto,
  keys: getKeys
} = Object;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    const first = args[0];
    if (isArray(first)) {
      return {
        args: first,
        keys: null
      };
    }
    if (isPOJO(first)) {
      const keys = getKeys(first);
      return {
        args: keys.map(key => first[key]),
        keys
      };
    }
  }
  return {
    args: args,
    keys: null
  };
}
function isPOJO(obj) {
  return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}
//# sourceMappingURL=argsArgArrayOrObject.js.map

/***/ }),

/***/ 70764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ AvailabilitySlotsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(64411);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47564);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93791);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2466);
/* harmony import */ var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85604);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15788);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36676);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(36950);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23423);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(66781);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(84992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(56383);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(48637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(10936);
/* harmony import */ var _packages_ui_core_shared_src_lib_timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(81386);





























const _c0 = ["calendar"];
function AvailabilitySlotsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "div", 9)(5, "ga-timer-picker", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function AvailabilitySlotsComponent_div_9_Template_ga_timer_picker_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.createForm.startTime, $event) || (ctx_r1.createForm.startTime = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "div", 9)(7, "ga-timer-picker", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function AvailabilitySlotsComponent_div_9_Template_ga_timer_picker_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.createForm.endTime, $event) || (ctx_r1.createForm.endTime = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "div", 9)(9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function AvailabilitySlotsComponent_div_9_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.setSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 5, (ctx_r1.organization == null ? null : ctx_r1.organization.startWeekOn) == ctx_r1.weekDaysEnum.MONDAY ? "SCHEDULE.MONDAY_FRIDAY" : "SCHEDULE.SUNDAY_THURSDAY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r1.createForm.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r1.createForm.endTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r1.createForm.startTime || !ctx_r1.createForm.endTime ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(11, 7, "BUTTONS.SET"), " ");
  }
}
function AvailabilitySlotsComponent_full_calendar_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "full-calendar", 12, 0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("options", ctx_r1.calendarOptions);
  }
}
let AvailabilitySlotsComponent = class AvailabilitySlotsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
  constructor(store, route, errorHandler, toastrService, availabilitySlotsService, timeOffService, translateService, ngxPermissionsService) {
    super(translateService);
    this.store = store;
    this.route = route;
    this.errorHandler = errorHandler;
    this.toastrService = toastrService;
    this.availabilitySlotsService = availabilitySlotsService;
    this.timeOffService = timeOffService;
    this.translateService = translateService;
    this.ngxPermissionsService = ngxPermissionsService;
    this.calendarEvents = [];
    this.headerToolbarOptions = {
      left: 'next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    };
    this.hiddenDays = [];
    this.removedEvents = [];
    this.timeOffs = [];
    this.loading = true;
    this.availableSlots$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
    this.createForm = {
      startTime: '00:00',
      endTime: '00:00'
    };
    this.weekDaysEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .WeekDaysEnum */ .ru;
  }
  ngOnInit() {
    this.getCalendarOption();
    this.route.data.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(({
      page
    }) => {
      this.recurringAvailabilityMode = page === 'recurring';
      if (page === 'recurring') {
        delete this.calendarOptions.selectAllow;
        this.calendarOptions.hiddenDays = [];
        this.calendarOptions.dayHeaderFormat = {
          weekday: 'long'
        };
        this.calendarOptions.headerToolbar = {
          center: '',
          right: '',
          left: ''
        };
      }
    });
    this.store.userRolePermissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(permissions => (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .isNotEmpty */ .hj)(permissions)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(data => {
      const permissions = data.map(({
        permission
      }) => permission);
      this.ngxPermissionsService.loadPermissions(permissions);
    });
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeEmployee$ = this.store.selectedEmployee$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(([organization]) => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(([organization]) => this.organization = organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(([organization, employee]) => {
      const {
        defaultStartTime,
        defaultEndTime
      } = organization;
      if (defaultStartTime) {
        this.createForm.startTime = defaultStartTime;
      }
      if (defaultEndTime) {
        this.createForm.endTime = defaultEndTime;
      }
      if (employee && employee.id) {
        this.selectedEmployee = employee;
      } else {
        this.selectedEmployee = null;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.availableSlots$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.availableSlots$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .B)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.fetchAvailableSlots()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /*
   * Get calendar option
   */
  getCalendarOption() {
    let currentDay = moment__WEBPACK_IMPORTED_MODULE_0__().day();
    while (currentDay > 0) {
      this.hiddenDays.push(currentDay--);
    }
    this.calendarOptions = {
      initialView: 'timeGridWeek',
      headerToolbar: this.headerToolbarOptions,
      themeSystem: 'bootstrap',
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay, _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A],
      weekends: true,
      selectable: true,
      height: 'auto',
      selectOverlap: false,
      events: this.getEvents.bind(this),
      editable: true,
      eventOverlap: false,
      hiddenDays: this.hiddenDays,
      dayHeaderDidMount: this.headerMount.bind(this),
      eventClick: this.unSelectEvent.bind(this),
      selectAllow: select => moment__WEBPACK_IMPORTED_MODULE_0__().diff(select.start) <= 0,
      select: this.handleSelectRange.bind(this),
      eventDrop: this.dragDropEvent.bind(this)
    };
  }
  /*
   * Schedule Drag & Drop Event Calendar
   */
  dragDropEvent($event) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
      const event = $event.event;
      const {
        id
      } = event.extendedProps;
      const {
        tenantId
      } = _this.store.user;
      const {
        id: organizationId
      } = _this.organization;
      const input = {
        startTime: event.start,
        endTime: event.end,
        type: _this.recurringAvailabilityMode ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .AvailabilitySlotType */ .q.RECURRING : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .AvailabilitySlotType */ .q.DEFAULT,
        allDay: event.allDay,
        organizationId,
        tenantId
      };
      if (_this.selectedEmployee) {
        input['employeeId'] = _this.selectedEmployee.id;
      }
      if (event.allDay) {
        input['endTime'] = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(event.start).endOf('day').format('YYYY-MM-DD hh:mm:ss'));
      }
      yield _this.availabilitySlotsService.update(id, {
        ...input
      });
    })();
  }
  headerMount(config) {
    if (this.calendar && !this.recurringAvailabilityMode) {
      const currentStart = this.calendar.getApi().view.currentStart;
      const currentEnd = this.calendar.getApi().view.currentEnd;
      const hideDays = moment__WEBPACK_IMPORTED_MODULE_0__().isBetween(currentStart, currentEnd, 'day', '[]') ? this.hiddenDays : [];
      this.calendar.getApi().setOption('hiddenDays', hideDays);
      this.headerToolbarOptions.left = moment__WEBPACK_IMPORTED_MODULE_0__(currentStart).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_0__(), 'day') ? 'next' : 'prev,next';
      this.calendar.getApi().setOption('headerToolbar', this.headerToolbarOptions);
      this.renderTimeOff(config.date);
    }
  }
  renderTimeOff(date) {
    if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .isEmpty */ .Im)(this.timeOffs)) {
      return;
    }
    const isDayOff = this.timeOffs.find(off => off.status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_17__/* .StatusTypesEnum */ .Z.APPROVED && moment__WEBPACK_IMPORTED_MODULE_0__(date).isBetween(off.start, off.end, 'date', '[]'));
    if (isDayOff) {
      this._prepareEvent({
        startTime: date,
        endTime: date,
        allDay: true
      }, isDayOff);
    }
  }
  getEvents(arg, callback) {
    if (!this.organization) {
      return null;
    }
    callback(this.calendarEvents);
  }
  unSelectEvent(o) {
    if (o.event.extendedProps && o.event.extendedProps.isDayOff) return;
    if (o.event.extendedProps && o.event.extendedProps.id) {
      this.removedEvents.push(o.event);
      this.dateSelected = true;
      this.saveSelectedDateRange();
    }
    this.calendarEvents = this.calendarEvents.filter(e => !moment__WEBPACK_IMPORTED_MODULE_0__(e.start).isSame(moment__WEBPACK_IMPORTED_MODULE_0__(o.event.start)));
    this.calendar.getApi().refetchEvents();
  }
  handleSelectRange(o) {
    this.dateSelected = true;
    this._prepareEvent({
      startTime: o.start,
      endTime: o.end,
      allDay: o.allDay
    });
    this.saveSelectedDateRange();
  }
  setSchedule() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
      if (!_this2.selectedEmployee) {
        _this2.toastrService.danger('SCHEDULE.SELECT_EMPLOYEE');
        return;
      }
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId,
        startWeekOn
      } = _this2.organization;
      const {
        id: employeeId
      } = _this2.selectedEmployee;
      const payload = [];
      const calender = _this2.calendar.getApi();
      const range = calender.getCurrentData().dateProfile.currentRange;
      let start = range.start;
      while (start < range.end) {
        const date = moment__WEBPACK_IMPORTED_MODULE_0__(start).format('YYYY-MM-DD');
        let days = [];
        if (startWeekOn === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .WeekDaysEnum */ .ru.MONDAY) {
          days = [0, 1, 2, 3, 4];
        } else {
          days = [6, 0, 1, 2, 3];
        }
        if (days.indexOf(moment__WEBPACK_IMPORTED_MODULE_0__(start).weekday()) >= 0) {
          payload.push({
            startTime: moment__WEBPACK_IMPORTED_MODULE_0__(date + ' ' + _this2.createForm.startTime).toDate(),
            endTime: moment__WEBPACK_IMPORTED_MODULE_0__(date + ' ' + _this2.createForm.endTime).toDate(),
            employeeId,
            organizationId,
            tenantId,
            type: _this2.recurringAvailabilityMode ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .AvailabilitySlotType */ .q.RECURRING : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .AvailabilitySlotType */ .q.DEFAULT,
            allDay: false
          });
        }
        start = moment__WEBPACK_IMPORTED_MODULE_0__(start).add(1, 'day').toDate();
      }
      yield _this2.availabilitySlotsService.createBulk(payload);
      _this2.availableSlots$.next(true);
    })();
  }
  saveSelectedDateRange() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
      if (!_this3.selectedEmployee) {
        _this3.toastrService.danger('SCHEDULE.SELECT_EMPLOYEE');
        return;
      }
      try {
        const {
          tenantId
        } = _this3.store.user;
        const {
          id: organizationId
        } = _this3.organization;
        const {
          id: employeeId
        } = _this3.selectedEmployee;
        const payload = [];
        for (const e of _this3.calendarEvents) {
          if (!e.extendedProps['id']) {
            payload.push({
              startTime: new Date(e.start.toString()),
              endTime: new Date(e.end.toString()),
              employeeId,
              organizationId,
              tenantId,
              type: _this3.recurringAvailabilityMode ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .AvailabilitySlotType */ .q.RECURRING : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .AvailabilitySlotType */ .q.DEFAULT,
              allDay: e.allDay
            });
          }
        }
        if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .isNotEmpty */ .hj)(payload)) {
          yield _this3.availabilitySlotsService.createBulk(payload);
        }
        for (const e of _this3.removedEvents) {
          yield _this3.availabilitySlotsService.delete(e.extendedProps['id']);
        }
        _this3.toastrService.success('NOTES.AVAILABILITY_SLOTS.SAVE');
        _this3.removedEvents = [];
        _this3.availableSlots$.next(true);
        _this3.dateSelected = false;
      } catch (error) {
        _this3.errorHandler.handleError(error);
      }
    })();
  }
  fetchTimeOff() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
      const {
        tenantId
      } = _this4.store.user;
      const {
        id: organizationId
      } = _this4.organization;
      let request = {
        organizationId,
        tenantId
      };
      if (_this4.selectedEmployee) {
        const {
          id: employeeId
        } = _this4.selectedEmployee;
        request = {
          ...request,
          employeeId
        };
      }
      const {
        items = []
      } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_18__/* .firstValueFrom */ ._)(_this4.timeOffService.getAllTimeOffRecords(['employees', 'employees.user'], {
        ...request
      }));
      _this4.timeOffs = items;
    })();
  }
  fetchAvailableSlots() {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
      _this5.calendarEvents = [];
      const {
        tenantId
      } = _this5.store.user;
      const {
        id: organizationId
      } = _this5.organization;
      let findObj = {
        type: _this5.recurringAvailabilityMode ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .AvailabilitySlotType */ .q.RECURRING : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .AvailabilitySlotType */ .q.DEFAULT,
        organizationId,
        tenantId
      };
      if (_this5.selectedEmployee) {
        findObj = {
          ...findObj,
          employeeId: _this5.selectedEmployee.id
        };
      }
      try {
        _this5.loading = false;
        if (!_this5.recurringAvailabilityMode) {
          yield _this5.fetchTimeOff();
        }
        const slots = yield _this5.availabilitySlotsService.getAll([], findObj);
        const start = _this5.calendar.getApi().view.currentStart;
        const end = _this5.calendar.getApi().view.currentEnd;
        let date = moment__WEBPACK_IMPORTED_MODULE_0__(start);
        if (!_this5.recurringAvailabilityMode) {
          while (moment__WEBPACK_IMPORTED_MODULE_0__(end).diff(date, 'day') > 0) {
            _this5.renderTimeOff(new Date(date.format()));
            date = date.add(1, 'day');
          }
        }
        for (const item of slots.items) {
          if (_this5.recurringAvailabilityMode) {
            // Convert recurring events to current date range of full calendar
            const startDay = moment__WEBPACK_IMPORTED_MODULE_0__(item.startTime).day();
            const startHours = moment__WEBPACK_IMPORTED_MODULE_0__(item.startTime).hours();
            const startMinutes = moment__WEBPACK_IMPORTED_MODULE_0__(item.startTime).minutes();
            const endDay = moment__WEBPACK_IMPORTED_MODULE_0__(item.endTime).day();
            const endHours = moment__WEBPACK_IMPORTED_MODULE_0__(item.endTime).hours();
            const endMinutes = moment__WEBPACK_IMPORTED_MODULE_0__(item.endTime).minutes();
            const eventStartDate = moment__WEBPACK_IMPORTED_MODULE_0__(start).add(startDay, 'days').set('hours', startHours).set('minutes', startMinutes);
            const eventEndDate = moment__WEBPACK_IMPORTED_MODULE_0__(start).add(endDay, 'days').set('hours', endHours).set('minutes', endMinutes);
            item.startTime = new Date(eventStartDate.format());
            item.endTime = new Date(eventEndDate.format());
          }
          _this5._prepareEvent(item);
        }
        _this5.calendar.getApi().refetchEvents();
      } catch (error) {
        _this5.toastrService.danger('NOTES.AVAILABILITY_SLOTS.ERROR', null, {
          error: error.message || error.error.message
        });
      }
    })();
  }
  _prepareEvent(slot, isDayOff = null) {
    const eventStartTime = slot.startTime;
    const eventEndTime = slot.endTime;
    const find = this.calendarEvents.find(event => moment__WEBPACK_IMPORTED_MODULE_0__(event.start).format() === moment__WEBPACK_IMPORTED_MODULE_0__(slot.startTime).format());
    if (!!find) return;
    this.calendarEvents.push({
      start: eventStartTime,
      end: eventEndTime,
      allDay: slot.allDay,
      color: isDayOff ? '#FF0000' : '#4682B4',
      extendedProps: {
        id: slot.id,
        isDayOff: !!isDayOff // Simplified boolean assignment
      }
    });
    this.calendar.getApi().refetchEvents();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function AvailabilitySlotsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AvailabilitySlotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_20__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .AvailabilitySlotsService */ .G), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .TimeOffService */ .a), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(ngx_permissions__WEBPACK_IMPORTED_MODULE_26__/* .NgxPermissionsService */ .$R));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: AvailabilitySlotsComponent,
      selectors: [["ngx-availability-slots"]],
      viewQuery: function AvailabilitySlotsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.calendar = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 12,
      vars: 8,
      consts: [["calendar", ""], [1, "pb-0"], [1, "custom-header"], [1, "title"], ["icon", "link-2-outline", "nbTooltipTrigger", "hover", 1, "ml-2", 3, "nbTooltip"], ["class", "time-range", 4, "ngIf"], [1, "custom-calendar"], [3, "options", 4, "ngIf"], [1, "time-range"], [1, "col"], [3, "ngModelChange", "ngModel"], ["nbButton", "", "status", "primary", 3, "click", "disabled"], [3, "options"]],
      template: function AvailabilitySlotsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-body", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, AvailabilitySlotsComponent_div_9_Template, 12, 9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(11, AvailabilitySlotsComponent_full_calendar_11_Template, 2, 1, "full-calendar", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 4, !ctx.recurringAvailabilityMode ? "SCHEDULE.DATE_SPECIFIC_AVAILABILITY" : "SCHEDULE.RECURRING_AVAILABILITY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 6, !ctx.recurringAvailabilityMode ? "SCHEDULE.DATE_SPECIFIC_AVAILABILITY_TOOLTIP" : "SCHEDULE.RECURRING_AVAILABILITY_TOOLTIP"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.recurringAvailabilityMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.loading);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_27__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_27__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_27__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_27__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_27__/* .NbTooltipDirective */ .BmQ, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__/* .FullCalendarComponent */ .x, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_30__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_30__/* .NgModel */ .vS, _packages_ui_core_shared_src_lib_timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_31__/* .TimerPickerComponent */ .f, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.custom-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.time-range[_ngcontent-%COMP%] {\n  width: fit-content;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.time-range[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding-right: 0;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding-bottom: 1rem !important;\n  height: calc(100vh - 16.75rem) !important;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker {\n  text-transform: lowercase;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select.ng-select-single .ng-select-container {\n  height: 2rem;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select.ng-select-opened > .ng-select-container:hover {\n  box-shadow: var(--gauzy-shadow) !important;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select.ng-select-focused .ng-select-container {\n  box-shadow: var(--gauzy-shadow) !important;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select .ng-select-container {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  border: none;\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select .ng-select-container:hover {\n  box-shadow: var(--gauzy-shadow);\n}\n[_nghost-%COMP%]   .time-range[_ngcontent-%COMP%]     ga-timer-picker .ng-select .ng-select-container input {\n  height: unset;\n}\n\n[_nghost-%COMP%]   .custom-calendar[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}"]
    });
  }
};
AvailabilitySlotsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_20__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .AvailabilitySlotsService */ .G, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .TimeOffService */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__/* .TranslateService */ .c$, ngx_permissions__WEBPACK_IMPORTED_MODULE_26__/* .NgxPermissionsService */ .$R])], AvailabilitySlotsComponent);


/***/ }),

/***/ 71181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89751);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25969);



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

/***/ 82795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}
//# sourceMappingURL=createObject.js.map

/***/ }),

/***/ 83451:
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

/***/ 84992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ TimeOffService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45715);




let TimeOffService = /*#__PURE__*/(() => {
  class TimeOffService {
    constructor(http) {
      this.http = http;
    }
    createPolicy(createInput) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/time-off-policy`, createInput);
    }
    getAllPolicies(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/time-off-policy`, {
        params: {
          data
        }
      });
    }
    updatePolicy(id, updateInput) {
      return this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/time-off-policy/${id}`, updateInput);
    }
    deletePolicy(id) {
      return this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/time-off-policy/${id}`);
    }
    createRequest(timeOffRequest) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/time-off-request`, timeOffRequest);
    }
    updateRequest(id, timeOffRequest) {
      return this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/time-off-request/${id}`, timeOffRequest);
    }
    getAllTimeOffRecords(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/time-off-request`, {
        params: {
          data
        }
      });
    }
    updateRequestStatus(id, action) {
      return this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/time-off-request/${action}/${id}`, {});
    }
    deleteDaysOffRequest(id) {
      return this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/time-off-request/${id}`);
    }
    static {
      this.ɵfac = function TimeOffService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeOffService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TimeOffService,
        factory: TimeOffService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TimeOffService;
})();

/***/ }),

/***/ 86289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87081);

const {
  isArray
} = Array;
function callOrApply(fn, args) {
  return isArray(args) ? fn(...args) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return (0,_operators_map__WEBPACK_IMPORTED_MODULE_0__/* .map */ .T)(args => callOrApply(fn, args));
}
//# sourceMappingURL=mapOneOrManyArgs.js.map

/***/ }),

/***/ 89751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler),
/* harmony export */   b: () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16061);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36902);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ })

}]);