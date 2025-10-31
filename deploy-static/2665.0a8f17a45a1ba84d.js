"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2665],{

/***/ 13706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ StatusBadgeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);




let StatusBadgeModule = /*#__PURE__*/(() => {
  class StatusBadgeModule {
    static {
      this.ɵfac = function StatusBadgeModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || StatusBadgeModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: StatusBadgeModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .iEK]
      });
    }
  }
  return StatusBadgeModule;
})();

/***/ }),

/***/ 15624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ ApprovalsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20433);
/* harmony import */ var _approvals_approvals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);







const routes = [{
  path: '',
  component: _approvals_approvals_component__WEBPACK_IMPORTED_MODULE_0__/* .ApprovalsComponent */ .e,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.CAN_APPROVE_TIMESHEET],
      redirectTo: '/pages/employees/timesheets/daily'
    },
    selectors: {
      project: false,
      team: false
    },
    datePicker: {
      unitOfTime: 'month',
      isLockDatePicker: true,
      isSaveDatePicker: true
    }
  },
  resolve: {
    dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .DateRangePickerResolver */ .Q
  }
}];
let ApprovalsRoutingModule = /*#__PURE__*/(() => {
  class ApprovalsRoutingModule {
    static {
      this.ɵfac = function ApprovalsRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ApprovalsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ApprovalsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .iI]
      });
    }
  }
  return ApprovalsRoutingModule;
})();

/***/ }),

/***/ 40793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ ApprovalsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20893);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17785);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87081);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77020);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46915);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(60166);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(32386);
/* harmony import */ var _packages_ui_core_shared_src_lib_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90475);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(95959);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11031);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(33867);
























