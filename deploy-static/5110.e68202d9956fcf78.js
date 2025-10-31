"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5110],{

/***/ 584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ DEFAULT_CATEGORIES)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34027);

const DEFAULT_CATEGORIES = [{
  category: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .RecurringExpenseDefaultCategoriesEnum */ ._y.SALARY,
  types: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .ComponentType */ .I5.EMPLOYEE]
}, {
  category: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .RecurringExpenseDefaultCategoriesEnum */ ._y.SALARY_TAXES,
  types: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .ComponentType */ .I5.EMPLOYEE]
}, {
  category: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .RecurringExpenseDefaultCategoriesEnum */ ._y.RENT,
  types: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .ComponentType */ .I5.ORGANIZATION]
}, {
  category: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .RecurringExpenseDefaultCategoriesEnum */ ._y.EXTRA_BONUS,
  types: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .ComponentType */ .I5.EMPLOYEE, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .ComponentType */ .I5.ORGANIZATION]
}];

/***/ }),

/***/ 8171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ RecurringExpenseDeleteConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);






function RecurringExpenseDeleteConfirmationComponent_nb_radio_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-radio", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate3"] */ .E5c("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 3, "POP_UPS.DELETE_THIS_FUTURE"), " (", ctx_r0.current, " - ", ctx_r0.end, ")");
  }
}
let RecurringExpenseDeleteConfirmationComponent = /*#__PURE__*/(() => {
  class RecurringExpenseDeleteConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    delete() {
      this.dialogRef.close(this.selectedOption);
    }
    static {
      this.ɵfac = function RecurringExpenseDeleteConfirmationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseDeleteConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RecurringExpenseDeleteConfirmationComponent,
        selectors: [["ga-delete-confirmation"]],
        standalone: false,
        decls: 23,
        vars: 21,
        consts: [[1, "center"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "ngModelChange", "ngModel"], ["value", "current"], ["value", "future", 4, "ngIf"], ["value", "all"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "danger", "nbButton", "", 3, "click", "disabled"], ["value", "future"]],
        template: function RecurringExpenseDeleteConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseDeleteConfirmationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "nb-radio-group", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function RecurringExpenseDeleteConfirmationComponent_Template_nb_radio_group_ngModelChange_8_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.selectedOption, $event) || (ctx.selectedOption = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-radio", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, RecurringExpenseDeleteConfirmationComponent_nb_radio_12_Template, 3, 5, "nb-radio", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "nb-radio", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "nb-card-footer")(17, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseDeleteConfirmationComponent_Template_button_click_17_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseDeleteConfirmationComponent_Template_button_click_20_listener() {
              return ctx.delete();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 11, "POP_UPS.DELETE_RECURRING_EXPENSE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.selectedOption);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 13, "POP_UPS.DELETE_ONLY_THIS"), " (", ctx.current, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.current !== ctx.end && ctx.current !== ctx.start);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate3"] */ .E5c("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 15, "POP_UPS.DELETE_ALL_ENTRIES"), " (", ctx.start, " - ", ctx.end, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 17, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx.selectedOption);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 19, "BUTTONS.OK"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgModel */ .vS, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbRadioComponent */ .XIt, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbRadioGroupComponent */ .yZH, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return RecurringExpenseDeleteConfirmationComponent;
})();

/***/ }),

/***/ 10059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ RecurringExpenseBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63315);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34027);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32386);
/* harmony import */ var _recurring_expense_history_recurring_expense_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27143);
/* harmony import */ var _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42128);













