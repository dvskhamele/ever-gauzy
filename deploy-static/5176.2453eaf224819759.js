"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5176],{

/***/ 15598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManualTimeModule: () => (/* binding */ ManualTimeModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61801);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72991);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59238);
/* harmony import */ var _manual_time_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);







let ManualTimeModule = /*#__PURE__*/(() => {
  class ManualTimeModule {
    static {
      this.ɵfac = function ManualTimeModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ManualTimeModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ManualTimeModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_manual_time_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ManualTimeRoutingModule */ .i, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .SharedModule */ .G, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbBadgeModule */ .iEK, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .GauzyFiltersModule */ .Q, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .ProjectColumnViewModule */ .R, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .NoDataMessageModule */ .j]
      });
    }
  }
  return ManualTimeModule;
})();

/***/ }),

/***/ 30719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ ManualTimeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60559);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20433);
/* harmony import */ var _manual_time_manual_time_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _manual_time_manual_time_component__WEBPACK_IMPORTED_MODULE_0__/* .ManualTimeComponent */ .L,
  data: {
    datePicker: {
      unitOfTime: 'week'
    }
  },
  resolve: {
    dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .Q,
    bookmarkParams: _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .BookmarkQueryParamsResolver */ .x
  }
}];
let ManualTimeRoutingModule = /*#__PURE__*/(() => {
  class ManualTimeRoutingModule {
    static {
      this.ɵfac = function ManualTimeRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ManualTimeRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ManualTimeRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return ManualTimeRoutingModule;
})();

/***/ }),

/***/ 35836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ TimezoneFilterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);





let TimezoneFilterModule = /*#__PURE__*/(() => {
  class TimezoneFilterModule {
    static {
      this.ɵfac = function TimezoneFilterModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimezoneFilterModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TimezoneFilterModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbPopoverModule */ .Ofb, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return TimezoneFilterModule;
})();

/***/ }),

/***/ 51144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ManualTimeComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20893);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52843);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78543);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46915);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(60166);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6195);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77020);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(93697);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(28822);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(32386);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2538);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(49072);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(55567);
/* harmony import */ var _packages_ui_core_shared_src_lib_report_project_column_view_project_column_view_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(84080);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(95959);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(11031);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(23830);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(33867);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(47610);
