const _c0 = a0 => ({
  $implicit: a0
});
const _c1 = (a0, a1) => ({
  "border-bottom": a0,
  selected: a1
});
function ApprovalsComponent_ng_template_33_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_33_ng_container_1_Template_div_click_1_listener() {
      const timesheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.userRowSelect(timesheet_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 9)(3, "nb-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_33_ng_container_1_Template_nb_checkbox_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event.stopPropagation());
    })("checkedChange", function ApprovalsComponent_ng_template_33_ng_container_1_Template_nb_checkbox_checkedChange_3_listener($event) {
      const timesheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.toggleCheckbox($event, timesheet_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "ngx-avatar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(22, "ga-status-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const timesheet_r3 = ctx.$implicit;
    const last_r5 = ctx.last;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(23, _c1, !last_r5, timesheet_r3 == null ? null : timesheet_r3.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", timesheet_r3.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("name", timesheet_r3 == null ? null : timesheet_r3.employee == null ? null : timesheet_r3.employee.user == null ? null : timesheet_r3.employee.user.name)("src", timesheet_r3 == null ? null : timesheet_r3.employee == null ? null : timesheet_r3.employee.user == null ? null : timesheet_r3.employee.user.imageUrl)("id", timesheet_r3 == null ? null : timesheet_r3.employee == null ? null : timesheet_r3.employee.id)("employee", timesheet_r3 == null ? null : timesheet_r3.employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 13, timesheet_r3.duration), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(timesheet_r3.keyboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 15, timesheet_r3.startedAt), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 17, timesheet_r3.stoppedAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 19, timesheet_r3.approvedAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 21, timesheet_r3.submittedAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r3.statusMapper(timesheet_r3));
  }
}
function ApprovalsComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ApprovalsComponent_ng_template_33_ng_container_1_Template, 23, 26, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r3.timesheets);
  }
}
function ApprovalsComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "TIMESHEET.NO_DATA.APPROVAL_TIMESHEET"));
  }
}
function ApprovalsComponent_ng_template_36_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 3, "TIMESHEET.BULK_ACTION"))("nbContextMenu", ctx_r3.contextMenus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 5, "TIMESHEET.BULK_ACTION"), " ");
  }
}
function ApprovalsComponent_ng_template_36_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_36_ng_container_2_ng_container_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.submitTimesheet(selectedItem_r7.id, "submit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r3.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "TIMESHEET.SUBMIT_TIMESHEET"), " ");
  }
}
function ApprovalsComponent_ng_template_36_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_36_ng_container_2_ng_container_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.submitTimesheet(selectedItem_r7.id, "unsubmit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r3.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "TIMESHEET.UNSUBMIT_TIMESHEET"), " ");
  }
}
function ApprovalsComponent_ng_template_36_ng_container_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_36_ng_container_2_ng_container_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.updateStatus(selectedItem_r7.id, ctx_r3.TimesheetStatus.APPROVED));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r3.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "TIMESHEET.APPROVE"), " ");
  }
}
function ApprovalsComponent_ng_template_36_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_36_ng_container_2_ng_container_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.updateStatus(selectedItem_r7.id, ctx_r3.TimesheetStatus.DENIED));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r3.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "TIMESHEET.DENY"), " ");
  }
}
function ApprovalsComponent_ng_template_36_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_36_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.redirectToView(selectedItem_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, ApprovalsComponent_ng_template_36_ng_container_2_ng_container_5_Template, 5, 4, "ng-container", 25)(6, ApprovalsComponent_ng_template_36_ng_container_2_ng_container_6_Template, 5, 4, "ng-container", 25)(7, ApprovalsComponent_ng_template_36_ng_container_2_ng_container_7_Template, 5, 4, "ng-container", 25)(8, ApprovalsComponent_ng_template_36_ng_container_2_ng_container_8_Template, 5, 4, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r3.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 6, "TIMESHEET.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !selectedItem_r7.submittedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", selectedItem_r7.submittedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", selectedItem_r7.status != ctx_r3.TimesheetStatus.APPROVED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", selectedItem_r7.status != ctx_r3.TimesheetStatus.DENIED);
  }
}
function ApprovalsComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ApprovalsComponent_ng_template_36_ng_container_1_Template, 6, 7, "ng-container", 25)(2, ApprovalsComponent_ng_template_36_ng_container_2_Template, 9, 8, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r3.isCheckboxSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", selectedItem_r7);
  }
}
let ApprovalsComponent = class ApprovalsComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .BaseSelectorFilterComponent */ .U {
  constructor(timesheetService, store, router, toastrService, nbMenuService, translateService, dateRangePickerBuilderService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.timesheetService = timesheetService;
    this.store = store;
    this.router = router;
    this.toastrService = toastrService;
    this.nbMenuService = nbMenuService;
    this.translateService = translateService;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.timesheets = [];
    this.contextMenus = [];
    this.loading = false;
    this.allChecked = false;
    this.disableButton = true;
    this.TimesheetStatus = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW;
    this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
    this.statusMapper = timesheet => {
      let badgeClass;
      const status = timesheet.status;
      if (status) {
        switch (status) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.APPROVED:
            badgeClass = 'success';
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.DENIED:
            badgeClass = 'danger';
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.PENDING:
            badgeClass = 'primary';
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.DRAFT:
            badgeClass = 'warning';
            break;
          default:
            badgeClass = 'primary';
            break;
        }
        return {
          text: status,
          class: badgeClass
        };
      }
    };
  }
  ngOnInit() {
    this._applyTranslationOnChange();
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.getTimeSheets()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.allChecked = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    this.nbMenuService.onItemClick().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(({
      tag
    }) => tag === 'timesheet-bulk-action'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .T)(({
      item: {
        data
      }
    }) => data.status), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(status => this.bulkAction(status))).subscribe();
  }
  ngAfterViewInit() {
    this._createContextMenus();
  }
  getTimeSheets() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
      if (!_this.organization) {
        return;
      }
      _this.loading = true;
      try {
        _this.timesheets = yield _this.timesheetService.getTimeSheets({
          ..._this.getFilterRequest(_this.request),
          relations: [...(_this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .PermissionsEnum */ .U.CHANGE_SELECTED_EMPLOYEE) ? ['employee', 'employee.user'] : [])]
        });
      } catch (error) {
        console.log('Error while getting timesheets for selected date range');
      } finally {
        _this.loading = false;
      }
    })();
  }
  /**
   * Update timesheets status
   *
   * @param timesheetIds
   * @param status
   * @returns
   */
  updateStatus(timesheetIds, status) {
    if (!this.organization || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .isEmpty */ .Im)(timesheetIds)) {
      return;
    }
    const {
      id: organizationId
    } = this.organization;
    const {
      tenantId
    } = this.store.user;
    const request = {
      ids: this.prepareTimesheetIds(timesheetIds),
      status,
      organizationId,
      tenantId
    };
    this.timesheetService.updateStatus(request).then(() => {
      if (status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.APPROVED) {
        this.toastrService.success('TIMESHEET.APPROVE_SUCCESS');
      } else if (status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.DENIED) {
        this.toastrService.success('TIMESHEET.DENIED_SUCCESS');
      }
    }).finally(() => {
      this.subject$.next(true);
    });
  }
  submitTimesheet(timesheetIds, status) {
    if (!this.organization || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .isEmpty */ .Im)(timesheetIds)) {
      return;
    }
    const {
      id: organizationId
    } = this.organization;
    const {
      tenantId
    } = this.store.user;
    const request = {
      ids: this.prepareTimesheetIds(timesheetIds),
      status,
      organizationId,
      tenantId
    };
    this.timesheetService.submitTimesheet(request).then(() => {
      if (status === 'submit') {
        this.toastrService.success('TIMESHEET.SUBMIT_SUCCESS');
      } else if (status === 'unsubmit') {
        this.toastrService.success('TIMESHEET.UNSUBMIT_SUCCESS');
      }
    }).finally(() => {
      this.subject$.next(true);
    });
  }
  /**
   * Bulk action for APPROVED/DENIED timesheet
   *
   * @param status
   */
  bulkAction(status) {
    const timeSheetIds = this.timesheets.filter(timesheet => timesheet['checked']).map(timesheet => timesheet.id);
    if (status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.APPROVED) {
      this.updateStatus(timeSheetIds, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.APPROVED);
    }
    if (status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.DENIED) {
      this.updateStatus(timeSheetIds, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.DENIED);
    }
  }
  /**
   * Redirect to timesheet inner page
   *
   * @param timesheet
   * @returns
   */
  redirectToView(timesheet) {
    if (!timesheet) {
      return;
    }
    this.router.navigate(['/pages/employees/timesheets', timesheet.id]);
  }
  /**
   * Checked/Un-Checked Checkbox
   *
   * @param checked
   */
  checkedAll(checked) {
    this.allChecked = checked;
    this.timesheets.forEach(timesheet => timesheet.checked = checked);
  }
  /**
   * Is Indeterminate
   *
   * @returns
   */
  isIndeterminate() {
    const c1 = this.timesheets.filter(t => t.checked).length > 0;
    return c1 && !this.allChecked;
  }
  /**
   * Checkbox Toggle For Every Timesheet
   *
   * @param checked
   * @param timesheet
   */
  toggleCheckbox(checked, timesheet) {
    timesheet['checked'] = checked;
    this.allChecked = this.timesheets.every(t => t.checked);
  }
  /**
   * Translate context menus
   */
  _applyTranslationOnChange() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._createContextMenus()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Create bulk action context menus
   */
  _createContextMenus() {
    this.contextMenus = [{
      title: this.getTranslation('TIMESHEET.APPROVE'),
      data: {
        status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.APPROVED
      }
    }, {
      title: this.getTranslation('TIMESHEET.DENY'),
      data: {
        status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TimesheetStatus */ .dW.DENIED
      }
    }];
  }
  selectTimesheet({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedTimesheet = {
      isSelected: isSelected,
      data: isSelected ? data : null
    };
  }
  /*
   * Clear selected item
   */
  _clearItem() {
    this.selectTimesheet({
      isSelected: false,
      data: null
    });
  }
  /**
   * User Select Single Row
   *
   * @param timesheet
   */
  userRowSelect(timesheet) {
    // if row is already selected, deselect it.
    if (timesheet['isSelected']) {
      timesheet['isSelected'] = false;
      this.selectTimesheet({
        isSelected: timesheet['isSelected'],
        data: null
      });
    } else {
      // find the row which was previously selected.
      const isRowSelected = this.timesheets.find(item => item['isSelected'] === true);
      if (!!isRowSelected) {
        // if row found successfully, mark that row as deselected
        isRowSelected['isSelected'] = false;
      }
      // mark new row as selected
      timesheet['isSelected'] = true;
      this.selectTimesheet({
        isSelected: timesheet['isSelected'],
        data: timesheet
      });
    }
  }
  /**
   * Checks if at least one timesheet in the list is selected.
   * @returns True if a timesheet is selected, otherwise false.
   */
  isRowSelected() {
    return !!this.timesheets.find(timesheet => timesheet['isSelected'] === true);
  }
  /**
   * Checks if at least one timesheet in the list has its checkbox selected.
   * @returns True if a timesheet's checkbox is selected, otherwise false.
   */
  isCheckboxSelected() {
    return !!this.timesheets.find(timesheet => timesheet['checked'] === true);
  }
  /**
   * Prepare timesheets ids payload
   *
   * @param timesheetIds
   * @returns
   */
  prepareTimesheetIds(timesheetIds) {
    return typeof timesheetIds === 'string' ? [timesheetIds] : timesheetIds;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ApprovalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApprovalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TimesheetService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbMenuService */ .BgA), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ApprovalsComponent,
      selectors: [["ngx-timesheet-approvals"]],
      viewQuery: function ApprovalsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .GauzyFiltersComponent */ .n, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.gauzyFiltersComponent = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 38,
      vars: 34,
      consts: [["notFound", ""], ["actionButtons", ""], [1, "p-0"], [1, "gauzy-action"], [3, "hasLayoutSelector", "isDisable"], ["buttonTemplate", "", 3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "approval-container"], [1, "custom-header-container"], [1, "row", "custom-header", "m-0", "align-items-center"], [1, "col-auto"], ["status", "basic", 3, "checkedChange", "checked", "indeterminate"], [1, "col-2"], [1, "col"], [1, "col-3"], [1, "col-1"], [1, "custom-body", "approval", 3, "nbSpinner", "nbSpinnerSize", "nbSpinnerStatus"], [3, "ngIf", "ngIfElse"], [1, "content-approval"], [4, "ngFor", "ngForOf"], [1, "row", "item", "m-0", "py-3", "align-items-center", 3, "click", "ngClass"], ["status", "basic", 3, "click", "checkedChange", "checked"], [1, "report-table", 3, "name", "src", "id", "employee"], [3, "value"], [3, "message"], [1, "actions"], [4, "ngIf"], ["outline", "", "nbButton", "", "status", "primary", "nbContextMenuTag", "timesheet-bulk-action", 1, "action", 3, "title", "nbContextMenu"], ["icon", "chevron-down-outline"], ["status", "basic", "nbButton", "", "size", "small", 1, "action", "secondary", 3, "click", "disabled"], ["icon", "edit-outline"], ["status", "basic", "nbButton", "", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "email-outline"], ["nbButton", "", "status", "basic", "nbButton", "", "size", "small", 1, "action", "success", 3, "click", "disabled"], ["icon", "checkmark-circle-2-outline"], ["nbButton", "", "status", "basic", "nbButton", "", "size", "small", 1, "action", "warning", 3, "click", "disabled"], ["icon", "close-outline"]],
      template: function ApprovalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 2)(2, "div", 3)(3, "ngx-gauzy-button-action", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body")(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "nb-checkbox", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function ApprovalsComponent_Template_nb_checkbox_checkedChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.checkedAll($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(23, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(32, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(33, ApprovalsComponent_ng_template_33_Template, 2, 1, "ng-template", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(34, ApprovalsComponent_ng_template_34_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(36, ApprovalsComponent_ng_template_36_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const notFound_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(35);
          const actionButtons_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasLayoutSelector", false)("isDisable", ctx.isRowSelected() ? false : !ctx.isCheckboxSelected());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", actionButtons_r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(32, _c0, ctx.selectedTimesheet == null ? null : ctx.selectedTimesheet.data));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.allChecked)("indeterminate", ctx.isIndeterminate());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 18, "TIMESHEET.EMPLOYEE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 20, "TIMESHEET.TOTAL_TIME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 22, "TIMESHEET.ACTIVITIES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 24, "TIMESHEET.DURATION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 26, "TIMESHEET.APPROVED_AT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(28, 28, "TIMESHEET.SUBMITTED_AT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(31, 30, "TIMESHEET.STATUS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading)("nbSpinnerSize", "giant")("nbSpinnerStatus", "primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.timesheets == null ? null : ctx.timesheets.length) > 0)("ngIfElse", notFound_r12);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbContextMenuDirective */ .yUn, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbSpinnerDirective */ .zwc, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgTemplateOutlet */ .T3, _packages_ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_21__/* .AvatarComponent */ .f, _packages_ui_core_shared_src_lib_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_22__/* .StatusBadgeComponent */ .v, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_23__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_24__/* .NoDataMessageComponent */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9, _packages_ui_core_shared_src_lib_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_25__/* .DateFormatPipe */ .a, _packages_ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_26__/* .DurationFormatPipe */ .i],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   ngx-gauzy-filters[_ngcontent-%COMP%] {\n  margin: 0 -2rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 21.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .custom-calendar[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.75rem;\n  background-color: var(--gauzy-card-2);\n  padding: 6px 8px;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n\n[_nghost-%COMP%]   .filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n[_nghost-%COMP%]   .week-date-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .week-date-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n[_nghost-%COMP%]   .weekly-logs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .weekly-logs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n[_nghost-%COMP%]   .weekly-logs-table[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   .custom-header[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n  background: var(--gauzy-card-4);\n  border-radius: var(--border-radius);\n  padding: 10px;\n  padding-left: 12px;\n  flex-wrap: nowrap;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-header-container[_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-header-container[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  margin-top: 6px;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n  border-radius: var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-right: 12px;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(126, 126, 143, 0.1) !important;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   [nbButton].appearance-outline.status-primary[_ngcontent-%COMP%] {\n  border: none;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-3);\n  box-shadow: -6px 0 0 0 rgba(48, 48, 120, 0.2);\n  border-radius: var(--border-radius) 0 0 var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]   .selected.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n[_nghost-%COMP%]   nb-checkbox[_ngcontent-%COMP%]     .custom-checkbox {\n  border-width: 2px;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-primary[_ngcontent-%COMP%] {\n  border-style: none;\n}\n[_nghost-%COMP%]   [nbButton].appearance-ghost.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-4);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  border: none;\n}\n[_nghost-%COMP%]   .gauzy-action[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.75rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gauzy-action[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gauzy-action[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n\n@media screen and (max-width: 1280px) {\n  .content[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 8px 8px;\n    font-size: 10px;\n  }\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  border-radius: 0 nb-theme(border-radius) nb-theme(border-radius) nb-theme(border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .gauzy-button-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .log-container[_ngcontent-%COMP%] {\n  height: calc(100% - 50px);\n}\n[_nghost-%COMP%]   .log[_ngcontent-%COMP%] {\n  width: fit-content;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 3px 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: nb-theme(border-radius);\n  background: var(--gauzy-sidebar-background-3);\n}\n[_nghost-%COMP%]   .source-version[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5%;\n}\n\n[_nghost-%COMP%]   .filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n[_nghost-%COMP%]   ga-status-badge[_ngcontent-%COMP%]     .badge {\n  width: fit-content;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .transition-container span {\n  background: unset;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: unset;\n}\n[dir=ltr]   [_nghost-%COMP%]   .custom-header-container[_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0 0 !important;\n}\n[dir=rtl]   [_nghost-%COMP%]   .custom-header-container[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem !important;\n}\n[_nghost-%COMP%]   .custom-body.approval[_ngcontent-%COMP%] {\n  height: calc(100vh - 21.75rem) !important;\n  width: 100%;\n  background: unset;\n  background-color: unset !important;\n}\n[dir=ltr]   [_nghost-%COMP%]   .custom-body.approval[_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0 0 !important;\n}\n[dir=rtl]   [_nghost-%COMP%]   .custom-body.approval[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem !important;\n}\n[_nghost-%COMP%]   .custom-body.approval[_ngcontent-%COMP%]   .content-approval[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n  border-radius: var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   .custom-body.approval[_ngcontent-%COMP%]   .content-approval[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .custom-body.approval[_ngcontent-%COMP%]   .content-approval[_ngcontent-%COMP%] {\n  padding-right: 12px;\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.menu-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}"]
    });
  }
};
ApprovalsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_27__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_27__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TimesheetService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ .t, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbMenuService */ .BgA, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .DateRangePickerBuilderService */ .i7, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .TimeZoneService */ .F])], ApprovalsComponent);


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

/***/ 90475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ StatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);


let StatusBadgeComponent = /*#__PURE__*/(() => {
  class StatusBadgeComponent {
    constructor() {}
    ngOnInit() {
      if (this.value && this.value.text) {
        if (this.layout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          if (typeof this.value === 'object') {
            this.text = this.value['text'];
            this.badgeClass = 'badge badge-' + this.value['class'];
          } else {
            this.text = this.value;
          }
        } else {
          this.text = this.value['text'];
          this.badgeClass = 'badge badge-' + this.value['class'];
        }
      }
    }
    static {
      this.ɵfac = function StatusBadgeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || StatusBadgeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: StatusBadgeComponent,
        selectors: [["ga-status-badge"]],
        inputs: {
          value: "value",
          layout: "layout"
        },
        standalone: false,
        decls: 1,
        vars: 3,
        consts: [[3, "innerHtml"]],
        template: function StatusBadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassMap"] */ .HbH(ctx.badgeClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", ctx.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
          }
        },
        styles: ["div[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  align-content: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 23px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"]
      });
    }
  }
  return StatusBadgeComponent;
})();

/***/ }),

/***/ 95046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApprovalsModule: () => (/* binding */ ApprovalsModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79415);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13706);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98722);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _approvals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);







let ApprovalsModule = /*#__PURE__*/(() => {
  class ApprovalsModule {
    static {
      this.ɵfac = function ApprovalsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ApprovalsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ApprovalsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbContextMenuModule */ .DkL, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogModule */ .nZv, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbPopoverModule */ .Ofb, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSpinnerModule */ .gYs, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), ngx_moment__WEBPACK_IMPORTED_MODULE_4__/* .MomentModule */ .Js, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G, _approvals_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ApprovalsRoutingModule */ .j, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .StatusBadgeModule */ .u, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .SmartDataViewLayoutModule */ .H]
      });
    }
  }
  return ApprovalsModule;
})();

/***/ })

}]);