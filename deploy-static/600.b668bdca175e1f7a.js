"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[600],{

/***/ 342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
//# sourceMappingURL=throwUnobservableError.js.map

/***/ }),

/***/ 839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ JobMatchingComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(65569);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8007);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13881);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64103);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18359);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74852);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41817);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(79475);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89285);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(45928);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(53989);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(42578);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(82465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(55567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(10936);
/* harmony import */ var _ui_core_shared_src_lib_dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(34268);






















const _c0 = () => ["ORG_JOB_MATCHING_VIEW", "ALL_ORG_VIEW"];
function JobMatchingComponent_nb_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const source_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, source_r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "JOBS." + source_r1.key), " ");
  }
}
function JobMatchingComponent_ng_template_16_ng_template_13_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("confirm", function JobMatchingComponent_ng_template_16_ng_template_13_button_0_Template_button_confirm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.saveJobPreset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "JOB_MATCHING.SAVE_PRESET_MESSAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "JOB_MATCHING.SAVE"), " ");
  }
}
function JobMatchingComponent_ng_template_16_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, JobMatchingComponent_ng_template_16_ng_template_13_button_0_Template, 5, 6, "button", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.selectedEmployeeId);
  }
}
function JobMatchingComponent_ng_template_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 20)(1, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "div", 22)(5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function JobMatchingComponent_ng_template_16_div_14_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.addNewCriterion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "JOB_MATCHING.CRITERIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 4, "JOB_MATCHING.ADD_NEW_CRITERIONS"), " ");
  }
}
function JobMatchingComponent_ng_template_16_div_16_nb_radio_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-radio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, type_r8.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "JOBS." + type_r8.key), " ");
  }
}
function JobMatchingComponent_ng_template_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 25)(1, "form", 26, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function JobMatchingComponent_ng_template_16_div_16_Template_form_ngSubmit_1_listener() {
      const criterion_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.saveCriterion(criterion_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div", 2)(4, "div", 22)(5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "div", 27)(8, "div", 4)(9, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(12, "div", 3)(13, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function JobMatchingComponent_ng_template_16_div_16_Template_input_ngModelChange_13_listener($event) {
      const criterion_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(criterion_r7.keyword, $event) || (criterion_r7.keyword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(15, "div", 4)(16, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(19, "div", 3)(20, "ng-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function JobMatchingComponent_ng_template_16_div_16_Template_ng_select_ngModelChange_20_listener($event) {
      const criterion_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(criterion_r7.categoryId, $event) || (criterion_r7.categoryId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(22, "div", 4)(23, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(26, "div", 3)(27, "ng-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function JobMatchingComponent_ng_template_16_div_16_Template_ng_select_ngModelChange_27_listener($event) {
      const criterion_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(criterion_r7.occupationId, $event) || (criterion_r7.occupationId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(29, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(30, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(31, "div", 27)(32, "nb-radio-group", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function JobMatchingComponent_ng_template_16_div_16_Template_nb_radio_group_ngModelChange_32_listener($event) {
      const criterion_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(criterion_r7.jobType, $event) || (criterion_r7.jobType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(33, JobMatchingComponent_ng_template_16_div_16_nb_radio_33_Template, 4, 6, "nb-radio", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(34, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(35, "div", 33)(36, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("confirm", function JobMatchingComponent_ng_template_16_div_16_Template_button_confirm_36_listener() {
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const criterion_r7 = ctx_r8.$implicit;
      const index_r10 = ctx_r8.index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.deleteCriterions(index_r10, criterion_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(39, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(40, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(41, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
  }
  if (rf & 2) {
    const criterion_r7 = ctx.$implicit;
    const index_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(index_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(11, 21, "JOB_MATCHING.KEYWORDS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", criterion_r7.keyword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(14, 23, "JOB_MATCHING.KEYWORDS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(18, 25, "JOB_MATCHING.CATEGORY"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("addTag", ctx_r2.createNewCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", criterion_r7.categoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("clearable", true)("items", ctx_r2.categories)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(21, 27, "JOB_MATCHING.CATEGORY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(25, 29, "JOB_MATCHING.OCCUPATION"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("addTag", ctx_r2.createNewOccupations);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", criterion_r7.occupationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("clearable", true)("items", ctx_r2.occupations)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(28, 31, "JOB_MATCHING.OCCUPATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", criterion_r7.jobType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(34, 33, ctx_r2.JobPostTypeEnum));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(37, 35, "JOB_MATCHING.DELETE"))("message", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(38, 37, "JOB_MATCHING.DELETE_CRITERION_MESSAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(43, 39, "JOB_MATCHING.SAVE"), " ");
  }
}
function JobMatchingComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "div", 10)(7, "div", 2)(8, "div", 11)(9, "ng-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("change", function JobMatchingComponent_ng_template_16_Template_ng_select_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onPresetSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function JobMatchingComponent_ng_template_16_Template_ng_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r2.criterionForm.jobPresetId, $event) || (ctx_r2.criterionForm.jobPresetId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(13, JobMatchingComponent_ng_template_16_ng_template_13_Template, 1, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(14, JobMatchingComponent_ng_template_16_div_14_Template, 9, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(16, JobMatchingComponent_ng_template_16_div_16_Template, 44, 41, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 9, "JOB_MATCHING.PRESET"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("addTag", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(10, 11, ctx_r2.hasAddPreset$) ? ctx_r2.addPreset : null)("clearable", true)("items", ctx_r2.jobPresets);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r2.criterionForm.jobPresetId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(11, 13, "JOB_MATCHING.PRESET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r2.criterionForm == null ? null : ctx_r2.criterionForm.jobPresetId) && ctx_r2.hasAnyChanges && !ctx_r2.selectedEmployeeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.selectedEmployeeId || (ctx_r2.criterionForm == null ? null : ctx_r2.criterionForm.jobPresetId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.criterions);
  }
}
let JobMatchingComponent = /*#__PURE__*/(() => {
  let JobMatchingComponent = class JobMatchingComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    constructor(translateService, _ngxPermissionsService, _store, _i18nService, _jobPresetService, _jobSearchOccupationService, _jobSearchCategoryService, _toastrService, _errorHandlingService) {
      var _this;
      super(translateService);
      _this = this;
      this.translateService = translateService;
      this._ngxPermissionsService = _ngxPermissionsService;
      this._store = _store;
      this._i18nService = _i18nService;
      this._jobPresetService = _jobPresetService;
      this._jobSearchOccupationService = _jobSearchOccupationService;
      this._jobSearchCategoryService = _jobSearchCategoryService;
      this._toastrService = _toastrService;
      this._errorHandlingService = _errorHandlingService;
      this.criterionForm = {
        jobSource: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobPostSourceEnum */ .eJ.UPWORK,
        jobPresetId: null
      };
      this.JobPostSourceEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobPostSourceEnum */ .eJ;
      this.JobPostTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobPostTypeEnum */ .L;
      this.jobPresets = [];
      this.categories = [];
      this.occupations = [];
      this.criterions = [];
      this.hasAnyChanges = false;
      this.hasAddPreset$ = this._store.selectedEmployee$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .map */ .T)(employee => !(!!employee && !!employee.id)));
      this.payloads$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .BehaviorSubject */ .t(null);
      /**
       * Add new preset from here
       *
       * @param name
       */
      this.addPreset = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* (name) {
          if (!_this.organization) {
            return;
          }
          try {
            const {
              id: organizationId,
              tenantId
            } = _this.organization;
            const jobPreset = yield _this._jobPresetService.createJobPreset({
              name,
              tenantId,
              organizationId,
              ...(_this.selectedEmployeeId ? {
                employees: [{
                  id: _this.selectedEmployeeId
                }]
              } : [])
            });
            _this.jobPresets = _this.jobPresets.concat([jobPreset]);
            _this.criterionForm.jobPresetId = jobPreset.id;
            _this.criterions = [];
            _this.addNewCriterion();
          } catch (error) {
            console.error('Error while creating job presets', error);
            _this._errorHandlingService.handleError(error);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
      /**
       * Create new job search category
       *
       * @param name
       * @returns
       */
      this.createNewCategories = /*#__PURE__*/function () {
        var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* (name) {
          if (!_this.organization) {
            return;
          }
          try {
            const {
              id: organizationId,
              tenantId
            } = _this.organization;
            const {
              jobSource
            } = _this.criterionForm;
            const category = yield _this._jobSearchCategoryService.create({
              name,
              tenantId,
              organizationId,
              jobSource
            });
            _this.categories = _this.categories.concat([category]);
          } catch (error) {
            console.error('Error while creating new job search category', error);
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }();
      /**
       * Create new job search occupation
       *
       * @param name
       * @returns
       */
      this.createNewOccupations = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* (name) {
          if (!_this.organization) {
            return;
          }
          try {
            const {
              id: organizationId,
              tenantId
            } = _this.organization;
            const {
              jobSource
            } = _this.criterionForm;
            const occupation = yield _this._jobSearchOccupationService.create({
              name,
              tenantId,
              organizationId,
              jobSource
            });
            _this.occupations = _this.occupations.concat([occupation]);
          } catch (error) {
            console.error('Error while creating new job search occupation', error);
          }
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }();
    }
    ngOnInit() {
      // Initialize UI permissions
      this.initializeUiPermissions();
      // Initialize UI languages and Update Locale
      this.initializeUiLanguagesAndLocale();
      this.payloads$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(payloads => !!payloads), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.getJobPresets()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
      // Get Organization
      const storeOrganization$ = this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => {
        this.getCategories();
        this.getOccupations();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
      // Get Employee
      const storeEmployee$ = this._store.selectedEmployee$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(employee => !!employee), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(employee => this.selectedEmployeeId = employee.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.getEmployeeCriterions()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$]).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.preparePayloads()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Initialize UI permissions
     */
    initializeUiPermissions() {
      // Load permissions
      const permissions = this._store.userRolePermissions.map(({
        permission
      }) => permission);
      this._ngxPermissionsService.flushPermissions(); // Flush permissions
      this._ngxPermissionsService.loadPermissions(permissions); // Load permissions
    }
    /**
     * Initialize UI languages and Update Locale
     */
    initializeUiLanguagesAndLocale() {
      // Observable that emits when preferred language changes.
      const preferredLanguage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .merge */ .h)(this._store.preferredLanguage$, this._i18nService.preferredLanguage$).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(lang => !!lang), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(lang => {
        this.translateService.use(lang);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
      // Subscribe to initiate the stream
      preferredLanguage$.subscribe();
    }
    /**
     * Prepare Unique Payloads
     *
     * @returns
     */
    preparePayloads() {
      if (!this.organization) {
        return;
      }
      // Get Organization
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      // Prepare Payloads
      const request = {
        tenantId,
        organizationId,
        ...(this.selectedEmployeeId ? {
          employeeId: this.selectedEmployeeId
        } : {})
      };
      this.payloads$.next(request);
    }
    /**
     * Get Job Presets
     *
     * @returns
     */
    getJobPresets() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
          return;
        }
        try {
          const payloads = _this2.payloads$.getValue();
          const jobPresets = yield _this2._jobPresetService.getJobPresets(payloads);
          _this2.jobPresets = jobPresets;
          if (_this2.selectedEmployeeId) {
            _this2.criterionForm.jobPresetId = jobPresets.length > 0 ? jobPresets[0].id : null;
          }
        } catch (error) {
          console.error('Error while retrieving job presets', error);
          _this2._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Get Employee Criterions
     *
     * @returns
     */
    getEmployeeCriterions() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this3.organization) {
          return;
        }
        try {
          _this3.criterions = [];
          if (_this3.selectedEmployeeId) {
            _this3.criterions = yield _this3._jobPresetService.getEmployeeCriterions(_this3.selectedEmployeeId);
            if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .isEmpty */ .Im)(_this3.criterions)) {
              _this3.addNewCriterion();
            }
          }
        } catch (error) {
          console.error('Error while retrieving employee criterions', error);
          _this3._errorHandlingService.handleError(error);
        }
      })();
    }
    onPresetSelected(jobPreset) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        try {
          _this4.criterions = [];
          if (jobPreset) {
            if (_this4.selectedEmployeeId) {
              yield _this4.updateEmployeePreset();
            } else {
              const {
                jobPresetCriterions = []
              } = yield _this4._jobPresetService.getJobPreset(jobPreset.id);
              if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .isNotEmpty */ .hj)(jobPresetCriterions)) {
                _this4.criterions = jobPresetCriterions;
              } else {
                _this4.addNewCriterion();
              }
            }
          }
          _this4.hasAnyChanges = false;
        } catch (error) {
          console.log('Error while change job preset', error);
          _this4._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * On Source Selected
     *
     * @returns
     */
    onSourceSelected() {
      this.criterionForm.jobPresetId = null;
      this.updateEmployeePreset();
    }
    /**
     * Update Employee Preset
     *
     * @returns
     */
    updateEmployeePreset() {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this5.organization || !_this5.selectedEmployeeId) {
          return;
        }
        try {
          // Get Organization
          const {
            id: organizationId,
            tenantId
          } = _this5.organization;
          const {
            jobSource,
            jobPresetId
          } = _this5.criterionForm;
          // Update Employee Preset
          _this5.criterions = yield _this5._jobPresetService.saveEmployeePreset({
            source: jobSource,
            jobPresetIds: [jobPresetId],
            employeeId: _this5.selectedEmployeeId,
            tenantId,
            organizationId
          });
        } catch (error) {
          console.error('Error while updating employee preset', error);
          _this5._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Save Job Preset
     *
     * @returns
     */
    saveJobPreset() {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this6.organization || !_this6.criterionForm.jobPresetId) {
          return;
        }
        // Get Organization
        const {
          id: organizationId,
          tenantId
        } = _this6.organization;
        const {
          jobPresetId
        } = _this6.criterionForm;
        // Create job preset
        const request = {
          id: jobPresetId,
          tenantId,
          organizationId
        };
        // Update criterions
        if (_this6.criterions && _this6.criterions.length > 0) {
          request.jobPresetCriterions = _this6.criterions.map(item => (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .omit */ .cJ)(item, 'employeeId', 'id', 'jobPresetId')).filter(criterion => Object.values(criterion).length > 0);
        }
        // Create job preset
        const jobPreset = yield _this6._jobPresetService.createJobPreset(request);
        // Update criterions
        if (jobPreset) {
          _this6.hasAnyChanges = false;
          _this6._toastrService.success('TOASTR.MESSAGE.PRESET_SAVED');
        }
      })();
    }
    /**
     * Save Criterion
     *
     * @param criterion
     */
    saveCriterion(criterion) {
      var _this7 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this7.organization) {
          return;
        }
        // Get Organization
        const {
          id: organizationId,
          tenantId
        } = _this7.organization;
        let createdCriterion;
        _this7.hasAnyChanges = true;
        try {
          if (_this7.selectedEmployeeId) {
            createdCriterion = yield _this7._jobPresetService.createEmployeeCriterion(_this7.selectedEmployeeId, {
              ...criterion,
              tenantId,
              organizationId
            });
          } else {
            createdCriterion = yield _this7._jobPresetService.createJobPresetCriterion(_this7.criterionForm.jobPresetId, {
              ...criterion,
              tenantId,
              organizationId
            });
          }
          const index = _this7.criterions.indexOf(criterion);
          _this7.criterions[index] = createdCriterion;
          _this7._toastrService.success('TOASTR.MESSAGE.JOB_MATCHING_SAVED');
        } catch (error) {
          _this7._toastrService.error('TOASTR.MESSAGE.JOB_MATCHING_ERROR');
        }
      })();
    }
    /**
     * Delete criterion
     *
     * @param index
     * @param criterion
     * @returns
     */
    deleteCriterions(index, criterion) {
      var _this8 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (criterion.id) {
          _this8.hasAnyChanges = true;
          if (_this8.selectedEmployeeId) {
            try {
              yield _this8._jobPresetService.deleteEmployeeCriterion(_this8.selectedEmployeeId, criterion.id);
              _this8._toastrService.success('TOASTR.MESSAGE.JOB_MATCHING_DELETED');
            } catch (error) {
              _this8._toastrService.error('TOASTR.MESSAGE.JOB_MATCHING_ERROR');
              return;
            }
          } else {
            try {
              yield _this8._jobPresetService.deleteJobPresetCriterion(criterion.id);
              _this8._toastrService.success('TOASTR.MESSAGE.JOB_MATCHING_DELETED');
            } catch (error) {
              _this8._toastrService.error('TOASTR.MESSAGE.JOB_MATCHING_ERROR');
              return;
            }
          }
        }
        _this8.criterions.splice(index, 1);
        if (_this8.criterions.length === 0) {
          _this8.addNewCriterion();
        }
      })();
    }
    /**
     * Add new criterion
     *
     * @param criterion
     */
    addNewCriterion(criterion = {
      jobType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobPostTypeEnum */ .L.HOURLY
    }) {
      this.criterions.push(criterion);
    }
    /**
     * Get Categories
     */
    getCategories() {
      var _this9 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this9.organization) {
          return;
        }
        try {
          const {
            id: organizationId,
            tenantId
          } = _this9.organization;
          const {
            jobSource
          } = _this9.criterionForm;
          // Get Categories
          const categories = yield _this9._jobSearchCategoryService.getAll({
            tenantId,
            organizationId,
            jobSource
          });
          // Set Categories
          _this9.categories = categories.items;
        } catch (error) {
          console.error('Error while retrieving job categories', error);
        }
      })();
    }
    /**
     * Get Occupations
     */
    getOccupations() {
      var _this0 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this0.organization) {
          return;
        }
        try {
          const {
            id: organizationId,
            tenantId
          } = _this0.organization;
          const {
            jobSource
          } = _this0.criterionForm;
          // Get Occupations
          const occupations = yield _this0._jobSearchOccupationService.getAll({
            tenantId,
            organizationId,
            jobSource
          });
          // Set Occupations
          _this0.occupations = occupations.items;
        } catch (error) {
          console.error('Error while retrieving job occupations', error);
        }
      })();
    }
    static {
      this.ɵfac = function JobMatchingComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobMatchingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(ngx_permissions__WEBPACK_IMPORTED_MODULE_15__/* .NgxPermissionsService */ .$R), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_17__/* .I18nService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .JobPresetService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .JobSearchOccupationService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .JobSearchCategoryService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: JobMatchingComponent,
        selectors: [["ga-job-matching"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 17,
        vars: 15,
        consts: [["form", ""], [1, "header"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["fullWidth", "", 3, "selectedChange", "ngModelChange", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngxPermissionsOnly"], [3, "value"], [1, "d-block"], [1, "w-100"], [1, "col-12"], ["bindValue", "id", "bindLabel", "name", "appendTo", "body", 3, "change", "ngModelChange", "addTag", "clearable", "items", "ngModel", "placeholder"], [3, "ngIf"], ["class", "row align-items-center my-3", 4, "ngIf"], [1, "criterions-list-container"], ["class", "criterions-list", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "primary", "ngxConfirmDialog", "", 3, "message", "confirm", 4, "ngIf"], ["nbButton", "", "status", "primary", "ngxConfirmDialog", "", 3, "confirm", "message"], ["icon", "save-outline"], [1, "row", "align-items-center", "my-3"], [1, "col", "m-0"], [1, "col-auto"], ["nbButton", "", "status", "primary", 3, "click"], ["icon", "plus-outline"], [1, "criterions-list"], [3, "ngSubmit"], [1, "col-sm"], [1, "d-block", "col-sm-2"], ["nbInput", "", "fullWidth", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "categoryId", "bindValue", "id", "bindLabel", "name", "appendTo", "body", 3, "ngModelChange", "addTag", "ngModel", "clearable", "items", "placeholder"], ["name", "occupationId", "bindValue", "id", "bindLabel", "name", "appendTo", "body", 3, "ngModelChange", "addTag", "ngModel", "clearable", "items", "placeholder"], ["name", "jobType", 1, "d-flex", 3, "ngModelChange", "ngModel"], [1, "col-auto", "footer-buttons"], ["nbButton", "", "status", "basic", "type", "button", "size", "small", "ngxConfirmDialog", "", 1, "action", 3, "confirm", "nbTooltip", "message"], ["status", "danger", "icon", "trash-outline"], ["type", "submit", "nbButton", "", "status", "success", "size", "small"]],
        template: function JobMatchingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 1)(2, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body")(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(12, "nb-select", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function JobMatchingComponent_Template_nb_select_selectedChange_12_listener() {
              return ctx.onSourceSelected();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function JobMatchingComponent_Template_nb_select_ngModelChange_12_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.criterionForm.jobSource, $event) || (ctx.criterionForm.jobSource = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(14, JobMatchingComponent_nb_option_14_Template, 4, 6, "nb-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(15, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(16, JobMatchingComponent_ng_template_16_Template, 17, 15, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 6, "JOB_MATCHING.CONFIGURE_EMPLOYEES_TO_JOBS_MATCHING"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(11, 8, "JOB_MATCHING.SOURCE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(13, 10, "JOB_MATCHING.SOURCE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.criterionForm.jobSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(15, 12, ctx.JobPostSourceEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction0"] */ .lJ4(14, _c0));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbRadioComponent */ .XIt, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbRadioGroupComponent */ .yZH, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_15__/* .NgxPermissionsDirective */ .f6, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__/* .NgSelectComponent */ .vr, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgModel */ .vS, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgForm */ .cV, _ui_core_shared_src_lib_dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_27__/* .ConfirmDirective */ .o, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .AsyncPipe */ .Jj, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .LowerCasePipe */ .GH, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .KeyValuePipe */ .lG],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   .form-group.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--gauzy-card-3);\n  padding: 10px 20px 18px 12px;\n  border-radius: var(--border-radius);\n  width: 100%;\n}\n[_nghost-%COMP%]   .footer-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   .criterions-list-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 8px;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]   .criterions-list-container[_ngcontent-%COMP%]   .criterions-list[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-card-2);\n  padding: 1.5rem 0.5rem 1rem 1rem;\n}"]
      });
    }
  };
  JobMatchingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$, ngx_permissions__WEBPACK_IMPORTED_MODULE_15__/* .NgxPermissionsService */ .$R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il, _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_17__/* .I18nService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .JobPresetService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .JobSearchOccupationService */ .i, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .JobSearchCategoryService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ErrorHandlingService */ .X])], JobMatchingComponent);
  return JobMatchingComponent;
})();


/***/ }),

/***/ 1014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63823);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ 1326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94895);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67800);


function mergeAll(concurrent = Infinity) {
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__/* .mergeMap */ .Z)(_util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ 1364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ combineLatest)
/* harmony export */ });
/* unused harmony export combineLatestInit */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3209);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23497);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33764);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65149);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48442);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80390);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27608);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3856);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70305);









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

