"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[3213],{

/***/ 19255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EmployeeScheduleComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73247);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);







function EmployeeScheduleComponent_nb_list_8_nb_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-list-item")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme("- ", item_r1.startTime, " to ", item_r1.endTime, " ");
  }
}
function EmployeeScheduleComponent_nb_list_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeScheduleComponent_nb_list_8_nb_list_item_1_Template, 4, 2, "nb-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.schedule.slots);
  }
}
function EmployeeScheduleComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EmployeeScheduleComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.closeDialog("ok"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.OK"), " ");
  }
}
function EmployeeScheduleComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EmployeeScheduleComponent_ng_container_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.closeDialog("no"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EmployeeScheduleComponent_ng_container_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.closeDialog("yes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.NO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 4, "BUTTONS.YES"), " ");
  }
}
let EmployeeScheduleComponent = /*#__PURE__*/(() => {
  class EmployeeScheduleComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    constructor(translateService, dialogRef) {
      super(translateService);
      this.translateService = translateService;
      this.dialogRef = dialogRef;
    }
    ngOnInit() {
      this.schedule.slots.forEach(slot => {
        slot.startTime = moment_timezone__WEBPACK_IMPORTED_MODULE_0__(slot.startTime).tz(this.schedule.timezone).format('LLLL');
        slot.endTime = moment_timezone__WEBPACK_IMPORTED_MODULE_0__(slot.endTime).tz(this.schedule.timezone).format('LLLL');
      });
    }
    /**
     * Close dialog
     *
     * @param value
     */
    closeDialog(value) {
      this.dialogRef.close(value);
    }
    static {
      this.ɵfac = function EmployeeScheduleComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeScheduleComponent,
        selectors: [["ga-employee-schedules"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 12,
        vars: 10,
        consts: [[4, "ngIf"], ["nbButton", "", "type", "button", "class", "mr-3", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["nbButton", "", "type", "button", 1, "mr-3", 3, "click"], ["nbButton", "", "type", "button", "status", "success", 3, "click"]],
        template: function EmployeeScheduleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(8, EmployeeScheduleComponent_nb_list_8_Template, 2, 1, "nb-list", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(10, EmployeeScheduleComponent_button_10_Template, 3, 3, "button", 1)(11, EmployeeScheduleComponent_ng_container_11_Template, 7, 6, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "EMPLOYEE_SCHEDULES_MODAL.EMPLOYEE"), ": ", ctx.schedule.employeeName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 8, !ctx.schedule.slots.length ? "EMPLOYEE_SCHEDULES_MODAL.SLOTS_UNAVAILABLE" : "EMPLOYEE_SCHEDULES_MODAL.SLOTS_AVAILABLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.schedule.slots.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.schedule.slots.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.schedule.slots.length);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardHeaderComponent */ .zJv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return EmployeeScheduleComponent;
})();

/***/ }),

/***/ 28278:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17769);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73247);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56236);



class MomentNamedTimeZone extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bw {
  offsetForArray(a) {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz(a, this.timeZoneName).utcOffset();
  }
  timestampToArray(ms) {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz(ms, this.timeZoneName).toArray();
  }
}
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_2__/* .createPlugin */ .i1)({
  name: '@fullcalendar/moment-timezone',
  namedTimeZonedImpl: MomentNamedTimeZone
});


/***/ }),

