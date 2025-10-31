"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9993],{

/***/ 2920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ InvoiceAddComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(64411);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63570);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80477);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26024);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52345);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36950);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23423);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5712);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(66496);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59520);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(20825);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(7784);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(35388);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(3289);
/* harmony import */ var _invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31652);
/* harmony import */ var _table_components_invoice_expense_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71215);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64612);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(62177);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(57354);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(55567);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(64251);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(3456);
/* harmony import */ var _packages_ui_core_shared_src_lib_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(84597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(90910);



































function InvoiceAddComponent_nb_option_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const invoiceType_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("value", invoiceType_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE.INVOICE_TYPE." + invoiceType_r2), " ");
  }
}
function InvoiceAddComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(1, "div", 10)(2, "div", 11)(3, "ga-employee-multi-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InvoiceAddComponent_ng_container_68_Template_ga_employee_multi_select_selectedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onMembersSelected($event));
    })("onLoadEmployees", function InvoiceAddComponent_ng_container_68_Template_ga_employee_multi_select_onLoadEmployees_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onLoadEmployees($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
}
function InvoiceAddComponent_div_69_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", item_r6.name, " ");
  }
}
function InvoiceAddComponent_div_69_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 62)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(item_r7.name);
  }
}
function InvoiceAddComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 10)(1, "div", 11)(2, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(5, "ng-select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayListener"] */ .mxI("itemsChange", function InvoiceAddComponent_div_69_Template_ng_select_itemsChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r3.projects, $event) || (ctx_r3.projects = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("change", function InvoiceAddComponent_div_69_Template_ng_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.selectProject($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(7, InvoiceAddComponent_div_69_ng_template_7_Template, 1, 1, "ng-template", 60)(8, InvoiceAddComponent_div_69_ng_template_8_Template, 3, 1, "ng-template", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "INVOICES_PAGE.INVOICE_TYPE.SELECT_PROJECTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "INVOICES_PAGE.INVOICE_TYPE.SELECT_PROJECTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayProperty"] */ .R50("items", ctx_r3.projects);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("multiple", true);
  }
}
function InvoiceAddComponent_div_70_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r9 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", item_r9.title, " ");
  }
}
function InvoiceAddComponent_div_70_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 62)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r10 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(item_r10.title);
  }
}
function InvoiceAddComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 10)(1, "div", 11)(2, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(5, "ng-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayListener"] */ .mxI("itemsChange", function InvoiceAddComponent_div_70_Template_ng_select_itemsChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r3.tasks, $event) || (ctx_r3.tasks = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("change", function InvoiceAddComponent_div_70_Template_ng_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.selectTask($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(7, InvoiceAddComponent_div_70_ng_template_7_Template, 1, 1, "ng-template", 60)(8, InvoiceAddComponent_div_70_ng_template_8_Template, 3, 1, "ng-template", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "INVOICES_PAGE.INVOICE_TYPE.SELECT_TASKS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "INVOICES_PAGE.INVOICE_TYPE.SELECT_TASKS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayProperty"] */ .R50("items", ctx_r3.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("multiple", true);
  }
}
function InvoiceAddComponent_div_71_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r12 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", item_r12.name, " ");
  }
}
function InvoiceAddComponent_div_71_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 62)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r13 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(item_r13.name);
  }
}
function InvoiceAddComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 10)(1, "div", 11)(2, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(5, "ng-select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayListener"] */ .mxI("itemsChange", function InvoiceAddComponent_div_71_Template_ng_select_itemsChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r3.products, $event) || (ctx_r3.products = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("change", function InvoiceAddComponent_div_71_Template_ng_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.selectProduct($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(7, InvoiceAddComponent_div_71_ng_template_7_Template, 1, 1, "ng-template", 60)(8, InvoiceAddComponent_div_71_ng_template_8_Template, 3, 1, "ng-template", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "INVOICES_PAGE.INVOICE_TYPE.SELECT_PRODUCTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "INVOICES_PAGE.INVOICE_TYPE.SELECT_PRODUCTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayProperty"] */ .R50("items", ctx_r3.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("multiple", true);
  }
}
function InvoiceAddComponent_div_72_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r15 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", item_r15.purpose, " ");
  }
}
function InvoiceAddComponent_div_72_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 62)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r16 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(item_r16.purpose);
  }
}
function InvoiceAddComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 10)(1, "div", 11)(2, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(5, "ng-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayListener"] */ .mxI("itemsChange", function InvoiceAddComponent_div_72_Template_ng_select_itemsChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r14);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r3.expenses, $event) || (ctx_r3.expenses = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("change", function InvoiceAddComponent_div_72_Template_ng_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r14);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.selectExpense($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(7, InvoiceAddComponent_div_72_ng_template_7_Template, 1, 1, "ng-template", 60)(8, InvoiceAddComponent_div_72_ng_template_8_Template, 3, 1, "ng-template", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "INVOICES_PAGE.INVOICE_TYPE.SELECT_EXPENSES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "INVOICES_PAGE.INVOICE_TYPE.SELECT_EXPENSES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayProperty"] */ .R50("items", ctx_r3.expenses);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("multiple", true);
  }
}
function InvoiceAddComponent_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceAddComponent_button_80_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r17);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.generateTable(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r3.invoiceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE.INVOICE_TYPE.GENERATE_FOR_UNINVOICED_EXPENSES"), " ");
  }
}
function InvoiceAddComponent_nb_option_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const discountTaxType_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("value", discountTaxType_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE." + discountTaxType_r18), " ");
  }
}
function InvoiceAddComponent_nb_option_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const discountTaxType_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("value", discountTaxType_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE." + discountTaxType_r19), " ");
  }
}
function InvoiceAddComponent_nb_option_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const discountTaxType_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("value", discountTaxType_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE." + discountTaxType_r20), " ");
  }
}
function InvoiceAddComponent_div_137_nb_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const taxCalculationType_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("value", taxCalculationType_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE." + taxCalculationType_r22), " ");
  }
}
function InvoiceAddComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 9)(1, "div", 21)(2, "div", 11)(3, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(6, "nb-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceAddComponent_div_137_Template_nb_select_ngModelChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r21);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.calculateTotal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(8, InvoiceAddComponent_div_137_nb_option_8_Template, 3, 4, "nb-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(5, 3, "INVOICES_PAGE.TAX_CALCULATION_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(7, 5, "INVOICES_PAGE.TAX_CALCULATION_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r3.taxCalculationTypes);
  }
}
function InvoiceAddComponent_div_142_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r3.smartTableSource);
  }
}
function InvoiceAddComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 72)(2, "angular2-smart-table", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("createConfirm", function InvoiceAddComponent_div_142_Template_angular2_smart_table_createConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r23);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onCreateConfirm($event));
    })("editConfirm", function InvoiceAddComponent_div_142_Template_angular2_smart_table_editConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r23);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onEditConfirm($event));
    })("deleteConfirm", function InvoiceAddComponent_div_142_Template_angular2_smart_table_deleteConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r23);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onDeleteConfirm($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(4, InvoiceAddComponent_div_142_ng_container_4_Template, 2, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(5, "div", 75)(6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(9, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r3.settingsSmartTable)("source", ctx_r3.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r3.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(8, 9, "INVOICES_PAGE.SUBTOTAL"), ": ", ctx_r3.currency.value, " ", ctx_r3.subtotal.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(11, 11, "INVOICES_PAGE.TOTAL"), ": ", ctx_r3.currency.value, " ", ctx_r3.total.toFixed(2), " ");
  }
}
function InvoiceAddComponent_ng_template_156_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 80)(1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.ADD"), " ");
  }
}
function InvoiceAddComponent_ng_template_156_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(4, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceAddComponent_ng_template_156_ng_template_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r24);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r3.deleteIncome(ctx_r3.selectedItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r3.selectedItem && ctx_r3.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r3.selectedItem && ctx_r3.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(5, 6, "BUTTONS.DELETE"));
  }
}
function InvoiceAddComponent_ng_template_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(0, InvoiceAddComponent_ng_template_156_ng_template_0_Template, 5, 3, "ng-template", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(2, InvoiceAddComponent_ng_template_156_ng_template_2_Template, 7, 8, "ng-template", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
let InvoiceAddComponent = class InvoiceAddComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .PaginationFilterBaseComponent */ .t {
  get currency() {
    return this.form.get('currency');
  }
  set isEstimate(val) {
    this._isEstimate = val;
  }
  get isEstimate() {
    return this._isEstimate;
  }
  constructor(fb, translateService, store, router, toastrService, invoicesService, organizationProjectsService, invoiceItemService, tasksStore, productService, dialogService, expensesService, invoiceEstimateHistoryService, translatableService, organizationSettingService) {
    super(translateService);
    this.fb = fb;
    this.translateService = translateService;
    this.store = store;
    this.router = router;
    this.toastrService = toastrService;
    this.invoicesService = invoicesService;
    this.organizationProjectsService = organizationProjectsService;
    this.invoiceItemService = invoiceItemService;
    this.tasksStore = tasksStore;
    this.productService = productService;
    this.dialogService = dialogService;
    this.expensesService = expensesService;
    this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    this.translatableService = translatableService;
    this.organizationSettingService = organizationSettingService;
    this.invoiceTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU);
    this.discountTaxTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .DiscountTaxTypeEnum */ .Ai);
    this.taxCalculationTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .TaxCalculationTypeEnum */ .Cj);
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .LocalDataSource */ .h0();
    this.observableTasks = this.tasksStore.tasks$;
    this.disableSaveButton = true;
    this.subtotal = 0;
    this.total = 0;
    this._isEstimate = false;
  }
  ngOnInit() {
    this._applyTranslationOnSmartTable();
    this.selectedLanguage = this.translateService.currentLang;
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(({
      currency
    }) => this.currencyString = currency), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(organization => this.discountAfterTax = organization.discountAfterTax), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => {
      this.initializeForm();
      this._initializeMethods();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => {
      if (this.currencyString) {
        this.currency.setValue(this.currencyString);
        this.currency.updateValueAndValidity();
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    this.observableTasks.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe(data => {
      this.tasks = data;
    });
    this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe(languageEvent => {
      this.selectedLanguage = languageEvent.lang;
    });
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => {
      const {
        activePage,
        itemsPerPage
      } = this.getPagination();
      this.smartTableSource.setPaging(activePage, itemsPerPage, false);
      this.smartTableSource.refresh();
    })).subscribe();
    this.pagination$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  initializeForm() {
    this.form = this.fb.group({
      invoiceDate: [this.organizationSettingService.getDateFromOrganizationSettings(), _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.required],
      invoiceNumber: [this.formInvoiceNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.min(1)])],
      dueDate: [this.getNextMonth(), _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.required],
      currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.required],
      discountValue: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.min(0)])],
      tax: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.min(0)])],
      tax2: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.min(0)])],
      terms: [this.organization ? this.organization.defaultInvoiceEstimateTerms || '' : ''],
      organizationContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .Validators */ .k0.required],
      discountType: [],
      taxType: [],
      taxCalculationType: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .TaxCalculationTypeEnum */ .Cj.SIMPLE],
      tax2Type: [],
      invoiceType: [],
      project: [],
      task: [],
      product: [],
      expense: [],
      tags: []
    });
  }
  loadSmartTable() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate: true
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true
      },
      columns: {}
    };
    let price = {};
    let quantity = {};
    switch (this.invoiceType) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
        this.settingsSmartTable['columns']['selectedItem'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.EMPLOYEE'),
          width: '13%',
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceEmployeesSelectorComponent */ .PA
          },
          valuePrepareFunction: cell => {
            const employee = cell;
            return `${employee.user.name}`;
          }
        };
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
        this.settingsSmartTable['columns']['selectedItem'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PROJECT'),
          width: '13%',
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceProjectsSelectorComponent */ .QA
          },
          valuePrepareFunction: cell => {
            const project = cell;
            return `${project.name}`;
          }
        };
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
        this.settingsSmartTable['columns']['selectedItem'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.TASK'),
          width: '13%',
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceTasksSelectorComponent */ .ar
          },
          valuePrepareFunction: cell => {
            const task = cell;
            return `${task.title}`;
          }
        };
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
        this.settingsSmartTable['columns']['selectedItem'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PRODUCT'),
          width: '13%',
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceProductsSelectorComponent */ .Mn
          },
          valuePrepareFunction: cell => {
            const product = cell;
            return `${this.translatableService.getTranslatedProperty(product, 'name')}`;
          }
        };
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES:
        this.settingsSmartTable['columns']['selectedItem'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.EXPENSE'),
          width: '13%',
          editor: {
            type: 'custom',
            component: _table_components_invoice_expense_selector_component__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceExpensesSelectorComponent */ .F
          },
          valuePrepareFunction: cell => {
            const expense = cell;
            return `${expense.purpose}`;
          }
        };
        break;
      default:
        break;
    }
    if (this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS || this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS || this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS) {
      price = {
        title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.HOURLY_RATE'),
        type: 'text',
        isFilterable: false,
        width: '13%',
        valuePrepareFunction: (cell, row) => {
          return `${this.currency.value} ${cell}`;
        }
      };
      quantity = {
        title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.HOURS_WORKED'),
        type: 'text',
        isFilterable: false,
        width: '13%'
      };
    } else if (this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.DETAILED_ITEMS || this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS || this.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES) {
      price = {
        title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PRICE'),
        type: 'text',
        isFilterable: false,
        width: '13%',
        valuePrepareFunction: cell => {
          return `${this.currency.value} ${cell}`;
        }
      };
      quantity = {
        title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.QUANTITY'),
        type: 'text',
        width: '13%',
        isFilterable: false
      };
    }
    this.settingsSmartTable['columns']['description'] = {
      title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.DESCRIPTION'),
      type: 'text',
      width: '13%'
    };
    this.settingsSmartTable['columns']['price'] = price;
    this.settingsSmartTable['columns']['quantity'] = quantity;
    this.settingsSmartTable['columns']['totalValue'] = {
      title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.TOTAL_VALUE'),
      type: 'text',
      addable: false,
      editable: false,
      valuePrepareFunction: cell => {
        return `${this.currency.value} ${cell}`;
      },
      isFilterable: false,
      width: '13%'
    };
    if (this.organization.separateInvoiceItemTaxAndDiscount) {
      this.settingsSmartTable['columns']['applyTax'] = {
        title: this.getTranslation('INVOICES_PAGE.APPLY_TAX'),
        editor: {
          type: 'custom',
          component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceApplyTaxDiscountComponent */ .BC
        },
        isFilterable: false,
        width: '10%',
        valuePrepareFunction: cell => {
          if (cell) {
            return this.getTranslation('INVOICES_PAGE.APPLIED');
          } else {
            return this.getTranslation('INVOICES_PAGE.NOT_APPLIED');
          }
        }
      };
      this.settingsSmartTable['columns']['applyDiscount'] = {
        title: this.getTranslation('INVOICES_PAGE.APPLY_DISCOUNT'),
        editor: {
          type: 'custom',
          component: _table_components__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceApplyTaxDiscountComponent */ .BC
        },
        isFilterable: false,
        width: '10%',
        valuePrepareFunction: cell => {
          if (cell) {
            return this.getTranslation('INVOICES_PAGE.APPLIED');
          } else {
            return this.getTranslation('INVOICES_PAGE.NOT_APPLIED');
          }
        }
      };
    }
  }
  createInvoiceEstimate(status, sendTo) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      // Wait for organization to be loaded if not available
      if (!_this.organization) {
        // Try to get organization from store
        const organization = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(_this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(org => !!org)));
        if (!organization) {
          _this.toastrService.danger(_this.getTranslation('INVOICES_PAGE.ERROR.ORGANIZATION_NOT_FOUND') + '. Please refresh the page and try again.', _this.getTranslation('TOASTR.TITLE.ERROR'));
          return null;
        }
        _this.organization = organization;
      }
      const {
        id: organizationId
      } = _this.organization;
      const {
        tenantId
      } = _this.store.user;
      const {
        value: currency
      } = _this.currency;
      const {
        invoiceNumber,
        invoiceDate,
        dueDate,
        discountValue,
        discountType,
        tax,
        tax2,
        taxType,
        tax2Type,
        terms,
        organizationContact,
        tags
      } = _this.form.value;
      // Detailed validation with user-friendly messages
      if (!organizationContact || !organizationContact.id) {
        _this.toastrService.danger(_this.getTranslation('INVOICES_PAGE.ERROR.CONTACT_REQUIRED') + '. Please select a client/contact before creating an invoice.', _this.getTranslation('TOASTR.TITLE.ERROR'));
        return null;
      }
      if (!invoiceDate) {
        _this.toastrService.danger(_this.getTranslation('INVOICES_PAGE.ERROR.INVOICE_DATE_REQUIRED') + '. Please select an invoice date.', _this.getTranslation('TOASTR.TITLE.ERROR'));
        return null;
      }
      if (!dueDate) {
        _this.toastrService.danger(_this.getTranslation('INVOICES_PAGE.ERROR.DUE_DATE_REQUIRED') + '. Please select a due date.', _this.getTranslation('TOASTR.TITLE.ERROR'));
        return null;
      }
      // Validate that all required form fields have values
      if (!invoiceNumber || invoiceNumber <= 0) {
        _this.toastrService.danger(_this.getTranslation('INVOICES_PAGE.ERROR.INVOICE_NUMBER_INVALID') + '. Invoice number must be greater than 0.', _this.getTranslation('TOASTR.TITLE.ERROR'));
        return null;
      }
      if (!currency) {
        _this.toastrService.danger(_this.getTranslation('INVOICES_PAGE.ERROR.CURRENCY_REQUIRED') + '. Please select a currency.', _this.getTranslation('TOASTR.TITLE.ERROR'));
        return null;
      }
      // Log the invoice data being sent for debugging
      const invoiceData = {
        invoiceNumber,
        invoiceDate: moment__WEBPACK_IMPORTED_MODULE_0__(invoiceDate).startOf('day').toDate(),
        dueDate: moment__WEBPACK_IMPORTED_MODULE_0__(dueDate).endOf('day').toDate(),
        currency,
        discountValue: discountValue || 0,
        discountType: discountType || null,
        tax: tax || 0,
        tax2: tax2 || 0,
        taxType: taxType || null,
        tax2Type: tax2Type || null,
        terms: terms || '',
        paid: false,
        totalValue: +_this.total.toFixed(2),
        toContact: organizationContact,
        organizationContactId: organizationContact.id,
        fromOrganization: _this.organization,
        organizationId,
        tenantId,
        invoiceType: _this.selectedInvoiceType || 'DETAILED_ITEMS',
        tags: tags || [],
        isEstimate: _this.isEstimate,
        status: status,
        sentTo: sendTo || null,
        isArchived: false
      };
      console.log('Attempting to create invoice with data:', invoiceData);
      try {
        const createdInvoice = yield _this.invoicesService.add(invoiceData);
        console.log('Invoice created successfully:', createdInvoice);
        _this.createdInvoice = createdInvoice;
        return createdInvoice;
      } catch (error) {
        console.error('Invoice creation failed:', error);
        // Provide detailed error message to user
        let errorMessage = _this.getTranslation('INVOICES_PAGE.ERROR.CREATE_FAILED');
        if (error?.error?.message) {
          errorMessage += ': ' + error.error.message;
        } else if (error?.message) {
          errorMessage += ': ' + error.message;
        } else if (error?.status === 400) {
          errorMessage += ': ' + _this.getTranslation('INVOICES_PAGE.ERROR.VALIDATION_FAILED') + '. Please check all required fields are filled correctly.';
        } else if (error?.status === 500) {
          errorMessage += ': ' + _this.getTranslation('INVOICES_PAGE.ERROR.SERVER_ERROR') + '. Please try again or contact support.';
        } else {
          errorMessage += ': ' + _this.getTranslation('INVOICES_PAGE.ERROR.UNKNOWN_ERROR') + '. Please check browser console for details.';
        }
        _this.toastrService.danger(errorMessage, _this.getTranslation('TOASTR.TITLE.ERROR'));
        return null;
      }
    })();
  }
  createInvoiceEstimateItems() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      if (!_this2.organization) {
        return;
      }
      const createdInvoice = _this2.createdInvoice;
      const {
        id: organizationId
      } = _this2.organization;
      const {
        tenantId
      } = _this2.store.user;
      const tableSources = yield _this2.smartTableSource.getAll();
      const invoiceItems = [];
      for (const invoiceItem of tableSources) {
        const id = invoiceItem.selectedItem ? invoiceItem.selectedItem.id : null;
        const itemToAdd = {
          description: invoiceItem.description,
          price: Number(invoiceItem.price),
          quantity: Number(invoiceItem.quantity),
          totalValue: invoiceItem.totalValue,
          invoiceId: createdInvoice.id,
          applyTax: invoiceItem.applyTax,
          applyDiscount: invoiceItem.applyDiscount,
          organizationId,
          tenantId
        };
        switch (_this2.selectedInvoiceType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
            itemToAdd['employeeId'] = id;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
            itemToAdd['projectId'] = id;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
            itemToAdd['taskId'] = id;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
            itemToAdd['productId'] = id;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES:
            itemToAdd['expenseId'] = id;
            break;
          default:
            break;
        }
        invoiceItems.push(itemToAdd);
      }
      try {
        return yield _this2.invoiceItemService.createBulk(createdInvoice.id, invoiceItems);
      } catch (error) {
        _this2.toastrService.danger(error);
      }
    })();
  }
  createInvoiceEstimateHistory() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      const {
        id: organizationId
      } = _this3.organization;
      const {
        tenantId
      } = _this3.store.user;
      try {
        yield _this3.invoiceEstimateHistoryService.add({
          action: _this3.isEstimate ? _this3.getTranslation('INVOICES_PAGE.INVOICES_ADD_ESTIMATE') : _this3.getTranslation('INVOICES_PAGE.INVOICES_ADD_INVOICE'),
          invoice: _this3.createdInvoice,
          invoiceId: _this3.createdInvoice.id,
          user: _this3.store.user,
          userId: _this3.store.userId,
          organization: _this3.organization,
          organizationId,
          tenantId
        });
      } catch (error) {
        _this3.toastrService.danger(error);
      }
    })();
  }
  addInvoice(status, sendTo) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      console.log('Starting invoice creation process...');
      const tableSources = yield _this4.smartTableSource.getAll();
      console.log('Invoice items to create:', tableSources);
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isEmpty */ .Im)(tableSources)) {
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.INVOICE_ITEM.NO_ITEMS') + '. Please add at least one invoice item before saving.', _this4.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      const {
        invoiceNumber,
        invoiceDate,
        dueDate,
        organizationContact
      } = _this4.form.value;
      console.log('Invoice form values:', {
        invoiceNumber,
        invoiceDate,
        dueDate,
        organizationContact
      });
      if (!invoiceNumber || invoiceNumber <= 0) {
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.ERROR.INVOICE_NUMBER_INVALID') + '. Please enter a valid invoice number.', _this4.getTranslation('TOASTR.TITLE.ERROR'));
        return;
      }
      if (!invoiceDate) {
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.ERROR.INVOICE_DATE_REQUIRED') + '. Please select an invoice date.', _this4.getTranslation('TOASTR.TITLE.ERROR'));
        return;
      }
      if (!dueDate) {
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.ERROR.DUE_DATE_REQUIRED') + '. Please select a due date.', _this4.getTranslation('TOASTR.TITLE.ERROR'));
        return;
      }
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .compareDate */ .SE)(invoiceDate, dueDate)) {
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.INVALID_DATES') + '. Due date must be after invoice date.', _this4.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      if (!organizationContact || !organizationContact.id) {
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.ERROR.CONTACT_REQUIRED') + '. Please select a client/contact.', _this4.getTranslation('TOASTR.TITLE.ERROR'));
        return;
      }
      // Check if invoice number already exists
      try {
        const invoice = yield _this4.invoicesService.getAll({
          invoiceNumber
        });
        console.log('Existing invoice check result:', invoice);
        if (invoice.items.length) {
          _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.INVOICE_NUMBER_DUPLICATE') + '. Please use a different invoice number.', _this4.getTranslation('TOASTR.TITLE.WARNING'));
          return;
        }
      } catch (error) {
        console.error('Error checking invoice number:', error);
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.ERROR.INVOICE_NUMBER_CHECK_FAILED') + ': ' + (error?.message || 'Unknown error'), _this4.getTranslation('TOASTR.TITLE.ERROR'));
        return;
      }
      // Create invoice estimate
      console.log('Creating invoice estimate...');
      const createdInvoice = yield _this4.createInvoiceEstimate(status, sendTo);
      if (!createdInvoice) {
        console.log('Invoice creation failed');
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.ERROR.INVOICE_CREATION_FAILED') + '. Please check the form data and try again.', _this4.getTranslation('TOASTR.TITLE.ERROR'));
        return;
      }
      console.log('Invoice created successfully:', createdInvoice);
      // Create invoice items
      console.log('Creating invoice items...');
      const createdItems = yield _this4.createInvoiceEstimateItems();
      if (!createdItems) {
        console.log('Invoice items creation failed');
        _this4.toastrService.danger(_this4.getTranslation('INVOICES_PAGE.ERROR.INVOICE_ITEMS_CREATION_FAILED') + '. Invoice was created but items could not be added.', _this4.getTranslation('TOASTR.TITLE.ERROR'));
        return;
      }
      console.log('Invoice items created successfully:', createdItems);
      // Create invoice history
      console.log('Creating invoice history...');
      yield _this4.createInvoiceEstimateHistory();
      if (_this4.isEstimate) {
        _this4.toastrService.success(_this4.getTranslation('INVOICES_PAGE.INVOICES_ADD_ESTIMATE_SUCCESS') + ' Estimate #' + createdInvoice.invoiceNumber + ' created successfully.', _this4.getTranslation('TOASTR.TITLE.SUCCESS'));
        _this4.router.navigate(['/pages/accounting/invoices/estimates'], {
          queryParams: {
            date: moment__WEBPACK_IMPORTED_MODULE_0__(invoiceDate).format('MM-DD-YYYY')
          }
        });
      } else {
        _this4.toastrService.success(_this4.getTranslation('INVOICES_PAGE.INVOICES_ADD_INVOICE_SUCCESS') + ' Invoice #' + createdInvoice.invoiceNumber + ' created successfully.', _this4.getTranslation('TOASTR.TITLE.SUCCESS'));
        _this4.router.navigate(['/pages/accounting/invoices'], {
          queryParams: {
            date: moment__WEBPACK_IMPORTED_MODULE_0__(invoiceDate).format('MM-DD-YYYY')
          }
        });
      }
    })();
  }
  sendToContact() {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      if (!_this5.organization) {
        return;
      }
      const {
        tenantId
      } = _this5.store.user;
      const {
        organizationContact
      } = _this5.form.value;
      if (organizationContact.id) {
        yield _this5.addInvoice(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceStatusTypesEnum */ .g0.SENT, organizationContact.id);
        try {
          yield _this5.invoiceEstimateHistoryService.add({
            action: _this5.isEstimate ? _this5.getTranslation('INVOICES_PAGE.ESTIMATE_SENT_TO', {
              name: organizationContact.name
            }) : _this5.getTranslation('INVOICES_PAGE.INVOICE_SENT_TO', {
              name: organizationContact.name
            }),
            invoice: _this5.createdInvoice,
            invoiceId: _this5.createdInvoice.id,
            user: _this5.store.user,
            userId: _this5.store.userId,
            organization: _this5.organization,
            organizationId: _this5.organization.id,
            tenantId
          });
        } catch (error) {
          console.log(error, 'error');
        }
      } else {
        _this5.toastrService.danger(_this5.getTranslation('INVOICES_PAGE.SEND.NOT_LINKED'), _this5.getTranslation('TOASTR.TITLE.WARNING'));
      }
    })();
  }
  sendViaEmail() {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      const tableSources = yield _this6.smartTableSource.getAll();
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isEmpty */ .Im)(tableSources)) {
        _this6.toastrService.danger(_this6.getTranslation('INVOICES_PAGE.INVOICE_ITEM.NO_ITEMS'), _this6.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      const {
        invoiceNumber,
        invoiceDate,
        dueDate
      } = _this6.form.value;
      if (!invoiceDate || !dueDate || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .compareDate */ .SE)(invoiceDate, dueDate)) {
        _this6.toastrService.danger(_this6.getTranslation('INVOICES_PAGE.INVALID_DATES'), _this6.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      const invoiceExists = yield _this6.invoicesService.getAll({
        invoiceNumber
      });
      if (invoiceExists.items.length) {
        _this6.toastrService.danger(_this6.getTranslation('INVOICES_PAGE.INVOICE_NUMBER_DUPLICATE'), _this6.getTranslation('TOASTR.TITLE.WARNING'));
        return;
      }
      const invoice = yield _this6.createInvoiceEstimate(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceStatusTypesEnum */ .g0.SENT);
      const invoiceItems = yield _this6.createInvoiceEstimateItems();
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(_this6.dialogService.open(_invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceEmailMutationComponent */ .q, {
        context: {
          invoice: invoice,
          invoiceItems: invoiceItems,
          isEstimate: _this6.isEstimate
        }
      }).onClose);
      if (_this6.isEstimate) {
        _this6.toastrService.success(_this6.getTranslation('INVOICES_PAGE.INVOICES_ADD_ESTIMATE'), _this6.getTranslation('TOASTR.TITLE.SUCCESS'));
        _this6.router.navigate(['/pages/accounting/invoices/estimates'], {
          queryParams: {
            date: moment__WEBPACK_IMPORTED_MODULE_0__(invoiceDate).format('MM-DD-YYYY')
          }
        });
      } else {
        _this6.toastrService.success(_this6.getTranslation('INVOICES_PAGE.INVOICES_ADD_INVOICE'), _this6.getTranslation('TOASTR.TITLE.SUCCESS'));
        _this6.router.navigate(['/pages/accounting/invoices'], {
          queryParams: {
            date: moment__WEBPACK_IMPORTED_MODULE_0__(invoiceDate).format('MM-DD-YYYY')
          }
        });
      }
    })();
  }
  _getInvoiceNumber() {
    var _this7 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      const {
        tenantId
      } = _this7.store.user;
      const invoiceNumber = yield _this7.invoicesService.getHighestInvoiceNumber(tenantId);
      if (invoiceNumber['max']) {
        _this7.formInvoiceNumber = +invoiceNumber['max'] + 1;
      } else {
        _this7.formInvoiceNumber = 1;
      }
    })();
  }
  getAllTasks() {
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.tasksStore.fetchTasks(tenantId, organizationId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _initializeMethods() {
    var _this8 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      const {
        organization
      } = _this8;
      if (!organization) return;
      _this8._getInvoiceNumber();
    })();
  }
  /**
   * Load employees from multiple selected employees
   *
   * @param employees
   */
  onLoadEmployees(employees) {
    this.employees = employees;
  }
  getAllProjects() {
    const {
      id: organizationId
    } = this.organization;
    const {
      tenantId
    } = this.store.user;
    this.organizationProjectsService.getAll([], {
      organizationId,
      tenantId
    }).then(({
      items
    }) => {
      this.projects = JSON.parse(JSON.stringify(items));
    });
  }
  getAllProducts() {
    const {
      id: organizationId
    } = this.organization;
    const {
      tenantId
    } = this.store.user;
    this.productService.getAll(['translations'], {
      organizationId,
      tenantId
    }, this.selectedLanguage).then(({
      items
    }) => {
      this.products = items;
    });
  }
  getAllExpenses() {
    const {
      id: organizationId
    } = this.organization;
    const {
      tenantId
    } = this.store.user;
    this.expensesService.getAll([], {
      typeOfExpense: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .ExpenseTypesEnum */ .DP.BILLABLE_TO_CONTACT,
      organizationId,
      tenantId
    }).then(({
      items
    }) => {
      this.expenses = items;
    });
  }
  onTypeChange($event) {
    this.invoiceType = $event;
    this.isEmployeeHourTable = false;
    this.isProjectHourTable = false;
    this.isTaskHourTable = false;
    this.isProductTable = false;
    this.isExpenseTable = false;
    switch ($event) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
        this.isEmployeeHourTable = true;
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
        this.isProjectHourTable = true;
        this.getAllProjects();
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
        this.isTaskHourTable = true;
        this.getAllTasks();
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
        this.isProductTable = true;
        this.getAllProducts();
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES:
        this.isExpenseTable = true;
        this.getAllExpenses();
        break;
      default:
        break;
    }
  }
  generateTable(generateUninvoiced) {
    var _this9 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      _this9.selectedInvoiceType = _this9.invoiceType;
      _this9.smartTableSource.refresh();
      const fakeData = [];
      let fakePrice = 10;
      let fakeQuantity = 5;
      if (generateUninvoiced) {
        const {
          tenantId
        } = _this9.store.user;
        const {
          id: organizationId
        } = _this9.organization;
        const expenses = yield _this9.expensesService.getAll([], {
          typeOfExpense: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .ExpenseTypesEnum */ .DP.BILLABLE_TO_CONTACT,
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .ExpenseStatusesEnum */ .gl.UNINVOICED,
          organizationId,
          tenantId
        });
        _this9.selectedExpenses = expenses.items;
      }
      switch (_this9.selectedInvoiceType) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
          if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .hj)(_this9.selectedEmployeeIds)) {
            for (const employeeId of _this9.selectedEmployeeIds) {
              const employee = _this9.employees.find(employee => employee.id === employeeId);
              const data = {
                description: 'Desc',
                price: fakePrice,
                quantity: fakeQuantity,
                selectedItem: employee,
                totalValue: fakePrice * fakeQuantity,
                applyTax: true,
                applyDiscount: true
              };
              fakeData.push(data);
              fakePrice++;
              fakeQuantity++;
            }
          }
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
          if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .hj)(_this9.selectedProjects)) {
            for (const project of _this9.selectedProjects) {
              const data = {
                description: 'Desc',
                price: fakePrice,
                quantity: fakeQuantity,
                selectedItem: project,
                totalValue: fakePrice * fakeQuantity,
                applyTax: true,
                applyDiscount: true
              };
              fakeData.push(data);
              fakePrice++;
              fakeQuantity++;
            }
          }
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
          if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .hj)(_this9.selectedTasks)) {
            for (const task of _this9.selectedTasks) {
              const data = {
                description: 'Desc',
                price: fakePrice,
                quantity: fakeQuantity,
                selectedItem: task,
                totalValue: fakePrice * fakeQuantity,
                applyTax: true,
                applyDiscount: true
              };
              fakeData.push(data);
              fakePrice++;
              fakeQuantity++;
            }
          }
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
          if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .hj)(_this9.selectedProducts)) {
            for (const product of _this9.selectedProducts) {
              const data = {
                description: 'Desc',
                price: fakePrice,
                quantity: fakeQuantity,
                selectedItem: product,
                totalValue: fakePrice * fakeQuantity,
                applyTax: true,
                applyDiscount: true
              };
              fakeData.push(data);
              fakePrice++;
              fakeQuantity++;
            }
          }
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES:
          if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .hj)(_this9.selectedExpenses)) {
            for (const expense of _this9.selectedExpenses) {
              const data = {
                description: 'Desc',
                price: fakePrice,
                quantity: fakeQuantity,
                selectedItem: expense,
                totalValue: fakePrice * fakeQuantity,
                applyTax: true,
                applyDiscount: true
              };
              fakeData.push(data);
              fakePrice++;
              fakeQuantity++;
            }
          }
          break;
        default:
          break;
      }
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .hj)(fakeData)) {
        let subtotal = 0;
        for (const data of fakeData) {
          let itemTotal = 0;
          itemTotal += +data.price * +data.quantity;
          subtotal += itemTotal;
        }
        _this9.subtotal = subtotal;
      } else {
        _this9.subtotal = 0;
      }
      _this9.shouldLoadTable = true;
      _this9.disableSaveButton = false;
      _this9.loadSmartTable();
      _this9.smartTableSource.load(JSON.parse(JSON.stringify(fakeData)));
      _this9.calculateTotal();
    })();
  }
  selectTask($event) {
    this.selectedTasks = $event;
  }
  selectOrganizationContact($event) {
    this.organizationContact = $event;
  }
  selectProject($event) {
    this.selectedProjects = $event;
  }
  selectProduct($event) {
    this.selectedProducts = $event;
  }
  selectExpense($event) {
    this.selectedExpenses = $event;
  }
  onMembersSelected(event) {
    this.selectedEmployeeIds = event;
  }
  calculateTotal() {
    var _this0 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      const discountValue = _this0.form.value.discountValue && _this0.form.value.discountValue > 0 ? _this0.form.value.discountValue : 0;
      const tax = _this0.form.value.tax && _this0.form.value.tax > 0 ? _this0.form.value.tax : 0;
      const tax2 = _this0.form.value.tax2 && _this0.form.value.tax2 > 0 ? _this0.form.value.tax2 : 0;
      const taxCalculationType = _this0.form.value.taxCalculationType;
      let totalDiscount = 0;
      let totalTax = 0;
      const tableData = yield _this0.smartTableSource.getAll();
      for (const item of tableData) {
        if (item.applyTax) {
          switch (_this0.form.value.taxType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .DiscountTaxTypeEnum */ .Ai.PERCENT:
              totalTax += item.totalValue * (+tax / 100);
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .DiscountTaxTypeEnum */ .Ai.FLAT_VALUE:
              totalTax += +tax;
              break;
            default:
              totalTax = 0;
              break;
          }
          switch (_this0.form.value.tax2Type) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .DiscountTaxTypeEnum */ .Ai.PERCENT:
              if (taxCalculationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .TaxCalculationTypeEnum */ .Cj.COMPOSED) {
                totalTax += (item.totalValue + totalTax) * (tax2 / 100);
              } else {
                totalTax += item.totalValue * (tax2 / 100);
              }
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .DiscountTaxTypeEnum */ .Ai.FLAT_VALUE:
              totalTax += +tax2;
              break;
            default:
              totalTax = 0;
              break;
          }
        }
        if (item.applyDiscount) {
          switch (_this0.form.value.discountType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .DiscountTaxTypeEnum */ .Ai.PERCENT:
              if (!_this0.discountAfterTax) {
                totalDiscount += item.totalValue * (+discountValue / 100);
              }
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .DiscountTaxTypeEnum */ .Ai.FLAT_VALUE:
              totalDiscount += +discountValue;
              break;
            default:
              totalDiscount = 0;
              break;
          }
        }
      }
      if (_this0.discountAfterTax && _this0.form.value.discountType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .DiscountTaxTypeEnum */ .Ai.PERCENT) {
        totalDiscount = (_this0.subtotal + totalTax) * (+discountValue / 100);
      }
      _this0.total = _this0.subtotal - totalDiscount + totalTax;
      if (_this0.total < 0) {
        _this0.total = 0;
      }
      _this0.setPagination({
        ..._this0.getPagination(),
        totalItems: _this0.smartTableSource.count()
      });
      _this0.refreshPagination();
    })();
  }
  applyDiscountAfterTax($event) {
    var _this1 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      _this1.discountAfterTax = $event;
      _this1.calculateTotal();
    })();
  }
  onCurrencyChange($event) {
    var _this10 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      const tableData = yield _this10.smartTableSource.getAll();
      _this10.smartTableSource.load(tableData);
    })();
  }
  onCreateConfirm(event) {
    var _this11 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      if (!isNaN(event.newData.quantity) && !isNaN((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price)) && event.newData.quantity && event.newData.price && event.newData.description && (event.newData.selectedItem || _this11.selectedInvoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.DETAILED_ITEMS)) {
        const newData = {
          ...event.newData,
          price: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price)
        };
        const itemTotal = +event.newData.quantity * +(0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price);
        newData.totalValue = itemTotal;
        _this11.subtotal += itemTotal;
        yield event.confirm.resolve(newData);
        yield _this11.calculateTotal();
      } else {
        _this11.toastrService.danger(_this11.getTranslation('INVOICES_PAGE.INVOICE_ITEM.INVALID_ITEM'), _this11.getTranslation('TOASTR.TITLE.WARNING'));
        event.confirm.reject();
      }
    })();
  }
  onEditConfirm(event) {
    var _this12 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      if (!isNaN(event.newData.quantity) && !isNaN((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price)) && event.newData.quantity && event.newData.price && event.newData.description && (event.newData.selectedItem || _this12.selectedInvoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .InvoiceTypeEnum */ .RU.DETAILED_ITEMS)) {
        const newData = {
          ...event.newData,
          price: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price)
        };
        const oldValue = +event.data.quantity * +event.data.price;
        const newValue = +newData.quantity * +(0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price);
        newData.totalValue = newValue;
        if (newValue > oldValue) {
          _this12.subtotal += newValue - oldValue;
        } else if (oldValue > newValue) {
          _this12.subtotal -= oldValue - newValue;
        }
        yield event.confirm.resolve(newData);
        yield _this12.calculateTotal();
      } else {
        _this12.toastrService.danger(_this12.getTranslation('INVOICES_PAGE.INVOICE_ITEM.INVALID_ITEM'), _this12.getTranslation('TOASTR.TITLE.WARNING'));
        event.confirm.reject();
      }
    })();
  }
  onDeleteConfirm(event) {
    var _this13 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      _this13.subtotal -= +event.data.quantity * +event.data.price;
      yield event.confirm.resolve(event.data);
      yield _this13.calculateTotal();
    })();
  }
  cancel() {
    if (this.isEstimate) {
      this.router.navigate(['/pages/accounting/invoices/estimates']);
    } else {
      this.router.navigate(['/pages/accounting/invoices']);
    }
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.loadSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  selectedTagsEvent(selectedTags) {
    this.form.get('tags').setValue(selectedTags);
    this.form.get('tags').updateValueAndValidity();
  }
  getNextMonth() {
    const date = new Date();
    const daysUntilDue = this.organization.daysUntilDue ? this.organization.daysUntilDue : null;
    if (daysUntilDue) {
      date.setDate(date.getDate() + this.organization.daysUntilDue);
    } else {
      date.setMonth(date.getMonth() + 1);
    }
    return date;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceAddComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoiceAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_18__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .OrganizationProjectsService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .InvoiceItemService */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .TasksStoreService */ .h), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .ProductService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .ExpensesService */ .D), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .InvoiceEstimateHistoryService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslatableService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .OrganizationSettingService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoiceAddComponent,
      selectors: [["ga-invoice-add"]],
      inputs: {
        isEstimate: "isEstimate"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 158,
      vars: 129,
      consts: [["invoiceEstimateDatePicker", ""], ["dueDatePicker", ""], ["actionButtons", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "main", "card-scroll", 3, "nbSpinner"], [1, "d-flex"], [1, "body", "content"], [1, "form", 3, "formGroup"], [1, "block-wrap"], [1, "block", "mt-2"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "inputInvoiceNumber", 1, "label"], ["type", "number", "nbInput", "", "formControlName", "invoiceNumber", "id", "inputInvoiceNumber", "fullWidth", "", 3, "ngModelChange", "min", "placeholder", "ngModel"], ["for", "inputOrganizationContact", 1, "label"], ["formControlName", "organizationContact", 3, "onChanged", "addTag", "placeholder"], ["for", "inputInvoiceEstimateDate", 1, "label"], ["formControlName", "invoiceDate", "type", "text", "nbInput", "", "id", "inputInvoiceEstimateDate", "fullWidth", "", "required", "", 3, "placeholder", "nbDatepicker"], ["for", "inputDueDate", 1, "label"], ["nbInput", "", "formControlName", "dueDate", "id", "inputDueDate", "fullWidth", "", 3, "placeholder", "nbDatepicker"], [3, "optionChange", "formControl"], [1, "col-sm-12"], ["for", "inputTerms", 1, "label"], ["nbInput", "", "formControlName", "terms", "id", "inputTerms", "fullWidth", "", 3, "placeholder"], [1, "col-sm-12", "mb-4"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], ["for", "invoiceType", 1, "label"], ["formControlName", "invoiceType", "id", "invoiceType", "fullWidth", "", 3, "selectedChange", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "col-sm-6", 4, "ngIf"], [1, "buttons"], ["status", "basic", "outline", "", "nbButton", "", 1, "gen", 3, "click", "disabled"], ["status", "success", "nbButton", "", "class", "ml-3", 3, "disabled", "click", 4, "ngIf"], [1, "block"], [1, "row", "group", "d-flex", "flex-column"], [1, "label", "label-group"], ["for", "inputDiscountValue", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "discountValue", "id", "inputDiscountValue", "fullWidth", "", 3, "ngModelChange", "placeholder", "min"], ["for", "inputDiscountType", 1, "label"], ["formControlName", "discountType", "id", "inputDiscountType", "fullWidth", "", 3, "ngModelChange", "placeholder"], ["for", "inputTax", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "tax", "id", "inputTax", "fullWidth", "", 3, "ngModelChange", "placeholder", "min"], ["for", "inputTax2", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "tax2", "id", "inputTax2", "fullWidth", "", 3, "ngModelChange", "placeholder", "min"], ["for", "inputDiscountTaxType", 1, "label"], ["formControlName", "taxType", "id", "inputDiscountTaxType", "fullWidth", "", 3, "ngModelChange", "placeholder"], ["for", "inputDiscountTaxType2", 1, "label"], ["formControlName", "tax2Type", "id", "inputDiscountTaxType2", "fullWidth", "", 3, "ngModelChange", "placeholder"], ["class", "row", 4, "ngIf"], [1, "discountCheckbox"], [3, "checkedChange", "checked"], [1, "text-left"], ["size", "small", "status", "basic", "size", "small", "outline", "", "nbButton", "", 3, "click"], ["size", "small", "status", "primary", "nbButton", "", 1, "gray", 3, "click", "disabled"], ["status", "success", "size", "small", "nbButton", "", 1, "mr-3", 3, "click", "disabled"], [3, "value"], [3, "selectedChange", "onLoadEmployees"], ["for", "inputProject", 1, "label"], ["bindName", "name", "formControlName", "project", "id", "inputProject", "appendTo", "body", 3, "itemsChange", "change", "items", "placeholder", "multiple"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [1, "selector-template"], ["for", "inputTask", 1, "label"], ["bindName", "title", "formControlName", "task", "id", "inputTask", "appendTo", "body", 3, "itemsChange", "change", "items", "placeholder", "multiple"], ["for", "inputProduct", 1, "label"], ["bindName", "name", "formControlName", "product", "id", "inputProduct", "appendTo", "body", 3, "itemsChange", "change", "items", "placeholder", "multiple"], ["for", "inputExpense", 1, "label"], ["bindName", "purpose", "formControlName", "expense", "id", "inputExpense", "appendTo", "body", 3, "itemsChange", "change", "items", "placeholder", "multiple"], ["status", "success", "nbButton", "", 1, "ml-3", 3, "click", "disabled"], ["for", "inputTaxCalculationType", 1, "label"], ["formControlName", "taxCalculationType", "id", "inputTaxCalculationType", "fullWidth", "", 3, "ngModelChange", "placeholder"], [1, "table-scroll-container", "custom-table"], [2, "cursor", "pointer", 3, "createConfirm", "editConfirm", "deleteConfirm", "settings", "source"], [1, "pagination-container"], [1, "total", "d-flex"], [1, "total-item"], [3, "source"], ["ngxPermissionsOnly", ""], [1, "button-action"], [1, "button-action", "mr-3", "ml-3"], ["nbButton", "", "status", "success", "size", "small"], ["icon", "plus-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function InvoiceAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body", 5)(7, "form", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "label", 12)(14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(17, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.formInvoiceNumber, $event) || (ctx.formInvoiceNumber = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(19, "div", 10)(20, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(23, "ga-contact-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("onChanged", function InvoiceAddComponent_Template_ga_contact_select_onChanged_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.selectOrganizationContact($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(25, "div", 9)(26, "div", 10)(27, "div", 11)(28, "label", 16)(29, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(32, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(34, "nb-datepicker", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(36, "div", 10)(37, "div", 11)(38, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(40, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(41, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(43, "nb-datepicker", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(45, "div", 9)(46, "div", 10)(47, "ga-currency", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("optionChange", function InvoiceAddComponent_Template_ga_currency_optionChange_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.onCurrencyChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(48, "div", 9)(49, "div", 21)(50, "div", 11)(51, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(53, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(54, "textarea", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(56, "div", 9)(57, "div", 24)(58, "ga-tags-color-input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function InvoiceAddComponent_Template_ga_tags_color_input_selectedTagsEvent_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsEvent($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(59, "div", 9)(60, "div", 10)(61, "div", 11)(62, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(64, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(65, "nb-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(66, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InvoiceAddComponent_Template_nb_select_selectedChange_65_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.onTypeChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(67, InvoiceAddComponent_nb_option_67_Template, 3, 4, "nb-option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(68, InvoiceAddComponent_ng_container_68_Template, 4, 0, "ng-container", 29)(69, InvoiceAddComponent_div_69_Template, 9, 8, "div", 30)(70, InvoiceAddComponent_div_70_Template, 9, 8, "div", 30)(71, InvoiceAddComponent_div_71_Template, 9, 8, "div", 30)(72, InvoiceAddComponent_div_72_Template, 9, 8, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(73, "div", 9)(74, "div", 21)(75, "div", 11)(76, "div", 31)(77, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceAddComponent_Template_button_click_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.generateTable());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(79, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(80, InvoiceAddComponent_button_80_Template, 3, 4, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(81, "div", 34)(82, "div", 35)(83, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(84);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(85, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(86, "div", 10)(87, "div", 11)(88, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(89);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(90, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(91, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(92, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_91_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(93, "div", 10)(94, "div", 11)(95, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(96);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(97, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(98, "nb-select", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(99, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceAddComponent_Template_nb_select_ngModelChange_98_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(100, InvoiceAddComponent_nb_option_100_Template, 3, 4, "nb-option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(101, "div", 35)(102, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(103);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(104, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(105, "div", 9)(106, "div", 10)(107, "div", 11)(108, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(110, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(111, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(112, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_111_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(113, "div", 10)(114, "div", 11)(115, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(116);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(117, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(118, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(119, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceAddComponent_Template_input_ngModelChange_118_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(120, "div", 9)(121, "div", 10)(122, "div", 11)(123, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(124);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(125, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(126, "nb-select", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(127, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceAddComponent_Template_nb_select_ngModelChange_126_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(128, InvoiceAddComponent_nb_option_128_Template, 3, 4, "nb-option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(129, "div", 10)(130, "div", 11)(131, "label", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(132);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(133, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(134, "nb-select", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(135, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceAddComponent_Template_nb_select_ngModelChange_134_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(136, InvoiceAddComponent_nb_option_136_Template, 3, 4, "nb-option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(137, InvoiceAddComponent_div_137_Template, 9, 7, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(138, "div", 50)(139, "nb-checkbox", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("checkedChange", function InvoiceAddComponent_Template_nb_checkbox_checkedChange_139_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.applyDiscountAfterTax($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(140);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(141, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(142, InvoiceAddComponent_div_142_Template, 12, 13, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(143, "nb-card-footer", 52)(144, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceAddComponent_Template_button_click_144_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.cancel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(145);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(146, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(147, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceAddComponent_Template_button_click_147_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.addInvoice("DRAFT"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(148);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(149, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(150, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceAddComponent_Template_button_click_150_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.sendToContact());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(151);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(152, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(153, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceAddComponent_Template_button_click_153_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.sendViaEmail());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(154);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(155, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(156, InvoiceAddComponent_ng_template_156_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const invoiceEstimateDatePicker_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(35);
          const dueDatePicker_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(5, 63, ctx.isEstimate ? "INVOICES_PAGE.ADD_ESTIMATE" : "INVOICES_PAGE.ADD_INVOICE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(16, 65, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_NUMBER" : "INVOICES_PAGE.INVOICE_NUMBER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(18, 67, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_NUMBER" : "INVOICES_PAGE.INVOICE_NUMBER"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.formInvoiceNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(22, 69, "INVOICES_PAGE.CONTACT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("addTag", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(24, 71, "POP_UPS.ALL_CONTACTS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(31, 73, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_DATE" : "INVOICES_PAGE.INVOICE_DATE"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(33, 75, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_DATE" : "INVOICES_PAGE.INVOICE_DATE"))("nbDatepicker", invoiceEstimateDatePicker_r25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(40, 77, "INVOICES_PAGE.DUE_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(42, 79, "INVOICES_PAGE.DUE_DATE"))("nbDatepicker", dueDatePicker_r26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.form.get("currency"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(53, 81, "INVOICES_PAGE.INVOICES_SELECT_TERMS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(55, 83, "INVOICES_PAGE.INVOICES_SELECT_TERMS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(64, 85, ctx.isEstimate ? "INVOICES_PAGE.INVOICE_TYPE.SELECT_ESTIMATE_TYPE" : "INVOICES_PAGE.INVOICE_TYPE.SELECT_INVOICE_TYPE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(66, 87, ctx.isEstimate ? "INVOICES_PAGE.INVOICE_TYPE.ESTIMATE_TYPE" : "INVOICES_PAGE.INVOICE_TYPE.INVOICE_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.invoiceTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isEmployeeHourTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isProjectHourTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isTaskHourTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isProductTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isExpenseTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx.invoiceType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(79, 89, ctx.isEstimate ? "INVOICES_PAGE.INVOICE_TYPE.GENERATE_ESTIMATE_ITEMS" : "INVOICES_PAGE.INVOICE_TYPE.GENERATE_INVOICE_ITEMS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isExpenseTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(85, 91, "INVOICES_PAGE.DISCOUNT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(90, 93, "INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(92, 95, "INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(97, 97, "INVOICES_PAGE.DISCOUNT_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(99, 99, "INVOICES_PAGE.DISCOUNT_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(104, 101, "INVOICES_PAGE.INVOICES_TAXES"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(110, 103, "INVOICES_PAGE.TAX"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(112, 105, "INVOICES_PAGE.TAX"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(117, 107, "INVOICES_PAGE.TAX_2"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(119, 109, "INVOICES_PAGE.TAX_2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(125, 111, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(127, 113, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(133, 115, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(135, 117, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form.get("taxType").value === "PERCENT" && ctx.form.get("tax2Type").value === "PERCENT");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.discountAfterTax);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(141, 119, "INVOICES_PAGE.APPLY_DISCOUNT_AFTER_TAX"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.shouldLoadTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(146, 121, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.disableSaveButton || ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(149, 123, "BUTTONS.SAVE_AS_DRAFT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.disableSaveButton || ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(152, 125, "BUTTONS.SAVE_AND_SEND_CONTACT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.disableSaveButton || ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(155, 127, "BUTTONS.SAVE_AND_SEND_EMAIL"), " ");
        }
      },
      dependencies: [_packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_30__/* .TagsColorInputComponent */ .i, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbTooltipDirective */ .BmQ, _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_31__/* .EmployeeSelectComponent */ .O, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDatepickerComponent */ .k2z, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_32__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_32__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_32__/* .NgLabelTemplateDirective */ .ZZ, ngx_permissions__WEBPACK_IMPORTED_MODULE_33__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_34__/* .CurrencyComponent */ .X, angular2_smart_table__WEBPACK_IMPORTED_MODULE_7__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_35__/* .PaginationV2Component */ .a, _packages_ui_core_shared_src_lib_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_36__/* .ContactSelectComponent */ .O, _angular_common__WEBPACK_IMPORTED_MODULE_37__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_37__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_38__/* .BackNavigationComponent */ .r, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions-title a {\n  background-color: #00d68f !important;\n  transform: scale(0.9);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a {\n  transform: scale(0.6);\n  border-radius: var(--border-radius);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a:nth-child(1) {\n  background-color: #00d68f !important;\n  color: white;\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a:nth-child(2) {\n  background-color: white !important;\n  color: #ff3d71;\n  box-shadow: var(--gauzy-shadow);\n}\n\n.total[_ngcontent-%COMP%] {\n  float: right;\n}\n.total-item[_ngcontent-%COMP%] {\n  border: solid 2px var(--button-filled-info-disabled-border-color);\n  border-radius: 5px;\n  margin: 20px 20px 20px 10px;\n  padding: 5px;\n  font-size: 14px;\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions {\n  width: 5%;\n}\n\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 36px;\n}\n.form[_ngcontent-%COMP%]   .block-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.form[_ngcontent-%COMP%]   .block-wrap[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 48%;\n}\n\n.footer-block-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.footer-block-wrap[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.terms-textarea[_ngcontent-%COMP%] {\n  width: 98%;\n}\n\n.group[_ngcontent-%COMP%] {\n  border-radius: 0.6rem;\n  margin-bottom: 20px;\n  padding: 9px 18px 2px 12px;\n}\n.group[_ngcontent-%COMP%]   .label-group[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n  margin-bottom: 18px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.discountCheckbox[_ngcontent-%COMP%] {\n  margin: 20px -1rem;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\ndiv.button-action[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 6px 8px;\n  border-radius: var(--button-rectangle-border-radius);\n  margin-bottom: 12px;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n.content[_ngcontent-%COMP%]   .row.group[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-3);\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--gauzy-card-2);\n  padding: 12px;\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   div.btn-action[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%] {\n  background-color: rgb(126, 126, 143);\n  color: var(--text-control-color);\n  border-color: var(--button-filled-basic-border-color);\n}\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%]   [nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--button-filled-basic-background-color);\n  border-color: var(--button-filled-basic-border-color);\n  color: var(--button-filled-basic-text-color);\n}\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%]   [nbButton].appearance-filled.status-basic[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--text-basic-color);\n  background-color: rgba(126, 126, 143, 0.1);\n}\n\n[nbButton].gen.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-color: transparent;\n  box-shadow: 0 0 0 nb-theme(button-outline-width) rgba(37, 184, 105, 0.1), inset nb-theme(button-outline-focus-inset-shadow-length) transparent;\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[nbButton].gen.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: transparent;\n}\n\n[nbButton].gen.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 nb-theme(button-outline-width) rgba(37, 184, 105, 0.1), inset nb-theme(button-outline-focus-inset-shadow-length) transparent;\n}\n\n[nbButton].gen.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n\n[nbButton].gen.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[nbButton].appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: nb-theme(button-outline-basic-disabled-background-color);\n  border-color: nb-theme(button-outline-basic-disabled-border-color);\n  color: nb-theme(button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}"]
    });
  }
};
InvoiceAddComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_39__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_39__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .UntypedFormBuilder */ .ze, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_18__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .InvoicesService */ .U, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .OrganizationProjectsService */ .d, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .InvoiceItemService */ .q, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .TasksStoreService */ .h, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .ProductService */ .b, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .ExpensesService */ .D, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .InvoiceEstimateHistoryService */ .f, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslatableService */ .b, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .OrganizationSettingService */ .r])], InvoiceAddComponent);


/***/ }),

/***/ 3218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ InvoiceSendMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7784);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);
/* harmony import */ var _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67592);












function InvoiceSendMutationComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.SEND.CONFIRMATION_INVOICE"));
  }
}
function InvoiceSendMutationComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.SEND.CONFIRMATION_ESTIMATE"));
  }
}
function InvoiceSendMutationComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ga-invoice-pdf", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("invoice", ctx_r0.invoice);
  }
}
function InvoiceSendMutationComponent_span_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.SEND.ALREADY_SENT_INVOICE"));
  }
}
function InvoiceSendMutationComponent_span_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.SEND.ALREADY_SENT_ESTIMATE"));
  }
}
function InvoiceSendMutationComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, InvoiceSendMutationComponent_span_10_span_1_Template, 3, 3, "span", 4)(2, InvoiceSendMutationComponent_span_10_span_2_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r0.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.invoice.toContact.name, ". ");
  }
}
function InvoiceSendMutationComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceSendMutationComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.CANCEL"), " ");
  }
}
function InvoiceSendMutationComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceSendMutationComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.send());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.SEND"), " ");
  }
}
function InvoiceSendMutationComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceSendMutationComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.closeDialog());
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
let InvoiceSendMutationComponent = /*#__PURE__*/(() => {
  class InvoiceSendMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    constructor(dialogRef, invoicesService, translateService, toastrService, invoiceEstimateHistoryService, store) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.invoicesService = invoicesService;
      this.translateService = translateService;
      this.toastrService = toastrService;
      this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
      this.store = store;
      this.alreadySent = false;
    }
    ngOnInit() {
      if (this.invoice.sentTo) {
        this.alreadySent = true;
      }
    }
    closeDialog() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        _this.dialogRef.close();
      })();
    }
    send() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        yield _this2.invoicesService.update(_this2.invoice.id, {
          sentTo: _this2.invoice.organizationContactId,
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceStatusTypesEnum */ .g0.SENT
        });
        _this2.dialogRef.close();
        yield _this2.invoiceEstimateHistoryService.add({
          action: _this2.isEstimate ? _this2.getTranslation('INVOICES_PAGE.ESTIMATE_SENT_TO', {
            name: _this2.invoice.toContact.name
          }) : _this2.getTranslation('INVOICES_PAGE.INVOICE_SENT_TO', {
            name: _this2.invoice.toContact.name
          }),
          invoice: _this2.invoice,
          invoiceId: _this2.invoice.id,
          user: _this2.store.user,
          userId: _this2.store.userId,
          organization: _this2.invoice.fromOrganization,
          organizationId: _this2.invoice.fromOrganization.id
        });
        _this2.toastrService.success(_this2.isEstimate ? 'INVOICES_PAGE.SEND_ESTIMATE' : 'INVOICES_PAGE.SEND_INVOICE');
      })();
    }
    static {
      this.ɵfac = function InvoiceSendMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoiceSendMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceEstimateHistoryService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InvoiceSendMutationComponent,
        selectors: [["ga-invoice-send"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 15,
        vars: 8,
        consts: [[1, "pdf-preview-card", "card-scroll"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [4, "ngIf"], [1, "text-left"], ["outline", "", "status", "basic", "class", "mr-3", "nbButton", "", 3, "click", 4, "ngIf"], ["status", "success", "nbButton", "", 3, "click", 4, "ngIf"], [3, "invoice"], ["outline", "", "status", "basic", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click"]],
        template: function InvoiceSendMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceSendMutationComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(5, InvoiceSendMutationComponent_span_5_Template, 3, 3, "span", 4)(6, InvoiceSendMutationComponent_span_6_Template, 3, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, InvoiceSendMutationComponent_span_9_Template, 2, 1, "span", 4)(10, InvoiceSendMutationComponent_span_10_Template, 4, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(11, "nb-card-footer", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(12, InvoiceSendMutationComponent_button_12_Template, 3, 3, "button", 6)(13, InvoiceSendMutationComponent_button_13_Template, 3, 3, "button", 7)(14, InvoiceSendMutationComponent_button_14_Template, 3, 3, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.isEstimate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isEstimate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.invoice.toContact.name, " ? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.alreadySent);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.alreadySent);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.alreadySent);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.alreadySent);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.alreadySent);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .YP2, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .bT, _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoicePdfComponent */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return InvoiceSendMutationComponent;
})();

/***/ }),

/***/ 5712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ InvoiceItemService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let InvoiceItemService = /*#__PURE__*/(() => {
  class InvoiceItemService {
    constructor(http) {
      this.http = http;
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invoice-item`, {
        params: {
          data
        }
      }));
    }
    add(invoiceItem) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invoice-item`, invoiceItem));
    }
    update(id, invoiceItem) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invoice-item/${id}`, invoiceItem));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invoice-item/${id}`));
    }
    createBulk(invoiceId, invoiceItem) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invoice-item/bulk/${invoiceId}`, invoiceItem));
    }
    static {
      this.ɵfac = function InvoiceItemService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoiceItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: InvoiceItemService,
        factory: InvoiceItemService.ɵfac
      });
    }
  }
  return InvoiceItemService;
})();

/***/ }),

/***/ 11998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ EstimateEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80490);


let EstimateEditComponent = /*#__PURE__*/(() => {
  class EstimateEditComponent {
    static {
      this.ɵfac = function EstimateEditComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EstimateEditComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EstimateEditComponent,
        selectors: [["ga-estimate-edit"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "isEstimate"]],
        template: function EstimateEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ga-invoice-edit", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("isEstimate", true);
          }
        },
        dependencies: [_invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoiceEditComponent */ .v],
        encapsulation: 2
      });
    }
  }
  return EstimateEditComponent;
})();

/***/ }),

/***/ 13344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ defaultIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);


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

/***/ 15420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ InvoiceEmployeesSelectorComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64411);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10936);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);














function InvoiceEmployeesSelectorComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const employee_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", employee_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", employee_r1.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", employee_r1.fullName, " ");
  }
}
let InvoiceEmployeesSelectorComponent = class InvoiceEmployeesSelectorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultEditor */ .ny {
  constructor(employeeService, store, dateRangePickerBuilderService) {
    super();
    this.employeeService = employeeService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.employees = [];
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._getWorkingEmployees()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Get working employees of the selected month
   */
  _getWorkingEmployees() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
      if (!_this.organization) {
        return;
      }
      const {
        tenantId
      } = _this.store.user;
      const {
        id: organizationId
      } = _this.organization;
      const {
        selectedDateRange
      } = _this.dateRangePickerBuilderService;
      const {
        items = []
      } = yield _this.employeeService.getWorking(organizationId, tenantId, selectedDateRange, true);
      _this.employees = items;
      _this.preSelectedEmployee();
    })();
  }
  /**
   * This function is used to pre-select an employee from a list of employees.
   * It retrieves the raw value of the cell (presumably containing employee data),
   * and then attempts to find a matching employee from the list of employees.
   */
  preSelectedEmployee() {
    // Get the raw value of the cell, which is assumed to be an employee object
    const employee = this.cell.getRawValue();
    // Check if the list of employees is not empty
    if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .isNotEmpty */ .hj)(this.employees)) {
      // Find the employee in the list whose ID matches the ID of the employee from the cell
      this.employee = this.employees.find(item => item.id === employee.id);
    }
  }
  /**
   * This function is used to select an employee and set the value of the associated cell.
   * @param employee The employee to be selected and set as the cell value.
   */
  selectEmployee(employee) {
    // Set the value of the cell to the specified employee
    this.cell.setValue(employee);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceEmployeesSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoiceEmployeesSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .DateRangePickerBuilderService */ .i7));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoiceEmployeesSelectorComponent,
      selectors: [["ng-component"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 3,
      vars: 5,
      consts: [["fullWidth", "", 3, "ngModelChange", "selectedChange", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["alt", "Smiley face", "height", "40", "width", "40", 2, "margin-right", "10px", 3, "src"]],
      template: function InvoiceEmployeesSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function InvoiceEmployeesSelectorComponent_Template_nb_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.employee, $event) || (ctx.employee = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InvoiceEmployeesSelectorComponent_Template_nb_select_selectedChange_0_listener($event) {
            return ctx.selectEmployee($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, InvoiceEmployeesSelectorComponent_nb_option_2_Template, 3, 3, "nb-option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, "INVOICES_PAGE.SELECT_EMPLOYEE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.employee);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.employees);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbOptionComponent */ .ZJ2, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_12__/* .NgModel */ .vS, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_13__/* .ImgDirective */ .z, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9],
      encapsulation: 2
    });
  }
};
InvoiceEmployeesSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .DateRangePickerBuilderService */ .i7])], InvoiceEmployeesSelectorComponent);


/***/ }),

/***/ 17376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ InvoicePaymentReceiptMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10280);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);









const _c0 = a0 => ({
  name: a0
});
const _c1 = (a0, a1, a2) => ({
  invoiceNumber: a0,
  amount: a1,
  currency: a2
});
let InvoicePaymentReceiptMutationComponent = /*#__PURE__*/(() => {
  class InvoicePaymentReceiptMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(translateService, paymentService, dialogRef) {
      super(translateService);
      this.translateService = translateService;
      this.paymentService = paymentService;
      this.dialogRef = dialogRef;
    }
    send() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
        yield _this.paymentService.sendReceipt(_this.payment, _this.invoice);
      })();
    }
    cancel() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function InvoicePaymentReceiptMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoicePaymentReceiptMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .PaymentService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InvoicePaymentReceiptMutationComponent,
        selectors: [["ga-payment-receipt-mutation"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 25,
        vars: 32,
        consts: [[1, "main"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "py-5", "px-5"], [1, "shadow", "py-5", "px-5"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click"]],
        template: function InvoicePaymentReceiptMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicePaymentReceiptMutationComponent_Template_i_click_3_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 4)(8, "div", 5)(9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(18, "nb-card-footer", 6)(19, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicePaymentReceiptMutationComponent_Template_button_click_19_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(22, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicePaymentReceiptMutationComponent_Template_button_click_22_listener() {
              return ctx.send();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(6, 6, "INVOICES_PAGE.PAYMENTS.SEND_RECEIPT", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(22, _c0, ctx.invoice.toContact.name)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(11, 9, "INVOICES_PAGE.PAYMENTS.CONTACT_GREETING", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(24, _c0, ctx.invoice.toContact.name)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(14, 12, "INVOICES_PAGE.PAYMENTS.RECEIPT_FOR", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction3"] */ .sMw(26, _c1, ctx.invoice.invoiceNumber, ctx.payment.amount, ctx.payment.currency)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(17, 15, "INVOICES_PAGE.PAYMENTS.BEST_REGARDS", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(30, _c0, ctx.invoice.fromOrganization.name)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(21, 18, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(24, 20, "BUTTONS.SEND"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .YP2, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 605px;\n}\n\n.main[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return InvoicePaymentReceiptMutationComponent;
})();

/***/ }),

/***/ 20556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ InvoiceProjectsSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64411);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52345);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);











function InvoiceProjectsSelectorComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", project_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", project_r1.name, " ");
  }
}
let InvoiceProjectsSelectorComponent = class InvoiceProjectsSelectorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultEditor */ .ny {
  constructor(store, organizationProjectsService) {
    super();
    this.store = store;
    this.organizationProjectsService = organizationProjectsService;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._loadProjects()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _loadProjects() {
    const tenantId = this.store.user.tenantId;
    const {
      id: organizationId
    } = this.organization;
    this.organizationProjectsService.getAll([], {
      organizationId,
      tenantId
    }).then(({
      items
    }) => {
      this.projects = items;
      //
      const project = this.cell.getValue();
      //
      this.project = this.projects.find(p => p.id === project['id']);
    });
  }
  /**
   *
   * @param $event
   */
  selectProject($event) {
    this.cell.setValue($event);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceProjectsSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoiceProjectsSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationProjectsService */ .d));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoiceProjectsSelectorComponent,
      selectors: [["ng-component"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 3,
      vars: 5,
      consts: [["fullWidth", "", 3, "ngModelChange", "selectedChange", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function InvoiceProjectsSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function InvoiceProjectsSelectorComponent_Template_nb_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.project, $event) || (ctx.project = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InvoiceProjectsSelectorComponent_Template_nb_select_selectedChange_0_listener($event) {
            return ctx.selectProject($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, InvoiceProjectsSelectorComponent_nb_option_2_Template, 2, 2, "nb-option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, "INVOICES_PAGE.SELECT_PROJECT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.project);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.projects);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbOptionComponent */ .ZJ2, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgModel */ .vS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
      encapsulation: 2
    });
  }
};
InvoiceProjectsSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationProjectsService */ .d])], InvoiceProjectsSelectorComponent);


/***/ }),

/***/ 29421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85783);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);



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

/***/ 31652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ InvoiceEmailMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);
/* harmony import */ var _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67592);














function InvoiceEmailMutationComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.EMAIL.EMAIL_INVOICE"));
  }
}
function InvoiceEmailMutationComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.EMAIL.EMAIL_ESTIMATE"));
  }
}
function InvoiceEmailMutationComponent_form_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "form", 11)(1, "div", 12)(2, "div", 13)(3, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(6, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 3, "FORM.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 5, "FORM.EMAIL"));
  }
}
let InvoiceEmailMutationComponent = /*#__PURE__*/(() => {
  class InvoiceEmailMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    constructor(translateService, dialogRef, fb, toastrService, invoiceService, store, invoiceEstimateHistoryService) {
      super(translateService);
      this.translateService = translateService;
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.toastrService = toastrService;
      this.invoiceService = invoiceService;
      this.store = store;
      this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    }
    ngOnInit() {
      this.initializeForm();
    }
    initializeForm() {
      this.form = this.fb.group({
        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.required]
      });
    }
    sendEmail() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.invoice.fromOrganization;
        const {
          email
        } = _this.form.value;
        yield _this.invoiceService.sendEmail(email, _this.invoice.invoiceNumber, _this.invoice.id ? _this.invoice.id : _this.createdInvoice.id, _this.isEstimate, organizationId, tenantId);
        if (_this.invoice.id) {
          yield _this.invoiceService.updateAction(_this.invoice.id, {
            status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .InvoiceStatusTypesEnum */ .g0.SENT
          });
        }
        yield _this.invoiceEstimateSendHistory();
        _this.toastrService.success('INVOICES_PAGE.EMAIL.EMAIL_SENT');
        _this.dialogRef.close('ok');
      })();
    }
    invoiceEstimateSendHistory() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this2.store.user;
        const {
          id: organizationId
        } = _this2.store.selectedOrganization;
        yield _this2.invoiceEstimateHistoryService.add({
          action: _this2.isEstimate ? _this2.getTranslation('INVOICES_PAGE.ESTIMATE_SENT_TO', {
            name: _this2.form.value.email
          }) : _this2.getTranslation('INVOICES_PAGE.INVOICE_SENT_TO', {
            name: _this2.form.value.email
          }),
          invoice: _this2.createdInvoice ? _this2.createdInvoice : _this2.invoice,
          invoiceId: _this2.createdInvoice ? _this2.createdInvoice.id : _this2.invoice.id,
          user: _this2.store.user,
          userId: _this2.store.userId,
          organization: _this2.invoice.fromOrganization,
          organizationId,
          tenantId
        });
      })();
    }
    cancel() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function InvoiceEmailMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoiceEmailMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .InvoiceEstimateHistoryService */ .f));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InvoiceEmailMutationComponent,
        selectors: [["ga-invoice-email"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 17,
        vars: 11,
        consts: [[1, "pdf-preview-card"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [4, "ngIf"], [1, "invoice-email-body"], [3, "invoice"], [3, "formGroup", 4, "ngIf"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"], [3, "formGroup"], [1, "row"], [1, "form-group", "col-12"], ["for", "email", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "email", "id", "email", 3, "placeholder"]],
        template: function InvoiceEmailMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceEmailMutationComponent_Template_i_click_3_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(5, InvoiceEmailMutationComponent_span_5_Template, 3, 3, "span", 4)(6, InvoiceEmailMutationComponent_span_6_Template, 3, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(8, "ga-invoice-pdf", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, InvoiceEmailMutationComponent_form_9_Template, 8, 7, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-footer", 8)(11, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceEmailMutationComponent_Template_button_click_11_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(14, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceEmailMutationComponent_Template_button_click_14_listener() {
              return ctx.sendEmail();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.isEstimate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isEstimate);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("invoice", ctx.invoice);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(13, 7, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(16, 9, "BUTTONS.SEND"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .JD, _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoicePdfComponent */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return InvoiceEmailMutationComponent;
})();

/***/ }),

/***/ 32404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoicesModule: () => (/* binding */ InvoicesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(55567);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94817);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5712);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38736);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(941);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59520);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10280);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66496);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7784);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35388);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19223);
/* harmony import */ var _invoices_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65101);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42128);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57832);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(61444);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6269);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(82202);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(43629);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(11336);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(37383);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(57705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);













let InvoicesModule = /*#__PURE__*/(() => {
  class InvoicesModule {
    static {
      this.ɵfac = function InvoicesModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoicesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: InvoicesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .InvoicesService */ .U, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceItemService */ .q, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .TasksService */ .w, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationContactService */ .$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .OrganizationProjectsService */ .d, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ProductService */ .b, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .PaymentService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TasksStoreService */ .h, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .InvoiceEstimateHistoryService */ .f, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatableService */ .b, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .CurrencyPipe */ .oe, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .CurrencyPositionPipe */ .n],
        imports: [_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .TableComponentsModule */ .p, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .TagsColorInputModule */ .x, _invoices_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .InvoicesRoutingModule */ .V, ngx_clipboard__WEBPACK_IMPORTED_MODULE_18__/* .ClipboardModule */ .FQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonModule */ .P5N, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .CardGridModule */ .n, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbRouteTabsetModule */ .x$5, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbRadioModule */ .iyp, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .EmployeeMultiSelectModule */ .I, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .UserFormsModule */ .D, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDatepickerModule */ .TgK, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__/* .NgSelectModule */ .MQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbContextMenuModule */ .DkL, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbMenuModule */ .anj, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbPopoverModule */ .Ofb, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbListModule */ .PD_, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateModule */ .h.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_25__/* .NgxPermissionsModule */ .Ov.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .CurrencyModule */ .C, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_28__/* .ContactSelectModule */ .T, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_29__/* .ProjectSelectModule */ .A, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__/* .SharedModule */ .G, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbAccordionModule */ .LtP, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_31__/* .InvoiceViewInnerModule */ .H]
      });
    }
  }
  return InvoicesModule;
})();

/***/ }),

/***/ 33691:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ WINDOW)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .nKC('WindowToken', typeof window !== 'undefined' && window.document ? {
  providedIn: 'root',
  factory: () => window
} : {
  providedIn: 'root',
  factory: () => undefined
});

/*
 * Public API Surface of ngx-window-token
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-window-token.mjs.map

/***/ }),

/***/ 42883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ throwIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25413);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);



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

/***/ 43329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ InvoiceTasksSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64411);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66496);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);











function InvoiceTasksSelectorComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", task_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", task_r1.title, " ");
  }
}
let InvoiceTasksSelectorComponent = class InvoiceTasksSelectorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultEditor */ .ny {
  constructor(tasksStore, store) {
    super();
    this.tasksStore = tasksStore;
    this.store = store;
    this.tasks = [];
    this.tasks$ = this.tasksStore.tasks$;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._loadTasks()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    this.tasks$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(tasks => this.tasks = tasks),
    // tap(() => this.task = this.tasks.find((t) => t.id === this.cell.newValue.id)),
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   *
   */
  _loadTasks() {
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.tasksStore.fetchTasks(tenantId, organizationId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   *
   * @param task
   */
  selectTask(task) {
    // this.cell.newValue = task;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceTasksSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoiceTasksSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .TasksStoreService */ .h), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoiceTasksSelectorComponent,
      selectors: [["ng-component"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 3,
      vars: 5,
      consts: [["fullWidth", "", 3, "ngModelChange", "selectedChange", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function InvoiceTasksSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function InvoiceTasksSelectorComponent_Template_nb_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.task, $event) || (ctx.task = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InvoiceTasksSelectorComponent_Template_nb_select_selectedChange_0_listener($event) {
            return ctx.selectTask($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, InvoiceTasksSelectorComponent_nb_option_2_Template, 2, 2, "nb-option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, "INVOICES_PAGE.SELECT_TASK"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.task);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.tasks);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbOptionComponent */ .ZJ2, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgModel */ .vS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
      encapsulation: 2
    });
  }
};
InvoiceTasksSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .TasksStoreService */ .h, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il])], InvoiceTasksSelectorComponent);


/***/ }),

/***/ 43710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ EstimateViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58444);


let EstimateViewComponent = /*#__PURE__*/(() => {
  class EstimateViewComponent {
    static {
      this.ɵfac = function EstimateViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EstimateViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EstimateViewComponent,
        selectors: [["ga-estimate-view"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "isEstimate"]],
        template: function EstimateViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ga-invoice-view", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("isEstimate", true);
          }
        },
        dependencies: [_invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoiceViewComponent */ .W],
        encapsulation: 2
      });
    }
  }
  return EstimateViewComponent;
})();

/***/ }),

/***/ 46880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ FileUploaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29087);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let FileUploaderModule = /*#__PURE__*/(() => {
  class FileUploaderModule {
    static {
      this.ɵfac = function FileUploaderModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FileUploaderModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: FileUploaderModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .gYs, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__/* .DirectivesModule */ .h, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__/* .FileUploadModule */ .eB]
      });
    }
  }
  return FileUploaderModule;
})();

/***/ }),

/***/ 47353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ InvoiceApplyTaxDiscountComponent)
/* harmony export */ });
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);



let InvoiceApplyTaxDiscountComponent = /*#__PURE__*/(() => {
  class InvoiceApplyTaxDiscountComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultEditor */ .ny {
    ngOnInit() {
      this.cell.setValue(this.cell.getValue());
    }
    /**
     *
     * @param $event
     */
    toggleSeparateTaxDiscount($event) {
      this.cell.setValue($event);
    }
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵInvoiceApplyTaxDiscountComponent_BaseFactory;
        return function InvoiceApplyTaxDiscountComponent_Factory(__ngFactoryType__) {
          return (ɵInvoiceApplyTaxDiscountComponent_BaseFactory || (ɵInvoiceApplyTaxDiscountComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetInheritedFactory"] */ .xGo(InvoiceApplyTaxDiscountComponent)))(__ngFactoryType__ || InvoiceApplyTaxDiscountComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InvoiceApplyTaxDiscountComponent,
        selectors: [["ng-component"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 1,
        vars: 0,
        consts: [["status", "primary", 1, "d-block", "apply-tax", 3, "checkedChange"]],
        template: function InvoiceApplyTaxDiscountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-toggle", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("checkedChange", function InvoiceApplyTaxDiscountComponent_Template_nb_toggle_checkedChange_0_listener($event) {
              return ctx.toggleSeparateTaxDiscount($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbToggleComponent */ .YF2],
        styles: [".apply-tax[_ngcontent-%COMP%] {text-align: center}"]
      });
    }
  }
  return InvoiceApplyTaxDiscountComponent;
})();

/***/ }),

/***/ 57832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ TableComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87466);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10012);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78818);
/* harmony import */ var _tasks_task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);










let TableComponentsModule = /*#__PURE__*/(() => {
  class TableComponentsModule {
    static {
      this.ɵfac = function TableComponentsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TableComponentsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TableComponentsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__/* .DirectivesModule */ .h, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__/* .PipesModule */ .Y, _components_components_module__WEBPACK_IMPORTED_MODULE_7__/* .ComponentsModule */ .h, _tasks_task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_8__/* .TaskBadgeViewComponentModule */ .z]
      });
    }
  }
  return TableComponentsModule;
})();

/***/ }),

/***/ 58444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ InvoiceViewComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64411);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23423);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87081);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72781);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43277);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_invoice_components_inner_component_invoice_view_inner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(62694);




















function InvoiceViewComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ga-invoice-view-inner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const invoice_r1 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    const buttons_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("invoice", invoice_r1)("isEstimate", ctx_r1.isEstimate)("buttonsOutlet", buttons_r3);
  }
}
function InvoiceViewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceViewComponent_ng_template_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.print());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceViewComponent_ng_template_9_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceViewComponent_ng_template_9_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.edit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceViewComponent_ng_template_9_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(15, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.PRINT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 6, "BUTTONS.DOWNLOAD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(12, 8, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(14, 10, "BUTTONS.DELETE"));
  }
}
let InvoiceViewComponent = class InvoiceViewComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
  constructor(translateService, _activatedRoute, _invoicesService, _toastrService, _store, _router, _dialogService, _errorHandlingService) {
    super(translateService);
    this.translateService = translateService;
    this._activatedRoute = _activatedRoute;
    this._invoicesService = _invoicesService;
    this._toastrService = _toastrService;
    this._store = _store;
    this._router = _router;
    this._dialogService = _dialogService;
    this._errorHandlingService = _errorHandlingService;
  }
  ngOnInit() {
    const relations = ['invoiceItems', 'invoiceItems.employee', 'invoiceItems.employee.user', 'invoiceItems.project', 'invoiceItems.product', 'invoiceItems.invoice', 'invoiceItems.expense', 'invoiceItems.task', 'fromOrganization', 'toContact'];
    this.invoice$ = this._activatedRoute.paramMap.pipe(
    // Filter for the presence of id in route params
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(params => !!params.get('id')),
    // Map the id to an observable
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .map */ .T)(params => params.get('id')),
    // Switch to route data stream once id and token are confirmed
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .switchMap */ .n)(id => this._invoicesService.getById(id, relations, {
      tenantId: this._store.user.tenantId
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .map */ .T)(invoice => {
      this.invoice = invoice;
      return invoice;
    }),
    // Catch errors here
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .W)(error => {
      console.log('Error while getting public invoice', error);
      this._errorHandlingService.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this));
  }
  /**
   * Downloads the invoice or estimate PDF.
   */
  download() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      try {
        const {
          id: invoiceId
        } = _this.invoice;
        // Download the invoice PDF
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .firstValueFrom */ ._)(_this._invoicesService.downloadInvoicePdf(invoiceId));
        _this.downloadFile(data);
        // Show a success toastr message
        const translationKey = _this.isEstimate ? 'INVOICES_PAGE.DOWNLOAD.ESTIMATE_DOWNLOAD' : 'INVOICES_PAGE.DOWNLOAD.INVOICE_DOWNLOAD';
        _this._toastrService.success(translationKey);
      } catch (error) {
        console.log('Error downloading invoice PDF:', error);
        _this._toastrService.error('INVOICES_PAGE.DOWNLOAD.ERROR');
      }
    })();
  }
  /**
   * Downloads the invoice or estimate file.
   *
   * @param data The file data to be downloaded.
   */
  downloadFile(data) {
    // Get the file type based on whether the invoice is an estimate or not
    const fileType = this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE') : this.getTranslation('INVOICES_PAGE.INVOICE');
    // Construct the filename based on the file type and invoice number
    const filename = `${fileType}-${this.invoice.invoiceNumber}.pdf`;
    // Download the file using the FileSaver library
    (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(data, filename);
  }
  /**
   * Edits the invoice/estimate
   */
  edit() {
    // Define the route for the edit page
    const route = this.isEstimate ? `/pages/accounting/invoices/estimates/edit` : `/pages/accounting/invoices/edit`;
    // Navigate to the edit page with the invoice ID as a parameter
    const {
      id: invoiceId
    } = this.invoice;
    // Navigate to the edit page with the invoice ID as a parameter
    this._router.navigate([route, invoiceId]);
  }
  /**
   * Deletes the invoice/estimate
   */
  delete() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      // Define the record type for the delete confirmation dialog
      const recordType = _this2.isEstimate ? 'INVOICES_PAGE.ESTIMATE' : 'INVOICES_PAGE.INVOICE';
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .firstValueFrom */ ._)(_this2._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .DeleteConfirmationComponent */ .u, {
        context: {
          isRecord: false,
          recordType: _this2.getTranslation(recordType)
        }
      }).onClose);
      if (result) {
        try {
          // Delete the invoice
          yield _this2._invoicesService.delete(_this2.invoice.id);
          const successMessage = _this2.isEstimate ? 'INVOICES_PAGE.INVOICES_DELETE_ESTIMATE' : 'INVOICES_PAGE.INVOICES_DELETE_INVOICE';
          _this2._toastrService.success(successMessage);
          const navigatePath = _this2.isEstimate ? `/pages/accounting/invoices/estimates` : `/pages/accounting/invoices`;
          _this2._router.navigate([navigatePath]);
        } catch (error) {
          console.error('Error deleting invoice:', error);
          _this2._toastrService.danger('Error occurred while deleting the invoice.');
        }
      }
    })();
  }
  /**
   * Prints the invoice/estimate
   */
  print() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      try {
        if (!_this3.invoice) {
          return;
        }
        const {
          id: invoiceId
        } = _this3.invoice;
        // Download the invoice PDF
        const blob = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .firstValueFrom */ ._)(_this3._invoicesService.downloadInvoicePdf(invoiceId));
        const fileURL = URL.createObjectURL(blob);
        // Create an iframe to display the PDF
        const iframe = document.createElement('iframe');
        iframe.src = fileURL;
        // Append the iframe to the document body
        document.body.appendChild(iframe);
        // Print the PDF when the iframe is loaded
        iframe.onload = () => iframe.contentWindow.print();
      } catch (error) {
        console.error('Failed to print the invoice:', error);
      }
    })();
  }
  static {
    this.ɵfac = function InvoiceViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoiceViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoiceViewComponent,
      selectors: [["ga-invoice-view"]],
      inputs: {
        isEstimate: "isEstimate"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 11,
      vars: 6,
      consts: [["buttons", ""], [1, "main"], [1, "header"], [1, "title"], [4, "ngIf"], [3, "invoice", "isEstimate", "buttonsOutlet"], [1, "button-container"], ["nbButton", "", "type", "button", "status", "basic", "size", "small", 1, "action", "secondary", 3, "click"], ["icon", "printer-outline", "pack", "eva"], ["nbButton", "", "type", "button", "status", "basic", "size", "small", 1, "action", "primary", 3, "click"], ["icon", "download-outline"], ["icon", "edit-outline"], ["nbButton", "", "type", "button", "status", "basic", "size", "small", 1, "action", 3, "click", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function InvoiceViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(7, InvoiceViewComponent_ng_container_7_Template, 2, 3, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, InvoiceViewComponent_ng_template_9_Template, 16, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 2, ctx.isEstimate ? "INVOICES_PAGE.VIEW_ESTIMATE" : "INVOICES_PAGE.VIEW_INVOICE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 4, ctx.invoice$));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_20__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_invoice_components_inner_component_invoice_view_inner_component__WEBPACK_IMPORTED_MODULE_21__/* .InvoiceViewInnerComponent */ .m, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .AsyncPipe */ .Jj],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.3fr 0.3fr;\n}\n.grid-item[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.item[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n\n\n\n\n[_nghost-%COMP%]    > nb-card[_ngcontent-%COMP%] {\n  min-height: 47.5rem;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 6px 8px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - 18rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}"]
    });
  }
};
InvoiceViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .InvoicesService */ .U, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .Ix, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .X])], InvoiceViewComponent);


/***/ }),

/***/ 58712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ InvoicesReceivedComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(64411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(45715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(9620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57733);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72781);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23423);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63570);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15130);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33829);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47825);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70793);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24059);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(55129);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(91045);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(87791);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(90475);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64612);
/* harmony import */ var _invoice_download_invoice_download_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(49517);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(3456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(2538);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(67063);





























function InvoicesReceivedComponent_ng_template_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function InvoicesReceivedComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 11)(1, "angular2-smart-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function InvoicesReceivedComponent_ng_template_11_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectInvoice($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(3, InvoicesReceivedComponent_ng_template_11_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function InvoicesReceivedComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function InvoicesReceivedComponent_ng_template_12_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectInvoice($event));
    })("scroll", function InvoicesReceivedComponent_ng_template_12_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.invoices);
  }
}
function InvoicesReceivedComponent_ng_template_14_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesReceivedComponent_ng_template_14_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.edit(selectedItem_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.EDIT"), " ");
  }
}
function InvoicesReceivedComponent_ng_template_14_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesReceivedComponent_ng_template_14_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.download(selectedItem_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.DOWNLOAD"), " ");
  }
}
function InvoicesReceivedComponent_ng_template_14_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesReceivedComponent_ng_template_14_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.payments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r5 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.PAYMENTS"), " ");
  }
}
function InvoicesReceivedComponent_ng_template_14_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesReceivedComponent_ng_template_14_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.accept(selectedItem_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r5 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "INVOICES_PAGE.ESTIMATES.ACCEPT"), " ");
  }
}
function InvoicesReceivedComponent_ng_template_14_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesReceivedComponent_ng_template_14_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.reject(selectedItem_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r5 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "INVOICES_PAGE.ESTIMATES.REJECT"), " ");
  }
}
function InvoicesReceivedComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesReceivedComponent_ng_template_14_Template_button_click_1_listener() {
      const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r4).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r1.view(selectedItem_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(5, InvoicesReceivedComponent_ng_template_14_button_5_Template, 4, 4, "button", 20)(6, InvoicesReceivedComponent_ng_template_14_button_6_Template, 4, 4, "button", 20)(7, InvoicesReceivedComponent_ng_template_14_button_7_Template, 4, 4, "button", 21)(8, InvoicesReceivedComponent_ng_template_14_button_8_Template, 4, 4, "button", 22)(9, InvoicesReceivedComponent_ng_template_14_button_9_Template, 4, 4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r5 = ctx.selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r5 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(4, 7, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.isEstimate);
  }
}
function InvoicesReceivedComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("icon", ctx_r1.isEstimate ? "plus-outline" : "credit-card-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, ctx_r1.isEstimate ? "BUTTONS.ADD" : "BUTTONS.PAY"), " ");
  }
}
let InvoicesReceivedComponent = class InvoicesReceivedComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .PaginationFilterBaseComponent */ .t {
  /**
   * Gets the current estimate status.
   * @returns The current estimate status.
   */
  get isEstimate() {
    return this._isEstimate;
  }
  /**
   * Sets the estimate status.
   * @param val - The new estimate status value.
   */
  set isEstimate(val) {
    this._isEstimate = val;
  }
  constructor(store, dateRangePickerBuilderService, invoicesService, translateService, router, _errorHandlingService, toastrService, httpClient, dialogService) {
    super(translateService);
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.invoicesService = invoicesService;
    this.translateService = translateService;
    this.router = router;
    this._errorHandlingService = _errorHandlingService;
    this.toastrService = toastrService;
    this.httpClient = httpClient;
    this.dialogService = dialogService;
    this.loading = false;
    this.disableButton = true;
    this.invoices = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.invoices$ = this.subject$;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE;
    this.columns = [];
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
    /**
     * Represents a component property for handling the estimate status.
     */
    this._isEstimate = false;
    /**
     * Maps invoice statuses to badge classes, texts, and original values.
     *
     * @param value - The invoice status value.
     * @returns An object containing originalValue, text, and class properties.
     */
    this.statusMapper = value => {
      let badgeClass;
      if (value) {
        const lowercaseValue = value.toLowerCase();
        if (['sent', 'viewed', 'accepted', 'active', 'fully paid'].includes(lowercaseValue)) {
          badgeClass = 'success';
        } else if (['void', 'draft', 'partially paid'].includes(lowercaseValue)) {
          badgeClass = 'warning';
        } else {
          badgeClass = 'danger';
        }
      }
      return {
        originalValue: value,
        text: this.getTranslation(`INVOICES_PAGE.STATUSES.${value.toUpperCase()}`),
        class: badgeClass
      };
    };
    this.setView();
  }
  ngOnInit() {
    this.columns = this.getColumns();
    this._loadSettingsSmartTable();
    this._applyTranslationOnSmartTable();
  }
  ngAfterViewInit() {
    this.invoices$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.getInvoices()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeDateRange$ = this.dateRangePickerBuilderService.selectedDateRange$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .combineLatest */ .z)([storeOrganization$, storeDateRange$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(([organization, dateRange]) => !!organization && !!dateRange), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(([organization, dateRange]) => {
      this.organization = organization;
      this.selectedDateRange = dateRange;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.invoices = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Sets up the view component for the current state of the invoices.
   */
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_12__/* .ComponentEnum */ .L.INVOICE_RECEIVED;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.invoices = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Sets up the smart table source for fetching invoices based on the component's configuration.
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    this.loading = true;
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    const {
      startDate,
      endDate
    } = (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .getAdjustDateRangeFutureAllowed */ .Yi)(this.selectedDateRange);
    this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ServerDataSource */ .N(this.httpClient, {
      endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__/* .API_PREFIX */ .m4}/invoices/pagination`,
      relations: ['payments', 'tags', 'toContact'],
      join: {
        alias: 'invoice',
        leftJoin: {
          tags: 'invoice.tags',
          toContact: 'invoice.toContact'
        },
        ...(this.filters.join ? this.filters.join : {})
      },
      where: {
        sentTo: organizationId,
        tenantId,
        isEstimate: this.isEstimate,
        invoiceDate: {
          startDate: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .toUTC */ .q5)(startDate).format('YYYY-MM-DD HH:mm:ss'),
          endDate: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .toUTC */ .q5)(endDate).format('YYYY-MM-DD HH:mm:ss')
        },
        ...(this.filters.where ? this.filters.where : {})
      },
      resultMap: invoice => ({
        ...invoice,
        status: this.statusMapper(invoice.status)
      }),
      finalize: () => {
        if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          this.invoices.push(...this.smartTableSource.getData());
        }
        this.setPagination({
          ...this.getPagination(),
          totalItems: this.smartTableSource.count()
        });
        this.loading = false;
      }
    });
  }
  /**
   * Asynchronously fetches invoices based on the component's configuration.
   */
  getInvoices() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(function* () {
      if (!_this.organization) {
        return;
      }
      try {
        _this.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this.getPagination();
        _this.smartTableSource.setPaging(activePage, itemsPerPage, false);
        if (_this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          // Initiate GRID view pagination
          yield _this.smartTableSource.getElements();
        }
      } catch (error) {
        _this._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Navigate to the details view of the selected invoice or estimate.
   *
   * @param selectedItem - The selected invoice or estimate to view.
   */
  view(selectedItem) {
    if (selectedItem) {
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
      const {
        id
      } = this.selectedInvoice;
      const routePath = this.isEstimate ? '/pages/accounting/invoices/estimates/view' : '/pages/accounting/invoices/view';
      this.router.navigate([routePath, id]);
    }
  }
  /**
   * Accepts the selected invoice or estimate.
   *
   * @param selectedItem - The selected invoice or estimate to accept.
   */
  accept(selectedItem) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(function* () {
      try {
        if (selectedItem) {
          _this2.selectInvoice({
            isSelected: true,
            data: selectedItem
          });
        }
        const {
          id: invoiceId
        } = _this2.selectedInvoice;
        yield _this2.invoicesService.updateEstimate(invoiceId, {
          isAccepted: true
        });
        // Refresh and notify observers
        _this2._refresh$.next(true);
        _this2.invoices$.next(true);
        _this2.toastrService.success('INVOICES_PAGE.INVOICE_ACCEPTED');
      } catch (error) {
        _this2._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Rejects the selected invoice or estimate.
   *
   * @param selectedItem - The selected invoice or estimate to reject.
   */
  reject(selectedItem) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(function* () {
      try {
        if (selectedItem) {
          _this3.selectInvoice({
            isSelected: true,
            data: selectedItem
          });
        }
        const {
          id: invoiceId
        } = _this3.selectedInvoice;
        yield _this3.invoicesService.updateEstimate(invoiceId, {
          isAccepted: false
        });
        // Refresh and notify observers
        _this3._refresh$.next(true);
        _this3.invoices$.next(true);
        _this3.toastrService.success('INVOICES_PAGE.INVOICE_REJECTED');
      } catch (error) {
        _this3._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Loads and configures settings for the smart table based on the component's state.
   */
  _loadSettingsSmartTable() {
    //
    const pagination = this.getPagination();
    //
    this.settingsSmartTable = {
      actions: false,
      editable: true,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      mode: 'external',
      selectedRowIndex: -1,
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.RECEIVE_ESTIMATE'),
      columns: {
        invoiceNumber: {
          title: this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE_NUMBER') : this.getTranslation('INVOICES_PAGE.INVOICE_NUMBER'),
          type: this.isEstimate ? 'string' : 'custom',
          renderComponent: this.isEstimate ? null : _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .NotesWithTagsComponent */ .i,
          sortDirection: 'asc',
          width: '20%',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .InputFilterComponent */ .U
          },
          filterFunction: invoiceNumber => {
            this.setFilter({
              field: 'invoiceNumber',
              search: invoiceNumber
            });
          },
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        invoiceDate: {
          title: this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE_DATE') : this.getTranslation('INVOICES_PAGE.INVOICE_DATE'),
          type: 'custom',
          isFilterable: false,
          width: '10%',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        dueDate: {
          title: this.getTranslation('INVOICES_PAGE.DUE_DATE'),
          type: 'custom',
          isFilterable: false,
          width: '10%',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        totalValue: {
          title: this.getTranslation('INVOICES_PAGE.TOTAL_VALUE'),
          type: 'custom',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .InvoiceTotalValueComponent */ .s,
          width: '12%',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .RangeFilterComponent */ .x
          },
          filterFunction: range => {
            const {
              min,
              max
            } = range;
            // Validate range values
            if (min !== undefined && min < 0 || max !== undefined && max < 0) {
              return;
            }
            if (min !== undefined && max !== undefined && min > max) {
              return;
            }
            this.setFilter({
              field: 'totalValue',
              search: {
                min,
                max
              }
            });
          },
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        }
      }
    };
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_22__/* .InvoiceColumnsEnum */ ._d.CONTACT)) {
      this.settingsSmartTable['columns']['toContact'] = {
        title: this.getTranslation('INVOICES_PAGE.SENDER'),
        type: 'custom',
        isFilterable: false,
        isSortable: false,
        renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .ContactLinksComponent */ .L,
        componentInitFunction: (instance, cell) => {
          instance.rowData = cell.getRow().getData();
          instance.value = cell.getRawValue();
        }
      };
    }
    if (!this.isEstimate) {
      this.settingsSmartTable['columns']['paid'] = {
        title: this.getTranslation('INVOICES_PAGE.PAID_STATUS'),
        type: 'custom',
        width: '15%',
        isFilterable: false,
        renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_0__/* .InvoicePaidComponent */ .Z_,
        componentInitFunction: (instance, cell) => {
          instance.rowData = cell.getRow().getData();
        }
      };
    }
    if (this.isEstimate) {
      this.settingsSmartTable['columns']['tags'] = {
        title: this.getTranslation('SM_TABLE.TAGS'),
        type: 'custom',
        class: 'align-row',
        width: '10%',
        renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .TagsOnlyComponent */ .F,
        filter: {
          type: 'custom',
          component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__/* .TagsColorFilterComponent */ .Y
        },
        filterFunction: tags => {
          const tagIds = [];
          for (const tag of tags) {
            tagIds.push(tag.id);
          }
          this.setFilter({
            field: 'tags',
            search: tagIds
          });
        },
        isSortable: false,
        componentInitFunction: (instance, cell) => {
          instance.rowData = cell.getRow().getData();
          instance.value = cell.getValue();
        }
      };
    }
    if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_22__/* .InvoiceColumnsEnum */ ._d.STATUS)) {
      this.settingsSmartTable['columns']['status'] = {
        title: this.getTranslation('INVOICES_PAGE.STATUS'),
        type: 'custom',
        width: '5%',
        renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .StatusBadgeComponent */ .v,
        filter: {
          type: 'custom',
          component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .InputFilterComponent */ .U
        },
        componentInitFunction: (instance, cell) => {
          instance.value = cell.getRawValue();
        }
      };
    }
  }
  /**
   * Handles the selection of an invoice.
   *
   * @param options - An object containing information about the selection.
   * @param options.isSelected - A boolean indicating whether the invoice is selected.
   * @param options.data - The data associated with the selected invoice.
   */
  selectInvoice(options) {
    this.disableButton = !options.isSelected;
    this.selectedInvoice = options.isSelected ? options.data : null;
  }
  /**
   * Applies translation on the smart table when the language changes.
   * Loads smart table settings after the language change.
   * Automatically unsubscribes when the component is destroyed.
   */
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._loadSettingsSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Clears the selected invoice item.
   */
  _clearItem() {
    this.selectInvoice({
      isSelected: false,
      data: null
    });
  }
  /**
   * Gets the column values based on the type (estimate or invoice).
   *
   * @returns An array of column values.
   */
  getColumns() {
    return this.isEstimate ? Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_22__/* .EstimateColumnsEnum */ .Vp) : Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_22__/* .InvoiceColumnsEnum */ ._d);
  }
  /**
   * Navigates to the payments page for the selected invoice.
   */
  payments() {
    const {
      id
    } = this.selectedInvoice;
    // Check if the selected invoice has an ID before navigating
    if (id) {
      const routePath = `/pages/accounting/invoices/payments/${id}`;
      this.router.navigate([routePath]);
    } else {
      // Handle the case where the selected invoice doesn't have an ID
      console.error('Selected invoice does not have a valid ID for payments.');
      // You might want to provide user feedback or handle this case accordingly
    }
  }
  /**
   * Initiates the editing process for the selected invoice or estimate.
   *
   * @param selectedItem - The selected invoice or estimate to edit.
   */
  edit(selectedItem) {
    // Change value using invoicesService
    this.invoicesService.changeValue(false);
    if (selectedItem) {
      // Select the invoice
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
    }
    const {
      id
    } = this.selectedInvoice;
    const routePath = this.isEstimate ? `/pages/accounting/invoices/estimates/edit` : `/pages/accounting/invoices/edit`;
    // Navigate to the edit page
    this.router.navigate([routePath, id]);
  }
  /**
   * Initiates the download process for the selected invoice or estimate.
   *
   * @param selectedItem - The selected invoice or estimate to download.
   */
  download(selectedItem) {
    if (selectedItem) {
      this.selectInvoice({
        isSelected: true,
        data: selectedItem
      });
    }
    const {
      selectedInvoice,
      isEstimate
    } = this;
    this.dialogService.open(_invoice_download_invoice_download_mutation_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceDownloadMutationComponent */ ._, {
      context: {
        invoice: selectedInvoice,
        isEstimate: isEstimate
      }
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoicesReceivedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoicesReceivedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_31__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_34__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbDialogService */ .S0W));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoicesReceivedComponent,
      selectors: [["ga-invoices-received"]],
      inputs: {
        isEstimate: "isEstimate"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 18,
      vars: 12,
      consts: [["gridLayout", ""], ["actionButtons", ""], ["visibleButton", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "card-custom-header"], [1, "col-auto"], [3, "allowEmployee"], [3, "format"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "isDisable", "buttonTemplate", "componentName"], [3, "ngIf", "ngIfElse"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", "underConstruction", "", 1, "action", "secondary", 3, "click", "disabled"], ["icon", "eye-outline"], ["nbButton", "", "status", "basic", "class", "action primary", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "class", "action secondary", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "class", "action success", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "class", "action warning", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["icon", "download-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "click", "disabled"], ["icon", "clipboard-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "success", 3, "click", "disabled"], ["icon", "checkmark-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "warning", 3, "click", "disabled"], ["icon", "close-outline"], ["nbButton", "", "status", "success", "size", "small", "underConstruction", ""], [3, "icon"]],
      template: function InvoicesReceivedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4)(2, "div", 5)(3, "h4")(4, "ngx-header-title", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(7, "ngx-date-range-title", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(9, "ngx-gauzy-button-action", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(11, InvoicesReceivedComponent_ng_template_11_Template, 4, 3, "ng-template", 10)(12, InvoicesReceivedComponent_ng_template_12_Template, 1, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(14, InvoicesReceivedComponent_ng_template_14_Template, 10, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(16, InvoicesReceivedComponent_ng_template_16_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const gridLayout_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(13);
          const actionButtons_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(15);
          const visibleButton_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, ctx.isEstimate ? "INVOICES_PAGE.RECEIVED_ESTIMATES" : "INVOICES_PAGE.RECEIVED_INVOICES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("format", "dddd, LL");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("buttonTemplateVisible", visibleButton_r13)("isDisable", ctx.disableButton)("buttonTemplate", actionButtons_r12)("componentName", ctx.viewComponentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r11);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbButtonComponent */ .YP2, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_36__/* .CardGridComponent */ .c, angular2_smart_table__WEBPACK_IMPORTED_MODULE_37__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_38__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_39__/* .PaginationV2Component */ .a, _angular_common__WEBPACK_IMPORTED_MODULE_40__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_41__/* .DateRangeTitleComponent */ .D, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_42__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_43__/* .UnderConstructionDirective */ .r, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}"]
    });
  }
};
InvoicesReceivedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_44__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_44__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .DateRangePickerBuilderService */ .i7, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .InvoicesService */ .U, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_31__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .ToastrService */ .t, _angular_common_http__WEBPACK_IMPORTED_MODULE_34__/* .HttpClient */ .Qq, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbDialogService */ .S0W])], InvoicesReceivedComponent);


/***/ }),

/***/ 59859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ InvoicePaidComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);




let InvoicePaidComponent = /*#__PURE__*/(() => {
  class InvoicePaidComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.totalPaid = 0;
    }
    ngOnInit() {
      this._calculatePaid();
    }
    /**
     * Calculates the total amount paid, determines the percentage of the total value that has been paid,
     * and updates the bar width accordingly.
     */
    _calculatePaid() {
      this.totalPaid = this.rowData.payments.reduce((total, payment) => total + +payment.amount, 0);
      // Ensure that total value is non-zero to avoid division by zero
      const totalValue = +this.rowData.totalValue || 1;
      this.paidAmountPercentage = +this.calculatePercentage(this.totalPaid, totalValue).toFixed(2);
    }
    /**
     * Calculates the percentage based on the given values.
     *
     * @param numerator - The numerator for calculating the percentage.
     * @param denominator - The denominator for calculating the percentage.
     * @returns The calculated percentage.
     */
    calculatePercentage(numerator, denominator) {
      return numerator / denominator * 100;
    }
    static {
      this.ɵfac = function InvoicePaidComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoicePaidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InvoicePaidComponent,
        selectors: [["ga-invoice-paid"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 6,
        vars: 6,
        consts: [[1, "progress-bar-container"], [1, "progress-bar"], [1, "paid-percent"], ["id", "progress-bar-inner", 1, "progress-bar-inner"]],
        template: function InvoicePaidComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", ctx.paidAmountPercentage, "% ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "INVOICES_PAGE.PAYMENTS.PAID"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .xc7("width", ctx.paidAmountPercentage + "%");
          }
        },
        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: [".progress-bar-inner[_ngcontent-%COMP%] {background-color: rgba(0, 214, 143, 1); position: absolute; height: 32px; width:100%; border-radius: 4px;}", ".progress-bar[_ngcontent-%COMP%] {background-color: rgba(126, 126, 143, 0.2); border-radius: 4px; position: relative; height: 32px}", ".paid-percent[_ngcontent-%COMP%] {color: #ffffff; z-index: 1; font-weight: bold;}"]
      });
    }
  }
  return InvoicePaidComponent;
})();

