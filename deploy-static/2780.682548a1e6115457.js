"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2780],{

/***/ 18814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ AllReportComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64411);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17785);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(908);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10936);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71466);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);


















const _c0 = a0 => ["/pages/reports", a0];
function AllReportComponent_div_7_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const report_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("src", report_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function AllReportComponent_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 8)(1, "nb-card", 9)(2, "nb-card-header")(3, "div", 10)(4, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "div", 12)(7, "nb-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function AllReportComponent_div_7_div_6_Template_nb_toggle_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function AllReportComponent_div_7_div_6_Template_nb_toggle_ngModelChange_7_listener($event) {
      const report_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtwoWayBindingSet"] */ .DH7(report_r2.showInMenu, $event) || (report_r2.showInMenu = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("checkedChange", function AllReportComponent_div_7_div_6_Template_nb_toggle_checkedChange_7_listener($event) {
      const report_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.updateShowInMenu($event, report_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body", 14)(9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(11, AllReportComponent_div_7_div_6_div_11_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const report_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(report_r2 == null ? null : report_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", report_r2.showInMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(report_r2 == null ? null : report_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", report_r2.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(8, _c0, report_r2.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(14, 6, "BUTTONS.VIEW_REPORT"), " ");
  }
}
function AllReportComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "h5", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(6, AllReportComponent_div_7_div_6_Template, 15, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const reportCategory_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵclassMapInterpolate1"] */ .ZvI("fa ", reportCategory_r4.iconClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", reportCategory_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngForOf", reportCategory_r4.reports);
  }
}
let AllReportComponent = class AllReportComponent {
  constructor(reportService, store) {
    this.reportService = reportService;
    this.store = store;
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U;
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.getReports()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Updates the 'show in menu' status of a report.
   *
   * @param isEnabled Indicates whether the report should be shown in the menu.
   * @param report The report to update.
   */
  updateShowInMenu(isEnabled, report) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      try {
        const {
          id: organizationId,
          tenantId
        } = _this.organization;
        yield _this.reportService.updateReport({
          reportId: report.id,
          organizationId,
          tenantId,
          isEnabled
        });
        yield _this.reportService.getReportMenuItems({
          organizationId,
          tenantId
        });
      } catch (error) {
        console.error(`Error occurred while updating 'show in menu' status: ${error.message}`);
      }
    })();
  }
  /**
   * Retrieves all reports for the current organization.
   *
   * @returns A promise that resolves when reports are successfully retrieved.
   */
  getReports() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      if (!_this2.organization) {
        return false;
      }
      try {
        _this2.loading = true;
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const request = {
          organizationId,
          tenantId,
          relations: ['category']
        };
        const {
          items = []
        } = yield _this2.reportService.getReports(request);
        const categories = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .cy)(items).groupBy('categoryId');
        _this2.reportCategories = categories.map(reports => ({
          ...reports[0].category,
          reports
        })).value();
      } catch (error) {
        console.log('Error while retrieving report with category', error);
      } finally {
        _this2.loading = false;
      }
    })();
  }
  static {
    this.ɵfac = function AllReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AllReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_report_service__WEBPACK_IMPORTED_MODULE_1__/* .ReportService */ .GN), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
      type: AllReportComponent,
      selectors: [["ga-all-report"]],
      standalone: false,
      decls: 8,
      vars: 6,
      consts: [["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "card-scroll", 3, "nbSpinner"], [3, "allowEmployee"], [1, "content"], [4, "ngFor", "ngForOf"], [1, "report-category-name"], [1, "category-icon", "mr-2"], [1, "card-grid"], ["class", "mb-0 card custom-view-report", 4, "ngFor", "ngForOf"], [1, "mb-0", "card", "custom-view-report"], [1, "border-0", "m-0", "card-nb"], [1, "row", "align-items-center"], [1, "col", "report-name"], [1, "col-auto"], [3, "click", "ngModelChange", "checkedChange", "ngModel"], [1, "custom-view-report-content"], [1, "caption"], ["class", "image-container", 4, "ngIf"], ["nbButton", "", "status", "primary", 1, "custom-button", 3, "routerLink"], [1, "image-container"], [3, "src"]],
      template: function AllReportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "h4")(3, "ngx-header-title", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(7, AllReportComponent_div_7_Template, 7, 5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "REPORT_PAGE.ALL_REPORTS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.reportCategories);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterLink */ .Wk, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgModel */ .vS, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_12__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_13__/* .ImgDirective */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbToggleComponent */ .YF2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .YP2, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .category-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n}\n[_nghost-%COMP%]   .card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  column-gap: 1rem;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .caption[_ngcontent-%COMP%] {\n  height: 27px;\n}\n[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  object-fit: cover;\n  height: 183px;\n}\n[_nghost-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 450px;\n}\n\n.custom-view-report[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  border: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  border-radius: var(--border-radius);\n}\n.custom-view-report[_ngcontent-%COMP%]   .custom-button[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 120px;\n  position: absolute;\n  left: 50%;\n  margin-left: -60px;\n  top: 50%;\n  margin-top: -20px;\n  visibility: hidden;\n}\n.custom-view-report[_ngcontent-%COMP%]:hover {\n  border-radius: var(--border-radius);\n}\n.custom-view-report[_ngcontent-%COMP%]:hover   .image-container[_ngcontent-%COMP%], .custom-view-report[_ngcontent-%COMP%]:hover   .caption[_ngcontent-%COMP%] {\n  opacity: 30%;\n}\n.custom-view-report[_ngcontent-%COMP%]:hover   .custom-button[_ngcontent-%COMP%] {\n  opacity: 100%;\n  transition: ease-out 0.5s;\n  z-index: 10;\n  visibility: visible;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  flex-direction: column;\n  display: flex;\n  gap: 1rem;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.report-category-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n\n.report-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n}"]
    });
  }
};
AllReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .Sn)("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_1__/* .ReportService */ .GN, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il])], AllReportComponent);


/***/ }),

/***/ 40229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ AllReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(908);
/* harmony import */ var _all_report_all_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);




const routes = [{
  path: '',
  component: _all_report_all_report_component__WEBPACK_IMPORTED_MODULE_0__/* .AllReportComponent */ .l
}];
let AllReportRoutingModule = /*#__PURE__*/(() => {
  class AllReportRoutingModule {
    static {
      this.ɵfac = function AllReportRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AllReportRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: AllReportRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .iI]
      });
    }
  }
  return AllReportRoutingModule;
})();

/***/ }),

/***/ 52780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllReportModule: () => (/* binding */ AllReportModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38834);
/* harmony import */ var _all_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);






let AllReportModule = /*#__PURE__*/(() => {
  class AllReportModule {
    static {
      this.ɵfac = function AllReportModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AllReportModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: AllReportModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_all_report_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .AllReportRoutingModule */ .o, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .SharedModule */ .G, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N]
      });
    }
  }
  return AllReportModule;
})();

/***/ })

}]);