/***/ 2134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tg: () => (/* binding */ innerFrom)
/* harmony export */ });
/* unused harmony exports fromInteropObservable, fromArrayLike, fromPromise, fromIterable, fromAsyncIterable, fromReadableStreamLike */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86344);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51305);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72538);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3209);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62775);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82777);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75543);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48957);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30548);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48479);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15630);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13534);












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

/***/ 2270:
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

/***/ 3209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31326);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76033);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13534);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85611);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33546);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48479);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81362);







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

/***/ 3259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Subject)
/* harmony export */ });
/* unused harmony export AnonymousSubject */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18398);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58246);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90926);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96047);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63535);





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

/***/ 3348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91454);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3856);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 3856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* unused harmony export OperatorSubscriber */
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31326);

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

/***/ 5499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30487);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10729);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96047);



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

/***/ 6015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3209);

const EMPTY = /*#__PURE__*/new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 6373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33381);

const ObjectUnsubscribedError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ 7089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18398);

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

/***/ 7115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R0: () => (/* binding */ popNumber),
/* harmony export */   lI: () => (/* binding */ popScheduler),
/* harmony export */   ms: () => (/* binding */ popResultSelector)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47426);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41517);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__/* .isScheduler */ .m)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map

/***/ }),

/***/ 7172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62971);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83039);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66765);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73110);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 7611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ 8007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62971);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83039);


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

/***/ 8228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84954);

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

/***/ 9220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46359);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47426);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__/* .observable */ .s]);
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ 9667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63004);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91454);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3856);



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

/***/ 9909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81333);

const ObjectUnsubscribedError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ 10085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ createJobsRoutes)
/* harmony export */ });
/* harmony import */ var _job_layout_job_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58310);

/**
 * Creates jobs routes for the application
 *
 * @param _pageRouteRegistryService An instance of PageRouteRegistryService
 * @returns An array of Route objects
 */
const createJobsRoutes = _pageRouteRegistryService => [{
  path: '',
  component: _job_layout_job_layout_component__WEBPACK_IMPORTED_MODULE_0__/* .JobLayoutComponent */ .X,
  children: [{
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full'
  }, ..._pageRouteRegistryService.getPageLocationRoutes('jobs')]
}];

/***/ }),

/***/ 10162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ PLUGINS)
/* harmony export */ });
/* harmony import */ var _gauzy_plugin_job_employee_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14493);
/* harmony import */ var _gauzy_plugin_job_matching_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11833);
/* harmony import */ var _gauzy_plugin_job_search_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70913);
/* harmony import */ var _gauzy_plugin_job_proposal_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97206);




/**
 * An array of plugins to be included or used in the codebase.
 */
const PLUGINS = [
// Indicates the inclusion or intention to use the JobEmployeeModule in the codebase.
_gauzy_plugin_job_employee_ui__WEBPACK_IMPORTED_MODULE_0__.JobEmployeeModule,
// Indicates the inclusion or intention to use the JobMatchingModule in the codebase.
_gauzy_plugin_job_matching_ui__WEBPACK_IMPORTED_MODULE_1__.JobMatchingModule,
// Indicates the inclusion or intention to use the JobSearchModule in the codebase.
_gauzy_plugin_job_search_ui__WEBPACK_IMPORTED_MODULE_2__.JobSearchModule,
// Indicates the inclusion or intention to use the JobProposalTemplateModule in the codebase.
_gauzy_plugin_job_proposal_ui__WEBPACK_IMPORTED_MODULE_3__.JobProposalTemplateModule];

/***/ }),

/***/ 10729:
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

/***/ 11252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76033);

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

/***/ 11833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobMatchingModule: () => (/* binding */ JobMatchingModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6828);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99209);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8539);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18180);
/* harmony import */ var _job_matching_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);















/**
 * Nebular modules
 */
const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbPopoverModule */ .Ofb, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbRadioModule */ .iyp, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbTooltipModule */ .IB0];
/*
 * Third party modules
 */
const THIRD_PARTY_MODULES = [ngx_permissions__WEBPACK_IMPORTED_MODULE_1__/* .NgxPermissionsModule */ .Ov.forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forRoot({
  defaultLanguage: (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .getBrowserLanguage */ .x)(),
  // Get the browser language and fall back to a default if needed
  loader: {
    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateLoader */ .Wr,
    useFactory: _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_5__/* .HttpLoaderFactory */ .M,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__/* .HttpClient */ .Qq]
  }
})];
let JobMatchingModule = /*#__PURE__*/(() => {
  class JobMatchingModule {
    static {
      this.hasRegisteredPageRoutes = false;
    } // Flag to check if routes have been registered
    constructor(_pageRouteRegistryService) {
      this._pageRouteRegistryService = _pageRouteRegistryService;
      // Register the routes
      this.registerPageRoutes();
    }
    /**
     * Registers routes for the Jobs browser module.
     * Ensures that routes are registered only once.
     *
     * @returns {void}
     */
    registerPageRoutes() {
      if (JobMatchingModule.hasRegisteredPageRoutes) {
        return;
      }
      // Register Job Matching Page Routes
      this._pageRouteRegistryService.registerPageRoute({
        // Register the location 'jobs'
        location: 'jobs',
        // Register the path 'matching'
        path: 'matching',
        // Register the loadChildren function to load the MatchingModule lazy module
        loadChildren: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 11833)).then(m => m.JobMatchingModule),
        // Register the data object
        data: {
          selectors: {
            date: true,
            employee: true,
            project: false,
            team: false
          }
        }
      });
      // Set hasRegisteredRoutes to true
      JobMatchingModule.hasRegisteredPageRoutes = true;
    }
    static {
      this.ɵfac = function JobMatchingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobMatchingModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .PageRouteRegistryService */ .L));
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineNgModule"] */ .$C({
        type: JobMatchingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ROUTES */ .bw,
          useFactory: service => (0,_job_matching_routes__WEBPACK_IMPORTED_MODULE_10__/* .createJobMatchingRoutes */ .j)(service),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .PageRouteRegistryService */ .L],
          multi: true
        }],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .RouterModule */ .iI.forChild([]), NB_MODULES, THIRD_PARTY_MODULES, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DialogsModule */ .s, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .RouterModule */ .iI]
      });
    }
  }
  return JobMatchingModule;
})();

/***/ }),

/***/ 11943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81333);

const UnsubscriptionError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 13166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ EmptyError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81333);

const EmptyError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function EmptyErrorImpl() {
  _super(this);
  this.name = 'EmptyError';
  this.message = 'no elements in sequence';
});
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ 13534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ observable)
/* harmony export */ });
const observable = /*#__PURE__*/(() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ 13881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1326);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66765);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59792);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7115);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52989);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popNumber */ .R0)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY */ .w : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__/* .mergeAll */ .U)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__/* .from */ .H)(sources, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 14493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobEmployeeModule: () => (/* binding */ JobEmployeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6828);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99209);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8539);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44944);
/* harmony import */ var _job_employee_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);














/**
 * Nebular Modules
 */
const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbToggleModule */ .jVr];
/*
 * Third party modules
 */
const THIRD_PARTY_MODULES = [ngx_permissions__WEBPACK_IMPORTED_MODULE_1__/* .NgxPermissionsModule */ .Ov.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateModule */ .h.forRoot({
  defaultLanguage: (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .getBrowserLanguage */ .x)(),
  // Get the browser language and fall back to a default if needed
  loader: {
    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateLoader */ .Wr,
    useFactory: _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_4__/* .HttpLoaderFactory */ .M,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq]
  }
})];
let JobEmployeeModule = /*#__PURE__*/(() => {
  class JobEmployeeModule {
    static {
      this.hasRegisteredPageRoutes = false;
    } // Flag to check if routes have been registered
    constructor(_pageRouteRegistryService) {
      this._pageRouteRegistryService = _pageRouteRegistryService;
      this.registerPageRoutes(this._pageRouteRegistryService); // Register the routes
    }
    /**
     * Register routes for the JobEmployeeModule
     *
     * @param _pageRouteRegistryService
     * @returns {void}
     */
    registerPageRoutes(_pageRouteRegistryService) {
      if (JobEmployeeModule.hasRegisteredPageRoutes) {
        return;
      }
      // Register Job Employee Page Routes
      _pageRouteRegistryService.registerPageRoute({
        // Register the location 'jobs'
        location: 'jobs',
        // Register the path 'employee'
        path: 'employee',
        // Register the loadChildren function to load the EmployeesModule lazy module
        loadChildren: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 14493)).then(m => m.JobEmployeeModule),
        // Register the data object
        data: {
          selectors: {
            date: true,
            employee: true,
            project: false,
            team: false
          }
        }
      });
      // Set hasRegisteredRoutes to true
      JobEmployeeModule.hasRegisteredPageRoutes = true;
    }
    static {
      this.ɵfac = function JobEmployeeModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobEmployeeModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .PageRouteRegistryService */ .L));
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .$C({
        type: JobEmployeeModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ROUTES */ .bw,
          useFactory: service => (0,_job_employee_routes__WEBPACK_IMPORTED_MODULE_9__/* .createJobEmployeeRoutes */ .e)(service),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .PageRouteRegistryService */ .L],
          multi: true
        }],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .RouterModule */ .iI.forChild([]), NB_MODULES, THIRD_PARTY_MODULES, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DynamicTabsModule */ .A]
      });
    }
  }
  return JobEmployeeModule;
})();

/***/ }),

/***/ 15285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70305);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91454);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3856);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 15287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71337);

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

/***/ 15630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33546);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58894);


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