const _c0 = a0 => ({
  block: a0
});
const _c1 = a0 => ({
  active: a0
});
const _c2 = a0 => ({
  visibility: a0
});
function RecurringExpenseBlockComponent_div_5_ngx_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ngx-avatar", 22);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.currentEmployee == null ? null : ctx_r0.currentEmployee.user == null ? null : ctx_r0.currentEmployee.user.imageUrl)("name", ctx_r0.currentEmployee == null ? null : ctx_r0.currentEmployee.user == null ? null : ctx_r0.currentEmployee.user.name)("id", ctx_r0.currentEmployee == null ? null : ctx_r0.currentEmployee.id)("employee", ctx_r0.currentEmployee);
  }
}
function RecurringExpenseBlockComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, RecurringExpenseBlockComponent_div_5_ngx_avatar_1_Template, 1, 4, "ngx-avatar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.currentEmployee);
  }
}
function RecurringExpenseBlockComponent_nb_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "EXPENSES_PAGE.SPLIT_WILL_BE_TOOLTIP"));
  }
}
function RecurringExpenseBlockComponent_nb_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseBlockComponent_nb_icon_18_Template_nb_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.showMenu = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function RecurringExpenseBlockComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span", 25)(1, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseBlockComponent_span_22_Template_nb_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.showMenu = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
}
function RecurringExpenseBlockComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 27)(1, "ga-recurring-expense-history", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("closeHistory", function RecurringExpenseBlockComponent_div_39_Template_ga_recurring_expense_history_closeHistory_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.showHistory = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("recordsData", ctx_r0.fetchedHistories);
  }
}
let RecurringExpenseBlockComponent = /*#__PURE__*/(() => {
  class RecurringExpenseBlockComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.employeeName = true;
      this.selected = false;
      this.editRecurringExpense = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.deleteRecurringExpense = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.fetchRecurringExpenseHistory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.showMenu = false;
      this.showHistory = false;
    }
    ngOnInit() {
      this.currentEmployee = this.recurringExpense.employee;
    }
    emitEdit() {
      this.editRecurringExpense.emit();
    }
    emitDelete() {
      this.deleteRecurringExpense.emit();
    }
    emitFetchHistory() {
      if (!this.showHistory) {
        this.fetchRecurringExpenseHistory.emit();
        this.showHistory = true;
        this.showMenu = true;
      } else {
        this.showHistory = false;
        this.showMenu = false;
      }
    }
    getStartDate() {
      return this.recurringExpense && this.selectedOrganization ? moment__WEBPACK_IMPORTED_MODULE_0__(this.recurringExpense.startDate).format(this.selectedOrganization.dateFormat || _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .defaultDateFormat */ .v) : '';
    }
    getCategoryName(categoryName) {
      return categoryName in _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .RecurringExpenseDefaultCategoriesEnum */ ._y ? this.getTranslation(`EXPENSES_PAGE.DEFAULT_CATEGORY.${categoryName}`) : categoryName;
    }
    static {
      this.ɵfac = function RecurringExpenseBlockComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RecurringExpenseBlockComponent,
        selectors: [["ga-recurring-expense-block"]],
        inputs: {
          recurringExpense: "recurringExpense",
          splitExpense: "splitExpense",
          employeeName: "employeeName",
          selected: "selected",
          fetchedHistories: "fetchedHistories",
          selectedOrganization: "selectedOrganization",
          showHistory: "showHistory"
        },
        outputs: {
          editRecurringExpense: "editRecurringExpense",
          deleteRecurringExpense: "deleteRecurringExpense",
          fetchRecurringExpenseHistory: "fetchRecurringExpenseHistory"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 40,
        vars: 38,
        consts: [[1, "setting-block", 3, "ngClass"], [1, "setting-row", 3, "ngClass"], [1, "block-content"], [1, "block-info"], [1, "expense"], ["class", "block-item-big", 4, "ngIf"], [1, "block-item-big"], [1, "block-item"], [1, "block-amount"], ["icon", "pricetags-outline", 3, "nbTooltip", 4, "ngIf"], [1, "block-panel"], [1, "block-value"], ["class", "hide-menu", "icon", "log-in", 3, "click", 4, "ngIf"], [3, "click", "ngStyle"], ["class", "block-actions open", 4, "ngIf"], [1, "block-settings", 3, "ngStyle"], [1, "single-setting", 3, "click"], ["icon", "edit-outline"], ["icon", "link-2-outline"], ["icon", "close-outline"], ["class", "setting-table", 4, "ngIf"], ["class", "report-table", 3, "src", "name", "id", "employee", 4, "ngIf"], [1, "report-table", 3, "src", "name", "id", "employee"], ["icon", "pricetags-outline", 3, "nbTooltip"], ["icon", "log-in", 1, "hide-menu", 3, "click"], [1, "block-actions", "open"], ["icon", "settings-2-outline", 3, "click"], [1, "setting-table"], [3, "closeHistory", "recordsData"]],
        template: function RecurringExpenseBlockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(5, RecurringExpenseBlockComponent_div_5_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "div", 7)(11, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(14, "position");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(15, RecurringExpenseBlockComponent_nb_icon_15_Template, 2, 3, "nb-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(16, "div", 10)(17, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(18, RecurringExpenseBlockComponent_nb_icon_18_Template, 1, 0, "nb-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(19, "small", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseBlockComponent_Template_small_click_19_listener() {
              return ctx.showMenu = false;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(22, RecurringExpenseBlockComponent_span_22_Template, 2, 0, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(23, "div", 15)(24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseBlockComponent_Template_div_click_24_listener() {
              return ctx.emitEdit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(25, "nb-icon", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(26, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(29, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseBlockComponent_Template_div_click_29_listener() {
              return ctx.emitFetchHistory();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(30, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(31, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(34, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseBlockComponent_Template_div_click_34_listener() {
              return ctx.emitDelete();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(35, "nb-icon", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(36, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(39, RecurringExpenseBlockComponent_div_39_Template, 2, 1, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(30, _c0, ctx.selected));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(32, _c1, ctx.selected));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.employeeName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.getCategoryName(ctx.recurringExpense == null ? null : ctx.recurringExpense.categoryName), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.getStartDate(), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(14, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(13, 16, ctx.recurringExpense == null ? null : ctx.recurringExpense.value, ctx.recurringExpense == null ? null : ctx.recurringExpense.currency), ctx.selectedOrganization == null ? null : ctx.selectedOrganization.currencyPosition), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.splitExpense);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(34, _c2, ctx.showMenu ? "visible" : "hidden"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(21, 22, "BUTTONS.CLOSE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.showMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(36, _c2, ctx.showMenu ? "visible" : "hidden"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(28, 24, "BUTTONS.EDIT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(33, 26, "BUTTONS.HISTORY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(38, 28, "BUTTONS.DELETE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showHistory && ctx.selected);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgStyle */ .B3, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTooltipDirective */ .BmQ, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_8__/* .AvatarComponent */ .f, _recurring_expense_history_recurring_expense_history_component__WEBPACK_IMPORTED_MODULE_9__/* .RecurringExpenseHistoryComponent */ .n, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .CurrencyPipe */ .oe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9, _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyPositionPipe */ .n],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  margin-bottom: 8px;\n  background-color: var(--gauzy-card-1) !important;\n}\n[_nghost-%COMP%]   .setting-block.block[_ngcontent-%COMP%] {\n  box-shadow: -6px 0px 0px 0px rgba(0, 0, 0, 0.15);\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 84px;\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-row[_ngcontent-%COMP%] {\n  padding: 0.75rem 0 0.75rem 0.75rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-row[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.75rem 0.75rem 0;\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-row[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-row.active[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-3);\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .setting-table[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .block-settings[_ngcontent-%COMP%] {\n  width: 150px;\n  display: flex;\n  height: 84px;\n  align-items: center;\n  background-color: #333;\n  justify-content: space-evenly;\n  overflow: hidden;\n  transition: width 0.2s ease-in;\n  border-radius: 0 var(--border-radius) var(--border-radius) 0;\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .block-settings[_ngcontent-%COMP%]   .single-setting[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 30px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .block-settings[_ngcontent-%COMP%]   .single-setting[_ngcontent-%COMP%]     svg {\n  fill: rgb(127, 127, 127);\n}\n[_nghost-%COMP%]   .setting-block[_ngcontent-%COMP%]   .block-settings[_ngcontent-%COMP%]   .single-setting[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #d7d9de;\n  font-size: 10px;\n  opacity: 0.6;\n}\n\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n  padding-right: 42px;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .expense[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .expense[_ngcontent-%COMP%]   .block-item[_ngcontent-%COMP%] {\n  width: 11rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .expense[_ngcontent-%COMP%]   .block-item-big[_ngcontent-%COMP%] {\n  width: 17.5rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .block-amount[_ngcontent-%COMP%] {\n  width: 130px;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  cursor: pointer;\n}\n[dir=ltr]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .block-amount[_ngcontent-%COMP%] {\n  padding-right: 24px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%]   .block-amount[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 240px;\n  position: relative;\n  visibility: hidden;\n  display: none;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%] {\n  right: 30px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%] {\n  left: 30px;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   .hide-menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   .block-actions.open[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n}\n[dir=ltr]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   .block-actions.open[_ngcontent-%COMP%] {\n  right: 35px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   .block-actions.open[_ngcontent-%COMP%] {\n  left: 35px;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .block-content[_ngcontent-%COMP%]   .block-panel[_ngcontent-%COMP%]   .block-value[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: fit-content;\n}\n\n@media screen and (max-width: 1438px) {\n  .setting-block[_ngcontent-%COMP%] {\n    width: fit-content;\n  }\n}"]
      });
    }
  }
  return RecurringExpenseBlockComponent;
})();

/***/ }),

/***/ 17109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ RecurringExpenseMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(55598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80189);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39855);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63315);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88487);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(49291);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(94557);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34027);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _recurring_expense_setting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(14572);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(55567);
/* harmony import */ var _selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54982);
/* harmony import */ var _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(64251);

var RecurringExpenseMutationComponent_1;






















const _c0 = ["employeeSelector"];
function RecurringExpenseMutationComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "ga-employee-selector", 25, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", ctx_r0.recurringExpense);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("defaultSelected", true)("showAllEmployeesOption", true)("skipGlobalChange", true);
  }
}
function RecurringExpenseMutationComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "nb-checkbox", 26)(4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 2, "EXPENSES_PAGE.SPLIT_HELP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 4, "EXPENSES_PAGE.SPLIT_EXPENSE"));
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const conflict_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate5"] */ .SjE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(2, 5, conflict_r3.value, conflict_r3.currency), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 8, "EXPENSES_PAGE.RECURRING_EXPENSES.FROM"), " ", ctx_r0.formatToOrganizationDate(conflict_r3.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 10, "EXPENSES_PAGE.RECURRING_EXPENSES.TO"), " ", ctx_r0.formatToOrganizationDate(conflict_r3.endDate), "");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, RecurringExpenseMutationComponent_div_29_nb_alert_10_span_3_Template, 5, 12, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 4, "EXPENSES_PAGE.RECURRING_EXPENSES.WARNING"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.conflicts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 6, "EXPENSES_PAGE.RECURRING_EXPENSES.VALUE_OVERWRITTEN"), " ", ctx_r0.month(ctx_r0.startDate), "! ");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const conflict_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate5"] */ .SjE(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(2, 5, conflict_r4.value, conflict_r4.currency), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 8, "EXPENSES_PAGE.RECURRING_EXPENSES.FROM"), " ", ctx_r0.formatToOrganizationDate(conflict_r4.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 10, "EXPENSES_PAGE.RECURRING_EXPENSES.TO"), " ", ctx_r0.formatToOrganizationDate(conflict_r4.endDate), "");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, RecurringExpenseMutationComponent_div_29_nb_alert_11_span_3_Template, 5, 12, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 3, "EXPENSES_PAGE.RECURRING_EXPENSES.ERROR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.conflicts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "EXPENSES_PAGE.RECURRING_EXPENSES.NOT_SUPPORTED"), " ");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate8"] */ .Ld(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 8, "EXPENSES_PAGE.RECURRING_EXPENSES.EDIT_FUTURE_VALUE"), " ", ctx_r0.formatToOrganizationDate(ctx_r0.startDate), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 10, "EXPENSES_PAGE.RECURRING_EXPENSES.EXISTING_VALUE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(4, 12, ctx_r0.recurringExpense.value, ctx_r0.recurringExpense.currency), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 15, "EXPENSES_PAGE.RECURRING_EXPENSES.STARTED_ON"), " ", ctx_r0.formatToOrganizationDate(ctx_r0.recurringExpense.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 17, "EXPENSES_PAGE.RECURRING_EXPENSES.AFFECTED"), " ", ctx_r0.previousMonth(ctx_r0.startDate), ". ");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolateV"] */ .xRd([" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 12, "EXPENSES_PAGE.RECURRING_EXPENSES.SET_EXPENSE_VALUE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(3, 14, ctx_r0.value, ctx_r0.recurringExpense.currency), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 17, "EXPENSES_PAGE.RECURRING_EXPENSES.FROM"), " ", ctx_r0.formatToOrganizationDate(ctx_r0.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 19, "EXPENSES_PAGE.RECURRING_EXPENSES.ONWARDS"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(6, 21, ctx_r0.recurringExpense.value, ctx_r0.recurringExpense.currency), " (", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 24, "EXPENSES_PAGE.RECURRING_EXPENSES.STARTED_ON"), " ", ctx_r0.formatToOrganizationDate(ctx_r0.recurringExpense.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 26, "EXPENSES_PAGE.RECURRING_EXPENSES.ENDING_ON"), " ", ctx_r0.formatToOrganizationDate(ctx_r0.recurringExpense.endDate), ") ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 28, "EXPENSES_PAGE.RECURRING_EXPENSES.SET_UNTIL"), " ", ctx_r0.previousMonth(ctx_r0.startDate), ". "]);
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate4"] */ .LHq(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 4, "EXPENSES_PAGE.RECURRING_EXPENSES.SET_UNTIL"), " ", ctx_r0.formatToOrganizationDate(ctx_r0.startDate), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "EXPENSES_PAGE.RECURRING_EXPENSES.FOR_EXPENSE_VALUE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(4, 8, ctx_r0.value, ctx_r0.currencyValue), " ");
  }
}
function RecurringExpenseMutationComponent_div_29_nb_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "EXPENSES_PAGE.RECURRING_EXPENSES.CHANGE_START_DATE"), " ", ctx_r0.formatToOrganizationDate(ctx_r0.startDate), " ");
  }
}
function RecurringExpenseMutationComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4, " Starts On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function RecurringExpenseMutationComponent_div_29_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.datePickerChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(7, "nb-datepicker", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(10, RecurringExpenseMutationComponent_div_29_nb_alert_10_Template, 6, 8, "nb-alert", 30)(11, RecurringExpenseMutationComponent_div_29_nb_alert_11_Template, 6, 7, "nb-alert", 31)(12, RecurringExpenseMutationComponent_div_29_nb_alert_12_Template, 7, 19, "nb-alert", 30)(13, RecurringExpenseMutationComponent_div_29_nb_alert_13_Template, 10, 30, "nb-alert", 30)(14, RecurringExpenseMutationComponent_div_29_nb_alert_14_Template, 5, 11, "nb-alert", 30)(15, RecurringExpenseMutationComponent_div_29_nb_alert_15_Template, 3, 4, "nb-alert", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const datepicker_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", datepicker_r5)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, "POP_UPS.PICK_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx_r0.startDateUpdateType)("nbSpinner", ctx_r0.startDateChangeLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "REDUCE_CONFLICT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "INCREASE_CONFLICT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "INCREASE_SAFE_WITHIN_LIMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "INCREASE_SAFE_OUTSIDE_LIMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "REDUCE_SAFE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "WITHIN_MONTH");
  }
}
function RecurringExpenseMutationComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseMutationComponent_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r0.form.invalid)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, "EMPLOYEES_PAGE.RECURRING_EXPENSE_ADD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 5, "BUTTONS.SAVE"), " ");
  }
}
function RecurringExpenseMutationComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseMutationComponent_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r0.form.invalid || ctx_r0.startDateUpdateType === "INCREASE_CONFLICT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "BUTTONS.EDIT"), " ");
  }
}
let RecurringExpenseMutationComponent = /*#__PURE__*/(() => {
  let RecurringExpenseMutationComponent = class RecurringExpenseMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    static {
      RecurringExpenseMutationComponent_1 = this;
    }
    get recurringExpense() {
      return this._recurringExpense;
    }
    set recurringExpense(recurringExpense) {
      if (recurringExpense) {
        this._recurringExpense = recurringExpense;
        this._initializeForm(recurringExpense);
      }
    }
    static buildForm(fb, self) {
      const {
        startDate
      } = self.dateRangePickerBuilderService.selectedDateRange;
      return fb.group({
        categoryName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.required],
        value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.required],
        currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.required],
        splitExpense: [false],
        startDate: [new Date(startDate.getFullYear(), startDate.getMonth(), 1)]
      });
    }
    constructor(fb, dialogRef, store, dateRangePickerBuilderService, employeesService, expenseCategoriesStore, translate, toastrService, errorHandler, organizationRecurringExpenseService, employeeRecurringExpenseService) {
      var _this;
      super(translate);
      _this = this;
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.store = store;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
      this.employeesService = employeesService;
      this.expenseCategoriesStore = expenseCategoriesStore;
      this.translate = translate;
      this.toastrService = toastrService;
      this.errorHandler = errorHandler;
      this.organizationRecurringExpenseService = organizationRecurringExpenseService;
      this.employeeRecurringExpenseService = employeeRecurringExpenseService;
      this.startDateUpdateType = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .StartDateUpdateTypeEnum */ .dD.NO_CHANGE;
      this.startDateChangeLoading = false;
      this.defaultFilteredCategories = [];
      this.defaultCategories = _recurring_expense_setting__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_CATEGORIES */ .B;
      this.ComponentTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentType */ .I5;
      this.conflicts = [];
      /*
       * Recurring Expense Mutation Form
       */
      this.form = RecurringExpenseMutationComponent_1.buildForm(this.fb, this);
      this.addNewCustomCategory = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* (name) {
          if (!_this.organization || !name) {
            return;
          }
          try {
            const {
              id: organizationId
            } = _this.organization;
            const {
              tenantId
            } = _this.store.user;
            const createdCategory = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this.expenseCategoriesStore.create({
              tenantId,
              organizationId,
              name
            }));
            _this.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_EXPENSE_CATEGORIES.ADD_EXPENSE_CATEGORY', {
              name
            });
            return {
              value: createdCategory.name,
              label: createdCategory.name
            };
          } catch (error) {
            _this.errorHandler.handleError(error);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
    get currencyValue() {
      return this.form.get('currency').value;
    }
    get currency() {
      return this.form.get('currency');
    }
    get startDate() {
      return this.form.get('startDate').value;
    }
    get value() {
      return this.form.get('value').value;
    }
    formatToOrganizationDate(date) {
      return date ? moment__WEBPACK_IMPORTED_MODULE_0__(date).format(this.store.selectedOrganization.dateFormat || _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .defaultDateFormat */ .v) : 'end';
    }
    previousMonth(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(date).subtract({
        months: 1
      }).format('MMM, YYYY');
    }
    month(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('MMM, YYYY');
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .debounceTime */ .B)(200), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .tap */ .M)(() => this.getExpenseCategories()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .untilDestroyed */ .s)(this)).subscribe();
      this.defaultFilteredCategories = this.defaultCategories.filter(c => c.types.indexOf(this.componentType) > -1).map(i => ({
        value: i.category,
        label: this.getTranslatedExpenseCategory(i.category)
      }));
      this.expenseCategoriesStore.expenseCategories$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(categories => !!categories.length), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .tap */ .M)(categories => this.mappedExpenseCategories(categories)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {}
    ngOnDestroy() {}
    /**
     * GET expense categories by organization
     *
     * @returns
     */
    getExpenseCategories() {
      if (!this.organization) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      this.expenseCategoriesStore.loadAll({
        organizationId,
        tenantId
      });
    }
    /**
     * Mapped Expense Categories
     *
     * @param categories
     */
    mappedExpenseCategories(categories) {
      const storedCategories = [];
      for (let category of categories) {
        storedCategories.push({
          value: category.name,
          label: category.name
        });
      }
      // Define a helper function to create a unique key based on label and name
      const getKey = item => `${item.label}-${item.value}`;
      // Merge the storedCategories with defaultFilteredCategories and filter out duplicates
      const mergedCategories = [...this.defaultFilteredCategories, ...storedCategories].reduce((uniqueItems, item) => {
        // Generate a unique key for the current item
        const key = getKey(item);
        // If the key is not already present in the set, add the item to the set and to the result array
        if (!uniqueItems.set.has(key)) {
          uniqueItems.set.add(key);
          uniqueItems.result.push(item);
        }
        return uniqueItems;
      }, {
        set: new Set(),
        result: []
      }).result;
      // Now, map the mergedCategories as needed
      const uniqueFilteredCategories = mergedCategories.map(item => {
        // Perform any additional mapping or transformation if required
        return item;
      });
      // Update the defaultFilteredCategories with the uniqueFilteredCategories
      this.defaultFilteredCategories = uniqueFilteredCategories;
    }
    submitForm() {
      if (this.form.valid) {
        this.closeAndSubmit();
      }
    }
    closeAndSubmit() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
          return;
        }
        const {
          id: organizationId
        } = _this2.organization;
        const {
          tenantId
        } = _this2.store.user;
        let employee;
        if (_this2.recurringExpense && _this2.recurringExpense.employeeId) {
          employee = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this2.employeesService.getEmployeeById(_this2.recurringExpense.employeeId));
        }
        const {
          categoryName,
          startDate
        } = _this2.form.getRawValue();
        const payload = {
          ..._this2.form.getRawValue(),
          categoryName: categoryName,
          startDay: startDate.getDate(),
          startMonth: startDate.getMonth(),
          startYear: startDate.getFullYear(),
          organizationId,
          tenantId
        };
        if (_this2.recurringExpense && _this2.recurringExpense.employeeId) {
          payload['employee'] = employee;
        } else {
          payload['employee'] = _this2.employeeSelector ? _this2.employeeSelector.selectedEmployee : null;
        }
        _this2.dialogRef.close(payload);
      })();
    }
    getTranslatedExpenseCategory(categoryName) {
      return this.getTranslation(`EXPENSES_PAGE.DEFAULT_CATEGORY.${categoryName}`);
    }
    addCustomCategoryName(term) {
      return {
        value: term,
        label: term
      };
    }
    _initializeForm(recurringExpense) {
      const {
        startDate
      } = this.dateRangePickerBuilderService.selectedDateRange;
      this.form.patchValue({
        categoryName: recurringExpense ? recurringExpense.categoryName : '',
        value: recurringExpense ? recurringExpense.value : '',
        currency: recurringExpense ? recurringExpense.currency : '',
        splitExpense: recurringExpense && recurringExpense.splitExpense ? recurringExpense.splitExpense : false,
        startDate: recurringExpense && recurringExpense.startDate ? new Date(recurringExpense.startDate) : new Date(startDate.getFullYear(), startDate.getMonth(), 1)
      });
      if (recurringExpense && !(recurringExpense.categoryName in _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .RecurringExpenseDefaultCategoriesEnum */ ._y)) {
        this.defaultFilteredCategories = [{
          value: recurringExpense.categoryName,
          label: recurringExpense.categoryName
        }, ...this.defaultFilteredCategories];
        console.log(this.defaultFilteredCategories);
      }
    }
    datePickerChanged(newValue) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this3.startDateChangeLoading = true;
        if (newValue && _this3.recurringExpense && _this3.recurringExpense.startDate) {
          const newStartDate = new Date(newValue);
          const {
            value,
            conflicts
          } = _this3.componentType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentType */ .I5.ORGANIZATION ? yield _this3.organizationRecurringExpenseService.getStartDateUpdateType({
            newStartDate,
            recurringExpenseId: _this3.recurringExpense.id
          }) : yield _this3.employeeRecurringExpenseService.getStartDateUpdateType({
            newStartDate,
            recurringExpenseId: _this3.recurringExpense.id
          });
          _this3.startDateUpdateType = value;
          _this3.conflicts = conflicts;
        }
        _this3.startDateChangeLoading = false;
      })();
    }
    close() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function RecurringExpenseMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ExpenseCategoriesStoreService */ .Z), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .OrganizationRecurringExpenseService */ .I), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeRecurringExpenseService */ .V));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RecurringExpenseMutationComponent,
        selectors: [["ga-recurring-expense-mutation"]],
        viewQuery: function RecurringExpenseMutationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.employeeSelector = _t.first);
          }
        },
        inputs: {
          recurringExpense: "recurringExpense"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 36,
        vars: 29,
        consts: [["employeeSelector", ""], ["datepicker", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup"], [4, "ngIf"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "categoryInput", 1, "label"], ["id", "categoryInput", "fullWidth", "", "formControlName", "categoryName", "bindValue", "value", "appendTo", "body", 3, "items", "addTag", "searchable", "placeholder"], ["class", "row", 4, "ngIf"], [1, "col-6"], ["for", "valueInput", 1, "label"], ["fullWidth", "", "id", "valueInput", "type", "number", "step", "0.1", "nbInput", "", "formControlName", "value", 3, "placeholder", "min"], [1, "col-sm-6"], ["formControlName", "currency", 3, "formControl"], ["nbButton", "", "size", "small", "outline", "", "status", "basic", 1, "mr-2", 3, "click"], ["type", "submit", "nbButton", "", "status", "success", 3, "disabled", "nbTooltip", "click", 4, "ngIf"], ["size", "small", "type", "submit", "nbButton", "", "status", "success", 3, "disabled", "click", 4, "ngIf"], [1, "row", 3, "hidden"], [1, "col-sm-12", "mb-3"], ["placeholder", "Employee", 1, "employees", 3, "defaultSelected", "showAllEmployeesOption", "skipGlobalChange"], ["formControlName", "splitExpense"], [3, "nbTooltip"], ["nbInput", "", "fullWidth", "", "formControlName", "startDate", 3, "ngModelChange", "nbDatepicker", "placeholder"], ["nbSpinnerStatus", "danger", "nbSpinnerSize", "large", "nbSpinnerMessage", "", 2, "margin-top", "10px", 3, "ngSwitch", "nbSpinner"], ["status", "warning", 4, "ngSwitchCase"], ["status", "danger", 4, "ngSwitchCase"], ["status", "primary", 4, "ngSwitchCase"], ["status", "warning"], [4, "ngFor", "ngForOf"], ["status", "danger"], ["status", "primary"], ["type", "submit", "nbButton", "", "status", "success", 3, "click", "disabled", "nbTooltip"], ["size", "small", "type", "submit", "nbButton", "", "status", "success", 3, "click", "disabled"]],
        template: function RecurringExpenseMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3)(2, "div", 4)(3, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseMutationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "h5", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, RecurringExpenseMutationComponent_ng_container_9_Template, 5, 4, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(16, "ng-select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(18, RecurringExpenseMutationComponent_div_18_Template, 8, 6, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(19, "div", 9)(20, "div", 15)(21, "div", 11)(22, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(25, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(28, "ga-currency", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(29, RecurringExpenseMutationComponent_div_29_Template, 16, 12, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(30, "nb-card-footer")(31, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseMutationComponent_Template_button_click_31_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(34, RecurringExpenseMutationComponent_button_34_Template, 4, 7, "button", 21)(35, RecurringExpenseMutationComponent_button_35_Template, 3, 4, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 17, ctx.componentType === ctx.ComponentTypeEnum.EMPLOYEE ? "EMPLOYEES_PAGE.RECURRING_EXPENSE" : "ORGANIZATIONS_PAGE.RECURRING_EXPENSE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.componentType === ctx.ComponentTypeEnum.EMPLOYEE);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(15, 19, "POP_UPS.CATEGORY_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("items", ctx.defaultFilteredCategories)("addTag", ctx.addNewCustomCategory)("searchable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(17, 21, "POP_UPS.CATEGORY_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.componentType === ctx.ComponentTypeEnum.ORGANIZATION);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(24, 23, "SM_TABLE.VALUE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(26, 25, "SM_TABLE.VALUE"))("min", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.form.get("currency"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.recurringExpense);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(33, 27, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.recurringExpense);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.recurringExpense);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgSwitchCase */ .e1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbAlertComponent */ .EVe, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbTooltipDirective */ .BmQ, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__/* .NgSelectComponent */ .vr, _selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_26__/* .EmployeeSelectorComponent */ .R, _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_27__/* .CurrencyComponent */ .X, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .CurrencyPipe */ .oe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: nb-theme(gauzy-card-1);\n}"]
      });
    }
  };
  return RecurringExpenseMutationComponent;
})();
RecurringExpenseMutationComponent = RecurringExpenseMutationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .DateRangePickerBuilderService */ .i7, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ExpenseCategoriesStoreService */ .Z, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .OrganizationRecurringExpenseService */ .I, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeRecurringExpenseService */ .V])], RecurringExpenseMutationComponent);