/***/ 32270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ AppointmentCalendarComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4478);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(56383);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47564);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93791);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2466);
/* harmony import */ var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85604);
/* harmony import */ var _fullcalendar_moment_timezone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(28278);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73247);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15788);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(66781);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(48226);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(84992);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(34627);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38546);
/* harmony import */ var _selectors_date_range_picker_date_picker_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15130);
/* harmony import */ var _timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(49064);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(908);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(48637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(79475);
/* harmony import */ var _components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(49072);

































const _c0 = ["calendar"];
function AppointmentCalendarComponent_nb_card_header_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function AppointmentCalendarComponent_nb_card_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, AppointmentCalendarComponent_nb_card_header_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    const headerTemplate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", headerTemplate_r1);
  }
}
function AppointmentCalendarComponent_ng_template_6_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function AppointmentCalendarComponent_ng_template_6_ng_template_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r3.openEventTypes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.EVENT_TYPES"), " ");
  }
}
function AppointmentCalendarComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 6)(1, "h4")(2, "ngx-header-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(5, "div", 7)(6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(9, AppointmentCalendarComponent_ng_template_6_ng_template_9_Template, 3, 3, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function AppointmentCalendarComponent_ng_template_6_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r3.bookPublicAppointment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(18, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function AppointmentCalendarComponent_ng_template_6_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r3.selectTimezone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(4, 8, "MENU.APPOINTMENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("routerLink", "/pages/employees/schedules/recurring-availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(8, 10, "BUTTONS.SCHEDULES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(12, 12, "BUTTONS.PUBLIC_APPOINTMENT_BOOK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(15, 14, "PUBLIC_APPOINTMENTS.TIMEZONE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", ctx_r3.selectedTimeZoneName, " ", ctx_r3.selectedTimeZoneOffset, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(20, 16, "PUBLIC_APPOINTMENTS.CHANGE"), " ");
  }
}
let AppointmentCalendarComponent = /*#__PURE__*/(() => {
  let AppointmentCalendarComponent = class AppointmentCalendarComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .K {
    constructor(translateService, _router, _store, _toastrService, _dialogService, _availabilitySlotsService, _employeeAppointmentService, _timeOffService, _appointmentEmployeesService) {
      super(translateService);
      this.translateService = translateService;
      this._router = _router;
      this._store = _store;
      this._toastrService = _toastrService;
      this._dialogService = _dialogService;
      this._availabilitySlotsService = _availabilitySlotsService;
      this._employeeAppointmentService = _employeeAppointmentService;
      this._timeOffService = _timeOffService;
      this._appointmentEmployeesService = _appointmentEmployeesService;
      this.selectedTimeZoneName = moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz.guess();
      this.selectedTimeZoneOffset = moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz(this.selectedTimeZoneName).format('Z');
      this.calendarEvents = [];
      this.hiddenDays = [];
      this.headerToolbarOptions = {
        left: 'next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'
      };
      /**
       * Inputs
       */
      this.showHeader = true;
    }
    ngOnInit() {
      this.getCalendarOption();
      this.calendarEvents = [];
      if (this.selectedEventType) {
        this.allowedDuration = this.selectedEventType.durationUnit === 'Day(s)' ? this.selectedEventType.duration * 24 * 60 : this.selectedEventType.durationUnit === 'Hour(s)' ? this.selectedEventType.duration * 60 : this.selectedEventType.duration * 1;
      }
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(org => {
        if (org) {
          this.organization = org;
          this._selectedOrganizationId = org.id;
          if (org.timeZone && !this.selectedEventType) {
            this.selectedTimeZoneName = org.timeZone;
            this.selectedTimeZoneOffset = moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz(org.timeZone).format('Z');
          }
        }
      });
      this._store.selectedEmployee$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(employee => !!employee), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(500)).subscribe(employee => {
        // Will only call in case of public appointment booking
        if (this.employee && this.employee.id && this.selectedEventType) {
          return this.renderAppointmentsAndSlots(this.employee.id);
        }
        if (employee && employee.id) {
          this._selectedEmployeeId = employee.id;
          this.renderAppointmentsAndSlots(this._selectedEmployeeId);
        } else {
          this._selectedEmployeeId = null;
          this.renderAppointmentsAndSlots(null);
          if (this.calendarComponent.getApi()) {
            this.calendarComponent.getApi().refetchEvents();
          }
        }
      });
    }
    getCalendarOption() {
      // Get yesterday's day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      let currentDay = moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, 'day').day();
      // Loop to hide days from yesterday until Sunday
      while (currentDay >= 0) {
        this.hiddenDays.push(currentDay);
        currentDay--;
      }
      this.calendarOptions = {
        eventClick: this.handleEventClick.bind(this),
        events: this.getEvents.bind(this),
        initialView: 'timeGridWeek',
        headerToolbar: this.headerToolbarOptions,
        hiddenDays: this.hiddenDays,
        themeSystem: 'bootstrap',
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, _fullcalendar_moment_timezone__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A],
        weekends: true,
        height: 'auto',
        dayHeaderDidMount: this.headerMount.bind(this),
        firstDay: (0,_selectors_date_range_picker_date_picker_utils__WEBPACK_IMPORTED_MODULE_12__/* .dayOfWeekAsString */ .Rc)(this._store?.selectedOrganization?.startWeekOn || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__/* .WeekDaysEnum */ .ru.MONDAY),
        selectable: true,
        select: this.handleEventSelect.bind(this)
      };
    }
    handleEventClick({
      event
    }) {
      const id = event._def.extendedProps.id;
      if (event._def.extendedProps.type !== 'BookedSlot') {
        this._router.navigate([this.appointmentFormURL || this.getManageRoute(this._selectedEmployeeId, id)], {
          queryParams: {
            dateStart: event._instance.range.start.toISOString(),
            dateEnd: event._instance.range.end.toISOString(),
            selectedEventType: this.selectedEventType,
            timezone: this.selectedTimeZoneName
          }
        });
      } else {
        const config = {
          dateStart: event._instance.range.start,
          dateEnd: event._instance.range.end,
          selectedEventType: this.selectedEventType,
          timezone: this.selectedTimeZoneName
        };
        const prevSlot = this.calendarEvents.find(o => new Date(o.end.toString()).getTime() === event.start.getTime());
        const nextSlot = this.calendarEvents.find(o => new Date(o.start.toString()).getTime() === event.end.getTime());
        if (prevSlot && nextSlot && nextSlot.extendedProps['type'] !== 'BookedSlot' && prevSlot.extendedProps['type'] !== 'BookedSlot') {
          config.dateStart = new Date(prevSlot.start.toString());
          config.dateEnd = new Date(nextSlot.end.toString());
        }
        this._router.navigate([this.getManageRoute(this._selectedEmployeeId, id)], {
          queryParams: config
        });
      }
    }
    handleEventSelect(info) {
      const {
        start,
        end
      } = info; // start and end are the selected date range
      // You can also check additional conditions before processing
      if (start && end) {
        const config = {
          dateStart: start,
          dateEnd: end,
          timezone: this.selectedTimeZoneName
        };
        // Check if there are existing events around the selected range
        const prevSlot = this.calendarEvents.find(o => new Date(o.end.toString()).getTime() === start.getTime());
        const nextSlot = this.calendarEvents.find(o => new Date(o.start.toString()).getTime() === end.getTime());
        if (prevSlot && nextSlot && nextSlot.extendedProps['type'] !== 'BookedSlot' && prevSlot.extendedProps['type'] !== 'BookedSlot') {
          // If the previous and next slots are available, extend the range
          config.dateStart = new Date(prevSlot.start.toString());
          config.dateEnd = new Date(nextSlot.end.toString());
        }
        // Redirect to the event management or booking form
        this._router.navigate([this.getManageRoute(this.employee ? this.employee.id : this._selectedEmployeeId)], {
          queryParams: config
        });
      }
    }
    fetchTimeOff() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(_this._timeOffService.getAllTimeOffRecords(['employees', 'employees.user'], {
          organizationId: _this._selectedOrganizationId,
          tenantId: _this.organization.tenantId,
          employeeId: _this._selectedEmployeeId || _this.employee && _this.employee.id || null
        }));
        _this.timeOff = data.items;
      })();
    }
    bookPublicAppointment() {
      this._selectedEmployeeId ? this._router.navigate([`/share/employee/${this._selectedEmployeeId}`]) : this._router.navigate(['/share/employee']);
    }
    renderAppointmentsAndSlots(employeeId) {
      var _this2 = this;
      const {
        tenantId
      } = this._store.user;
      const findObj = {
        status: null,
        organizationId: this.organization.id,
        tenantId,
        employeeId: employeeId || null
      };
      this._employeeAppointmentService.getAll(['employee', 'employee.user'], findObj).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* (appointments) {
          _this2.calendarEvents = [];
          _this2.calendarComponent.getApi().refetchEvents();
          _this2.appointments = appointments.items;
          yield _this2.fetchTimeOff();
          _this2.renderBookedAppointments(_this2.appointments);
          if (employeeId) {
            yield _this2.fetchEmployeeAppointments(employeeId);
          }
          yield _this2._fetchAvailableSlots(employeeId);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    // fetch appointments where the employee is an invitee
    fetchEmployeeAppointments(employeeId) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
        const employeeAppointments = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(_this3._appointmentEmployeesService.findEmployeeAppointments(employeeId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this3)));
        _this3.renderBookedAppointments(employeeAppointments.map(o => o.employeeAppointment).filter(o => o && o.status !== 'Cancelled'));
      })();
    }
    renderBookedAppointments(appointments) {
      for (const appointment of appointments) {
        this.checkAndAddEventToCalendar(moment__WEBPACK_IMPORTED_MODULE_0__(appointment.startDateTime).utc().format(), moment__WEBPACK_IMPORTED_MODULE_0__(appointment.endDateTime).utc().format(), appointment.id, 'BookedSlot');
      }
    }
    getEvents(arg, callback) {
      callback(this.calendarEvents);
    }
    getManageRoute(employeeId = '', appointmentId = '') {
      return `/pages/employees/appointments/manage/${employeeId}` + (appointmentId ? `/${appointmentId}` : '');
    }
    _fetchAvailableSlots(employeeId) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this4._store.user;
        const findObj = {
          organizationId: _this4._selectedOrganizationId,
          tenantId,
          employeeId: employeeId || null
        };
        try {
          const slots = yield _this4._availabilitySlotsService.getAll([], findObj);
          _this4.slots = slots.items;
          _this4.dateSpecificSlots = _this4.slots.filter(o => o.type === 'Default');
          _this4.recurringSlots = _this4.slots.filter(o => o.type === 'Recurring');
          const currentStart = _this4.calendarComponent.getApi().view.currentStart;
          const currentEnd = _this4.calendarComponent.getApi().view.currentEnd;
          let dayDiff = moment__WEBPACK_IMPORTED_MODULE_0__(currentEnd).diff(currentStart, 'days');
          while (dayDiff > 0) {
            _this4._prepareSlots(new Date(moment__WEBPACK_IMPORTED_MODULE_0__(currentStart).add(dayDiff, 'days').format()));
            dayDiff--;
          }
        } catch (error) {
          _this4._toastrService.danger('NOTES.AVAILABILITY_SLOTS.ERROR', null, {
            error: error.error.message || error.message
          });
        }
      })();
    }
    openEventTypes() {
      this._router.navigate(['/pages/employees/event-types']);
    }
    headerMount(config) {
      const currentStart = this.calendarComponent.getApi().view.currentStart;
      const currentEnd = this.calendarComponent.getApi().view.currentEnd;
      const hideDays = moment__WEBPACK_IMPORTED_MODULE_0__().isBetween(currentStart, currentEnd, 'day', '[]') ? this.hiddenDays : [];
      this.calendarComponent.getApi().setOption('hiddenDays', hideDays);
      this.headerToolbarOptions.left = moment__WEBPACK_IMPORTED_MODULE_0__(currentStart).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_0__(), 'day') ? 'next' : 'prev,next';
      this.calendarComponent.getApi().setOption('headerToolbar', this.headerToolbarOptions);
    }
    _prepareSlots(date) {
      if (!this.slots || moment__WEBPACK_IMPORTED_MODULE_0__(date).isBefore(moment__WEBPACK_IMPORTED_MODULE_0__())) return;
      const day = moment__WEBPACK_IMPORTED_MODULE_0__(date).day();
      let foundDateSpecificSlot = false;
      const slot = this.dateSpecificSlots.find(o => moment__WEBPACK_IMPORTED_MODULE_0__(o.startTime).format('MMM Do YY') === moment__WEBPACK_IMPORTED_MODULE_0__(date).format('MMM Do YY'));
      if (slot) {
        foundDateSpecificSlot = true;
        this.getAvailabilitySlots(slot);
      }
      if (foundDateSpecificSlot) return this.calendarComponent.getApi().refetchEvents();
      for (const innerSlot of this.recurringSlots) {
        const startDay = moment__WEBPACK_IMPORTED_MODULE_0__(innerSlot.startTime).day();
        if (startDay !== day) continue;
        const startHours = moment__WEBPACK_IMPORTED_MODULE_0__(innerSlot.startTime).hours();
        const startMinutes = moment__WEBPACK_IMPORTED_MODULE_0__(innerSlot.startTime).minutes();
        const endDay = moment__WEBPACK_IMPORTED_MODULE_0__(innerSlot.endTime).day();
        const endHours = moment__WEBPACK_IMPORTED_MODULE_0__(innerSlot.endTime).hours();
        const endMinutes = moment__WEBPACK_IMPORTED_MODULE_0__(innerSlot.endTime).minutes();
        const eventStartDate = moment__WEBPACK_IMPORTED_MODULE_0__(date).set('hours', startHours).set('minutes', startMinutes);
        const eventEndDate = moment__WEBPACK_IMPORTED_MODULE_0__(date).add(endDay - day, 'days').set('hours', endHours).set('minutes', endMinutes);
        innerSlot.startTime = new Date(eventStartDate.format());
        innerSlot.endTime = new Date(eventEndDate.format());
        this.getAvailabilitySlots(innerSlot);
      }
      this.calendarComponent.getApi().refetchEvents();
    }
    checkAndAddEventToCalendar(startTime, endTime, id, type) {
      if (startTime === endTime || new Date(startTime).getTime() < new Date().getTime() || this.timeOff.find(o => o.status === 'Approved' && (moment__WEBPACK_IMPORTED_MODULE_0__(startTime).isBetween(o.start, o.end, 'day', '[]') || moment__WEBPACK_IMPORTED_MODULE_0__(endTime).isBetween(o.start, o.end, 'day', '[]')))) return;
      const durationCheck = type === 'AvailabilitySlot' ? true : false;
      const find = this.calendarEvents.find(o => new Date(o.start.toString()).getTime() === new Date(startTime).getTime() && new Date(o.end.toString()).getTime() === new Date(endTime).getTime());
      const allowedDuration = moment__WEBPACK_IMPORTED_MODULE_0__(endTime).diff(moment__WEBPACK_IMPORTED_MODULE_0__(startTime), 'minutes') >= this.allowedDuration;
      if (!find || !durationCheck || this._selectedEmployeeId || this._selectedOrganizationId || allowedDuration) {
        const startDate = moment__WEBPACK_IMPORTED_MODULE_0__((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_16__/* .convertLocalToTimezone */ .jX)(startTime, null, this.selectedTimeZoneName)).format('YYYY-MM-DD hh:mm:ss');
        const endDate = moment__WEBPACK_IMPORTED_MODULE_0__((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_16__/* .convertLocalToTimezone */ .jX)(endTime, null, this.selectedTimeZoneName)).format('YYYY-MM-DD hh:mm:ss');
        this.calendarEvents.push({
          start: startDate,
          end: endDate,
          extendedProps: {
            id: id,
            type: type
          },
          backgroundColor: durationCheck ? 'green' : 'red'
        });
      }
    }
    getAvailabilitySlots(slot) {
      const appointmentsOnDay = this.appointments.filter(o => moment__WEBPACK_IMPORTED_MODULE_0__(o.startDateTime).utc().isSame(moment__WEBPACK_IMPORTED_MODULE_0__(slot.startTime).utc()) || moment__WEBPACK_IMPORTED_MODULE_0__(o.startDateTime).utc().isBetween(moment__WEBPACK_IMPORTED_MODULE_0__(slot.startTime).utc(), moment__WEBPACK_IMPORTED_MODULE_0__(slot.endTime).utc())).sort((a, b) => moment__WEBPACK_IMPORTED_MODULE_0__(a.startDateTime).utc().isBefore(moment__WEBPACK_IMPORTED_MODULE_0__(b.startDateTime).utc()) ? -1 : 1);
      for (let index = 0; index < appointmentsOnDay.length; index++) {
        const appointmentOne = appointmentsOnDay[index];
        const appointmentTwo = appointmentsOnDay[index + 1];
        if (moment__WEBPACK_IMPORTED_MODULE_0__(appointmentOne.startDateTime).utc().isSame(moment__WEBPACK_IMPORTED_MODULE_0__(slot.startTime).utc()) && (!appointmentTwo || moment__WEBPACK_IMPORTED_MODULE_0__(appointmentTwo.startDateTime).utc().isAfter(moment__WEBPACK_IMPORTED_MODULE_0__(appointmentOne.endDateTime).utc()))) {
          this.checkAndAddEventToCalendar(moment__WEBPACK_IMPORTED_MODULE_0__(appointmentOne.endDateTime).utc().format(), moment__WEBPACK_IMPORTED_MODULE_0__(appointmentTwo && appointmentTwo.startDateTime || slot.endTime).utc().format(), slot.id, 'AvailabilitySlot');
        } else if (moment__WEBPACK_IMPORTED_MODULE_0__(appointmentOne.startDateTime).utc().isAfter(moment__WEBPACK_IMPORTED_MODULE_0__(slot.startTime).utc())) {
          const prevAppointment = appointmentsOnDay[index - 1];
          this.checkAndAddEventToCalendar(moment__WEBPACK_IMPORTED_MODULE_0__(prevAppointment && prevAppointment.endDateTime || slot.startTime).utc().format(), moment__WEBPACK_IMPORTED_MODULE_0__(appointmentOne.startDateTime).utc().format(), slot.id, 'AvailabilitySlot');
          if (!appointmentTwo) {
            this.checkAndAddEventToCalendar(moment__WEBPACK_IMPORTED_MODULE_0__(appointmentOne.endDateTime).utc().format(), moment__WEBPACK_IMPORTED_MODULE_0__(slot.endTime).utc().format(), slot.id, 'AvailabilitySlot');
          }
        }
      }
      if (appointmentsOnDay.length === 0) {
        this.checkAndAddEventToCalendar(moment__WEBPACK_IMPORTED_MODULE_0__(slot.startTime).utc().format(), moment__WEBPACK_IMPORTED_MODULE_0__(slot.endTime).utc().format(), slot.id, 'AvailabilitySlot');
      }
    }
    _prepareEvent(appointment) {
      let eventStartTime = appointment.startDateTime;
      let eventEndTime = appointment.endDateTime;
      if (appointment.bufferTimeStart) {
        eventStartTime = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(appointment.startDateTime).add(appointment.bufferTimeInMins, 'minutes').format());
        this.calendarEvents.push({
          title: `Buffer for ${appointment.agenda}`,
          start: new Date(moment__WEBPACK_IMPORTED_MODULE_0__(appointment.startDateTime).format()),
          end: eventStartTime,
          extendedProps: {
            id: appointment.id
          },
          backgroundColor: 'grey'
        });
      }
      if (appointment.bufferTimeEnd) {
        eventEndTime = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(appointment.endDateTime).subtract(appointment.bufferTimeInMins, 'minutes').format());
        this.calendarEvents.push({
          title: `Buffer for ${appointment.agenda}`,
          start: eventEndTime,
          end: new Date(moment__WEBPACK_IMPORTED_MODULE_0__(appointment.endDateTime).format()),
          extendedProps: {
            id: appointment.id
          },
          backgroundColor: 'grey'
        });
      }
      if (appointment.breakTimeInMins) {
        const breakEventStartTime = new Date(appointment.breakStartTime);
        this.calendarEvents.push({
          title: appointment.agenda,
          start: eventStartTime,
          end: breakEventStartTime,
          extendedProps: {
            id: appointment.id
          }
        });
        const afterBreakStartTime = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(breakEventStartTime).add(appointment.breakTimeInMins, 'minutes').format());
        this.calendarEvents.push({
          title: `Break Time ${appointment.agenda}`,
          start: breakEventStartTime,
          end: afterBreakStartTime,
          extendedProps: {
            id: appointment.id
          },
          backgroundColor: 'lightblue'
        });
        this.calendarEvents.push({
          title: appointment.agenda,
          start: afterBreakStartTime,
          end: eventEndTime,
          extendedProps: {
            id: appointment.id
          }
        });
      } else {
        this.calendarEvents.push({
          title: appointment.agenda,
          start: eventStartTime,
          end: eventEndTime,
          extendedProps: {
            id: appointment.id
          }
        });
      }
    }
    /**
     * Select timezone
     */
    selectTimezone() {
      var _this5 = this;
      this._dialogService.open(_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_17__/* .TimezoneSelectorComponent */ .i, {
        context: {
          selectedTimezone: this.selectedTimeZoneName
        }
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
        var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* (data) {
          if (data) {
            _this5.selectedTimeZoneName = data;
            _this5.selectedTimeZoneOffset = moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz(data).format('Z');
            _this5.setCalenderTimezone(_this5.selectedTimeZoneName);
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
    markUnavailability() {}
    /*
     * Set calender timezone option
     */
    setCalenderTimezone(timeZone) {
      if (this.calendarComponent) {
        if (this._selectedEmployeeId) {
          this.renderAppointmentsAndSlots(this._selectedEmployeeId);
        } else {
          this._selectedEmployeeId = null;
          this.calendarEvents = [];
          this.renderAppointmentsAndSlots(null);
          if (this.calendarComponent.getApi()) {
            this.calendarComponent.getApi().refetchEvents();
          }
        }
      }
    }
    manageAppointments() {
      this._router.navigate([this.getManageRoute()]);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function AppointmentCalendarComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AppointmentCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .AvailabilitySlotsService */ .G), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .EmployeeAppointmentService */ .N), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .TimeOffService */ .a), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .AppointmentEmployeesService */ ._));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: AppointmentCalendarComponent,
        selectors: [["ngx-appointment-calendar"]],
        viewQuery: function AppointmentCalendarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.calendarComponent = _t.first);
          }
        },
        inputs: {
          showHeader: "showHeader",
          appointmentFormURL: "appointmentFormURL",
          employee: "employee",
          selectedEventType: "selectedEventType"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_27__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .forwardRef */ .Rfq)(() => AppointmentCalendarComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 8,
        vars: 2,
        consts: [["calendar", ""], ["headerTemplate", ""], [4, "ngIf"], [1, "calendar-container"], [3, "options"], [4, "ngTemplateOutlet"], [1, "main-header"], [1, "float-right"], ["status", "info", "size", "small", "outline", "", "nbButton", "", "type", "button", 1, "", 3, "routerLink"], ["ngxPermissionsOnly", "EVENT_TYPES_VIEW"], ["status", "primary", "size", "small", "outline", "", "nbButton", "", "type", "button", 1, "", 3, "click"], [1, "block-info"], [2, "cursor", "pointer", "color", "var(--link-text-color)", 3, "click"], ["status", "warning", "size", "small", "outline", "", "nbButton", "", "type", "button", 1, "mr-2", "ml-2", 3, "click"]],
        template: function AppointmentCalendarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, AppointmentCalendarComponent_nb_card_header_1_Template, 2, 1, "nb-card-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(2, "nb-card-body")(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(4, "full-calendar", 4, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(6, AppointmentCalendarComponent_ng_template_6_Template, 21, 18, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showHeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("options", ctx.calendarOptions);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardHeaderComponent */ .zJv, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__/* .FullCalendarComponent */ .x, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .NgTemplateOutlet */ .T3, _angular_router__WEBPACK_IMPORTED_MODULE_30__/* .RouterLink */ .Wk, ngx_permissions__WEBPACK_IMPORTED_MODULE_31__/* .NgxPermissionsDirective */ .f6, _components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_32__/* .HeaderTitleComponent */ .X, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.block-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin: 1rem 0;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 16.5rem) !important;\n}\n[_nghost-%COMP%]   .calendar-container[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-info[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].appearance-outline.status-warning[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].appearance-outline.status-primary[_ngcontent-%COMP%] {\n  border-width: 0;\n  box-shadow: var(--gauzy-shadow);\n}"]
      });
    }
  };
  AppointmentCalendarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_33__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_33__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ToastrService */ .t, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .AvailabilitySlotsService */ .G, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .EmployeeAppointmentService */ .N, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .TimeOffService */ .a, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .AppointmentEmployeesService */ ._])], AppointmentCalendarComponent);
  return AppointmentCalendarComponent;
})();