/***/ }),

/***/ 59888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ PublicLinkComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19159);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94817);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);















const _c0 = a0 => ({
  text: a0
});
let PublicLinkComponent = /*#__PURE__*/(() => {
  class PublicLinkComponent {
    get invoice() {
      return this._invoice;
    }
    set invoice(value) {
      this._invoice = value;
      this.createPublicLink();
    }
    constructor(_router, _location, _urlSerializer, _clipboardService, _dialogRef, _invoicesService) {
      this._router = _router;
      this._location = _location;
      this._urlSerializer = _urlSerializer;
      this._clipboardService = _clipboardService;
      this._dialogRef = _dialogRef;
      this._invoicesService = _invoicesService;
      this.isCopied = false; // Track if link has been copied
      /**
       * Destroyed textarea element after each copy to clipboard
       */
      _clipboardService.configure({
        cleanUpAfterCopy: true
      });
    }
    ngOnInit() {
      if (!this.invoice.token) {
        this.generatePublicInvoiceLink();
      }
    }
    /**
     * Generate public invoice link
     */
    generatePublicInvoiceLink() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        _this.invoice = yield _this._invoicesService.generateLink(_this.invoice.id);
      })();
    }
    /**
     * Create invoice public link
     */
    createPublicLink() {
      if (!this.invoice) {
        return;
      }
      const {
        id,
        token,
        isEstimate
      } = this.invoice;
      // Define the base URL based on whether it's an estimate or an invoice
      const basePath = isEstimate ? 'estimates' : 'invoices';
      // Create the URL tree with the appropriate path
      const urlTree = this._router.createUrlTree([`/share/${basePath}/${id}/${token}`]);
      // Serialize the URL tree and prepare the external URL
      const serializedUrl = this._urlSerializer.serialize(urlTree);
      // As far as I can tell you don't really need the UrlSerializer.
      this.publicLink = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .__prepareExternalUrlLocation */ .bD)(this._location.prepareExternalUrl(serializedUrl));
    }
    /**
     * Copy to clipboard
     */
    copyLink() {
      try {
        this._clipboardService.copyFromContent(this.publicLink); // Copy the link to clipboard
        this.isCopied = true; // Show "Copied" status
        // Hide "Copied" status after 2 seconds
        setTimeout(() => {
          this.isCopied = false;
        }, 2000);
      } catch (error) {
        // Fallback for older browsers
        this.fallbackCopyToClipboard(this.publicLink);
      }
    }
    /**
     * Fallback copy to clipboard
     *
     * @param text
     */
    fallbackCopyToClipboard(text) {
      // Create a temporary element to copy the link
      const textArea = document.createElement('textarea');
      textArea.value = text;
      // Append the element to the body
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        console.log('Link copied to clipboard');
      } catch (error) {
        console.error('Failed to copy: ', error);
      }
      document.body.removeChild(textArea);
    }
    /**
     * Close the dialog
     */
    close() {
      this._dialogRef.close();
    }
    static {
      this.ɵfac = function PublicLinkComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PublicLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .Location */ .aZ), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .UrlSerializer */ .Sd), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__/* .ClipboardService */ .WW), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .InvoicesService */ .U));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PublicLinkComponent,
        selectors: [["public-invoice-link"]],
        inputs: {
          invoice: "invoice"
        },
        standalone: false,
        decls: 26,
        vars: 26,
        consts: [["inputTarget", ""], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "mb-3"], ["for", "publicLink", 1, "label"], ["id", "publicLink", "readonly", "", "nbInput", "", "fullWidth", "", 3, "ngModel"], [1, "text-left"], ["outline", "", "nbButton", "", "status", "basic", "type", "button", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", "type", "button", 1, "mr-3", 3, "click", "ngxClipboard", "disabled", "nbTooltip"]],
        template: function PublicLinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function PublicLinkComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(11, "div")(12, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(15, "input", 6, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(17, "nb-card-footer", 7)(18, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function PublicLinkComponent_Template_button_click_18_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(21, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function PublicLinkComponent_Template_button_click_21_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.copyLink());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const inputTarget_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(6, 9, "INVOICES_PAGE.PUBLIC_LINK.HEADER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(10, 11, "INVOICES_PAGE.PUBLIC_LINK.ACCESS", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(24, _c0, ctx.invoice.isEstimate ? "estimate" : "invoice")), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(14, 14, "FORM.LABELS.PUBLIC_LINK"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngModel", ctx.publicLink);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(20, 16, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngxClipboard", inputTarget_r2)("disabled", ctx.isCopied)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(22, 18, "INVOICES_PAGE.PUBLIC_LINK.COPY_TO_CLIPBOARD_TOOLTIP"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.isCopied ? _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(24, 20, "BUTTONS.COPIED") : _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(25, 22, "BUTTONS.COPY_LINK"), " ");
          }
        },
        dependencies: [ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__/* .ClipboardDirective */ .Uo, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbTooltipDirective */ .BmQ, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgModel */ .vS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  }
  return PublicLinkComponent;
})();

/***/ }),