/***/ }),

/***/ 19882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ RecurringExpenseBlockModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98722);
/* harmony import */ var _recurring_expense_history_recurring_expense_history_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let RecurringExpenseBlockModule = /*#__PURE__*/(() => {
  class RecurringExpenseBlockModule {
    static {
      this.ɵfac = function RecurringExpenseBlockModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseBlockModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RecurringExpenseBlockModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G, _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_5__/* .SmartDataViewLayoutModule */ .H, _recurring_expense_history_recurring_expense_history_module__WEBPACK_IMPORTED_MODULE_6__/* .RecurringExpenseHistoryModule */ .g]
      });
    }
  }
  return RecurringExpenseBlockModule;
})();

/***/ }),

/***/ 27143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ RecurringExpenseHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63315);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42128);














function RecurringExpenseHistoryComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const record_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", ctx_r1.getMonthString(record_r1.startMonth), " ", record_r1.startYear, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(6, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(5, 3, record_r1 == null ? null : record_r1.value, record_r1 == null ? null : record_r1.currency), ctx_r1.organization == null ? null : ctx_r1.organization.currencyPosition), " ");
  }
}
let RecurringExpenseHistoryComponent = /*#__PURE__*/(() => {
  let RecurringExpenseHistoryComponent = class RecurringExpenseHistoryComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService, store) {
      super(translateService);
      this.translateService = translateService;
      this.store = store;
      this.recordsData = [];
      this.closeHistory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.emitClose = () => {
        this.closeHistory.emit();
      };
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    getMonthString(month) {
      return _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .monthNames */ .d[month];
    }
    static {
      this.ɵfac = function RecurringExpenseHistoryComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RecurringExpenseHistoryComponent,
        selectors: [["ga-recurring-expense-history"]],
        inputs: {
          recordsData: "recordsData"
        },
        outputs: {
          closeHistory: "closeHistory"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 17,
        vars: 10,
        consts: [[1, "recurring-expense-history"], [1, "history"], [1, "row", "head"], [1, "col"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "close-icon", 3, "click"], ["icon", "close-outline"], [1, "row"]],
        template: function RecurringExpenseHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 2)(6, "div", 3)(7, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 3)(11, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, RecurringExpenseHistoryComponent_div_14_Template, 8, 9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function RecurringExpenseHistoryComponent_Template_div_click_15_listener() {
              return ctx.emitClose();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(16, "nb-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "POP_UPS.EXPENSE_HISTORY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 6, "POP_UPS.STARTS_ON"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 8, "POP_UPS.NEW_EXPENSE_VALUE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.recordsData);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .Sq, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyPipe */ .oe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .D9, _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_12__/* .CurrencyPositionPipe */ .n],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.recurring-expense-history[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 10px 30px 0px 30px;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.recurring-expense-history[_ngcontent-%COMP%]   .history[_ngcontent-%COMP%] {\n  max-width: 560px;\n  flex: 1;\n}\n.recurring-expense-history[_ngcontent-%COMP%]   .history[_ngcontent-%COMP%]   row.head[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--gauzy-text-color-2);\n}\n.recurring-expense-history[_ngcontent-%COMP%]   .history[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-1);\n}\n.recurring-expense-history[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  justify-content: space-between;\n}"]
      });
    }
  };
  RecurringExpenseHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il])], RecurringExpenseHistoryComponent);
  return RecurringExpenseHistoryComponent;
})();