const _c0 = a0 => ({
  $implicit: a0
});
function ManualTimeComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "ngx-date-range-title", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("start", ctx_r1.request == null ? null : ctx_r1.request.startDate)("end", ctx_r1.request == null ? null : ctx_r1.request.endDate)("format", "dddd, LL");
  }
}
function ManualTimeComponent_ng_template_21_nb_card_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function ManualTimeComponent_ng_template_21_nb_card_0_div_6_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function ManualTimeComponent_ng_template_21_nb_card_0_div_6_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function ManualTimeComponent_ng_template_21_nb_card_0_div_6_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function ManualTimeComponent_ng_template_21_nb_card_0_div_6_nb_badge_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(1, "titlecase");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("text", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r1.ManualTimeLogAction.EDITED));
  }
}
function ManualTimeComponent_ng_template_21_nb_card_0_div_6_nb_badge_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(1, "titlecase");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("text", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r1.ManualTimeLogAction.ADDED));
  }
}
function ManualTimeComponent_ng_template_21_nb_card_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(8, ManualTimeComponent_ng_template_21_nb_card_0_div_6_ng_container_8_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(9, "div", 35)(10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(14, ManualTimeComponent_ng_template_21_nb_card_0_div_6_ng_container_14_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(15, "div", 36)(16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(19, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(20, ManualTimeComponent_ng_template_21_nb_card_0_div_6_ng_container_20_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(21, "div", 37)(22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(25, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(27, "div", 37)(28, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(31, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(33, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(34, "div", 37)(35, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(38, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(40, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(41, "div", 37)(42, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(45, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(47, "dateTimeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(48, "div", 39)(49, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(52, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(53, ManualTimeComponent_ng_template_21_nb_card_0_div_6_nb_badge_53_Template, 2, 3, "nb-badge", 41)(54, ManualTimeComponent_ng_template_21_nb_card_0_div_6_nb_badge_54_Template, 2, 3, "nb-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
  }
  if (rf & 2) {
    const timeLogRow_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(3);
    const projectEl_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(25);
    const taskEl_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(27);
    const employeeEl_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(6, 21, "REPORT_PAGE.EMPLOYEE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", employeeEl_r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(43, _c0, timeLogRow_r3 == null ? null : timeLogRow_r3.employee));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(12, 23, "REPORT_PAGE.PROJECT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", projectEl_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(45, _c0, timeLogRow_r3 == null ? null : timeLogRow_r3.project));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(18, 25, "REPORT_PAGE.TO_DO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", taskEl_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(47, _c0, timeLogRow_r3 == null ? null : timeLogRow_r3.task));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(24, 27, "REPORT_PAGE.REASON"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", timeLogRow_r3.reason || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(30, 29, "REPORT_PAGE.FROM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(33, 31, timeLogRow_r3.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(37, 33, "REPORT_PAGE.TIME_SPAN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(40, 35, timeLogRow_r3.duration), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(44, 37, "REPORT_PAGE.CHANGED_AT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(47, 39, timeLogRow_r3.editedAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(51, 41, "REPORT_PAGE.ACTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", timeLogRow_r3.isEdited);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", false);
  }
}
function ManualTimeComponent_ng_template_21_nb_card_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 23)(1, "nb-card-header", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "nb-card-body", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(5, ManualTimeComponent_ng_template_21_nb_card_0_ng_container_5_Template, 1, 0, "ng-container", 26)(6, ManualTimeComponent_ng_template_21_nb_card_0_div_6_Template, 55, 49, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    const columnsHeader_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, day_r7.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", columnsHeader_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngForOf", day_r7.timeLogs);
  }
}
function ManualTimeComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, ManualTimeComponent_ng_template_21_nb_card_0_Template, 7, 5, "nb-card", 22);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.dailyData);
  }
}
function ManualTimeComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "REPORT_PAGE.NO_DATA.MANUAL_ACTIVITY"));
  }
}
function ManualTimeComponent_ng_template_24_ga_project_column_view_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "ga-project-column-view", 45);
  }
  if (rf & 2) {
    const project_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("project", project_r9);
  }
}
function ManualTimeComponent_ng_template_24_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REPORT_PAGE.NO_PROJECT"));
  }
}
function ManualTimeComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, ManualTimeComponent_ng_template_24_ga_project_column_view_0_Template, 1, 1, "ga-project-column-view", 44)(1, ManualTimeComponent_ng_template_24_ng_template_1_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const project_r9 = ctx.$implicit;
    const noProjects_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", project_r9)("ngIfElse", noProjects_r10);
  }
}
function ManualTimeComponent_ng_template_26_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const task_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI("", task_r11 == null ? null : task_r11.title, " ");
  }
}
function ManualTimeComponent_ng_template_26_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REPORT_PAGE.NO_TASK"));
  }
}
function ManualTimeComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, ManualTimeComponent_ng_template_26_span_0_Template, 2, 1, "span", 46)(1, ManualTimeComponent_ng_template_26_ng_template_1_Template, 3, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const task_r11 = ctx.$implicit;
    const noTaSK_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", task_r11)("ngIfElse", noTaSK_r12);
  }
}
function ManualTimeComponent_ng_template_28_ngx_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "ngx-avatar", 49);
  }
  if (rf & 2) {
    const employee_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("src", employee_r13 == null ? null : employee_r13.user == null ? null : employee_r13.user.imageUrl)("name", employee_r13 == null ? null : employee_r13.user == null ? null : employee_r13.user.name)("id", employee_r13 == null ? null : employee_r13.id)("employee", employee_r13);
  }
}
function ManualTimeComponent_ng_template_28_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REPORT_PAGE.NO_EMPLOYEE"));
  }
}
function ManualTimeComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, ManualTimeComponent_ng_template_28_ngx_avatar_1_Template, 1, 4, "ngx-avatar", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(2, ManualTimeComponent_ng_template_28_ng_template_2_Template, 3, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const employee_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", employee_r13);
  }
}
function ManualTimeComponent_ng_template_30_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 51)(1, "div", 52)(2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(11, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(14, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(17, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(20, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(23, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(4, 8, "REPORT_PAGE.EMPLOYEE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(7, 10, "REPORT_PAGE.PROJECT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(10, 12, "REPORT_PAGE.TO_DO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(13, 14, "REPORT_PAGE.REASON"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(16, 16, "REPORT_PAGE.FROM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(19, 18, "REPORT_PAGE.TIME_SPAN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(22, 20, "REPORT_PAGE.CHANGED_AT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(25, 22, "REPORT_PAGE.ACTION"), " ");
  }
}
function ManualTimeComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, ManualTimeComponent_ng_template_30_div_0_Template, 26, 24, "div", 50);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.dailyData == null ? null : ctx_r1.dailyData.length) > 0);
  }
}
let ManualTimeComponent = class ManualTimeComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .BaseSelectorFilterComponent */ .U {
  constructor(translateService, _cd, _errorHandlingService, _timesheetService, _timesheetFilterService, store, dateRangePickerBuilderService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.translateService = translateService;
    this._cd = _cd;
    this._errorHandlingService = _errorHandlingService;
    this._timesheetService = _timesheetService;
    this._timesheetFilterService = _timesheetFilterService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .MJ();
    this.ManualTimeLogAction = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .ManualTimeLogAction */ .WD;
    this.actions = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .ManualTimeLogAction */ .WD);
    this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
    this.payloads$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__/* .BehaviorSubject */ .t(null);
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(() => !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.prepareRequest()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
    this.payloads$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(payloads => !!payloads), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.getManualLogs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   *
   */
  ngAfterViewInit() {
    this._cd.detectChanges();
    this.control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChanged */ .F)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Prepares the time log report request.
   * @returns {void}
   */
  prepareRequest() {
    if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .isEmpty */ .Im)(this.request) || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .isEmpty */ .Im)(this.filters)) {
      return;
    }
    const request = {
      ...this.getFilterRequest(this.request),
      logType: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .TimeLogType */ .aJ.MANUAL]
    };
    if (this.control.getRawValue()) {
      request['isEdited'] = this.control.getRawValue() === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .ManualTimeLogAction */ .WD.EDITED;
    }
    this.payloads$.next(request);
  }
  /**
   * Gauzy timesheet default filters
   *
   * @param filters
   */
  filtersChange(filters) {
    if (this.gauzyFiltersComponent.saveFilters) {
      this._timesheetFilterService.filter = filters;
    }
    this.filters = Object.assign({}, filters);
    this.subject$.next(true);
  }
  /**
   * Asynchronously fetch manual time logs and update the component's state.
   * Handles loading state, API request, data processing, and errors.
   *
   * @returns {Promise<void>} A promise resolving to an array of objects containing date and timeLogs.
   */
  getManualLogs() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      // Check if organization and request data are available
      if (!_this.organization || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .isEmpty */ .Im)(_this.request)) {
        return;
      }
      // Clear previous data and set loading state to true
      _this.dailyData = [];
      _this.loading = true;
      try {
        // Get the payloads from the observable
        const payloads = _this.payloads$.getValue();
        // Call the timesheetService to fetch time logs
        const logs = yield _this._timesheetService.getTimeLogs(payloads, ['task', 'project', 'employee', 'employee.user']);
        // Check if logs are empty and handle gracefully
        if (logs.length === 0) {
          console.log('No manual logs found for the given request.');
          return;
        }
        // Process the fetched logs and update the component's state
        _this.dailyData = (0,underscore__WEBPACK_IMPORTED_MODULE_1__/* .chain */ .cy)(logs).groupBy(log => moment__WEBPACK_IMPORTED_MODULE_0__(log.startedAt).format('YYYY-MM-DD')).map((timeLogs, date) => ({
          date,
          timeLogs
        })).value();
      } catch (error) {
        // Handle any exceptions or errors during the fetch
        console.error('Error fetching manual logs:', error);
        _this._errorHandlingService.handleError(error);
      } finally {
        // Set loading state to false regardless of success or failure
        _this.loading = false;
      }
    })();
  }
  static {
    this.ɵfac = function ManualTimeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ManualTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .TimesheetService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TimesheetFilterService */ .WG), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ManualTimeComponent,
      selectors: [["ga-manual-time-report"]],
      viewQuery: function ManualTimeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .GBs(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .GauzyFiltersComponent */ .n, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.gauzyFiltersComponent = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 32,
      vars: 21,
      consts: [["notFound", ""], ["projectEl", ""], ["taskEl", ""], ["employeeEl", ""], ["columnsHeader", ""], ["noProjects", ""], ["noTaSK", ""], ["noEmployee", ""], [1, "card-scroll"], [1, "row"], [1, "col-auto"], [4, "ngIf"], [1, "col-auto", "ml-auto"], [1, "filters"], [3, "filtersChange", "filters", "saveFilters", "hasLogTypeFilter", "hasSourceFilter", "hasActivityLevelFilter"], ["appendTo", "body", 3, "searchable", "clearable", "items", "placeholder", "formControl"], [1, "report-body"], [1, "report-container"], [1, "table"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "weekly-logs", "row-table", 3, "nbSpinner"], [1, "table-template", 3, "ngIf", "ngIfElse"], [3, "start", "end", "format"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-title"], [1, "manual-time-container"], [4, "ngTemplateOutlet"], ["class", "cart-body project-row", 4, "ngFor", "ngForOf"], [1, "cart-body", "project-row"], [1, "table-row"], [1, "table-inner-wrapper"], [1, "responsive-table-row", "employee-column"], [1, "responsive-table-header"], [1, "responsive-table-content", "project-name"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "responsive-table-row", "project-column"], [1, "responsive-table-row", "to-do-column"], [1, "responsive-table-row", "small-column"], [1, "responsive-table-content", "day-col"], [1, "responsive-table-row", "small-column", "action-column"], [1, "responsive-table-content", "day-col", 3, "ngSwitch"], [3, "text", 4, "ngSwitchCase"], [3, "text"], [3, "message"], [3, "project", 4, "ngIf", "ngIfElse"], [3, "project"], [4, "ngIf", "ngIfElse"], [1, "avatar-wrapper-outer"], ["class", "report-table", 3, "src", "name", "id", "employee", 4, "ngIf"], [1, "report-table", 3, "src", "name", "id", "employee"], ["class", "columns-header", 4, "ngIf"], [1, "columns-header"], [1, "table-inner-wrapper", "font-weight-bold", "align-items-center"], [1, "responsive-table-row", "column-heading", "employee-column"], [1, "responsive-table-row", "column-heading", "project-column"], [1, "responsive-table-row", "column-heading", "to-do-column"], [1, "responsive-table-row", "column-heading", "small-column"], [1, "responsive-table-row", "column-heading", "small-column", "action-column"]],
      template: function ManualTimeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 8)(1, "nb-card-header")(2, "div", 9)(3, "div", 10)(4, "h4")(5, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(8, ManualTimeComponent_ng_container_8_Template, 2, 3, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(9, "div", 9)(10, "div", 12)(11, "div", 13)(12, "ngx-gauzy-filters", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("filtersChange", function ManualTimeComponent_Template_ngx_gauzy_filters_filtersChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.filtersChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(14, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(15, "ng-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(17, "nb-card-body", 16)(18, "div", 17)(19, "div", 18)(20, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(21, ManualTimeComponent_ng_template_21_Template, 1, 1, "ng-template", 20)(22, ManualTimeComponent_ng_template_22_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(24, ManualTimeComponent_ng_template_24_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(26, ManualTimeComponent_ng_template_26_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(28, ManualTimeComponent_ng_template_28_Template, 4, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(30, ManualTimeComponent_ng_template_30_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const notFound_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(7, 15, "REPORT_PAGE.MANUAL_TIME_EDIT_REPORT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.request == null ? null : ctx.request.startDate) && (ctx.request == null ? null : ctx.request.endDate));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("filters", ctx.filters)("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(13, 17, ctx.datePickerConfig$).isSaveDatePicker)("hasLogTypeFilter", false)("hasSourceFilter", false)("hasActivityLevelFilter", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("searchable", false)("clearable", true)("items", ctx.actions)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(16, 19, "REPORT_PAGE.ACTION"))("formControl", ctx.control);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.dailyData == null ? null : ctx.dailyData.length) > 0)("ngIfElse", notFound_r14);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgTemplateOutlet */ .T3, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgSwitchCase */ .e1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlDirective */ .l_, _packages_ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_22__/* .AvatarComponent */ .f, _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_23__/* .DateRangeTitleComponent */ .D, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_24__/* .HeaderTitleComponent */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardHeaderComponent */ .zJv, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__/* .NgSelectComponent */ .vr, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbBadgeComponent */ .XyX, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .GauzyFiltersComponent */ .n, _packages_ui_core_shared_src_lib_report_project_column_view_project_column_view_component__WEBPACK_IMPORTED_MODULE_27__/* .ProjectColumnViewComponent */ .q, _packages_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_28__/* .NoDataMessageComponent */ ._, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .AsyncPipe */ .Jj, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .TitleCasePipe */ .PV, _packages_ui_core_shared_src_lib_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_29__/* .DateFormatPipe */ .a, _packages_ui_core_shared_src_lib_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_30__/* .DateTimeFormatPipe */ .V, _packages_ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_31__/* .DurationFormatPipe */ .i, _packages_ui_core_shared_src_lib_pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_32__/* .TimeFormatPipe */ .z, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card[_ngcontent-%COMP%], \nnb-card-body[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: none;\n}\n\n  .filter-item-list {\n  flex-wrap: nowrap !important;\n}\n  .group-by-wrapper {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n  .group-by-wrapper .label {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n}\n  .group-by-wrapper .select-button.select-button {\n  padding: 5px 12px !important;\n  border-radius: var(--select-rectangle-border-radius);\n  height: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  min-width: auto;\n  display: flex;\n  align-items: center;\n}\n  .group-by-wrapper .select-button.select-button nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n  .group-by-wrapper .select-button.select-button > span {\n  margin-right: 25px;\n}\n  .action-select {\n  border-radius: var(--select-rectangle-border-radius);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n  .action-select button.select-button {\n  background-color: var(--gauzy-card-1) !important;\n  border-radius: var(--select-rectangle-border-radius);\n  padding-top: 2px !important;\n  padding-bottom: 0px !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 12px !important;\n}\n  .action-select button.select-button nb-icon {\n  color: var(--text-basic-color) !important;\n}\n  .nb-options {\n  width: auto !important;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 20px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 2rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100% - 6rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .weekly-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .budget-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .item-body {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n\n.daily-time-report[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n.daily-time-report[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.table-row[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 86px;\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.table-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.columns-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n\n.responsive-table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[dir=rtl]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.avatar-wrapper-outer[_ngcontent-%COMP%] {\n  max-width: 95%;\n  padding-top: 5px;\n  display: inline-flex;\n}\n.avatar-wrapper-outer[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n@media only screen and (max-width: 991px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], \n   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], \n   .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .filters-range-wrapper {\n    flex-wrap: wrap !important;\n  }\n  [_nghost-%COMP%]     .filters .main-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n    .filter-item-list {\n    flex-wrap: wrap !important;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n\n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container {\n  height: 2.25rem;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-opened > .ng-select-container:hover {\n  box-shadow: var(--gauzy-shadow) !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-focused .ng-select-container {\n  box-shadow: var(--gauzy-shadow) !important;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2.25rem;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container:hover {\n  box-shadow: var(--gauzy-shadow);\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input {\n  height: unset;\n}\n[_nghost-%COMP%]     .weekly-logs .no-data-found {\n  height: calc(100vh - 20.1rem) !important;\n}\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  border: 2px solid var(--gauzy-border-default-color);\n  position: relative;\n  color: var(--gauzy-text-color-2);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  height: auto;\n}\n[_nghost-%COMP%]   .table-inner-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n[_nghost-%COMP%]   .employee-column[_ngcontent-%COMP%] {\n  width: 15%;\n  min-width: 115px;\n  max-width: 185px;\n}\n[_nghost-%COMP%]   .project-column[_ngcontent-%COMP%] {\n  width: 20%;\n  min-width: 15%;\n}\n[_nghost-%COMP%]   .to-do-column[_ngcontent-%COMP%] {\n  width: 15%;\n  min-width: 9%;\n}\n[_nghost-%COMP%]   .small-column[_ngcontent-%COMP%] {\n  width: 10%;\n  min-width: 5%;\n}\n[_nghost-%COMP%]   .filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .filters[_ngcontent-%COMP%]   ng-select[_ngcontent-%COMP%] {\n  min-width: 7rem;\n}\n[_nghost-%COMP%]   .justify-end[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n@media only screen and (max-width: 1024px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], \n   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], \n   .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\nnb-card-body.report-body[_ngcontent-%COMP%] {\n  height: calc(100% - 9rem) !important;\n}\n\n.manual-time-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}"]
    });
  }
};
ManualTimeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_33__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_33__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .TimesheetService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TimesheetFilterService */ .WG, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .DateRangePickerBuilderService */ .i7, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .TimeZoneService */ .F])], ManualTimeComponent);