/***/ 64612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BC: () => (/* reexport safe */ _invoice_apply_tax_discount_component__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   Ft: () => (/* reexport safe */ _invoice_expense_selector_component__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   Mn: () => (/* reexport safe */ _invoice_product_selector_component__WEBPACK_IMPORTED_MODULE_4__.M),
/* harmony export */   PA: () => (/* reexport safe */ _invoice_employees_selector_component__WEBPACK_IMPORTED_MODULE_1__.P),
/* harmony export */   QA: () => (/* reexport safe */ _invoice_project_selector_component__WEBPACK_IMPORTED_MODULE_5__.Q),
/* harmony export */   Z_: () => (/* reexport safe */ _invoice_paid_component__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   ar: () => (/* reexport safe */ _invoice_tasks_selector_component__WEBPACK_IMPORTED_MODULE_6__.a)
/* harmony export */ });
/* harmony import */ var _invoice_apply_tax_discount_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47353);
/* harmony import */ var _invoice_employees_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15420);
/* harmony import */ var _invoice_expense_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71215);
/* harmony import */ var _invoice_paid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59859);
/* harmony import */ var _invoice_product_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84886);
/* harmony import */ var _invoice_project_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20556);
/* harmony import */ var _invoice_tasks_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43329);








/***/ }),