/***/ 16485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47426);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ 18026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63823);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ 18244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88782);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43584);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 18302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ JobSearchComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(86344);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(10936);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(45715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87818);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(83986);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61469);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(76033);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20384);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3348);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68485);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9667);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68876);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(19223);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20408);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(65735);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89285);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98035);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(73800);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(82465);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(91439);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(15130);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(64913);
/* harmony import */ var _apply_job_manually_apply_job_manually_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(95634);
/* harmony import */ var _job_title_description_details_job_title_description_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(76504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(908);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(52345);
/* harmony import */ var _ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(45293);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(3456);
/* harmony import */ var _ui_core_shared_src_lib_dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(34268);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(49072);

var JobSearchComponent_1;

































const _c0 = () => [null, 100];
const _c1 = () => [100, 500];
const _c2 = () => [500, 1000];
const _c3 = () => [1000, 5000];
const _c4 = () => [5000, null];
const _c5 = () => ["ORG_JOB_SEARCH"];
const _c6 = () => ["ALL_ORG_VIEW"];
const _c7 = () => ["ORG_JOB_APPLY"];
const _c8 = () => ["ORG_JOB_EDIT"];
const _c9 = a0 => ({
  spin: a0
});
function JobSearchComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", "/pages/jobs/employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "JOBS.EMPLOYEES"), " ");
  }
}
function JobSearchComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", "/pages/jobs/matching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "JOBS.MATCHINGS"), " ");
  }
}
function JobSearchComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", "/pages/jobs/proposal-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "JOBS.PROPOSALS_TEMPLATE"), " ");
  }
}
function JobSearchComponent_ng_container_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function JobSearchComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, JobSearchComponent_ng_container_17_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const sync_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", sync_r2);
  }
}
function JobSearchComponent_button_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function JobSearchComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function JobSearchComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, JobSearchComponent_button_18_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const sync_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", sync_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.REFRESH"), " ");
  }
}
function JobSearchComponent_ng_container_22_ng_template_1_Template(rf, ctx) {}
function JobSearchComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, JobSearchComponent_ng_container_22_ng_template_1_Template, 0, 0, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const tableLayout_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", tableLayout_r5);
  }
}
function JobSearchComponent_nb_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const source_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, source_r6 == null ? null : source_r6.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "JOBS." + source_r6.key), " ");
  }
}
function JobSearchComponent_nb_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const type_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, type_r7.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "JOBS." + type_r7.key), " ");
  }
}
function JobSearchComponent_nb_option_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, type_r8.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "JOBS." + type_r8.key), " ");
  }
}
function JobSearchComponent_ng_container_84_ng_template_1_Template(rf, ctx) {}
function JobSearchComponent_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, JobSearchComponent_ng_container_84_ng_template_1_Template, 0, 0, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const tableLayout_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", tableLayout_r5);
  }
}
function JobSearchComponent_ng_template_86_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "angular2-smart-table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function JobSearchComponent_ng_template_86_ng_template_0_ng_template_1_Template_angular2_smart_table_userRowSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onSelectJob($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r3.settingsSmartTable)("source", ctx_r3.smartTableSource);
  }
}
function JobSearchComponent_ng_template_86_ng_template_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r3.smartTableSource);
  }
}
function JobSearchComponent_ng_template_86_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, JobSearchComponent_ng_template_86_ng_template_0_ng_template_1_Template, 1, 2, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, JobSearchComponent_ng_template_86_ng_template_0_ng_container_3_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r3.settingsSmartTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r3.smartTableSource);
  }
}
function JobSearchComponent_ng_template_86_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div");
  }
}
function JobSearchComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, JobSearchComponent_ng_template_86_ng_template_0_Template, 4, 2, "ng-template", 5)(1, JobSearchComponent_ng_template_86_ng_template_1_Template, 1, 0, "ng-template", 40);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(2, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsExcept", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(3, _c5));
  }
}
function JobSearchComponent_ng_template_88_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function JobSearchComponent_ng_template_88_ng_template_0_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.viewJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "JOBS.VIEW"), " ");
  }
}
function JobSearchComponent_ng_template_88_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function JobSearchComponent_ng_template_88_ng_template_0_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.applyToJobManually());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function JobSearchComponent_ng_template_88_ng_template_0_ng_template_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.applyToJobAutomatically());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function JobSearchComponent_ng_template_88_ng_template_0_ng_template_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.appliedJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "nb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "JOBS.APPLY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 5, "JOBS.APPLY_AUTO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 7, "JOBS.APPLIED"));
  }
}
function JobSearchComponent_ng_template_88_ng_template_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function JobSearchComponent_ng_template_88_ng_template_0_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.hideJob());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "JOBS.HIDE"));
  }
}
function JobSearchComponent_ng_template_88_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, JobSearchComponent_ng_template_88_ng_template_0_ng_template_1_Template, 5, 3, "ng-template", 5)(2, JobSearchComponent_ng_template_88_ng_template_0_ng_template_2_Template, 15, 9, "ng-template", 5)(3, JobSearchComponent_ng_template_88_ng_template_0_ng_template_3_Template, 3, 3, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(3, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(4, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(5, _c8));
  }
}
function JobSearchComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, JobSearchComponent_ng_template_88_ng_template_0_Template, 4, 6, "ng-template", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(1, _c6));
  }
}
function JobSearchComponent_ng_template_90_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("confirm", function JobSearchComponent_ng_template_90_ng_template_0_Template_button_confirm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.hideAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "nb-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 4, "JOBS.HIDE_ALL_CONFIRM"))("yesText", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 6, "BUTTONS.YES_HIDE_ALL_JOBS"))("noText", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 8, "BUTTONS.CANCEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, "BUTTONS.HIDE_ALL"), " ");
  }
}
function JobSearchComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, JobSearchComponent_ng_template_90_ng_template_0_Template, 7, 12, "ng-template", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(1, _c8));
  }
}
function JobSearchComponent_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(1, _c9, ctx_r3.isRefresh));
  }
}
let JobSearchComponent = /*#__PURE__*/(() => {
  let JobSearchComponent = class JobSearchComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
    static {
      JobSearchComponent_1 = this;
    }
    static buildForm(fb) {
      return fb.group({
        title: [],
        jobSource: [],
        jobType: [],
        jobStatus: [],
        budget: []
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .AtLeastOneFieldValidator */ .P]
      });
    }
    constructor(translateService, _fb, _http, _activatedRoute, _router, _dialogService, _store, _proposalTemplateService, _toastrService, _jobService, _dateRangePickerBuilderService, _errorHandlingService, _ngxPermissionsService, _i18nService) {
      super(translateService);
      this.translateService = translateService;
      this._fb = _fb;
      this._http = _http;
      this._activatedRoute = _activatedRoute;
      this._router = _router;
      this._dialogService = _dialogService;
      this._store = _store;
      this._proposalTemplateService = _proposalTemplateService;
      this._toastrService = _toastrService;
      this._jobService = _jobService;
      this._dateRangePickerBuilderService = _dateRangePickerBuilderService;
      this._errorHandlingService = _errorHandlingService;
      this._ngxPermissionsService = _ngxPermissionsService;
      this._i18nService = _i18nService;
      this.loading = false;
      this.isRefresh = false;
      this.autoRefresh = false;
      this.settingsSmartTable = {
        selectedRowIndex: -1,
        editable: false,
        hideSubHeader: true,
        actions: false
      };
      this.isOpenAdvancedFilter = false;
      this.jobs = [];
      this.JobPostSourceEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobPostSourceEnum */ .eJ;
      this.JobPostTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobPostTypeEnum */ .L;
      this.JobPostStatusEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobPostStatusEnum */ .Zc;
      this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U;
      this.JobSearchTabsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobSearchTabsEnum */ .DP;
      this.jobs$ = this.subject$;
      this.disableButton = true;
      this.nbTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .BehaviorSubject */ .t(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobSearchTabsEnum */ .DP.ACTIONS);
      /*
       * Search Tab Form
       */
      this.form = JobSearchComponent_1.buildForm(this._fb);
      // Creating the observable pipeline
      this._activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(({
        integration
      }) => {
        if (!integration) {
          this._router.navigate(['/pages/jobs']);
          return false;
        }
        return true; // Continue with the pipeline if integration is found
      }),
      // Extracting the 'entitySettings' property from the 'integration_tenant' object in the route's data
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .map */ .T)(({
        integration
      }) => integration?.entitySettings),
      // Finding the entity setting related to the specified entity type
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .map */ .T)(entitySettings => entitySettings.find(setting => setting.entity === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .IntegrationEntity */ .c2.JOB_MATCHING)),
      // Updating the specified component property with the fetched entity setting
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(entity => {
        if (!entity || !entity.sync || !entity.isActive) {
          this._router.navigate(['/pages/jobs']);
        }
      }),
      // Handling the component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnInit() {
      var _this = this;
      this._applyTranslationOnSmartTable();
      // Initialize UI permissions
      this.initializeUiPermissions();
      // Initialize UI languages and Update Locale
      this.initializeUiLanguagesAndLocale();
      this.jobs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.onSelectJob({
        isSelected: false,
        data: null
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(/*#__PURE__*/(0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        return yield _this.getEmployeeJobs();
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.isRefresh = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      this.nbTab$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.jobs$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.jobs$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      const storeOrganization$ = this._store.selectedOrganization$;
      const storeEmployee$ = this._store.selectedEmployee$;
      const selectedDateRange$ = this._dateRangePickerBuilderService.selectedDateRange$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .combineLatest */ .z)([storeOrganization$, selectedDateRange$, storeEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(([organization, dateRange]) => !!organization && !!dateRange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(([organization, dateRange, employee]) => {
        this.organization = organization;
        this.selectedDateRange = dateRange;
        this.selectedEmployee = employee && employee.id ? employee : null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.jobs$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Initialize UI permissions
     */
    initializeUiPermissions() {
      // Load permissions
      const permissions = this._store.userRolePermissions.map(({
        permission
      }) => permission);
      this._ngxPermissionsService.flushPermissions(); // Flush permissions
      this._ngxPermissionsService.loadPermissions(permissions); // Load permissions
    }
    /**
     * Initialize UI languages and Update Locale
     */
    initializeUiLanguagesAndLocale() {
      // Observable that emits when preferred language changes.
      const preferredLanguage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .merge */ .h)(this._store.preferredLanguage$, this._i18nService.preferredLanguage$).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(lang => !!lang), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(lang => {
        this.translateService.use(lang);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this));
      // Subscribe to initiate the stream
      preferredLanguage$.subscribe();
    }
    /**
     * Retrieves the default proposal template for the specified employee and organization.
     * @param {IJobMatchings} job - The job matching object containing employeeId.
     * @returns {Promise<any>} A promise resolving to the default proposal template or null if not found.
     */
    getEmployeeDefaultProposalTemplate(job) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        // Check if organization context is available
        if (!_this2.organization) {
          return null;
        }
        // Extract necessary IDs
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const {
          employeeId
        } = job;
        // Retrieve proposal templates matching criteria
        const {
          items = []
        } = yield _this2._proposalTemplateService.getAll({
          where: {
            tenantId,
            organizationId,
            employeeId,
            isDefault: true
          }
        });
        // Return the first matching default template or null if not found
        return items.length > 0 ? items[0] : null;
      })();
    }
    /**
     * Copies the given text to the clipboard.
     * @param {string} text - The text to be copied to the clipboard.
     * @returns {Promise<void>} A promise that resolves when the text is copied.
     */
    copyTextToClipboard(text) {
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        if (!navigator.clipboard) {
          // Fallback method for older browsers that do not support navigator.clipboard API
          const textArea = document.createElement('textarea');
          textArea.value = text;
          // Avoid scrolling to bottom
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0'; // Make textarea invisible
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try {
            const successful = document.execCommand('copy');
            if (!successful) {
              throw new Error('Fallback: Copy command was unsuccessful');
            }
            console.log('Fallback: Copying text command was successful');
          } catch (error) {
            console.error('Fallback: Oops, unable to copy', error);
            throw new Error(`Fallback: Copy command was unsuccessful: ${error?.message}`);
          } finally {
            document.body.removeChild(textArea); // Clean up
          }
        } else {
          // Modern method using navigator.clipboard API
          try {
            yield navigator.clipboard.writeText(text);
            console.log('Async: Copying to clipboard was successful!');
          } catch (error) {
            console.error('Async: Could not copy text: ', error);
            throw new Error(`Async: Could not copy text: ${error?.message}`);
          }
        }
      })();
    }
    /**
     * Sets the auto refresh behavior based on the provided value.
     * @param {boolean} value - If true, enables auto refresh; if false, disables it.
     */
    setAutoRefresh(value) {
      if (value) {
        // Enable auto refresh
        this.autoRefreshTimer = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .timer */ .O)(0, 60000) // Timer starts immediately and fires every 60 seconds
        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.refresh()),
        // Perform the refresh action on each timer tick
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this) // Automatically unsubscribe when component is destroyed
        ).subscribe();
      } else {
        // Disable auto refresh
        if (this.autoRefreshTimer instanceof rxjs__WEBPACK_IMPORTED_MODULE_17__/* .Subscription */ .yU) {
          this.autoRefreshTimer.unsubscribe(); // Unsubscribe from the timer observable
          this.autoRefreshTimer = null; // Clear the timer reference
        }
      }
    }
    /**
     * Handles custom events related to job actions such as viewing, applying, and hiding jobs.
     * @param $event The custom event containing action and data payload.
     */
    onCustomEvents($event) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        switch ($event.action) {
          case 'view':
            if ($event.data.jobPost) {
              window.open($event.data.jobPost.url, '_blank');
            }
            break;
          case 'apply':
            // Define the applyRequest object
            const applyRequest = {
              applied: true,
              employeeId: $event.data.employeeId,
              providerCode: $event.data.providerCode,
              providerJobId: $event.data.providerJobId
            };
            try {
              // Await the applyJob function call
              const resp = yield _this3._jobService.applyJob(applyRequest);
              // Show success message and refresh smart table
              _this3._toastrService.success('TOASTR.MESSAGE.JOB_APPLIED');
              _this3.smartTableSource.refresh();
              // Check if a redirect is required
              if (resp.isRedirectRequired) {
                // Fetch the proposal template
                const proposalTemplate = yield _this3.getEmployeeDefaultProposalTemplate($event.data);
                if (proposalTemplate) {
                  // Copy proposal content to clipboard
                  yield _this3.copyTextToClipboard(proposalTemplate.content);
                }
                // Open a new window with job post URL
                window.open($event.data.jobPost.url, '_blank');
              }
            } catch (error) {
              console.error('Error while applying job:', error);
              // Optionally show an error message or handle the error scenario
              _this3._errorHandlingService.handleError(error);
            }
            break;
          case 'hide':
            try {
              yield _this3.hideJobPost({
                hide: true,
                employeeId: $event.data.employeeId,
                providerCode: $event.data.providerCode,
                providerJobId: $event.data.providerJobId
              });
              _this3._toastrService.success('TOASTR.MESSAGE.JOB_HIDDEN');
              _this3.smartTableSource.refresh();
            } catch (error) {
              console.log('Error while hide job', error);
              // Optionally show an error message or handle the error scenario
              _this3._errorHandlingService.handleError(error);
            }
            break;
          default:
            break;
        }
      })();
    }
    /**
     * On select job search Row
     *
     * @param param0
     */
    onSelectJob({
      isSelected,
      data
    }) {
      this.disableButton = !isSelected;
      this.selectedJob = isSelected ? data : null;
    }
    /**
     * Opens the job post URL in a new tab if a job is selected and has a valid URL.
     */
    viewJob() {
      if (!this.selectedJob) {
        return;
      }
      if (this.selectedJob.jobPost && this.selectedJob.jobPost.url) {
        window.open(this.selectedJob.jobPost.url, '_blank');
      }
    }
    /**
     * Updates job visibility by hiding the selected job post.
     * Displays success message on job hidden and refreshes the smart table source.
     */
    hideJob() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        // Check if a job is selected
        if (!_this4.selectedJob) {
          return;
        }
        try {
          // Destructure selected job properties
          const {
            employeeId,
            providerCode,
            providerJobId
          } = _this4.selectedJob;
          // Call service method to hide the job post
          yield _this4.hideJobPost({
            hide: true,
            employeeId,
            providerCode,
            providerJobId
          });
          // Display success message using toastr service
          _this4._toastrService.success('TOASTR.MESSAGE.JOB_HIDDEN');
          // Refresh the smart table source
          _this4.smartTableSource.refresh();
          // Clear selection of the job post
          _this4.onSelectJob({
            isSelected: false,
            data: null
          });
        } catch (error) {
          // Log and handle any errors that occur during hiding the job post
          console.error('Error while hiding job', error);
          _this4._toastrService.error('TOASTR.MESSAGE.ERROR_HIDING_JOB');
        }
      })();
    }
    /**
     * Updates job visibility by hiding the job post based on the provided input.
     *
     * @param input The input data containing employee ID, provider code, and provider job ID.
     */
    hideJobPost(input) {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        try {
          const {
            employeeId,
            providerCode,
            providerJobId
          } = input;
          // Check if provider code and provider job ID are provided
          if (providerCode && providerJobId) {
            // Prepare payload for hiding job post
            const payload = {
              hide: true,
              employeeId,
              providerCode,
              providerJobId
            };
            // Call job service method to hide the job post
            yield _this5._jobService.hideJob(payload);
          }
        } catch (error) {
          // Log and handle any errors that occur during hiding the job post
          console.error('Error while hiding job', error);
        }
      })();
    }
    /**
     * Marks the selected job as already applied on the provider site.
     * Updates job application status and refreshes the smart table source.
     */
    appliedJob() {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        // Check if a job is selected
        if (!_this6.selectedJob) {
          return;
        }
        try {
          // Destructure selected job properties
          const {
            employeeId,
            providerCode,
            providerJobId
          } = _this6.selectedJob;
          // Call job service method to update job application status
          yield _this6._jobService.updateApplied({
            employeeId,
            providerCode,
            providerJobId,
            applied: true
          });
          // Display success message using toastr service
          _this6._toastrService.success('TOASTR.MESSAGE.JOB_APPLIED');
          // Refresh the smart table source
          _this6.smartTableSource.refresh();
        } catch (error) {
          // Log and handle any errors that occur during updating job application status
          console.error('Error while marking job as applied', error);
          _this6._toastrService.error('TOASTR.MESSAGE.ERROR_APPLYING_JOB');
        }
      })();
    }
    /**
     * Apply for a job post using the provided job application details.
     *
     * @param applyJobPost The job application details.
     */
    applyToJob(applyJobPost) {
      var _this7 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        // Check if a job is selected
        if (!_this7.selectedJob) {
          return;
        }
        try {
          // Apply for the job using job service method
          const appliedJob = yield _this7._jobService.applyJob(applyJobPost);
          // Display success message using toastr service
          _this7._toastrService.success('TOASTR.MESSAGE.JOB_APPLIED');
          // Remove the selected row from the table after applying
          const row = document.querySelector('angular2-smart-table > table > tbody > .angular2-smart-row.selected');
          if (row) {
            row.remove();
            _this7.onSelectJob({
              isSelected: false,
              data: null
            });
          }
          // Handle redirection and proposal copying if required
          if (appliedJob.isRedirectRequired) {
            // Copy proposal to clipboard if generated, else use default proposal template
            if (appliedJob.proposal) {
              yield _this7.copyTextToClipboard(appliedJob.proposal);
            } else {
              const proposalTemplate = yield _this7.getEmployeeDefaultProposalTemplate(_this7.selectedJob);
              if (proposalTemplate) {
                yield _this7.copyTextToClipboard(proposalTemplate.content);
              }
            }
            // Open job post URL in a new tab
            window.open(_this7.selectedJob.jobPost.url, '_blank');
          }
        } catch (error) {
          // Log and handle any errors that occur during job application
          console.error('Error while applying job post', error);
          _this7._toastrService.error('TOASTR.MESSAGE.ERROR_APPLYING_JOB');
        }
      })();
    }
    /**
     * Apply for a job automatically using the selected job details.
     */
    applyToJobAutomatically() {
      var _this8 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        // Check if a job is selected
        if (!_this8.selectedJob) {
          return;
        }
        try {
          // Prepare job application details
          const {
            providerCode,
            providerJobId,
            employeeId
          } = _this8.selectedJob;
          const applyJobPost = {
            applied: true,
            // Choose employeeId based on whether selectedEmployee is defined
            ...(_this8.selectedEmployee?.id ? {
              employeeId: _this8.selectedEmployee.id
            } : {
              employeeId
            }),
            providerCode,
            providerJobId
          };
          // Apply for the job using applyToJob method
          yield _this8.applyToJob(applyJobPost);
        } catch (error) {
          // Log and handle any errors that occur during automatic job application
          console.error('Error while applying job post automatically', error);
        }
      })();
    }
    /**
     * Apply for a job manually using a dialog component.
     */
    applyToJobManually() {
      var _this9 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        // Check if a job is selected
        if (!_this9.selectedJob) {
          return;
        }
        // Open a dialog to handle manual job application
        const dialog = _this9._dialogService.open(_apply_job_manually_apply_job_manually_component__WEBPACK_IMPORTED_MODULE_18__/* .ApplyJobManuallyComponent */ .M, {
          context: {
            employeeJobPost: _this9.selectedJob,
            selectedEmployee: _this9.selectedEmployee
          },
          hasScroll: false
        });
        try {
          // Wait for dialog result
          const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ ._)(dialog.onClose);
          // Process job application if result is available
          if (result) {
            const {
              providerCode,
              providerJobId
            } = _this9.selectedJob;
            const {
              applied,
              employeeId,
              proposal,
              rate,
              details,
              attachments
            } = result;
            // Prepare job application details
            const applyJobPost = {
              applied,
              employeeId,
              proposal,
              rate,
              details,
              attachments,
              providerCode,
              providerJobId
            };
            // Apply for the job using applyToJob method
            yield _this9.applyToJob(applyJobPost);
          }
        } catch (error) {
          // Log and handle any errors that occur during manual job application
          console.error('Error while applying job post manually', error);
        }
      })();
    }
    /**
     * Loads smart table settings.
     */
    _loadSmartTableSettings() {
      const self = this;
      const pagination = this.getPagination();
      this.settingsSmartTable = {
        ...this.settingsSmartTable,
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        columns: {
          ...(this.selectedEmployee?.id ? {} : {
            employee: {
              title: this.getTranslation('JOBS.EMPLOYEE'),
              isFilterable: false,
              width: '15%',
              type: 'custom',
              isSortable: false,
              renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .EmployeeLinksComponent */ .z,
              componentInitFunction: (instance, cell) => {
                // Get row data
                const employee = cell.getRawValue();
                instance.rowData = cell.getRow().getData();
                // Set value
                instance.value = {
                  name: employee?.user?.name ?? null,
                  imageUrl: employee?.user?.imageUrl ?? null,
                  id: employee?.id ?? null
                };
              }
            }
          }),
          jobDetails: {
            title: this.getTranslation('JOBS.JOB_DETAILS'),
            width: '85%',
            type: 'custom',
            isFilterable: false,
            isSortable: false,
            renderComponent: _job_title_description_details_job_title_description_details_component__WEBPACK_IMPORTED_MODULE_21__/* .JobTitleDescriptionDetailsComponent */ .h,
            componentInitFunction(instance, cell) {
              // Get row data
              instance.rowData = cell.getRow().getData();
              // Hide job event
              instance.hideJobEvent.subscribe(event => {
                self.onCustomEvents({
                  action: 'hide',
                  data: event
                });
              });
            }
          }
        }
      };
    }
    /*
     * Register Smart Table Source Config
     */
    setSmartTableSource() {
      if (!this.organization) {
        return;
      }
      try {
        /**
         * Initiate smart table source configuration
         */
        this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ServerDataSource */ .N(this._http, {
          endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_23__/* .API_PREFIX */ .m4}/employee-job`,
          pagerPageKey: 'page',
          pagerLimitKey: 'limit',
          finalize: () => {
            this.setPagination({
              ...this.getPagination(),
              totalItems: this.smartTableSource.count()
            });
            this.loading = false;
          }
        });
      } catch (error) {
        console.log('Error while retrieving employee Job searches', error);
        this._errorHandlingService.handleError(error);
      }
    }
    /**
     * Retrieves employee jobs based on various filters and sets the smart table data source.
     * @returns Promise<void>
     */
    getEmployeeJobs() {
      var _this0 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        if (!_this0.organization) {
          return;
        }
        try {
          _this0.setSmartTableSource();
        } catch (error) {
          console.log('Error while set smart table source configuration', error);
        }
        try {
          const {
            activePage,
            itemsPerPage
          } = _this0.getPagination();
          const {
            title,
            jobSource,
            jobType,
            jobStatus,
            budget
          } = _this0.form.value;
          const {
            startDate,
            endDate
          } = (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .getAdjustDateRangeFutureAllowed */ .Yi)(_this0.selectedDateRange);
          const {
            id: organizationId,
            tenantId
          } = _this0.organization;
          /**
           * Set header selectors filters configuration
           */
          _this0.smartTableSource.setFilter([...((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .isNotEmpty */ .hj)(organizationId) ? [{
            field: 'organizationId',
            search: organizationId
          }, {
            field: 'tenantId',
            search: tenantId
          }] : []), ...((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .isNotEmpty */ .hj)(_this0.selectedEmployee?.id) ? [{
            field: 'employeeIds',
            search: [_this0.selectedEmployee?.id]
          }] : []), ...(startDate && endDate ? [{
            field: 'jobDateCreated',
            search: {
              between: {
                lower: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .toUTC */ .q5)(startDate).format('YYYY-MM-DD HH:mm:ss'),
                upper: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .toUTC */ .q5)(endDate).format('YYYY-MM-DD HH:mm:ss')
              }
            }
          }] : []), ...(title ? [{
            field: 'title',
            search: title
          }] : []), ...(jobSource ? [{
            field: 'jobSource',
            search: jobSource
          }] : []), ...(jobType ? [{
            field: 'jobType',
            search: jobType
          }] : []), ...(jobStatus ? [{
            field: 'jobStatus',
            search: jobStatus
          }] : []), ...(budget ? [{
            field: 'budget',
            search: budget
          }] : []),
          // Get only fresh jobs (not applied yet)
          ...( true ? [{
            field: 'isApplied',
            search: 'false'
          }] : 0)], false);
          /**
           * Set smart table sorting filters configuration
           */
          _this0.smartTableSource.setSort([{
            field: 'status',
            direction: 'asc'
          }], false);
          /**
           * Applied smart table pagination configuration
           */
          _this0.smartTableSource.setPaging(activePage, itemsPerPage, false);
        } catch (error) {
          _this0._toastrService.danger(error);
        }
      })();
    }
    /*
     * Hide all jobs
     */
    hideAll() {
      var _this1 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        const request = {
          hide: true,
          ...((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .isNotEmpty */ .hj)(_this1.selectedEmployee) ? {
            employeeId: _this1.selectedEmployee.id
          } : {})
        };
        try {
          yield _this1._jobService.hideJob(request);
          _this1._toastrService.success('TOASTR.MESSAGE.JOB_HIDDEN');
          _this1.smartTableSource.refresh();
        } catch (error) {
          console.log('Error while hiding jobs:', error);
          // Handle and log errors using an error handling service
          _this1._errorHandlingService.handleError(error);
        }
      })();
    }
    _applyTranslationOnSmartTable() {
      this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Handles tab change event.
     * Resets the form and updates the active tab ID.
     * @param tab The tab component that triggered the change.
     */
    onTabChange(tab) {
      this.form.reset();
      this.nbTab$.next(tab.tabId);
    }
    /**
     * Initiates a job search based on form validity.
     * Emits a signal to start fetching jobs if the form is valid.
     */
    searchJobs() {
      if (this.form.invalid) {
        return;
      }
      this.jobs$.next(true);
    }
    /**
     * Handles form submission on Enter key press.
     * Initiates a job search.
     */
    handleSubmitOnEnter() {
      this.searchJobs();
    }
    /**
     * Resets the form, clears filters, and refreshes the job list.
     */
    reset() {
      this.form.reset();
      this._filters = {};
      this.refresh();
    }
    /**
     * Initiates a refresh of job list with updated parameters.
     * Resets pagination, triggers job fetch, and scrolls to top of page.
     */
    refresh() {
      this.isRefresh = true;
      this.refreshPagination();
      this.scrollTop();
      this.jobs$.next(true);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function JobSearchComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_27__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_28__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_28__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .ProposalTemplateService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .JobService */ .L), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(ngx_permissions__WEBPACK_IMPORTED_MODULE_36__/* .NgxPermissionsService */ .$R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_37__/* .I18nService */ .W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: JobSearchComponent,
        selectors: [["ga-job-search"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 94,
        vars: 89,
        consts: [["tableLayout", ""], ["actionButtons", ""], ["visibleButton", ""], ["sync", ""], [1, "header", "d-flex", "justify-content-between", "align-items-center", "p-3"], [3, "ngxPermissionsOnly"], [1, "p-0"], [1, "gauzy-button-container"], [3, "isDisable", "buttonTemplateVisible", "buttonTemplate", "hasLayoutSelector"], [1, "d-flex", "align-items-center"], ["status", "basic", "outline", "", "size", "small", 1, "mr-3", "ml-3", 3, "checkedChange", "ngModelChange", "ngModel"], [4, "ngIf"], ["type", "button", "nbButton", "", "status", "basic", "outline", "", "size", "small", "class", "refresh-button", 3, "click", 4, "ngIf"], [1, "mt-4", 3, "changeTab"], [3, "tabId", "tabTitle"], [1, "job-filters"], [1, "advanced-filter"], [1, "body-filter"], [3, "ngSubmit", "keydown.enter", "formGroup"], [1, "row"], [1, "col-xl-6", "col-md-8", "col-12", "form-group", "m-0"], ["nbInput", "", "type", "text", "formControlName", "title", 1, "w-100", 3, "placeholder"], [1, "row", "selects", "mt-3"], [1, "col-xl-2", "col-lg-3", "col-md-6", "form-group"], ["for", "jobSource", 1, "d-block"], ["id", "jobSource", "fullWidth", "", "multiple", "", "formControlName", "jobSource", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "jobType", 1, "d-block"], ["id", "jobType", "fullWidth", "", "multiple", "", "formControlName", "jobType", 3, "placeholder"], ["for", "jobStatus", 1, "d-block"], ["id", "jobStatus", "fullWidth", "", "formControlName", "jobStatus", 3, "placeholder", "multiple"], ["for", "budget", 1, "d-block"], ["id", "budget", "fullWidth", "", "multiple", "", "formControlName", "budget", 3, "placeholder"], [3, "value"], ["type", "submit", "size", "small", "status", "success", "nbButton", "", 1, "mr-3", "ml-3", 3, "disabled"], ["type", "reset", "nbButton", "", "size", "small", "status", "basic", "outline", "", 3, "click", "disabled"], ["status", "primary", "size", "small", "outline", "", "nbButton", "", 1, "action", 3, "routerLink"], [4, "ngTemplateOutlet"], ["type", "button", "nbButton", "", "status", "basic", "outline", "", "size", "small", 1, "refresh-button", 3, "click"], [3, "ngTemplateOutlet"], [3, "ngxPermissionsExcept"], [1, "table-scroll-container"], [3, "ngIf"], [1, "pagination-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [3, "source"], [1, "btn-group", "actions"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "secondary", 3, "click"], ["icon", "eye-outline", "pack", "eva"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "success", 2, "cursor", "pointer", 3, "click"], ["icon", "checkmark-outline", "pack", "eva"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "primary", 2, "cursor", "pointer", 3, "click"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "warning", 2, "cursor", "pointer", 3, "click", "nbTooltip"], ["icon", "eye-off-outline", "pack", "eva"], ["size", "small", "status", "basic", "type", "button", "ngxConfirmDialog", "", "nbButton", "", 1, "action", "warning", 3, "confirm", "message", "yesText", "noText"], ["icon", "eye-off-outline"], [1, "sync-container"], ["icon", "sync-outline", "size", "small", 1, "sync", 3, "ngClass"]],
        template: function JobSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 4)(2, "h4")(3, "ngx-header-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, JobSearchComponent_ng_template_7_Template, 3, 4, "ng-template", 5)(8, JobSearchComponent_ng_template_8_Template, 3, 4, "ng-template", 5)(9, JobSearchComponent_ng_template_9_Template, 3, 4, "ng-template", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-body", 6)(11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "ngx-gauzy-button-action", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 9)(14, "nb-toggle", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function JobSearchComponent_Template_nb_toggle_checkedChange_14_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.setAutoRefresh($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function JobSearchComponent_Template_nb_toggle_ngModelChange_14_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.autoRefresh, $event) || (ctx.autoRefresh = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(17, JobSearchComponent_ng_container_17_Template, 2, 1, "ng-container", 11)(18, JobSearchComponent_button_18_Template, 4, 4, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "nb-tabset", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("changeTab", function JobSearchComponent_Template_nb_tabset_changeTab_19_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onTabChange($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "nb-tab", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(22, JobSearchComponent_ng_container_22_Template, 2, 1, "ng-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(24, "nb-tab", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "div", 15)(27, "div", 16)(28, "nb-card")(29, "nb-card-body", 17)(30, "form", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function JobSearchComponent_Template_form_ngSubmit_30_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.searchJobs());
            })("keydown.enter", function JobSearchComponent_Template_form_keydown_enter_30_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.handleSubmitOnEnter());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "div", 19)(32, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(33, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(35, "div", 22)(36, "div", 23)(37, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(40, "nb-select", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(42, JobSearchComponent_nb_option_42_Template, 4, 6, "nb-option", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(43, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(44, "div", 23)(45, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(48, "nb-select", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(50, JobSearchComponent_nb_option_50_Template, 4, 6, "nb-option", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(51, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(52, "div", 23)(53, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(56, "nb-select", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(58, JobSearchComponent_nb_option_58_Template, 4, 6, "nb-option", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(59, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(60, "div", 23)(61, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(63, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(64, "nb-select", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(66, "nb-option", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(69, "nb-option", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(70, " $100 - $500 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(71, "nb-option", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(72, " $500 - $1K ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(73, "nb-option", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(74, " $1K - $5K ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(75, "nb-option", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(76, " $5K+ ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(77, "div", 19)(78, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(80, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(81, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function JobSearchComponent_Template_button_click_81_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.reset());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(83, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(84, JobSearchComponent_ng_container_84_Template, 2, 1, "ng-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(85, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(86, JobSearchComponent_ng_template_86_Template, 2, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(88, JobSearchComponent_ng_template_88_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(90, JobSearchComponent_ng_template_90_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(92, JobSearchComponent_ng_template_92_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const actionButtons_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(89);
            const visibleButton_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 42, "JOBS.JOB_SEARCH"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx.PermissionsEnum.ORG_JOB_EMPLOYEE_VIEW);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx.PermissionsEnum.ORG_JOB_MATCHING_VIEW);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx.PermissionsEnum.ORG_PROPOSAL_TEMPLATES_VIEW);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isDisable", ctx.disableButton)("buttonTemplateVisible", visibleButton_r15)("buttonTemplate", actionButtons_r14)("hasLayoutSelector", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.autoRefresh);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 44, "BUTTONS.AUTO_REFRESH"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.autoRefresh);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.autoRefresh);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabId", ctx.JobSearchTabsEnum.ACTIONS)("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(21, 46, "JOBS.BROWSE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 48, ctx.nbTab$) === ctx.JobSearchTabsEnum.ACTIONS);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabId", ctx.JobSearchTabsEnum.SEARCH)("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 50, "JOBS.SEARCH"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 52, "JOBS.JOB_SEARCH"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(39, 54, "JOBS.FILTER.SOURCE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(41, 56, "JOBS.FILTER.SOURCE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(43, 58, ctx.JobPostSourceEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(47, 60, "JOBS.FILTER.JOB_TYPE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(49, 62, "JOBS.FILTER.JOB_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(51, 64, ctx.JobPostTypeEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(55, 66, "JOBS.FILTER.JOB_STATUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(57, 68, "JOBS.FILTER.JOB_STATUS"))("multiple", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(59, 70, ctx.JobPostStatusEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(63, 72, "JOBS.FILTER.BUDGET"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(65, 74, "JOBS.FILTER.BUDGET"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(84, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(68, 76, "JOBS.FILTER.LESS_THAN"), " $100 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(85, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(86, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(87, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(88, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(80, 78, "BUTTONS.SEARCH"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(83, 80, "BUTTONS.RESET"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(85, 82, ctx.nbTab$) === ctx.JobSearchTabsEnum.SEARCH);
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_38__/* .RouterLink */ .Wk, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbTabsetComponent */ .Hsi, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbTabComponent */ .d3K, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbTooltipDirective */ .BmQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbToggleComponent */ .YF2, ngx_permissions__WEBPACK_IMPORTED_MODULE_36__/* .NgxPermissionsDirective */ .f6, angular2_smart_table__WEBPACK_IMPORTED_MODULE_39__/* .Angular2SmartTableComponent */ .T9, _ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_40__/* .GauzyButtonActionComponent */ .A, _ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_41__/* .PaginationV2Component */ .a, _ui_core_shared_src_lib_dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_42__/* .ConfirmDirective */ .o, _angular_common__WEBPACK_IMPORTED_MODULE_43__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_43__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_43__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_43__/* .NgTemplateOutlet */ .T3, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .NgModel */ .vS, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .FormControlName */ .JD, _ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_44__/* .HeaderTitleComponent */ .X, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_43__/* .AsyncPipe */ .Jj, _angular_common__WEBPACK_IMPORTED_MODULE_43__/* .LowerCasePipe */ .GH, _angular_common__WEBPACK_IMPORTED_MODULE_43__/* .KeyValuePipe */ .lG],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   nb-select[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  max-width: none;\n}\n[_nghost-%COMP%]     .toggle-label {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 3px 9px 3px 3px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: fit-content;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .image-container {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .image-container img[type=user] {\n  height: 18px;\n  width: 18px;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .link-text {\n  color: var(--text-primary-color);\n  font-weight: normal;\n}\n[_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 2.5rem);\n  overflow: unset;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   .job-filters[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   .job-filters[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset !important;\n}\n[_nghost-%COMP%]   nb-card-body.body-filter[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n[_nghost-%COMP%]     .advanced-filter nb-select.shape-rectangle .select-button {\n  border-radius: var(--button-rectangle-border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     .advanced-filter nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     .advanced-filter nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]     .table-scroll-container {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]     .table-scroll-container angular2-smart-table table tr td {\n  vertical-align: top !important;\n}\n\n.sync-container[_ngcontent-%COMP%]   .sync[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  cursor: pointer;\n  margin: 0 !important;\n}\n.sync-container[_ngcontent-%COMP%]   .sync.spin[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  animation: _ngcontent-%COMP%_rotate 1s linear 0s infinite;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.sync-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n\n.refresh-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n[_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n\n.advanced-filter[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n\n.job-filters[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.job-filters[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n}\n.job-filters[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n.job-filters[_ngcontent-%COMP%]     input, \n.job-filters[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n.job-filters[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n.job-filters[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n.job-filters[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.job-filters[_ngcontent-%COMP%]     label, \n.job-filters[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.job-filters[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n.job-filters[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n.job-filters[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     input, \n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-4) !important;\n  border: none;\n  height: 2rem !important;\n}\n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     label, \n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-4) !important;\n  border: none;\n}\n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n.job-filters[_ngcontent-%COMP%]   .selects[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n\nnb-tabset[_ngcontent-%COMP%]   nb-tab[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]:nth-child(1) {\n  padding-right: 0;\n  --scrollbar-width: 0;\n}\nnb-tabset[_ngcontent-%COMP%]   nb-tab[_ngcontent-%COMP%]:nth-child(3) {\n  overflow-y: scroll;\n}\nnb-tabset[_ngcontent-%COMP%]   nb-tab[_ngcontent-%COMP%]:nth-child(3)   div[_ngcontent-%COMP%]:nth-child(1) {\n  margin-right: 0 !important;\n}\nnb-tabset[_ngcontent-%COMP%]   nb-tab[_ngcontent-%COMP%]:nth-child(3)   div[_ngcontent-%COMP%]:nth-child(2) {\n  padding-right: 0;\n  --scrollbar-width: 0;\n  min-height: 80%;\n}"]
      });
    }
  };
  return JobSearchComponent;
})();
JobSearchComponent = JobSearchComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_45__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_45__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__/* .TranslateService */ .c$, _angular_forms__WEBPACK_IMPORTED_MODULE_26__/* .UntypedFormBuilder */ .ze, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__/* .HttpClient */ .Qq, _angular_router__WEBPACK_IMPORTED_MODULE_28__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_28__/* .Router */ .Ix, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .ProposalTemplateService */ .K, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .JobService */ .L, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__/* .DateRangePickerBuilderService */ .i7, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__/* .ErrorHandlingService */ .X, ngx_permissions__WEBPACK_IMPORTED_MODULE_36__/* .NgxPermissionsService */ .$R, _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_37__/* .I18nService */ .W])], JobSearchComponent);


/***/ }),

/***/ 18359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62971);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83039);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 18398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80429);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58246);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46359);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45194);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43757);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47426);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63535);







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

/***/ 20244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56042);

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

/***/ 20384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13166);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31326);


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

/***/ 20809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89428);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74716);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79644);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98167);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47603);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50951);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18026);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26745);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37402);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1014);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90215);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47492);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52954);













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

/***/ 21334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ JobStatusComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89285);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _ui_core_shared_src_lib_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90475);






let JobStatusComponent = /*#__PURE__*/(() => {
  class JobStatusComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
    }
    /**
     * Get job status text and class
     *
     * @param status
     */
    getJobStatus(status) {
      let badgeClass, badgeText;
      switch (status.toLowerCase()) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .JobPostStatusEnum */ .Zc.CLOSED.toLowerCase():
          badgeClass = 'danger';
          badgeText = this.getTranslation('JOBS.CLOSED');
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .JobPostStatusEnum */ .Zc.OPEN.toLowerCase():
          badgeClass = 'success';
          badgeText = this.getTranslation('JOBS.OPEN');
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .JobPostStatusEnum */ .Zc.APPLIED.toLowerCase():
          badgeClass = 'primary';
          badgeText = this.getTranslation('JOBS.APPLIED');
          break;
        default:
          badgeClass = 'default';
          badgeText = status;
          break;
      }
      return {
        text: badgeText,
        class: badgeClass
      };
    }
    static {
      this.ɵfac = function JobStatusComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: JobStatusComponent,
        selectors: [["job-status"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵProvidersFeature"] */ .Jv_([]), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 2,
        vars: 1,
        consts: [[3, "value"]],
        template: function JobStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "ga-status-badge", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("value", ctx.getJobStatus(ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.jobStatus));
          }
        },
        dependencies: [_ui_core_shared_src_lib_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_4__/* .StatusBadgeComponent */ .v],
        styles: ["[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: fit-content;\n}"]
      });
    }
  }
  return JobStatusComponent;
})();

/***/ }),

/***/ 21379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3209);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70305);


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

/***/ 21460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69112);

const UnsubscriptionError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 22234:
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

/***/ 23497:
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

/***/ 24157:
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

/***/ 24441:
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

/***/ 24718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ms: () => (/* binding */ SafeSubscriber),
/* harmony export */   vU: () => (/* binding */ Subscriber)
/* harmony export */ });
/* unused harmony export EMPTY_OBSERVER */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63823);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52081);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22234);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37598);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60407);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86157);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2270);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93058);








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

/***/ 25447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 25617:
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

/***/ 25644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92838);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25617);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43584);



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

/***/ 25646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66468);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81038);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77804);



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

/***/ 26667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45767);

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

/***/ 26694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47426);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ 26745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ 27608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}
//# sourceMappingURL=createObject.js.map

/***/ }),

/***/ 29576:
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

/***/ 30072:
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

/***/ 30295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66765);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52910);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83039);



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

/***/ 30487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58246);

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

/***/ 30548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ readableStreamLikeToAsyncGenerator),
/* harmony export */   U: () => (/* binding */ isReadableStreamLike)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86344);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48479);


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

/***/ 31095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ combineLatest)
/* harmony export */ });
/* unused harmony export combineLatestInit */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18398);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29576);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52989);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67800);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60155);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7115);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91269);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83039);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52910);









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

/***/ 31326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ms: () => (/* binding */ SafeSubscriber),
/* harmony export */   vU: () => (/* binding */ Subscriber)
/* harmony export */ });
/* unused harmony export EMPTY_OBSERVER */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48479);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76033);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33546);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15630);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25447);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24157);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58894);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81362);








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

/***/ 31508:
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

/***/ 32711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3209);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52273);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48479);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70305);




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

/***/ 33116:
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

/***/ 33381:
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

/***/ 33546:
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

/***/ 33764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92441);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2134);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__/* .scheduled */ .c)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(input);
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ 33793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* unused harmony export async */
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5499);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56040);


const asyncScheduler = /*#__PURE__*/new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = (/* unused pure expression or super */ null && (asyncScheduler));
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 33819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createJobSearchRoutes)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98035);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16283);
/* harmony import */ var _components_job_search_job_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18302);



/**
 * Creates jobs browse routes for the application
 *
 * @param _pageRouteRegistryService An instance of PageRouteRegistryService
 * @returns An array of Route objects
 */
const createJobSearchRoutes = _pageRouteRegistryService => [{
  path: '',
  component: _components_job_search_job_search_component__WEBPACK_IMPORTED_MODULE_0__/* .JobSearchComponent */ .j,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ORG_JOB_SEARCH],
      redirectTo: '/pages/jobs/search'
    },
    integration: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .IntegrationEnum */ .I5.GAUZY_AI,
    relations: ['integration', 'entitySettings']
  },
  resolve: {
    integration: _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .IntegrationResolver */ .J
  }
}];

/***/ }),

/***/ 37402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63823);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__/* .iterator */ .l]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ 37598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22234);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2270);


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

/***/ 38380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87818);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2134);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91454);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72476);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48479);





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

/***/ 39407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60345);

const EMPTY = /*#__PURE__*/new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 39644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93402);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92838);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88782);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25644);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63823);





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

/***/ 41250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ JobEmployeeComponent)
/* harmony export */ });
/* unused harmony export JobSearchTabsEnum */
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(86052);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14572);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(45715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56042);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20244);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79618);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99968);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18244);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80872);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19223);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(95692);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(28634);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(22550);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(82465);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91439);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19774);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12109);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34362);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77485);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(49072);
/* harmony import */ var _ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(67063);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(52345);
/* harmony import */ var _ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(45293);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(3456);
/* harmony import */ var _ui_core_shared_src_lib_components_dynamic_tabs_dynamic_tabs_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(90628);































const _c0 = ["tableLayout"];
const _c1 = ["comingSoon"];
const _c2 = () => ["ORG_JOB_EMPLOYEE_VIEW"];
const _c3 = () => ({
  display: "flex",
  "flex-direction": "column",
  "align-items": "center",
  margin: "100px 0px"
});
const _c4 = () => ({
  "font-size": "50px",
  color: "#cacaca"
});
const _c5 = () => ["ORG_JOB_EMPLOYEE_VIEW", "ORG_EMPLOYEES_EDIT"];
function JobEmployeeComponent_ng_template_10_ng_template_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function JobEmployeeComponent_ng_template_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 13)(1, "angular2-smart-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("editConfirm", function JobEmployeeComponent_ng_template_10_ng_template_0_Template_angular2_smart_table_editConfirm_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEditConfirm($event));
    })("editCancel", function JobEmployeeComponent_ng_template_10_ng_template_0_Template_angular2_smart_table_editCancel_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEditCancel($event));
    })("userRowSelect", function JobEmployeeComponent_ng_template_10_ng_template_0_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onSelectEmployee($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, JobEmployeeComponent_ng_template_10_ng_template_0_ng_container_3_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function JobEmployeeComponent_ng_template_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div");
  }
}
function JobEmployeeComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, JobEmployeeComponent_ng_template_10_ng_template_0_Template, 4, 3, "ng-template", 11)(1, JobEmployeeComponent_ng_template_10_ng_template_1_Template, 1, 0, "ng-template", 12);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsExcept", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(3, _c2));
  }
}
function JobEmployeeComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleMap"] */ .Aen(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(7, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleMap"] */ .Aen(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(8, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "COMING_SOON"));
  }
}
function JobEmployeeComponent_ng_template_14_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.VIEW"), " ");
  }
}
function JobEmployeeComponent_ng_template_14_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function JobEmployeeComponent_ng_template_14_ng_template_0_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const selectedItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.edit(selectedItem_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.EDIT"));
  }
}
function JobEmployeeComponent_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, JobEmployeeComponent_ng_template_14_ng_template_0_ng_template_1_Template, 5, 3, "ng-template", 20)(2, JobEmployeeComponent_ng_template_14_ng_template_0_ng_template_2_Template, 5, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function JobEmployeeComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, JobEmployeeComponent_ng_template_14_ng_template_0_Template, 3, 0, "ng-template", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(1, _c5));
  }
}
function JobEmployeeComponent_ng_template_16_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function JobEmployeeComponent_ng_template_16_ng_template_0_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.addNew($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function JobEmployeeComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, JobEmployeeComponent_ng_template_16_ng_template_0_Template, 4, 3, "ng-template", 21);
  }
}
/**
 * Job Employee Component
 */
var JobSearchTabsEnum = /*#__PURE__*/function (JobSearchTabsEnum) {
  JobSearchTabsEnum["BROWSE"] = "BROWSE";
  JobSearchTabsEnum["SEARCH"] = "SEARCH";
  JobSearchTabsEnum["HISTORY"] = "HISTORY";
  return JobSearchTabsEnum;
}(JobSearchTabsEnum || {});
let JobEmployeeComponent = /*#__PURE__*/(() => {
  let JobEmployeeComponent = class JobEmployeeComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
    constructor(translateService, _http, _route, _router, _ngxPermissionsService, _store, _employeesService, _jobSearchStoreService, _toastrService, _currencyPipe, _i18nService, _pageDataTableRegistryService, _pageTabRegistryService) {
      var _this;
      super(translateService);
      _this = this;
      this._http = _http;
      this._route = _route;
      this._router = _router;
      this._ngxPermissionsService = _ngxPermissionsService;
      this._store = _store;
      this._employeesService = _employeesService;
      this._jobSearchStoreService = _jobSearchStoreService;
      this._toastrService = _toastrService;
      this._currencyPipe = _currencyPipe;
      this._i18nService = _i18nService;
      this._pageDataTableRegistryService = _pageDataTableRegistryService;
      this._pageTabRegistryService = _pageTabRegistryService;
      this.tabsetId = this._route.snapshot.data.tabsetId; // The identifier for the tabset
      this.dataTableId = this._route.snapshot.data.dataTableId; // The identifier for the data table
      this.jobSearchTabsEnum = JobSearchTabsEnum;
      this.loading = false;
      this.employees$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.nbTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .BehaviorSubject */ .t(JobSearchTabsEnum.BROWSE);
      this.disableButton = true;
      /**
       * Navigates to the employee addition page and opens the add dialog.
       *
       * @param event - The pointer event that triggered this method.
       * @returns A promise that resolves when the navigation is complete or exits early if there is no organization.
       */
      this.addNew = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* (event) {
          if (!_this.organization) {
            return;
          }
          try {
            _this._router.navigate(['/pages/employees/'], {
              queryParams: {
                openAddDialog: true
              }
            });
          } catch (error) {
            _this._toastrService.error(error.message || error);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
    ngOnInit() {
      this.initializeUiPermissions(); // Initialize UI permissions
      this.initializeUiLanguagesAndLocale(); // Initialize UI languages and Update Locale
      this._initializePageElements(); // Register page elements
      this._applyTranslationOnSmartTable(); //
      this._loadSmartTableSettings(); // Load smart table settings
    }
    ngAfterViewInit() {
      // Subscribe to the employees$ observable with debounce time and untilDestroyed operators
      this.employees$.pipe(
      // Debounce the observable to wait for 100 milliseconds of inactivity
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100),
      // Perform side effect by triggering the getActiveJobEmployees method
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.getActiveJobEmployees()),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
      // Subscribe to the pagination$ observable with debounce time, distinctUntilChange, and untilDestroyed operators
      this.pagination$.pipe(
      // Debounce the observable to wait for 100 milliseconds of inactivity
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100),
      // Ensure that the value has changed before emitting it
      (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(),
      // Perform side effect by triggering the employees$ observable with true
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.employees$.next(true)),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
      // Combine selectedOrganization$ and selectedEmployee$ observables
      const storeOrganization$ = this._store.selectedOrganization$;
      const storeEmployee$ = this._store.selectedEmployee$;
      // Subscribe to the combined observables with debounce time, distinctUntilChange, filter, tap, and untilDestroyed operators
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$]).pipe(
      // Debounce the observable to wait for 100 milliseconds of inactivity
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100),
      // Ensure that the value has changed before emitting it
      (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(),
      // Filter out combinations where organization is falsy
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(([organization]) => !!organization),
      // Perform side effects: update organization and selectedEmployeeId, trigger employees$ observable
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([organization, employee]) => {
        this.organization = organization;
        this.selectedEmployeeId = employee ? employee.id : null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.employees$.next(true)),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Initializes page elements by registering page tabs and data table columns.
     *
     * This method centralizes the logic for setting up page-related configurations,
     * ensuring that the necessary page tabs and data table columns are registered
     * upon initialization.
     */
    _initializePageElements() {
      // Register page elements
      this.registerPageTabs(this._pageTabRegistryService); // Register page tabs
      this.registerDataTableColumns(this._pageDataTableRegistryService); // Register data table columns
    }
    /**
     * Register page tabs for the JobEmployee
     *
     * @param _pageTabRegistryService
     */
    registerPageTabs(_pageTabRegistryService) {
      // Register the browse tab
      _pageTabRegistryService.registerPageTab({
        tabsetId: this.tabsetId,
        // The identifier for the tabset
        tabId: 'browse',
        // The identifier for the tab
        tabIcon: 'globe-2-outline',
        // The icon for the tab
        tabsetType: 'standard',
        // The type of tabset to use
        tabTitle: _i18n => _i18n.getTranslation('JOB_EMPLOYEE.BROWSE'),
        // The title for the tab
        order: 1,
        // The order of the tab,
        responsive: true,
        // Whether the tab is responsive,
        template: this.tableLayout // The template to be rendered in the tab
      });
      // Register the search tab
      _pageTabRegistryService.registerPageTab({
        tabsetId: this.tabsetId,
        // The identifier for the tabset
        tabId: 'search',
        // The identifier for the tab
        tabIcon: 'search-outline',
        // The icon for the tab
        tabsetType: 'standard',
        // The type of tabset to use
        tabTitle: _i18n => _i18n.getTranslation('JOB_EMPLOYEE.SEARCH'),
        // The title for the tab
        order: 2,
        // The order of the tab,
        responsive: true,
        // Whether the tab is responsive,
        template: this.comingSoon // The template to be rendered in the tab
      });
      // Register the history tab
      _pageTabRegistryService.registerPageTab({
        tabsetId: this.tabsetId,
        // The identifier for the tabset
        tabId: 'history',
        // The identifier for the tab
        tabIcon: 'clock-outline',
        // The icon for the tab
        tabsetType: 'standard',
        // The type of tabset to use
        tabTitle: _i18n => _i18n.getTranslation('JOB_EMPLOYEE.HISTORY'),
        // The title for the tab
        order: 3,
        // The order of the tab,
        responsive: true,
        // Whether the tab is responsive,
        template: this.comingSoon // The template to be rendered in the tab
      });
    }
    /**
     * Register data table columns for the JobEmployee
     *
     * @param _pageDataTableRegistryService
     */
    registerDataTableColumns(_pageDataTableRegistryService) {
      // Register the data table column
      _pageDataTableRegistryService.registerPageDataTableColumn({
        dataTableId: this.dataTableId,
        // The identifier for the data table location
        columnId: 'name',
        // The identifier for the column
        order: 0,
        // The order of the column in the table
        title: () => this.getTranslation('JOB_EMPLOYEE.EMPLOYEE'),
        // The title of the column
        type: 'custom',
        // The type of the column
        width: '20%',
        // The width of the column
        isSortable: true,
        // Indicates whether the column is sortable
        isEditable: false,
        // Indicates whether the column is editable
        renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .EmployeeLinksComponent */ .z,
        valuePrepareFunction: (_, cell) => this.prepareEmployeeValue(_, cell),
        componentInitFunction: (instance, cell) => {
          // Get the row data from the cell
          instance.rowData = cell.getRow().getData();
          // Get the value from the cell
          instance.value = cell.getValue();
        },
        editor: {
          type: 'custom',
          component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .EmployeeLinkEditorComponent */ .t // Use the custom component for display
        }
      });
      // Register the data table column
      _pageDataTableRegistryService.registerPageDataTableColumn({
        dataTableId: this.dataTableId,
        // The identifier for the data table location
        columnId: 'availableJobs',
        // The identifier for the column
        order: 1,
        // The order of the column in the table
        title: () => this.getTranslation('JOB_EMPLOYEE.AVAILABLE_JOBS'),
        // The title of the column
        type: 'text',
        // The type of the column
        width: '10%',
        // The width of the column
        isSortable: false,
        // Indicates whether the column is sortable
        isEditable: false,
        // Indicates whether the column is editable
        valuePrepareFunction: rawValue => (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .isNotNullOrUndefined */ .Gh)(rawValue) ? rawValue : 0,
        editor: {
          type: 'custom',
          component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .NonEditableNumberEditorComponent */ .H
        }
      });
      // Register the data table column
      _pageDataTableRegistryService.registerPageDataTableColumn({
        dataTableId: this.dataTableId,
        // The identifier for the data table location
        columnId: 'appliedJobs',
        // The identifier for the column
        order: 2,
        // The order of the column in the table
        title: () => this.getTranslation('JOB_EMPLOYEE.APPLIED_JOBS'),
        // The title of the column
        type: 'text',
        // The type of the column
        width: '10%',
        // The width of the column
        isSortable: false,
        // Indicates whether the column is sortable
        isEditable: false,
        // Indicates whether the column is editable
        valuePrepareFunction: rawValue => (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .isNotNullOrUndefined */ .Gh)(rawValue) ? rawValue : 0,
        editor: {
          type: 'custom',
          component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .NonEditableNumberEditorComponent */ .H
        }
      });
      // Register the data table column
      _pageDataTableRegistryService.registerPageDataTableColumn({
        dataTableId: this.dataTableId,
        // The identifier for the data table location
        columnId: 'billRateValue',
        // The identifier for the column
        order: 3,
        // The order of the column in the table
        title: () => this.getTranslation('JOB_EMPLOYEE.BILLING_RATE'),
        // The title of the column
        type: 'text',
        // The type of the column
        width: '10%',
        // The width of the column
        isSortable: false,
        // Indicates whether the column is sortable
        isEditable: true,
        // Indicates whether the column is editable
        editor: {
          type: 'custom',
          component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .NumberEditorComponent */ .y
        },
        valuePrepareFunction: (rawValue, cell) => {
          // Get the employee data from the cell
          const employee = cell.getRow().getData();
          // Return the transformed value
          return this._currencyPipe.transform(rawValue, employee?.billRateCurrency);
        }
      });
      // Register the data table column
      _pageDataTableRegistryService.registerPageDataTableColumn({
        dataTableId: this.dataTableId,
        // The identifier for the data table location
        columnId: 'minimumBillingRate',
        // The identifier for the column
        order: 4,
        // The order of the column in the table
        title: () => this.getTranslation('JOB_EMPLOYEE.MINIMUM_BILLING_RATE'),
        // The title of the column
        type: 'text',
        // The type of the column
        width: '20%',
        // The width of the column
        isSortable: false,
        // Indicates whether the column is sortable
        isEditable: true,
        // Indicates whether the column is editable
        editor: {
          type: 'custom',
          component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .NumberEditorComponent */ .y
        },
        valuePrepareFunction: (value, cell) => {
          const employee = cell.getRow().getData();
          return this._currencyPipe.transform(value, employee?.billRateCurrency);
        }
      });
      // Register the data table column
      _pageDataTableRegistryService.registerPageDataTableColumn({
        dataTableId: this.dataTableId,
        // The identifier for the data table location
        columnId: 'isJobSearchActive',
        // The identifier for the column
        order: 5,
        // The order of the column in the table
        title: () => this.getTranslation('JOB_EMPLOYEE.JOB_SEARCH_STATUS'),
        // The title of the column
        type: 'custom',
        // The type of the column
        width: '20%',
        // The width of the column
        isSortable: false,
        // Indicates whether the column is sortable
        isEditable: true,
        // Indicates whether the column is editable
        renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .ToggleSwitcherComponent */ .F,
        componentInitFunction: (instance, cell) => {
          // Get the employee data from the cell
          const employee = cell.getRow().getData();
          // Set the label property to false to hide the label
          instance.label = false;
          // Set the initial value of the toggle
          instance.value = employee.isJobSearchActive;
          // Subscribe to the toggleChange event
          instance.onSwitched.subscribe(toggle => {
            // Call the JobSearchStoreService to update the job search availability
            this._jobSearchStoreService.updateJobSearchAvailability(this.organization, employee, toggle);
          });
        },
        editor: {
          type: 'custom',
          component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .JobSearchAvailabilityEditorComponent */ .J
        }
      });
    }
    /**
     * Initialize UI permissions
     */
    initializeUiPermissions() {
      // Load permissions
      const permissions = this._store.userRolePermissions.map(({
        permission
      }) => permission);
      this._ngxPermissionsService.flushPermissions(); // Flush permissions
      this._ngxPermissionsService.loadPermissions(permissions); // Load permissions
    }
    /**
     * Initialize UI languages and Update Locale
     */
    initializeUiLanguagesAndLocale() {
      // Observable that emits when preferred language changes.
      const preferredLanguage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .merge */ .h)(this._store.preferredLanguage$, this._i18nService.preferredLanguage$).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(lang => !!lang), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(lang => {
        this.translateService.use(lang);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this));
      // Subscribe to initiate the stream
      preferredLanguage$.subscribe();
    }
    /**
     * Registers and configures the Smart Table source.
     */
    setSmartTableSource() {
      // Check if organization context is available
      if (!this.organization) {
        return;
      }
      // Set loading state to true while fetching data
      this.loading = true;
      try {
        // Destructure properties for clarity
        const {
          id: organizationId,
          tenantId
        } = this.organization;
        const whereClause = {
          tenantId,
          organizationId,
          isActive: true,
          isArchived: false,
          ...(this.selectedEmployeeId ? {
            id: this.selectedEmployeeId
          } : {}),
          ...(this.filters.where ? this.filters.where : {})
        };
        // Filter by current employee ID if the permission is not present
        if (!this._store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_18__/* .PermissionsEnum */ .U.CHANGE_SELECTED_EMPLOYEE)) {
          // Filter by current employee ID if the permission is not present
          const employeeId = this._store.user?.employee?.id;
          whereClause.id = employeeId;
        }
        // Create a new ServerDataSource for Smart Table
        this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .ServerDataSource */ .N(this._http, {
          endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_20__/* .API_PREFIX */ .m4}/employee-job/statistics`,
          relations: ['user'],
          // Define query parameters for the API request
          where: {
            ...whereClause
          },
          // Finalize callback to handle post-processing
          finalize: () => {
            // Update pagination based on the count of items in the source
            this.setPagination({
              ...this.getPagination(),
              totalItems: this.smartTableSource.count()
            });
          }
        });
      } catch (error) {
        // Display an error toastr notification in case of any exceptions.
        this._toastrService.danger(error);
      } finally {
        // Set loading state to false once data fetching is complete
        this.loading = false;
      }
    }
    /**
     * Retrieves employees with active jobs.
     *
     * @returns {Promise<void>} - A Promise resolving to void.
     */
    getActiveJobEmployees() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        try {
          // Ensure the organization context is available before proceeding.
          if (!_this2.organization) {
            return;
          }
          // Set up the smart table source for displaying active job employees.
          _this2.setSmartTableSource();
          // Retrieve pagination settings.
          const {
            activePage,
            itemsPerPage
          } = _this2.getPagination();
          // Set paging for the smart table source.
          _this2.smartTableSource.setPaging(activePage, itemsPerPage, false);
        } catch (error) {
          // Display an error toastr notification in case of any exceptions.
          _this2._toastrService.danger(error);
        }
      })();
    }
    /**
     * Loads the Smart Table settings.
     */
    _loadSmartTableSettings() {
      // Retrieve pagination settings
      const pagination = this.getPagination();
      // Configure smart table settings
      this.settingsSmartTable = {
        selectedRowIndex: -1,
        hideSubHeader: true,
        noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.EMPLOYEE'),
        isEditable: true,
        actions: {
          delete: false,
          add: true
        },
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        edit: {
          editButtonContent: '<i class="nb-edit"></i>',
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmSave: true
        },
        columns: {
          ...this._pageDataTableRegistryService.getPageDataTableColumns('job-employee')
        }
      };
    }
    /**
     * Prepares the value for the employee cell.
     * @param _ The row data.
     * @param cell The cell to prepare the value for.
     * @returns The prepared value.
     */
    prepareEmployeeValue(_, cell) {
      // Get the employee data from the cell
      const employee = cell.getRow().getData();
      // Prepare the value for the cell
      if (employee) {
        const {
          user,
          id
        } = employee;
        return {
          name: user?.name ?? null,
          imageUrl: user?.imageUrl ?? null,
          id: id ?? null
        };
      }
      // Return default values if the employee is undefined
      return {
        name: null,
        imageUrl: null,
        id: null
      };
    }
    /**
     * Handles the event for confirming the edit of an editable field.
     *
     * @param event - The event containing the edited data.
     */
    onEditConfirm(event) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        try {
          // Ensure the organization context is available before proceeding.
          if (!_this3.organization) {
            return;
          }
          // Destructure properties for clarity.
          const {
            id: organizationId,
            tenantId
          } = _this3.organization;
          // Get the employee ID from the event data
          const employeeId = event.data?.id;
          // Get the new data from the event
          const {
            billRateValue,
            minimumBillingRate
          } = event.newData ?? {};
          // Update employee bill rates.
          yield _this3._employeesService.updateProfile(employeeId, {
            minimumBillingRate: +minimumBillingRate,
            billRateValue: +billRateValue,
            tenantId,
            organizationId
          });
          // If successful, refresh the smart table source.
          _this3.employees$.next(true);
        } catch (error) {
          console.error('Error while updating employee rates', error);
          // If an error occurs, reject the edit and log the error.
          yield event.confirm.reject();
        }
      })();
    }
    /**
     * Handles the cancellation of an edit operation in the smart table.
     * Refreshes the data table to reflect any changes made.
     *
     * @param event - The event object containing details about the canceled edit.
     *
     */
    onEditCancel(event) {
      // Optionally, you can log the event for debugging purposes
      console.log('Edit canceled for row:', event);
      // Refresh the data table to revert any changes made during the edit
      this.smartTableSource.refresh();
    }
    /**
     * Applies translations to the Smart Table settings when the language changes.
     * This method listens for the onLangChange event from the translateService.
     */
    _applyTranslationOnSmartTable() {
      // Subscribe to language changes using onLangChange
      this.translateService.onLangChange.pipe(
      // Trigger the loading of Smart Table settings when the language changes
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._loadSmartTableSettings()),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Handles the change of a tab.
     *
     * @param tab - The NbTabComponent representing the selected tab.
     */
    onTabChange(tab) {}
    /**
     * Handles the selection or deselection of an employee.
     *
     * @param param0 - Object containing selection information ({ isSelected, data }).
     */
    onSelectEmployee({
      isSelected,
      data
    }) {
      // Update the disableButton flag based on whether an employee is selected
      this.disableButton = !isSelected;
      // Update the selectedEmployee based on the selection status
      this.selectedEmployee = isSelected ? data : null;
    }
    /**
     * Edit employee.
     *
     * @param selectedItem - The employee to be edited.
     */
    edit(selectedItem) {
      // If a specific employee is selected, update the selected employee state
      if (selectedItem) {
        this.onSelectEmployee({
          isSelected: true,
          data: selectedItem
        });
      }
      // Navigate to the employee edit page
      this._router.navigate(['/pages/employees/edit/', this.selectedEmployee.id]);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function JobEmployeeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_22__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_23__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_23__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(ngx_permissions__WEBPACK_IMPORTED_MODULE_24__/* .NgxPermissionsService */ .$R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .JobSearchStoreService */ ._), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_29__/* .CurrencyPipe */ .oe), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_30__/* .I18nService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .PageDataTableRegistryService */ .A), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .PageTabRegistryService */ .R));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: JobEmployeeComponent,
        selectors: [["ga-job-employees"]],
        viewQuery: function JobEmployeeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c1, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.tableLayout = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.comingSoon = _t.first);
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([_angular_common__WEBPACK_IMPORTED_MODULE_29__/* .CurrencyPipe */ .oe]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 18,
        vars: 10,
        consts: [["tableLayout", ""], ["comingSoon", ""], ["actionButtons", ""], ["visibleButton", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "header"], [3, "allowEmployee"], [1, "p-0"], [1, "gauzy-button-container"], [3, "hasLayoutSelector", "isDisable", "buttonTemplateVisible", "buttonTemplate"], [3, "tabsetId"], [3, "ngxPermissionsOnly"], [3, "ngxPermissionsExcept"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "editConfirm", "editCancel", "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], ["icon", "flash-outline"], [1, "btn-group", "actions"], ["ngxPermissionsOnly", "ORG_JOB_EMPLOYEE_VIEW"], ["ngxPermissionsOnly", "ORG_EMPLOYEES_EDIT"], ["size", "small", "status", "basic", "nbButton", "", "underConstruction", "", 1, "action", "primary", 2, "cursor", "pointer"], ["icon", "eye-outline", "pack", "eva"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "primary", 2, "cursor", "pointer", 3, "click"], ["icon", "edit-outline", "pack", "eva"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline"]],
        template: function JobEmployeeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "h4")(3, "ngx-header-title", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body", 7)(7, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "ngx-gauzy-button-action", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "gz-dynamic-tabs", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, JobEmployeeComponent_ng_template_10_Template, 2, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(12, JobEmployeeComponent_ng_template_12_Template, 6, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(14, JobEmployeeComponent_ng_template_14_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(16, JobEmployeeComponent_ng_template_16_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const actionButtons_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
            const visibleButton_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 8, "JOB_EMPLOYEE.EMPLOYEES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasLayoutSelector", false)("isDisable", ctx.disableButton)("buttonTemplateVisible", visibleButton_r7)("buttonTemplate", actionButtons_r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabsetId", ctx.tabsetId);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_33__/* .NbSpinnerDirective */ .zwc, ngx_permissions__WEBPACK_IMPORTED_MODULE_24__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .NgIf */ .bT, _ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_34__/* .HeaderTitleComponent */ .X, _ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_35__/* .UnderConstructionDirective */ .r, angular2_smart_table__WEBPACK_IMPORTED_MODULE_36__/* .Angular2SmartTableComponent */ .T9, _ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_37__/* .GauzyButtonActionComponent */ .A, _ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_38__/* .PaginationV2Component */ .a, _ui_core_shared_src_lib_components_dynamic_tabs_dynamic_tabs_component__WEBPACK_IMPORTED_MODULE_39__/* .DynamicTabsComponent */ .d, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: calc(100% - 3rem);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  overflow: unset;\n  display: flex;\n  flex-direction: column;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\n[_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%] {\n  height: calc(100% - 1.5rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  background-color: unset;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  right: 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  left: 18px;\n}\n\nnb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border: 1px solid var(--border-basic-color-4);\n  border-radius: var(--input-rectangle-border-radius);\n  width: 1.75rem;\n  height: 1.75rem;\n}\n\n.grid[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 13.5rem) !important;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]     angular2-smart-table .angular2-smart-actions {\n  width: 5%;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]     angular2-smart-table .angular2-smart-actions a {\n  transform: scale(0.6);\n  border-radius: 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]     angular2-smart-table .angular2-smart-actions a:nth-child(1) {\n  background-color: #00d68f !important;\n  color: white;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]     angular2-smart-table .angular2-smart-actions a:nth-child(2) {\n  background-color: white !important;\n  color: #ff3d71;\n  box-shadow: var(--gauzy-shadow);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]     angular2-smart-table .angular2-smart-actions-title a {\n  background-color: #00d68f !important;\n  transform: scale(0.9);\n}"]
      });
    }
  };
  JobEmployeeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_40__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_40__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateService */ .c$, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__/* .HttpClient */ .Qq, _angular_router__WEBPACK_IMPORTED_MODULE_23__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_23__/* .Router */ .Ix, ngx_permissions__WEBPACK_IMPORTED_MODULE_24__/* .NgxPermissionsService */ .$R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .JobSearchStoreService */ ._, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .ToastrService */ .t, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .CurrencyPipe */ .oe, _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_30__/* .I18nService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .PageDataTableRegistryService */ .A, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .PageTabRegistryService */ .R])], JobEmployeeComponent);
  return JobEmployeeComponent;
})();