/***/ }),

/***/ 59238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ NoDataMessageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let NoDataMessageModule = /*#__PURE__*/(() => {
  class NoDataMessageModule {
    static {
      this.ɵfac = function NoDataMessageModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NoDataMessageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: NoDataMessageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__/* .NbEvaIconsModule */ .N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return NoDataMessageModule;
})();

/***/ }),

/***/ 60559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ BookmarkQueryParamsResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55801);
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71924);
/* harmony import */ var _services_selector_builder_selector_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55780);
/* harmony import */ var _services_notification_error_handling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54263);





/**
 * The `BookmarkQueryParamsResolver` is responsible for constructing a set of query parameters
 * based on selected entities such as organization, employee, project, and team.
 * It retrieves the necessary state using injected services (`Store` and `SelectorBuilderService`)
 * and dynamically builds the query parameters if the respective selectors are active.
 *
 * @returns {Observable<Record<string, string>>} - An observable that emits a set of query parameters
 * with entity IDs mapped to their respective keys (e.g., `organizationId`, `employeeId`, etc.).
 * If there is an error or no matching selectors, an empty observable is returned.
 */
const BookmarkQueryParamsResolver = route => {
  // Get injected services
  const _store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_services_store_store_service__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .il);
  const _errorHandlingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_services_notification_error_handling_service__WEBPACK_IMPORTED_MODULE_2__/* .ErrorHandlingService */ .X);
  try {
    // Get selectors visibility and selected entities
    const selectors = Object.assign({}, _services_selector_builder_selector_builder_service__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_SELECTOR_VISIBILITY */ .z, route.data?.selectors);
    const {
      selectedOrganization,
      selectedEmployee,
      selectedProject,
      selectedTeam
    } = _store;
    // Map selectors to entity IDs
    const paramMappings = {
      organizationId: selectedOrganization?.id,
      employeeId: selectedEmployee?.id,
      projectId: selectedProject?.id,
      teamId: selectedTeam?.id
    };
    // Create queryParams by filtering out undefined values and matching selectors
    const queryParams = Object.entries(paramMappings).reduce((params, [key, value]) => {
      if (selectors[key.replace('Id', '')] && value) {
        params[key] = value;
      }
      return params;
    }, {});
    // Return null if organization ID is missing
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(queryParams); // Allow the route to resolve normally
  } catch (error) {
    // Handle any synchronous errors and redirect to "new integration" page
    console.log(`Error resolving entity query params: ${error}`);
    _errorHandlingService.handleError(error);
    return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return an empty observable
  }
};