/***/ 65101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ InvoicesRoutingModule)
/* harmony export */ });
/* unused harmony export redirectTo */
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20433);
/* harmony import */ var _invoices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68497);
/* harmony import */ var _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2920);
/* harmony import */ var _invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80490);
/* harmony import */ var _invoices_received_invoices_received_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58712);
/* harmony import */ var _invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58444);
/* harmony import */ var _invoice_estimates_invoice_estimates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72320);
/* harmony import */ var _invoice_estimates_estimate_add_estimate_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89892);
/* harmony import */ var _invoice_estimates_estimate_edit_estimate_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11998);
/* harmony import */ var _invoice_estimates_estimates_received_estimates_received_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88146);
/* harmony import */ var _invoice_estimates_estimate_view_estimate_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43710);
/* harmony import */ var _invoice_payments_payments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(26860);

















function redirectTo() {
  return '/pages/dashboard';
}
const routes = [{
  path: '',
  component: _invoices_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoicesComponent */ .s,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.INVOICES_VIEW],
      redirectTo
    }
  },
  resolve: {
    dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerResolver */ .Q
  }
}, {
  path: 'add',
  component: _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceAddComponent */ .c,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.INVOICES_EDIT],
      redirectTo
    }
  }
}, {
  path: 'edit/:id',
  component: _invoice_edit_invoice_edit_component__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceEditComponent */ .v,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.INVOICES_EDIT],
      redirectTo
    }
  }
}, {
  path: 'received-invoices',
  component: _invoices_received_invoices_received_component__WEBPACK_IMPORTED_MODULE_3__/* .InvoicesReceivedComponent */ .L,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.INVOICES_VIEW],
      redirectTo
    }
  },
  resolve: {
    dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerResolver */ .Q
  }
}, {
  path: 'view/:id',
  component: _invoice_view_invoice_view_component__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceViewComponent */ .W,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.INVOICES_VIEW],
      redirectTo
    },
    selectors: {
      organization: false,
      date: false,
      employee: false,
      project: false,
      team: false
    }
  }
}, {
  path: 'estimates',
  canActivateChild: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .PermissionsGuard */ .a],
  children: [{
    path: '',
    component: _invoice_estimates_invoice_estimates_component__WEBPACK_IMPORTED_MODULE_5__/* .EstimatesComponent */ .v,
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ESTIMATES_VIEW],
        redirectTo
      }
    },
    resolve: {
      dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerResolver */ .Q
    }
  }, {
    path: 'add',
    component: _invoice_estimates_estimate_add_estimate_add_component__WEBPACK_IMPORTED_MODULE_6__/* .EstimateAddComponent */ .X,
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ESTIMATES_EDIT],
        redirectTo
      },
      datePicker: {
        unitOfTime: 'month'
      }
    },
    resolve: {
      dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerResolver */ .Q
    }
  }, {
    path: 'edit/:id',
    component: _invoice_estimates_estimate_edit_estimate_edit_component__WEBPACK_IMPORTED_MODULE_7__/* .EstimateEditComponent */ .S,
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ESTIMATES_EDIT],
        redirectTo
      }
    }
  }, {
    path: 'view/:id',
    component: _invoice_estimates_estimate_view_estimate_view_component__WEBPACK_IMPORTED_MODULE_9__/* .EstimateViewComponent */ .x,
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ESTIMATES_VIEW],
        redirectTo
      },
      selectors: {
        organization: false,
        date: false,
        employee: false,
        project: false,
        team: false
      }
    }
  }]
}, {
  path: 'received-estimates',
  component: _invoice_estimates_estimates_received_estimates_received_component__WEBPACK_IMPORTED_MODULE_8__/* .EstimatesReceivedComponent */ .U,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ESTIMATES_VIEW],
      redirectTo
    }
  },
  resolve: {
    dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerResolver */ .Q
  }
}, {
  path: 'payments/:id',
  component: _invoice_payments_payments_component__WEBPACK_IMPORTED_MODULE_10__/* .InvoicePaymentsComponent */ .e,
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.INVOICES_VIEW],
      redirectTo
    },
    selectors: {
      organization: false,
      date: false,
      employee: false,
      project: false,
      team: false
    }
  }
}, {
  path: 'recurring',
  loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(7178), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(6588), __webpack_require__.e(1750), __webpack_require__.e(7478), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(3213), __webpack_require__.e(5110), __webpack_require__.e(2180), __webpack_require__.e(1588), __webpack_require__.e(9867), __webpack_require__.e(6161), __webpack_require__.e(7288), __webpack_require__.e(6622), __webpack_require__.e(9860), __webpack_require__.e(1760), __webpack_require__.e(7204), __webpack_require__.e(3812), __webpack_require__.e(1707), __webpack_require__.e(236), __webpack_require__.e(1297), __webpack_require__.e(7483), __webpack_require__.e(4243), __webpack_require__.e(3734), __webpack_require__.e(588), __webpack_require__.e(6076), __webpack_require__.e(1232), __webpack_require__.e(7007), __webpack_require__.e(5398), __webpack_require__.e(4232), __webpack_require__.e(8264), __webpack_require__.e(1094), __webpack_require__.e(427), __webpack_require__.e(7607), __webpack_require__.e(7140), __webpack_require__.e(7088), __webpack_require__.e(4916), __webpack_require__.e(5684), __webpack_require__.e(9882), __webpack_require__.e(6747), __webpack_require__.e(7622), __webpack_require__.e(2076), __webpack_require__.e(8539)]).then(__webpack_require__.bind(__webpack_require__, 36747)).then(m => m.WorkInProgressModule)
}];
let InvoicesRoutingModule = /*#__PURE__*/(() => {
  class InvoicesRoutingModule {
    static {
      this.ɵfac = function InvoicesRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoicesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__/* ["ɵɵdefineNgModule"] */ .$C({
        type: InvoicesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_15__/* .RouterModule */ .iI]
      });
    }
  }
  return InvoicesRoutingModule;
})();

/***/ }),

/***/ 65912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ AddInternalNoteComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14572);













function AddInternalNoteComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 8)(1, "div", 9)(2, "div", 10)(3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 3, "INVOICES_PAGE.INTERNAL_NOTE.NOTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 5, "INVOICES_PAGE.INTERNAL_NOTE.ADD_NOTE"));
  }
}
function AddInternalNoteComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function AddInternalNoteComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.addNote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.SAVE"), " ");
  }
}
let AddInternalNoteComponent = /*#__PURE__*/(() => {
  class AddInternalNoteComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService, dialogRef, fb, toastrService, invoiceService) {
      super(translateService);
      this.translateService = translateService;
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.toastrService = toastrService;
      this.invoiceService = invoiceService;
    }
    ngOnInit() {
      this.initializeForm();
    }
    initializeForm() {
      this.form = this.fb.group({
        internalNote: [this.invoice.internalNote]
      });
    }
    addNote() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        yield _this.invoiceService.updateAction(_this.invoice.id, {
          internalNote: _this.form.value.internalNote
        });
        _this.toastrService.success('INVOICES_PAGE.INTERNAL_NOTE.NOTE_SAVED');
        _this.dialogRef.close();
      })();
    }
    cancel() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function AddInternalNoteComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AddInternalNoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .InvoicesService */ .U));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: AddInternalNoteComponent,
        selectors: [["ga-add-internal-note"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 14,
        vars: 8,
        consts: [[1, "add-internal-note"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup", 4, "ngIf"], [1, "text-left"], ["outline", "", "status", "basic", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", 4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "form-group", "col-12"], ["for", "note", 1, "label"], ["nbInput", "", "id", "note", "formControlName", "internalNote", "fullWidth", "", 1, "internal-note-input", 3, "placeholder"], ["status", "success", "nbButton", "", 3, "click"]],
        template: function AddInternalNoteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function AddInternalNoteComponent_Template_i_click_3_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, AddInternalNoteComponent_form_8_Template, 8, 7, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-footer", 5)(10, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function AddInternalNoteComponent_Template_button_click_10_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, AddInternalNoteComponent_button_13_Template, 3, 3, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 4, "INVOICES_PAGE.INTERNAL_NOTE.ADD_INTERNAL_NOTE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 6, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .JD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.internal-note-input[_ngcontent-%COMP%] {\n  height: 200px;\n}"]
      });
    }
  }
  return AddInternalNoteComponent;
})();

/***/ }),

/***/ 67592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ InvoicePdfComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64411);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_safe_safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38782);













function InvoicePdfComponent_iframe_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "iframe", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "safeUrl");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r0.fileURL), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeResourceUrl"] */ .f$h);
  }
}
function InvoicePdfComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx_r0.isLoading);
  }
}
function InvoicePdfComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1, "An error occurred, please reload.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
let InvoicePdfComponent = class InvoicePdfComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(invoicesService, translateService) {
    super(translateService);
    this.invoicesService = invoicesService;
    this.translateService = translateService;
  }
  ngOnInit() {
    this.isLoading = true;
    this.error = false;
    this.loadInvoicePdf();
  }
  loadInvoicePdf() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
      const {
        id: invoiceId
      } = _this.invoice;
      _this.invoicesService.downloadInvoicePdf(invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(data => _this.embeddedPdfToIframe(data)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(_this)).subscribe();
    })();
  }
  embeddedPdfToIframe(data) {
    const url = window.URL || window.webkitURL;
    const rawUrl = url.createObjectURL(data);
    this.fileURL = this.filterUrl(rawUrl) ? rawUrl : null;
    this.error = !this.filterUrl(rawUrl);
    this.isLoading = false;
  }
  filterUrl(url) {
    const baseUrl = window.location.origin;
    const uuidPattern = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    let isFilterUrl = false;
    let uri = 'blob:' + baseUrl + '/';
    let regex = new RegExp(uri);
    if (regex.test(url)) {
      const uuid = url.replace(uri, '');
      regex = new RegExp(uuidPattern);
      isFilterUrl = regex.test(uuid);
    }
    return isFilterUrl;
  }
  static {
    this.ɵfac = function InvoicePdfComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoicePdfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoicePdfComponent,
      selectors: [["ga-invoice-pdf"]],
      inputs: {
        invoice: "invoice"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 3,
      vars: 3,
      consts: [["type", "application/pdf", "id", "iframe", "class", "pdfDoc", "frameBorder", "0", 3, "src", 4, "ngIf"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "class", "pdfDoc loading", 3, "nbSpinner", 4, "ngIf"], ["class", "pdfDoc error", 4, "ngIf"], ["type", "application/pdf", "id", "iframe", "frameBorder", "0", 1, "pdfDoc", 3, "src"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "pdfDoc", "loading", 3, "nbSpinner"], [1, "pdfDoc", "error"]],
      template: function InvoicePdfComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, InvoicePdfComponent_iframe_0_Template, 2, 3, "iframe", 0)(1, InvoicePdfComponent_div_1_Template, 1, 1, "div", 1)(2, InvoicePdfComponent_div_2_Template, 2, 0, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.fileURL);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.error);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSpinnerDirective */ .zwc, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_pipes_safe_safe_pipe__WEBPACK_IMPORTED_MODULE_9__/* .SafeUrlPipe */ .d],
      styles: [".pdf-preview-card {\n\t\t\t\theight: 90vh;\n\t\t\t\tresize: horizontal;\n\t\t\t}\n\t\t\t.error[_ngcontent-%COMP%] {\n\t\t\t\tcolor: red;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.pdfDoc[_ngcontent-%COMP%] {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 60vw;\n\t\t\t}"]
    });
  }
};
InvoicePdfComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .InvoicesService */ .U, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$])], InvoicePdfComponent);


/***/ }),

