"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6588],{

/***/ 4024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ CounterPointModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);




let CounterPointModule = /*#__PURE__*/(() => {
  class CounterPointModule {
    static {
      this.ɵfac = function CounterPointModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CounterPointModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: CounterPointModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _shared_module__WEBPACK_IMPORTED_MODULE_2__/* .SharedModule */ .G, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbProgressBarModule */ .XYW]
      });
    }
  }
  return CounterPointModule;
})();

/***/ }),

/***/ 10949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ CounterPointComponent)
/* harmony export */ });
/* harmony import */ var _point_point_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54718);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);







function CounterPointComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const point_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .HbH("point " + point_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", "var(--color-" + point_r1.color + "-default)");
  }
}
function CounterPointComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, CounterPointComponent_div_0_div_1_Template, 2, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.points);
  }
}
function CounterPointComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-progress-bar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r1.value)("status", ctx_r1.progressStatus(ctx_r1.value));
  }
}
let CounterPointComponent = /*#__PURE__*/(() => {
  class CounterPointComponent {
    constructor(themeService) {
      this.themeService = themeService;
      this.progressStatus = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .progressStatus */ .Ux;
      this.progress = false;
      this.points = [];
      this.DEFAULT_COLOR = '#D8E3ED66';
    }
    ngOnInit() {
      this.themeService.getJsTheme().subscribe(theme => {
        this.DEFAULT_COLOR = theme.variables.bg3.toString();
        if (!this.progress) this.generateColorizedPoints();
      });
    }
    ngOnChanges(changes) {
      if (!this.progress) this.generateColorizedPoints();
    }
    generateColorizedPoints() {
      const points = [];
      let total = this.total === 0 ? 86400 : this.total;
      let value = this.value;
      if (total > 24) {
        value = value / total * 24;
        total = 24;
      }
      for (let i = 0; i < total; i++) {
        if (i < value) {
          points.push(new _point_point_class__WEBPACK_IMPORTED_MODULE_2__/* .Point */ .b((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .progressStatus */ .Ux)(value / total * 100)));
        } else {
          points.push(new _point_point_class__WEBPACK_IMPORTED_MODULE_2__/* .Point */ .b('basic'));
        }
      }
      this.points = points;
    }
    static {
      this.ɵfac = function CounterPointComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CounterPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbThemeService */ .NS1));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CounterPointComponent,
        selectors: [["gauzy-counter-point"]],
        inputs: {
          total: "total",
          value: "value",
          color: "color",
          progress: "progress"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 2,
        vars: 2,
        consts: [["class", "counter", 4, "ngIf"], [4, "ngIf"], [1, "counter"], ["class", "counter", 4, "ngFor", "ngForOf"], [3, "value", "status"]],
        template: function CounterPointComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CounterPointComponent_div_0_Template, 2, 1, "div", 0)(1, CounterPointComponent_div_1_Template, 2, 2, "div", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.progress);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.progress);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbProgressBarComponent */ .c0m],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .point[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  border-radius: 5px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .point[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .point[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n[_nghost-%COMP%]   .point.basic[_ngcontent-%COMP%] {\n  background-color: var(--progress-bar-danger-background-color) !important;\n}\n\n.counter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 10px;\n  justify-content: space-between;\n}\n\n  nb-progress-bar .progress-container {\n  height: 10px !important;\n}"]
      });
    }
  }
  return CounterPointComponent;
})();

/***/ }),

/***/ 19015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ DailyStatisticsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _counter_point_counter_point_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4024);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let DailyStatisticsModule = /*#__PURE__*/(() => {
  class DailyStatisticsModule {
    static {
      this.ɵfac = function DailyStatisticsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DailyStatisticsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: DailyStatisticsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .gYs, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G, _counter_point_counter_point_module__WEBPACK_IMPORTED_MODULE_6__/* .CounterPointModule */ .t]
      });
    }
  }
  return DailyStatisticsModule;
})();

/***/ }),