/***/ }),

/***/ 41517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47426);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 41817:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ UntilDestroy),
/* harmony export */   s: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3259);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7172);



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

/***/ 42578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ JobSearchCategoryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let JobSearchCategoryService = /*#__PURE__*/(() => {
  class JobSearchCategoryService {
    constructor(http) {
      this.http = http;
    }
    getAll(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/job-search-category`, {
        params: request ? (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request) : {}
      }));
    }
    create(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/job-search-category`, request));
    }
    static {
      this.ɵfac = function JobSearchCategoryService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobSearchCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: JobSearchCategoryService,
        factory: JobSearchCategoryService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return JobSearchCategoryService;
})();

/***/ }),

/***/ 43584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* unused harmony export OperatorSubscriber */
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24718);

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

/***/ 43757:
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

/***/ 44234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21379);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30548);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__/* .scheduleAsyncIterable */ .M)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__/* .readableStreamLikeToAsyncGenerator */ .C)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ }),

/***/ 44520:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ CKEditorComponent),
/* harmony export */   w: () => (/* binding */ CKEditorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var ckeditor4_integrations_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92640);






/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
function CKEditorComponent_ng_template_0_Template(rf, ctx) {}
let CKEditorComponent = /*#__PURE__*/(() => {
  class CKEditorComponent {
    constructor(elementRef, ngZone) {
      this.elementRef = elementRef;
      this.ngZone = ngZone;
      /**
       * CKEditor 4 script url address. Script will be loaded only if CKEDITOR namespace is missing.
       *
       * Defaults to 'https://cdn.ckeditor.com/4.22.1/standard-all/ckeditor.js'
       */
      this.editorUrl = 'https://cdn.ckeditor.com/4.22.1/standard-all/ckeditor.js';
      /**
       * Tag name of the editor component.
       *
       * The default tag is `textarea`.
       */
      this.tagName = 'textarea';
      /**
       * The type of the editor interface.
       *
       * By default editor interface will be initialized as `classic` editor.
       * You can also choose to create an editor with `inline` interface type instead.
       *
       * See https://ckeditor.com/docs/ckeditor4/latest/guide/dev_uitypes.html
       * and https://ckeditor.com/docs/ckeditor4/latest/examples/fixedui.html
       * to learn more.
       */
      this.type = "classic" /* CLASSIC */;
      /**
       * Fired when the CKEDITOR https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR.html namespace
       * is loaded. It only triggers once, no matter how many CKEditor 4 components are initialised.
       * Can be used for convenient changes in the namespace, e.g. for adding external plugins.
       */
      this.namespaceLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editor is ready. It corresponds with the `editor#instanceReady`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-instanceReady
       * event.
       */
      this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editor data is loaded, e.g. after calling setData()
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#method-setData
       * editor's method. It corresponds with the `editor#dataReady`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dataReady event.
       */
      this.dataReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the content of the editor has changed. It corresponds with the `editor#change`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-change
       * event. For performance reasons this event may be called even when data didn't really changed.
       * Please note that this event will only be fired when `undo` plugin is loaded. If you need to
       * listen for editor changes (e.g. for two-way data binding), use `dataChange` event instead.
       */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the content of the editor has changed. In contrast to `change` - only emits when
       * data really changed thus can be successfully used with `[data]` and two way `[(data)]` binding.
       *
       * See more: https://angular.io/guide/template-syntax#two-way-binding---
       */
      this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the native dragStart event occurs. It corresponds with the `editor#dragstart`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragstart
       * event.
       */
      this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the native dragEnd event occurs. It corresponds with the `editor#dragend`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragend
       * event.
       */
      this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the native drop event occurs. It corresponds with the `editor#drop`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-drop
       * event.
       */
      this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the file loader response is received. It corresponds with the `editor#fileUploadResponse`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadResponse
       * event.
       */
      this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the file loader should send XHR. It corresponds with the `editor#fileUploadRequest`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadRequest
       * event.
       */
      this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editing area of the editor is focused. It corresponds with the `editor#focus`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-focus
       * event.
       */
      this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires after the user initiated a paste action, but before the data is inserted.
       * It corresponds with the `editor#paste`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-paste
       * event.
       */
      this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires after the `paste` event if content was modified. It corresponds with the `editor#afterPaste`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-afterPaste
       * event.
       */
      this.afterPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editing view of the editor is blurred. It corresponds with the `editor#blur`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-blur
       * event.
       */
      this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * If the component is read–only before the editor instance is created, it remembers that state,
       * so the editor can become read–only once it is ready.
       */
      this._readOnly = null;
      this._data = null;
      this._destroyed = false;
    }
    /**
     * Keeps track of the editor's data.
     *
     * It's also decorated as an input which is useful when not using the ngModel.
     *
     * See https://angular.io/api/forms/NgModel to learn more.
     */
    set data(data) {
      if (data === this._data) {
        return;
      }
      if (this.instance) {
        this.instance.setData(data);
        // Data may be changed by ACF.
        this._data = this.instance.getData();
        return;
      }
      this._data = data;
    }
    get data() {
      return this._data;
    }
    /**
     * When set to `true`, the editor becomes read-only.
     *
     * See https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#property-readOnly
     * to learn more.
     */
    set readOnly(isReadOnly) {
      if (this.instance) {
        this.instance.setReadOnly(isReadOnly);
        return;
      }
      // Delay setting read-only state until editor initialization.
      this._readOnly = isReadOnly;
    }
    get readOnly() {
      if (this.instance) {
        return this.instance.readOnly;
      }
      return this._readOnly;
    }
    ngAfterViewInit() {
      (0,ckeditor4_integrations_common__WEBPACK_IMPORTED_MODULE_0__/* .getEditorNamespace */ .$)(this.editorUrl, namespace => {
        this.namespaceLoaded.emit(namespace);
      }).then(() => {
        // Check if component instance was destroyed before `ngAfterViewInit` call (#110).
        // Here, `this.instance` is still not initialized and so additional flag is needed.
        if (this._destroyed) {
          return;
        }
        this.ngZone.runOutsideAngular(this.createEditor.bind(this));
      }).catch(window.console.error);
    }
    ngOnDestroy() {
      this._destroyed = true;
      this.ngZone.runOutsideAngular(() => {
        if (this.instance) {
          this.instance.destroy();
          this.instance = null;
        }
      });
    }
    writeValue(value) {
      this.data = value;
    }
    registerOnChange(callback) {
      this.onChange = callback;
    }
    registerOnTouched(callback) {
      this.onTouched = callback;
    }
    createEditor() {
      const element = document.createElement(this.tagName);
      this.elementRef.nativeElement.appendChild(element);
      const userInstanceReadyCallback = this.config?.on?.instanceReady;
      const defaultConfig = {
        delayIfDetached: true
      };
      const config = {
        ...defaultConfig,
        ...this.config
      };
      if (typeof config.on === 'undefined') {
        config.on = {};
      }
      config.on.instanceReady = evt => {
        const editor = evt.editor;
        this.instance = editor;
        // Read only state may change during instance initialization.
        this.readOnly = this._readOnly !== null ? this._readOnly : this.instance.readOnly;
        this.subscribe(this.instance);
        const undo = editor.undoManager;
        if (this.data !== null) {
          undo && undo.lock();
          editor.setData(this.data, {
            callback: () => {
              // Locking undoManager prevents 'change' event.
              // Trigger it manually to updated bound data.
              if (this.data !== editor.getData()) {
                undo ? editor.fire('change') : editor.fire('dataReady');
              }
              undo && undo.unlock();
              this.ngZone.run(() => {
                if (typeof userInstanceReadyCallback === 'function') {
                  userInstanceReadyCallback(evt);
                }
                this.ready.emit(evt);
              });
            }
          });
        } else {
          this.ngZone.run(() => {
            if (typeof userInstanceReadyCallback === 'function') {
              userInstanceReadyCallback(evt);
            }
            this.ready.emit(evt);
          });
        }
      };
      if (this.type === "inline" /* INLINE */) {
        CKEDITOR.inline(element, config);
      } else {
        CKEDITOR.replace(element, config);
      }
    }
    subscribe(editor) {
      editor.on('focus', evt => {
        this.ngZone.run(() => {
          this.focus.emit(evt);
        });
      });
      editor.on('paste', evt => {
        this.ngZone.run(() => {
          this.paste.emit(evt);
        });
      });
      editor.on('afterPaste', evt => {
        this.ngZone.run(() => {
          this.afterPaste.emit(evt);
        });
      });
      editor.on('dragend', evt => {
        this.ngZone.run(() => {
          this.dragEnd.emit(evt);
        });
      });
      editor.on('dragstart', evt => {
        this.ngZone.run(() => {
          this.dragStart.emit(evt);
        });
      });
      editor.on('drop', evt => {
        this.ngZone.run(() => {
          this.drop.emit(evt);
        });
      });
      editor.on('fileUploadRequest', evt => {
        this.ngZone.run(() => {
          this.fileUploadRequest.emit(evt);
        });
      });
      editor.on('fileUploadResponse', evt => {
        this.ngZone.run(() => {
          this.fileUploadResponse.emit(evt);
        });
      });
      editor.on('blur', evt => {
        this.ngZone.run(() => {
          if (this.onTouched) {
            this.onTouched();
          }
          this.blur.emit(evt);
        });
      });
      editor.on('dataReady', this.propagateChange, this);
      if (this.instance.undoManager) {
        editor.on('change', this.propagateChange, this);
      }
      // If 'undo' plugin is not loaded, listen to 'selectionCheck' event instead. (#54).
      else {
        editor.on('selectionCheck', this.propagateChange, this);
      }
    }
    propagateChange(event) {
      this.ngZone.run(() => {
        const newData = this.instance.getData();
        if (event.name === 'change') {
          this.change.emit(event);
        } else if (event.name === 'dataReady') {
          this.dataReady.emit(event);
        }
        if (newData === this.data) {
          return;
        }
        this._data = newData;
        this.dataChange.emit(newData);
        if (this.onChange) {
          this.onChange(newData);
        }
      });
    }
  }
  CKEditorComponent.ɵfac = function CKEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi));
  };
  CKEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
    type: CKEditorComponent,
    selectors: [["ckeditor"]],
    inputs: {
      config: "config",
      editorUrl: "editorUrl",
      tagName: "tagName",
      type: "type",
      data: "data",
      readOnly: "readOnly"
    },
    outputs: {
      namespaceLoaded: "namespaceLoaded",
      ready: "ready",
      dataReady: "dataReady",
      change: "change",
      dataChange: "dataChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd",
      drop: "drop",
      fileUploadResponse: "fileUploadResponse",
      fileUploadRequest: "fileUploadRequest",
      focus: "focus",
      paste: "paste",
      afterPaste: "afterPaste",
      blur: "blur"
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ .Jv_([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .kq,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Rfq)(() => CKEditorComponent),
      multi: true
    }])],
    decls: 1,
    vars: 0,
    template: function CKEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
  return CKEditorComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