/***/ }),

/***/ 34027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I5: () => (/* binding */ ComponentType),
/* harmony export */   _y: () => (/* binding */ RecurringExpenseDefaultCategoriesEnum),
/* harmony export */   dD: () => (/* binding */ StartDateUpdateTypeEnum)
/* harmony export */ });
/* unused harmony export RecurringExpenseDeletionEnum */
var RecurringExpenseDeletionEnum = /*#__PURE__*/function (RecurringExpenseDeletionEnum) {
  RecurringExpenseDeletionEnum["CURRENT"] = "current";
  RecurringExpenseDeletionEnum["FUTURE"] = "future";
  RecurringExpenseDeletionEnum["ALL"] = "all";
  return RecurringExpenseDeletionEnum;
}(RecurringExpenseDeletionEnum || {});
var RecurringExpenseDefaultCategoriesEnum = /*#__PURE__*/function (RecurringExpenseDefaultCategoriesEnum) {
  RecurringExpenseDefaultCategoriesEnum["SALARY"] = "SALARY";
  RecurringExpenseDefaultCategoriesEnum["SALARY_TAXES"] = "SALARY_TAXES";
  RecurringExpenseDefaultCategoriesEnum["RENT"] = "RENT";
  RecurringExpenseDefaultCategoriesEnum["EXTRA_BONUS"] = "EXTRA_BONUS";
  return RecurringExpenseDefaultCategoriesEnum;
}(RecurringExpenseDefaultCategoriesEnum || {});
var StartDateUpdateTypeEnum = /*#__PURE__*/function (StartDateUpdateTypeEnum) {
  StartDateUpdateTypeEnum["REDUCE_SAFE"] = "REDUCE_SAFE";
  StartDateUpdateTypeEnum["REDUCE_CONFLICT"] = "REDUCE_CONFLICT";
  StartDateUpdateTypeEnum["INCREASE_SAFE_WITHIN_LIMIT"] = "INCREASE_SAFE_WITHIN_LIMIT";
  StartDateUpdateTypeEnum["INCREASE_SAFE_OUTSIDE_LIMIT"] = "INCREASE_SAFE_OUTSIDE_LIMIT";
  StartDateUpdateTypeEnum["INCREASE_CONFLICT"] = "INCREASE_CONFLICT";
  StartDateUpdateTypeEnum["WITHIN_MONTH"] = "WITHIN_MONTH";
  StartDateUpdateTypeEnum["NO_CHANGE"] = "NO_CHANGE";
  return StartDateUpdateTypeEnum;
}(StartDateUpdateTypeEnum || {});
var ComponentType = /*#__PURE__*/function (ComponentType) {
  ComponentType["EMPLOYEE"] = "EMPLOYEE";
  ComponentType["ORGANIZATION"] = "ORGANIZATION";
  return ComponentType;
}(ComponentType || {});