/***/ 53608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ TimesheetStatisticsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let TimesheetStatisticsService = /*#__PURE__*/(() => {
  class TimesheetStatisticsService {
    constructor(http) {
      this.http = http;
    }
    getCounts(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/timesheet/statistics/counts`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request)
      }));
    }
    getTimeSlots(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/timesheet/statistics/time-slots`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request)
      }));
    }
    getActivities(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/timesheet/statistics/activities`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request)
      }));
    }
    /**
     * Get tasks statistics via POST request
     *
     * @param input - The input parameters for fetching tasks statistics
     * @returns
     */
    getTasksStatistics(input) {
      // Fetch tasks statistics via POST request
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/timesheet/statistics/tasks`, input));
    }
    getManualTimes(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/timesheet/statistics/manual-times`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request)
      }));
    }
    getProjects(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/timesheet/statistics/projects`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request)
      }));
    }
    getMembers(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/timesheet/statistics/members`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request)
      }));
    }
    static {
      this.ɵfac = function TimesheetStatisticsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimesheetStatisticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TimesheetStatisticsService,
        factory: TimesheetStatisticsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TimesheetStatisticsService;
})();

/***/ }),

/***/ 54718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Point)
/* harmony export */ });
class Point {
  constructor(color) {
    this._color = color;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }
  get className() {
    return this._color;
  }
}

/***/ }),

/***/ 64926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ DailyStatisticsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17785);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41598);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52738);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88326);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53608);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42433);
/* harmony import */ var _timesheet_gauzy_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46915);
/* harmony import */ var _timesheet_gauzy_filters__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6195);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(79475);
/* harmony import */ var _counter_point_counter_point_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(10949);
/* harmony import */ var _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(33867);






















function DailyStatisticsComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "nb-card", 3)(2, "nb-card-body")(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(9, "gauzy-counter-point", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(5, 6, "REPORT_PAGE.MEMBERS_WORKED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (ctx_r0.counts == null ? null : ctx_r0.counts.employeesCount) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("total", ctx_r0.employeesCount)("value", (ctx_r0.counts == null ? null : ctx_r0.counts.employeesCount) || 0)("color", "#0088FE");
  }
}
function DailyStatisticsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, DailyStatisticsComponent_ng_container_1_div_1_Template, 10, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx_r0.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE);
  }
}
function DailyStatisticsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(1, "div", 2)(2, "nb-card", 3)(3, "nb-card-body")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(10, "gauzy-counter-point", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "REPORT_PAGE.PROJECTS_WORKED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (ctx_r0.counts == null ? null : ctx_r0.counts.projectsCount) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("total", ctx_r0.projectsCount)("value", (ctx_r0.counts == null ? null : ctx_r0.counts.projectsCount) || 0)("color", "#00D68F");
  }
}
let DailyStatisticsComponent = /*#__PURE__*/(() => {
  let DailyStatisticsComponent = class DailyStatisticsComponent extends _timesheet_gauzy_filters__WEBPACK_IMPORTED_MODULE_3__/* .BaseSelectorFilterComponent */ .U {
    get filters() {
      return this._filters;
    }
    set filters(filters) {
      if (filters) {
        this._filters = filters;
        this.subject$.next(true);
      }
    }
    constructor(timesheetStatisticsService, store, dateRangePickerBuilderService, translateService, cd, employeesService, projectService, timeZoneService) {
      super(store, translateService, dateRangePickerBuilderService, timeZoneService);
      this.timesheetStatisticsService = timesheetStatisticsService;
      this.store = store;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
      this.translateService = translateService;
      this.cd = cd;
      this.employeesService = employeesService;
      this.projectService = projectService;
      this.timeZoneService = timeZoneService;
      this.payloads$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__/* .BehaviorSubject */ .t(null);
      this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsEnum */ .U;
      /*
       * Getter & Setter for dynamic filters
       */
      this._filters = this.request;
    }
    ngOnInit() {
      this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.prepareRequest()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
      this.payloads$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(200), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(payloads => !!payloads), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.getCounts()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    prepareRequest() {
      if (!this.organization || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .isEmpty */ .Im)(this.filters)) {
        return;
      }
      const appliedFilter = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .Up)(this.filters, 'source', 'activityLevel', 'logType');
      const request = {
        ...appliedFilter,
        ...this.getFilterRequest(this.request)
      };
      this.payloads$.next(request);
    }
    ngAfterViewInit() {
      this.cd.detectChanges();
    }
    /**
     * Retrieves counts from the timesheet statistics service based on current filters and organization.
     * Loads employee and project counts if organization and filters are defined.
     */
    getCounts() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        try {
          // Check if organization or filters are not defined, return if so
          if (!_this.organization || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .isEmpty */ .Im)(_this.filters)) {
            return;
          }
          // Extract payloads from BehaviorSubject
          const payloads = _this.payloads$.getValue();
          // Set loading state to true
          _this.loading = true;
          // Retrieve counts from timesheet statistics service
          const counts = yield _this.timesheetStatisticsService.getCounts(payloads);
          // Update counts
          _this.counts = counts;
          // Load employee and project counts
          yield Promise.all([_this.loadEmployeesCount(), _this.loadProjectsCount()]);
        } catch (error) {
          // Log error if any
          console.error('Error while retrieving daily statistics', error);
        } finally {
          // Set loading state to false
          _this.loading = false;
        }
      })();
    }
    /**
     * Loads the count of employees for the organization.
     */
    loadEmployeesCount() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        // Check if the user already has an associated employee
        if (_this2.store.user.employee) {
          // If the user has an employee, no need to load the count
          return;
        }
        // Extract organization and tenant IDs
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        // Retrieve the count of employees for the organization
        _this2.employeesService.getCount({
          organizationId,
          tenantId
        }).pipe(
        // Update employees count when count is received
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(count => _this2.employeesCount = count),
        // Unsubscribe from the observable when component is destroyed
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(_this2)).subscribe();
      })();
    }
    /**
     * Loads the count of projects for the organization.
     */
    loadProjectsCount() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        // Extract organization and tenant IDs
        const {
          id: organizationId,
          tenantId
        } = _this3.organization;
        // Retrieve the count of projects for the organization
        _this3.projectsCount = yield _this3.projectService.getCount({
          organizationId,
          tenantId
        });
      })();
    }
    get period() {
      if (this.request && this.organization) {
        const {
          startDate,
          endDate
        } = this.request;
        const endWork = moment__WEBPACK_IMPORTED_MODULE_1__(this.organization.defaultEndTime, 'HH:mm');
        const startWork = moment__WEBPACK_IMPORTED_MODULE_1__(this.organization.defaultStartTime, 'HH:mm');
        const duration = endWork.diff(startWork) / 1000;
        if (startDate && endDate && this.counts) {
          const start = moment__WEBPACK_IMPORTED_MODULE_1__(startDate);
          const end = moment__WEBPACK_IMPORTED_MODULE_1__(endDate);
          const dayCount = end.diff(start, 'days') + 1;
          return dayCount * (isNaN(duration) ? 86400 : duration) * this.counts.employeesCount;
        }
      }
    }
    static {
      this.ɵfac = function DailyStatisticsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DailyStatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetStatisticsService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .OrganizationProjectsService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_timesheet_gauzy_filters__WEBPACK_IMPORTED_MODULE_18__/* .TimeZoneService */ .F));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: DailyStatisticsComponent,
        selectors: [["ga-daily-statistics"]],
        inputs: {
          filters: "filters"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 24,
        vars: 19,
        consts: [[1, "main-wrapper"], [4, "ngIf"], [1, "daily-item"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "mb-0", 3, "nbSpinner"], [1, "h1"], [1, "progress-container"], [3, "progress", "value"], [3, "total", "value", "color"], ["class", "daily-item", 4, "ngxPermissionsOnly"]],
        template: function DailyStatisticsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, DailyStatisticsComponent_ng_container_1_Template, 2, 1, "ng-container", 1)(2, DailyStatisticsComponent_ng_container_2_Template, 11, 8, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(3, "div", 2)(4, "nb-card", 3)(5, "nb-card-body")(6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(11, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(12, "gauzy-counter-point", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(13, "div", 2)(14, "nb-card", 3)(15, "nb-card-body")(16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(21, "durationFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(22, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(23, "gauzy-counter-point", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.request.employeeIds);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.request.projectIds);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(8, 13, "REPORT_PAGE.ACTIVITY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI("", (ctx.counts == null ? null : ctx.counts.weekActivities) || 0, "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("progress", true)("value", (ctx.counts == null ? null : ctx.counts.weekActivities) || 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(18, 15, "REPORT_PAGE.TOTAL_HOURS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(21, 17, (ctx.counts == null ? null : ctx.counts.weekDuration) || 0), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("total", ctx.period)("value", (ctx.counts == null ? null : ctx.counts.weekDuration) || 0)("color", "#00D68F");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSpinnerDirective */ .zwc, ngx_permissions__WEBPACK_IMPORTED_MODULE_21__/* .NgxPermissionsDirective */ .f6, _counter_point_counter_point_component__WEBPACK_IMPORTED_MODULE_22__/* .CounterPointComponent */ .K, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9, _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_23__/* .DurationFormatPipe */ .i],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, calc(25% - 0.75rem));\n  column-gap: 1rem;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);\n}\n\n.progress-container[_ngcontent-%COMP%] {\n  width: 71%;\n}\n\n@media only screen and (max-width: 1199px) {\n  .main-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, calc(50% - 8px));\n    grid-gap: 1rem;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .main-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n    row-gap: 10px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .progress-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .h1[_ngcontent-%COMP%] {\n    font-size: var(--text-heading-1-font-size);\n  }\n}\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  color: var(--gauzy-text-color-2);\n}"]
      });
    }
  };
  DailyStatisticsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetStatisticsService */ .f, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .DateRangePickerBuilderService */ .i7, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .OrganizationProjectsService */ .d, _timesheet_gauzy_filters__WEBPACK_IMPORTED_MODULE_18__/* .TimeZoneService */ .F])], DailyStatisticsComponent);
  return DailyStatisticsComponent;
})();


/***/ })

}]);