/***/ }),

/***/ 61801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ GauzyFiltersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24224);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10012);
/* harmony import */ var _timezone_filter_timezone_filter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);









let GauzyFiltersModule = /*#__PURE__*/(() => {
  class GauzyFiltersModule {
    static {
      this.ɵfac = function GauzyFiltersModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GauzyFiltersModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: GauzyFiltersModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbPopoverModule */ .Ofb, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__/* .NgxSliderModule */ .Ti, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__/* .PipesModule */ .Y, _timezone_filter_timezone_filter_module__WEBPACK_IMPORTED_MODULE_7__/* .TimezoneFilterModule */ .G]
      });
    }
  }
  return GauzyFiltersModule;
})();

/***/ }),

/***/ 72991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ ProjectColumnViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);





let ProjectColumnViewModule = /*#__PURE__*/(() => {
  class ProjectColumnViewModule {
    static {
      this.ɵfac = function ProjectColumnViewModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectColumnViewModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProjectColumnViewModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .G]
      });
    }
  }
  return ProjectColumnViewModule;
})();

/***/ }),

/***/ 84080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ ProjectColumnViewComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);





function ProjectColumnViewComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 9);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.project == null ? null : ctx_r0.project.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectColumnViewComponent_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.fallbackSvg, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectColumnViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, ProjectColumnViewComponent_div_0_ng_template_2_Template, 1, 1, "ng-template", 5)(3, ProjectColumnViewComponent_div_0_ng_template_3_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 6)(6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const noImageEl_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.project == null ? null : ctx_r0.project.imageUrl)("ngIfElse", noImageEl_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("title", ctx_r0.project == null ? null : ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", ctx_r0.project == null ? null : ctx_r0.project.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("Members count ", ctx_r0.project == null ? null : ctx_r0.project.membersCount, "");
  }
}
function ProjectColumnViewComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REPORT_PAGE.NO_PROJECT"));
  }
}
let ProjectColumnViewComponent = /*#__PURE__*/(() => {
  class ProjectColumnViewComponent {
    constructor() {
      this.fallbackSvg = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_SVG */ .pv;
    }
    static {
      this.ɵfac = function ProjectColumnViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectColumnViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectColumnViewComponent,
        selectors: [["ga-project-column-view"]],
        inputs: {
          project: "project"
        },
        standalone: false,
        decls: 3,
        vars: 2,
        consts: [["noProject", ""], ["noImageEl", ""], ["class", "single-project-template", 4, "ngIf", "ngIfElse"], [1, "single-project-template"], [1, "logo-wrapper"], [3, "ngIf", "ngIfElse"], [1, "headers-wrapper"], [1, "main-header", 3, "title"], [1, "employees-count"], ["draggable", "false", 3, "src"], ["draggable", "false", 1, "default-image", 3, "src"]],
        template: function ProjectColumnViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProjectColumnViewComponent_div_0_Template, 10, 5, "div", 2)(1, ProjectColumnViewComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const noProject_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.project)("ngIfElse", noProject_r3);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 5px;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  min-width: 28px;\n  min-height: 28px;\n  width: 28px;\n  height: 28px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .employees-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n}"]
      });
    }
  }
  return ProjectColumnViewComponent;
})();

