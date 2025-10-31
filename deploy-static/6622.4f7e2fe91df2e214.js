"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6622],{

/***/ 1546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ GoalCustomUnitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let GoalCustomUnitModule = /*#__PURE__*/(() => {
  class GoalCustomUnitModule {
    static {
      this.ɵfac = function GoalCustomUnitModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoalCustomUnitModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: GoalCustomUnitModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .X1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .pty, _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyModule */ .C, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return GoalCustomUnitModule;
})();

/***/ }),

/***/ 18289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ GoalTemplatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _goal_custom_unit_goal_custom_unit_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);









function GoalTemplatesComponent_nb_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", level_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "GOALS_PAGE.LEVELS." + level_r1.key), " ");
  }
}
function GoalTemplatesComponent_nb_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", type_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "KEY_RESULT_PAGE.TYPE." + type_r2.key), " ");
  }
}
let GoalTemplatesComponent = /*#__PURE__*/(() => {
  class GoalTemplatesComponent {
    constructor(fb, dialogRef) {
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.goalLevelEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .GoalLevelEnum */ .Zi;
      this.numberUnitsEnum = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .KeyResultNumberUnitsEnum */ .A4);
      this.keyResultTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .KeyResultTypeEnum */ .Qf;
    }
    ngOnInit() {
      this.goalTemplateForm = this.fb.group({
        goalName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        goalLevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]
      });
      this.keyResultTemplateForm = this.fb.group({
        name: [''],
        type: [''],
        unit: [''],
        deadline: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .KeyResultDeadlineEnum */ .OC.NO_CUSTOM_DEADLINE],
        hardDeadline: [null],
        softDeadline: [null]
      });
    }
    /*
    createGoalTemplate() {
        const templateForm = {
            ...this.goalTemplateForm.value,
            keyResult: {
                ...this.keyResultTemplateForm.value
            }
        };
    }
    */
    closeDialog() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function GoalTemplatesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoalTemplatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GoalTemplatesComponent,
        selectors: [["ga-goal-templates"]],
        standalone: false,
        decls: 43,
        vars: 43,
        consts: [[3, "formGroup"], ["for", "existing-goal", 1, "label"], ["fullWidth", "", "id", "existing-goal"], ["for", "objective-title", 1, "label"], ["type", "text", "id", "objective-title", "nbInput", "", "fullWidth", "", "formControlName", "goalName", 3, "placeholder"], ["for", "objective-level", 1, "label", "mt-3"], ["id", "objective-level", "formControlName", "goalLevel", "fullWidth", "", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "key-result-title", 1, "label"], ["type", "text", "id", "key-result-title", "nbInput", "", "fullWidth", "", "formControlName", "name", 3, "placeholder"], ["for", "key-result-type", 1, "label", "mt-3"], ["id", "key-result-type", "fullWidth", "", "formControlName", "type"], [3, "parentFormGroup", "numberUnits"], [1, "text-right"], ["nbButton", "", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success"], [3, "value"]],
        template: function GoalTemplatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "nb-card-body")(5, "form", 0)(6, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "nb-option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(14, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "nb-select", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(21, GoalTemplatesComponent_nb_option_21_Template, 3, 4, "nb-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(23, "div", 0)(24, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(27, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(32, "nb-select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(33, GoalTemplatesComponent_nb_option_33_Template, 3, 4, "nb-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(35, "ga-goal-custom-unit-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(36, "nb-card-footer", 13)(37, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GoalTemplatesComponent_Template_button_click_37_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(40, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 17, "GOALS_PAGE.GOAL_TEMPLATES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.goalTemplateForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 19, "FORM.LABELS.SELECT_EXISTING_OBJECTIVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 21, "FORM.LABELS.NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 23, "GOALS_PAGE.FORM.PLACEHOLDERS.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 25, "GOALS_PAGE.FORM.LABELS.LEVEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 27, "GOALS_PAGE.FORM.PLACEHOLDERS.LEVEL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 29, ctx.goalLevelEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.keyResultTemplateForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(26, 31, "FORM.LABELS.NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(28, 33, "KEY_RESULT_PAGE.FORM.PLACEHOLDERS.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(31, 35, "KEY_RESULT_PAGE.FORM.LABELS.KEY_RESULT_TYPE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 37, ctx.keyResultTypeEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("parentFormGroup", ctx.keyResultTemplateForm)("numberUnits", ctx.numberUnitsEnum);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(39, 39, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(42, 41, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .zJv, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .YP2, _goal_custom_unit_goal_custom_unit_select_component__WEBPACK_IMPORTED_MODULE_5__/* .GoalCustomUnitSelectComponent */ .K, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .KeyValuePipe */ .lG, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return GoalTemplatesComponent;
})();

/***/ }),

/***/ 28525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A4: () => (/* binding */ KeyResultNumberUnitsEnum),
/* harmony export */   F9: () => (/* binding */ KeyResultUpdateStatusEnum),
/* harmony export */   OC: () => (/* binding */ KeyResultDeadlineEnum),
/* harmony export */   Qf: () => (/* binding */ KeyResultTypeEnum),
/* harmony export */   Zi: () => (/* binding */ GoalLevelEnum),
/* harmony export */   ac: () => (/* binding */ KeyResultWeightEnum)
/* harmony export */ });
var KeyResultNumberUnitsEnum = /*#__PURE__*/function (KeyResultNumberUnitsEnum) {
  KeyResultNumberUnitsEnum["SALES"] = "sales";
  KeyResultNumberUnitsEnum["VISITORS"] = "visitors";
  KeyResultNumberUnitsEnum["PEOPLE"] = "people";
  KeyResultNumberUnitsEnum["ITEMS"] = "items";
  KeyResultNumberUnitsEnum["CLIENTS"] = "clients";
  return KeyResultNumberUnitsEnum;
}(KeyResultNumberUnitsEnum || {});
var KeyResultWeightEnum = /*#__PURE__*/function (KeyResultWeightEnum) {
  KeyResultWeightEnum["DEFAULT"] = "1";
  KeyResultWeightEnum["INCREASE_BY_2X"] = "2";
  KeyResultWeightEnum["INCREASE_BY_4X"] = "4";
  return KeyResultWeightEnum;
}(KeyResultWeightEnum || {});
var KeyResultTypeEnum = /*#__PURE__*/function (KeyResultTypeEnum) {
  KeyResultTypeEnum["NUMERICAL"] = "Numerical";
  KeyResultTypeEnum["TRUE_OR_FALSE"] = "True/False";
  KeyResultTypeEnum["CURRENCY"] = "Currency";
  KeyResultTypeEnum["TASK"] = "Task";
  KeyResultTypeEnum["KPI"] = "KPI";
  return KeyResultTypeEnum;
}(KeyResultTypeEnum || {});
var KeyResultDeadlineEnum = /*#__PURE__*/function (KeyResultDeadlineEnum) {
  KeyResultDeadlineEnum["NO_CUSTOM_DEADLINE"] = "No Custom Deadline";
  KeyResultDeadlineEnum["HARD_DEADLINE"] = "Hard Deadline";
  KeyResultDeadlineEnum["HARD_AND_SOFT_DEADLINE"] = "Hard and Soft Deadline";
  return KeyResultDeadlineEnum;
}(KeyResultDeadlineEnum || {});
var GoalLevelEnum = /*#__PURE__*/function (GoalLevelEnum) {
  GoalLevelEnum["ORGANIZATION"] = "Organization";
  GoalLevelEnum["TEAM"] = "Team";
  GoalLevelEnum["EMPLOYEE"] = "Employee";
  return GoalLevelEnum;
}(GoalLevelEnum || {});
var KeyResultUpdateStatusEnum = /*#__PURE__*/function (KeyResultUpdateStatusEnum) {
  KeyResultUpdateStatusEnum["ON_TRACK"] = "on track";
  KeyResultUpdateStatusEnum["NEEDS_ATTENTION"] = "needs attention";
  KeyResultUpdateStatusEnum["OFF_TRACK"] = "off track";
  KeyResultUpdateStatusEnum["NONE"] = "none";
  return KeyResultUpdateStatusEnum;
}(KeyResultUpdateStatusEnum || {});

/***/ }),

/***/ 55047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ GoalTemplatesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let GoalTemplatesModule = /*#__PURE__*/(() => {
  class GoalTemplatesModule {
    static {
      this.ɵfac = function GoalTemplatesModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoalTemplatesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: GoalTemplatesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_4__/* .GoalCustomUnitModule */ .J, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return GoalTemplatesModule;
})();

/***/ }),

/***/ 95722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ GoalCustomUnitSelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28525);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10936);
/* harmony import */ var _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64251);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);