let CKEditorModule = /*#__PURE__*/(() => {
  class CKEditorModule {}
  CKEditorModule.ɵfac = function CKEditorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CKEditorModule)();
  };
  CKEditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
    type: CKEditorModule
  });
  CKEditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
    imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD]]
  });
  return CKEditorModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ckeditor4-angular.mjs.map

/***/ }),

/***/ 45194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* unused harmony export pipe */
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67800);

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

/***/ 45767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24441);

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

/***/ 45928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ JobPresetService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let JobPresetService = /*#__PURE__*/(() => {
  class JobPresetService {
    constructor(http) {
      this.http = http;
    }
    /**
     * Fetches a list of job presets.
     * @param request Optional parameter to filter the job presets.
     * @returns A promise that resolves to an array of job presets.
     */
    getJobPresets(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset`, {
        params: request ? (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request) : {}
      }));
    }
    /**
     * Fetches a specific job preset by its ID.
     * @param id The ID of the job preset to fetch.
     * @param request Optional parameter to filter the job preset.
     * @returns A promise that resolves to the job preset.
     */
    getJobPreset(id, request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/${id}`, {
        params: request ? (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request) : {}
      }));
    }
    /**
     * Fetches an employee's job preset.
     * @param request Optional parameter to filter the job preset.
     * @returns A promise that resolves to the job preset.
     */
    getEmployeePreset(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset`, {
        params: request ? (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request) : {}
      }));
    }
    /**
     * Fetches matching criterions for a specific employee.
     * @param employeeId The ID of the employee whose criterions are to be fetched.
     * @param request Optional parameter to filter the criterions.
     * @returns A promise that resolves to an array of matching criterions.
     */
    getEmployeeCriterions(employeeId, request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/employee/${employeeId}/criterion`, {
        params: request ? (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request) : {}
      }));
    }
    /**
     * Creates a new job preset.
     * @param request The job preset data to create.
     * @returns A promise that resolves to the created job preset.
     */
    createJobPreset(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset`, request));
    }
    /**
     * Saves an employee's job preset.
     * @param input The data for the employee's job preset.
     * @returns A promise that resolves to an array of job presets.
     */
    saveEmployeePreset(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/employee`, input));
    }
    /**
     * Creates a new criterion for a job preset.
     * @param jobPresetId The ID of the job preset to add the criterion to.
     * @param criterion The criterion data to create.
     * @returns A promise that resolves to the created job preset.
     */
    createJobPresetCriterion(jobPresetId, criterion) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/${jobPresetId}/criterion`, criterion));
    }
    /**
     * Creates a new criterion for an employee.
     * @param employeeId The ID of the employee to add the criterion to.
     * @param criterion The criterion data to create.
     * @returns A promise that resolves to the created matching criterions.
     */
    createEmployeeCriterion(employeeId, criterion) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/employee/${employeeId}/criterion`, criterion));
    }
    /**
     * Deletes a criterion from a job preset.
     * @param criterionId The ID of the criterion to delete.
     * @returns A promise that resolves to the deleted job preset.
     */
    deleteJobPresetCriterion(criterionId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/criterion/${criterionId}`));
    }
    /**
     * Deletes a criterion from an employee's criterions.
     * @param employeeId The ID of the employee whose criterion is to be deleted.
     * @param criterionId The ID of the criterion to delete.
     * @returns A promise that resolves to the deleted matching criterions.
     */
    deleteEmployeeCriterion(employeeId, criterionId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/employee/${employeeId}/criterion/${criterionId}`));
    }
    static {
      this.ɵfac = function JobPresetService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobPresetService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: JobPresetService,
        factory: JobPresetService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return JobPresetService;
})();