/***/ }),

/***/ 95959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ NoDataMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);







const _c0 = [[["", "message", ""]]];
const _c1 = ["[message]"];
let NoDataMessageComponent = /*#__PURE__*/(() => {
  let NoDataMessageComponent = class NoDataMessageComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.title = this.getTranslation('SM_TABLE.NO_DATA_MESSAGE');
    }
    ngOnInit() {}
    static {
      this.ɵfac = function NoDataMessageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NoDataMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NoDataMessageComponent,
        selectors: [["ngx-no-data-message"]],
        inputs: {
          title: "title",
          message: "message"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        ngContentSelectors: _c1,
        decls: 11,
        vars: 2,
        consts: [[1, "p-0", "no-data-found"], [1, "row", "align-items-center", "h-100"], [1, "col-12"], [1, "text-center", "d-flex", "justify-content-center", "py-3"], ["icon", "bar-chart-2-outline", 1, "no-record-icon"], [1, "text-center", "m-0"], [1, "text-center"]],
        template: function NoDataMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojectionDef"] */ .NAR(_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-body")(2, "div", 1)(3, "div", 2)(4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojection"] */ .SdG(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.message, " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.no-data-found[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  background-color: var(--gauzy-card-1) !important;\n  height: 100% !important;\n  margin: 0;\n}\n\nh5[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-weight: 600;\n  font-size: 18px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n}\n\n.no-record-icon[_ngcontent-%COMP%] {\n  transform: rotate(0.75turn) scaleY(-1);\n  font-size: 48px;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}"]
      });
    }
  };
  NoDataMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$])], NoDataMessageComponent);
  return NoDataMessageComponent;
})();