function GoalCustomUnitSelectComponent_ng_template_1_ga_currency_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-currency", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", "Unit");
  }
}
function GoalCustomUnitSelectComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, GoalCustomUnitSelectComponent_ng_template_1_ga_currency_0_Template, 1, 1, "ga-currency", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.parentFormGroup.value.type == ctx_r0.keyResultTypeEnum.CURRENCY);
  }
}
function GoalCustomUnitSelectComponent_ng_template_2_nb_select_3_nb_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const unit_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", unit_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", unit_r3, " ");
  }
}
function GoalCustomUnitSelectComponent_ng_template_2_nb_select_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function GoalCustomUnitSelectComponent_ng_template_2_nb_select_3_Template_nb_select_selectedChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.parentFormGroup.value.unit == "create-new" ? ctx_r0.createNew = !ctx_r0.createNew : true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, GoalCustomUnitSelectComponent_ng_template_2_nb_select_3_nb_option_1_Template, 2, 2, "nb-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "nb-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selected", ctx_r0.numberUnits[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.numberUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "GOALS_PAGE.CREATE_NEW"), " ");
  }
}
function GoalCustomUnitSelectComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, GoalCustomUnitSelectComponent_ng_template_2_nb_select_3_Template, 5, 5, "nb-select", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "FORM.LABELS.UNIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.parentFormGroup.value.type == ctx_r0.keyResultTypeEnum.NUMERICAL && !ctx_r0.createNew);
  }
}
function GoalCustomUnitSelectComponent_nb_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GoalCustomUnitSelectComponent_nb_form_field_4_Template_nb_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.createNewUnit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "nb-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GoalCustomUnitSelectComponent_nb_form_field_4_Template_nb_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.createNew = !ctx_r0.createNew);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
}
let GoalCustomUnitSelectComponent = /*#__PURE__*/(() => {
  let GoalCustomUnitSelectComponent = class GoalCustomUnitSelectComponent {
    constructor(store) {
      this.store = store;
      this.keyResultTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .KeyResultTypeEnum */ .Qf;
      this.createNew = false;
    }
    ngOnInit() {
      this.defaultCurrency = this.store.selectedOrganization.currency;
      this.parentFormGroup.controls['type'].valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(formValue => {
        if (formValue === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .KeyResultTypeEnum */ .Qf.CURRENCY) {
          this.parentFormGroup.controls['unit'].patchValue(this.defaultCurrency || _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.DEFAULT_CURRENCY);
        } else if (formValue === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .KeyResultTypeEnum */ .Qf.NUMERICAL) {
          this.parentFormGroup.controls['unit'].patchValue(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .KeyResultNumberUnitsEnum */ .A4.ITEMS);
        }
      });
    }
    createNewUnit() {
      if (this.parentFormGroup.value.unit !== ' ') {
        this.numberUnits.push(this.parentFormGroup.value.unit);
      }
      this.createNew = false;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function GoalCustomUnitSelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoalCustomUnitSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GoalCustomUnitSelectComponent,
        selectors: [["ga-goal-custom-unit-select"]],
        inputs: {
          parentFormGroup: "parentFormGroup",
          numberUnits: "numberUnits"
        },
        standalone: false,
        decls: 5,
        vars: 4,
        consts: [["unitTemplate", ""], [3, "formGroup"], [3, "ngIf", "ngIfElse"], [4, "ngIf"], ["formControlName", "unit", 3, "placeholder", 4, "ngIf"], ["formControlName", "unit", 3, "placeholder"], ["for", "unit", 1, "label"], ["fullWidth", "", "formControlName", "unit", "id", "unit", "nbSuffix", "", 3, "selected", "selectedChange", 4, "ngIf"], ["fullWidth", "", "formControlName", "unit", "id", "unit", "nbSuffix", "", 3, "selectedChange", "selected"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "create-new", 1, "bg-secondary", "text-light"], [3, "value"], ["type", "text", "formControlName", "unit", "nbInput", "", "fullWidth", ""], ["nbSuffix", "", "icon", "checkmark-outline", "status", "success", 3, "click"], ["nbSuffix", "", "icon", "close-outline", "status", "danger", 3, "click"]],
        template: function GoalCustomUnitSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, GoalCustomUnitSelectComponent_ng_template_1_Template, 1, 1, "ng-template", 2)(2, GoalCustomUnitSelectComponent_ng_template_2_Template, 4, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(4, GoalCustomUnitSelectComponent_nb_form_field_4_Template, 4, 0, "nb-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            const unitTemplate_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.parentFormGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.parentFormGroup.value.type == ctx.keyResultTypeEnum.CURRENCY)("ngIfElse", unitTemplate_r5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.createNew);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSuffixDirective */ .zb0, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconComponent */ .tHu, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputDirective */ .i6h, _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_8__/* .CurrencyComponent */ .X, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  GoalCustomUnitSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il])], GoalCustomUnitSelectComponent);
  return GoalCustomUnitSelectComponent;
})();


/***/ }),

/***/ 96419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ValueWithUnitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let ValueWithUnitComponent = /*#__PURE__*/(() => {
  class ValueWithUnitComponent {
    static {
      this.ɵfac = function ValueWithUnitComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ValueWithUnitComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ValueWithUnitComponent,
        selectors: [["ga-value-with-unit"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 2,
        template: function ValueWithUnitComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", ctx.value, " ", ctx.rowData.unit, " ");
          }
        },
        encapsulation: 2
      });
    }
  }
  return ValueWithUnitComponent;
})();

/***/ })

}]);