/***/ }),

/***/ 46359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ observable)
/* harmony export */ });
const observable = /*#__PURE__*/(() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();
//# sourceMappingURL=observable.js.map

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

/***/ 47240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31508);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47426);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__/* .iterator */ .l]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ 47387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15287);

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

/***/ 47426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 47492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ readableStreamLikeToAsyncGenerator),
/* harmony export */   U: () => (/* binding */ isReadableStreamLike)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86052);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63823);


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

/***/ 47603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60345);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25617);


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

/***/ 48442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87818);

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

/***/ 48464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80183);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78189);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7089);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48848);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91678);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9220);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16485);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81814);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47240);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26694);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(342);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58489);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48817);













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

/***/ 48479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 48817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91678);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58489);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__/* .scheduleAsyncIterable */ .M)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__/* .readableStreamLikeToAsyncGenerator */ .C)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ }),

/***/ 48848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18398);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31508);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47426);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52910);




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

/***/ 48957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52273);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48479);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__/* .iterator */ .l]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ 49516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* unused harmony export async */
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25646);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47387);


const asyncScheduler = /*#__PURE__*/new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = (/* unused pure expression or super */ null && (asyncScheduler));
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 50951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58830);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63823);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__/* .observable */ .s]);
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ 51305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ 52081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kn: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Uv: () => (/* binding */ isSubscription),
/* harmony export */   yU: () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63823);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98455);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77804);



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

/***/ 52273:
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

/***/ 52910:
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

/***/ 52954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47603);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47492);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__/* .scheduleAsyncIterable */ .M)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__/* .readableStreamLikeToAsyncGenerator */ .C)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ }),

/***/ 52989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48464);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66765);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__/* .scheduled */ .c)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(input);
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ 53489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91454);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ 53989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ JobSearchOccupationService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let JobSearchOccupationService = /*#__PURE__*/(() => {
  class JobSearchOccupationService {
    constructor(http) {
      this.http = http;
    }
    getAll(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/job-search-occupation`, {
        params: request ? (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request) : {}
      }));
    }
    create(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/job-preset/job-search-occupation`, request));
    }
    static {
      this.ɵfac = function JobSearchOccupationService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobSearchOccupationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: JobSearchOccupationService,
        factory: JobSearchOccupationService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return JobSearchOccupationService;
})();

/***/ }),

/***/ 54625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88782);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ 56040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70434);

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

/***/ 56042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Subject)
/* harmony export */ });
/* unused harmony export AnonymousSubject */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60345);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52081);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6373);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77804);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93058);





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

/***/ 56350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11252);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73566);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33116);



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

/***/ 57697:
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

/***/ 58246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kn: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Uv: () => (/* binding */ isSubscription),
/* harmony export */   yU: () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47426);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21460);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96047);



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

/***/ 58310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ JobLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);


let JobLayoutComponent = /*#__PURE__*/(() => {
  class JobLayoutComponent {
    static {
      this.ɵfac = function JobLayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobLayoutComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: JobLayoutComponent,
        selectors: [["ga-job-layout"]],
        standalone: false,
        decls: 1,
        vars: 0,
        template: function JobLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterOutlet */ .n3],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: block;\n}"]
      });
    }
  }
  return JobLayoutComponent;
})();

/***/ }),

/***/ 58489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ readableStreamLikeToAsyncGenerator),
/* harmony export */   U: () => (/* binding */ isReadableStreamLike)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65569);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47426);


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

/***/ 58830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ observable)
/* harmony export */ });
const observable = /*#__PURE__*/(() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ 58894:
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

/***/ 59001:
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

/***/ 59792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18398);

const EMPTY = /*#__PURE__*/new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 60155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8007);

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

/***/ 60345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24718);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52081);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58830);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69499);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22234);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63823);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93058);







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

/***/ 60407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 61469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3209);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63004);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96550);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7611);




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

/***/ 62612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20809);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92838);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__/* .scheduled */ .c)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(input);
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ 62775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13534);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48479);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__/* .observable */ .s]);
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ 62971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ operate)
/* harmony export */ });
/* unused harmony export hasLift */
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47426);

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

/***/ 63004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler),
/* harmony export */   b: () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56350);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26667);


const asyncScheduler = /*#__PURE__*/new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 63535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ errorContext),
/* harmony export */   l: () => (/* binding */ captureError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43757);

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

/***/ 63823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 64103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33793);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62971);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83039);



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

/***/ 64616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52910);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62971);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83039);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 65149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 65569:
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

/***/ 66468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52081);

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

/***/ 66700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3209);

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

/***/ 66765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tg: () => (/* binding */ innerFrom)
/* harmony export */ });
/* unused harmony exports fromInteropObservable, fromArrayLike, fromPromise, fromIterable, fromAsyncIterable, fromReadableStreamLike */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65569);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81814);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16485);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18398);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9220);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26694);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(342);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47240);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58489);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47426);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97163);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46359);












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

/***/ 67076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2134);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15285);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53489);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ 67800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 68456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}
//# sourceMappingURL=createObject.js.map

/***/ }),

/***/ 68473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88782);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43584);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92838);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60407);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 68485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48479);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91454);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3856);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65149);




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

/***/ 68876:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ UntilDestroy),
/* harmony export */   s: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76033);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38380);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90665);



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

/***/ 69112:
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

/***/ 69499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* unused harmony export pipe */
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86957);

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

/***/ 70305:
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

/***/ 70434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30072);

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

/***/ 70821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39644);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86957);


function mergeAll(concurrent = Infinity) {
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__/* .mergeMap */ .Z)(_util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ 70913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobSearchModule: () => (/* binding */ JobSearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44520);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79415);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79475);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29087);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6828);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99209);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8539);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18180);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24906);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98048);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(13706);
/* harmony import */ var _job_search_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26860);





















/**
 * Nebular Modules
 */
const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbPopoverModule */ .Ofb, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbToggleModule */ .jVr];
/*
 * Third Party Modules
 */
const THIRD_PARTY_MODULES = [ckeditor4_angular__WEBPACK_IMPORTED_MODULE_1__/* .CKEditorModule */ .w, ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__/* .FileUploadModule */ .eB, ngx_moment__WEBPACK_IMPORTED_MODULE_3__/* .MomentModule */ .Js, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__/* .NgxPermissionsModule */ .Ov.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forRoot({
  defaultLanguage: (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .getBrowserLanguage */ .x)(),
  // Get the browser language and fall back to a default if needed
  loader: {
    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateLoader */ .Wr,
    useFactory: _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_7__/* .HttpLoaderFactory */ .M,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__/* .HttpClient */ .Qq]
  }
})];
let JobSearchModule = /*#__PURE__*/(() => {
  class JobSearchModule {
    static {
      this.hasRegisteredPageRoutes = false;
    } // Flag to check if routes have been registered
    constructor(_pageRouteRegistryService) {
      this._pageRouteRegistryService = _pageRouteRegistryService;
      // Register the routes
      this.registerPageRoutes();
    }
    /**
     * Registers routes for the jobs browser module.
     * Ensures that routes are registered only once.
     *
     * @returns {void}
     */
    registerPageRoutes() {
      if (JobSearchModule.hasRegisteredPageRoutes) {
        return;
      }
      // Register Job Browser Page Routes
      this._pageRouteRegistryService.registerPageRoute({
        // Register the location 'jobs'
        location: 'jobs',
        // Register the path 'search'
        path: 'search',
        // Register the loadChildren function to load the JobSearchModule lazy module
        loadChildren: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 70913)).then(m => m.JobSearchModule),
        // Register the data object
        data: {
          selectors: {
            date: true,
            employee: true,
            project: false,
            team: false
          }
        }
      });
      // Set hasRegisteredRoutes to true
      JobSearchModule.hasRegisteredPageRoutes = true;
    }
    static {
      this.ɵfac = function JobSearchModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobSearchModule)(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .PageRouteRegistryService */ .L));
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineNgModule"] */ .$C({
        type: JobSearchModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ROUTES */ .bw,
          useFactory: service => (0,_job_search_routes__WEBPACK_IMPORTED_MODULE_12__/* .createJobSearchRoutes */ .A)(service),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .PageRouteRegistryService */ .L],
          multi: true
        }],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .RouterModule */ .iI.forChild([]), NB_MODULES, THIRD_PARTY_MODULES, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .DialogsModule */ .s, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .ProposalTemplateSelectModule */ .r, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .SelectorsModule */ .b, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .StatusBadgeModule */ .u, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .RouterModule */ .iI]
      });
    }
  }
  return JobSearchModule;
})();

/***/ }),

/***/ 71337:
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

/***/ 72476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2134);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70305);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3856);



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

/***/ 72538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48479);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ 73110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 73566:
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

/***/ 74716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92838);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92293);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54625);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ 74852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47426);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62971);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83039);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67800);




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

/***/ 75543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
//# sourceMappingURL=throwUnobservableError.js.map

/***/ }),

/***/ 76033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kn: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Uv: () => (/* binding */ isSubscription),
/* harmony export */   yU: () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48479);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11943);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33116);



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

/***/ 76504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ JobTitleDescriptionDetailsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20345);
/* harmony import */ var _job_status_job_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21334);
/* harmony import */ var _ui_core_shared_src_lib_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23830);
/* harmony import */ var _ui_core_shared_src_lib_pipes_budget_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61404);
/* harmony import */ var _ui_core_shared_src_lib_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43826);














function JobTitleDescriptionDetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx_r0.rowData == null ? null : ctx_r0.rowData.providerCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, ctx_r0.rowData == null ? null : ctx_r0.rowData.providerCode), " ");
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "dateTimeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx_r0.rowData == null ? null : ctx_r0.rowData.jobPost == null ? null : ctx_r0.rowData.jobPost.jobDateCreated));
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx_r0.rowData == null ? null : ctx_r0.rowData.jobPost == null ? null : ctx_r0.rowData.jobPost.jobType));
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx_r0.rowData == null ? null : ctx_r0.rowData.jobPost == null ? null : ctx_r0.rowData.jobPost.budget));
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.rowData == null ? null : ctx_r0.rowData.jobPost == null ? null : ctx_r0.rowData.jobPost.country);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "job-status", 15);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx_r0.rowData);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function JobTitleDescriptionDetailsComponent_ng_template_8_Template_button_throttledClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.hideJob($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "JOBS.HIDE"));
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 18)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2, "Search Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.rowData == null ? null : ctx_r0.rowData.jobPost == null ? null : ctx_r0.rowData.jobPost.searchCategory);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 21)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2, "Search Occupation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.rowData == null ? null : ctx_r0.rowData.jobPost == null ? null : ctx_r0.rowData.jobPost.searchOccupation);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 22)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2, "Search Keyword:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.rowData == null ? null : ctx_r0.rowData.jobPost == null ? null : ctx_r0.rowData.jobPost.searchKeyword);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 23)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.rowData == null ? null : ctx_r0.rowData.jobPost == null ? null : ctx_r0.rowData.jobPost.category);
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_24_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", skill_r3, " ");
  }
}
function JobTitleDescriptionDetailsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2, "Skills:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, JobTitleDescriptionDetailsComponent_ng_template_24_span_3_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.rowData == null ? null : ctx_r0.rowData.jobPost == null ? null : ctx_r0.rowData.jobPost.skills == null ? null : ctx_r0.rowData.jobPost.skills.split(","));
  }
}
let JobTitleDescriptionDetailsComponent = /*#__PURE__*/(() => {
  class JobTitleDescriptionDetailsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.hideJobIcon = true;
      this.hideJobEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    /**
     * Icon with link to Job Post
     *
     * @returns
     */
    openJob() {
      if (!this.rowData) {
        return;
      }
      if (this.rowData?.jobPost) {
        window.open(this.rowData.jobPost.url, '_blank');
      }
    }
    /**
     * Updates job visibility
     *
     */
    hideJob(event) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        const {
          employeeId,
          providerCode,
          providerJobId
        } = _this.rowData;
        _this.hideJobEvent.emit({
          hide: true,
          employeeId,
          providerCode,
          providerJobId
        });
      })();
    }
    static {
      this.ɵfac = function JobTitleDescriptionDetailsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobTitleDescriptionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: JobTitleDescriptionDetailsComponent,
        selectors: [["job-title-description-details"]],
        inputs: {
          rowData: "rowData",
          hideJobIcon: "hideJobIcon"
        },
        outputs: {
          hideJobEvent: "hideJobEvent"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyPipe */ .oe]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 25,
        vars: 17,
        consts: [[1, "job-detail"], [1, "job-header"], [3, "ngIf"], [1, "job-title"], ["href", "javascript:void(0)", 3, "click"], ["icon", "eye-outline", "pack", "eva", 3, "nbTooltip"], [1, "job-body"], [1, "job-description"], [3, "innerHTML"], [1, "job-footer", "mb-3"], [1, "job-search-container"], [1, "job-category-container"], [1, "job-provider", "mr-2", 3, "ngClass"], [1, "job-date-created", "mr-2"], [1, "badge", "mr-2"], [3, "rowData"], ["status", "basic", "size", "small", "debounceClick", "", "nbButton", "", 1, "action", "warning", "ml-1", 2, "cursor", "pointer", 3, "throttledClick", "nbTooltip"], ["icon", "eye-off-outline", "pack", "eva"], [1, "search-category"], [1, "label"], [1, "badge"], [1, "search-occupation"], [1, "search-keyword"], [1, "job-category"], [1, "job-skills"], ["class", "badge", 4, "ngFor", "ngForOf"]],
        template: function JobTitleDescriptionDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, JobTitleDescriptionDetailsComponent_ng_template_2_Template, 3, 4, "ng-template", 2)(3, JobTitleDescriptionDetailsComponent_ng_template_3_Template, 3, 3, "ng-template", 2)(4, JobTitleDescriptionDetailsComponent_ng_template_4_Template, 3, 3, "ng-template", 2)(5, JobTitleDescriptionDetailsComponent_ng_template_5_Template, 3, 3, "ng-template", 2)(6, JobTitleDescriptionDetailsComponent_ng_template_6_Template, 2, 1, "ng-template", 2)(7, JobTitleDescriptionDetailsComponent_ng_template_7_Template, 1, 1, "ng-template", 2)(8, JobTitleDescriptionDetailsComponent_ng_template_8_Template, 3, 3, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 3)(10, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function JobTitleDescriptionDetailsComponent_Template_a_click_10_listener() {
              return ctx.openJob();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "nb-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 6)(14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(15, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "nl2br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "div", 9)(18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(19, JobTitleDescriptionDetailsComponent_ng_template_19_Template, 5, 1, "ng-template", 2)(20, JobTitleDescriptionDetailsComponent_ng_template_20_Template, 5, 1, "ng-template", 2)(21, JobTitleDescriptionDetailsComponent_ng_template_21_Template, 5, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(23, JobTitleDescriptionDetailsComponent_ng_template_23_Template, 5, 1, "ng-template", 2)(24, JobTitleDescriptionDetailsComponent_ng_template_24_Template, 4, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.providerCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.jobDateCreated);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.jobType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.budget);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.country);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.jobStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.hideJobIcon);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 15, ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.description), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.searchCategory);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.searchOccupation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.searchKeyword);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.category);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.jobPost == null ? null : ctx.rowData.jobPost.skills);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, _ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__/* .DebounceClickDirective */ .J, _job_status_job_status_component__WEBPACK_IMPORTED_MODULE_7__/* .JobStatusComponent */ .j, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .TitleCasePipe */ .PV, _ui_core_shared_src_lib_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_8__/* .DateTimeFormatPipe */ .V, _ui_core_shared_src_lib_pipes_budget_pipe__WEBPACK_IMPORTED_MODULE_9__/* .JobBudgetPipe */ .x, _ui_core_shared_src_lib_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_10__/* .Nl2BrPipe */ .V],
        styles: ["[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%] {\n  letter-spacing: 0em;\n  text-align: left;\n  \n\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-date-created[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  padding-top: 10px;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-provider.upwork[_ngcontent-%COMP%] {\n  color: #14a800;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-provider.linkedin[_ngcontent-%COMP%] {\n  color: #0a66c2;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-body[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 10px;\n  line-height: 17px;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-footer[_ngcontent-%COMP%]   .job-search-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-footer[_ngcontent-%COMP%]   .job-category-container[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: block;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .job-footer[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 110px;\n  margin-top: 10px;\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]   .job-detail[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: var(--tag-filled-basic-text-color);\n  display: inline-block;\n  padding: 6px 4px !important;\n  background-color: var(--tag-filled-basic-background-color);\n  border-radius: 4px;\n}"]
      });
    }
  }
  return JobTitleDescriptionDetailsComponent;
})();