/***/ }),

/***/ 34627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ AppointmentEmployeesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let AppointmentEmployeesService = /*#__PURE__*/(() => {
  class AppointmentEmployeesService {
    constructor(http) {
      this.http = http;
      this.URI = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/appointment-employees`;
    }
    getAll() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(this.URI));
    }
    getById(id = '') {
      return this.http.get(this.URI + '/appointment/' + id);
    }
    findEmployeeAppointments(id = '') {
      return this.http.get(this.URI + '/employee-appointments/' + id);
    }
    add(appointmentEmployees) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.URI, appointmentEmployees));
    }
    update(id, appointmentEmployees) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.URI}/${id}`, appointmentEmployees));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.URI}/${id}`));
    }
    static {
      this.ɵfac = function AppointmentEmployeesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AppointmentEmployeesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: AppointmentEmployeesService,
        factory: AppointmentEmployeesService.ɵfac
      });
    }
  }
  return AppointmentEmployeesService;
})();

/***/ }),

/***/ 34776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ManageAppointmentComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49708);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73247);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90535);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(34627);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(66781);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48226);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38546);
/* harmony import */ var _employee_schedules_employee_schedule_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19255);
/* harmony import */ var _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52742);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(55567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(14572);
/* harmony import */ var _components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(90910);
/* harmony import */ var _timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(81386);
/* harmony import */ var _timer_picker_timer_range_picker_timer_range_picker_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(68122);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(57354);






























const _c0 = ["employeeSelector"];
const _c1 = () => [];
const _c2 = (a0, a1) => ({
  "item-invalid": a0,
  "item-valid": a1
});
function ManageAppointmentComponent_form_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 14)(1, "div", 10)(2, "nb-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "APPOINTMENTS_PAGE.BUFFER_AT_START"), " ");
  }
}
function ManageAppointmentComponent_form_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 14)(1, "div", 10)(2, "nb-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "APPOINTMENTS_PAGE.BUFFER_AT_END"), " ");
  }
}
function ManageAppointmentComponent_form_8_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "FORM.PLACEHOLDERS.BUFFER_TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("min", 0);
  }
}
function ManageAppointmentComponent_form_8_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "ga-timer-picker", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("min", ctx_r0.form.get("selectedRange").value.start)("max", ctx_r0.form.get("selectedRange").value.end);
  }
}
function ManageAppointmentComponent_form_8_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "FORM.PLACEHOLDERS.BREAK_TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("min", 0);
  }
}
function ManageAppointmentComponent_form_8_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 8)(1, "div", 31)(2, "div", 10)(3, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "ga-employee-multi-select", 32, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ManageAppointmentComponent_form_8_div_48_Template_ga_employee_multi_select_selectedChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onMembersSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "FORM.LABELS.MEETING_INVITEES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("label", false)("selectedEmployeeIds", ctx_r0.selectedEmployeeIds)("allEmployees", ctx_r0.employees);
  }
}
function ManageAppointmentComponent_form_8_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 8)(1, "div", 33)(2, "div", 10)(3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(6, "ng-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(5, 7, "FORM.LABELS.EMAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(7, 9, "FORM.PLACEHOLDERS.EMAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("notFoundText", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(8, 11, "FORM.PLACEHOLDERS.EMAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction0"] */ .lJ4(13, _c1))("addTag", ctx_r0.addTagFn)("hideSelected", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .l_i(14, _c2, ctx_r0.emails.invalid && (ctx_r0.emails.dirty || ctx_r0.emails.touched), ctx_r0.emails.valid && (ctx_r0.emails.dirty || ctx_r0.emails.touched)));
  }
}
function ManageAppointmentComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "form", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(9, "div", 8)(10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(11, "ngx-timer-range-picker", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(12, "div", 8)(13, "div", 14)(14, "div", 10)(15, "nb-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(18, ManageAppointmentComponent_form_8_div_18_Template, 5, 3, "div", 16)(19, ManageAppointmentComponent_form_8_div_19_Template, 5, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(21, ManageAppointmentComponent_form_8_div_21_Template, 3, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(22, "div", 8)(23, "div", 18)(24, "div", 10)(25, "nb-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(28, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(29, ManageAppointmentComponent_form_8_div_29_Template, 2, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(30, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(31, ManageAppointmentComponent_form_8_div_31_Template, 3, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(32, "div", 8)(33, "div", 9)(34, "div", 10)(35, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(38, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(40, "div", 8)(41, "div", 9)(42, "div", 10)(43, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(46, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(48, ManageAppointmentComponent_form_8_div_48_Template, 8, 6, "div", 24)(49, ManageAppointmentComponent_form_8_div_49_Template, 9, 17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(6, 24, "FORM.LABELS.MEETING_AGENDA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(8, 26, "FORM.PLACEHOLDERS.MEETING_AGENDA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("timezoneOffset", ctx_r0.timezoneOffset)("slotStartTime", ctx_r0.start)("slotEndTime", ctx_r0.end)("maxDate", ctx_r0.selectedRange.end)("minDate", ctx_r0.selectedRange.start)("allowedDuration", ctx_r0.allowedDuration)("disableDatePicker", ctx_r0.disabled)("disableEndPicker", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(17, 28, "APPOINTMENTS_PAGE.BUFFER_TIME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.get("bufferTime").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.get("bufferTime").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.get("bufferTime").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(27, 30, "APPOINTMENTS_PAGE.BREAK_TIME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.get("breakTime").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.get("breakTime").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(37, 32, "FORM.LABELS.MEETING_LOCATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(39, 34, "FORM.PLACEHOLDERS.MEETING_LOCATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(45, 36, "FORM.LABELS.MEETING_DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(47, 38, "FORM.PLACEHOLDERS.MEETING_DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r0.hidePrivateFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.hidePrivateFields);
  }
}
function ManageAppointmentComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function ManageAppointmentComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r0.cancelAppointment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "APPOINTMENTS_PAGE.CANCEL_APPOINTMENT"), " ");
  }
}
let ManageAppointmentComponent = /*#__PURE__*/(() => {
  let ManageAppointmentComponent = class ManageAppointmentComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .K {
    constructor(translateService, _route, _router, _fb, _store, _dialogService, _employeeService, _employeeAppointmentService, _appointmentEmployeesService, _availabilitySlotsService, _toastrService, _cdr) {
      super(translateService);
      this.translateService = translateService;
      this._route = _route;
      this._router = _router;
      this._fb = _fb;
      this._store = _store;
      this._dialogService = _dialogService;
      this._employeeService = _employeeService;
      this._employeeAppointmentService = _employeeAppointmentService;
      this._appointmentEmployeesService = _appointmentEmployeesService;
      this._availabilitySlotsService = _availabilitySlotsService;
      this._toastrService = _toastrService;
      this._cdr = _cdr;
      this.employees = [];
      this.hidePrivateFields = false;
      this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .bkB();
      this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .bkB();
      this.employeeAvailability = {};
      this.selectedEmployeeIds = [];
      this.selectedEmployeeAppointmentIds = [];
      this.emailAddresses = [];
    }
    ngOnInit() {
      var _this = this;
      if (this.selectedRange) {
        this.start = this.selectedRange.start;
        this.end = this.selectedRange.end;
      } else {
        this._route.queryParams.subscribe(params => {
          this.selectedRange = {
            start: params.dateStart,
            end: params.dateEnd
          };
          this.timezone = this.timezone || params.timezone || moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz.guess();
        });
      }
      this.timezoneOffset = moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz(this.timezone).format('Z');
      moment_timezone__WEBPACK_IMPORTED_MODULE_1__.tz.setDefault(this.timezone);
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* (org) {
          if (org) {
            _this._selectedOrganizationId = org.id;
            yield _this._loadEmployees().then(() => _this._parseParams());
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      this._route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .switchMap */ .n)(/*#__PURE__*/function () {
        var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* (params) {
          if (!params.employeeId) return;
          try {
            // Get employee by ID
            _this.employee = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(_this._employeeService.getEmployeeById(params.employeeId, ['user']));
          } catch (error) {
            console.log('Error while loading employee', error);
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
      this._initializeForm();
    }
    ngAfterViewInit() {
      this._cdr.detectChanges();
    }
    _patchFormValue() {
      this.form.patchValue({
        emails: this.employeeAppointment.emails ? this.employeeAppointment.emails.split(', ').map(o => ({
          emailAddress: o
        })) : '',
        agenda: this.employeeAppointment.agenda,
        location: this.employeeAppointment.location,
        description: this.employeeAppointment.description,
        invitees: this.employeeAppointment.invitees,
        selectedRange: this.selectedRange,
        bufferTime: this.employeeAppointment.bufferTimeInMins ? true : false,
        breakTime: this.employeeAppointment.breakTimeInMins ? true : false,
        bufferTimeStart: this.employeeAppointment.bufferTimeStart,
        bufferTimeEnd: this.employeeAppointment.bufferTimeEnd,
        bufferTimeInMins: this.employeeAppointment.bufferTimeInMins,
        breakTimeInMins: this.employeeAppointment.breakTimeInMins,
        breakStartTime: this.employeeAppointment.breakStartTime
      });
      this.emails = this.form.get('emails');
    }
    emailListValidator(control) {
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      const invalid = (control.value || []).find(tag => {
        return !emailPattern.test(tag.emailAddress || '');
      });
      return invalid ? {
        emails: invalid
      } : null;
    }
    addTagFn(emailAddress) {
      return {
        emailAddress: emailAddress,
        tag: true
      };
    }
    _initializeForm() {
      this.form = this._fb.group({
        emails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .Validators */ .k0.required, this.emailListValidator])],
        agenda: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .Validators */ .k0.required],
        location: [''],
        description: [''],
        invitees: [{
          value: []
        }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .Validators */ .k0.required],
        selectedRange: this.selectedRange,
        bufferTime: [],
        breakTime: [],
        bufferTimeStart: [''],
        bufferTimeEnd: [''],
        bufferTimeInMins: [''],
        breakTimeInMins: [''],
        breakStartTime: ['']
      });
      this.emails = this.form.get('emails');
    }
    _loadEmployees() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this2._store.user;
        const organizationId = _this2._selectedOrganizationId;
        _this2.employees = (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(_this2._employeeService.getAll(['user'], {
          tenantId,
          organizationId
        }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this2)))).items;
      })();
    }
    _parseParams() {
      var _this3 = this;
      this._route.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
        var _ref3 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* (params) {
          const id = params.appointmentId || _this3.appointmentId;
          if (id) {
            _this3.editMode = true;
            const appointment = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(_this3._employeeAppointmentService.getById(id));
            const selectedEmployees = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(_this3._appointmentEmployeesService.getById(appointment.id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this3)));
            _this3.selectedEmployeeIds = selectedEmployees.map(o => o.employeeId);
            _this3.selectedEmployeeAppointmentIds = selectedEmployees.map(o => o.id);
            _this3.start = new Date(appointment.startDateTime);
            _this3.end = new Date(appointment.endDateTime);
            if (!_this3.selectedRange.start) {
              _this3.selectedRange = {
                start: _this3.start,
                end: _this3.end
              };
            }
            _this3.employeeAppointment = appointment;
            _this3._patchFormValue();
          }
          _this3.fetchAvailabilitySlotsForAllEmployees();
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
    cancelAppointment() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        try {
          const dialog = _this4._dialogService.open(_components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_10__/* .AlertModalComponent */ .Z, {
            context: {
              data: {
                title: _this4.getTranslation('APPOINTMENTS_PAGE.CANCEL_APPOINTMENT'),
                message: _this4.getTranslation('APPOINTMENTS_PAGE.ARE_YOU_SURE'),
                status: 'danger'
              }
            }
          });
          const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(dialog.onClose);
          if (!!response) {
            if (response === 'yes') {
              yield _this4._employeeAppointmentService.update(_this4.employeeAppointment.id, {
                status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__/* .EmployeeAppointmentStatus */ .u.CANCELLED
              });
              _this4._toastrService.success('APPOINTMENTS_PAGE.CANCEL_SUCCESS');
              history.back();
            }
          }
        } catch (error) {
          _this4._toastrService.danger(_this4.getTranslation('APPOINTMENTS_PAGE.CANCEL_FAIL'), _this4.getTranslation('TOASTR.TITLE.ERROR'));
        }
      })();
    }
    fetchAvailabilitySlotsForAllEmployees() {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this5._store.user;
        const slots = (yield _this5._availabilitySlotsService.getAll([], {
          organizationId: _this5._selectedOrganizationId,
          tenantId
        })).items;
        _this5.employees = _this5.employees.filter(e => e.id !== (_this5.employee ? _this5.employee.id : _this5._store.selectedEmployee ? _this5._store.selectedEmployee.id : null));
        _this5.employees.map(e => {
          const dateSpecificSlots = [];
          const recurringSlots = [];
          slots.forEach(s => {
            if (s.employeeId === e.id && s.type === 'Recurring') {
              recurringSlots.push(s);
            } else if (s.employeeId === e.id) {
              dateSpecificSlots.push(s);
            }
          });
          _this5.employeeAvailability[e.id] = dateSpecificSlots.filter(s => s.employeeId === e.id && moment__WEBPACK_IMPORTED_MODULE_0__(_this5.selectedRange.start).isBetween(moment__WEBPACK_IMPORTED_MODULE_0__(s.startTime), moment__WEBPACK_IMPORTED_MODULE_0__(s.endTime), 'day', '[]'));
          if (_this5.employeeAvailability[e.id].length === 0) {
            const appointmentDay = moment__WEBPACK_IMPORTED_MODULE_0__(_this5.selectedRange.start).format('dddd');
            _this5.employeeAvailability[e.id] = recurringSlots.filter(s => moment__WEBPACK_IMPORTED_MODULE_0__(s.startTime).format('dddd') === appointmentDay);
          }
        });
      })();
    }
    onSaveRequest() {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        try {
          let tenantId = null;
          if (_this6._store.user) {
            tenantId = _this6._store.user.tenantId;
          }
          const employeeAppointmentRequest = {
            emails: _this6.emails.value && _this6.emails.value.map(email => email.emailAddress).join(', '),
            agenda: _this6.form.get('agenda').value,
            location: _this6.form.get('location').value,
            description: _this6.form.get('description').value,
            startDateTime: _this6.form.get('selectedRange').value.start,
            endDateTime: _this6.form.get('selectedRange').value.end,
            bufferTimeStart: _this6.form.get('bufferTimeStart').value,
            bufferTimeEnd: _this6.form.get('bufferTimeEnd').value,
            bufferTimeInMins: _this6.form.get('bufferTimeInMins').value,
            breakTimeInMins: _this6.form.get('breakTimeInMins').value,
            breakStartTime: new Date(moment__WEBPACK_IMPORTED_MODULE_0__(_this6.form.get('selectedRange').value.start).format('YYYY-MM-DD') + ' ' + _this6.form.get('breakStartTime').value),
            employeeId: _this6.employee ? _this6.employee.id : _this6._store.selectedEmployee ? _this6._store.selectedEmployee.id : null,
            organizationId: _this6._selectedOrganizationId,
            tenantId
          };
          if (!_this6.employeeAppointment) {
            _this6.employeeAppointment = yield _this6._employeeAppointmentService.create(employeeAppointmentRequest);
          } else {
            yield _this6._employeeAppointmentService.update(_this6.employeeAppointment.id, employeeAppointmentRequest);
            // Removing all previously selected employee ids
            for (const id of _this6.selectedEmployeeAppointmentIds) {
              yield _this6._appointmentEmployeesService.delete(id);
            }
          }
          for (const e of _this6.selectedEmployeeIds) {
            yield _this6._appointmentEmployeesService.add({
              employeeId: e,
              appointmentId: _this6.employeeAppointment.id,
              employeeAppointment: _this6.employeeAppointment
            });
          }
          _this6._toastrService.success('APPOINTMENTS_PAGE.SAVE_SUCCESS');
          _this6.employee ? _this6._router.navigate([`/share/employee/${_this6.employee.id}/confirm/${_this6.employeeAppointment.id}`]) : _this6._router.navigate(['/pages/employees/appointments']);
        } catch (error) {
          _this6._toastrService.danger('APPOINTMENTS_PAGE.SAVE_FAILED');
        }
      })();
    }
    onMembersSelected(ev) {
      var _this7 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const startDateTime = _this7.form.get('selectedRange').value.start;
        const endDateTime = _this7.form.get('selectedRange').value.end;
        const added = ev.find(o => !_this7.selectedEmployeeIds.includes(o));
        if (added) {
          const slots = _this7.employeeAvailability[added];
          const slotInSelectedRange = slots.find(s => moment__WEBPACK_IMPORTED_MODULE_0__(startDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_0__(s.startTime), moment__WEBPACK_IMPORTED_MODULE_0__(s.endTime), 'minutes', '[]') && moment__WEBPACK_IMPORTED_MODULE_0__(endDateTime).isBetween(moment__WEBPACK_IMPORTED_MODULE_0__(s.startTime), moment__WEBPACK_IMPORTED_MODULE_0__(s.endTime), 'minutes', '[]'));
          if (slots.length > 0 && !slotInSelectedRange || slots.length === 0) {
            const dialog = _this7._dialogService.open(_employee_schedules_employee_schedule_component__WEBPACK_IMPORTED_MODULE_12__/* .EmployeeScheduleComponent */ .Z, {
              context: {
                schedule: {
                  employeeName: _this7.employees.find(o => o.id === added).user.name,
                  slots,
                  timezone: _this7.timezone
                }
              }
            });
            const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(dialog.onClose);
            if (response !== 'yes') {
              _this7.employeeSelector.employeeId = ev.filter(o => o !== added);
              return;
            }
          }
        }
        _this7.selectedEmployeeIds = ev;
      })();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function ManageAppointmentComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ManageAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_14__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_14__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .EmployeeAppointmentService */ .N), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .AppointmentEmployeesService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .AvailabilitySlotsService */ .G), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .gRc));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ManageAppointmentComponent,
        selectors: [["ga-manage-appointment"]],
        viewQuery: function ManageAppointmentComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.employeeSelector = _t.first);
          }
        },
        inputs: {
          employee: "employee",
          employeeAppointment: "employeeAppointment",
          disabled: "disabled",
          appointmentId: "appointmentId",
          allowedDuration: "allowedDuration",
          hidePrivateFields: "hidePrivateFields",
          timezone: "timezone",
          selectedRange: "selectedRange"
        },
        outputs: {
          save: "save",
          cancel: "cancel"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵProvidersFeature"] */ .Jv_([_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .AppointmentEmployeesService */ ._, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .AvailabilitySlotsService */ .G, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .EmployeeAppointmentService */ .N]), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 14,
        vars: 8,
        consts: [["employeeSelector", ""], [1, "card-scroll"], [1, "header"], [1, "appointment-form"], [3, "formGroup", 4, "ngIf"], ["status", "success", "nbButton", "", 3, "click"], ["style", "margin-left: 10px", "status", "warning", "nbButton", "", 3, "click", 4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col-6"], [1, "form-group"], ["for", "agenda", 1, "label"], ["fullWidth", "", "id", "agenda", "type", "text", "nbInput", "", "formControlName", "agenda", 3, "placeholder"], ["name", "selectedRange", "formControlName", "selectedRange", "fromEmployeeAppointment", "true", 3, "timezoneOffset", "slotStartTime", "slotEndTime", "maxDate", "minDate", "allowedDuration", "disableDatePicker", "disableEndPicker"], [1, "col-2"], ["formControlName", "bufferTime"], ["class", "col-2", 4, "ngIf"], ["class", "col-6 form-group", 4, "ngIf"], [1, "col-3"], ["formControlName", "breakTime"], ["for", "location", 1, "label"], ["fullWidth", "", "id", "location", "type", "text", "nbInput", "", "formControlName", "location", 3, "placeholder"], ["for", "description", 1, "label"], ["fullWidth", "", "id", "description", "type", "text", "nbInput", "", "formControlName", "description", 3, "placeholder"], ["class", "row", 4, "ngIf"], ["formControlName", "bufferTimeStart"], ["formControlName", "bufferTimeEnd"], [1, "col-6", "form-group"], ["fullWidth", "", "id", "bufferTimeInMins", "type", "number", "nbInput", "", "formControlName", "bufferTimeInMins", 3, "min", "placeholder"], ["name", "break_start_time", "formControlName", "breakStartTime", 3, "min", "max"], ["fullWidth", "", "id", "breakTimeInMins", "type", "number", "nbInput", "", "formControlName", "breakTimeInMins", 3, "min", "placeholder"], [1, "col-4"], [3, "selectedChange", "label", "selectedEmployeeIds", "allEmployees"], [1, "col-sm-6"], ["for", "emailsSelect", 1, "label"], ["id", "emailsSelect", "multiple", "true", "bindLabel", "emailAddress", "formControlName", "emails", "appendTo", "body", 1, "adjust-height", 3, "items", "addTag", "hideSelected", "placeholder", "notFoundText", "ngClass"], ["status", "warning", "nbButton", "", 2, "margin-left", "10px", 3, "click"]],
        template: function ManageAppointmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-header", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(3, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body")(7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(8, ManageAppointmentComponent_form_8_Template, 50, 40, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-footer")(10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function ManageAppointmentComponent_Template_button_click_10_listener() {
              return ctx.onSaveRequest();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(13, ManageAppointmentComponent_button_13_Template, 3, 3, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, ctx.editMode ? "APPOINTMENTS_PAGE.EDIT_APPOINTMENT" : "APPOINTMENTS_PAGE.ADD_APPOINTMENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(12, 6, "BUTTONS.SAVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.editMode);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbInputDirective */ .i6h, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__/* .NgSelectComponent */ .vr, _angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .FormControlName */ .JD, _components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_24__/* .BackNavigationComponent */ .r, _timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_25__/* .TimerPickerComponent */ .f, _timer_picker_timer_range_picker_timer_range_picker_component__WEBPACK_IMPORTED_MODULE_26__/* .TimerRangePickerComponent */ .G, _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_27__/* .EmployeeSelectComponent */ .O, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .item-invalid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid red;\n  border-color: var(--color-danger-default);\n}\n[_nghost-%COMP%]   .item-valid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid green;\n  border-color: var(--color-success-default);\n}\n[_nghost-%COMP%]   #emailsSelect[_ngcontent-%COMP%]     .ng-clear-wrapper {\n  width: 20px;\n}\n[_nghost-%COMP%]   #emailsSelect[_ngcontent-%COMP%]     .ng-arrow-wrapper {\n  display: none;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     ngx-timer-range-picker {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n[_nghost-%COMP%]     ngx-timer-range-picker .row {\n  width: 50%;\n}"]
      });
    }
  };
  ManageAppointmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_14__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_14__/* .Router */ .Ix, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .EmployeeAppointmentService */ .N, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .AppointmentEmployeesService */ ._, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .AvailabilitySlotsService */ .G, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ToastrService */ .t, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .gRc])], ManageAppointmentComponent);
  return ManageAppointmentComponent;
})();


/***/ }),

/***/ 48226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ EmployeeAppointmentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let EmployeeAppointmentService = /*#__PURE__*/(() => {
  class EmployeeAppointmentService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/employee-appointment`;
    }
    /**
     * Get all employee appointments.
     *
     * @param relations
     * @param findInput
     * @returns
     */
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return this.http.get(this.API_URL, {
        params: {
          data
        }
      });
    }
    /**
     * Decode token
     *
     * @param token
     * @returns
     */
    decodeToken(token) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(this.API_URL + '/decode/' + token, {
        responseType: 'text'
      }));
    }
    /**
     * signAppointmentId
     *
     * @param id
     * @returns
     */
    signAppointmentId(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(this.API_URL + '/sign/' + id, {
        responseType: 'text'
      }));
    }
    /**
     * Get an employee appointment by ID.
     *
     * @param id
     * @param relations
     * @returns
     */
    getById(id, relations = []) {
      return this.http.get(this.API_URL + '/' + id, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          relations
        })
      });
    }
    /**
     * Create an employee appointment.
     *
     * @param input
     * @returns
     */
    create(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.API_URL}`, input));
    }
    /**
     * Update an employee appointment by ID.
     *
     * @param id
     * @param input
     * @returns
     */
    update(id, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.API_URL}/${id}`, input));
    }
    /**
     * Delete an employee appointment by ID.
     *
     * @param id
     * @returns
     */
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.API_URL}/${id}`));
    }
    static {
      this.ɵfac = function EmployeeAppointmentService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeAppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: EmployeeAppointmentService,
        factory: EmployeeAppointmentService.ɵfac
      });
    }
  }
  return EmployeeAppointmentService;
})();

/***/ }),

/***/ 49064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ TimezoneSelectorComponent)
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73247);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55567);









function TimezoneSelectorComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.getTimeWithOffset(item_r1), " ");
  }
}
function TimezoneSelectorComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.getTimeWithOffset(item_r3), " ");
  }
}
let TimezoneSelectorComponent = /*#__PURE__*/(() => {
  class TimezoneSelectorComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    constructor(dialogRef, translateService) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.translateService = translateService;
      this.listOfZones = moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz.names().filter(zone => zone.includes('/'));
    }
    ngOnInit() {}
    close() {
      this.dialogRef.close();
    }
    getTimeWithOffset(zone) {
      let cutZone = zone;
      if (zone.includes('/')) {
        cutZone = zone.split('/')[1];
      }
      const offset = moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz(zone).format('zZ');
      return '(' + offset + ') ' + cutZone;
    }
    select() {
      this.dialogRef.close(this.selectedTimezone);
    }
    static {
      this.ɵfac = function TimezoneSelectorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimezoneSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TimezoneSelectorComponent,
        selectors: [["ng-component"]],
        inputs: {
          selectedTimezone: "selectedTimezone"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 17,
        vars: 15,
        consts: [[1, "main", 2, "height", "450px"], [1, "d-flex"], [2, "width", "400px"], [1, "body"], ["appendTo", "body", 3, "itemsChange", "ngModelChange", "items", "placeholder", "ngModel", "searchable"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [1, "text-right"], ["status", "danger", "nbButton", "", "type", "button", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", "type", "button", 3, "click"]],
        template: function TimezoneSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body", 3)(6, "ng-select", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("itemsChange", function TimezoneSelectorComponent_Template_ng_select_itemsChange_6_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.listOfZones, $event) || (ctx.listOfZones = $event);
              return $event;
            })("ngModelChange", function TimezoneSelectorComponent_Template_ng_select_ngModelChange_6_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.selectedTimezone, $event) || (ctx.selectedTimezone = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(8, TimezoneSelectorComponent_ng_template_8_Template, 1, 1, "ng-template", 5)(9, TimezoneSelectorComponent_ng_template_9_Template, 1, 1, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-footer", 7)(11, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TimezoneSelectorComponent_Template_button_click_11_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(14, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TimezoneSelectorComponent_Template_button_click_14_listener() {
              return ctx.select();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 7, "POP_UPS.SELECT_TIMEZONE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("items", ctx.listOfZones);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 9, "FORM.PLACEHOLDERS.CHOOSE_TIME_ZONE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.selectedTimezone);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("searchable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(13, 11, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(16, 13, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgModel */ .vS, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .zJv, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgLabelTemplateDirective */ .ZZ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return TimezoneSelectorComponent;
})();

/***/ }),

/***/ 58151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ TimezoneSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let TimezoneSelectorModule = /*#__PURE__*/(() => {
  class TimezoneSelectorModule {
    static {
      this.ɵfac = function TimezoneSelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimezoneSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TimezoneSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return TimezoneSelectorModule;
})();

/***/ }),

/***/ 66781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ AvailabilitySlotsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let AvailabilitySlotsService = /*#__PURE__*/(() => {
  class AvailabilitySlotsService {
    constructor(http) {
      this.http = http;
      this.AVAILABILITY_SLOTS_BASE_URI = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/availability-slots`;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.AVAILABILITY_SLOTS_BASE_URI, createInput));
    }
    createBulk(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.AVAILABILITY_SLOTS_BASE_URI + '/bulk', createInput));
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(this.AVAILABILITY_SLOTS_BASE_URI, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.AVAILABILITY_SLOTS_BASE_URI}/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.AVAILABILITY_SLOTS_BASE_URI}/${id}`));
    }
    static {
      this.ɵfac = function AvailabilitySlotsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AvailabilitySlotsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: AvailabilitySlotsService,
        factory: AvailabilitySlotsService.ɵfac
      });
    }
  }
  return AvailabilitySlotsService;
})();

/***/ }),

/***/ 81697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ AppointmentCalendarModule)
/* harmony export */ });
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48637);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48226);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34627);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66781);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84992);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38834);
/* harmony import */ var _timezone_selector_timezone_selector_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);








const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSpinnerModule */ .gYs];
let AppointmentCalendarModule = /*#__PURE__*/(() => {
  class AppointmentCalendarModule {
    static {
      this.ɵfac = function AppointmentCalendarModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AppointmentCalendarModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: AppointmentCalendarModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .EmployeeAppointmentService */ .N, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .AppointmentEmployeesService */ ._, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .AvailabilitySlotsService */ .G, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .TimeOffService */ .a],
        imports: [NB_MODULES, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__/* .FullCalendarModule */ .E, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_8__/* .SharedModule */ .G, _timezone_selector_timezone_selector_module__WEBPACK_IMPORTED_MODULE_9__/* .TimezoneSelectorModule */ .h]
      });
    }
  }
  return AppointmentCalendarModule;
})();

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

/***/ 90535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ EmployeeAppointmentStatus)
/* harmony export */ });
/**
 * Employee appointment status.
 */
var EmployeeAppointmentStatus = /*#__PURE__*/function (EmployeeAppointmentStatus) {
  EmployeeAppointmentStatus["SCHEDULED"] = "Scheduled";
  EmployeeAppointmentStatus["CANCELLED"] = "Cancelled";
  EmployeeAppointmentStatus["COMPLETED"] = "Completed";
  return EmployeeAppointmentStatus;
}(EmployeeAppointmentStatus || {});

/***/ })

}]);