/***/ }),

/***/ 99253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $i: () => (/* binding */ DEFAULT_SCREENSHOT_FREQUENCY_OPTIONS),
/* harmony export */   Fo: () => (/* binding */ DEFAULT_TIME_FORMATS),
/* harmony export */   Y$: () => (/* binding */ DEFAULT_INVITE_EXPIRY_PERIOD),
/* harmony export */   Zo: () => (/* binding */ DEFAULT_PROFIT_BASED_BONUS),
/* harmony export */   _E: () => (/* binding */ DEFAULT_DATE_FORMATS),
/* harmony export */   bO: () => (/* binding */ DEFAULT_STANDARD_WORK_HOURS_PER_DAY),
/* harmony export */   pU: () => (/* binding */ DEFAULT_ACTIVITY_PROOF_DURATIONS),
/* harmony export */   sL: () => (/* binding */ DEFAULT_INACTIVITY_TIME_LIMITS),
/* harmony export */   xm: () => (/* binding */ DEFAULT_REVENUE_BASED_BONUS)
/* harmony export */ });
/**
 * Array containing the default time formats.
 */
const DEFAULT_TIME_FORMATS = [12, 24];
/**
 * Default standard work hours per day.
 * - Typically set to 8 hours, aligning with standard full-time work schedules.
 */
