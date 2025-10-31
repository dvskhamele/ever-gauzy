"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5774],{

/***/ 15774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ EditTimeLogModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39938);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20893);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(77020);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(79475);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(32386);
/* harmony import */ var _directives_time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6485);
/* harmony import */ var _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(34268);
/* harmony import */ var _timer_picker_timer_range_picker_timer_range_picker_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(68122);
/* harmony import */ var _tasks_task_select_task_task_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(33765);
/* harmony import */ var _selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(46582);
/* harmony import */ var _selectors_team_team_team_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(42148);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(57354);
/* harmony import */ var _contact_selector_contact_selector_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(90975);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(19223);
/* harmony import */ var _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(33867);

var EditTimeLogModalComponent_1;




























const _c0 = a0 => [a0];
function EditTimeLogModalComponent_form_0_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "ngx-avatar", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("id", ctx_r1.timeLog == null ? null : ctx_r1.timeLog.employee == null ? null : ctx_r1.timeLog.employee.id)("employee", ctx_r1.timeLog == null ? null : ctx_r1.timeLog.employee)("name", ctx_r1.timeLog == null ? null : ctx_r1.timeLog.employee == null ? null : ctx_r1.timeLog.employee.user == null ? null : ctx_r1.timeLog.employee.user.name)("src", ctx_r1.timeLog == null ? null : ctx_r1.timeLog.employee == null ? null : ctx_r1.timeLog.employee.user == null ? null : ctx_r1.timeLog.employee.user.imageUrl);
  }
}
function EditTimeLogModalComponent_form_0_div_11_ng_template_2_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TIMESHEET.VALIDATION.EMPLOYEE"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_11_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, EditTimeLogModalComponent_form_0_div_11_ng_template_2_div_3_div_1_Template, 3, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", (tmp_7_0 = ctx_r1.form.get("employeeId")) == null ? null : tmp_7_0.errors.required);
  }
}
function EditTimeLogModalComponent_form_0_div_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "ga-employee-multi-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(3, EditTimeLogModalComponent_form_0_div_11_ng_template_2_div_3_Template, 2, 1, "div", 24);
  }
  if (rf & 2) {
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    const f_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("multiple", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 3, "TIMESHEET.SELECT_EMPLOYEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_8_0 = ctx_r1.form.get("employeeId")) == null ? null : tmp_8_0.invalid) && f_r3.submitted);
  }
}
function EditTimeLogModalComponent_form_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, EditTimeLogModalComponent_form_0_div_11_div_1_Template, 2, 4, "div", 36)(2, EditTimeLogModalComponent_form_0_div_11_ng_template_2_Template, 4, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const employeeSelect_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.mode == "update")("ngIfElse", employeeSelect_r4);
  }
}
function EditTimeLogModalComponent_form_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 42)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(6, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "FORM.LABELS.PERIOD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(6, 4, ctx_r1.timeDiff));
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_div_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const overlapTimeLog_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", overlapTimeLog_r5 == null ? null : overlapTimeLog_r5.project == null ? null : overlapTimeLog_r5.project.name, " ");
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_div_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TIMESHEET.NO_PROJECT"));
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_div_18_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "span")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const overlapTimeLog_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "TIMESHEET.TODO"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", overlapTimeLog_r5 == null ? null : overlapTimeLog_r5.task == null ? null : overlapTimeLog_r5.task.title, " ");
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_div_18_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TIMESHEET.NO_TODO"));
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(2, EditTimeLogModalComponent_form_0_nb_card_18_div_18_span_2_Template, 2, 1, "span", 51)(3, EditTimeLogModalComponent_form_0_nb_card_18_div_18_ng_template_3_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(6, EditTimeLogModalComponent_form_0_nb_card_18_div_18_span_6_Template, 5, 4, "span", 51)(7, EditTimeLogModalComponent_form_0_nb_card_18_div_18_ng_template_7_Template, 3, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(11, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const overlapTimeLog_r5 = ctx.$implicit;
    const noProject_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(4);
    const noToDo_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵclassMap"] */ .HbH(ctx_r1.overlaps.at(-1) === overlapTimeLog_r5 ? "row item m-0 py-3 align-items-center" : "row item border-bottom m-0 py-3 align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", overlapTimeLog_r5 == null ? null : overlapTimeLog_r5.project)("ngIfElse", noProject_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", overlapTimeLog_r5 == null ? null : overlapTimeLog_r5.task)("ngIfElse", noToDo_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(11, 7, overlapTimeLog_r5.overlapDuration), " ");
  }
}
function EditTimeLogModalComponent_form_0_nb_card_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 43)(1, "nb-card-header")(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body", 46)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(10, "div", 47)(11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(18, EditTimeLogModalComponent_form_0_nb_card_18_div_18_Template, 12, 9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(5, 6, "TIMESHEET.TIME_OVERLAPS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(9, 8, "TIMESHEET.OVERLAP_MESSAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(13, 10, "TIMESHEET.PROJECT"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(14, 12, "TIMESHEET.TODO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(17, 14, "TIMESHEET.DURATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.overlaps);
  }
}
function EditTimeLogModalComponent_form_0_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TIMER_TRACKER.VALIDATION.CLIENT_REQUIRED"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, EditTimeLogModalComponent_form_0_div_31_div_1_Template, 3, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", (tmp_4_0 = ctx_r1.form.get("organizationContactId")) == null ? null : tmp_4_0.errors.required);
  }
}
function EditTimeLogModalComponent_form_0_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TIMESHEET.VALIDATION.PROJECT"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, EditTimeLogModalComponent_form_0_div_38_div_1_Template, 3, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", (tmp_4_0 = ctx_r1.form.get("projectId")) == null ? null : tmp_4_0.errors.required);
  }
}
function EditTimeLogModalComponent_form_0_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TIMESHEET.VALIDATION.TASK"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, EditTimeLogModalComponent_form_0_div_52_div_1_Template, 3, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.form.get("taskId").errors.required);
  }
}
function EditTimeLogModalComponent_form_0_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TIMESHEET.VALIDATION.DESCRIPTION"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, EditTimeLogModalComponent_form_0_div_60_div_1_Template, 3, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", (tmp_4_0 = ctx_r1.form.get("description")) == null ? null : tmp_4_0.errors.required);
  }
}
function EditTimeLogModalComponent_form_0_nb_option_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const reason_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("value", reason_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", reason_r8, " ");
  }
}
function EditTimeLogModalComponent_form_0_div_72_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TIMESHEET.VALIDATION.REASON"), " ");
  }
}
function EditTimeLogModalComponent_form_0_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, EditTimeLogModalComponent_form_0_div_72_div_1_Template, 3, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", (tmp_4_0 = ctx_r1.form.get("reason")) == null ? null : tmp_4_0.errors.required);
  }
}
function EditTimeLogModalComponent_form_0_ng_template_79_ng_template_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("confirm", function EditTimeLogModalComponent_form_0_ng_template_79_ng_template_0_button_0_Template_button_confirm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onDeleteConfirm(ctx_r1.timeLog));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "TIMESHEET.DELETE_TIMELOG"))("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 4, "BUTTONS.DELETE"));
  }
}
function EditTimeLogModalComponent_form_0_ng_template_79_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, EditTimeLogModalComponent_form_0_ng_template_79_ng_template_0_button_0_Template, 4, 6, "button", 55);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.mode === "update");
  }
}
function EditTimeLogModalComponent_form_0_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, EditTimeLogModalComponent_form_0_ng_template_79_ng_template_0_Template, 1, 1, "ng-template", 54);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("permission", ctx_r1.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
function EditTimeLogModalComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "form", 6, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("submit", function EditTimeLogModalComponent_form_0_Template_form_submit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.addTime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(2, "nb-card")(3, "nb-card-header", 7)(4, "span", 8)(5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function EditTimeLogModalComponent_form_0_Template_i_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "div", 10)(7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(11, EditTimeLogModalComponent_form_0_div_11_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(12, "div", 13)(13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(14, "ngx-timer-range-picker", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(15, EditTimeLogModalComponent_form_0_div_15_Template, 7, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(16, "div", 17)(17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(18, EditTimeLogModalComponent_form_0_nb_card_18_Template, 19, 16, "nb-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(19, "div", 17)(20, "div", 18)(21, "nb-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(24, "div", 17)(25, "div", 21)(26, "div", 22)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(30, "ga-contact-selector", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(31, EditTimeLogModalComponent_form_0_div_31_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(32, "div", 25)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(36, "ga-project-selector", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(38, EditTimeLogModalComponent_form_0_div_38_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(39, "div", 17)(40, "div", 14)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(44, "ga-team-selector", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(46, "div", 17)(47, "div", 18)(48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(51, "ga-task-selector", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(52, EditTimeLogModalComponent_form_0_div_52_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(53, "div", 17)(54, "div", 18)(55, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(58, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(60, EditTimeLogModalComponent_form_0_div_60_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(61, "div", 17)(62, "div", 18)(63, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(66, "nb-form-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(67, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(69, "nb-autocomplete", 30, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(71, EditTimeLogModalComponent_form_0_nb_option_71_Template, 2, 2, "nb-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(72, EditTimeLogModalComponent_form_0_div_72_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(73, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(74, "nb-card-footer")(75, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(76, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(79, EditTimeLogModalComponent_form_0_ng_template_79_Template, 1, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_13_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_34_0;
    let tmp_38_0;
    let tmp_44_0;
    const f_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(1);
    const auto_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(70);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(9, 46, ctx_r1.mode == "update" ? "TIMESHEET.EDIT_TIME_LOGS" : "TIMESHEET.ADD_TIME_LOGS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(72, _c0, ctx_r1.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("maxDate", ctx_r1.futureDateAllowed ? null : ctx_r1.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.timeDiff);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.overlaps.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(23, 48, "TIMER_TRACKER.IS_BILLABLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(29, 50, "TIMER_TRACKER.SELECT_CLIENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("employeeId", (tmp_11_0 = ctx_r1.form.get("employeeId")) == null ? null : tmp_11_0.value)("required", ctx_r1.organization == null ? null : ctx_r1.organization.requireClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_13_0 = ctx_r1.form.get("organizationContactId")) == null ? null : tmp_13_0.invalid) && f_r3.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(35, 52, "TIMER_TRACKER.SELECT_PROJECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("skipGlobalChange", true)("showAllOption", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(37, 54, "TIMER_TRACKER.SELECT_PROJECT"))("defaultSelected", false)("employeeId", (tmp_19_0 = ctx_r1.form.get("employeeId")) == null ? null : tmp_19_0.value)("organizationContactId", (tmp_20_0 = ctx_r1.form.get("organizationContactId")) == null ? null : tmp_20_0.value)("required", ctx_r1.organization == null ? null : ctx_r1.organization.requireProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_22_0 = ctx_r1.form.get("projectId")) == null ? null : tmp_22_0.invalid) && f_r3.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(43, 56, "TIMER_TRACKER.SELECT_TEAM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("skipGlobalChange", true)("showAllOption", false)("defaultSelected", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(45, 58, "TIMER_TRACKER.SELECT_TEAM"))("employeeId", ctx_r1.getControlValue("employeeId"))("projectId", ctx_r1.getControlValue("projectId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(50, 60, "TIMER_TRACKER.SELECT_TASK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("employeeId", ctx_r1.getControlValue("employeeId"))("projectId", ctx_r1.getControlValue("projectId"))("required", ctx_r1.organization == null ? null : ctx_r1.organization.requireTask);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_34_0 = ctx_r1.form.get("taskId")) == null ? null : tmp_34_0.invalid) && f_r3.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(57, 62, "TIMER_TRACKER.DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(59, 64, "TIMER_TRACKER.DESCRIPTION"))("required", ctx_r1.organization == null ? null : ctx_r1.organization.requireDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_38_0 = ctx_r1.form.get("description")) == null ? null : tmp_38_0.invalid) && f_r3.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(65, 66, "TIMESHEET.REASON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(68, 68, "TIMESHEET.REASON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbAutocomplete", auto_r10)("required", ctx_r1.organization == null ? null : ctx_r1.organization.requireReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.reasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_44_0 = ctx_r1.form.get("reason")) == null ? null : tmp_44_0.invalid) && f_r3.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx_r1.loading)("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(78, 70, ctx_r1.mode == "create" ? "TIMESHEET.ADD_TIME" : "TIMESHEET.UPDATE_TIME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx_r1.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
let EditTimeLogModalComponent = /*#__PURE__*/(() => {
  let EditTimeLogModalComponent = class EditTimeLogModalComponent {
    static {
      EditTimeLogModalComponent_1 = this;
    }
    set timeLog(value) {
      this._timeLog = {
        ...value
      }; // Shallow copy to avoid mutation
      this.mode = this._timeLog?.id ? 'update' : 'create';
    }
    get timeLog() {
      return this._timeLog;
    }
    static buildForm(fb, self) {
      return fb.group({
        isBillable: [true],
        employeeId: [],
        projectId: [],
        organizationContactId: [],
        organizationTeamId: [],
        taskId: [],
        description: [],
        reason: [],
        selectedRange: [self.selectedRange]
      });
    }
    constructor(_fb, _cdr, _dialogRef, _store, _timesheetService, _toastrService) {
      this._fb = _fb;
      this._cdr = _cdr;
      this._dialogRef = _dialogRef;
      this._store = _store;
      this._timesheetService = _timesheetService;
      this._toastrService = _toastrService;
      // Permissions and basic state initialization
      this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U;
      this.today = new Date();
      this.mode = 'create';
      this.loading = false;
      this.overlaps = [];
      // Date range and time-related properties
      this.selectedRange = {
        start: null,
        end: null
      };
      this.timeDiff = null;
      this.futureDateAllowed = false;
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .B();
      // Additional properties
      this.reasons = ['Worked offline', 'Internet issue', 'Forgot to track', 'Usability issue', 'App issue'];
      this.selectedReason = '';
      // Time log state management
      this._timeLog = {};
      /*
       * TimeLog Mutation Form
       */
      this.form = EditTimeLogModalComponent_1.buildForm(this._fb, this);
      const minutes = moment__WEBPACK_IMPORTED_MODULE_0__().get('minutes');
      const roundTime = moment__WEBPACK_IMPORTED_MODULE_0__().subtract(minutes - minutes % 10);
      this.selectedRange = {
        end: roundTime.toDate(),
        start: roundTime.subtract(1, 'hour').toDate()
      };
    }
    ngOnInit() {
      // Subscribe to subject for overlap checks
      this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(500), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.checkOverlaps()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
      // Subscribe to selected organization
      this._store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => {
        this.organization = organization;
        this.futureDateAllowed = organization.futureDateAllowed;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
      const employeeId$ = this.form.get('employeeId').valueChanges;
      const selectedRange$ = this.form.get('selectedRange').valueChanges;
      // Combine employeeId and selectedRange value changes
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .combineLatest */ .z)([employeeId$, selectedRange$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(300), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(([employeeId, selectedRange]) => !!employeeId && !!selectedRange), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([employeeId, selectedRange]) => {
        this.employee = employeeId;
        this.selectedRange = selectedRange;
        const {
          start,
          end
        } = selectedRange;
        const startMoment = moment__WEBPACK_IMPORTED_MODULE_0__(start);
        const endMoment = moment__WEBPACK_IMPORTED_MODULE_0__(end);
        if (startMoment.isValid() && endMoment.isValid()) {
          this.timeDiff = new Date(endMoment.diff(startMoment, 'seconds'));
        } else {
          this.timeDiff = null;
        }
        // Notify subject about changes
        this.subject$.next(true);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      if (!this._timeLog) {
        return;
      }
      // Initialize form with the time log values
      this.populateFormWithTimeLog(this._timeLog);
    }
    /**
     * Populates the form with time log data.
     *
     * @param {ITimeLog} timeLog - The time log object containing data to set in the form.
     * @returns {void}
     */
    populateFormWithTimeLog(timeLog) {
      this.form.setValue({
        isBillable: timeLog.isBillable ?? true,
        employeeId: timeLog.employeeId ?? this._store.selectedEmployee.id,
        projectId: timeLog.projectId ?? null,
        organizationContactId: timeLog.organizationContactId ?? null,
        organizationTeamId: timeLog.organizationTeamId ?? null,
        taskId: timeLog.taskId ?? null,
        description: timeLog.description ?? null,
        reason: timeLog.reason ?? null,
        selectedRange: {
          start: timeLog.startedAt,
          end: timeLog.stoppedAt
        }
      });
      // Trigger manual change detection
      this._cdr.detectChanges();
    }
    /**
     * Closes the dialog or modal window.
     *
     * - Closes the currently active dialog by passing a `null` result to indicate
     *   that no action or result needs to be returned.
     *
     * @returns {void}
     */
    close() {
      this._dialogRef.close(null);
    }
    /**
     * Checks for overlapping time logs for a selected employee and time range.
     *
     * - Retrieves the form data and organization details, then sends a request to check for overlaps.
     * - Calculates the overlap duration between time logs and maps the result.
     * - Displays any errors using the toastr service.
     *
     * @returns {Promise<void>} - Resolves when the overlaps are checked.
     */
    checkOverlaps() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        // Ensure the organization is available
        if (!_this.organization) {
          return;
        }
        // Extract necessary values from form and store
        const {
          employeeId
        } = _this.form.value;
        const {
          id: organizationId,
          tenantId
        } = _this.organization;
        // Proceed only if a time range and employee ID are selected
        if (_this.selectedRange && employeeId) {
          const {
            start,
            end
          } = _this.selectedRange;
          const startDate = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .toUTC */ .q5)(start).toISOString();
          const endDate = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .toUTC */ .q5)(end).toISOString();
          // Exit if either start or end date is missing
          if (!startDate || !endDate) {
            return;
          }
          // Build the request payload
          const request = {
            ...(_this.timeLog.id ? {
              ignoreId: [_this.timeLog.id]
            } : {}),
            startDate,
            endDate,
            employeeId,
            tenantId,
            organizationId,
            relations: ['project', 'task']
          };
          try {
            // Call the service to check for overlapping time logs
            const timeLogs = yield _this._timesheetService.checkOverlaps(request);
            // If no overlaps found, return early
            if (!timeLogs) {
              return;
            }
            // Calculate overlap duration and map the results
            _this.overlaps = timeLogs.map(timeLog => {
              const timeLogStartedAt = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .toLocal */ .jw)(timeLog.startedAt);
              const timeLogStoppedAt = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .toLocal */ .jw)(timeLog.stoppedAt);
              // Calculate overlap duration
              let overlapDuration = _this.calculateOverlapDuration(timeLogStartedAt.toDate(), timeLogStoppedAt.toDate(), startDate, endDate);
              // Assign overlap duration to timeLog
              timeLog['overlapDuration'] = overlapDuration;
              return timeLog;
            });
          } catch (error) {
            console.error('Error while checking overlapping time log entries for employee', error);
            _this._toastrService.danger('Error checking overlapping time logs');
          }
        }
      })();
    }
    /**
     * Calculates the overlap duration between two date ranges.
     *
     * @param {Date} timeLogStart - Start date of the existing time log.
     * @param {Date} timeLogEnd - End date of the existing time log.
     * @param {string} selectedStart - Start date of the selected range.
     * @param {string} selectedEnd - End date of the selected range.
     * @returns {number} - Duration of the overlap in seconds.
     */
    calculateOverlapDuration(timeLogStart, timeLogEnd, selectedStart, selectedEnd) {
      const selectedStartMoment = moment__WEBPACK_IMPORTED_MODULE_0__(selectedStart);
      const selectedEndMoment = moment__WEBPACK_IMPORTED_MODULE_0__(selectedEnd);
      const timeLogStartMoment = moment__WEBPACK_IMPORTED_MODULE_0__(timeLogStart);
      const timeLogEndMoment = moment__WEBPACK_IMPORTED_MODULE_0__(timeLogEnd);
      // Calculate the overlap based on time boundaries
      if (timeLogStartMoment.isBetween(selectedStartMoment, selectedEndMoment)) {
        if (timeLogEndMoment.isBetween(selectedStartMoment, selectedEndMoment)) {
          return timeLogEndMoment.diff(timeLogStartMoment, 'seconds');
        } else {
          return selectedEndMoment.diff(timeLogStartMoment, 'seconds');
        }
      } else if (timeLogEndMoment.isBetween(selectedStartMoment, selectedEndMoment)) {
        return timeLogEndMoment.diff(selectedStartMoment, 'seconds');
      } else {
        return selectedEndMoment.diff(selectedStartMoment, 'seconds');
      }
    }
    /**
     * Adds or updates a time log based on the current mode ('create' or 'update').
     *
     * - Validates the form, constructs the payload with the necessary details, and
     *   interacts with the timesheet service to add or update the time log.
     * - Resets the form and displays appropriate success or error messages.
     *
     * @returns {Promise<void>} - Resolves after the time log is added or updated.
     */
    addTime() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        if (_this2.form.invalid) {
          return;
        }
        try {
          _this2.loading = true;
          // Extract necessary data from the store and the form
          const {
            employee
          } = _this2._store.user;
          const {
            id: organizationId,
            tenantId
          } = _this2.organization;
          const {
            start,
            end
          } = _this2.selectedRange;
          const startedAt = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .toUTC */ .q5)(start).toDate();
          const stoppedAt = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .toUTC */ .q5)(end).toDate();
          // Construct the payload for time log
          const payload = {
            ...(0,underscore__WEBPACK_IMPORTED_MODULE_1__/* .omit */ .cJ)(_this2.form.value, ['selectedRange']),
            startedAt,
            stoppedAt,
            organizationId,
            tenantId,
            logType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .TimeLogType */ .aJ.MANUAL,
            source: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .TimeLogSourceEnum */ .EC.WEB_TIMER,
            employeeId: _this2.form.value.employeeId || employee?.id // Fallback to current employee ID
          };
          // Create or update the time log based on the mode
          const timeLog = _this2.mode === 'create' ? yield _this2._timesheetService.addTime(payload) : yield _this2._timesheetService.updateTime(_this2.timeLog.id, payload);
          // Close the dialog and reset the form
          _this2._dialogRef.close(timeLog);
          _this2.form.reset();
          _this2.selectedRange = {
            start: null,
            end: null
          };
          // Show success notification
          _this2._toastrService.success('TIMER_TRACKER.ADD_TIME_SUCCESS');
        } catch (error) {
          // Handle errors and show error notification
          _this2._toastrService.error('Error: Unable to add time');
        } finally {
          // Reset the loading state
          _this2.loading = false;
        }
      })();
    }
    /**
     * Confirms and deletes a time log if it is not currently running.
     *
     * @param timeLog - The time log object that needs to be deleted.
     * @returns void - Exits early if the time log is still running.
     */
    onDeleteConfirm(timeLog) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        // Exit early if the user lacks delete permission or if the time log is running.
        if (!_this3._store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U.ALLOW_DELETE_TIME) || timeLog.isRunning) {
          return;
        }
        // Extract employee from the time log and organization details.
        const employee = timeLog.employee;
        const {
          id: organizationId,
          name
        } = _this3.organization;
        // Prepare the request object for deleting logs.
        const request = {
          logIds: [timeLog.id],
          organizationId
        };
        try {
          // Await the service call to delete logs.
          const res = yield _this3._timesheetService.deleteLogs(request);
          // Show a success message with employee name and organization.
          _this3._toastrService.success('TOASTR.MESSAGE.TIME_LOG_DELETED', {
            name: employee.fullName,
            organization: name
          });
          // Close the dialog after successful deletion.
          _this3._dialogRef.close(res);
        } catch (error) {
          // Optionally handle any errors (e.g., show an error message).
          console.error('Error deleting time log:', error);
          _this3._toastrService.error('TOASTR.MESSAGE.ERROR_DELETING_TIME_LOG');
        }
      })();
    }
    /**
     * Retrieves the value of a form control by its name.
     *
     * @param control - The name of the form control whose value is to be retrieved.
     * @returns string - The value of the form control. If the control is not found or the value is null, an empty string is returned.
     */
    getControlValue(control) {
      // Retrieve the form control using the given control name.
      const formControl = this.form.get(control);
      // If the control exists, return its value. Otherwise, return an empty string.
      return formControl ? formControl.value : '';
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function EditTimeLogModalComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditTimeLogModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormBuilder */ .ok), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TimesheetService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditTimeLogModalComponent,
        selectors: [["ngx-edit-time-log-modal"]],
        inputs: {
          timeLog: "timeLog"
        },
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [["f", "ngForm"], ["auto", ""], ["employeeSelect", ""], ["noProject", ""], ["noToDo", ""], [3, "formGroup", "submit", 4, "ngIf"], [3, "submit", "formGroup"], [1, "header"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "row"], [1, "col", "title"], ["class", "form-group", 4, "ngxPermissionsOnly"], [1, "row", "range-picker-row"], [1, "col-6"], ["name", "selectedRange", "formControlName", "selectedRange", 3, "maxDate"], ["class", "col-6 show-time", 4, "ngIf"], [1, "form-group"], [1, "col-12"], ["class", "w-100 custom-card", "status", "danger", 4, "ngIf"], ["formControlName", "isBillable", "name", "isBillable", "status", "primary"], [1, "col-12", "d-flex"], [1, "mr-3"], ["name", "organizationContactId", "formControlName", "organizationContactId", 3, "employeeId", "required"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "ml-3"], ["name", "projectId", "formControlName", "projectId", 3, "skipGlobalChange", "showAllOption", "placeholder", "defaultSelected", "employeeId", "organizationContactId", "required"], ["formControlName", "organizationTeamId", 3, "skipGlobalChange", "showAllOption", "defaultSelected", "placeholder", "employeeId", "projectId"], ["name", "taskId", "formControlName", "taskId", 3, "employeeId", "projectId", "required"], ["nbInput", "", "fullWidth", "", "rows", "2", "name", "description", "formControlName", "description", 1, "form-control", 3, "placeholder", "required"], ["fullWidth", ""], ["fullWidth", "", "nbInput", "", "name", "reason", "formControlName", "reason", 3, "placeholder", "nbAutocomplete", "required"], [3, "value", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "success", "size", "small", "nbSpinnerStatus", "primary", 3, "nbSpinner", "disabled"], ["icon", "save-outline"], [3, "ngxPermissionsOnly"], ["class", "description col-6", 4, "ngIf", "ngIfElse"], [1, "description", "col-6"], [1, "report-table", 3, "id", "employee", "name", "src"], ["name", "employeeId", "label", "TIMESHEET.SELECT_EMPLOYEE", "formControlName", "employeeId", "required", "", 3, "multiple", "placeholder"], [1, "invalid-feedback", "d-block"], [4, "ngIf"], [1, "col-6", "show-time"], ["status", "danger", 1, "w-100", "custom-card"], [1, "d-flex", "align-items-center"], ["icon", "alert-triangle-outline", 1, "mr-3"], [1, "custom-card-body"], [1, "row", "align-items-center", "m-0", "custom-header"], [1, "col"], [1, "col", "text-center"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "mt-2", "small"], [3, "value"], ["ngxTimeTrackingAuthorized", "", 3, "permission"], ["type", "button", "class", "action ml-3", "nbButton", "", "size", "small", "status", "basic", "outline", "", "ngxConfirmDialog", "", 3, "message", "nbTooltip", "confirm", 4, "ngIf"], ["type", "button", "nbButton", "", "size", "small", "status", "basic", "outline", "", "ngxConfirmDialog", "", 1, "action", "ml-3", 3, "confirm", "message", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
        template: function EditTimeLogModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, EditTimeLogModalComponent_form_0_Template, 80, 74, "form", 5);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbAutocompleteComponent */ .SOk, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbAutocompleteDirective */ ._5S, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_19__/* .NgxPermissionsDirective */ .f6, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_20__/* .AvatarComponent */ .f, _directives_time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_21__/* .TimeTrackingAuthorizedDirective */ .X, _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_22__/* .ConfirmDirective */ .o, _timer_picker_timer_range_picker_timer_range_picker_component__WEBPACK_IMPORTED_MODULE_23__/* .TimerRangePickerComponent */ .G, _tasks_task_select_task_task_component__WEBPACK_IMPORTED_MODULE_24__/* .TaskSelectorComponent */ .W, _selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_25__/* .ProjectSelectorComponent */ .a, _selectors_team_team_team_component__WEBPACK_IMPORTED_MODULE_26__/* .TeamSelectorComponent */ .s, _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_27__/* .EmployeeSelectComponent */ .O, _contact_selector_contact_selector_component__WEBPACK_IMPORTED_MODULE_28__/* .ContactSelectorComponent */ .N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__/* .TranslatePipe */ .D9, _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_30__/* .DurationFormatPipe */ .i],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  width: 645px;\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]     label {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   .col-12[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .col-6[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  max-height: unset;\n  height: unset;\n}\n\n.range-picker-row[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.range-picker-row[_ngcontent-%COMP%]   .show-time[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  padding: 1.5rem 2rem;\n}\n.range-picker-row[_ngcontent-%COMP%]   .show-time[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: var(--color-primary-transparent-100);\n  width: fit-content;\n  padding: 4px 6px;\n  border-radius: var(--border-radius);\n  margin-top: 6px;\n  font-weight: 600;\n  color: var(--text-primary-color);\n}"]
      });
    }
  };
  return EditTimeLogModalComponent;
})();
EditTimeLogModalComponent = EditTimeLogModalComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormBuilder */ .ok, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .gRc, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TimesheetService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ .t])], EditTimeLogModalComponent);


/***/ })

}]);