/***/ }),

/***/ 77804:
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

/***/ 78189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66765);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64616);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92968);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ 79415:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fn: () => (/* binding */ FromUnixPipe),
/* harmony export */   Js: () => (/* binding */ MomentModule),
/* harmony export */   az: () => (/* binding */ DateFormatPipe),
/* harmony export */   f1: () => (/* binding */ FromUtcPipe)
/* harmony export */ });
/* unused harmony exports AddPipe, CalendarPipe, DifferencePipe, DurationPipe, IsAfterPipe, IsBeforePipe, LocalTimePipe, LocalePipe, NGX_MOMENT_OPTIONS, ParsePipe, ParseZonePipe, SubtractPipe, TimeAgoPipe, UtcPipe */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);




/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let AddPipe = /*#__PURE__*/(() => {
  class AddPipe {
    transform(value, amount, unit) {
      if (typeof amount === 'undefined' || typeof amount === 'number' && typeof unit === 'undefined') {
        throw new Error('AddPipe: missing required arguments');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).add(amount, unit);
    }
  }
  AddPipe.ɵfac = function AddPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AddPipe)();
  };
  AddPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amAdd",
    type: AddPipe,
    pure: true,
    standalone: false
  });
  return AddPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let CalendarPipe = /*#__PURE__*/(() => {
  class CalendarPipe {
    constructor(cdRef, ngZone) {
      this.cdRef = cdRef;
      this.ngZone = ngZone;
      // using a single static timer for all instances of this pipe for performance reasons
      CalendarPipe.initTimer(ngZone);
      CalendarPipe.refs++;
      // values such as Today will need to be replaced with Yesterday after midnight,
      // so make sure we subscribe to an EventEmitter that we set up to emit at midnight
      this.midnightSub = CalendarPipe.midnight.subscribe(() => {
        this.ngZone.run(() => this.cdRef.markForCheck());
      });
    }
    transform(value, ...args) {
      let formats = null;
      let referenceTime = null;
      for (let i = 0, len = args.length; i < len; i++) {
        if (args[i] !== null) {
          if (typeof args[i] === 'object' && !moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(args[i])) {
            formats = args[i];
          } else {
            referenceTime = moment__WEBPACK_IMPORTED_MODULE_0__(args[i]);
          }
        }
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).calendar(referenceTime, formats);
    }
    ngOnDestroy() {
      if (CalendarPipe.refs > 0) {
        CalendarPipe.refs--;
      }
      if (CalendarPipe.refs === 0) {
        CalendarPipe.removeTimer();
      }
      this.midnightSub.unsubscribe();
    }
    static initTimer(ngZone) {
      // initialize the timer
      if (!CalendarPipe.midnight) {
        CalendarPipe.midnight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
        if (typeof window !== 'undefined') {
          const timeToUpdate = CalendarPipe._getMillisecondsUntilUpdate();
          CalendarPipe.timer = ngZone.runOutsideAngular(() => {
            return window.setTimeout(() => {
              // emit the current date
              CalendarPipe.midnight.emit(new Date());
              // refresh the timer
              CalendarPipe.removeTimer();
              CalendarPipe.initTimer(ngZone);
            }, timeToUpdate);
          });
        }
      }
    }
    static removeTimer() {
      if (CalendarPipe.timer) {
        window.clearTimeout(CalendarPipe.timer);
        CalendarPipe.timer = null;
        CalendarPipe.midnight = null;
      }
    }
    static _getMillisecondsUntilUpdate() {
      const now = moment__WEBPACK_IMPORTED_MODULE_0__();
      const tomorrow = moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day').add(1, 'days');
      const timeToMidnight = tomorrow.valueOf() - now.valueOf();
      return timeToMidnight + 1000; // 1 second after midnight
    }
  }
  /**
   * Internal reference counter, so we can clean up when no instances are in use
   */
  CalendarPipe.refs = 0;
  CalendarPipe.timer = null;
  CalendarPipe.midnight = null;
  CalendarPipe.ɵfac = function CalendarPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CalendarPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi, 16));
  };
  CalendarPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amCalendar",
    type: CalendarPipe,
    pure: false,
    standalone: false
  });
  return CalendarPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let DateFormatPipe = /*#__PURE__*/(() => {
  class DateFormatPipe {
    transform(value, ...args) {
      if (!value) {
        return '';
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).format(args[0]);
    }
  }
  DateFormatPipe.ɵfac = function DateFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DateFormatPipe)();
  };
  DateFormatPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amDateFormat",
    type: DateFormatPipe,
    pure: true,
    standalone: false
  });
  return DateFormatPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let DifferencePipe = /*#__PURE__*/(() => {
  class DifferencePipe {
    transform(value, otherValue, unit, precision) {
      const date = moment__WEBPACK_IMPORTED_MODULE_0__(value);
      const date2 = otherValue !== null ? moment__WEBPACK_IMPORTED_MODULE_0__(otherValue) : moment__WEBPACK_IMPORTED_MODULE_0__();
      return date.diff(date2, unit, precision);
    }
  }
  DifferencePipe.ɵfac = function DifferencePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DifferencePipe)();
  };
  DifferencePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amDifference",
    type: DifferencePipe,
    pure: true,
    standalone: false
  });
  return DifferencePipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NGX_MOMENT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .InjectionToken */ .nKC('NGX_MOMENT_OPTIONS');
let DurationPipe = /*#__PURE__*/(() => {
  class DurationPipe {
    constructor(momentOptions) {
      this.allowedUnits = ['ss', 's', 'm', 'h', 'd', 'M'];
      this._applyOptions(momentOptions);
    }
    transform(value, ...args) {
      if (typeof args === 'undefined' || args.length !== 1) {
        throw new Error('DurationPipe: missing required time unit argument');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__.duration(value, args[0]).humanize();
    }
    _applyOptions(momentOptions) {
      if (!momentOptions) {
        return;
      }
      if (!!momentOptions.relativeTimeThresholdOptions) {
        const units = Object.keys(momentOptions.relativeTimeThresholdOptions);
        const filteredUnits = units.filter(unit => this.allowedUnits.indexOf(unit) !== -1);
        filteredUnits.forEach(unit => {
          moment__WEBPACK_IMPORTED_MODULE_0__.relativeTimeThreshold(unit, momentOptions.relativeTimeThresholdOptions[unit]);
        });
      }
    }
  }
  DurationPipe.ɵfac = function DurationPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DurationPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(NGX_MOMENT_OPTIONS, 24));
  };
  DurationPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amDuration",
    type: DurationPipe,
    pure: true,
    standalone: false
  });
  return DurationPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let FromUnixPipe = /*#__PURE__*/(() => {
  class FromUnixPipe {
    transform(value, ...args) {
      return typeof value === 'string' ? moment__WEBPACK_IMPORTED_MODULE_0__.unix(parseInt(value, 10)) : moment__WEBPACK_IMPORTED_MODULE_0__.unix(value);
    }
  }
  FromUnixPipe.ɵfac = function FromUnixPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FromUnixPipe)();
  };
  FromUnixPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amFromUnix",
    type: FromUnixPipe,
    pure: true,
    standalone: false
  });
  return FromUnixPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ParsePipe = /*#__PURE__*/(() => {
  class ParsePipe {
    transform(value, formats) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value, formats);
    }
  }
  ParsePipe.ɵfac = function ParsePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParsePipe)();
  };
  ParsePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amParse",
    type: ParsePipe,
    pure: true,
    standalone: false
  });
  return ParsePipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let FromUtcPipe = /*#__PURE__*/(() => {
  class FromUtcPipe {
    transform(value, formats, ...args) {
      return formats ? moment__WEBPACK_IMPORTED_MODULE_0__.utc(value, formats) : moment__WEBPACK_IMPORTED_MODULE_0__.utc(value);
    }
  }
  FromUtcPipe.ɵfac = function FromUtcPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FromUtcPipe)();
  };
  FromUtcPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amFromUtc",
    type: FromUtcPipe,
    pure: true,
    standalone: false
  });
  return FromUtcPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IsAfterPipe = /*#__PURE__*/(() => {
  class IsAfterPipe {
    transform(value, otherValue, unit) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).isAfter(moment__WEBPACK_IMPORTED_MODULE_0__(otherValue), unit);
    }
  }
  IsAfterPipe.ɵfac = function IsAfterPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IsAfterPipe)();
  };
  IsAfterPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amIsAfter",
    type: IsAfterPipe,
    pure: true,
    standalone: false
  });
  return IsAfterPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let IsBeforePipe = /*#__PURE__*/(() => {
  class IsBeforePipe {
    transform(value, otherValue, unit) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).isBefore(moment__WEBPACK_IMPORTED_MODULE_0__(otherValue), unit);
    }
  }
  IsBeforePipe.ɵfac = function IsBeforePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IsBeforePipe)();
  };
  IsBeforePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amIsBefore",
    type: IsBeforePipe,
    pure: true,
    standalone: false
  });
  return IsBeforePipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LocalTimePipe = /*#__PURE__*/(() => {
  class LocalTimePipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).local();
    }
  }
  LocalTimePipe.ɵfac = function LocalTimePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LocalTimePipe)();
  };
  LocalTimePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amLocal",
    type: LocalTimePipe,
    pure: true,
    standalone: false
  });
  return LocalTimePipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let LocalePipe = /*#__PURE__*/(() => {
  class LocalePipe {
    transform(value, locale) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).locale(locale);
    }
  }
  LocalePipe.ɵfac = function LocalePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LocalePipe)();
  };
  LocalePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amLocale",
    type: LocalePipe,
    pure: true,
    standalone: false
  });
  return LocalePipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ParseZonePipe = /*#__PURE__*/(() => {
  class ParseZonePipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__.parseZone(value);
    }
  }
  ParseZonePipe.ɵfac = function ParseZonePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParseZonePipe)();
  };
  ParseZonePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amParseZone",
    type: ParseZonePipe,
    pure: true,
    standalone: false
  });
  return ParseZonePipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let SubtractPipe = /*#__PURE__*/(() => {
  class SubtractPipe {
    transform(value, amount, unit) {
      if (typeof amount === 'undefined' || typeof amount === 'number' && typeof unit === 'undefined') {
        throw new Error('SubtractPipe: missing required arguments');
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).subtract(amount, unit);
    }
  }
  SubtractPipe.ɵfac = function SubtractPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SubtractPipe)();
  };
  SubtractPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amSubtract",
    type: SubtractPipe,
    pure: true,
    standalone: false
  });
  return SubtractPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/* ngx-moment (c) 2015, 2016 Uri Shaked / MIT Licence */
let TimeAgoPipe = /*#__PURE__*/(() => {
  class TimeAgoPipe {
    constructor(cdRef, ngZone) {
      this.cdRef = cdRef;
      this.ngZone = ngZone;
    }
    format(m) {
      return m.from(moment__WEBPACK_IMPORTED_MODULE_0__(), this.lastOmitSuffix);
    }
    transform(value, omitSuffix, formatFn) {
      if (this.hasChanged(value, omitSuffix)) {
        this.lastTime = this.getTime(value);
        this.lastValue = value;
        this.lastOmitSuffix = omitSuffix;
        this.lastLocale = this.getLocale(value);
        this.formatFn = formatFn || this.format.bind(this);
        this.removeTimer();
        this.createTimer();
        this.lastText = this.formatFn(moment__WEBPACK_IMPORTED_MODULE_0__(value));
      } else {
        this.createTimer();
      }
      return this.lastText;
    }
    ngOnDestroy() {
      this.removeTimer();
    }
    createTimer() {
      if (this.currentTimer) {
        return;
      }
      const momentInstance = moment__WEBPACK_IMPORTED_MODULE_0__(this.lastValue);
      const timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
      this.currentTimer = this.ngZone.runOutsideAngular(() => {
        if (typeof window !== 'undefined') {
          return window.setTimeout(() => {
            this.lastText = this.formatFn(moment__WEBPACK_IMPORTED_MODULE_0__(this.lastValue));
            this.currentTimer = null;
            this.ngZone.run(() => this.cdRef.markForCheck());
          }, timeToUpdate);
        } else {
          return null;
        }
      });
    }
    removeTimer() {
      if (this.currentTimer) {
        window.clearTimeout(this.currentTimer);
        this.currentTimer = null;
      }
    }
    getSecondsUntilUpdate(momentInstance) {
      const howOld = Math.abs(moment__WEBPACK_IMPORTED_MODULE_0__().diff(momentInstance, 'minute'));
      if (howOld < 1) {
        return 1;
      } else if (howOld < 60) {
        return 30;
      } else if (howOld < 180) {
        return 300;
      } else {
        return 3600;
      }
    }
    hasChanged(value, omitSuffix) {
      return this.getTime(value) !== this.lastTime || this.getLocale(value) !== this.lastLocale || omitSuffix !== this.lastOmitSuffix;
    }
    getTime(value) {
      if (moment__WEBPACK_IMPORTED_MODULE_0__.isDate(value)) {
        return value.getTime();
      } else if (moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(value)) {
        return value.valueOf();
      } else {
        return moment__WEBPACK_IMPORTED_MODULE_0__(value).valueOf();
      }
    }
    getLocale(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__.isMoment(value) ? value.locale() : moment__WEBPACK_IMPORTED_MODULE_0__.locale();
    }
  }
  TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TimeAgoPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi, 16));
  };
  TimeAgoPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amTimeAgo",
    type: TimeAgoPipe,
    pure: false,
    standalone: false
  });
  return TimeAgoPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let UtcPipe = /*#__PURE__*/(() => {
  class UtcPipe {
    transform(value) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(value).utc();
    }
  }
  UtcPipe.ɵfac = function UtcPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UtcPipe)();
  };
  UtcPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .EJ8({
    name: "amUtc",
    type: UtcPipe,
    pure: true,
    standalone: false
  });
  return UtcPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const ANGULAR_MOMENT_PIPES = [AddPipe, CalendarPipe, DateFormatPipe, DifferencePipe, DurationPipe, FromUnixPipe, ParsePipe, SubtractPipe, TimeAgoPipe, UtcPipe, FromUtcPipe, LocalTimePipe, LocalePipe, ParseZonePipe, IsBeforePipe, IsAfterPipe];
let MomentModule = /*#__PURE__*/(() => {
  class MomentModule {
    static forRoot(options) {
      return {
        ngModule: MomentModule,
        providers: [{
          provide: NGX_MOMENT_OPTIONS,
          useValue: {
            ...options
          }
        }]
      };
    }
  }
  MomentModule.ɵfac = function MomentModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MomentModule)();
  };
  MomentModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
    type: MomentModule
  });
  MomentModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({});
  return MomentModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-moment.mjs.map

/***/ }),

/***/ 79618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70821);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92838);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39407);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87254);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62612);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popNumber */ .R0)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY */ .w : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__/* .mergeAll */ .U)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__/* .from */ .H)(sources, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 79644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60345);

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

/***/ 80183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66765);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64616);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92968);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ 80390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R0: () => (/* binding */ popNumber),
/* harmony export */   lI: () => (/* binding */ popScheduler),
/* harmony export */   ms: () => (/* binding */ popResultSelector)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48479);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96550);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__/* .isScheduler */ .m)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map

/***/ }),

/***/ 80429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ms: () => (/* binding */ SafeSubscriber),
/* harmony export */   vU: () => (/* binding */ Subscriber)
/* harmony export */ });
/* unused harmony export EMPTY_OBSERVER */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47426);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58246);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43757);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97163);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73110);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81508);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82203);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63535);








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

/***/ 80872:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ UntilDestroy),
/* harmony export */   s: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56042);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52081);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62612);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68473);



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

/***/ 81038:
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

/***/ 81333:
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

/***/ 81362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ errorContext),
/* harmony export */   l: () => (/* binding */ captureError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33546);

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

/***/ 81508:
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

/***/ 81814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ 82203:
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

/***/ 82777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48479);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ 83039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* unused harmony export OperatorSubscriber */
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80429);

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

/***/ 83986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87157);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2134);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6015);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80390);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33764);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popNumber */ .R0)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY */ .w : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__/* .mergeAll */ .U)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__/* .from */ .H)(sources, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 84954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Subject)
/* harmony export */ });
/* unused harmony export AnonymousSubject */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3209);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76033);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9909);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33116);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81362);





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

/***/ 85611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* unused harmony export pipe */
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65149);

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

/***/ 85718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63823);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 86052:
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

/***/ 86157:
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

/***/ 86344:
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

/***/ 86957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 87020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2134);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15285);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53489);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ 87037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3259);

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

/***/ 87157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38380);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65149);


function mergeAll(concurrent = Infinity) {
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__/* .mergeMap */ .Z)(_util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ 87254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R0: () => (/* binding */ popNumber),
/* harmony export */   lI: () => (/* binding */ popScheduler),
/* harmony export */   ms: () => (/* binding */ popResultSelector)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63823);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85718);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__/* .isScheduler */ .m)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map

/***/ }),

/***/ 87818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91454);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3856);


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

/***/ 88782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ operate)
/* harmony export */ });
/* unused harmony export hasLift */
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63823);

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

/***/ 89285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DP: () => (/* binding */ JobSearchTabsEnum),
/* harmony export */   L: () => (/* binding */ JobPostTypeEnum),
/* harmony export */   Zc: () => (/* binding */ JobPostStatusEnum),
/* harmony export */   eJ: () => (/* binding */ JobPostSourceEnum)
/* harmony export */ });
var JobPostSourceEnum = /*#__PURE__*/function (JobPostSourceEnum) {
  JobPostSourceEnum["UPWORK"] = "upwork";
  JobPostSourceEnum["WEB"] = "web";
  JobPostSourceEnum["LINKEDIN"] = "linkedin";
  return JobPostSourceEnum;
}(JobPostSourceEnum || {});
var JobPostStatusEnum = /*#__PURE__*/function (JobPostStatusEnum) {
  JobPostStatusEnum["OPEN"] = "open";
  JobPostStatusEnum["APPLIED"] = "applied";
  JobPostStatusEnum["COMPLETED"] = "completed";
  JobPostStatusEnum["CLOSED"] = "closed";
  return JobPostStatusEnum;
}(JobPostStatusEnum || {});
var JobPostTypeEnum = /*#__PURE__*/function (JobPostTypeEnum) {
  JobPostTypeEnum["HOURLY"] = "hourly";
  JobPostTypeEnum["FIXED"] = "fixed";
  return JobPostTypeEnum;
}(JobPostTypeEnum || {});
var JobSearchTabsEnum = /*#__PURE__*/function (JobSearchTabsEnum) {
  JobSearchTabsEnum["ACTIONS"] = "ACTIONS";
  JobSearchTabsEnum["SEARCH"] = "SEARCH";
  return JobSearchTabsEnum;
}(JobSearchTabsEnum || {});

/***/ }),

/***/ 89428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92838);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92293);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54625);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ 90103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ createJobEmployeeRoutes)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _components_job_employee_job_employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41250);



/**
 * Creates jobs employee routes for the application
 *
 * @param _pageRouteRegistryService An instance of PageRouteRegistryService
 * @returns An array of Route objects
 */
const createJobEmployeeRoutes = _pageRouteRegistryService => [{
  path: '',
  component: _components_job_employee_job_employee_component__WEBPACK_IMPORTED_MODULE_0__/* .JobEmployeeComponent */ .z,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    // The tabset identifier for the route
    tabsetId: 'job-employee',
    // The data table identifier for the route
    dataTableId: 'job-employee',
    // The permission required to access the route
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ORG_JOB_EMPLOYEE_VIEW],
      redirectTo: '/pages/jobs/search'
    }
  }
}];

/***/ }),

/***/ 90215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
//# sourceMappingURL=throwUnobservableError.js.map

/***/ }),

/***/ 90600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobsModule: () => (/* binding */ JobsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6828);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10162);
/* harmony import */ var _job_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);











let JobsModule = /*#__PURE__*/(() => {
  class JobsModule {
    static {
      this.ɵfac = function JobsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: JobsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .ROUTES */ .bw,
          useFactory: service => (0,_job_routes__WEBPACK_IMPORTED_MODULE_3__/* .createJobsRoutes */ .d)(service),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .PageRouteRegistryService */ .L],
          multi: true
        }],
        imports: [_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G, _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterModule */ .iI.forChild([]), _plugins__WEBPACK_IMPORTED_MODULE_0__/* .PLUGINS */ .R, _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterModule */ .iI]
      });
    }
  }
  return JobsModule;
})();

/***/ }),

/***/ 90665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91454);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3856);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2134);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25447);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 90926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69112);

const ObjectUnsubscribedError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ 91269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}
//# sourceMappingURL=createObject.js.map

/***/ }),

/***/ 91454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ operate)
/* harmony export */ });
/* unused harmony export hasLift */
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48479);

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

/***/ 91620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ combineLatest)
/* harmony export */ });
/* unused harmony export combineLatestInit */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60345);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59001);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62612);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86957);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95658);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87254);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68456);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43584);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25617);









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

/***/ 91678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18398);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52910);


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

/***/ 92293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25617);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88782);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43584);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 92441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67076);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87020);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66700);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32711);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21379);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62775);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72538);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51305);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48957);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82777);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75543);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30548);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44234);













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

/***/ 92838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tg: () => (/* binding */ innerFrom)
/* harmony export */ });
/* unused harmony exports fromInteropObservable, fromArrayLike, fromPromise, fromIterable, fromAsyncIterable, fromReadableStreamLike */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86052);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26745);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18026);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60345);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50951);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1014);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90215);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37402);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47492);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63823);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37598);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58830);












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

/***/ 92883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ createJobMatchingRoutes)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _components_job_matching_job_matching_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(839);



/**
 * Creates jobs matching routes for the application
 *
 * @param _pageRouteRegistryService An instance of PageRouteRegistryService
 * @returns An array of Route objects
 */