const DEFAULT_STANDARD_WORK_HOURS_PER_DAY = 8;
/**
 * Default profit-based bonus percentage.
 * - Represents a 75% bonus based on profit metrics.
 */
const DEFAULT_PROFIT_BASED_BONUS = 75;
/**
 * Default revenue-based bonus percentage.
 * - Represents a 10% bonus based on revenue metrics.
 */
const DEFAULT_REVENUE_BASED_BONUS = 10;
/**
 * Default invite expiry period in days.
 * - Invitations expire after 7 days by default.
 */
const DEFAULT_INVITE_EXPIRY_PERIOD = 7;
/**
 * Array of default date formats.
 * - 'L': Locale-specific date representation (e.g., 09/04/1986).
 * - 'LL': Full month name, day, and year (e.g., September 4, 1986).
 * - 'dddd, LL': Day of the week, full month name, day, and year (e.g., Thursday, September 4, 1986).
 */
const DEFAULT_DATE_FORMATS = ['L', 'LL', 'dddd, LL'];
/**
 * Array of default inactivity time limits in minutes.
 * - Specifies time limits after which a user is considered inactive.
 * - Common values: 1, 5, 10, 20, 30 minutes.
 */
const DEFAULT_INACTIVITY_TIME_LIMITS = [1, 5, 10, 20, 30];
/**
 * Array of default activity proof durations in minutes.
 * - Defines durations for capturing proof of activity.
 * - Common values: 1, 3, 5, 10 minutes.
 */
const DEFAULT_ACTIVITY_PROOF_DURATIONS = [1, 3, 5, 10];
/**
 * Array of default screenshot frequency options in minutes.
 * - Determines how frequently screenshots are taken to monitor activity.
 * - Common values: 1, 3, 5, 10 minutes.
 */
const DEFAULT_SCREENSHOT_FREQUENCY_OPTIONS = [1, 3, 5, 10];

/***/ })

}]);