/***/ }),

/***/ 49291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ OrganizationRecurringExpenseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let OrganizationRecurringExpenseService = /*#__PURE__*/(() => {
  class OrganizationRecurringExpenseService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/organization-recurring-expense`;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.API_URL, createInput));
    }
    getAll(relations, findInput, order) {
      const data = JSON.stringify({
        relations,
        findInput,
        order
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(this.API_URL, {
        params: {
          data
        }
      }));
    }
    getAllByMonth(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.API_URL}/month`, {
        params: {
          data
        }
      }));
    }
    delete(id, deleteInput) {
      const data = JSON.stringify({
        deleteInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.API_URL}/${id}`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.API_URL}/${id}`, updateInput));
    }
    getSplitExpensesForEmployee(orgId, findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.API_URL}/employee/${orgId}`, {
        params: {
          data
        }
      }));
    }
    getStartDateUpdateType(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.API_URL}/date-update-type`, {
        params: {
          data
        }
      }));
    }
    static {
      this.ɵfac = function OrganizationRecurringExpenseService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationRecurringExpenseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationRecurringExpenseService,
        factory: OrganizationRecurringExpenseService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationRecurringExpenseService;
})();

/***/ }),

/***/ 51119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ ExpenseCategoriesService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let ExpenseCategoriesService = /*#__PURE__*/(() => {
  class ExpenseCategoriesService {
    constructor(http) {
      this.http = http;
    }
    getAll(where) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/expense-categories`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)({
          where
        })
      });
    }
    create(category) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/expense-categories`, category);
    }
    static {
      this.ɵfac = function ExpenseCategoriesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ExpenseCategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ExpenseCategoriesService,
        factory: ExpenseCategoriesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ExpenseCategoriesService;
})();