const createJobMatchingRoutes = _pageRouteRegistryService => [{
  path: '',
  component: _components_job_matching_job_matching_component__WEBPACK_IMPORTED_MODULE_0__/* .JobMatchingComponent */ .M,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ORG_JOB_MATCHING_VIEW],
      redirectTo: '/pages/dashboard'
    }
  }
}];

/***/ }),

/***/ 92968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62971);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ 93058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ errorContext),
/* harmony export */   l: () => (/* binding */ captureError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22234);

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

/***/ 93402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88782);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43584);


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

/***/ 94895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8007);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66765);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62971);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30295);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47426);





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

/***/ 95634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ ApplyJobManuallyComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(86344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(86388);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(61469);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(99281);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9667);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3348);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68485);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68876);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19223);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29087);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89285);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(73800);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78870);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98106);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(44520);
/* harmony import */ var _ui_core_shared_src_lib_proposal_template_select_proposal_template_select_proposal_template_select_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(99434);
/* harmony import */ var _ui_core_shared_src_lib_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(54982);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(20345);
/* harmony import */ var _job_title_description_details_job_title_description_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(76504);

var ApplyJobManuallyComponent_1;






























const _c0 = ["formDirective"];
const _c1 = ["ckeditor"];
const _c2 = ["employeeSelector"];
const _c3 = a0 => ({
  "nv-file-over": a0
});
const _c4 = a0 => ({
  spin: a0
});
function ApplyJobManuallyComponent_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 33)(2, "div", 9)(3, "div", 13)(4, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "ngx-proposal-template-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ApplyJobManuallyComponent_ng_container_43_Template_ngx_proposal_template_select_selectedChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onProposalTemplateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 36)(9, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function ApplyJobManuallyComponent_ng_container_43_Template_button_throttledClick_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.proposal$.next(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 3, "PROPOSALS_PAGE.REGISTER.TEMPLATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("employeeId", ctx_r2.form.get("employeeId").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 5, "BUTTONS.GENERATE_PROPOSAL"), " ");
  }
}
function ApplyJobManuallyComponent_ng_template_44_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1, "Generating Proposal ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function ApplyJobManuallyComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 9)(1, "div", 26)(2, "div", 27)(3, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 39)(7, "nb-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function ApplyJobManuallyComponent_ng_template_44_Template_nb_icon_throttledClick_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.proposal$.next(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, ApplyJobManuallyComponent_ng_template_44_ng_template_8_Template, 2, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "ckeditor", 41, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function ApplyJobManuallyComponent_ng_template_44_Template_ckeditor_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onEditorChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "FORM.LABELS.COVER_LETTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(6, _c4, ctx_r2.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("config", ctx_r2.ckConfig);
  }
}
function ApplyJobManuallyComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 9)(1, "div", 26)(2, "div", 27)(3, "div", 39)(4, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function ApplyJobManuallyComponent_ng_template_45_Template_nb_icon_throttledClick_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.proposal$.next(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "ckeditor", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 3, "FORM.LABELS.DETAILS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c4, ctx_r2.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("config", ctx_r2.ckConfig);
  }
}
let ApplyJobManuallyComponent = /*#__PURE__*/(() => {
  let ApplyJobManuallyComponent = class ApplyJobManuallyComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    static {
      ApplyJobManuallyComponent_1 = this;
    }
    static buildForm(fb) {
      return fb.group({
        proposal: [],
        // Cover Letter
        details: [],
        // Proposal details
        attachments: [],
        rate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        // Hourly Rate
        employeeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]
      });
    }
    get selectedEmployee() {
      return this._selectedEmployee;
    }
    set selectedEmployee(selectedEmployee) {
      this._selectedEmployee = selectedEmployee;
    }
    get employeeJobPost() {
      return this._employeeJobPost;
    }
    set employeeJobPost(value) {
      this._employeeJobPost = value;
      this.patchFormValue();
    }
    constructor(translateService, _fb, _sanitizer, _dialogRef, _store, _jobService, _errorHandlingService) {
      super(translateService);
      this.translateService = translateService;
      this._fb = _fb;
      this._sanitizer = _sanitizer;
      this._dialogRef = _dialogRef;
      this._store = _store;
      this._jobService = _jobService;
      this._errorHandlingService = _errorHandlingService;
      this.JobPostSourceEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobPostSourceEnum */ .eJ;
      this.FormHelpers = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormHelpers */ .k;
      this.ckConfig = {
        ..._gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .ckEditorConfig */ .a,
        toolbar: [{
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat']
        }, {
          name: 'clipboard',
          items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']
        }],
        height: '191px' // Set the desired height here
      };
      this.hasDropZoneOver = false;
      this.loading = false;
      this.proposal$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .B();
      /** Apply Job Manually Mutation Form */
      this.form = ApplyJobManuallyComponent_1.buildForm(this._fb);
      /**
       * Newly generate employee job application
       */
      this.application$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .B();
    }
    ngOnInit() {
      const storeOrganization$ = this._store.selectedOrganization$;
      const storeEmployee$ = this._store.selectedEmployee$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(([organization]) => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(([organization, employee]) => {
        this.organization = organization;
        this.selectedEmployee = employee && employee.id ? employee : null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(() => this.employeeSelector.selectEmployeeById(this.selectedEmployee?.id)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
      this._store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(() => this._loadUploaderSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
      this.proposal$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(() => !!this.form.get('employeeId').value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(() => this.callPreProcessEmployeeJobApplication()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
      this.application$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(application => this.generateAIProposal(application)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      this.uploader.onAfterAddingFile = file => {
        file.withCredentials = false;
      };
      this.uploader.onSuccessItem = (item, response, status) => {
        try {
          if (response) {
            const image = JSON.parse(response);
            if (image && image.id) {
              this.form.get('attachments').setValue(image.fullUrl);
              this.form.get('attachments').updateValueAndValidity();
            }
          }
        } catch (error) {
          console.log('Error while uploaded project files', error);
        }
      };
      this.uploader.onErrorItem = (item, response, status) => {
        try {
          if (response) {
            const error = JSON.parse(response);
            console.log('Error while uploaded project files error', error);
            this._errorHandlingService.handleError(error);
          }
        } catch (error) {
          console.log('Error while uploaded project files error', error);
        }
      };
    }
    ngOnDestroy() {
      if (this.retryUntil$) {
        this.retryUntil$.unsubscribe();
      }
    }
    /**
     * Load settings for the file uploader, including headers and additional form data.
     *
     * @returns void
     */
    _loadUploaderSettings() {
      if (!this._store.user) {
        return;
      }
      const token = this._store.token;
      const tenantId = this._store.user.tenantId;
      const headers = [];
      headers.push({
        name: 'Authorization',
        value: `Bearer ${token}`
      });
      headers.push({
        name: 'Tenant-Id',
        value: tenantId
      });
      if (!!this.organization) {
        const {
          id,
          tenantId
        } = this.organization;
        headers.push({
          name: 'Organization-Id',
          value: `${id}`
        });
        headers.push({
          name: 'Tenant-Id',
          value: `${tenantId}`
        });
      }
      const uploaderOptions = {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_13__/* .environment */ .c.API_BASE_URL + `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_14__/* .API_PREFIX */ .m4}/image-assets/upload/proposal_attachments`,
        method: 'POST',
        // XHR request method
        autoUpload: true,
        // Upload files automatically upon addition to upload queue
        isHTML5: true,
        // Use xhrTransport in favor of iframeTransport
        removeAfterUpload: true,
        // Calculate progress independently for each uploaded file
        headers: headers // XHR request headers
      };
      this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__/* .FileUploader */ .l0(uploaderOptions);
      // Adding additional form data
      this.uploader.onBuildItemForm = (fileItem, form) => {
        if (!!this._store.user.tenantId) {
          form.append('tenantId', tenantId);
        }
        if (!!this.organization) {
          const {
            id,
            tenantId
          } = this.organization;
          form.append('organizationId', id);
          form.append('tenantId', tenantId);
        }
      };
    }
    /**
     * File over base
     * @param e
     */
    fileOverBase(e) {
      this.hasDropZoneOver = e;
    }
    /**
     * Patch job provider details after load page
     */
    patchFormValue() {
      if (this.employeeJobPost) {
        const {
          providerCode,
          employee
        } = this.employeeJobPost;
        this.setDefaultEmployee(employee);
        const proposal = this.form.get('proposal');
        const details = this.form.get('details');
        /** Cover Letter required if job provider is Upwork */
        if (providerCode === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .JobPostSourceEnum */ .eJ.UPWORK) {
          proposal.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]);
          details.setValidators(null);
        } else {
          proposal.setValidators(null);
          details.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]);
        }
        this.form.updateValueAndValidity();
      }
    }
    /**
     * On Proposal template change
     *
     * @param item
     */
    onProposalTemplateChange(item) {
      /** Generate proposal using GauzyAI */
      this.proposalTemplate = item || null;
      /** Patch proposal value inside form directive */
      this.form.patchValue({
        proposal: this.proposalTemplate?.content || null,
        details: this.proposalTemplate?.content || null
      });
    }
    /**
     * On submit job proposal details
     */
    onSubmit() {
      if (this.form.invalid) {
        return;
      }
      const {
        employeeId,
        proposal,
        rate,
        details,
        attachments
      } = this.form.value;
      const {
        providerCode,
        providerJobId
      } = this.employeeJobPost;
      /** Apply job post input */
      const applyJobPost = {
        applied: true,
        employeeId,
        proposal,
        rate,
        details,
        attachments,
        providerCode,
        providerJobId
      };
      try {
        this._dialogRef.close(applyJobPost);
      } catch (error) {
        console.log('Error while applying job post', error);
        this._errorHandlingService.handleError(error);
      }
    }
    /** Set default employee for job apply */
    setDefaultEmployee(employee) {
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .isNotEmpty */ .hj)(employee) && this.form.get('employeeId')) {
        this.form.get('employeeId').setValue(employee.id);
        this.form.get('employeeId').updateValueAndValidity();
        this.setDefaultEmployeeRates(employee);
      }
    }
    /** Set default employee rates */
    setDefaultEmployeeRates(employee) {
      if (employee) {
        this.form.get('rate').setValue(employee?.billRateValue);
        this.form.get('rate').updateValueAndValidity();
      }
    }
    /** Create employee job application record. */
    callPreProcessEmployeeJobApplication() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(function* () {
        /** Generate job application record for employee */
        const employeeId = _this.form.get('employeeId').value;
        if (!employeeId) {
          return;
        }
        const rate = _this.form.get('rate').value;
        const proposalTemplate = _this.proposalTemplate?.content || null;
        const jobPost = _this.employeeJobPost.jobPost;
        const {
          id: employeeJobPostId,
          isActive,
          isArchived
        } = _this.employeeJobPost;
        try {
          /** Generate employee job application request parameters */
          const generateProposalRequest = {
            employeeId: employeeId,
            proposalTemplate: proposalTemplate,
            employeeJobPostId: employeeJobPostId,
            jobPostId: jobPost.id,
            jobPost: jobPost,
            providerCode: jobPost.providerCode,
            providerJobId: jobPost.providerJobId,
            isProposalGeneratedByAI: true,
            jobStatus: jobPost.jobStatus,
            jobType: jobPost.jobType,
            jobDateCreated: jobPost.jobDateCreated,
            rate: rate,
            isActive: isActive,
            isArchived: isArchived,
            attachments: '{}',
            qa: '{}',
            terms: '{}'
          };
          _this.loading = true;
          // Send the employee job application
          const application = yield _this._jobService.preProcessEmployeeJobApplication(generateProposalRequest);
          // send the employee job application
          _this.application$.next(application);
        } catch (error) {
          console.error('Error while creating employee job application', error);
        }
      })();
    }
    /**
     * Generate AI proposal for employee job application
     *
     * @param application
     */
    generateAIProposal(employeeJobApplication) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(function* () {
        try {
          const employeeJobApplicationId = employeeJobApplication.id;
          yield _this2._jobService.generateAIProposal(employeeJobApplicationId);
          // Sleeps for 10 seconds before get proposal.
          const sleepDelay = 10000;
          yield (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .sleep */ .yy)(sleepDelay);
          // try to get AI generated proposal for specific employee job application
          yield _this2.getAIGeneratedProposal(employeeJobApplicationId);
        } catch (error) {
          console.error('Error while initiate process for generate AI proposal by employee job application', error);
        }
      })();
    }
    /**
     * Get AI generated proposal for employee job application
     * Every 3 seconds try to get proposal
     *
     * @param employeeJobApplicationId
     */
    getAIGeneratedProposal(employeeJobApplicationId) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(function* () {
        if (_this3.retryUntil$) {
          _this3.retryUntil$.unsubscribe();
        }
        const retryDelay = 5000; // Delay between retries in milliseconds
        // sleep for every 3 seconds
        const source$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .timer */ .O)(0, retryDelay);
        _this3.retryUntil$ = source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(() => !!employeeJobApplicationId), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__/* .switchMap */ .n)(() => _this3._jobService.getEmployeeJobApplication(employeeJobApplicationId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(application => {
          const {
            isProposalGeneratedByAI
          } = application;
          // Stop making API calls as the desired parameter is found
          if (isProposalGeneratedByAI) {
            try {
              /** If employee proposal generated successfully from Gauzy AI */
              if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .isNotEmpty */ .hj)(application)) {
                // Replace line breaks with spaces
                const proposal = application.proposal.replace(/\n\n/g, '<br/><br>').replace(/\n/g, '<br/>');
                // Set ckeditor html content
                _this3.ckeditor.instance.document.getBody().setHtml(proposal);
                /** Patch proposal value inside form directive */
                _this3.form.patchValue({
                  details: proposal,
                  proposal: proposal
                });
              } else {
                _this3.form.patchValue({
                  proposal: _this3.proposalTemplate,
                  details: _this3.proposalTemplate
                });
              }
            } finally {
              _this3.loading = false;
              _this3.retryUntil$.unsubscribe();
            }
          }
        }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(_this3)).subscribe();
      })();
    }
    /**
     * Get plain text from proposal
     *
     */
    getPlainText() {
      const content = this.ckeditor.instance.getData();
      /**
       * Create temporary div element
       */
      const element = document.createElement('div');
      element.innerHTML = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .SecurityContext */ .WPN.HTML,
      // Set bypassSecurityTrustHtml to allow the HTML content
      content);
      const plainText = element.textContent || element.innerText || '';
      return plainText.trim();
    }
    /**
     * On editor change
     */
    onEditorChange(content) {}
    /**
     * Close dialog
     */
    close() {
      this._dialogRef.close(false);
    }
    static {
      this.ɵfac = function ApplyJobManuallyComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ApplyJobManuallyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__/* .DomSanitizer */ .up), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .JobService */ .L), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ApplyJobManuallyComponent,
        selectors: [["ga-apply-job-manually"]],
        viewQuery: function ApplyJobManuallyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c2, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.formDirective = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.ckeditor = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.employeeSelector = _t.first);
          }
        },
        inputs: {
          selectedEmployee: "selectedEmployee",
          employeeJobPost: "employeeJobPost"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 62,
        vars: 47,
        consts: [["formDirective", "ngForm"], ["employeeSelector", ""], ["ckeditor", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [1, "row"], [1, "col-5"], [1, "p-3"], [3, "rowData", "hideJobIcon"], [1, "col-7"], [3, "ngSubmit", "formGroup"], [1, "col-xl-3", "col-lg-7"], [1, "form-group", "m-0"], ["for", "job_employee", 1, "label"], [3, "selectionChanged", "placeholder", "clearable", "addTag", "defaultSelected", "showAllEmployeesOption", "skipGlobalChange", "selectedEmployee"], [1, "col-xl-2", "col-lg-5"], ["for", "hourly_rate", 1, "label"], ["type", "button", "nbPrefix", "", "nbButton", "", "ghost", ""], ["id", "hourly_rate", "min", "1", "fullWidth", "", "nbInput", "", "type", "number", "formControlName", "rate", 1, "form-control"], [4, "ngIf"], [3, "ngIf"], [1, "row", "drag-drop"], [1, "col-12"], [1, "form-group"], ["for", "attachments", 1, "label"], ["ng2FileDrop", "", 1, "well", "my-drop-zone", 3, "fileOver", "uploader", "ngClass"], [1, "text-right"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"], [1, "col-xl-7", "col-lg-12"], ["for", "proposal_template", 1, "label"], ["id", "proposal_template", 3, "selectedChange", "employeeId"], [1, "col-5", "h-100", "align-self-end"], ["status", "primary", "outline", "", "nbButton", "", "debounceClick", "", 1, "button-generate-proposal", 3, "throttledClick"], ["for", "proposal", 1, "label"], [1, "sync-container"], ["icon", "sync-outline", "debounceClick", "", 1, "sync", "caption-2", 3, "throttledClick", "ngClass"], ["id", "proposal", "formControlName", "proposal", 3, "ngModelChange", "config"], [1, "ml-1", "caption-2"], ["for", "details", 1, "label", "m-0"], ["icon", "sync-outline", "debounceClick", "", 1, "sync", 3, "throttledClick", "ngClass"], ["id", "details", "formControlName", "details", 3, "config"]],
        template: function ApplyJobManuallyComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "nb-card")(2, "nb-card-header", 4)(3, "span", 5)(4, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ApplyJobManuallyComponent_Template_i_click_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "h5", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body", 8)(9, "div", 9)(10, "div", 10)(11, "nb-card")(12, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "nb-card-body", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(16, "job-title-description-details", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "div", 13)(18, "nb-card")(19, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "nb-card-body")(23, "form", 14, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function ApplyJobManuallyComponent_Template_form_ngSubmit_23_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onSubmit());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "div", 9)(26, "div", 15)(27, "div", 16)(28, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "ga-employee-selector", 18, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectionChanged", function ApplyJobManuallyComponent_Template_ga_employee_selector_selectionChanged_31_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.setDefaultEmployee($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(34, "div", 19)(35, "div", 16)(36, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(39, "nb-form-field")(40, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(41, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(42, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(43, ApplyJobManuallyComponent_ng_container_43_Template, 12, 7, "ng-container", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(44, ApplyJobManuallyComponent_ng_template_44_Template, 11, 8, "ng-template", 24)(45, ApplyJobManuallyComponent_ng_template_45_Template, 9, 7, "ng-template", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(46, "div", 25)(47, "div", 26)(48, "div", 27)(49, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(52, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("fileOver", function ApplyJobManuallyComponent_Template_div_fileOver_52_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.fileOverBase($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(55, "nb-card-footer", 30)(56, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ApplyJobManuallyComponent_Template_button_click_56_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(59, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ApplyJobManuallyComponent_Template_button_click_59_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const formDirective_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(24);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(formDirective_r6.ngSubmit.emit());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(61, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 25, "JOBS.APPLY_JOB_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 27, "JOBS.JOB_DETAILS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx.employeeJobPost)("hideJobIcon", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(21, 29, "PROPOSALS_PAGE.PROPOSAL_DETAILS.PROPOSAL_DETAILS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(30, 31, "HEADER.SELECT_EMPLOYEE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(33, 33, "HEADER.SELECT_EMPLOYEE"))("clearable", false)("addTag", false)("defaultSelected", false)("showAllEmployeesOption", false)("skipGlobalChange", true)("selectedEmployee", ctx.selectedEmployee);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(38, 35, "FORM.LABELS.HOURLY_RATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form.get("employeeId").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.JobPostSourceEnum.UPWORK === (ctx.employeeJobPost == null ? null : ctx.employeeJobPost.jobPost == null ? null : ctx.employeeJobPost.jobPost.providerCode));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.JobPostSourceEnum.UPWORK !== (ctx.employeeJobPost == null ? null : ctx.employeeJobPost.jobPost == null ? null : ctx.employeeJobPost.jobPost.providerCode));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(51, 37, "FORM.LABELS.ATTACHMENTS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("uploader", ctx.uploader)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(45, _c3, ctx.hasDropZoneOver));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(54, 39, "FORM.PLACEHOLDERS.DRAG_DROP_FILE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(58, 41, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(61, 43, "BUTTONS.APPLY"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbPrefixDirective */ .IEe, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbInputDirective */ .i6h, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_25__/* .CKEditorComponent */ .h, ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__/* .FileDropDirective */ .Ff, _ui_core_shared_src_lib_proposal_template_select_proposal_template_select_proposal_template_select_component__WEBPACK_IMPORTED_MODULE_26__/* .ProposalTemplateSelectComponent */ .y, _ui_core_shared_src_lib_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_27__/* .EmployeeSelectorComponent */ .R, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_29__/* .DebounceClickDirective */ .J, _job_title_description_details_job_title_description_details_component__WEBPACK_IMPORTED_MODULE_30__/* .JobTitleDescriptionDetailsComponent */ .h, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]    > nb-card[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 95%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]     .cancel {\n  justify-content: flex-start;\n}\n[dir=rtl]   [_nghost-%COMP%]     .title {\n  text-align: right;\n}\n[_nghost-%COMP%]     job-title-description-details div.job-detail {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     job-title-description-details div.job-detail .job-body {\n  overflow: auto;\n  max-height: calc(100vh - 30.75rem);\n}\n[_nghost-%COMP%]   .well[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   .my-drop-zone[_ngcontent-%COMP%] {\n  border: dashed 3px var(--gauzy-border-default-color);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .nv-file-over[_ngcontent-%COMP%] {\n  border: dashed 3px red;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .sync-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n[_nghost-%COMP%]   .sync-container[_ngcontent-%COMP%]   .sync[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .sync-container[_ngcontent-%COMP%]   .sync.spin[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  animation: _ngcontent-%COMP%_rotate 1s linear 0s infinite;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n[_nghost-%COMP%]   .sync-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]   .button-generate-proposal[_ngcontent-%COMP%] {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  margin-bottom: 5.5px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  height: calc(100vh - 22.5rem);\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .drag-drop[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n[_nghost-%COMP%]     .cke_reset {\n  height: calc(100vh - 40.5rem) !important;\n}"]
      });
    }
  };
  return ApplyJobManuallyComponent;
})();
ApplyJobManuallyComponent = ApplyJobManuallyComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .c$, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__/* .DomSanitizer */ .up, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .JobService */ .L, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .ErrorHandlingService */ .X])], ApplyJobManuallyComponent);


/***/ }),

/***/ 95658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93402);

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

/***/ 96047:
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

/***/ 96550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48479);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 97163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43757);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82203);


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

/***/ 98037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63823);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88782);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43584);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86957);




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

/***/ 98167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60345);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57697);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63823);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25617);




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

/***/ 98455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33381);

const UnsubscriptionError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 99281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2134);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91454);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3856);



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

/***/ 99968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49516);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88782);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43584);



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

/***/ })

}]);