/***/ 68497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ InvoicesComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(64411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(45715);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63570);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26024);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(9620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(84409);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(87081);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78543);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(57733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(36950);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(5712);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(7784);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(55101);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(96789);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(15130);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(33829);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(47825);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(70793);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(55129);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(90475);
/* harmony import */ var _invoice_send_invoice_send_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3218);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64612);
/* harmony import */ var _invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31652);
/* harmony import */ var _invoice_download_invoice_download_mutation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73214);
/* harmony import */ var _add_internal_note_add_internal_note_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(65912);
/* harmony import */ var _public_link_public_link_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(59888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(62177);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(49517);
/* harmony import */ var _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(64251);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(3456);
/* harmony import */ var _packages_ui_core_shared_src_lib_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(84597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(32386);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(2538);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(51102);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_outside_directive__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(16074);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(23830);

var InvoicesComponent_1;













































const _c0 = ["invoicesTable"];
const _c1 = ["actionButtons"];
const _c2 = () => ["INVOICES_EDIT", "INVOICES_VIEW"];
const _c3 = (a0, a1) => ({
  show: a0,
  hide: a1
});
const _c4 = (a0, a1) => ({
  show: a0,
  "show-button": a1
});
function InvoicesComponent_ng_template_13_ng_template_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function InvoicesComponent_ng_template_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 26)(1, "div", 27)(2, "span", 27)(3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_13_ng_template_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(4, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(7, InvoicesComponent_ng_template_13_ng_template_1_ng_container_7_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
    const actionButtons_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction2"] */ .l_i(6, _c3, !ctx_r2.disableButton, ctx_r2.disableButton));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction2"] */ .l_i(9, _c4, !ctx_r2.disableButton, ctx_r2.disableButton));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(6, 4, "BUTTONS.ADD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", actionButtons_r4);
  }
}
function InvoicesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(1, InvoicesComponent_ng_template_13_ng_template_1_Template, 8, 12, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(2, "ga-layout-selector", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("componentName", ctx_r2.viewComponentName);
  }
}
function InvoicesComponent_ng_container_18_ng_template_2_Template(rf, ctx) {}
function InvoicesComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(2, InvoicesComponent_ng_container_18_ng_template_2_Template, 0, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    const tableLayout_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(31);
    const gridLayout_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r2.dataLayoutStyle === ctx_r2.componentLayoutStyleEnum.TABLE ? tableLayout_r5 : gridLayout_r6);
  }
}
function InvoicesComponent_ng_container_23_nb_select_69_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const status_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("value", status_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE.STATUSES." + status_r8), " ");
  }
}
function InvoicesComponent_ng_container_23_nb_select_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(2, InvoicesComponent_ng_container_23_nb_select_69_nb_option_2_Template, 3, 4, "nb-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "FORM.PLACEHOLDERS.STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.invoiceStatusTypes);
  }
}
function InvoicesComponent_ng_container_23_nb_select_70_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const status_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("value", status_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE.STATUSES." + status_r9), " ");
  }
}
function InvoicesComponent_ng_container_23_nb_select_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(2, InvoicesComponent_ng_container_23_nb_select_70_nb_option_2_Template, 3, 4, "nb-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "FORM.PLACEHOLDERS.STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.estimateStatusTypes);
  }
}
function InvoicesComponent_ng_container_23_ng_template_80_Template(rf, ctx) {}
function InvoicesComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(1, "div", 31)(2, "nb-accordion", 33)(3, "nb-accordion-item", 34)(4, "nb-accordion-item-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(8, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(9, "nb-accordion-item-body")(10, "form", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function InvoicesComponent_ng_container_23_Template_form_ngSubmit_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(11, "div", 36)(12, "div", 37)(13, "div", 38)(14, "label", 39)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(18, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(20, "div", 41)(21, "div", 38)(22, "label", 42)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(26, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(27, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(29, "nb-icon", 45)(30, "nb-datepicker", null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(32, "div", 41)(33, "div", 38)(34, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(37, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(38, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(40, "nb-icon", 45)(41, "nb-datepicker", null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(43, "div", 48)(44, "div", 41)(45, "div", 38)(46, "label", 49)(47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(50, "ga-contact-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(52, "div", 51)(53, "div", 38)(54, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(57, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(59, "div", 51)(60, "div", 38)(61, "ga-currency", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("optionChange", function InvoicesComponent_ng_container_23_Template_ga_currency_optionChange_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.currencyChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(62, "div", 51)(63, "ga-tags-color-input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function InvoicesComponent_ng_container_23_Template_ga_tags_color_input_selectedTagsEvent_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectedTagsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(64, "div", 51)(65, "div", 38)(66, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(69, InvoicesComponent_ng_container_23_nb_select_69_Template, 3, 4, "nb-select", 57)(70, InvoicesComponent_ng_container_23_nb_select_70_Template, 3, 4, "nb-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(71, "div", 48)(72, "div")(73, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(76, "div")(77, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_container_23_Template_button_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(80, InvoicesComponent_ng_container_23_ng_template_80_Template, 0, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const invoiceDatePicker_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(31);
    const dueDatePicker_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(42);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    const tableLayout_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(31);
    const gridLayout_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(6, 25, ctx_r2.isEstimate ? "INVOICES_PAGE.ESTIMATES.HEADER" : "INVOICES_PAGE.HEADER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(8, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(7, 27, "INVOICES_PAGE.SEARCH")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r2.searchForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(17, 31, ctx_r2.isEstimate ? "INVOICES_PAGE.ESTIMATE_NUMBER" : "INVOICES_PAGE.INVOICE_NUMBER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(19, 33, !ctx_r2.isEstimate ? "INVOICES_PAGE.INVOICE_NUMBER" : "INVOICES_PAGE.ESTIMATE_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(25, 35, !ctx_r2.isEstimate ? "INVOICES_PAGE.INVOICE_DATE" : "INVOICES_PAGE.ESTIMATE_DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(28, 37, !ctx_r2.isEstimate ? "INVOICES_PAGE.INVOICE_DATE" : "INVOICES_PAGE.ESTIMATE_DATE"))("nbDatepicker", invoiceDatePicker_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(36, 39, "INVOICES_PAGE.DUE_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(39, 41, "INVOICES_PAGE.DUE_DATE"))("nbDatepicker", dueDatePicker_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(49, 43, "INVOICES_PAGE.CONTACT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("clearable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(51, 45, "POP_UPS.ALL_CONTACTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(56, 47, "INVOICES_PAGE.TOTAL_VALUE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(58, 49, "INVOICES_PAGE.TOTAL_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx_r2.searchForm.get("currency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx_r2.searchForm.get("tags").value)("isOrgLevel", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(68, 51, "INVOICES_PAGE.STATUS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(75, 53, "BUTTONS.SEARCH"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(79, 55, "BUTTONS.RESET"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r2.dataLayoutStyle === ctx_r2.componentLayoutStyleEnum.TABLE ? tableLayout_r5 : gridLayout_r6);
  }
}
function InvoicesComponent_ng_container_28_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(3, "form", 35, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function InvoicesComponent_ng_container_28_ng_container_15_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const historyFormDirective_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.addComment(historyFormDirective_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(6, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(7, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(8, "textarea", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(9, "div", 73)(10, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 4, "INVOICES_PAGE.COMMENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r2.historyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.historyForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(12, 6, "BUTTONS.ADD_COMMENT"), " ");
  }
}
function InvoicesComponent_ng_container_28_div_16_nb_list_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-list-item", 78)(1, "div", 79)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(3, "ngx-avatar", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(4, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(6, "dateTimeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(7, "div", 82)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(10, "div", 83)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()()();
  }
  if (rf & 2) {
    const history_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("src", history_r14.user.imageUrl)("name", history_r14.user.name)("value", history_r14.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, history_r14.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(history_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(history_r14.action);
  }
}
function InvoicesComponent_ng_container_28_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(3, "div", 75)(4, "nb-list", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(5, InvoicesComponent_ng_container_28_div_16_nb_list_item_5_Template, 13, 8, "nb-list-item", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE.COMMENTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.histories);
  }
}
function InvoicesComponent_ng_container_28_ng_template_17_Template(rf, ctx) {}
function InvoicesComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(1, "div", 31)(2, "nb-accordion", 33)(3, "nb-accordion-item", 63)(4, "nb-accordion-item-header", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(8, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(12, "nb-accordion-item-body")(13, "div", 66)(14, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(15, InvoicesComponent_ng_container_28_ng_container_15_Template, 13, 8, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(16, InvoicesComponent_ng_container_28_div_16_Template, 6, 4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(17, InvoicesComponent_ng_container_28_ng_template_17_Template, 0, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    const tableLayout_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(31);
    const gridLayout_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("collapsed", ctx_r2.selectedInvoice ? "false" : "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(6, 7, !ctx_r2.isEstimate ? "INVOICES_PAGE.HEADER" : "INVOICES_PAGE.ESTIMATES.HEADER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(8, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(7, 9, "INVOICES_PAGE.COMMENTS")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(11, 13, !ctx_r2.isEstimate ? "INVOICES_PAGE.SELECT_INVOICE_TO_VIEW_HISTORY" : "INVOICES_PAGE.ESTIMATES.SELECT_ESTIMATE_TO_VIEW_HISTORY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.selectedInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r2.dataLayoutStyle === ctx_r2.componentLayoutStyleEnum.TABLE ? tableLayout_r5 : gridLayout_r6);
  }
}
function InvoicesComponent_ng_template_30_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r2.smartTableSource);
  }
}
function InvoicesComponent_ng_template_30_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(1, InvoicesComponent_ng_template_30_div_3_ng_container_1_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.smartTableSource);
  }
}
function InvoicesComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 84)(1, "angular2-smart-table", 85, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function InvoicesComponent_ng_template_30_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectInvoice($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(3, InvoicesComponent_ng_template_30_div_3_Template, 2, 1, "div", 86);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.dataLayoutStyle === ctx_r2.componentLayoutStyleEnum.TABLE);
  }
}
function InvoicesComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 89)(1, "ga-card-grid", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function InvoicesComponent_ng_template_32_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectInvoice($event));
    })("scroll", function InvoicesComponent_ng_template_32_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r2.pagination == null ? null : ctx_r2.pagination.totalItems)("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.invoices);
  }
}
function InvoicesComponent_ng_template_34_ng_template_1_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_34_ng_template_1_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r19);
      const selectedItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.convert(selectedItem_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r20 && ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.TO_INVOICE"), " ");
  }
}
function InvoicesComponent_ng_template_34_ng_template_1_nb_select_1_nb_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const status_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("value", status_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE.STATUSES." + status_r22), " ");
  }
}
function InvoicesComponent_ng_template_34_ng_template_1_nb_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function InvoicesComponent_ng_template_34_ng_template_1_nb_select_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r2.status, $event) || (ctx_r2.status = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InvoicesComponent_ng_template_34_ng_template_1_nb_select_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectStatus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(3, InvoicesComponent_ng_template_34_ng_template_1_nb_select_1_nb_option_3_Template, 3, 4, "nb-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(1, 5, "INVOICES_PAGE.SET_STATUS")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton)("size", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.invoiceStatusTypes);
  }
}
function InvoicesComponent_ng_template_34_ng_template_1_nb_select_2_nb_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const status_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("value", status_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE.STATUSES." + status_r24), " ");
  }
}
function InvoicesComponent_ng_template_34_ng_template_1_nb_select_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function InvoicesComponent_ng_template_34_ng_template_1_nb_select_2_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r2.status, $event) || (ctx_r2.status = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InvoicesComponent_ng_template_34_ng_template_1_nb_select_2_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r23);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectStatus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(3, InvoicesComponent_ng_template_34_ng_template_1_nb_select_2_nb_option_3_Template, 3, 4, "nb-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(1, 5, "INVOICES_PAGE.SET_STATUS")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton)("size", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.estimateStatusTypes);
  }
}
function InvoicesComponent_ng_template_34_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_34_ng_template_1_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r25);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.view());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.VIEW"), " ");
  }
}
function InvoicesComponent_ng_template_34_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(0, InvoicesComponent_ng_template_34_ng_template_1_button_0_Template, 4, 4, "button", 97)(1, InvoicesComponent_ng_template_34_ng_template_1_nb_select_1_Template, 4, 9, "nb-select", 98)(2, InvoicesComponent_ng_template_34_ng_template_1_nb_select_2_Template, 4, 9, "nb-select", 99)(3, InvoicesComponent_ng_template_34_ng_template_1_ng_template_3_Template, 4, 4, "ng-template", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(4, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_34_ng_template_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r18);
      const selectedItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.edit(selectedItem_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(8, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_34_ng_template_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r18);
      const selectedItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.download(selectedItem_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(9, "nb-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r20 && ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(7, 7, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r20 && ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(11, 9, "BUTTONS.DOWNLOAD"), " ");
  }
}
function InvoicesComponent_ng_template_34_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_34_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.payments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r20 && ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.PAYMENTS"), " ");
  }
}
function InvoicesComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(1, InvoicesComponent_ng_template_34_ng_template_1_Template, 12, 11, "ng-template", 24)(2, InvoicesComponent_ng_template_34_button_2_Template, 4, 4, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(3, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_34_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(6, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_34_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.toggleActionsPopover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    const actionsPopover_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.DELETE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbPopover", actionsPopover_r27);
  }
}
function InvoicesComponent_ng_template_36_div_5_nb_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const column_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("value", column_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE." + column_r30), " ");
  }
}
function InvoicesComponent_ng_template_36_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 124)(1, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(4, "nb-select", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function InvoicesComponent_ng_template_36_div_5_Template_nb_select_selectedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r2.columns, $event) || (ctx_r2.columns = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InvoicesComponent_ng_template_36_div_5_Template_nb_select_selectedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectColumn($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(6, InvoicesComponent_ng_template_36_div_5_nb_option_6_Template, 3, 4, "nb-option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(3, 5, "INVOICES_PAGE.SHOW_COLUMNS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(5, 7, "INVOICES_PAGE.SHOW_COLUMNS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("multiple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.getColumns());
  }
}
function InvoicesComponent_ng_template_36_label_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.INVOICES_PER_PAGE"), " ");
  }
}
function InvoicesComponent_ng_template_36_label_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.ESTIMATES_PER_PAGE"), " ");
  }
}
function InvoicesComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 112)(1, "span", 113)(2, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_36_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.toggleTableSettingsPopover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(3, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(4, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(5, InvoicesComponent_ng_template_36_div_5_Template, 7, 9, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(6, "div", 117)(7, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(8, InvoicesComponent_ng_template_36_label_8_Template, 3, 3, "label", 119)(9, InvoicesComponent_ng_template_36_label_9_Template, 3, 3, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(10, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function InvoicesComponent_ng_template_36_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r2.perPage, $event) || (ctx_r2.perPage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(11, "div", 121)(12, "nb-checkbox", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("checkedChange", function InvoicesComponent_ng_template_36_Template_nb_checkbox_checkedChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.toggleIncludeArchived($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(15, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_36_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.showPerPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isEstimate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r2.perPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(14, 6, "FORM.CHECKBOXES.INCLUDE_ARCHIVED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(17, 8, "BUTTONS.SAVE"), " ");
  }
}
function InvoicesComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("clickOutside", function InvoicesComponent_ng_template_38_Template_div_clickOutside_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onClickOutside($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .qex(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(2, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_38_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.addInternalNote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(4, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(7, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_38_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.duplicated());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(8, "nb-icon", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(9, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(12, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_38_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.send());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(13, "nb-icon", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(14, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(17, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_38_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.generatePublicLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(18, "nb-icon", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(19, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(22, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_38_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.email());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(23, "nb-icon", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(24, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(27, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_38_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.exportToCsv());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(28, "nb-icon", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(29, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(32, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_38_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.archive());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(33, "nb-icon", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(34, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(37, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_ng_template_38_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r31);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx_r2.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(38, "nb-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(39, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .bVm();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(6, 16, "BUTTONS.NOTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(11, 18, "BUTTONS.DUPLICATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r2.canBeSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(16, 20, "BUTTONS.SEND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(21, 22, "BUTTONS.PUBLIC_LINK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(26, 24, "BUTTONS.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(31, 26, "BUTTONS.EXPORT_TO_CSV"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton || ctx_r2.selectedInvoice.isArchived);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(36, 28, "BUTTONS.ARCHIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(41, 30, "BUTTONS.DELETE"));
  }
}
let InvoicesComponent = /*#__PURE__*/(() => {
  let InvoicesComponent = class InvoicesComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .PaginationFilterBaseComponent */ .t {
    static {
      InvoicesComponent_1 = this;
    }
    set isEstimate(val) {
      this._isEstimate = val;
    }
    get isEstimate() {
      return this._isEstimate;
    }
    set content(table) {
      if (table) {
        this.invoicesTable = table;
      }
    }
    static searchBuildForm(fb) {
      return fb.group({
        invoiceNumber: [],
        organizationContact: [],
        invoiceDate: [],
        dueDate: [],
        totalValue: [],
        currency: [],
        status: [],
        tags: []
      });
    }
    static historyBuildForm(fb) {
      return fb.group({
        comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .k0.required],
        title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .k0.required]
      });
    }
    constructor(fb, translateService, store, dateRangePickerBuilderService, dialogService, toastrService, invoicesService, invoiceItemService, router, nbMenuService, invoiceEstimateHistoryService, ngxPermissionsService, httpClient) {
      super(translateService);
      this.fb = fb;
      this.translateService = translateService;
      this.store = store;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
      this.dialogService = dialogService;
      this.toastrService = toastrService;
      this.invoicesService = invoicesService;
      this.invoiceItemService = invoiceItemService;
      this.router = router;
      this.nbMenuService = nbMenuService;
      this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
      this.ngxPermissionsService = ngxPermissionsService;
      this.httpClient = httpClient;
      this.loading = false;
      this.disableButton = true;
      this.canBeSend = true;
      this.invoices = [];
      this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .ComponentLayoutStyleEnum */ .IE;
      this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
      this.invoiceStatusTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceStatusTypesEnum */ .g0);
      this.estimateStatusTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .EstimateStatusTypesEnum */ .BJ);
      this.contextMenus = [];
      this.columns = [];
      this.perPage = 10;
      this.histories = [];
      this.includeArchived = false;
      this.invoices$ = this.subject$;
      this.invoiceTabsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceTabsEnum */ .tq;
      this.nbTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__/* .BehaviorSubject */ .t(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceTabsEnum */ .tq.ACTIONS);
      this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__/* .Subject */ .B();
      /*
       * getter setter for check estimate or invoice
       */
      this._isEstimate = false;
      /*
       * Search Tab Form
       */
      this.searchForm = InvoicesComponent_1.searchBuildForm(this.fb);
      /*
       * History Tab Form
       */
      this.historyForm = InvoicesComponent_1.historyBuildForm(this.fb);
      this.statusMapper = value => {
        let badgeClass;
        if (value) {
          badgeClass = ['sent', 'viewed', 'accepted', 'active', 'fully paid'].includes(value.toLowerCase()) ? 'success' : ['void', 'draft', 'partially paid'].includes(value.toLowerCase()) ? 'warning' : 'danger';
        }
        return {
          originalValue: value,
          text: this.getTranslation(`INVOICES_PAGE.STATUSES.${value.toUpperCase()}`),
          class: badgeClass
        };
      };
      this.taxMapper = (taxType, tax) => {
        return {
          originalValue: tax,
          value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .DiscountTaxTypeEnum */ .Ai.PERCENT === taxType ? `${tax}%` : `${tax}`
        };
      };
      this.setView();
    }
    ngOnInit() {
      this.columns = this.getColumns();
      this._applyTranslationOnSmartTable();
      this._loadSmartTableSettings();
      this.loadMenu();
    }
    ngAfterViewInit() {
      this.invoices$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this._clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.getInvoices()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
      this.nbTab$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
      this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
      const storeOrganization$ = this.store.selectedOrganization$;
      const storeDateRange$ = this.dateRangePickerBuilderService.selectedDateRange$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .combineLatest */ .z)([storeOrganization$, storeDateRange$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .debounceTime */ .B)(300), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .filter */ .p)(([organization, dateRange]) => !!organization && !!dateRange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(([organization, dateRange]) => {
        this.organization = organization;
        this.selectedDateRange = dateRange;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
      this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.invoices = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    setView() {
      this.viewComponentName = this.isEstimate ? _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__/* .ComponentEnum */ .L.ESTIMATES : _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__/* .ComponentEnum */ .L.INVOICES;
      this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.closeActionsPopover()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.invoices = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    loadMenu() {
      this.contextMenus = [{
        title: this.getTranslation('INVOICES_PAGE.ACTION.DUPLICATE'),
        icon: 'copy-outline',
        permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_19__/* .PermissionsEnum */ .U.INVOICES_EDIT
      }, {
        title: this.getTranslation('INVOICES_PAGE.ACTION.SEND'),
        icon: 'upload-outline',
        permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_19__/* .PermissionsEnum */ .U.INVOICES_VIEW
      }, {
        title: this.getTranslation('INVOICES_PAGE.ACTION.CONVERT_TO_INVOICE'),
        icon: 'swap',
        permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_19__/* .PermissionsEnum */ .U.INVOICES_EDIT
      }, {
        title: this.getTranslation('INVOICES_PAGE.ACTION.EMAIL'),
        icon: 'email-outline',
        permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_19__/* .PermissionsEnum */ .U.INVOICES_VIEW
      }, {
        title: this.getTranslation('INVOICES_PAGE.ACTION.DELETE'),
        icon: 'archive-outline',
        permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_19__/* .PermissionsEnum */ .U.INVOICES_EDIT
      }, {
        title: this.getTranslation('INVOICES_PAGE.ACTION.NOTE'),
        icon: 'book-open-outline',
        permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_19__/* .PermissionsEnum */ .U.INVOICES_EDIT
      }];
      if (!this.isEstimate) {
        this.contextMenus.push({
          title: this.getTranslation('INVOICES_PAGE.ACTION.PAYMENTS'),
          icon: 'clipboard-outline',
          permission: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_19__/* .PermissionsEnum */ .U.INVOICES_EDIT
        });
      }
      const contextMenus = this.contextMenus.filter(item => this.ngxPermissionsService.getPermission(item.permission) != null);
      if (this.isEstimate) {
        this.settingsContextMenu = contextMenus;
      } else {
        this.settingsContextMenu = contextMenus.filter(item => item.title !== this.getTranslation('INVOICES_PAGE.ACTION.CONVERT_TO_INVOICE'));
      }
      this.nbMenuService.onItemClick().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__/* .first */ .$)());
    }
    selectMenu(selectedItem) {
      if (selectedItem) {
        this.selectInvoice({
          isSelected: true,
          data: selectedItem
        });
      }
      this.nbMenuService.onItemClick().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__/* .first */ .$)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__/* .map */ .T)(({
        item: {
          title
        }
      }) => title), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe(title => this.bulkAction(title));
    }
    bulkAction(action) {
      if (action === this.getTranslation('INVOICES_PAGE.ACTION.DUPLICATE')) this.duplicated(this.selectedInvoice);
      if (action === this.getTranslation('INVOICES_PAGE.ACTION.SEND')) this.send(this.selectedInvoice);
      if (action === this.getTranslation('INVOICES_PAGE.ACTION.CONVERT_TO_INVOICE')) this.convert(this.selectedInvoice);
      if (action === this.getTranslation('INVOICES_PAGE.ACTION.EMAIL')) this.email(this.selectedInvoice);
      if (action === this.getTranslation('INVOICES_PAGE.ACTION.DELETE')) this.delete(this.selectedInvoice);
      if (action === this.getTranslation('INVOICES_PAGE.ACTION.PAYMENTS')) this.payments();
      if (action === this.getTranslation('INVOICES_PAGE.ACTION.NOTE')) this.addInternalNote();
    }
    add() {
      if (this.isEstimate) {
        this.router.navigate(['/pages/accounting/invoices/estimates/add']);
      } else {
        this.router.navigate(['/pages/accounting/invoices/add']);
      }
    }
    edit(selectedItem) {
      this.invoicesService.changeValue(false);
      if (selectedItem) {
        this.selectInvoice({
          isSelected: true,
          data: selectedItem
        });
      }
      const {
        id
      } = this.selectedInvoice;
      if (this.isEstimate) {
        this.router.navigate([`/pages/accounting/invoices/estimates/edit`, id]);
      } else {
        this.router.navigate([`/pages/accounting/invoices/edit`, id]);
      }
    }
    duplicated(selectedItem) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(function* () {
        _this.invoicesService.changeValue(true);
        if (selectedItem) {
          _this.selectInvoice({
            isSelected: true,
            data: selectedItem
          });
        }
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.organization;
        const status = _this.selectedInvoice.status;
        const tax = _this.selectedInvoice.tax;
        const tax2 = _this.selectedInvoice.tax2;
        const discountValue = _this.selectedInvoice.discountValue;
        const invoiceNumber = yield _this.invoicesService.getHighestInvoiceNumber(tenantId);
        const createdInvoice = yield _this.invoicesService.add({
          invoiceNumber: +invoiceNumber['max'] + 1,
          invoiceDate: _this.selectedInvoice.invoiceDate,
          dueDate: _this.selectedInvoice.dueDate,
          currency: _this.selectedInvoice.currency,
          discountValue: discountValue ? discountValue.originalValue : 0,
          discountType: _this.selectedInvoice.discountType,
          tax: tax ? tax.originalValue : 0,
          tax2: tax2 ? tax2.originalValue : 0,
          taxType: _this.selectedInvoice.taxType,
          tax2Type: _this.selectedInvoice.tax2Type,
          terms: _this.selectedInvoice.terms,
          paid: _this.selectedInvoice.paid,
          totalValue: _this.selectedInvoice.totalValue,
          organizationContactId: _this.selectedInvoice.organizationContactId,
          toContact: _this.selectedInvoice.toContact,
          organizationContactName: _this.selectedInvoice.toContact?.name,
          fromOrganization: _this.organization,
          organizationId,
          tenantId,
          invoiceType: _this.selectedInvoice.invoiceType,
          tags: _this.selectedInvoice.tags,
          isEstimate: _this.isEstimate,
          status: status ? status.originalValue : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceStatusTypesEnum */ .g0.DRAFT
        });
        const invoiceItems = [];
        for (const item of _this.selectedInvoice.invoiceItems) {
          const itemToAdd = {
            description: item.description,
            price: item.price,
            quantity: item.quantity,
            totalValue: item.totalValue,
            invoiceId: createdInvoice.id,
            tenantId,
            organizationId
          };
          switch (_this.selectedInvoice.invoiceType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
              itemToAdd['employeeId'] = item.employeeId;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
              itemToAdd['projectId'] = item.projectId;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
              itemToAdd['taskId'] = item.taskId;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
              itemToAdd['productId'] = item.productId;
              break;
            default:
              break;
          }
          invoiceItems.push(itemToAdd);
        }
        yield _this.invoiceItemService.createBulk(createdInvoice.id, invoiceItems);
        const action = _this.isEstimate ? _this.getTranslation('INVOICES_PAGE.INVOICES_DUPLICATE_ESTIMATE') : _this.getTranslation('INVOICES_PAGE.INVOICES_DUPLICATE_INVOICE');
        yield _this.createInvoiceHistory(action);
        const {
          id
        } = createdInvoice;
        if (_this.isEstimate) {
          _this.toastrService.success('INVOICES_PAGE.INVOICES_DUPLICATE_ESTIMATE');
          _this.router.navigate([`/pages/accounting/invoices/estimates/edit`, id]);
        } else {
          _this.toastrService.success('INVOICES_PAGE.INVOICES_DUPLICATE_INVOICE');
          _this.router.navigate([`/pages/accounting/invoices/edit`, id]);
        }
      })();
    }
    download(selectedItem) {
      if (selectedItem) {
        this.selectInvoice({
          isSelected: true,
          data: selectedItem
        });
      }
      this.dialogService.open(_invoice_download_invoice_download_mutation_component__WEBPACK_IMPORTED_MODULE_4__/* .InvoiceDownloadMutationComponent */ ._, {
        context: {
          invoice: this.selectedInvoice,
          isEstimate: this.isEstimate
        }
      });
    }
    send(selectedItem) {
      if (selectedItem) {
        this.selectInvoice({
          isSelected: true,
          data: selectedItem
        });
      }
      if (this.selectedInvoice.organizationContactId) {
        this.dialogService.open(_invoice_send_invoice_send_mutation_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceSendMutationComponent */ .s, {
          context: {
            invoice: this.selectedInvoice,
            isEstimate: this.isEstimate
          }
        }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
      } else {
        this.toastrService.warning('INVOICES_PAGE.SEND.NOT_LINKED');
      }
    }
    convert(selectedItem) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(function* () {
        if (selectedItem) {
          _this2.selectInvoice({
            isSelected: true,
            data: selectedItem
          });
        }
        const {
          id: invoiceId
        } = _this2.selectedInvoice;
        yield _this2.invoicesService.updateAction(invoiceId, {
          isEstimate: false,
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceStatusTypesEnum */ .g0.DRAFT
        });
        const action = _this2.getTranslation('INVOICES_PAGE.ESTIMATES.CONVERTED_TO_INVOICE');
        yield _this2.createInvoiceHistory(action);
        _this2.toastrService.success('INVOICES_PAGE.ESTIMATES.ESTIMATE_CONVERT');
        _this2._refresh$.next(true);
        _this2.invoices$.next(true);
      })();
    }
    delete(selectedItem) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(function* () {
        if (selectedItem) {
          _this3.selectInvoice({
            isSelected: true,
            data: selectedItem
          });
        }
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_23__/* .firstValueFrom */ ._)(_this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .DeleteConfirmationComponent */ .u).onClose);
        if (result) {
          const {
            id
          } = _this3.selectedInvoice;
          yield _this3.invoicesService.delete(id);
          if (_this3.isEstimate) {
            _this3.toastrService.success('INVOICES_PAGE.INVOICES_DELETE_ESTIMATE');
          } else {
            _this3.toastrService.success('INVOICES_PAGE.INVOICES_DELETE_INVOICE');
          }
          _this3._refresh$.next(true);
          _this3.invoices$.next(true);
        }
      })();
    }
    view() {
      const {
        id
      } = this.selectedInvoice;
      if (this.isEstimate) {
        this.router.navigate([`/pages/accounting/invoices/estimates/view`, id]);
      } else {
        this.router.navigate([`/pages/accounting/invoices/view`, id]);
      }
    }
    email(selectedItem) {
      if (selectedItem) {
        this.selectInvoice({
          isSelected: true,
          data: selectedItem
        });
      }
      this.dialogService.open(_invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceEmailMutationComponent */ .q, {
        context: {
          invoice: this.selectedInvoice,
          isEstimate: this.isEstimate
        }
      }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    payments() {
      const {
        id
      } = this.selectedInvoice;
      this.router.navigate([`/pages/accounting/invoices/payments`, id]);
    }
    addInternalNote() {
      this.dialogService.open(_add_internal_note_add_internal_note_component__WEBPACK_IMPORTED_MODULE_25__/* .AddInternalNoteComponent */ .i, {
        context: {
          invoice: this.selectedInvoice
        }
      }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this.invoices$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    exportToCsv(selectedItem) {
      if (selectedItem) {
        this.selectInvoice({
          isSelected: true,
          data: selectedItem
        });
      }
      let fileName;
      const {
        invoiceNumber,
        invoiceDate,
        dueDate,
        status,
        totalValue,
        tax,
        tax2,
        discountValue,
        toContact,
        isEstimate
      } = this.selectedInvoice;
      if (isEstimate) {
        fileName = `${this.getTranslation('INVOICES_PAGE.ESTIMATE')}-${invoiceNumber}`;
      } else {
        fileName = `${this.getTranslation('INVOICES_PAGE.INVOICE')}-${invoiceNumber}`;
      }
      const data = [{
        invoiceNumber,
        invoiceDate,
        dueDate,
        status: `${this.getTranslation(`INVOICES_PAGE.STATUSES.${status}`)}`,
        totalValue,
        tax,
        tax2,
        discountValue,
        contact: toContact.name
      }];
      const headers = [isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE_NUMBER') : this.getTranslation('INVOICES_PAGE.INVOICE_NUMBER'), isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE_DATE') : this.getTranslation('INVOICES_PAGE.INVOICE_DATE'), this.getTranslation('INVOICES_PAGE.DUE_DATE'), this.getTranslation('INVOICES_PAGE.STATUS'), this.getTranslation('INVOICES_PAGE.TOTAL_VALUE'), this.getTranslation('INVOICES_PAGE.TAX'), this.getTranslation('INVOICES_PAGE.TAX_2'), this.getTranslation('INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE'), this.getTranslation('INVOICES_PAGE.CONTACT')].join(',');
      (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .generateCsv */ .Y)(data, headers, fileName);
    }
    /*
     * Register Smart Table Source Config
     */
    setSmartTableSource() {
      if (!this.organization) {
        return;
      }
      this.loading = true;
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      const {
        startDate,
        endDate
      } = (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__/* .getAdjustDateRangeFutureAllowed */ .Yi)(this.selectedDateRange);
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .ServerDataSource */ .N(this.httpClient, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_29__/* .API_PREFIX */ .m4}/invoices/pagination`,
        relations: ['invoiceItems', 'invoiceItems.employee', 'invoiceItems.employee.user', 'invoiceItems.project', 'invoiceItems.product', 'invoiceItems.invoice', 'invoiceItems.expense', 'invoiceItems.task', 'tags', 'payments', 'fromOrganization', 'toContact', 'historyRecords', 'historyRecords.user'],
        join: {
          alias: 'invoice',
          leftJoin: {
            toContact: 'invoice.toContact',
            tags: 'invoice.tags'
          },
          ...(this.filters.join ? this.filters.join : {})
        },
        where: {
          organizationId,
          tenantId,
          isEstimate: this.isEstimate,
          isArchived: this.includeArchived,
          invoiceDate: {
            startDate: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__/* .toUTC */ .q5)(startDate).format('YYYY-MM-DD HH:mm:ss'),
            endDate: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__/* .toUTC */ .q5)(endDate).format('YYYY-MM-DD HH:mm:ss')
          },
          ...(this.filters.where ? this.filters.where : {})
        },
        resultMap: invoice => {
          return Object.assign({}, invoice, {
            organizationContactName: invoice.toContact ? invoice.toContact.name : null,
            status: this.statusMapper(invoice.status),
            tax: this.taxMapper(invoice.taxType, invoice.tax),
            tax2: this.taxMapper(invoice.tax2Type, invoice.tax2),
            discountValue: this.taxMapper(invoice.discountType, invoice.discountValue)
          });
        },
        finalize: () => {
          if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            this.invoices.push(...this.smartTableSource.getData());
          }
          this.setPagination({
            ...this.getPagination(),
            totalItems: this.smartTableSource.count()
          });
          this.loading = false;
        }
      });
    }
    getInvoices() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(function* () {
        if (!_this4.organization) {
          return;
        }
        try {
          _this4.setSmartTableSource();
          const {
            activePage,
            itemsPerPage
          } = _this4.getPagination();
          _this4.smartTableSource.setPaging(activePage, itemsPerPage, false);
          if (_this4.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            // Initiate GRID or TABLE view pagination
            yield _this4.smartTableSource.getElements();
          }
        } catch (error) {
          _this4.toastrService.danger(_this4.getTranslation('NOTES.INVOICE.INVOICE_ERROR', {
            error: error.error.message || error.message
          }), _this4.getTranslation('TOASTR.TITLE.ERROR'));
        }
      })();
    }
    addComment(historyFormDirective) {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(function* () {
        if (_this5.historyForm.invalid) {
          return;
        }
        const {
          comment,
          title
        } = _this5.historyForm.value;
        const {
          id: invoiceId
        } = _this5.selectedInvoice;
        if (comment) {
          const action = comment;
          yield _this5.createInvoiceHistory(action, title);
          historyFormDirective.resetForm();
          _this5.historyForm.reset();
          const invoice = yield _this5.invoicesService.getById(invoiceId, ['invoiceItems', 'invoiceItems.employee', 'invoiceItems.employee.user', 'invoiceItems.project', 'invoiceItems.product', 'invoiceItems.invoice', 'invoiceItems.expense', 'invoiceItems.task', 'tags', 'payments', 'fromOrganization', 'toContact', 'historyRecords', 'historyRecords.user']);
          if (_this5.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .ComponentLayoutStyleEnum */ .IE.TABLE) {
            _this5.invoicesTable.grid.getRows().map(row => {
              if (row['data']['id'] === invoice.id) {
                row['data'] = invoice;
                row.isSelected = true;
              } else {
                row.isSelected = false;
              }
              return row;
            });
          } else {
            _this5.invoices = _this5.invoices.map(row => {
              if (row.id === invoice.id) {
                return invoice;
              }
              return row;
            });
          }
          _this5.selectInvoice({
            isSelected: true,
            data: invoice
          });
        }
      })();
    }
    generatePublicLink(selectedItem) {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(function* () {
        if (selectedItem) {
          _this6.selectInvoice({
            isSelected: true,
            data: selectedItem
          });
        }
        _this6.dialogService.open(_public_link_public_link_component__WEBPACK_IMPORTED_MODULE_30__/* .PublicLinkComponent */ .F, {
          context: {
            invoice: _this6.selectedInvoice
          }
        });
      })();
    }
    archive() {
      var _this7 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(function* () {
        yield _this7.invoicesService.updateAction(_this7.selectedInvoice.id, {
          isArchived: true
        });
        _this7._refresh$.next(true);
        _this7.invoices$.next(true);
      })();
    }
    selectInvoice(_x) {
      var _this8 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(function* ({
        isSelected,
        data
      }) {
        _this8.disableButton = !isSelected;
        _this8.selectedInvoice = isSelected ? data : null;
        if (isSelected) {
          _this8.canBeSend = data.toContact ? isSelected : !isSelected;
        } else {
          _this8.canBeSend = isSelected;
        }
        if (isSelected) {
          const {
            historyRecords = []
          } = data;
          const histories = [];
          historyRecords.forEach(h => {
            const history = {
              id: h.id,
              createdAt: new Date(h.createdAt).toString().slice(0, 24),
              action: h.action,
              title: h.title ?? '',
              user: h.user
            };
            histories.push(history);
          });
          histories.sort(function (a, b) {
            return +new Date(b.createdAt) - +new Date(a.createdAt);
          });
          _this8.histories = histories;
        }
      }).apply(this, arguments);
    }
    _loadSmartTableSettings() {
      const pagination = this.getPagination();
      this.settingsSmartTable = {
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        hideSubHeader: true,
        mode: 'external',
        selectedRowIndex: -1,
        actions: false,
        editable: true,
        noDataMessage: this.getTranslation(this.isEstimate ? 'SM_TABLE.NO_DATA.ESTIMATE' : 'SM_TABLE.NO_DATA.INVOICE'),
        columns: {
          invoiceNumber: {
            title: this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATES.ESTIMATE_NUMBER') : this.getTranslation('INVOICES_PAGE.INVOICE_NUMBER'),
            type: 'custom',
            sortDirection: 'asc',
            width: '17%',
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_31__/* .NotesWithTagsComponent */ .i,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getRawValue();
            }
          }
        }
      };
      if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceColumnsEnum */ ._d.INVOICE_DATE) || this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .EstimateColumnsEnum */ .Vp.ESTIMATE_DATE)) {
        this.settingsSmartTable['columns']['invoiceDate'] = {
          title: this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE_DATE') : this.getTranslation('INVOICES_PAGE.INVOICE_DATE'),
          type: 'custom',
          width: '10%',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_32__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        };
      }
      if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceColumnsEnum */ ._d.DUE_DATE)) {
        this.settingsSmartTable['columns']['dueDate'] = {
          title: this.getTranslation('INVOICES_PAGE.DUE_DATE'),
          type: 'custom',
          width: '10%',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_32__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        };
      }
      if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceColumnsEnum */ ._d.TOTAL_VALUE)) {
        this.settingsSmartTable['columns']['totalValue'] = {
          title: this.getTranslation('INVOICES_PAGE.TOTAL_VALUE'),
          type: 'custom',
          width: '10%',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_33__/* .InvoiceTotalValueComponent */ .s,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        };
      }
      if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceColumnsEnum */ ._d.TAX)) {
        this.settingsSmartTable['columns']['tax'] = {
          title: this.getTranslation('INVOICES_PAGE.TAX'),
          type: 'text',
          width: '5%',
          isFilterable: false,
          valuePrepareFunction: row => {
            return row?.value ?? '';
          }
        };
      }
      if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceColumnsEnum */ ._d.TAX_2)) {
        this.settingsSmartTable['columns']['tax2'] = {
          title: this.getTranslation('INVOICES_PAGE.TAX_2'),
          type: 'text',
          width: '6%',
          isFilterable: false,
          valuePrepareFunction: row => {
            return row?.value ?? '';
          }
        };
      }
      if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceColumnsEnum */ ._d.DISCOUNT)) {
        this.settingsSmartTable['columns']['discountValue'] = {
          title: this.getTranslation('INVOICES_PAGE.INVOICES_SELECT_DISCOUNT'),
          type: 'text',
          width: '5%',
          isFilterable: false,
          valuePrepareFunction: row => {
            return row?.value ?? '';
          }
        };
      }
      if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceColumnsEnum */ ._d.CONTACT)) {
        this.settingsSmartTable['columns']['toContact'] = {
          title: this.getTranslation('INVOICES_PAGE.CONTACT'),
          type: 'custom',
          width: '12%',
          isFilterable: false,
          isSortable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_34__/* .ContactLinksComponent */ .L,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getRawValue();
          }
        };
      }
      if (!this.isEstimate) {
        if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceColumnsEnum */ ._d.PAID_STATUS)) {
          this.settingsSmartTable['columns']['paid'] = {
            title: this.getTranslation('INVOICES_PAGE.PAID_STATUS'),
            type: 'custom',
            width: '12%',
            isFilterable: false,
            renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_2__/* .InvoicePaidComponent */ .Z_,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          };
        }
      }
      if (this.columns.includes(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceColumnsEnum */ ._d.STATUS)) {
        this.settingsSmartTable['columns']['status'] = {
          title: this.getTranslation('INVOICES_PAGE.STATUS'),
          type: 'custom',
          width: '5%',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_35__/* .StatusBadgeComponent */ .v,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getRawValue();
          }
        };
      }
    }
    showPerPage() {
      if (this.perPage && Number.isInteger(this.perPage) && this.perPage > 0) {
        this.setPagination({
          ...this.getPagination(),
          itemsPerPage: this.perPage
        });
      }
    }
    search() {
      const {
        dueDate,
        invoiceNumber,
        invoiceDate,
        totalValue,
        currency,
        status,
        organizationContact,
        tags = []
      } = this.searchForm.value;
      if (invoiceNumber) {
        this.setFilter({
          field: 'invoiceNumber',
          search: invoiceNumber
        }, false);
      }
      if (invoiceDate) {
        this.setFilter({
          field: 'invoiceDate',
          search: moment__WEBPACK_IMPORTED_MODULE_0__(invoiceDate).format('YYYY-MM-DD')
        }, false);
      }
      if (dueDate) {
        this.setFilter({
          field: 'dueDate',
          search: moment__WEBPACK_IMPORTED_MODULE_0__(dueDate).format('YYYY-MM-DD')
        }, false);
      }
      if (totalValue) {
        this.setFilter({
          field: 'totalValue',
          search: totalValue
        }, false);
      }
      if (currency) {
        this.setFilter({
          field: 'currency',
          search: currency
        }, false);
      }
      if (status) {
        this.setFilter({
          field: 'status',
          search: status
        }, false);
      }
      if (organizationContact) {
        this.setFilter({
          field: 'toContact',
          search: [organizationContact.id]
        }, false);
      }
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__/* .isNotEmpty */ .hj)(tags)) {
        const tagIds = [];
        for (const tag of tags) {
          tagIds.push(tag.id);
        }
        this.setFilter({
          field: 'tags',
          search: tagIds
        });
      }
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_15__/* .isNotEmpty */ .hj)(this.filters)) {
        this.refreshPagination();
        this._refresh$.next(true);
        this.invoices$.next(true);
      }
    }
    toggleIncludeArchived(event) {
      this.includeArchived = event;
      this._refresh$.next(true);
      this.invoices$.next(true);
    }
    reset() {
      this.searchForm.reset();
      this._filters = {};
      this._refresh$.next(true);
      this.invoices$.next(true);
    }
    selectedTagsEvent(currentTagSelection) {
      this.searchForm.patchValue({
        tags: currentTagSelection
      });
    }
    selectStatus($event) {
      var _this9 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(function* () {
        yield _this9.invoicesService.updateAction(_this9.selectedInvoice.id, {
          status: $event
        });
        _this9._refresh$.next(true);
        _this9.invoices$.next(true);
      })();
    }
    selectColumn($event) {
      this.columns = $event;
      this._loadSmartTableSettings();
    }
    toggleActionsPopover() {
      this.popups.last.toggle();
      this.popups.first.hide();
    }
    toggleTableSettingsPopover() {
      this.popups.first.toggle();
      if (this.popups.length > 1) {
        this.popups.last.hide();
      }
    }
    closeActionsPopover() {
      if (this.popups) {
        const actionsPopup = this.popups.first;
        const settingsPopup = this.popups.last;
        if (settingsPopup.isShown) {
          settingsPopup.hide();
        }
        if (actionsPopup.isShown) {
          actionsPopup.hide();
        }
      }
    }
    _applyTranslationOnSmartTable() {
      this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    onChangeTab(tab) {
      this.nbTab$.next(tab.tabId);
      this.closeActionsPopover();
    }
    _clearItem() {
      this.selectInvoice({
        isSelected: false,
        data: null
      });
    }
    getColumns() {
      if (this.isEstimate) {
        return Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .EstimateColumnsEnum */ .Vp);
      }
      return Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .InvoiceColumnsEnum */ ._d);
    }
    /*
     * Create Invoice History Event
     */
    createInvoiceHistory(action, title) {
      var _this0 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(function* () {
        const {
          tenantId,
          id: userId
        } = _this0.store.user;
        const {
          id: organizationId
        } = _this0.organization;
        const {
          id: invoiceId
        } = _this0.selectedInvoice;
        yield _this0.invoiceEstimateHistoryService.add({
          action,
          title: title ?? null,
          invoice: _this0.selectedInvoice,
          invoiceId,
          user: _this0.store.user,
          userId,
          organization: _this0.organization,
          organizationId,
          tenantId
        });
      })();
    }
    /*
     * On Changed Currency Event Emitter
     */
    currencyChanged($event) {}
    /**
     * On change number of item per page option
     * @param $event is a number
     */
    onUpdateOption($event) {
      this.perPage = $event;
      this.setPagination({
        ...this.getPagination(),
        itemsPerPage: this.perPage
      });
    }
    /**
     * Handle event when user click outside tag
     * @param event is a boolean
     */
    onClickOutside(event) {
      // Close popover after click any button inside
      if (event) this.toggleActionsPopover();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function InvoicesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_37__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_38__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_40__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_41__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_42__/* .InvoiceItemService */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_43__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbMenuService */ .BgA), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__/* .InvoiceEstimateHistoryService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(ngx_permissions__WEBPACK_IMPORTED_MODULE_45__/* .NgxPermissionsService */ .$R), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_46__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InvoicesComponent,
        selectors: [["ngx-invoices"]],
        viewQuery: function InvoicesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_c1, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbPopoverDirective */ .vs7, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.actionButtons = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.popups = _t);
          }
        },
        inputs: {
          isEstimate: "isEstimate"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 40,
        vars: 36,
        consts: [["tableLayout", ""], ["gridLayout", ""], ["actionButtons", ""], ["settingsPopover", ""], ["actionsPopover", ""], ["invoiceDatePicker", ""], ["dueDatePicker", ""], ["historyFormDirective", "ngForm"], ["invoicesTable", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "card-header-title"], [1, "col-auto"], [3, "allowEmployee"], [3, "format"], ["nbButton", "", "nbPopoverPlacement", "bottom", "nbPopoverTrigger", "noop", "size", "small", 3, "click", "nbPopover"], ["icon", "settings-2-outline"], [1, "card-body"], [3, "ngxPermissionsOnly"], [3, "changeTab"], [1, "remove-scroll", 3, "tabTitle", "tabId"], [4, "ngIf"], [1, "remove-scroll", "search-tab", 3, "tabTitle", "tabId"], [1, "remove-scroll", "history-tab", 3, "tabTitle", "tabId"], [1, "actions-container"], ["ngxPermissionsOnly", "INVOICES_EDIT"], [3, "componentName"], [1, "transition-container"], [1, "transition", 3, "ngClass"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline"], [4, "ngTemplateOutlet"], [1, "custom-content-body"], [3, "ngTemplateOutlet"], [1, "mb-3"], ["collapsed", "false"], [3, "ngSubmit", "formGroup"], [1, "row", "w-100"], [1, "col-sm-4"], [1, "form-group"], ["for", "inputInvoiceNumber", 1, "label"], ["type", "number", "nbInput", "", "formControlName", "invoiceNumber", "id", "inputInvoiceNumber", "fullWidth", "", 3, "placeholder"], [1, "col-sm-3"], ["for", "inputInvoiceDate", 1, "label"], [1, "input-icon"], ["formControlName", "invoiceDate", "type", "text", "nbInput", "", "id", "inputInvoiceDate", "fullWidth", "", "required", "", 1, "input-date", 3, "placeholder", "nbDatepicker"], ["icon", "calendar-outline", 1, "icon", "ml-3"], ["for", "inputDueDate", 1, "label"], ["nbInput", "", "formControlName", "dueDate", "id", "inputDueDate", "fullWidth", "", 1, "input-date", 3, "placeholder", "nbDatepicker"], [1, "row"], ["for", "inputOrganizationContact", 1, "label"], ["formControlName", "organizationContact", 3, "clearable", "placeholder"], [1, "col-sm-2"], ["for", "inputTotalValue", 1, "label"], ["type", "number", "nbInput", "", "formControlName", "totalValue", "id", "inputTotalValue", "fullWidth", "", 3, "placeholder"], ["formControlName", "currency", 3, "optionChange", "formControl"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], ["for", "inputStatus", 1, "label"], ["id", "inputStatus", "formControlName", "status", "fullWidth", "", 3, "placeholder", 4, "ngIf"], ["type", "submit", "status", "success", "size", "small", "nbButton", "", 1, "ml-3"], ["type", "reset", "status", "basic", "outline", "", "size", "small", "nbButton", "", 3, "click"], ["id", "inputStatus", "formControlName", "status", "fullWidth", "", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["collapsed", "true", 3, "collapsed"], [1, "nb-accordion-item-header"], [1, "accordion-header-hint", "history-list-select"], [1, "row", "comments-container"], [1, "col-6"], ["class", "col-6", 4, "ngIf"], [1, "col-8", "mt-3", "px-0"], ["nbInput", "", "type", "text", "placeholder", "Title", "fullWidth", "", "formControlName", "title"], [1, "col", "px-0", "mt-3"], ["nbInput", "", "placeholder", "Comment", "fullWidth", "", "formControlName", "comment"], [1, "mt-3"], ["type", "submit", "nbButton", "", "status", "info", 1, "mx-0", 3, "disabled"], [1, "comments", "w-100"], [1, "history-list"], ["class", "history-list-item", "style", "align-items: baseline", 4, "ngFor", "ngForOf"], [1, "history-list-item", 2, "align-items", "baseline"], [1, "d-flex"], [3, "src", "name", "value"], [1, "history-date", "history-item"], [1, "history-item", "history-title"], [1, "history-item", "history-comment"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], ["class", "pagination-container", 4, "ngIf"], [1, "pagination-container"], [3, "source"], [1, "grid"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "class", "action secondary mr-2", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "nbPopoverPlacement", "bottom", "nbPopoverTrigger", "noop", "size", "small", 1, "action", 3, "click", "nbPopover"], ["icon", "more-vertical-outline"], ["nbButton", "", "status", "info", "class", "action info mr-2", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["filled", "", "status", "basic", "class", "action select-nb mr-2 ml-1", 3, "placeholder", "selected", "disabled", "size", "selectedChange", 4, "ngIf"], ["filled", "", "status", "basic", "class", "action select-nb mr-2", 3, "placeholder", "selected", "disabled", "size", "selectedChange", 4, "ngIf"], ["ngxPermissionsOnly", "INVOICES_VIEW"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["icon", "download-outline"], ["nbButton", "", "status", "info", "size", "small", 1, "action", "info", "mr-2", 3, "click", "disabled"], ["icon", "swap"], ["filled", "", "status", "basic", 1, "action", "select-nb", "mr-2", "ml-1", 3, "selectedChange", "placeholder", "selected", "disabled", "size"], ["filled", "", "status", "basic", 1, "action", "select-nb", "mr-2", 3, "selectedChange", "placeholder", "selected", "disabled", "size"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "click", "disabled"], ["icon", "eye-outline", "pack", "eva"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", "mr-2", 3, "click", "disabled"], ["icon", "clipboard-outline"], [1, "popover-container"], [1, "d-flex", "justify-content-end", "w-100"], [1, "fas", "fa-times", 3, "click"], [1, "title"], ["class", "show-columns", 4, "ngIf"], [1, "per-page-container", "mr-3"], [1, "per-page"], ["class", "label per-page-label", 4, "ngIf"], ["type", "number", "nbInput", "", 1, "per-page-input", 3, "ngModelChange", "ngModel"], [1, "w-100", "d-flex", "justify-content-between", "align-items-center", "mr-3"], ["status", "warning", 3, "checkedChange"], ["status", "success", "nbButton", "", 1, "per-page-button", 3, "click"], [1, "show-columns"], [1, "show-columns-label", "label"], [1, "show-columns-select", 3, "selectedChange", "multiple", "selected", "placeholder"], ["class", "column", 3, "value", 4, "ngFor", "ngForOf"], [1, "column", 3, "value"], [1, "label", "per-page-label"], ["gauzyOutside", "", 1, "popover-container-action", "d-flex", "flex-column", 3, "clickOutside"], ["icon", "book-open-outline"], [1, "icon-text"], ["icon", "copy-outline"], ["icon", "upload-outline"], ["icon", "link-2-outline"], ["icon", "email-outline"], ["icon", "file-text-outline"], ["icon", "archive-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "danger", 3, "click", "disabled"]],
        template: function InvoicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 9)(1, "nb-card-header", 10)(2, "div", 11)(3, "h4")(4, "ngx-header-title", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(7, "ngx-date-range-title", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(8, "div")(9, "div")(10, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InvoicesComponent_Template_button_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx.toggleTableSettingsPopover());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(11, "nb-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(12, "nb-card-body", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(13, InvoicesComponent_ng_template_13_Template, 3, 1, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(14, "nb-tabset", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("changeTab", function InvoicesComponent_Template_nb_tabset_changeTab_14_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx.onChangeTab($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(15, "nb-tab", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(17, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(18, InvoicesComponent_ng_container_18_Template, 3, 1, "ng-container", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(19, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(20, "nb-tab", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(22, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(23, InvoicesComponent_ng_container_23_Template, 81, 57, "ng-container", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(24, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(25, "nb-tab", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(27, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(28, InvoicesComponent_ng_container_28_Template, 18, 15, "ng-container", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(29, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(30, InvoicesComponent_ng_template_30_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(32, InvoicesComponent_ng_template_32_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .DNE(34, InvoicesComponent_ng_template_34_Template, 8, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(36, InvoicesComponent_ng_template_36_Template, 18, 10, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(38, InvoicesComponent_ng_template_38_Template, 42, 32, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const settingsPopover_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(37);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(6, 15, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATES.HEADER" : "INVOICES_PAGE.HEADER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("format", "dddd, LL");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbPopover", settingsPopover_r32);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction0"] */ .lJ4(35, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(17, 19, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(16, 17, "INVOICES_PAGE.BROWSE")))("tabId", ctx.invoiceTabsEnum.ACTIONS);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(19, 21, ctx.nbTab$) === ctx.invoiceTabsEnum.ACTIONS);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(22, 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(21, 23, "INVOICES_PAGE.SEARCH")))("tabId", ctx.invoiceTabsEnum.SEARCH);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(24, 27, ctx.nbTab$) === ctx.invoiceTabsEnum.SEARCH);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(27, 31, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(26, 29, "INVOICES_PAGE.HISTORY")))("tabId", ctx.invoiceTabsEnum.HISTORY);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(29, 33, ctx.nbTab$) === ctx.invoiceTabsEnum.HISTORY);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_47__/* .TagsColorInputComponent */ .i, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbButtonComponent */ .YP2, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_48__/* .CardGridComponent */ .c, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbTooltipDirective */ .BmQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbTabsetComponent */ .Hsi, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbTabComponent */ .d3K, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbPopoverDirective */ .vs7, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbListComponent */ .krR, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbListItemComponent */ .TdD, ngx_permissions__WEBPACK_IMPORTED_MODULE_45__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_49__/* .CurrencyComponent */ .X, angular2_smart_table__WEBPACK_IMPORTED_MODULE_50__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_51__/* .PaginationV2Component */ .a, _packages_ui_core_shared_src_lib_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_52__/* .ContactSelectComponent */ .O, _angular_common__WEBPACK_IMPORTED_MODULE_53__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_53__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_53__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_53__/* .NgTemplateOutlet */ .T3, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgModel */ .vS, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_54__/* .AvatarComponent */ .f, _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_55__/* .DateRangeTitleComponent */ .D, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_56__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_57__/* .LayoutSelectorComponent */ .d, _packages_ui_core_shared_src_lib_directives_outside_directive__WEBPACK_IMPORTED_MODULE_58__/* .OutsideDirective */ .H, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbAccordionComponent */ .Ul7, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbAccordionItemComponent */ .vx8, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbAccordionItemHeaderComponent */ .Ig3, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbAccordionItemBodyComponent */ .LHJ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_53__/* .AsyncPipe */ .Jj, _angular_common__WEBPACK_IMPORTED_MODULE_53__/* .LowerCasePipe */ .GH, _angular_common__WEBPACK_IMPORTED_MODULE_53__/* .TitleCasePipe */ .PV, _packages_ui_core_shared_src_lib_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_59__/* .DateTimeFormatPipe */ .V],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card[_ngcontent-%COMP%], \nnb-card-body[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: none;\n}\n\n  .filter-item-list {\n  flex-wrap: nowrap !important;\n}\n  .group-by-wrapper {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n  .group-by-wrapper .label {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n}\n  .group-by-wrapper .select-button.select-button {\n  padding: 5px 12px !important;\n  border-radius: var(--select-rectangle-border-radius);\n  height: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  min-width: auto;\n  display: flex;\n  align-items: center;\n}\n  .group-by-wrapper .select-button.select-button nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n  .group-by-wrapper .select-button.select-button > span {\n  margin-right: 25px;\n}\n  .action-select {\n  border-radius: var(--select-rectangle-border-radius);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n  .action-select button.select-button {\n  background-color: var(--gauzy-card-1) !important;\n  border-radius: var(--select-rectangle-border-radius);\n  padding-top: 2px !important;\n  padding-bottom: 0px !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 12px !important;\n}\n  .action-select button.select-button nb-icon {\n  color: var(--text-basic-color) !important;\n}\n  .nb-options {\n  width: auto !important;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 20px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 2rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100% - 6rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .weekly-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .budget-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .item-body {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n\n.daily-time-report[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n.daily-time-report[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.table-row[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 86px;\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.table-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.columns-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n\n.responsive-table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[dir=rtl]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.avatar-wrapper-outer[_ngcontent-%COMP%] {\n  max-width: 95%;\n  padding-top: 5px;\n  display: inline-flex;\n}\n.avatar-wrapper-outer[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n@media only screen and (max-width: 991px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], \n   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], \n   .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .filters-range-wrapper {\n    flex-wrap: wrap !important;\n  }\n  [_nghost-%COMP%]     .filters .main-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n    .filter-item-list {\n    flex-wrap: wrap !important;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.popover-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  align-items: flex-start;\n  padding: 12.5px 14px 12.5px 18px;\n  border-radius: var(--border-radius);\n  width: 411px;\n}\n.popover-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n.popover-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.popover-container[_ngcontent-%COMP%]     input, \n.popover-container[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n.popover-container[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n.popover-container[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n.popover-container[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.popover-container[_ngcontent-%COMP%]     label, \n.popover-container[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.popover-container[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n.popover-container[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n.popover-container[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n.popover-container[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.popover-container-action[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-radius: var(--border-radius);\n}\n\n  nb-popover {\n  border-radius: 10px !important;\n}\n\n.per-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n\n.per-page-input[_ngcontent-%COMP%] {\n  width: 138px;\n}\n\n.per-page-label[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.per-page-container[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.show-columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 2rem;\n}\n.show-columns[_ngcontent-%COMP%]   .show-columns-select.size-medium[_ngcontent-%COMP%]:not(.full-width) {\n  max-width: unset;\n  margin-right: 9px;\n}\n\n.show-columns-label[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  position: absolute;\n  align-items: center;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n\n.show-columns-select[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.history-list[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.history-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.history-list-select[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 50%;\n}\n\n.history-action[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.history-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.content-active[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n  .arrow {\n  display: none;\n}\n\n.icon-text[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0px 1px 0px 1px;\n  margin-right: 20px;\n}\n\n.transition-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  border-radius: var(--button-rectangle-border-radius);\n}\n.transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0px 1px 0px 1px;\n  margin-right: 10px;\n}\n\n[_nghost-%COMP%]   .transition[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-in;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n[_nghost-%COMP%]   .transition.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: all 0.25s ease-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(110%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(-110%);\n}\n\n.nb-accordion-item-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.nb-accordion-item-header[_ngcontent-%COMP%]   .accordion-header-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  font-size: 10px;\n  color: var(--text-primary-disabled-color);\n}\n\nnb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border: 1px solid var(--border-basic-color-4);\n  border-radius: var(--input-rectangle-border-radius);\n  width: 1.75rem;\n  height: 1.75rem;\n}\n\nnb-accordion-item[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n}\n\nga-currency[_ngcontent-%COMP%]  nb-select .select-button {\n  border-radius: var(--input-rectangle-border-radius);\n}\n\n#inputStatus[_ngcontent-%COMP%]  .select-button {\n  border-radius: var(--input-rectangle-border-radius);\n  height: 42px;\n}\n\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 3px 9px 3px 3px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: fit-content;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  gap: 8px;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .image-container {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .image-container img[type=user] {\n  height: 18px;\n  width: 18px;\n}\n[_nghost-%COMP%]     ngx-avatar .inner-wrapper .link-text {\n  color: var(--text-primary-color);\n  font-weight: normal;\n}\n\nga-pagination[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.comments[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 15rem;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 85px;\n  resize: none;\n}\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[_ngcontent-%COMP%] {\n  background-color: #0088fe;\n}\n.action.danger[_ngcontent-%COMP%] {\n  color: var(--color-danger-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.primary[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%], \n.action.primary[_ngcontent-%COMP%]   .appearance-filled.status-basic[nbButtonToggle][_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  background: rgb(245, 245, 245);\n  height: 2rem;\n  border-radius: var(--button-rectangle-border-radius);\n}\n\n[_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]     .select-button {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px inset;\n}\n\n[_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .input-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--text-basic-color);\n  border-radius: 0.5rem;\n  height: 42px;\n  position: relative;\n}\n[_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]:hover, \n[_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary-hover);\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]:hover:focus, \n[_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]:hover:focus {\n  background: rgba(126, 126, 143, 0.05);\n}\n[_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]:active, \n[_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]:active {\n  background: rgba(126, 126, 143, 0.05);\n}\n[_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n[dir=ltr]   [_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n[dir=ltr]   [_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  right: 14px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .input-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n[dir=rtl]   [_nghost-%COMP%]   .input-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  left: 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  padding: 0;\n  background-color: unset;\n}\n\nnb-tab[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: 0 0 var(--border-radius) var(--border-radius);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%] {\n  overflow: unset;\n  width: 100%;\n  border: 0 0 var(--border-radius) var(--border-radius);\n  padding: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\n[_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   .custom-content-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.5rem);\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   .custom-content-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   .custom-content-body[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}\n[_nghost-%COMP%]   .remove-scroll[_ngcontent-%COMP%]   .custom-content-body[_ngcontent-%COMP%]   ga-card-grid[_ngcontent-%COMP%]     .grid-scroll-container {\n  max-height: 100%;\n}\n[_nghost-%COMP%]     .card {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n  border: unset;\n}\n[_nghost-%COMP%]     .card .card-header {\n  flex: 0 1 auto;\n  border-bottom: unset;\n}\n[_nghost-%COMP%]     .card .card-body {\n  flex: 1 1 auto;\n  overflow: auto;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem);\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     .card .card-footer {\n  border: unset;\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container {\n  height: 42px;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-opened > .ng-select-container:hover {\n  box-shadow: var(--gauzy-shadow) inset !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-focused .ng-select-container {\n  box-shadow: var(--gauzy-shadow) inset !important;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n  height: 42px;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container:hover {\n  box-shadow: var(--gauzy-shadow) inset;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input {\n  height: unset;\n}\n[_nghost-%COMP%]     nb-tabset .tab.active .tab-link {\n  background-color: var(--gauzy-card-2);\n  border: unset;\n  text-decoration: none;\n}\n[_nghost-%COMP%]     [nbInput].status-basic, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--background-basic-color-1);\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     input, \n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     label, \n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.comments-container[_ngcontent-%COMP%] {\n  margin-inline: 0;\n}\n.comments-container[_ngcontent-%COMP%]   nb-list[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(1) {\n  padding-top: 15px;\n  color: var(--gauzy-text-color-2);\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(1)   textarea[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2) {\n  background: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n  padding: 15px 6px 0 15px;\n  color: var(--gauzy-text-color-2);\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%] {\n  padding-left: 0;\n  position: relative;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%]   .history-item.history-date[_ngcontent-%COMP%] {\n  color: var(--text-hint-color);\n  margin-top: 3px;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%]   .history-item.history-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-transform: capitalize;\n  font-weight: bold;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%]   .history-item.history-comment[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 0.85rem;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%]   .history-item.history-comment.history-comment[_ngcontent-%COMP%]::first-letter {\n  text-transform: capitalize;\n}\n.comments-container[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%]:nth-child(2)   nb-list-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  border-bottom: thin solid var(--accordion-header-border-color);\n  position: absolute;\n  bottom: 0;\n}"]
      });
    }
  };
  return InvoicesComponent;
})();
InvoicesComponent = InvoicesComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_60__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_60__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormBuilder */ .ze, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_37__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_38__/* .DateRangePickerBuilderService */ .i7, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_40__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_41__/* .InvoicesService */ .U, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_42__/* .InvoiceItemService */ .q, _angular_router__WEBPACK_IMPORTED_MODULE_43__/* .Router */ .Ix, _nebular_theme__WEBPACK_IMPORTED_MODULE_39__/* .NbMenuService */ .BgA, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__/* .InvoiceEstimateHistoryService */ .f, ngx_permissions__WEBPACK_IMPORTED_MODULE_45__/* .NgxPermissionsService */ .$R, _angular_common_http__WEBPACK_IMPORTED_MODULE_46__/* .HttpClient */ .Qq])], InvoicesComponent);


/***/ }),

/***/ 71215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ InvoiceExpensesSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64411);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80477);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);












function InvoiceExpensesSelectorComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const expense_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", expense_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", expense_r1.purpose, " ");
  }
}
let InvoiceExpensesSelectorComponent = class InvoiceExpensesSelectorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultEditor */ .ny {
  constructor(store, expensesService) {
    super();
    this.store = store;
    this.expensesService = expensesService;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._loadExpenses()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _loadExpenses() {
    const tenantId = this.store.user.tenantId;
    const {
      id: organizationId
    } = this.organization;
    this.expensesService.getAll([], {
      typeOfExpense: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .ExpenseTypesEnum */ .DP.BILLABLE_TO_CONTACT,
      organizationId,
      tenantId
    }).then(({
      items
    }) => {
      this.expenses = items;
      //
      const expense = this.cell.getNewRawValue();
      this.expense = this.expenses.find(e => e.id === expense.id);
    });
  }
  /**
   *
   * @param $event
   */
  selectExpense($event) {
    this.cell.setValue($event);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceExpensesSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoiceExpensesSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ExpensesService */ .D));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoiceExpensesSelectorComponent,
      selectors: [["ng-component"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 3,
      vars: 5,
      consts: [["fullWidth", "", 3, "ngModelChange", "selectedChange", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function InvoiceExpensesSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function InvoiceExpensesSelectorComponent_Template_nb_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.expense, $event) || (ctx.expense = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InvoiceExpensesSelectorComponent_Template_nb_select_selectedChange_0_listener($event) {
            return ctx.selectExpense($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, InvoiceExpensesSelectorComponent_nb_option_2_Template, 2, 2, "nb-option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, "FORM.PLACEHOLDERS.SELECT_EXPENSE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.expense);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.expenses);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbOptionComponent */ .ZJ2, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgModel */ .vS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .D9],
      encapsulation: 2
    });
  }
};
InvoiceExpensesSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ExpensesService */ .D])], InvoiceExpensesSelectorComponent);


/***/ }),

/***/ 72320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ EstimatesComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _invoices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68497);





let EstimatesComponent = /*#__PURE__*/(() => {
  class EstimatesComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
    }
    ngOnInit() {}
    static {
      this.ɵfac = function EstimatesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EstimatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EstimatesComponent,
        selectors: [["ga-estimates"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 1,
        vars: 1,
        consts: [[3, "isEstimate"]],
        template: function EstimatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "ngx-invoices", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("isEstimate", true);
          }
        },
        dependencies: [_invoices_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoicesComponent */ .s],
        encapsulation: 2
      });
    }
  }
  return EstimatesComponent;
})();

/***/ }),

/***/ 73214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ InvoiceDownloadMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64411);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38546);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43277);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7784);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71924);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
/* harmony import */ var _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67592);















function InvoiceDownloadMutationComponent_h5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.DOWNLOAD.CONFIRMATION_INVOICE"), " ");
  }
}
function InvoiceDownloadMutationComponent_h5_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.DOWNLOAD.CONFIRMATION_ESTIMATE"), " ");
  }
}
let InvoiceDownloadMutationComponent = class InvoiceDownloadMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .K {
  constructor(dialogRef, translateService, toastrService, invoiceEstimateHistoryService, invoicesService, store) {
    super(translateService);
    this.dialogRef = dialogRef;
    this.translateService = translateService;
    this.toastrService = toastrService;
    this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    this.invoicesService = invoicesService;
    this.store = store;
  }
  closeDialog() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
      _this.dialogRef.close();
    })();
  }
  download() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
      const {
        id: invoiceId
      } = _this2.invoice;
      _this2.invoicesService.downloadInvoicePdf(invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(data => _this2.downloadFile(data)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => _this2.createInvoiceHistory()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => _this2.closeDialog()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(_this2)).subscribe(() => {
        _this2.toastrService.success(_this2.isEstimate ? 'INVOICES_PAGE.DOWNLOAD.ESTIMATE_DOWNLOAD' : 'INVOICES_PAGE.DOWNLOAD.INVOICE_DOWNLOAD');
      });
    })();
  }
  downloadFile(data) {
    const filename = `${this.isEstimate ? this.getTranslation('INVOICES_PAGE.ESTIMATE') : this.getTranslation('INVOICES_PAGE.INVOICE')}-${this.invoice.invoiceNumber}.pdf`;
    (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(data, filename);
  }
  createInvoiceHistory() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
      yield _this3.invoiceEstimateHistoryService.add({
        action: _this3.isEstimate ? _this3.getTranslation('INVOICES_PAGE.DOWNLOAD.ESTIMATE_DOWNLOAD') : _this3.getTranslation('INVOICES_PAGE.DOWNLOAD.INVOICE_DOWNLOAD'),
        invoice: _this3.invoice,
        invoiceId: _this3.invoice.id,
        user: _this3.store.user,
        userId: _this3.store.userId,
        organizationId: _this3.invoice.fromOrganization.id,
        tenantId: _this3.invoice.fromOrganization.tenantId
      });
    })();
  }
  static {
    this.ɵfac = function InvoiceDownloadMutationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoiceDownloadMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .InvoiceEstimateHistoryService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoiceDownloadMutationComponent,
      selectors: [["ga-invoice-download"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 13,
      vars: 9,
      consts: [[1, "pdf-preview-card"], [1, "d-flex"], [4, "ngIf"], [3, "invoice"], [1, "text-right"], ["status", "danger", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click"]],
      template: function InvoiceDownloadMutationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(2, InvoiceDownloadMutationComponent_h5_2_Template, 3, 3, "h5", 2)(3, InvoiceDownloadMutationComponent_h5_3_Template, 3, 3, "h5", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(5, "ga-invoice-pdf", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-footer", 4)(7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceDownloadMutationComponent_Template_button_click_7_listener() {
            return ctx.closeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceDownloadMutationComponent_Template_button_click_10_listener() {
            return ctx.download();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.isEstimate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isEstimate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("invoice", ctx.invoice);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(9, 5, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(12, 7, "BUTTONS.DOWNLOAD"), " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .YP2, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .bT, _invoice_pdf_invoice_pdf_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoicePdfComponent */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .D9],
      encapsulation: 2
    });
  }
};
InvoiceDownloadMutationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .ybQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .InvoiceEstimateHistoryService */ .f, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .InvoicesService */ .U, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il])], InvoiceDownloadMutationComponent);


/***/ }),

/***/ 80490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ InvoiceEditComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36950);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52345);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63570);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(15480);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31652);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5712);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7784);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(35388);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3289);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64612);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(62177);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(64251);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(3456);
/* harmony import */ var _packages_ui_core_shared_src_lib_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(84597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(90910);

































function InvoiceEditComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 49)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(5, 1, "POP_UPS.DUPLICATE"));
  }
}
function InvoiceEditComponent_ng_template_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(1, "div")(2, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceEditComponent_ng_template_3_ng_container_6_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.payments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(5, 1, "BUTTONS.PAYMENTS"), " ");
  }
}
function InvoiceEditComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 50)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(6, InvoiceEditComponent_ng_template_3_ng_container_6_Template, 6, 3, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(5, 2, ctx_r2.isEstimate ? "INVOICES_PAGE.EDIT_ESTIMATE" : "INVOICES_PAGE.EDIT_INVOICE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.isEstimate);
  }
}
function InvoiceEditComponent_nb_option_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const discountTaxType_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("value", discountTaxType_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE." + discountTaxType_r4), " ");
  }
}
function InvoiceEditComponent_nb_option_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const discountTaxType_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("value", discountTaxType_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE." + discountTaxType_r5), " ");
  }
}
function InvoiceEditComponent_nb_option_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const discountTaxType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("value", discountTaxType_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE." + discountTaxType_r6), " ");
  }
}
function InvoiceEditComponent_div_119_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r2.smartTableSource);
  }
}
function InvoiceEditComponent_div_119_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 6)(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "INVOICES_PAGE.ALREADY_PAID"), ": ", ctx_r2.currency.value, " ", ctx_r2.alreadyPaid.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(6, 8, "INVOICES_PAGE.AMOUNT_DUE"), ": ", ctx_r2.currency.value, " ", ctx_r2.amountDue.toFixed(2), " ");
  }
}
function InvoiceEditComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 54)(2, "angular2-smart-table", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("createConfirm", function InvoiceEditComponent_div_119_Template_angular2_smart_table_createConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onCreateConfirm($event));
    })("edit", function InvoiceEditComponent_div_119_Template_angular2_smart_table_edit_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onEditRowSelect($event));
    })("editConfirm", function InvoiceEditComponent_div_119_Template_angular2_smart_table_editConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onEditConfirm($event));
    })("deleteConfirm", function InvoiceEditComponent_div_119_Template_angular2_smart_table_deleteConfirm_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onDeleteConfirm($event));
    })("userRowSelect", function InvoiceEditComponent_div_119_Template_angular2_smart_table_userRowSelect_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(4, InvoiceEditComponent_div_119_ng_container_4_Template, 2, 1, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(5, "div", 57)(6, "div", 6)(7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(10, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(13, InvoiceEditComponent_div_119_div_13_Template, 7, 10, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(9, 10, "INVOICES_PAGE.SUBTOTAL"), ": ", ctx_r2.currency.value, " ", ctx_r2.subtotal.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(12, 12, "INVOICES_PAGE.TOTAL"), ": ", ctx_r2.currency.value, " ", ctx_r2.total.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isRemainingAmount || ctx_r2.invoice.hasRemainingAmountInvoiced);
  }
}
function InvoiceEditComponent_button_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceEditComponent_button_121_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.CANCEL"), " ");
  }
}
function InvoiceEditComponent_ng_template_131_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(1, "div", 63)(2, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(6, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(8, "nb-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r2.selectedItem && ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r2.selectedItem && ctx_r2.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(7, 6, "BUTTONS.DELETE"));
  }
}
function InvoiceEditComponent_ng_template_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(0, InvoiceEditComponent_ng_template_131_ng_container_0_Template, 9, 8, "ng-container", 62);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx_r2.INVOICES_EDIT);
  }
}
function InvoiceEditComponent_ng_template_133_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.ADD"), " ");
  }
}
function InvoiceEditComponent_ng_template_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(0, InvoiceEditComponent_ng_template_133_ng_container_0_Template, 5, 3, "ng-container", 62);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx_r2.INVOICES_EDIT);
  }
}
let InvoiceEditComponent = class InvoiceEditComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .PaginationFilterBaseComponent */ .t {
  get currency() {
    return this.form.get('currency');
  }
  set isEstimate(val) {
    this._isEstimate = val;
  }
  get isEstimate() {
    return this._isEstimate;
  }
  constructor(store, router, fb, invoiceItemService, translate, invoicesService, toastrService, route, dialogService, invoiceEstimateHistoryService, translatableService, organizationSettingService) {
    super(translate);
    this.store = store;
    this.router = router;
    this.fb = fb;
    this.invoiceItemService = invoiceItemService;
    this.translate = translate;
    this.invoicesService = invoicesService;
    this.toastrService = toastrService;
    this.route = route;
    this.dialogService = dialogService;
    this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    this.translatableService = translatableService;
    this.organizationSettingService = organizationSettingService;
    this.shouldLoadTable = false;
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__/* .LocalDataSource */ .h0();
    this.itemsToDelete = [];
    this.invoiceItems = [];
    this.subtotal = 0;
    this.total = 0;
    this.discountTaxTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .DiscountTaxTypeEnum */ .Ai);
    this.selectedItem = {
      data: underscore__WEBPACK_IMPORTED_MODULE_3__/* .any */ .bz,
      isSelected: false
    };
    this._isEstimate = false;
  }
  ngOnInit() {
    this._applyTranslationOnSmartTable();
    this.initializeForm();
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(params => this.invoiceId = params.get('id')), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
    this.route.queryParamMap.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe(params => {
      const paramsObj = params['params'];
      if (Object.keys(paramsObj).length) {
        this.isRemainingAmount = params.get('remainingAmount');
      }
    });
    this.invoicesService.currentData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(response => this.duplicate = response), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
    this.selectedLanguage = this.translateService.currentLang;
    this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe(languageEvent => {
      this.selectedLanguage = languageEvent.lang;
    });
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(organization => !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.loading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.getInvoiceById()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => {
      const {
        activePage,
        itemsPerPage
      } = this.getPagination();
      this.smartTableSource.setPaging(activePage, itemsPerPage, false);
      this.smartTableSource.refresh();
    })).subscribe();
    this.pagination$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  getInvoiceById() {
    var _this = this;
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.invoicesService.getById(this.invoiceId, ['invoiceItems', 'invoiceItems.employee', 'invoiceItems.employee.user', 'invoiceItems.project', 'invoiceItems.product', 'invoiceItems.expense', 'invoiceItems.task', 'tags', 'toContact', 'fromOrganization'], {
      tenantId,
      organizationId
    }).then(/*#__PURE__*/function () {
      var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* (invoice) {
        _this.invoice = invoice;
        _this.invoiceItems = invoice.invoiceItems;
        _this.selectedOrganizationContact = invoice.toContact;
        _this.discountAfterTax = invoice.fromOrganization.discountAfterTax;
        yield _this._loadOrganizationData();
        _this.updateValueAndValidity(invoice);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).finally(() => {
      this.loading = false;
    });
  }
  initializeForm() {
    this.form = this.fb.group({
      id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.required],
      invoiceDate: [this.organizationSettingService.getDateFromOrganizationSettings(), _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.required],
      invoiceNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.min(1)])],
      dueDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.required],
      discountValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.min(0)])],
      tax: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.min(0)])],
      tax2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.min(0)])],
      terms: [],
      organizationContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.required],
      currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .Validators */ .k0.required],
      discountType: [],
      taxType: [],
      tax2Type: [],
      tags: []
    });
  }
  updateValueAndValidity(invoice) {
    this.form.setValue({
      id: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
      invoiceDate: new Date(invoice.invoiceDate),
      dueDate: new Date(invoice.dueDate),
      discountValue: invoice.discountValue,
      tax: invoice.tax,
      tax2: invoice.tax2,
      terms: invoice.terms,
      organizationContact: invoice.toContact,
      currency: invoice.currency,
      discountType: invoice.discountType,
      taxType: invoice.taxType,
      tax2Type: invoice.tax2Type,
      tags: invoice.tags
    });
    this.form.updateValueAndValidity();
  }
  loadSmartTable() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      const pagination = _this2.getPagination();
      _this2.settingsSmartTable = {
        selectedRowIndex: -1,
        mode: 'external',
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmCreate: true
        },
        edit: {
          editButtonContent: '<i class="nb-edit"></i>',
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmSave: true
        },
        delete: {
          deleteButtonContent: '<i class="nb-trash"></i>',
          confirmDelete: true
        },
        columns: {}
      };
      let price = {};
      let quantity = {};
      switch (_this2.invoice.invoiceType) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
          _this2.settingsSmartTable['columns']['selectedItem'] = {
            title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.EMPLOYEE'),
            width: '13%',
            editor: {
              type: 'custom',
              component: _table_components__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceEmployeesSelectorComponent */ .PA
            },
            valuePrepareFunction: employee => {
              return employee?.user?.name || '';
            }
          };
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
          _this2.settingsSmartTable['columns']['selectedItem'] = {
            title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PROJECT'),
            width: '13%',
            editor: {
              type: 'custom',
              component: _table_components__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceProjectsSelectorComponent */ .QA
            },
            valuePrepareFunction: project => {
              return project?.name || '';
            }
          };
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
          _this2.settingsSmartTable['columns']['selectedItem'] = {
            title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.TASK'),
            width: '13%',
            editor: {
              type: 'custom',
              component: _table_components__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceTasksSelectorComponent */ .ar
            },
            valuePrepareFunction: task => {
              return task?.title || '';
            }
          };
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
          _this2.settingsSmartTable['columns']['selectedItem'] = {
            title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PRODUCT'),
            width: '13%',
            editor: {
              type: 'custom',
              component: _table_components__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceProductsSelectorComponent */ .Mn
            },
            valuePrepareFunction: product => {
              const translatedName = _this2.translatableService.getTranslatedProperty(product, 'name');
              return translatedName || '';
            }
          };
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES:
          _this2.settingsSmartTable['columns']['selectedItem'] = {
            title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.EXPENSE'),
            width: '13%',
            editor: {
              type: 'custom',
              component: _table_components__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceExpensesSelectorComponent */ .Ft
            },
            valuePrepareFunction: expense => {
              return expense?.purpose || '';
            }
          };
          break;
        default:
          break;
      }
      if (_this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS || _this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS || _this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS) {
        price = {
          title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.HOURLY_RATE'),
          type: 'text',
          isFilterable: false,
          width: '13%',
          valuePrepareFunction: value => {
            return `${_this2.currency.value} ${value}`;
          }
        };
        quantity = {
          title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.HOURS_WORKED'),
          type: 'text',
          isFilterable: false,
          width: '13%'
        };
      } else if (_this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.DETAILED_ITEMS || _this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS || _this2.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES) {
        price = {
          title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PRICE'),
          type: 'text',
          isFilterable: false,
          width: '13%',
          valuePrepareFunction: (cell, row) => {
            return `${_this2.currency.value} ${cell}`;
          }
        };
        quantity = {
          title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.QUANTITY'),
          type: 'text',
          isFilterable: false,
          width: '13%'
        };
      }
      _this2.settingsSmartTable['columns']['description'] = {
        title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.DESCRIPTION'),
        type: 'text',
        width: '13%'
      };
      _this2.settingsSmartTable['columns']['price'] = price;
      _this2.settingsSmartTable['columns']['quantity'] = quantity;
      _this2.settingsSmartTable['columns']['totalValue'] = {
        title: _this2.getTranslation('INVOICES_PAGE.INVOICE_ITEM.TOTAL_VALUE'),
        type: 'text',
        addable: false,
        editable: false,
        valuePrepareFunction: (value, cell) => {
          const row = cell.getRow().getData();
          return `${_this2.currency.value} ${row.quantity * row.price}`;
        },
        isFilterable: false,
        width: '13%'
      };
      if (_this2.organization && _this2.organization.separateInvoiceItemTaxAndDiscount) {
        _this2.settingsSmartTable['columns']['applyTax'] = {
          title: _this2.getTranslation('INVOICES_PAGE.APPLY_TAX'),
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceApplyTaxDiscountComponent */ .BC
          },
          isFilterable: false,
          width: '10%',
          valuePrepareFunction: isApplied => {
            return isApplied ? _this2.getTranslation('INVOICES_PAGE.APPLIED') : _this2.getTranslation('INVOICES_PAGE.NOT_APPLIED');
          }
        };
        _this2.settingsSmartTable['columns']['applyDiscount'] = {
          title: _this2.getTranslation('INVOICES_PAGE.APPLY_DISCOUNT'),
          editor: {
            type: 'custom',
            component: _table_components__WEBPACK_IMPORTED_MODULE_2__/* .InvoiceApplyTaxDiscountComponent */ .BC
          },
          isFilterable: false,
          width: '10%',
          valuePrepareFunction: isApplied => {
            return isApplied ? _this2.getTranslation('INVOICES_PAGE.APPLIED') : _this2.getTranslation('INVOICES_PAGE.NOT_APPLIED');
          }
        };
      }
    })();
  }
  /**
   *
   * @param event
   */
  onEditRowSelect({
    row
  }) {
    row.isInEditing = true;
  }
  _loadOrganizationData() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (!_this3.organization) {
        return;
      }
      _this3.loadSmartTable();
      yield _this3.loadInvoiceItemData();
      yield _this3.calculateTotal();
    })();
  }
  updateInvoice(status, sendTo) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      const tableData = yield _this4.smartTableSource.getAll();
      if (tableData.length) {
        const invoiceData = _this4.form.value;
        if (!invoiceData.invoiceDate || !invoiceData.dueDate || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .compareDate */ .SE)(invoiceData.invoiceDate, invoiceData.dueDate)) {
          _this4.toastrService.danger('INVOICES_PAGE.INVALID_DATES');
          return;
        }
        const {
          tenantId
        } = _this4.store.user;
        const {
          id: organizationId
        } = _this4.organization;
        const invoice = yield _this4.invoicesService.getAll({
          invoiceNumber: invoiceData.invoiceNumber,
          organizationId,
          tenantId
        });
        if (invoice.items.length && +invoice.items[0].invoiceNumber !== +_this4.invoice.invoiceNumber) {
          _this4.toastrService.danger('INVOICES_PAGE.INVOICE_NUMBER_DUPLICATE');
          return;
        }
        const {
          invoiceDate
        } = _this4.form.getRawValue();
        yield _this4.invoicesService.update(_this4.invoice.id, {
          invoiceNumber: invoiceData.invoiceNumber,
          invoiceDate: moment__WEBPACK_IMPORTED_MODULE_0__(invoiceData.invoiceDate).startOf('day').toDate(),
          dueDate: moment__WEBPACK_IMPORTED_MODULE_0__(invoiceData.dueDate).endOf('day').toDate(),
          currency: _this4.currency.value,
          discountValue: invoiceData.discountValue,
          discountType: invoiceData.discountType,
          tax: invoiceData.tax,
          tax2: invoiceData.tax2,
          taxType: invoiceData.taxType,
          tax2Type: invoiceData.tax2Type,
          terms: invoiceData.terms,
          totalValue: +_this4.total.toFixed(2),
          invoiceType: _this4.invoice.invoiceType,
          organizationContactId: invoiceData.organizationContact.id,
          toContact: invoiceData.organizationContact,
          organizationId,
          tenantId,
          tags: invoiceData.tags,
          status: status,
          sentTo: sendTo,
          hasRemainingAmountInvoiced: _this4.isRemainingAmount || _this4.invoice.hasRemainingAmountInvoiced ? true : false,
          alreadyPaid: _this4.invoice.alreadyPaid,
          amountDue: _this4.invoice.amountDue
        });
        const invoiceItems = [];
        for (const invoiceItem of tableData) {
          const id = invoiceItem.selectedItem ? invoiceItem.selectedItem.id : null;
          const itemToAdd = {
            description: invoiceItem.description,
            price: Number(invoiceItem.price),
            quantity: Number(invoiceItem.quantity),
            totalValue: invoiceItem.totalValue,
            invoiceId: _this4.invoice.id,
            applyTax: invoiceItem.applyTax,
            applyDiscount: invoiceItem.applyDiscount,
            organizationId,
            tenantId
          };
          switch (_this4.invoice.invoiceType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
              itemToAdd['employeeId'] = id;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
              itemToAdd['projectId'] = id;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
              itemToAdd['taskId'] = id;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
              itemToAdd['productId'] = id;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES:
              itemToAdd['expenseId'] = id;
              break;
            default:
              break;
          }
          invoiceItems.push(itemToAdd);
        }
        yield _this4.invoiceItemService.createBulk(_this4.invoice.id, invoiceItems);
        yield _this4.invoiceEstimateHistoryService.add({
          action: _this4.isEstimate ? _this4.getTranslation('INVOICES_PAGE.INVOICES_EDIT_ESTIMATE') : _this4.getTranslation('INVOICES_PAGE.INVOICES_EDIT_INVOICE'),
          invoice: _this4.invoice,
          invoiceId: _this4.invoice.id,
          user: _this4.store.user,
          userId: _this4.store.userId,
          organization: _this4.organization,
          organizationId,
          tenantId
        });
        if (_this4.isRemainingAmount) {
          yield _this4.invoiceEstimateHistoryService.add({
            action: _this4.getTranslation('INVOICES_PAGE.INVOICED_REMAINING_AMOUNT'),
            invoice: _this4.invoice,
            invoiceId: _this4.invoice.id,
            user: _this4.store.user,
            userId: _this4.store.userId,
            organization: _this4.invoice.fromOrganization,
            organizationId: _this4.invoice.fromOrganization.id
          });
        }
        if (_this4.isEstimate) {
          _this4.toastrService.success('INVOICES_PAGE.INVOICES_EDIT_ESTIMATE');
          _this4.router.navigate(['/pages/accounting/invoices/estimates'], {
            queryParams: {
              date: moment__WEBPACK_IMPORTED_MODULE_0__(invoiceDate).format('MM-DD-YYYY')
            }
          });
        } else {
          _this4.toastrService.success('INVOICES_PAGE.INVOICES_EDIT_INVOICE');
          _this4.router.navigate(['/pages/accounting/invoices'], {
            queryParams: {
              date: moment__WEBPACK_IMPORTED_MODULE_0__(invoiceDate).format('MM-DD-YYYY')
            }
          });
        }
      } else {
        _this4.toastrService.warning('INVOICES_PAGE.INVOICE_ITEM.NO_ITEMS');
      }
    })();
  }
  sendToContact() {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (_this5.form.value.organizationContact.id) {
        yield _this5.updateInvoice('SENT', _this5.form.value.organizationContact.id);
        yield _this5.invoiceEstimateHistoryService.add({
          action: _this5.isEstimate ? _this5.getTranslation('INVOICES_PAGE.ESTIMATE_SENT_TO', {
            name: _this5.form.value.organizationContact.name
          }) : _this5.getTranslation('INVOICES_PAGE.INVOICE_SENT_TO', {
            name: _this5.form.value.organizationContact.name
          }),
          invoice: _this5.invoice,
          invoiceId: _this5.invoice.id,
          user: _this5.store.user,
          userId: _this5.store.userId,
          organization: _this5.organization,
          organizationId: _this5.organization.id,
          tenantId: _this5.organization.tenantId
        });
      } else {
        _this5.toastrService.warning('INVOICES_PAGE.SEND.NOT_LINKED');
      }
    })();
  }
  sendViaEmail() {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      const tableData = yield _this6.smartTableSource.getAll();
      if (tableData.length) {
        const invoiceData = _this6.form.value;
        if (!invoiceData.invoiceDate || !invoiceData.dueDate || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .compareDate */ .SE)(invoiceData.invoiceDate, invoiceData.dueDate)) {
          _this6.toastrService.danger('INVOICES_PAGE.INVALID_DATES');
          return;
        }
        const {
          tenantId
        } = _this6.store.user;
        const {
          id: organizationId
        } = _this6.organization;
        const invoiceExists = yield _this6.invoicesService.getAll({
          invoiceNumber: invoiceData.invoiceNumber,
          organizationId,
          tenantId
        });
        if (invoiceExists.items.length && +invoiceExists.items[0].invoiceNumber !== +_this6.invoice.invoiceNumber) {
          _this6.toastrService.danger('INVOICES_PAGE.INVOICE_NUMBER_DUPLICATE');
          return;
        }
        const invoice = {
          id: invoiceData.id,
          invoiceNumber: invoiceData.invoiceNumber,
          invoiceDate: invoiceData.invoiceDate,
          dueDate: invoiceData.dueDate,
          currency: _this6.currency.value,
          discountValue: invoiceData.discountValue,
          discountType: invoiceData.discountType,
          tax: invoiceData.tax,
          tax2: invoiceData.tax2,
          taxType: invoiceData.taxType,
          tax2Type: invoiceData.tax2Type,
          terms: invoiceData.terms,
          paid: false,
          totalValue: +_this6.total.toFixed(2),
          toContact: invoiceData.organizationContact,
          organizationContactId: invoiceData.organizationContact.id,
          fromOrganization: _this6.organization,
          organizationId,
          tenantId,
          invoiceType: _this6.invoice.invoiceType,
          tags: invoiceData.tags,
          isEstimate: _this6.isEstimate,
          alreadyPaid: _this6.invoice.alreadyPaid,
          amountDue: _this6.invoice.amountDue,
          hasRemainingAmountInvoiced: _this6.isRemainingAmount || _this6.invoice.hasRemainingAmountInvoiced ? true : false,
          invoiceItems: []
        };
        const invoiceItems = [];
        for (const invoiceItem of tableData) {
          const itemToAdd = {
            description: invoiceItem.description,
            price: invoiceItem.price,
            quantity: invoiceItem.quantity,
            totalValue: invoiceItem.totalValue,
            applyTax: invoiceItem.applyTax,
            applyDiscount: invoiceItem.applyDiscount,
            organizationId,
            tenantId
          };
          switch (_this6.invoice.invoiceType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
              itemToAdd['employeeId'] = invoiceItem.selectedItem;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
              itemToAdd['projectId'] = invoiceItem.selectedItem;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
              itemToAdd['taskId'] = invoiceItem.selectedItem;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
              itemToAdd['productId'] = invoiceItem.selectedItem;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES:
              itemToAdd['expenseId'] = invoiceItem.selectedItem;
              break;
            default:
              break;
          }
          invoiceItems.push(itemToAdd);
        }
        invoice.invoiceItems = invoiceItems;
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(_this6.dialogService.open(_invoice_email_invoice_email_mutation_component__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceEmailMutationComponent */ .q, {
          context: {
            invoice: invoice,
            isEstimate: _this6.isEstimate
          }
        }).onClose);
        if (result) {
          yield _this6.updateInvoice('SENT');
        }
      } else {
        _this6.toastrService.danger('INVOICES_PAGE.INVOICE_ITEM.NO_ITEMS');
      }
    })();
  }
  loadInvoiceItemData() {
    var _this7 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      const items = [];
      let data;
      let subtotal = 0;
      for (const item of _this7.invoiceItems) {
        data = {
          description: item.description,
          quantity: item.quantity,
          price: item.price,
          totalValue: +item.totalValue,
          id: item.id,
          applyTax: item.applyTax,
          applyDiscount: item.applyDiscount
        };
        switch (_this7.invoice.invoiceType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
            data['selectedItem'] = item.employee;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
            data['selectedItem'] = item.project;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
            data['selectedItem'] = item.task;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
            data['selectedItem'] = item.product;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES:
            data['selectedItem'] = item.expense;
            break;
          default:
            break;
        }
        subtotal += +item.totalValue;
        items.push(data);
      }
      _this7.subtotal = subtotal;
      _this7.smartTableSource.load(items);
      _this7.shouldLoadTable = true;
    })();
  }
  calculateTotal() {
    var _this8 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      const tableData = yield _this8.smartTableSource.getAll();
      const discountValue = _this8.form.value.discountValue && _this8.form.value.discountValue > 0 ? _this8.form.value.discountValue : 0;
      const tax = _this8.form.value.tax && _this8.form.value.tax > 0 ? _this8.form.value.tax : 0;
      const tax2 = _this8.form.value.tax2 && _this8.form.value.tax2 > 0 ? _this8.form.value.tax2 : 0;
      let totalDiscount = 0;
      let totalTax = 0;
      for (const item of tableData) {
        if (item.applyTax) {
          switch (_this8.form.value.taxType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .DiscountTaxTypeEnum */ .Ai.PERCENT:
              totalTax += item.totalValue * (+tax / 100);
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .DiscountTaxTypeEnum */ .Ai.FLAT_VALUE:
              totalTax += +tax;
              break;
            default:
              totalTax = 0;
              break;
          }
          switch (_this8.form.value.tax2Type) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .DiscountTaxTypeEnum */ .Ai.PERCENT:
              totalTax += item.totalValue * (+tax2 / 100);
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .DiscountTaxTypeEnum */ .Ai.FLAT_VALUE:
              totalTax += +tax2;
              break;
            default:
              totalTax = 0;
              break;
          }
        }
        if (item.applyDiscount) {
          switch (_this8.form.value.discountType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .DiscountTaxTypeEnum */ .Ai.PERCENT:
              if (!_this8.discountAfterTax) {
                totalDiscount += item.totalValue * (+discountValue / 100);
              }
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .DiscountTaxTypeEnum */ .Ai.FLAT_VALUE:
              totalDiscount += +discountValue;
              break;
            default:
              totalDiscount = 0;
              break;
          }
        }
      }
      if (_this8.discountAfterTax && _this8.form.value.discountType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .DiscountTaxTypeEnum */ .Ai.PERCENT) {
        totalDiscount = (_this8.subtotal + totalTax) * (+discountValue / 100);
      }
      _this8.total = _this8.subtotal - totalDiscount + totalTax;
      if (_this8.total < 0) {
        _this8.total = 0;
      }
      _this8.alreadyPaid = +_this8.invoice.alreadyPaid;
      _this8.amountDue = +_this8.total - +_this8.alreadyPaid;
      _this8.setPagination({
        ..._this8.getPagination(),
        totalItems: _this8.smartTableSource.count()
      });
      _this8.refreshPagination();
    })();
  }
  onCurrencyChange($event) {
    var _this9 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      const tableData = yield _this9.smartTableSource.getAll();
      _this9.smartTableSource.load(tableData);
    })();
  }
  selectOrganizationContact($event) {
    this.selectedOrganizationContact = $event;
  }
  _applyTranslationOnSmartTable() {
    this.translate.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe(() => {
      this.loadSmartTable();
    });
  }
  onCreateConfirm(event) {
    var _this0 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (!isNaN(event.newData.quantity) && !isNaN((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price)) && event.newData.quantity && event.newData.price && event.newData.description && (event.newData.selectedItem || _this0.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.DETAILED_ITEMS)) {
        const newData = {
          ...event.newData,
          price: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price)
        };
        const itemTotal = +event.newData.quantity * +(0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price);
        newData.totalValue = itemTotal;
        _this0.subtotal += itemTotal;
        yield event.confirm.resolve(newData);
        yield _this0.calculateTotal();
      } else {
        _this0.toastrService.danger('INVOICES_PAGE.INVOICE_ITEM.INVALID_ITEM');
        event.confirm.reject();
      }
    })();
  }
  /**
   *
   * @param event
   */
  onEditConfirm(event) {
    var _this1 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (!isNaN(event.newData.quantity) && !isNaN((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price)) && event.newData.quantity && event.newData.price && event.newData.description && (event.newData.selectedItem || _this1.invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .InvoiceTypeEnum */ .RU.DETAILED_ITEMS)) {
        const newData = {
          ...event.newData,
          price: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price)
        };
        const oldValue = +event.data.quantity * +event.data.price;
        const newValue = +newData.quantity * +(0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .extractNumber */ .T_)(event.newData.price);
        newData.totalValue = newValue;
        if (newValue > oldValue) {
          _this1.subtotal += newValue - oldValue;
        } else if (oldValue > newValue) {
          _this1.subtotal -= oldValue - newValue;
        }
        yield event.confirm.resolve(newData);
        yield _this1.calculateTotal();
      } else {
        _this1.toastrService.danger('INVOICES_PAGE.INVOICE_ITEM.INVALID_ITEM');
        event.confirm.reject();
      }
    })();
  }
  onDeleteConfirm(event) {
    var _this10 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (event.data.id) {
        _this10.itemsToDelete.push(event.data.id);
      }
      _this10.subtotal -= +event.data.quantity * +event.data.price;
      //await event.confirm.resolve(event.data);
      yield _this10.calculateTotal();
    })();
  }
  cancel() {
    if (this.isEstimate) {
      this.router.navigate(['/pages/accounting/invoices/estimates']);
    } else {
      this.router.navigate(['/pages/accounting/invoices']);
    }
  }
  applyDiscountAfterTax($event) {
    var _this11 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      _this11.discountAfterTax = $event;
      _this11.calculateTotal();
    })();
  }
  payments() {
    if (this.invoice) {
      this.router.navigate([`/pages/accounting/invoices/payments/${this.invoice.id}`]);
    }
  }
  selectedTagsEvent(selectedTags) {
    this.form.get('tags').setValue(selectedTags);
    this.form.get('tags').updateValueAndValidity();
  }
  selectItem(item) {
    this.selectedItem = item;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoiceEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .InvoiceItemService */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .InvoiceEstimateHistoryService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatableService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .OrganizationSettingService */ .r));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoiceEditComponent,
      selectors: [["ga-invoice-edit"]],
      inputs: {
        isEstimate: "isEstimate"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 135,
      vars: 107,
      consts: [["headerTemplate", ""], ["invoiceEstimateDatePicker", ""], ["dueDatePicker", ""], ["actionButtons", ""], ["visible", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "main", "card-scroll", 3, "nbSpinner"], [1, "d-flex"], ["class", "card-header-title", 4, "ngIf", "ngIfElse"], [1, "body", "content"], [1, "form", 3, "formGroup"], [1, "block-wrap"], [1, "block", "mt-2"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "inputInvoiceNumber", 1, "label"], ["type", "number", "nbInput", "", "formControlName", "invoiceNumber", "id", "inputInvoiceNumber", "fullWidth", "", 3, "min", "placeholder"], ["for", "inputOrganizationContact", 1, "label"], ["formControlName", "organizationContact", 3, "onChanged", "addTag", "placeholder"], ["for", "inputInvoiceEstimateDate", 1, "label"], ["formControlName", "invoiceDate", "type", "text", "nbInput", "", "id", "inputInvoiceEstimateDate", "fullWidth", "", "required", "", 3, "placeholder", "nbDatepicker"], ["for", "inputDueDate", 1, "label"], ["nbInput", "", "formControlName", "dueDate", "id", "inputDueDate", "fullWidth", "", 3, "placeholder", "nbDatepicker"], [3, "optionChange", "formControl"], [1, "col-sm-12"], ["for", "inputTerms", 1, "label"], ["nbInput", "", "formControlName", "terms", "id", "inputTerms", "fullWidth", "", 3, "placeholder"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "block"], [1, "row", "group", "d-flex", "flex-column"], [1, "label", "label-group"], ["for", "inputDiscountValue", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "discountValue", "id", "inputDiscountValue", "fullWidth", "", 3, "ngModelChange", "placeholder", "min"], ["for", "inputDiscountType", 1, "label"], ["formControlName", "discountType", "id", "inputDiscountType", "fullWidth", "", 3, "ngModelChange", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "inputTax", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "tax", "id", "inputTax", "fullWidth", "", 3, "ngModelChange", "placeholder", "min"], ["for", "inputTax2", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "tax2", "id", "inputTax2", "fullWidth", "", 3, "ngModelChange", "placeholder", "min"], ["for", "inputTaxType", 1, "label"], ["formControlName", "taxType", "id", "inputTaxType", "fullWidth", "", 3, "ngModelChange", "placeholder"], ["formControlName", "tax2Type", "id", "inputTaxType", "fullWidth", "", 3, "ngModelChange", "placeholder"], [1, "discountCheckbox"], [3, "checkedChange", "checked"], [4, "ngIf"], ["status", "danger", "class", "mr-3", "status", "basic", "size", "small", "outline", "", "nbButton", "", 3, "click", 4, "ngIf"], ["size", "small", "status", "primary", "nbButton", "", 1, "gray", 3, "click", "disabled"], ["status", "success", "size", "small", "nbButton", "", 1, "mr-3", 3, "click", "disabled"], [1, "card-header-title"], [1, "card-header-title", "d-flex", "justify-content-between", "w-100"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "secondary", "mr-2", 3, "click"], ["icon", "clipboard-outline"], [3, "value"], [1, "table-scroll-container", "custom-table"], [1, "table", 2, "cursor", "pointer", 3, "createConfirm", "edit", "editConfirm", "deleteConfirm", "userRowSelect", "settings", "source"], [1, "pagination-container"], [1, "total", "d-flex"], [1, "total-item"], ["class", "d-flex", 4, "ngIf"], [3, "source"], ["status", "danger", "status", "basic", "size", "small", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], [4, "ngxPermissionsOnly"], [1, "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "status", "success", "size", "small"], ["icon", "plus-outline"]],
      template: function InvoiceEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 5)(1, "nb-card-header", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(2, InvoiceEditComponent_div_2_Template, 6, 3, "div", 7)(3, InvoiceEditComponent_ng_template_3_Template, 7, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body", 8)(6, "form", 9)(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "div", 13)(11, "div", 14)(12, "label", 15)(13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(16, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(18, "div", 13)(19, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(22, "ga-contact-select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("onChanged", function InvoiceEditComponent_Template_ga_contact_select_onChanged_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.selectOrganizationContact($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(24, "div", 12)(25, "div", 13)(26, "div", 14)(27, "label", 19)(28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(31, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(33, "nb-datepicker", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(35, "div", 13)(36, "div", 14)(37, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(40, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(42, "nb-datepicker", null, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(44, "div", 12)(45, "div", 13)(46, "ga-currency", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("optionChange", function InvoiceEditComponent_Template_ga_currency_optionChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.onCurrencyChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(47, "div", 12)(48, "div", 24)(49, "div", 14)(50, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(53, "textarea", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(54, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(55, "div", 12)(56, "div", 24)(57, "ga-tags-color-input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function InvoiceEditComponent_Template_ga_tags_color_input_selectedTagsEvent_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsEvent($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(58, "div", 28)(59, "div", 29)(60, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(62, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(63, "div", 12)(64, "div", 13)(65, "div", 14)(66, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(68, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(69, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(70, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceEditComponent_Template_input_ngModelChange_69_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(71, "div", 13)(72, "div", 14)(73, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(75, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(76, "nb-select", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(77, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceEditComponent_Template_nb_select_ngModelChange_76_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(78, InvoiceEditComponent_nb_option_78_Template, 3, 4, "nb-option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(79, "div", 29)(80, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(82, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(83, "div", 12)(84, "div", 13)(85, "div", 14)(86, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(87);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(88, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(89, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(90, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceEditComponent_Template_input_ngModelChange_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(91, "div", 13)(92, "div", 14)(93, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(94);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(95, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(96, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(97, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceEditComponent_Template_input_ngModelChange_96_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(98, "div", 12)(99, "div", 13)(100, "div", 14)(101, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(102);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(103, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(104, "nb-select", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(105, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceEditComponent_Template_nb_select_ngModelChange_104_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(106, InvoiceEditComponent_nb_option_106_Template, 3, 4, "nb-option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(107, "div", 13)(108, "div", 14)(109, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(111, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(112, "nb-select", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(113, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("ngModelChange", function InvoiceEditComponent_Template_nb_select_ngModelChange_112_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.calculateTotal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(114, InvoiceEditComponent_nb_option_114_Template, 3, 4, "nb-option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(115, "div", 43)(116, "nb-checkbox", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("checkedChange", function InvoiceEditComponent_Template_nb_checkbox_checkedChange_116_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.applyDiscountAfterTax($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(117);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(118, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(119, InvoiceEditComponent_div_119_Template, 14, 14, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(120, "nb-card-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(121, InvoiceEditComponent_button_121_Template, 3, 3, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(122, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceEditComponent_Template_button_click_122_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.updateInvoice("DRAFT"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(123);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(124, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(125, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceEditComponent_Template_button_click_125_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.sendToContact());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(126);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(127, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(128, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function InvoiceEditComponent_Template_button_click_128_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.sendViaEmail());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(129);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(130, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(131, InvoiceEditComponent_ng_template_131_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(133, InvoiceEditComponent_ng_template_133_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const headerTemplate_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(4);
          const invoiceEstimateDatePicker_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(34);
          const dueDatePicker_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.duplicate)("ngIfElse", headerTemplate_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(15, 51, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_NUMBER" : "INVOICES_PAGE.INVOICE_NUMBER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(17, 53, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_NUMBER" : "INVOICES_PAGE.INVOICE_NUMBER"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(21, 55, "INVOICES_PAGE.CONTACT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("addTag", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(23, 57, "POP_UPS.ALL_CONTACTS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(30, 59, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_DATE" : "INVOICES_PAGE.INVOICE_DATE"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(32, 61, ctx.isEstimate ? "INVOICES_PAGE.ESTIMATE_DATE" : "INVOICES_PAGE.INVOICE_DATE"))("nbDatepicker", invoiceEstimateDatePicker_r10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(39, 63, "INVOICES_PAGE.DUE_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(41, 65, "INVOICES_PAGE.DUE_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", dueDatePicker_r11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.form.get("currency"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(52, 67, "INVOICES_PAGE.INVOICES_SELECT_TERMS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(54, 69, "INVOICES_PAGE.INVOICES_SELECT_TERMS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(62, 71, "INVOICES_PAGE.DISCOUNT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(68, 73, "INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(70, 75, "INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(75, 77, "INVOICES_PAGE.DISCOUNT_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(77, 79, "INVOICES_PAGE.DISCOUNT_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(82, 81, "INVOICES_PAGE.INVOICES_TAXES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(88, 83, "INVOICES_PAGE.TAX"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(90, 85, "INVOICES_PAGE.TAX"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(95, 87, "INVOICES_PAGE.TAX_2"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(97, 89, "INVOICES_PAGE.TAX_2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("min", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(103, 91, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(105, 93, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(111, 95, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(113, 97, "INVOICES_PAGE.TAX_TYPE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.discountTaxTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.discountAfterTax);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(118, 99, "INVOICES_PAGE.APPLY_DISCOUNT_AFTER_TAX"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.shouldLoadTable);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.duplicate);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(124, 101, "BUTTONS.SAVE_AS_DRAFT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(127, 103, "BUTTONS.SAVE_AND_SEND_CONTACT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(130, 105, "BUTTONS.SAVE_AND_SEND_EMAIL"), " ");
        }
      },
      dependencies: [_packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_25__/* .TagsColorInputComponent */ .i, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbTooltipDirective */ .BmQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDatepickerComponent */ .k2z, ngx_permissions__WEBPACK_IMPORTED_MODULE_26__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_27__/* .CurrencyComponent */ .X, angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_28__/* .PaginationV2Component */ .a, _packages_ui_core_shared_src_lib_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_29__/* .ContactSelectComponent */ .O, _angular_common__WEBPACK_IMPORTED_MODULE_30__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_30__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_31__/* .BackNavigationComponent */ .r, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions-title a {\n  background-color: #00d68f !important;\n  transform: scale(0.9);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a {\n  transform: scale(0.6);\n  border-radius: var(--border-radius);\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a:nth-child(1) {\n  background-color: #00d68f !important;\n  color: white;\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions a:nth-child(2) {\n  background-color: white !important;\n  color: #ff3d71;\n  box-shadow: var(--gauzy-shadow);\n}\n\n.total[_ngcontent-%COMP%] {\n  float: right;\n}\n.total-item[_ngcontent-%COMP%] {\n  border: solid 2px var(--button-filled-info-disabled-border-color);\n  border-radius: 5px;\n  margin: 20px 20px 20px 10px;\n  padding: 5px;\n  font-size: 14px;\n}\n\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-actions {\n  width: 5%;\n}\n\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 36px;\n}\n.form[_ngcontent-%COMP%]   .block-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.form[_ngcontent-%COMP%]   .block-wrap[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  width: 48%;\n}\n\n.footer-block-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.footer-block-wrap[_ngcontent-%COMP%]   .footer-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.terms-textarea[_ngcontent-%COMP%] {\n  width: 98%;\n}\n\n.group[_ngcontent-%COMP%] {\n  border-radius: 0.6rem;\n  margin-bottom: 20px;\n  padding: 9px 18px 2px 12px;\n}\n.group[_ngcontent-%COMP%]   .label-group[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n  margin-bottom: 18px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.discountCheckbox[_ngcontent-%COMP%] {\n  margin: 20px -1rem;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\ndiv.button-action[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 6px 8px;\n  border-radius: var(--button-rectangle-border-radius);\n  margin-bottom: 12px;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n.content[_ngcontent-%COMP%]   .row.group[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-3);\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--gauzy-card-2);\n  padding: 12px;\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .custom-table[_ngcontent-%COMP%]   div.btn-action[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%] {\n  background-color: rgb(126, 126, 143);\n  color: var(--text-control-color);\n  border-color: var(--button-filled-basic-border-color);\n}\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%]   [nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--button-filled-basic-background-color);\n  border-color: var(--button-filled-basic-border-color);\n  color: var(--button-filled-basic-text-color);\n}\n[_nghost-%COMP%]   button.gray[_ngcontent-%COMP%]   [nbButton].appearance-filled.status-basic[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: var(--text-basic-color);\n  background-color: rgba(126, 126, 143, 0.1);\n}"]
    });
  }
};
InvoiceEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_16__/* .Router */ .Ix, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .InvoiceItemService */ .q, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .InvoicesService */ .U, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ .t, _angular_router__WEBPACK_IMPORTED_MODULE_16__/* .ActivatedRoute */ .nX, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .InvoiceEstimateHistoryService */ .f, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatableService */ .b, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .OrganizationSettingService */ .r])], InvoiceEditComponent);


/***/ }),

/***/ 84409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ first)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25413);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72781);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64320);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13344);
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42883);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89685);






function first(predicate, defaultValue) {
  const hasDefaultValue = arguments.length >= 2;
  return source => source.pipe(predicate ? (0,_filter__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .p)((v, i) => predicate(v, i, source)) : _util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, (0,_take__WEBPACK_IMPORTED_MODULE_2__/* .take */ .s)(1), hasDefaultValue ? (0,_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__/* .defaultIfEmpty */ .U)(defaultValue) : (0,_throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__/* .throwIfEmpty */ .v)(() => new _util_EmptyError__WEBPACK_IMPORTED_MODULE_5__/* .EmptyError */ .G()));
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ 84886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ InvoiceProductsSelectorComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64411);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72781);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23423);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59520);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10936);













function InvoiceProductsSelectorComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", product_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.geProductTranslatedName(product_r1), " ");
  }
}
let InvoiceProductsSelectorComponent = class InvoiceProductsSelectorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultEditor */ .ny {
  constructor(store, productService, translateService, translatableService) {
    super();
    this.store = store;
    this.productService = productService;
    this.translateService = translateService;
    this.translatableService = translatableService;
  }
  ngOnInit() {
    this.selectedLanguage = this.translateService.currentLang;
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe(organization => {
      this.organization = organization;
      this._loadProducts();
    });
  }
  geProductTranslatedName(product) {
    return this.translatableService.getTranslatedProperty(product, 'name');
  }
  _loadProducts() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
      const organizationId = _this.organization.id;
      const tenantId = _this.store.user.tenantId;
      _this.productService.getAll(['translations'], {
        organizationId,
        tenantId
      }, _this.selectedLanguage).then(({
        items
      }) => {
        _this.products = items;
        const product = _this.cell.getNewRawValue();
        _this.product = _this.products.find(p => p.id === product.id);
      });
    })();
  }
  /**
   *
   * @param $event
   */
  selectProduct($event) {
    this.cell.setValue($event);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InvoiceProductsSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoiceProductsSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .ProductService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatableService */ .b));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoiceProductsSelectorComponent,
      selectors: [["ng-component"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 3,
      vars: 5,
      consts: [["fullWidth", "", 3, "ngModelChange", "selectedChange", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function InvoiceProductsSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function InvoiceProductsSelectorComponent_Template_nb_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.product, $event) || (ctx.product = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InvoiceProductsSelectorComponent_Template_nb_select_selectedChange_0_listener($event) {
            return ctx.selectProduct($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, InvoiceProductsSelectorComponent_nb_option_2_Template, 2, 2, "nb-option", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, "INVOICES_PAGE.SELECT_PRODUCT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.product);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.products);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbOptionComponent */ .ZJ2, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgModel */ .vS, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
      encapsulation: 2
    });
  }
};
InvoiceProductsSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .ProductService */ .b, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatableService */ .b])], InvoiceProductsSelectorComponent);


/***/ }),

/***/ 88146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ EstimatesReceivedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _invoices_received_invoices_received_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58712);


let EstimatesReceivedComponent = /*#__PURE__*/(() => {
  class EstimatesReceivedComponent {
    static {
      this.ɵfac = function EstimatesReceivedComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EstimatesReceivedComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EstimatesReceivedComponent,
        selectors: [["ga-estimates-received"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "isEstimate"]],
        template: function EstimatesReceivedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ga-invoices-received", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("isEstimate", true);
          }
        },
        dependencies: [_invoices_received_invoices_received_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoicesReceivedComponent */ .L],
        encapsulation: 2
      });
    }
  }
  return EstimatesReceivedComponent;
})();

/***/ }),

/***/ 89542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ InvoicePaymentsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(64411);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(19223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9620);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52345);
/* harmony import */ var _payment_mutation_payment_mutation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83226);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72781);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23423);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43277);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63570);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(10280);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55101);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47825);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28005);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90475);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(96789);
/* harmony import */ var _payment_receipt_mutation_payment_receipt_mutation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(17376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(20345);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(42128);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(11031);





























function InvoicePaymentsComponent_ng_template_77_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicePaymentsComponent_ng_template_77_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.sendReceipt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicePaymentsComponent_ng_template_77_ng_template_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.editPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(8, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicePaymentsComponent_ng_template_77_ng_template_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.deletePayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 5, "BUTTONS.SEND_RECEIPT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(7, 7, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(9, 9, "BUTTONS.DELETE"));
  }
}
function InvoicePaymentsComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, InvoicePaymentsComponent_ng_template_77_ng_template_1_Template, 11, 11, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.recordPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.exportToCsv());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(9, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(12, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("throttledClick", function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template_button_throttledClick_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.recordFullPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(13, "nb-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(16, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function InvoicePaymentsComponent_ng_template_79_ng_template_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.invoiceRemainingAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(17, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 10, "BUTTONS.ADD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.payments ? ctx_r2.payments.length <= 0 : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(7, 12, "BUTTONS.EXPORT_TO_CSV"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", !(ctx_r2.payments == null ? null : ctx_r2.payments.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(11, 14, "BUTTONS.DOWNLOAD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("debounceTime", 500)("disabled", ctx_r2.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(15, 16, "BUTTONS.RECORD_FULL_PAYMENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(19, 18, "BUTTONS.INVOICE_REMAINING_AMOUNT"), " ");
  }
}
function InvoicePaymentsComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, InvoicePaymentsComponent_ng_template_79_ng_template_0_Template, 20, 20, "ng-template", 22);
  }
}
let InvoicePaymentsComponent = class InvoicePaymentsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .K {
  constructor(route, translateService, invoicesService, dialogService, paymentService, toastrService, store, invoiceEstimateHistoryService, router) {
    super(translateService);
    this.route = route;
    this.translateService = translateService;
    this.invoicesService = invoicesService;
    this.dialogService = dialogService;
    this.paymentService = paymentService;
    this.toastrService = toastrService;
    this.store = store;
    this.invoiceEstimateHistoryService = invoiceEstimateHistoryService;
    this.router = router;
    this.payments = [];
    this.totalPaid = 0;
    this.leftToPay = 0;
    this.barWidth = 0;
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_4__/* .LocalDataSource */ .h0();
    this.disableButton = true;
    this.organization = this.store.selectedOrganization;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    // Subscribe to changes in the subject$ observable stream
    this.subject$.pipe(
    // Debounce the observable to wait for 200 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(200),
    // Perform the 'getInvoice' action when the observable emits a value
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.getInvoice()),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    // Subscribe to changes in the route's paramMap
    this.route.paramMap.pipe(
    // Filter out cases where 'id' parameter is present in the paramMap
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(params => !!params && !!params.get('id')),
    // Tap into the paramMap to assign the 'id' to the 'invoiceId' property
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(params => this.invoiceId = params.get('id')),
    // Trigger the subject$ observable when the paramMap changes
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.subject$.next(true)),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Fetches invoice details, including invoice items, tags, organizations, contacts,
   * payments, and their associated details. Loads payments into the smart table source
   * and calculates the total paid amount.
   */
  getInvoice() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      // Check if the organization is available
      if (!_this.organization) {
        return;
      }
      try {
        // Set loading indicator to true
        _this.loading = true;
        // Destructure organization properties
        const {
          id: organizationId,
          tenantId
        } = _this.organization;
        // Specify the related entities to include in the invoice details
        const relatedEntities = ['invoiceItems', 'tags', 'fromOrganization', 'toContact', 'payments', 'payments.invoice', 'payments.createdByUser'];
        // Fetch invoice details
        const invoice = yield _this.invoicesService.getById(_this.invoiceId, relatedEntities, {
          organizationId,
          tenantId
        });
        // Update the component's invoice and payments properties
        _this.invoice = invoice;
        _this.payments = invoice.payments;
        // Load payments into the smart table source
        _this.smartTableSource.load(_this.payments);
        // Calculate total paid amount
        yield _this.calculateTotalPaid();
      } catch (error) {
        // Handle errors, e.g., log the error or show a user-friendly message
        _this.toastrService.danger(error);
      } finally {
        // Set loading to false regardless of success or failure
        _this.loading = false;
      }
    })();
  }
  calculateTotalPaid() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      _this2.totalPaid = 0;
      const payments = yield _this2.smartTableSource.getAll();
      for (const payment of payments) {
        _this2.totalPaid += +payment.amount;
      }
      _this2.barWidth = +(_this2.totalPaid / _this2.invoice.totalValue * 100).toFixed(2);
      const progressBar = document.getElementById('progress-bar-inner');
      progressBar.style.width = _this2.barWidth > 100 ? '100%' : `${_this2.barWidth}%`;
      if (_this2.totalPaid >= _this2.invoice.totalValue) {
        if (!_this2.invoice.paid) {
          yield _this2.invoicesService.updateAction(_this2.invoice.id, {
            paid: true
          });
        }
      } else {
        if (_this2.invoice.paid) {
          yield _this2.invoicesService.updateAction(_this2.invoice.id, {
            paid: false
          });
        }
      }
      _this2.leftToPay = _this2.invoice.totalValue - _this2.totalPaid;
      if (_this2.leftToPay < 0) {
        _this2.leftToPay = 0;
      }
      _this2.isDisabled = _this2.leftToPay === 0;
      yield _this2.invoicesService.updateAction(_this2.invoice.id, {
        alreadyPaid: _this2.totalPaid,
        amountDue: _this2.leftToPay
      });
    })();
  }
  recordPayment() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this3.dialogService.open(_payment_mutation_payment_mutation_component__WEBPACK_IMPORTED_MODULE_0__/* .PaymentMutationComponent */ .V, {
        context: {
          invoice: _this3.invoice
        }
      }).onClose);
      if (result) {
        yield _this3.paymentService.add(result);
        _this3.totalPaid = 0;
        _this3.subject$.next(true);
        yield _this3.updateInvoiceStatus(+_this3.invoice.totalValue, _this3.totalPaid);
        if (result.invoice) {
          const {
            invoice,
            amount,
            currency
          } = result;
          const action = _this3.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_AMOUNT_ADDED', {
            amount,
            currency
          });
          yield _this3.createInvoiceHistory(action, invoice);
        }
      }
    })();
  }
  editPayment() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this4.dialogService.open(_payment_mutation_payment_mutation_component__WEBPACK_IMPORTED_MODULE_0__/* .PaymentMutationComponent */ .V, {
        context: {
          invoice: _this4.invoice,
          payment: _this4.selectedPayment
        }
      }).onClose);
      if (result) {
        yield _this4.paymentService.update(result.id, result);
        _this4.subject$.next(true);
        yield _this4.updateInvoiceStatus(+_this4.invoice.totalValue, _this4.totalPaid);
        if (result.invoice) {
          const {
            invoice
          } = result;
          const action = _this4.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_EDIT');
          yield _this4.createInvoiceHistory(action, invoice);
        }
      }
    })();
  }
  deletePayment() {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this5.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .DeleteConfirmationComponent */ .u).onClose);
      if (result) {
        yield _this5.paymentService.delete(_this5.selectedPayment.id);
        _this5.subject$.next(true);
        yield _this5.updateInvoiceStatus(+_this5.invoice.totalValue, _this5.totalPaid);
        const {
          invoice
        } = _this5.selectedPayment;
        if (invoice) {
          const action = _this5.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_DELETE');
          yield _this5.createInvoiceHistory(action, invoice);
        }
        _this5.toastrService.success('INVOICES_PAGE.PAYMENTS.PAYMENT_DELETE');
      }
      _this5.disableButton = true;
    })();
  }
  download() {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      const tableData = yield _this6.smartTableSource.getAll();
      if (!tableData.length) {
        _this6.toastrService.danger('INVOICES_PAGE.PAYMENTS.NO_PAYMENTS_RECORDED');
        return;
      }
      const {
        id: invoiceId
      } = _this6.invoice;
      _this6.invoicesService.downloadInvoicePaymentPdf(invoiceId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(data => _this6.downloadFile(data)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(_this6)).subscribe(() => {
        _this6.toastrService.success('INVOICES_PAGE.PAYMENTS.PAYMENT_DOWNLOAD');
      });
    })();
  }
  downloadFile(data) {
    const filename = `${this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT')}.pdf`;
    (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(data, filename);
  }
  /**
   * Handles the selection/deselection of a payment.
   * @param isSelected A boolean indicating whether the payment is selected.
   * @param data The payment data associated with the selection.
   */
  selectPayment({
    isSelected,
    data
  }) {
    // Update the disableButton property based on the isSelected value
    this.disableButton = !isSelected;
    // Update the selectedPayment property based on the isSelected value
    this.selectedPayment = isSelected ? data : null;
  }
  /**
   * Loads and configures the settings for the Smart Table used in the context of invoices payments.
   */
  _loadSmartTableSettings() {
    this.settingsSmartTable = {
      actions: false,
      selectedRowIndex: -1,
      columns: {
        paymentDate: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_DATE'),
          type: 'custom',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        amount: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.AMOUNT'),
          type: 'custom',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .IncomeExpenseAmountComponent */ .j,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        createdByUser: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.RECORDED_BY'),
          type: 'text',
          valuePrepareFunction: value => value?.name ?? ''
        },
        note: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.NOTE'),
          type: 'text'
        },
        paymentMethod: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_METHOD'),
          type: 'text',
          valuePrepareFunction: value => this.getTranslation(`INVOICES_PAGE.PAYMENTS.${value}`) ?? ''
        },
        overdue: {
          title: this.getTranslation('INVOICES_PAGE.PAYMENTS.STATUS'),
          type: 'custom',
          width: '5%',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .StatusBadgeComponent */ .v,
          valuePrepareFunction: value => {
            const badgeClass = value ? 'danger' : 'success';
            const translatedCell = value ? this.getTranslation('INVOICES_PAGE.PAYMENTS.OVERDUE') : this.getTranslation('INVOICES_PAGE.PAYMENTS.ON_TIME');
            return {
              text: translatedCell,
              class: badgeClass
            };
          },
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        }
      }
    };
  }
  /**
   * Updates the status of an invoice based on the total invoice value and the total amount paid.
   *
   * @param totalValue - The total amount due for the invoice.
   * @param totalPaid - The total amount that has been paid towards the invoice.
   * @returns A Promise that resolves when the invoice status has been updated.
   */
  updateInvoiceStatus(totalValue, totalPaid) {
    var _this7 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      if (totalPaid <= 0) {
        yield _this7.invoicesService.updateAction(_this7.invoice.id, {
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .InvoiceStatusTypesEnum */ .g0.VIEWED
        });
      } else if (totalPaid < totalValue) {
        yield _this7.invoicesService.updateAction(_this7.invoice.id, {
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .InvoiceStatusTypesEnum */ .g0.PARTIALLY_PAID
        });
      } else if (totalPaid === totalValue) {
        yield _this7.invoicesService.updateAction(_this7.invoice.id, {
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .InvoiceStatusTypesEnum */ .g0.FULLY_PAID
        });
      } else {
        yield _this7.invoicesService.updateAction(_this7.invoice.id, {
          status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .InvoiceStatusTypesEnum */ .g0.OVERPAID
        });
      }
    })();
  }
  recordFullPayment() {
    var _this8 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      if (!_this8.invoice) {
        return;
      }
      // Destructure organization properties
      const {
        tenantId
      } = _this8.organization;
      // Create a payment object
      const payment = {
        amount: _this8.leftToPay,
        paymentDate: new Date(),
        currency: _this8.invoice.currency,
        invoice: _this8.invoice,
        invoiceId: _this8.invoice.id,
        organization: _this8.invoice.fromOrganization,
        organizationId: _this8.invoice.fromOrganization.id,
        tenantId
      };
      payment.overdue = _this8.invoice.dueDate >= new Date();
      yield _this8.paymentService.add(payment);
      const {
        amount,
        currency,
        invoice
      } = payment;
      if (payment.invoice) {
        const action = _this8.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_AMOUNT_ADDED', {
          amount,
          currency
        });
        yield _this8.createInvoiceHistory(action, invoice);
      }
      _this8.subject$.next(true);
      _this8.toastrService.success('INVOICES_PAGE.PAYMENTS.PAYMENT_ADD', {
        amount,
        currency
      });
    })();
  }
  /**
   * Calculate and update the remaining amount for the invoice.
   * Navigates to the invoice editing page with the remaining amount query parameter.
   */
  invoiceRemainingAmount() {
    var _this9 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      // Check if an invoice is available
      if (!_this9.invoice) {
        return;
      }
      // Update the already paid amount for the invoice
      yield _this9.invoicesService.updateAction(_this9.invoice.id, {
        alreadyPaid: +_this9.totalPaid
      });
      // Navigate to the invoice editing page with the remaining amount query parameter
      _this9.router.navigate([`/pages/accounting/invoices/edit/${_this9.invoice.id}`], {
        queryParams: {
          remainingAmount: true
        }
      });
    })();
  }
  exportToCsv() {
    let data = [];
    this.payments.forEach(payment => {
      data.push({
        invoiceNumber: this.invoice.invoiceNumber,
        contact: this.invoice.toContact ? this.invoice.toContact.name : '',
        paymentDate: payment.paymentDate.toString().slice(0, 10),
        amount: `${payment.currency + ' ' + payment.amount}`,
        createdByUser: payment.createdByUser.name,
        note: payment.note || '',
        paymentMethod: payment.paymentMethod ? this.getTranslation(`INVOICES_PAGE.PAYMENTS.${payment.paymentMethod}`) : '',
        status: payment.overdue ? this.getTranslation('INVOICES_PAGE.PAYMENTS.OVERDUE') : this.getTranslation('INVOICES_PAGE.PAYMENTS.ON_TIME')
      });
    });
    const headers = [this.getTranslation('INVOICES_PAGE.INVOICE_NUMBER'), this.getTranslation('INVOICES_PAGE.CONTACT'), this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_DATE'), this.getTranslation('INVOICES_PAGE.PAYMENTS.AMOUNT'), this.getTranslation('INVOICES_PAGE.PAYMENTS.RECORDED_BY'), this.getTranslation('INVOICES_PAGE.PAYMENTS.NOTE'), this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT_METHOD'), this.getTranslation('INVOICES_PAGE.PAYMENTS.STATUS')];
    const fileName = this.getTranslation('INVOICES_PAGE.PAYMENTS.PAYMENT');
    (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .generateCsv */ .Y)(data, headers, fileName);
  }
  /**
   * Send a receipt for the selected payment.
   */
  sendReceipt() {
    var _this0 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      // Open a dialog for creating or mutating an invoice payment receipt
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this0.dialogService.open(_payment_receipt_mutation_payment_receipt_mutation_component__WEBPACK_IMPORTED_MODULE_18__/* .InvoicePaymentReceiptMutationComponent */ .y, {
        context: {
          invoice: _this0.invoice,
          payment: _this0.selectedPayment
        }
      }).onClose);
    })();
  }
  /**
   * Apply translations to the Smart Table settings when the language changes.
   */
  _applyTranslationOnSmartTable() {
    // Subscribe to the language change observable
    this.translateService.onLangChange.pipe(
    // Trigger the loading of Smart Table settings when the language changes
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._loadSmartTableSettings()),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectPayment({
      isSelected: false,
      data: null
    });
  }
  /**
   * Create a history event for a payment invoice.
   * @param action The action or event type to be recorded in the history.
   * @param invoice The payment invoice for which the history event is created.
   */
  createInvoiceHistory(action, invoice) {
    var _this1 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      // Extract user information from the store
      const {
        tenantId,
        id: userId
      } = _this1.store.user;
      // Extract organization information from the store
      const {
        id: organizationId
      } = _this1.store.selectedOrganization;
      // Extract invoice information
      const {
        id: invoiceId
      } = invoice;
      // Create a history entry using the invoiceEstimateHistoryService
      yield _this1.invoiceEstimateHistoryService.add({
        action,
        invoice,
        invoiceId,
        user: _this1.store.user,
        userId,
        organization: _this1.organization,
        organizationId,
        tenantId
      });
    })();
  }
  static {
    this.ɵfac = function InvoicePaymentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvoicePaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .PaymentService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .InvoiceEstimateHistoryService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .Ix));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InvoicePaymentsComponent,
      selectors: [["ga-payments"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 81,
      vars: 59,
      consts: [["actionButtons", ""], ["visibleButton", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "main", "card-scroll", 3, "nbSpinner"], [1, "d-flex", "align-items-start"], [1, "body"], [1, "info-container"], [1, "date-and-value"], [1, "block", "w-100"], [1, "row"], [1, "col-6", "first-column"], [1, "col-6", "pr-0", "pl-0"], [1, "total-paid-label"], [1, "progress-bar-container"], [1, "progress-bar"], [1, "paid-percent"], ["id", "progress-bar-inner", 1, "progress-bar-inner", 2, "width", "0%"], [1, "custom-container"], [1, "gauzy-button-container"], [3, "isDisable", "buttonTemplate", "buttonTemplateVisible", "hasLayoutSelector"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "btn-group", "actions"], ["ngxPermissionsOnly", "ORG_PAYMENT_ADD_EDIT"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "info-text-1", 3, "click"], ["icon", "email-outline"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["status", "success", "size", "small", "nbButton", "", 3, "click"], ["icon", "plus-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "info-text-1", 3, "click", "disabled"], ["icon", "file-text-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "primary", 3, "click", "disabled"], ["icon", "download-outline"], ["status", "basic", "size", "small", "debounceClick", "", "nbButton", "", 1, "action", "secondary", 3, "throttledClick", "debounceTime", "disabled"], ["icon", "credit-card-outline"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "secondary", 3, "click", "disabled"]],
      template: function InvoicePaymentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(15, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(16, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(19, "dateFormat");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(20, "div", 8)(21, "div", 9)(22, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(25, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(26, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(27, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(29, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(30, "position");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(31, "div", 8)(32, "div", 9)(33, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(36, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(37, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(38, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(40, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(41, "position");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(42, "div", 8)(43, "div", 9)(44, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(46, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(47, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(48, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(49, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(51, "div", 8)(52, "div", 9)(53, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(56, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(57, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(58, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(60, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(62, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(63, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(64, "position");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(65, "span")(66, "div", 12)(67, "div", 13)(68, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(69);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(70, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(71, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(72, "div", 16)(73, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(74, "ngx-gauzy-button-action", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(75, "div", 19)(76, "angular2-smart-table", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function InvoicePaymentsComponent_Template_angular2_smart_table_userRowSelect_76_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.selectPayment($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(77, InvoicePaymentsComponent_ng_template_77_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(79, InvoicePaymentsComponent_ng_template_79_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const actionButtons_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(78);
          const visibleButton_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(80);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(5, 23, "INVOICES_PAGE.PAYMENTS.HEADER"), " ", ctx.invoice ? ctx.invoice.invoiceNumber : "", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(14, 25, "INVOICES_PAGE.DUE_DATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.invoice ? _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(19, 27, ctx.invoice.dueDate) : "", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(24, 29, "INVOICES_PAGE.PAYMENTS.TOTAL_VALUE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(30, 34, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(29, 31, (ctx.invoice == null ? null : ctx.invoice.totalValue) || 0, ctx.invoice == null ? null : ctx.invoice.currency), ctx.organization == null ? null : ctx.organization.currencyPosition), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(35, 37, "INVOICES_PAGE.PAYMENTS.LEFT_TO_PAY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(41, 42, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(40, 39, ctx.leftToPay || 0, ctx.invoice == null ? null : ctx.invoice.currency), ctx.organization == null ? null : ctx.organization.currencyPosition), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(46, 45, "INVOICES_PAGE.PAYMENTS.RECEIVED_FROM"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.invoice == null ? null : ctx.invoice.toContact == null ? null : ctx.invoice.toContact.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(55, 47, "INVOICES_PAGE.PAYMENTS.RECEIVER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.invoice == null ? null : ctx.invoice.fromOrganization == null ? null : ctx.invoice.fromOrganization.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(62, 49, "INVOICES_PAGE.PAYMENTS.TOTAL_PAID"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(64, 54, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(63, 51, ctx.totalPaid || 0, ctx.invoice == null ? null : ctx.invoice.currency), ctx.organization == null ? null : ctx.organization.currencyPosition), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", ctx.barWidth, "% ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(70, 57, "INVOICES_PAGE.PAYMENTS.PAID"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("isDisable", ctx.disableButton)("buttonTemplate", actionButtons_r5)("buttonTemplateVisible", visibleButton_r6)("hasLayoutSelector", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("settings", ctx.settingsSmartTable)("source", ctx.smartTableSource);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_27__/* .NgxPermissionsDirective */ .f6, angular2_smart_table__WEBPACK_IMPORTED_MODULE_4__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_28__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_29__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_30__/* .DebounceClickDirective */ .J, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .CurrencyPipe */ .oe, _packages_ui_core_shared_src_lib_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_32__/* .CurrencyPositionPipe */ .n, _packages_ui_core_shared_src_lib_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_33__/* .DateFormatPipe */ .a],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.date-and-value[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 24%;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.total-paid-label[_ngcontent-%COMP%] {\n  margin-left: 8%;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: rgba(126, 126, 143, 0.2);\n  height: 32px;\n  width: 200px;\n  border-radius: 3px;\n  margin-top: 10px;\n}\n\n.progress-bar-inner[_ngcontent-%COMP%] {\n  display: block;\n  height: 32px;\n  background-color: rgb(0, 214, 143);\n  border-radius: 3px;\n  position: relative;\n}\n\n.paid-percent[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  margin-left: 1%;\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.custom-container[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  background-color: var(--gauzy-card-2);\n  padding: 0 12px 12px 12px;\n  border-radius: 8px;\n}\n.custom-container[_ngcontent-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 0 0 8px 8px;\n}\n\n.first-column[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}"]
    });
  }
};
InvoicePaymentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_34__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_34__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .ActivatedRoute */ .nX, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .InvoicesService */ .U, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .PaymentService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .InvoiceEstimateHistoryService */ .f, _angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .Ix])], InvoicePaymentsComponent);


/***/ }),

/***/ 89892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ EstimateAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2920);


let EstimateAddComponent = /*#__PURE__*/(() => {
  class EstimateAddComponent {
    static {
      this.ɵfac = function EstimateAddComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EstimateAddComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EstimateAddComponent,
        selectors: [["ga-estimate-add"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "isEstimate"]],
        template: function EstimateAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ga-invoice-add", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("isEstimate", true);
          }
        },
        dependencies: [_invoice_add_invoice_add_component__WEBPACK_IMPORTED_MODULE_0__/* .InvoiceAddComponent */ .c],
        encapsulation: 2
      });
    }
  }
  return EstimateAddComponent;
})();

/***/ }),

/***/ 94817:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FQ: () => (/* binding */ ClipboardModule),
/* harmony export */   Uo: () => (/* binding */ ClipboardDirective),
/* harmony export */   WW: () => (/* binding */ ClipboardService)
/* harmony export */ });
/* unused harmony export ClipboardIfSupportedDirective */
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33691);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24237);






/**
 * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
 */
let ClipboardService = /*#__PURE__*/(() => {
  class ClipboardService {
    constructor(ngZone, document, window) {
      this.ngZone = ngZone;
      this.document = document;
      this.window = window;
      this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B();
      this.copyResponse$ = this.copySubject.asObservable();
      this.config = {};
    }
    configure(config) {
      this.config = config;
    }
    copy(content) {
      if (!this.isSupported || !content) {
        return this.pushCopyResponse({
          isSuccess: false,
          content
        });
      }
      const copyResult = this.copyFromContent(content);
      if (copyResult) {
        return this.pushCopyResponse({
          content,
          isSuccess: copyResult
        });
      }
      return this.pushCopyResponse({
        isSuccess: false,
        content
      });
    }
    get isSupported() {
      return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
    }
    isTargetValid(element) {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        if (element.hasAttribute('disabled')) {
          throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
        }
        return true;
      }
      throw new Error('Target should be input or textarea');
    }
    /**
     * Attempts to copy from an input `targetElm`
     */
    copyFromInputElement(targetElm, isFocus = true) {
      try {
        this.selectTarget(targetElm);
        const re = this.copyText();
        this.clearSelection(isFocus ? targetElm : undefined, this.window);
        return re && this.isCopySuccessInIE11();
      } catch (error) {
        return false;
      }
    }
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     */
    isCopySuccessInIE11() {
      const clipboardData = this.window['clipboardData'];
      if (clipboardData && clipboardData.getData) {
        if (!clipboardData.getData('Text')) {
          return false;
        }
      }
      return true;
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    copyFromContent(content, container = this.document.body) {
      // check if the temp textarea still belongs to the current container.
      // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
      if (this.tempTextArea && !container.contains(this.tempTextArea)) {
        this.destroy(this.tempTextArea.parentElement || undefined);
      }
      if (!this.tempTextArea) {
        this.tempTextArea = this.createTempTextArea(this.document, this.window);
        try {
          container.appendChild(this.tempTextArea);
        } catch (error) {
          throw new Error('Container should be a Dom element');
        }
      }
      this.tempTextArea.value = content;
      const toReturn = this.copyFromInputElement(this.tempTextArea, false);
      if (this.config.cleanUpAfterCopy) {
        this.destroy(this.tempTextArea.parentElement || undefined);
      }
      return toReturn;
    }
    /**
     * Remove temporary textarea if any exists.
     */
    destroy(container = this.document.body) {
      if (this.tempTextArea) {
        container.removeChild(this.tempTextArea);
        // removeChild doesn't remove the reference from memory
        this.tempTextArea = undefined;
      }
    }
    /**
     * Select the target html input element.
     */
    selectTarget(inputElement) {
      inputElement.select();
      inputElement.setSelectionRange(0, inputElement.value.length);
      return inputElement.value.length;
    }
    copyText() {
      return this.document.execCommand('copy');
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */
    clearSelection(inputElement, window) {
      inputElement && inputElement.focus();
      window.getSelection()?.removeAllRanges();
    }
    /**
     * Creates a fake textarea for copy command.
     */
    createTempTextArea(doc, window) {
      const isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
      let ta;
      ta = doc.createElement('textarea');
      // Prevent zooming on iOS
      ta.style.fontSize = '12pt';
      // Reset box model
      ta.style.border = '0';
      ta.style.padding = '0';
      ta.style.margin = '0';
      // Move element out of screen horizontally
      ta.style.position = 'absolute';
      ta.style[isRTL ? 'right' : 'left'] = '-9999px';
      // Move element to the same position vertically
      const yPosition = window.pageYOffset || doc.documentElement.scrollTop;
      ta.style.top = yPosition + 'px';
      ta.setAttribute('readonly', '');
      return ta;
    }
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    pushCopyResponse(response) {
      if (this.copySubject.observers.length > 0) {
        this.ngZone.run(() => {
          this.copySubject.next(response);
        });
      }
    }
    /**
     * @deprecated use pushCopyResponse instead.
     */
    pushCopyReponse(response) {
      this.pushCopyResponse(response);
    }
  }
  ClipboardService.ɵfac = function ClipboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .DOCUMENT */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__/* .WINDOW */ .j, 8));
  };
  ClipboardService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
    token: ClipboardService,
    factory: ClipboardService.ɵfac,
    providedIn: 'root'
  });
  return ClipboardService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ClipboardDirective = /*#__PURE__*/(() => {
  class ClipboardDirective {
    constructor(ngZone, host, renderer, clipboardSrv) {
      this.ngZone = ngZone;
      this.host = host;
      this.renderer = renderer;
      this.clipboardSrv = clipboardSrv;
      this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.onClick = event => {
        if (!this.clipboardSrv.isSupported) {
          this.handleResult(false, undefined, event);
        } else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
          this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        } else if (this.cbContent) {
          this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
      };
    }
    // eslint-disable-next-line no-empty, @typescript-eslint/no-empty-function
    ngOnInit() {
      this.ngZone.runOutsideAngular(() => {
        // By default each host listener schedules change detection and also wrapped
        // into additional function that calls `markForCheck()`. We're listening the `click`
        // event in the context of the root zone to avoid running unnecessary change detections,
        // since this directive doesn't do anything template-related (e.g. updates template variables).
        this.clickListener = this.renderer.listen(this.host.nativeElement, 'click', this.onClick);
      });
    }
    ngOnDestroy() {
      if (this.clickListener) {
        this.clickListener();
      }
      this.clipboardSrv.destroy(this.container);
    }
    /**
     * Fires an event based on the copy operation result.
     * @param succeeded
     */
    handleResult(succeeded, copiedContent, event) {
      let response = {
        isSuccess: succeeded,
        content: copiedContent,
        successMessage: this.cbSuccessMsg,
        event
      };
      if (succeeded) {
        if (this.cbOnSuccess.observed) {
          this.ngZone.run(() => {
            this.cbOnSuccess.emit(response);
          });
        }
      } else {
        if (this.cbOnError.observed) {
          this.ngZone.run(() => {
            this.cbOnError.emit(response);
          });
        }
      }
      this.clipboardSrv.pushCopyResponse(response);
    }
  }
  ClipboardDirective.ɵfac = function ClipboardDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .sFG), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(ClipboardService));
  };
  ClipboardDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .FsC({
    type: ClipboardDirective,
    selectors: [["", "ngxClipboard", ""]],
    inputs: {
      targetElm: [0, "ngxClipboard", "targetElm"],
      container: "container",
      cbContent: "cbContent",
      cbSuccessMsg: "cbSuccessMsg"
    },
    outputs: {
      cbOnSuccess: "cbOnSuccess",
      cbOnError: "cbOnError"
    },
    standalone: false
  });
  return ClipboardDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ClipboardIfSupportedDirective = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class ClipboardIfSupportedDirective {
    constructor(_clipboardService, _viewContainerRef, _templateRef) {
      this._clipboardService = _clipboardService;
      this._viewContainerRef = _viewContainerRef;
      this._templateRef = _templateRef;
    }
    ngOnInit() {
      if (this._clipboardService.isSupported) {
        this._viewContainerRef.createEmbeddedView(this._templateRef);
      }
    }
  }
  ClipboardIfSupportedDirective.ɵfac = function ClipboardIfSupportedDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardIfSupportedDirective)(i0.ɵɵdirectiveInject(ClipboardService), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef));
  };
  ClipboardIfSupportedDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
    type: ClipboardIfSupportedDirective,
    selectors: [["", "ngxClipboardIfSupported", ""]],
    standalone: false
  });
  return ClipboardIfSupportedDirective;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ClipboardModule = /*#__PURE__*/(() => {
  class ClipboardModule {}
  ClipboardModule.ɵfac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardModule)();
  };
  ClipboardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
    type: ClipboardModule
  });
  ClipboardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD]
  });
  return ClipboardModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-clipboard
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-clipboard.mjs.map

/***/ })

}]);