/***/ }),

/***/ 78230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ RecurringExpenseHistoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98722);
/* harmony import */ var _table_components_table_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let RecurringExpenseHistoryModule = /*#__PURE__*/(() => {
  class RecurringExpenseHistoryModule {
    static {
      this.ɵfac = function RecurringExpenseHistoryModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseHistoryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RecurringExpenseHistoryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G, _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_5__/* .SmartDataViewLayoutModule */ .H, _table_components_table_components_module__WEBPACK_IMPORTED_MODULE_6__/* .TableComponentsModule */ .p]
      });
    }
  }
  return RecurringExpenseHistoryModule;
})();

/***/ }),

/***/ 88487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ExpenseCategoriesStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _expense_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51119);





let ExpenseCategoriesStoreService = /*#__PURE__*/(() => {
  class ExpenseCategoriesStoreService {
    get expenseCategories() {
      return this._expenseCategories$.getValue();
    }
    constructor(expenseCategoriesService) {
      this.expenseCategoriesService = expenseCategoriesService;
      this._expenseCategories$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t([]);
      this.expenseCategories$ = this._expenseCategories$.asObservable();
    }
    loadAll(where) {
      this.expenseCategoriesService.getAll(where).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(({
        items
      }) => this._expenseCategories$.next(items))).subscribe();
    }
    create(category) {
      return this.expenseCategoriesService.create(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(category => this._expenseCategories$.next([...this.expenseCategories, category])));
    }
    static {
      this.ɵfac = function ExpenseCategoriesStoreService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ExpenseCategoriesStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_expense_categories_service__WEBPACK_IMPORTED_MODULE_3__/* .ExpenseCategoriesService */ .s));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ExpenseCategoriesStoreService,
        factory: ExpenseCategoriesStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ExpenseCategoriesStoreService;
})();

/***/ }),

/***/ 94557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ EmployeeRecurringExpenseService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let EmployeeRecurringExpenseService = /*#__PURE__*/(() => {
  class EmployeeRecurringExpenseService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/employee-recurring-expense`;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.API_URL, createInput));
    }
    getAll(relations = [], where, order) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(this.API_URL, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          relations,
          where,
          order
        })
      }));
    }
    getAllByRange(relations, where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.API_URL}/month`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          relations,
          ...where
        })
      }));
    }
    delete(id, deleteInput) {
      const data = JSON.stringify({
        deleteInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.API_URL}/${id}`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.API_URL}/${id}`, updateInput));
    }
    getStartDateUpdateType(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.API_URL}/date-update-type`, {
        params: {
          data
        }
      }));
    }
    static {
      this.ɵfac = function EmployeeRecurringExpenseService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeRecurringExpenseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: EmployeeRecurringExpenseService,
        factory: EmployeeRecurringExpenseService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EmployeeRecurringExpenseService;
})();

/***/ })

}]);